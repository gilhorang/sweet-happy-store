(()=>{var Np=0,Ru=1,Up=2;var Zs=1,Op=2,$r=3,bi=0,gn=1,Ft=2,hn=0,Yr=1,qn=2,Cu=3,Pu=4,cc=5;var ti=100,Fp=101,Bp=102,zp=103,kp=104,Js=200,Hp=201,Gp=202,Vp=203,Iu=204,Lu=205,fo=206,Wp=207,po=208,Xp=209,qp=210,$p=211,Yp=212,Kp=213,jp=214,Dl=0,Nl=1,Ul=2,Ir=3,Ol=4,Fl=5,Bl=6,zl=7,hc=0,Zp=1,Jp=2,Ti=0,mo=1,go=2,xo=3,_o=4,vo=5,yo=6,Qs=7,uu="attached",Qp="detached",Du=300,er=301,Kr=302,uc=303,fc=304,bn=1e3,Zn=1001,Lr=1002,Nt=1003,dc=1004;var tr=1005;var nn=1006,jr=1007;var ni=1008;var Tn=1009,Nu=1010,Uu=1011,Zr=1012,pc=1013,ui=1014,$n=1015,Ht=1016,mc=1017,gc=1018,ns=1020,Ou=35902,Fu=35899,Bu=1021,zu=1022,On=1023,Wi=1026,fi=1027,xc=1028,_c=1029,ws=1030,vc=1031;var yc=1033,Mo=33776,So=33777,bo=33778,To=33779,Mc=35840,Sc=35841,bc=35842,Tc=35843,Ec=36196,wc=37492,Ac=37496,Rc=37488,Cc=37489,Eo=37490,Pc=37491,Ic=37808,Lc=37809,Dc=37810,Nc=37811,Uc=37812,Oc=37813,Fc=37814,Bc=37815,zc=37816,kc=37817,Hc=37818,Gc=37819,Vc=37820,Wc=37821,Xc=36492,qc=36494,$c=36495,Yc=36283,Kc=36284,wo=36285,jc=36286;var ks=2300,Hs=2301,Il=2302,fu=2303,du=2400,pu=2401,mu=2402,em=2500;var ku=0,Ao=1,Jr=2,tm=3200;var Qr=0,nm=1,is="",Rt="srgb",Cn="srgb-linear",Ia="linear",Mt="srgb";var Ll=7680;var im=519,sm=512,rm=513,am=514,Hu=515,om=516,lm=517,Gu=518,Vu=519,Wu=35044;var Xu="300 es",Jn=2e3,Dr=2001;function eg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function tg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cm(){let i=Nr("canvas");return i.style.display="block",i}var Bd={},Ur=null;function La(...i){let e="THREE."+i.shift();Ur?Ur("log",e,...i):console.log(e,...i)}function hm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=hm(i);let e="THREE."+i.shift();if(Ur)Ur("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=hm(i);let e="THREE."+i.shift();if(Ur)Ur("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function zs(...i){let e=i.join(" ");e in Bd||(Bd[e]=!0,$e(...i))}function um(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var fm={[Dl]:Dl,[Ul]:Bl,[Ol]:Ol,[Ir]:Fl,[Nl]:Nl,[Bl]:Ul,[zl]:zl,[Fl]:Ir},vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zd=1234567,Aa=Math.PI/180,Gs=180/Math.PI;function di(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function qu(i,e){return(i%e+e)%e}function ng(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ig(i,e,t){return i!==e?(t-i)/(e-i):0}function Ra(i,e,t){return(1-t)*i+t*e}function sg(i,e,t,n){return Ra(i,e,1-Math.exp(-t*n))}function rg(i,e=1){return e-Math.abs(qu(i,e*2)-e)}function ag(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function lg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function cg(i,e){return i+Math.random()*(e-i)}function hg(i){return i*(.5-Math.random())}function ug(i){i!==void 0&&(zd=i);let e=zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fg(i){return i*Aa}function dg(i){return i*Gs}function pg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function mg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $u(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Yu(i,e){if(e.constructor===Float32Array)return i;let t=Zc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Ku(i,e){if(e.constructor===Float32Array)return i;let t=Zc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ei={DEG2RAD:Aa,RAD2DEG:Gs,generateUUID:di,clamp:ut,euclideanModulo:qu,mapLinear:ng,inverseLerp:ig,lerp:Ra,damp:sg,pingpong:rg,smoothstep:ag,smootherstep:og,randInt:lg,randFloat:cg,randFloatSpread:hg,seededRandom:ug,degToRad:fg,radToDeg:dg,isPowerOfTwo:pg,ceilPowerOfTwo:mg,floorPowerOfTwo:$u,setQuaternionFromProperEuler:gg,normalize:Ku,denormalize:Yu},tf=class tf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tf.prototype.isVector2=!0;var pe=tf,Wn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==f||c!==p||h!==g){let m=l*f+c*p+h*g+u*y;m<0&&(f=-f,p=-p,g=-g,y=-y,m=-m);let x=1-o;if(m<.9995){let _=Math.acos(m),b=Math.sin(_);x=Math.sin(x*_)/b,o=Math.sin(o*_)/b,l=l*x+f*o,c=c*x+p*o,h=h*x+g*o,u=u*x+y*o}else{l=l*x+f*o,c=c*x+p*o,h=h*x+g*o,u=u*x+y*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-o*p,e[t+2]=c*g+h*p+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nf=class nf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fh.copy(this).projectOnVector(e),this.sub(Fh)}reflect(e){return this.sub(Fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nf.prototype.isVector3=!0;var B=nf,Fh=new B,kd=new Wn,sf=class sf{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],y=s[0],m=s[3],x=s[6],_=s[1],b=s[4],M=s[7],w=s[2],S=s[5],d=s[8];return r[0]=a*y+o*_+l*w,r[3]=a*m+o*b+l*S,r[6]=a*x+o*M+l*d,r[1]=c*y+h*_+u*w,r[4]=c*m+h*b+u*S,r[7]=c*x+h*M+u*d,r[2]=f*y+p*_+g*w,r[5]=f*m+p*b+g*S,r[8]=f*x+p*M+g*d,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=f*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bh.makeScale(e,t)),this}rotate(e){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bh.makeRotation(-e)),this}translate(e,t){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sf.prototype.isMatrix3=!0;var st=sf,Bh=new st,Hd=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gd=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xg(){let i={enabled:!0,workingColorSpace:Cn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?Ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cn]:{primaries:e,whitePoint:n,transfer:Ia,toXYZ:Hd,fromXYZ:Gd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Hd,fromXYZ:Gd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}var ct=xg();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fr,kl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=Nr("canvas")),fr.width=e.width,fr.height=e.height;let s=fr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_g=0,Or=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zh(s[a].image)):r.push(zh(s[a]))}else r=zh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function zh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?kl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var vg=0,kh=new B,Kt=class i extends vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Zn,s=Zn,r=nn,a=ni,o=On,l=Tn,c=i.DEFAULT_ANISOTROPY,h=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=di(),this.name="",this.source=new Or(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(kh).x}get height(){return this.source.getSize(kh).y}get depth(){return this.source.getSize(kh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bn:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bn:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Du;Kt.DEFAULT_ANISOTROPY=1;var rf=class rf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],y=l[2],m=l[6],x=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(p+1)/2,w=(x+1)/2,S=(h+f)/4,d=(u+y)/4,v=(g+m)/4;return b>M&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=d/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=v/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=d/r,s=v/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-y)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rf.prototype.isVector4=!0;var St=rf,Hl=class extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Kt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Or(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ut=class extends Hl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Da=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Gl=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var lc=class lc{constructor(e,t,n,s,r,a,o,l,c,h,u,f,p,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,p,g,y,m)}set(e,t,n,s,r,a,o,l,c,h,u,f,p,g,y,m){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=f,x[3]=p,x[7]=g,x[11]=y,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),a=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,y=c*u;t[0]=f+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,y=c*u;t[0]=f-y*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+y,t[1]=l*u,t[5]=y*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-y*u}else if(e.order==="XZY"){let f=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+y,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yg,e,Mg)}lookAt(e,t,n){let s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),hs.crossVectors(n,Hn),hs.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),hs.crossVectors(n,Hn)),hs.normalize(),tl.crossVectors(Hn,hs),s[0]=hs.x,s[4]=tl.x,s[8]=Hn.x,s[1]=hs.y,s[5]=tl.y,s[9]=Hn.y,s[2]=hs.z,s[6]=tl.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],y=n[6],m=n[10],x=n[14],_=n[3],b=n[7],M=n[11],w=n[15],S=s[0],d=s[4],v=s[8],I=s[12],E=s[1],C=s[5],R=s[9],U=s[13],P=s[2],D=s[6],G=s[10],N=s[14],q=s[3],k=s[7],O=s[11],z=s[15];return r[0]=a*S+o*E+l*P+c*q,r[4]=a*d+o*C+l*D+c*k,r[8]=a*v+o*R+l*G+c*O,r[12]=a*I+o*U+l*N+c*z,r[1]=h*S+u*E+f*P+p*q,r[5]=h*d+u*C+f*D+p*k,r[9]=h*v+u*R+f*G+p*O,r[13]=h*I+u*U+f*N+p*z,r[2]=g*S+y*E+m*P+x*q,r[6]=g*d+y*C+m*D+x*k,r[10]=g*v+y*R+m*G+x*O,r[14]=g*I+y*U+m*N+x*z,r[3]=_*S+b*E+M*P+w*q,r[7]=_*d+b*C+M*D+w*k,r[11]=_*v+b*R+M*G+w*O,r[15]=_*I+b*U+M*N+w*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],y=e[7],m=e[11],x=e[15],_=l*p-c*f,b=o*p-c*u,M=o*f-l*u,w=a*p-c*h,S=a*f-l*h,d=a*u-o*h;return t*(y*_-m*b+x*M)-n*(g*_-m*w+x*S)+s*(g*b-y*w+x*d)-r*(g*M-y*S+m*d)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],y=e[13],m=e[14],x=e[15],_=t*o-n*a,b=t*l-s*a,M=t*c-r*a,w=n*l-s*o,S=n*c-r*o,d=s*c-r*l,v=h*y-u*g,I=h*m-f*g,E=h*x-p*g,C=u*m-f*y,R=u*x-p*y,U=f*x-p*m,P=_*U-b*R+M*C+w*E-S*I+d*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return e[0]=(o*U-l*R+c*C)*D,e[1]=(s*R-n*U-r*C)*D,e[2]=(y*d-m*S+x*w)*D,e[3]=(f*S-u*d-p*w)*D,e[4]=(l*E-a*U-c*I)*D,e[5]=(t*U-s*E+r*I)*D,e[6]=(m*M-g*d-x*b)*D,e[7]=(h*d-f*M+p*b)*D,e[8]=(a*R-o*E+c*v)*D,e[9]=(n*E-t*R-r*v)*D,e[10]=(g*S-y*M+x*_)*D,e[11]=(u*M-h*S-p*_)*D,e[12]=(o*I-a*C-l*v)*D,e[13]=(t*C-n*I+s*v)*D,e[14]=(y*b-g*w-m*_)*D,e[15]=(h*w-u*b+f*_)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,y=a*h,m=a*u,x=o*u,_=l*c,b=l*h,M=l*u,w=n.x,S=n.y,d=n.z;return s[0]=(1-(y+x))*w,s[1]=(p+M)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(p-M)*S,s[5]=(1-(f+x))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+b)*d,s[9]=(m-_)*d,s[10]=(1-(f+y))*d,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=dr.set(s[0],s[1],s[2]).length(),o=dr.set(s[4],s[5],s[6]).length(),l=dr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let c=1/a,h=1/o,u=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,t.setFromRotationMatrix(oi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Jn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Jn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Dr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Jn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Jn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Dr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};lc.prototype.isMatrix4=!0;var Ye=lc,dr=new B,oi=new Ye,yg=new B(0,0,0),Mg=new B(1,1,1),hs=new B,tl=new B,Hn=new B,Vd=new Ye,Wd=new Wn,yi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yi.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Sg=0,Xd=new B,pr=new Wn,Oi=new Ye,nl=new B,pa=new B,bg=new B,Tg=new Wn,qd=new B(1,0,0),$d=new B(0,1,0),Yd=new B(0,0,1),Kd={type:"added"},Eg={type:"removed"},mr={type:"childadded",child:null},Hh={type:"childremoved",child:null},Lt=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new yi,n=new Wn,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new st}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(qd,e)}rotateY(e){return this.rotateOnAxis($d,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,t){return Xd.copy(e).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qd,e)}translateY(e){return this.translateOnAxis($d,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nl.copy(e):nl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(pa,nl,this.up):Oi.lookAt(nl,pa,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Oi),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kd),mr.child=e,this.dispatchEvent(mr),mr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eg),Hh.child=e,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kd),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,bg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,Tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new B(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},wg={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),x=this._getHandJoint(c,y);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},il={h:0,s:0,l:0};function Gh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=qu(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Gh(a,r,e+1/3),this.g=Gh(a,r,e),this.b=Gh(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=dm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return ct.workingToColorSpace(Sn.copy(this),e),Math.round(ut(Sn.r*255,0,255))*65536+Math.round(ut(Sn.g*255,0,255))*256+Math.round(ut(Sn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Rt){ct.workingToColorSpace(Sn.copy(this),e);let t=Sn.r,n=Sn.g,s=Sn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(il);let n=Ra(us.h,il.h,t),s=Ra(us.s,il.s,t),r=Ra(us.l,il.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Le;Le.NAMES=dm;var Na=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vs=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},li=new B,Fi=new B,Vh=new B,Bi=new B,gr=new B,xr=new B,jd=new B,Wh=new B,Xh=new B,qh=new B,$h=new St,Yh=new St,Kh=new St,Gi=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),li.subVectors(e,t),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){li.subVectors(s,t),Fi.subVectors(n,t),Vh.subVectors(e,t);let a=li.dot(li),o=li.dot(Fi),l=li.dot(Vh),c=Fi.dot(Fi),h=Fi.dot(Vh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return $h.setScalar(0),Yh.setScalar(0),Kh.setScalar(0),$h.fromBufferAttribute(e,t),Yh.fromBufferAttribute(e,n),Kh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector($h,r.x),a.addScaledVector(Yh,r.y),a.addScaledVector(Kh,r.z),a}static isFrontFacing(e,t,n,s){return li.subVectors(n,t),Fi.subVectors(e,t),li.cross(Fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),li.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,n),xr.subVectors(r,n),Wh.subVectors(e,n);let l=gr.dot(Wh),c=xr.dot(Wh);if(l<=0&&c<=0)return t.copy(n);Xh.subVectors(e,s);let h=gr.dot(Xh),u=xr.dot(Xh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(gr,a);qh.subVectors(e,r);let p=gr.dot(qh),g=xr.dot(qh);if(g>=0&&p<=g)return t.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(xr,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return jd.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(jd,o);let x=1/(m+y+f);return a=y*x,o=f*x,t.copy(n).addScaledVector(gr,a).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sl.copy(n.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),rl.subVectors(this.max,ma),_r.subVectors(e.a,ma),vr.subVectors(e.b,ma),yr.subVectors(e.c,ma),fs.subVectors(vr,_r),ds.subVectors(yr,vr),Ns.subVectors(_r,yr);let t=[0,-fs.z,fs.y,0,-ds.z,ds.y,0,-Ns.z,Ns.y,fs.z,0,-fs.x,ds.z,0,-ds.x,Ns.z,0,-Ns.x,-fs.y,fs.x,0,-ds.y,ds.x,0,-Ns.y,Ns.x,0];return!jh(t,_r,vr,yr,rl)||(t=[1,0,0,0,1,0,0,0,1],!jh(t,_r,vr,yr,rl))?!1:(al.crossVectors(fs,ds),t=[al.x,al.y,al.z],jh(t,_r,vr,yr,rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zi=[new B,new B,new B,new B,new B,new B,new B,new B],ci=new B,sl=new pn,_r=new B,vr=new B,yr=new B,fs=new B,ds=new B,Ns=new B,ma=new B,rl=new B,al=new B,Us=new B;function jh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Us.fromArray(i,r);let o=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),h=n.dot(Us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Qt=new B,ol=new pe,Ag=0,qt=class extends vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ag++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wu,this.updateRanges=[],this.gpuType=$n,this.version=0,this._normalizationScale=e!==void 0?Zc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ol.fromBufferAttribute(this,t),ol.applyMatrix3(e),this.setXY(t,ol.x,ol.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Yu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ku(e,this.array)}};var Ua=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Oa=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Rg=new pn,ga=new B,Zh=new B,Nn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Rg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let t=ga.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ga,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Zh)),this.expandByPoint(ga.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Cg=0,jn=new Ye,Jh=new Lt,Mr=new B,Gn=new pn,xa=new pn,cn=new B,At=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eg(e)?Oa:Ua)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Jh.lookAt(e),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];xa.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Gn.min,xa.min),Gn.expandByPoint(cn),cn.addVectors(Gn.max,xa.max),Gn.expandByPoint(cn)):(Gn.expandByPoint(xa.min),Gn.expandByPoint(xa.max))}Gn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)cn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(cn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)cn.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(e,c),cn.add(Mr)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new B,l[I]=new B;let h=new B,u=new B,f=new B,p=new pe,g=new pe,y=new pe,m=new B,x=new B;function _(I,E,C){c[I]=c[E]=c[C]=1,h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,C),p.fromBufferAttribute(r,I),g.fromBufferAttribute(r,E),y.fromBufferAttribute(r,C),u.sub(h),f.sub(h),g.sub(p),y.sub(p);let R=1/(g.x*y.y-y.x*g.y);isFinite(R)&&(m.copy(u).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(R),x.copy(f).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(R),o[I].add(m),o[E].add(m),o[C].add(m),l[I].add(x),l[E].add(x),l[C].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,E=b.length;I<E;++I){let C=b[I],R=C.start,U=C.count;for(let P=R,D=R+U;P<D;P+=3)_(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new B,w=new B,S=new B,d=new B;function v(I){S.fromBufferAttribute(s,I),d.copy(S);let E=o[I];M.copy(E),M.sub(S.multiplyScalar(S.dot(E))).normalize(),w.crossVectors(d,E);let R=w.dot(l[I])<0?-1:1;a.setXYZW(I,M.x,M.y,M.z,R)}for(let I=0,E=n.count;I<E;++I)c[I]&&v(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let x=0;x<h;x++)f[g++]=c[p++]}return new qt(f,h,u)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ws=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wu,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Zd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Zd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Zd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=di()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Rn=new B,gs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Zc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){La("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){La("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Yu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ku(e,this.data.array)}},Qh=new B,Pg=new B,Ig=new st,Vn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Qh.subVectors(n,t).cross(Pg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Qh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ig.getNormalMatrix(e),s=this.coplanarPoint(Qh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Lg=0,mn=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=di(),this.name="",this.type="Material",this.blending=Yr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Lu,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ll,this.stencilZFail=Ll,this.stencilZPass=Ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},zr=class extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,_a=new B,br=new B,Tr=new B,Er=new pe,va=new pe,pm=new Ye,ll=new B,ya=new B,cl=new B,Jd=new pe,eu=new pe,Qd=new pe,Fa=class extends Lt{constructor(e=new zr){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ws(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new gs(n,3,0,!1)),Sr.setAttribute("uv",new gs(n,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new pe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),pm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Tr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;hl(ll.set(-.5,-.5,0),Tr,a,br,s,r),hl(ya.set(.5,-.5,0),Tr,a,br,s,r),hl(cl.set(.5,.5,0),Tr,a,br,s,r),Jd.set(0,0),eu.set(1,0),Qd.set(1,1);let o=e.ray.intersectTriangle(ll,ya,cl,!1,_a);if(o===null&&(hl(ya.set(-.5,.5,0),Tr,a,br,s,r),eu.set(0,1),o=e.ray.intersectTriangle(ll,cl,ya,!1,_a),o===null))return;let l=e.ray.origin.distanceTo(_a);l<e.near||l>e.far||t.push({distance:l,point:_a.clone(),uv:Gi.getInterpolation(_a,ll,ya,cl,Jd,eu,Qd,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function hl(i,e,t,n,s,r){Er.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(va.x=r*Er.x-s*Er.y,va.y=s*Er.x+r*Er.y):va.copy(Er),i.copy(e),i.x+=va.x,i.y+=va.y,i.applyMatrix4(pm)}var ki=new B,tu=new B,ul=new B,fl=new B,xs=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){tu.copy(e).add(t).multiplyScalar(.5),ul.copy(t).sub(e).normalize(),fl.copy(this.origin).sub(tu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ul),o=fl.dot(this.direction),l=-fl.dot(ul),c=fl.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tu).addScaledVector(ul,f),p}intersectSphere(e,t){if(e.radius<0)return null;ki.subVectors(e.center,this.origin);let n=ki.dot(this.direction),s=ki.dot(ki)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,p=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,x=n.x-a.x,_=n.y-a.y,b=n.z-a.z,M=Math.abs(l),w=Math.abs(c),S=Math.abs(h),d,v,I,E,C,R,U,P,D,G,N,q;if(M>=w&&M>=S?(I=l,R=u,D=g,q=x,l>=0?(d=c,v=h,E=f,C=p,U=y,P=m,G=_,N=b):(d=h,v=c,E=p,C=f,U=m,P=y,G=b,N=_)):w>=S?(I=c,R=f,D=y,q=_,c>=0?(d=h,v=l,E=p,C=u,U=m,P=g,G=b,N=x):(d=l,v=h,E=u,C=p,U=g,P=m,G=x,N=b)):(I=h,R=p,D=m,q=b,h>=0?(d=l,v=c,E=u,C=f,U=g,P=y,G=x,N=_):(d=c,v=l,E=f,C=u,U=y,P=g,G=_,N=x)),I===0)return null;let k=d/I,O=v/I,z=1/I,X=E-k*R,Q=C-O*R,$=U-k*D,W=P-O*D,F=G-k*q,j=N-O*q,V=F*W-j*$,te=X*j-Q*F,_e=$*Q-W*X;if(s){if(V<0||te<0||_e<0)return null}else if((V<0||te<0||_e<0)&&(V>0||te>0||_e>0))return null;let be=V+te+_e;if(be===0)return null;let ve=z*(V*R+te*D+_e*q);return(be>0?ve<0:ve>0)?null:this.at(ve/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ep=new Ye,Os=new xs,dl=new Nn,tp=new B,pl=new B,ml=new B,gl=new B,nu=new B,xl=new B,np=new B,_l=new B,je=class extends Lt{constructor(e=new At,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){xl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(nu.fromBufferAttribute(u,e),a?xl.addScaledVector(nu,h):xl.addScaledVector(nu.sub(t),h))}t.add(xl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(dl.containsPoint(Os.origin)===!1&&(Os.intersectSphere(dl,tp)===null||Os.origin.distanceToSquared(tp)>(e.far-e.near)**2))&&(ep.copy(r).invert(),Os.copy(e.ray).applyMatrix4(ep),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let m=f[g],x=a[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,w=b;M<w;M+=3){let S=o.getX(M),d=o.getX(M+1),v=o.getX(M+2);s=vl(this,x,e,n,c,h,u,S,d,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,x=y;m<x;m+=3){let _=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);s=vl(this,a,e,n,c,h,u,_,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let m=f[g],x=a[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,w=b;M<w;M+=3){let S=M,d=M+1,v=M+2;s=vl(this,x,e,n,c,h,u,S,d,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,x=y;m<x;m+=3){let _=m,b=m+1,M=m+2;s=vl(this,a,e,n,c,h,u,_,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Dg(i,e,t,n,s,r,a,o){let l;if(e.side===gn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===bi,o),l===null)return null;_l.copy(o),_l.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(_l);return c<t.near||c>t.far?null:{distance:c,point:_l.clone(),object:i}}function vl(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,pl),i.getVertexPosition(l,ml),i.getVertexPosition(c,gl);let h=Dg(i,e,t,n,pl,ml,gl,np);if(h){let u=new B;Gi.getBarycoord(np,pl,ml,gl,u),s&&(h.uv=Gi.getInterpolatedAttribute(s,o,l,c,u,new pe)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,o,l,c,u,new pe)),a&&(h.normal=Gi.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new B,materialIndex:0};Gi.getNormal(pl,ml,gl,f.normal),h.face=f,h.barycoord=u}return h}var Ma=new St,ip=new St,sp=new St,Ng=new St,rp=new Ye,yl=new B,iu=new Nn,ap=new Ye,su=new xs,Ba=class extends je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uu,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,yl),this.boundingBox.expandByPoint(yl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,yl),this.boundingSphere.expandByPoint(yl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),iu.copy(this.boundingSphere),iu.applyMatrix4(s),e.ray.intersectsSphere(iu)!==!1&&(ap.copy(s).invert(),su.copy(e.ray).applyMatrix4(ap),!(this.boundingBox!==null&&su.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,su)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qp?this.bindMatrixInverse.copy(this.bindMatrix).invert():$e("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;ip.fromBufferAttribute(s.attributes.skinIndex,e),sp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ma.copy(t),t.set(0,0,0,0)):(Ma.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ma.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=sp.getComponent(r);if(a!==0){let o=ip.getComponent(r);rp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ng.copy(Ma).applyMatrix4(rp),a)}}return t.isVector4&&(t.w=Ma.w),t.applyMatrix4(this.bindMatrixInverse)}},kr=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Qn=class extends Kt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Nt,h=Nt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},op=new Ye,Ug=new Ye,za=class i{constructor(e=[],t=[]){this.uuid=di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){$e("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Ug;op.multiplyMatrices(o,t[r]),op.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Qn(t,e,e,On,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&($e("Skeleton: No bone found with UUID:",r),a=new kr),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Xi=class extends qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new Ye,lp=new Ye,Ml=[],cp=new pn,Og=new Ye,Sa=new je,ba=new Nn,qi=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Og)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),cp.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(cp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),ba.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(ba)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(n),e.ray.intersectsSphere(ba)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),lp.multiplyMatrices(n,wr),Sa.matrixWorld=lp,Sa.raycast(e,Ml);for(let a=0,o=Ml.length;a<o;a++){let l=Ml[a];l.instanceId=r,l.object=this,t.push(l)}Ml.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qn(new Float32Array(s*this.count),s,this.count,xc,$n));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fs=new Nn,Fg=new pe(.5,.5),Sl=new B,_s=class{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],y=r[9],m=r[10],x=r[11],_=r[12],b=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,p-h,x-g,w-_).normalize(),s[1].setComponents(c+a,p+h,x+g,w+_).normalize(),s[2].setComponents(c+o,p+u,x+y,w+b).normalize(),s[3].setComponents(c-o,p-u,x-y,w-b).normalize(),n)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,p-f,x-m,w-M).normalize();else if(s[4].setComponents(c-l,p-f,x-m,w-M).normalize(),t===Jn)s[5].setComponents(c+l,p+f,x+m,w+M).normalize();else if(t===Dr)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);let t=Fg.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Sl.x=s.normal.x>0?e.max.x:e.min.x,Sl.y=s.normal.y>0?e.max.y:e.min.y,Sl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hp=new Ye,Vl=class i{constructor(){this.coordinateSystem=Jn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];hp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new _s),n[s].setFromProjectionMatrix(hp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new _s),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var vs=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wl=new B,Xl=new B,up=new Ye,Ta=new xs,bl=new Nn,ru=new B,fp=new B,Xs=class extends Lt{constructor(e=new At,t=new vs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Wl.fromBufferAttribute(t,s-1),Xl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new ht(n,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bl.copy(n.boundingSphere),bl.applyMatrix4(s),bl.radius+=r,e.ray.intersectsSphere(bl)===!1)return;up.copy(s).invert(),Ta.copy(e.ray).applyMatrix4(up);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=c){let x=h.getX(y),_=h.getX(y+1),b=Tl(this,e,Ta,l,x,_,y);b&&t.push(b)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(p),x=Tl(this,e,Ta,l,y,m,g-1);x&&t.push(x)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=c){let x=Tl(this,e,Ta,l,y,y+1,y);x&&t.push(x)}if(this.isLineLoop){let y=Tl(this,e,Ta,l,g-1,p,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Tl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Wl.fromBufferAttribute(o,s),Xl.fromBufferAttribute(o,r),t.distanceSqToSegment(Wl,Xl,ru,fp)>n)return;ru.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ru);if(!(c<e.near||c>e.far))return{distance:c,point:fp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var dp=new B,pp=new B,qs=class extends Xs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)dp.fromBufferAttribute(t,s),pp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+dp.distanceTo(pp);e.setAttribute("lineDistance",new ht(n,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ka=class extends Xs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},$i=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mp=new Ye,gu=new xs,El=new Nn,wl=new B,ys=class extends Lt{constructor(e=new At,t=new $i){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(s),El.radius+=r,e.ray.intersectsSphere(El)===!1)return;mp.copy(s).invert(),gu.copy(e.ray).applyMatrix4(mp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,y=p;g<y;g++){let m=c.getX(g);wl.fromBufferAttribute(u,m),gp(wl,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,y=p;g<y;g++)wl.fromBufferAttribute(u,g),gp(wl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function gp(i,e,t,n,s,r,a){let o=gu.distanceSqToPoint(i);if(o<t){let l=new B;gu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ha=class extends Kt{constructor(e=[],t=er,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ei=class extends Kt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hi=class extends Kt{constructor(e,t,n=ui,s,r,a,o=Nt,l=Nt,c,h=Wi,u=1){if(h!==Wi&&h!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Or(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ga=class extends hi{constructor(e,t=ui,n=er,s,r,a=Nt,o=Nt,l,c=Wi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Va=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bt=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function g(y,m,x,_,b,M,w,S,d,v,I){let E=M/d,C=w/v,R=M/2,U=w/2,P=S/2,D=d+1,G=v+1,N=0,q=0,k=new B;for(let O=0;O<G;O++){let z=O*C-U;for(let X=0;X<D;X++){let Q=X*E-R;k[y]=Q*_,k[m]=z*b,k[x]=P,c.push(k.x,k.y,k.z),k[y]=0,k[m]=0,k[x]=S>0?1:-1,h.push(k.x,k.y,k.z),u.push(X/d),u.push(1-O/v),N+=1}}for(let O=0;O<v;O++)for(let z=0;z<d;z++){let X=f+z+D*O,Q=f+z+D*(O+1),$=f+(z+1)+D*(O+1),W=f+(z+1)+D*O;l.push(X,Q,W),l.push(Q,$,W),q+=6}o.addGroup(p,q,I),p+=q,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Wa=class i extends At{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,p=2*u+f,g=n*2+r,y=s+1,m=new B,x=new B;for(let _=0;_<=g;_++){let b=0,M=0,w=0,S=0;if(_<=n){let I=_/n,E=I*Math.PI/2;M=-h-e*Math.cos(E),w=e*Math.sin(E),S=-e*Math.cos(E),b=I*u}else if(_<=n+r){let I=(_-n)/r;M=-h+I*t,w=e,S=0,b=u+I*f}else{let I=(_-n-r)/n,E=I*Math.PI/2;M=h+e*Math.sin(E),w=e*Math.cos(E),S=e*Math.sin(E),b=u+f+I*u}let d=Math.max(0,Math.min(1,b/p)),v=0;_===0?v=.5/s:_===g&&(v=-.5/s);for(let I=0;I<=s;I++){let E=I/s,C=E*Math.PI*2,R=Math.sin(C),U=Math.cos(C);x.x=-w*U,x.y=M,x.z=w*R,o.push(x.x,x.y,x.z),m.set(-w*U,S,w*R),m.normalize(),l.push(m.x,m.y,m.z),c.push(E+v,d)}if(_>0){let I=(_-1)*y;for(let E=0;E<s;E++){let C=I+E,R=I+E+1,U=_*y+E,P=_*y+E+1;a.push(C,R,U),a.push(R,P,U)}}}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Xa=class i extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new B,h=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ot=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,y=[],m=n/2,x=0;_(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(p,2));function _(){let M=new B,w=new B,S=0,d=(t-e)/n;for(let v=0;v<=r;v++){let I=[],E=v/r,C=E*(t-e)+e;for(let R=0;R<=s;R++){let U=R/s,P=U*l+o,D=Math.sin(P),G=Math.cos(P);w.x=C*D,w.y=-E*n+m,w.z=C*G,u.push(w.x,w.y,w.z),M.set(D,d,G).normalize(),f.push(M.x,M.y,M.z),p.push(U,1-E),I.push(g++)}y.push(I)}for(let v=0;v<s;v++)for(let I=0;I<r;I++){let E=y[I][v],C=y[I+1][v],R=y[I+1][v+1],U=y[I][v+1];(e>0||I!==0)&&(h.push(E,C,U),S+=3),(t>0||I!==r-1)&&(h.push(C,R,U),S+=3)}c.addGroup(x,S,0),x+=S}function b(M){let w=g,S=new pe,d=new B,v=0,I=M===!0?e:t,E=M===!0?1:-1;for(let R=1;R<=s;R++)u.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;let C=g;for(let R=0;R<=s;R++){let P=R/s*l+o,D=Math.cos(P),G=Math.sin(P);d.x=I*G,d.y=m*E,d.z=I*D,u.push(d.x,d.y,d.z),f.push(0,E,0),S.x=D*.5+.5,S.y=G*.5*E+.5,p.push(S.x,S.y),g++}for(let R=0;R<s;R++){let U=w+R,P=C+R;M===!0?h.push(P,P+1,U):h.push(P+1,P,U),v+=3}c.addGroup(x,v,M===!0?1:2),x+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ms=class i extends ot{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new pe:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,s=[],r=[],a=[],o=new B,l=new Ye;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ut(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(ut(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Hr=class extends Xn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ql=class extends Hr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ju(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var xp=new B,_p=new B,au=new ju,ou=new ju,lu=new ju,$l=class extends Xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(_p.subVectors(s[0],s[1]).add(s[0]),c=_p);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(xp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xp),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),au.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,y,m),ou.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,y,m),lu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(au.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ou.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),lu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(au.calc(l),ou.calc(l),lu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vp(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Bg(i,e){let t=1-i;return t*t*e}function zg(i,e){return 2*(1-i)*i*e}function kg(i,e){return i*i*e}function Ca(i,e,t,n){return Bg(i,e)+zg(i,t)+kg(i,n)}function Hg(i,e){let t=1-i;return t*t*t*e}function Gg(i,e){let t=1-i;return 3*t*t*i*e}function Vg(i,e){return 3*(1-i)*i*i*e}function Wg(i,e){return i*i*i*e}function Pa(i,e,t,n,s){return Hg(i,e)+Gg(i,t)+Vg(i,n)+Wg(i,s)}var qa=class extends Xn{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pa(e,s.x,r.x,a.x,o.x),Pa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yl=class extends Xn{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pa(e,s.x,r.x,a.x,o.x),Pa(e,s.y,r.y,a.y,o.y),Pa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$a=class extends Xn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kl=class extends Xn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends Xn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ca(e,s.x,r.x,a.x),Ca(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jl=class extends Xn{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ca(e,s.x,r.x,a.x),Ca(e,s.y,r.y,a.y),Ca(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(vp(o,l.x,c.x,h.x,u.x),vp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},xu=Object.freeze({__proto__:null,ArcCurve:ql,CatmullRomCurve3:$l,CubicBezierCurve:qa,CubicBezierCurve3:Yl,EllipseCurve:Hr,LineCurve:$a,LineCurve3:Kl,QuadraticBezierCurve:Ya,QuadraticBezierCurve3:jl,SplineCurve:Ka}),Zl=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new xu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ja=class extends Zl{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $a(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ya(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new qa(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ka(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Hr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ss=class extends ja{constructor(e){super(e),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ja().fromJSON(s))}return this}};function Xg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=mm(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=jg(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let f=t;f<s;f+=t){let p=i[f],g=i[f+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Za(r,a,t,o,l,c,0),a}function mm(i,e,t,n,s){let r;if(s===ox(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=yp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=yp(a/n|0,i[a],i[a+1],r);return r&&Gr(r,r.next)&&(Qa(r),r=r.next),r}function $s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Qa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Za(i,e,t,n,s,r,a){if(!i)return;!a&&r&&tx(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?$g(i,n,s,r):qg(i)){e.push(l.i,i.i,c.i),Qa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Yg($s(i),e),Za(i,e,t,n,s,r,2)):a===2&&Kg(i,e,t,n,s,r):Za($s(i),e,t,n,s,r,1);break}}}function qg(i){let e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&Ea(s,o,r,l,a,c,g.x,g.y)&&Wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $g(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Wt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=Math.min(o,l,c),g=Math.min(h,u,f),y=Math.max(o,l,c),m=Math.max(h,u,f),x=_u(p,g,e,t,n),_=_u(y,m,e,t,n),b=i.prevZ,M=i.nextZ;for(;b&&b.z>=x&&M&&M.z<=_;){if(b.x>=p&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ea(o,h,l,u,c,f,b.x,b.y)&&Wt(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=p&&M.x<=y&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ea(o,h,l,u,c,f,M.x,M.y)&&Wt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=x;){if(b.x>=p&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ea(o,h,l,u,c,f,b.x,b.y)&&Wt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=_;){if(M.x>=p&&M.x<=y&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ea(o,h,l,u,c,f,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Yg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Gr(n,s)&&xm(n,t,t.next,s)&&Ja(n,s)&&Ja(s,n)&&(e.push(n.i,t.i,s.i),Qa(t),Qa(t.next),t=i=s),t=t.next}while(t!==i);return $s(t)}function Kg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sx(a,o)){let l=_m(a,o);a=$s(a,a.next),l=$s(l,l.next),Za(a,e,t,n,s,r,0),Za(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function jg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=mm(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ix(c))}s.sort(Zg);for(let r=0;r<s.length;r++)t=Jg(s[r],t);return t}function Zg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Jg(i,e){let t=Qg(i,e);if(!t)return e;let n=_m(t,i);return $s(n,n.next),$s(t,t.next)}function Qg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Gr(i,t))return t;do{if(Gr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&gm(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Ja(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&ex(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function ex(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function tx(i,e,t,n){let s=i;do s.z===0&&(s.z=_u(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,nx(s)}function nx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function _u(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ix(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function gm(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ea(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&gm(i,e,t,n,s,r,a,o)}function sx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!rx(i,e)&&(Ja(i,e)&&Ja(e,i)&&ax(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||Gr(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gr(i,e){return i.x===e.x&&i.y===e.y}function xm(i,e,t,n){let s=Rl(Wt(i,e,t)),r=Rl(Wt(i,e,n)),a=Rl(Wt(t,n,i)),o=Rl(Wt(t,n,e));return!!(s!==r&&a!==o||s===0&&Al(i,t,e)||r===0&&Al(i,n,e)||a===0&&Al(t,i,n)||o===0&&Al(t,e,n))}function Al(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Rl(i){return i>0?1:i<0?-1:0}function rx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&xm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ja(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function ax(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function _m(i,e){let t=vu(i.i,i.x,i.y),n=vu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function yp(i,e,t,n){let s=vu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ox(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var yu=class{static triangulate(e,t,n=2){return Xg(e,t,n)}},Bs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Mp(e),Sp(n,e);let a=e.length;t.forEach(Mp);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Sp(n,t[l]);let o=yu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Mp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Sp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ys=class i extends At{constructor(e=new Ss([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:lx,b,M=!1,w,S,d,v;if(x){b=x.getSpacedPoints(h),M=!0,f=!1;let re=x.isCatmullRomCurve3?x.closed:!1;w=x.computeFrenetFrames(h,re),S=new B,d=new B,v=new B}f||(m=0,p=0,g=0,y=0);let I=o.extractPoints(c),E=I.shape,C=I.holes;if(!Bs.isClockWise(E)){E=E.reverse();for(let re=0,me=C.length;re<me;re++){let Me=C[re];Bs.isClockWise(Me)&&(C[re]=Me.reverse())}}function U(re){let Me=10000000000000001e-36,ye=re[0];for(let ce=1;ce<=re.length;ce++){let ze=ce%re.length,Ue=re[ze],We=Ue.x-ye.x,Ze=Ue.y-ye.y,Je=We*We+Ze*Ze,Y=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(ye.x),Math.abs(ye.y)),bt=Me*Y*Y;if(Je<=bt){re.splice(ze,1),ce--;continue}ye=Ue}}U(E),C.forEach(U);let P=C.length,D=E;for(let re=0;re<P;re++){let me=C[re];E=E.concat(me)}function G(re,me,Me){return me||Qe("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(me,Me)}let N=E.length;function q(re,me,Me){let ye,ce,ze,Ue=re.x-me.x,We=re.y-me.y,Ze=Me.x-re.x,Je=Me.y-re.y,Y=Ue*Ue+We*We,bt=Ue*Je-We*Ze;if(Math.abs(bt)>Number.EPSILON){let et=Math.sqrt(Y),ue=Math.sqrt(Ze*Ze+Je*Je),J=me.x-We/et,ge=me.y+Ue/et,de=Me.x-Je/ue,Ae=Me.y+Ze/ue,L=((de-J)*Je-(Ae-ge)*Ze)/(Ue*Je-We*Ze);ye=J+Ue*L-re.x,ce=ge+We*L-re.y;let T=ye*ye+ce*ce;if(T<=2)return new pe(ye,ce);ze=Math.sqrt(T/2)}else{let et=!1;Ue>Number.EPSILON?Ze>Number.EPSILON&&(et=!0):Ue<-Number.EPSILON?Ze<-Number.EPSILON&&(et=!0):Math.sign(We)===Math.sign(Je)&&(et=!0),et?(ye=-We,ce=Ue,ze=Math.sqrt(Y)):(ye=Ue,ce=We,ze=Math.sqrt(Y/2))}return new pe(ye/ze,ce/ze)}let k=[];for(let re=0,me=D.length,Me=me-1,ye=re+1;re<me;re++,Me++,ye++)Me===me&&(Me=0),ye===me&&(ye=0),k[re]=q(D[re],D[Me],D[ye]);let O=[],z,X=k.concat();for(let re=0,me=P;re<me;re++){let Me=C[re];z=[];for(let ye=0,ce=Me.length,ze=ce-1,Ue=ye+1;ye<ce;ye++,ze++,Ue++)ze===ce&&(ze=0),Ue===ce&&(Ue=0),z[ye]=q(Me[ye],Me[ze],Me[Ue]);O.push(z),X=X.concat(z)}let Q;if(m===0)Q=Bs.triangulateShape(D,C);else{let re=[],me=[];for(let Me=0;Me<m;Me++){let ye=Me/m,ce=p*Math.cos(ye*Math.PI/2),ze=g*Math.sin(ye*Math.PI/2)+y;for(let Ue=0,We=D.length;Ue<We;Ue++){let Ze=G(D[Ue],k[Ue],ze);te(Ze.x,Ze.y,-ce),ye===0&&re.push(Ze)}for(let Ue=0,We=P;Ue<We;Ue++){let Ze=C[Ue];z=O[Ue];let Je=[];for(let Y=0,bt=Ze.length;Y<bt;Y++){let et=G(Ze[Y],z[Y],ze);te(et.x,et.y,-ce),ye===0&&Je.push(et)}ye===0&&me.push(Je)}}Q=Bs.triangulateShape(re,me)}let $=Q.length,W=g+y;for(let re=0;re<N;re++){let me=f?G(E[re],X[re],W):E[re];M?(d.copy(w.normals[0]).multiplyScalar(me.x),S.copy(w.binormals[0]).multiplyScalar(me.y),v.copy(b[0]).add(d).add(S),te(v.x,v.y,v.z)):te(me.x,me.y,0)}for(let re=1;re<=h;re++)for(let me=0;me<N;me++){let Me=f?G(E[me],X[me],W):E[me];M?(d.copy(w.normals[re]).multiplyScalar(Me.x),S.copy(w.binormals[re]).multiplyScalar(Me.y),v.copy(b[re]).add(d).add(S),te(v.x,v.y,v.z)):te(Me.x,Me.y,u/h*re)}for(let re=m-1;re>=0;re--){let me=re/m,Me=p*Math.cos(me*Math.PI/2),ye=g*Math.sin(me*Math.PI/2)+y;for(let ce=0,ze=D.length;ce<ze;ce++){let Ue=G(D[ce],k[ce],ye);te(Ue.x,Ue.y,u+Me)}for(let ce=0,ze=C.length;ce<ze;ce++){let Ue=C[ce];z=O[ce];for(let We=0,Ze=Ue.length;We<Ze;We++){let Je=G(Ue[We],z[We],ye);M?te(Je.x,Je.y+b[h-1].y,b[h-1].x+Me):te(Je.x,Je.y,u+Me)}}}F(),j();function F(){let re=s.length/3;if(f){let me=0,Me=N*me;for(let ye=0;ye<$;ye++){let ce=Q[ye];_e(ce[2]+Me,ce[1]+Me,ce[0]+Me)}me=h+m*2,Me=N*me;for(let ye=0;ye<$;ye++){let ce=Q[ye];_e(ce[0]+Me,ce[1]+Me,ce[2]+Me)}}else{for(let me=0;me<$;me++){let Me=Q[me];_e(Me[2],Me[1],Me[0])}for(let me=0;me<$;me++){let Me=Q[me];_e(Me[0]+N*h,Me[1]+N*h,Me[2]+N*h)}}n.addGroup(re,s.length/3-re,0)}function j(){let re=s.length/3,me=0;V(D,me),me+=D.length;for(let Me=0,ye=C.length;Me<ye;Me++){let ce=C[Me];V(ce,me),me+=ce.length}n.addGroup(re,s.length/3-re,1)}function V(re,me){let Me=re.length;for(;--Me>=0;){let ye=Me,ce=Me-1;ce<0&&(ce=re.length-1);for(let ze=0,Ue=h+m*2;ze<Ue;ze++){let We=N*ze,Ze=N*(ze+1),Je=me+ye+We,Y=me+ce+We,bt=me+ce+Ze,et=me+ye+Ze;be(Je,Y,bt,et)}}}function te(re,me,Me){l.push(re),l.push(me),l.push(Me)}function _e(re,me,Me){ve(re),ve(me),ve(Me);let ye=s.length/3,ce=_.generateTopUV(n,s,ye-3,ye-2,ye-1);Ie(ce[0]),Ie(ce[1]),Ie(ce[2])}function be(re,me,Me,ye){ve(re),ve(me),ve(ye),ve(me),ve(Me),ve(ye);let ce=s.length/3,ze=_.generateSideWallUV(n,s,ce-6,ce-3,ce-2,ce-1);Ie(ze[0]),Ie(ze[1]),Ie(ze[3]),Ie(ze[1]),Ie(ze[2]),Ie(ze[3])}function ve(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function Ie(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return cx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xu[s.type]().fromJSON(s)),new i(n,e.options)}},lx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new pe(r,a),new pe(o,l),new pe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],x=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new pe(a,1-l),new pe(c,1-u),new pe(f,1-g),new pe(y,1-x)]:[new pe(o,1-l),new pe(h,1-u),new pe(p,1-g),new pe(m,1-x)]}};function cx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var eo=class i extends At{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ut(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new B,f=new pe,p=new B,g=new B,y=new B,m=0,x=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,p.x=x*1,p.y=-m,p.z=x*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:m=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,p.x=x*1,p.y=-m,p.z=x*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(g)}for(let _=0;_<=t;_++){let b=n+_*h*s,M=Math.sin(b),w=Math.cos(b);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*M,u.y=e[S].y,u.z=e[S].x*w,a.push(u.x,u.y,u.z),f.x=_/t,f.y=S/(e.length-1),o.push(f.x,f.y);let d=l[3*S+0]*M,v=l[3*S+1],I=l[3*S+0]*w;c.push(d,v,I)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let M=b+_*e.length,w=M,S=M+e.length,d=M+e.length+1,v=M+1;r.push(w,S,v),r.push(d,v,S)}this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("uv",new ht(o,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Yi=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,p=[],g=[],y=[],m=[];for(let x=0;x<h;x++){let _=x*f-a;for(let b=0;b<c;b++){let M=b*u-r;g.push(M,-_,0),y.push(0,0,1),m.push(b/o),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let _=0;_<o;_++){let b=_+c*x,M=_+c*(x+1),w=_+1+c*(x+1),S=_+1+c*x;p.push(b,M,S),p.push(M,w,S)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},to=class i extends At{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/s,p=new B,g=new pe;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let x=r+m/n*a;p.x=u*Math.cos(x),p.y=u*Math.sin(x),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let y=0;y<s;y++){let m=y*(n+1);for(let x=0;x<n;x++){let _=x+m,b=_,M=_+n+1,w=_+n+2,S=_+1;o.push(b,M,S),o.push(M,w,S)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var jt=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new B,f=new B,p=[],g=[],y=[],m=[];for(let x=0;x<=n;x++){let _=[],b=x/n,M=a+b*o,w=e*Math.cos(M),S=Math.sqrt(e*e-w*w),d=0;x===0&&a===0?d=.5/t:x===n&&l===Math.PI&&(d=-.5/t);for(let v=0;v<=t;v++){let I=v/t,E=s+I*r;u.x=-S*Math.cos(E),u.y=w,u.z=S*Math.sin(E),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(I+d,1-b),_.push(c++)}h.push(_)}for(let x=0;x<n;x++)for(let _=0;_<t;_++){let b=h[x][_+1],M=h[x][_],w=h[x+1][_],S=h[x+1][_+1];(x!==0||a>0)&&p.push(b,M,S),(x!==n-1||l<Math.PI)&&p.push(M,w,S)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ki=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new B,p=new B,g=new B;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let x=0;x<=s;x++){let _=x/s*r;p.x=(e+t*Math.cos(m))*Math.cos(_),p.y=(e+t*Math.cos(m))*Math.sin(_),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),g.subVectors(p,f).normalize(),h.push(g.x,g.y,g.z),u.push(x/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let x=(s+1)*y+m-1,_=(s+1)*(y-1)+m-1,b=(s+1)*(y-1)+m,M=(s+1)*y+m;l.push(x,_,M),l.push(_,b,M)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function nr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(bp(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(bp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function En(i){let e={};for(let t=0;t<i.length;t++){let n=nr(i[t]);for(let s in n)e[s]=n[s]}return e}function bp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var xn={clone:nr,merge:En},ux=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ux,this.fragmentShader=fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(s.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ye().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vr=class extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$t=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pn=class extends $t{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return zs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){zs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var no=class extends mn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},io=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=hc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jl=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ql=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ms(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function dx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Tp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function px(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ec=class extends Mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:du,endingEnd:du}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case pu:r=e,o=2*t-n;break;case mu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pu:a=e,l=2*n-t;break;case mu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,x=-f*m+2*f*y-f*g,_=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,b=(-1-p)*m+(1.5+p)*y+.5*g,M=p*m-p*y;for(let w=0;w!==o;++w)r[w]=x*a[h+w]+_*a[c+w]+b*a[l+w]+M*a[u+w];return r}},tc=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},nc=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ic=class extends Mi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let f=o*2,p=e-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],x=p*f+g*2,_=u[x],b=u[x+1],M=e*f+g*2,w=h[M],S=h[M+1],d=gx(n,t,_,w,s);r[g]=vm(d,y,b,S,m)}return r}};function vm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function mx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function gx(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=vm(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=mx(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ms(t,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ms(e.times,Array),values:ms(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),wa(e.settings)&&(n.settings={inTangents:ms(e.settings.inTangents,Array),outTangents:ms(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ic(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case Hs:t=this.InterpolantFactoryMethodLinear;break;case Il:t=this.InterpolantFactoryMethodSmooth;break;case fu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return Il;case this.InterpolantFactoryMethodBezier:return fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;wa(this.settings)&&(Ep(this.settings.inTangents,e),Ep(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;wa(this.settings)&&(wp(this.settings.inTangents,e),wp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Qe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&tg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Il,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[f+g]||y!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,wa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ep(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function wp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Hs;var ji=class extends Un{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=ks;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};so.prototype.ValueTypeName="color";var Zi=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};Zi.prototype.ValueTypeName="number";var sc=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Wn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ji=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new sc(this.times,this.values,this.getValueSize(),e)}};Ji.prototype.ValueTypeName="quaternion";Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Un{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=ks;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};bs.prototype.ValueTypeName="vector";var ro=class{constructor(e="",t=-1,n=[],s=em){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(_x(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Un.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=dx(l);l=Tp(l,1,h),c=Tp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Zi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function xx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zi;case"vector":case"vector2":case"vector3":case"vector4":return bs;case"color":return so;case"quaternion":return Ji;case"bool":case"boolean":return ji;case"string":return Qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function _x(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=xx(i.type);if(i.times===void 0){let n=[],s=[];px(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),wa(i.settings)&&(t.settings={inTangents:ms(i.settings.inTangents,Float32Array),outTangents:ms(i.settings.outTangents,Float32Array)}),t}var _i={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ap(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ap(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ap(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var rc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ym=new rc,Si=class{constructor(e){this.manager=e!==void 0?e:ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Si.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hi={},Mu=class extends Error{constructor(e,t){super(e),this.response=t}},Wr=class extends Si{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=_i.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:n,onError:s});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&$e("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Hi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,y=0,m=new ReadableStream({start(x){_();function _(){u.read().then(({done:b,value:M})=>{if(b)x.close();else{y+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let S=0,d=h.length;S<d;S++){let v=h[S];v.onProgress&&v.onProgress(w)}x.enqueue(M),_()}},b=>{x.error(b)})}}});return new Response(m)}else throw new Mu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{_i.add(`file:${e}`,c);let h=Hi[e];delete Hi[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Hi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ar=new WeakMap,ac=class extends Si{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=_i.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ar.get(a);u===void 0&&(u=[],Ar.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Nr("img");function l(){h(),t&&t(this);let u=Ar.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onLoad&&p.onLoad(this)}Ar.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),_i.remove(`image:${e}`);let f=Ar.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(u)}Ar.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),_i.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var ao=class extends Si{constructor(e){super(e)}load(e,t,n,s){let r=new Kt,a=new ac(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ks=class extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},oo=class extends Ks{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},cu=new Ye,Rp=new B,Cp=new B,Xr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rp),Cp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(cu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Dr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Cl=new B,Pl=new Wn,xi=new B,lo=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cl,Pl,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Pl,xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Cl,Pl,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Pl,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ps=new B,Pp=new pe,Ip=new pe,tn=class extends lo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,Pp,Ip),t.subVectors(Ip,Pp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Su=class extends Xr{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Gs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},co=class extends Ks{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Su}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},bu=class extends Xr{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},js=class extends Ks{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},es=class extends lo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tu=class extends Xr{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ts=class extends Ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Tu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ts=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var hu=new WeakMap,ho=class extends Si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&$e("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&$e("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=_i.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{hu.has(a)===!0?(s&&s(hu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),hu.set(l,c),_i.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Rr=-90,Cr=1,qr=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Rr,Cr,e,t);s.layers=this.layers,this.add(s);let r=new tn(Rr,Cr,e,t);r.layers=this.layers,this.add(r);let a=new tn(Rr,Cr,e,t);a.layers=this.layers,this.add(a);let o=new tn(Rr,Cr,e,t);o.layers=this.layers,this.add(o);let l=new tn(Rr,Cr,e,t);l.layers=this.layers,this.add(l);let c=new tn(Rr,Cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},oc=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},uo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=vx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function vx(){this._document.hidden===!1&&this.reset()}var Ju="\\[\\]\\.:\\/",yx=new RegExp("["+Ju+"]","g"),Qu="[^"+Ju+"]",Mx="[^"+Ju.replace("\\.","")+"]",Sx=/((?:WC+[\/:])*)/.source.replace("WC",Qu),bx=/(WCOD+)?/.source.replace("WCOD",Mx),Tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),Ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),wx=new RegExp("^"+Sx+bx+Tx+Ex+"$"),Ax=["material","materials","bones","map"],Eu=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yx,"")}static parseTrackName(e){let t=wx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ax.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Eu;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ub=new Float32Array(1);var Lp=new Ye,Es=class{constructor(e,t,n=0,s=1/0){this.ray=new xs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lp),this}intersectObject(e,t=!0,n=[]){return wu(e,this,n,t),n.sort(Dp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)wu(e[s],this,n,t);return n.sort(Dp),n}};function Dp(i,e){return i.distance-e.distance}function wu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)wu(r[a],e,t,!0)}}var af=class af{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};af.prototype.isMatrix2=!0;var Au=af;function ef(i,e,t,n){let s=Rx(n);switch(t){case Bu:return i*e;case xc:return i*e/s.components*s.byteLength;case _c:return i*e/s.components*s.byteLength;case ws:return i*e*2/s.components*s.byteLength;case vc:return i*e*2/s.components*s.byteLength;case zu:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case yc:return i*e*4/s.components*s.byteLength;case Mo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bo:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:case Tc:return Math.max(i,16)*Math.max(e,8)/4;case Mc:case bc:return Math.max(i,8)*Math.max(e,8)/2;case Ec:case wc:case Rc:case Cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ac:case Eo:case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xc:case qc:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yc:case Kc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wo:case jc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rx(i){switch(i){case Tn:case Nu:return{byteLength:1,components:1};case Zr:case Uu:case Ht:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case ui:case pc:case $n:return{byteLength:4,components:1};case Ou:case Fu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Gm(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Px(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ix=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lx=`#ifdef USE_ALPHAHASH
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
#endif`,Dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fx=`#ifdef USE_AOMAP
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
#endif`,Bx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zx=`#ifdef USE_BATCHING
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
#endif`,kx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wx=`#ifdef USE_IRIDESCENCE
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
#endif`,Xx=`#ifdef USE_BUMPMAP
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
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,e_=`#define PI 3.141592653589793
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
} // validated`,t_=`vec3 transformedNormal = objectNormal;
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
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a_="gl_FragColor = linearToOutputTexel( gl_FragColor );",o_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
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
#endif`,d_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x_=`#ifdef USE_GRADIENTMAP
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
}`,__=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,S_=`#ifdef USE_ENVMAP
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
#endif`,b_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A_=`PhysicalMaterial material;
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
#endif`,R_=`uniform sampler2D dfgLUT;
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
}`,C_=`
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
#endif`,P_=`#if defined( RE_IndirectDiffuse )
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
#endif`,I_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,D_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k_=`#if defined( USE_POINTS_UV )
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
#endif`,H_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_=`#if defined( USE_MORPHCOLORS )
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
#endif`,X_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q_=`#ifdef USE_MORPHTARGETS
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
#endif`,$_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Q_=`#ifdef USE_NORMALMAP
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
#endif`,ev=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,av=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mv=`float getShadowMask() {
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
}`,gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xv=`#ifdef USE_SKINNING
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
#endif`,_v=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vv=`#ifdef USE_SKINNING
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
#endif`,yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tv=`#ifdef USE_TRANSMISSION
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
#endif`,Ev=`#ifdef USE_TRANSMISSION
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
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iv=`uniform sampler2D t2D;
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
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`uniform float backgroundBlurriness;
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
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`#include <common>
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
}`,Fv=`#if DEPTH_PACKING == 3200
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
}`,Bv=`#define DISTANCE
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
}`,zv=`#define DISTANCE
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
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`uniform float scale;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,Wv=`#include <common>
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
}`,Xv=`uniform vec3 diffuse;
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
}`,qv=`#define LAMBERT
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
}`,$v=`#define LAMBERT
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
}`,Yv=`#define MATCAP
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
}`,Kv=`#define MATCAP
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
}`,jv=`#define NORMAL
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
}`,Zv=`#define NORMAL
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
}`,Jv=`#define PHONG
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
}`,Qv=`#define PHONG
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
}`,ey=`#define STANDARD
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
}`,ty=`#define STANDARD
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
}`,ny=`#define TOON
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
}`,iy=`#define TOON
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
}`,sy=`uniform float size;
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
}`,ry=`uniform vec3 diffuse;
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
}`,ay=`#include <common>
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
}`,oy=`uniform vec3 color;
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
}`,ly=`uniform float rotation;
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
}`,cy=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Ix,alphahash_pars_fragment:Lx,alphamap_fragment:Dx,alphamap_pars_fragment:Nx,alphatest_fragment:Ux,alphatest_pars_fragment:Ox,aomap_fragment:Fx,aomap_pars_fragment:Bx,batching_pars_vertex:zx,batching_vertex:kx,begin_vertex:Hx,beginnormal_vertex:Gx,bsdfs:Vx,iridescence_fragment:Wx,bumpmap_pars_fragment:Xx,clipping_planes_fragment:qx,clipping_planes_pars_fragment:$x,clipping_planes_pars_vertex:Yx,clipping_planes_vertex:Kx,color_fragment:jx,color_pars_fragment:Zx,color_pars_vertex:Jx,color_vertex:Qx,common:e_,defaultnormal_vertex:t_,displacementmap_pars_vertex:n_,displacementmap_vertex:i_,emissivemap_fragment:s_,emissivemap_pars_fragment:r_,colorspace_fragment:a_,colorspace_pars_fragment:o_,envmap_fragment:l_,envmap_common_pars_fragment:c_,envmap_pars_fragment:h_,envmap_pars_vertex:u_,envmap_physical_pars_fragment:S_,envmap_vertex:f_,fog_vertex:d_,fog_pars_vertex:p_,fog_fragment:m_,fog_pars_fragment:g_,gradientmap_pars_fragment:x_,lightmap_pars_fragment:__,lights_lambert_fragment:v_,lights_lambert_pars_fragment:y_,lights_pars_begin:M_,lights_toon_fragment:b_,lights_toon_pars_fragment:T_,lights_phong_fragment:E_,lights_phong_pars_fragment:w_,lights_physical_fragment:A_,lights_physical_pars_fragment:R_,lights_fragment_begin:C_,lights_fragment_maps:P_,lights_fragment_end:I_,lightprobes_pars_fragment:L_,logdepthbuf_fragment:D_,logdepthbuf_pars_fragment:N_,logdepthbuf_pars_vertex:U_,logdepthbuf_vertex:O_,map_fragment:F_,map_pars_fragment:B_,map_particle_fragment:z_,map_particle_pars_fragment:k_,metalnessmap_fragment:H_,metalnessmap_pars_fragment:G_,morphinstance_vertex:V_,morphcolor_vertex:W_,morphnormal_vertex:X_,morphtarget_pars_vertex:q_,morphtarget_vertex:$_,normal_fragment_begin:Y_,normal_fragment_maps:K_,normal_pars_fragment:j_,normal_pars_vertex:Z_,normal_vertex:J_,normalmap_pars_fragment:Q_,clearcoat_normal_fragment_begin:ev,clearcoat_normal_fragment_maps:tv,clearcoat_pars_fragment:nv,iridescence_pars_fragment:iv,opaque_fragment:sv,packing:rv,premultiplied_alpha_fragment:av,project_vertex:ov,dithering_fragment:lv,dithering_pars_fragment:cv,roughnessmap_fragment:hv,roughnessmap_pars_fragment:uv,shadowmap_pars_fragment:fv,shadowmap_pars_vertex:dv,shadowmap_vertex:pv,shadowmask_pars_fragment:mv,skinbase_vertex:gv,skinning_pars_vertex:xv,skinning_vertex:_v,skinnormal_vertex:vv,specularmap_fragment:yv,specularmap_pars_fragment:Mv,tonemapping_fragment:Sv,tonemapping_pars_fragment:bv,transmission_fragment:Tv,transmission_pars_fragment:Ev,uv_pars_fragment:wv,uv_pars_vertex:Av,uv_vertex:Rv,worldpos_vertex:Cv,background_vert:Pv,background_frag:Iv,backgroundCube_vert:Lv,backgroundCube_frag:Dv,cube_vert:Nv,cube_frag:Uv,depth_vert:Ov,depth_frag:Fv,distance_vert:Bv,distance_frag:zv,equirect_vert:kv,equirect_frag:Hv,linedashed_vert:Gv,linedashed_frag:Vv,meshbasic_vert:Wv,meshbasic_frag:Xv,meshlambert_vert:qv,meshlambert_frag:$v,meshmatcap_vert:Yv,meshmatcap_frag:Kv,meshnormal_vert:jv,meshnormal_frag:Zv,meshphong_vert:Jv,meshphong_frag:Qv,meshphysical_vert:ey,meshphysical_frag:ty,meshtoon_vert:ny,meshtoon_frag:iy,points_vert:sy,points_frag:ry,shadow_vert:ay,shadow_frag:oy,sprite_vert:ly,sprite_frag:cy},Fe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ai={basic:{uniforms:En([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:En([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:En([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:En([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:En([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Le(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:En([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:En([Fe.points,Fe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:En([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:En([Fe.common,Fe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:En([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:En([Fe.sprite,Fe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:En([Fe.common,Fe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:En([Fe.lights,Fe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ai.physical={uniforms:En([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Jc={r:0,b:0,g:0},hy=new Ye,Vm=new st;Vm.set(-1,0,0,0,1,0,0,0,1);function uy(i,e,t,n,s,r){let a=new Le(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function p(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let M=_.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(_){let b=!1,M=p(_);M===null?m(a,o):M&&M.isColor&&(m(M,1),b=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(_,b){let M=p(b);M&&M.isCubeTexture?(c===void 0&&(c=new je(new Bt(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:nr(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,d){this.matrixWorld.copyPosition(d.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hy.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vm),c.material.toneMapped=ct.getTransfer(M.colorSpace)!==Mt,(h!==M||u!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new je(new Yi(2,2),new Ct({name:"BackgroundMaterial",uniforms:nr(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ct.getTransfer(M.colorSpace)!==Mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,b){_.getRGB(Jc,Zu(i)),t.buffers.color.setClear(Jc.r,Jc.g,Jc.b,b,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:y,dispose:x}}function fy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(C,R,U,P,D){let G=!1,N=u(C,P,U,R);r!==N&&(r=N,c(r.object)),G=p(C,P,U,D),G&&g(C,P,U,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(C,R,U,P),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,R,U,P){let D=P.wireframe===!0,G=n[R.id];G===void 0&&(G={},n[R.id]=G);let N=C.isInstancedMesh===!0?C.id:0,q=G[N];q===void 0&&(q={},G[N]=q);let k=q[U.id];k===void 0&&(k={},q[U.id]=k);let O=k[D];return O===void 0&&(O=f(l()),k[D]=O),O}function f(C){let R=[],U=[],P=[];for(let D=0;D<t;D++)R[D]=0,U[D]=0,P[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:P,object:C,attributes:{},index:null}}function p(C,R,U,P){let D=r.attributes,G=R.attributes,N=0,q=U.getAttributes();for(let k in q)if(q[k].location>=0){let z=D[k],X=G[k];if(X===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(X=C.instanceColor)),z===void 0||z.attribute!==X||X&&z.data!==X.data)return!0;N++}return r.attributesNum!==N||r.index!==P}function g(C,R,U,P){let D={},G=R.attributes,N=0,q=U.getAttributes();for(let k in q)if(q[k].location>=0){let z=G[k];z===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(z=C.instanceColor));let X={};X.attribute=z,z&&z.data&&(X.data=z.data),D[k]=X,N++}r.attributes=D,r.attributesNum=N,r.index=P}function y(){let C=r.newAttributes;for(let R=0,U=C.length;R<U;R++)C[R]=0}function m(C){x(C,0)}function x(C,R){let U=r.newAttributes,P=r.enabledAttributes,D=r.attributeDivisors;U[C]=1,P[C]===0&&(i.enableVertexAttribArray(C),P[C]=1),D[C]!==R&&(i.vertexAttribDivisor(C,R),D[C]=R)}function _(){let C=r.newAttributes,R=r.enabledAttributes;for(let U=0,P=R.length;U<P;U++)R[U]!==C[U]&&(i.disableVertexAttribArray(U),R[U]=0)}function b(C,R,U,P,D,G,N){N===!0?i.vertexAttribIPointer(C,R,U,D,G):i.vertexAttribPointer(C,R,U,P,D,G)}function M(C,R,U,P){y();let D=P.attributes,G=U.getAttributes(),N=R.defaultAttributeValues;for(let q in G){let k=G[q];if(k.location>=0){let O=D[q];if(O===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),O!==void 0){let z=O.normalized,X=O.itemSize,Q=e.get(O);if(Q===void 0)continue;let $=Q.buffer,W=Q.type,F=Q.bytesPerElement,j=W===i.INT||W===i.UNSIGNED_INT||O.gpuType===pc;if(O.isInterleavedBufferAttribute){let V=O.data,te=V.isInterleavedBuffer===!0?V.stride:V.itemSize,_e=O.offset;if(V.isInstancedInterleavedBuffer||V.isInstancedBufferAttribute){for(let be=0;be<k.locationSize;be++)x(k.location+be,V.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let be=0;be<k.locationSize;be++)m(k.location+be);i.bindBuffer(i.ARRAY_BUFFER,$);for(let be=0;be<k.locationSize;be++)b(k.location+be,X/k.locationSize,W,z,te*F,(_e+X/k.locationSize*be)*F,j)}else{if(O.isInstancedBufferAttribute){for(let V=0;V<k.locationSize;V++)x(k.location+V,O.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let V=0;V<k.locationSize;V++)m(k.location+V);i.bindBuffer(i.ARRAY_BUFFER,$);for(let V=0;V<k.locationSize;V++)b(k.location+V,X/k.locationSize,W,z,X*F,X/k.locationSize*V*F,j)}}else if(N!==void 0){let z=N[q];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(k.location,z);break;case 3:i.vertexAttrib3fv(k.location,z);break;case 4:i.vertexAttrib4fv(k.location,z);break;default:i.vertexAttrib1fv(k.location,z)}}}}_()}function w(){I();for(let C in n){let R=n[C];for(let U in R){let P=R[U];for(let D in P){let G=P[D];for(let N in G)h(G[N].object),delete G[N];delete P[D]}}delete n[C]}}function S(C){if(n[C.id]===void 0)return;let R=n[C.id];for(let U in R){let P=R[U];for(let D in P){let G=P[D];for(let N in G)h(G[N].object),delete G[N];delete P[D]}}delete n[C.id]}function d(C){for(let R in n){let U=n[R];for(let P in U){let D=U[P];if(D[C.id]===void 0)continue;let G=D[C.id];for(let N in G)h(G[N].object),delete G[N];delete D[C.id]}}}function v(C){for(let R in n){let U=n[R],P=C.isInstancedMesh===!0?C.id:0,D=U[P];if(D!==void 0){for(let G in D){let N=D[G];for(let q in N)h(N[q].object),delete N[q];delete D[G]}delete U[P],Object.keys(U).length===0&&delete n[R]}}}function I(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:d,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function dy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let p=0;p<h;p++)f+=c[p];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function py(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(d){return!(d!==On&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(d){let v=d===Ht&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Tn&&d!==$n&&!v&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&($e("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:M,maxSamples:w,samples:S}}function my(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Vn,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,x=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,b=_*4,M=x.clippingState||null;l.value=M,M=h(g,f,b,p);for(let w=0;w!==b;++w)M[w]=t[w];x.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let x=p+y*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<x)&&(m=new Float32Array(x));for(let b=0,M=p;b!==y;++b,M+=4)a.copy(u[b]).applyMatrix4(_,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Po=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ha(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bt(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:hn});r.uniforms.tEquirect.value=t;let a=new je(s,r),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=nn),new qr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Mm=256,gy=3,xy=20,Wm=256,Xm=16,_y=3,vy=new B,yy=new Le,ta=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qr(1,10,null),this._boxMesh=new je(new Bt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=vy}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(yy));let m=new qr(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Mm,$u(e))}_fromTexture(e,t){e.mapping===er||e.mapping===Kr?this._setSize(e.image.length===0?Mm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Sm(e,!1,!1),n=Math.log2(e)-gy;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Sm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===er||e.mapping===Kr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=My(),this._integrationMaterial=Sy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Xm);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-_y)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Wm*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=by());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Sm(i,e,t){return new Po(i,{minFilter:ni,generateMipmaps:e,type:Ht,colorSpace:Cn,depthBuffer:t})}function Io(i,e,t){return new Ct({name:i,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:gn,blending:hn,depthTest:!1,depthWrite:!1})}function My(){return Io("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wm}u

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
	`)}function Sy(){return Io("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xm}},`

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
	`)}function by(){return Io("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${xy}
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
	`)}function bm(){return Io("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Tm(){return Io("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ty(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===uc||p===fc)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Po(g.height);return y.fromEquirectangularTexture(i,f),e.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let p=f.mapping,g=p===uc||p===fc,y=p===er||p===Kr;if(g||y){let m=t.get(f),x=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new ta(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let _=f.image;return g&&_&&_.height>0||y&&_&&l(_)?(n===null&&(n=new ta(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,p){return p===uc?f.mapping=er:p===fc&&(f.mapping=Kr),f}function l(f){let p=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&p++;return p===g}function c(f){let p=f.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(f){let p=f.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Ey(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&zs("WebGLRenderer: "+n+" extension not supported."),s}}}function wy(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(g){let y=g.attributes;for(let m in y)e.update(y[m],i.ARRAY_BUFFER)}function u(g){let y=g.index,m=g.attributes.position,x=0;if(m===void 0)return;let _=y!==null?y.array.length:m.array.length/3-1,b=m.count>=65535?Oa:Ua,M=new b(Math.ceil(_/3)*6,1),w=M.array;if(y!==null){let d=y.array;x=y.version;for(let v=0,I=0;v<_;v+=3){let E=d[v+0],C=d[v+1],R=d[v+2];w[I++]=E,w[I++]=C,w[I++]=C,w[I++]=R,w[I++]=R,w[I++]=E}}else{x=m.version;for(let d=0,v=0;d<_;d+=3){let I=d+0,E=d+1,C=d+2;w[v++]=I,w[v++]=E,w[v++]=E,w[v++]=C,w[v++]=C,w[v++]=I}}M.version=x;let S=r.get(g);S&&e.remove(S),r.set(g,M)}function f(g){let y=r.get(g);if(y){let m=g.index;m!==null&&y.version<m.version&&u(g)}else u(g);return r.get(g)}function p(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:f,dispose:p}}function Ay(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,u*a,p),t.update(f,n,p))}function h(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let y=0;for(let m=0;m<p;m++)y+=f[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ry(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cy(i,e,t){let n=new WeakMap,s=new St;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let I=function(){d.dispose(),n.delete(o),o.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let M=o.attributes.position.count*b,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*w*4*u),d=new Da(S,M,w,u);d.type=$n,d.needsUpdate=!0;let v=b*4;for(let E=0;E<u;E++){let C=m[E],R=x[E],U=_[E],P=M*w*4*E;for(let D=0;D<C.count;D++){let G=D*v;p===!0&&(s.fromBufferAttribute(C,D),S[P+G+0]=s.x,S[P+G+1]=s.y,S[P+G+2]=s.z,S[P+G+3]=0),g===!0&&(s.fromBufferAttribute(R,D),S[P+G+4]=s.x,S[P+G+5]=s.y,S[P+G+6]=s.z,S[P+G+7]=0),y===!0&&(s.fromBufferAttribute(U,D),S[P+G+8]=s.x,S[P+G+9]=s.y,S[P+G+10]=s.z,S[P+G+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:d,size:new pe(M,w)},n.set(o,f),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Py(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Iy={[mo]:"LINEAR_TONE_MAPPING",[go]:"REINHARD_TONE_MAPPING",[xo]:"CINEON_TONE_MAPPING",[_o]:"ACES_FILMIC_TONE_MAPPING",[yo]:"AGX_TONE_MAPPING",[Qs]:"NEUTRAL_TONE_MAPPING",[vo]:"CUSTOM_TONE_MAPPING"};function Ly(i,e,t,n,s,r){let a=new Ut(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new At;h.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ht([0,2,0,0,2,0],2));let u=new Vr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new je(h,u),p=new es(-1,1,1,-1,0,1),g=null,y=null,m=!1,x,_=null,b=[],M=!1;this.setSize=function(w,S){a.setSize(w,S),o!==null&&o.setSize(w,S),l!==null&&l.setSize(w,S);for(let d=0;d<b.length;d++){let v=b[d];v.setSize&&v.setSize(w,S)}},this.setEffects=function(w){b=w,M=b.length>0&&b[0].isRenderPass===!0;let S=a.width,d=a.height;b.length>0&&o===null&&(o=new Ut(S,d,{type:Ht,depthBuffer:!1,stencilBuffer:!1}),l=new Ut(S,d,{type:Ht,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&b.some(I=>I.needsDepthTexture===!0);v!==(a.depthTexture!==null)&&(v===!0&&c===null&&(c=new hi(S,d),r===!0&&(c.format=fi,c.type=ns)),a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v);for(let I=0;I<b.length;I++){let E=b[I];E.setSize&&E.setSize(S,d),v&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(w,S){if(m||w.toneMapping===Ti&&b.length===0)return!1;if(_=S,S!==null){let d=S.width,v=S.height;(a.width!==d||a.height!==v)&&this.setSize(d,v)}return M===!1&&w.setRenderTarget(a),x=w.toneMapping,w.toneMapping=Ti,!0},this.hasRenderPass=function(){return M},this.end=function(w,S){w.toneMapping=x,m=!0;let d=a,v=o;for(let I=0;I<b.length;I++){let E=b[I];E.enabled!==!1&&(E.render(w,v,d,S),E.needsSwap!==!1&&(d=v,v=v===o?l:o))}if(g!==w.outputColorSpace||y!==w.toneMapping){g=w.outputColorSpace,y=w.toneMapping,u.defines={},ct.getTransfer(g)===Mt&&(u.defines.SRGB_TRANSFER="");let I=Iy[y];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=d.texture,w.setRenderTarget(_),w.render(f,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var qm=new Kt,$m=new hi(1,1),Ym=new Ga(1),Km=new Da,jm=new Gl,Zm=new Ha,Em=[],wm=[],Am=new Float32Array(16),Rm=new Float32Array(9),Cm=new Float32Array(4);function na(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Em[s];if(r===void 0&&(r=new Float32Array(s),Em[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function th(i,e){let t=wm[e];t===void 0&&(t=new Int32Array(e),wm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function Fy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Cm.set(n),i.uniformMatrix2fv(this.addr,!1,Cm),rn(t,n)}}function By(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Rm.set(n),i.uniformMatrix3fv(this.addr,!1,Rm),rn(t,n)}}function zy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Am.set(n),i.uniformMatrix4fv(this.addr,!1,Am),rn(t,n)}}function ky(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Wy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function nh(i){return i.version===0&&(i.compareFunction=Vu,i.needsUpdate=!0),i}function Yy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=nh($m):r=qm,t.setTexture2D(e||r,s)}function Ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jm,s)}function jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=nh(Ym):r=Zm,t.setTextureCube(e||r,s)}function Zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Km,s)}function Jy(i){switch(i){case 5126:return Dy;case 35664:return Ny;case 35665:return Uy;case 35666:return Oy;case 35674:return Fy;case 35675:return By;case 35676:return zy;case 5124:case 35670:return ky;case 35667:case 35671:return Hy;case 35668:case 35672:return Gy;case 35669:case 35673:return Vy;case 5125:return Wy;case 36294:return Xy;case 36295:return qy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return Zy}}function Qy(i,e){i.uniform1fv(this.addr,e)}function eM(i,e){let t=na(e,this.size,2);i.uniform2fv(this.addr,t)}function tM(i,e){let t=na(e,this.size,3);i.uniform3fv(this.addr,t)}function nM(i,e){let t=na(e,this.size,4);i.uniform4fv(this.addr,t)}function iM(i,e){let t=na(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sM(i,e){let t=na(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rM(i,e){let t=na(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function aM(i,e){i.uniform1iv(this.addr,e)}function oM(i,e){i.uniform2iv(this.addr,e)}function lM(i,e){i.uniform3iv(this.addr,e)}function cM(i,e){i.uniform4iv(this.addr,e)}function hM(i,e){i.uniform1uiv(this.addr,e)}function uM(i,e){i.uniform2uiv(this.addr,e)}function fM(i,e){i.uniform3uiv(this.addr,e)}function dM(i,e){i.uniform4uiv(this.addr,e)}function pM(i,e,t){let n=this.cache,s=e.length,r=th(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=nh($m):a=qm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function mM(i,e,t){let n=this.cache,s=e.length,r=th(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||jm,r[a])}function gM(i,e,t){let n=this.cache,s=e.length,r=th(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=nh(Ym):a=Zm;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function xM(i,e,t){let n=this.cache,s=e.length,r=th(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Km,r[a])}function _M(i){switch(i){case 5126:return Qy;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return sM;case 35676:return rM;case 5124:case 35670:return aM;case 35667:case 35671:return oM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return hM;case 36294:return uM;case 36295:return fM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return xM}}var cf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jy(t.type)}},hf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_M(t.type)}},uf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},of=/(\w+)(\])?(\[|\.)?/g;function Pm(i,e){i.seq.push(e),i.map[e.id]=e}function vM(i,e,t){let n=i.name,s=n.length;for(of.lastIndex=0;;){let r=of.exec(n),a=of.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pm(t,c===void 0?new cf(o,i,e):new hf(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new uf(o),Pm(t,u)),t=u}}}var ea=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);vM(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Im(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var yM=37297,MM=0;function SM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Lm=new st;function bM(i){ct._getMatrix(Lm,ct.workingColorSpace,i);let e=`mat3( ${Lm.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Ia:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+SM(i.getShaderSource(e),o)}else return r}function TM(i,e){let t=bM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var EM={[mo]:"Linear",[go]:"Reinhard",[xo]:"Cineon",[_o]:"ACESFilmic",[yo]:"AgX",[Qs]:"Neutral",[vo]:"Custom"};function wM(i,e){let t=EM[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qc=new B;function AM(){ct.getLuminanceCoefficients(Qc);let i=Qc.x.toFixed(4),e=Qc.y.toFixed(4),t=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function CM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function PM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Co(i){return i!==""}function Nm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Um(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var IM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(i){return i.replace(IM,LM)}function LM(i,e){let t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ff(t)}var DM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Om(i){return i.replace(DM,NM)}function NM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var UM={[Zs]:"SHADOWMAP_TYPE_PCF",[$r]:"SHADOWMAP_TYPE_VSM"};function OM(i){return UM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var FM={[Kr]:"ENVMAP_MODE_REFRACTION"};function BM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":FM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zM={[hc]:"ENVMAP_BLENDING_MULTIPLY",[Zp]:"ENVMAP_BLENDING_MIX",[Jp]:"ENVMAP_BLENDING_ADD"};function kM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":zM[i.combine]||"ENVMAP_BLENDING_NONE"}function HM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=OM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=BM(t),u=kM(t),f=RM(t),p=CM(r),g=s.createProgram(),y,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Co).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Co).join(`
`),m.length>0&&(m+=`
`)):(y=[Fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),m=[Fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?ft.tonemapping_pars_fragment:"",t.toneMapping!==Ti?wM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,TM("linearToOutputTexel",t.outputColorSpace),AM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Co).join(`
`)),a=ff(a),a=Nm(a,t),a=Um(a,t),o=ff(o),o=Nm(o,t),o=Um(o,t),a=Om(a),o=Om(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+y+a,b=x+m+o,M=Im(s,s.VERTEX_SHADER,_),w=Im(s,s.FRAGMENT_SHADER,b);s.attachShader(g,M),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function S(E){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(g)||"",R=s.getShaderInfoLog(M)||"",U=s.getShaderInfoLog(w)||"",P=C.trim(),D=R.trim(),G=U.trim(),N=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,w);else{let k=Dm(s,M,"vertex"),O=Dm(s,w,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+P+`
`+k+`
`+O)}else P!==""?$e("WebGLProgram: Program Info Log:",P):(D===""||G==="")&&(q=!1);q&&(E.diagnostics={runnable:N,programLog:P,vertexShader:{log:D,prefix:y},fragmentShader:{log:G,prefix:m}})}s.deleteShader(M),s.deleteShader(w),d=new ea(s,g),v=PM(s,g)}let d;this.getUniforms=function(){return d===void 0&&S(this),d};let v;this.getAttributes=function(){return v===void 0&&S(this),v};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(g,yM)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=w,this}var GM=0,df=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pf(e),t.set(e,n)),n}},pf=class{constructor(e){this.id=GM++,this.code=e,this.usedTimes=0}};function VM(i){return i===ws||i===Eo||i===wo}function WM(i,e,t,n,s,r){let a=new Fr,o=new df,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(d){return l.add(d),d===0?"uv":`uv${d}`}function g(d,v,I,E,C,R){let U=E.fog,P=C.geometry,D=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?E.environment:null,G=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,N=e.get(d.envMap||D,G),q=f[d.type],k=n.precision;d.precision!==null&&(k=n.getMaxPrecision(d.precision),k!==d.precision&&$e("WebGLProgram.getParameters:",d.precision,"not supported, using",k,"instead."));let O=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,z=O!==void 0?O.length:0,X=0;P.morphAttributes.position!==void 0&&(X=1),P.morphAttributes.normal!==void 0&&(X=2),P.morphAttributes.color!==void 0&&(X=3);let Q,$,W,F;if(q){let Oe=Ai[q];Q=Oe.vertexShader,$=Oe.fragmentShader}else{Q=d.vertexShader,$=d.fragmentShader;let Oe=o.getVertexShaderStage(d),wt=o.getFragmentShaderStage(d);o.update(d,Oe,wt),W=Oe.id,F=wt.id}let j=i.getRenderTarget(),V=i.state.buffers.depth.getReversed(),te=C.isInstancedMesh===!0,_e=C.isBatchedMesh===!0,be=!!d.map,ve=!!d.matcap,Ie=!!N,re=Ie&&N.isPMREMTexture===!0,me=!!d.aoMap,Me=!!d.lightMap,ye=!!d.bumpMap&&d.wireframe===!1,ce=!!d.normalMap,ze=!!d.displacementMap,Ue=!!d.emissiveMap,We=!!d.metalnessMap,Ze=!!d.roughnessMap,Je=d.anisotropy>0,Y=d.clearcoat>0,bt=d.diffuseRoughness>0,et=d.dispersion>0,ue=d.retroreflectivity>0,J=d.iridescence>0,ge=d.sheen>0,de=d.transmission>0,Ae=Je&&!!d.anisotropyMap,L=Y&&!!d.clearcoatMap,T=Y&&!!d.clearcoatNormalMap,Z=Y&&!!d.clearcoatRoughnessMap,fe=bt&&!!d.diffuseRoughnessMap,se=J&&!!d.iridescenceMap,xe=J&&!!d.iridescenceThicknessMap,Te=ge&&!!d.sheenColorMap,oe=ge&&!!d.sheenRoughnessMap,le=!!d.specularMap,Se=!!d.specularColorMap,H=!!d.specularIntensityMap,he=de&&!!d.transmissionMap,ne=de&&!!d.thicknessMap,Re=!!d.gradientMap,we=!!d.alphaMap,Ce=d.alphaTest>0,ke=!!d.alphaHash,rt=!!d.extensions,Ee=Ti;d.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let qe=re?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,it={shaderID:q,shaderType:d.type,shaderName:d.name,vertexShader:Q,fragmentShader:$,defines:d.defines,customVertexShaderID:W,customFragmentShaderID:F,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:k,batching:_e,batchingColor:_e&&C._colorsTexture!==null,instancing:te,instancingColor:te&&C.instanceColor!==null,instancingMorph:te&&C.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!d.alphaToCoverage,map:be,matcap:ve,envMap:Ie,envMapMode:Ie&&N.mapping,envMapPMREM:re,envMapMaxLod:re?qe.length-1:null,envMapSize:re?qe[0].width:null,aoMap:me,lightMap:Me,bumpMap:ye,normalMap:ce,displacementMap:ze,emissiveMap:Ue,normalMapObjectSpace:ce&&d.normalMapType===nm,normalMapTangentSpace:ce&&d.normalMapType===Qr,packedNormalMap:ce&&d.normalMapType===Qr&&VM(d.normalMap.format),metalnessMap:We,roughnessMap:Ze,anisotropy:Je,anisotropyMap:Ae,clearcoat:Y,clearcoatMap:L,clearcoatNormalMap:T,clearcoatRoughnessMap:Z,diffuseRoughness:bt,diffuseRoughnessMap:fe,dispersion:et,retroreflection:ue,iridescence:J,iridescenceMap:se,iridescenceThicknessMap:xe,sheen:ge,sheenColorMap:Te,sheenRoughnessMap:oe,specularMap:le,specularColorMap:Se,specularIntensityMap:H,transmission:de,transmissionMap:he,thicknessMap:ne,gradientMap:Re,opaque:d.transparent===!1&&d.blending===Yr&&d.alphaToCoverage===!1,alphaMap:we,alphaTest:Ce,alphaHash:ke,combine:d.combine,mapUv:be&&p(d.map.channel),aoMapUv:me&&p(d.aoMap.channel),lightMapUv:Me&&p(d.lightMap.channel),bumpMapUv:ye&&p(d.bumpMap.channel),normalMapUv:ce&&p(d.normalMap.channel),displacementMapUv:ze&&p(d.displacementMap.channel),emissiveMapUv:Ue&&p(d.emissiveMap.channel),metalnessMapUv:We&&p(d.metalnessMap.channel),roughnessMapUv:Ze&&p(d.roughnessMap.channel),anisotropyMapUv:Ae&&p(d.anisotropyMap.channel),clearcoatMapUv:L&&p(d.clearcoatMap.channel),clearcoatNormalMapUv:T&&p(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(d.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&p(d.diffuseRoughnessMap.channel),iridescenceMapUv:se&&p(d.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(d.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(d.sheenColorMap.channel),sheenRoughnessMapUv:oe&&p(d.sheenRoughnessMap.channel),specularMapUv:le&&p(d.specularMap.channel),specularColorMapUv:Se&&p(d.specularColorMap.channel),specularIntensityMapUv:H&&p(d.specularIntensityMap.channel),transmissionMapUv:he&&p(d.transmissionMap.channel),thicknessMapUv:ne&&p(d.thicknessMap.channel),alphaMapUv:we&&p(d.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ce||Je),vertexNormals:!!P.attributes.normal,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!P.attributes.uv&&(be||we),fog:!!U,useFog:d.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||P.attributes.normal===void 0&&ce===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:V,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:X,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:R.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:d.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:be&&d.map.isVideoTexture===!0&&ct.getTransfer(d.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ue&&d.emissiveMap.isVideoTexture===!0&&ct.getTransfer(d.emissiveMap.colorSpace)===Mt,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===Ft,flipSided:d.side===gn,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:rt&&d.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&d.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function y(d){let v=[];if(d.shaderID?v.push(d.shaderID):(v.push(d.customVertexShaderID),v.push(d.customFragmentShaderID)),d.defines!==void 0)for(let I in d.defines)v.push(I),v.push(d.defines[I]);return d.isRawShaderMaterial===!1&&(m(v,d),x(v,d),v.push(i.outputColorSpace)),v.push(d.customProgramCacheKey),v.join()}function m(d,v){d.push(v.precision),d.push(v.outputColorSpace),d.push(v.envMapMode),d.push(v.envMapPMREM),d.push(v.envMapMaxLod),d.push(v.envMapSize),d.push(v.mapUv),d.push(v.alphaMapUv),d.push(v.lightMapUv),d.push(v.aoMapUv),d.push(v.bumpMapUv),d.push(v.normalMapUv),d.push(v.displacementMapUv),d.push(v.emissiveMapUv),d.push(v.metalnessMapUv),d.push(v.roughnessMapUv),d.push(v.anisotropyMapUv),d.push(v.clearcoatMapUv),d.push(v.clearcoatNormalMapUv),d.push(v.clearcoatRoughnessMapUv),d.push(v.diffuseRoughnessMapUv),d.push(v.iridescenceMapUv),d.push(v.iridescenceThicknessMapUv),d.push(v.sheenColorMapUv),d.push(v.sheenRoughnessMapUv),d.push(v.specularMapUv),d.push(v.specularColorMapUv),d.push(v.specularIntensityMapUv),d.push(v.transmissionMapUv),d.push(v.thicknessMapUv),d.push(v.combine),d.push(v.fogExp2),d.push(v.sizeAttenuation),d.push(v.morphTargetsCount),d.push(v.numSunLights),d.push(v.numDirLights),d.push(v.numPointLights),d.push(v.numSpotLights),d.push(v.numSpotLightMaps),d.push(v.numHemiLights),d.push(v.numRectAreaLights),d.push(v.numSunLightShadows),d.push(v.numDirLightShadows),d.push(v.numPointLightShadows),d.push(v.numSpotLightShadows),d.push(v.numSpotLightShadowsWithMaps),d.push(v.numLightProbes),d.push(v.numLightProbeGrids),d.push(v.shadowMapType),d.push(v.toneMapping),d.push(v.numClippingPlanes),d.push(v.numClipIntersection),d.push(v.depthPacking)}function x(d,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.diffuseRoughness&&a.enable(25),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),d.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),d.push(a.mask)}function _(d){let v=f[d.type],I;if(v){let E=Ai[v];I=xn.clone(E.uniforms)}else I=d.uniforms;return I}function b(d,v){let I=h.get(v);return I!==void 0?++I.usedTimes:(I=new HM(i,v,d,s),c.push(I),h.set(v,I)),I}function M(d){if(--d.usedTimes===0){let v=c.indexOf(d);c[v]=c[c.length-1],c.pop(),h.delete(d.cacheKey),d.destroy()}}function w(d){o.remove(d)}function S(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:_,acquireProgram:b,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:S}}function XM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function qM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Bm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,g,y,m,x){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:x},i[e]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=g,_.materialVariant=a(f),_.groupOrder=y,_.renderOrder=f.renderOrder,_.z=m,_.group=x),e++,_}function l(f,p,g,y,m,x,_){_.reversedDepth===!0&&(m=-m);let b=o(f,p,g,y,m,x);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function c(f,p,g,y,m,x){let _=o(f,p,g,y,m,x);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function h(f,p){t.length>1&&t.sort(f||qM),n.length>1&&n.sort(p||Bm),s.length>1&&s.sort(p||Bm)}function u(){for(let f=e,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function $M(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new zm,i.set(n,[a])):s>=r.length?(a=new zm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function YM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Le};break;case"SpotLight":t={position:new B,direction:new B,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function KM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var jM=0;function ZM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function JM(i){let e=new YM,t=KM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Ye,a=new Ye;function o(c){let h=0,u=0,f=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let p=0,g=0,y=0,m=0,x=0,_=0,b=0,M=0,w=0,S=0,d=0,v=0,I=0,E=0;c.sort(ZM);for(let R=0,U=c.length;R<U;R++){let P=c[R],D=P.color,G=P.intensity,N=P.distance,q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ws?q=P.shadow.map.texture:q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=D.r*G,u+=D.g*G,f+=D.b*G;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],G);E++}else if(P.isSunLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let O=P.shadow,z=t.get(P);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[g]=z,n.sunShadowMap[g]=q;let X=O.getViewportCount();for(let Q=0;Q<X;Q++)n.sunShadowMatrix[y+Q]=O.getMatrix(Q),n.sunShadowCascade[y+Q]=O._cascadeData[Q];y+=X,g++}n.sun[p]=k,p++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let O=P.shadow,z=t.get(P);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=P.shadow.matrix,w++}n.directional[m]=k,m++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(D).multiplyScalar(G),k.distance=N,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[_]=k;let O=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,O.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[_]=O.matrix,P.castShadow){let z=t.get(P);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=q,d++}_++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(D).multiplyScalar(G),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[b]=k,b++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let O=P.shadow,z=t.get(P);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,z.shadowCameraNear=O.camera.near,z.shadowCameraFar=O.camera.far,n.pointShadow[x]=z,n.pointShadowMap[x]=q,n.pointShadowMatrix[x]=P.shadow.matrix,S++}n.point[x]=k,x++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(G),k.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[M]=k,M++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.sunLength!==p||C.directionalLength!==m||C.pointLength!==x||C.spotLength!==_||C.rectAreaLength!==b||C.hemiLength!==M||C.numSunShadows!==g||C.numDirectionalShadows!==w||C.numPointShadows!==S||C.numSpotShadows!==d||C.numSpotMaps!==v||C.numLightProbes!==E)&&(n.sun.length=p,n.directional.length=m,n.spot.length=_,n.rectArea.length=b,n.point.length=x,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=d,n.spotShadowMap.length=d,n.spotLightMatrix.length=d+v-I,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=E,C.sunLength=p,C.directionalLength=m,C.pointLength=x,C.spotLength=_,C.rectAreaLength=b,C.hemiLength=M,C.numSunShadows=g,C.numDirectionalShadows=w,C.numPointShadows=S,C.numSpotShadows=d,C.numSpotMaps=v,C.numLightProbes=E,n.version=jM++)}function l(c,h){let u=0,f=0,p=0,g=0,y=0,m=0,x=h.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let M=c[_];if(M.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(x),u++}else if(M.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),f++}else if(M.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),g++}else if(M.isRectAreaLight){let w=n.rectArea[y];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),a.identity(),r.copy(M.matrixWorld),r.premultiply(x),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let w=n.point[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),p++}else if(M.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(x),m++}}}return{setup:o,setupView:l,state:n}}function km(i){let e=new JM(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function QM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new km(i),e.set(s,[o])):r>=a.length?(o=new km(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var eS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tS=`uniform sampler2D shadow_pass;
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
}`,nS=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],iS=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Hm=new Ye,Ro=new B,lf=new B;function sS(i,e,t){let n=new _s,s=new pe,r=new pe,a=new St,o=new Jl,l=new Ql,c={},h=t.maxTextureSize,u={[bi]:gn,[gn]:bi,[Ft]:Ft},f=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:eS,fragmentShader:tS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new je(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zs;let x=this.type;this.render=function(S,d,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Op&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zs);let I=i.getRenderTarget(),E=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),R=i.state;R.setBlending(hn),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let U=x!==this.type;U&&d.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(D=>D.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,D=S.length;P<D;P++){let G=S[P],N=G.shadow;if(N===void 0){$e("WebGLShadowMap:",G,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let q=N.getFrameExtents();s.multiply(q),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,N.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=k,N.map===null||U===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===$r){if(G.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Ut(s.x,s.y,{format:ws,type:Ht,minFilter:nn,magFilter:nn,generateMipmaps:!1}),N.map.texture.name=G.name+".shadowMap",N.map.depthTexture=new hi(s.x,s.y,$n),N.map.depthTexture.name=G.name+".shadowMapDepth",N.map.depthTexture.format=Wi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Nt,N.map.depthTexture.magFilter=Nt}else G.isPointLight?(N.map=new Po(s.x),N.map.depthTexture=new Ga(s.x,ui)):(N.map=new Ut(s.x,s.y),N.map.depthTexture=new hi(s.x,s.y,ui)),N.map.depthTexture.name=G.name+".shadowMap",N.map.depthTexture.format=Wi,this.type===Zs?(N.map.depthTexture.compareFunction=k?Gu:Hu,N.map.depthTexture.minFilter=nn,N.map.depthTexture.magFilter=nn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Nt,N.map.depthTexture.magFilter=Nt);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);let O=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();G.isPointLight!==!0&&N.updateMatrices(G,v);let z=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:v.layers;for(let X=0;X<O;X++){let Q=N.getCamera(X);if(G.isPointLight){let $=N.camera,W=N.matrix,F=G.distance||$.far;F!==$.far&&($.far=F,$.updateProjectionMatrix()),Ro.setFromMatrixPosition(G.matrixWorld),$.position.copy(Ro),lf.copy($.position),lf.add(nS[X]),$.up.copy(iS[X]),$.lookAt(lf),$.updateMatrixWorld(),W.makeTranslation(-Ro.x,-Ro.y,-Ro.z),Hm.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Hm,$.coordinateSystem,$.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,X),i.clear();else{X===0&&(i.setRenderTarget(N.map),i.clear());let $=N.getViewport(X);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),R.viewport(a)}n=N.getFrustum(X),M(d,v,Q,G,z,this.type)}N.isPointLightShadow!==!0&&this.type===$r&&_(N,v),N.needsUpdate=!1}x=this.type,m.needsUpdate=!1,i.setRenderTarget(I,E,C)};function _(S,d){let v=e.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ut(s.x,s.y,{format:ws,type:Ht}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(d,null,v,f,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(d,null,v,p,y,null)}function b(S,d,v,I){let E=null,C=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)E=C;else if(E=v.isPointLight===!0?l:o,i.localClippingEnabled&&d.clipShadows===!0&&Array.isArray(d.clippingPlanes)&&d.clippingPlanes.length!==0||d.displacementMap&&d.displacementScale!==0||d.alphaMap&&d.alphaTest>0||d.map&&d.alphaTest>0||d.alphaToCoverage===!0){let R=E.uuid,U=d.uuid,P=c[R];P===void 0&&(P={},c[R]=P);let D=P[U];D===void 0&&(D=E.clone(),P[U]=D,d.addEventListener("dispose",w)),E=D}if(E.visible=d.visible,E.wireframe=d.wireframe,I===$r?E.side=d.shadowSide!==null?d.shadowSide:d.side:E.side=d.shadowSide!==null?d.shadowSide:u[d.side],E.alphaMap=d.alphaMap,E.alphaTest=d.alphaToCoverage===!0?.5:d.alphaTest,E.map=d.map,E.clipShadows=d.clipShadows,E.clippingPlanes=d.clippingPlanes,E.clipIntersection=d.clipIntersection,E.displacementMap=d.displacementMap,E.displacementScale=d.displacementScale,E.displacementBias=d.displacementBias,E.wireframeLinewidth=d.wireframeLinewidth,E.linewidth=d.linewidth,v.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let R=i.properties.get(E);R.light=v}return E}function M(S,d,v,I,E,C){if(S.visible===!1)return;if(S.layers.test(E)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===$r)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let P=e.update(S),D=S.material;if(Array.isArray(D)){let G=P.groups;for(let N=0,q=G.length;N<q;N++){let k=G[N],O=D[k.materialIndex];if(O&&O.visible){let z=b(S,O,I,C);S.onBeforeShadow(i,S,d,v,P,z,k),i.renderBufferDirect(v,null,P,z,S,k),S.onAfterShadow(i,S,d,v,P,z,k)}}}else if(D.visible){let G=b(S,D,I,C);S.onBeforeShadow(i,S,d,v,P,G,null),i.renderBufferDirect(v,null,P,G,S,null),S.onAfterShadow(i,S,d,v,P,G,null)}}let U=S.children;for(let P=0,D=U.length;P<D;P++)M(U[P],d,v,I,E,C)}function w(S){S.target.removeEventListener("dispose",w);for(let v in c){let I=c[v],E=S.target.uuid;E in I&&(I[E].dispose(),delete I[E])}}}function rS(i,e){function t(){let H=!1,he=new St,ne=null,Re=new St(0,0,0,0);return{setMask:function(we){ne!==we&&!H&&(i.colorMask(we,we,we,we),ne=we)},setLocked:function(we){H=we},setClear:function(we,Ce,ke,rt,Ee){Ee===!0&&(we*=rt,Ce*=rt,ke*=rt),he.set(we,Ce,ke,rt),Re.equals(he)===!1&&(i.clearColor(we,Ce,ke,rt),Re.copy(he))},reset:function(){H=!1,ne=null,Re.set(-1,0,0,0)}}}function n(){let H=!1,he=!1,ne=null,Re=null,we=null;return{setReversed:function(Ce){if(he!==Ce){let ke=e.get("EXT_clip_control");Ce?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),he=Ce;let rt=we;we=null,this.setClear(rt)}},getReversed:function(){return he},setTest:function(Ce){Ce?V(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(Ce){ne!==Ce&&!H&&(i.depthMask(Ce),ne=Ce)},setFunc:function(Ce){if(he&&(Ce=fm[Ce]),Re!==Ce){switch(Ce){case Dl:i.depthFunc(i.NEVER);break;case Nl:i.depthFunc(i.ALWAYS);break;case Ul:i.depthFunc(i.LESS);break;case Ir:i.depthFunc(i.LEQUAL);break;case Ol:i.depthFunc(i.EQUAL);break;case Fl:i.depthFunc(i.GEQUAL);break;case Bl:i.depthFunc(i.GREATER);break;case zl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=Ce}},setLocked:function(Ce){H=Ce},setClear:function(Ce){we!==Ce&&(we=Ce,he&&(Ce=1-Ce),i.clearDepth(Ce))},reset:function(){H=!1,ne=null,Re=null,we=null,he=!1}}}function s(){let H=!1,he=null,ne=null,Re=null,we=null,Ce=null,ke=null,rt=null,Ee=null;return{setTest:function(qe){H||(qe?V(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(qe){he!==qe&&!H&&(i.stencilMask(qe),he=qe)},setFunc:function(qe,it,Oe){(ne!==qe||Re!==it||we!==Oe)&&(i.stencilFunc(qe,it,Oe),ne=qe,Re=it,we=Oe)},setOp:function(qe,it,Oe){(Ce!==qe||ke!==it||rt!==Oe)&&(i.stencilOp(qe,it,Oe),Ce=qe,ke=it,rt=Oe)},setLocked:function(qe){H=qe},setClear:function(qe){Ee!==qe&&(i.clearStencil(qe),Ee=qe)},reset:function(){H=!1,he=null,ne=null,Re=null,we=null,Ce=null,ke=null,rt=null,Ee=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},f={},p=new WeakMap,g=[],y=null,m=!1,x=null,_=null,b=null,M=null,w=null,S=null,d=null,v=new Le(0,0,0),I=0,E=!1,C=null,R=null,U=null,P=null,D=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,q=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=q>=2);let O=null,z={},X=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),$=new St().fromArray(X),W=new St().fromArray(Q);function F(H,he,ne,Re){let we=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(H,Ce),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<ne;ke++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(he+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Ce}let j={};j[i.TEXTURE_2D]=F(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=F(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=F(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=F(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),V(i.DEPTH_TEST),a.setFunc(Ir),ye(!1),ce(Ru),V(i.CULL_FACE),me(hn);function V(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function te(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function _e(H,he){return f[H]!==he?(i.bindFramebuffer(H,he),f[H]=he,H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he),!0):!1}function be(H,he){let ne=g,Re=!1;if(H){ne=p.get(he),ne===void 0&&(ne=[],p.set(he,ne));let we=H.textures;if(ne.length!==we.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,ke=we.length;Ce<ke;Ce++)ne[Ce]=i.COLOR_ATTACHMENT0+Ce;ne.length=we.length,Re=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ne)}function ve(H){return y!==H?(i.useProgram(H),y=H,!0):!1}let Ie={[ti]:i.FUNC_ADD,[Fp]:i.FUNC_SUBTRACT,[Bp]:i.FUNC_REVERSE_SUBTRACT};Ie[zp]=i.MIN,Ie[kp]=i.MAX;let re={[Js]:i.ZERO,[Hp]:i.ONE,[Gp]:i.SRC_COLOR,[Iu]:i.SRC_ALPHA,[qp]:i.SRC_ALPHA_SATURATE,[po]:i.DST_COLOR,[fo]:i.DST_ALPHA,[Vp]:i.ONE_MINUS_SRC_COLOR,[Lu]:i.ONE_MINUS_SRC_ALPHA,[Xp]:i.ONE_MINUS_DST_COLOR,[Wp]:i.ONE_MINUS_DST_ALPHA,[$p]:i.CONSTANT_COLOR,[Yp]:i.ONE_MINUS_CONSTANT_COLOR,[Kp]:i.CONSTANT_ALPHA,[jp]:i.ONE_MINUS_CONSTANT_ALPHA};function me(H,he,ne,Re,we,Ce,ke,rt,Ee,qe){if(H===hn){m===!0&&(te(i.BLEND),m=!1);return}if(m===!1&&(V(i.BLEND),m=!0),H!==cc){if(H!==x||qe!==E){if((_!==ti||w!==ti)&&(i.blendEquation(i.FUNC_ADD),_=ti,w=ti),qe)switch(H){case Yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qn:i.blendFunc(i.ONE,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",H);break}else switch(H){case Yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cu:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pu:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",H);break}b=null,M=null,S=null,d=null,v.set(0,0,0),I=0,x=H,E=qe}return}we=we||he,Ce=Ce||ne,ke=ke||Re,(he!==_||we!==w)&&(i.blendEquationSeparate(Ie[he],Ie[we]),_=he,w=we),(ne!==b||Re!==M||Ce!==S||ke!==d)&&(i.blendFuncSeparate(re[ne],re[Re],re[Ce],re[ke]),b=ne,M=Re,S=Ce,d=ke),(rt.equals(v)===!1||Ee!==I)&&(i.blendColor(rt.r,rt.g,rt.b,Ee),v.copy(rt),I=Ee),x=H,E=!1}function Me(H,he){H.side===Ft?te(i.CULL_FACE):V(i.CULL_FACE);let ne=H.side===gn;he&&(ne=!ne),ye(ne),H.blending===Yr&&H.transparent===!1?me(hn):me(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let Re=H.stencilWrite;o.setTest(Re),Re&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ue(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function ye(H){C!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),C=H)}function ce(H){H!==Np?(V(i.CULL_FACE),H!==R&&(H===Ru?i.cullFace(i.BACK):H===Up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),R=H}function ze(H){H!==U&&(N&&i.lineWidth(H),U=H)}function Ue(H,he,ne){H?(V(i.POLYGON_OFFSET_FILL),(P!==he||D!==ne)&&(P=he,D=ne,a.getReversed()&&(he=-he,ne=-ne),i.polygonOffset(he,ne))):te(i.POLYGON_OFFSET_FILL)}function We(H){H?V(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function Ze(H){H===void 0&&(H=i.TEXTURE0+G-1),O!==H&&(i.activeTexture(H),O=H)}function Je(H,he,ne){ne===void 0&&(O===null?ne=i.TEXTURE0+G-1:ne=O);let Re=z[ne];Re===void 0&&(Re={type:void 0,texture:void 0},z[ne]=Re),(Re.type!==H||Re.texture!==he)&&(O!==ne&&(i.activeTexture(ne),O=ne),i.bindTexture(H,he||j[H]),Re.type=H,Re.texture=he)}function Y(){let H=z[O];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function bt(){try{i.compressedTexImage2D(...arguments)}catch(H){Qe("WebGLState:",H)}}function et(){try{i.compressedTexImage3D(...arguments)}catch(H){Qe("WebGLState:",H)}}function ue(){try{i.texSubImage2D(...arguments)}catch(H){Qe("WebGLState:",H)}}function J(){try{i.texSubImage3D(...arguments)}catch(H){Qe("WebGLState:",H)}}function ge(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Qe("WebGLState:",H)}}function de(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Qe("WebGLState:",H)}}function Ae(){try{i.texStorage2D(...arguments)}catch(H){Qe("WebGLState:",H)}}function L(){try{i.texStorage3D(...arguments)}catch(H){Qe("WebGLState:",H)}}function T(){try{i.texImage2D(...arguments)}catch(H){Qe("WebGLState:",H)}}function Z(){try{i.texImage3D(...arguments)}catch(H){Qe("WebGLState:",H)}}function fe(H){return u[H]!==void 0?u[H]:i.getParameter(H)}function se(H,he){u[H]!==he&&(i.pixelStorei(H,he),u[H]=he)}function xe(H){$.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),$.copy(H))}function Te(H){W.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),W.copy(H))}function oe(H,he){let ne=c.get(he);ne===void 0&&(ne=new WeakMap,c.set(he,ne));let Re=ne.get(H);Re===void 0&&(Re=i.getUniformBlockIndex(he,H.name),i.uniformBlockBinding(he,Re,Re),ne.set(H,Re))}function le(H,he,ne){let we=c.get(he).get(H);l[we]!==ne&&(i.bindBufferBase(i.UNIFORM_BUFFER,we,ne),l[we]=ne)}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},O=null,z={},f={},l={},p=new WeakMap,g=[],y=null,m=!1,x=null,_=null,b=null,M=null,w=null,S=null,d=null,v=new Le(0,0,0),I=0,E=!1,C=null,R=null,U=null,P=null,D=null,$.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:V,disable:te,bindFramebuffer:_e,drawBuffers:be,useProgram:ve,setBlending:me,setMaterial:Me,setFlipSided:ye,setCullFace:ce,setLineWidth:ze,setPolygonOffset:Ue,setScissorTest:We,activeTexture:Ze,bindTexture:Je,unbindTexture:Y,compressedTexImage2D:bt,compressedTexImage3D:et,texImage2D:T,texImage3D:Z,pixelStorei:se,getParameter:fe,updateUBOMapping:oe,uniformBlockBinding:le,texStorage2D:Ae,texStorage3D:L,texSubImage2D:ue,texSubImage3D:J,compressedTexSubImage2D:ge,compressedTexSubImage3D:de,scissor:xe,viewport:Te,reset:Se}}function aS(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,u=new Set,f,p=new WeakMap,g=new Set,y=new FinalizationRegistry(L=>g.delete(L)),m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,T){return m?new OffscreenCanvas(L,T):Nr("canvas")}function _(L,T,Z){let fe=1,se=Ae(L);if((se.width>Z||se.height>Z)&&(fe=Z/Math.max(se.width,se.height)),fe<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let xe=Math.floor(fe*se.width),Te=Math.floor(fe*se.height);f===void 0&&(f=x(xe,Te));let oe=T?x(xe,Te):f;return oe.width=xe,oe.height=Te,oe.getContext("2d").drawImage(L,0,0,xe,Te),$e("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+xe+"x"+Te+")."),oe}else return"data"in L&&$e("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),L;return L}function b(L){return L.generateMipmaps}function M(L){i.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(L,T,Z,fe,se,xe=!1){if(L!==null){if(i[L]!==void 0)return i[L];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Te;fe&&(Te=e.get("EXT_texture_norm16"),Te||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=T;if(T===i.RED&&(Z===i.FLOAT&&(oe=i.R32F),Z===i.HALF_FLOAT&&(oe=i.R16F),Z===i.UNSIGNED_BYTE&&(oe=i.R8),Z===i.UNSIGNED_SHORT&&Te&&(oe=Te.R16_EXT),Z===i.SHORT&&Te&&(oe=Te.R16_SNORM_EXT)),T===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.R8UI),Z===i.UNSIGNED_SHORT&&(oe=i.R16UI),Z===i.UNSIGNED_INT&&(oe=i.R32UI),Z===i.BYTE&&(oe=i.R8I),Z===i.SHORT&&(oe=i.R16I),Z===i.INT&&(oe=i.R32I)),T===i.RG&&(Z===i.FLOAT&&(oe=i.RG32F),Z===i.HALF_FLOAT&&(oe=i.RG16F),Z===i.UNSIGNED_BYTE&&(oe=i.RG8),Z===i.UNSIGNED_SHORT&&Te&&(oe=Te.RG16_EXT),Z===i.SHORT&&Te&&(oe=Te.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RG8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RG16UI),Z===i.UNSIGNED_INT&&(oe=i.RG32UI),Z===i.BYTE&&(oe=i.RG8I),Z===i.SHORT&&(oe=i.RG16I),Z===i.INT&&(oe=i.RG32I)),T===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),Z===i.UNSIGNED_INT&&(oe=i.RGB32UI),Z===i.BYTE&&(oe=i.RGB8I),Z===i.SHORT&&(oe=i.RGB16I),Z===i.INT&&(oe=i.RGB32I)),T===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),Z===i.UNSIGNED_INT&&(oe=i.RGBA32UI),Z===i.BYTE&&(oe=i.RGBA8I),Z===i.SHORT&&(oe=i.RGBA16I),Z===i.INT&&(oe=i.RGBA32I)),T===i.RGB&&(Z===i.UNSIGNED_SHORT&&Te&&(oe=Te.RGB16_EXT),Z===i.SHORT&&Te&&(oe=Te.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),T===i.RGBA){let le=xe?Ia:ct.getTransfer(se);Z===i.FLOAT&&(oe=i.RGBA32F),Z===i.HALF_FLOAT&&(oe=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(oe=le===Mt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&Te&&(oe=Te.RGBA16_EXT),Z===i.SHORT&&Te&&(oe=Te.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function d(L,T){let Z;return L?T===null||T===ui||T===ns?Z=i.DEPTH24_STENCIL8:T===$n?Z=i.DEPTH32F_STENCIL8:T===Zr&&(Z=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ui||T===ns?Z=i.DEPTH_COMPONENT24:T===$n?Z=i.DEPTH_COMPONENT32F:T===Zr&&(Z=i.DEPTH_COMPONENT16),Z}function v(L,T){return b(L)===!0||L.isFramebufferTexture&&L.minFilter!==Nt&&L.minFilter!==nn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function I(L){let T=new WeakRef(L);n.get(L).__ref=T,g.add(T),y.register(L,T,T)}function E(L){let T=n.get(L).__ref;T!==void 0&&(g.delete(T),y.unregister(T))}function C(L){U(L.target)}function R(L){P(L.target)}function U(L){L.removeEventListener("dispose",C),E(L),G(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function P(L){L.removeEventListener("dispose",R),E(L),q(L)}function D(){for(let L of g){let T=L.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):U(T))}g.clear(),u.clear()}function G(L){let T=n.get(L);if(T.__webglInit===void 0)return;let Z=L.source,fe=p.get(Z);if(fe){let se=fe[T.__cacheKey];se.usedTimes--,se.usedTimes===0&&N(L),Object.keys(fe).length===0&&p.delete(Z)}n.remove(L)}function N(L){let T=n.get(L);i.deleteTexture(T.__webglTexture);let Z=L.source,fe=p.get(Z);delete fe[T.__cacheKey],a.memory.textures--}function q(L){let T=n.get(L);T.__depthDisposeCallback&&T.__depthDisposeCallback();let Z=L.depthTexture;if(Z&&Z.renderTarget===L&&U(Z),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(T.__webglFramebuffer[se]))for(let xe=0;xe<T.__webglFramebuffer[se].length;xe++)i.deleteFramebuffer(T.__webglFramebuffer[se][xe]);else i.deleteFramebuffer(T.__webglFramebuffer[se]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[se])}else{if(Array.isArray(T.__webglFramebuffer))for(let se=0;se<T.__webglFramebuffer.length;se++)i.deleteFramebuffer(T.__webglFramebuffer[se]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let se=0;se<T.__webglColorRenderbuffer.length;se++)T.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[se]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let fe=L.textures;for(let se=0,xe=fe.length;se<xe;se++){let Te=n.get(fe[se]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(fe[se])}n.remove(L)}let k=0;function O(){k=0}function z(){return k}function X(L){k=L}function Q(){let L=k;return L>=s.maxTextures&&$e("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,L}function $(L){let T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.mipmapsAutoUpdate),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function W(L,T){let Z=n.get(L);if(L.isVideoTexture&&ge(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){let fe=L.image;if(fe===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(Z,L,T);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+T)}function F(L,T){let Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){Me(Z,L,T);return}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+T)}function j(L,T){let Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){Me(Z,L,T);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+T)}function V(L,T){let Z=n.get(L);if(L.version>0&&Z.__version!==L.version){ye(Z,L,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+T)}let te={[bn]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[Lr]:i.MIRRORED_REPEAT},_e={[Nt]:i.NEAREST,[dc]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},be={[sm]:i.NEVER,[Vu]:i.ALWAYS,[rm]:i.LESS,[Hu]:i.LEQUAL,[am]:i.EQUAL,[Gu]:i.GEQUAL,[om]:i.GREATER,[lm]:i.NOTEQUAL};function ve(L,T){if(T.type===$n&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===nn||T.magFilter===jr||T.magFilter===tr||T.magFilter===ni||T.minFilter===nn||T.minFilter===jr||T.minFilter===tr||T.minFilter===ni)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,te[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,te[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,te[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,_e[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,_e[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,be[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Nt||T.minFilter!==tr&&T.minFilter!==ni||T.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ie(L,T){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",C),I(T));let fe=T.source,se=p.get(fe);se===void 0&&(se={},p.set(fe,se));let xe=$(T);if(xe!==L.__cacheKey){se[xe]===void 0&&(se[xe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),se[xe].usedTimes++;let Te=se[L.__cacheKey];Te!==void 0&&(se[L.__cacheKey].usedTimes--,Te.usedTimes===0&&N(T)),L.__cacheKey=xe,L.__webglTexture=se[xe].texture}return Z}function re(L,T,Z){return Math.floor(Math.floor(L/Z)/T)}function me(L,T,Z,fe){let xe=L.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,Z,fe,T.data);else{xe.sort((H,he)=>H.start-he.start);let Te=0;for(let H=1;H<xe.length;H++){let he=xe[Te],ne=xe[H],Re=he.start+he.count,we=re(ne.start,T.width,4),Ce=re(he.start,T.width,4);ne.start<=Re+1&&we===Ce&&re(ne.start+ne.count-1,T.width,4)===we?he.count=Math.max(he.count,ne.start+ne.count-he.start):(++Te,xe[Te]=ne)}xe.length=Te+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),le=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let H=0,he=xe.length;H<he;H++){let ne=xe[H],Re=Math.floor(ne.start/4),we=Math.ceil(ne.count/4),Ce=Re%T.width,ke=Math.floor(Re/T.width),rt=we,Ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,ke),t.texSubImage2D(i.TEXTURE_2D,0,Ce,ke,rt,Ee,Z,fe,T.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function Me(L,T,Z){let fe=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=i.TEXTURE_3D);let se=Ie(L,T),xe=T.source;t.bindTexture(fe,L.__webglTexture,i.TEXTURE0+Z);let Te=n.get(xe);if(xe.version!==Te.__version||se===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap!="undefined"&&T.image instanceof ImageBitmap)===!1){let Ee=ct.getPrimaries(ct.workingColorSpace),qe=T.colorSpace===is?null:ct.getPrimaries(T.colorSpace),it=T.colorSpace===is||Ee===qe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let le=_(T.image,!1,s.maxTextureSize);le=de(T,le);let Se=r.convert(T.format,T.colorSpace),H=r.convert(T.type),he=S(T.internalFormat,Se,H,T.normalized,T.colorSpace,T.isVideoTexture);ve(fe,T);let ne,Re=T.mipmaps,we=T.isVideoTexture!==!0,Ce=Te.__version===void 0||se===!0,ke=xe.dataReady,rt=v(T,le);if(T.isDepthTexture)he=d(T.format===fi,T.type),Ce&&(we?t.texStorage2D(i.TEXTURE_2D,1,he,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,he,le.width,le.height,0,Se,H,null));else if(T.isDataTexture)if(Re.length>0){we&&Ce&&t.texStorage2D(i.TEXTURE_2D,rt,he,Re[0].width,Re[0].height);for(let Ee=0,qe=Re.length;Ee<qe;Ee++)ne=Re[Ee],we?ke&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,ne.width,ne.height,Se,H,ne.data):t.texImage2D(i.TEXTURE_2D,Ee,he,ne.width,ne.height,0,Se,H,ne.data);T.generateMipmaps=!1}else we?(Ce&&t.texStorage2D(i.TEXTURE_2D,rt,he,le.width,le.height),ke&&me(T,le,Se,H)):t.texImage2D(i.TEXTURE_2D,0,he,le.width,le.height,0,Se,H,le.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){we&&Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,he,Re[0].width,Re[0].height,le.depth);for(let Ee=0,qe=Re.length;Ee<qe;Ee++)if(ne=Re[Ee],T.format!==On)if(Se!==null)if(we){if(ke)if(T.layerUpdates.size>0){let it=ef(ne.width,ne.height,T.format,T.type);for(let Oe of T.layerUpdates){let wt=ne.data.subarray(Oe*it/ne.data.BYTES_PER_ELEMENT,(Oe+1)*it/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,Oe,ne.width,ne.height,1,Se,wt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,ne.width,ne.height,le.depth,Se,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ee,he,ne.width,ne.height,le.depth,0,ne.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?ke&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,ne.width,ne.height,le.depth,Se,H,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ee,he,ne.width,ne.height,le.depth,0,Se,H,ne.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{we&&Ce&&t.texStorage2D(i.TEXTURE_2D,rt,he,Re[0].width,Re[0].height);for(let Ee=0,qe=Re.length;Ee<qe;Ee++)ne=Re[Ee],T.format!==On?Se!==null?we?ke&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ee,0,0,ne.width,ne.height,Se,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,Ee,he,ne.width,ne.height,0,ne.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?ke&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,ne.width,ne.height,Se,H,ne.data):t.texImage2D(i.TEXTURE_2D,Ee,he,ne.width,ne.height,0,Se,H,ne.data)}else if(T.isDataArrayTexture)if(we){if(Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,he,le.width,le.height,le.depth),ke)if(T.layerUpdates.size>0){let Ee=ef(le.width,le.height,T.format,T.type);for(let qe of T.layerUpdates){let it=le.data.subarray(qe*Ee/le.data.BYTES_PER_ELEMENT,(qe+1)*Ee/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,qe,le.width,le.height,1,Se,H,it)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,H,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,le.width,le.height,le.depth,0,Se,H,le.data);else if(T.isData3DTexture)we?(Ce&&t.texStorage3D(i.TEXTURE_3D,rt,he,le.width,le.height,le.depth),ke&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,H,le.data)):t.texImage3D(i.TEXTURE_3D,0,he,le.width,le.height,le.depth,0,Se,H,le.data);else if(T.isFramebufferTexture){if(Ce)if(we)t.texStorage2D(i.TEXTURE_2D,rt,he,le.width,le.height);else{let Ee=le.width,qe=le.height;for(let it=0;it<rt;it++)t.texImage2D(i.TEXTURE_2D,it,he,Ee,qe,0,Se,H,null),Ee>>=1,qe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let Ee=i.canvas;if(Ee.hasAttribute("layoutsubtree")||Ee.setAttribute("layoutsubtree","true"),le.parentNode!==Ee){Ee.appendChild(le),u.add(T),Ee.onpaint=qe=>{let it=qe.changedElements;for(let Oe of u)it.includes(Oe.image)&&(Oe.needsUpdate=!0)},Ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,le);else{let it=i.RGBA,Oe=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,it,Oe,wt,le)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(we&&Ce){let Ee=Ae(Re[0]);t.texStorage2D(i.TEXTURE_2D,rt,he,Ee.width,Ee.height)}for(let Ee=0,qe=Re.length;Ee<qe;Ee++)ne=Re[Ee],we?ke&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,Se,H,ne):t.texImage2D(i.TEXTURE_2D,Ee,he,Se,H,ne);T.generateMipmaps=!1}else if(we){if(Ce){let Ee=Ae(le);t.texStorage2D(i.TEXTURE_2D,rt,he,Ee.width,Ee.height)}ke&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,H,le)}else t.texImage2D(i.TEXTURE_2D,0,he,Se,H,le);b(T)&&T.mipmapsAutoUpdate===!0&&M(fe),Te.__version=xe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ye(L,T,Z){if(T.image.length!==6)return;let fe=Ie(L,T),se=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Z);let xe=n.get(se);if(se.version!==xe.__version||fe===!0){t.activeTexture(i.TEXTURE0+Z);let Te=ct.getPrimaries(ct.workingColorSpace),oe=T.colorSpace===is?null:ct.getPrimaries(T.colorSpace),le=T.colorSpace===is||Te===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Se=T.isCompressedTexture||T.image[0].isCompressedTexture,H=T.image[0]&&T.image[0].isDataTexture,he=[];for(let Oe=0;Oe<6;Oe++)!Se&&!H?he[Oe]=_(T.image[Oe],!0,s.maxCubemapSize):he[Oe]=H?T.image[Oe].image:T.image[Oe],he[Oe]=de(T,he[Oe]);let ne=he[0],Re=r.convert(T.format,T.colorSpace),we=r.convert(T.type),Ce=S(T.internalFormat,Re,we,T.normalized,T.colorSpace),ke=T.isVideoTexture!==!0,rt=xe.__version===void 0||fe===!0,Ee=se.dataReady,qe=v(T,ne);ve(i.TEXTURE_CUBE_MAP,T);let it;if(T.isDepthTexture){if(Ce=d(T.format===fi,T.type),rt)if(ke)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ce,ne.width,ne.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,ne.width,ne.height,0,Re,we,null)}else if(Se){ke&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Ce,ne.width,ne.height);for(let Oe=0;Oe<6;Oe++){it=he[Oe].mipmaps;for(let wt=0;wt<it.length;wt++){let on=it[wt];T.format!==On?Re!==null?ke?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,wt,0,0,on.width,on.height,Re,on.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,wt,Ce,on.width,on.height,0,on.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,wt,0,0,on.width,on.height,Re,we,on.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,wt,Ce,on.width,on.height,0,Re,we,on.data)}}}else{if(it=T.mipmaps,ke&&rt){it.length>0&&qe++;let Oe=Ae(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Ce,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(H){ke?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,he[Oe].width,he[Oe].height,Re,we,he[Oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,he[Oe].width,he[Oe].height,0,Re,we,he[Oe].data);for(let wt=0;wt<it.length;wt++){let ls=it[wt].image[Oe].image;ke?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,wt+1,0,0,ls.width,ls.height,Re,we,ls.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,wt+1,Ce,ls.width,ls.height,0,Re,we,ls.data)}}else{ke?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Re,we,he[Oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,Re,we,he[Oe]);for(let wt=0;wt<it.length;wt++){let on=it[wt];ke?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,wt+1,0,0,Re,we,on.image[Oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,wt+1,Ce,Re,we,on.image[Oe])}}}b(T)&&T.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),xe.__version=se.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ce(L,T,Z,fe,se,xe){let Te=r.convert(Z.format,Z.colorSpace),oe=r.convert(Z.type),le=S(Z.internalFormat,Te,oe,Z.normalized,Z.colorSpace),Se=n.get(T),H=n.get(Z);if(H.__renderTarget=T,!Se.__hasExternalTextures){let he=Math.max(1,T.width>>xe),ne=Math.max(1,T.height>>xe);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,xe,le,he,ne,T.depth,0,Te,oe,null):t.texImage2D(se,xe,le,he,ne,0,Te,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),J(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,se,H.__webglTexture,0,ue(T)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,se,H.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(L,T,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){let fe=T.depthTexture,se=fe&&fe.isDepthTexture?fe.type:null,xe=d(T.stencilBuffer,se),Te=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;J(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(T),xe,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(T),xe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,xe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,L)}else{let fe=T.textures;for(let se=0;se<fe.length;se++){let xe=fe[se],Te=r.convert(xe.format,xe.colorSpace),oe=r.convert(xe.type),le=S(xe.internalFormat,Te,oe,xe.normalized,xe.colorSpace);J(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(T),le,T.width,T.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(T),le,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,le,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(L,T,Z){let fe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(T.depthTexture);se.__renderTarget=T;let xe=fe?T.depthTexture.image[0]:T.depthTexture.image;(!se.__webglTexture||xe.width!==T.width||xe.height!==T.height)&&(xe.width=T.width,xe.height=T.height,T.depthTexture.needsUpdate=!0),fe?V(T.depthTexture,0):W(T.depthTexture,0);let Te=se.__webglTexture,oe=ue(T),le=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,Se=T.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Wi)J(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,le,Te,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,Se,le,Te,0);else if(T.depthTexture.format===fi)J(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,le,Te,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,Se,le,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(L){let T=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){let fe=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){let se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",se)};fe.addEventListener("dispose",se),T.__depthDisposeCallback=se}T.__boundDepthTexture=fe}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let fe=0;fe<6;fe++)Ue(T.__webglFramebuffer[fe],L,fe);else L.texture.mipmaps.length>0?Ue(T.__webglFramebuffer[0],L,0):Ue(T.__webglFramebuffer,L,0);else if(Z){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=i.createRenderbuffer(),ze(T.__webglDepthbuffer[fe],L,!1);else{let se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,xe)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ze(T.__webglDepthbuffer,L,!1);else{let se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(L,T,Z){let fe=n.get(L);T!==void 0&&ce(fe.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&We(L)}function Je(L){let T=L.texture,Z=n.get(L),fe=n.get(T);L.addEventListener("dispose",R),I(L);let se=L.textures,xe=L.isWebGLCubeRenderTarget===!0,Te=se.length>1;if(Te||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=T.version,a.memory.textures++),xe){Z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps.length>0){Z.__webglFramebuffer[oe]=[];for(let le=0;le<T.mipmaps.length;le++)Z.__webglFramebuffer[oe][le]=i.createFramebuffer()}else Z.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)Z.__webglFramebuffer[oe]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Te)for(let oe=0,le=se.length;oe<le;oe++){let Se=n.get(se[oe]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&J(L)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let oe=0;oe<se.length;oe++){let le=se[oe];Z.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[oe]);let Se=r.convert(le.format,le.colorSpace),H=r.convert(le.type),he=S(le.internalFormat,Se,H,le.normalized,le.colorSpace,L.isXRRenderTarget===!0),ne=ue(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,he,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,Z.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),ve(i.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps.length>0)for(let le=0;le<T.mipmaps.length;le++)ce(Z.__webglFramebuffer[oe][le],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else ce(Z.__webglFramebuffer[oe],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);b(T)?M(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let oe=0,le=se.length;oe<le;oe++){let Se=se[oe],H=n.get(Se),he=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,H.__webglTexture),ve(he,Se),ce(Z.__webglFramebuffer,L,Se,i.COLOR_ATTACHMENT0+oe,he,0),b(Se)&&M(he)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(oe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,fe.__webglTexture),ve(oe,T),T.mipmaps.length>0)for(let le=0;le<T.mipmaps.length;le++)ce(Z.__webglFramebuffer[le],L,T,i.COLOR_ATTACHMENT0,oe,le);else ce(Z.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,oe,0);b(T)?M(oe):T.mipmaps.length>0&&i.texParameteri(oe,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&We(L)}function Y(L){let T=L.textures;for(let Z=0,fe=T.length;Z<fe;Z++){let se=T[Z];if(b(se)&&se.mipmapsAutoUpdate===!0){let xe=w(L),Te=n.get(se).__webglTexture;t.bindTexture(xe,Te),M(xe),t.unbindTexture()}}}let bt=[];function et(L){if(L.samples>0){if(J(L)===!1){let T=L.textures,Z=L.width,fe=L.height,se=i.COLOR_BUFFER_BIT,xe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(L),oe=T.length>1;if(oe)for(let Se=0;Se<T.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<T.length;Se++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);let H=n.get(T[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,H,0)}i.blitFramebuffer(0,0,Z,fe,0,0,Z,fe,se,i.NEAREST),l===!0&&(bt.length=0,bt.push(i.COLOR_ATTACHMENT0+Se),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&bt.push(xe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Se=0;Se<T.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);let H=n.get(T[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,H,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ue(L){return Math.min(s.maxSamples,L.samples)}function J(L){let T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ge(L){let T=a.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function de(L,T){let Z=L.colorSpace,fe=L.format,se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Cn&&Z!==is&&(ct.getTransfer(Z)===Mt?(fe!==On||se!==Tn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",Z)),T}function Ae(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=O,this.getTextureUnits=z,this.setTextureUnits=X,this.setTexture2D=W,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=Ze,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=J,this.dispose=D}function oS(i,e){function t(n,s=is){let r,a=ct.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nu)return i.BYTE;if(n===Uu)return i.SHORT;if(n===Zr)return i.UNSIGNED_SHORT;if(n===pc)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Ht)return i.HALF_FLOAT;if(n===Bu)return i.ALPHA;if(n===zu)return i.RGB;if(n===On)return i.RGBA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===xc)return i.RED;if(n===_c)return i.RED_INTEGER;if(n===ws)return i.RG;if(n===vc)return i.RG_INTEGER;if(n===yc)return i.RGBA_INTEGER;if(n===Mo||n===So||n===bo||n===To)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mc||n===Sc||n===bc||n===Tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ec||n===wc||n===Ac||n===Rc||n===Cc||n===Eo||n===Pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ec||n===wc)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ac)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rc)return r.COMPRESSED_R11_EAC;if(n===Cc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Eo)return r.COMPRESSED_RG11_EAC;if(n===Pc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Oc||n===Fc||n===Bc||n===zc||n===kc||n===Hc||n===Gc||n===Vc||n===Wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ic)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xc||n===qc||n===$c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xc)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yc||n===Kc||n===wo||n===jc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var lS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cS=`
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

}`,mf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Va(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ct({vertexShader:lS,fragmentShader:cS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gf=class extends vi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,y=typeof XRWebGLBinding!="undefined",m=new mf,x={},_=t.getContextAttributes(),b=null,M=null,w=[],S=[],d=new pe,v=null,I=null,E=new tn;E.viewport=new St;let C=new tn;C.viewport=new St;let R=[E,C],U=new oc,P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let W=w[$];return W===void 0&&(W=new Br,w[$]=W),W.getTargetRaySpace()},this.getControllerGrip=function($){let W=w[$];return W===void 0&&(W=new Br,w[$]=W),W.getGripSpace()},this.getHand=function($){let W=w[$];return W===void 0&&(W=new Br,w[$]=W),W.getHandSpace()};function G($){let W=S.indexOf($.inputSource);if(W===-1)return;let F=w[W];F!==void 0&&(F.update($.inputSource,$.frame,c||a),F.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",q);for(let $=0;$<w.length;$++){let W=S[$];W!==null&&(S[$]=null,w[$].disconnect(W))}P=null,D=null,m.reset();for(let $ in x)delete x[$];if(e.setRenderTarget(b),p=null,f=null,u=null,s=null,M=null,Q.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(d.width,d.height,!1),I!==null){let $=I.camera;$.fov=I.fov,$.zoom=I.zoom,$.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",N),s.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(d),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let F=null,j=null,V=null;_.depth&&(V=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=_.stencil?fi:Wi,j=_.stencil?ns:ui);let te={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(te),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Ut(f.textureWidth,f.textureHeight,{format:On,type:Tn,depthTexture:new hi(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let F={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,F),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ut(p.framebufferWidth,p.framebufferHeight,{format:On,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Q.setContext(s),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q($){for(let W=0;W<$.removed.length;W++){let F=$.removed[W],j=S.indexOf(F);j>=0&&(S[j]=null,w[j].disconnect(F))}for(let W=0;W<$.added.length;W++){let F=$.added[W],j=S.indexOf(F);if(j===-1){for(let te=0;te<w.length;te++)if(te>=S.length){S.push(F),j=te;break}else if(S[te]===null){S[te]=F,j=te;break}if(j===-1)break}let V=w[j];V&&V.connect(F)}}function k($,W){W===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(W.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let W=$.near,F=$.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(F=m.depthFar)),U.near=C.near=E.near=W,U.far=C.far=E.far=F,(P!==U.near||D!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,D=U.far),U.layers.mask=$.layers.mask|6,E.layers.mask=U.layers.mask&-5,C.layers.mask=U.layers.mask&-3;let j=$.parent,V=U.cameras;k(U,j);for(let te=0;te<V.length;te++)k(V[te],j);U.projectionMatrix.copy(E.projectionMatrix),U.projectionMatrixInverse.copy(E.projectionMatrixInverse),I===null&&$.isPerspectiveCamera&&(I={camera:$,fov:$.fov,zoom:$.zoom}),O($,U,j)};function O($,W,F){F===null?$.matrix.copy(W.matrixWorld):($.matrix.copy(F.matrixWorld),$.matrix.invert(),$.matrix.multiply(W.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(W.projectionMatrix),$.projectionMatrixInverse.copy(W.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Gs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function($){return x[$]};let z=null;function X($,W){if(h=W.getViewerPose(c||a),g=W,h!==null){let F=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let j=!1;F.length!==U.cameras.length&&(U.cameras.length=0,j=!0);for(let be=0;be<F.length;be++){let ve=F[be],Ie=null;if(p!==null)Ie=p.getViewport(ve);else{let me=u.getViewSubImage(f,ve);Ie=me.viewport,be===0&&(e.setRenderTargetTextures(M,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(M))}let re=R[be];re===void 0&&(re=new tn,re.layers.enable(be),re.viewport=new St,R[be]=re),re.matrix.fromArray(ve.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ve.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),be===0&&(U.matrix.copy(re.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),j===!0&&U.cameras.push(re)}let V=s.enabledFeatures;if(V&&V.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let be=u.getDepthInformation(F[0]);be&&be.isValid&&be.texture&&m.init(be,s.renderState)}if(V&&V.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let be=0;be<F.length;be++){let ve=F[be].camera;if(ve){let Ie=x[ve];Ie||(Ie=new Va,x[ve]=Ie);let re=u.getCameraImage(ve);Ie.sourceTexture=re}}}}for(let F=0;F<w.length;F++){let j=S[F],V=w[F];j!==null&&V!==void 0&&V.update(j,W,c||a)}z&&z($,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}let Q=new Gm;Q.setAnimationLoop(X),this.setAnimationLoop=function($){z=$},this.dispose=function(){}}},hS=new Ye,Jm=new st;Jm.set(-1,0,0,0,1,0,0,0,1);function uS(i,e){function t(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function n(m,x){x.color.getRGB(m.fogColor.value,Zu(i)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function s(m,x,_,b,M){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),u(m,x)):x.isMeshPhongMaterial?(r(m,x),h(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),f(m,x),x.isMeshPhysicalMaterial&&p(m,x,M)):x.isMeshMatcapMaterial?(r(m,x),g(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),y(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(a(m,x),x.isLineDashedMaterial&&o(m,x)):x.isPointsMaterial?l(m,x,_,b):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,t(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===gn&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,t(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===gn&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,t(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,t(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let _=e.get(x),b=_.envMap,M=_.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(hS.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Jm),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,m.aoMapTransform))}function a(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform))}function o(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,_,b){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*_,m.scale.value=b*.5,x.map&&(m.map.value=x.map,t(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function u(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function f(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function p(m,x,_){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===gn&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,x){x.matcap&&(m.matcap.value=x.matcap)}function y(m,x){let _=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fS(i,e,t,n){let s={},r={};function a(_,b){let M=b.program;n.uniformBlockBinding(_,M,s[_.id])}function o(_,b){let M=s[_.id];M===void 0&&(g(_),M=l(_),s[_.id]=M,_.addEventListener("dispose",m));let w=b.program;n.updateUBOMapping(_,w);let S=e.render.frame;r[_.id]!==S&&(c(_),r[_.id]=S)}function l(_){let b=i.createBuffer(),M=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(_){let b=s[_.id],M=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,d=M.length;S<d;S++){let v=M[S];if(Array.isArray(v))for(let I=0,E=v.length;I<E;I++)h(v[I],S,I,w);else h(v,S,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,b,M,w){if(f(_,b,M,w)===!0){let S=_.__offset,d=_.value;if(Array.isArray(d)){let v=0;for(let I=0;I<d.length;I++){let E=d[I],C=y(E,!0);u(E,_.__data,v),v+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else u(d,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,_.__data)}}function u(_,b,M){typeof _=="number"||typeof _=="boolean"?b[M]=_:_.isMatrix3?(b[M]=_.elements[0],b[M+1]=_.elements[1],b[M+2]=_.elements[2],b[M+3]=0,b[M+4]=_.elements[3],b[M+5]=_.elements[4],b[M+6]=_.elements[5],b[M+7]=0,b[M+8]=_.elements[6],b[M+9]=_.elements[7],b[M+10]=_.elements[8],b[M+11]=0):ArrayBuffer.isView(_)?b.set(_.subarray(0,b.length-M),M):_.toArray(b,M)}function f(_,b,M,w){let S=_.value,d=b+"_"+M;if(Array.isArray(S)){w[d]===void 0&&(w[d]=[]);let v=w[d],I=!1;for(let E=0;E<S.length;E++)p(S[E],v,E)===!0&&(I=!0);return I}return p(S,w,d)}function p(_,b,M){if(b[M]===void 0)return typeof _=="number"||typeof _=="boolean"?b[M]=_:ArrayBuffer.isView(_)?b[M]=_.slice():b[M]=_.clone(),!0;{let w=b[M];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return b[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function g(_){let b=_.uniforms,M=0,w=16;for(let d=0,v=b.length;d<v;d++){let I=Array.isArray(b[d])?b[d]:[b[d]];for(let E=0,C=I.length;E<C;E++){let R=I[E],U=Array.isArray(R.value)?R.value:[R.value],P=Array.isArray(b[d])||Array.isArray(R.value),D=M;for(let N=0,q=U.length;N<q;N++){let k=U[N],O=y(k,P),z=M%w,X=z%O.boundary,Q=z+X;M+=X,Q!==0&&w-Q<O.storage&&(M+=w-Q),N===0&&(D=M),M+=O.storage}let G=R.type==="int"?Int32Array:R.type==="uint"?Uint32Array:Float32Array;R.__data=new G((M-D)/Float32Array.BYTES_PER_ELEMENT),R.__offset=D}}let S=M%w;return S>0&&(M+=w-S),_.__size=M,_.__cache={},this}function y(_,b){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",_),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(_){let b=_.target;b.removeEventListener("dispose",m),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function x(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:x}}var dS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function pS(){return wi===null&&(wi=new Qn(dS,16,16,ws,Ht),wi.name="DFG_LUT",wi.minFilter=nn,wi.magFilter=nn,wi.wrapS=Zn,wi.wrapT=Zn,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var eh=class{constructor(e={}){let{canvas:t=cm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Tn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=p,m=new Set([yc,vc,_c]),x=new Set([Tn,ui,Zr,ns,mc,gc]),_=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},w=null,S=null,d=[],v=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,C=!1,R=null,U=null,P=null,D=null;this._outputColorSpace=Rt;let G=0,N=0,q=null,k=-1,O=null,z=new St,X=new St,Q=null,$=new Le(0),W=0,F=t.width,j=t.height,V=1,te=null,_e=null,be=new St(0,0,F,j),ve=new St(0,0,F,j),Ie=!1,re=new _s,me=new Vl,Me=!1,ye=!1,ce=new Ye,ze=new B,Ue=new St,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function Je(){return q===null?V:1}let Y=n;function bt(A,K){return t.getContext(A,K)}let et,ue,J,ge,de,Ae,L,T,Z,fe,se,xe,Te,oe,le,Se,H,he,ne,Re,we,Ce,ke;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),Y===null){let K="webgl2";if(Y=bt(K,A),Y===null)throw bt(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(A){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Qe("WebGLRenderer: "+A.message),A}function rt(){et=new Ey(Y),et.init(),we=new oS(Y,et),ue=new py(Y,et,e,we),J=new rS(Y,et),ue.reversedDepthBuffer&&f&&J.buffers.depth.setReversed(!0),U=Y.createFramebuffer(),P=Y.createFramebuffer(),D=Y.createFramebuffer(),ge=new Ry(Y),de=new XM,Ae=new aS(Y,et,J,de,ue,we,ge),L=new Ty(E),T=new Px(Y),Ce=new fy(Y,T),Z=new wy(Y,T,ge,Ce),fe=new Py(Y,Z,T,Ce,ge),he=new Cy(Y,ue,Ae),le=new my(de),se=new WM(E,L,et,ue,Ce,le),xe=new uS(E,de),Te=new $M,oe=new QM(et),H=new uy(E,L,J,fe,g,l),Se=new sS(E,fe,ue),ke=new fS(Y,ge,ue,J),ne=new dy(Y,et,ge),Re=new Ay(Y,et,ge),ge.programs=se.programs,E.capabilities=ue,E.extensions=et,E.properties=de,E.renderLists=Te,E.shadowMap=Se,E.state=J,E.info=ge}y!==Tn&&(I=new Ly(y,t.width,t.height,o,s,r));let Ee=new gf(E,Y);this.xr=Ee,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(F,j,!1))},this.getSize=function(A){return A.set(F,j)},this.setSize=function(A,K,ae=!0){if(Ee.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,j=K,t.width=Math.floor(A*V),t.height=Math.floor(K*V),ae===!0&&(t.style.width=A+"px",t.style.height=K+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(F*V,j*V).floor()},this.setDrawingBufferSize=function(A,K,ae){F=A,j=K,V=ae,t.width=Math.floor(A*ae),t.height=Math.floor(K*ae),this.setViewport(0,0,A,K)},this.setEffects=function(A){if(y===Tn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let K=0;K<A.length;K++)if(A[K].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(be)},this.setViewport=function(A,K,ae,ee){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,K,ae,ee),J.viewport(z.copy(be).multiplyScalar(Je()).round())},this.getScissor=function(A){return A.copy(ve)},this.setScissor=function(A,K,ae,ee){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,K,ae,ee),J.scissor(X.copy(ve).multiplyScalar(Je()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(A){J.setScissorTest(Ie=A)},this.setOpaqueSort=function(A){te=A},this.setTransparentSort=function(A){_e=A},this.getClearColor=function(A){return A.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(A=!0,K=!0,ae=!0){let ee=0;if(A){let ie=!1;if(q!==null){let Ne=q.texture.format;ie=m.has(Ne)}if(ie){let Ne=q.texture.type,He=x.has(Ne),De=H.getClearColor(),Be=H.getClearAlpha(),Xe=De.r,at=De.g,mt=De.b;He?(_[0]=Xe,_[1]=at,_[2]=mt,_[3]=Be,Y.clearBufferuiv(Y.COLOR,0,_)):(b[0]=Xe,b[1]=at,b[2]=mt,b[3]=Be,Y.clearBufferiv(Y.COLOR,0,b))}else ee|=Y.COLOR_BUFFER_BIT}K&&(ee|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ee|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&Y.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),R=A},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),H.dispose(),Te.dispose(),oe.dispose(),Ae.dispose(),de.dispose(),L.dispose(),fe.dispose(),Z.dispose(),Ce.dispose(),ke.dispose(),se.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Rd),Ee.removeEventListener("sessionend",Cd),Is.stop()};function qe(A){A.preventDefault(),La("WebGLRenderer: Context Lost."),C=!0}function it(){La("WebGLRenderer: Context Restored."),C=!1;let A=ge.autoReset,K=Se.enabled,ae=Se.autoUpdate,ee=Se.needsUpdate,ie=Se.type;rt(),ge.autoReset=A,Se.enabled=K,Se.autoUpdate=ae,Se.needsUpdate=ee,Se.type=ie}function Oe(A){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function wt(A){let K=A.target;K.removeEventListener("dispose",wt),on(K)}function on(A){ls(A),de.remove(A)}function ls(A){let K=de.get(A).programs;K!==void 0&&(K.forEach(function(ae){se.releaseProgram(ae)}),A.isShaderMaterial&&se.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,ae,ee,ie,Ne){K===null&&(K=We);let He=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,De=Z0(A,K,ae,ee,ie);J.setMaterial(ee,He);let Be=ae.index,Xe=1;if(ee.wireframe===!0){if(Be=Z.getWireframeAttribute(ae),Be===void 0)return;Xe=2}let at=ae.drawRange,mt=ae.attributes.position,Ge=at.start*Xe,gt=(at.start+at.count)*Xe;Ne!==null&&(Ge=Math.max(Ge,Ne.start*Xe),gt=Math.min(gt,(Ne.start+Ne.count)*Xe)),Be!==null?(Ge=Math.max(Ge,0),gt=Math.min(gt,Be.count)):mt!=null&&(Ge=Math.max(Ge,0),gt=Math.min(gt,mt.count));let Jt=gt-Ge;if(Jt<0||Jt===1/0)return;Ce.setup(ie,ee,De,ae,Be);let Dt,Pt=ne;if(Be!==null&&(Dt=T.get(Be),Pt=Re,Pt.setIndex(Dt)),ie.isMesh)ee.wireframe===!0?(J.setLineWidth(ee.wireframeLinewidth*Je()),Pt.setMode(Y.LINES)):Pt.setMode(Y.TRIANGLES);else if(ie.isLine){let vn=ee.linewidth;vn===void 0&&(vn=1),J.setLineWidth(vn*Je()),ie.isLineSegments?Pt.setMode(Y.LINES):ie.isLineLoop?Pt.setMode(Y.LINE_LOOP):Pt.setMode(Y.LINE_STRIP)}else ie.isPoints?Pt.setMode(Y.POINTS):ie.isSprite&&Pt.setMode(Y.TRIANGLES);if(ie.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let vn=ie._multiDrawStarts,Ve=ie._multiDrawCounts,An=ie._multiDrawCount,Tt=Be?T.get(Be).bytesPerElement:1,Ls=de.get(ee).currentProgram.getUniforms();for(let yn=0;yn<An;yn++)Ls.setValue(Y,"_gl_DrawID",yn),Pt.render(vn[yn]/Tt,Ve[yn])}else if(ie.isInstancedMesh)Pt.renderInstances(Ge,Jt,ie.count);else if(ae.isInstancedBufferGeometry){let vn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ve=Math.min(ae.instanceCount,vn);Pt.renderInstances(Ge,Jt,Ve)}else Pt.render(Ge,Jt)};function Ad(A,K,ae,ee){R!==null&&A.isNodeMaterial&&R.setObject(ee,A),Me===!0&&le.setState(A,ae,!1),A.transparent===!0&&A.side===Ft&&A.forceSinglePass===!1?(A.side=gn,A.needsUpdate=!0,da(A,K,ee),A.side=bi,A.needsUpdate=!0,da(A,K,ee),A.side=Ft):da(A,K,ee)}this.compile=function(A,K,ae=null){ae===null&&(ae=A),R!==null&&R.renderStart(A,K,ae),S=oe.get(ae),S.init(K),v.push(S),ae.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(S.pushLight(ie),ie.castShadow&&S.pushShadow(ie))}),A!==ae&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(S.pushLight(ie),ie.castShadow&&S.pushShadow(ie))}),S.setupLights(),R!==null&&R.updateLights(S.state.lightsArray),ye=this.localClippingEnabled,Me=le.init(this.clippingPlanes,ye),Me===!0&&le.setGlobalState(this.clippingPlanes,K),R!==null&&Se.render(S.state.shadowsArray,ae,K);let ee=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let Ne=ie.material;if(Ne)if(Array.isArray(Ne))for(let He=0;He<Ne.length;He++){let De=Ne[He];Ad(De,ae,K,ie),ee.add(De)}else Ad(Ne,ae,K,ie),ee.add(Ne)}),S=v.pop(),R!==null&&R.renderEnd(),ee},this.compileAsync=function(A,K,ae=null){let ee=this.compile(A,K,ae);return new Promise(ie=>{function Ne(){if(ee.forEach(function(He){let Be=de.get(He).currentProgram;(Be===void 0||Be.isReady())&&ee.delete(He)}),ee.size===0){ie(A);return}setTimeout(Ne,10)}et.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Uh=null;function K0(A){Uh&&Uh(A)}function Rd(){Is.stop()}function Cd(){Is.start()}let Is=new Gm;Is.setAnimationLoop(K0),typeof self!="undefined"&&Is.setContext(self),this.setAnimationLoop=function(A){Uh=A,Ee.setAnimationLoop(A),A===null?Is.stop():Is.start()},Ee.addEventListener("sessionstart",Rd),Ee.addEventListener("sessionend",Cd),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;R!==null&&R.renderStart(A,K);let ae=Ee.enabled===!0&&Ee.isPresenting===!0,ee=I!==null&&(q===null||ae)&&I.begin(E,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(K),K=Ee.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,K,q),S=oe.get(A,v.length),S.init(K),S.state.textureUnits=Ae.getTextureUnits(),v.push(S),ce.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),K.isArrayCamera?me.setFromArrayCamera(K):re.setFromProjectionMatrix(ce,Jn,K.reversedDepth),ye=this.localClippingEnabled,Me=le.init(this.clippingPlanes,ye),w=Te.get(A,d.length),w.init(),d.push(w),this.info.render.frame++,Ee.enabled===!0&&Ee.isPresenting===!0){let He=E.xr.getDepthSensingMesh();He!==null&&Oh(He,K,-1/0,E.sortObjects)}Oh(A,K,0,E.sortObjects),w.finish(),R!==null&&R.updateLights(S.state.lightsArray),E.sortObjects===!0&&w.sort(te,_e),Ze=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Ze&&H.addToRenderList(w,A),this.info.autoReset===!0&&this.info.reset(),Me===!0&&le.beginShadows();let ie=S.state.shadowsArray;if(Se.render(ie,A,K),Me===!0&&le.endShadows(),(ee&&I.hasRenderPass())===!1){let He=w.opaque,De=w.transmissive;if(S.setupLights(),K.isArrayCamera){let Be=K.cameras;if(De.length>0)for(let Xe=0,at=Be.length;Xe<at;Xe++){let mt=Be[Xe];Id(He,De,A,mt)}Ze&&H.render(A);for(let Xe=0,at=Be.length;Xe<at;Xe++){let mt=Be[Xe];Pd(w,A,mt,mt.viewport)}}else De.length>0&&Id(He,De,A,K),Ze&&H.render(A),Pd(w,A,K)}q!==null&&N===0&&(Ae.updateMultisampleRenderTarget(q),Ae.updateRenderTargetMipmap(q)),ee&&I.end(E),A.isScene===!0&&A.onAfterRender(E,A,K),Ce.resetDefaultState(),k=-1,O=null,v.pop(),v.length>0?(S=v[v.length-1],Ae.setTextureUnits(S.state.textureUnits),Me===!0&&le.setGlobalState(E.clippingPlanes,S.state.camera)):S=null,d.pop(),d.length>0?w=d[d.length-1]:w=null,R!==null&&R.renderEnd()};function Oh(A,K,ae,ee){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){let He=K.isArrayCamera?me:re;if(!A.frustumCulled||A.intersectsFrustum(He)){ee&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);let De=fe.update(A),Be=A.material;Be.visible&&w.push(A,De,Be,ae,Ue.z,null,K)}}else if(A.isMesh||A.isLine||A.isPoints){let He=K.isArrayCamera?me:re;if(!A.frustumCulled||A.intersectsFrustum(He)){let De=fe.update(A),Be=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ue.copy(De.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(Be)){let Xe=De.groups;for(let at=0,mt=Xe.length;at<mt;at++){let Ge=Xe[at],gt=Be[Ge.materialIndex];gt&&gt.visible&&w.push(A,De,gt,ae,Ue.z,Ge,K)}}else Be.visible&&w.push(A,De,Be,ae,Ue.z,null,K)}}}let Ne=A.children;for(let He=0,De=Ne.length;He<De;He++)Oh(Ne[He],K,ae,ee)}function Pd(A,K,ae,ee){let{opaque:ie,transmissive:Ne,transparent:He}=A;S.setupLightsView(ae),Me===!0&&le.setGlobalState(E.clippingPlanes,ae),ee&&J.viewport(z.copy(ee)),ie.length>0&&Qo(ie,K,ae),Ne.length>0&&Qo(Ne,K,ae),He.length>0&&Qo(He,K,ae),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Id(A,K,ae,ee){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ee.id]===void 0){let Ge=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ee.id]=new Ut(1,1,{generateMipmaps:!0,type:Ge?Ht:Tn,minFilter:ni,samples:Math.max(4,ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Ne=S.state.transmissionRenderTarget[ee.id],He=ee.viewport||z;Ne.setSize(He.z*E.transmissionResolutionScale,He.w*E.transmissionResolutionScale);let De=E.getRenderTarget(),Be=E.getActiveCubeFace(),Xe=E.getActiveMipmapLevel();E.setRenderTarget(Ne),E.getClearColor($),W=E.getClearAlpha(),W<1&&E.setClearColor(16777215,.5),E.clear(),Ze&&H.render(ae);let at=E.toneMapping;E.toneMapping=Ti;let mt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),S.setupLightsView(ee),Me===!0&&le.setGlobalState(E.clippingPlanes,ee),Qo(A,ae,ee),Ae.updateMultisampleRenderTarget(Ne),Ae.updateRenderTargetMipmap(Ne),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let gt=0,Jt=K.length;gt<Jt;gt++){let Dt=K[gt],{object:Pt,geometry:vn,material:Ve,group:An}=Dt;if(Ve.side===Ft&&Pt.layers.test(ee.layers)){let Tt=Ve.side;Ve.side=gn,Ve.needsUpdate=!0,Ld(Pt,ae,ee,vn,Ve,An),Ve.side=Tt,Ve.needsUpdate=!0,Ge=!0}}Ge===!0&&(Ae.updateMultisampleRenderTarget(Ne),Ae.updateRenderTargetMipmap(Ne))}E.setRenderTarget(De,Be,Xe),E.setClearColor($,W),mt!==void 0&&(ee.viewport=mt),E.toneMapping=at}function Qo(A,K,ae){let ee=K.isScene===!0?K.overrideMaterial:null;for(let ie=0,Ne=A.length;ie<Ne;ie++){let He=A[ie],{object:De,geometry:Be,group:Xe}=He,at=He.material;at.allowOverride===!0&&ee!==null&&(at=ee),De.layers.test(ae.layers)&&Ld(De,K,ae,Be,at,Xe)}}function Ld(A,K,ae,ee,ie,Ne){R!==null&&ie.isNodeMaterial&&R.setObject(A,ie),A.onBeforeRender(E,K,ae,ee,ie,Ne),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(E,K,ae,ee,A,Ne),ie.transparent===!0&&ie.side===Ft&&ie.forceSinglePass===!1?(ie.side=gn,ie.needsUpdate=!0,E.renderBufferDirect(ae,K,ee,ie,A,Ne),ie.side=bi,ie.needsUpdate=!0,E.renderBufferDirect(ae,K,ee,ie,A,Ne),ie.side=Ft):E.renderBufferDirect(ae,K,ee,ie,A,Ne),A.onAfterRender(E,K,ae,ee,ie,Ne)}function Dd(A){let K=0;for(let ae of A)ae.texture!==null&&K++;return K}function da(A,K,ae){K.isScene!==!0&&(K=We);let ee=de.get(A),ie=S.state.lights,Ne=S.state.shadowsArray,He=ie.state.version,De=se.getParameters(A,ie.state,Ne,K,ae,S.state.lightProbeGridArray),Be=se.getProgramCacheKey(De),Xe=ee.programs;ee.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?K.environment:null,ee.fog=K.fog;let at=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ee.envMap=L.get(A.envMap||ee.environment,at),ee.envMapRotation=ee.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",wt),Xe=new Map,ee.programs=Xe,ee.programVariants=new Map);let mt=Xe.get(Be);if(mt!==void 0){if(ee.currentProgram===mt&&ee.lightsStateVersion===He)return Ud(A,De),mt}else De.uniforms=se.getUniforms(A),R!==null&&A.isNodeMaterial&&R.build(A,ae,De),A.onBeforeCompile(De,E),mt=se.acquireProgram(De,Be),Xe.set(Be,mt),ee.uniforms=De.uniforms;let Ge=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=le.uniform),Ud(A,De),ee.needsLights=Q0(A),ee.lightsStateVersion=He,ee.needsLights&&(Ge.ambientLightColor.value=ie.state.ambient,Ge.lightProbe.value=ie.state.probe,Ge.sunLights.value=ie.state.sun,Ge.sunLightShadows.value=ie.state.sunShadow,Ge.directionalLights.value=ie.state.directional,Ge.directionalLightShadows.value=ie.state.directionalShadow,Ge.spotLights.value=ie.state.spot,Ge.spotLightShadows.value=ie.state.spotShadow,Ge.rectAreaLights.value=ie.state.rectArea,Ge.ltc_1.value=ie.state.rectAreaLTC1,Ge.ltc_2.value=ie.state.rectAreaLTC2,Ge.pointLights.value=ie.state.point,Ge.pointLightShadows.value=ie.state.pointShadow,Ge.hemisphereLights.value=ie.state.hemi,Ge.sunShadowMatrix.value=ie.state.sunShadowMatrix,Ge.sunShadowCascade.value=ie.state.sunShadowCascade,Ge.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ge.spotLightMatrix.value=ie.state.spotLightMatrix,Ge.spotLightMap.value=ie.state.spotLightMap,Ge.pointShadowMatrix.value=ie.state.pointShadowMatrix),ee.numLightProbeGrids=Dd(S.state.lightProbeGridArray),ee.currentProgram=mt,ee.uniformsList=null,mt}function j0(A,K,ae,ee,ie){let Ne=de.get(A),He=Ne.currentProgram.id+","+ee+","+ie,De=Ne.programVariants.get(He);return De===void 0?(De=da(A,K,ae),Ne.programVariants.set(He,De)):(Ne.currentProgram=De,Ne.uniformsList=null,Ne.outputColorSpace=ee,Ne.toneMapping=ie),De}function Nd(A){if(A.uniformsList===null){let K=A.currentProgram.getUniforms();A.uniformsList=ea.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function Ud(A,K){let ae=de.get(A);ae.outputColorSpace=K.outputColorSpace,ae.batching=K.batching,ae.batchingColor=K.batchingColor,ae.instancing=K.instancing,ae.instancingColor=K.instancingColor,ae.instancingMorph=K.instancingMorph,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function Z0(A,K,ae,ee,ie){K.isScene!==!0&&(K=We),Ae.resetTextureUnits();let Ne=K.fog,He=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?K.environment:null,De=q===null?E.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ct.workingColorSpace,Be=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Xe=L.get(ee.envMap||He,Be),at=ee.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,mt=!!ae.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ge=!!ae.morphAttributes.position,gt=!!ae.morphAttributes.normal,Jt=!!ae.morphAttributes.color,Dt=Ti;ee.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Dt=E.toneMapping);let Pt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,vn=Pt!==void 0?Pt.length:0,Ve=de.get(ee),An=S.state.lights;if(Me===!0&&(ye===!0||A!==O)){let Vt=A===O&&ee.id===k;le.setState(ee,A,Vt)}let Tt=!1,Ls=!1;ee.version===Ve.__version?Ve.needsLights&&Ve.lightsStateVersion!==An.state.version||ie.isBatchedMesh&&Ve.batching===!1||!ie.isBatchedMesh&&Ve.batching===!0||ie.isBatchedMesh&&Ve.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&Ve.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&Ve.instancing===!1||!ie.isInstancedMesh&&Ve.instancing===!0||ie.isSkinnedMesh&&Ve.skinning===!1||!ie.isSkinnedMesh&&Ve.skinning===!0||ie.isInstancedMesh&&Ve.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ve.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ve.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ve.instancingMorph===!1&&ie.morphTexture!==null||Ve.envMap!==Xe||ee.fog===!0&&Ve.fog!==Ne||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==le.numPlanes||Ve.numIntersection!==le.numIntersection)||Ve.vertexAlphas!==at||Ve.vertexTangents!==mt||Ve.morphTargets!==Ge||Ve.morphNormals!==gt||Ve.morphColors!==Jt||Ve.morphTargetsCount!==vn||Ve.numLightProbeGrids!==Dd(S.state.lightProbeGridArray)?Tt=!0:(Ve.outputColorSpace!==De||Ve.toneMapping!==Dt)&&(Ls=!0):(Tt=!0,Ve.__version=ee.version);let yn=Ve.currentProgram;(Tt===!0||Ls===!0)&&(yn=Ls===!0?j0(ee,K,ie,De,Dt):da(ee,K,ie),R&&ee.isNodeMaterial&&R.onUpdateProgram(ee,yn,Ve));let el=!1,cs=!1,Ds=!1,yt=yn.getUniforms(),dn=Ve.uniforms;if(J.useProgram(yn.program)&&(el=!0,cs=!0,Ds=!0),ee.id!==k&&(k=ee.id,cs=!0),el||O!==A){J.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),yt.setValue(Y,"projectionMatrix",A.projectionMatrix),yt.setValue(Y,"viewMatrix",A.matrixWorldInverse);let ln=yt.map.cameraPosition;ln!==void 0&&ln.setValue(Y,ze.setFromMatrixPosition(A.matrixWorld)),ue.logarithmicDepthBuffer&&yt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&yt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),O!==A&&(O=A,cs=!0,Ds=!0)}if(Ve.needsLights&&(An.state.sunShadowMap.length>0&&yt.setValue(Y,"sunShadowMap",An.state.sunShadowMap,Ae),An.state.directionalShadowMap.length>0&&yt.setValue(Y,"directionalShadowMap",An.state.directionalShadowMap,Ae),An.state.spotShadowMap.length>0&&yt.setValue(Y,"spotShadowMap",An.state.spotShadowMap,Ae),An.state.pointShadowMap.length>0&&yt.setValue(Y,"pointShadowMap",An.state.pointShadowMap,Ae)),ie.isSkinnedMesh){yt.setOptional(Y,ie,"bindMatrix"),yt.setOptional(Y,ie,"bindMatrixInverse");let Vt=ie.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),yt.setValue(Y,"boneTexture",Vt.boneTexture,Ae))}ie.isBatchedMesh&&(yt.setOptional(Y,ie,"batchingTexture"),yt.setValue(Y,"batchingTexture",ie._matricesTexture,Ae),yt.setOptional(Y,ie,"batchingIdTexture"),yt.setValue(Y,"batchingIdTexture",ie._indirectTexture,Ae),yt.setOptional(Y,ie,"batchingColorTexture"),ie._colorsTexture!==null&&yt.setValue(Y,"batchingColorTexture",ie._colorsTexture,Ae));let ai=ae.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&he.update(ie,ae,yn),(cs||Ve.receiveShadow!==ie.receiveShadow)&&(Ve.receiveShadow=ie.receiveShadow,yt.setValue(Y,"receiveShadow",ie.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&K.environment!==null&&(dn.envMapIntensity.value=K.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=pS()),cs){if(yt.setValue(Y,"toneMappingExposure",E.toneMappingExposure),Ve.needsLights&&J0(dn,Ds),Ne&&ee.fog===!0&&xe.refreshFogUniforms(dn,Ne),xe.refreshMaterialUniforms(dn,ee,V,j,S.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.numLightProbeGrids>0){let Vt=M,ln=0;for(let Ui of S.state.lightProbeGridArray)Ui.texture!==null&&(Vt.textures[ln]=Ui.texture,Vt.min[ln]=Ui.boundingBox.min,Vt.max[ln]=Ui.boundingBox.max,Vt.resolution[ln]=Ui.resolution,ln++);for(let Ui in Vt)Vt[Ui].length=ln;dn.probesSH.value=Vt.textures,dn.probesMin.value=Vt.min,dn.probesMax.value=Vt.max,dn.probesResolution.value=Vt.resolution}ea.upload(Y,Nd(Ve),dn,Ae)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ea.upload(Y,Nd(Ve),dn,Ae),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&yt.setValue(Y,"center",ie.center),yt.setValue(Y,"modelViewMatrix",ie.modelViewMatrix),yt.setValue(Y,"normalMatrix",ie.normalMatrix),yt.setValue(Y,"modelMatrix",ie.matrixWorld),ee.uniformsGroups!==void 0){let Vt=ee.uniformsGroups;for(let ln=0,Ui=Vt.length;ln<Ui;ln++){let Fd=Vt[ln];ke.update(Fd,yn),ke.bind(Fd,yn)}}return yn}function J0(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.sunLights.needsUpdate=K,A.sunLightShadows.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function Q0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,K,ae){let ee=de.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),de.get(A.texture).__webglTexture=K,de.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ae,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,K){let ae=de.get(A);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,ae=0){q=A,G=K,N=ae;let ee=null,ie=!1,Ne=!1;if(A){let De=de.get(A);if(De.__useDefaultFramebuffer!==void 0){J.bindFramebuffer(Y.FRAMEBUFFER,De.__webglFramebuffer),z.copy(A.viewport),X.copy(A.scissor),Q=A.scissorTest,J.viewport(z),J.scissor(X),J.setScissorTest(Q),k=-1;return}else if(De.__webglFramebuffer===void 0)Ae.setupRenderTarget(A);else if(De.__hasExternalTextures)Ae.rebindTextures(A,de.get(A.texture).__webglTexture,de.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let at=A.depthTexture;if(De.__boundDepthTexture!==at){if(at!==null&&de.has(at)&&(A.width!==at.image.width||A.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(A)}}let Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ne=!0);let Xe=de.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[K])?ee=Xe[K][ae]:ee=Xe[K],ie=!0):A.samples>0&&Ae.useMultisampledRTT(A)===!1?ee=de.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?ee=Xe[ae]:ee=Xe,z.copy(A.viewport),X.copy(A.scissor),Q=A.scissorTest}else z.copy(be).multiplyScalar(V).floor(),X.copy(ve).multiplyScalar(V).floor(),Q=Ie;if(ae!==0&&(ee=U),J.bindFramebuffer(Y.FRAMEBUFFER,ee)&&J.drawBuffers(A,ee),J.viewport(z),J.scissor(X),J.setScissorTest(Q),ie){let De=de.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+K,De.__webglTexture,ae)}else if(Ne){let De=K;for(let Be=0;Be<A.textures.length;Be++){let Xe=de.get(A.textures[Be]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Be,Xe.__webglTexture,ae,De)}}else if(A!==null&&ae!==0){let De=de.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,De.__webglTexture,ae)}k=-1};function Od(A){let K=de.get(A);return(K.__readFormat!==A.format||K.__readType!==A.type)&&(K.__readFormat=A.format,K.__readType=A.type,K.__formatReadable=ue.textureFormatReadable(A.format),K.__typeReadable=ue.textureTypeReadable(A.type)),K}this.readRenderTargetPixels=function(A,K,ae,ee,ie,Ne,He,De=0){if(!(A&&A.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=de.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Be=Be[He],Array.isArray(Be)&&(Be=Be[0])),Be){J.bindFramebuffer(Y.FRAMEBUFFER,Be);try{let Xe=A.textures[De],at=Xe.format,mt=Xe.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+De);let Ge=Od(Xe);if(Ge.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-ee&&ae>=0&&ae<=A.height-ie&&Y.readPixels(K,ae,ee,ie,we.convert(at),we.convert(mt),Ne)}finally{let Xe=q!==null?de.get(q).__webglFramebuffer:null;J.bindFramebuffer(Y.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,K,ae,ee,ie,Ne,He,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=de.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Be=Be[He],Array.isArray(Be)&&(Be=Be[0])),Be)if(K>=0&&K<=A.width-ee&&ae>=0&&ae<=A.height-ie){J.bindFramebuffer(Y.FRAMEBUFFER,Be);let Xe=A.textures[De],at=Xe.format,mt=Xe.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+De);let Ge=Od(Xe);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,gt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ne.byteLength,Y.STREAM_READ),Y.readPixels(K,ae,ee,ie,we.convert(at),we.convert(mt),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let Jt=q!==null?de.get(q).__webglFramebuffer:null;J.bindFramebuffer(Y.FRAMEBUFFER,Jt);let Dt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await um(Y,Dt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,gt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ne),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(gt),Y.deleteSync(Dt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,K=null,ae=0){let ee=Math.pow(2,-ae),ie=Math.floor(A.image.width*ee),Ne=Math.floor(A.image.height*ee),He=K!==null?K.x:0,De=K!==null?K.y:0;Ae.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ae,0,0,He,De,ie,Ne),J.unbindTexture()},this.copyTextureToTexture=function(A,K,ae=null,ee=null,ie=0,Ne=0){let He,De,Be,Xe,at,mt,Ge,gt,Jt,Dt=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(ae!==null)He=ae.max.x-ae.min.x,De=ae.max.y-ae.min.y,Be=ae.isBox3?ae.max.z-ae.min.z:1,Xe=ae.min.x,at=ae.min.y,mt=ae.isBox3?ae.min.z:0;else{let yt=Math.pow(2,-ie);He=Math.floor(Dt.width*yt),De=Math.floor(Dt.height*yt),A.isDataArrayTexture?Be=Dt.depth:A.isData3DTexture?Be=Math.floor(Dt.depth*yt):Be=1,Xe=0,at=0,mt=0}ee!==null?(Ge=ee.x,gt=ee.y,Jt=ee.z):(Ge=0,gt=0,Jt=0);let Pt=we.convert(K.format),vn=we.convert(K.type),Ve;K.isData3DTexture?(Ae.setTexture3D(K,0),Ve=Y.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Ae.setTexture2DArray(K,0),Ve=Y.TEXTURE_2D_ARRAY):(Ae.setTexture2D(K,0),Ve=Y.TEXTURE_2D),J.activeTexture(Y.TEXTURE0),J.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,K.flipY),J.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),J.pixelStorei(Y.UNPACK_ALIGNMENT,K.unpackAlignment);let An=J.getParameter(Y.UNPACK_ROW_LENGTH),Tt=J.getParameter(Y.UNPACK_IMAGE_HEIGHT),Ls=J.getParameter(Y.UNPACK_SKIP_PIXELS),yn=J.getParameter(Y.UNPACK_SKIP_ROWS),el=J.getParameter(Y.UNPACK_SKIP_IMAGES);J.pixelStorei(Y.UNPACK_ROW_LENGTH,Dt.width),J.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Dt.height),J.pixelStorei(Y.UNPACK_SKIP_PIXELS,Xe),J.pixelStorei(Y.UNPACK_SKIP_ROWS,at),J.pixelStorei(Y.UNPACK_SKIP_IMAGES,mt);let cs=A.isDataArrayTexture||A.isData3DTexture,Ds=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){let yt=de.get(A),dn=de.get(K),ai=de.get(yt.__renderTarget),Vt=de.get(dn.__renderTarget);J.bindFramebuffer(Y.READ_FRAMEBUFFER,ai.__webglFramebuffer),J.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let ln=0;ln<Be;ln++)cs&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,de.get(A).__webglTexture,ie,mt+ln),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,de.get(K).__webglTexture,Ne,Jt+ln)),Y.blitFramebuffer(Xe,at,Xe+He,at+De,Ge,gt,Ge+He,gt+De,Y.DEPTH_BUFFER_BIT,Y.NEAREST);J.bindFramebuffer(Y.READ_FRAMEBUFFER,null),J.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||de.has(A)){let yt=de.get(A),dn=de.get(K);J.bindFramebuffer(Y.READ_FRAMEBUFFER,P),J.bindFramebuffer(Y.DRAW_FRAMEBUFFER,D);for(let ai=0;ai<Be;ai++)cs?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,yt.__webglTexture,ie,mt+ai):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,yt.__webglTexture,ie),Ds?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,dn.__webglTexture,Ne,Jt+ai):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,dn.__webglTexture,Ne),ie!==0?Y.blitFramebuffer(Xe,at,Xe+He,at+De,Ge,gt,Ge+He,gt+De,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ds?Y.copyTexSubImage3D(Ve,Ne,Ge,gt,Jt+ai,Xe,at,He,De):Y.copyTexSubImage2D(Ve,Ne,Ge,gt,Xe,at,He,De);J.bindFramebuffer(Y.READ_FRAMEBUFFER,null),J.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ds?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(Ve,Ne,Ge,gt,Jt,He,De,Be,Pt,vn,Dt.data):K.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ve,Ne,Ge,gt,Jt,He,De,Be,Pt,Dt.data):Y.texSubImage3D(Ve,Ne,Ge,gt,Jt,He,De,Be,Pt,vn,Dt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ne,Ge,gt,He,De,Pt,vn,Dt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ne,Ge,gt,Dt.width,Dt.height,Pt,Dt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ne,Ge,gt,He,De,Pt,vn,Dt);J.pixelStorei(Y.UNPACK_ROW_LENGTH,An),J.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Tt),J.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ls),J.pixelStorei(Y.UNPACK_SKIP_ROWS,yn),J.pixelStorei(Y.UNPACK_SKIP_IMAGES,el),Ne===0&&K.generateMipmaps===!0&&K.mipmapsAutoUpdate===!0&&Y.generateMipmap(Ve),J.unbindTexture()},this.initRenderTarget=function(A){de.get(A).__webglFramebuffer===void 0&&Ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ae.setTextureCube(A,0):A.isData3DTexture?Ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ae.setTexture2DArray(A,0):Ae.setTexture2D(A,0),J.unbindTexture()},this.resetState=function(){G=0,N=0,q=null,J.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};function xf(i,e){if(e===ku)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Jr||e===Ao){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Jr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Qm(i){let e=new Map,t=new Map,n=i.clone();return e0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function e0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)e0(i.children[n],e.children[n],t)}var Do=class extends Si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Tf(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new ih(t,dt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ih(t,dt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Bf(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ts.extractUrlBase(e);a=ts.resolveURL(c,this.path)}else a=ts.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Wr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===r0){try{a[dt.KHR_BINARY_GLTF]=new zf(e)}catch(u){s&&s(u);return}r=JSON.parse(a[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new qf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:a[u]=new Sf;break;case dt.KHR_DRACO_MESH_COMPRESSION:a[u]=new kf(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:a[u]=new Hf;break;case dt.KHR_MESH_QUANTIZATION:a[u]=new Gf;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function mS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Xt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Mf=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Le(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Cn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ts(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new js(h),c.distance=u;break;case"spot":c=new co(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Sf=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ot}extendParams(e,t,n){let s=[];e.color=new Le(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Cn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}},bf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Tf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(r,r)}return Promise.all(s)}},Ef=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},wf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Af=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Rf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Cn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Rt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Cf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Pf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(r[0],r[1],r[2],Cn),Promise.all(s)}},If=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Lf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(r[0],r[1],r[2],Cn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Rt)),Promise.all(s)}},Df=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Nf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Pn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Uf=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Of=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Ff=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},ih=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},Bf=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ii.TRIANGLES&&c.mode!==ii.TRIANGLE_STRIP&&c.mode!==ii.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,p=[];for(let g of u){let y=new Ye,m=new B,x=new Wn,_=new B(1,1,1),b=new qi(g.geometry,g.material,f);for(let w=0;w<f;w++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,w),l.SCALE&&_.fromBufferAttribute(l.SCALE,w),b.setMatrixAt(w,y.compose(m,x,_));let M=null;for(let w in l)if(w==="_COLOR_0"){let S=l[w];b.instanceColor=new Xi(S.array,S.itemSize,S.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(M===null){let d=b.geometry;M=new At,M.name=d.name;for(let v in d.attributes)M.setAttribute(v,d.attributes[v]);for(let v in d.morphAttributes)M.morphAttributes[v]=d.morphAttributes[v];d.index!==null&&M.setIndex(d.index),M.morphTargetsRelative=d.morphTargetsRelative;for(let v of d.groups)M.addGroup(v.start,v.count,v.materialIndex);d.boundingBox!==null&&(M.boundingBox=d.boundingBox.clone()),d.boundingSphere!==null&&(M.boundingSphere=d.boundingSphere.clone()),M.drawRange.start=d.drawRange.start,M.drawRange.count=d.drawRange.count,M.userData=Object.assign({},d.userData),b.geometry=M}let S=l[w];M.setAttribute(w,new Xi(S.array,S.itemSize,S.normalized))}Lt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),p.push(b)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},r0="glTF",Lo=12,t0={JSON:1313821514,BIN:5130562},zf=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Lo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==r0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Lo,r=new DataView(e,Lo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===t0.JSON){let c=new Uint8Array(e,Lo+a,o);this.content=n.decode(c)}else if(l===t0.BIN){let c=Lo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},kf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Wf[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Wf[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],p=ia[f.componentType];c[u]=p.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let g in p.attributes){let y=p.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}u(p)},o,c,Cn,f)})})}},Hf=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Gf=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},sh=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,f=u*u,p=f*u,g=e*c,y=g-c,m=-2*p+3*f,x=p-f,_=1-m,b=x-f+u;for(let M=0;M!==o;M++){let w=a[y+M+o],S=a[y+M+l]*h,d=a[g+M+o],v=a[g+M]*h;r[M]=_*w+b*S+m*d+x*v}return r}},gS=new Wn,Vf=class extends sh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return gS.fromArray(r).normalize().toArray(r),r}},ii={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ia={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},n0={9728:Nt,9729:nn,9984:dc,9985:jr,9986:tr,9987:ni},i0={33071:Zn,33648:Lr,10497:bn},_f={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xS={CUBICSPLINE:void 0,LINEAR:Hs,STEP:ks},vf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _S(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new $t({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bi})),i.DefaultMaterial}function ir(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ri(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function yS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MS(i){let e,t=i.extensions&&i.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+yf(t.attributes):e=i.indices+":"+yf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+yf(i.targets[n]);return e}function yf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Xf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var bS=new Ye,qf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&a<98?(this.textureLoader=new ao(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ho(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ir(r,o,s),Ri(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(ts.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=_f[s.type],o=ia[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new qt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=_f[s.type],c=ia[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,m;if(p&&p!==u){let x=Math.floor(f/p),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count,b=t.cache.get(_);b||(y=new c(o,x*p,s.count*p/h),b=new Ws(y,p/h),t.cache.add(_,b)),m=new gs(b,l,f%p/h,g)}else o===null?y=new c(s.count*l):y=new c(o,f,s.count*l),m=new qt(y,l,g);if(s.sparse!==void 0){let x=_f.SCALAR,_=ia[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,w=new _(a[1],b,s.sparse.count*x),S=new c(a[2],M,s.sparse.count*l);o!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let d=0,v=w.length;d<v;d++){let I=w[d];if(m.setX(I,S[d*l]),l>=2&&m.setY(I,S[d*l+1]),l>=3&&m.setZ(I,S[d*l+2]),l>=4&&m.setW(I,S[d*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=n0[f.magFilter]||nn,h.minFilter=n0[f.minFilter]||ni,h.wrapS=i0[f.wrapS]||bn,h.wrapT=i0[f.wrapT]||bn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==nn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(f){return new Promise(function(p,g){t.parse(f,p,g)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;let p=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(p),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(p,g){let y=p;t.isImageBitmapLoader===!0&&(y=function(m){let x=new Kt(m);x.needsUpdate=!0,p(x)}),t.load(ts.resolveURL(f,r.path),y,void 0,g)})})}let u=h.then(function(f){return c===!0&&o.revokeObjectURL(l),Ri(f,a),f.userData.mimeType=a.mimeType||SS(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new $i,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new vs,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return $t}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[dt.KHR_MATERIALS_UNLIT]){let u=s[dt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Cn),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Rt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ft);let h=r.alphaMode||vf.OPAQUE;if(h===vf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===vf.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ot&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ot&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ot){let u=r.emissiveFactor;o.emissive=new Le().setRGB(u[0],u[1],u[2],Cn)}return r.emissiveTexture!==void 0&&a!==Ot&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ri(u,r),t.associations.set(u,{materials:e}),r.extensions&&ir(s,u,r),u})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return s0(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=MS(c),u=s[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=s0(new At,c,t),c.mode===ii.TRIANGLE_STRIP?f=f.then(p=>xf(p,Ao)):c.mode===ii.TRIANGLE_FAN&&(f=f.then(p=>xf(p,Jr))),s[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?_S(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let y=h[p],m=a[p],x,_=c[p];if(m.mode===ii.TRIANGLES||m.mode===ii.TRIANGLE_STRIP||m.mode===ii.TRIANGLE_FAN||m.mode===void 0){let b=r.isSkinnedMesh===!0,M=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");b&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),x=b&&M?new Ba(y,_):new je(y,_),x.isSkinnedMesh===!0&&x.normalizeSkinWeights()}else if(m.mode===ii.LINES)x=new qs(y,_);else if(m.mode===ii.LINE_STRIP)x=new Xs(y,_);else if(m.mode===ii.LINE_LOOP)x=new ka(y,_);else if(m.mode===ii.POINTS)x=new ys(y,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(x.geometry.morphAttributes).length>0&&yS(x,r),x.name=t.createUniqueName(r.name||"mesh_"+e),Ri(x,r),m.extensions&&ir(s,x,m),t.assignFinalMaterial(x),u.push(x)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&ir(s,u[0],r),u[0];let f=new tt;r.extensions&&ir(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(Ei.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new es(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ri(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new Ye;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new za(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],g=s.samplers[p.sampler],y=p.target,m=y.node,x=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",x)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],g=u[2],y=u[3],m=u[4],x=[];for(let b=0,M=f.length;b<M;b++){let w=f[b],S=p[b],d=g[b],v=y[b],I=m[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let E=n._createAnimationTracks(w,S,d,v,I);if(E)for(let C=0;C<E.length;C++)x.push(E[C])}let _=new ro(r,void 0,x);return Ri(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,bS)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);if(h.userData.pivot!==void 0&&u.length>0){let p=h.userData.pivot,g=u[0];h.pivot=new B().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new kr:c.length>1?h=new tt:c.length===1?h=c[0]:h=new Lt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ri(h,r),r.extensions&&ir(n,h,r),r.matrix!==void 0){let u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new tt;n.name&&(r.name=s.createUniqueName(n.name)),Ri(r,n),n.extensions&&ir(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(Qm(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof mn||f instanceof Kt)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}Rs[r.path]===Rs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Rs[r.path]){case Rs.weights:h=Zi;break;case Rs.rotation:h=Ji;break;case Rs.translation:case Rs.scale:h=bs;break;default:n.itemSize===1?h=Zi:h=bs;break}let u=s.interpolation!==void 0?xS[s.interpolation]:Hs,f=this._getArrayFromAccessor(n);for(let p=0,g=l.length;p<g;p++){let y=new h(l[p]+"."+Rs[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Xf(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ji?Vf:sh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function TS(i,e,t){let n=e.attributes,s=new pn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),o.normalized){let h=Xf(ia[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new B,l=new B;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let y=Xf(ia[f.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Nn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function s0(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Wf[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ct.workingColorSpace!==Cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),Ri(i,e),TS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?vS(i,e.targets,t):i})}var rr=["guestA","guestB","guestC"],o0={guestA:"\uB370\uB2D8 \uBCC4\uBB34\uB2AC",guestB:"\uAE08\uBC1C \uB54B\uC740 \uBA38\uB9AC",guestC:"\uD770 \uC6D0\uD53C\uC2A4"},Yf=new Set;function l0(){let i=new Uint8Array([150,150,150,255,205,205,205,255,255,255,255,255]),e=new Qn(i,3,1);return e.minFilter=e.magFilter=Nt,e.needsUpdate=!0,e}var sr="#fde9e7",ES="#f5c6c9",a0={guestA:{hair:"#4b3634",hairStyle:"long",top:"#bfe2f1",sleeve:null,bottom:"pants",bottomColor:"#8fa1df",shoes:"#bfe2f1",F:[12,20,202,350],B:[20,393,195,722],head:[.12,0,.88,.385],topCrop:[.22,.43,.78,.67],legL:[.12,.63,.5,.94],legR:[.5,.63,.88,.94]},guestB:{hair:"#f2df8c",hairStyle:"braids",top:"#ffffff",sleeve:"#ffcaca",bottom:"shorts",bottomColor:"#cdebc9",warmers:"#ffffff",shoes:"#ffcaca",F:[234,19,413,352],B:[239,393,407,722],head:[.12,0,.88,.385],topCrop:[.2,.43,.8,.66],lowCrop:[.15,.62,.85,.76]},guestC:{hair:"#a68a6b",hairStyle:"wavy",top:"#fffdfb",sleeve:"#fffdfb",longSleeve:!0,bottom:"dress",bottomColor:"#fffdfb",boots:"#8c6d58",F:[444,22,634,348],B:[450,395,628,720],head:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.78]},shop:{hair:"#3f302f",hairStyle:"wavy",top:"#bfe2f1",sleeve:"#bfe2f1",bottom:"dress",bottomColor:"#fbf09b",shoes:"#bfe2f1",F:[666,23,844,347],B:[671,395,839,719],head:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.8]},cafe:{hair:"#3f302f",hairStyle:"ponytail",top:"#fbdede",sleeve:"#fbdede",bottom:"dress",bottomColor:"#d4efbf",shoes:"#fbdede",F:[868,3,1075,368],B:[881,376,1062,738],head:[.1,.02,.86,.405],headB:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.8]}},No=new Image;No.src="looks.png";var $f=new Map;function wS(i,e,t,{clean:n=!1,skinBelow:s=!1}={}){let r=i.join(",")+e.join(",")+t+n+s;if($f.has(r))return $f.get(r);let[a,o,l,c]=i,h=l-a,u=c-o,f=a+e[0]*h,p=o+e[1]*u,g=(e[2]-e[0])*h,y=(e[3]-e[1])*u,m=n?Math.max(48,Math.round(g)):256,x=Math.round(m*y/g),_=document.createElement("canvas");_.width=m,_.height=x;let b=_.getContext("2d",{willReadFrequently:n});b.fillStyle=t,b.fillRect(0,0,m,x),s&&(b.fillStyle=sr,b.fillRect(0,x*.55,m,x));let M=new ei(_);M.colorSpace=Rt,M.anisotropy=4;let w=()=>{if(b.drawImage(No,f,p,g,y,0,0,m,x),n){let S=b.getImageData(0,0,m,x),d=S.data,v=new Uint8ClampedArray(d),I=3,E=C=>d[C]*.3+d[C+1]*.59+d[C+2]*.11;for(let C=0;C<x;C++)for(let R=0;R<m;R++){let U=(C*m+R)*4,P=E(U),D=U,G=P;for(let N=-I;N<=I;N++){let q=C+N;if(!(q<0||q>=x))for(let k=-I;k<=I;k++){let O=R+k;if(O<0||O>=m)continue;let z=(q*m+O)*4,X=E(z);X>G&&(G=X,D=z)}}P<G*.84&&(v[U]=d[D],v[U+1]=d[D+1],v[U+2]=d[D+2])}S.data.set(v),b.putImageData(S,0,0)}M.needsUpdate=!0};return No.complete&&No.naturalWidth?w():No.addEventListener("load",w,{once:!0}),$f.set(r,M),M}function Kf(i,e={}){let t=new tt,n=[],s=[],r={root:t,arms:n,head:null,animate:m,setLook:u,look:null},a=null,o=document.createElement("canvas");o.width=o.height=64;let l=o.getContext("2d"),c=l.createRadialGradient(32,32,4,32,32,30);c.addColorStop(0,"rgba(90,60,120,0.32)"),c.addColorStop(1,"rgba(90,60,120,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);let h=new je(new Yi(.62,.62),new Ot({map:new ei(o),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.004,t.add(h);function u(x){a&&t.remove(a);let _=a0[x]||a0.guestA;r.look=x;let b=new Map,M=(G,N=1)=>{let q=G+N;return b.has(q)||b.set(q,new Ot({color:new Le(G).multiplyScalar(N)})),b.get(q)},w=(G,N,q,k)=>new Ot({map:wS(_[G],N,q,k),side:Ft}),S={clean:!0},d=(G,N,q,k=0,O=0,z=0)=>{let X=new je(N,q);return X.position.set(k,O,z),X.castShadow=!0,G.add(X),X},v=(G,N=10,q=8)=>new jt(G,N,q),I=(G,N,q,k,O,z,X,Q=0,$=8)=>(d(G,new ot(N,q,k,$,1,!0,-Math.PI/2,Math.PI),O,0,X,Q),d(G,new ot(N,q,k,$,1,!0,Math.PI/2,Math.PI),z,0,X,Q));a=new tt,t.add(a),n.length=0,s.length=0;for(let G of[-1,1]){let N=new tt;if(N.position.set(.07*G,.34,0),a.add(N),_.bottom==="pants"){let q=new tt;q.position.y=-.12,N.add(q),I(q,.075,.085,.28,w("F",G<0?_.legL:_.legR,_.bottomColor,S),w("B",G<0?_.legR:_.legL,_.bottomColor,S),0)}else d(N,new ot(.044,.04,.24,6),M(sr),0,-.12,0);_.warmers&&d(N,new ot(.058,.06,.11,7),M(_.warmers),0,-.205,0),_.boots?(d(N,new ot(.06,.058,.14,7),M(_.boots),0,-.2,0),d(N,v(.066,8,6),M(_.boots),0,-.275,.02).scale.set(1,.6,1.3)):d(N,v(.066,8,6),M(_.shoes),0,-.29,.022).scale.set(1,.62,1.35),s.push(N)}d(a,new ot(.06,.06,.12,10),M(sr),0,.68,0),_.bottom==="dress"?I(a,.12,.25,.4,w("F",_.lowCrop,_.bottomColor,S),w("B",_.lowCrop,_.bottomColor,S),.44):(I(a,.115,.135,.28,w("F",_.topCrop,_.top,S),w("B",_.topCrop,_.top,S),.5),_.bottom==="pants"&&I(a,.135,.15,.06,M(_.bottomColor),M(_.bottomColor,.94),.37),_.bottom==="shorts"&&I(a,.14,.17,.13,w("F",_.lowCrop,_.bottomColor,S),w("B",_.lowCrop,_.bottomColor,S),.33));for(let G of[-1,1]){let N=new tt;N.position.set(.14*G,.61,0),a.add(N),_.sleeve&&d(N,v(_.longSleeve?.06:.07,8,6),M(_.sleeve),.01*G,-.03,0).scale.set(1,1.1,1),d(N,new ot(.036,.04,.2,6),M(_.longSleeve?_.sleeve:sr),.012*G,-.12,0),_.longSleeve&&d(N,v(.05,8,6),M(_.sleeve),.014*G,-.19,0).scale.set(1,.7,1),d(N,v(.055,8,6),M(sr),.016*G,-.245,.006),N.rotation.z=.32*G,n.push(N)}let E=new tt;E.position.set(0,.89,0),a.add(E);let C=.24,R=1.12,U=.97;d(E,v(C*1.04,14,10),M(sr)).scale.set(R,U,1),d(E,new jt(C*1.06,16,10,0,Math.PI,0,Math.PI*.69),w("F",_.head,_.hair,{skinBelow:!0})).scale.set(R,U,1),d(E,new jt(C*1.055,16,10,Math.PI,Math.PI,0,Math.PI*.72),w("B",_.headB||_.head,_.hair)).scale.set(R,U,1);for(let G of[-1,1])d(E,v(.08,8,6),M(sr),.3*G,-.03,.02).scale.set(.55,1,.75),d(E,v(.048,8,6),M(ES),.32*G,-.03,.035).scale.set(.35,.8,.6);f(E,_,d,M,v),r.head=E,t.traverse(G=>{G.isMesh&&(G.frustumCulled=!1)})}function f(x,_,b,M,w){if(_.hairStyle!=="braids")return;let S=M(_.hair,.97);for(let d of[-1,1])for(let v=0;v<5;v++)b(x,w(.045-v*.003,7,5),S,(.2-v*.006)*d,-.15-v*.065,.09+v*.012).scale.set(1,.85,1)}let p=0,g=0,y=0;function m(x,_,b,M=!1,w=!1){let S=r.head;if(y+=((M?1:0)-y)*Math.min(1,x*10),y>.02){s[0].rotation.x=s[1].rotation.x=-1.45*y,n[0].rotation.x=n[1].rotation.x=-.5*y,a.position.y=.11*y,a.rotation.x=0,S.rotation.z=0,g=0;return}let d=Math.min(1,_/2);g+=(d-g)*Math.min(1,x*10),p+=x*(5+_*3.2);let v=Math.sin(p)*.75*g;s[0].rotation.x=v,s[1].rotation.x=-v,n[0].rotation.x=-v*.8,n[1].rotation.x=v*.8,n[0].rotation.z=-.32,n[1].rotation.z=.32,w&&(n[0].rotation.x=n[1].rotation.x=-1.2),a.position.y=Math.abs(Math.sin(p))*.035*g+Math.sin(b*2.2)*.006*(1-g),S.rotation.z=Math.sin(p*.5)*.05*g,a.rotation.x=.07*g}return u(e.look||"guestA"),r}var AS=500,rh=6,ch=1.05,ss={tteok:{name:"\uB5A1\uAF2C\uCE58",price:2e3,emoji:"\u{1F361}",tag:"\uB300\uD45C",desc:"\uB2EC\uCF64\uC9ED\uC9E4 \uC18C\uC2A4 \uB5A1\uAF2C\uCE58 \xB7 \uD3EC\uC7A5 \uAC00\uB2A5",model:"skewer"},mochi:{name:"\uACFC\uC77C\uCC39\uC300\uB5A1",price:4500,emoji:"\u{1F353}",desc:"\uBCF4\uB4E4\uBCF4\uB4E4\uD55C \uD53C\uC5D0 \uACFC\uC77C\uC774 \uAC00\uB4DD",model:"mochi",opts:{flavor:["\uC694\uAC70\uC0E4\uC778\uBA38\uC2A4\uCF13","\uD06C\uB9BC\uACE8\uB4DC\uD0A4\uC704\uD30C\uC778"]}},kiwiPf:{name:"\uD0A4\uC704 \uD30C\uC778 \uD06C\uB9BC \uCC39\uC300\uB5A1 \uD30C\uB974\uD398",price:12e3,emoji:"\u{1F95D}",desc:"\uACFC\uC77C \uAC00\uB4DD, \uCAC0\uCAC0\uD55C \uCC39\uC300\uB5A1 \uD30C\uB974\uD398",model:"kiwiParfait"},puddPf:{name:"\uD478\uB529\uCD08\uCF54\uD30C\uB974\uD398",price:12e3,emoji:"\u{1F36E}",desc:"\uCEE4\uC2A4\uD130\uB4DC \uD478\uB529\uACFC \uBC14\uB098\uB098\uC758 \uC870\uD569",model:"puddingParfait"},tangSoda:{name:"\uADE4\uC18C\uB2E4",price:6e3,emoji:"\u{1F34A}",model:"soda",c:"#ffa81e",scoop:"#fff4dc"},melonSoda:{name:"\uBA54\uB860\uC18C\uB2E4",price:6e3,emoji:"\u{1F348}",model:"soda",c:"#6fd34a",scoop:"#d6f2c4"},creamSoda:{name:"\uD06C\uB9BC\uC18C\uB2E4",price:6e3,emoji:"\u{1FAE7}",desc:"\uC5F4\uB300\uACFC\uC77C + \uB77C\uBB34\uB124\uB9DB",model:"soda",c:"#2f93ee",scoop:"#fff0c8"},chocoMilk:{name:"\uCD08\uCF54\uC6B0\uC720",price:6e3,emoji:"\u{1F36B}",model:"milk",c:"#7b4a33",drizzle:!0},greenMilk:{name:"\uB179\uCC28\uC6B0\uC720",price:6e3,emoji:"\u{1F375}",model:"milk",c:"#86a95b",drizzle:!0},melonMilk:{name:"\uBA54\uB860\uC6B0\uC720",price:6e3,emoji:"\u{1F348}",model:"milk",c:"#b9e3a0"},bananaMilk:{name:"\uBC14\uB098\uB098\uC6B0\uC720",price:6e3,emoji:"\u{1F34C}",model:"milk",c:"#f3dc8e"},mintMilk:{name:"\uBBFC\uD2B8\uCD08\uCF54\uC6B0\uC720",price:6e3,emoji:"\u{1F33F}",model:"milk",c:"#7d5a47",cream:"#d4f5e6"},americano:{name:"\uC544\uBA54\uB9AC\uCE74\uB178",price:4500,emoji:"\u2615",desc:"\uB354\uCE58 \uC6D0\uC561\uC744 \uC368\uC694",model:"coffee",opts:{temp:["\uC544\uC774\uC2A4","\uD56B"],shot:!0}},latte:{name:"\uC5F0\uC720\uB77C\uB5BC",price:5e3,emoji:"\u{1F95B}",desc:"\uC544\uC774\uC2A4\uB9CC \uAC00\uB2A5\uD574\uC694",model:"latte",opts:{shot:!0}},sodaSlush:{name:"\uC18C\uB2E4 \uC2AC\uB7EC\uC2DC",price:6500,emoji:"\u{1F9CA}",model:"slush",c:"#9dd6ff"},mintSlush:{name:"\uBBFC\uD2B8\uCD08\uCF54 \uC2AC\uB7EC\uC2DC",price:6500,emoji:"\u{1F367}",model:"slush",c:"#bdeedb",chips:!0},pineSando:{name:"\uD30C\uC778\uC560\uD50C \uC0B0\uB3C4",price:6500,emoji:"\u{1F96A}",model:"sando"},pudding:{name:"\uCEE4\uC2A4\uD130\uB4DC \uD478\uB529",price:4500,emoji:"\u{1F36E}",model:"pudding"},peachTea:{name:"\uBCF5\uC22D\uC544 \uC544\uC774\uC2A4\uD2F0",price:4500,emoji:"\u{1F351}",model:"tea",c:"#f0a050"}},jf=[["\uCD94\uCC9C",["tteok","mochi","kiwiPf","puddPf"]],["\uC18C\uB2E4",["tangSoda","melonSoda","creamSoda"]],["\uC6B0\uC720",["chocoMilk","greenMilk","melonMilk","bananaMilk","mintMilk"]],["\uCEE4\uD53C",["americano","latte"]],["\uC2AC\uB7EC\uC2DC",["sodaSlush","mintSlush"]],["\uB514\uC800\uD2B8",["pineSando","puddPf","pudding"]],["\uD2F0",["peachTea"]]],Zf=i=>i.toLocaleString("ko-KR")+"\uC6D0",Jf=new Map;function lt(i,e={}){let t=i+JSON.stringify(e);return Jf.has(t)||Jf.set(t,new $t({color:i,roughness:.45,metalness:0,...e})),Jf.get(t)}var hh=()=>lt("#eef8fc",{transparent:!0,opacity:.32,roughness:.05,depthWrite:!1});function nt(i,e,t,n=0,s=0,r=0){let a=new je(e,t);return a.position.set(n,s,r),i.add(a),a}var Oo=(i,e=20)=>new eo(i.map(([t,n])=>new pe(t,n)),e);function ah(i,e,{h:t=.17,w:n=.04}={}){nt(i,Oo([[0,0],[.034,0],[.035,.006],[.008,.014],[.007,.06-.008],[.014,.06],[n*.75,.06+.035],[n,t-.02],[n+.002,t]]),hh()).renderOrder=3;let r=new tt;return r.position.y=.06+.002,i.add(r),nt(r,Oo([[0,0],[.012,0],[n*.72,.035],[n-.004,t-.06-.03],[0,t-.06-.03]]),lt(e,{roughness:.3})),{lv:r,top:t-.02}}function Qf(i,e,t="#fffaf3",n=1){let s=new tt;s.position.y=e,i.add(s);let r=lt(t,{roughness:.75});return nt(s,new jt(.036*n,12,8),r,0,.008,0).scale.y=.6,nt(s,new jt(.027*n,12,8),r,0,.028*n,0).scale.y=.7,nt(s,new Ms(.018*n,.03*n,10),r,0,.05*n,0),s}function Uo(i,e,t,n){let s=new tt;s.position.set(e,t,n),i.add(s),nt(s,new jt(.013,10,8),lt("#e0142f",{roughness:.15}));let r=nt(s,new ot(.0015,.0015,.04,4),lt("#5b7a2a"),.006,.022,0);return r.rotation.z=-.35,s}function oh(i,e,t,n=.12){let s=nt(i,new ot(.004,.004,n,6),lt(e));return s.position.set(.012,t,.005),s.rotation.z=-.22,s}function lh(i,e=.085){nt(i,new ot(e,e*.8,.01,24),lt("#fffdf8",{roughness:.3}),0,.005,0)}function Fo(i,e){let t=ss[i],n=new tt,s=[],r=[],a=null;switch(t.model){case"soda":{let o=ah(n,t.c);a=o.lv;let l=nt(n,new jt(.035,14,10),lt(t.scoop,{roughness:.85}),0,o.top+.012,0);l.scale.y=.85,s.push(l),s.push(Uo(n,.012,o.top+.048,.012));break}case"milk":{let o=ah(n,t.c);a=o.lv;let l=Qf(n,o.top-.004,t.cream);if(s.push(l),t.drizzle)for(let c=0;c<3;c++){let h=nt(l,new Ki(.026-c*.006,.0025,4,18),lt("#4a2a1d"),0,.015+c*.016,0);h.rotation.x=Math.PI/2}s.push(Uo(n,0,o.top+.066,0));break}case"slush":{let o=ah(n,t.c,{h:.16,w:.042});a=o.lv;let l=nt(n,new jt(.043,14,8,0,Math.PI*2,0,Math.PI/2),lt(t.c,{roughness:.95}),0,o.top-.004,0);if(l.scale.y=.7,s.push(l),t.chips)for(let c=0;c<6;c++)s.push(nt(n,new Bt(.008,.004,.008),lt("#3b2418"),Math.cos(c)*.022,o.top+.016,Math.sin(c*1.7)*.022));s.push(oh(n,"#ff8fb8",o.top));break}case"tea":{let o=nt(n,Oo([[0,0],[.034,0],[.04,.15],[.041,.15]]),hh());o.renderOrder=3,a=new tt,a.position.y=.004,n.add(a),nt(a,new ot(.037,.032,.13,18),lt(t.c,{roughness:.25,transparent:!0,opacity:.88}),0,.065,0);for(let c=0;c<3;c++)nt(a,new Bt(.02,.02,.02),lt("#ffffff",{transparent:!0,opacity:.55,roughness:.05}),Math.cos(c*2.1)*.016,.115,Math.sin(c*2.1)*.016).rotation.y=c;let l=nt(n,new ot(.02,.02,.005,14),lt("#ffd58a"),.03,.15,0);l.rotation.z=Math.PI/2,s.push(l),s.push(oh(n,"#9be0c4",.14,.16));break}case"coffee":{if(e.temp==="\uD56B"){nt(n,new ot(.075,.06,.008,20),lt("#fffdf8"),0,.004,0),nt(n,new ot(.042,.034,.08,18,1,!0),lt("#fffaf2",{side:Ft}),0,.048,0),nt(n,new ot(.034,.034,.004,18),lt("#fffaf2"),0,.01,0);let o=nt(n,new Ki(.02,.006,6,12,Math.PI),lt("#fffaf2"),.042,.05,0);o.rotation.z=-Math.PI/2,a=new tt,a.position.y=.012,n.add(a),nt(a,new ot(.039,.034,.066,18),lt("#3a2014",{roughness:.15}),0,.033,0)}else{let o=nt(n,Oo([[0,0],[.034,0],[.04,.15],[.041,.15]]),hh());o.renderOrder=3,a=new tt,a.position.y=.004,n.add(a),nt(a,new ot(.037,.032,.13,18),lt("#3a1f12",{roughness:.2,transparent:!0,opacity:.92}),0,.065,0);for(let l=0;l<3;l++)nt(a,new Bt(.02,.02,.02),lt("#ffffff",{transparent:!0,opacity:.5,roughness:.05}),Math.cos(l*2.1)*.016,.118,Math.sin(l*2.1)*.016).rotation.y=l;s.push(oh(n,"#2b2b2b",.14,.16))}break}case"latte":{let o=nt(n,Oo([[0,0],[.034,0],[.04,.15],[.041,.15]]),hh());o.renderOrder=3,a=new tt,a.position.y=.004,n.add(a),nt(a,new ot(.034,.032,.03,18),lt("#fff6e2"),0,.015,0),nt(a,new ot(.036,.034,.05,18),lt("#f1e5d2"),0,.055,0),nt(a,new ot(.037,.036,.05,18),lt("#8a5634",{roughness:.25}),0,.105,0),s.push(oh(n,"#f7b6cf",.14,.16));break}case"puddingParfait":case"kiwiParfait":{let o=ah(n,t.model==="kiwiParfait"?"#f6efe0":"#5a3322",{h:.15,w:.045});a=o.lv;let l=o.top;if(s.push(Qf(n,l-.006,"#fffaf3",1.25)),t.model==="puddingParfait"){let c=new tt;c.position.set(-.012,l+.02,.012),n.add(c),s.push(c),nt(c,new ot(.022,.028,.032,18),lt("#f7c75a",{roughness:.35}),0,.016,0),nt(c,new ot(.0225,.022,.008,18),lt("#8c4a12",{roughness:.2}),0,.034,0),s.push(Uo(n,-.012,l+.072,.012));for(let u=0;u<3;u++){let f=nt(n,new ot(.013,.013,.006,12),lt("#fff2c4"),.03,l+.01+u*.012,-.02+u*.016);f.rotation.x=Math.PI/2-.4,s.push(f)}let h=nt(n,new jt(.009,8,6),lt("#ff9cc0"),.028,l+.032,.028);h.scale.z=.4,s.push(h)}else{for(let h=0;h<5;h++)s.push(nt(n,new Bt(.018,.016,.018),lt("#ffd23f",{roughness:.35}),Math.cos(h*1.3)*.03,l+.022+h%2*.012,Math.sin(h*1.3)*.03));for(let h=0;h<2;h++){let u=nt(n,new ot(.016,.016,.005,14),lt("#9ccf3a",{roughness:.4}),-.026+h*.05,l+.04,.02-h*.03);u.rotation.x=Math.PI/2-.3,u.rotation.z=h?.4:-.4,s.push(u)}let c=nt(n,new jt(.02,12,8),lt("#fffefa",{roughness:.8}),0,l+.05,0);c.scale.y=.75,s.push(c),s.push(Uo(n,.004,l+.075,.004))}break}case"pudding":{lh(n);let o=new tt;n.add(o),r.push(o),nt(o,new ot(.028,.038,.045,20),lt("#f7c75a",{roughness:.35}),0,.032,0),nt(o,new ot(.0285,.028,.01,20),lt("#8c4a12",{roughness:.2}),0,.058,0);let l=Qf(o,.062,"#fffaf3",.55);s.push(l),s.push(Uo(o,0,.09,0));break}case"sando":{lh(n,.095);for(let o of[-1,1]){let l=new tt;l.position.set(.032*o,.01,0),l.rotation.y=.3*o,n.add(l),r.push(l),nt(l,new Bt(.05,.065,.026),lt("#fffaf2",{roughness:.9}),0,.033,0),nt(l,new Bt(.051,.026,.02),lt("#fff7e6",{roughness:.6}),0,.033,.0035);let c=nt(l,new Ms(.012,.016,12),lt("#ffcf3d",{roughness:.35}),0,.034,.014);c.rotation.x=Math.PI/2}break}case"skewer":{lh(n,.095);let o=new tt;o.position.y=.018,o.rotation.y=.5,n.add(o),r.push(o);let l=nt(o,new ot(.0022,.0022,.2,5),lt("#d9b07a"),0,0,0);l.rotation.z=Math.PI/2;for(let c=0;c<4;c++)nt(o,new Bt(.022,.016,.03),lt("#d9561e",{roughness:.25}),-.04+c*.024,0,0);break}case"mochi":{lh(n,.07);let o=new tt;n.add(o),r.push(o),nt(o,new ot(.045,.036,.022,14,1,!0),lt("#8fd16b",{side:Ft}),0,.02,0);let l=nt(o,new jt(.042,16,12),lt("#fffefb",{roughness:.9}),0,.04,0);l.scale.y=.72;let c=e.flavor==="\uD06C\uB9BC\uACE8\uB4DC\uD0A4\uC704\uD30C\uC778"?"#ffd23f":"#b9e46a";nt(o,new jt(.01,8,6),lt(c),.02,.066,.012);break}}return n.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)}),n.scale.setScalar(ch),{g:n,top:s,body:r,lv:a,stage:0,pop:0}}function c0({scene3d:i,storeRoot:e,data:t,hero:n,npcs:s,showToast:r,isTouch:a,canOccupy:o,playGame:l}){let c=ue=>document.getElementById(ue),h=c("menu"),u=c("order-btn"),f=c("eat-btn"),p=c("order-chip"),g=s.find(ue=>ue.id==="cafe"),y=[],m=0,x="idle",_=0,b=0,M=[],w=null,S=[],d=null,v=0,I=ue=>[ue.temp,ue.shot?"shot":"",ue.flavor].filter(Boolean).join("\xB7"),E=ue=>ss[ue.key].price+(ue.opt.shot?AS:0),C=()=>y.reduce((ue,J)=>ue+J.qty,0),R=()=>y.reduce((ue,J)=>ue+E(J)*J.qty,0);function U(ue,J=4e3){g&&(clearTimeout(U.t),g.el.textContent=ue,U.t=setTimeout(()=>g.el.textContent="\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615",J))}function P(){if(x==="done")return D();let[,ue]=jf[m];h.innerHTML=`
      <div class="mhead"><div><b>Soo it Happy MENU</b><span>\uC218\uC787\uD574\uD53C \uCE74\uD398 \xB7 \uC6D0\uD558\uB294 \uBA54\uB274\uB97C \uB2F4\uC544 \uC8FC\uC138\uC694</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="cats">${jf.map(([J],ge)=>`<button class="${ge===m?"on":""}" data-cat="${ge}">${J}</button>`).join("")}</div>
      ${jf[m][0]==="\uCEE4\uD53C"?'<p class="note">* \uB354\uCE58 \uC6D0\uC561 \uC0AC\uC6A9 \xB7 \uC544\uBA54\uB9AC\uCE74\uB178\uB294 \uC544\uC774\uC2A4/\uD56B \uC120\uD0DD \xB7 \uC5F0\uC720\uB77C\uB5BC\uB294 \uC544\uC774\uC2A4\uB9CC \xB7 \uC0F7 \uCD94\uAC00 +500\uC6D0</p>':""}
      <div class="items">${ue.map(J=>{let ge=ss[J],de=ge.opts||{};return`<div class="item" data-key="${J}">
          <span class="emo">${ge.emoji}</span>
          <div class="info"><b>${ge.name}${ge.tag?` <i>${ge.tag}</i>`:""}</b>${ge.desc?`<small>${ge.desc}</small>`:""}
            ${de.temp?`<div class="seg">${de.temp.map((Ae,L)=>`<button data-opt="temp" data-v="${Ae}" class="${L?"":"on"}">${Ae}</button>`).join("")}</div>`:""}
            ${de.flavor?`<div class="seg">${de.flavor.map((Ae,L)=>`<button data-opt="flavor" data-v="${Ae}" class="${L?"":"on"}">${Ae}</button>`).join("")}</div>`:""}
            ${de.shot?'<label class="shot"><input type="checkbox" data-opt="shot"> \uC0F7 \uCD94\uAC00 +500\uC6D0</label>':""}
          </div>
          <div class="buy"><span class="price">${Zf(ge.price)}</span><button class="add" data-act="add">\uB2F4\uAE30</button></div>
        </div>`}).join("")}</div>
      <div class="cart">
        ${y.length?`<div class="lines">${y.map((J,ge)=>`<div class="line"><span>${ss[J.key].emoji} ${ss[J.key].name}${I(J.opt)?` <small>(${I(J.opt)})</small>`:""}</span>
          <span class="step"><button data-act="dec" data-i="${ge}" aria-label="\uBE7C\uAE30">\u2212</button><b>${J.qty}</b><button data-act="inc" data-i="${ge}" aria-label="\uB354\uD558\uAE30">+</button></span></div>`).join("")}</div>`:'<p class="empty">\uC544\uC9C1 \uB2F4\uC740 \uBA54\uB274\uAC00 \uC5C6\uC5B4\uC694</p>'}
        <button class="go" data-act="order" ${y.length?"":"disabled"}>${y.length?`\u{1F9FE} ${C()}\uAC1C \xB7 ${Zf(R())} \uC8FC\uBB38\uD558\uAE30`:"\uBA54\uB274\uB97C \uB2F4\uC544 \uC8FC\uC138\uC694"}</button>
        <p class="fine">\uAC00\uC0C1 \uC8FC\uBB38\uC774\uC5D0\uC694 \xB7 \uC2E4\uC81C \uACB0\uC81C\uB294 \uB418\uC9C0 \uC54A\uC544\uC694</p>
      </div>`}function D(){h.innerHTML=`
      <div class="mhead"><div><b>\uC8FC\uBB38 \uC644\uB8CC! \u{1F9FE}</b><span>\uC8FC\uBB38\uBC88\uD638 ${_} \xB7 ${Zf(w.total)}</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="done">
        <div class="list">${w.lines.map(ue=>`<div>${ss[ue.key].emoji} ${ss[ue.key].name}${I(ue.opt)?` (${I(ue.opt)})`:""} \xD7 ${ue.qty}</div>`).join("")}</div>
        <p>\uC5B4\uB5BB\uAC8C \uBC1B\uC744\uAE4C\uC694?</p>
        <button class="go" data-act="eat">\u{1F37D}\uFE0F \uADF8\uB0E5 \uBA39\uC744\uB798\uC694</button>
        <button class="go game" data-act="game">\u{1F50D} \uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30 \uD558\uACE0 \uBA39\uAE30</button>
      </div>`}function G(){x==="done"&&(x="idle"),P(),h.hidden=!1,h.offsetWidth,h.classList.add("on")}function N(){h.classList.remove("on"),setTimeout(()=>{h.classList.contains("on")||(h.hidden=!0)},250)}h.addEventListener("click",ue=>{let J=ue.target.closest("button");if(!J)return;if(J.dataset.cat){m=+J.dataset.cat,P(),h.querySelector(".items").scrollTop=0;return}if(J.dataset.opt){J.parentElement.querySelectorAll("button").forEach(de=>de.classList.toggle("on",de===J));return}let ge=J.dataset.act;if(ge==="close")N();else if(ge==="add"){let de=J.closest(".item"),Ae=de.dataset.key,L={};de.querySelectorAll(".seg .on").forEach(se=>L[se.dataset.opt]=se.dataset.v);let T=de.querySelector("[data-opt=shot]");if(T&&T.checked&&(L.shot=!0),C()>=rh){r(`\uD55C \uBC88\uC5D0 ${rh}\uAC1C\uAE4C\uC9C0 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694`);return}let Z=y.find(se=>se.key===Ae&&I(se.opt)===I(L));Z?Z.qty++:y.push({key:Ae,opt:L,qty:1}),P(),r(`${ss[Ae].emoji} ${ss[Ae].name} \uB2F4\uC558\uC5B4\uC694`);let fe=h.querySelector(".lines");fe&&(fe.scrollTop=fe.scrollHeight)}else if(ge==="inc"||ge==="dec"){let de=y[+J.dataset.i];if(ge==="inc"){if(C()>=rh){r(`\uD55C \uBC88\uC5D0 ${rh}\uAC1C\uAE4C\uC9C0 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694`);return}de.qty++}else--de.qty<=0&&y.splice(+J.dataset.i,1);P()}else if(ge==="order"){if(x!=="idle"&&x!=="done"||M.length){r("\uBA3C\uC800 \uC8FC\uBB38\uD55C \uBA54\uB274\uB97C \uBC1B\uC740 \uB4A4\uC5D0 \uB610 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694");return}_=10+Math.floor(Math.random()*89),w={lines:y.map(de=>({...de,opt:{...de.opt}})),total:R()},y.length=0,x="done",P()}else ge==="eat"?(N(),x="making",b=performance.now()+4500,U(`\uC8FC\uBB38\uBC88\uD638 ${_}\uBC88, \uC8FC\uBB38 \uBC1B\uC558\uC5B4\uC694! \uC790\uB9AC\uC5D0 \uC549\uC544 \uACC4\uC2DC\uBA74 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F353}`,6e3),r("\u{1FA91} \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694 \xB7 \uC9C1\uC6D0\uC774 \uAC00\uC838\uB2E4 \uB4DC\uB824\uC694")):ge==="game"&&q(w)});function q(){if(N(),!l)return r("\u{1F3AE} \uAC8C\uC784\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694");x="gaming",l(ue=>{x="making",b=performance.now()+(ue?800:1500),U(ue?"\uAC8C\uC784 \uC131\uACF5! \uBC14\uB85C \uB9CC\uB4E4\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F389}":"\uAD1C\uCC2E\uC544\uC694! \uADF8\uB798\uB3C4 \uB9DB\uC788\uAC8C \uB9CC\uB4E4\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F60A}",5e3),r(ue?"\u{1F389} \uC131\uACF5! \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694":"\uBA54\uB274\uB294 \uADF8\uB300\uB85C \uC900\uBE44\uD574 \uB4DC\uB824\uC694 \xB7 \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694")})}u.addEventListener("click",ue=>{G(),ue.currentTarget.blur()}),addEventListener("keydown",ue=>{ue.code==="Escape"&&!h.hidden&&N()});let k=new Es,O=new B(0,-1,0),z=new B;function X(ue,J){k.set(z.set(ue,1.4,J),O),k.far=1.4;for(let ge of k.intersectObject(e,!0))if(ge.point.y>.4&&ge.point.y<1.05)return ge.point.y;return null}function Q(ue,J){let ge=Math.sin(ue[2]),de=Math.cos(ue[2]),Ae=de,L=-ge,T=.42,Z=null;for(let xe of[.3,.36,.42,.5,.58]){let Te=X(ue[0]+ge*xe,ue[1]+de*xe);if(Te!==null){T=xe+.04,Z=Te;break}}Z===null&&(Z=.74);let fe=J.length,se=Math.min(3,fe);J.forEach((xe,Te)=>{let oe=Math.floor(Te/3),le=oe?fe-3:se,H=(Te%3-(le-1)/2)*.13,he=T+oe*.12,ne=Fo(xe.key,xe.opt);ne.g.position.set(ue[0]+ge*he+Ae*H,Z+.002,ue[1]+de*he+L*H),ne.g.rotation.y=ue[2]+Math.PI+(Math.random()-.5)*.4,ne.g.scale.setScalar(.001),ne.pop=.001,i.add(ne.g),S.push({food:ne,seat:ue})})}let $=g&&{x:g.x,z:g.z,face:g.face,y:g.c.root.position.y};g&&(g.y=$.y,g.speed=0);let W=.2,F=.15,j=1.25,V=t.floor.map(ue=>ue[0]),te=t.floor.map(ue=>ue[1]),_e=Math.min(...V),be=Math.min(...te),ve=Math.ceil((Math.max(...V)-_e)/F)+1,Ie=Math.ceil((Math.max(...te)-be)/F)+1,re=new Map,me=ue=>_e+ue*F,Me=ue=>be+ue*F;function ye(ue,J){if(ue<0||J<0||ue>=ve||J>=Ie)return!1;let ge=J*ve+ue,de=re.get(ge);return de===void 0&&(de=o(me(ue),Me(J),W),re.set(ge,de)),de}function ce(ue,J,ge=8){let de=Math.round((ue-_e)/F),Ae=Math.round((J-be)/F);for(let L=0;L<=ge;L++){let T=null,Z=1e9;for(let fe=-L;fe<=L;fe++)for(let se=-L;se<=L;se++){if(Math.max(Math.abs(fe),Math.abs(se))!==L||!ye(de+fe,Ae+se))continue;let xe=Math.hypot(me(de+fe)-ue,Me(Ae+se)-J);xe<Z&&(Z=xe,T=[de+fe,Ae+se])}if(T)return T}return null}function ze(ue,J,ge,de){let Ae=Math.ceil(Math.hypot(ge-ue,de-J)/.06);for(let L=1;L<Ae;L++)if(!o(ue+(ge-ue)*L/Ae,J+(de-J)*L/Ae,W))return!1;return!0}function Ue(ue,J,ge,de){let Ae=ce(ue,J),L=ce(ge,de);if(!Ae||!L)return null;let T=(ne,Re)=>Re*ve+ne,Z=T(L[0],L[1]),fe=[[0,Ae[0],Ae[1]]],se=new Map([[T(Ae[0],Ae[1]),0]]),xe=new Map,Te=new Set,oe=!1,le=0;for(;fe.length&&le++<4e4;){let ne=0;for(let ke=1;ke<fe.length;ke++)fe[ke][0]<fe[ne][0]&&(ne=ke);let[,Re,we]=fe.splice(ne,1)[0],Ce=T(Re,we);if(!Te.has(Ce)){if(Te.add(Ce),Ce===Z){oe=!0;break}for(let[ke,rt]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let Ee=Re+ke,qe=we+rt;if(!ye(Ee,qe)||ke&&rt&&(!ye(Re+ke,we)||!ye(Re,we+rt)))continue;let it=T(Ee,qe),Oe=se.get(Ce)+Math.hypot(ke,rt);Oe<(se.has(it)?se.get(it):1e9)&&(se.set(it,Oe),xe.set(it,Ce),fe.push([Oe+Math.hypot(Ee-L[0],qe-L[1]),Ee,qe]))}}}if(!oe)return null;let Se=[];for(let ne=Z;ne!==void 0;ne=xe.get(ne))Se.push([me(ne%ve),Me(Math.floor(ne/ve))]);Se.reverse(),Se.push([ge,de]);let H=[Se[0]],he=0;for(;he<Se.length-1;){let ne=Se.length-1;for(;ne>he+1&&!ze(Se[he][0],Se[he][1],Se[ne][0],Se[ne][1]);)ne--;H.push(Se[ne]),he=ne}return H}let We=null,Ze=lt("#ffc2da",{roughness:.5});function Je(ue){let J=M;if(M=[],!g){Q(ue,J),x="idle";return}let ge=Math.sin(ue[2]),de=Math.cos(ue[2]),Ae=[ue[0]+ge*.5,ue[1]+de*.5],L=null;for(let[Z,fe]of[[de,-ge],[-de,ge],[ge,de]])for(let se of[.55,.7,.85]){let xe=Ae[0]+Z*se,Te=Ae[1]+fe*se;if(!o(xe,Te,W))continue;let oe=Ue($.x,$.z,xe,Te);if(oe){(!L||oe.length<L.length)&&(L=oe);break}}if(x="delivering",!L){Q(ue,J),x="idle",r("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}");return}let T=new tt;T.position.set(0,.5,.24),nt(T,new Bt(.36,.016,.26),Ze),J.slice(0,6).forEach((Z,fe)=>{let se=Fo(Z.key,Z.opt);se.g.scale.setScalar(ch*.62),se.g.position.set((fe%3-1)*.1,.008,J.length>3?(Math.floor(fe/3)-.5)*.09:0),T.add(se.g)}),g.c.root.add(T),We={stage:"go",path:[[$.x,$.z],...L],i:1,seat:ue,wait:0,tray:T,items:J,look:Ae},g.carry=!0,U("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694! \u{1F370}",2e4)}function Y(ue){let J=g,ge=We;if(ge.stage==="go"||ge.stage==="back"){let[de,Ae]=ge.path[ge.i],L=de-J.x,T=Ae-J.z,Z=Math.hypot(L,T),fe=Math.min(Z,j*ue);if(Z>1e-4){J.x+=L/Z*fe,J.z+=T/Z*fe;let xe=Math.atan2(L,T)-J.face;xe=Math.atan2(Math.sin(xe),Math.cos(xe)),J.face+=xe*Math.min(1,ue*10)}J.speed=j;let se=Math.hypot(J.x-$.x,J.z-$.z);J.y=$.y*Ei.clamp(1-(se-.15)/.35,0,1),Z<.02&&++ge.i>=ge.path.length&&(J.speed=0,ge.stage==="go"?(ge.stage="serve",ge.wait=.7):(J.x=$.x,J.z=$.z,J.face=$.face,J.y=$.y,We=null))}else if(ge.stage==="serve"){let de=Math.atan2(ge.look[0]-J.x,ge.look[1]-J.z)-J.face;if(de=Math.atan2(Math.sin(de),Math.cos(de)),J.face+=de*Math.min(1,ue*8),ge.wait-=ue,ge.wait<=0&&ge.tray)J.c.root.remove(ge.tray),ge.tray=null,J.carry=!1,Q(ge.seat,ge.items),x="idle",U("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274 \uB098\uC654\uC2B5\uB2C8\uB2E4! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}",4e3),r("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}"),ge.wait=1.2;else if(ge.wait<=0){let Ae=Ue(J.x,J.z,$.x,$.z);ge.stage="back",ge.path=Ae?[[J.x,J.z],...Ae.slice(0,-1),[$.x,$.z]]:[[J.x,J.z],[$.x,$.z]],ge.i=1,x="idle"}}}let bt=()=>S.filter(ue=>ue.seat===d);function et(){let ue=bt();if(!ue.length)return;let J=ue[0].food;J.stage++,v=.7;let ge=J.stage;for(let de of J.top)ge>=2?de.visible=!1:de.scale.multiplyScalar(.65);J.lv&&(J.lv.scale.y=Math.max(.02,1-ge/3));for(let de of J.body)de.scale.setScalar(Math.max(.05,1-ge*.3));ge>=3&&(J.dying=1,setTimeout(()=>{i.remove(J.g),S.splice(S.findIndex(de=>de.food===J),1),S.some(de=>de.seat===d)||r("\uB2E4 \uBA39\uC5C8\uC5B4\uC694! \uB9DB\uC788\uC5C8\uB2E4 \u{1F60B} \uB610 \uC8FC\uBB38\uD574 \uBCF4\uC138\uC694")},450))}return f.addEventListener("click",ue=>{et(),ue.currentTarget.blur()}),{get open(){return!h.hidden},onSit(ue){d=ue,x==="ready"&&M.length&&!We&&Je(ue)},get npcBusy(){return!!We},onStand(){d=null},update(ue,J,ge){ge!==d&&(d=ge),x==="making"&&performance.now()>=b&&(M=w.lines.flatMap(T=>Array.from({length:T.qty},()=>({key:T.key,opt:T.opt}))),x="ready",d&&!We?Je(d):(U(`\uC8FC\uBB38\uBC88\uD638 ${_}\uBC88 \uBA54\uB274 \uB098\uC654\uC5B4\uC694! \uC790\uB9AC\uC5D0 \uC549\uC73C\uC2DC\uBA74 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F370}`,7e3),r("\u{1F514} \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uCE74\uD398 \uC758\uC790\uB97C \uB20C\uB7EC \uC549\uC73C\uBA74 \uC9C1\uC6D0\uC774 \uAC00\uC838\uB2E4 \uB4DC\uB824\uC694"))),We&&Y(ue);let de=g&&!ge&&!We&&Math.hypot(J.x-$.x,J.z-$.z)<2.6;u.hidden=!de||!h.hidden;let Ae=!!ge&&bt().length>0;f.hidden=!Ae;let L=x==="making"?"\u{1F9D1}\u200D\u{1F373} \uBA54\uB274 \uB9CC\uB4DC\uB294 \uC911\u2026 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694":x==="ready"?`\u{1F514} \uBA54\uB274 ${M.length}\uAC1C \uC900\uBE44\uB410\uC5B4\uC694 \xB7 \uCE74\uD398 \uC758\uC790\uC5D0 \uC549\uC544 \uBCF4\uC138\uC694`:x==="delivering"?"\u{1F370} \uC9C1\uC6D0\uC774 \uBA54\uB274\uB97C \uAC00\uC838\uB2E4 \uB4DC\uB9AC\uB294 \uC911\u2026":"";p.textContent!==L&&(p.textContent=L),p.hidden=!L||!h.hidden;for(let{food:T}of S){if(T.pop<1){T.pop=Math.min(1,T.pop+ue*3);let Z=1-Math.pow(1-T.pop,3);T.g.scale.setScalar(ch*(.2+.8*Z+Math.sin(T.pop*Math.PI)*.12))}T.dying&&(T.dying=Math.max(0,T.dying-ue*2.5),T.g.scale.setScalar(ch*T.dying))}if(v>0&&n.arms){v=Math.max(0,v-ue);let T=Math.sin((1-v/.7)*Math.PI);n.arms[0].rotation.x=-.5-1.7*T,n.head.rotation.x=.12*T}}}}var ar='stroke="#4a3f66" stroke-linejoin="round" stroke-linecap="round"',_t=ar+' stroke-width="2.6"',h0=(i,e,t,n=2.6)=>`<circle cx="${i}" cy="${t}" r="${n}" fill="#3b2f4a"/><circle cx="${e}" cy="${t}" r="${n}" fill="#3b2f4a"/><circle cx="${i+.9}" cy="${t-.9}" r="0.9" fill="#fff"/><circle cx="${e+.9}" cy="${t-.9}" r="0.9" fill="#fff"/>`,id=(i,e,t)=>`<ellipse cx="${i}" cy="${t}" rx="4" ry="2.4" fill="#ff9fbf" opacity=".8"/><ellipse cx="${e}" cy="${t}" rx="4" ry="2.4" fill="#ff9fbf" opacity=".8"/>`,uh=(i,e)=>`<path d="M${i} ${e} q3 -10 9 -12" fill="none" ${ar} stroke-width="1.8"/><circle cx="${i}" cy="${e+2}" r="5.5" fill="#e8243c" ${_t}/><circle cx="${i-1.8}" cy="${e}" r="1.5" fill="#fff" opacity=".8"/>`,ed=(i,e,t)=>`
  <path d="M43 76 h14 l2 12 h-18z" fill="#eef8fc" ${_t}/><ellipse cx="50" cy="89" rx="15" ry="4" fill="#eef8fc" ${_t}/>
  <path d="M27 36 h46 l-7 36 q-16 8 -32 0z" fill="${i}" ${_t}/>
  <path d="M33 42 l-3 22" stroke="#fff" stroke-width="3" opacity=".55" stroke-linecap="round"/>
  ${e?`<circle cx="50" cy="30" r="14" fill="${e}" ${_t}/><path d="M38 34 q12 6 24 0" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/>`:""}
  ${t?`<path d="M30 37 q-3 -10 8 -12 q2 -10 12 -9 q10 -1 12 9 q11 2 8 12z" fill="${t}" ${_t}/><path d="M36 31 q14 -6 28 0" fill="none" stroke="#6b3b25" stroke-width="2.4" stroke-linecap="round"/>`:""}`,Bo=(i,e,t=1,n="")=>`<g transform="translate(${i} ${e}) scale(${t})">
  <ellipse cx="-17" cy="2" rx="8" ry="13" fill="#fff" ${_t} transform="rotate(18 -17 2)"/><ellipse cx="17" cy="2" rx="8" ry="13" fill="#fff" ${_t} transform="rotate(-18 17 2)"/>
  <path d="M-16 -6 q-4 -14 8 -16 q8 -8 16 0 q12 2 8 16 q6 10 -2 20 q-14 10 -28 0 q-8 -10 -2 -20z" fill="#fff" ${_t}/>
  ${h0(-6,6,0,2.8)}<ellipse cx="0" cy="7" rx="3" ry="2.2" fill="#3b2f4a"/><path d="M-3 10 q3 3 6 0" fill="none" ${ar} stroke-width="1.6"/>
  ${id(-11,11,8)}${n}</g>`,td=({hair:i,hairDark:e,bun:t,glasses:n,clip:s,collar:r})=>`
  ${t?`<circle cx="50" cy="20" r="11" fill="${i}" ${_t}/>`:""}
  <path d="M22 54 q-4 -34 28 -36 q32 2 28 36 q-2 10 -8 12 l-40 0 q-6 -2 -8 -12z" fill="${i}" ${_t}/>
  <ellipse cx="50" cy="54" rx="22" ry="21" fill="#ffe6d6" ${_t}/>
  <path d="M28 46 q8 -14 22 -12 q-2 8 -10 10 q10 -2 14 -10 q8 10 18 12 q-4 -18 -22 -18 q-18 0 -22 18z" fill="${i}"/>
  <path d="M27 58 q-3 10 1 20 M73 58 q3 10 -1 20" fill="none" stroke="${e}" stroke-width="7" stroke-linecap="round"/>
  ${h0(41,59,55,3)}${id(35,65,63)}<path d="M46 65 q4 4 8 0" fill="none" ${ar} stroke-width="1.8"/>
  ${n?'<circle cx="41" cy="55" r="7" fill="none" stroke="#4a3326" stroke-width="2.4"/><circle cx="59" cy="55" r="7" fill="none" stroke="#4a3326" stroke-width="2.4"/><path d="M48 54 h4" stroke="#4a3326" stroke-width="2.4"/>':""}
  ${s?`<circle cx="32" cy="36" r="5" fill="#e8243c" ${ar} stroke-width="1.8"/><path d="M30 31 l2 -3 l2 3" fill="#6cc05a"/>`:""}
  ${r?`<path d="M34 78 q16 8 32 0 l6 10 q-22 10 -44 0z" fill="${r}" ${_t}/>`:""}`,or={menu:{name:"\uC218\uC787\uD574\uD53C \uBA54\uB274 \uC2A4\uD2F0\uCEE4",color:"#d6efbf",stickers:[ed("#2f93ee","#fff0c8")+uh(57,14),ed("#6fd34a","#d6f2c4")+uh(57,14),`<ellipse cx="50" cy="80" rx="34" ry="9" fill="#fff" ${_t}/><path d="M32 78 l6 -34 h24 l6 34z" fill="#f7c75a" ${_t}/><path d="M38 44 h24 l-1 7 q-11 4 -22 0z" fill="#8c4a12" ${_t}/>
       <path d="M40 44 q-3 -9 6 -10 q4 -8 8 0 q9 1 6 10z" fill="#fffaf3" ${_t}/>${uh(50,24)}<path d="M37 70 q13 4 26 0" stroke="#fff" stroke-width="2.4" opacity=".5" fill="none"/>`,`<path d="M18 86 L84 20" stroke="#d9b07a" stroke-width="4" stroke-linecap="round"/>
       ${[0,1,2,3].map(i=>`<rect x="${24+i*13}" y="${56-i*13}" width="15" height="12" rx="4" fill="#e0622a" ${_t} transform="rotate(-45 ${31+i*13} ${62-i*13})"/>`).join("")}
       <path d="M30 60 l40 -40" stroke="#fff" stroke-width="2" opacity=".45" stroke-linecap="round"/>`,`<path d="M22 64 h56 l-6 18 h-44z" fill="#8fd16b" ${_t}/><path d="M28 64 l4 18 M40 64 l1 18 M52 64 l-1 18 M64 64 l-3 18" stroke="#6aa94a" stroke-width="1.6"/>`+Bo(50,44,1.05),ed("#7b4a33",null,"#fffaf3")+uh(54,10)]},staff:{name:"\uC18C\uD488\uC0F5 \uC9C1\uC6D0 \uC2A4\uD2F0\uCEE4",color:"#ffe1ee",stickers:[td({hair:"#7a5640",hairDark:"#64432f",bun:!0,collar:"#c4e76a"}),td({hair:"#3d3346",hairDark:"#2c2433",glasses:!0,collar:"#fff0a3"}),td({hair:"#f7a9c8",hairDark:"#ec8db5",clip:!0,collar:"#aee3cf"}),`<path d="M10 24 q0 -12 14 -12 h52 q14 0 14 12 v30 q0 12 -14 12 h-36 l-14 14 l2 -14 q-18 0 -18 -12z" fill="#fff" ${_t}/>
       <text x="50" y="47" text-anchor="middle" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-weight="900" font-size="12.5" fill="#e0457b">\uC5B4\uC11C\uC624\uC138\uC694!</text>`,`<path d="M50 86 C10 58 12 22 34 20 C44 19 50 28 50 32 C50 28 56 19 66 20 C88 22 90 58 50 86z" fill="#f6a9c9" ${_t}/>
       <text x="50" y="54" text-anchor="middle" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-weight="900" font-size="13" fill="#c2477e">\uC218\uC787\uD574\uD53C</text>`,`<path d="M50 50 l-30 -18 q-8 -2 -8 8 v20 q0 10 8 8z M50 50 l30 -18 q8 -2 8 8 v20 q0 10 -8 8z" fill="#ff9cc0" ${_t}/>
       <path d="M44 52 l-10 30 l8 -4 l4 8 l6 -32z M56 52 l10 30 l-8 -4 l-4 8 l-6 -32z" fill="#ff86b2" ${_t}/><circle cx="50" cy="50" r="8" fill="#ffb8d2" ${_t}/>`]},dog:{name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC2A4\uD2F0\uCEE4",color:"#e3f3ff",stickers:[Bo(50,52,1.5,'<path d="M-3 12 q3 5 6 0z" fill="#ff8fb0" stroke="#4a3f66" stroke-width="1.4"/>'),`<ellipse cx="52" cy="72" rx="24" ry="16" fill="#fff" ${_t}/><ellipse cx="38" cy="84" rx="7" ry="5" fill="#fff" ${_t}/><ellipse cx="62" cy="84" rx="7" ry="5" fill="#fff" ${_t}/>
       <path d="M74 66 q12 -6 8 -16" fill="none" ${ar} stroke-width="5"/><path d="M74 66 q12 -6 8 -16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`+Bo(48,40,1.05),`<ellipse cx="50" cy="66" rx="34" ry="18" fill="#fff" ${_t}/><path d="M24 62 q-4 -16 12 -18 q10 -10 20 0" fill="#fff" ${_t}/>
       <path d="M30 60 q4 3 8 0 M44 60 q4 3 8 0" fill="none" ${ar} stroke-width="2"/><ellipse cx="41" cy="67" rx="2.6" ry="2" fill="#3b2f4a"/>${id(28,54,68)}
       <text x="66" y="38" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="15" fill="#9a8cc4">z</text><text x="76" y="26" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="11" fill="#9a8cc4">z</text>`,Bo(50,54,1.4)+`<path d="M50 24 l-14 -8 q-4 0 -4 4 v8 q0 4 4 4z M50 24 l14 -8 q4 0 4 4 v8 q0 4 -4 4z" fill="#ff8fb7" ${_t}/><circle cx="50" cy="24" r="4.5" fill="#ffb3cf" ${_t}/>`,`<ellipse cx="50" cy="62" rx="18" ry="15" fill="#f7a9c8" ${_t}/>${[[28,40],[42,30],[58,30],[72,40]].map(([i,e])=>`<ellipse cx="${i}" cy="${e}" rx="7" ry="8.5" fill="#f7a9c8" ${_t}/>`).join("")}`,`<path d="M14 20 q0 -10 12 -10 h48 q12 0 12 10 v26 q0 10 -12 10 h-30 l-14 12 l2 -12 h-6 q-12 0 -12 -10z" fill="#fffbe0" ${_t}/>
       <text x="50" y="42" text-anchor="middle" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="18" fill="#4a3f66">\uBA4D!</text>`+Bo(70,76,.8)]}},nd=new Map;function pi(i,e){let t=i+e;if(!nd.has(t)){let n=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 112 112" width="224" height="224">
      <defs><filter id="b" x="-20%" y="-20%" width="140%" height="140%"><feMorphology in="SourceAlpha" operator="dilate" radius="4.5" result="d"/>
      <feFlood flood-color="#ffffff"/><feComposite in2="d" operator="in" result="w"/>
      <feGaussianBlur in="d" stdDeviation="1.6" result="s"/><feOffset in="s" dy="1.4" result="so"/><feFlood flood-color="#6a53a0" flood-opacity=".28"/><feComposite in2="so" operator="in" result="sh"/>
      <feMerge><feMergeNode in="sh"/><feMergeNode in="w"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g filter="url(#b)">${or[i].stickers[e]}</g></svg>`;nd.set(t,"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n))}return nd.get(t)}var an={stkMenu:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uC218\uC787\uD574\uD53C \uBA54\uB274 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"menu",desc:"\uD06C\uB9BC\uC18C\uB2E4\xB7\uBA54\uB860\uC18C\uB2E4\xB7\uD478\uB529\xB7\uB5A1\uAF2C\uCE58\u2026",color:"#d6efbf"},stkStaff:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uC18C\uD488\uC0F5 \uC9C1\uC6D0 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"staff",desc:"\uCE74\uD398 \uC5B8\uB2C8\xB7\uC18C\uD488\uC0F5 \uC5B8\uB2C8\xB7\uC190\uB2D8",color:"#ffd3e4"},stkDog:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"dog",desc:"\uBABD\uAE00\uBABD\uAE00 \uD558\uC580 \uAC15\uC544\uC9C0",color:"#dcefff"},diary:{cat:"\uBB38\uAD6C",name:"\uB2E4\uC774\uC5B4\uB9AC \uC218\uCCA9",price:5e3,emoji:"\u{1F4D2}",desc:"\uCE74\uD398 \uC790\uB9AC\uC5D0\uC11C \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694",color:"#f7c9dc"},penBear:{cat:"\uBB38\uAD6C",name:"\uACF0\uB3CC\uC774 \uBCFC\uD39C",price:2500,emoji:"\u{1F43B}",desc:"\uCD08\uCF54 \uBE0C\uB77C\uC6B4 \uC789\uD06C",ink:"#7a4a33",color:"#c99c6e"},penBerry:{cat:"\uBB38\uAD6C",name:"\uB538\uAE30 \uBCFC\uD39C",price:2500,emoji:"\u{1F353}",desc:"\uB538\uAE30 \uD551\uD06C \uC789\uD06C",ink:"#e0457b",color:"#f48fb9"},penMint:{cat:"\uBB38\uAD6C",name:"\uBBFC\uD2B8 \uC824\uD39C",price:2500,emoji:"\u{1F33F}",desc:"\uBBFC\uD2B8 \uC789\uD06C",ink:"#2f9d8f",color:"#9fe0cf"},tapeHeart:{cat:"\uBB38\uAD6C",name:"\uD558\uD2B8 \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504",price:2e3,emoji:"\u{1F497}",desc:"\uB2E4\uAFB8\uC5D0 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694",tape:"heart",color:"#ffc2da"},tapeCheck:{cat:"\uBB38\uAD6C",name:"\uAE45\uC5C4 \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504",price:2e3,emoji:"\u{1F49A}",desc:"\uB2E4\uAFB8\uC5D0 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694",tape:"check",color:"#bfe6a8"},memo:{cat:"\uBB38\uAD6C",name:"\uB9D0\uB791 \uBA54\uBAA8\uC9C0",price:2e3,emoji:"\u{1F5D2}\uFE0F",color:"#fff3b0"},letter:{cat:"\uBB38\uAD6C",name:"\uD3B8\uC9C0\uC9C0 \uC138\uD2B8",price:3500,emoji:"\u{1F48C}",color:"#ffe1ee"},postcard:{cat:"\uBB38\uAD6C",name:"\uC218\uC787\uD574\uD53C \uC5FD\uC11C",price:1500,emoji:"\u{1F5BC}\uFE0F",color:"#cdbcf0"},plushDog:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC778\uD615",price:15e3,emoji:"\u{1F436}",color:"#ffffff"},keyBear:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uACF0\uB3CC\uC774 \uC778\uD615 \uD0A4\uB9C1",price:6e3,emoji:"\u{1F9F8}",color:"#e6bf93"},keyBunny:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uD1A0\uB07C \uC778\uD615 \uD0A4\uB9C1",price:6e3,emoji:"\u{1F430}",color:"#f8b9d3"},hairpin:{cat:"\uC7A1\uD654",name:"\uB538\uAE30 \uBA38\uB9AC\uD540",price:3e3,emoji:"\u{1F380}",color:"#ff8fb0"}},u0=["\uC2A4\uD2F0\uCEE4","\uBB38\uAD6C","\uC778\uD615\xB7\uD0A4\uB9C1","\uC7A1\uD654"],fh=i=>i.toLocaleString("ko-KR")+"\uC6D0",sd=i=>{let e=an[i];return e.sheet?`<img src="${pi(e.sheet,0)}" alt="">`:e.emoji},Fn={items:{},stickers:{}};try{Object.assign(Fn,JSON.parse(localStorage.getItem("sh-inv"))||{})}catch{}function dh(){try{localStorage.setItem("sh-inv",JSON.stringify(Fn))}catch{}}var ph=i=>(Fn.items[i]||0)>0;function RS(){let i=document.createElement("canvas");i.width=512,i.height=128;let e=i.getContext("2d");e.fillStyle="#f4a7bf",e.fillRect(0,0,512,128),e.globalCompositeOperation="destination-out";let t=(s,r,a)=>{e.beginPath(),e.moveTo(s,r+a*.9),e.bezierCurveTo(s-a*1.3,r,s-a*.7,r-a*.9,s,r-a*.3),e.bezierCurveTo(s+a*.7,r-a*.9,s+a*1.3,r,s,r+a*.9),e.fill()};for(let s=0;s<2;s++)for(let r=0;r<16;r++)t(16+r*32+(s?16:0),44+s*42,11);let n=new ei(i);return n.colorSpace=Rt,n.wrapS=bn,n.anisotropy=4,n}function CS(){let i=new tt,e=new $t({color:"#f4a7bf",roughness:.55}),t=new $t({map:RS(),alphaTest:.5,side:Ft,roughness:.55}),n=new tt;n.scale.set(1.3,1,.85),i.add(n);let s=.1,r=new je(new ot(.11,.08,s,28,1,!0),t);r.position.y=s/2,n.add(r);let a=new je(new Xa(.08,24),e);a.rotation.x=-Math.PI/2,a.position.y=.002,n.add(a);let o=new je(new Ki(.11,.008,6,32),e);o.rotation.x=Math.PI/2,o.position.y=s,n.add(o);for(let c of[-1,1]){let h=new je(new Ki(.075,.009,6,18,Math.PI),e);h.position.set(0,s,.07*c),h.rotation.x=.25*c,i.add(h)}let l=new tt;return l.position.y=.01,i.add(l),i.traverse(c=>{c.isMesh&&(c.castShadow=!1)}),{g:i,goods:l}}function f0({scene3d:i,hero:e,npcs:t,showToast:n,inShop:s}){let r=C=>document.getElementById(C),a=r("shop"),o=r("shop-btn"),l=r("basket-btn"),c=r("stop-btn"),h=t.find(C=>C.id==="shop"),u=CS();u.g.position.set(.21,.29,.24),u.g.rotation.y=Math.PI/2;let f=!1,p="browse",g=0,y=0,m={},x=()=>Object.values(m).reduce((C,R)=>C+R,0),_=()=>Object.entries(m).reduce((C,[R,U])=>C+an[R].price*U,0),b=()=>h&&Math.hypot(e.root.position.x-h.x,e.root.position.z-h.z)<2.8;function M(){u.goods.clear();let C=0;for(let[R,U]of Object.entries(m))for(let P=0;P<U&&C<10;P++,C++){let D=an[R],G=new je(D.sheet?new Bt(.06,.004,.08):new Bt(.045,.035,.04),new $t({color:D.color,roughness:.6}));G.position.set((C%3-1)*.06,.02+Math.floor(C/3)*.025,(C%2-.5)*.04),G.rotation.set(.2*(C%2-.5),C*.7,.15*(C%3-1)),u.goods.add(G)}}function w(){f=!0,e.root.add(u.g),M(),n("\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8\uB97C \uB4E4\uC5C8\uC5B4\uC694! \uC0C1\uD488\uC744 \uB2F4\uC544 \uBCF4\uC138\uC694"),v("browse")}function S(){f=!1,e.root.remove(u.g);for(let C of Object.keys(m))delete m[C];I(),n("\uC1FC\uD551\uC744 \uADF8\uB9CC\uB480\uC5B4\uC694. \uBC14\uAD6C\uB2C8\uB294 \uC81C\uC790\uB9AC\uC5D0 \uB450\uC5C8\uC5B4\uC694")}function d(){let C=x(),R=`<div class="cats">${[["browse","\u{1F6CD}\uFE0F \uC0C1\uD488"],["cart",`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 ${C}`],["mine","\u{1F392} \uB0B4 \uBB3C\uAC74"]].map(([P,D])=>`<button class="${p===P?"on":""}" data-tab="${P}">${D}</button>`).join("")}</div>`,U="";if(p==="browse")U=`<div class="cats sub">${u0.map((P,D)=>`<button class="${D===g?"on":""}" data-cat="${D}">${P}</button>`).join("")}</div>
      <div class="items">${Object.entries(an).filter(([,P])=>P.cat===u0[g]).map(([P,D])=>`
        <div class="item"><span class="emo">${sd(P)}</span>
          <div class="info"><b>${D.name}</b>${D.desc?`<small>${D.desc}</small>`:""}
            ${D.sheet?`<div class="mini">${or[D.sheet].stickers.map((G,N)=>`<img src="${pi(D.sheet,N)}" alt="">`).join("")}</div>`:""}</div>
          <div class="buy"><span class="price">${fh(D.price)}</span><button class="add" data-add="${P}">${m[P]?`\uB2F4\uC74C ${m[P]}`:"\uB2F4\uAE30"}</button></div>
        </div>`).join("")}</div>
      <div class="cart"><button class="go" data-tab="cart" ${C?"":"disabled"}>${C?`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 \uBCF4\uAE30 \xB7 ${C}\uAC1C \xB7 ${fh(_())}`:"\uB9C8\uC74C\uC5D0 \uB4DC\uB294 \uC0C1\uD488\uC744 \uB2F4\uC544 \uBCF4\uC138\uC694"}</button></div>`;else if(p==="cart"){let P=b();U=`<div class="items">${C?Object.entries(m).map(([D,G])=>`
        <div class="item"><span class="emo">${sd(D)}</span><div class="info"><b>${an[D].name}</b><small>${fh(an[D].price)}</small></div>
          <span class="step"><button data-dec="${D}" aria-label="\uBE7C\uAE30">\u2212</button><b>${G}</b><button data-inc="${D}" aria-label="\uB354\uD558\uAE30">+</button></span></div>`).join(""):'<p class="empty">\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4 \uC788\uC5B4\uC694</p>'}</div>
      <div class="cart">
        <button class="go" data-act="pay" ${C&&P?"":"disabled"}>${C?P?`\u{1F4B3} ${fh(_())} \uACC4\uC0B0\uD558\uAE30`:"\u{1F380} \uACC4\uC0B0\uB300 \uC9C1\uC6D0\uC5D0\uAC8C \uAC00\uBA74 \uACC4\uC0B0\uD560 \uC218 \uC788\uC5B4\uC694":"\uB2F4\uC740 \uC0C1\uD488\uC774 \uC5C6\uC5B4\uC694"}</button>
        <p class="fine">\uAC00\uC0C1 \uC1FC\uD551\uC774\uC5D0\uC694 \xB7 \uC2E4\uC81C \uACB0\uC81C\uB294 \uB418\uC9C0 \uC54A\uC544\uC694</p></div>`}else{let P=Object.entries(Fn.items).filter(([,D])=>D>0);U=`<div class="items">${P.length?P.map(([D,G])=>`
        <div class="item"><span class="emo">${sd(D)}</span><div class="info"><b>${an[D].name}</b><small>${G}\uAC1C \uAC00\uC9C0\uACE0 \uC788\uC5B4\uC694</small></div></div>`).join(""):'<p class="empty">\uC544\uC9C1 \uC0B0 \uBB3C\uAC74\uC774 \uC5C6\uC5B4\uC694</p>'}
        <p class="fine">\u{1F4D2} \uB2E4\uC774\uC5B4\uB9AC + \uC2A4\uD2F0\uCEE4 + \uBCFC\uD39C\uC774 \uC788\uC73C\uBA74 \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694</p></div>`}a.innerHTML=`<div class="mhead"><div><b>\uC218\uC9D1\uC218\uC9D1 \uC18C\uD488\uC0F5</b><span>${f?"\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uACE0 \uACC4\uC0B0\uB300\uC5D0\uC11C \uACC4\uC0B0\uD574\uC694":"\uB0B4\uAC00 \uC0B0 \uBB3C\uAC74"}</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>${R}${U}`}function v(C){p=C||p,d(),a.hidden=!1,a.offsetWidth,a.classList.add("on")}function I(){a.classList.remove("on"),setTimeout(()=>{a.classList.contains("on")||(a.hidden=!0)},250)}a.addEventListener("click",C=>{let R=C.target.closest("button");if(!R)return;let U=R.dataset;if(U.act==="close")return I();if(U.tab)return!f&&U.tab!=="mine"?void 0:(p=U.tab,d());if(U.cat)return g=+U.cat,d();if(U.add)return x()>=20?n("\uBC14\uAD6C\uB2C8\uAC00 \uAC00\uB4DD \uCC3C\uC5B4\uC694"):(m[U.add]=(m[U.add]||0)+1,M(),n(`\u{1F9FA} ${an[U.add].name} \uB2F4\uC558\uC5B4\uC694`),d());if(U.inc)return m[U.inc]++,M(),d();if(U.dec)return--m[U.dec]<=0&&delete m[U.dec],M(),d();if(U.act==="pay"){for(let[P,D]of Object.entries(m)){Fn.items[P]=(Fn.items[P]||0)+D;let G=an[P].sheet;G&&or[G].stickers.forEach((N,q)=>{Fn.stickers[G+":"+q]=(Fn.stickers[G+":"+q]||0)+D}),delete m[P]}dh(),M(),h&&(h.el.textContent="\uAC10\uC0AC\uD569\uB2C8\uB2E4! \uB610 \uB180\uB7EC \uC624\uC138\uC694 \u{1F380}",setTimeout(()=>h.el.textContent="\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}",5e3)),n("\u{1F4B3} \uACC4\uC0B0 \uC644\uB8CC! \uC0B0 \uBB3C\uAC74\uC740 \u{1F392} \uB0B4 \uBB3C\uAC74\uC5D0 \uC788\uC5B4\uC694"),p="mine",d()}}),o.addEventListener("click",C=>{w(),C.currentTarget.blur()}),l.addEventListener("click",C=>{v(x()?"cart":"browse"),C.currentTarget.blur()}),c.addEventListener("click",C=>{if(C.currentTarget.blur(),x()&&performance.now()-y>3e3)return y=performance.now(),c.textContent="\uD55C \uBC88 \uB354 \uB204\uB974\uBA74 \uB0B4\uB824\uB193\uC544\uC694",n("\uB2F4\uC740 \uC0C1\uD488\uC740 \uACC4\uC0B0\uD558\uC9C0 \uC54A\uC73C\uBA74 \uB0B4\uB824\uB193\uC544\uC694");S()}),addEventListener("keydown",C=>{C.code==="Escape"&&!a.hidden&&I()});let E=null;return{get open(){return!a.hidden},get shopping(){return f},openMine(){v("mine")},update(C,R){let U=s(C);if(o.hidden=f||!!R||!U,l.hidden=!f,c.hidden=!f,f){let D=`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 ${x()}`;l.textContent!==D&&(l.textContent=D),performance.now()-y>3e3&&c.textContent!=="\uC1FC\uD551 \uADF8\uB9CC\uB450\uAE30"&&(c.textContent="\uC1FC\uD551 \uADF8\uB9CC\uB450\uAE30")}u.g.visible=!R,f&&!R&&(e.arms[1].rotation.x=-.95,e.arms[1].rotation.z=.12);let P=b();P!==E&&(E=P,!a.hidden&&p==="cart"&&d())}}}async function sa(i,e){let t=await new Promise(a=>i.toBlob(a,"image/jpeg",.92)),n=new File([t],e,{type:"image/jpeg"});if(matchMedia("(pointer:coarse)").matches&&navigator.canShare&&navigator.canShare({files:[n]}))try{return await navigator.share({files:[n],title:"\uC218\uC787\uD574\uD53C"}),"shared"}catch(a){if(a.name==="AbortError")return"cancel"}let r=document.createElement("a");return r.href=URL.createObjectURL(t),r.download=e,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(r.href),r.remove()},4e3),"downloaded"}var ra=()=>{let i=new Date;return`${i.getFullYear()}.${String(i.getMonth()+1).padStart(2,"0")}.${String(i.getDate()).padStart(2,"0")}`};var rd='"Gamja Flower", "Poor Story", cursive',gh=6,PS={heart:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="500" height="100"><defs><pattern id="p" width="25" height="25" patternUnits="userSpaceOnUse">
    <path d="M12.5 19 C3 12 5 5 9 5 C11 5 12.5 7 12.5 8 C12.5 7 14 5 16 5 C20 5 22 12 12.5 19z" fill="#ff8fb7"/></pattern></defs>
    <path d="M4 0 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 V50 H246 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 V0z" fill="#ffd9e7" opacity=".88"/>
    <rect x="4" y="0" width="242" height="50" fill="url(#p)" opacity=".85"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="500" height="100"><defs><pattern id="p" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#eaf7df"/><rect width="8" height="16" fill="#a9db8a" opacity=".55"/><rect width="16" height="8" fill="#a9db8a" opacity=".55"/></pattern></defs>
    <path d="M4 0 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 V50 H246 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 V0z" fill="url(#p)" opacity=".9"/></svg>`},ad=i=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(PS[i]),lr={page:0,pages:Array.from({length:gh},()=>[])};try{let i=JSON.parse(localStorage.getItem("sh-diary"));i&&i.pages&&(lr=i)}catch{}var mh=()=>{try{return localStorage.setItem("sh-diary",JSON.stringify(lr)),!0}catch{return!1}};function d0({showToast:i}){let t=(O=>document.getElementById(O))("diary");t.innerHTML=`
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
    </div></div>`;let n=t.querySelector(".dpage"),s=t.querySelector(".dsel"),r=t.querySelector(".dinput"),a=r.querySelector("input"),o=t.querySelector(".dtabs"),l=t.querySelector(".dlist"),c=t.querySelector(".dfile"),h=t.querySelector(".dcrop"),u=h.querySelector(".dview"),f=u.querySelector("img"),p=h.querySelector(".dzoom"),g="stk",y=null,m=null,x=null,_=()=>lr.pages[lr.page];function b(){t.querySelector(".pg").textContent=`${lr.page+1} / ${gh}`;let O=n.clientWidth;n.innerHTML=_().map((z,X)=>{let Q=`left:${z.x*100}%;top:${z.y*100}%;transform:translate(-50%,-50%) rotate(${z.r}deg)`;if(z.t==="x")return`<div class="de dt ${m===X?"on":""}" data-i="${X}" style="${Q};color:${z.color};font-size:${z.s*O}px;max-width:${.84*O}px">${z.text.replace(/[<&]/g,W=>W==="<"?"&lt;":"&amp;")}</div>`;let $=z.t==="i"?z.src:z.t==="s"?pi(...z.k.split(":").map((W,F)=>F?+W:W)):ad(z.k);return`<img class="de${z.t==="i"?" dph":""} ${m===X?"on":""}" data-i="${X}" src="${$}" style="${Q};width:${z.s*O}px" draggable="false" alt="">`}).join(""),s.hidden=m===null}function M(){let O=Object.keys(an).filter(X=>an[X].ink&&ph(X)),z=Object.keys(an).filter(X=>an[X].tape&&ph(X));if(!y&&O.length&&(y=O[0]),o.innerHTML=[["stk","\u{1F31F} \uC2A4\uD2F0\uCEE4"],["photo","\u{1F4F7} \uC0AC\uC9C4"],["pen","\u270F\uFE0F \uBCFC\uD39C"],["tape","\u{1F380} \uD14C\uC774\uD504"]].map(([X,Q])=>`<button class="${g===X?"on":""}" data-tab="${X}">${Q}</button>`).join(""),g==="stk"){let X=Object.entries(Fn.stickers).filter(([,Q])=>Q>0);l.innerHTML=X.length?X.map(([Q,$])=>{let[W,F]=Q.split(":");return`<button class="dst" data-stk="${Q}"><img src="${pi(W,+F)}" alt=""><i>${$}</i></button>`}).join(""):"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uC2A4\uD2F0\uCEE4\uB97C \uC0AC \uC624\uBA74 \uC5EC\uAE30\uC11C \uB5BC\uC5B4 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694 \u{1F31F}</p>"}else g==="photo"?l.innerHTML='<button class="dpen" data-pick="1">\u{1F5BC}\uFE0F \uB0B4 \uAC24\uB7EC\uB9AC\uC5D0\uC11C \uC0AC\uC9C4 \uACE0\uB974\uAE30</button><p class="tip">\uACE0\uB978 \uC0AC\uC9C4\uC740 \uC798\uB77C\uC11C \uD06C\uAE30\uB97C \uB9DE\uCD98 \uB4A4 \uBD99\uC5EC\uC694</p>':g==="pen"?l.innerHTML=O.length?O.map(X=>`<button class="dpen ${y===X?"on":""}" data-pen="${X}"><span style="background:${an[X].ink}"></span>${an[X].name}</button>`).join("")+'<p class="tip">\uB2E4\uC774\uC5B4\uB9AC \uBE48 \uACF3\uC744 \uD1A1 \uB204\uB974\uBA74 \uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694</p>':"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uBCFC\uD39C\uC744 \uC0AC \uC624\uBA74 \uC190\uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694 \u270F\uFE0F</p>":l.innerHTML=z.length?z.map(X=>`<button class="dtape" data-tape="${an[X].tape}"><img src="${ad(an[X].tape)}" alt=""></button>`).join(""):"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504\uB97C \uC0AC \uC624\uBA74 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694 \u{1F380}</p>"}let w=O=>{_().push(O),m=_().length-1,mh()||(_().pop(),m=null,i("\uB2E4\uC774\uC5B4\uB9AC \uC800\uC7A5 \uACF5\uAC04\uC774 \uAF49 \uCC3C\uC5B4\uC694. \uC0AC\uC9C4\uC744 \uBA87 \uC7A5 \uB5BC\uACE0 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694")),b()},S=null,d="1",v={s:1,x:0,y:0,base:1},I=()=>{let O=Math.min(300,innerWidth-80),z=d==="circle"?1:+d;return[O,O/z]};function E(){let[O,z]=I();u.style.width=O+"px",u.style.height=z+"px",u.classList.toggle("circle",d==="circle"),v.base=Math.max(O/S.width,z/S.height),C(),R()}function C(){let[O,z]=I(),X=v.base*v.s,Q=S.width*X,$=S.height*X;v.x=Math.min(0,Math.max(O-Q,v.x)),v.y=Math.min(0,Math.max(z-$,v.y))}function R(){let O=v.base*v.s;f.style.width=S.width*O+"px",f.style.transform=`translate(${v.x}px,${v.y}px)`}c.addEventListener("change",async()=>{let O=c.files&&c.files[0];if(O)try{let z=URL.createObjectURL(O),X=new Image;X.src=z,await X.decode(),S=X,f.src=z,d="1",v={s:1,x:0,y:0,base:1},p.value=1,h.querySelectorAll("[data-shape]").forEach(F=>F.classList.toggle("on",F.dataset.shape===d)),h.hidden=!1,E();let[Q,$]=I(),W=v.base;v.x=(Q-S.width*W)/2,v.y=($-S.height*W)/2,C(),R()}catch{i("\uC774 \uC0AC\uC9C4\uC740 \uC5F4 \uC218 \uC5C6\uC5B4\uC694. \uB2E4\uB978 \uC0AC\uC9C4\uC744 \uACE8\uB77C \uC8FC\uC138\uC694")}}),p.addEventListener("input",()=>{let[O,z]=I(),X=v.base*v.s;v.s=+p.value;let Q=v.base*v.s;v.x=O/2-(O/2-v.x)*Q/X,v.y=z/2-(z/2-v.y)*Q/X,C(),R()});let U=null;u.addEventListener("pointerdown",O=>{U={id:O.pointerId,x:O.clientX-v.x,y:O.clientY-v.y},u.setPointerCapture(O.pointerId),O.preventDefault()}),u.addEventListener("pointermove",O=>{!U||O.pointerId!==U.id||(v.x=O.clientX-U.x,v.y=O.clientY-U.y,C(),R())}),u.addEventListener("pointerup",()=>U=null),u.addEventListener("pointercancel",()=>U=null),u.addEventListener("wheel",O=>{O.preventDefault(),p.value=Math.min(4,Math.max(1,+p.value-O.deltaY*.002)),p.dispatchEvent(new Event("input"))},{passive:!1}),h.addEventListener("click",O=>{let z=O.target.closest("button");if(z){if(z.dataset.shape){d=z.dataset.shape,h.querySelectorAll("[data-shape]").forEach(X=>X.classList.toggle("on",X===z)),E();return}if(z.dataset.crop==="cancel"){h.hidden=!0;return}if(z.dataset.crop==="ok"){let[X,Q]=I(),$=v.base*v.s,W=d==="circle",F=W?420:560,j=Math.round(F*Q/X),V=Math.round(F*.05),te=document.createElement("canvas");te.width=F+V*2,te.height=j+V*2;let _e=te.getContext("2d");W?(_e.fillStyle="#fff",_e.beginPath(),_e.arc(te.width/2,te.height/2,te.width/2,0,7),_e.fill(),_e.save(),_e.beginPath(),_e.arc(te.width/2,te.height/2,F/2,0,7),_e.clip()):(_e.fillStyle="#fff",_e.fillRect(0,0,te.width,te.height)),_e.drawImage(S,-v.x/$,-v.y/$,X/$,Q/$,V,V,F,j),W&&_e.restore();let be=W?te.toDataURL("image/png"):te.toDataURL("image/jpeg",.84);h.hidden=!0,w({t:"i",src:be,x:.5,y:.45,s:d==="0.75"?.4:.48,r:Math.round((Math.random()-.5)*10)})}}}),o.addEventListener("click",O=>{let z=O.target.closest("[data-tab]");z&&(g=z.dataset.tab,r.hidden=!0,M())}),l.addEventListener("click",O=>{let z=O.target.closest("button");if(z)if(z.dataset.stk){let X=z.dataset.stk;if(!(Fn.stickers[X]>0))return;Fn.stickers[X]--,dh(),w({t:"s",k:X,x:.35+Math.random()*.3,y:.3+Math.random()*.4,s:.26,r:Math.round((Math.random()-.5)*24)}),M()}else z.dataset.pick?(c.value="",c.click()):z.dataset.pen?(y=z.dataset.pen,M()):z.dataset.tape&&w({t:"p",k:z.dataset.tape,x:.5,y:.2+Math.random()*.6,s:.55,r:Math.round((Math.random()-.5)*16)})});let P=null;n.addEventListener("pointerdown",O=>{let z=O.target.closest(".de"),X=n.getBoundingClientRect();if(z){m=+z.dataset.i;let Q=_()[m];P={id:O.pointerId,ox:Q.x-(O.clientX-X.left)/X.width,oy:Q.y-(O.clientY-X.top)/X.height,node:z},n.setPointerCapture(O.pointerId),s.hidden=!1,n.querySelectorAll(".de.on").forEach($=>$!==z&&$.classList.remove("on")),z.classList.add("on"),O.preventDefault();return}m=null,b(),g==="pen"&&y?(x={x:(O.clientX-X.left)/X.width,y:(O.clientY-X.top)/X.height},r.hidden=!1,a.value="",setTimeout(()=>a.focus(),30)):g==="pen"&&i("\uC18C\uD488\uC0F5\uC5D0\uC11C \uBCFC\uD39C\uC744 \uC0AC \uC624\uBA74 \uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694")}),n.addEventListener("pointermove",O=>{if(!P||O.pointerId!==P.id)return;let z=n.getBoundingClientRect(),X=_()[m];X.x=Math.min(1,Math.max(0,(O.clientX-z.left)/z.width+P.ox)),X.y=Math.min(1,Math.max(0,(O.clientY-z.top)/z.height+P.oy)),P.node.style.left=X.x*100+"%",P.node.style.top=X.y*100+"%"});let D=O=>{P&&O.pointerId===P.id&&(P=null,mh())};n.addEventListener("pointerup",D),n.addEventListener("pointercancel",D),r.addEventListener("submit",O=>{O.preventDefault();let z=a.value.trim();r.hidden=!0,a.blur(),!(!z||!x)&&w({t:"x",text:z,color:an[y].ink,x:x.x,y:x.y,s:.07,r:Math.round((Math.random()-.5)*8)})}),t.addEventListener("click",async O=>{let z=O.target.closest("[data-act]");if(!z)return;let X=z.dataset.act,Q=m!==null?_()[m]:null;if(X==="close")return k();if(X==="prev"||X==="next")return lr.page=(lr.page+(X==="next"?1:gh-1))%gh,m=null,r.hidden=!0,mh(),b();if(X==="save")return N();Q&&(X==="rotl"?Q.r-=12:X==="rotr"?Q.r+=12:X==="big"?Q.s=Math.min(Q.t==="x"?.2:.9,Q.s*1.18):X==="small"?Q.s=Math.max(Q.t==="x"?.03:.08,Q.s/1.18):X==="del"&&(_().splice(m,1),Q.t==="s"&&(Fn.stickers[Q.k]=(Fn.stickers[Q.k]||0)+1,dh(),M()),m=null),mh(),b())});function G(O,z,X){O.fillStyle="#fffdf6",O.fillRect(0,0,z,X),O.fillStyle="#e9dcef";for(let Q=60;Q<X;Q+=36)for(let $=90;$<z-20;$+=36)O.beginPath(),O.arc($,Q,2,0,7),O.fill();O.fillStyle="#f6e3ec",O.fillRect(0,0,54,X);for(let Q=40;Q<X;Q+=60)O.fillStyle="#d8cde6",O.beginPath(),O.arc(27,Q,9,0,7),O.fill()}async function N(){try{await document.fonts.load(`40px ${rd}`)}catch{}let O=900,z=1200,X=document.createElement("canvas");X.width=O,X.height=z;let Q=X.getContext("2d");G(Q,O,z);for(let W of _()){if(Q.save(),Q.translate(W.x*O,W.y*z),Q.rotate(W.r*Math.PI/180),W.t==="x"){Q.font=`${W.s*O}px ${rd}`,Q.fillStyle=W.color,Q.textAlign="center",Q.textBaseline="middle";let F=[],j="";for(let te of W.text.split(/(\s+)/))j&&Q.measureText(j+te).width>O*.84?(F.push(j.trim()),j=te.trimStart()):j+=te;F.push(j.trim());let V=W.s*O*1.05;F.forEach((te,_e)=>Q.fillText(te,0,(_e-(F.length-1)/2)*V))}else{let F=new Image;F.src=W.t==="i"?W.src:W.t==="s"?pi(...W.k.split(":").map((te,_e)=>_e?+te:te)):ad(W.k),await F.decode().catch(()=>{});let j=W.s*O,V=j*(F.naturalHeight/F.naturalWidth||1);Q.drawImage(F,-j/2,-V/2,j,V)}Q.restore()}Q.font=`28px ${rd}`,Q.fillStyle="#b9a6cf",Q.textAlign="right",Q.fillText(`\uC218\uC787\uD574\uD53C \uB2E4\uC774\uC5B4\uB9AC \xB7 ${ra()}`,O-30,z-30);let $=await sa(X,`suithappy-diary-${Date.now()}.jpg`);i($==="downloaded"?"\u{1F4BE} \uB2E4\uC774\uC5B4\uB9AC\uB97C \uC774\uBBF8\uC9C0\uB85C \uC800\uC7A5\uD588\uC5B4\uC694":$==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}function q(){if(!ph("diary"))return i("\u{1F4D2} \uC18C\uD488\uC0F5\uC5D0\uC11C \uB2E4\uC774\uC5B4\uB9AC \uC218\uCCA9\uC744 \uC0AC \uC624\uBA74 \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694");t.hidden=!1,m=null,r.hidden=!0,M(),requestAnimationFrame(b)}function k(){t.hidden=!0,r.hidden=!0}return addEventListener("resize",()=>{t.hidden||b()}),addEventListener("keydown",O=>{O.code==="Escape"&&!t.hidden&&r.hidden&&k()}),{open:q,close:k,get isOpen(){return!t.hidden}}}var p0={v:{label:"\u270C\uFE0F \uBE0C\uC774",arm:[-2.75,.32],tilt:.12},heart:{label:"\u{1FAF6} \uD558\uD2B8",arm:[-3.05,-.55],tilt:-.1},chin:{label:"\u{1F338} \uAF43\uBC1B\uCE68",arm:[-2,-.62],tilt:.2}};function m0({hero:i,mirrors:e,camera:t,player:n,showToast:s,renderNow:r}){let a=N=>document.getElementById(N),o=a("photo-btn"),l=a("photo-bar"),c=a("shot");l.innerHTML=`<div class="poses">${Object.entries(p0).map(([N,q])=>`<button data-pose="${N}">${q.label}</button>`).join("")}</div>
    <div class="prow"><button class="pclose" data-act="exit">\uB2EB\uAE30</button><button class="shutter" data-act="shoot" aria-label="\uCC0D\uAE30"></button><span class="ptip">\uD3EC\uC988\uB97C \uACE0\uB974\uACE0 \uCC30\uCE75!</span></div>`;let h=N=>new $t({color:N,roughness:.4}),u=new tt,f=new je(new Bt(.07,.13,.014),h("#9f8af0"));u.add(f);let p=new je(new ot(.006,.006,.004,10),h("#3b2f4a"));p.rotation.x=Math.PI/2,p.position.set(-.018,.048,.008),u.add(p),u.position.set(0,-.27,.035),u.rotation.x=Math.PI/2;let g=new tt;g.position.set(.012,-.27,0);let y=h("#ffe3d0"),m=new tt;g.add(m);for(let N of[-1,1]){let q=new je(new Wa(.011,.05,3,6),y);q.position.set(.012*N,-.04,0),q.rotation.z=.28*N,m.add(q)}let x=new tt,_=new Ss;_.moveTo(0,-.05),_.bezierCurveTo(-.07,0,-.04,.05,0,.025),_.bezierCurveTo(.04,.05,.07,0,0,-.05),x.add(new je(new Ys(_,{depth:.015,bevelEnabled:!1}),h("#ff6fa5"))),x.position.set(0,1.38,.05),x.scale.setScalar(1.8);let b=new tt;for(let N=0;N<5;N++){let q=new je(new jt(.03,8,6),h(N%2?"#ffd1e3":"#fff3b0"));q.position.set(Math.cos(N*1.256)*.05,0,Math.sin(N*1.256)*.05),b.add(q)}b.position.set(0,.92,.2);let M=!1,w=null,S="v",d=!1,v=0,I=0,E=new B;function C(){for(let N of e){let q=N.c.x-n.x,k=n.z-N.c.z;if(q>.6&&q<2.6&&Math.abs(k)<.85)return N}return null}function R(N){S=N,l.querySelectorAll("[data-pose]").forEach(q=>q.classList.toggle("on",q.dataset.pose===N)),m.visible=N==="v",x.visible=N==="heart",b.visible=N==="chin"}function U(){if(w=C(),!!w){M=!0,n.face=Math.PI/2,I=t.fov,t.fov=64,t.updateProjectionMatrix();try{document.fonts.load('40px "Gamja Flower"')}catch{}i.arms[0].add(u),i.arms[1].add(g),i.root.add(x),i.root.add(b),R(S),l.hidden=!1,o.hidden=!0,document.body.classList.add("photo"),s("\u{1F4F8} \uAC70\uC6B8\uC0F7 \uBAA8\uB4DC! \uD3EC\uC988\uB97C \uACE0\uB974\uACE0 \uB3D9\uADF8\uB780 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC694")}}function P(){M=!1,l.hidden=!0,document.body.classList.remove("photo"),I&&(t.fov=I,t.updateProjectionMatrix()),i.arms[0].remove(u),i.arms[1].remove(g),i.root.remove(x),i.root.remove(b),i.head.rotation.z=0}l.addEventListener("click",N=>{let q=N.target.closest("button");q&&(q.dataset.pose?R(q.dataset.pose):q.dataset.act==="exit"?P():q.dataset.act==="shoot"&&(v=1,G.applyPose(performance.now()/1e3),i.root.updateMatrixWorld(!0),G.camera(),d=!0,G.afterRender(r())))}),o.addEventListener("click",N=>{U(),N.currentTarget.blur()});let D=null;c.addEventListener("click",async N=>{let q=N.target.closest("button");if(q&&(q.dataset.act==="again"&&(c.hidden=!0),q.dataset.act==="save"&&D)){let k=await sa(D,`suithappy-mirror-${Date.now()}.jpg`);s(k==="downloaded"?"\u{1F4BE} \uC0AC\uC9C4\uC744 \uC800\uC7A5\uD588\uC5B4\uC694":k==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}}),addEventListener("keydown",N=>{N.code==="Escape"&&M&&(c.hidden?P():c.hidden=!0)});let G={get active(){return M},update(N){o.hidden=M||!!N||!C()},applyPose(N){if(!M)return;let q=p0[S];i.arms[0].rotation.x=-1.95,i.arms[0].rotation.z=-.55,i.arms[1].rotation.x=q.arm[0],i.arms[1].rotation.z=q.arm[1],i.head.rotation.z=q.tilt,i.head.rotation.y=0,x.rotation.y=Math.sin(N*2)*.3,x.position.y=1.38+Math.sin(N*3)*.02},camera(){if(!M)return!1;let N=n.face,q=Math.sin(N),k=Math.cos(N),O=k,z=-q;return t.position.set(n.x+q*.42-O*.1,.78,n.z+k*.42-z*.1),t.lookAt(w.c.x,.72,n.z*.7+w.c.z*.3),!0},afterRender(N){let q=document.getElementById("flash");if(v>0&&(v=Math.max(0,v-.08),q.style.opacity=v),!d)return;d=!1;let k=900,O=1200,z=document.createElement("canvas");z.width=k,z.height=O;let X=z.getContext("2d"),Q=N.width,$=N.height,W=3/4,F=Q,j=Q/W;j>$&&(j=$,F=$*W),X.fillStyle="#fff",X.fillRect(0,0,k,O),X.drawImage(N,(Q-F)/2,($-j)/2,F,j,30,30,k-60,O-150),X.fillStyle="#ff8fb7",X.font='700 40px "Gamja Flower", cursive',X.textAlign="left",X.fillText("Soo it Happy \u{1F353} \uC218\uC9D1\uC218\uC9D1",40,O-62),X.fillStyle="#b9a6cf",X.font='30px "Gamja Flower", cursive',X.textAlign="right",X.fillText(ra(),k-40,O-62),D=z,c.innerHTML=`<div class="shotcard"><img src="${z.toDataURL("image/jpeg",.85)}" alt="\uCC0D\uC740 \uAC70\uC6B8\uC0F7"><div class="srow"><button data-act="again">\uB2E4\uC2DC \uCC0D\uAE30</button><button class="go" data-act="save">\u{1F4F2} \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5</button></div></div>`,c.hidden=!1}};return G}var Bn=(i,e)=>i+Math.random()*(e-i),g0=i=>i[Math.floor(Math.random()*i.length)],xh=(i,e,t)=>Math.max(e,Math.min(t,i)),Cs=(i,e,t)=>i+(e-i)*t,zo=(i,e,t)=>{let n=parseInt(i.slice(1),16),s=parseInt(e.slice(1),16),r=a=>Math.round(Cs(n>>a&255,s>>a&255,xh(t,0,1)));return`rgb(${r(16)},${r(8)},${r(0)})`},cr=null,_h=()=>{if(!cr)try{cr=new(window.AudioContext||window.webkitAudioContext)}catch{}return cr&&cr.state==="suspended"&&cr.resume(),cr};function In(i,e=.12,t="triangle",n=.12,s=0){let r=_h();if(!r)return;let a=r.currentTime+s,o=r.createOscillator(),l=r.createGain();o.type=t,o.frequency.setValueAtTime(i,a),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l).connect(r.destination),o.start(a),o.stop(a+e+.02)}function IS(i=.05,e=.08,t=0,n=6e3){let s=_h();if(!s)return;let r=s.currentTime+t,a=Math.floor(s.sampleRate*i),o=s.createBuffer(1,a,s.sampleRate),l=o.getChannelData(0);for(let f=0;f<a;f++)l[f]=(Math.random()*2-1)*(1-f/a);let c=s.createBufferSource(),h=s.createBiquadFilter(),u=s.createGain();h.type="highpass",h.frequency.value=n,u.gain.value=e,c.buffer=o,c.connect(h).connect(u).connect(s.destination),c.start(r)}var _n={good:()=>{In(880,.1),In(1320,.12,"triangle",.1,.06)},bad:()=>In(180,.2,"sawtooth",.08),pop:()=>In(660,.08,"sine",.12),win:()=>[523,659,784,1047].forEach((i,e)=>In(i,.18,"triangle",.12,e*.09))};function Gt(i,e,t,n,s,r){i.beginPath(),i.roundRect(e,t,n,s,r)}function Ci(i,e,t,n,s){i.font=`${s}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(e,t,n)}function en(i,e,t,n,s=16,r="#4a3f66",a=800,o="center"){i.font=`${a} ${s}px "Malgun Gothic","Apple SD Gothic Neo",sans-serif`,i.fillStyle=r,i.textAlign=o,i.textBaseline="middle",i.fillText(e,t,n)}function ko(i,e,t){for(let n of i)n.t+=t,n.y-=40*t,e.globalAlpha=xh(1-n.t/.9,0,1),en(e,n.s,n.x,n.y,n.size||18,n.c||"#e0457b",900);e.globalAlpha=1;for(let n=i.length-1;n>=0;n--)i[n].t>.9&&i.splice(n,1)}function vh(i,e,t){Gt(i,10,10,110,34,17),i.fillStyle="#ffffffcc",i.fill(),en(i,`\u23F1 ${Math.max(0,Math.ceil(e))}\uCD08`,65,27,15),Gt(i,220,10,130,34,17),i.fillStyle="#ffffffcc",i.fill(),en(i,`\uC810\uC218 ${t}`,285,27,15,"#e0457b")}function LS(){let i=[],e=[],t=[],n=30,s=0,r=0,a=0,o=0,l=0,c=[{y:236,s:.84},{y:322,s:.97},{y:420,s:1.1}],h=[.68,.82],u=[.58,.95],f=1.25,p=d=>({side:0,done:[0,0],marks:[0,0],rate:Bn(.3,.46)*(1+a*.07),ph:Math.random()*6,flips:0,slide:0,lift:0,grades:[],wait:d,dead:0}),g=[p(0),p(2.2),p(4.4)],y=d=>d<.58?zo("#fbf6ec","#f3d9a8",d/.58):d<.82?zo("#f3d9a8","#e49a4c",(d-.58)/.24):d<.95?zo("#e49a4c","#a9572a",(d-.82)/.13):zo("#a9572a","#2a201c",(d-.95)/.3);function m(d){let v=g[d];if(!v||v.slide||v.wait>0||v.dead)return;let I=v.done[v.side],E=c[d],C;if(I<u[0])C=["\uB35C \uC775\uC5C8\uC5B4\uC694 \u{1F62F}",-10,"#8a7bb8"],_n.bad(),o=0;else if(I>=h[0]&&I<=h[1]){o++,C=[o>1?`PERFECT \xD7${o}!`:"PERFECT \uB178\uB987\uB178\uB987!",100+(o-1)*20,"#e0457b"],_n.good();for(let R=0;R<10;R++)t.push({x:360/2+Bn(-90,90)*E.s,y:E.y,vx:Bn(-60,60),vy:Bn(-160,-60),t:0})}else I<=u[1]?(C=["\uC88B\uC544\uC694 \u{1F44D}",50,"#e39b4f"],_n.pop(),o=0):(C=["\uC557 \uD0D4\uC5B4\uC694\u2026 \u{1F525}",-30,"#5a4a44"],_n.bad(),o=0);v.grades.push(C[1]),s=Math.max(0,s+C[1]),i.push({s:C[0],x:360/2,y:E.y-46*E.s,t:0,c:C[2]}),v.marks[v.side]=1,v.flips++,v.lift=1,v.flips>=2?(v.slide=.001,r++,a++,v.grades.every(R=>R>=100)&&(s+=80,i.push({s:"\uC644\uBCBD\uD55C \uB5A1\uAF2C\uCE58! +80",x:360/2,y:E.y-20,t:0,size:19}),_n.win())):v.side=1}let x=d=>{let v=0,I=1e9;return c.forEach((E,C)=>{let R=Math.abs(E.y-d);R<I&&(I=R,v=C)}),v},_=190,b=470,M=d=>Cs(78,8,(d-_)/(b-_)),w=d=>360-M(d);function S(d,v,I,E,C){let R=d.createLinearGradient(0,v,0,v+I);return R.addColorStop(0,zo("#ffffff","#fbf6ec",.5)),R.addColorStop(.18,y(E)),R.addColorStop(.62,y((E+C)/2)),R.addColorStop(1,y(C)),R}return{title:"\u{1F361} \uB5A1\uAF2C\uCE58 \uAD7D\uAE30",desc:"\uC22F\uBD88 \uC704 <b>\uAF2C\uCE58 3\uAC1C</b>\uAC00 \uB3D9\uC2DC\uC5D0 \uC775\uC5B4\uC694!<br>\uB5A1\uC774 <b>\uB178\uB987\uB178\uB987</b>(\uAC8C\uC774\uC9C0 \uCD08\uB85D)\uD560 \uB54C \uADF8 \uAF2C\uCE58\uB97C \uB20C\uB7EC \uB4A4\uC9D1\uC5B4\uC694.<br>\uAF2C\uCE58\uB9C8\uB2E4 \uC775\uB294 \uC18D\uB3C4\uAC00 \uB2EC\uB77C\uC694 \xB7 \uC624\uB798 \uB450\uBA74 \uC22F\uC774 \uB3FC\uC694 \u{1F525}<br>\uC5F0\uC18D PERFECT\uBA74 \uCF64\uBCF4 \uBCF4\uB108\uC2A4! (\uD0A4\uBCF4\uB4DC 1\xB72\xB73)",buttons:[{label:"\u2460 \uB4A4\uCABD",act:()=>m(0)},{label:"\u2461 \uAC00\uC6B4\uB370",act:()=>m(1)},{label:"\u2462 \uC55E\uCABD",act:()=>m(2)}],key(d){(d==="Digit1"||d==="Numpad1")&&m(0),(d==="Digit2"||d==="Numpad2")&&m(1),(d==="Digit3"||d==="Numpad3")&&m(2)},tapAt(d,v){v>_-50&&v<b+20&&m(x(v))},update(d){return n-=d,g.forEach((v,I)=>{if(v.wait>0){v.wait-=d;return}if(v.slide){v.slide+=d*1.8,v.slide>1&&(g[I]=p(Bn(.4,1.1)));return}if(v.dead){v.dead+=d,v.dead>1.2&&(g[I]=p(Bn(.5,1)));return}v.ph+=d;let E=1+Math.sin(v.ph*1.7)*.22+Math.sin(v.ph*4.3+I)*.1;v.done[v.side]=Math.min(1.5,v.done[v.side]+v.rate*E*d),v.done[v.side]>.9&&Math.random()<d*6&&e.push({x:360/2+Bn(-100,100)*c[I].s,y:c[I].y-10,t:0,r:Bn(6,12),dark:v.done[v.side]>1}),v.done[v.side]>=f&&(v.dead=.001,l++,o=0,s=Math.max(0,s-50),_n.bad(),i.push({s:"\uC22F\uC774 \uB410\uC5B4\uC694\u2026 -50",x:360/2,y:c[I].y-40,t:0,c:"#5a4a44"})),v.lift=Math.max(0,v.lift-d*3.5)}),Math.random()<d*2&&e.push({x:Bn(40,320),y:450,t:0,r:Bn(5,9),dark:!1}),n<=0?{score:s,msg:`\uB5A1\uAF2C\uCE58 ${r}\uAC1C \uC644\uC131!${l?` (\uC22F ${l}\uAC1C \u{1F525})`:""}`}:null},draw(d,v,I){let E=d.createLinearGradient(0,0,0,560);E.addColorStop(0,"#ffe9dc"),E.addColorStop(.32,"#ffd7c4"),E.addColorStop(1,"#c98f7a"),d.fillStyle=E,d.fillRect(0,0,360,560);for(let R=0;R<6;R++)d.fillStyle=R%2?"#ff8fb0":"#fff",d.beginPath(),d.moveTo(R*60,52),d.lineTo(R*60+60,52),d.lineTo(R*60+60,78),d.quadraticCurveTo(R*60+30,96,R*60,78),d.fill();vh(d,n,s),o>1&&(Gt(d,360/2-52,12,104,30,15),d.fillStyle="#e0457b",d.fill(),en(d,`\u{1F525} \uCF64\uBCF4 ${o}`,360/2,27,14,"#fff",900)),d.fillStyle="#3a2b2e",d.beginPath(),d.moveTo(M(_)-10,_-14),d.lineTo(w(_)+10,_-14),d.lineTo(w(b)+12,b+8),d.lineTo(M(b)-12,b+8),d.fill();let C=d.createLinearGradient(0,b,0,b+60);C.addColorStop(0,"#6d5a5e"),C.addColorStop(1,"#2d2224"),d.fillStyle=C,Gt(d,M(b)-12,b+6,w(b)-M(b)+24,54,8),d.fill(),d.fillStyle="#ffffff22",d.fillRect(M(b)-4,b+14,w(b)-M(b)+8,3);for(let R=0;R<26;R++){let U=_+12+R*37%250,P=Cs(M(U)+14,w(U)-14,R*53%100/100),D=Cs(8,15,(U-_)/(b-_)),G=.55+Math.sin(I*3+R*1.7)*.25,N=d.createRadialGradient(P,U,0,P,U,D*1.8);N.addColorStop(0,`rgba(255,${150+60*G|0},70,${G})`),N.addColorStop(1,"rgba(255,90,40,0)"),d.fillStyle=N,d.beginPath(),d.arc(P,U,D*1.8,0,7),d.fill()}for(let R=0;R<=14;R++){let U=R/14,P=Cs(_,b,U*(.75+.25*U)),D=Cs(2.2,5,U);d.strokeStyle="rgba(0,0,0,0.45)",d.lineWidth=D,d.beginPath(),d.moveTo(M(P),P+D*.6),d.lineTo(w(P),P+D*.6),d.stroke(),d.strokeStyle="#9d9298",d.lineWidth=D,d.beginPath(),d.moveTo(M(P),P),d.lineTo(w(P),P),d.stroke(),d.strokeStyle="#efe6ea",d.lineWidth=D*.3,d.beginPath(),d.moveTo(M(P)+4,P-D*.22),d.lineTo(w(P)-4,P-D*.22),d.stroke()}d.strokeStyle="#5b4a4f",d.lineWidth=7,d.beginPath(),d.moveTo(M(_)-6,_-8),d.lineTo(w(_)+6,_-8),d.lineTo(w(b)+8,b+4),d.lineTo(M(b)-8,b+4),d.closePath(),d.stroke(),g.forEach((R,U)=>{let P=c[U],D=P.s,G=R.slide?Cs(360/2,620,R.slide*R.slide):360/2;if(R.wait>0){en(d,"\u2026",360/2,P.y,16*D,"#ffffff88");return}let N=Math.sin(R.lift*Math.PI)*34*D,q=P.y-N-(R.dead?R.dead*30:0);d.globalAlpha=R.dead?Math.max(0,1-R.dead):1,d.fillStyle="rgba(0,0,0,0.35)",d.beginPath(),d.ellipse(G,P.y+16*D,125*D,9*D,0,0,7),d.fill(),d.strokeStyle="#e2bd86",d.lineWidth=6*D,d.lineCap="round",d.beginPath(),d.moveTo(G-160*D,q+4*D),d.lineTo(G+150*D,q+4*D),d.stroke(),d.fillStyle="#c99a5e",Gt(d,G-178*D,q-3*D,26*D,14*D,4),d.fill();let k=R.done[R.side],O=R.dead?1.5:R.flips?R.done[0]:0,z=R.dead?1.5:R.slide?R.done[1]:k;for(let X=0;X<4;X++){let Q=G-102*D+X*68*D,$=56*D,W=36*D,F=q-W/2;if(d.fillStyle=S(d,F,W,O,z),Gt(d,Q-$/2,F,$,W,14*D),d.fill(),R.marks[0]||R.slide){d.strokeStyle="rgba(70,35,20,0.55)",d.lineWidth=3*D;for(let j=-1;j<=1;j++)d.beginPath(),d.moveTo(Q+j*14*D-6*D,F+8*D),d.lineTo(Q+j*14*D+6*D,F+W-8*D),d.stroke()}R.slide&&(d.fillStyle="rgba(210,50,40,0.85)",Gt(d,Q-$/2+3,F+3,$-6,W*.55,10*D),d.fill(),d.fillStyle="#ffffff99",Gt(d,Q-$/2+8*D,F+6*D,14*D,5*D,3),d.fill()),d.fillStyle="#ffffff66",Gt(d,Q-$/2+7*D,F+5*D,16*D,6*D,3),d.fill()}if(d.globalAlpha=1,!R.slide&&!R.dead){let X=G-70*D,Q=q-40*D,$=140*D,W=9*D;Gt(d,X-3,Q-3,$+6,W+6,7),d.fillStyle="#ffffffd9",d.fill();let F=(j,V,te)=>{d.fillStyle=te,d.fillRect(X+$*j/f,Q,$*(V-j)/f,W)};F(0,u[0],"#eee4ea"),F(u[0],h[0],"#ffe08a"),F(h[0],h[1],"#7fdc7a"),F(h[1],u[1],"#ffe08a"),F(u[1],f,"#e6a0a0"),d.fillStyle="#4a3f66",d.fillRect(X+$*Math.min(k,f)/f-2,Q-4,4,W+8),Gt(d,X-26*D,Q-4*D,18*D,18*D,9*D),d.fillStyle="#e0457b",d.fill(),en(d,`${U+1}`,X-17*D,Q+5*D,12*D,"#fff",900),en(d,R.side?"\uB4B7\uBA74":"\uC55E\uBA74",X+$+20*D,Q+W/2,11*D,"#fff",800)}});for(let R=e.length-1;R>=0;R--){let U=e[R];U.t+=v,U.y-=34*v,U.x+=Math.sin(U.t*3+R)*10*v,U.r+=10*v,d.globalAlpha=Math.max(0,.32*(1-U.t/1.6)),d.fillStyle=U.dark?"#5a4f52":"#ffffff",d.beginPath(),d.arc(U.x,U.y,U.r,0,7),d.fill(),U.t>1.6&&e.splice(R,1)}for(let R=t.length-1;R>=0;R--){let U=t[R];U.t+=v,U.x+=U.vx*v,U.y+=U.vy*v,U.vy+=300*v,d.globalAlpha=Math.max(0,1-U.t/.7),d.fillStyle="#ffd36b",d.beginPath(),d.arc(U.x,U.y,2.5,0,7),d.fill(),U.t>.7&&t.splice(R,1)}d.globalAlpha=1,en(d,"\uC775\uC740 \uAF2C\uCE58\uB97C \uC9C1\uC811 \uB204\uB974\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC73C\uB85C \uB4A4\uC9D1\uC5B4\uC694",360/2,540,12,"#fff",700),ko(i,d,v)}}}function DS(){let i=[["\u{1F353}",56,44],["\u{1F34C}",78,40],["\u{1F352}",50,46],["\u{1F95D}",60,44],["\u{1F366}",62,56],["\u{1F351}",58,48],["\u{1F9C7}",76,40],["\u{1F36E}",66,50]],e=[],t=45,n=0,s=0,r=null,a=0,o={x:360/2,y:470,w:120,h:26,e:null},l=[o],c=null,h=null,u=()=>{let[g,y,m]=g0(i);c={e:g,w:y,h:m,ph:Bn(0,6),sp:1.6+l.length*.07}};u();let f=()=>l[l.length-1];function p(){if(h||r||!c)return;let g=360/2+Math.sin(c.ph)*120;h={...c,x:g,y:120+s,vy:0},c=null,_n.pop()}return{title:"\u{1F368} \uD30C\uB974\uD398 \uD0D1 \uC313\uAE30",desc:"\uC88C\uC6B0\uB85C \uD754\uB4E4\uB9AC\uB294 \uC7AC\uB8CC\uB97C <b>\uD0ED</b>\uD574\uC11C \uB5A8\uC5B4\uB728\uB824\uC694.<br>\uAC00\uC6B4\uB370\uC5D0 \uC798 \uB9DE\uCDB0 \uB192\uC774 \uC313\uC744\uC218\uB85D \uC810\uC218! \uC911\uC2EC\uC744 \uBC97\uC5B4\uB098\uBA74 \uC640\uB974\uB974\u2026 (45\uCD08)",buttons:[{label:"\u2B07\uFE0F \uB5A8\uC5B4\uB728\uB9AC\uAE30",act:p}],key(g){(g==="Space"||g==="Enter")&&p()},tap:p,update(g){if(a+=g,t-=g,c&&(c.ph+=c.sp*g),h){h.vy+=1600*g,h.y+=h.vy*g;let m=f(),x=m.y-m.h/2-h.h/2;if(h.y>=x){let _=h.x-m.x,b=(m.w+h.w)/2*.55;if(Math.abs(_)>b)r={t:0,x:h.x,y:x,dir:Math.sign(_)},_n.bad(),e.push({s:"\uC640\uB974\uB974\u2026 \u{1F635}",x:360/2,y:260,t:0,size:22});else{let M=Math.abs(_)<6,w={e:h.e,w:h.w,h:h.h,x:M?m.x:h.x,y:x,wob:1};l.push(w),n+=M?30:10,e.push({s:M?"PERFECT! +30":"+10",x:w.x,y:x-30-s,t:0,c:M?"#e0457b":"#7a6c99"}),M?_n.good():_n.pop();let S=l.slice(1),d=S.reduce((v,I)=>v+I.x,0)/S.length;Math.abs(d-o.x)>58?(r={t:0,x:d,y:x,dir:Math.sign(d-o.x)},_n.bad(),e.push({s:"\uAE30\uC6B8\uC5B4\uC11C \uC640\uB974\uB974\u2026 \u{1F635}",x:360/2,y:260,t:0,size:20})):u()}h=null}}let y=Math.max(0,470-f().y-250);s=Cs(s,y,Math.min(1,g*4));for(let m of l)m.wob&&(m.wob=Math.max(0,m.wob-g*3));return r&&(r.t+=g,r.t>1.4)?{score:n,msg:`${l.length-1}\uCE35\uAE4C\uC9C0 \uC313\uC558\uC5B4\uC694!`}:t<=0?{score:n,msg:`${l.length-1}\uCE35 \uD30C\uB974\uD398 \uC644\uC131! \u{1F368}`}:null},draw(g,y,m){let x=g.createLinearGradient(0,0,0,560);x.addColorStop(0,"#e8f6ff"),x.addColorStop(1,"#ffe8f1"),g.fillStyle=x,g.fillRect(0,0,360,560),g.fillStyle="#ffffff66";for(let _=0;_<12;_++)g.beginPath(),g.arc(_*73%360,(_*131+s*.3)%560,18,0,7),g.fill();g.save(),g.translate(0,s),g.fillStyle="#ffffffb0",g.strokeStyle="#c9e6f2",g.lineWidth=3,g.beginPath(),g.moveTo(o.x-70,470),g.lineTo(o.x+70,470),g.lineTo(o.x+40,540),g.lineTo(o.x-40,540),g.closePath(),g.fill(),g.stroke(),Gt(g,o.x-12,540,24,30,6),g.fill(),g.stroke(),Gt(g,o.x-60,456,120,26,13),g.fillStyle="#fff7f0",g.fill();for(let _=1;_<l.length;_++){let b=l[_],M=r&&_===l.length-1&&r.t>0;g.save(),g.translate(b.x+(M?r.dir*r.t*140:0),b.y+(M?r.t*r.t*300:0)),g.rotate((b.wob?Math.sin(b.wob*20)*.08*b.wob:0)+(M?r.dir*r.t*3:0)+(r&&!M?r.dir*r.t*.25*(_/l.length):0)),Ci(g,b.e,0,0,b.h*1.15),g.restore()}if(h&&Ci(g,h.e,h.x,h.y,h.h*1.15),r&&!h&&r.t,g.restore(),c){let _=180+Math.sin(c.ph)*120;g.strokeStyle="#c6a6f0",g.lineWidth=2,g.beginPath(),g.moveTo(360/2,60),g.lineTo(_,104),g.stroke(),Ci(g,c.e,_,120,c.h*1.15)}vh(g,t,n),en(g,`${l.length-1}\uCE35`,360/2,75,16,"#e0457b"),ko(e,g,y)}}}function NS(){let i=[["\u{1F9CA}","\uC5BC\uC74C"],["\u{1F95B}","\uC6B0\uC720"],["\u{1F353}","\uB538\uAE30"],["\u{1F36B}","\uCD08\uCF54"],["\u{1FAE7}","\uD0C4\uC0B0"],["\u{1F366}","\uC544\uC774\uC2A4\uD06C\uB9BC"],["\u{1F352}","\uCCB4\uB9AC"],["\u{1F375}","\uB179\uCC28"],["\u{1F34C}","\uBC14\uB098\uB098"],["\u2615","\uCEE4\uD53C"]],e=["\uD06C\uB9BC\uC18C\uB2E4","\uB538\uAE30\uC6B0\uC720","\uCD08\uCF54\uB77C\uB5BC","\uB179\uCC28\uB77C\uB5BC","\uBC14\uB098\uB098\uC6B0\uC720","\uBA54\uB860\uC18C\uB2E4","\uCCB4\uB9AC\uD30C\uB974\uD398","\uC544\uC778\uC288\uD398\uB108"],t=[],n=60,s=0,r=0,a=null,o=0,l="show",c=0,h=[],u=0,f=()=>{let g=xh(3+Math.floor(o/2),3,6);a={name:g0(e),seq:Array.from({length:g},()=>Math.floor(Math.random()*i.length))},l="show",c=Math.max(1.8,3-o*.1),h=[]};f();function p(g){if(l!=="make")return;h.push(g),_n.pop();let y=h.length-1;if(a.seq[y]!==g){r=0,l="result",u=-1,_n.bad(),t.push({s:"\uC557, \uC21C\uC11C\uAC00 \uB2EC\uB77C\uC694! \u{1F623}",x:360/2,y:250,t:0,c:"#8a7bb8"}),setTimeout(f,900);return}if(h.length===a.seq.length){r++,o++;let m=Math.round(a.seq.length*20*(1+(r-1)*.25));s+=m,l="result",u=1,_n.good(),t.push({s:r>1?`\uCF64\uBCF4 ${r}! +${m}`:`\uC644\uBCBD\uD574\uC694! +${m}`,x:360/2,y:250,t:0,size:20}),setTimeout(f,700)}}return{title:"\u{1F92B} \uC0AC\uC7A5\uB2D8 \uBAB0\uB798 \uC8FC\uBB38\uBC1B\uAE30",desc:"\uC190\uB2D8 \uC8FC\uBB38\uC774 <b>3\uCD08</b> \uB3D9\uC548 \uBCF4\uC5EC\uC694. \uC0AC\uB77C\uC9C0\uBA74<br>\uC7AC\uB8CC\uB97C <b>\uC21C\uC11C\uB300\uB85C</b> \uACE8\uB77C \uC644\uC131\uD574\uC694. \uC5F0\uC18D \uC815\uB2F5\uC774\uBA74 \uCF64\uBCF4! (60\uCD08)",buttons:i.map(([g,y],m)=>({label:`${g}<small>${y}</small>`,act:()=>p(m),cls:"ing"})),key(g){let y=parseInt(g.replace("Digit",""),10);isNaN(y)||p((y+9)%10)},update(g){return n-=g,l==="show"&&(c-=g,c<=0&&(l="make")),u*=.9,n<=0?{score:s,msg:`\uC8FC\uBB38 ${o}\uAC1C \uC131\uACF5!`}:null},draw(g,y){let m=g.createLinearGradient(0,0,0,560);m.addColorStop(0,"#fffbe8"),m.addColorStop(1,"#f1fae9"),g.fillStyle=m,g.fillRect(0,0,360,560),vh(g,n,s),Ci(g,"\u{1F469}\u200D\u{1F4BC}",300,90,40),en(g,l==="show"?"\uC0AC\uC7A5\uB2D8\uC774 \uBCF4\uAE30 \uC804\uC5D0 \uBE68\uB9AC \uC678\uC6CC\uC694!":"\uC27F\u2026 \uBAB0\uB798 \uB9CC\uB4DC\uB294 \uC911 \u{1F92B}",360/2-20,90,13,"#7a6c99",700),Gt(g,30,130,300,190,20),g.fillStyle=u>.1?"#e3f8dc":u<-.1?"#ffe3ea":"#ffffff",g.fill(),g.strokeStyle="#f3d5e2",g.lineWidth=3,g.stroke(),en(g,`\u{1F9FE} \uC190\uB2D8 \uC8FC\uBB38: ${a.name}`,360/2,160,18);let x=a.seq.length,_=Math.min(52,260/x);a.seq.forEach((b,M)=>{let w=180+(M-(x-1)/2)*_;if(l==="show")Ci(g,i[b][0],w,225,34);else{let S=h[M];S!==void 0?Ci(g,i[S][0],w,225,34):(Gt(g,w-18,207,36,36,10),g.fillStyle="#f1e9ff",g.fill(),en(g,"?",w,226,18,"#c6a6f0"))}M<x-1&&en(g,"\u2192",w+_/2,226,14,"#c6a6f0")}),l==="show"?(Gt(g,60,280,240,10,5),g.fillStyle="#f1e6ee",g.fill(),Gt(g,60,280,240*xh(c/3,0,1),10,5),g.fillStyle="#f48fb9",g.fill()):en(g,"\uC544\uB798 \uC7AC\uB8CC\uB97C \uC21C\uC11C\uB300\uB85C \uB20C\uB7EC\uC694",360/2,288,13,"#9a8cc4",700),r>1&&en(g,`\u{1F525} \uCF64\uBCF4 ${r}`,360/2,350,18,"#e0457b"),ko(t,g,y)}}}function US(){let i=[],e=40,t=0,n=0,s=0,r=0,a=0,o=3,l=0,c=Bn(.8,1.6),h=0,u=0,f=0,p=["\u{1F964}","\u2615","\u{1F9CB}"],g=y=>()=>{r=y};return{title:"\u2615 \uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14",desc:"\uC7C1\uBC18\uC774 \uAE30\uC6B8\uBA74 <b>\u25C0 \u25B6</b>\uB85C \uBC18\uB300\uCABD\uC744 \uB20C\uB7EC \uADE0\uD615\uC744 \uC7A1\uC544\uC694.<br>\uB108\uBB34 \uAE30\uC6B8\uBA74 \uCEF5\uC774 \uB5A8\uC5B4\uC838\uC694! \uD14C\uC774\uBE14\uAE4C\uC9C0 \uC3DF\uC9C0 \uC54A\uACE0 \uC62E\uAE30\uAE30 (40\uCD08)",buttons:[{label:"\u25C0 \uC67C\uCABD",down:g(-1),up:g(0)},{label:"\uC624\uB978\uCABD \u25B6",down:g(1),up:g(0)}],key(y,m){(y==="ArrowLeft"||y==="KeyA")&&(r=m?-1:r===-1?0:r),(y==="ArrowRight"||y==="KeyD")&&(r=m?1:r===1?0:r)},pointer(y,m){r=m?y<360/2?-1:1:0},keyUp:!0,update(y){if(e-=y,h+=y,f-=y,c-=y,c<=0&&(s+=Bn(-1.6,1.6)*(1+u*.15),c=Bn(.5,1.3)-u*.04),s+=(-n*1.2+r*2.6+Math.sin(h*9)*.25)*y*3,s*=Math.pow(.35,y),n+=s*y,Math.abs(n)>.48&&f<=0&&(o--,f=.6,s*=-.4,n*=.6,_n.bad(),i.push({s:"\uC557 \uC3DF\uC558\uC5B4\uC694! \u{1F4A6}",x:360/2,y:210,t:0,c:"#8a7bb8"}),o<=0&&(a=0,o=3,n=0,s=0,i.push({s:"\uB2E4\uC2DC \uCE74\uC6B4\uD130\uC5D0\uC11C \uBC1B\uC544 \uC640\uC694",x:360/2,y:240,t:0,c:"#7a6c99",size:15}))),a+=y*(.16+u*.01),a>=1){let m=o*100;t+=m,l+=o,_n.win(),i.push({s:`\uC11C\uBE59 \uC644\uB8CC! ${o}\uC794 +${m}`,x:360/2,y:200,t:0,size:20}),a=0,o=3,u++,n*=.3}return e<=0?{score:t,msg:`\uC74C\uB8CC ${l}\uC794 \uBC30\uB2EC \uC131\uACF5!`}:null},draw(y,m,x){y.fillStyle="#e6f6dd",y.fillRect(0,0,360,560),y.fillStyle="#f6dce6",y.fillRect(0,400,360,160);for(let b=0;b<8;b++)y.fillStyle="#ffffff88",y.fillRect(((b*70-a*400)%430+360+70)%430-35,400,34,160);vh(y,e,t),Gt(y,40,60,280,14,7),y.fillStyle="#ffffffaa",y.fill(),Gt(y,40,60,280*a,14,7),y.fillStyle="#9be08a",y.fill(),Ci(y,"\u{1F37D}\uFE0F",326,67,22),Ci(y,"\u{1F9D1}\u200D\u{1F373}",30,67,20),y.strokeStyle="#f1e6ee",y.lineWidth=10,y.beginPath(),y.arc(360/2,170,60,Math.PI*1.1,Math.PI*1.9),y.stroke(),y.strokeStyle="#9be08a",y.beginPath(),y.arc(360/2,170,60,Math.PI*1.5-.3,Math.PI*1.5+.3),y.stroke(),y.strokeStyle="#e0457b",y.lineWidth=4,y.beginPath(),y.moveTo(360/2,170),y.lineTo(360/2+Math.sin(n*1.6)*60,170-Math.cos(n*1.6)*60),y.stroke();let _=330+Math.abs(Math.sin(h*9))*6;y.fillStyle="#ffe6dc",y.beginPath(),y.arc(360/2,_-40,34,0,7),y.fill(),y.fillStyle="#4b3634",y.beginPath(),y.arc(360/2,_-50,34,Math.PI,0),y.fill(),y.fillStyle="#2b2125",y.beginPath(),y.arc(360/2-11,_-38,4,0,7),y.arc(360/2+11,_-38,4,0,7),y.fill(),Gt(y,360/2-26,_-6,52,64,16),y.fillStyle="#bfe2f1",y.fill(),y.save(),y.translate(360/2,_-90),y.rotate(n),Gt(y,-80,-6,160,12,6),y.fillStyle="#ffc2da",y.fill();for(let b=0;b<o;b++)Ci(y,p[b],-46+b*46,-28,34);y.restore(),en(y,"\u25C0 \u25B6 \uB97C \uB204\uB974\uACE0 \uC788\uC73C\uBA74 \uADF8\uCABD\uC73C\uB85C \uC7C1\uBC18\uC744 \uB4E4\uC5B4 \uC62C\uB824\uC694",360/2,520,12,"#9a8cc4",700),ko(i,y,m)}}}function OS(){let e=.5357142857142857,t=30,n=470,s=1.5,r=[360/2-100,360/2,360/2+100],a=["\u{1F353}","\u{1F351}","\u{1F347}"],o=[[523,659,784],[587,698,880],[659,784,988]],l=[];for(let S=4;S*e*.5<t-1.5;S++){let d=S*e*.5;(S%2===0?Math.random()<.85:Math.random()<.35)&&l.push({t:d,lane:Math.floor(Math.random()*3),hit:0})}let c=[],h=-1.2,u=0,f=0,p=0,g=0,y=0,m=0,x=!1,_=0,b=0;function M(S){w(S);let d=null,v=1;for(let I of l)if(!I.hit&&I.lane===S){let E=Math.abs(I.t-h);E<v&&(v=E,d=I)}!d||v>.14||(d.hit=v<=.06?2:1,f++,p=Math.max(p,f),d.hit===2?(g++,u+=100+f*5,c.push({s:f>2?`PERFECT \xD7${f}`:"PERFECT",x:r[S],y:n-40,t:0})):(y++,u+=50,c.push({s:"GOOD",x:r[S],y:n-40,t:0,c:"#e39b4f"})))}let w=S=>In(o[S][1]*2,.08,"square",.05);return{title:"\u{1F3B5} \uB5A1\uAF2C\uCE58 \uC18C\uC2A4 \uB9AC\uB4EC\uAC8C\uC784",desc:"\uACFC\uC77C \uC18C\uC2A4\uAC00 \uC120\uC5D0 \uB2FF\uC744 \uB54C \uADF8 \uC904\uC744 \uD0ED!<br><b>PERFECT</b>\uB97C \uC774\uC5B4 \uAC00\uBA74 \uB5A1\uAF2C\uCE58\uC5D0 \uC608\uC05C \uC9C0\uADF8\uC7AC\uADF8 \uC18C\uC2A4\uAC00 \uADF8\uB824\uC838\uC694 (30\uCD08, \uC18C\uB9AC \uCF1C \uC8FC\uC138\uC694 \u{1F50A})",buttons:[0,1,2].map(S=>({label:a[S],down:()=>M(S),cls:"lane"})),key(S,d){if(!d)return;let v={ArrowLeft:0,KeyA:0,KeyJ:0,ArrowDown:1,KeyS:1,KeyK:1,ArrowRight:2,KeyD:2,KeyL:2}[S];v!==void 0&&M(v)},pointer(S,d){d&&M(S<360/3?0:S<360*2/3?1:2)},update(S){if(!x){x=!0;let v=_h();b=v?v.currentTime+1.2:0}let d=cr;for(h=d&&b?d.currentTime-b:h+S;_*e*.5<h+.2&&_*e*.5<t;){let v=_*e*.5-h;v>-.05&&(_%2===0?In(90,.12,"sine",.25,Math.max(0,v)):IS(.04,.05,Math.max(0,v))),_++}for(let v of l)!v.hit&&h-v.t>.15&&(v.hit=-1,m++,f=0,c.push({s:"MISS",x:r[v.lane],y:n-30,t:0,c:"#9a8cc4",size:15}));return h>=t?{score:u,msg:`PERFECT ${g} \xB7 GOOD ${y} \xB7 MISS ${m} \xB7 \uCD5C\uB300 \uCF64\uBCF4 ${p}`}:null},draw(S,d){let v=S.createLinearGradient(0,0,0,560);v.addColorStop(0,"#2d2250"),v.addColorStop(1,"#6b4a8a"),S.fillStyle=v,S.fillRect(0,0,360,560),r.forEach((E,C)=>{S.fillStyle="#ffffff12",S.fillRect(E-44,0,88,560)}),S.strokeStyle="#ffd27a",S.lineWidth=4,S.beginPath(),S.moveTo(20,n),S.lineTo(340,n),S.stroke(),r.forEach(E=>{S.strokeStyle="#ffffff80",S.lineWidth=3,S.beginPath(),S.arc(E,n,30,0,7),S.stroke()});for(let E of l){if(E.hit)continue;let C=n-(E.t-h)/s*n;C<-40||C>600||Ci(S,a[E.lane],r[E.lane],C,40)}S.strokeStyle="#d9b07a",S.lineWidth=6,S.beginPath(),S.moveTo(40,528),S.lineTo(320,528),S.stroke();for(let E=0;E<4;E++)Gt(S,62+E*62,508,54,40,12),S.fillStyle="#f2c98d",S.fill();let I=Math.min(1,g/30);S.strokeStyle="#d33a2c",S.lineWidth=5,S.beginPath();for(let E=0;E<=40*I;E++)S.lineTo(66+E*6,514+E%2*26);S.stroke(),Gt(S,10,10,110,34,17),S.fillStyle="#ffffffcc",S.fill(),en(S,`\u23F1 ${Math.max(0,Math.ceil(t-h))}\uCD08`,65,27,15),Gt(S,220,10,130,34,17),S.fillStyle="#ffffffcc",S.fill(),en(S,`\uC810\uC218 ${u}`,285,27,15,"#e0457b"),f>1&&en(S,`${f} COMBO`,360/2,80,26,"#ffd27a",900),h<0&&en(S,h<-.6?"\uC900\uBE44~":"\uC2DC\uC791!",360/2,260,34,"#fff",900),ko(c,S,d)}}}var FS={grill:LS,parfait:DS,order:NS,serving:US,rhythm:OS},od=[["grill","\u{1F361}","\uB5A1\uAF2C\uCE58 \uAD7D\uAE30","\uAF2C\uCE58 3\uAC1C \uB3D9\uC2DC\uC5D0 \uAD7D\uAE30"],["parfait","\u{1F368}","\uD30C\uB974\uD398 \uD0D1 \uC313\uAE30","\uB192\uC774\uB192\uC774 \uC313\uAE30"],["order","\u{1F92B}","\uC0AC\uC7A5\uB2D8 \uBAB0\uB798 \uC8FC\uBB38\uBC1B\uAE30","\uAE30\uC5B5\uB825 \uAC8C\uC784"],["serving","\u2615","\uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14","\uC9C4\uC9DC \uCE74\uD398\uC5D0\uC11C \uC74C\uB8CC \uBC30\uB2EC"],["rhythm","\u{1F3B5}","\uB5A1\uAF2C\uCE58 \uC18C\uC2A4 \uB9AC\uB4EC\uAC8C\uC784","\uBC15\uC790 \uB9DE\uCD94\uAE30"]];function x0({showToast:i}){let t=(m=>document.getElementById(m))("mini"),n=null,s=null,r=0,a=0,o=null,l=!1,c=m=>{try{return+localStorage.getItem("sh-best-"+m)||0}catch{return 0}},h=(m,x)=>{try{localStorage.setItem("sh-best-"+m,x)}catch{}};function u(m,x){s=m,o=x||null,l=!1,n=FS[m](),t.innerHTML=`<div class="mcard"><div class="ghead"><b>${n.title}</b><span class="mbest">\uCD5C\uACE0 ${c(s)}</span><button class="x" data-a="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="mstage"><canvas width="${360*2}" height="${560*2}"></canvas>
        <div class="mintro"><p>${n.desc}</p><button class="go" data-a="start">\u25B6 \uC2DC\uC791!</button></div></div>
      <div class="mbtns">${n.buttons.map((_,b)=>`<button data-b="${b}" class="${_.cls||""}">${_.label}</button>`).join("")}</div></div>`,t.hidden=!1}function f(){t.querySelector(".mintro").remove(),_h();let m=t.querySelector("canvas"),x=m.getContext("2d");x.setTransform(2,0,0,2,0,0);let _=0;a=performance.now();let b=M=>{if(!n)return;let w=Math.min(.05,(M-a)/1e3);a=M,_+=w;let S=n.update(w);if(n.draw(x,w,_),S&&!l)return p(S);r=requestAnimationFrame(b)};r=requestAnimationFrame(b)}function p(m){l=!0,cancelAnimationFrame(r);let x=c(s),_=m.score>x;_&&h(s,m.score),_n.win();let b=document.createElement("div");b.className="mintro",b.innerHTML=`<h3>${_?"\u{1F389} \uCD5C\uACE0 \uAE30\uB85D!":"\uC218\uACE0\uD588\uC5B4\uC694! \u2728"}</h3><p class="mscore">${m.score}\uC810</p><p>${m.msg}</p><p class="mprev">\uCD5C\uACE0 \uAE30\uB85D ${Math.max(x,m.score)}\uC810</p>
      <button class="go" data-a="again">\u{1F501} \uB2E4\uC2DC \uD558\uAE30</button><button class="gsub" data-a="close">${o?"\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30":"\uB2EB\uAE30"}</button>`,t.querySelector(".mstage").appendChild(b),t.querySelector(".mbest").textContent=`\uCD5C\uACE0 ${Math.max(x,m.score)}`}function g(){cancelAnimationFrame(r),n=null,t.hidden=!0,t.innerHTML="";let m=o;o=null,m&&m(l)}t.addEventListener("click",m=>{let x=m.target.closest("button");if(x){if(x.dataset.a==="start"&&f(),x.dataset.a==="close"&&g(),x.dataset.a==="again"){let _=o;o=null,u(s,_),f()}if(x.dataset.b!==void 0&&n){let _=n.buttons[+x.dataset.b];_.act&&_.act()}}}),t.addEventListener("pointerdown",m=>{let x=m.target.closest("[data-b]");if(x&&n){let S=n.buttons[+x.dataset.b];S.down&&(m.preventDefault(),S.down());return}let _=m.target.closest("canvas");if(!_||!n||t.querySelector(".mintro"))return;let b=_.getBoundingClientRect(),M=(m.clientX-b.left)*360/b.width,w=(m.clientY-b.top)*560/b.height;n.tapAt?n.tapAt(M,w):n.pointer?n.pointer(M,!0):n.tap&&n.tap()});let y=m=>{if(!n)return;let x=m.target.closest&&m.target.closest("[data-b]");if(x){let _=n.buttons[+x.dataset.b];_.up&&_.up()}else n.pointer&&n.pointer.length&&n.pointer(0,!1)};return t.addEventListener("pointerup",y),t.addEventListener("pointercancel",y),t.addEventListener("pointerleave",y),addEventListener("keydown",m=>{if(!(t.hidden||!n)){if(m.code==="Escape")return g();if(t.querySelector(".mintro")&&!l&&(m.code==="Space"||m.code==="Enter"))return m.preventDefault(),f();n.key&&(m.preventDefault(),n.key(m.code,!0))}}),addEventListener("keyup",m=>{!t.hidden&&n&&n.key&&n.keyUp&&n.key(m.code,!1)}),{open:u,get isOpen(){return!t.hidden},result(m,x,_){i(`${m} \xB7 ${x}\uC810 ${_||""}`)}}}var yh={title:"\uBB35\uCC0C\uBE60 \uC2B9\uB9AC \uCFE0\uD3F0",benefit:"\uC18C\uD488 10% \uD560\uC778",note:"\uC624\uD504\uB77C\uC778 \uB9E4\uC7A5 \uACC4\uC0B0\uB300\uC5D0\uC11C \uC9C1\uC6D0\uC5D0\uAC8C \uBCF4\uC5EC \uC8FC\uC138\uC694",days:30},aa={muk:{emo:"\u270A",name:"\uBB35"},jji:{emo:"\u270C\uFE0F",name:"\uCC0C"},ppa:{emo:"\u{1F590}\uFE0F",name:"\uBE60"}},_0={muk:"jji",jji:"ppa",ppa:"muk"},v0=i=>i[Math.floor(Math.random()*i.length)],y0=i=>new Promise(e=>setTimeout(e,i));function M0({showToast:i,npcs:e,capture:t,views:n,minis:s,treasure:r,serving:a}){let o=W=>document.getElementById(W),l=e.find(W=>W.id==="shop"),c=e.find(W=>W.id==="cafe"),h=(W,F=3500)=>{l&&(clearTimeout(h.t),l.el.textContent=W,h.t=setTimeout(()=>l.el.textContent="\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}",F))},u=o("mjp"),f=null,p=!1;function g(){f={me:0,boss:0,round:1,attacker:null,log:"\uAC00\uC704\uBC14\uC704\uBCF4\uB85C \uACF5\uACA9\uD560 \uC0AC\uB78C\uC744 \uC815\uD574\uC694!"},u.hidden=!1,m("?","?"),h("\uBB35\uCC0C\uBE60 \uD55C \uD310 \uD574\uC694! \uC0BC\uC138\uD310\uC774\uC5D0\uC694 \u270A\u270C\uFE0F\u{1F590}\uFE0F",5e3)}let y=()=>{u.hidden=!0,f=null};function m(W,F,j=!1){let V=f.attacker==="me"?"\uB0B4\uAC00 \uACF5\uACA9 \uC911 \u{1F525}":f.attacker==="boss"?"\uC0AC\uC7A5\uB2D8\uC774 \uACF5\uACA9 \uC911 \u{1F525}":"\uAC00\uC704\uBC14\uC704\uBCF4!";u.innerHTML=`<div class="gcard">
      <div class="ghead"><b>\u270A \uC0AC\uC7A5\uB2D8\uACFC \uBB35\uCC0C\uBE60 \uC0BC\uC138\uD310</b><button class="x" data-g="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="gscore"><span>\uB098 <i>${f.me}</i></span><small>${f.round}\uD310\uC9F8 \xB7 2\uBC88 \uBA3C\uC800 \uC774\uAE30\uBA74 \uC2B9\uB9AC</small><span><i>${f.boss}</i> \uC0AC\uC7A5\uB2D8</span></div>
      <div class="garena ${j?"shake":""}"><div><em>${W}</em><small>\uB098</small></div><b>VS</b><div><em>${F}</em><small>\uC0AC\uC7A5\uB2D8</small></div></div>
      <p class="gturn">${V}</p><p class="glog">${f.log}</p>
      ${f.done?f.done==="win"?`<div class="gcoupon"><img alt="\uCFE0\uD3F0" src="${M().toDataURL("image/png")}"><button class="go" data-g="coupon">\u{1F4F2} \uCFE0\uD3F0 \uC774\uBBF8\uC9C0 \uC800\uC7A5</button><button class="gsub" data-g="close">\uB2EB\uAE30</button></div>`:'<button class="go" data-g="again">\u{1F501} \uB2E4\uC2DC \uB3C4\uC804</button>':`<div class="ghands">${Object.entries(aa).map(([te,_e])=>`<button data-h="${te}" ${p?"disabled":""}><em>${_e.emo}</em>${_e.name}</button>`).join("")}</div>`}
    </div>`}async function x(W){if(p||!f||f.done)return;p=!0;let F=v0(Object.keys(aa));for(let te of["muk","jji","ppa"])f.log=f.attacker?`${aa[te].name}!`:["\uAC00\uC704","\uBC14\uC704","\uBCF4!"][Object.keys(aa).indexOf(te)],m("\u270A","\u270A",!0),await y0(260);let j=aa[W],V=aa[F];if(!f.attacker)W===F?f.log=`\uB458 \uB2E4 ${j.name}! \uB2E4\uC2DC \uAC00\uC704\uBC14\uC704\uBCF4 \u{1F648}`:(f.attacker=_0[W]===F?"me":"boss",f.log=f.attacker==="me"?"\uB0B4\uAC00 \uC774\uACBC\uC5B4\uC694! \uC774\uC81C \uB0B4\uAC00 \uACF5\uACA9, \uAC19\uC740 \uAC78 \uB0B4\uAC8C \uB9CC\uB4E4\uC5B4\uC694":"\uC0AC\uC7A5\uB2D8\uC774 \uC774\uACBC\uC5B4\uC694! \uC0AC\uC7A5\uB2D8 \uACF5\uACA9, \uB2E4\uB978 \uAC78 \uB0B4\uC57C \uBC84\uD168\uC694");else if(W===F){let te=f.attacker==="me";if(te?f.me++:f.boss++,f.log=te?`\uB458 \uB2E4 ${j.name}! \uB0B4\uAC00 \uC774\uBC88 \uD310 \uC2B9\uB9AC \u{1F389}`:`\uB458 \uB2E4 ${j.name}! \uC0AC\uC7A5\uB2D8\uC774 \uC774\uBC88 \uD310 \uC2B9\uB9AC \u{1F61D}`,h(te?"\uC557 \uC84C\uB2E4\u2026! \u{1F633}":"\uC81C\uAC00 \uC774\uACBC\uC8E0? \u{1F60E}"),f.attacker=null,f.round++,(f.me>=2||f.boss>=2)&&(f.done=f.me>=2?"win":"lose",f.log=f.done==="win"?`${f.me} : ${f.boss} \uC0BC\uC138\uD310 \uC2B9\uB9AC! \uCFE0\uD3F0\uC744 \uB4DC\uB9B4\uAC8C\uC694 \u{1F381}`:`${f.me} : ${f.boss} \uC544\uC27D\uAC8C \uC84C\uC5B4\uC694\u2026 \uB2E4\uC2DC \uB3C4\uC804\uD574 \uBCFC\uAE4C\uC694?`,h(f.done==="win"?"\uCD95\uD558\uD574\uC694! \uCFE0\uD3F0 \uB4DC\uB9B4\uAC8C\uC694 \u{1F381}":"\uB2E4\uC74C\uC5D0 \uB610 \uB3C4\uC804\uD574\uC694! \u{1F606}",6e3),f.done==="win")){b();try{localStorage.setItem("sh-coupon",JSON.stringify(_))}catch{}}}else f.attacker=_0[W]===F?"me":"boss",f.log=`${j.name} vs ${V.name} \u2192 ${f.attacker==="me"?"\uACF5\uACA9\uAD8C\uC774 \uB098\uC5D0\uAC8C!":"\uACF5\uACA9\uAD8C\uC774 \uC0AC\uC7A5\uB2D8\uAED8!"}`;p=!1,m(j.emo,V.emo)}let _=null;function b(){let W="SH-"+Math.random().toString(36).slice(2,6).toUpperCase()+"-"+String(Date.now()%1e4).padStart(4,"0"),F=new Date(Date.now()+yh.days*864e5);_={code:W,issued:ra(),until:`${F.getFullYear()}.${String(F.getMonth()+1).padStart(2,"0")}.${String(F.getDate()).padStart(2,"0")}`}}function M(){_||b();let W=1080,F=600,j=document.createElement("canvas");j.width=W,j.height=F;let V=j.getContext("2d"),te=V.createLinearGradient(0,0,W,F);te.addColorStop(0,"#ffe3ef"),te.addColorStop(1,"#e4f6ea"),V.fillStyle=te,V.fillRect(0,0,W,F),V.fillStyle="#ffffff66";for(let be=30;be<F;be+=60)for(let ve=be/60%2?30:60;ve<W;ve+=60)V.beginPath(),V.arc(ve,be,10,0,7),V.fill();V.fillStyle="#fffdfb",V.beginPath(),V.roundRect(40,40,W-80,F-80,36),V.fill(),V.setLineDash([14,10]),V.strokeStyle="#f48fb9",V.lineWidth=5,V.beginPath(),V.roundRect(56,56,W-112,F-112,28),V.stroke(),V.setLineDash([]),V.strokeStyle="#f3c6d8",V.lineWidth=3,V.beginPath(),V.moveTo(760,80),V.lineTo(760,F-80),V.stroke(),V.textAlign="left",V.fillStyle="#f27fae",V.font='700 40px "Gamja Flower", sans-serif',V.fillText("\uC218\uC9D1\uC218\uC9D1 \xD7 \uC218\uC787\uD574\uD53C",100,130),V.fillStyle="#4a3f66",V.font='900 34px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',V.fillText(yh.title+" \u270A\u270C\uFE0F\u{1F590}\uFE0F",100,190),V.fillStyle="#e0457b",V.font='900 84px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',V.fillText(yh.benefit,100,310),V.fillStyle="#7a6c99",V.font='600 26px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',V.fillText(yh.note,100,380),V.fillText(`\uBC1C\uAE09 ${_.issued} \xB7 ${_.until}\uAE4C\uC9C0 \xB7 1\uC778 1\uD68C`,100,420),V.fillStyle="#4a3f66",V.font="800 30px ui-monospace, Consolas, monospace",V.fillText(_.code,100,480);let _e=new Image;return _e.src=pi("staff",1),_e.complete&&V.drawImage(_e,790,150,240,240),V.textAlign="center",V.fillStyle="#f27fae",V.font='700 34px "Gamja Flower", sans-serif',V.fillText("\uC0AC\uC7A5\uB2D8\uC744 \uC774\uACBC\uC5B4\uC694!",910,440),j}{let W=new Image;W.src=pi("staff",1)}u.addEventListener("click",async W=>{let F=W.target.closest("button");if(!F)return;if(F.dataset.h)return x(F.dataset.h);let j=F.dataset.g;if(j==="close"&&y(),j==="again"&&g(),j==="coupon"){let V=await sa(M(),`suithappy-coupon-${_.code}.jpg`);i(V==="downloaded"?"\u{1F4BE} \uCFE0\uD3F0\uC744 \uC800\uC7A5\uD588\uC5B4\uC694":V==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}});let w=o("spot"),S=Array.from({length:n},(W,F)=>F),d=null,v=[],I=null,E=Object.keys(or).flatMap(W=>or[W].stickers.map((F,j)=>[W,j]));function C(W){I=W||null,v.length||(v=S.slice().sort(()=>Math.random()-.5)),w.hidden=!1,U()}function R(){w.hidden=!0;let W=I;I=null,d=null,W&&W(!1)}async function U(){v.length||(v=S.slice().sort(()=>Math.random()-.5));let W=v.pop();w.innerHTML=`<div class="spwrap"><div class="ghead"><b>\u{1F50D} \uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30</b><span class="spcount">\uBD88\uB7EC\uC624\uB294 \uC911\u2026</span><button class="gsub" data-s="hint">\u{1F4A1} \uD78C\uD2B8</button><button class="x" data-s="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="sppair"><div class="spimg"><canvas></canvas><small>\uC6D0\uB798 \uADF8\uB9BC</small></div><div class="spimg"><canvas></canvas><small>\uB2E4\uB978 \uACF3 5\uAC1C\uB97C \uCC3E\uC544\uC694</small></div></div>
      <p class="spmsg">${I?"\uB2E4 \uCC3E\uC73C\uBA74 \uC8FC\uBB38\uD55C \uBA54\uB274\uAC00 \uB098\uC640\uC694! \u2615":"\uB450 \uADF8\uB9BC \uC911 \uC544\uBB34 \uCABD\uC774\uB098 \uB2E4\uB978 \uACF3\uC744 \uB20C\uB7EC\uC694"}</p></div>`,await y0(30);let F=t(W),[j,V]=w.querySelectorAll("canvas"),te=F.width,_e=F.height;for(let be of[j,V])be.width=te,be.height=_e,be.getContext("2d").drawImage(F,0,0);d={W:te,H:_e,ca:j,cb:V,base:j.getContext("2d").getImageData(0,0,te,_e),diffs:P(V,te,_e),found:0,miss:0},D(),G()}function P(W,F,j){let V=W.getContext("2d"),te=[],_e=["hue","flip","sticker","erase","swap","hue","sticker"].sort(()=>Math.random()-.5),be=0;for(;te.length<5&&be++<400;){let ve=Math.round(F*(.08+Math.random()*.05)),Ie=Math.round(F*.05+Math.random()*(F*.9-ve)),re=Math.round(j*.06+Math.random()*(j*.88-ve));if(te.some(ye=>Math.abs(ye.x-Ie)<(ye.s+ve)/2+30&&Math.abs(ye.y-re)<(ye.s+ve)/2+30))continue;let me=_e[te.length],Me={x:Ie,y:re,s:ve,k:me,hit:!1};if(me==="hue"||me==="swap"){let ye=V.getImageData(Ie,re,ve,ve),ce=ye.data,ze=(100+Math.random()*140)*Math.PI/180,Ue=Math.cos(ze),We=Math.sin(ze),Ze=[.299+.701*Ue+.168*We,.587-.587*Ue+.33*We,.114-.114*Ue-.497*We,.299-.299*Ue-.328*We,.587+.413*Ue+.035*We,.114-.114*Ue+.292*We,.299-.3*Ue+1.25*We,.587-.588*Ue-1.05*We,.114+.886*Ue-.203*We];for(let Je=0;Je<ce.length;Je+=4){let Y=ce[Je],bt=ce[Je+1],et=ce[Je+2];if(me==="swap"){ce[Je]=et,ce[Je+2]=Y;continue}ce[Je]=Ze[0]*Y+Ze[1]*bt+Ze[2]*et,ce[Je+1]=Ze[3]*Y+Ze[4]*bt+Ze[5]*et,ce[Je+2]=Ze[6]*Y+Ze[7]*bt+Ze[8]*et}V.putImageData(ye,Ie,re)}else if(me==="flip"){let ye=document.createElement("canvas");ye.width=ye.height=ve,ye.getContext("2d").drawImage(W,Ie,re,ve,ve,0,0,ve,ve),V.save(),V.translate(Ie+ve,re),V.scale(-1,1),V.drawImage(ye,0,0),V.restore(),Math.random()<.5&&(V.save(),V.translate(Ie,re+ve),V.scale(1,-1),V.drawImage(ye,0,0),V.restore())}else if(me==="sticker"){let ye=new Image,[ce,ze]=v0(E);ye.src=pi(ce,ze),ye.decode().then(()=>V.drawImage(ye,Ie,re,ve,ve)).catch(()=>{})}else{let ye=Ie+ve+12<F-ve?Ie+ve+12:Ie-ve-12,ce=document.createElement("canvas");ce.width=ce.height=ve;let ze=ce.getContext("2d");ze.drawImage(W,ye,re,ve,ve,0,0,ve,ve);let Ue=ze.createRadialGradient(ve/2,ve/2,ve*.3,ve/2,ve/2,ve*.5);Ue.addColorStop(0,"#000"),Ue.addColorStop(1,"rgba(0,0,0,0)"),ze.globalCompositeOperation="destination-in",ze.fillStyle=Ue,ze.fillRect(0,0,ve,ve),V.drawImage(ce,Ie,re)}te.push(Me)}return te}function D(){for(let W of[d.ca,d.cb]){let F=W.getContext("2d");for(let j of d.diffs)j.hit&&(F.lineWidth=Math.max(4,d.W/200),F.strokeStyle="#ff3d8b",F.shadowColor="#fff",F.shadowBlur=6,F.beginPath(),F.arc(j.x+j.s/2,j.y+j.s/2,j.s*.72,0,7),F.stroke(),F.shadowBlur=0)}}let G=()=>{let W=w.querySelector(".spcount");W&&d&&(W.textContent=`\uCC3E\uC740 \uACF3 ${d.found} / 5`)};w.addEventListener("click",W=>{let F=W.target.closest("button");if(F&&F.dataset.s==="close")return R();if(F&&F.dataset.s==="next")return U();if(F&&F.dataset.s==="done"){let Ie=I;I=null,w.hidden=!0,d=null,Ie&&Ie(!0);return}if(F&&F.dataset.s==="hint"&&d){let Ie=d.diffs.find(re=>!re.hit);if(!Ie)return;for(let re of[d.ca,d.cb]){let me=re.getBoundingClientRect(),Me=document.createElement("div");Me.className="sphint";let ye=me.width/d.W;Object.assign(Me.style,{left:me.left+(Ie.x-Ie.s*.3)*ye+"px",top:me.top+(Ie.y-Ie.s*.3)*ye+"px",width:Ie.s*1.6*ye+"px",height:Ie.s*1.6*ye+"px"}),document.body.appendChild(Me),setTimeout(()=>Me.remove(),1400)}return}let j=W.target.closest("canvas");if(!j||!d)return;let V=j.getBoundingClientRect(),te=(W.clientX-V.left)*d.W/V.width,_e=(W.clientY-V.top)*d.H/V.height,be=d.W*.02,ve=d.diffs.find(Ie=>!Ie.hit&&te>Ie.x-be&&te<Ie.x+Ie.s+be&&_e>Ie.y-be&&_e<Ie.y+Ie.s+be);if(ve)ve.hit=!0,d.found++,D(),G(),d.found===5&&(w.querySelector(".spmsg").innerHTML=`\u{1F389} \uB2E4 \uCC3E\uC558\uC5B4\uC694! ${d.miss?`(\uD5DB\uD074\uB9AD ${d.miss}\uBC88)`:"\uD55C \uBC88\uB3C4 \uC548 \uD2C0\uB838\uC5B4\uC694!"}
          ${I?'<button class="go" data-s="done">\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30</button>':'<button class="go" data-s="next">\uB2E4\uC74C \uADF8\uB9BC \u25B6</button>'}`);else{d.miss++;let Ie=W.clientX,re=W.clientY,me=document.createElement("div");me.className="spmiss",me.textContent="\u2715",Object.assign(me.style,{left:Ie+"px",top:re+"px"}),document.body.appendChild(me),setTimeout(()=>me.remove(),600)}});let N=o("gmenu"),q=null,k=[["mjp","\u270A\u270C\uFE0F\u{1F590}\uFE0F","\uBB35\uCC0C\uBE60 \uC0BC\uC138\uD310","\uC774\uAE30\uBA74 \uC624\uD504\uB77C\uC778 \uCFE0\uD3F0 \u{1F381}"],["spot","\u{1F50D}","\uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30","\uB9E4\uC7A5 \uC18D \uB2E4\uB978 \uACF3 5\uAC1C"],["treasure","\u2B50","\uBE44\uBC00 \uBCF4\uBB3C\uCC3E\uAE30","\uC228\uC740 \uBCC4\uC0AC\uD0D5 7\uAC1C \xB7 90\uCD08"]];function O(W="shop",F=null){q=F;let j=W==="shop",V=j?k:od;N.innerHTML=`<div class="gcard"><div class="ghead"><b>${j?"\u{1F380} \uC18C\uD488\uC0F5 \uC0AC\uC7A5\uB2D8":"\u2615 \uCE74\uD398 \uC9C1\uC6D0"}</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${j?"\uC5B4\uC11C \uC624\uC138\uC694! \uC2EC\uC2EC\uD558\uBA74 \uC800\uB791 \uAC8C\uC784 \uD55C \uD310 \uD560\uB798\uC694? \u{1F60A}":F?"\uAC8C\uC784 \uD55C \uD310 \uD558\uB294 \uB3D9\uC548 \uBA54\uB274 \uB9CC\uB4E4\uC5B4 \uB458\uAC8C\uC694! \u{1F353}":"\uCE74\uD398 \uC54C\uBC14 \uCCB4\uD5D8 \uD574 \uBCFC\uB798\uC694? \uC7AC\uBC0C\uC5B4\uC694 \u{1F606}"}</p>
      <div class="gpick ${V.length>3?"many":""}">${V.map(([te,_e,be,ve])=>`<button data-m="${te}"><em>${_e}</em><b>${be}</b><small>${ve}</small></button>`).join("")}</div></div>`,N.hidden=!1,j?h("\uAC8C\uC784 \uD55C \uD310 \uD560\uB798\uC694? \u{1F606}",4e3):c&&(c.el.textContent="\uC54C\uBC14 \uCCB4\uD5D8 \uD574 \uBCFC\uB798\uC694? \u{1F606}",setTimeout(()=>c.el.textContent="\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615",4e3))}N.addEventListener("click",W=>{let F=W.target.closest("button");if(!F)return;N.hidden=!0;let j=F.dataset.m,V=q;if(q=null,j==="close"){V&&V(!1);return}j==="mjp"?g():j==="spot"?C(V):j==="treasure"||j==="again-treasure"?r.start():j==="serving"||j==="again-serving"?(z=V,a.start()):od.some(te=>te[0]===j)&&s.open(j,V)});let z=null;function X({score:W,delivered:F,spilled:j,trips:V}){let te=z;z=null,te&&te(!0);let _e=0;try{_e=+localStorage.getItem("sh-best-serving")||0}catch{}let be=W>_e;if(be)try{localStorage.setItem("sh-best-serving",W)}catch{}N.innerHTML=`<div class="gcard"><div class="ghead"><b>\u2615 \uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${V}\uBC88 \uC655\uBCF5\uD574\uC11C \uC74C\uB8CC ${F}\uC794\uC744 \uBC30\uB2EC\uD588\uC5B4\uC694!${j?` (\uC3DF\uC740 \uC794 ${j}\uAC1C \u{1F4A6})`:" \uD55C \uC794\uB3C4 \uC548 \uC3DF\uC558\uC5B4\uC694 \u2728"}</p>
      <p class="mscore">${W}\uC810</p><p class="mprev">${be?"\u{1F3C6} \uCD5C\uACE0 \uAE30\uB85D!":`\uCD5C\uACE0 \uAE30\uB85D ${_e}\uC810`}</p>
      <button class="go" data-m="again-serving">\u{1F501} \uB2E4\uC2DC \uD558\uAE30</button></div>`,N.hidden=!1}function Q({found:W,total:F,time:j,done:V}){let te=0;try{te=+localStorage.getItem("sh-best-treasure")||0}catch{}let _e=W*100+(V?Math.max(0,90-j)*5:0),be=_e>te;if(be)try{localStorage.setItem("sh-best-treasure",_e)}catch{}N.innerHTML=`<div class="gcard"><div class="ghead"><b>\u2B50 \uBE44\uBC00 \uBCF4\uBB3C\uCC3E\uAE30</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${V?`\u{1F389} ${j}\uCD08 \uB9CC\uC5D0 \uBCC4\uC0AC\uD0D5 ${F}\uAC1C\uB97C \uBAA8\uB450 \uCC3E\uC558\uC5B4\uC694!`:`\uBCC4\uC0AC\uD0D5 ${F}\uAC1C \uC911 ${W}\uAC1C\uB97C \uCC3E\uC558\uC5B4\uC694!`}</p>
      <p class="mscore">${_e}\uC810</p><p class="mprev">${be?"\u{1F3C6} \uCD5C\uACE0 \uAE30\uB85D!":`\uCD5C\uACE0 \uAE30\uB85D ${te}\uC810`}</p>
      <button class="go" data-m="again-treasure">\u{1F501} \uB2E4\uC2DC \uD558\uAE30</button></div>`,N.hidden=!1}addEventListener("keydown",W=>{W.code==="Escape"&&(N.hidden?u.hidden?w.hidden||R():y():N.hidden=!0)});let $=W=>l&&Math.hypot(W.x-l.x,W.z-l.z)<2.8;return{get open(){return!u.hidden||!w.hidden||!N.hidden},mjp:g,spot:C,menu:O,owner:l,cafeStaff:c,treasureResult:Q,servingResult:X,update(W,F){o("mjp-btn").hidden=!$(W)||!!F||!u.hidden||!N.hidden,o("cafegame-btn").hidden=!(c&&Math.hypot(W.x-c.x,W.z-c.z)<2.8)||!!F||!N.hidden}}}var BS=7,S0=90,zS=.8;function b0({scene3d:i,data:e,canOccupy:t,player:n,camera:s,showToast:r,onFinish:a}){let l=(v=>document.getElementById(v))("treasure-hud"),c=!1,h=[],u=0,f=0,p=2,g=new Ss;for(let v=0;v<10;v++){let I=v*Math.PI/5+Math.PI/2,E=v%2?.045:.1,C=Math.cos(I)*E,R=Math.sin(I)*E;v?g.lineTo(C,R):g.moveTo(C,R)}let y=new Ys(g,{depth:.035,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2});y.center();let m=["#ffd54a","#ff9cc0","#9fe0cf","#c6a6f0","#ffd54a","#a9d4f5","#ffb37a"],x=(()=>{let v=document.createElement("canvas");v.width=v.height=64;let I=v.getContext("2d"),E=I.createRadialGradient(32,32,0,32,32,32);return E.addColorStop(0,"rgba(255,240,180,1)"),E.addColorStop(1,"rgba(255,240,180,0)"),I.fillStyle=E,I.fillRect(0,0,64,64),new ei(v)})();function _(){let v=[],I=(P,D)=>v.every(G=>Math.hypot(G.x-P,G.z-D)>1.6),E=e.seats.slice().sort(()=>Math.random()-.5);for(let P of E){if(v.length>=3)break;I(P[0],P[1])&&v.push({x:P[0],z:P[1],y:.16,where:"\uC758\uC790 \uC544\uB798"})}let C=e.blocks.filter(P=>P[2]>.15&&P[3]>.15).sort(()=>Math.random()-.5);for(let P of C){if(v.length>=5)break;let[D,G,N,q,k]=P,O=Math.floor(Math.random()*4),z=Math.cos(k),X=Math.sin(k),Q=O<2?(O?1:-1)*(N+.3):b(-N,N),$=O>=2?(O===3?1:-1)*(q+.3):b(-q,q),W=D+Q*z-$*X,F=G+Q*X+$*z;t(W,F,.22)&&I(W,F)&&v.push({x:W,z:F,y:.35,where:"\uC9C4\uC5F4\uB300 \uC606"})}let R=e.floor.map(P=>P[0]),U=e.floor.map(P=>P[1]);for(let P=0;v.length<BS&&P<600;P++){let D=b(Math.min(...R),Math.max(...R)),G=b(Math.min(...U),Math.max(...U));t(D,G,.3)&&!t(D,G,.75)&&I(D,G)&&v.push({x:D,z:G,y:.25,where:"\uBCBD\xB7\uCEE4\uD2BC \uADFC\uCC98"})}return v}function b(v,I){return v+Math.random()*(I-v)}function M(){for(let v of h)i.remove(v.g);h=[]}function w(){M(),c=!0,u=S0,f=0,p=2,_().forEach((v,I)=>{let E=new tt;E.position.set(v.x,v.y,v.z);let C=new je(y,new Ot({color:new Le(m[I%m.length]).multiplyScalar(1.6),toneMapped:!1})),R=new Fa(new zr({map:x,color:m[I%m.length],transparent:!0,opacity:.7,depthWrite:!1,blending:qn}));R.scale.setScalar(.5),E.add(R,C),i.add(E),h.push({g:E,m:C,glow:R,p:v,got:!1,pop:0,ph:Math.random()*6})}),r(`\u2B50 \uBCC4\uC0AC\uD0D5 ${h.length}\uAC1C\uB97C 90\uCD08 \uC548\uC5D0 \uCC3E\uC544\uC694! \uAC00\uAE4C\uC774 \uAC00\uBA74 \uC8FC\uC6CC\uC694`),d()}function S(v){c=!1,l.hidden=!0,setTimeout(M,600),a&&a({found:f,total:h.length,time:Math.round(S0-u),done:v})}function d(){l.hidden=!c,c&&(l.innerHTML=`<b>\u2B50 ${f} / ${h.length}</b><span>\u23F1 ${Math.ceil(u)}\uCD08</span><button data-t="hint" ${p?"":"disabled"}>\u{1F4A1} \uD78C\uD2B8 ${p}</button><button data-t="quit">\uADF8\uB9CC</button>`)}return l.addEventListener("click",v=>{let I=v.target.closest("button");if(I){if(I.dataset.t==="quit")return S(!1);if(I.dataset.t==="hint"&&p>0){p--;let E=h.filter(C=>!C.got).sort((C,R)=>Math.hypot(C.p.x-n.x,C.p.z-n.z)-Math.hypot(R.p.x-n.x,R.p.z-n.z))[0];if(E){let C=new B;s.getWorldDirection(C);let R=E.p.x-n.x,U=E.p.z-n.z,P=Math.hypot(R,U),D=Math.atan2(C.x*U-C.z*R,C.x*R+C.z*U),G=Math.abs(D)<.5?"\uC55E\uCABD":Math.abs(D)>2.5?"\uB4A4\uCABD":D>0?"\uC67C\uCABD":"\uC624\uB978\uCABD";r(`\u{1F4A1} \uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uBCC4\uC0AC\uD0D5: ${G}\uC73C\uB85C \uC57D ${P.toFixed(1)}m \xB7 ${E.p.where}`),E.flash=2.5}d()}}}),{start:w,get active(){return c},get spots(){return h.map(v=>v.p)},update(v,I){for(let E of h)E.m.rotation.y+=v*2,E.g.position.y=E.p.y+Math.sin(I*2.5+E.ph)*.04,E.flash&&(E.flash=Math.max(0,E.flash-v),E.glow.scale.setScalar(.5+Math.sin(E.flash*12)*.25+.3)),E.got&&(E.pop+=v*3,E.g.scale.setScalar(Math.max(.001,1+E.pop*1.5)*(1-Math.min(1,E.pop))),E.g.position.y+=E.pop*.5);if(c){u-=v;for(let E of h)!E.got&&Math.hypot(E.p.x-n.x,E.p.z-n.z)<zS&&(E.got=!0,f++,d(),r(f===h.length?"\u{1F389} \uBCC4\uC0AC\uD0D5\uC744 \uBAA8\uB450 \uCC3E\uC558\uC5B4\uC694!":`\u2B50 \uCC3E\uC558\uB2E4! ${f} / ${h.length}`),In(880,.1,"triangle",.12),In(1320,.14,"triangle",.1,.07));if(f===h.length)return S(!0);if(u<=0)return S(!1);Math.ceil(u)!==d.last&&(d.last=Math.ceil(u),d())}}}}var kS=60,Mh=.42,T0=[["melonSoda",{}],["chocoMilk",{}],["peachTea",{}],["creamSoda",{}],["bananaMilk",{}],["latte",{}]];function E0({scene3d:i,data:e,hero:t,player:n,npcs:s,showToast:r,onFinish:a}){let o=F=>document.getElementById(F),l=o("serve-hud"),c=s.find(F=>F.id==="cafe"),h=!1,u=0,f=0,p=0,g=0,y=0,m=[],x=null,_=!1,b=0,M={roll:0,vroll:0,pitch:0,vpitch:0,px:0,pz:0,vx:0,vz:0,face:0,bump:1,bob:0,dt:0,drift:0,dcur:0},w=new B,S=new tt;S.visible=!1,i.add(S);let d=new $t({color:"#ffc2da",roughness:.5}),v=new je(new Bt(.42,.02,.28),d);S.add(v);for(let F of[-1,1]){let j=new je(new Bt(.42,.035,.015),d);j.position.set(0,.02,.135*F),S.add(j)}let I=new tt;I.position.y=.012,S.add(I);let E=new to(.42,.55,40);E.rotateX(-Math.PI/2);let C=F=>{let j=new tt,V=new je(E,new Ot({color:F,transparent:!0,opacity:.85,toneMapped:!1,depthWrite:!1}));V.position.y=.02,j.add(V);let te=new je(new Ms(.13,.3,4),new Ot({color:new Le(F).multiplyScalar(1.6),toneMapped:!1}));te.rotation.x=Math.PI,te.position.y=1.5,j.add(te);let _e=new je(new ot(.5,.55,1.2,24,1,!0),new Ot({color:F,transparent:!0,opacity:.22,side:Ft,depthWrite:!1,blending:qn}));return _e.position.y=.6,j.add(_e),j.userData={ring:V,cone:te},j.visible=!1,i.add(j),j},R=C("#9fe0cf"),U=C("#ff8fb7"),P=()=>c?{x:c.x-1.6,z:c.z}:{x:e.cafe[0],z:e.cafe[1]},D=[];for(let F of e.seats){if(F[1]<2.5||F[0]>4.5)continue;let j=F[0]+Math.sin(F[2])*.5,V=F[1]+Math.cos(F[2])*.5;D.some(te=>Math.hypot(te.x-j,te.z-V)<.9)||D.push({x:j,z:V,seat:F})}let G=[];function N(){I.clear(),m=[];for(let j=0;j<3;j++){let[V,te]=T0[Math.floor(Math.random()*T0.length)],_e=Fo(V,te);_e.g.scale.setScalar(.66),_e.g.position.set((j-1)*.12,0,j%2?.04:-.03),I.add(_e.g),m.push({g:_e.g,k:V,o:te,fall:0})}_=!0,M.roll=M.pitch=M.vroll=M.vpitch=M.dcur=0,M.dt=1.2;let F=D.filter(j=>Math.hypot(j.x-n.x,j.z-n.z)>2.2);x=(F.length?F:D)[Math.floor(Math.random()*(F.length||D.length))],U.position.set(x.x,0,x.z),U.visible=!0,R.visible=!1,In(660,.08),In(990,.1,"triangle",.1,.06),r("\u{1F964} \uC74C\uB8CC\uB97C \uBC1B\uC558\uC5B4\uC694! \uBC18\uC9DD\uC774\uB294 \uD14C\uC774\uBE14\uAE4C\uC9C0 \uC870\uC2EC\uC870\uC2EC \uAC78\uC5B4\uAC00\uC694")}function q(){let F=m.filter(te=>!te.fall).length;m.filter(te=>!te.fall).forEach((te,_e)=>{let be=Fo(te.k,te.o);be.g.scale.setScalar(1.05),be.g.position.set(x.x+(_e-1)*.14,.74,x.z+(_e%2?.05:-.05)),i.add(be.g),G.push({g:be.g,t:3})}),I.clear(),m=[],_=!1,p+=F,y++;let j=F*100+(F===3?50:0);f+=j,U.visible=!1;let V=P();R.position.set(V.x,0,V.z),R.visible=!0,[523,659,784].forEach((te,_e)=>In(te,.14,"triangle",.12,_e*.07)),r(F===3?`\u2728 \uD55C \uBC29\uC6B8\uB3C4 \uC548 \uD758\uB838\uC5B4\uC694! +${j} \xB7 \uCE74\uC6B4\uD130\uB85C \uB3CC\uC544\uAC00\uC694`:`\uC11C\uBE59 \uC644\uB8CC ${F}\uC794 +${j} \xB7 \uCE74\uC6B4\uD130\uB85C \uB3CC\uC544\uAC00\uC694`),c&&(c.el.textContent="\uC798\uD588\uC5B4\uC694! \uB2E4\uC74C \uC74C\uB8CC \uC900\uBE44\uB410\uC5B4\uC694 \u2615")}function k(){let F=m.find(V=>!V.fall);if(!F)return;F.fall=.001,g++,M.vroll*=-.3,M.roll*=.4,M.vpitch*=-.3,M.pitch*=.4,In(220,.25,"sawtooth",.08);let j=m.filter(V=>!V.fall).length;if(r(j?`\u{1F4A6} \uC557 \uD55C \uC794 \uC3DF\uC558\uC5B4\uC694! \uB0A8\uC740 \uC74C\uB8CC ${j}\uC794`:"\u{1F4A6} \uB2E4 \uC3DF\uC558\uC5B4\uC694\u2026 \uCE74\uC6B4\uD130\uC5D0\uC11C \uB2E4\uC2DC \uBC1B\uC544 \uC640\uC694"),!j){_=!1,U.visible=!1;let V=P();R.position.set(V.x,0,V.z),R.visible=!0}}function O(){if(!D.length)return r("\uCE74\uD398 \uD14C\uC774\uBE14\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC5B4\uC694");h=!0,X=null,u=kS,f=0,p=0,g=0,y=0;let F=P();n.x=F.x,n.z=F.z,n.face=n.yaw=-Math.PI/2,n.pitch=-.32,M.px=n.x,M.pz=n.z,M.vx=M.vz=0,M.face=n.yaw,N(),Q()}function z(){h=!1,_=!1,S.visible=!1,I.clear(),m=[],U.visible=!1,R.visible=!1,l.hidden=!0,a&&a({score:f,delivered:p,spilled:g,trips:y})}let X=null;function Q(){if(l.hidden=!h,!h)return;X||(l.innerHTML=`<div class="sv-top"><b></b><span class="sv-t"></span><span class="sv-cups"></span><button data-s="quit">\uADF8\uB9CC</button></div>
        <div class="sv-row"><div class="sv-dir"><i>\u2B06</i><small></small></div><div class="sv-meter"><i></i><em></em></div><div class="sv-lvl"><i></i></div></div>`,X={b:l.querySelector("b"),t:l.querySelector(".sv-t"),c:l.querySelector(".sv-cups"),m:l.querySelector(".sv-meter i"),l:l.querySelector(".sv-lvl i"),meter:l.querySelector(".sv-meter"),di:l.querySelector(".sv-dir i"),dd:l.querySelector(".sv-dir small")});let F=m.filter(re=>!re.fall).length,j=Ho(M.roll/Mh,-1.1,1.1),V=Ho(M.pitch/Mh,-1.1,1.1);X.b.textContent=`\u2615 ${f}\uC810`,X.t.textContent=`\u23F1 ${Math.ceil(u)}\uCD08`,X.c.textContent=_?"\u{1F964}".repeat(F)+"\xB7".repeat(3-F):"\uCE74\uC6B4\uD130\uB85C \uB3CC\uC544\uAC00\uC694!";let te=_?x:P(),_e=te.x-n.x,be=te.z-n.z,ve=Math.atan2(_e,be)-n.yaw;ve=Math.atan2(Math.sin(ve),Math.cos(ve)),X.di.style.transform=`rotate(${-ve}rad)`,X.dd.textContent=`${Math.hypot(_e,be).toFixed(1)}m`,X.m.style.left=`${50+j*45}%`,X.l.style.transform=`translate(${j*15}px, ${-V*15}px)`;let Ie=Math.max(Math.abs(j),Math.abs(V))>.72;X.meter.classList.toggle("danger",Ie),X.l.parentNode.classList.toggle("danger",Ie)}l.addEventListener("click",F=>{let j=F.target.closest("[data-s]");j&&j.dataset.s==="quit"&&z()});let $=o("serve-bal");$.addEventListener("pointerdown",F=>{let j=F.target.closest("[data-b]");j&&(F.preventDefault(),b=+j.dataset.b)});let W=()=>b=0;return $.addEventListener("pointerup",W),$.addEventListener("pointercancel",W),$.addEventListener("pointerleave",W),addEventListener("keydown",F=>{h&&(F.code==="KeyZ"&&(b=-1),F.code==="KeyC"&&(b=1))}),addEventListener("keyup",F=>{(F.code==="KeyZ"||F.code==="KeyC")&&(b=0)}),{start:O,get active(){return h},get target(){return x},get tilt(){return[M.roll,M.pitch]},place(F,j){if(!S.visible)return;let V=Math.sin(j),te=Math.cos(j),_e=Math.sin(M.bob)*.012;S.position.set(F.position.x+V*.5,F.position.y-.36+Math.abs(_e),F.position.z+te*.5),S.rotation.set(0,j,0),S.rotateX(M.pitch),S.rotateZ(-M.roll+_e*.6)},update(F,j){for(let ce=G.length-1;ce>=0;ce--){let ze=G[ce];ze.t-=F,ze.t<.5&&ze.g.scale.setScalar(1.05*Math.max(.001,ze.t*2)),ze.t<=0&&(i.remove(ze.g),G.splice(ce,1))}for(let ce of[R,U])ce.visible&&(ce.userData.cone.position.y=1.5+Math.sin(j*4)*.1,ce.userData.cone.rotation.y+=F*2,ce.userData.ring.material.opacity=.55+Math.sin(j*5)*.3);if($.hidden=!h||!_,!h)return;u-=F;let V=(n.x-M.px)/Math.max(F,.001),te=(n.z-M.pz)/Math.max(F,.001),_e=(V-M.vx)/Math.max(F,.001),be=(te-M.vz)/Math.max(F,.001),ve=n.yaw-M.face;ve=Math.atan2(Math.sin(ve),Math.cos(ve))/Math.max(F,.001),M.px=n.x,M.pz=n.z,M.vx=V,M.vz=te,M.face=n.yaw;let Ie=Math.sin(n.yaw),re=Math.cos(n.yaw),me=Ho(_e*Ie+be*re,-12,12),Me=Ho(_e*re-be*Ie,-12,12),ye=Math.hypot(V,te);if(_){let ce=ye>.25;M.bump-=F;let ze=0;M.bump<=0&&(M.bump=ce?.35+Math.random()*.5:.9+Math.random(),ze=(Math.random()-.5)*(ce?2.2:.5)),M.dt-=F,M.dt<=0&&(M.dt=.9+Math.random()*1.2,M.drift=(Math.random()<.5?-1:1)*(ce?1.1+Math.random()*.9:.3+Math.random()*.4)),M.dcur+=(M.drift-M.dcur)*Math.min(1,F*2.5),M.vroll+=(-M.roll*4.5-M.vroll*2+M.dcur+Me*.2+Ho(ve,-5,5)*ye*.55+b*1.8)*F+ze*.7,M.vpitch+=(-M.pitch*6-M.vpitch*2.4-me*.13)*F+ze*.35,M.roll+=M.vroll*F,M.pitch+=M.vpitch*F,(Math.abs(M.roll)>Mh||Math.abs(M.pitch)>Mh)&&k(),M.bob+=F*ye*9}for(let ce of m)ce.fall&&(ce.fall+=F,ce.g.position.y-=ce.fall*.08,ce.g.rotation.z+=F*6*Math.sign(M.roll||1),ce.fall>.6&&(ce.g.visible=!1));if(S.visible=_||m.some(ce=>ce.fall&&ce.fall<.6),_&&x&&Math.hypot(n.x-x.x,n.z-x.z)<1.05&&q(),!_){let ce=P();Math.hypot(n.x-ce.x,n.z-ce.z)<.9&&N()}if(u<=0)return z();Q()}}}function Ho(i,e,t){return Math.max(e,Math.min(t,i))}function HS(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=new ei(i);return n.colorSpace=Rt,n}function w0({scene3d:i,data:e,storeRoot:t,isTouch:n}){let s=e.ceiling||2.9,r=e.floor.map(q=>q[0]),a=e.floor.map(q=>q[1]),o=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)],l=(q,k)=>{let O=!1,z=e.floor;for(let X=0,Q=z.length-1;X<z.length;Q=X++){let[$,W]=z[X],[F,j]=z[Q];W>k!=j>k&&q<(F-$)*(k-W)/(j-W)+$&&(O=!O)}return O},c=HS(),h=n?140:260,u=new Float32Array(h*3),f=new Float32Array(h*3),p=new Float32Array(h),g=["#ffffff","#ffd6e7","#d9f5e6","#e3dcff","#fff1c9"].map(q=>new Le(q));for(let q=0;q<h;q++){let k,O;do k=o[0]+Math.random()*(o[2]-o[0]),O=o[1]+Math.random()*(o[3]-o[1]);while(!l(k,O));u.set([k,.3+Math.random()*(s-.5),O],q*3);let z=g[q%g.length];f.set([z.r,z.g,z.b],q*3),p[q]=Math.random()*100}let y=new At;y.setAttribute("position",new qt(u,3)),y.setAttribute("color",new qt(f,3));let m=new ys(y,new $i({size:.07,map:c,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:qn,sizeAttenuation:!0}));m.frustumCulled=!1,m.renderOrder=5,i.add(m);let x=u.slice(),_=[],b=e.floor,M=(o[0]+o[2])/2,w=(o[1]+o[3])/2;for(let q=0;q<b.length;q++){let[k,O]=b[q],[z,X]=b[(q+1)%b.length],Q=Math.hypot(z-k,X-O);if(Q<1.2)continue;let $=-(X-O)/Q,W=(z-k)/Q,F=(k+z)/2,j=(O+X)/2;l(F+$*.2,j+W*.2)||($=-$,W=-W);let V=Math.max(1,Math.round(Q/1.15)),te=6;for(let _e=0;_e<V;_e++)for(let be=0;be<te;be++){let ve=(_e+be/te)/V,Ie=be/te,re=k+(z-k)*ve+$*.07,me=O+(X-O)*ve+W*.07,Me=s-.14-Math.sin(Ie*Math.PI)*.16;l(re,me)&&_.push([re,Me,me])}}let S=["#fff4d6","#ffc2da","#c9f2dc","#fff4d6","#d9ccff"].map(q=>new Le(q)),d=new Ot({color:new Le(2.8,2.8,2.8),toneMapped:!1}),v=new qi(new jt(.032,10,8),d,_.length),I=new Ye,E=new Le;_.forEach(([q,k,O],z)=>{I.makeTranslation(q,k,O),v.setMatrixAt(z,I),v.setColorAt(z,S[z%S.length])}),v.frustumCulled=!1,i.add(v);let C=new At().setFromPoints(_.flatMap((q,k)=>k&&Math.hypot(q[0]-_[k-1][0],q[2]-_[k-1][2])<.4?[new B(..._[k-1]),new B(...q)]:[]));i.add(new qs(C,new vs({color:"#b7a6c9",transparent:!0,opacity:.6})));let R=new At;R.setAttribute("position",new qt(new Float32Array(_.flat()),3));let U=new Float32Array(_.length*3);_.forEach((q,k)=>{let O=S[k%S.length];U.set([O.r,O.g,O.b],k*3)}),R.setAttribute("color",new qt(U,3));let P=new ys(R,new $i({size:.3,map:c,vertexColors:!0,transparent:!0,opacity:.75,depthWrite:!1,blending:qn}));P.frustumCulled=!1,i.add(P);let D=[];t.updateMatrixWorld(!0),t.traverse(q=>{if(q.isMesh&&q.material&&q.material.name==="light"){let k=new pn().setFromObject(q);D.push(k.getCenter(new B).setY(k.min.y))}});let G=new Ct({transparent:!0,depthWrite:!1,blending:qn,side:Ft,uniforms:{uColor:{value:new Le("#fff3df")},uStrength:{value:.045}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = uv.y; vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:"uniform vec3 uColor; uniform float uStrength; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN, vV)), 2.5); float a = uStrength * smoothstep(0.0, 1.0, vY) * edge; gl_FragColor = vec4(uColor * a, a); }"}),N=Math.max(1,Math.ceil(D.length/(n?6:10)));return D.filter((q,k)=>k%N===0).forEach(q=>{let k=q.y-.02,O=new je(new ot(.22,.7,k,24,1,!0),G);O.position.set(q.x,k/2,q.z),O.renderOrder=4,i.add(O)}),{update(q,k){let O=y.attributes.position.array;for(let z=0;z<h;z++){let X=p[z],Q=z*3;O[Q]=x[Q]+Math.sin(k*.21+X)*.25,O[Q+1]=x[Q+1]+Math.sin(k*.17+X*1.3)*.18,O[Q+2]=x[Q+2]+Math.cos(k*.19+X*.7)*.25}y.attributes.position.needsUpdate=!0,m.material.opacity=.65+Math.sin(k*1.3)*.15;for(let z=0;z<6;z++){let X=Math.floor(Math.random()*_.length);E.copy(S[X%S.length]).multiplyScalar(.55+Math.random()*.9),v.setColorAt(X,E)}v.instanceColor.needsUpdate=!0}}}var Sh=class extends Vs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Bt;e.deleteAttribute("uv");let t=new $t({side:gn}),n=new $t,s=new js(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new je(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new qi(e,n,6),o=new Lt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new je(e,oa(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new je(e,oa(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new je(e,oa(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new je(e,oa(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new je(e,oa(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new je(e,oa(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function oa(i){return new io({color:0,emissive:16777215,emissiveIntensity:i})}var Pi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},GS=new es(-1,1,1,-1,0,1),ld=class extends At{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}},VS=new ld,Ii=class{constructor(e){this._mesh=new je(VS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,GS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var la=class extends Ln{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xn.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ii(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Go=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},bh=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Th=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new pe);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ht}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new la(Pi),this.copyPass.material.blending=hn,this.timer=new uo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Go!==void 0&&(a instanceof Go?n=!0:a instanceof bh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Eh=class extends Ln{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Vo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new pe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ye},cameraProjectionMatrixInverse:{value:new Ye},cameraWorldMatrix:{value:new Ye},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new B(-1,-1,-1)},sceneBoxMax:{value:new B(1,1,1)}},vertexShader:`

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
		}`},Wo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},wh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function A0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=WS(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new B(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Qn(s,e,e);return r.wrapS=bn,r.wrapT=bn,r.needsUpdate=!0,r}function WS(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Xo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:cd(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new pe},cameraProjectionMatrixInverse:{value:new Ye},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function cd(i,e,t){let n=XS(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function XS(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new B(Math.cos(r),Math.sin(r),a))}return n}var Ah=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,p=c-u,g=e-f,y=t-p,m,x;g>y?(m=1,x=0):(m=0,x=1);let _=g-m+h,b=y-x+h,M=g-1+2*h,w=y-1+2*h,S=l&255,d=c&255,v=this.perm[S+this.perm[d]]%12,I=this.perm[S+m+this.perm[d+x]]%12,E=this.perm[S+1+this.perm[d+1]]%12,C=.5-g*g-y*y;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[v],g,y));let R=.5-_*_-b*b;R<0?s=0:(R*=R,s=R*R*this._dot(this.grad3[I],_,b));let U=.5-M*M-w*w;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[E],M,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),p=1/6,g=(h+u+f)*p,y=h-g,m=u-g,x=f-g,_=e-y,b=t-m,M=n-x,w,S,d,v,I,E;_>=b?b>=M?(w=1,S=0,d=0,v=1,I=1,E=0):_>=M?(w=1,S=0,d=0,v=1,I=0,E=1):(w=0,S=0,d=1,v=1,I=0,E=1):b<M?(w=0,S=0,d=1,v=0,I=1,E=1):_<M?(w=0,S=1,d=0,v=0,I=1,E=1):(w=0,S=1,d=0,v=1,I=1,E=0);let C=_-w+p,R=b-S+p,U=M-d+p,P=_-v+2*p,D=b-I+2*p,G=M-E+2*p,N=_-1+3*p,q=b-1+3*p,k=M-1+3*p,O=h&255,z=u&255,X=f&255,Q=this.perm[O+this.perm[z+this.perm[X]]]%12,$=this.perm[O+w+this.perm[z+S+this.perm[X+d]]]%12,W=this.perm[O+v+this.perm[z+I+this.perm[X+E]]]%12,F=this.perm[O+1+this.perm[z+1+this.perm[X+1]]]%12,j=.6-_*_-b*b-M*M;j<0?s=0:(j*=j,s=j*j*this._dot3(this.grad3[Q],_,b,M));let V=.6-C*C-R*R-U*U;V<0?r=0:(V*=V,r=V*V*this._dot3(this.grad3[$],C,R,U));let te=.6-P*P-D*D-G*G;te<0?a=0:(te*=te,a=te*te*this._dot3(this.grad3[W],P,D,G));let _e=.6-N*N-q*q-k*k;return _e<0?o=0:(_e*=_e,o=_e*_e*this._dot3(this.grad3[F],N,q,k)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,p,g,y=(e+t+n+s)*l,m=Math.floor(e+y),x=Math.floor(t+y),_=Math.floor(n+y),b=Math.floor(s+y),M=(m+x+_+b)*c,w=m-M,S=x-M,d=_-M,v=b-M,I=e-w,E=t-S,C=n-d,R=s-v,U=I>E?32:0,P=I>C?16:0,D=E>C?8:0,G=I>R?4:0,N=E>R?2:0,q=C>R?1:0,k=U+P+D+G+N+q,O=a[k][0]>=3?1:0,z=a[k][1]>=3?1:0,X=a[k][2]>=3?1:0,Q=a[k][3]>=3?1:0,$=a[k][0]>=2?1:0,W=a[k][1]>=2?1:0,F=a[k][2]>=2?1:0,j=a[k][3]>=2?1:0,V=a[k][0]>=1?1:0,te=a[k][1]>=1?1:0,_e=a[k][2]>=1?1:0,be=a[k][3]>=1?1:0,ve=I-O+c,Ie=E-z+c,re=C-X+c,me=R-Q+c,Me=I-$+2*c,ye=E-W+2*c,ce=C-F+2*c,ze=R-j+2*c,Ue=I-V+3*c,We=E-te+3*c,Ze=C-_e+3*c,Je=R-be+3*c,Y=I-1+4*c,bt=E-1+4*c,et=C-1+4*c,ue=R-1+4*c,J=m&255,ge=x&255,de=_&255,Ae=b&255,L=o[J+o[ge+o[de+o[Ae]]]]%32,T=o[J+O+o[ge+z+o[de+X+o[Ae+Q]]]]%32,Z=o[J+$+o[ge+W+o[de+F+o[Ae+j]]]]%32,fe=o[J+V+o[ge+te+o[de+_e+o[Ae+be]]]]%32,se=o[J+1+o[ge+1+o[de+1+o[Ae+1]]]]%32,xe=.6-I*I-E*E-C*C-R*R;xe<0?h=0:(xe*=xe,h=xe*xe*this._dot4(r[L],I,E,C,R));let Te=.6-ve*ve-Ie*Ie-re*re-me*me;Te<0?u=0:(Te*=Te,u=Te*Te*this._dot4(r[T],ve,Ie,re,me));let oe=.6-Me*Me-ye*ye-ce*ce-ze*ze;oe<0?f=0:(oe*=oe,f=oe*oe*this._dot4(r[Z],Me,ye,ce,ze));let le=.6-Ue*Ue-We*We-Ze*Ze-Je*Je;le<0?p=0:(le*=le,p=le*le*this._dot4(r[fe],Ue,We,Ze,Je));let Se=.6-Y*Y-bt*bt-et*et-ue*ue;return Se<0?g=0:(Se*=Se,g=Se*Se*this._dot4(r[se],Y,bt,et,ue)),27*(h+u+f+p+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var ca=class i extends Ln{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=A0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ut(this.width,this.height,{type:Ht,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ct({defines:Object.assign({},Vo.defines),uniforms:xn.clone(Vo.uniforms),vertexShader:Vo.vertexShader,fragmentShader:Vo.fragmentShader,blending:hn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new no,this.normalMaterial.blending=hn,this.pdMaterial=new Ct({defines:Object.assign({},Xo.defines),uniforms:xn.clone(Xo.uniforms),vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ct({defines:Object.assign({},Wo.defines),uniforms:xn.clone(Wo.uniforms),vertexShader:Wo.vertexShader,fragmentShader:Wo.fragmentShader,blending:hn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ct({uniforms:xn.clone(Pi.uniforms),vertexShader:Pi.vertexShader,fragmentShader:Pi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:po,blendDst:Js,blendEquation:ti,blendSrcAlpha:fo,blendDstAlpha:Js,blendEquationAlpha:ti}),this.blendMaterial=new Ct({uniforms:xn.clone(wh.uniforms),vertexShader:wh.vertexShader,fragmentShader:wh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:cc,blendSrc:po,blendDst:Js,blendEquation:ti,blendSrcAlpha:fo,blendDstAlpha:Js,blendEquationAlpha:ti}),this._fsQuad=new Ii(null),this._originalClearColor=new Le,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new hi;s.format=fi,s.type=ns,this.normalRenderTarget=new Ut(this.width,this.height,{minFilter:Nt,magFilter:Nt,type:Ht,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=cd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Ah,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Qn(s,e,e,On,Tn);return r.wrapS=bn,r.wrapT=bn,r.needsUpdate=!0,r}};ca.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var qo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Rh=class extends Ln{constructor(){super(),this.isOutputPass=!0,this.uniforms=xn.clone(qo.uniforms),this.material=new Vr({name:qo.name,uniforms:this.uniforms,vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader}),this._fsQuad=new Ii(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===go?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Qs?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===vo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var R0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ha=class i extends Ln{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new pe(e.x,e.y):new pe(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(r,a,{type:Ht,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ut(r,a,{type:Ht,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Ut(r,a,{type:Ht,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=R0;this.highPassUniforms=xn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new pe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xn.clone(Pi.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:Pi.vertexShader,fragmentShader:Pi.fragmentShader,premultipliedAlpha:!0,blending:qn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new Ot,this._fsQuad=new Ii(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new pe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ct({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new pe(.5,.5)},direction:{value:new pe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ha.BlurDirectionX=new pe(1,0);ha.BlurDirectionY=new pe(0,1);var $o=class i extends je{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new Le(t.color):new Le(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new Vn,u=new B,f=new B,p=new B,g=new Ye,y=new B(0,0,-1),m=new St,x=new B,_=new B,b=new St,M=new Ye,w=new Ut(r,a,{samples:c,type:Ht}),S=new Ct({name:l.name!==void 0?l.name:"unspecified",uniforms:xn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});S.uniforms.tDiffuse.value=w.texture,S.uniforms.color.value=s,S.uniforms.textureMatrix.value=M,this.material=S,this.onBeforeRender=function(d,v,I){let E=this.getReflectionCamera(I);if(f.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(I.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),x.subVectors(f,p),x.dot(u)>0===!0&&this.forceUpdate===!1)return;x.reflect(u).negate(),x.add(f),g.extractRotation(I.matrixWorld),y.set(0,0,-1),y.applyMatrix4(g),y.add(p),_.subVectors(f,y),_.reflect(u).negate(),_.add(f),E.position.copy(x),E.up.set(0,1,0),E.up.applyMatrix4(g),E.up.reflect(u),E.lookAt(_),E.far=I.far,E.updateMatrixWorld(),E.projectionMatrix.copy(I.projectionMatrix),E.projectionMatrix.elements[8]*=-1,E.projectionMatrix.elements[12]*=-1,M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(E.projectionMatrix),M.multiply(E.matrixWorldInverse),M.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(E.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let R=E.projectionMatrix;E.isOrthographicCamera?(b.x=(Math.sign(m.x)+R.elements[8])/R.elements[0],b.y=(Math.sign(m.y)+R.elements[9])/R.elements[5],b.z=-I.far,b.w=1):(b.x=(Math.sign(m.x)+R.elements[8])/R.elements[0],b.y=(Math.sign(m.y)+R.elements[9])/R.elements[5],b.z=-1,b.w=(1+R.elements[10])/R.elements[14]),m.multiplyScalar(2/m.dot(b)),R.elements[2]=m.x,R.elements[6]=m.y,E.isOrthographicCamera?(R.elements[10]=m.z-o,R.elements[14]=m.w-1):(R.elements[10]=m.z+1-o,R.elements[14]=m.w),n.visible=!1;let U=d.getRenderTarget(),P=d.xr.enabled,D=d.shadowMap.autoUpdate;d.xr.enabled=!1,d.shadowMap.autoUpdate=!1,d.setRenderTarget(w),d.state.buffers.depth.setMask(!0),d.autoClear===!1&&d.clear(),d.render(v,E),d.xr.enabled=P,d.shadowMap.autoUpdate=D,d.setRenderTarget(U);let G=I.viewport;G!==void 0&&d.state.viewport(G),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),n.material.dispose()},this.getReflectionCamera=function(d){let v=this._reflectionCameras.get(d);return v===void 0&&(v=d.clone(),this._reflectionCameras.set(d,v)),v}}};$o.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Et=i=>document.getElementById(i),Ke={canvas:Et("room"),overlay:Et("overlay"),bar:Et("bar"),pct:Et("pct"),enter:Et("enter"),where:Et("where"),map:Et("map"),toast:Et("toast"),joy:Et("joy"),knob:Et("knob"),err:Et("err")},Kn=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",Kn);var kt;try{kt=new eh({canvas:Ke.canvas,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0})}catch(i){throw Ke.err.hidden=!1,Ke.err.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C 3D(WebGL)\uB97C \uCF24 \uC218 \uC5C6\uC5B4\uC694. \uCD5C\uC2E0 Chrome\xB7Safari\xB7Edge\uC5D0\uC11C \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694.",i}kt.setPixelRatio(Math.min(window.devicePixelRatio||1,Kn?1.5:1.75));kt.outputColorSpace=Rt;kt.toneMapping=Qs;kt.toneMappingExposure=1.05;kt.shadowMap.enabled=!0;kt.shadowMap.type=Zs;kt.shadowMap.autoUpdate=!1;var zt=new Vs,F0=new Le("#e9e2fb");zt.background=F0;zt.fog=new Na(F0,13,32);var vt=new tn(66,1,.05,60),qS=new ta(kt);zt.environment=qS.fromScene(new Sh,.04).texture;zt.environmentIntensity=.55;zt.add(new oo("#fffafd","#e3d2ec",.7));var gi=new Ts("#fff6ec",2.4);gi.position.set(-3.2,9,2.4);gi.target.position.set(0,0,.4);zt.add(gi.target);gi.castShadow=!0;gi.shadow.mapSize.set(Kn?2048:3072,Kn?2048:3072);Object.assign(gi.shadow.camera,{left:-10.5,right:10.5,top:10.5,bottom:-10.5,near:1,far:22});gi.shadow.bias=-4e-4;gi.shadow.normalBias=.025;gi.shadow.radius=5;gi.shadow.blurSamples=12;var B0=new Ts("#f1e9ff",.55);B0.position.set(2.5,4,-3);zt.add(B0);zt.add(gi);var z0=l0(),pd={floor:"#e4d6d8",mint:"#cbeebb",trim:"#b2dca0",ceiling:"#f8f3fb",pink:"#f6b7d2",pinkChair:"#f2a6c9",mintChair:"#a9dcbf",shelf:"#fff3e3",blue:"#a9d4f5",white:"#fbf8f2",steel:"#b3b8c6",glass:"#bfe3f0",curtain:"#f2a9c8",greenDrape:"#b9d6a4",greenCloth:"#b7df8f",pegboard:"#f1dfbd",paperA:"#f2b0c2",paperB:"#a9d0ec",paperC:"#f3d08f",paperD:"#c3dca0",paperE:"#cdbcf0",light:"#fffbe9",handle:"#8fb98a",displayWire:"#e6def2",acrylicEdge:"#c9e6f2",labelInk:"#8a78b8",pinkBasket:"#e7a2c4",meshTray:"#cdc4e6",paperWhite:"#fffaf7",line:"#c8b9c9",wood:"#e6bf93",woodDark:"#c99c6e",plushCream:"#fbecc9",plushPink:"#f8b9d3",plushBlue:"#bcdcf6",clothWhite:"#fffbf6"},hd=new Map;function md(i){if(hd.has(i.name))return hd.get(i.name);let e=pd[i.name]?new Le(pd[i.name]):i.color.clone(),t=new $t({color:e,roughness:.72,metalness:0,side:Ft});return(i.name==="steel"||i.name==="handle")&&(t.metalness=.45,t.roughness=.35),i.name==="floor"&&(t.roughness=.5),i.name==="acrylicEdge"&&(t.roughness=.25),i.name==="mirror"&&(t.metalness=1,t.roughness=.04,t.color=new Le("#eef3f7"),t.envMapIntensity=1.4),i.name==="leafGreen"&&(t.color=new Le("#86cc78")),t.name=i.name,i.name==="glass"&&(t.transparent=!0,t.opacity=.32,t.depthWrite=!1,t.roughness=.05,t.metalness=.1),i.name==="light"&&(t.emissive=new Le("#fff6e0"),t.emissiveIntensity=2.6),i.name==="ceiling"&&(t.emissive=new Le("#f3ecf7"),t.emissiveIntensity=.55),(i.name==="curtain"||i.name==="greenCloth")&&(t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb *= 0.88 + 0.12 * te.x * te.y;`)}),hd.set(i.name,t),t}var ud=1.32,$S=.2,C0=2.4,Pe={x:0,z:0,yaw:0,pitch:-.06,face:0},os=!0,Ps=2.4,k0=2.7,Dh=-.5,gd=null;try{gd=localStorage.getItem("sh-look")}catch{}var Zt=Kf(z0,{look:rr.includes(gd)?gd:rr[Math.floor(Math.random()*rr.length)]});zt.add(Zt.root);var pt=null,Jo=!1,fa=!1,P0=!1,Yn=null,rs=null,mi=null,Dn=null,xd=null,un=null,Ph=null,hr=null,Li=null,I0=()=>Ph&&Ph.isOpen||un&&un.open||Yn&&Yn.open||rs&&rs.open||mi&&mi.isOpen||Dn&&Dn.active;function Ih(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[a,o]=t[s],[l,c]=t[r];o>e!=c>e&&i<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}var H0=Array.from({length:12},(i,e)=>[Math.cos(e*Math.PI/6),Math.sin(e*Math.PI/6)]);function ur(i,e,t=$S){if(!Ih(i,e,pt.floor))return!1;for(let[n,s]of H0)if(!Ih(i+n*t,e+s*t,pt.floor))return!1;for(let[n,s,r,a,o]of pt.blocks){let l=i-n,c=e-s,h=Math.cos(o),u=Math.sin(o),f=Math.max(0,Math.abs(l*h+c*u)-r),p=Math.max(0,Math.abs(-l*u+c*h)-a);if(f*f+p*p<t*t)return!1}return!0}function YS(i,e,t=.12){if(!Ih(i,e,pt.floor))return!1;for(let[n,s]of H0)if(!Ih(i+n*t,e+s*t,pt.floor))return!1;for(let[n,s,r,a,o]of pt.blocks){if(Math.min(r,a)>.1)continue;let l=i-n,c=e-s,h=Math.cos(o),u=Math.sin(o),f=Math.max(0,Math.abs(l*h+c*u)-r),p=Math.max(0,Math.abs(-l*u+c*h)-a);if(f*f+p*p<t*t)return!1}return!0}function fd(i,e,t=-.06){Yt=null,Pe.x=i[0],Pe.z=i[1],Pe.yaw=Pe.face=Math.atan2(e[0]-Pe.x,e[1]-Pe.z),Pe.pitch=os?Dh:t,Ps=.5}var jo=()=>pt&&pt.scale||1,Lh={entry:()=>fd(pt.spawn,pt.look),display:()=>fd(pt.displayView,pt.displayLook,-.3),cafe:()=>fd(pt.cafe,[-2.6*jo(),3.7*jo()])};async function KS(){let i=fetch("scene.json").then(r=>{if(!r.ok)throw Error("scene.json "+r.status);return r.json()}),e=7907728,t=(async()=>{let r=await fetch("store.json");if(!r.ok)throw Error("store.json "+r.status);let a;if(r.body&&r.body.getReader){let c=r.body.getReader(),h=[],u=0;for(;;){let{done:f,value:p}=await c.read();if(f)break;h.push(p),u+=p.length;let g=Math.min(99,Math.round(u/e*100));Ke.bar.style.width=g+"%",Ke.pct.textContent="\uB9E4\uC7A5 \uBD88\uB7EC\uC624\uB294 \uC911\u2026 "+g+"%"}a=new TextDecoder().decode(await new Blob(h).arrayBuffer())}else a=await r.text();let o=atob(JSON.parse(a)),l=new Uint8Array(o.length);for(let c=0;c<o.length;c++)l[c]=o.charCodeAt(c);return new Do().parseAsync(l.buffer,"")})(),[n,s]=await Promise.all([i,t]);pt=n,s.scene.traverse(r=>{if(r.isMesh){r.material=Array.isArray(r.material)?r.material.map(md):md(r.material),r.material.name==="glass"&&(r.renderOrder=2);let a=r.material.name;r.receiveShadow=!0,r.castShadow=!["ceiling","light","glass","floor","curtain"].includes(a),r.matrixAutoUpdate=!1,r.updateMatrix()}}),zt.add(s.scene),Ni=s.scene,ab(s.scene),rb(-.5),sb(),ib(s.scene).catch(r=>console.warn("baked light unavailable",r)),Lh.entry(),lb(),Ph=x0({showToast:si}),hr=b0({scene3d:zt,data:pt,canOccupy:ur,player:Pe,camera:vt,showToast:si,onFinish:r=>un.treasureResult(r)}),Li=E0({scene3d:zt,data:pt,hero:Zt,player:Pe,npcs:Di,showToast:si,onFinish:r=>{Pe.pitch=os?Dh:-.06,un.servingResult(r)}}),un=M0({showToast:si,npcs:Di,capture:N0,views:yd.length,minis:Ph,treasure:hr,serving:Li}),Yn=c0({scene3d:zt,storeRoot:Ni,data:pt,hero:Zt,npcs:Di,showToast:si,isTouch:Kn,canOccupy:ur,playGame:r=>un.menu("cafe",r)}),rs=f0({scene3d:zt,hero:Zt,npcs:Di,showToast:si,inShop:r=>!pt.seats.some(a=>Math.hypot(r.x-a[0],r.z-a[1])<1.3)&&!Di.some(a=>a.id==="cafe"&&Math.hypot(r.x-a.x,r.z-a.z)<2.8)}),mi=d0({showToast:si}),Dn=m0({hero:Zt,mirrors:Zo,camera:vt,player:Pe,showToast:si,renderNow:()=>(Zt.root.position.set(Pe.x,0,Pe.z),Zt.root.rotation.y=Pe.face,Zt.root.visible=!0,$0(),kn!=="low"?ri.render():kt.render(zt,vt),kt.domElement)}),Et("diary-btn").addEventListener("click",r=>{mi.open(),r.currentTarget.blur()}),xd=w0({scene3d:zt,data:pt,storeRoot:Ni,isTouch:Kn}),kt.compile(zt,vt),kt.shadowMap.needsUpdate=!0,Jo=!0,Ke.bar.style.width="100%",Ke.pct.textContent="\uC900\uBE44 \uC644\uB8CC",Ke.enter.disabled=!1,Ke.enter.textContent="\uB9E4\uC7A5 \uB4E4\uC5B4\uAC00\uAE30",window.__store={mirrors:Zo,sit:r=>{let a=pt.seats[r];Yt=a,Pe.x=a[0],Pe.z=a[1],Pe.face=a[2],Yn.onSit(a)},get cafe(){return Yn},get shop(){return rs},get diary(){return mi},get photo(){return Dn},stand:()=>Yt&&Ko(),get seats(){return pt.seats},player:Pe,setView:r=>Td(r),setQuality:r=>{kn=r,wd()},canOccupy:ur,spots:Lh,keys:wn,get entered(){return fa},info:()=>kt.info.render,bloom:Ed,grade:X0,npcs:Di,lmFloor:vd,get root(){return Ni},shot:r=>N0(r),get treasure(){return hr},get serving(){return Li},set camD(r){k0=r}}}KS().catch(i=>{console.error(i),Ke.pct.textContent="\uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694.",Ke.enter.textContent="\uB2E4\uC2DC \uC2DC\uB3C4",Ke.enter.disabled=!1,Ke.enter.onclick=()=>location.reload()});Ke.enter.addEventListener("click",()=>{Jo&&(fa=!0,Ke.overlay.classList.add("gone"),setTimeout(()=>Ke.overlay.hidden=!0,450),si(Kn?"\uC67C\uCABD \uC544\uB798 \uC6D0\uC73C\uB85C \uAC77\uACE0, \uD654\uBA74\uC744 \uB4DC\uB798\uADF8\uD574 \uCE74\uBA54\uB77C\uB97C \uB3CC\uB824\uC694":"WASD\uB85C \uAC77\uACE0, \uB9C8\uC6B0\uC2A4 \uB4DC\uB798\uADF8\uB85C \uCE74\uBA54\uB77C\uB97C \uB3CC\uB824\uC694 \xB7 V \uC2DC\uC810 \uC804\uD658"))});var wn=new Set,jS=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","KeyQ","KeyE"]);addEventListener("keydown",i=>{i.target.closest&&i.target.closest("input,textarea")||!jS.has(i.code)||i.altKey||i.ctrlKey||i.metaKey||(i.preventDefault(),wn.add(i.code))});addEventListener("keyup",i=>wn.delete(i.code));addEventListener("blur",()=>{wn.clear(),fn.x=fn.y=0});var Yo=new Map;Ke.canvas.addEventListener("pointerdown",i=>{if(fa&&!(i.pointerType==="mouse"&&i.button!==0)){Yo.set(i.pointerId,{x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,t:performance.now()});try{Ke.canvas.setPointerCapture(i.pointerId)}catch{}Ke.canvas.classList.add("dragging")}});Ke.canvas.addEventListener("pointermove",i=>{let e=Yo.get(i.pointerId);if(!e)return;let t=i.pointerType==="mouse"?.0042:.0065;Pe.yaw-=(i.clientX-e.x)*t,Pe.pitch=Ei.clamp(Pe.pitch-(i.clientY-e.y)*t,os?-1.1:-1.05,os?-.12:.9),e.x=i.clientX,e.y=i.clientY});var Md=i=>{let e=Yo.get(i.pointerId);e&&i.type==="pointerup"&&Math.hypot(i.clientX-e.sx,i.clientY-e.sy)<9&&performance.now()-e.t<450&&eb(i.clientX,i.clientY),Yo.delete(i.pointerId),Yo.size||Ke.canvas.classList.remove("dragging")};Ke.canvas.addEventListener("pointerup",Md);Ke.canvas.addEventListener("pointercancel",Md);Ke.canvas.addEventListener("lostpointercapture",Md);Ke.canvas.addEventListener("contextmenu",i=>i.preventDefault());var fn={id:null,x:0,y:0,cx:0,cy:0};Ke.joy.addEventListener("pointerdown",i=>{if(fn.id!==null)return;i.preventDefault();let e=Ke.joy.getBoundingClientRect();fn.id=i.pointerId,fn.cx=e.left+e.width/2,fn.cy=e.top+e.height/2;try{Ke.joy.setPointerCapture(i.pointerId)}catch{}G0(i)});function G0(i){if(i.pointerId!==fn.id)return;let e=Ke.joy.clientWidth*.36,t=i.clientX-fn.cx,n=i.clientY-fn.cy,s=Math.hypot(t,n);s>e&&(t*=e/s,n*=e/s),fn.x=t/e,fn.y=n/e,Ke.knob.style.transform=`translate(${t}px, ${n}px)`}Ke.joy.addEventListener("pointermove",G0);var Sd=i=>{i.pointerId===fn.id&&(fn.id=null,fn.x=fn.y=0,Ke.knob.style.transform="")};Ke.joy.addEventListener("pointerup",Sd);Ke.joy.addEventListener("pointercancel",Sd);Ke.joy.addEventListener("lostpointercapture",Sd);document.querySelectorAll("[data-spot]").forEach(i=>i.addEventListener("click",()=>{Jo&&Lh[i.dataset.spot](),i.blur()}));var _d=Et("burger"),V0=Et("spots"),bd=i=>{V0.hidden=!i,_d.setAttribute("aria-expanded",String(i)),_d.setAttribute("aria-label",i?"\uBA54\uB274 \uB2EB\uAE30":"\uBA54\uB274 \uC5F4\uAE30")};_d.addEventListener("click",i=>{bd(V0.hidden),i.currentTarget.blur()});document.querySelectorAll("[data-spot]").forEach(i=>i.addEventListener("click",()=>bd(!1)));Ke.canvas.addEventListener("pointerdown",()=>bd(!1));function ZS(i){Yt=i,Pe.x=i[0],Pe.z=i[1],Pe.face=i[2],Pe.yaw=i[2],zn.set(0,0),Yn&&Yn.onSit(i)}function JS(){let i=Di.find(e=>e.id==="cafe");return i&&pt.seats.filter(e=>e[1]>3).sort((e,t)=>Math.hypot(e[0]-i.x,e[1]-i.z)-Math.hypot(t[0]-i.x,t[1]-i.z))[0]||pt.seats[0]}document.querySelectorAll("[data-nav]").forEach(i=>i.addEventListener("click",()=>{if(i.blur(),!Jo||!fa)return;mi&&mi.isOpen&&mi.close();let e=i.dataset.nav;if(e==="shop")Yt&&Ko(),rs.shopping?Et("basket-btn").click():rs.open||(Et("shop-btn").hidden?(Lh.display(),setTimeout(()=>Et("shop-btn").click(),60)):Et("shop-btn").click());else if(e==="cafe"){Yt&&Ko();let t=Di.find(n=>n.id==="cafe");t&&(Pe.x=t.x-1.55,Pe.z=t.z,Pe.yaw=Pe.face=Math.PI/2,Pe.pitch=os?Dh:-.06,Yt=null),setTimeout(()=>Et("order-btn").click(),60)}else if(e==="diary")Yt||ZS(JS()),mi.open();else if(e==="photo"){Yt&&Ko();let t=Zo[0];if(!t)return;Pe.x=t.c.x-1.2,Pe.z=t.c.z,Pe.yaw=Pe.face=Math.PI/2,Et("photo-btn").click()}else e==="mine"&&rs.openMine()}));Et("look-toggle").addEventListener("click",i=>{if(i.currentTarget.blur(),Dn&&Dn.active)return;let e=rr[(rr.indexOf(Zt.look)+1)%rr.length];Zt.setLook(e),Zt.root.traverse(t=>{t.isMesh&&(t.frustumCulled=!1)});try{localStorage.setItem("sh-look",e)}catch{}si(`\u{1F457} \uCE90\uB9AD\uD130\uB97C \uBC14\uAFE8\uC5B4\uC694 \xB7 ${o0[e]}`)});Et("mjp-btn").addEventListener("click",i=>{i.currentTarget.blur(),un.menu("shop")});Et("cafegame-btn").addEventListener("click",i=>{i.currentTarget.blur(),un.menu("cafe")});Et("hint-toggle").addEventListener("click",i=>{let e=Et("hint");e.hidden=!e.hidden,i.currentTarget.blur()});var W0=Et("view-toggle");function Td(i){os=i,Zt.root.visible=i,Pe.pitch=i?Dh:-.06,Ps=.5,W0.querySelector(".lbl").textContent=i?"1\uC778\uCE6D":"3\uC778\uCE6D"}W0.addEventListener("click",i=>{Td(!os),i.currentTarget.blur()});addEventListener("keydown",i=>{i.code==="KeyV"&&fa&&!(i.target.closest&&i.target.closest("input,textarea"))&&Td(!os)});var L0;function si(i){Ke.toast.textContent=i,Ke.toast.classList.add("on"),clearTimeout(L0),L0=setTimeout(()=>Ke.toast.classList.remove("on"),3600)}var xt=Ke.map?Ke.map.getContext("2d"):null,dd=null;function QS(){if(!Ke.map||Ke.map.hidden||!pt)return;if(!dd){let s=pt.floor.map(l=>l[0]),r=pt.floor.map(l=>l[1]),a=[Math.min(...s),Math.min(...r),Math.max(...s),Math.max(...r)],o=Math.min((Ke.map.width-24)/(a[2]-a[0]),(Ke.map.height-24)/(a[3]-a[1]));dd={s:o,mp:(l,c)=>[Ke.map.width/2+(l-(a[0]+a[2])/2)*o,Ke.map.height/2+(c-(a[1]+a[3])/2)*o]}}let{s:i,mp:e}=dd;xt.clearRect(0,0,Ke.map.width,Ke.map.height),xt.beginPath(),pt.floor.forEach(([s,r],a)=>xt[a?"lineTo":"moveTo"](...e(s,r))),xt.closePath(),xt.fillStyle="#dff3e8",xt.fill(),xt.strokeStyle="#8fc7aa",xt.lineWidth=3,xt.stroke();for(let[s,r,a,o,l,c]of pt.icons)xt.save(),xt.translate(...e(s,r)),xt.rotate(l),xt.fillStyle=pd[c]||"#"+pt.colors[c],xt.strokeStyle="#a89cc4",xt.lineWidth=1.2,xt.fillRect(-a*i/2,-o*i/2,a*i,o*i),xt.strokeRect(-a*i/2,-o*i/2,a*i,o*i),xt.restore();xt.textAlign="center",xt.font="700 19px system-ui, sans-serif",xt.fillStyle="#5d4f7c";for(let[s,[r,a]]of pt.labels)xt.fillText(s,...e(r,a));let[t,n]=e(Pe.x,Pe.z);xt.save(),xt.translate(t,n),xt.rotate(-Pe.yaw),xt.beginPath(),xt.moveTo(0,15),xt.lineTo(-9,-8),xt.lineTo(9,-8),xt.closePath(),xt.fillStyle="#9a72d8",xt.fill(),xt.lineWidth=2.5,xt.strokeStyle="#fff",xt.stroke(),xt.restore()}function Nh(){let i=Ke.canvas.clientWidth,e=Ke.canvas.clientHeight;kt.setSize(i,e,!1),typeof ri!="undefined"&&(ri.setPixelRatio(kt.getPixelRatio()),ri.setSize(i,e)),vt.aspect=i/e;let t=74*Math.PI/180,n=2*Math.atan(Math.tan(t/2)/vt.aspect)*180/Math.PI;vt.fov=Math.min(92,Math.max(64,n)),vt.updateProjectionMatrix()}var ri=new Th(kt,new Ut(1,1,{type:Ht,samples:Kn?2:4}));ri.addPass(new Eh(zt,vt));var as=new ca(zt,vt,1,1);as.output=ca.OUTPUT.Default;as.blendIntensity=1;as.updateGtaoMaterial({radius:.55,distanceExponent:1.3,thickness:1.4,scale:1.25,samples:Kn?8:14});as.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:Kn?8:16});ri.addPass(as);{let i=as.render.bind(as);as.render=(...e)=>{for(let t of Yf)t.visible=!1;i(...e);for(let t of Yf)t.visible=!0}}var Ed=new ha(new pe(256,256),.3,.5,2);ri.addPass(Ed);ri.addPass(new Rh);var X0=new la({uniforms:{tDiffuse:{value:null},saturation:{value:1.12},contrast:{value:1.05},warmth:{value:.025},lift:{value:.012},vignette:{value:.22}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`});ri.addPass(X0);var kn=Kn?"mid":"high";try{kn=localStorage.getItem("sh-quality")||kn}catch{}var q0=Et("quality-toggle");function wd(){as.enabled=kn==="high",Ed.enabled=kn!=="low",kt.shadowMap.enabled=kn!=="low",zt.traverse(i=>{i.material&&i.material.needsUpdate!==void 0&&(i.material.needsUpdate=!0)}),kt.shadowMap.needsUpdate=!0,q0.querySelector(".lbl").textContent={high:"\uACE0\uD654\uC9C8",mid:"\uBCF4\uD1B5",low:"\uAC00\uBCCD\uAC8C"}[kn]}q0.addEventListener("click",i=>{kn={high:"mid",mid:"low",low:"high"}[kn];try{localStorage.setItem("sh-quality",kn)}catch{}wd(),Nh(),i.currentTarget.blur()});wd();new ResizeObserver(Nh).observe(Ke.canvas);Nh();var Yt=null,Ni=null,Ch=new Es,D0=new pe;function eb(i,e){if(!pt||!pt.seats||!Ni)return;let t=Ke.canvas.getBoundingClientRect();if(D0.set((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),Ch.setFromCamera(D0,vt),un&&un.owner&&Ch.intersectObject(un.owner.c.root,!0).length){un.menu("shop");return}if(un&&un.cafeStaff&&Ch.intersectObject(un.cafeStaff.c.root,!0).length){un.menu("cafe");return}let n=Ch.intersectObject(Ni,!0)[0];if(!n)return;let s=null,r=.6;for(let a of pt.seats){let o=Math.hypot(a[0]-n.point.x,a[1]-n.point.z);o<r&&n.point.y<1.1&&(r=o,s=a)}s&&(Yt=s,Pe.x=s[0],Pe.z=s[1],Pe.face=s[2],zn.set(0,0),si("\uC758\uC790\uC5D0 \uC549\uC558\uC5B4\uC694 \u{1FA91} \uC6C0\uC9C1\uC774\uBA74 \uC77C\uC5B4\uB098\uC694"),Yn&&Yn.onSit(s))}function Ko(){let i=Yt;Yt=null,Yn&&Yn.onStand();let e=i[2]+Math.PI;for(let t of[.45,.6,.8,1,1.25])for(let n of[0,.5,-.5,1,-1,1.6,-1.6]){let s=i[0]+Math.sin(e+n)*t,r=i[1]+Math.cos(e+n)*t;if(ur(s,r)){Pe.x=s,Pe.z=r;return}}}var tb=[/^Perimeter wall/,/^Guest floor$/,/^Ceiling$/,/^Display hall - angled partition$/,/^Cafe partition$/,/^Corridor partition$/,/^Corridor return$/,/^Cafe end wall/,/^Round column/,/^Shop counter - (staff area room|back wall|side wall)/],nb=1.12,vd={value:0};async function ib(i){let e=await fetch("light.json");if(!e.ok)return;let t=await e.json(),n=c=>{let h=atob(c),u=new Uint8Array(h.length);for(let f=0;f<h.length;f++)u[f]=h.charCodeAt(f);return u},s=await new Do().parseAsync(n(t.shell).buffer,""),r=await createImageBitmap(new Blob([n(t.lightmap)],{type:"image/jpeg"}),{imageOrientation:"none"}),a=new Kt(r);a.flipY=!1,a.colorSpace=Rt,a.needsUpdate=!0,a.anisotropy=4;{let c=document.createElement("canvas");c.width=c.height=64;let h=c.getContext("2d");h.drawImage(r,0,0,64,64);let u=h.getImageData(0,0,64,64).data,f=[];for(let p=0;p<u.length;p+=4)f.push(Math.pow((u[p]*.2126+u[p+1]*.7152+u[p+2]*.0722)/255,2.2));f.sort((p,g)=>p-g),vd.value=f[Math.floor(f.length*.9)]*.85}let o=c=>{c.uniforms.lmFloor=vd,c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
uniform float lmFloor;`).replace("reflectedLight.indirectDiffuse += lightMapTexel.rgb","reflectedLight.indirectDiffuse += max(lightMapTexel.rgb, vec3(lmFloor))")},l=new Map;s.scene.traverse(c=>{if(!c.isMesh)return;let h=Array.isArray(c.material)?c.material[0]:c.material,u=h.name;if(!l.has(u)){let f=md(h),p=new Ot({color:f.color,lightMap:a,lightMapIntensity:t.gain||nb,side:Ft});p.name=u,f.onBeforeCompile&&u==="floor"?p.onBeforeCompile=f.onBeforeCompile:p.onBeforeCompile=o,l.set(u,p)}c.material=l.get(u),c.castShadow=!1,c.receiveShadow=!1}),i.traverse(c=>{let h=(c.name||"").replace(/_/g," ");tb.some(u=>u.test(h))&&c.traverse(u=>{u.isMesh&&(u.visible=!1)})}),zt.add(s.scene),kt.shadowMap.needsUpdate=!0}function sb(){Ni.updateMatrixWorld(!0);let i=new Es,e=new B,t=new B;for(let n of pt.seats){let s=null;for(let r of[.55,.65,.75])for(let a=0;a<72;a++){let o=a*Math.PI/36;t.set(Math.sin(o),0,Math.cos(o)),e.set(n[0],r,n[1]),i.set(e,t),i.far=.9;let l=i.intersectObject(Ni,!0).find(c=>c.object.visible&&!/chair|mint|trim|pink$/i.test(c.object.material&&c.object.material.name||""));l&&(!s||l.distance<s.d-.01)&&(s={d:l.distance,a:o})}s&&s.d<.8&&(n[2]=Math.atan2(Math.sin(s.a),Math.cos(s.a)))}}function rb(i){Ni.updateMatrixWorld(!0);let e=s=>/^Cafe end - cafe order counter/.test((s&&s.name||"").replace(/_/g," ")),t=[];Ni.traverse(s=>{e(s)&&!e(s.parent)&&t.push(s)});for(let s of t){let r=s.parent.worldToLocal(new B(0,0,0)),a=s.parent.worldToLocal(new B(i,0,0));s.position.add(a.sub(r)),s.updateMatrix(),s.updateMatrixWorld(!0)}for(let s of pt.blocks)Math.abs(s[0]-5.246)<.05&&Math.abs(s[1]-4.508)<.05&&(s[0]+=i);let n=(pt.npcs||[]).find(s=>s.id==="cafe");n&&(n.x=5.55)}var yd=[{p:[6.2,1.5,-4.6],t:[2.5,.8,-1.2]},{p:[.9,1.6,3],t:[-1.5,.7,-2]},{p:[3.4,1.5,3.6],t:[-3,.7,6.2]},{p:[3,1.5,4.5],t:[5.6,1,4.5]},{p:[5.4,1.5,-2.9],t:[4.6,.9,-5.8]},{p:[-6.4,1.6,6],t:[0,.7,2]},{p:[-2,1.7,-3],t:[3,.7,-5.2]},{p:[2.5,2.2,-.5],t:[-4,.4,4]},{p:[-1,1.6,5.8],t:[3,.8,1]},{p:[7,1.5,-2.6],t:[7,.9,2]}];function N0(i){let e=yd[i%yd.length],t=960,n=720,s={p:vt.position.clone(),q:vt.quaternion.clone(),fov:vt.fov,vis:Zt.root.visible};Zt.root.visible=!1,kt.setSize(t,n,!1),ri.setSize(t,n),vt.aspect=t/n,vt.fov=62,vt.updateProjectionMatrix(),vt.position.set(...e.p),vt.lookAt(...e.t),vt.updateMatrixWorld(),kn!=="low"?ri.render():kt.render(zt,vt);let r=document.createElement("canvas");return r.width=t,r.height=n,r.getContext("2d").drawImage(kt.domElement,0,0,t,n),vt.position.copy(s.p),vt.quaternion.copy(s.q),vt.fov=s.fov,Zt.root.visible=s.vis,Nh(),r}var Zo=[];function ab(i){i.updateMatrixWorld(!0),i.traverse(e=>{if(!e.isMesh||!e.material||e.material.name!=="mirror")return;let t=e,n=!1;for(;t;)/leaning.mirror/i.test(t.name.replace(/_/g," "))&&(n=!0),t=t.parent;if(!n)return;let s=new pn().setFromObject(e),r=s.getCenter(new B),a=s.getSize(new B),o=.12,l=new B(-Math.cos(o),Math.sin(o),0),c=Math.max(a.x,a.z)-.02,h=a.y/Math.cos(o)-.02,u=Math.min(window.devicePixelRatio||1,2),f=new $o(new Yi(c,h),{textureWidth:Math.round((Kn?384:640)*u*(c/h)*2),textureHeight:Math.round((Kn?384:640)*u),color:14674158,clipBias:.003});f.position.copy(r).addScaledVector(l,.02),e.visible=!1,f.lookAt(f.position.clone().add(l)),zt.add(f),Zo.push({ref:f,c:r,pane:e})})}function $0(){for(let i of Zo)i.ref.visible=(kn!=="low"||Dn&&Dn.active)&&Math.hypot(Pe.x-i.c.x,Pe.z-i.c.z)<7,i.pane.visible=!i.ref.visible}var Di=[],ob={cafe:{opt:{look:"cafe"},say:"\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615"},shop:{opt:{look:"shop"},say:"\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}"}};function lb(){for(let i of pt.npcs||[]){let e=ob[i.id];if(!e)continue;let t=Kf(z0,e.opt);t.root.position.set(i.x,0,i.z),t.root.rotation.y=i.face,t.root.scale.setScalar(1.12),t.root.position.y=i.id==="shop"?.15:.2,zt.add(t.root);let n=document.createElement("div");n.className="bubble",n.textContent=e.say,Et("bubbles").appendChild(n),Di.push({...i,c:t,el:n,yaw:0})}}var ua=new B;function cb(i,e){for(let t of Di){t.c.animate(i,t.speed||0,e+t.id.length),t.y!==void 0&&(t.c.root.position.set(t.x,t.y,t.z),t.c.root.rotation.y=t.face),t.carry&&(t.c.arms[0].rotation.x=t.c.arms[1].rotation.x=-1.35);let n=Pe.x-t.x,s=Pe.z-t.z,r=Math.hypot(n,s),a=0;if(r<4&&!t.speed&&(a=Math.atan2(n,s)-t.face,a=Math.atan2(Math.sin(a),Math.cos(a)),a=Ei.clamp(a,-.9,.9)),t.yaw+=(a-t.yaw)*Math.min(1,i*5),t.c.head.rotation.y=t.yaw,t.c.head.rotation.x+=((r<4?-.22:0)-t.c.head.rotation.x)*Math.min(1,i*4),r<2.8){ua.set(t.x,1.6,t.z).project(vt);let l=Ke.canvas.getBoundingClientRect(),c=ua.z<1&&Math.abs(ua.x)<1.1&&Math.abs(ua.y)<1.1;t.el.style.transform=`translate(${(ua.x*.5+.5)*l.width}px, ${(-ua.y*.5+.5)*l.height}px) translate(-50%, -100%)`,t.el.classList.toggle("on",c)}else t.el.classList.remove("on")}}var zn=new pe,U0=performance.now(),O0=0;function hb(){let i=jo();return Yt?"\u{1FA91} \uC549\uC544\uC11C \uC26C\uB294 \uC911":Pe.z>1.75*i?"\u2615 \uCE74\uD398 \uC88C\uC11D":Pe.x>3.2*i&&Pe.z<-1.6*i?"\u{1F6AA} \uC785\uAD6C":Pe.x>3*i?"\u{1F380} \uBCF5\uB3C4":"\u{1F9F8} \uC9C4\uC5F4\uB300 \uC0AC\uC774"}function Y0(i){let e=Math.min((i-U0)/1e3,.05);if(U0=i,Jo){if(fa){let o=(wn.has("ArrowLeft")||wn.has("KeyQ")?1:0)-(wn.has("ArrowRight")||wn.has("KeyE")?1:0);Pe.yaw+=o*1.7*e;let l=(wn.has("KeyW")||wn.has("ArrowUp")?1:0)-(wn.has("KeyS")||wn.has("ArrowDown")?1:0),c=(wn.has("KeyD")?1:0)-(wn.has("KeyA")?1:0);fn.id!==null&&(l=-fn.y,c=fn.x);let h=Math.hypot(l,c);h>1&&(l/=h,c/=h),Yt&&h>.25&&Ko(),(Yt||I0())&&(l=0,c=0);let u=wn.has("ShiftLeft")||wn.has("ShiftRight")?1.6:1,f=Math.sin(Pe.yaw),p=Math.cos(Pe.yaw),g=(l*f-c*p)*C0*u,y=(l*p+c*f)*C0*u,m=1-Math.exp(-e*12);zn.x+=(g-zn.x)*m,zn.y+=(y-zn.y)*m;let x=zn.x*e,_=zn.y*e;Math.abs(x)+Math.abs(_)>1e-5&&(ur(Pe.x+x,Pe.z+_)?(Pe.x+=x,Pe.z+=_):(ur(Pe.x+x,Pe.z)?Pe.x+=x:zn.x=0,ur(Pe.x,Pe.z+_)?Pe.z+=_:zn.y=0));let b=Math.hypot(zn.x,zn.y);if(b>.15){let w=Math.atan2(zn.x,zn.y)-Pe.face;w=Math.atan2(Math.sin(w),Math.cos(w)),Pe.face+=w*Math.min(1,e*12)}Zt.animate(e,b,i/1e3,!!Yt),Yn&&Yn.update(e,Pe,Yt),xd&&xd.update(e,i/1e3),un&&un.update(Pe,Yt),hr&&hr.update(e,i/1e3),Li&&Li.update(e,i/1e3),rs&&rs.update(Pe,Yt),Dn&&(Dn.update(Yt),Dn.applyPose(i/1e3)),Et("diary-btn").hidden=!Yt||!mi||mi.isOpen,Et("actions").style.visibility=I0()||Li&&Li.active||hr&&hr.active?"hidden":"",cb(e,i/1e3),$0(),!P0&&Pe.z>2*jo()&&Pe.x<3.6*jo()&&(P0=!0,si("\uCE74\uD398 \uC88C\uC11D\uC5D0 \uB3C4\uCC29\uD588\uC5B4\uC694 \u2615"))}let t=Math.sin(Pe.pitch),n=Math.cos(Pe.pitch),s=Math.sin(Pe.yaw),r=Math.cos(Pe.yaw);if(Zt.root.position.set(Pe.x,0,Pe.z),Zt.root.rotation.y=Pe.face,Dn&&Dn.camera())Zt.root.visible=!0;else if(Li&&Li.active)vt.position.set(Pe.x,ud,Pe.z),vt.lookAt(Pe.x+s*n,ud+t,Pe.z+r*n),Zt.root.visible=!1,Li.place(vt,Pe.yaw);else if(os){let o=Pe.x,l=.9,c=Pe.z,h=-s,u=-r,f=k0,p=n*f,g=p;for(let _=.2;_<=p;_+=.08)if(!YS(o+h*_,c+u*_)){g=Math.max(.15,_-.15);break}Ps+=(g-Ps)*Math.min(1,e*(g<Ps?18:3));let y=(pt.ceiling||2.65)-.25,m=Math.min(y,l-t*f);vt.position.set(o+h*Ps,m,c+u*Ps);let x=Ei.clamp(1-Ps/p,0,1);vt.lookAt(o+s*x*1.8,l+.05+x*.15,c+r*x*1.8),x>.7&&(vt.position.y=Math.min(y+.03,m+.1)),Zt.root.visible=!0}else{let o=Yt?1.02:ud;vt.position.set(Pe.x,o,Pe.z),vt.lookAt(Pe.x+s*n,o+t,Pe.z+r*n)}kn!=="low"?ri.render():kt.render(zt,vt),Dn&&Dn.afterRender(kt.domElement);let a=hb();Ke.where.textContent!==a&&(Ke.where.textContent=a),(O0=(O0+1)%2)===0&&QS()}requestAnimationFrame(Y0)}requestAnimationFrame(Y0);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
