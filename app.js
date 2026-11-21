(()=>{var Np=0,Ru=1,Up=2;var Js=1,Fp=2,Yr=3,Ei=0,gn=1,Bt=2,hn=0,Kr=1,qn=2,Cu=3,Pu=4,cc=5;var ti=100,Op=101,Bp=102,kp=103,zp=104,Qs=200,Hp=201,Gp=202,Vp=203,Iu=204,Lu=205,po=206,Wp=207,mo=208,Xp=209,qp=210,$p=211,Yp=212,Kp=213,jp=214,Dl=0,Nl=1,Ul=2,Lr=3,Fl=4,Ol=5,Bl=6,kl=7,hc=0,Zp=1,Jp=2,wi=0,go=1,xo=2,vo=3,_o=4,yo=5,Mo=6,er=7,uu="attached",Qp="detached",Du=300,tr=301,jr=302,uc=303,fc=304,Sn=1e3,Zn=1001,Dr=1002,Ut=1003,dc=1004;var nr=1005;var nn=1006,Zr=1007;var ni=1008;var bn=1009,Nu=1010,Uu=1011,Jr=1012,pc=1013,di=1014,$n=1015,Gt=1016,mc=1017,gc=1018,is=1020,Fu=35902,Ou=35899,Bu=1021,ku=1022,On=1023,Xi=1026,pi=1027,xc=1028,vc=1029,As=1030,_c=1031;var yc=1033,So=33776,bo=33777,To=33778,Eo=33779,Mc=35840,Sc=35841,bc=35842,Tc=35843,Ec=36196,wc=37492,Ac=37496,Rc=37488,Cc=37489,wo=37490,Pc=37491,Ic=37808,Lc=37809,Dc=37810,Nc=37811,Uc=37812,Fc=37813,Oc=37814,Bc=37815,kc=37816,zc=37817,Hc=37818,Gc=37819,Vc=37820,Wc=37821,Xc=36492,qc=36494,$c=36495,Yc=36283,Kc=36284,Ao=36285,jc=36286;var Hs=2300,Gs=2301,Il=2302,fu=2303,du=2400,pu=2401,mu=2402,em=2500;var zu=0,Ro=1,Qr=2,tm=3200;var ea=0,nm=1,ss="",Rt="srgb",Pn="srgb-linear",La="linear",Mt="srgb";var Ll=7680;var im=519,sm=512,rm=513,am=514,Hu=515,om=516,lm=517,Gu=518,Vu=519,Wu=35044;var Xu="300 es",Jn=2e3,Nr=2001;function Q0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function eg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cm(){let i=Ur("canvas");return i.style.display="block",i}var Bd={},Fr=null;function Da(...i){let e="THREE."+i.shift();Fr?Fr("log",e,...i):console.log(e,...i)}function hm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=hm(i);let e="THREE."+i.shift();if(Fr)Fr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=hm(i);let e="THREE."+i.shift();if(Fr)Fr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function zs(...i){let e=i.join(" ");e in Bd||(Bd[e]=!0,$e(...i))}function um(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var fm={[Dl]:Dl,[Ul]:Bl,[Fl]:Fl,[Lr]:Ol,[Nl]:Nl,[Bl]:Ul,[kl]:kl,[Ol]:Lr},Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kd=1234567,Ra=Math.PI/180,Vs=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function qu(i,e){return(i%e+e)%e}function tg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ng(i,e,t){return i!==e?(t-i)/(e-i):0}function Ca(i,e,t){return(1-t)*i+t*e}function ig(i,e,t,n){return Ca(i,e,1-Math.exp(-t*n))}function sg(i,e=1){return e-Math.abs(qu(i,e*2)-e)}function rg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ag(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function og(i,e){return i+Math.floor(Math.random()*(e-i+1))}function lg(i,e){return i+Math.random()*(e-i)}function cg(i){return i*(.5-Math.random())}function hg(i){i!==void 0&&(kd=i);let e=kd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ug(i){return i*Ra}function fg(i){return i*Vs}function dg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function pg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $u(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*h,o*c);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Yu(i,e){if(e.constructor===Float32Array)return i;let t=Zc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Ku(i,e){if(e.constructor===Float32Array)return i;let t=Zc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ai={DEG2RAD:Ra,RAD2DEG:Vs,generateUUID:mi,clamp:ut,euclideanModulo:qu,mapLinear:tg,inverseLerp:ng,lerp:Ca,damp:ig,pingpong:sg,smoothstep:rg,smootherstep:ag,randInt:og,randFloat:lg,randFloatSpread:cg,seededRandom:hg,degToRad:ug,radToDeg:fg,isPowerOfTwo:dg,ceilPowerOfTwo:pg,floorPowerOfTwo:$u,setQuaternionFromProperEuler:mg,normalize:Ku,denormalize:Yu},tf=class tf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tf.prototype.isVector2=!0;var pe=tf,Wn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],v=r[a+2],M=r[a+3];if(u!==M||l!==f||c!==p||h!==v){let g=l*f+c*p+h*v+u*M;g<0&&(f=-f,p=-p,v=-v,M=-M,g=-g);let x=1-o;if(g<.9995){let m=Math.acos(g),S=Math.sin(m);x=Math.sin(x*m)/S,o=Math.sin(o*m)/S,l=l*x+f*o,c=c*x+p*o,h=h*x+v*o,u=u*x+M*o}else{l=l*x+f*o,c=c*x+p*o,h=h*x+v*o,u=u*x+M*o;let m=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=m,c*=m,h*=m,u*=m}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+h*u+l*p-c*f,e[t+1]=l*v+h*f+c*u-o*p,e[t+2]=c*v+h*p+o*f-l*u,e[t+3]=h*v-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u-f*p*v;break;case"YXZ":this._x=f*h*u+c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u+f*p*v;break;case"ZXY":this._x=f*h*u-c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u-f*p*v;break;case"ZYX":this._x=f*h*u-c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u+f*p*v;break;case"YZX":this._x=f*h*u+c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u-f*p*v;break;case"XZY":this._x=f*h*u-c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u+f*p*v;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nf=class nf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oh.copy(this).projectOnVector(e),this.sub(Oh)}reflect(e){return this.sub(Oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nf.prototype.isVector3=!0;var G=nf,Oh=new G,zd=new Wn,sf=class sf{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],v=n[8],M=s[0],g=s[3],x=s[6],m=s[1],S=s[4],y=s[7],w=s[2],T=s[5],d=s[8];return r[0]=a*M+o*m+l*w,r[3]=a*g+o*S+l*T,r[6]=a*x+o*y+l*d,r[1]=c*M+h*m+u*w,r[4]=c*g+h*S+u*T,r[7]=c*x+h*y+u*d,r[2]=f*M+p*m+v*w,r[5]=f*g+p*S+v*T,r[8]=f*x+p*y+v*d,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,v=t*u+n*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return e[0]=u*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=f*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bh.makeScale(e,t)),this}rotate(e){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bh.makeRotation(-e)),this}translate(e,t){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sf.prototype.isMatrix3=!0;var st=sf,Bh=new st,Hd=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gd=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gg(){let i={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?La:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pn]:{primaries:e,whitePoint:n,transfer:La,toXYZ:Hd,fromXYZ:Gd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Hd,fromXYZ:Gd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}var ct=gg();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var dr,zl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{dr===void 0&&(dr=Ur("canvas")),dr.width=e.width,dr.height=e.height;let s=dr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Ur("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xg=0,Or=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kh(s[a].image)):r.push(kh(s[a]))}else r=kh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function kh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?zl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var vg=0,zh=new G,jt=class i extends Mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Zn,s=Zn,r=nn,a=ni,o=On,l=bn,c=i.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=mi(),this.name="",this.source=new Or(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Du;jt.DEFAULT_ANISOTROPY=1;var rf=class rf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],v=l[9],M=l[2],g=l[6],x=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,y=(p+1)/2,w=(x+1)/2,T=(h+f)/4,d=(u+M)/4,_=(v+g)/4;return S>y&&S>w?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=d/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=d/r,s=_/r),this.set(n,s,r,t),this}let m=Math.sqrt((g-v)*(g-v)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(u-M)/m,this.z=(f-h)/m,this.w=Math.acos((c+p+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rf.prototype.isVector4=!0;var St=rf,Hl=class extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new jt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Or(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends Hl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Na=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Gl=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var lc=class lc{constructor(e,t,n,s,r,a,o,l,c,h,u,f,p,v,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,p,v,M,g)}set(e,t,n,s,r,a,o,l,c,h,u,f,p,v,M,g){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=f,x[3]=p,x[7]=v,x[11]=M,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),a=1/pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,v=o*h,M=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+v*c,t[5]=f-M*c,t[9]=-o*l,t[2]=M-f*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,v=c*h,M=c*u;t[0]=f+M*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-v,t[6]=M+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,v=c*h,M=c*u;t[0]=f-M*o,t[4]=-a*u,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*h,t[9]=M-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*u,v=o*h,M=o*u;t[0]=l*h,t[4]=v*c-p,t[8]=f*c+M,t[1]=l*u,t[5]=M*c+f,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,v=o*l,M=o*c;t[0]=l*h,t[4]=M-f*u,t[8]=v*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+v,t[10]=f-M*u}else if(e.order==="XZY"){let f=a*l,p=a*c,v=o*l,M=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+M,t[5]=a*h,t[9]=p*u-v,t[2]=v*u-p,t[6]=o*h,t[10]=M*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_g,e,yg)}lookAt(e,t,n){let s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),us.crossVectors(n,Hn),us.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),us.crossVectors(n,Hn)),us.normalize(),tl.crossVectors(Hn,us),s[0]=us.x,s[4]=tl.x,s[8]=Hn.x,s[1]=us.y,s[5]=tl.y,s[9]=Hn.y,s[2]=us.z,s[6]=tl.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],v=n[2],M=n[6],g=n[10],x=n[14],m=n[3],S=n[7],y=n[11],w=n[15],T=s[0],d=s[4],_=s[8],I=s[12],A=s[1],C=s[5],P=s[9],O=s[13],b=s[2],D=s[6],B=s[10],U=s[14],W=s[3],V=s[7],F=s[11],H=s[15];return r[0]=a*T+o*A+l*b+c*W,r[4]=a*d+o*C+l*D+c*V,r[8]=a*_+o*P+l*B+c*F,r[12]=a*I+o*O+l*U+c*H,r[1]=h*T+u*A+f*b+p*W,r[5]=h*d+u*C+f*D+p*V,r[9]=h*_+u*P+f*B+p*F,r[13]=h*I+u*O+f*U+p*H,r[2]=v*T+M*A+g*b+x*W,r[6]=v*d+M*C+g*D+x*V,r[10]=v*_+M*P+g*B+x*F,r[14]=v*I+M*O+g*U+x*H,r[3]=m*T+S*A+y*b+w*W,r[7]=m*d+S*C+y*D+w*V,r[11]=m*_+S*P+y*B+w*F,r[15]=m*I+S*O+y*U+w*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],v=e[3],M=e[7],g=e[11],x=e[15],m=l*p-c*f,S=o*p-c*u,y=o*f-l*u,w=a*p-c*h,T=a*f-l*h,d=a*u-o*h;return t*(M*m-g*S+x*y)-n*(v*m-g*w+x*T)+s*(v*S-M*w+x*d)-r*(v*y-M*T+g*d)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],v=e[12],M=e[13],g=e[14],x=e[15],m=t*o-n*a,S=t*l-s*a,y=t*c-r*a,w=n*l-s*o,T=n*c-r*o,d=s*c-r*l,_=h*M-u*v,I=h*g-f*v,A=h*x-p*v,C=u*g-f*M,P=u*x-p*M,O=f*x-p*g,b=m*O-S*P+y*C+w*A-T*I+d*_;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/b;return e[0]=(o*O-l*P+c*C)*D,e[1]=(s*P-n*O-r*C)*D,e[2]=(M*d-g*T+x*w)*D,e[3]=(f*T-u*d-p*w)*D,e[4]=(l*A-a*O-c*I)*D,e[5]=(t*O-s*A+r*I)*D,e[6]=(g*y-v*d-x*S)*D,e[7]=(h*d-f*y+p*S)*D,e[8]=(a*P-o*A+c*_)*D,e[9]=(n*A-t*P-r*_)*D,e[10]=(v*T-M*y+x*m)*D,e[11]=(u*y-h*T-p*m)*D,e[12]=(o*I-a*C-l*_)*D,e[13]=(t*C-n*I+s*_)*D,e[14]=(M*S-v*w-g*m)*D,e[15]=(h*w-u*S+f*m)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,v=r*u,M=a*h,g=a*u,x=o*u,m=l*c,S=l*h,y=l*u,w=n.x,T=n.y,d=n.z;return s[0]=(1-(M+x))*w,s[1]=(p+y)*w,s[2]=(v-S)*w,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(f+x))*T,s[6]=(g+m)*T,s[7]=0,s[8]=(v+S)*d,s[9]=(g-m)*d,s[10]=(1-(f+M))*d,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=pr.set(s[0],s[1],s[2]).length(),o=pr.set(s[4],s[5],s[6]).length(),l=pr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ci.copy(this);let c=1/a,h=1/o,u=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,t.setFromRotationMatrix(ci),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Jn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),v,M;if(l)v=r/(a-r),M=a*r/(a-r);else if(o===Jn)v=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Nr)v=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Jn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),v,M;if(l)v=1/(a-r),M=a/(a-r);else if(o===Jn)v=-2/(a-r),M=-(a+r)/(a-r);else if(o===Nr)v=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};lc.prototype.isMatrix4=!0;var Ye=lc,pr=new G,ci=new Ye,_g=new G(0,0,0),yg=new G(1,1,1),us=new G,tl=new G,Hn=new G,Vd=new Ye,Wd=new Wn,Si=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mg=0,Xd=new G,mr=new Wn,Oi=new Ye,nl=new G,ma=new G,Sg=new G,bg=new Wn,qd=new G(1,0,0),$d=new G(0,1,0),Yd=new G(0,0,1),Kd={type:"added"},Tg={type:"removed"},gr={type:"childadded",child:null},Hh={type:"childremoved",child:null},Lt=class i extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new G,t=new Si,n=new Wn,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new st}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(qd,e)}rotateY(e){return this.rotateOnAxis($d,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,t){return Xd.copy(e).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qd,e)}translateY(e){return this.translateOnAxis($d,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nl.copy(e):nl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(ma,nl,this.up):Oi.lookAt(nl,ma,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(Oi),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kd),gr.child=e,this.dispatchEvent(gr),gr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tg),Hh.child=e,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kd),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,Sg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,bg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new G(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Eg={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let g=t.getJointPose(M,n),x=this._getHandJoint(c,M);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Eg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},il={h:0,s:0,l:0};function Gh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=qu(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Gh(a,r,e+1/3),this.g=Gh(a,r,e),this.b=Gh(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=dm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return ct.workingToColorSpace(Mn.copy(this),e),Math.round(ut(Mn.r*255,0,255))*65536+Math.round(ut(Mn.g*255,0,255))*256+Math.round(ut(Mn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,s=Mn.g,r=Mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Rt){ct.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,s=Mn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(il);let n=Ca(fs.h,il.h,t),s=Ca(fs.s,il.s,t),r=Ca(fs.l,il.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Le;Le.NAMES=dm;var Ua=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ws=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=new G,Bi=new G,Vh=new G,ki=new G,xr=new G,vr=new G,jd=new G,Wh=new G,Xh=new G,qh=new G,$h=new St,Yh=new St,Kh=new St,Vi=class i{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),Bi.subVectors(n,t),Vh.subVectors(e,t);let a=hi.dot(hi),o=hi.dot(Bi),l=hi.dot(Vh),c=Bi.dot(Bi),h=Bi.dot(Vh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,v=(a*h-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return $h.setScalar(0),Yh.setScalar(0),Kh.setScalar(0),$h.fromBufferAttribute(e,t),Yh.fromBufferAttribute(e,n),Kh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector($h,r.x),a.addScaledVector(Yh,r.y),a.addScaledVector(Kh,r.z),a}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),Bi.subVectors(e,t),hi.cross(Bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),hi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;xr.subVectors(s,n),vr.subVectors(r,n),Wh.subVectors(e,n);let l=xr.dot(Wh),c=vr.dot(Wh);if(l<=0&&c<=0)return t.copy(n);Xh.subVectors(e,s);let h=xr.dot(Xh),u=vr.dot(Xh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(xr,a);qh.subVectors(e,r);let p=xr.dot(qh),v=vr.dot(qh);if(v>=0&&p<=v)return t.copy(r);let M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(vr,o);let g=h*v-p*u;if(g<=0&&u-h>=0&&p-v>=0)return jd.subVectors(r,s),o=(u-h)/(u-h+(p-v)),t.copy(s).addScaledVector(jd,o);let x=1/(g+M+f);return a=M*x,o=f*x,t.copy(n).addScaledVector(xr,a).addScaledVector(vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pn=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ui):ui.fromBufferAttribute(r,a),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sl.copy(n.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),rl.subVectors(this.max,ga),_r.subVectors(e.a,ga),yr.subVectors(e.b,ga),Mr.subVectors(e.c,ga),ds.subVectors(yr,_r),ps.subVectors(Mr,yr),Us.subVectors(_r,Mr);let t=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-Us.z,Us.y,ds.z,0,-ds.x,ps.z,0,-ps.x,Us.z,0,-Us.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-Us.y,Us.x,0];return!jh(t,_r,yr,Mr,rl)||(t=[1,0,0,0,1,0,0,0,1],!jh(t,_r,yr,Mr,rl))?!1:(al.crossVectors(ds,ps),t=[al.x,al.y,al.z],jh(t,_r,yr,Mr,rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zi=[new G,new G,new G,new G,new G,new G,new G,new G],ui=new G,sl=new pn,_r=new G,yr=new G,Mr=new G,ds=new G,ps=new G,Us=new G,ga=new G,rl=new G,al=new G,Fs=new G;function jh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fs.fromArray(i,r);let o=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=e.dot(Fs),c=t.dot(Fs),h=n.dot(Fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var en=new G,ol=new pe,wg=0,qt=class extends Mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wu,this.updateRanges=[],this.gpuType=$n,this.version=0,this._normalizationScale=e!==void 0?Zc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ol.fromBufferAttribute(this,t),ol.applyMatrix3(e),this.setXY(t,ol.x,ol.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Yu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ku(e,this.array)}};var Fa=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Oa=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ag=new pn,xa=new G,Zh=new G,Un=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ag.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);let t=xa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(Zh)),this.expandByPoint(xa.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Rg=0,jn=new Ye,Jh=new Lt,Sr=new G,Gn=new pn,va=new pn,cn=new G,At=class i extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Q0(e)?Oa:Fa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Jh.lookAt(e),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];va.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Gn.min,va.min),Gn.expandByPoint(cn),cn.addVectors(Gn.max,va.max),Gn.expandByPoint(cn)):(Gn.expandByPoint(va.min),Gn.expandByPoint(va.max))}Gn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)cn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(cn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)cn.fromBufferAttribute(o,c),l&&(Sr.fromBufferAttribute(e,c),cn.add(Sr)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new G,l[I]=new G;let h=new G,u=new G,f=new G,p=new pe,v=new pe,M=new pe,g=new G,x=new G;function m(I,A,C){c[I]=c[A]=c[C]=1,h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,C),p.fromBufferAttribute(r,I),v.fromBufferAttribute(r,A),M.fromBufferAttribute(r,C),u.sub(h),f.sub(h),v.sub(p),M.sub(p);let P=1/(v.x*M.y-M.x*v.y);isFinite(P)&&(g.copy(u).multiplyScalar(M.y).addScaledVector(f,-v.y).multiplyScalar(P),x.copy(f).multiplyScalar(v.x).addScaledVector(u,-M.x).multiplyScalar(P),o[I].add(g),o[A].add(g),o[C].add(g),l[I].add(x),l[A].add(x),l[C].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,A=S.length;I<A;++I){let C=S[I],P=C.start,O=C.count;for(let b=P,D=P+O;b<D;b+=3)m(e.getX(b+0),e.getX(b+1),e.getX(b+2))}let y=new G,w=new G,T=new G,d=new G;function _(I){T.fromBufferAttribute(s,I),d.copy(T);let A=o[I];y.copy(A),y.sub(T.multiplyScalar(T.dot(A))).normalize(),w.crossVectors(d,A);let P=w.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,P)}for(let I=0,A=n.count;I<A;++I)c[I]&&_(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,h=new G,u=new G;if(e)for(let f=0,p=e.count;f<p;f+=3){let v=e.getX(f+0),M=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let x=0;x<h;x++)f[v++]=c[p++]}return new qt(f,h,u)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wu,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Zd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Zd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Zd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=mi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Cn=new G,xs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Zc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Da("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Da("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Yu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ku(e,this.data.array)}},Qh=new G,Cg=new G,Pg=new st,Vn=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Qh.subVectors(n,t).cross(Cg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Qh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pg.getNormalMatrix(e),s=this.coplanarPoint(Qh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ig=0,mn=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Kr,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Lu,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ll,this.stencilZFail=Ll,this.stencilZPass=Ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},zr=class extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},br,_a=new G,Tr=new G,Er=new G,wr=new pe,ya=new pe,pm=new Ye,ll=new G,Ma=new G,cl=new G,Jd=new pe,eu=new pe,Qd=new pe,Ba=class extends Lt{constructor(e=new zr){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xs(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new xs(n,3,0,!1)),br.setAttribute("uv",new xs(n,2,3,!1))}this.geometry=br,this.material=e,this.center=new pe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Tr.setFromMatrixScale(this.matrixWorld),pm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Tr.multiplyScalar(-Er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;hl(ll.set(-.5,-.5,0),Er,a,Tr,s,r),hl(Ma.set(.5,-.5,0),Er,a,Tr,s,r),hl(cl.set(.5,.5,0),Er,a,Tr,s,r),Jd.set(0,0),eu.set(1,0),Qd.set(1,1);let o=e.ray.intersectTriangle(ll,Ma,cl,!1,_a);if(o===null&&(hl(Ma.set(-.5,.5,0),Er,a,Tr,s,r),eu.set(0,1),o=e.ray.intersectTriangle(ll,cl,Ma,!1,_a),o===null))return;let l=e.ray.origin.distanceTo(_a);l<e.near||l>e.far||t.push({distance:l,point:_a.clone(),uv:Vi.getInterpolation(_a,ll,Ma,cl,Jd,eu,Qd,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function hl(i,e,t,n,s,r){wr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ya.x=r*wr.x-s*wr.y,ya.y=s*wr.x+r*wr.y):ya.copy(wr),i.copy(e),i.x+=ya.x,i.y+=ya.y,i.applyMatrix4(pm)}var Hi=new G,tu=new G,ul=new G,fl=new G,vs=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){tu.copy(e).add(t).multiplyScalar(.5),ul.copy(t).sub(e).normalize(),fl.copy(this.origin).sub(tu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ul),o=fl.dot(this.direction),l=-fl.dot(ul),c=fl.lengthSq(),h=Math.abs(1-a*a),u,f,p,v;if(h>0)if(u=a*l-o,f=a*o-l,v=r*h,u>=0)if(f>=-v)if(f<=v){let M=1/h;u*=M,f*=M,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tu).addScaledVector(ul,f),p}intersectSphere(e,t){if(e.radius<0)return null;Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,p=e.z-a.z,v=t.x-a.x,M=t.y-a.y,g=t.z-a.z,x=n.x-a.x,m=n.y-a.y,S=n.z-a.z,y=Math.abs(l),w=Math.abs(c),T=Math.abs(h),d,_,I,A,C,P,O,b,D,B,U,W;if(y>=w&&y>=T?(I=l,P=u,D=v,W=x,l>=0?(d=c,_=h,A=f,C=p,O=M,b=g,B=m,U=S):(d=h,_=c,A=p,C=f,O=g,b=M,B=S,U=m)):w>=T?(I=c,P=f,D=M,W=m,c>=0?(d=h,_=l,A=p,C=u,O=g,b=v,B=S,U=x):(d=l,_=h,A=u,C=p,O=v,b=g,B=x,U=S)):(I=h,P=p,D=g,W=S,h>=0?(d=l,_=c,A=u,C=f,O=v,b=M,B=x,U=m):(d=c,_=l,A=f,C=u,O=M,b=v,B=m,U=x)),I===0)return null;let V=d/I,F=_/I,H=1/I,$=A-V*P,Q=C-F*P,k=O-V*D,z=b-F*D,N=B-V*W,K=U-F*W,X=N*z-K*k,ee=$*K-Q*N,ve=k*Q-z*$;if(s){if(X<0||ee<0||ve<0)return null}else if((X<0||ee<0||ve<0)&&(X>0||ee>0||ve>0))return null;let be=X+ee+ve;if(be===0)return null;let _e=H*(X*P+ee*D+ve*W);return(be>0?_e<0:_e>0)?null:this.at(_e/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ep=new Ye,Os=new vs,dl=new Un,tp=new G,pl=new G,ml=new G,gl=new G,nu=new G,xl=new G,np=new G,vl=new G,je=class extends Lt{constructor(e=new At,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){xl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(nu.fromBufferAttribute(u,e),a?xl.addScaledVector(nu,h):xl.addScaledVector(nu.sub(t),h))}t.add(xl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(dl.containsPoint(Os.origin)===!1&&(Os.intersectSphere(dl,tp)===null||Os.origin.distanceToSquared(tp)>(e.far-e.near)**2))&&(ep.copy(r).invert(),Os.copy(e.ray).applyMatrix4(ep),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){let g=f[v],x=a[g.materialIndex],m=Math.max(g.start,p.start),S=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,w=S;y<w;y+=3){let T=o.getX(y),d=o.getX(y+1),_=o.getX(y+2);s=_l(this,x,e,n,c,h,u,T,d,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=v,x=M;g<x;g+=3){let m=o.getX(g),S=o.getX(g+1),y=o.getX(g+2);s=_l(this,a,e,n,c,h,u,m,S,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){let g=f[v],x=a[g.materialIndex],m=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,w=S;y<w;y+=3){let T=y,d=y+1,_=y+2;s=_l(this,x,e,n,c,h,u,T,d,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=v,x=M;g<x;g+=3){let m=g,S=g+1,y=g+2;s=_l(this,a,e,n,c,h,u,m,S,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Lg(i,e,t,n,s,r,a,o){let l;if(e.side===gn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ei,o),l===null)return null;vl.copy(o),vl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(vl);return c<t.near||c>t.far?null:{distance:c,point:vl.clone(),object:i}}function _l(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,pl),i.getVertexPosition(l,ml),i.getVertexPosition(c,gl);let h=Lg(i,e,t,n,pl,ml,gl,np);if(h){let u=new G;Vi.getBarycoord(np,pl,ml,gl,u),s&&(h.uv=Vi.getInterpolatedAttribute(s,o,l,c,u,new pe)),r&&(h.uv1=Vi.getInterpolatedAttribute(r,o,l,c,u,new pe)),a&&(h.normal=Vi.getInterpolatedAttribute(a,o,l,c,u,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new G,materialIndex:0};Vi.getNormal(pl,ml,gl,f.normal),h.face=f,h.barycoord=u}return h}var Sa=new St,ip=new St,sp=new St,Dg=new St,rp=new Ye,yl=new G,iu=new Un,ap=new Ye,su=new vs,ka=class extends je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uu,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,yl),this.boundingBox.expandByPoint(yl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,yl),this.boundingSphere.expandByPoint(yl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),iu.copy(this.boundingSphere),iu.applyMatrix4(s),e.ray.intersectsSphere(iu)!==!1&&(ap.copy(s).invert(),su.copy(e.ray).applyMatrix4(ap),!(this.boundingBox!==null&&su.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,su)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qp?this.bindMatrixInverse.copy(this.bindMatrix).invert():$e("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;ip.fromBufferAttribute(s.attributes.skinIndex,e),sp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Sa.copy(t),t.set(0,0,0,0)):(Sa.set(t.x,t.y,t.z,1),t.set(0,0,0)),Sa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=sp.getComponent(r);if(a!==0){let o=ip.getComponent(r);rp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Dg.copy(Sa).applyMatrix4(rp),a)}}return t.isVector4&&(t.w=Sa.w),t.applyMatrix4(this.bindMatrixInverse)}},Hr=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Qn=class extends jt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ut,h=Ut,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},op=new Ye,Ng=new Ye,za=class i{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){$e("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Ng;op.multiplyMatrices(o,t[r]),op.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Qn(t,e,e,On,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&($e("Skeleton: No bone found with UUID:",r),a=new Hr),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},qi=class extends qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ar=new Ye,lp=new Ye,Ml=[],cp=new pn,Ug=new Ye,ba=new je,Ta=new Un,$i=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ug)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),cp.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(cp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),Ta.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(Ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(n),e.ray.intersectsSphere(Ta)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),lp.multiplyMatrices(n,Ar),ba.matrixWorld=lp,ba.raycast(e,Ml);for(let a=0,o=Ml.length;a<o;a++){let l=Ml[a];l.instanceId=r,l.object=this,t.push(l)}Ml.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qn(new Float32Array(s*this.count),s,this.count,xc,$n));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bs=new Un,Fg=new pe(.5,.5),Sl=new G,_s=class{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],v=r[8],M=r[9],g=r[10],x=r[11],m=r[12],S=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,p-h,x-v,w-m).normalize(),s[1].setComponents(c+a,p+h,x+v,w+m).normalize(),s[2].setComponents(c+o,p+u,x+M,w+S).normalize(),s[3].setComponents(c-o,p-u,x-M,w-S).normalize(),n)s[4].setComponents(l,f,g,y).normalize(),s[5].setComponents(c-l,p-f,x-g,w-y).normalize();else if(s[4].setComponents(c-l,p-f,x-g,w-y).normalize(),t===Jn)s[5].setComponents(c+l,p+f,x+g,w+y).normalize();else if(t===Nr)s[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);let t=Fg.distanceTo(e.center);return Bs.radius=.7071067811865476+t,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Sl.x=s.normal.x>0?e.max.x:e.min.x,Sl.y=s.normal.y>0?e.max.y:e.min.y,Sl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hp=new Ye,Vl=class i{constructor(){this.coordinateSystem=Jn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];hp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new _s),n[s].setFromProjectionMatrix(hp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new _s),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var ys=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wl=new G,Xl=new G,up=new Ye,Ea=new vs,bl=new Un,ru=new G,fp=new G,qs=class extends Lt{constructor(e=new At,t=new ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Wl.fromBufferAttribute(t,s-1),Xl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new ht(n,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bl.copy(n.boundingSphere),bl.applyMatrix4(s),bl.radius+=r,e.ray.intersectsSphere(bl)===!1)return;up.copy(s).invert(),Ea.copy(e.ray).applyMatrix4(up);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let M=p,g=v-1;M<g;M+=c){let x=h.getX(M),m=h.getX(M+1),S=Tl(this,e,Ea,l,x,m,M);S&&t.push(S)}if(this.isLineLoop){let M=h.getX(v-1),g=h.getX(p),x=Tl(this,e,Ea,l,M,g,v-1);x&&t.push(x)}}else{let p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let M=p,g=v-1;M<g;M+=c){let x=Tl(this,e,Ea,l,M,M+1,M);x&&t.push(x)}if(this.isLineLoop){let M=Tl(this,e,Ea,l,v-1,p,v-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Tl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Wl.fromBufferAttribute(o,s),Xl.fromBufferAttribute(o,r),t.distanceSqToSegment(Wl,Xl,ru,fp)>n)return;ru.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ru);if(!(c<e.near||c>e.far))return{distance:c,point:fp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var dp=new G,pp=new G,$s=class extends qs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)dp.fromBufferAttribute(t,s),pp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+dp.distanceTo(pp);e.setAttribute("lineDistance",new ht(n,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ha=class extends qs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Yi=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mp=new Ye,gu=new vs,El=new Un,wl=new G,Ms=class extends Lt{constructor(e=new At,t=new Yi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(s),El.radius+=r,e.ray.intersectsSphere(El)===!1)return;mp.copy(s).invert(),gu.copy(e.ray).applyMatrix4(mp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=f,M=p;v<M;v++){let g=c.getX(v);wl.fromBufferAttribute(u,g),gp(wl,g,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,M=p;v<M;v++)wl.fromBufferAttribute(u,v),gp(wl,v,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function gp(i,e,t,n,s,r,a){let o=gu.distanceSqToPoint(i);if(o<t){let l=new G;gu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ga=class extends jt{constructor(e=[],t=tr,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ei=class extends jt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends jt{constructor(e,t,n=di,s,r,a,o=Ut,l=Ut,c,h=Xi,u=1){if(h!==Xi&&h!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Or(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Va=class extends fi{constructor(e,t=di,n=tr,s,r,a=Ut,o=Ut,l,c=Xi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wa=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},kt=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function v(M,g,x,m,S,y,w,T,d,_,I){let A=y/d,C=w/_,P=y/2,O=w/2,b=T/2,D=d+1,B=_+1,U=0,W=0,V=new G;for(let F=0;F<B;F++){let H=F*C-O;for(let $=0;$<D;$++){let Q=$*A-P;V[M]=Q*m,V[g]=H*S,V[x]=b,c.push(V.x,V.y,V.z),V[M]=0,V[g]=0,V[x]=T>0?1:-1,h.push(V.x,V.y,V.z),u.push($/d),u.push(1-F/_),U+=1}}for(let F=0;F<_;F++)for(let H=0;H<d;H++){let $=f+H+D*F,Q=f+H+D*(F+1),k=f+(H+1)+D*(F+1),z=f+(H+1)+D*F;l.push($,Q,z),l.push(Q,k,z),W+=6}o.addGroup(p,W,I),p+=W,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Xa=class i extends At{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,p=2*u+f,v=n*2+r,M=s+1,g=new G,x=new G;for(let m=0;m<=v;m++){let S=0,y=0,w=0,T=0;if(m<=n){let I=m/n,A=I*Math.PI/2;y=-h-e*Math.cos(A),w=e*Math.sin(A),T=-e*Math.cos(A),S=I*u}else if(m<=n+r){let I=(m-n)/r;y=-h+I*t,w=e,T=0,S=u+I*f}else{let I=(m-n-r)/n,A=I*Math.PI/2;y=h+e*Math.sin(A),w=e*Math.cos(A),T=e*Math.sin(A),S=u+f+I*u}let d=Math.max(0,Math.min(1,S/p)),_=0;m===0?_=.5/s:m===v&&(_=-.5/s);for(let I=0;I<=s;I++){let A=I/s,C=A*Math.PI*2,P=Math.sin(C),O=Math.cos(C);x.x=-w*O,x.y=y,x.z=w*P,o.push(x.x,x.y,x.z),g.set(-w*O,T,w*P),g.normalize(),l.push(g.x,g.y,g.z),c.push(A+_,d)}if(m>0){let I=(m-1)*M;for(let A=0;A<s;A++){let C=I+A,P=I+A+1,O=m*M+A,b=m*M+A+1;a.push(C,P,O),a.push(P,b,O)}}}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},qa=class i extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new G,h=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ot=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],v=0,M=[],g=n/2,x=0;m(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(p,2));function m(){let y=new G,w=new G,T=0,d=(t-e)/n;for(let _=0;_<=r;_++){let I=[],A=_/r,C=A*(t-e)+e;for(let P=0;P<=s;P++){let O=P/s,b=O*l+o,D=Math.sin(b),B=Math.cos(b);w.x=C*D,w.y=-A*n+g,w.z=C*B,u.push(w.x,w.y,w.z),y.set(D,d,B).normalize(),f.push(y.x,y.y,y.z),p.push(O,1-A),I.push(v++)}M.push(I)}for(let _=0;_<s;_++)for(let I=0;I<r;I++){let A=M[I][_],C=M[I+1][_],P=M[I+1][_+1],O=M[I][_+1];(e>0||I!==0)&&(h.push(A,C,O),T+=3),(t>0||I!==r-1)&&(h.push(C,P,O),T+=3)}c.addGroup(x,T,0),x+=T}function S(y){let w=v,T=new pe,d=new G,_=0,I=y===!0?e:t,A=y===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,g*A,0),f.push(0,A,0),p.push(.5,.5),v++;let C=v;for(let P=0;P<=s;P++){let b=P/s*l+o,D=Math.cos(b),B=Math.sin(b);d.x=I*B,d.y=g*A,d.z=I*D,u.push(d.x,d.y,d.z),f.push(0,A,0),T.x=D*.5+.5,T.y=B*.5*A+.5,p.push(T.x,T.y),v++}for(let P=0;P<s;P++){let O=w+P,b=C+P;y===!0?h.push(b,b+1,O):h.push(b+1,b,O),_+=3}c.addGroup(x,_,y===!0?1:2),x+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ss=class i extends ot{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new pe:new G);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new G,s=[],r=[],a=[],o=new G,l=new Ye;for(let p=0;p<=e;p++){let v=p/e;s[p]=this.getTangentAt(v,new G)}r[0]=new G,a[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(ut(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(ut(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],p*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Gr=class extends Xn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ql=class extends Gr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ju(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var xp=new G,vp=new G,au=new ju,ou=new ju,lu=new ju,$l=class extends Xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new G){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(vp.subVectors(s[0],s[1]).add(s[0]),c=vp);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(xp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xp),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(u),p),M=Math.pow(u.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);M<1e-4&&(M=1),v<1e-4&&(v=M),g<1e-4&&(g=M),au.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,v,M,g),ou.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,v,M,g),lu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,v,M,g)}else this.curveType==="catmullrom"&&(au.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ou.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),lu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(au.calc(l),ou.calc(l),lu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _p(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Og(i,e){let t=1-i;return t*t*e}function Bg(i,e){return 2*(1-i)*i*e}function kg(i,e){return i*i*e}function Pa(i,e,t,n){return Og(i,e)+Bg(i,t)+kg(i,n)}function zg(i,e){let t=1-i;return t*t*t*e}function Hg(i,e){let t=1-i;return 3*t*t*i*e}function Gg(i,e){return 3*(1-i)*i*i*e}function Vg(i,e){return i*i*i*e}function Ia(i,e,t,n,s){return zg(i,e)+Hg(i,t)+Gg(i,n)+Vg(i,s)}var $a=class extends Xn{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ia(e,s.x,r.x,a.x,o.x),Ia(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yl=class extends Xn{constructor(e=new G,t=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new G){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ia(e,s.x,r.x,a.x,o.x),Ia(e,s.y,r.y,a.y,o.y),Ia(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ya=class extends Xn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kl=class extends Xn{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends Xn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Pa(e,s.x,r.x,a.x),Pa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jl=class extends Xn{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Pa(e,s.x,r.x,a.x),Pa(e,s.y,r.y,a.y),Pa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(_p(o,l.x,c.x,h.x,u.x),_p(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},xu=Object.freeze({__proto__:null,ArcCurve:ql,CatmullRomCurve3:$l,CubicBezierCurve:$a,CubicBezierCurve3:Yl,EllipseCurve:Gr,LineCurve:Ya,LineCurve3:Kl,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:jl,SplineCurve:ja}),Zl=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new xu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Za=class extends Zl{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ya(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ka(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new $a(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ja(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Gr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},bs=class extends Za{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Za().fromJSON(s))}return this}};function Wg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=mm(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Kg(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let f=t;f<s;f+=t){let p=i[f],v=i[f+1];p<o&&(o=p),v<l&&(l=v),p>h&&(h=p),v>u&&(u=v)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ja(r,a,t,o,l,c,0),a}function mm(i,e,t,n,s){let r;if(s===ax(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=yp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=yp(a/n|0,i[a],i[a+1],r);return r&&Vr(r,r.next)&&(eo(r),r=r.next),r}function Ys(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Vr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(eo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ja(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ex(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?qg(i,n,s,r):Xg(i)){e.push(l.i,i.i,c.i),eo(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=$g(Ys(i),e),Ja(i,e,t,n,s,r,2)):a===2&&Yg(i,e,t,n,s,r):Ja(Ys(i),e,t,n,s,r,1);break}}}function Xg(i){let e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c),v=n.next;for(;v!==e;){if(v.x>=h&&v.x<=f&&v.y>=u&&v.y<=p&&wa(s,o,r,l,a,c,v.x,v.y)&&Wt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function qg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Wt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=Math.min(o,l,c),v=Math.min(h,u,f),M=Math.max(o,l,c),g=Math.max(h,u,f),x=vu(p,v,e,t,n),m=vu(M,g,e,t,n),S=i.prevZ,y=i.nextZ;for(;S&&S.z>=x&&y&&y.z<=m;){if(S.x>=p&&S.x<=M&&S.y>=v&&S.y<=g&&S!==s&&S!==a&&wa(o,h,l,u,c,f,S.x,S.y)&&Wt(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=p&&y.x<=M&&y.y>=v&&y.y<=g&&y!==s&&y!==a&&wa(o,h,l,u,c,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=x;){if(S.x>=p&&S.x<=M&&S.y>=v&&S.y<=g&&S!==s&&S!==a&&wa(o,h,l,u,c,f,S.x,S.y)&&Wt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=m;){if(y.x>=p&&y.x<=M&&y.y>=v&&y.y<=g&&y!==s&&y!==a&&wa(o,h,l,u,c,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function $g(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Vr(n,s)&&xm(n,t,t.next,s)&&Qa(n,s)&&Qa(s,n)&&(e.push(n.i,t.i,s.i),eo(t),eo(t.next),t=i=s),t=t.next}while(t!==i);return Ys(t)}function Yg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ix(a,o)){let l=vm(a,o);a=Ys(a,a.next),l=Ys(l,l.next),Ja(a,e,t,n,s,r,0),Ja(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Kg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=mm(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(nx(c))}s.sort(jg);for(let r=0;r<s.length;r++)t=Zg(s[r],t);return t}function jg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Zg(i,e){let t=Jg(i,e);if(!t)return e;let n=vm(t,i);return Ys(n,n.next),Ys(t,t.next)}function Jg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Vr(i,t))return t;do{if(Vr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&gm(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Qa(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Qg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Qg(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function ex(i,e,t,n){let s=i;do s.z===0&&(s.z=vu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tx(s)}function tx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function vu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function nx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function gm(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function wa(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&gm(i,e,t,n,s,r,a,o)}function ix(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!sx(i,e)&&(Qa(i,e)&&Qa(e,i)&&rx(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||Vr(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Vr(i,e){return i.x===e.x&&i.y===e.y}function xm(i,e,t,n){let s=Rl(Wt(i,e,t)),r=Rl(Wt(i,e,n)),a=Rl(Wt(t,n,i)),o=Rl(Wt(t,n,e));return!!(s!==r&&a!==o||s===0&&Al(i,t,e)||r===0&&Al(i,n,e)||a===0&&Al(t,i,n)||o===0&&Al(t,e,n))}function Al(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Rl(i){return i>0?1:i<0?-1:0}function sx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&xm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Qa(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function rx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function vm(i,e){let t=_u(i.i,i.x,i.y),n=_u(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function yp(i,e,t,n){let s=_u(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function eo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _u(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ax(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var yu=class{static triangulate(e,t,n=2){return Wg(e,t,n)}},ks=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Mp(e),Sp(n,e);let a=e.length;t.forEach(Mp);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Sp(n,t[l]);let o=yu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Mp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Sp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ks=class i extends At{constructor(e=new bs([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:p-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:ox,S,y=!1,w,T,d,_;if(x){S=x.getSpacedPoints(h),y=!0,f=!1;let re=x.isCatmullRomCurve3?x.closed:!1;w=x.computeFrenetFrames(h,re),T=new G,d=new G,_=new G}f||(g=0,p=0,v=0,M=0);let I=o.extractPoints(c),A=I.shape,C=I.holes;if(!ks.isClockWise(A)){A=A.reverse();for(let re=0,me=C.length;re<me;re++){let Me=C[re];ks.isClockWise(Me)&&(C[re]=Me.reverse())}}function O(re){let Me=10000000000000001e-36,ye=re[0];for(let ce=1;ce<=re.length;ce++){let ke=ce%re.length,Ue=re[ke],We=Ue.x-ye.x,Ze=Ue.y-ye.y,Je=We*We+Ze*Ze,Y=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(ye.x),Math.abs(ye.y)),bt=Me*Y*Y;if(Je<=bt){re.splice(ke,1),ce--;continue}ye=Ue}}O(A),C.forEach(O);let b=C.length,D=A;for(let re=0;re<b;re++){let me=C[re];A=A.concat(me)}function B(re,me,Me){return me||Qe("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(me,Me)}let U=A.length;function W(re,me,Me){let ye,ce,ke,Ue=re.x-me.x,We=re.y-me.y,Ze=Me.x-re.x,Je=Me.y-re.y,Y=Ue*Ue+We*We,bt=Ue*Je-We*Ze;if(Math.abs(bt)>Number.EPSILON){let et=Math.sqrt(Y),ue=Math.sqrt(Ze*Ze+Je*Je),J=me.x-We/et,ge=me.y+Ue/et,de=Me.x-Je/ue,Ae=Me.y+Ze/ue,L=((de-J)*Je-(Ae-ge)*Ze)/(Ue*Je-We*Ze);ye=J+Ue*L-re.x,ce=ge+We*L-re.y;let E=ye*ye+ce*ce;if(E<=2)return new pe(ye,ce);ke=Math.sqrt(E/2)}else{let et=!1;Ue>Number.EPSILON?Ze>Number.EPSILON&&(et=!0):Ue<-Number.EPSILON?Ze<-Number.EPSILON&&(et=!0):Math.sign(We)===Math.sign(Je)&&(et=!0),et?(ye=-We,ce=Ue,ke=Math.sqrt(Y)):(ye=Ue,ce=We,ke=Math.sqrt(Y/2))}return new pe(ye/ke,ce/ke)}let V=[];for(let re=0,me=D.length,Me=me-1,ye=re+1;re<me;re++,Me++,ye++)Me===me&&(Me=0),ye===me&&(ye=0),V[re]=W(D[re],D[Me],D[ye]);let F=[],H,$=V.concat();for(let re=0,me=b;re<me;re++){let Me=C[re];H=[];for(let ye=0,ce=Me.length,ke=ce-1,Ue=ye+1;ye<ce;ye++,ke++,Ue++)ke===ce&&(ke=0),Ue===ce&&(Ue=0),H[ye]=W(Me[ye],Me[ke],Me[Ue]);F.push(H),$=$.concat(H)}let Q;if(g===0)Q=ks.triangulateShape(D,C);else{let re=[],me=[];for(let Me=0;Me<g;Me++){let ye=Me/g,ce=p*Math.cos(ye*Math.PI/2),ke=v*Math.sin(ye*Math.PI/2)+M;for(let Ue=0,We=D.length;Ue<We;Ue++){let Ze=B(D[Ue],V[Ue],ke);ee(Ze.x,Ze.y,-ce),ye===0&&re.push(Ze)}for(let Ue=0,We=b;Ue<We;Ue++){let Ze=C[Ue];H=F[Ue];let Je=[];for(let Y=0,bt=Ze.length;Y<bt;Y++){let et=B(Ze[Y],H[Y],ke);ee(et.x,et.y,-ce),ye===0&&Je.push(et)}ye===0&&me.push(Je)}}Q=ks.triangulateShape(re,me)}let k=Q.length,z=v+M;for(let re=0;re<U;re++){let me=f?B(A[re],$[re],z):A[re];y?(d.copy(w.normals[0]).multiplyScalar(me.x),T.copy(w.binormals[0]).multiplyScalar(me.y),_.copy(S[0]).add(d).add(T),ee(_.x,_.y,_.z)):ee(me.x,me.y,0)}for(let re=1;re<=h;re++)for(let me=0;me<U;me++){let Me=f?B(A[me],$[me],z):A[me];y?(d.copy(w.normals[re]).multiplyScalar(Me.x),T.copy(w.binormals[re]).multiplyScalar(Me.y),_.copy(S[re]).add(d).add(T),ee(_.x,_.y,_.z)):ee(Me.x,Me.y,u/h*re)}for(let re=g-1;re>=0;re--){let me=re/g,Me=p*Math.cos(me*Math.PI/2),ye=v*Math.sin(me*Math.PI/2)+M;for(let ce=0,ke=D.length;ce<ke;ce++){let Ue=B(D[ce],V[ce],ye);ee(Ue.x,Ue.y,u+Me)}for(let ce=0,ke=C.length;ce<ke;ce++){let Ue=C[ce];H=F[ce];for(let We=0,Ze=Ue.length;We<Ze;We++){let Je=B(Ue[We],H[We],ye);y?ee(Je.x,Je.y+S[h-1].y,S[h-1].x+Me):ee(Je.x,Je.y,u+Me)}}}N(),K();function N(){let re=s.length/3;if(f){let me=0,Me=U*me;for(let ye=0;ye<k;ye++){let ce=Q[ye];ve(ce[2]+Me,ce[1]+Me,ce[0]+Me)}me=h+g*2,Me=U*me;for(let ye=0;ye<k;ye++){let ce=Q[ye];ve(ce[0]+Me,ce[1]+Me,ce[2]+Me)}}else{for(let me=0;me<k;me++){let Me=Q[me];ve(Me[2],Me[1],Me[0])}for(let me=0;me<k;me++){let Me=Q[me];ve(Me[0]+U*h,Me[1]+U*h,Me[2]+U*h)}}n.addGroup(re,s.length/3-re,0)}function K(){let re=s.length/3,me=0;X(D,me),me+=D.length;for(let Me=0,ye=C.length;Me<ye;Me++){let ce=C[Me];X(ce,me),me+=ce.length}n.addGroup(re,s.length/3-re,1)}function X(re,me){let Me=re.length;for(;--Me>=0;){let ye=Me,ce=Me-1;ce<0&&(ce=re.length-1);for(let ke=0,Ue=h+g*2;ke<Ue;ke++){let We=U*ke,Ze=U*(ke+1),Je=me+ye+We,Y=me+ce+We,bt=me+ce+Ze,et=me+ye+Ze;be(Je,Y,bt,et)}}}function ee(re,me,Me){l.push(re),l.push(me),l.push(Me)}function ve(re,me,Me){_e(re),_e(me),_e(Me);let ye=s.length/3,ce=m.generateTopUV(n,s,ye-3,ye-2,ye-1);Ie(ce[0]),Ie(ce[1]),Ie(ce[2])}function be(re,me,Me,ye){_e(re),_e(me),_e(ye),_e(me),_e(Me),_e(ye);let ce=s.length/3,ke=m.generateSideWallUV(n,s,ce-6,ce-3,ce-2,ce-1);Ie(ke[0]),Ie(ke[1]),Ie(ke[3]),Ie(ke[1]),Ie(ke[2]),Ie(ke[3])}function _e(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function Ie(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xu[s.type]().fromJSON(s)),new i(n,e.options)}},ox={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new pe(r,a),new pe(o,l),new pe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],p=e[s*3+1],v=e[s*3+2],M=e[r*3],g=e[r*3+1],x=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new pe(a,1-l),new pe(c,1-u),new pe(f,1-v),new pe(M,1-x)]:[new pe(o,1-l),new pe(h,1-u),new pe(p,1-v),new pe(g,1-x)]}};function lx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var to=class i extends At{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ut(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new G,f=new pe,p=new G,v=new G,M=new G,g=0,x=0;for(let m=0;m<=e.length-1;m++)switch(m){case 0:g=e[m+1].x-e[m].x,x=e[m+1].y-e[m].y,p.x=x*1,p.y=-g,p.z=x*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:M.normalize(),l.push(M.x,M.y,M.z);break;default:g=e[m+1].x-e[m].x,x=e[m+1].y-e[m].y,p.x=x*1,p.y=-g,p.z=x*0,v.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(v)}for(let m=0;m<=t;m++){let S=n+m*h*s,y=Math.sin(S),w=Math.cos(S);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*y,u.y=e[T].y,u.z=e[T].x*w,a.push(u.x,u.y,u.z),f.x=m/t,f.y=T/(e.length-1),o.push(f.x,f.y);let d=l[3*T+0]*y,_=l[3*T+1],I=l[3*T+0]*w;c.push(d,_,I)}}for(let m=0;m<t;m++)for(let S=0;S<e.length-1;S++){let y=S+m*e.length,w=y,T=y+e.length,d=y+e.length+1,_=y+1;r.push(w,T,_),r.push(d,_,T)}this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("uv",new ht(o,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ki=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,p=[],v=[],M=[],g=[];for(let x=0;x<h;x++){let m=x*f-a;for(let S=0;S<c;S++){let y=S*u-r;v.push(y,-m,0),M.push(0,0,1),g.push(S/o),g.push(1-x/l)}}for(let x=0;x<l;x++)for(let m=0;m<o;m++){let S=m+c*x,y=m+c*(x+1),w=m+1+c*(x+1),T=m+1+c*x;p.push(S,y,T),p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(M,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},no=class i extends At{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/s,p=new G,v=new pe;for(let M=0;M<=s;M++){for(let g=0;g<=n;g++){let x=r+g/n*a;p.x=u*Math.cos(x),p.y=u*Math.sin(x),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,h.push(v.x,v.y)}u+=f}for(let M=0;M<s;M++){let g=M*(n+1);for(let x=0;x<n;x++){let m=x+g,S=m,y=m+n+1,w=m+n+2,T=m+1;o.push(S,y,T),o.push(y,w,T)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Zt=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new G,f=new G,p=[],v=[],M=[],g=[];for(let x=0;x<=n;x++){let m=[],S=x/n,y=a+S*o,w=e*Math.cos(y),T=Math.sqrt(e*e-w*w),d=0;x===0&&a===0?d=.5/t:x===n&&l===Math.PI&&(d=-.5/t);for(let _=0;_<=t;_++){let I=_/t,A=s+I*r;u.x=-T*Math.cos(A),u.y=w,u.z=T*Math.sin(A),v.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),g.push(I+d,1-S),m.push(c++)}h.push(m)}for(let x=0;x<n;x++)for(let m=0;m<t;m++){let S=h[x][m+1],y=h[x][m],w=h[x+1][m],T=h[x+1][m+1];(x!==0||a>0)&&p.push(S,y,T),(x!==n-1||l<Math.PI)&&p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(M,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ji=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new G,p=new G,v=new G;for(let M=0;M<=n;M++){let g=a+M/n*o;for(let x=0;x<=s;x++){let m=x/s*r;p.x=(e+t*Math.cos(g))*Math.cos(m),p.y=(e+t*Math.cos(g))*Math.sin(m),p.z=t*Math.sin(g),c.push(p.x,p.y,p.z),f.x=e*Math.cos(m),f.y=e*Math.sin(m),v.subVectors(p,f).normalize(),h.push(v.x,v.y,v.z),u.push(x/s),u.push(M/n)}}for(let M=1;M<=n;M++)for(let g=1;g<=s;g++){let x=(s+1)*M+g-1,m=(s+1)*(M-1)+g-1,S=(s+1)*(M-1)+g,y=(s+1)*M+g;l.push(x,m,y),l.push(m,S,y)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(bp(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(bp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Tn(i){let e={};for(let t=0;t<i.length;t++){let n=ir(i[t]);for(let s in n)e[s]=n[s]}return e}function bp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var xn={clone:ir,merge:Tn},hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hx,this.fragmentShader=ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=cx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(s.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ye().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wr=class extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$t=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},In=class extends $t{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return zs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){zs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var io=class extends mn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},so=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=hc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jl=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ql=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Aa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function fx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Tp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function dx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ec=class extends bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:du,endingEnd:du}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case pu:r=e,o=2*t-n;break;case mu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pu:a=e,l=2*n-t;break;case mu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(n-t)/(s-t),M=v*v,g=M*v,x=-f*g+2*f*M-f*v,m=(1+f)*g+(-1.5-2*f)*M+(-.5+f)*v+1,S=(-1-p)*g+(1.5+p)*M+.5*v,y=p*g-p*M;for(let w=0;w!==o;++w)r[w]=x*a[h+w]+m*a[c+w]+S*a[l+w]+y*a[u+w];return r}},tc=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},nc=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ic=class extends bi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let v=(n-t)/(s-t),M=1-v;for(let g=0;g!==o;++g)r[g]=a[c+g]*M+a[l+g]*v;return r}let f=o*2,p=e-1;for(let v=0;v!==o;++v){let M=a[c+v],g=a[l+v],x=p*f+v*2,m=u[x],S=u[x+1],y=e*f+v*2,w=h[y],T=h[y+1],d=mx(n,t,m,w,s);r[v]=_m(d,M,S,T,g)}return r}};function _m(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function px(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function mx(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=_m(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=px(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Aa(e.settings)&&(n.settings={inTangents:gs(e.settings.inTangents,Array),outTangents:gs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ic(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case Il:t=this.InterpolantFactoryMethodSmooth;break;case fu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return Il;case this.InterpolantFactoryMethodBezier:return fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Aa(this.settings)&&(Ep(this.settings.inTangents,e),Ep(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Aa(this.settings)&&(wp(this.settings.inTangents,e),wp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Qe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&eg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Il,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let v=0;v!==n;++v){let M=t[u+v];if(M!==t[f+v]||M!==t[p+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Aa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ep(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function wp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Gs;var Zi=class extends Fn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Hs;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};ro.prototype.ValueTypeName="color";var Ji=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};Ji.prototype.ValueTypeName="number";var sc=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Wn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qi=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new sc(this.times,this.values,this.getValueSize(),e)}};Qi.prototype.ValueTypeName="quaternion";Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Fn{constructor(e,t,n){super(e,t,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Hs;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};Ts.prototype.ValueTypeName="vector";var ao=class{constructor(e="",t=-1,n=[],s=em){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=mi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(xx(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Fn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=fx(l);l=Tp(l,1,h),c=Tp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ji(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function gx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ji;case"vector":case"vector2":case"vector3":case"vector4":return Ts;case"color":return ro;case"quaternion":return Qi;case"bool":case"boolean":return Zi;case"string":return es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function xx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=gx(i.type);if(i.times===void 0){let n=[],s=[];dx(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Aa(i.settings)&&(t.settings={inTangents:gs(i.settings.inTangents,Float32Array),outTangents:gs(i.settings.outTangents,Float32Array)}),t}var yi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ap(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ap(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ap(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var rc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],v=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ym=new rc,Ti=class{constructor(e){this.manager=e!==void 0?e:ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gi={},Mu=class extends Error{constructor(e,t){super(e),this.response=t}},Xr=class extends Ti{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=yi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:n,onError:s});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&$e("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Gi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,v=p!==0,M=0,g=new ReadableStream({start(x){m();function m(){u.read().then(({done:S,value:y})=>{if(S)x.close();else{M+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:v,loaded:M,total:p});for(let T=0,d=h.length;T<d;T++){let _=h[T];_.onProgress&&_.onProgress(w)}x.enqueue(y),m()}},S=>{x.error(S)})}}});return new Response(g)}else throw new Mu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{yi.add(`file:${e}`,c);let h=Gi[e];delete Gi[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Gi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Gi[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Rr=new WeakMap,ac=class extends Ti{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Rr.get(a);u===void 0&&(u=[],Rr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Ur("img");function l(){h(),t&&t(this);let u=Rr.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onLoad&&p.onLoad(this)}Rr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),yi.remove(`image:${e}`);let f=Rr.get(this)||[];for(let p=0;p<f.length;p++){let v=f[p];v.onError&&v.onError(u)}Rr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),yi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var oo=class extends Ti{constructor(e){super(e)}load(e,t,n,s){let r=new jt,a=new ac(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},js=class extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},lo=class extends js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},cu=new Ye,Rp=new G,Cp=new G,qr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rp),Cp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(cu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Nr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Cl=new G,Pl=new Wn,_i=new G,co=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cl,Pl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Pl,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Cl,Pl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Pl,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new G,Pp=new pe,Ip=new pe,tn=class extends co{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,Pp,Ip),t.subVectors(Ip,Pp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ra*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Su=class extends qr{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ho=class extends js{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Su}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},bu=class extends qr{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},Zs=class extends js{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ts=class extends co{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tu=class extends qr{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Es=class extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Tu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ns=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var hu=new WeakMap,uo=class extends Ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&$e("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&$e("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{hu.has(a)===!0?(s&&s(hu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return yi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),hu.set(l,c),yi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});yi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Cr=-90,Pr=1,$r=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Cr,Pr,e,t);s.layers=this.layers,this.add(s);let r=new tn(Cr,Pr,e,t);r.layers=this.layers,this.add(r);let a=new tn(Cr,Pr,e,t);a.layers=this.layers,this.add(a);let o=new tn(Cr,Pr,e,t);o.layers=this.layers,this.add(o);let l=new tn(Cr,Pr,e,t);l.layers=this.layers,this.add(l);let c=new tn(Cr,Pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},oc=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},fo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=vx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function vx(){this._document.hidden===!1&&this.reset()}var Ju="\\[\\]\\.:\\/",_x=new RegExp("["+Ju+"]","g"),Qu="[^"+Ju+"]",yx="[^"+Ju.replace("\\.","")+"]",Mx=/((?:WC+[\/:])*)/.source.replace("WC",Qu),Sx=/(WCOD+)?/.source.replace("WCOD",yx),bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),Tx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),Ex=new RegExp("^"+Mx+Sx+bx+Tx+"$"),wx=["material","materials","bones","map"],Eu=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_x,"")}static parseTrackName(e){let t=Ex.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Eu;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ub=new Float32Array(1);var Lp=new Ye,ws=class{constructor(e,t,n=0,s=1/0){this.ray=new vs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lp),this}intersectObject(e,t=!0,n=[]){return wu(e,this,n,t),n.sort(Dp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)wu(e[s],this,n,t);return n.sort(Dp),n}};function Dp(i,e){return i.distance-e.distance}function wu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)wu(r[a],e,t,!0)}}var af=class af{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};af.prototype.isMatrix2=!0;var Au=af;function ef(i,e,t,n){let s=Ax(n);switch(t){case Bu:return i*e;case xc:return i*e/s.components*s.byteLength;case vc:return i*e/s.components*s.byteLength;case As:return i*e*2/s.components*s.byteLength;case _c:return i*e*2/s.components*s.byteLength;case ku:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case yc:return i*e*4/s.components*s.byteLength;case So:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:case Tc:return Math.max(i,16)*Math.max(e,8)/4;case Mc:case bc:return Math.max(i,8)*Math.max(e,8)/2;case Ec:case wc:case Rc:case Cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ac:case wo:case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case kc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xc:case qc:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yc:case Kc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ao:case jc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ax(i){switch(i){case bn:case Nu:return{byteLength:1,components:1};case Jr:case Uu:case Gt:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case di:case pc:case $n:return{byteLength:4,components:1};case Fu:case Ou:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Gm(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cx(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<u.length;p++){let v=u[f],M=u[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++f,u[f]=M)}u.length=f+1;for(let p=0,v=u.length;p<v;p++){let M=u[p];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ix=`#ifdef USE_ALPHAHASH
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
#endif`,Lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ux=`#ifdef USE_ALPHATEST
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
#endif`,Ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bx=`#ifdef USE_BATCHING
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
#endif`,zx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vx=`#ifdef USE_IRIDESCENCE
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
#endif`,Wx=`#ifdef USE_BUMPMAP
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
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qx=`#define PI 3.141592653589793
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
} // validated`,ev=`vec3 transformedNormal = objectNormal;
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
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",av=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ov=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,hv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uv=`#ifdef USE_ENVMAP
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
#endif`,fv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gv=`#ifdef USE_GRADIENTMAP
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
}`,xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mv=`#ifdef USE_ENVMAP
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
#endif`,Sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wv=`PhysicalMaterial material;
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
#endif`,Av=`uniform sampler2D dfgLUT;
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
}`,Rv=`
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
#endif`,Cv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kv=`#if defined( USE_POINTS_UV )
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
#endif`,zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vv=`#if defined( USE_MORPHCOLORS )
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
#endif`,Wv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`#ifdef USE_MORPHTARGETS
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
#endif`,qv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$v=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jv=`#ifdef USE_NORMALMAP
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
#endif`,Qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p_=`float getShadowMask() {
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
}`,m_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g_=`#ifdef USE_SKINNING
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
#endif`,x_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,__=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,T_=`#ifdef USE_TRANSMISSION
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P_=`uniform sampler2D t2D;
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`uniform float backgroundBlurriness;
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`#include <common>
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
}`,F_=`#if DEPTH_PACKING == 3200
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
}`,O_=`#define DISTANCE
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
}`,B_=`#define DISTANCE
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`uniform float scale;
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
}`,G_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,W_=`uniform vec3 diffuse;
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
}`,X_=`#define LAMBERT
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
}`,q_=`#define LAMBERT
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
}`,$_=`#define MATCAP
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
}`,Y_=`#define MATCAP
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
}`,K_=`#define NORMAL
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
}`,j_=`#define NORMAL
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
}`,Z_=`#define PHONG
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
}`,J_=`#define PHONG
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
}`,Q_=`#define STANDARD
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
}`,ey=`#define STANDARD
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
}`,ty=`#define TOON
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
}`,ny=`#define TOON
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
}`,iy=`uniform float size;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,ay=`uniform vec3 color;
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
}`,oy=`uniform float rotation;
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
}`,ly=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Px,alphahash_pars_fragment:Ix,alphamap_fragment:Lx,alphamap_pars_fragment:Dx,alphatest_fragment:Nx,alphatest_pars_fragment:Ux,aomap_fragment:Fx,aomap_pars_fragment:Ox,batching_pars_vertex:Bx,batching_vertex:kx,begin_vertex:zx,beginnormal_vertex:Hx,bsdfs:Gx,iridescence_fragment:Vx,bumpmap_pars_fragment:Wx,clipping_planes_fragment:Xx,clipping_planes_pars_fragment:qx,clipping_planes_pars_vertex:$x,clipping_planes_vertex:Yx,color_fragment:Kx,color_pars_fragment:jx,color_pars_vertex:Zx,color_vertex:Jx,common:Qx,defaultnormal_vertex:ev,displacementmap_pars_vertex:tv,displacementmap_vertex:nv,emissivemap_fragment:iv,emissivemap_pars_fragment:sv,colorspace_fragment:rv,colorspace_pars_fragment:av,envmap_fragment:ov,envmap_common_pars_fragment:lv,envmap_pars_fragment:cv,envmap_pars_vertex:hv,envmap_physical_pars_fragment:Mv,envmap_vertex:uv,fog_vertex:fv,fog_pars_vertex:dv,fog_fragment:pv,fog_pars_fragment:mv,gradientmap_pars_fragment:gv,lightmap_pars_fragment:xv,lights_lambert_fragment:vv,lights_lambert_pars_fragment:_v,lights_pars_begin:yv,lights_toon_fragment:Sv,lights_toon_pars_fragment:bv,lights_phong_fragment:Tv,lights_phong_pars_fragment:Ev,lights_physical_fragment:wv,lights_physical_pars_fragment:Av,lights_fragment_begin:Rv,lights_fragment_maps:Cv,lights_fragment_end:Pv,lightprobes_pars_fragment:Iv,logdepthbuf_fragment:Lv,logdepthbuf_pars_fragment:Dv,logdepthbuf_pars_vertex:Nv,logdepthbuf_vertex:Uv,map_fragment:Fv,map_pars_fragment:Ov,map_particle_fragment:Bv,map_particle_pars_fragment:kv,metalnessmap_fragment:zv,metalnessmap_pars_fragment:Hv,morphinstance_vertex:Gv,morphcolor_vertex:Vv,morphnormal_vertex:Wv,morphtarget_pars_vertex:Xv,morphtarget_vertex:qv,normal_fragment_begin:$v,normal_fragment_maps:Yv,normal_pars_fragment:Kv,normal_pars_vertex:jv,normal_vertex:Zv,normalmap_pars_fragment:Jv,clearcoat_normal_fragment_begin:Qv,clearcoat_normal_fragment_maps:e_,clearcoat_pars_fragment:t_,iridescence_pars_fragment:n_,opaque_fragment:i_,packing:s_,premultiplied_alpha_fragment:r_,project_vertex:a_,dithering_fragment:o_,dithering_pars_fragment:l_,roughnessmap_fragment:c_,roughnessmap_pars_fragment:h_,shadowmap_pars_fragment:u_,shadowmap_pars_vertex:f_,shadowmap_vertex:d_,shadowmask_pars_fragment:p_,skinbase_vertex:m_,skinning_pars_vertex:g_,skinning_vertex:x_,skinnormal_vertex:v_,specularmap_fragment:__,specularmap_pars_fragment:y_,tonemapping_fragment:M_,tonemapping_pars_fragment:S_,transmission_fragment:b_,transmission_pars_fragment:T_,uv_pars_fragment:E_,uv_pars_vertex:w_,uv_vertex:A_,worldpos_vertex:R_,background_vert:C_,background_frag:P_,backgroundCube_vert:I_,backgroundCube_frag:L_,cube_vert:D_,cube_frag:N_,depth_vert:U_,depth_frag:F_,distance_vert:O_,distance_frag:B_,equirect_vert:k_,equirect_frag:z_,linedashed_vert:H_,linedashed_frag:G_,meshbasic_vert:V_,meshbasic_frag:W_,meshlambert_vert:X_,meshlambert_frag:q_,meshmatcap_vert:$_,meshmatcap_frag:Y_,meshnormal_vert:K_,meshnormal_frag:j_,meshphong_vert:Z_,meshphong_frag:J_,meshphysical_vert:Q_,meshphysical_frag:ey,meshtoon_vert:ty,meshtoon_frag:ny,points_vert:iy,points_frag:sy,shadow_vert:ry,shadow_frag:ay,sprite_vert:oy,sprite_frag:ly},Oe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ci={basic:{uniforms:Tn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Tn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Tn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Tn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Tn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Le(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Tn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Tn([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Tn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Tn([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Tn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Tn([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Tn([Oe.common,Oe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Tn([Oe.lights,Oe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ci.physical={uniforms:Tn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Jc={r:0,b:0,g:0},cy=new Ye,Vm=new st;Vm.set(-1,0,0,0,1,0,0,0,1);function hy(i,e,t,n,s,r){let a=new Le(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function p(m){let S=m.isScene===!0?m.background:null;if(S&&S.isTexture){let y=m.backgroundBlurriness>0;S=e.get(S,y)}return S}function v(m){let S=!1,y=p(m);y===null?g(a,o):y&&y.isColor&&(g(y,1),S=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(m,S){let y=p(S);y&&y.isCubeTexture?(c===void 0&&(c=new je(new kt(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:ir(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,d){this.matrixWorld.copyPosition(d.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vm),c.material.toneMapped=ct.getTransfer(y.colorSpace)!==Mt,(h!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new je(new Ki(2,2),new Ct({name:"BackgroundMaterial",uniforms:ir(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ct.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,S){m.getRGB(Jc,Zu(i)),t.buffers.color.setClear(Jc.r,Jc.g,Jc.b,S,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,S=1){a.set(m),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:v,addToRenderList:M,dispose:x}}function uy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(C,P,O,b,D){let B=!1,U=u(C,b,O,P);r!==U&&(r=U,c(r.object)),B=p(C,b,O,D),B&&v(C,b,O,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(C,P,O,b),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,P,O,b){let D=b.wireframe===!0,B=n[P.id];B===void 0&&(B={},n[P.id]=B);let U=C.isInstancedMesh===!0?C.id:0,W=B[U];W===void 0&&(W={},B[U]=W);let V=W[O.id];V===void 0&&(V={},W[O.id]=V);let F=V[D];return F===void 0&&(F=f(l()),V[D]=F),F}function f(C){let P=[],O=[],b=[];for(let D=0;D<t;D++)P[D]=0,O[D]=0,b[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:b,object:C,attributes:{},index:null}}function p(C,P,O,b){let D=r.attributes,B=P.attributes,U=0,W=O.getAttributes();for(let V in W)if(W[V].location>=0){let H=D[V],$=B[V];if($===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),H===void 0||H.attribute!==$||$&&H.data!==$.data)return!0;U++}return r.attributesNum!==U||r.index!==b}function v(C,P,O,b){let D={},B=P.attributes,U=0,W=O.getAttributes();for(let V in W)if(W[V].location>=0){let H=B[V];H===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(H=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(H=C.instanceColor));let $={};$.attribute=H,H&&H.data&&($.data=H.data),D[V]=$,U++}r.attributes=D,r.attributesNum=U,r.index=b}function M(){let C=r.newAttributes;for(let P=0,O=C.length;P<O;P++)C[P]=0}function g(C){x(C,0)}function x(C,P){let O=r.newAttributes,b=r.enabledAttributes,D=r.attributeDivisors;O[C]=1,b[C]===0&&(i.enableVertexAttribArray(C),b[C]=1),D[C]!==P&&(i.vertexAttribDivisor(C,P),D[C]=P)}function m(){let C=r.newAttributes,P=r.enabledAttributes;for(let O=0,b=P.length;O<b;O++)P[O]!==C[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function S(C,P,O,b,D,B,U){U===!0?i.vertexAttribIPointer(C,P,O,D,B):i.vertexAttribPointer(C,P,O,b,D,B)}function y(C,P,O,b){M();let D=b.attributes,B=O.getAttributes(),U=P.defaultAttributeValues;for(let W in B){let V=B[W];if(V.location>=0){let F=D[W];if(F===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),F!==void 0){let H=F.normalized,$=F.itemSize,Q=e.get(F);if(Q===void 0)continue;let k=Q.buffer,z=Q.type,N=Q.bytesPerElement,K=z===i.INT||z===i.UNSIGNED_INT||F.gpuType===pc;if(F.isInterleavedBufferAttribute){let X=F.data,ee=X.isInterleavedBuffer===!0?X.stride:X.itemSize,ve=F.offset;if(X.isInstancedInterleavedBuffer||X.isInstancedBufferAttribute){for(let be=0;be<V.locationSize;be++)x(V.location+be,X.meshPerAttribute);C.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let be=0;be<V.locationSize;be++)g(V.location+be);i.bindBuffer(i.ARRAY_BUFFER,k);for(let be=0;be<V.locationSize;be++)S(V.location+be,$/V.locationSize,z,H,ee*N,(ve+$/V.locationSize*be)*N,K)}else{if(F.isInstancedBufferAttribute){for(let X=0;X<V.locationSize;X++)x(V.location+X,F.meshPerAttribute);C.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let X=0;X<V.locationSize;X++)g(V.location+X);i.bindBuffer(i.ARRAY_BUFFER,k);for(let X=0;X<V.locationSize;X++)S(V.location+X,$/V.locationSize,z,H,$*N,$/V.locationSize*X*N,K)}}else if(U!==void 0){let H=U[W];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(V.location,H);break;case 3:i.vertexAttrib3fv(V.location,H);break;case 4:i.vertexAttrib4fv(V.location,H);break;default:i.vertexAttrib1fv(V.location,H)}}}}m()}function w(){I();for(let C in n){let P=n[C];for(let O in P){let b=P[O];for(let D in b){let B=b[D];for(let U in B)h(B[U].object),delete B[U];delete b[D]}}delete n[C]}}function T(C){if(n[C.id]===void 0)return;let P=n[C.id];for(let O in P){let b=P[O];for(let D in b){let B=b[D];for(let U in B)h(B[U].object),delete B[U];delete b[D]}}delete n[C.id]}function d(C){for(let P in n){let O=n[P];for(let b in O){let D=O[b];if(D[C.id]===void 0)continue;let B=D[C.id];for(let U in B)h(B[U].object),delete B[U];delete D[C.id]}}}function _(C){for(let P in n){let O=n[P],b=C.isInstancedMesh===!0?C.id:0,D=O[b];if(D!==void 0){for(let B in D){let U=D[B];for(let W in U)h(U[W].object),delete U[W];delete D[B]}delete O[b],Object.keys(O).length===0&&delete n[P]}}}function I(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:d,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function fy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let p=0;p<h;p++)f+=c[p];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function dy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(d){return!(d!==On&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(d){let _=d===Gt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==bn&&d!==$n&&!_&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&($e("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:y,maxSamples:w,samples:T}}function py(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Vn,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let v=u.clippingPlanes,M=u.clipIntersection,g=u.clipShadows,x=i.get(u);if(!s||v===null||v.length===0||r&&!g)r?h(null):c();else{let m=r?0:n,S=m*4,y=x.clippingState||null;l.value=y,y=h(v,f,S,p);for(let w=0;w!==S;++w)y[w]=t[w];x.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,v){let M=u!==null?u.length:0,g=null;if(M!==0){if(g=l.value,v!==!0||g===null){let x=p+M*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<x)&&(g=new Float32Array(x));for(let S=0,y=p;S!==M;++S,y+=4)a.copy(u[S]).applyMatrix4(m,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}var Io=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ga(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kt(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:hn});r.uniforms.tEquirect.value=t;let a=new je(s,r),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=nn),new $r(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Mm=256,my=3,gy=20,Wm=256,Xm=16,xy=3,vy=new G,_y=new Le,na=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $r(1,10,null),this._boxMesh=new je(new kt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=vy}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,v=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(_y));let g=new $r(n,s,h);return g.position.copy(o),g.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=v,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Mm,$u(e))}_fromTexture(e,t){e.mapping===tr||e.mapping===jr?this._setSize(e.image.length===0?Mm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Sm(e,!1,!1),n=Math.log2(e)-my;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Sm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===tr||e.mapping===jr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=yy(),this._integrationMaterial=My());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Xm);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-xy)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Wm*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Sy());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Sm(i,e,t){return new Io(i,{minFilter:ni,generateMipmaps:e,type:Gt,colorSpace:Pn,depthBuffer:t})}function Lo(i,e,t){return new Ct({name:i,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:gn,blending:hn,depthTest:!1,depthWrite:!1})}function yy(){return Lo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function My(){return Lo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xm}},`

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
	`)}function Sy(){return Lo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gy}
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
	`)}function bm(){return Lo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Tm(){return Lo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function by(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===uc||p===fc)if(e.has(f)){let v=e.get(f).texture;return o(v,f.mapping)}else{let v=f.image;if(v&&v.height>0){let M=new Io(v.height);return M.fromEquirectangularTexture(i,f),e.set(f,M),f.addEventListener("dispose",c),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let p=f.mapping,v=p===uc||p===fc,M=p===tr||p===jr;if(v||M){let g=t.get(f),x=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new na(i)),g=v?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let m=f.image;return v&&m&&m.height>0||M&&m&&l(m)?(n===null&&(n=new na(i)),g=v?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,p){return p===uc?f.mapping=tr:p===fc&&(f.mapping=jr),f}function l(f){let p=0,v=6;for(let M=0;M<v;M++)f[M]!==void 0&&p++;return p===v}function c(f){let p=f.target;p.removeEventListener("dispose",c);let v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function h(f){let p=f.target;p.removeEventListener("dispose",h);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Ty(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&zs("WebGLRenderer: "+n+" extension not supported."),s}}}function Ey(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(let g in v.attributes)e.remove(v.attributes[g]);v.removeEventListener("dispose",o),delete s[v.id],a.unregister(v);let M=r.get(v);M&&(e.remove(M),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(v,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(v){let M=v.attributes;for(let g in M)e.update(M[g],i.ARRAY_BUFFER)}function u(v){let M=v.index,g=v.attributes.position,x=0;if(g===void 0)return;let m=M!==null?M.array.length:g.array.length/3-1,S=g.count>=65535?Oa:Fa,y=new S(Math.ceil(m/3)*6,1),w=y.array;if(M!==null){let d=M.array;x=M.version;for(let _=0,I=0;_<m;_+=3){let A=d[_+0],C=d[_+1],P=d[_+2];w[I++]=A,w[I++]=C,w[I++]=C,w[I++]=P,w[I++]=P,w[I++]=A}}else{x=g.version;for(let d=0,_=0;d<m;d+=3){let I=d+0,A=d+1,C=d+2;w[_++]=I,w[_++]=A,w[_++]=A,w[_++]=C,w[_++]=C,w[_++]=I}}y.version=x;let T=r.get(v);T&&e.remove(T),r.set(v,y)}function f(v){let M=r.get(v);if(M){let g=v.index;g!==null&&M.version<g.version&&u(v)}else u(v);return r.get(v)}function p(){for(let v in s){let M=s[v].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:f,dispose:p}}function wy(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,u*a,p),t.update(f,n,p))}function h(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let M=0;for(let g=0;g<p;g++)M+=f[g];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ay(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ry(i,e,t){let n=new WeakMap,s=new St;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let I=function(){d.dispose(),n.delete(o),o.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],S=0;p===!0&&(S=1),v===!0&&(S=2),M===!0&&(S=3);let y=o.attributes.position.count*S,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*w*4*u),d=new Na(T,y,w,u);d.type=$n,d.needsUpdate=!0;let _=S*4;for(let A=0;A<u;A++){let C=g[A],P=x[A],O=m[A],b=y*w*4*A;for(let D=0;D<C.count;D++){let B=D*_;p===!0&&(s.fromBufferAttribute(C,D),T[b+B+0]=s.x,T[b+B+1]=s.y,T[b+B+2]=s.z,T[b+B+3]=0),v===!0&&(s.fromBufferAttribute(P,D),T[b+B+4]=s.x,T[b+B+5]=s.y,T[b+B+6]=s.z,T[b+B+7]=0),M===!0&&(s.fromBufferAttribute(O,D),T[b+B+8]=s.x,T[b+B+9]=s.y,T[b+B+10]=s.z,T[b+B+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:d,size:new pe(y,w)},n.set(o,f),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Cy(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Py={[go]:"LINEAR_TONE_MAPPING",[xo]:"REINHARD_TONE_MAPPING",[vo]:"CINEON_TONE_MAPPING",[_o]:"ACES_FILMIC_TONE_MAPPING",[Mo]:"AGX_TONE_MAPPING",[er]:"NEUTRAL_TONE_MAPPING",[yo]:"CUSTOM_TONE_MAPPING"};function Iy(i,e,t,n,s,r){let a=new Ft(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new At;h.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ht([0,2,0,0,2,0],2));let u=new Wr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new je(h,u),p=new ts(-1,1,1,-1,0,1),v=null,M=null,g=!1,x,m=null,S=[],y=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let d=0;d<S.length;d++){let _=S[d];_.setSize&&_.setSize(w,T)}},this.setEffects=function(w){S=w,y=S.length>0&&S[0].isRenderPass===!0;let T=a.width,d=a.height;S.length>0&&o===null&&(o=new Ft(T,d,{type:Gt,depthBuffer:!1,stencilBuffer:!1}),l=new Ft(T,d,{type:Gt,depthBuffer:!1,stencilBuffer:!1}));let _=s===!0&&S.some(I=>I.needsDepthTexture===!0);_!==(a.depthTexture!==null)&&(_===!0&&c===null&&(c=new fi(T,d),r===!0&&(c.format=pi,c.type=is)),a.dispose(),a.depthTexture=_?c:null,a.resolveDepthBuffer=_,a.storeMultisampledDepthBuffer=_);for(let I=0;I<S.length;I++){let A=S[I];A.setSize&&A.setSize(T,d),_&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(w,T){if(g||w.toneMapping===wi&&S.length===0)return!1;if(m=T,T!==null){let d=T.width,_=T.height;(a.width!==d||a.height!==_)&&this.setSize(d,_)}return y===!1&&w.setRenderTarget(a),x=w.toneMapping,w.toneMapping=wi,!0},this.hasRenderPass=function(){return y},this.end=function(w,T){w.toneMapping=x,g=!0;let d=a,_=o;for(let I=0;I<S.length;I++){let A=S[I];A.enabled!==!1&&(A.render(w,_,d,T),A.needsSwap!==!1&&(d=_,_=_===o?l:o))}if(v!==w.outputColorSpace||M!==w.toneMapping){v=w.outputColorSpace,M=w.toneMapping,u.defines={},ct.getTransfer(v)===Mt&&(u.defines.SRGB_TRANSFER="");let I=Py[M];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=d.texture,w.setRenderTarget(m),w.render(f,p),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var qm=new jt,$m=new fi(1,1),Ym=new Va(1),Km=new Na,jm=new Gl,Zm=new Ga,Em=[],wm=[],Am=new Float32Array(16),Rm=new Float32Array(9),Cm=new Float32Array(4);function ia(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Em[s];if(r===void 0&&(r=new Float32Array(s),Em[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function th(i,e){let t=wm[e];t===void 0&&(t=new Int32Array(e),wm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ly(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function Fy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Cm.set(n),i.uniformMatrix2fv(this.addr,!1,Cm),rn(t,n)}}function Oy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Rm.set(n),i.uniformMatrix3fv(this.addr,!1,Rm),rn(t,n)}}function By(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Am.set(n),i.uniformMatrix4fv(this.addr,!1,Am),rn(t,n)}}function ky(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Vy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function nh(i){return i.version===0&&(i.compareFunction=Vu,i.needsUpdate=!0),i}function $y(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=nh($m):r=qm,t.setTexture2D(e||r,s)}function Yy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jm,s)}function Ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=nh(Ym):r=Zm,t.setTextureCube(e||r,s)}function jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Km,s)}function Zy(i){switch(i){case 5126:return Ly;case 35664:return Dy;case 35665:return Ny;case 35666:return Uy;case 35674:return Fy;case 35675:return Oy;case 35676:return By;case 5124:case 35670:return ky;case 35667:case 35671:return zy;case 35668:case 35672:return Hy;case 35669:case 35673:return Gy;case 5125:return Vy;case 36294:return Wy;case 36295:return Xy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return jy}}function Jy(i,e){i.uniform1fv(this.addr,e)}function Qy(i,e){let t=ia(e,this.size,2);i.uniform2fv(this.addr,t)}function eM(i,e){let t=ia(e,this.size,3);i.uniform3fv(this.addr,t)}function tM(i,e){let t=ia(e,this.size,4);i.uniform4fv(this.addr,t)}function nM(i,e){let t=ia(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function iM(i,e){let t=ia(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sM(i,e){let t=ia(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rM(i,e){i.uniform1iv(this.addr,e)}function aM(i,e){i.uniform2iv(this.addr,e)}function oM(i,e){i.uniform3iv(this.addr,e)}function lM(i,e){i.uniform4iv(this.addr,e)}function cM(i,e){i.uniform1uiv(this.addr,e)}function hM(i,e){i.uniform2uiv(this.addr,e)}function uM(i,e){i.uniform3uiv(this.addr,e)}function fM(i,e){i.uniform4uiv(this.addr,e)}function dM(i,e,t){let n=this.cache,s=e.length,r=th(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=nh($m):a=qm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function pM(i,e,t){let n=this.cache,s=e.length,r=th(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||jm,r[a])}function mM(i,e,t){let n=this.cache,s=e.length,r=th(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=nh(Ym):a=Zm;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function gM(i,e,t){let n=this.cache,s=e.length,r=th(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Km,r[a])}function xM(i){switch(i){case 5126:return Jy;case 35664:return Qy;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return sM;case 5124:case 35670:return rM;case 35667:case 35671:return aM;case 35668:case 35672:return oM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return hM;case 36295:return uM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}var cf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zy(t.type)}},hf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xM(t.type)}},uf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},of=/(\w+)(\])?(\[|\.)?/g;function Pm(i,e){i.seq.push(e),i.map[e.id]=e}function vM(i,e,t){let n=i.name,s=n.length;for(of.lastIndex=0;;){let r=of.exec(n),a=of.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pm(t,c===void 0?new cf(o,i,e):new hf(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new uf(o),Pm(t,u)),t=u}}}var ta=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);vM(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Im(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var _M=37297,yM=0;function MM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Lm=new st;function SM(i){ct._getMatrix(Lm,ct.workingColorSpace,i);let e=`mat3( ${Lm.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case La:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+MM(i.getShaderSource(e),o)}else return r}function bM(i,e){let t=SM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var TM={[go]:"Linear",[xo]:"Reinhard",[vo]:"Cineon",[_o]:"ACESFilmic",[Mo]:"AgX",[er]:"Neutral",[yo]:"Custom"};function EM(i,e){let t=TM[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qc=new G;function wM(){ct.getLuminanceCoefficients(Qc);let i=Qc.x.toFixed(4),e=Qc.y.toFixed(4),t=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function RM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function CM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Po(i){return i!==""}function Nm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Um(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var PM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(i){return i.replace(PM,IM)}function IM(i,e){let t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ff(t)}var LM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fm(i){return i.replace(LM,DM)}function DM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Om(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var NM={[Js]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function UM(i){return NM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var FM={[jr]:"ENVMAP_MODE_REFRACTION"};function OM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":FM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var BM={[hc]:"ENVMAP_BLENDING_MULTIPLY",[Zp]:"ENVMAP_BLENDING_MIX",[Jp]:"ENVMAP_BLENDING_ADD"};function kM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":BM[i.combine]||"ENVMAP_BLENDING_NONE"}function zM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=UM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=OM(t),u=kM(t),f=AM(t),p=RM(r),v=s.createProgram(),M,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Po).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Po).join(`
`),g.length>0&&(g+=`
`)):(M=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),g=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?ft.tonemapping_pars_fragment:"",t.toneMapping!==wi?EM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,bM("linearToOutputTexel",t.outputColorSpace),wM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),a=ff(a),a=Nm(a,t),a=Um(a,t),o=ff(o),o=Nm(o,t),o=Um(o,t),a=Fm(a),o=Fm(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let m=x+M+a,S=x+g+o,y=Im(s,s.VERTEX_SHADER,m),w=Im(s,s.FRAGMENT_SHADER,S);s.attachShader(v,y),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(A){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(v)||"",P=s.getShaderInfoLog(y)||"",O=s.getShaderInfoLog(w)||"",b=C.trim(),D=P.trim(),B=O.trim(),U=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,y,w);else{let V=Dm(s,y,"vertex"),F=Dm(s,w,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+b+`
`+V+`
`+F)}else b!==""?$e("WebGLProgram: Program Info Log:",b):(D===""||B==="")&&(W=!1);W&&(A.diagnostics={runnable:U,programLog:b,vertexShader:{log:D,prefix:M},fragmentShader:{log:B,prefix:g}})}s.deleteShader(y),s.deleteShader(w),d=new ta(s,v),_=CM(s,v)}let d;this.getUniforms=function(){return d===void 0&&T(this),d};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,_M)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=w,this}var HM=0,df=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pf(e),t.set(e,n)),n}},pf=class{constructor(e){this.id=HM++,this.code=e,this.usedTimes=0}};function GM(i){return i===As||i===wo||i===Ao}function VM(i,e,t,n,s,r){let a=new Br,o=new df,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(d){return l.add(d),d===0?"uv":`uv${d}`}function v(d,_,I,A,C,P){let O=A.fog,b=C.geometry,D=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?A.environment:null,B=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,U=e.get(d.envMap||D,B),W=f[d.type],V=n.precision;d.precision!==null&&(V=n.getMaxPrecision(d.precision),V!==d.precision&&$e("WebGLProgram.getParameters:",d.precision,"not supported, using",V,"instead."));let F=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,H=F!==void 0?F.length:0,$=0;b.morphAttributes.position!==void 0&&($=1),b.morphAttributes.normal!==void 0&&($=2),b.morphAttributes.color!==void 0&&($=3);let Q,k,z,N;if(W){let Fe=Ci[W];Q=Fe.vertexShader,k=Fe.fragmentShader}else{Q=d.vertexShader,k=d.fragmentShader;let Fe=o.getVertexShaderStage(d),wt=o.getFragmentShaderStage(d);o.update(d,Fe,wt),z=Fe.id,N=wt.id}let K=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),ee=C.isInstancedMesh===!0,ve=C.isBatchedMesh===!0,be=!!d.map,_e=!!d.matcap,Ie=!!U,re=Ie&&U.isPMREMTexture===!0,me=!!d.aoMap,Me=!!d.lightMap,ye=!!d.bumpMap&&d.wireframe===!1,ce=!!d.normalMap,ke=!!d.displacementMap,Ue=!!d.emissiveMap,We=!!d.metalnessMap,Ze=!!d.roughnessMap,Je=d.anisotropy>0,Y=d.clearcoat>0,bt=d.diffuseRoughness>0,et=d.dispersion>0,ue=d.retroreflectivity>0,J=d.iridescence>0,ge=d.sheen>0,de=d.transmission>0,Ae=Je&&!!d.anisotropyMap,L=Y&&!!d.clearcoatMap,E=Y&&!!d.clearcoatNormalMap,Z=Y&&!!d.clearcoatRoughnessMap,fe=bt&&!!d.diffuseRoughnessMap,se=J&&!!d.iridescenceMap,xe=J&&!!d.iridescenceThicknessMap,Te=ge&&!!d.sheenColorMap,oe=ge&&!!d.sheenRoughnessMap,le=!!d.specularMap,Se=!!d.specularColorMap,q=!!d.specularIntensityMap,he=de&&!!d.transmissionMap,ne=de&&!!d.thicknessMap,Re=!!d.gradientMap,we=!!d.alphaMap,Ce=d.alphaTest>0,ze=!!d.alphaHash,rt=!!d.extensions,Ee=wi;d.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let qe=re?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,it={shaderID:W,shaderType:d.type,shaderName:d.name,vertexShader:Q,fragmentShader:k,defines:d.defines,customVertexShaderID:z,customFragmentShaderID:N,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:V,batching:ve,batchingColor:ve&&C._colorsTexture!==null,instancing:ee,instancingColor:ee&&C.instanceColor!==null,instancingMorph:ee&&C.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!d.alphaToCoverage,map:be,matcap:_e,envMap:Ie,envMapMode:Ie&&U.mapping,envMapPMREM:re,envMapMaxLod:re?qe.length-1:null,envMapSize:re?qe[0].width:null,aoMap:me,lightMap:Me,bumpMap:ye,normalMap:ce,displacementMap:ke,emissiveMap:Ue,normalMapObjectSpace:ce&&d.normalMapType===nm,normalMapTangentSpace:ce&&d.normalMapType===ea,packedNormalMap:ce&&d.normalMapType===ea&&GM(d.normalMap.format),metalnessMap:We,roughnessMap:Ze,anisotropy:Je,anisotropyMap:Ae,clearcoat:Y,clearcoatMap:L,clearcoatNormalMap:E,clearcoatRoughnessMap:Z,diffuseRoughness:bt,diffuseRoughnessMap:fe,dispersion:et,retroreflection:ue,iridescence:J,iridescenceMap:se,iridescenceThicknessMap:xe,sheen:ge,sheenColorMap:Te,sheenRoughnessMap:oe,specularMap:le,specularColorMap:Se,specularIntensityMap:q,transmission:de,transmissionMap:he,thicknessMap:ne,gradientMap:Re,opaque:d.transparent===!1&&d.blending===Kr&&d.alphaToCoverage===!1,alphaMap:we,alphaTest:Ce,alphaHash:ze,combine:d.combine,mapUv:be&&p(d.map.channel),aoMapUv:me&&p(d.aoMap.channel),lightMapUv:Me&&p(d.lightMap.channel),bumpMapUv:ye&&p(d.bumpMap.channel),normalMapUv:ce&&p(d.normalMap.channel),displacementMapUv:ke&&p(d.displacementMap.channel),emissiveMapUv:Ue&&p(d.emissiveMap.channel),metalnessMapUv:We&&p(d.metalnessMap.channel),roughnessMapUv:Ze&&p(d.roughnessMap.channel),anisotropyMapUv:Ae&&p(d.anisotropyMap.channel),clearcoatMapUv:L&&p(d.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(d.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&p(d.diffuseRoughnessMap.channel),iridescenceMapUv:se&&p(d.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(d.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(d.sheenColorMap.channel),sheenRoughnessMapUv:oe&&p(d.sheenRoughnessMap.channel),specularMapUv:le&&p(d.specularMap.channel),specularColorMapUv:Se&&p(d.specularColorMap.channel),specularIntensityMapUv:q&&p(d.specularIntensityMap.channel),transmissionMapUv:he&&p(d.transmissionMap.channel),thicknessMapUv:ne&&p(d.thicknessMap.channel),alphaMapUv:we&&p(d.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(ce||Je),vertexNormals:!!b.attributes.normal,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!b.attributes.uv&&(be||we),fog:!!O,useFog:d.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||b.attributes.normal===void 0&&ce===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:X,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:b.attributes.position!==void 0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:$,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:P.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:d.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:be&&d.map.isVideoTexture===!0&&ct.getTransfer(d.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ue&&d.emissiveMap.isVideoTexture===!0&&ct.getTransfer(d.emissiveMap.colorSpace)===Mt,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===Bt,flipSided:d.side===gn,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:rt&&d.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&d.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function M(d){let _=[];if(d.shaderID?_.push(d.shaderID):(_.push(d.customVertexShaderID),_.push(d.customFragmentShaderID)),d.defines!==void 0)for(let I in d.defines)_.push(I),_.push(d.defines[I]);return d.isRawShaderMaterial===!1&&(g(_,d),x(_,d),_.push(i.outputColorSpace)),_.push(d.customProgramCacheKey),_.join()}function g(d,_){d.push(_.precision),d.push(_.outputColorSpace),d.push(_.envMapMode),d.push(_.envMapPMREM),d.push(_.envMapMaxLod),d.push(_.envMapSize),d.push(_.mapUv),d.push(_.alphaMapUv),d.push(_.lightMapUv),d.push(_.aoMapUv),d.push(_.bumpMapUv),d.push(_.normalMapUv),d.push(_.displacementMapUv),d.push(_.emissiveMapUv),d.push(_.metalnessMapUv),d.push(_.roughnessMapUv),d.push(_.anisotropyMapUv),d.push(_.clearcoatMapUv),d.push(_.clearcoatNormalMapUv),d.push(_.clearcoatRoughnessMapUv),d.push(_.diffuseRoughnessMapUv),d.push(_.iridescenceMapUv),d.push(_.iridescenceThicknessMapUv),d.push(_.sheenColorMapUv),d.push(_.sheenRoughnessMapUv),d.push(_.specularMapUv),d.push(_.specularColorMapUv),d.push(_.specularIntensityMapUv),d.push(_.transmissionMapUv),d.push(_.thicknessMapUv),d.push(_.combine),d.push(_.fogExp2),d.push(_.sizeAttenuation),d.push(_.morphTargetsCount),d.push(_.numSunLights),d.push(_.numDirLights),d.push(_.numPointLights),d.push(_.numSpotLights),d.push(_.numSpotLightMaps),d.push(_.numHemiLights),d.push(_.numRectAreaLights),d.push(_.numSunLightShadows),d.push(_.numDirLightShadows),d.push(_.numPointLightShadows),d.push(_.numSpotLightShadows),d.push(_.numSpotLightShadowsWithMaps),d.push(_.numLightProbes),d.push(_.numLightProbeGrids),d.push(_.shadowMapType),d.push(_.toneMapping),d.push(_.numClippingPlanes),d.push(_.numClipIntersection),d.push(_.depthPacking)}function x(d,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.retroreflection&&a.enable(24),_.diffuseRoughness&&a.enable(25),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),d.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),d.push(a.mask)}function m(d){let _=f[d.type],I;if(_){let A=Ci[_];I=xn.clone(A.uniforms)}else I=d.uniforms;return I}function S(d,_){let I=h.get(_);return I!==void 0?++I.usedTimes:(I=new zM(i,_,d,s),c.push(I),h.set(_,I)),I}function y(d){if(--d.usedTimes===0){let _=c.indexOf(d);c[_]=c[c.length-1],c.pop(),h.delete(d.cacheKey),d.destroy()}}function w(d){o.remove(d)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:M,getUniforms:m,acquireProgram:S,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:T}}function WM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function XM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Bm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function km(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,v,M,g,x){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:v,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:g,group:x},i[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=v,m.materialVariant=a(f),m.groupOrder=M,m.renderOrder=f.renderOrder,m.z=g,m.group=x),e++,m}function l(f,p,v,M,g,x,m){m.reversedDepth===!0&&(g=-g);let S=o(f,p,v,M,g,x);v.transmission>0?n.push(S):v.transparent===!0?s.push(S):t.push(S)}function c(f,p,v,M,g,x){let m=o(f,p,v,M,g,x);v.transmission>0?n.unshift(m):v.transparent===!0?s.unshift(m):t.unshift(m)}function h(f,p){t.length>1&&t.sort(f||XM),n.length>1&&n.sort(p||Bm),s.length>1&&s.sort(p||Bm)}function u(){for(let f=e,p=i.length;f<p;f++){let v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function qM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new km,i.set(n,[a])):s>=r.length?(a=new km,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function $M(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Le};break;case"SpotLight":t={position:new G,direction:new G,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function YM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var KM=0;function jM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ZM(i){let e=new $M,t=YM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let s=new G,r=new Ye,a=new Ye;function o(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let p=0,v=0,M=0,g=0,x=0,m=0,S=0,y=0,w=0,T=0,d=0,_=0,I=0,A=0;c.sort(jM);for(let P=0,O=c.length;P<O;P++){let b=c[P],D=b.color,B=b.intensity,U=b.distance,W=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===As?W=b.shadow.map.texture:W=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)h+=D.r*B,u+=D.g*B,f+=D.b*B;else if(b.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(b.sh.coefficients[V],B);A++}else if(b.isSunLight){let V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let F=b.shadow,H=t.get(b);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),n.sunShadow[v]=H,n.sunShadowMap[v]=W;let $=F.getViewportCount();for(let Q=0;Q<$;Q++)n.sunShadowMatrix[M+Q]=F.getMatrix(Q),n.sunShadowCascade[M+Q]=F._cascadeData[Q];M+=$,v++}n.sun[p]=V,p++}else if(b.isDirectionalLight){let V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let F=b.shadow,H=t.get(b);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,n.directionalShadow[g]=H,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=b.shadow.matrix,w++}n.directional[g]=V,g++}else if(b.isSpotLight){let V=e.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(D).multiplyScalar(B),V.distance=U,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,n.spot[m]=V;let F=b.shadow;if(b.map&&(n.spotLightMap[_]=b.map,_++,F.updateMatrices(b),b.castShadow&&I++),n.spotLightMatrix[m]=F.matrix,b.castShadow){let H=t.get(b);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,n.spotShadow[m]=H,n.spotShadowMap[m]=W,d++}m++}else if(b.isRectAreaLight){let V=e.get(b);V.color.copy(D).multiplyScalar(B),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),n.rectArea[S]=V,S++}else if(b.isPointLight){let V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),V.distance=b.distance,V.decay=b.decay,b.castShadow){let F=b.shadow,H=t.get(b);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,H.shadowCameraNear=F.camera.near,H.shadowCameraFar=F.camera.far,n.pointShadow[x]=H,n.pointShadowMap[x]=W,n.pointShadowMatrix[x]=b.shadow.matrix,T++}n.point[x]=V,x++}else if(b.isHemisphereLight){let V=e.get(b);V.skyColor.copy(b.color).multiplyScalar(B),V.groundColor.copy(b.groundColor).multiplyScalar(B),n.hemi[y]=V,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.sunLength!==p||C.directionalLength!==g||C.pointLength!==x||C.spotLength!==m||C.rectAreaLength!==S||C.hemiLength!==y||C.numSunShadows!==v||C.numDirectionalShadows!==w||C.numPointShadows!==T||C.numSpotShadows!==d||C.numSpotMaps!==_||C.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=g,n.spot.length=m,n.rectArea.length=S,n.point.length=x,n.hemi.length=y,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=d,n.spotShadowMap.length=d,n.spotLightMatrix.length=d+_-I,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=A,C.sunLength=p,C.directionalLength=g,C.pointLength=x,C.spotLength=m,C.rectAreaLength=S,C.hemiLength=y,C.numSunShadows=v,C.numDirectionalShadows=w,C.numPointShadows=T,C.numSpotShadows=d,C.numSpotMaps=_,C.numLightProbes=A,n.version=KM++)}function l(c,h){let u=0,f=0,p=0,v=0,M=0,g=0,x=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){let y=c[m];if(y.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(x),u++}else if(y.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),f++}else if(y.isSpotLight){let w=n.spot[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),v++}else if(y.isRectAreaLight){let w=n.rectArea[M];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),a.identity(),r.copy(y.matrixWorld),r.premultiply(x),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let w=n.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),p++}else if(y.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(x),g++}}}return{setup:o,setupView:l,state:n}}function zm(i){let e=new ZM(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function JM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new zm(i),e.set(s,[o])):r>=a.length?(o=new zm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var QM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eS=`uniform sampler2D shadow_pass;
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
}`,tS=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],nS=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Hm=new Ye,Co=new G,lf=new G;function iS(i,e,t){let n=new _s,s=new pe,r=new pe,a=new St,o=new Jl,l=new Ql,c={},h=t.maxTextureSize,u={[Ei]:gn,[gn]:Ei,[Bt]:Bt},f=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:QM,fragmentShader:eS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let v=new At;v.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new je(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let x=this.type;this.render=function(T,d,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Fp&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Js);let I=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(hn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let O=x!==this.type;O&&d.traverse(function(b){b.material&&(Array.isArray(b.material)?b.material.forEach(D=>D.needsUpdate=!0):b.material.needsUpdate=!0)});for(let b=0,D=T.length;b<D;b++){let B=T[b],U=B.shadow;if(U===void 0){$e("WebGLShadowMap:",B,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let W=U.getFrameExtents();s.multiply(W),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,U.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=V,U.map===null||O===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Yr){if(B.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Ft(s.x,s.y,{format:As,type:Gt,minFilter:nn,magFilter:nn,generateMipmaps:!1}),U.map.texture.name=B.name+".shadowMap",U.map.depthTexture=new fi(s.x,s.y,$n),U.map.depthTexture.name=B.name+".shadowMapDepth",U.map.depthTexture.format=Xi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ut,U.map.depthTexture.magFilter=Ut}else B.isPointLight?(U.map=new Io(s.x),U.map.depthTexture=new Va(s.x,di)):(U.map=new Ft(s.x,s.y),U.map.depthTexture=new fi(s.x,s.y,di)),U.map.depthTexture.name=B.name+".shadowMap",U.map.depthTexture.format=Xi,this.type===Js?(U.map.depthTexture.compareFunction=V?Gu:Hu,U.map.depthTexture.minFilter=nn,U.map.depthTexture.magFilter=nn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ut,U.map.depthTexture.magFilter=Ut);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let F=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();B.isPointLight!==!0&&U.updateMatrices(B,_);let H=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:_.layers;for(let $=0;$<F;$++){let Q=U.getCamera($);if(B.isPointLight){let k=U.camera,z=U.matrix,N=B.distance||k.far;N!==k.far&&(k.far=N,k.updateProjectionMatrix()),Co.setFromMatrixPosition(B.matrixWorld),k.position.copy(Co),lf.copy(k.position),lf.add(tS[$]),k.up.copy(nS[$]),k.lookAt(lf),k.updateMatrixWorld(),z.makeTranslation(-Co.x,-Co.y,-Co.z),Hm.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Hm,k.coordinateSystem,k.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,$),i.clear();else{$===0&&(i.setRenderTarget(U.map),i.clear());let k=U.getViewport($);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),P.viewport(a)}n=U.getFrustum($),y(d,_,Q,B,H,this.type)}U.isPointLightShadow!==!0&&this.type===Yr&&m(U,_),U.needsUpdate=!1}x=this.type,g.needsUpdate=!1,i.setRenderTarget(I,A,C)};function m(T,d){let _=e.update(M);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ft(s.x,s.y,{format:As,type:Gt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(d,null,_,f,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(d,null,_,p,M,null)}function S(T,d,_,I){let A=null,C=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)A=C;else if(A=_.isPointLight===!0?l:o,i.localClippingEnabled&&d.clipShadows===!0&&Array.isArray(d.clippingPlanes)&&d.clippingPlanes.length!==0||d.displacementMap&&d.displacementScale!==0||d.alphaMap&&d.alphaTest>0||d.map&&d.alphaTest>0||d.alphaToCoverage===!0){let P=A.uuid,O=d.uuid,b=c[P];b===void 0&&(b={},c[P]=b);let D=b[O];D===void 0&&(D=A.clone(),b[O]=D,d.addEventListener("dispose",w)),A=D}if(A.visible=d.visible,A.wireframe=d.wireframe,I===Yr?A.side=d.shadowSide!==null?d.shadowSide:d.side:A.side=d.shadowSide!==null?d.shadowSide:u[d.side],A.alphaMap=d.alphaMap,A.alphaTest=d.alphaToCoverage===!0?.5:d.alphaTest,A.map=d.map,A.clipShadows=d.clipShadows,A.clippingPlanes=d.clippingPlanes,A.clipIntersection=d.clipIntersection,A.displacementMap=d.displacementMap,A.displacementScale=d.displacementScale,A.displacementBias=d.displacementBias,A.wireframeLinewidth=d.wireframeLinewidth,A.linewidth=d.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let P=i.properties.get(A);P.light=_}return A}function y(T,d,_,I,A,C){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Yr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let b=e.update(T),D=T.material;if(Array.isArray(D)){let B=b.groups;for(let U=0,W=B.length;U<W;U++){let V=B[U],F=D[V.materialIndex];if(F&&F.visible){let H=S(T,F,I,C);T.onBeforeShadow(i,T,d,_,b,H,V),i.renderBufferDirect(_,null,b,H,T,V),T.onAfterShadow(i,T,d,_,b,H,V)}}}else if(D.visible){let B=S(T,D,I,C);T.onBeforeShadow(i,T,d,_,b,B,null),i.renderBufferDirect(_,null,b,B,T,null),T.onAfterShadow(i,T,d,_,b,B,null)}}let O=T.children;for(let b=0,D=O.length;b<D;b++)y(O[b],d,_,I,A,C)}function w(T){T.target.removeEventListener("dispose",w);for(let _ in c){let I=c[_],A=T.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function sS(i,e){function t(){let q=!1,he=new St,ne=null,Re=new St(0,0,0,0);return{setMask:function(we){ne!==we&&!q&&(i.colorMask(we,we,we,we),ne=we)},setLocked:function(we){q=we},setClear:function(we,Ce,ze,rt,Ee){Ee===!0&&(we*=rt,Ce*=rt,ze*=rt),he.set(we,Ce,ze,rt),Re.equals(he)===!1&&(i.clearColor(we,Ce,ze,rt),Re.copy(he))},reset:function(){q=!1,ne=null,Re.set(-1,0,0,0)}}}function n(){let q=!1,he=!1,ne=null,Re=null,we=null;return{setReversed:function(Ce){if(he!==Ce){let ze=e.get("EXT_clip_control");Ce?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),he=Ce;let rt=we;we=null,this.setClear(rt)}},getReversed:function(){return he},setTest:function(Ce){Ce?X(i.DEPTH_TEST):ee(i.DEPTH_TEST)},setMask:function(Ce){ne!==Ce&&!q&&(i.depthMask(Ce),ne=Ce)},setFunc:function(Ce){if(he&&(Ce=fm[Ce]),Re!==Ce){switch(Ce){case Dl:i.depthFunc(i.NEVER);break;case Nl:i.depthFunc(i.ALWAYS);break;case Ul:i.depthFunc(i.LESS);break;case Lr:i.depthFunc(i.LEQUAL);break;case Fl:i.depthFunc(i.EQUAL);break;case Ol:i.depthFunc(i.GEQUAL);break;case Bl:i.depthFunc(i.GREATER);break;case kl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=Ce}},setLocked:function(Ce){q=Ce},setClear:function(Ce){we!==Ce&&(we=Ce,he&&(Ce=1-Ce),i.clearDepth(Ce))},reset:function(){q=!1,ne=null,Re=null,we=null,he=!1}}}function s(){let q=!1,he=null,ne=null,Re=null,we=null,Ce=null,ze=null,rt=null,Ee=null;return{setTest:function(qe){q||(qe?X(i.STENCIL_TEST):ee(i.STENCIL_TEST))},setMask:function(qe){he!==qe&&!q&&(i.stencilMask(qe),he=qe)},setFunc:function(qe,it,Fe){(ne!==qe||Re!==it||we!==Fe)&&(i.stencilFunc(qe,it,Fe),ne=qe,Re=it,we=Fe)},setOp:function(qe,it,Fe){(Ce!==qe||ze!==it||rt!==Fe)&&(i.stencilOp(qe,it,Fe),Ce=qe,ze=it,rt=Fe)},setLocked:function(qe){q=qe},setClear:function(qe){Ee!==qe&&(i.clearStencil(qe),Ee=qe)},reset:function(){q=!1,he=null,ne=null,Re=null,we=null,Ce=null,ze=null,rt=null,Ee=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},f={},p=new WeakMap,v=[],M=null,g=!1,x=null,m=null,S=null,y=null,w=null,T=null,d=null,_=new Le(0,0,0),I=0,A=!1,C=null,P=null,O=null,b=null,D=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,W=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=W>=2);let F=null,H={},$=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),k=new St().fromArray($),z=new St().fromArray(Q);function N(q,he,ne,Re){let we=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(q,Ce),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<ne;ze++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(he+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Ce}let K={};K[i.TEXTURE_2D]=N(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=N(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=N(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=N(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(i.DEPTH_TEST),a.setFunc(Lr),ye(!1),ce(Ru),X(i.CULL_FACE),me(hn);function X(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function ee(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function ve(q,he){return f[q]!==he?(i.bindFramebuffer(q,he),f[q]=he,q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he),!0):!1}function be(q,he){let ne=v,Re=!1;if(q){ne=p.get(he),ne===void 0&&(ne=[],p.set(he,ne));let we=q.textures;if(ne.length!==we.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,ze=we.length;Ce<ze;Ce++)ne[Ce]=i.COLOR_ATTACHMENT0+Ce;ne.length=we.length,Re=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ne)}function _e(q){return M!==q?(i.useProgram(q),M=q,!0):!1}let Ie={[ti]:i.FUNC_ADD,[Op]:i.FUNC_SUBTRACT,[Bp]:i.FUNC_REVERSE_SUBTRACT};Ie[kp]=i.MIN,Ie[zp]=i.MAX;let re={[Qs]:i.ZERO,[Hp]:i.ONE,[Gp]:i.SRC_COLOR,[Iu]:i.SRC_ALPHA,[qp]:i.SRC_ALPHA_SATURATE,[mo]:i.DST_COLOR,[po]:i.DST_ALPHA,[Vp]:i.ONE_MINUS_SRC_COLOR,[Lu]:i.ONE_MINUS_SRC_ALPHA,[Xp]:i.ONE_MINUS_DST_COLOR,[Wp]:i.ONE_MINUS_DST_ALPHA,[$p]:i.CONSTANT_COLOR,[Yp]:i.ONE_MINUS_CONSTANT_COLOR,[Kp]:i.CONSTANT_ALPHA,[jp]:i.ONE_MINUS_CONSTANT_ALPHA};function me(q,he,ne,Re,we,Ce,ze,rt,Ee,qe){if(q===hn){g===!0&&(ee(i.BLEND),g=!1);return}if(g===!1&&(X(i.BLEND),g=!0),q!==cc){if(q!==x||qe!==A){if((m!==ti||w!==ti)&&(i.blendEquation(i.FUNC_ADD),m=ti,w=ti),qe)switch(q){case Kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qn:i.blendFunc(i.ONE,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",q);break}else switch(q){case Kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cu:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pu:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",q);break}S=null,y=null,T=null,d=null,_.set(0,0,0),I=0,x=q,A=qe}return}we=we||he,Ce=Ce||ne,ze=ze||Re,(he!==m||we!==w)&&(i.blendEquationSeparate(Ie[he],Ie[we]),m=he,w=we),(ne!==S||Re!==y||Ce!==T||ze!==d)&&(i.blendFuncSeparate(re[ne],re[Re],re[Ce],re[ze]),S=ne,y=Re,T=Ce,d=ze),(rt.equals(_)===!1||Ee!==I)&&(i.blendColor(rt.r,rt.g,rt.b,Ee),_.copy(rt),I=Ee),x=q,A=!1}function Me(q,he){q.side===Bt?ee(i.CULL_FACE):X(i.CULL_FACE);let ne=q.side===gn;he&&(ne=!ne),ye(ne),q.blending===Kr&&q.transparent===!1?me(hn):me(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);let Re=q.stencilWrite;o.setTest(Re),Re&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ue(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function ye(q){C!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),C=q)}function ce(q){q!==Np?(X(i.CULL_FACE),q!==P&&(q===Ru?i.cullFace(i.BACK):q===Up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),P=q}function ke(q){q!==O&&(U&&i.lineWidth(q),O=q)}function Ue(q,he,ne){q?(X(i.POLYGON_OFFSET_FILL),(b!==he||D!==ne)&&(b=he,D=ne,a.getReversed()&&(he=-he,ne=-ne),i.polygonOffset(he,ne))):ee(i.POLYGON_OFFSET_FILL)}function We(q){q?X(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}function Ze(q){q===void 0&&(q=i.TEXTURE0+B-1),F!==q&&(i.activeTexture(q),F=q)}function Je(q,he,ne){ne===void 0&&(F===null?ne=i.TEXTURE0+B-1:ne=F);let Re=H[ne];Re===void 0&&(Re={type:void 0,texture:void 0},H[ne]=Re),(Re.type!==q||Re.texture!==he)&&(F!==ne&&(i.activeTexture(ne),F=ne),i.bindTexture(q,he||K[q]),Re.type=q,Re.texture=he)}function Y(){let q=H[F];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function bt(){try{i.compressedTexImage2D(...arguments)}catch(q){Qe("WebGLState:",q)}}function et(){try{i.compressedTexImage3D(...arguments)}catch(q){Qe("WebGLState:",q)}}function ue(){try{i.texSubImage2D(...arguments)}catch(q){Qe("WebGLState:",q)}}function J(){try{i.texSubImage3D(...arguments)}catch(q){Qe("WebGLState:",q)}}function ge(){try{i.compressedTexSubImage2D(...arguments)}catch(q){Qe("WebGLState:",q)}}function de(){try{i.compressedTexSubImage3D(...arguments)}catch(q){Qe("WebGLState:",q)}}function Ae(){try{i.texStorage2D(...arguments)}catch(q){Qe("WebGLState:",q)}}function L(){try{i.texStorage3D(...arguments)}catch(q){Qe("WebGLState:",q)}}function E(){try{i.texImage2D(...arguments)}catch(q){Qe("WebGLState:",q)}}function Z(){try{i.texImage3D(...arguments)}catch(q){Qe("WebGLState:",q)}}function fe(q){return u[q]!==void 0?u[q]:i.getParameter(q)}function se(q,he){u[q]!==he&&(i.pixelStorei(q,he),u[q]=he)}function xe(q){k.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),k.copy(q))}function Te(q){z.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),z.copy(q))}function oe(q,he){let ne=c.get(he);ne===void 0&&(ne=new WeakMap,c.set(he,ne));let Re=ne.get(q);Re===void 0&&(Re=i.getUniformBlockIndex(he,q.name),i.uniformBlockBinding(he,Re,Re),ne.set(q,Re))}function le(q,he,ne){let we=c.get(he).get(q);l[we]!==ne&&(i.bindBufferBase(i.UNIFORM_BUFFER,we,ne),l[we]=ne)}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},F=null,H={},f={},l={},p=new WeakMap,v=[],M=null,g=!1,x=null,m=null,S=null,y=null,w=null,T=null,d=null,_=new Le(0,0,0),I=0,A=!1,C=null,P=null,O=null,b=null,D=null,k.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:ee,bindFramebuffer:ve,drawBuffers:be,useProgram:_e,setBlending:me,setMaterial:Me,setFlipSided:ye,setCullFace:ce,setLineWidth:ke,setPolygonOffset:Ue,setScissorTest:We,activeTexture:Ze,bindTexture:Je,unbindTexture:Y,compressedTexImage2D:bt,compressedTexImage3D:et,texImage2D:E,texImage3D:Z,pixelStorei:se,getParameter:fe,updateUBOMapping:oe,uniformBlockBinding:le,texStorage2D:Ae,texStorage3D:L,texSubImage2D:ue,texSubImage3D:J,compressedTexSubImage2D:ge,compressedTexSubImage3D:de,scissor:xe,viewport:Te,reset:Se}}function rS(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,u=new Set,f,p=new WeakMap,v=new Set,M=new FinalizationRegistry(L=>v.delete(L)),g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return g?new OffscreenCanvas(L,E):Ur("canvas")}function m(L,E,Z){let fe=1,se=Ae(L);if((se.width>Z||se.height>Z)&&(fe=Z/Math.max(se.width,se.height)),fe<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let xe=Math.floor(fe*se.width),Te=Math.floor(fe*se.height);f===void 0&&(f=x(xe,Te));let oe=E?x(xe,Te):f;return oe.width=xe,oe.height=Te,oe.getContext("2d").drawImage(L,0,0,xe,Te),$e("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+xe+"x"+Te+")."),oe}else return"data"in L&&$e("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){i.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(L,E,Z,fe,se,xe=!1){if(L!==null){if(i[L]!==void 0)return i[L];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Te;fe&&(Te=e.get("EXT_texture_norm16"),Te||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=E;if(E===i.RED&&(Z===i.FLOAT&&(oe=i.R32F),Z===i.HALF_FLOAT&&(oe=i.R16F),Z===i.UNSIGNED_BYTE&&(oe=i.R8),Z===i.UNSIGNED_SHORT&&Te&&(oe=Te.R16_EXT),Z===i.SHORT&&Te&&(oe=Te.R16_SNORM_EXT)),E===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.R8UI),Z===i.UNSIGNED_SHORT&&(oe=i.R16UI),Z===i.UNSIGNED_INT&&(oe=i.R32UI),Z===i.BYTE&&(oe=i.R8I),Z===i.SHORT&&(oe=i.R16I),Z===i.INT&&(oe=i.R32I)),E===i.RG&&(Z===i.FLOAT&&(oe=i.RG32F),Z===i.HALF_FLOAT&&(oe=i.RG16F),Z===i.UNSIGNED_BYTE&&(oe=i.RG8),Z===i.UNSIGNED_SHORT&&Te&&(oe=Te.RG16_EXT),Z===i.SHORT&&Te&&(oe=Te.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RG8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RG16UI),Z===i.UNSIGNED_INT&&(oe=i.RG32UI),Z===i.BYTE&&(oe=i.RG8I),Z===i.SHORT&&(oe=i.RG16I),Z===i.INT&&(oe=i.RG32I)),E===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),Z===i.UNSIGNED_INT&&(oe=i.RGB32UI),Z===i.BYTE&&(oe=i.RGB8I),Z===i.SHORT&&(oe=i.RGB16I),Z===i.INT&&(oe=i.RGB32I)),E===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),Z===i.UNSIGNED_INT&&(oe=i.RGBA32UI),Z===i.BYTE&&(oe=i.RGBA8I),Z===i.SHORT&&(oe=i.RGBA16I),Z===i.INT&&(oe=i.RGBA32I)),E===i.RGB&&(Z===i.UNSIGNED_SHORT&&Te&&(oe=Te.RGB16_EXT),Z===i.SHORT&&Te&&(oe=Te.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),E===i.RGBA){let le=xe?La:ct.getTransfer(se);Z===i.FLOAT&&(oe=i.RGBA32F),Z===i.HALF_FLOAT&&(oe=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(oe=le===Mt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&Te&&(oe=Te.RGBA16_EXT),Z===i.SHORT&&Te&&(oe=Te.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function d(L,E){let Z;return L?E===null||E===di||E===is?Z=i.DEPTH24_STENCIL8:E===$n?Z=i.DEPTH32F_STENCIL8:E===Jr&&(Z=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===di||E===is?Z=i.DEPTH_COMPONENT24:E===$n?Z=i.DEPTH_COMPONENT32F:E===Jr&&(Z=i.DEPTH_COMPONENT16),Z}function _(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ut&&L.minFilter!==nn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function I(L){let E=new WeakRef(L);n.get(L).__ref=E,v.add(E),M.register(L,E,E)}function A(L){let E=n.get(L).__ref;E!==void 0&&(v.delete(E),M.unregister(E))}function C(L){O(L.target)}function P(L){b(L.target)}function O(L){L.removeEventListener("dispose",C),A(L),B(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function b(L){L.removeEventListener("dispose",P),A(L),W(L)}function D(){for(let L of v){let E=L.deref();E!==void 0&&(E.isRenderTarget===!0?b(E):O(E))}v.clear(),u.clear()}function B(L){let E=n.get(L);if(E.__webglInit===void 0)return;let Z=L.source,fe=p.get(Z);if(fe){let se=fe[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&U(L),Object.keys(fe).length===0&&p.delete(Z)}n.remove(L)}function U(L){let E=n.get(L);i.deleteTexture(E.__webglTexture);let Z=L.source,fe=p.get(Z);delete fe[E.__cacheKey],a.memory.textures--}function W(L){let E=n.get(L);E.__depthDisposeCallback&&E.__depthDisposeCallback();let Z=L.depthTexture;if(Z&&Z.renderTarget===L&&O(Z),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let xe=0;xe<E.__webglFramebuffer[se].length;xe++)i.deleteFramebuffer(E.__webglFramebuffer[se][xe]);else i.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)i.deleteFramebuffer(E.__webglFramebuffer[se]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let fe=L.textures;for(let se=0,xe=fe.length;se<xe;se++){let Te=n.get(fe[se]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(fe[se])}n.remove(L)}let V=0;function F(){V=0}function H(){return V}function $(L){V=L}function Q(){let L=V;return L>=s.maxTextures&&$e("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,L}function k(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.mipmapsAutoUpdate),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function z(L,E){let Z=n.get(L);if(L.isVideoTexture&&ge(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){let fe=L.image;if(fe===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(Z,L,E);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+E)}function N(L,E){let Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){Me(Z,L,E);return}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+E)}function K(L,E){let Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){Me(Z,L,E);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+E)}function X(L,E){let Z=n.get(L);if(L.version>0&&Z.__version!==L.version){ye(Z,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+E)}let ee={[Sn]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[Dr]:i.MIRRORED_REPEAT},ve={[Ut]:i.NEAREST,[dc]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},be={[sm]:i.NEVER,[Vu]:i.ALWAYS,[rm]:i.LESS,[Hu]:i.LEQUAL,[am]:i.EQUAL,[Gu]:i.GEQUAL,[om]:i.GREATER,[lm]:i.NOTEQUAL};function _e(L,E){if(E.type===$n&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===nn||E.magFilter===Zr||E.magFilter===nr||E.magFilter===ni||E.minFilter===nn||E.minFilter===Zr||E.minFilter===nr||E.minFilter===ni)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ee[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ee[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ee[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ve[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ut||E.minFilter!==nr&&E.minFilter!==ni||E.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(L,E){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",C),I(E));let fe=E.source,se=p.get(fe);se===void 0&&(se={},p.set(fe,se));let xe=k(E);if(xe!==L.__cacheKey){se[xe]===void 0&&(se[xe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),se[xe].usedTimes++;let Te=se[L.__cacheKey];Te!==void 0&&(se[L.__cacheKey].usedTimes--,Te.usedTimes===0&&U(E)),L.__cacheKey=xe,L.__webglTexture=se[xe].texture}return Z}function re(L,E,Z){return Math.floor(Math.floor(L/Z)/E)}function me(L,E,Z,fe){let xe=L.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,Z,fe,E.data);else{xe.sort((q,he)=>q.start-he.start);let Te=0;for(let q=1;q<xe.length;q++){let he=xe[Te],ne=xe[q],Re=he.start+he.count,we=re(ne.start,E.width,4),Ce=re(he.start,E.width,4);ne.start<=Re+1&&we===Ce&&re(ne.start+ne.count-1,E.width,4)===we?he.count=Math.max(he.count,ne.start+ne.count-he.start):(++Te,xe[Te]=ne)}xe.length=Te+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),le=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let q=0,he=xe.length;q<he;q++){let ne=xe[q],Re=Math.floor(ne.start/4),we=Math.ceil(ne.count/4),Ce=Re%E.width,ze=Math.floor(Re/E.width),rt=we,Ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,ze),t.texSubImage2D(i.TEXTURE_2D,0,Ce,ze,rt,Ee,Z,fe,E.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function Me(L,E,Z){let fe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=i.TEXTURE_3D);let se=Ie(L,E),xe=E.source;t.bindTexture(fe,L.__webglTexture,i.TEXTURE0+Z);let Te=n.get(xe);if(xe.version!==Te.__version||se===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap!="undefined"&&E.image instanceof ImageBitmap)===!1){let Ee=ct.getPrimaries(ct.workingColorSpace),qe=E.colorSpace===ss?null:ct.getPrimaries(E.colorSpace),it=E.colorSpace===ss||Ee===qe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let le=m(E.image,!1,s.maxTextureSize);le=de(E,le);let Se=r.convert(E.format,E.colorSpace),q=r.convert(E.type),he=T(E.internalFormat,Se,q,E.normalized,E.colorSpace,E.isVideoTexture);_e(fe,E);let ne,Re=E.mipmaps,we=E.isVideoTexture!==!0,Ce=Te.__version===void 0||se===!0,ze=xe.dataReady,rt=_(E,le);if(E.isDepthTexture)he=d(E.format===pi,E.type),Ce&&(we?t.texStorage2D(i.TEXTURE_2D,1,he,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,he,le.width,le.height,0,Se,q,null));else if(E.isDataTexture)if(Re.length>0){we&&Ce&&t.texStorage2D(i.TEXTURE_2D,rt,he,Re[0].width,Re[0].height);for(let Ee=0,qe=Re.length;Ee<qe;Ee++)ne=Re[Ee],we?ze&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,ne.width,ne.height,Se,q,ne.data):t.texImage2D(i.TEXTURE_2D,Ee,he,ne.width,ne.height,0,Se,q,ne.data);E.generateMipmaps=!1}else we?(Ce&&t.texStorage2D(i.TEXTURE_2D,rt,he,le.width,le.height),ze&&me(E,le,Se,q)):t.texImage2D(i.TEXTURE_2D,0,he,le.width,le.height,0,Se,q,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){we&&Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,he,Re[0].width,Re[0].height,le.depth);for(let Ee=0,qe=Re.length;Ee<qe;Ee++)if(ne=Re[Ee],E.format!==On)if(Se!==null)if(we){if(ze)if(E.layerUpdates.size>0){let it=ef(ne.width,ne.height,E.format,E.type);for(let Fe of E.layerUpdates){let wt=ne.data.subarray(Fe*it/ne.data.BYTES_PER_ELEMENT,(Fe+1)*it/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,Fe,ne.width,ne.height,1,Se,wt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,ne.width,ne.height,le.depth,Se,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ee,he,ne.width,ne.height,le.depth,0,ne.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,ne.width,ne.height,le.depth,Se,q,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ee,he,ne.width,ne.height,le.depth,0,Se,q,ne.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{we&&Ce&&t.texStorage2D(i.TEXTURE_2D,rt,he,Re[0].width,Re[0].height);for(let Ee=0,qe=Re.length;Ee<qe;Ee++)ne=Re[Ee],E.format!==On?Se!==null?we?ze&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ee,0,0,ne.width,ne.height,Se,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,Ee,he,ne.width,ne.height,0,ne.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?ze&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,ne.width,ne.height,Se,q,ne.data):t.texImage2D(i.TEXTURE_2D,Ee,he,ne.width,ne.height,0,Se,q,ne.data)}else if(E.isDataArrayTexture)if(we){if(Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,he,le.width,le.height,le.depth),ze)if(E.layerUpdates.size>0){let Ee=ef(le.width,le.height,E.format,E.type);for(let qe of E.layerUpdates){let it=le.data.subarray(qe*Ee/le.data.BYTES_PER_ELEMENT,(qe+1)*Ee/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,qe,le.width,le.height,1,Se,q,it)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,q,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,le.width,le.height,le.depth,0,Se,q,le.data);else if(E.isData3DTexture)we?(Ce&&t.texStorage3D(i.TEXTURE_3D,rt,he,le.width,le.height,le.depth),ze&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,q,le.data)):t.texImage3D(i.TEXTURE_3D,0,he,le.width,le.height,le.depth,0,Se,q,le.data);else if(E.isFramebufferTexture){if(Ce)if(we)t.texStorage2D(i.TEXTURE_2D,rt,he,le.width,le.height);else{let Ee=le.width,qe=le.height;for(let it=0;it<rt;it++)t.texImage2D(i.TEXTURE_2D,it,he,Ee,qe,0,Se,q,null),Ee>>=1,qe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let Ee=i.canvas;if(Ee.hasAttribute("layoutsubtree")||Ee.setAttribute("layoutsubtree","true"),le.parentNode!==Ee){Ee.appendChild(le),u.add(E),Ee.onpaint=qe=>{let it=qe.changedElements;for(let Fe of u)it.includes(Fe.image)&&(Fe.needsUpdate=!0)},Ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,le);else{let it=i.RGBA,Fe=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,it,Fe,wt,le)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(we&&Ce){let Ee=Ae(Re[0]);t.texStorage2D(i.TEXTURE_2D,rt,he,Ee.width,Ee.height)}for(let Ee=0,qe=Re.length;Ee<qe;Ee++)ne=Re[Ee],we?ze&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,Se,q,ne):t.texImage2D(i.TEXTURE_2D,Ee,he,Se,q,ne);E.generateMipmaps=!1}else if(we){if(Ce){let Ee=Ae(le);t.texStorage2D(i.TEXTURE_2D,rt,he,Ee.width,Ee.height)}ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,q,le)}else t.texImage2D(i.TEXTURE_2D,0,he,Se,q,le);S(E)&&E.mipmapsAutoUpdate===!0&&y(fe),Te.__version=xe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ye(L,E,Z){if(E.image.length!==6)return;let fe=Ie(L,E),se=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Z);let xe=n.get(se);if(se.version!==xe.__version||fe===!0){t.activeTexture(i.TEXTURE0+Z);let Te=ct.getPrimaries(ct.workingColorSpace),oe=E.colorSpace===ss?null:ct.getPrimaries(E.colorSpace),le=E.colorSpace===ss||Te===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Se=E.isCompressedTexture||E.image[0].isCompressedTexture,q=E.image[0]&&E.image[0].isDataTexture,he=[];for(let Fe=0;Fe<6;Fe++)!Se&&!q?he[Fe]=m(E.image[Fe],!0,s.maxCubemapSize):he[Fe]=q?E.image[Fe].image:E.image[Fe],he[Fe]=de(E,he[Fe]);let ne=he[0],Re=r.convert(E.format,E.colorSpace),we=r.convert(E.type),Ce=T(E.internalFormat,Re,we,E.normalized,E.colorSpace),ze=E.isVideoTexture!==!0,rt=xe.__version===void 0||fe===!0,Ee=se.dataReady,qe=_(E,ne);_e(i.TEXTURE_CUBE_MAP,E);let it;if(E.isDepthTexture){if(Ce=d(E.format===pi,E.type),rt)if(ze)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ce,ne.width,ne.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ce,ne.width,ne.height,0,Re,we,null)}else if(Se){ze&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Ce,ne.width,ne.height);for(let Fe=0;Fe<6;Fe++){it=he[Fe].mipmaps;for(let wt=0;wt<it.length;wt++){let on=it[wt];E.format!==On?Re!==null?ze?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,wt,0,0,on.width,on.height,Re,on.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,wt,Ce,on.width,on.height,0,on.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,wt,0,0,on.width,on.height,Re,we,on.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,wt,Ce,on.width,on.height,0,Re,we,on.data)}}}else{if(it=E.mipmaps,ze&&rt){it.length>0&&qe++;let Fe=Ae(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Ce,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(q){ze?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,he[Fe].width,he[Fe].height,Re,we,he[Fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ce,he[Fe].width,he[Fe].height,0,Re,we,he[Fe].data);for(let wt=0;wt<it.length;wt++){let cs=it[wt].image[Fe].image;ze?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,wt+1,0,0,cs.width,cs.height,Re,we,cs.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,wt+1,Ce,cs.width,cs.height,0,Re,we,cs.data)}}else{ze?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,Re,we,he[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ce,Re,we,he[Fe]);for(let wt=0;wt<it.length;wt++){let on=it[wt];ze?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,wt+1,0,0,Re,we,on.image[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,wt+1,Ce,Re,we,on.image[Fe])}}}S(E)&&E.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),xe.__version=se.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ce(L,E,Z,fe,se,xe){let Te=r.convert(Z.format,Z.colorSpace),oe=r.convert(Z.type),le=T(Z.internalFormat,Te,oe,Z.normalized,Z.colorSpace),Se=n.get(E),q=n.get(Z);if(q.__renderTarget=E,!Se.__hasExternalTextures){let he=Math.max(1,E.width>>xe),ne=Math.max(1,E.height>>xe);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,xe,le,he,ne,E.depth,0,Te,oe,null):t.texImage2D(se,xe,le,he,ne,0,Te,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),J(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,se,q.__webglTexture,0,ue(E)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,se,q.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(L,E,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){let fe=E.depthTexture,se=fe&&fe.isDepthTexture?fe.type:null,xe=d(E.stencilBuffer,se),Te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;J(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(E),xe,E.width,E.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(E),xe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,xe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,L)}else{let fe=E.textures;for(let se=0;se<fe.length;se++){let xe=fe[se],Te=r.convert(xe.format,xe.colorSpace),oe=r.convert(xe.type),le=T(xe.internalFormat,Te,oe,xe.normalized,xe.colorSpace);J(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(E),le,E.width,E.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(E),le,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,le,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(L,E,Z){let fe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(E.depthTexture);se.__renderTarget=E;let xe=fe?E.depthTexture.image[0]:E.depthTexture.image;(!se.__webglTexture||xe.width!==E.width||xe.height!==E.height)&&(xe.width=E.width,xe.height=E.height,E.depthTexture.needsUpdate=!0),fe?X(E.depthTexture,0):z(E.depthTexture,0);let Te=se.__webglTexture,oe=ue(E),le=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,Se=E.depthTexture.format===pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Xi)J(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,le,Te,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,Se,le,Te,0);else if(E.depthTexture.format===pi)J(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,le,Te,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,Se,le,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(L){let E=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let fe=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){let se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",se)};fe.addEventListener("dispose",se),E.__depthDisposeCallback=se}E.__boundDepthTexture=fe}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let fe=0;fe<6;fe++)Ue(E.__webglFramebuffer[fe],L,fe);else L.texture.mipmaps.length>0?Ue(E.__webglFramebuffer[0],L,0):Ue(E.__webglFramebuffer,L,0);else if(Z){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=i.createRenderbuffer(),ke(E.__webglDepthbuffer[fe],L,!1);else{let se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=E.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,xe)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ke(E.__webglDepthbuffer,L,!1);else{let se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(L,E,Z){let fe=n.get(L);E!==void 0&&ce(fe.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&We(L)}function Je(L){let E=L.texture,Z=n.get(L),fe=n.get(E);L.addEventListener("dispose",P),I(L);let se=L.textures,xe=L.isWebGLCubeRenderTarget===!0,Te=se.length>1;if(Te||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=E.version,a.memory.textures++),xe){Z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps.length>0){Z.__webglFramebuffer[oe]=[];for(let le=0;le<E.mipmaps.length;le++)Z.__webglFramebuffer[oe][le]=i.createFramebuffer()}else Z.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)Z.__webglFramebuffer[oe]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Te)for(let oe=0,le=se.length;oe<le;oe++){let Se=n.get(se[oe]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&J(L)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let oe=0;oe<se.length;oe++){let le=se[oe];Z.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[oe]);let Se=r.convert(le.format,le.colorSpace),q=r.convert(le.type),he=T(le.internalFormat,Se,q,le.normalized,le.colorSpace,L.isXRRenderTarget===!0),ne=ue(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,he,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,Z.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),_e(i.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps.length>0)for(let le=0;le<E.mipmaps.length;le++)ce(Z.__webglFramebuffer[oe][le],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else ce(Z.__webglFramebuffer[oe],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);S(E)?y(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let oe=0,le=se.length;oe<le;oe++){let Se=se[oe],q=n.get(Se),he=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,q.__webglTexture),_e(he,Se),ce(Z.__webglFramebuffer,L,Se,i.COLOR_ATTACHMENT0+oe,he,0),S(Se)&&y(he)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(oe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,fe.__webglTexture),_e(oe,E),E.mipmaps.length>0)for(let le=0;le<E.mipmaps.length;le++)ce(Z.__webglFramebuffer[le],L,E,i.COLOR_ATTACHMENT0,oe,le);else ce(Z.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,oe,0);S(E)?y(oe):E.mipmaps.length>0&&i.texParameteri(oe,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&We(L)}function Y(L){let E=L.textures;for(let Z=0,fe=E.length;Z<fe;Z++){let se=E[Z];if(S(se)&&se.mipmapsAutoUpdate===!0){let xe=w(L),Te=n.get(se).__webglTexture;t.bindTexture(xe,Te),y(xe),t.unbindTexture()}}}let bt=[];function et(L){if(L.samples>0){if(J(L)===!1){let E=L.textures,Z=L.width,fe=L.height,se=i.COLOR_BUFFER_BIT,xe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(L),oe=E.length>1;if(oe)for(let Se=0;Se<E.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);let q=n.get(E[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,q,0)}i.blitFramebuffer(0,0,Z,fe,0,0,Z,fe,se,i.NEAREST),l===!0&&(bt.length=0,bt.push(i.COLOR_ATTACHMENT0+Se),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&bt.push(xe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Se=0;Se<E.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);let q=n.get(E[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ue(L){return Math.min(s.maxSamples,L.samples)}function J(L){let E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ge(L){let E=a.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function de(L,E){let Z=L.colorSpace,fe=L.format,se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Pn&&Z!==ss&&(ct.getTransfer(Z)===Mt?(fe!==On||se!==bn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",Z)),E}function Ae(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=F,this.getTextureUnits=H,this.setTextureUnits=$,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=Ze,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=J,this.dispose=D}function aS(i,e){function t(n,s=ss){let r,a=ct.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ou)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nu)return i.BYTE;if(n===Uu)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===pc)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Gt)return i.HALF_FLOAT;if(n===Bu)return i.ALPHA;if(n===ku)return i.RGB;if(n===On)return i.RGBA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===xc)return i.RED;if(n===vc)return i.RED_INTEGER;if(n===As)return i.RG;if(n===_c)return i.RG_INTEGER;if(n===yc)return i.RGBA_INTEGER;if(n===So||n===bo||n===To||n===Eo)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mc||n===Sc||n===bc||n===Tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ec||n===wc||n===Ac||n===Rc||n===Cc||n===wo||n===Pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ec||n===wc)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ac)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rc)return r.COMPRESSED_R11_EAC;if(n===Cc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wo)return r.COMPRESSED_RG11_EAC;if(n===Pc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Hc||n===Gc||n===Vc||n===Wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ic)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xc||n===qc||n===$c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xc)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yc||n===Kc||n===Ao||n===jc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var oS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lS=`
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

}`,mf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ct({vertexShader:oS,fragmentShader:lS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gf=class extends Mi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,v=null,M=typeof XRWebGLBinding!="undefined",g=new mf,x={},m=t.getContextAttributes(),S=null,y=null,w=[],T=[],d=new pe,_=null,I=null,A=new tn;A.viewport=new St;let C=new tn;C.viewport=new St;let P=[A,C],O=new oc,b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let z=w[k];return z===void 0&&(z=new kr,w[k]=z),z.getTargetRaySpace()},this.getControllerGrip=function(k){let z=w[k];return z===void 0&&(z=new kr,w[k]=z),z.getGripSpace()},this.getHand=function(k){let z=w[k];return z===void 0&&(z=new kr,w[k]=z),z.getHandSpace()};function B(k){let z=T.indexOf(k.inputSource);if(z===-1)return;let N=w[z];N!==void 0&&(N.update(k.inputSource,k.frame,c||a),N.dispatchEvent({type:k.type,data:k.inputSource}))}function U(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",W);for(let k=0;k<w.length;k++){let z=T[k];z!==null&&(T[k]=null,w[k].disconnect(z))}b=null,D=null,g.reset();for(let k in x)delete x[k];if(e.setRenderTarget(S),p=null,f=null,u=null,s=null,y=null,Q.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(d.width,d.height,!1),I!==null){let k=I.camera;k.fov=I.fov,k.zoom=I.zoom,k.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",U),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(d),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let N=null,K=null,X=null;m.depth&&(X=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=m.stencil?pi:Xi,K=m.stencil?is:di);let ee={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ee),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ft(f.textureWidth,f.textureHeight,{format:On,type:bn,depthTexture:new fi(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let N={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,N),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ft(p.framebufferWidth,p.framebufferHeight,{format:On,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Q.setContext(s),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(k){for(let z=0;z<k.removed.length;z++){let N=k.removed[z],K=T.indexOf(N);K>=0&&(T[K]=null,w[K].disconnect(N))}for(let z=0;z<k.added.length;z++){let N=k.added[z],K=T.indexOf(N);if(K===-1){for(let ee=0;ee<w.length;ee++)if(ee>=T.length){T.push(N),K=ee;break}else if(T[ee]===null){T[ee]=N,K=ee;break}if(K===-1)break}let X=w[K];X&&X.connect(N)}}function V(k,z){z===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(z.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let z=k.near,N=k.far;g.texture!==null&&(g.depthNear>0&&(z=g.depthNear),g.depthFar>0&&(N=g.depthFar)),O.near=C.near=A.near=z,O.far=C.far=A.far=N,(b!==O.near||D!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),b=O.near,D=O.far),O.layers.mask=k.layers.mask|6,A.layers.mask=O.layers.mask&-5,C.layers.mask=O.layers.mask&-3;let K=k.parent,X=O.cameras;V(O,K);for(let ee=0;ee<X.length;ee++)V(X[ee],K);O.projectionMatrix.copy(A.projectionMatrix),O.projectionMatrixInverse.copy(A.projectionMatrixInverse),I===null&&k.isPerspectiveCamera&&(I={camera:k,fov:k.fov,zoom:k.zoom}),F(k,O,K)};function F(k,z,N){N===null?k.matrix.copy(z.matrixWorld):(k.matrix.copy(N.matrixWorld),k.matrix.invert(),k.matrix.multiply(z.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(z.projectionMatrix),k.projectionMatrixInverse.copy(z.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Vs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(k){return x[k]};let H=null;function $(k,z){if(h=z.getViewerPose(c||a),v=z,h!==null){let N=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let K=!1;N.length!==O.cameras.length&&(O.cameras.length=0,K=!0);for(let be=0;be<N.length;be++){let _e=N[be],Ie=null;if(p!==null)Ie=p.getViewport(_e);else{let me=u.getViewSubImage(f,_e);Ie=me.viewport,be===0&&(e.setRenderTargetTextures(y,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(y))}let re=P[be];re===void 0&&(re=new tn,re.layers.enable(be),re.viewport=new St,P[be]=re),re.matrix.fromArray(_e.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(_e.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),be===0&&(O.matrix.copy(re.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),K===!0&&O.cameras.push(re)}let X=s.enabledFeatures;if(X&&X.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let be=u.getDepthInformation(N[0]);be&&be.isValid&&be.texture&&g.init(be,s.renderState)}if(X&&X.includes("camera-access")&&M){e.state.unbindTexture(),u=n.getBinding();for(let be=0;be<N.length;be++){let _e=N[be].camera;if(_e){let Ie=x[_e];Ie||(Ie=new Wa,x[_e]=Ie);let re=u.getCameraImage(_e);Ie.sourceTexture=re}}}}for(let N=0;N<w.length;N++){let K=T[N],X=w[N];K!==null&&X!==void 0&&X.update(K,z,c||a)}H&&H(k,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),v=null}let Q=new Gm;Q.setAnimationLoop($),this.setAnimationLoop=function(k){H=k},this.dispose=function(){}}},cS=new Ye,Jm=new st;Jm.set(-1,0,0,0,1,0,0,0,1);function hS(i,e){function t(g,x){g.matrixAutoUpdate===!0&&g.updateMatrix(),x.value.copy(g.matrix)}function n(g,x){x.color.getRGB(g.fogColor.value,Zu(i)),x.isFog?(g.fogNear.value=x.near,g.fogFar.value=x.far):x.isFogExp2&&(g.fogDensity.value=x.density)}function s(g,x,m,S,y){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(g,x):x.isMeshLambertMaterial?(r(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(g,x),u(g,x)):x.isMeshPhongMaterial?(r(g,x),h(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(g,x),f(g,x),x.isMeshPhysicalMaterial&&p(g,x,y)):x.isMeshMatcapMaterial?(r(g,x),v(g,x)):x.isMeshDepthMaterial?r(g,x):x.isMeshDistanceMaterial?(r(g,x),M(g,x)):x.isMeshNormalMaterial?r(g,x):x.isLineBasicMaterial?(a(g,x),x.isLineDashedMaterial&&o(g,x)):x.isPointsMaterial?l(g,x,m,S):x.isSpriteMaterial?c(g,x):x.isShadowMaterial?(g.color.value.copy(x.color),g.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(g,x){g.opacity.value=x.opacity,x.color&&g.diffuse.value.copy(x.color),x.emissive&&g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(g.map.value=x.map,t(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.bumpMap&&(g.bumpMap.value=x.bumpMap,t(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===gn&&(g.bumpScale.value*=-1)),x.normalMap&&(g.normalMap.value=x.normalMap,t(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===gn&&g.normalScale.value.negate()),x.displacementMap&&(g.displacementMap.value=x.displacementMap,t(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias),x.emissiveMap&&(g.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,g.emissiveMapTransform)),x.specularMap&&(g.specularMap.value=x.specularMap,t(x.specularMap,g.specularMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest);let m=e.get(x),S=m.envMap,y=m.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(cS.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Jm),g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio),x.lightMap&&(g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,g.lightMapTransform)),x.aoMap&&(g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,g.aoMapTransform))}function a(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map&&(g.map.value=x.map,t(x.map,g.mapTransform))}function o(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}function l(g,x,m,S){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*m,g.scale.value=S*.5,x.map&&(g.map.value=x.map,t(x.map,g.uvTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function c(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map&&(g.map.value=x.map,t(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function h(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,1e-4)}function u(g,x){x.gradientMap&&(g.gradientMap.value=x.gradientMap)}function f(g,x){g.metalness.value=x.metalness,x.metalnessMap&&(g.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,g.metalnessMapTransform)),g.roughness.value=x.roughness,x.roughnessMap&&(g.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,g.roughnessMapTransform)),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)}function p(g,x,m){g.ior.value=x.ior,x.diffuseRoughness>0&&(g.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),x.sheen>0&&(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(g.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,g.sheenColorMapTransform)),x.sheenRoughnessMap&&(g.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,g.sheenRoughnessMapTransform))),x.clearcoat>0&&(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(g.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,g.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(g.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===gn&&g.clearcoatNormalScale.value.negate())),x.dispersion>0&&(g.dispersion.value=x.dispersion),x.retroreflectivity>0&&(g.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(g.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,g.iridescenceMapTransform)),x.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),x.transmission>0&&(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),x.transmissionMap&&(g.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,g.transmissionMapTransform)),g.thickness.value=x.thickness,x.thicknessMap&&(g.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(g.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap&&(g.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,g.specularColorMapTransform)),x.specularIntensityMap&&(g.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,x){x.matcap&&(g.matcap.value=x.matcap)}function M(g,x){let m=e.get(x).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function uS(i,e,t,n){let s={},r={};function a(m,S){let y=S.program;n.uniformBlockBinding(m,y,s[m.id])}function o(m,S){let y=s[m.id];y===void 0&&(v(m),y=l(m),s[m.id]=y,m.addEventListener("dispose",g));let w=S.program;n.updateUBOMapping(m,w);let T=e.render.frame;r[m.id]!==T&&(c(m),r[m.id]=T)}function l(m){let S=i.createBuffer(),y=m.__size,w=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,y,w),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function c(m){let S=s[m.id],y=m.uniforms,w=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,d=y.length;T<d;T++){let _=y[T];if(Array.isArray(_))for(let I=0,A=_.length;I<A;I++)h(_[I],T,I,w);else h(_,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(m,S,y,w){if(f(m,S,y,w)===!0){let T=m.__offset,d=m.value;if(Array.isArray(d)){let _=0;for(let I=0;I<d.length;I++){let A=d[I],C=M(A,!0);u(A,m.__data,_),_+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else u(d,m.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,m.__data)}}function u(m,S,y){typeof m=="number"||typeof m=="boolean"?S[y]=m:m.isMatrix3?(S[y]=m.elements[0],S[y+1]=m.elements[1],S[y+2]=m.elements[2],S[y+3]=0,S[y+4]=m.elements[3],S[y+5]=m.elements[4],S[y+6]=m.elements[5],S[y+7]=0,S[y+8]=m.elements[6],S[y+9]=m.elements[7],S[y+10]=m.elements[8],S[y+11]=0):ArrayBuffer.isView(m)?S.set(m.subarray(0,S.length-y),y):m.toArray(S,y)}function f(m,S,y,w){let T=m.value,d=S+"_"+y;if(Array.isArray(T)){w[d]===void 0&&(w[d]=[]);let _=w[d],I=!1;for(let A=0;A<T.length;A++)p(T[A],_,A)===!0&&(I=!0);return I}return p(T,w,d)}function p(m,S,y){if(S[y]===void 0)return typeof m=="number"||typeof m=="boolean"?S[y]=m:ArrayBuffer.isView(m)?S[y]=m.slice():S[y]=m.clone(),!0;{let w=S[y];if(typeof m=="number"||typeof m=="boolean"){if(w!==m)return S[y]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(w.equals(m)===!1)return w.copy(m),!0}}return!1}function v(m){let S=m.uniforms,y=0,w=16;for(let d=0,_=S.length;d<_;d++){let I=Array.isArray(S[d])?S[d]:[S[d]];for(let A=0,C=I.length;A<C;A++){let P=I[A],O=Array.isArray(P.value)?P.value:[P.value],b=Array.isArray(S[d])||Array.isArray(P.value),D=y;for(let U=0,W=O.length;U<W;U++){let V=O[U],F=M(V,b),H=y%w,$=H%F.boundary,Q=H+$;y+=$,Q!==0&&w-Q<F.storage&&(y+=w-Q),U===0&&(D=y),y+=F.storage}let B=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new B((y-D)/Float32Array.BYTES_PER_ELEMENT),P.__offset=D}}let T=y%w;return T>0&&(y+=w-T),m.__size=y,m.__cache={},this}function M(m,S){let y={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(y.boundary=4,y.storage=4):m.isVector2?(y.boundary=8,y.storage=8):m.isVector3||m.isColor?(y.boundary=16,y.storage=12):m.isVector4?(y.boundary=16,y.storage=16):m.isMatrix3?(y.boundary=16,y.storage=48):m.isMatrix4?(y.boundary=16,y.storage=64):m.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(y.boundary=16,y.storage=m.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",m),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(m){let S=m.target;S.removeEventListener("dispose",g),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function x(){for(let m in s)i.deleteBuffer(s[m]);s={},r={}}return{bind:a,update:o,dispose:x}}var fS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function dS(){return Ri===null&&(Ri=new Qn(fS,16,16,As,Gt),Ri.name="DFG_LUT",Ri.minFilter=nn,Ri.magFilter=nn,Ri.wrapS=Zn,Ri.wrapT=Zn,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var eh=class{constructor(e={}){let{canvas:t=cm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=bn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let M=p,g=new Set([yc,_c,vc]),x=new Set([bn,di,Jr,is,mc,gc]),m=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,T=null,d=[],_=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,P=null,O=null,b=null,D=null;this._outputColorSpace=Rt;let B=0,U=0,W=null,V=-1,F=null,H=new St,$=new St,Q=null,k=new Le(0),z=0,N=t.width,K=t.height,X=1,ee=null,ve=null,be=new St(0,0,N,K),_e=new St(0,0,N,K),Ie=!1,re=new _s,me=new Vl,Me=!1,ye=!1,ce=new Ye,ke=new G,Ue=new St,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function Je(){return W===null?X:1}let Y=n;function bt(R,j){return t.getContext(R,j)}let et,ue,J,ge,de,Ae,L,E,Z,fe,se,xe,Te,oe,le,Se,q,he,ne,Re,we,Ce,ze;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),Y===null){let j="webgl2";if(Y=bt(j,R),Y===null)throw bt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(R){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Qe("WebGLRenderer: "+R.message),R}function rt(){et=new Ty(Y),et.init(),we=new aS(Y,et),ue=new dy(Y,et,e,we),J=new sS(Y,et),ue.reversedDepthBuffer&&f&&J.buffers.depth.setReversed(!0),O=Y.createFramebuffer(),b=Y.createFramebuffer(),D=Y.createFramebuffer(),ge=new Ay(Y),de=new WM,Ae=new rS(Y,et,J,de,ue,we,ge),L=new by(A),E=new Cx(Y),Ce=new uy(Y,E),Z=new Ey(Y,E,ge,Ce),fe=new Cy(Y,Z,E,Ce,ge),he=new Ry(Y,ue,Ae),le=new py(de),se=new VM(A,L,et,ue,Ce,le),xe=new hS(A,de),Te=new qM,oe=new JM(et),q=new hy(A,L,J,fe,v,l),Se=new iS(A,fe,ue),ze=new uS(Y,ge,ue,J),ne=new fy(Y,et,ge),Re=new wy(Y,et,ge),ge.programs=se.programs,A.capabilities=ue,A.extensions=et,A.properties=de,A.renderLists=Te,A.shadowMap=Se,A.state=J,A.info=ge}M!==bn&&(I=new Iy(M,t.width,t.height,o,s,r));let Ee=new gf(A,Y);this.xr=Ee,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let R=et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(N,K,!1))},this.getSize=function(R){return R.set(N,K)},this.setSize=function(R,j,ae=!0){if(Ee.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,K=j,t.width=Math.floor(R*X),t.height=Math.floor(j*X),ae===!0&&(t.style.width=R+"px",t.style.height=j+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(N*X,K*X).floor()},this.setDrawingBufferSize=function(R,j,ae){N=R,K=j,X=ae,t.width=Math.floor(R*ae),t.height=Math.floor(j*ae),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(M===bn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(be)},this.setViewport=function(R,j,ae,te){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,j,ae,te),J.viewport(H.copy(be).multiplyScalar(Je()).round())},this.getScissor=function(R){return R.copy(_e)},this.setScissor=function(R,j,ae,te){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,j,ae,te),J.scissor($.copy(_e).multiplyScalar(Je()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(R){J.setScissorTest(Ie=R)},this.setOpaqueSort=function(R){ee=R},this.setTransparentSort=function(R){ve=R},this.getClearColor=function(R){return R.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor(...arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,ae=!0){let te=0;if(R){let ie=!1;if(W!==null){let Ne=W.texture.format;ie=g.has(Ne)}if(ie){let Ne=W.texture.type,He=x.has(Ne),De=q.getClearColor(),Be=q.getClearAlpha(),Xe=De.r,at=De.g,mt=De.b;He?(m[0]=Xe,m[1]=at,m[2]=mt,m[3]=Be,Y.clearBufferuiv(Y.COLOR,0,m)):(S[0]=Xe,S[1]=at,S[2]=mt,S[3]=Be,Y.clearBufferiv(Y.COLOR,0,S))}else te|=Y.COLOR_BUFFER_BIT}j&&(te|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(te|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&Y.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),P=R},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),q.dispose(),Te.dispose(),oe.dispose(),Ae.dispose(),de.dispose(),L.dispose(),fe.dispose(),Z.dispose(),Ce.dispose(),ze.dispose(),se.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Rd),Ee.removeEventListener("sessionend",Cd),Ls.stop()};function qe(R){R.preventDefault(),Da("WebGLRenderer: Context Lost."),C=!0}function it(){Da("WebGLRenderer: Context Restored."),C=!1;let R=ge.autoReset,j=Se.enabled,ae=Se.autoUpdate,te=Se.needsUpdate,ie=Se.type;rt(),ge.autoReset=R,Se.enabled=j,Se.autoUpdate=ae,Se.needsUpdate=te,Se.type=ie}function Fe(R){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function wt(R){let j=R.target;j.removeEventListener("dispose",wt),on(j)}function on(R){cs(R),de.remove(R)}function cs(R){let j=de.get(R).programs;j!==void 0&&(j.forEach(function(ae){se.releaseProgram(ae)}),R.isShaderMaterial&&se.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ae,te,ie,Ne){j===null&&(j=We);let He=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,De=j0(R,j,ae,te,ie);J.setMaterial(te,He);let Be=ae.index,Xe=1;if(te.wireframe===!0){if(Be=Z.getWireframeAttribute(ae),Be===void 0)return;Xe=2}let at=ae.drawRange,mt=ae.attributes.position,Ge=at.start*Xe,gt=(at.start+at.count)*Xe;Ne!==null&&(Ge=Math.max(Ge,Ne.start*Xe),gt=Math.min(gt,(Ne.start+Ne.count)*Xe)),Be!==null?(Ge=Math.max(Ge,0),gt=Math.min(gt,Be.count)):mt!=null&&(Ge=Math.max(Ge,0),gt=Math.min(gt,mt.count));let Qt=gt-Ge;if(Qt<0||Qt===1/0)return;Ce.setup(ie,te,De,ae,Be);let Nt,Pt=ne;if(Be!==null&&(Nt=E.get(Be),Pt=Re,Pt.setIndex(Nt)),ie.isMesh)te.wireframe===!0?(J.setLineWidth(te.wireframeLinewidth*Je()),Pt.setMode(Y.LINES)):Pt.setMode(Y.TRIANGLES);else if(ie.isLine){let vn=te.linewidth;vn===void 0&&(vn=1),J.setLineWidth(vn*Je()),ie.isLineSegments?Pt.setMode(Y.LINES):ie.isLineLoop?Pt.setMode(Y.LINE_LOOP):Pt.setMode(Y.LINE_STRIP)}else ie.isPoints?Pt.setMode(Y.POINTS):ie.isSprite&&Pt.setMode(Y.TRIANGLES);if(ie.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let vn=ie._multiDrawStarts,Ve=ie._multiDrawCounts,Rn=ie._multiDrawCount,Tt=Be?E.get(Be).bytesPerElement:1,Ds=de.get(te).currentProgram.getUniforms();for(let _n=0;_n<Rn;_n++)Ds.setValue(Y,"_gl_DrawID",_n),Pt.render(vn[_n]/Tt,Ve[_n])}else if(ie.isInstancedMesh)Pt.renderInstances(Ge,Qt,ie.count);else if(ae.isInstancedBufferGeometry){let vn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ve=Math.min(ae.instanceCount,vn);Pt.renderInstances(Ge,Qt,Ve)}else Pt.render(Ge,Qt)};function Ad(R,j,ae,te){P!==null&&R.isNodeMaterial&&P.setObject(te,R),Me===!0&&le.setState(R,ae,!1),R.transparent===!0&&R.side===Bt&&R.forceSinglePass===!1?(R.side=gn,R.needsUpdate=!0,pa(R,j,te),R.side=Ei,R.needsUpdate=!0,pa(R,j,te),R.side=Bt):pa(R,j,te)}this.compile=function(R,j,ae=null){ae===null&&(ae=R),P!==null&&P.renderStart(R,j,ae),T=oe.get(ae),T.init(j),_.push(T),ae.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(T.pushLight(ie),ie.castShadow&&T.pushShadow(ie))}),R!==ae&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(T.pushLight(ie),ie.castShadow&&T.pushShadow(ie))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),ye=this.localClippingEnabled,Me=le.init(this.clippingPlanes,ye),Me===!0&&le.setGlobalState(this.clippingPlanes,j),P!==null&&Se.render(T.state.shadowsArray,ae,j);let te=new Set;return R.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let Ne=ie.material;if(Ne)if(Array.isArray(Ne))for(let He=0;He<Ne.length;He++){let De=Ne[He];Ad(De,ae,j,ie),te.add(De)}else Ad(Ne,ae,j,ie),te.add(Ne)}),T=_.pop(),P!==null&&P.renderEnd(),te},this.compileAsync=function(R,j,ae=null){let te=this.compile(R,j,ae);return new Promise(ie=>{function Ne(){if(te.forEach(function(He){let Be=de.get(He).currentProgram;(Be===void 0||Be.isReady())&&te.delete(He)}),te.size===0){ie(R);return}setTimeout(Ne,10)}et.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Uh=null;function Y0(R){Uh&&Uh(R)}function Rd(){Ls.stop()}function Cd(){Ls.start()}let Ls=new Gm;Ls.setAnimationLoop(Y0),typeof self!="undefined"&&Ls.setContext(self),this.setAnimationLoop=function(R){Uh=R,Ee.setAnimationLoop(R),R===null?Ls.stop():Ls.start()},Ee.addEventListener("sessionstart",Rd),Ee.addEventListener("sessionend",Cd),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(R,j);let ae=Ee.enabled===!0&&Ee.isPresenting===!0,te=I!==null&&(W===null||ae)&&I.begin(A,W);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(j),j=Ee.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,j,W),T=oe.get(R,_.length),T.init(j),T.state.textureUnits=Ae.getTextureUnits(),_.push(T),ce.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),j.isArrayCamera?me.setFromArrayCamera(j):re.setFromProjectionMatrix(ce,Jn,j.reversedDepth),ye=this.localClippingEnabled,Me=le.init(this.clippingPlanes,ye),w=Te.get(R,d.length),w.init(),d.push(w),this.info.render.frame++,Ee.enabled===!0&&Ee.isPresenting===!0){let He=A.xr.getDepthSensingMesh();He!==null&&Fh(He,j,-1/0,A.sortObjects)}Fh(R,j,0,A.sortObjects),w.finish(),P!==null&&P.updateLights(T.state.lightsArray),A.sortObjects===!0&&w.sort(ee,ve),Ze=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Ze&&q.addToRenderList(w,R),this.info.autoReset===!0&&this.info.reset(),Me===!0&&le.beginShadows();let ie=T.state.shadowsArray;if(Se.render(ie,R,j),Me===!0&&le.endShadows(),(te&&I.hasRenderPass())===!1){let He=w.opaque,De=w.transmissive;if(T.setupLights(),j.isArrayCamera){let Be=j.cameras;if(De.length>0)for(let Xe=0,at=Be.length;Xe<at;Xe++){let mt=Be[Xe];Id(He,De,R,mt)}Ze&&q.render(R);for(let Xe=0,at=Be.length;Xe<at;Xe++){let mt=Be[Xe];Pd(w,R,mt,mt.viewport)}}else De.length>0&&Id(He,De,R,j),Ze&&q.render(R),Pd(w,R,j)}W!==null&&U===0&&(Ae.updateMultisampleRenderTarget(W),Ae.updateRenderTargetMipmap(W)),te&&I.end(A),R.isScene===!0&&R.onAfterRender(A,R,j),Ce.resetDefaultState(),V=-1,F=null,_.pop(),_.length>0?(T=_[_.length-1],Ae.setTextureUnits(T.state.textureUnits),Me===!0&&le.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,d.pop(),d.length>0?w=d[d.length-1]:w=null,P!==null&&P.renderEnd()};function Fh(R,j,ae,te){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)T.pushLight(R),R.castShadow&&T.pushShadow(R);else if(R.isSprite){let He=j.isArrayCamera?me:re;if(!R.frustumCulled||R.intersectsFrustum(He)){te&&Ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ce);let De=fe.update(R),Be=R.material;Be.visible&&w.push(R,De,Be,ae,Ue.z,null,j)}}else if(R.isMesh||R.isLine||R.isPoints){let He=j.isArrayCamera?me:re;if(!R.frustumCulled||R.intersectsFrustum(He)){let De=fe.update(R),Be=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ue.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ue.copy(De.boundingSphere.center)),Ue.applyMatrix4(R.matrixWorld).applyMatrix4(ce)),Array.isArray(Be)){let Xe=De.groups;for(let at=0,mt=Xe.length;at<mt;at++){let Ge=Xe[at],gt=Be[Ge.materialIndex];gt&&gt.visible&&w.push(R,De,gt,ae,Ue.z,Ge,j)}}else Be.visible&&w.push(R,De,Be,ae,Ue.z,null,j)}}}let Ne=R.children;for(let He=0,De=Ne.length;He<De;He++)Fh(Ne[He],j,ae,te)}function Pd(R,j,ae,te){let{opaque:ie,transmissive:Ne,transparent:He}=R;T.setupLightsView(ae),Me===!0&&le.setGlobalState(A.clippingPlanes,ae),te&&J.viewport(H.copy(te)),ie.length>0&&Qo(ie,j,ae),Ne.length>0&&Qo(Ne,j,ae),He.length>0&&Qo(He,j,ae),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Id(R,j,ae,te){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[te.id]===void 0){let Ge=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[te.id]=new Ft(1,1,{generateMipmaps:!0,type:Ge?Gt:bn,minFilter:ni,samples:Math.max(4,ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Ne=T.state.transmissionRenderTarget[te.id],He=te.viewport||H;Ne.setSize(He.z*A.transmissionResolutionScale,He.w*A.transmissionResolutionScale);let De=A.getRenderTarget(),Be=A.getActiveCubeFace(),Xe=A.getActiveMipmapLevel();A.setRenderTarget(Ne),A.getClearColor(k),z=A.getClearAlpha(),z<1&&A.setClearColor(16777215,.5),A.clear(),Ze&&q.render(ae);let at=A.toneMapping;A.toneMapping=wi;let mt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),T.setupLightsView(te),Me===!0&&le.setGlobalState(A.clippingPlanes,te),Qo(R,ae,te),Ae.updateMultisampleRenderTarget(Ne),Ae.updateRenderTargetMipmap(Ne),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let gt=0,Qt=j.length;gt<Qt;gt++){let Nt=j[gt],{object:Pt,geometry:vn,material:Ve,group:Rn}=Nt;if(Ve.side===Bt&&Pt.layers.test(te.layers)){let Tt=Ve.side;Ve.side=gn,Ve.needsUpdate=!0,Ld(Pt,ae,te,vn,Ve,Rn),Ve.side=Tt,Ve.needsUpdate=!0,Ge=!0}}Ge===!0&&(Ae.updateMultisampleRenderTarget(Ne),Ae.updateRenderTargetMipmap(Ne))}A.setRenderTarget(De,Be,Xe),A.setClearColor(k,z),mt!==void 0&&(te.viewport=mt),A.toneMapping=at}function Qo(R,j,ae){let te=j.isScene===!0?j.overrideMaterial:null;for(let ie=0,Ne=R.length;ie<Ne;ie++){let He=R[ie],{object:De,geometry:Be,group:Xe}=He,at=He.material;at.allowOverride===!0&&te!==null&&(at=te),De.layers.test(ae.layers)&&Ld(De,j,ae,Be,at,Xe)}}function Ld(R,j,ae,te,ie,Ne){P!==null&&ie.isNodeMaterial&&P.setObject(R,ie),R.onBeforeRender(A,j,ae,te,ie,Ne),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(A,j,ae,te,R,Ne),ie.transparent===!0&&ie.side===Bt&&ie.forceSinglePass===!1?(ie.side=gn,ie.needsUpdate=!0,A.renderBufferDirect(ae,j,te,ie,R,Ne),ie.side=Ei,ie.needsUpdate=!0,A.renderBufferDirect(ae,j,te,ie,R,Ne),ie.side=Bt):A.renderBufferDirect(ae,j,te,ie,R,Ne),R.onAfterRender(A,j,ae,te,ie,Ne)}function Dd(R){let j=0;for(let ae of R)ae.texture!==null&&j++;return j}function pa(R,j,ae){j.isScene!==!0&&(j=We);let te=de.get(R),ie=T.state.lights,Ne=T.state.shadowsArray,He=ie.state.version,De=se.getParameters(R,ie.state,Ne,j,ae,T.state.lightProbeGridArray),Be=se.getProgramCacheKey(De),Xe=te.programs;te.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?j.environment:null,te.fog=j.fog;let at=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;te.envMap=L.get(R.envMap||te.environment,at),te.envMapRotation=te.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",wt),Xe=new Map,te.programs=Xe,te.programVariants=new Map);let mt=Xe.get(Be);if(mt!==void 0){if(te.currentProgram===mt&&te.lightsStateVersion===He)return Ud(R,De),mt}else De.uniforms=se.getUniforms(R),P!==null&&R.isNodeMaterial&&P.build(R,ae,De),R.onBeforeCompile(De,A),mt=se.acquireProgram(De,Be),Xe.set(Be,mt),te.uniforms=De.uniforms;let Ge=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=le.uniform),Ud(R,De),te.needsLights=J0(R),te.lightsStateVersion=He,te.needsLights&&(Ge.ambientLightColor.value=ie.state.ambient,Ge.lightProbe.value=ie.state.probe,Ge.sunLights.value=ie.state.sun,Ge.sunLightShadows.value=ie.state.sunShadow,Ge.directionalLights.value=ie.state.directional,Ge.directionalLightShadows.value=ie.state.directionalShadow,Ge.spotLights.value=ie.state.spot,Ge.spotLightShadows.value=ie.state.spotShadow,Ge.rectAreaLights.value=ie.state.rectArea,Ge.ltc_1.value=ie.state.rectAreaLTC1,Ge.ltc_2.value=ie.state.rectAreaLTC2,Ge.pointLights.value=ie.state.point,Ge.pointLightShadows.value=ie.state.pointShadow,Ge.hemisphereLights.value=ie.state.hemi,Ge.sunShadowMatrix.value=ie.state.sunShadowMatrix,Ge.sunShadowCascade.value=ie.state.sunShadowCascade,Ge.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ge.spotLightMatrix.value=ie.state.spotLightMatrix,Ge.spotLightMap.value=ie.state.spotLightMap,Ge.pointShadowMatrix.value=ie.state.pointShadowMatrix),te.numLightProbeGrids=Dd(T.state.lightProbeGridArray),te.currentProgram=mt,te.uniformsList=null,mt}function K0(R,j,ae,te,ie){let Ne=de.get(R),He=Ne.currentProgram.id+","+te+","+ie,De=Ne.programVariants.get(He);return De===void 0?(De=pa(R,j,ae),Ne.programVariants.set(He,De)):(Ne.currentProgram=De,Ne.uniformsList=null,Ne.outputColorSpace=te,Ne.toneMapping=ie),De}function Nd(R){if(R.uniformsList===null){let j=R.currentProgram.getUniforms();R.uniformsList=ta.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Ud(R,j){let ae=de.get(R);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.batchingColor=j.batchingColor,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.instancingMorph=j.instancingMorph,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function j0(R,j,ae,te,ie){j.isScene!==!0&&(j=We),Ae.resetTextureUnits();let Ne=j.fog,He=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?j.environment:null,De=W===null?A.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ct.workingColorSpace,Be=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Xe=L.get(te.envMap||He,Be),at=te.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,mt=!!ae.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ge=!!ae.morphAttributes.position,gt=!!ae.morphAttributes.normal,Qt=!!ae.morphAttributes.color,Nt=wi;te.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Nt=A.toneMapping);let Pt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,vn=Pt!==void 0?Pt.length:0,Ve=de.get(te),Rn=T.state.lights;if(Me===!0&&(ye===!0||R!==F)){let Vt=R===F&&te.id===V;le.setState(te,R,Vt)}let Tt=!1,Ds=!1;te.version===Ve.__version?Ve.needsLights&&Ve.lightsStateVersion!==Rn.state.version||ie.isBatchedMesh&&Ve.batching===!1||!ie.isBatchedMesh&&Ve.batching===!0||ie.isBatchedMesh&&Ve.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&Ve.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&Ve.instancing===!1||!ie.isInstancedMesh&&Ve.instancing===!0||ie.isSkinnedMesh&&Ve.skinning===!1||!ie.isSkinnedMesh&&Ve.skinning===!0||ie.isInstancedMesh&&Ve.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ve.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ve.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ve.instancingMorph===!1&&ie.morphTexture!==null||Ve.envMap!==Xe||te.fog===!0&&Ve.fog!==Ne||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==le.numPlanes||Ve.numIntersection!==le.numIntersection)||Ve.vertexAlphas!==at||Ve.vertexTangents!==mt||Ve.morphTargets!==Ge||Ve.morphNormals!==gt||Ve.morphColors!==Qt||Ve.morphTargetsCount!==vn||Ve.numLightProbeGrids!==Dd(T.state.lightProbeGridArray)?Tt=!0:(Ve.outputColorSpace!==De||Ve.toneMapping!==Nt)&&(Ds=!0):(Tt=!0,Ve.__version=te.version);let _n=Ve.currentProgram;(Tt===!0||Ds===!0)&&(_n=Ds===!0?K0(te,j,ie,De,Nt):pa(te,j,ie),P&&te.isNodeMaterial&&P.onUpdateProgram(te,_n,Ve));let el=!1,hs=!1,Ns=!1,yt=_n.getUniforms(),dn=Ve.uniforms;if(J.useProgram(_n.program)&&(el=!0,hs=!0,Ns=!0),te.id!==V&&(V=te.id,hs=!0),el||F!==R){J.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),yt.setValue(Y,"projectionMatrix",R.projectionMatrix),yt.setValue(Y,"viewMatrix",R.matrixWorldInverse);let ln=yt.map.cameraPosition;ln!==void 0&&ln.setValue(Y,ke.setFromMatrixPosition(R.matrixWorld)),ue.logarithmicDepthBuffer&&yt.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&yt.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),F!==R&&(F=R,hs=!0,Ns=!0)}if(Ve.needsLights&&(Rn.state.sunShadowMap.length>0&&yt.setValue(Y,"sunShadowMap",Rn.state.sunShadowMap,Ae),Rn.state.directionalShadowMap.length>0&&yt.setValue(Y,"directionalShadowMap",Rn.state.directionalShadowMap,Ae),Rn.state.spotShadowMap.length>0&&yt.setValue(Y,"spotShadowMap",Rn.state.spotShadowMap,Ae),Rn.state.pointShadowMap.length>0&&yt.setValue(Y,"pointShadowMap",Rn.state.pointShadowMap,Ae)),ie.isSkinnedMesh){yt.setOptional(Y,ie,"bindMatrix"),yt.setOptional(Y,ie,"bindMatrixInverse");let Vt=ie.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),yt.setValue(Y,"boneTexture",Vt.boneTexture,Ae))}ie.isBatchedMesh&&(yt.setOptional(Y,ie,"batchingTexture"),yt.setValue(Y,"batchingTexture",ie._matricesTexture,Ae),yt.setOptional(Y,ie,"batchingIdTexture"),yt.setValue(Y,"batchingIdTexture",ie._indirectTexture,Ae),yt.setOptional(Y,ie,"batchingColorTexture"),ie._colorsTexture!==null&&yt.setValue(Y,"batchingColorTexture",ie._colorsTexture,Ae));let li=ae.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&he.update(ie,ae,_n),(hs||Ve.receiveShadow!==ie.receiveShadow)&&(Ve.receiveShadow=ie.receiveShadow,yt.setValue(Y,"receiveShadow",ie.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&j.environment!==null&&(dn.envMapIntensity.value=j.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=dS()),hs){if(yt.setValue(Y,"toneMappingExposure",A.toneMappingExposure),Ve.needsLights&&Z0(dn,Ns),Ne&&te.fog===!0&&xe.refreshFogUniforms(dn,Ne),xe.refreshMaterialUniforms(dn,te,X,K,T.state.transmissionRenderTarget[R.id]),Ve.needsLights&&Ve.numLightProbeGrids>0){let Vt=y,ln=0;for(let Fi of T.state.lightProbeGridArray)Fi.texture!==null&&(Vt.textures[ln]=Fi.texture,Vt.min[ln]=Fi.boundingBox.min,Vt.max[ln]=Fi.boundingBox.max,Vt.resolution[ln]=Fi.resolution,ln++);for(let Fi in Vt)Vt[Fi].length=ln;dn.probesSH.value=Vt.textures,dn.probesMin.value=Vt.min,dn.probesMax.value=Vt.max,dn.probesResolution.value=Vt.resolution}ta.upload(Y,Nd(Ve),dn,Ae)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ta.upload(Y,Nd(Ve),dn,Ae),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&yt.setValue(Y,"center",ie.center),yt.setValue(Y,"modelViewMatrix",ie.modelViewMatrix),yt.setValue(Y,"normalMatrix",ie.normalMatrix),yt.setValue(Y,"modelMatrix",ie.matrixWorld),te.uniformsGroups!==void 0){let Vt=te.uniformsGroups;for(let ln=0,Fi=Vt.length;ln<Fi;ln++){let Od=Vt[ln];ze.update(Od,_n),ze.bind(Od,_n)}}return _n}function Z0(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.sunLights.needsUpdate=j,R.sunLightShadows.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function J0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,j,ae){let te=de.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),de.get(R.texture).__webglTexture=j,de.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ae,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){let ae=de.get(R);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,ae=0){W=R,B=j,U=ae;let te=null,ie=!1,Ne=!1;if(R){let De=de.get(R);if(De.__useDefaultFramebuffer!==void 0){J.bindFramebuffer(Y.FRAMEBUFFER,De.__webglFramebuffer),H.copy(R.viewport),$.copy(R.scissor),Q=R.scissorTest,J.viewport(H),J.scissor($),J.setScissorTest(Q),V=-1;return}else if(De.__webglFramebuffer===void 0)Ae.setupRenderTarget(R);else if(De.__hasExternalTextures)Ae.rebindTextures(R,de.get(R.texture).__webglTexture,de.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let at=R.depthTexture;if(De.__boundDepthTexture!==at){if(at!==null&&de.has(at)&&(R.width!==at.image.width||R.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(R)}}let Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ne=!0);let Xe=de.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[j])?te=Xe[j][ae]:te=Xe[j],ie=!0):R.samples>0&&Ae.useMultisampledRTT(R)===!1?te=de.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?te=Xe[ae]:te=Xe,H.copy(R.viewport),$.copy(R.scissor),Q=R.scissorTest}else H.copy(be).multiplyScalar(X).floor(),$.copy(_e).multiplyScalar(X).floor(),Q=Ie;if(ae!==0&&(te=O),J.bindFramebuffer(Y.FRAMEBUFFER,te)&&J.drawBuffers(R,te),J.viewport(H),J.scissor($),J.setScissorTest(Q),ie){let De=de.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+j,De.__webglTexture,ae)}else if(Ne){let De=j;for(let Be=0;Be<R.textures.length;Be++){let Xe=de.get(R.textures[Be]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Be,Xe.__webglTexture,ae,De)}}else if(R!==null&&ae!==0){let De=de.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,De.__webglTexture,ae)}V=-1};function Fd(R){let j=de.get(R);return(j.__readFormat!==R.format||j.__readType!==R.type)&&(j.__readFormat=R.format,j.__readType=R.type,j.__formatReadable=ue.textureFormatReadable(R.format),j.__typeReadable=ue.textureTypeReadable(R.type)),j}this.readRenderTargetPixels=function(R,j,ae,te,ie,Ne,He,De=0){if(!(R&&R.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Be=Be[He],Array.isArray(Be)&&(Be=Be[0])),Be){J.bindFramebuffer(Y.FRAMEBUFFER,Be);try{let Xe=R.textures[De],at=Xe.format,mt=Xe.type;R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+De);let Ge=Fd(Xe);if(Ge.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-te&&ae>=0&&ae<=R.height-ie&&Y.readPixels(j,ae,te,ie,we.convert(at),we.convert(mt),Ne)}finally{let Xe=W!==null?de.get(W).__webglFramebuffer:null;J.bindFramebuffer(Y.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,j,ae,te,ie,Ne,He,De=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Be=Be[He],Array.isArray(Be)&&(Be=Be[0])),Be)if(j>=0&&j<=R.width-te&&ae>=0&&ae<=R.height-ie){J.bindFramebuffer(Y.FRAMEBUFFER,Be);let Xe=R.textures[De],at=Xe.format,mt=Xe.type;R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+De);let Ge=Fd(Xe);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,gt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ne.byteLength,Y.STREAM_READ),Y.readPixels(j,ae,te,ie,we.convert(at),we.convert(mt),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let Qt=W!==null?de.get(W).__webglFramebuffer:null;J.bindFramebuffer(Y.FRAMEBUFFER,Qt);let Nt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await um(Y,Nt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,gt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ne),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(gt),Y.deleteSync(Nt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,ae=0){let te=Math.pow(2,-ae),ie=Math.floor(R.image.width*te),Ne=Math.floor(R.image.height*te),He=j!==null?j.x:0,De=j!==null?j.y:0;Ae.setTexture2D(R,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ae,0,0,He,De,ie,Ne),J.unbindTexture()},this.copyTextureToTexture=function(R,j,ae=null,te=null,ie=0,Ne=0){let He,De,Be,Xe,at,mt,Ge,gt,Qt,Nt=R.isCompressedTexture?R.mipmaps[Ne]:R.image;if(ae!==null)He=ae.max.x-ae.min.x,De=ae.max.y-ae.min.y,Be=ae.isBox3?ae.max.z-ae.min.z:1,Xe=ae.min.x,at=ae.min.y,mt=ae.isBox3?ae.min.z:0;else{let yt=Math.pow(2,-ie);He=Math.floor(Nt.width*yt),De=Math.floor(Nt.height*yt),R.isDataArrayTexture?Be=Nt.depth:R.isData3DTexture?Be=Math.floor(Nt.depth*yt):Be=1,Xe=0,at=0,mt=0}te!==null?(Ge=te.x,gt=te.y,Qt=te.z):(Ge=0,gt=0,Qt=0);let Pt=we.convert(j.format),vn=we.convert(j.type),Ve;j.isData3DTexture?(Ae.setTexture3D(j,0),Ve=Y.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(Ae.setTexture2DArray(j,0),Ve=Y.TEXTURE_2D_ARRAY):(Ae.setTexture2D(j,0),Ve=Y.TEXTURE_2D),J.activeTexture(Y.TEXTURE0),J.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,j.flipY),J.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),J.pixelStorei(Y.UNPACK_ALIGNMENT,j.unpackAlignment);let Rn=J.getParameter(Y.UNPACK_ROW_LENGTH),Tt=J.getParameter(Y.UNPACK_IMAGE_HEIGHT),Ds=J.getParameter(Y.UNPACK_SKIP_PIXELS),_n=J.getParameter(Y.UNPACK_SKIP_ROWS),el=J.getParameter(Y.UNPACK_SKIP_IMAGES);J.pixelStorei(Y.UNPACK_ROW_LENGTH,Nt.width),J.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Nt.height),J.pixelStorei(Y.UNPACK_SKIP_PIXELS,Xe),J.pixelStorei(Y.UNPACK_SKIP_ROWS,at),J.pixelStorei(Y.UNPACK_SKIP_IMAGES,mt);let hs=R.isDataArrayTexture||R.isData3DTexture,Ns=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){let yt=de.get(R),dn=de.get(j),li=de.get(yt.__renderTarget),Vt=de.get(dn.__renderTarget);J.bindFramebuffer(Y.READ_FRAMEBUFFER,li.__webglFramebuffer),J.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let ln=0;ln<Be;ln++)hs&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,de.get(R).__webglTexture,ie,mt+ln),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,de.get(j).__webglTexture,Ne,Qt+ln)),Y.blitFramebuffer(Xe,at,Xe+He,at+De,Ge,gt,Ge+He,gt+De,Y.DEPTH_BUFFER_BIT,Y.NEAREST);J.bindFramebuffer(Y.READ_FRAMEBUFFER,null),J.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ie!==0||R.isRenderTargetTexture||de.has(R)){let yt=de.get(R),dn=de.get(j);J.bindFramebuffer(Y.READ_FRAMEBUFFER,b),J.bindFramebuffer(Y.DRAW_FRAMEBUFFER,D);for(let li=0;li<Be;li++)hs?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,yt.__webglTexture,ie,mt+li):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,yt.__webglTexture,ie),Ns?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,dn.__webglTexture,Ne,Qt+li):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,dn.__webglTexture,Ne),ie!==0?Y.blitFramebuffer(Xe,at,Xe+He,at+De,Ge,gt,Ge+He,gt+De,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ns?Y.copyTexSubImage3D(Ve,Ne,Ge,gt,Qt+li,Xe,at,He,De):Y.copyTexSubImage2D(Ve,Ne,Ge,gt,Xe,at,He,De);J.bindFramebuffer(Y.READ_FRAMEBUFFER,null),J.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ns?R.isDataTexture||R.isData3DTexture?Y.texSubImage3D(Ve,Ne,Ge,gt,Qt,He,De,Be,Pt,vn,Nt.data):j.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ve,Ne,Ge,gt,Qt,He,De,Be,Pt,Nt.data):Y.texSubImage3D(Ve,Ne,Ge,gt,Qt,He,De,Be,Pt,vn,Nt):R.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ne,Ge,gt,He,De,Pt,vn,Nt.data):R.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ne,Ge,gt,Nt.width,Nt.height,Pt,Nt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ne,Ge,gt,He,De,Pt,vn,Nt);J.pixelStorei(Y.UNPACK_ROW_LENGTH,Rn),J.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Tt),J.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ds),J.pixelStorei(Y.UNPACK_SKIP_ROWS,_n),J.pixelStorei(Y.UNPACK_SKIP_IMAGES,el),Ne===0&&j.generateMipmaps===!0&&j.mipmapsAutoUpdate===!0&&Y.generateMipmap(Ve),J.unbindTexture()},this.initRenderTarget=function(R){de.get(R).__webglFramebuffer===void 0&&Ae.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ae.setTextureCube(R,0):R.isData3DTexture?Ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ae.setTexture2DArray(R,0):Ae.setTexture2D(R,0),J.unbindTexture()},this.resetState=function(){B=0,U=0,W=null,J.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};function xf(i,e){if(e===zu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Qr||e===Ro){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Qr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Qm(i){let e=new Map,t=new Map,n=i.clone();return e0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function e0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)e0(i.children[n],e.children[n],t)}var No=class extends Ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Tf(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new ih(t,dt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ih(t,dt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Bf(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ns.extractUrlBase(e);a=ns.resolveURL(c,this.path)}else a=ns.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Xr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===r0){try{a[dt.KHR_BINARY_GLTF]=new kf(e)}catch(u){s&&s(u);return}r=JSON.parse(a[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new qf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:a[u]=new Sf;break;case dt.KHR_DRACO_MESH_COMPRESSION:a[u]=new zf(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:a[u]=new Hf;break;case dt.KHR_MESH_QUANTIZATION:a[u]=new Gf;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function pS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Xt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Mf=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Le(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Pn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Es(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zs(h),c.distance=u;break;case"spot":c=new ho(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Sf=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ot}extendParams(e,t,n){let s=[];e.color=new Le(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Pn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}},bf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Tf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(r,r)}return Promise.all(s)}},Ef=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},wf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Af=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Rf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Rt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Cf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Pf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(r[0],r[1],r[2],Pn),Promise.all(s)}},If=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Lf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(r[0],r[1],r[2],Pn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Rt)),Promise.all(s)}},Df=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Nf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Uf=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ff=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Of=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},ih=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},Bf=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ii.TRIANGLES&&c.mode!==ii.TRIANGLE_STRIP&&c.mode!==ii.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,p=[];for(let v of u){let M=new Ye,g=new G,x=new Wn,m=new G(1,1,1),S=new $i(v.geometry,v.material,f);for(let w=0;w<f;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,w),l.SCALE&&m.fromBufferAttribute(l.SCALE,w),S.setMatrixAt(w,M.compose(g,x,m));let y=null;for(let w in l)if(w==="_COLOR_0"){let T=l[w];S.instanceColor=new qi(T.array,T.itemSize,T.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(y===null){let d=S.geometry;y=new At,y.name=d.name;for(let _ in d.attributes)y.setAttribute(_,d.attributes[_]);for(let _ in d.morphAttributes)y.morphAttributes[_]=d.morphAttributes[_];d.index!==null&&y.setIndex(d.index),y.morphTargetsRelative=d.morphTargetsRelative;for(let _ of d.groups)y.addGroup(_.start,_.count,_.materialIndex);d.boundingBox!==null&&(y.boundingBox=d.boundingBox.clone()),d.boundingSphere!==null&&(y.boundingSphere=d.boundingSphere.clone()),y.drawRange.start=d.drawRange.start,y.drawRange.count=d.drawRange.count,y.userData=Object.assign({},d.userData),S.geometry=y}let T=l[w];y.setAttribute(w,new qi(T.array,T.itemSize,T.normalized))}Lt.prototype.copy.call(S,v),this.parser.assignFinalMaterial(S),p.push(S)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},r0="glTF",Do=12,t0={JSON:1313821514,BIN:5130562},kf=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Do),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==r0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Do,r=new DataView(e,Do),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===t0.JSON){let c=new Uint8Array(e,Do+a,o);this.content=n.decode(c)}else if(l===t0.BIN){let c=Do+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},zf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Wf[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Wf[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],p=sa[f.componentType];c[u]=p.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let v in p.attributes){let M=p.attributes[v],g=l[v];g!==void 0&&(M.normalized=g)}u(p)},o,c,Pn,f)})})}},Hf=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Gf=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},sh=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,f=u*u,p=f*u,v=e*c,M=v-c,g=-2*p+3*f,x=p-f,m=1-g,S=x-f+u;for(let y=0;y!==o;y++){let w=a[M+y+o],T=a[M+y+l]*h,d=a[v+y+o],_=a[v+y]*h;r[y]=m*w+S*T+g*d+x*_}return r}},mS=new Wn,Vf=class extends sh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return mS.fromArray(r).normalize().toArray(r),r}},ii={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},sa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},n0={9728:Ut,9729:nn,9984:dc,9985:Zr,9986:nr,9987:ni},i0={33071:Zn,33648:Dr,10497:Sn},vf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Cs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gS={CUBICSPLINE:void 0,LINEAR:Gs,STEP:Hs},_f={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new $t({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ei})),i.DefaultMaterial}function sr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function _S(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yS(i){let e,t=i.extensions&&i.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+yf(t.attributes):e=i.indices+":"+yf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+yf(i.targets[n]);return e}function yf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Xf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function MS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var SS=new Ye,qf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&a<98?(this.textureLoader=new oo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new uo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return sr(r,o,s),Pi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(ns.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=vf[s.type],o=sa[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new qt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=vf[s.type],c=sa[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,v=s.normalized===!0,M,g;if(p&&p!==u){let x=Math.floor(f/p),m="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count,S=t.cache.get(m);S||(M=new c(o,x*p,s.count*p/h),S=new Xs(M,p/h),t.cache.add(m,S)),g=new xs(S,l,f%p/h,v)}else o===null?M=new c(s.count*l):M=new c(o,f,s.count*l),g=new qt(M,l,v);if(s.sparse!==void 0){let x=vf.SCALAR,m=sa[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,w=new m(a[1],S,s.sparse.count*x),T=new c(a[2],y,s.sparse.count*l);o!==null&&(g=new qt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let d=0,_=w.length;d<_;d++){let I=w[d];if(g.setX(I,T[d*l]),l>=2&&g.setY(I,T[d*l+1]),l>=3&&g.setZ(I,T[d*l+2]),l>=4&&g.setW(I,T[d*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=v}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=n0[f.magFilter]||nn,h.minFilter=n0[f.minFilter]||ni,h.wrapS=i0[f.wrapS]||Sn,h.wrapT=i0[f.wrapT]||Sn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ut&&h.minFilter!==nn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(f){return new Promise(function(p,v){t.parse(f,p,v)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;let p=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(p),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(p,v){let M=p;t.isImageBitmapLoader===!0&&(M=function(g){let x=new jt(g);x.needsUpdate=!0,p(x)}),t.load(ns.resolveURL(f,r.path),M,void 0,v)})})}let u=h.then(function(f){return c===!0&&o.revokeObjectURL(l),Pi(f,a),f.userData.mimeType=a.mimeType||MS(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Yi,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ys,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return $t}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[dt.KHR_MATERIALS_UNLIT]){let u=s[dt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Pn),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Rt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Bt);let h=r.alphaMode||_f.OPAQUE;if(h===_f.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===_f.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ot&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ot&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ot){let u=r.emissiveFactor;o.emissive=new Le().setRGB(u[0],u[1],u[2],Pn)}return r.emissiveTexture!==void 0&&a!==Ot&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&sr(s,u,r),u})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return s0(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=yS(c),u=s[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=s0(new At,c,t),c.mode===ii.TRIANGLE_STRIP?f=f.then(p=>xf(p,Ro)):c.mode===ii.TRIANGLE_FAN&&(f=f.then(p=>xf(p,Qr))),s[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?xS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,v=h.length;p<v;p++){let M=h[p],g=a[p],x,m=c[p];if(g.mode===ii.TRIANGLES||g.mode===ii.TRIANGLE_STRIP||g.mode===ii.TRIANGLE_FAN||g.mode===void 0){let S=r.isSkinnedMesh===!0,y=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");S&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),x=S&&y?new ka(M,m):new je(M,m),x.isSkinnedMesh===!0&&x.normalizeSkinWeights()}else if(g.mode===ii.LINES)x=new $s(M,m);else if(g.mode===ii.LINE_STRIP)x=new qs(M,m);else if(g.mode===ii.LINE_LOOP)x=new Ha(M,m);else if(g.mode===ii.POINTS)x=new Ms(M,m);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(x.geometry.morphAttributes).length>0&&_S(x,r),x.name=t.createUniqueName(r.name||"mesh_"+e),Pi(x,r),g.extensions&&sr(s,x,g),t.assignFinalMaterial(x),u.push(x)}for(let p=0,v=u.length;p<v;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&sr(s,u[0],r),u[0];let f=new tt;r.extensions&&sr(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,v=u.length;p<v;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(Ai.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ts(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new Ye;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new za(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],v=s.samplers[p.sampler],M=p.target,g=M.node,x=s.parameters!==void 0?s.parameters[v.input]:v.input,m=s.parameters!==void 0?s.parameters[v.output]:v.output;M.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",x)),l.push(this.getDependency("accessor",m)),c.push(v),h.push(M))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],v=u[2],M=u[3],g=u[4],x=[];for(let S=0,y=f.length;S<y;S++){let w=f[S],T=p[S],d=v[S],_=M[S],I=g[S];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let A=n._createAnimationTracks(w,T,d,_,I);if(A)for(let C=0;C<A.length;C++)x.push(A[C])}let m=new ao(r,void 0,x);return Pi(m,s),m})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,SS)});for(let p=0,v=u.length;p<v;p++)h.add(u[p]);if(h.userData.pivot!==void 0&&u.length>0){let p=h.userData.pivot,v=u[0];h.pivot=new G().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],v.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Hr:c.length>1?h=new tt:c.length===1?h=c[0]:h=new Lt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Pi(h,r),r.extensions&&sr(n,h,r),r.matrix!==void 0){let u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new tt;n.name&&(r.name=s.createUniqueName(n.name)),Pi(r,n),n.extensions&&sr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(Qm(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof mn||f instanceof jt)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}Cs[r.path]===Cs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Cs[r.path]){case Cs.weights:h=Ji;break;case Cs.rotation:h=Qi;break;case Cs.translation:case Cs.scale:h=Ts;break;default:n.itemSize===1?h=Ji:h=Ts;break}let u=s.interpolation!==void 0?gS[s.interpolation]:Gs,f=this._getArrayFromAccessor(n);for(let p=0,v=l.length;p<v;p++){let M=new h(l[p]+"."+Cs[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),a.push(M)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Xf(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Qi?Vf:sh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function bS(i,e,t){let n=e.attributes,s=new pn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),o.normalized){let h=Xf(sa[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new G,l=new G;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,v=f.max;if(p!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),f.normalized){let M=Xf(sa[f.componentType]);l.multiplyScalar(M)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Un;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function s0(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Wf[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ct.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),Pi(i,e),bS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?vS(i,e.targets,t):i})}var ar=["guestA","guestB","guestC"],o0={guestA:"\uB370\uB2D8 \uBCC4\uBB34\uB2AC",guestB:"\uAE08\uBC1C \uB54B\uC740 \uBA38\uB9AC",guestC:"\uD770 \uC6D0\uD53C\uC2A4"},Yf=new Set;function l0(){let i=new Uint8Array([150,150,150,255,205,205,205,255,255,255,255,255]),e=new Qn(i,3,1);return e.minFilter=e.magFilter=Ut,e.needsUpdate=!0,e}var rr="#fde9e7",TS="#f5c6c9",a0={guestA:{hair:"#4b3634",hairStyle:"long",top:"#bfe2f1",sleeve:null,bottom:"pants",bottomColor:"#8fa1df",shoes:"#bfe2f1",F:[12,20,202,350],B:[20,393,195,722],head:[.12,0,.88,.385],topCrop:[.22,.43,.78,.67],legL:[.12,.63,.5,.94],legR:[.5,.63,.88,.94]},guestB:{hair:"#f2df8c",hairStyle:"braids",top:"#ffffff",sleeve:"#ffcaca",bottom:"shorts",bottomColor:"#cdebc9",warmers:"#ffffff",shoes:"#ffcaca",F:[234,19,413,352],B:[239,393,407,722],head:[.12,0,.88,.385],topCrop:[.2,.43,.8,.66],lowCrop:[.15,.62,.85,.76]},guestC:{hair:"#a68a6b",hairStyle:"wavy",top:"#fffdfb",sleeve:"#fffdfb",longSleeve:!0,bottom:"dress",bottomColor:"#fffdfb",boots:"#8c6d58",F:[444,22,634,348],B:[450,395,628,720],head:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.78]},shop:{hair:"#3f302f",hairStyle:"wavy",top:"#bfe2f1",sleeve:"#bfe2f1",bottom:"dress",bottomColor:"#fbf09b",shoes:"#bfe2f1",F:[666,23,844,347],B:[671,395,839,719],head:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.8]},cafe:{hair:"#3f302f",hairStyle:"ponytail",top:"#fbdede",sleeve:"#fbdede",bottom:"dress",bottomColor:"#d4efbf",shoes:"#fbdede",F:[868,3,1075,368],B:[881,376,1062,738],head:[.1,.02,.86,.405],headB:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.8]}},Uo=new Image;Uo.src="looks.png";var $f=new Map;function ES(i,e,t,{clean:n=!1,skinBelow:s=!1}={}){let r=i.join(",")+e.join(",")+t+n+s;if($f.has(r))return $f.get(r);let[a,o,l,c]=i,h=l-a,u=c-o,f=a+e[0]*h,p=o+e[1]*u,v=(e[2]-e[0])*h,M=(e[3]-e[1])*u,g=n?Math.max(48,Math.round(v)):256,x=Math.round(g*M/v),m=document.createElement("canvas");m.width=g,m.height=x;let S=m.getContext("2d",{willReadFrequently:n});S.fillStyle=t,S.fillRect(0,0,g,x),s&&(S.fillStyle=rr,S.fillRect(0,x*.55,g,x));let y=new ei(m);y.colorSpace=Rt,y.anisotropy=4;let w=()=>{if(S.drawImage(Uo,f,p,v,M,0,0,g,x),n){let T=S.getImageData(0,0,g,x),d=T.data,_=new Uint8ClampedArray(d),I=3,A=C=>d[C]*.3+d[C+1]*.59+d[C+2]*.11;for(let C=0;C<x;C++)for(let P=0;P<g;P++){let O=(C*g+P)*4,b=A(O),D=O,B=b;for(let U=-I;U<=I;U++){let W=C+U;if(!(W<0||W>=x))for(let V=-I;V<=I;V++){let F=P+V;if(F<0||F>=g)continue;let H=(W*g+F)*4,$=A(H);$>B&&(B=$,D=H)}}b<B*.84&&(_[O]=d[D],_[O+1]=d[D+1],_[O+2]=d[D+2])}T.data.set(_),S.putImageData(T,0,0)}y.needsUpdate=!0};return Uo.complete&&Uo.naturalWidth?w():Uo.addEventListener("load",w,{once:!0}),$f.set(r,y),y}function Kf(i,e={}){let t=new tt,n=[],s=[],r={root:t,arms:n,head:null,animate:g,setLook:u,look:null},a=null,o=document.createElement("canvas");o.width=o.height=64;let l=o.getContext("2d"),c=l.createRadialGradient(32,32,4,32,32,30);c.addColorStop(0,"rgba(90,60,120,0.32)"),c.addColorStop(1,"rgba(90,60,120,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);let h=new je(new Ki(.62,.62),new Ot({map:new ei(o),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.004,t.add(h);function u(x){a&&t.remove(a);let m=a0[x]||a0.guestA;r.look=x;let S=new Map,y=(B,U=1)=>{let W=B+U;return S.has(W)||S.set(W,new Ot({color:new Le(B).multiplyScalar(U)})),S.get(W)},w=(B,U,W,V)=>new Ot({map:ES(m[B],U,W,V),side:Bt}),T={clean:!0},d=(B,U,W,V=0,F=0,H=0)=>{let $=new je(U,W);return $.position.set(V,F,H),$.castShadow=!0,B.add($),$},_=(B,U=10,W=8)=>new Zt(B,U,W),I=(B,U,W,V,F,H,$,Q=0,k=8)=>(d(B,new ot(U,W,V,k,1,!0,-Math.PI/2,Math.PI),F,0,$,Q),d(B,new ot(U,W,V,k,1,!0,Math.PI/2,Math.PI),H,0,$,Q));a=new tt,t.add(a),n.length=0,s.length=0;for(let B of[-1,1]){let U=new tt;if(U.position.set(.07*B,.34,0),a.add(U),m.bottom==="pants"){let W=new tt;W.position.y=-.12,U.add(W),I(W,.075,.085,.28,w("F",B<0?m.legL:m.legR,m.bottomColor,T),w("B",B<0?m.legR:m.legL,m.bottomColor,T),0)}else d(U,new ot(.044,.04,.24,6),y(rr),0,-.12,0);m.warmers&&d(U,new ot(.058,.06,.11,7),y(m.warmers),0,-.205,0),m.boots?(d(U,new ot(.06,.058,.14,7),y(m.boots),0,-.2,0),d(U,_(.066,8,6),y(m.boots),0,-.275,.02).scale.set(1,.6,1.3)):d(U,_(.066,8,6),y(m.shoes),0,-.29,.022).scale.set(1,.62,1.35),s.push(U)}d(a,new ot(.06,.06,.12,10),y(rr),0,.68,0),m.bottom==="dress"?I(a,.12,.25,.4,w("F",m.lowCrop,m.bottomColor,T),w("B",m.lowCrop,m.bottomColor,T),.44):(I(a,.115,.135,.28,w("F",m.topCrop,m.top,T),w("B",m.topCrop,m.top,T),.5),m.bottom==="pants"&&I(a,.135,.15,.06,y(m.bottomColor),y(m.bottomColor,.94),.37),m.bottom==="shorts"&&I(a,.14,.17,.13,w("F",m.lowCrop,m.bottomColor,T),w("B",m.lowCrop,m.bottomColor,T),.33));for(let B of[-1,1]){let U=new tt;U.position.set(.14*B,.61,0),a.add(U),m.sleeve&&d(U,_(m.longSleeve?.06:.07,8,6),y(m.sleeve),.01*B,-.03,0).scale.set(1,1.1,1),d(U,new ot(.036,.04,.2,6),y(m.longSleeve?m.sleeve:rr),.012*B,-.12,0),m.longSleeve&&d(U,_(.05,8,6),y(m.sleeve),.014*B,-.19,0).scale.set(1,.7,1),d(U,_(.055,8,6),y(rr),.016*B,-.245,.006),U.rotation.z=.32*B,n.push(U)}let A=new tt;A.position.set(0,.89,0),a.add(A);let C=.24,P=1.12,O=.97;d(A,_(C*1.04,14,10),y(rr)).scale.set(P,O,1),d(A,new Zt(C*1.06,16,10,0,Math.PI,0,Math.PI*.69),w("F",m.head,m.hair,{skinBelow:!0})).scale.set(P,O,1),d(A,new Zt(C*1.055,16,10,Math.PI,Math.PI,0,Math.PI*.72),w("B",m.headB||m.head,m.hair)).scale.set(P,O,1);for(let B of[-1,1])d(A,_(.08,8,6),y(rr),.3*B,-.03,.02).scale.set(.55,1,.75),d(A,_(.048,8,6),y(TS),.32*B,-.03,.035).scale.set(.35,.8,.6);f(A,m,d,y,_),r.head=A,t.traverse(B=>{B.isMesh&&(B.frustumCulled=!1)})}function f(x,m,S,y,w){if(m.hairStyle!=="braids")return;let T=y(m.hair,.97);for(let d of[-1,1])for(let _=0;_<5;_++)S(x,w(.045-_*.003,7,5),T,(.2-_*.006)*d,-.15-_*.065,.09+_*.012).scale.set(1,.85,1)}let p=0,v=0,M=0;function g(x,m,S,y=!1,w=!1){let T=r.head;if(M+=((y?1:0)-M)*Math.min(1,x*10),M>.02){s[0].rotation.x=s[1].rotation.x=-1.45*M,n[0].rotation.x=n[1].rotation.x=-.5*M,a.position.y=.11*M,a.rotation.x=0,T.rotation.z=0,v=0;return}let d=Math.min(1,m/2);v+=(d-v)*Math.min(1,x*10),p+=x*(5+m*3.2);let _=Math.sin(p)*.75*v;s[0].rotation.x=_,s[1].rotation.x=-_,n[0].rotation.x=-_*.8,n[1].rotation.x=_*.8,n[0].rotation.z=-.32,n[1].rotation.z=.32,w&&(n[0].rotation.x=n[1].rotation.x=-1.2),a.position.y=Math.abs(Math.sin(p))*.035*v+Math.sin(S*2.2)*.006*(1-v),T.rotation.z=Math.sin(p*.5)*.05*v,a.rotation.x=.07*v}return u(e.look||"guestA"),r}var wS=500,rh=6,ch=1.05,rs={tteok:{name:"\uB5A1\uAF2C\uCE58",price:2e3,emoji:"\u{1F361}",tag:"\uB300\uD45C",desc:"\uB2EC\uCF64\uC9ED\uC9E4 \uC18C\uC2A4 \uB5A1\uAF2C\uCE58 \xB7 \uD3EC\uC7A5 \uAC00\uB2A5",model:"skewer"},mochi:{name:"\uACFC\uC77C\uCC39\uC300\uB5A1",price:4500,emoji:"\u{1F353}",desc:"\uBCF4\uB4E4\uBCF4\uB4E4\uD55C \uD53C\uC5D0 \uACFC\uC77C\uC774 \uAC00\uB4DD",model:"mochi",opts:{flavor:["\uC694\uAC70\uC0E4\uC778\uBA38\uC2A4\uCF13","\uD06C\uB9BC\uACE8\uB4DC\uD0A4\uC704\uD30C\uC778"]}},kiwiPf:{name:"\uD0A4\uC704 \uD30C\uC778 \uD06C\uB9BC \uCC39\uC300\uB5A1 \uD30C\uB974\uD398",price:12e3,emoji:"\u{1F95D}",desc:"\uACFC\uC77C \uAC00\uB4DD, \uCAC0\uCAC0\uD55C \uCC39\uC300\uB5A1 \uD30C\uB974\uD398",model:"kiwiParfait"},puddPf:{name:"\uD478\uB529\uCD08\uCF54\uD30C\uB974\uD398",price:12e3,emoji:"\u{1F36E}",desc:"\uCEE4\uC2A4\uD130\uB4DC \uD478\uB529\uACFC \uBC14\uB098\uB098\uC758 \uC870\uD569",model:"puddingParfait"},tangSoda:{name:"\uADE4\uC18C\uB2E4",price:6e3,emoji:"\u{1F34A}",model:"soda",c:"#ffa81e",scoop:"#fff4dc"},melonSoda:{name:"\uBA54\uB860\uC18C\uB2E4",price:6e3,emoji:"\u{1F348}",model:"soda",c:"#6fd34a",scoop:"#d6f2c4"},creamSoda:{name:"\uD06C\uB9BC\uC18C\uB2E4",price:6e3,emoji:"\u{1FAE7}",desc:"\uC5F4\uB300\uACFC\uC77C + \uB77C\uBB34\uB124\uB9DB",model:"soda",c:"#2f93ee",scoop:"#fff0c8"},chocoMilk:{name:"\uCD08\uCF54\uC6B0\uC720",price:6e3,emoji:"\u{1F36B}",model:"milk",c:"#7b4a33",drizzle:!0},greenMilk:{name:"\uB179\uCC28\uC6B0\uC720",price:6e3,emoji:"\u{1F375}",model:"milk",c:"#86a95b",drizzle:!0},melonMilk:{name:"\uBA54\uB860\uC6B0\uC720",price:6e3,emoji:"\u{1F348}",model:"milk",c:"#b9e3a0"},bananaMilk:{name:"\uBC14\uB098\uB098\uC6B0\uC720",price:6e3,emoji:"\u{1F34C}",model:"milk",c:"#f3dc8e"},mintMilk:{name:"\uBBFC\uD2B8\uCD08\uCF54\uC6B0\uC720",price:6e3,emoji:"\u{1F33F}",model:"milk",c:"#7d5a47",cream:"#d4f5e6"},americano:{name:"\uC544\uBA54\uB9AC\uCE74\uB178",price:4500,emoji:"\u2615",desc:"\uB354\uCE58 \uC6D0\uC561\uC744 \uC368\uC694",model:"coffee",opts:{temp:["\uC544\uC774\uC2A4","\uD56B"],shot:!0}},latte:{name:"\uC5F0\uC720\uB77C\uB5BC",price:5e3,emoji:"\u{1F95B}",desc:"\uC544\uC774\uC2A4\uB9CC \uAC00\uB2A5\uD574\uC694",model:"latte",opts:{shot:!0}},sodaSlush:{name:"\uC18C\uB2E4 \uC2AC\uB7EC\uC2DC",price:6500,emoji:"\u{1F9CA}",model:"slush",c:"#9dd6ff"},mintSlush:{name:"\uBBFC\uD2B8\uCD08\uCF54 \uC2AC\uB7EC\uC2DC",price:6500,emoji:"\u{1F367}",model:"slush",c:"#bdeedb",chips:!0},pineSando:{name:"\uD30C\uC778\uC560\uD50C \uC0B0\uB3C4",price:6500,emoji:"\u{1F96A}",model:"sando"},pudding:{name:"\uCEE4\uC2A4\uD130\uB4DC \uD478\uB529",price:4500,emoji:"\u{1F36E}",model:"pudding"},peachTea:{name:"\uBCF5\uC22D\uC544 \uC544\uC774\uC2A4\uD2F0",price:4500,emoji:"\u{1F351}",model:"tea",c:"#f0a050"}},jf=[["\uCD94\uCC9C",["tteok","mochi","kiwiPf","puddPf"]],["\uC18C\uB2E4",["tangSoda","melonSoda","creamSoda"]],["\uC6B0\uC720",["chocoMilk","greenMilk","melonMilk","bananaMilk","mintMilk"]],["\uCEE4\uD53C",["americano","latte"]],["\uC2AC\uB7EC\uC2DC",["sodaSlush","mintSlush"]],["\uB514\uC800\uD2B8",["pineSando","puddPf","pudding"]],["\uD2F0",["peachTea"]]],Zf=i=>i.toLocaleString("ko-KR")+"\uC6D0",Jf=new Map;function lt(i,e={}){let t=i+JSON.stringify(e);return Jf.has(t)||Jf.set(t,new $t({color:i,roughness:.45,metalness:0,...e})),Jf.get(t)}var hh=()=>lt("#eef8fc",{transparent:!0,opacity:.32,roughness:.05,depthWrite:!1});function nt(i,e,t,n=0,s=0,r=0){let a=new je(e,t);return a.position.set(n,s,r),i.add(a),a}var Oo=(i,e=20)=>new to(i.map(([t,n])=>new pe(t,n)),e);function ah(i,e,{h:t=.17,w:n=.04}={}){nt(i,Oo([[0,0],[.034,0],[.035,.006],[.008,.014],[.007,.06-.008],[.014,.06],[n*.75,.06+.035],[n,t-.02],[n+.002,t]]),hh()).renderOrder=3;let r=new tt;return r.position.y=.06+.002,i.add(r),nt(r,Oo([[0,0],[.012,0],[n*.72,.035],[n-.004,t-.06-.03],[0,t-.06-.03]]),lt(e,{roughness:.3})),{lv:r,top:t-.02}}function Qf(i,e,t="#fffaf3",n=1){let s=new tt;s.position.y=e,i.add(s);let r=lt(t,{roughness:.75});return nt(s,new Zt(.036*n,12,8),r,0,.008,0).scale.y=.6,nt(s,new Zt(.027*n,12,8),r,0,.028*n,0).scale.y=.7,nt(s,new Ss(.018*n,.03*n,10),r,0,.05*n,0),s}function Fo(i,e,t,n){let s=new tt;s.position.set(e,t,n),i.add(s),nt(s,new Zt(.013,10,8),lt("#e0142f",{roughness:.15}));let r=nt(s,new ot(.0015,.0015,.04,4),lt("#5b7a2a"),.006,.022,0);return r.rotation.z=-.35,s}function oh(i,e,t,n=.12){let s=nt(i,new ot(.004,.004,n,6),lt(e));return s.position.set(.012,t,.005),s.rotation.z=-.22,s}function lh(i,e=.085){nt(i,new ot(e,e*.8,.01,24),lt("#fffdf8",{roughness:.3}),0,.005,0)}function Bo(i,e){let t=rs[i],n=new tt,s=[],r=[],a=null;switch(t.model){case"soda":{let o=ah(n,t.c);a=o.lv;let l=nt(n,new Zt(.035,14,10),lt(t.scoop,{roughness:.85}),0,o.top+.012,0);l.scale.y=.85,s.push(l),s.push(Fo(n,.012,o.top+.048,.012));break}case"milk":{let o=ah(n,t.c);a=o.lv;let l=Qf(n,o.top-.004,t.cream);if(s.push(l),t.drizzle)for(let c=0;c<3;c++){let h=nt(l,new ji(.026-c*.006,.0025,4,18),lt("#4a2a1d"),0,.015+c*.016,0);h.rotation.x=Math.PI/2}s.push(Fo(n,0,o.top+.066,0));break}case"slush":{let o=ah(n,t.c,{h:.16,w:.042});a=o.lv;let l=nt(n,new Zt(.043,14,8,0,Math.PI*2,0,Math.PI/2),lt(t.c,{roughness:.95}),0,o.top-.004,0);if(l.scale.y=.7,s.push(l),t.chips)for(let c=0;c<6;c++)s.push(nt(n,new kt(.008,.004,.008),lt("#3b2418"),Math.cos(c)*.022,o.top+.016,Math.sin(c*1.7)*.022));s.push(oh(n,"#ff8fb8",o.top));break}case"tea":{let o=nt(n,Oo([[0,0],[.034,0],[.04,.15],[.041,.15]]),hh());o.renderOrder=3,a=new tt,a.position.y=.004,n.add(a),nt(a,new ot(.037,.032,.13,18),lt(t.c,{roughness:.25,transparent:!0,opacity:.88}),0,.065,0);for(let c=0;c<3;c++)nt(a,new kt(.02,.02,.02),lt("#ffffff",{transparent:!0,opacity:.55,roughness:.05}),Math.cos(c*2.1)*.016,.115,Math.sin(c*2.1)*.016).rotation.y=c;let l=nt(n,new ot(.02,.02,.005,14),lt("#ffd58a"),.03,.15,0);l.rotation.z=Math.PI/2,s.push(l),s.push(oh(n,"#9be0c4",.14,.16));break}case"coffee":{if(e.temp==="\uD56B"){nt(n,new ot(.075,.06,.008,20),lt("#fffdf8"),0,.004,0),nt(n,new ot(.042,.034,.08,18,1,!0),lt("#fffaf2",{side:Bt}),0,.048,0),nt(n,new ot(.034,.034,.004,18),lt("#fffaf2"),0,.01,0);let o=nt(n,new ji(.02,.006,6,12,Math.PI),lt("#fffaf2"),.042,.05,0);o.rotation.z=-Math.PI/2,a=new tt,a.position.y=.012,n.add(a),nt(a,new ot(.039,.034,.066,18),lt("#3a2014",{roughness:.15}),0,.033,0)}else{let o=nt(n,Oo([[0,0],[.034,0],[.04,.15],[.041,.15]]),hh());o.renderOrder=3,a=new tt,a.position.y=.004,n.add(a),nt(a,new ot(.037,.032,.13,18),lt("#3a1f12",{roughness:.2,transparent:!0,opacity:.92}),0,.065,0);for(let l=0;l<3;l++)nt(a,new kt(.02,.02,.02),lt("#ffffff",{transparent:!0,opacity:.5,roughness:.05}),Math.cos(l*2.1)*.016,.118,Math.sin(l*2.1)*.016).rotation.y=l;s.push(oh(n,"#2b2b2b",.14,.16))}break}case"latte":{let o=nt(n,Oo([[0,0],[.034,0],[.04,.15],[.041,.15]]),hh());o.renderOrder=3,a=new tt,a.position.y=.004,n.add(a),nt(a,new ot(.034,.032,.03,18),lt("#fff6e2"),0,.015,0),nt(a,new ot(.036,.034,.05,18),lt("#f1e5d2"),0,.055,0),nt(a,new ot(.037,.036,.05,18),lt("#8a5634",{roughness:.25}),0,.105,0),s.push(oh(n,"#f7b6cf",.14,.16));break}case"puddingParfait":case"kiwiParfait":{let o=ah(n,t.model==="kiwiParfait"?"#f6efe0":"#5a3322",{h:.15,w:.045});a=o.lv;let l=o.top;if(s.push(Qf(n,l-.006,"#fffaf3",1.25)),t.model==="puddingParfait"){let c=new tt;c.position.set(-.012,l+.02,.012),n.add(c),s.push(c),nt(c,new ot(.022,.028,.032,18),lt("#f7c75a",{roughness:.35}),0,.016,0),nt(c,new ot(.0225,.022,.008,18),lt("#8c4a12",{roughness:.2}),0,.034,0),s.push(Fo(n,-.012,l+.072,.012));for(let u=0;u<3;u++){let f=nt(n,new ot(.013,.013,.006,12),lt("#fff2c4"),.03,l+.01+u*.012,-.02+u*.016);f.rotation.x=Math.PI/2-.4,s.push(f)}let h=nt(n,new Zt(.009,8,6),lt("#ff9cc0"),.028,l+.032,.028);h.scale.z=.4,s.push(h)}else{for(let h=0;h<5;h++)s.push(nt(n,new kt(.018,.016,.018),lt("#ffd23f",{roughness:.35}),Math.cos(h*1.3)*.03,l+.022+h%2*.012,Math.sin(h*1.3)*.03));for(let h=0;h<2;h++){let u=nt(n,new ot(.016,.016,.005,14),lt("#9ccf3a",{roughness:.4}),-.026+h*.05,l+.04,.02-h*.03);u.rotation.x=Math.PI/2-.3,u.rotation.z=h?.4:-.4,s.push(u)}let c=nt(n,new Zt(.02,12,8),lt("#fffefa",{roughness:.8}),0,l+.05,0);c.scale.y=.75,s.push(c),s.push(Fo(n,.004,l+.075,.004))}break}case"pudding":{lh(n);let o=new tt;n.add(o),r.push(o),nt(o,new ot(.028,.038,.045,20),lt("#f7c75a",{roughness:.35}),0,.032,0),nt(o,new ot(.0285,.028,.01,20),lt("#8c4a12",{roughness:.2}),0,.058,0);let l=Qf(o,.062,"#fffaf3",.55);s.push(l),s.push(Fo(o,0,.09,0));break}case"sando":{lh(n,.095);for(let o of[-1,1]){let l=new tt;l.position.set(.032*o,.01,0),l.rotation.y=.3*o,n.add(l),r.push(l),nt(l,new kt(.05,.065,.026),lt("#fffaf2",{roughness:.9}),0,.033,0),nt(l,new kt(.051,.026,.02),lt("#fff7e6",{roughness:.6}),0,.033,.0035);let c=nt(l,new Ss(.012,.016,12),lt("#ffcf3d",{roughness:.35}),0,.034,.014);c.rotation.x=Math.PI/2}break}case"skewer":{lh(n,.095);let o=new tt;o.position.y=.018,o.rotation.y=.5,n.add(o),r.push(o);let l=nt(o,new ot(.0022,.0022,.2,5),lt("#d9b07a"),0,0,0);l.rotation.z=Math.PI/2;for(let c=0;c<4;c++)nt(o,new kt(.022,.016,.03),lt("#d9561e",{roughness:.25}),-.04+c*.024,0,0);break}case"mochi":{lh(n,.07);let o=new tt;n.add(o),r.push(o),nt(o,new ot(.045,.036,.022,14,1,!0),lt("#8fd16b",{side:Bt}),0,.02,0);let l=nt(o,new Zt(.042,16,12),lt("#fffefb",{roughness:.9}),0,.04,0);l.scale.y=.72;let c=e.flavor==="\uD06C\uB9BC\uACE8\uB4DC\uD0A4\uC704\uD30C\uC778"?"#ffd23f":"#b9e46a";nt(o,new Zt(.01,8,6),lt(c),.02,.066,.012);break}}return n.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)}),n.scale.setScalar(ch),{g:n,top:s,body:r,lv:a,stage:0,pop:0}}function c0({scene3d:i,storeRoot:e,data:t,hero:n,npcs:s,showToast:r,isTouch:a,canOccupy:o,playGame:l}){let c=ue=>document.getElementById(ue),h=c("menu"),u=c("order-btn"),f=c("eat-btn"),p=c("order-chip"),v=s.find(ue=>ue.id==="cafe"),M=[],g=0,x="idle",m=0,S=0,y=[],w=null,T=[],d=null,_=0,I=ue=>[ue.temp,ue.shot?"shot":"",ue.flavor].filter(Boolean).join("\xB7"),A=ue=>rs[ue.key].price+(ue.opt.shot?wS:0),C=()=>M.reduce((ue,J)=>ue+J.qty,0),P=()=>M.reduce((ue,J)=>ue+A(J)*J.qty,0);function O(ue,J=4e3){v&&(clearTimeout(O.t),v.el.textContent=ue,O.t=setTimeout(()=>v.el.textContent="\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615",J))}function b(){if(x==="done")return D();let[,ue]=jf[g];h.innerHTML=`
      <div class="mhead"><div><b>Soo it Happy MENU</b><span>\uC218\uC787\uD574\uD53C \uCE74\uD398 \xB7 \uC6D0\uD558\uB294 \uBA54\uB274\uB97C \uB2F4\uC544 \uC8FC\uC138\uC694</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="cats">${jf.map(([J],ge)=>`<button class="${ge===g?"on":""}" data-cat="${ge}">${J}</button>`).join("")}</div>
      ${jf[g][0]==="\uCEE4\uD53C"?'<p class="note">* \uB354\uCE58 \uC6D0\uC561 \uC0AC\uC6A9 \xB7 \uC544\uBA54\uB9AC\uCE74\uB178\uB294 \uC544\uC774\uC2A4/\uD56B \uC120\uD0DD \xB7 \uC5F0\uC720\uB77C\uB5BC\uB294 \uC544\uC774\uC2A4\uB9CC \xB7 \uC0F7 \uCD94\uAC00 +500\uC6D0</p>':""}
      <div class="items">${ue.map(J=>{let ge=rs[J],de=ge.opts||{};return`<div class="item" data-key="${J}">
          <span class="emo">${ge.emoji}</span>
          <div class="info"><b>${ge.name}${ge.tag?` <i>${ge.tag}</i>`:""}</b>${ge.desc?`<small>${ge.desc}</small>`:""}
            ${de.temp?`<div class="seg">${de.temp.map((Ae,L)=>`<button data-opt="temp" data-v="${Ae}" class="${L?"":"on"}">${Ae}</button>`).join("")}</div>`:""}
            ${de.flavor?`<div class="seg">${de.flavor.map((Ae,L)=>`<button data-opt="flavor" data-v="${Ae}" class="${L?"":"on"}">${Ae}</button>`).join("")}</div>`:""}
            ${de.shot?'<label class="shot"><input type="checkbox" data-opt="shot"> \uC0F7 \uCD94\uAC00 +500\uC6D0</label>':""}
          </div>
          <div class="buy"><span class="price">${Zf(ge.price)}</span><button class="add" data-act="add">\uB2F4\uAE30</button></div>
        </div>`}).join("")}</div>
      <div class="cart">
        ${M.length?`<div class="lines">${M.map((J,ge)=>`<div class="line"><span>${rs[J.key].emoji} ${rs[J.key].name}${I(J.opt)?` <small>(${I(J.opt)})</small>`:""}</span>
          <span class="step"><button data-act="dec" data-i="${ge}" aria-label="\uBE7C\uAE30">\u2212</button><b>${J.qty}</b><button data-act="inc" data-i="${ge}" aria-label="\uB354\uD558\uAE30">+</button></span></div>`).join("")}</div>`:'<p class="empty">\uC544\uC9C1 \uB2F4\uC740 \uBA54\uB274\uAC00 \uC5C6\uC5B4\uC694</p>'}
        <button class="go" data-act="order" ${M.length?"":"disabled"}>${M.length?`\u{1F9FE} ${C()}\uAC1C \xB7 ${Zf(P())} \uC8FC\uBB38\uD558\uAE30`:"\uBA54\uB274\uB97C \uB2F4\uC544 \uC8FC\uC138\uC694"}</button>
        <p class="fine">\uAC00\uC0C1 \uC8FC\uBB38\uC774\uC5D0\uC694 \xB7 \uC2E4\uC81C \uACB0\uC81C\uB294 \uB418\uC9C0 \uC54A\uC544\uC694</p>
      </div>`}function D(){h.innerHTML=`
      <div class="mhead"><div><b>\uC8FC\uBB38 \uC644\uB8CC! \u{1F9FE}</b><span>\uC8FC\uBB38\uBC88\uD638 ${m} \xB7 ${Zf(w.total)}</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="done">
        <div class="list">${w.lines.map(ue=>`<div>${rs[ue.key].emoji} ${rs[ue.key].name}${I(ue.opt)?` (${I(ue.opt)})`:""} \xD7 ${ue.qty}</div>`).join("")}</div>
        <p>\uC5B4\uB5BB\uAC8C \uBC1B\uC744\uAE4C\uC694?</p>
        <button class="go" data-act="eat">\u{1F37D}\uFE0F \uADF8\uB0E5 \uBA39\uC744\uB798\uC694</button>
        <button class="go game" data-act="game">\u{1F50D} \uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30 \uD558\uACE0 \uBA39\uAE30</button>
      </div>`}function B(){x==="done"&&(x="idle"),b(),h.hidden=!1,h.offsetWidth,h.classList.add("on")}function U(){h.classList.remove("on"),setTimeout(()=>{h.classList.contains("on")||(h.hidden=!0)},250)}h.addEventListener("click",ue=>{let J=ue.target.closest("button");if(!J)return;if(J.dataset.cat){g=+J.dataset.cat,b(),h.querySelector(".items").scrollTop=0;return}if(J.dataset.opt){J.parentElement.querySelectorAll("button").forEach(de=>de.classList.toggle("on",de===J));return}let ge=J.dataset.act;if(ge==="close")U();else if(ge==="add"){let de=J.closest(".item"),Ae=de.dataset.key,L={};de.querySelectorAll(".seg .on").forEach(se=>L[se.dataset.opt]=se.dataset.v);let E=de.querySelector("[data-opt=shot]");if(E&&E.checked&&(L.shot=!0),C()>=rh){r(`\uD55C \uBC88\uC5D0 ${rh}\uAC1C\uAE4C\uC9C0 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694`);return}let Z=M.find(se=>se.key===Ae&&I(se.opt)===I(L));Z?Z.qty++:M.push({key:Ae,opt:L,qty:1}),b(),r(`${rs[Ae].emoji} ${rs[Ae].name} \uB2F4\uC558\uC5B4\uC694`);let fe=h.querySelector(".lines");fe&&(fe.scrollTop=fe.scrollHeight)}else if(ge==="inc"||ge==="dec"){let de=M[+J.dataset.i];if(ge==="inc"){if(C()>=rh){r(`\uD55C \uBC88\uC5D0 ${rh}\uAC1C\uAE4C\uC9C0 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694`);return}de.qty++}else--de.qty<=0&&M.splice(+J.dataset.i,1);b()}else if(ge==="order"){if(x!=="idle"&&x!=="done"||y.length){r("\uBA3C\uC800 \uC8FC\uBB38\uD55C \uBA54\uB274\uB97C \uBC1B\uC740 \uB4A4\uC5D0 \uB610 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694");return}m=10+Math.floor(Math.random()*89),w={lines:M.map(de=>({...de,opt:{...de.opt}})),total:P()},M.length=0,x="done",b()}else ge==="eat"?(U(),x="making",S=performance.now()+4500,O(`\uC8FC\uBB38\uBC88\uD638 ${m}\uBC88, \uC8FC\uBB38 \uBC1B\uC558\uC5B4\uC694! \uC790\uB9AC\uC5D0 \uC549\uC544 \uACC4\uC2DC\uBA74 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F353}`,6e3),r("\u{1FA91} \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694 \xB7 \uC9C1\uC6D0\uC774 \uAC00\uC838\uB2E4 \uB4DC\uB824\uC694")):ge==="game"&&W(w)});function W(){if(U(),!l)return r("\u{1F3AE} \uAC8C\uC784\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694");x="gaming",l(ue=>{x="making",S=performance.now()+(ue?800:1500),O(ue?"\uAC8C\uC784 \uC131\uACF5! \uBC14\uB85C \uB9CC\uB4E4\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F389}":"\uAD1C\uCC2E\uC544\uC694! \uADF8\uB798\uB3C4 \uB9DB\uC788\uAC8C \uB9CC\uB4E4\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F60A}",5e3),r(ue?"\u{1F389} \uC131\uACF5! \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694":"\uBA54\uB274\uB294 \uADF8\uB300\uB85C \uC900\uBE44\uD574 \uB4DC\uB824\uC694 \xB7 \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694")})}u.addEventListener("click",ue=>{B(),ue.currentTarget.blur()}),addEventListener("keydown",ue=>{ue.code==="Escape"&&!h.hidden&&U()});let V=new ws,F=new G(0,-1,0),H=new G;function $(ue,J){V.set(H.set(ue,1.4,J),F),V.far=1.4;for(let ge of V.intersectObject(e,!0))if(ge.point.y>.4&&ge.point.y<1.05)return ge.point.y;return null}function Q(ue,J){let ge=Math.sin(ue[2]),de=Math.cos(ue[2]),Ae=de,L=-ge,E=.42,Z=null;for(let xe of[.3,.36,.42,.5,.58]){let Te=$(ue[0]+ge*xe,ue[1]+de*xe);if(Te!==null){E=xe+.04,Z=Te;break}}Z===null&&(Z=.74);let fe=J.length,se=Math.min(3,fe);J.forEach((xe,Te)=>{let oe=Math.floor(Te/3),le=oe?fe-3:se,q=(Te%3-(le-1)/2)*.13,he=E+oe*.12,ne=Bo(xe.key,xe.opt);ne.g.position.set(ue[0]+ge*he+Ae*q,Z+.002,ue[1]+de*he+L*q),ne.g.rotation.y=ue[2]+Math.PI+(Math.random()-.5)*.4,ne.g.scale.setScalar(.001),ne.pop=.001,i.add(ne.g),T.push({food:ne,seat:ue})})}let k=v&&{x:v.x,z:v.z,face:v.face,y:v.c.root.position.y};v&&(v.y=k.y,v.speed=0);let z=.2,N=.15,K=1.25,X=t.floor.map(ue=>ue[0]),ee=t.floor.map(ue=>ue[1]),ve=Math.min(...X),be=Math.min(...ee),_e=Math.ceil((Math.max(...X)-ve)/N)+1,Ie=Math.ceil((Math.max(...ee)-be)/N)+1,re=new Map,me=ue=>ve+ue*N,Me=ue=>be+ue*N;function ye(ue,J){if(ue<0||J<0||ue>=_e||J>=Ie)return!1;let ge=J*_e+ue,de=re.get(ge);return de===void 0&&(de=o(me(ue),Me(J),z),re.set(ge,de)),de}function ce(ue,J,ge=8){let de=Math.round((ue-ve)/N),Ae=Math.round((J-be)/N);for(let L=0;L<=ge;L++){let E=null,Z=1e9;for(let fe=-L;fe<=L;fe++)for(let se=-L;se<=L;se++){if(Math.max(Math.abs(fe),Math.abs(se))!==L||!ye(de+fe,Ae+se))continue;let xe=Math.hypot(me(de+fe)-ue,Me(Ae+se)-J);xe<Z&&(Z=xe,E=[de+fe,Ae+se])}if(E)return E}return null}function ke(ue,J,ge,de){let Ae=Math.ceil(Math.hypot(ge-ue,de-J)/.06);for(let L=1;L<Ae;L++)if(!o(ue+(ge-ue)*L/Ae,J+(de-J)*L/Ae,z))return!1;return!0}function Ue(ue,J,ge,de){let Ae=ce(ue,J),L=ce(ge,de);if(!Ae||!L)return null;let E=(ne,Re)=>Re*_e+ne,Z=E(L[0],L[1]),fe=[[0,Ae[0],Ae[1]]],se=new Map([[E(Ae[0],Ae[1]),0]]),xe=new Map,Te=new Set,oe=!1,le=0;for(;fe.length&&le++<4e4;){let ne=0;for(let ze=1;ze<fe.length;ze++)fe[ze][0]<fe[ne][0]&&(ne=ze);let[,Re,we]=fe.splice(ne,1)[0],Ce=E(Re,we);if(!Te.has(Ce)){if(Te.add(Ce),Ce===Z){oe=!0;break}for(let[ze,rt]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let Ee=Re+ze,qe=we+rt;if(!ye(Ee,qe)||ze&&rt&&(!ye(Re+ze,we)||!ye(Re,we+rt)))continue;let it=E(Ee,qe),Fe=se.get(Ce)+Math.hypot(ze,rt);Fe<(se.has(it)?se.get(it):1e9)&&(se.set(it,Fe),xe.set(it,Ce),fe.push([Fe+Math.hypot(Ee-L[0],qe-L[1]),Ee,qe]))}}}if(!oe)return null;let Se=[];for(let ne=Z;ne!==void 0;ne=xe.get(ne))Se.push([me(ne%_e),Me(Math.floor(ne/_e))]);Se.reverse(),Se.push([ge,de]);let q=[Se[0]],he=0;for(;he<Se.length-1;){let ne=Se.length-1;for(;ne>he+1&&!ke(Se[he][0],Se[he][1],Se[ne][0],Se[ne][1]);)ne--;q.push(Se[ne]),he=ne}return q}let We=null,Ze=lt("#ffc2da",{roughness:.5});function Je(ue){let J=y;if(y=[],!v){Q(ue,J),x="idle";return}let ge=Math.sin(ue[2]),de=Math.cos(ue[2]),Ae=[ue[0]+ge*.5,ue[1]+de*.5],L=null;for(let[Z,fe]of[[de,-ge],[-de,ge],[ge,de]])for(let se of[.55,.7,.85]){let xe=Ae[0]+Z*se,Te=Ae[1]+fe*se;if(!o(xe,Te,z))continue;let oe=Ue(k.x,k.z,xe,Te);if(oe){(!L||oe.length<L.length)&&(L=oe);break}}if(x="delivering",!L){Q(ue,J),x="idle",r("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}");return}let E=new tt;E.position.set(0,.5,.24),nt(E,new kt(.36,.016,.26),Ze),J.slice(0,6).forEach((Z,fe)=>{let se=Bo(Z.key,Z.opt);se.g.scale.setScalar(ch*.62),se.g.position.set((fe%3-1)*.1,.008,J.length>3?(Math.floor(fe/3)-.5)*.09:0),E.add(se.g)}),v.c.root.add(E),We={stage:"go",path:[[k.x,k.z],...L],i:1,seat:ue,wait:0,tray:E,items:J,look:Ae},v.carry=!0,O("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694! \u{1F370}",2e4)}function Y(ue){let J=v,ge=We;if(ge.stage==="go"||ge.stage==="back"){let[de,Ae]=ge.path[ge.i],L=de-J.x,E=Ae-J.z,Z=Math.hypot(L,E),fe=Math.min(Z,K*ue);if(Z>1e-4){J.x+=L/Z*fe,J.z+=E/Z*fe;let xe=Math.atan2(L,E)-J.face;xe=Math.atan2(Math.sin(xe),Math.cos(xe)),J.face+=xe*Math.min(1,ue*10)}J.speed=K;let se=Math.hypot(J.x-k.x,J.z-k.z);J.y=k.y*Ai.clamp(1-(se-.15)/.35,0,1),Z<.02&&++ge.i>=ge.path.length&&(J.speed=0,ge.stage==="go"?(ge.stage="serve",ge.wait=.7):(J.x=k.x,J.z=k.z,J.face=k.face,J.y=k.y,We=null))}else if(ge.stage==="serve"){let de=Math.atan2(ge.look[0]-J.x,ge.look[1]-J.z)-J.face;if(de=Math.atan2(Math.sin(de),Math.cos(de)),J.face+=de*Math.min(1,ue*8),ge.wait-=ue,ge.wait<=0&&ge.tray)J.c.root.remove(ge.tray),ge.tray=null,J.carry=!1,Q(ge.seat,ge.items),x="idle",O("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274 \uB098\uC654\uC2B5\uB2C8\uB2E4! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}",4e3),r("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}"),ge.wait=1.2;else if(ge.wait<=0){let Ae=Ue(J.x,J.z,k.x,k.z);ge.stage="back",ge.path=Ae?[[J.x,J.z],...Ae.slice(0,-1),[k.x,k.z]]:[[J.x,J.z],[k.x,k.z]],ge.i=1,x="idle"}}}let bt=()=>T.filter(ue=>ue.seat===d);function et(){let ue=bt();if(!ue.length)return;let J=ue[0].food;J.stage++,_=.7;let ge=J.stage;for(let de of J.top)ge>=2?de.visible=!1:de.scale.multiplyScalar(.65);J.lv&&(J.lv.scale.y=Math.max(.02,1-ge/3));for(let de of J.body)de.scale.setScalar(Math.max(.05,1-ge*.3));ge>=3&&(J.dying=1,setTimeout(()=>{i.remove(J.g),T.splice(T.findIndex(de=>de.food===J),1),T.some(de=>de.seat===d)||r("\uB2E4 \uBA39\uC5C8\uC5B4\uC694! \uB9DB\uC788\uC5C8\uB2E4 \u{1F60B} \uB610 \uC8FC\uBB38\uD574 \uBCF4\uC138\uC694")},450))}return f.addEventListener("click",ue=>{et(),ue.currentTarget.blur()}),{get open(){return!h.hidden},onSit(ue){d=ue,x==="ready"&&y.length&&!We&&Je(ue)},get npcBusy(){return!!We},onStand(){d=null},update(ue,J,ge){ge!==d&&(d=ge),x==="making"&&performance.now()>=S&&(y=w.lines.flatMap(E=>Array.from({length:E.qty},()=>({key:E.key,opt:E.opt}))),x="ready",d&&!We?Je(d):(O(`\uC8FC\uBB38\uBC88\uD638 ${m}\uBC88 \uBA54\uB274 \uB098\uC654\uC5B4\uC694! \uC790\uB9AC\uC5D0 \uC549\uC73C\uC2DC\uBA74 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F370}`,7e3),r("\u{1F514} \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uCE74\uD398 \uC758\uC790\uB97C \uB20C\uB7EC \uC549\uC73C\uBA74 \uC9C1\uC6D0\uC774 \uAC00\uC838\uB2E4 \uB4DC\uB824\uC694"))),We&&Y(ue);let de=v&&!ge&&!We&&Math.hypot(J.x-k.x,J.z-k.z)<2.6;u.hidden=!de||!h.hidden;let Ae=!!ge&&bt().length>0;f.hidden=!Ae;let L=x==="making"?"\u{1F9D1}\u200D\u{1F373} \uBA54\uB274 \uB9CC\uB4DC\uB294 \uC911\u2026 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694":x==="ready"?`\u{1F514} \uBA54\uB274 ${y.length}\uAC1C \uC900\uBE44\uB410\uC5B4\uC694 \xB7 \uCE74\uD398 \uC758\uC790\uC5D0 \uC549\uC544 \uBCF4\uC138\uC694`:x==="delivering"?"\u{1F370} \uC9C1\uC6D0\uC774 \uBA54\uB274\uB97C \uAC00\uC838\uB2E4 \uB4DC\uB9AC\uB294 \uC911\u2026":"";p.textContent!==L&&(p.textContent=L),p.hidden=!L||!h.hidden;for(let{food:E}of T){if(E.pop<1){E.pop=Math.min(1,E.pop+ue*3);let Z=1-Math.pow(1-E.pop,3);E.g.scale.setScalar(ch*(.2+.8*Z+Math.sin(E.pop*Math.PI)*.12))}E.dying&&(E.dying=Math.max(0,E.dying-ue*2.5),E.g.scale.setScalar(ch*E.dying))}if(_>0&&n.arms){_=Math.max(0,_-ue);let E=Math.sin((1-_/.7)*Math.PI);n.arms[0].rotation.x=-.5-1.7*E,n.head.rotation.x=.12*E}}}}var or='stroke="#4a3f66" stroke-linejoin="round" stroke-linecap="round"',vt=or+' stroke-width="2.6"',h0=(i,e,t,n=2.6)=>`<circle cx="${i}" cy="${t}" r="${n}" fill="#3b2f4a"/><circle cx="${e}" cy="${t}" r="${n}" fill="#3b2f4a"/><circle cx="${i+.9}" cy="${t-.9}" r="0.9" fill="#fff"/><circle cx="${e+.9}" cy="${t-.9}" r="0.9" fill="#fff"/>`,id=(i,e,t)=>`<ellipse cx="${i}" cy="${t}" rx="4" ry="2.4" fill="#ff9fbf" opacity=".8"/><ellipse cx="${e}" cy="${t}" rx="4" ry="2.4" fill="#ff9fbf" opacity=".8"/>`,uh=(i,e)=>`<path d="M${i} ${e} q3 -10 9 -12" fill="none" ${or} stroke-width="1.8"/><circle cx="${i}" cy="${e+2}" r="5.5" fill="#e8243c" ${vt}/><circle cx="${i-1.8}" cy="${e}" r="1.5" fill="#fff" opacity=".8"/>`,ed=(i,e,t)=>`
  <path d="M43 76 h14 l2 12 h-18z" fill="#eef8fc" ${vt}/><ellipse cx="50" cy="89" rx="15" ry="4" fill="#eef8fc" ${vt}/>
  <path d="M27 36 h46 l-7 36 q-16 8 -32 0z" fill="${i}" ${vt}/>
  <path d="M33 42 l-3 22" stroke="#fff" stroke-width="3" opacity=".55" stroke-linecap="round"/>
  ${e?`<circle cx="50" cy="30" r="14" fill="${e}" ${vt}/><path d="M38 34 q12 6 24 0" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/>`:""}
  ${t?`<path d="M30 37 q-3 -10 8 -12 q2 -10 12 -9 q10 -1 12 9 q11 2 8 12z" fill="${t}" ${vt}/><path d="M36 31 q14 -6 28 0" fill="none" stroke="#6b3b25" stroke-width="2.4" stroke-linecap="round"/>`:""}`,ko=(i,e,t=1,n="")=>`<g transform="translate(${i} ${e}) scale(${t})">
  <ellipse cx="-17" cy="2" rx="8" ry="13" fill="#fff" ${vt} transform="rotate(18 -17 2)"/><ellipse cx="17" cy="2" rx="8" ry="13" fill="#fff" ${vt} transform="rotate(-18 17 2)"/>
  <path d="M-16 -6 q-4 -14 8 -16 q8 -8 16 0 q12 2 8 16 q6 10 -2 20 q-14 10 -28 0 q-8 -10 -2 -20z" fill="#fff" ${vt}/>
  ${h0(-6,6,0,2.8)}<ellipse cx="0" cy="7" rx="3" ry="2.2" fill="#3b2f4a"/><path d="M-3 10 q3 3 6 0" fill="none" ${or} stroke-width="1.6"/>
  ${id(-11,11,8)}${n}</g>`,td=({hair:i,hairDark:e,bun:t,glasses:n,clip:s,collar:r})=>`
  ${t?`<circle cx="50" cy="20" r="11" fill="${i}" ${vt}/>`:""}
  <path d="M22 54 q-4 -34 28 -36 q32 2 28 36 q-2 10 -8 12 l-40 0 q-6 -2 -8 -12z" fill="${i}" ${vt}/>
  <ellipse cx="50" cy="54" rx="22" ry="21" fill="#ffe6d6" ${vt}/>
  <path d="M28 46 q8 -14 22 -12 q-2 8 -10 10 q10 -2 14 -10 q8 10 18 12 q-4 -18 -22 -18 q-18 0 -22 18z" fill="${i}"/>
  <path d="M27 58 q-3 10 1 20 M73 58 q3 10 -1 20" fill="none" stroke="${e}" stroke-width="7" stroke-linecap="round"/>
  ${h0(41,59,55,3)}${id(35,65,63)}<path d="M46 65 q4 4 8 0" fill="none" ${or} stroke-width="1.8"/>
  ${n?'<circle cx="41" cy="55" r="7" fill="none" stroke="#4a3326" stroke-width="2.4"/><circle cx="59" cy="55" r="7" fill="none" stroke="#4a3326" stroke-width="2.4"/><path d="M48 54 h4" stroke="#4a3326" stroke-width="2.4"/>':""}
  ${s?`<circle cx="32" cy="36" r="5" fill="#e8243c" ${or} stroke-width="1.8"/><path d="M30 31 l2 -3 l2 3" fill="#6cc05a"/>`:""}
  ${r?`<path d="M34 78 q16 8 32 0 l6 10 q-22 10 -44 0z" fill="${r}" ${vt}/>`:""}`,lr={menu:{name:"\uC218\uC787\uD574\uD53C \uBA54\uB274 \uC2A4\uD2F0\uCEE4",color:"#d6efbf",stickers:[ed("#2f93ee","#fff0c8")+uh(57,14),ed("#6fd34a","#d6f2c4")+uh(57,14),`<ellipse cx="50" cy="80" rx="34" ry="9" fill="#fff" ${vt}/><path d="M32 78 l6 -34 h24 l6 34z" fill="#f7c75a" ${vt}/><path d="M38 44 h24 l-1 7 q-11 4 -22 0z" fill="#8c4a12" ${vt}/>
       <path d="M40 44 q-3 -9 6 -10 q4 -8 8 0 q9 1 6 10z" fill="#fffaf3" ${vt}/>${uh(50,24)}<path d="M37 70 q13 4 26 0" stroke="#fff" stroke-width="2.4" opacity=".5" fill="none"/>`,`<path d="M18 86 L84 20" stroke="#d9b07a" stroke-width="4" stroke-linecap="round"/>
       ${[0,1,2,3].map(i=>`<rect x="${24+i*13}" y="${56-i*13}" width="15" height="12" rx="4" fill="#e0622a" ${vt} transform="rotate(-45 ${31+i*13} ${62-i*13})"/>`).join("")}
       <path d="M30 60 l40 -40" stroke="#fff" stroke-width="2" opacity=".45" stroke-linecap="round"/>`,`<path d="M22 64 h56 l-6 18 h-44z" fill="#8fd16b" ${vt}/><path d="M28 64 l4 18 M40 64 l1 18 M52 64 l-1 18 M64 64 l-3 18" stroke="#6aa94a" stroke-width="1.6"/>`+ko(50,44,1.05),ed("#7b4a33",null,"#fffaf3")+uh(54,10)]},staff:{name:"\uC18C\uD488\uC0F5 \uC9C1\uC6D0 \uC2A4\uD2F0\uCEE4",color:"#ffe1ee",stickers:[td({hair:"#7a5640",hairDark:"#64432f",bun:!0,collar:"#c4e76a"}),td({hair:"#3d3346",hairDark:"#2c2433",glasses:!0,collar:"#fff0a3"}),td({hair:"#f7a9c8",hairDark:"#ec8db5",clip:!0,collar:"#aee3cf"}),`<path d="M10 24 q0 -12 14 -12 h52 q14 0 14 12 v30 q0 12 -14 12 h-36 l-14 14 l2 -14 q-18 0 -18 -12z" fill="#fff" ${vt}/>
       <text x="50" y="47" text-anchor="middle" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-weight="900" font-size="12.5" fill="#e0457b">\uC5B4\uC11C\uC624\uC138\uC694!</text>`,`<path d="M50 86 C10 58 12 22 34 20 C44 19 50 28 50 32 C50 28 56 19 66 20 C88 22 90 58 50 86z" fill="#f6a9c9" ${vt}/>
       <text x="50" y="54" text-anchor="middle" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-weight="900" font-size="13" fill="#c2477e">\uC218\uC787\uD574\uD53C</text>`,`<path d="M50 50 l-30 -18 q-8 -2 -8 8 v20 q0 10 8 8z M50 50 l30 -18 q8 -2 8 8 v20 q0 10 -8 8z" fill="#ff9cc0" ${vt}/>
       <path d="M44 52 l-10 30 l8 -4 l4 8 l6 -32z M56 52 l10 30 l-8 -4 l-4 8 l-6 -32z" fill="#ff86b2" ${vt}/><circle cx="50" cy="50" r="8" fill="#ffb8d2" ${vt}/>`]},dog:{name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC2A4\uD2F0\uCEE4",color:"#e3f3ff",stickers:[ko(50,52,1.5,'<path d="M-3 12 q3 5 6 0z" fill="#ff8fb0" stroke="#4a3f66" stroke-width="1.4"/>'),`<ellipse cx="52" cy="72" rx="24" ry="16" fill="#fff" ${vt}/><ellipse cx="38" cy="84" rx="7" ry="5" fill="#fff" ${vt}/><ellipse cx="62" cy="84" rx="7" ry="5" fill="#fff" ${vt}/>
       <path d="M74 66 q12 -6 8 -16" fill="none" ${or} stroke-width="5"/><path d="M74 66 q12 -6 8 -16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`+ko(48,40,1.05),`<ellipse cx="50" cy="66" rx="34" ry="18" fill="#fff" ${vt}/><path d="M24 62 q-4 -16 12 -18 q10 -10 20 0" fill="#fff" ${vt}/>
       <path d="M30 60 q4 3 8 0 M44 60 q4 3 8 0" fill="none" ${or} stroke-width="2"/><ellipse cx="41" cy="67" rx="2.6" ry="2" fill="#3b2f4a"/>${id(28,54,68)}
       <text x="66" y="38" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="15" fill="#9a8cc4">z</text><text x="76" y="26" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="11" fill="#9a8cc4">z</text>`,ko(50,54,1.4)+`<path d="M50 24 l-14 -8 q-4 0 -4 4 v8 q0 4 4 4z M50 24 l14 -8 q4 0 4 4 v8 q0 4 -4 4z" fill="#ff8fb7" ${vt}/><circle cx="50" cy="24" r="4.5" fill="#ffb3cf" ${vt}/>`,`<ellipse cx="50" cy="62" rx="18" ry="15" fill="#f7a9c8" ${vt}/>${[[28,40],[42,30],[58,30],[72,40]].map(([i,e])=>`<ellipse cx="${i}" cy="${e}" rx="7" ry="8.5" fill="#f7a9c8" ${vt}/>`).join("")}`,`<path d="M14 20 q0 -10 12 -10 h48 q12 0 12 10 v26 q0 10 -12 10 h-30 l-14 12 l2 -12 h-6 q-12 0 -12 -10z" fill="#fffbe0" ${vt}/>
       <text x="50" y="42" text-anchor="middle" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="18" fill="#4a3f66">\uBA4D!</text>`+ko(70,76,.8)]}},nd=new Map;function gi(i,e){let t=i+e;if(!nd.has(t)){let n=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 112 112" width="224" height="224">
      <defs><filter id="b" x="-20%" y="-20%" width="140%" height="140%"><feMorphology in="SourceAlpha" operator="dilate" radius="4.5" result="d"/>
      <feFlood flood-color="#ffffff"/><feComposite in2="d" operator="in" result="w"/>
      <feGaussianBlur in="d" stdDeviation="1.6" result="s"/><feOffset in="s" dy="1.4" result="so"/><feFlood flood-color="#6a53a0" flood-opacity=".28"/><feComposite in2="so" operator="in" result="sh"/>
      <feMerge><feMergeNode in="sh"/><feMergeNode in="w"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g filter="url(#b)">${lr[i].stickers[e]}</g></svg>`;nd.set(t,"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n))}return nd.get(t)}var an={stkMenu:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uC218\uC787\uD574\uD53C \uBA54\uB274 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"menu",desc:"\uD06C\uB9BC\uC18C\uB2E4\xB7\uBA54\uB860\uC18C\uB2E4\xB7\uD478\uB529\xB7\uB5A1\uAF2C\uCE58\u2026",color:"#d6efbf"},stkStaff:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uC18C\uD488\uC0F5 \uC9C1\uC6D0 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"staff",desc:"\uCE74\uD398 \uC5B8\uB2C8\xB7\uC18C\uD488\uC0F5 \uC5B8\uB2C8\xB7\uC190\uB2D8",color:"#ffd3e4"},stkDog:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"dog",desc:"\uBABD\uAE00\uBABD\uAE00 \uD558\uC580 \uAC15\uC544\uC9C0",color:"#dcefff"},diary:{cat:"\uBB38\uAD6C",name:"\uB2E4\uC774\uC5B4\uB9AC \uC218\uCCA9",price:5e3,emoji:"\u{1F4D2}",desc:"\uCE74\uD398 \uC790\uB9AC\uC5D0\uC11C \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694",color:"#f7c9dc"},penBear:{cat:"\uBB38\uAD6C",name:"\uACF0\uB3CC\uC774 \uBCFC\uD39C",price:2500,emoji:"\u{1F43B}",desc:"\uCD08\uCF54 \uBE0C\uB77C\uC6B4 \uC789\uD06C",ink:"#7a4a33",color:"#c99c6e"},penBerry:{cat:"\uBB38\uAD6C",name:"\uB538\uAE30 \uBCFC\uD39C",price:2500,emoji:"\u{1F353}",desc:"\uB538\uAE30 \uD551\uD06C \uC789\uD06C",ink:"#e0457b",color:"#f48fb9"},penMint:{cat:"\uBB38\uAD6C",name:"\uBBFC\uD2B8 \uC824\uD39C",price:2500,emoji:"\u{1F33F}",desc:"\uBBFC\uD2B8 \uC789\uD06C",ink:"#2f9d8f",color:"#9fe0cf"},tapeHeart:{cat:"\uBB38\uAD6C",name:"\uD558\uD2B8 \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504",price:2e3,emoji:"\u{1F497}",desc:"\uB2E4\uAFB8\uC5D0 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694",tape:"heart",color:"#ffc2da"},tapeCheck:{cat:"\uBB38\uAD6C",name:"\uAE45\uC5C4 \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504",price:2e3,emoji:"\u{1F49A}",desc:"\uB2E4\uAFB8\uC5D0 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694",tape:"check",color:"#bfe6a8"},memo:{cat:"\uBB38\uAD6C",name:"\uB9D0\uB791 \uBA54\uBAA8\uC9C0",price:2e3,emoji:"\u{1F5D2}\uFE0F",color:"#fff3b0"},letter:{cat:"\uBB38\uAD6C",name:"\uD3B8\uC9C0\uC9C0 \uC138\uD2B8",price:3500,emoji:"\u{1F48C}",color:"#ffe1ee"},postcard:{cat:"\uBB38\uAD6C",name:"\uC218\uC787\uD574\uD53C \uC5FD\uC11C",price:1500,emoji:"\u{1F5BC}\uFE0F",color:"#cdbcf0"},plushDog:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC778\uD615",price:15e3,emoji:"\u{1F436}",color:"#ffffff"},keyBear:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uACF0\uB3CC\uC774 \uC778\uD615 \uD0A4\uB9C1",price:6e3,emoji:"\u{1F9F8}",color:"#e6bf93"},keyBunny:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uD1A0\uB07C \uC778\uD615 \uD0A4\uB9C1",price:6e3,emoji:"\u{1F430}",color:"#f8b9d3"},hairpin:{cat:"\uC7A1\uD654",name:"\uB538\uAE30 \uBA38\uB9AC\uD540",price:3e3,emoji:"\u{1F380}",color:"#ff8fb0"}},u0=["\uC2A4\uD2F0\uCEE4","\uBB38\uAD6C","\uC778\uD615\xB7\uD0A4\uB9C1","\uC7A1\uD654"],fh=i=>i.toLocaleString("ko-KR")+"\uC6D0",sd=i=>{let e=an[i];return e.sheet?`<img src="${gi(e.sheet,0)}" alt="">`:e.emoji},Bn={items:{},stickers:{}};try{Object.assign(Bn,JSON.parse(localStorage.getItem("sh-inv"))||{})}catch{}function dh(){try{localStorage.setItem("sh-inv",JSON.stringify(Bn))}catch{}}var ph=i=>(Bn.items[i]||0)>0;function AS(){let i=document.createElement("canvas");i.width=512,i.height=128;let e=i.getContext("2d");e.fillStyle="#f4a7bf",e.fillRect(0,0,512,128),e.globalCompositeOperation="destination-out";let t=(s,r,a)=>{e.beginPath(),e.moveTo(s,r+a*.9),e.bezierCurveTo(s-a*1.3,r,s-a*.7,r-a*.9,s,r-a*.3),e.bezierCurveTo(s+a*.7,r-a*.9,s+a*1.3,r,s,r+a*.9),e.fill()};for(let s=0;s<2;s++)for(let r=0;r<16;r++)t(16+r*32+(s?16:0),44+s*42,11);let n=new ei(i);return n.colorSpace=Rt,n.wrapS=Sn,n.anisotropy=4,n}function RS(){let i=new tt,e=new $t({color:"#f4a7bf",roughness:.55}),t=new $t({map:AS(),alphaTest:.5,side:Bt,roughness:.55}),n=new tt;n.scale.set(1.3,1,.85),i.add(n);let s=.1,r=new je(new ot(.11,.08,s,28,1,!0),t);r.position.y=s/2,n.add(r);let a=new je(new qa(.08,24),e);a.rotation.x=-Math.PI/2,a.position.y=.002,n.add(a);let o=new je(new ji(.11,.008,6,32),e);o.rotation.x=Math.PI/2,o.position.y=s,n.add(o);for(let c of[-1,1]){let h=new je(new ji(.075,.009,6,18,Math.PI),e);h.position.set(0,s,.07*c),h.rotation.x=.25*c,i.add(h)}let l=new tt;return l.position.y=.01,i.add(l),i.traverse(c=>{c.isMesh&&(c.castShadow=!1)}),{g:i,goods:l}}function f0({scene3d:i,hero:e,npcs:t,showToast:n,inShop:s}){let r=C=>document.getElementById(C),a=r("shop"),o=r("shop-btn"),l=r("basket-btn"),c=r("stop-btn"),h=t.find(C=>C.id==="shop"),u=RS();u.g.position.set(.21,.29,.24),u.g.rotation.y=Math.PI/2;let f=!1,p="browse",v=0,M=0,g={},x=()=>Object.values(g).reduce((C,P)=>C+P,0),m=()=>Object.entries(g).reduce((C,[P,O])=>C+an[P].price*O,0),S=()=>h&&Math.hypot(e.root.position.x-h.x,e.root.position.z-h.z)<2.8;function y(){u.goods.clear();let C=0;for(let[P,O]of Object.entries(g))for(let b=0;b<O&&C<10;b++,C++){let D=an[P],B=new je(D.sheet?new kt(.06,.004,.08):new kt(.045,.035,.04),new $t({color:D.color,roughness:.6}));B.position.set((C%3-1)*.06,.02+Math.floor(C/3)*.025,(C%2-.5)*.04),B.rotation.set(.2*(C%2-.5),C*.7,.15*(C%3-1)),u.goods.add(B)}}function w(){f=!0,e.root.add(u.g),y(),n("\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8\uB97C \uB4E4\uC5C8\uC5B4\uC694! \uC0C1\uD488\uC744 \uB2F4\uC544 \uBCF4\uC138\uC694"),_("browse")}function T(){f=!1,e.root.remove(u.g);for(let C of Object.keys(g))delete g[C];I(),n("\uC1FC\uD551\uC744 \uADF8\uB9CC\uB480\uC5B4\uC694. \uBC14\uAD6C\uB2C8\uB294 \uC81C\uC790\uB9AC\uC5D0 \uB450\uC5C8\uC5B4\uC694")}function d(){let C=x(),P=`<div class="cats">${[["browse","\u{1F6CD}\uFE0F \uC0C1\uD488"],["cart",`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 ${C}`],["mine","\u{1F392} \uB0B4 \uBB3C\uAC74"]].map(([b,D])=>`<button class="${p===b?"on":""}" data-tab="${b}">${D}</button>`).join("")}</div>`,O="";if(p==="browse")O=`<div class="cats sub">${u0.map((b,D)=>`<button class="${D===v?"on":""}" data-cat="${D}">${b}</button>`).join("")}</div>
      <div class="items">${Object.entries(an).filter(([,b])=>b.cat===u0[v]).map(([b,D])=>`
        <div class="item"><span class="emo">${sd(b)}</span>
          <div class="info"><b>${D.name}</b>${D.desc?`<small>${D.desc}</small>`:""}
            ${D.sheet?`<div class="mini">${lr[D.sheet].stickers.map((B,U)=>`<img src="${gi(D.sheet,U)}" alt="">`).join("")}</div>`:""}</div>
          <div class="buy"><span class="price">${fh(D.price)}</span><button class="add" data-add="${b}">${g[b]?`\uB2F4\uC74C ${g[b]}`:"\uB2F4\uAE30"}</button></div>
        </div>`).join("")}</div>
      <div class="cart"><button class="go" data-tab="cart" ${C?"":"disabled"}>${C?`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 \uBCF4\uAE30 \xB7 ${C}\uAC1C \xB7 ${fh(m())}`:"\uB9C8\uC74C\uC5D0 \uB4DC\uB294 \uC0C1\uD488\uC744 \uB2F4\uC544 \uBCF4\uC138\uC694"}</button></div>`;else if(p==="cart"){let b=S();O=`<div class="items">${C?Object.entries(g).map(([D,B])=>`
        <div class="item"><span class="emo">${sd(D)}</span><div class="info"><b>${an[D].name}</b><small>${fh(an[D].price)}</small></div>
          <span class="step"><button data-dec="${D}" aria-label="\uBE7C\uAE30">\u2212</button><b>${B}</b><button data-inc="${D}" aria-label="\uB354\uD558\uAE30">+</button></span></div>`).join(""):'<p class="empty">\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4 \uC788\uC5B4\uC694</p>'}</div>
      <div class="cart">
        <button class="go" data-act="pay" ${C&&b?"":"disabled"}>${C?b?`\u{1F4B3} ${fh(m())} \uACC4\uC0B0\uD558\uAE30`:"\u{1F380} \uACC4\uC0B0\uB300 \uC9C1\uC6D0\uC5D0\uAC8C \uAC00\uBA74 \uACC4\uC0B0\uD560 \uC218 \uC788\uC5B4\uC694":"\uB2F4\uC740 \uC0C1\uD488\uC774 \uC5C6\uC5B4\uC694"}</button>
        <p class="fine">\uAC00\uC0C1 \uC1FC\uD551\uC774\uC5D0\uC694 \xB7 \uC2E4\uC81C \uACB0\uC81C\uB294 \uB418\uC9C0 \uC54A\uC544\uC694</p></div>`}else{let b=Object.entries(Bn.items).filter(([,D])=>D>0);O=`<div class="items">${b.length?b.map(([D,B])=>`
        <div class="item"><span class="emo">${sd(D)}</span><div class="info"><b>${an[D].name}</b><small>${B}\uAC1C \uAC00\uC9C0\uACE0 \uC788\uC5B4\uC694</small></div></div>`).join(""):'<p class="empty">\uC544\uC9C1 \uC0B0 \uBB3C\uAC74\uC774 \uC5C6\uC5B4\uC694</p>'}
        <p class="fine">\u{1F4D2} \uB2E4\uC774\uC5B4\uB9AC + \uC2A4\uD2F0\uCEE4 + \uBCFC\uD39C\uC774 \uC788\uC73C\uBA74 \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694</p></div>`}a.innerHTML=`<div class="mhead"><div><b>\uC218\uC9D1\uC218\uC9D1 \uC18C\uD488\uC0F5</b><span>${f?"\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uACE0 \uACC4\uC0B0\uB300\uC5D0\uC11C \uACC4\uC0B0\uD574\uC694":"\uB0B4\uAC00 \uC0B0 \uBB3C\uAC74"}</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>${P}${O}`}function _(C){p=C||p,d(),a.hidden=!1,a.offsetWidth,a.classList.add("on")}function I(){a.classList.remove("on"),setTimeout(()=>{a.classList.contains("on")||(a.hidden=!0)},250)}a.addEventListener("click",C=>{let P=C.target.closest("button");if(!P)return;let O=P.dataset;if(O.act==="close")return I();if(O.tab)return!f&&O.tab!=="mine"?void 0:(p=O.tab,d());if(O.cat)return v=+O.cat,d();if(O.add)return x()>=20?n("\uBC14\uAD6C\uB2C8\uAC00 \uAC00\uB4DD \uCC3C\uC5B4\uC694"):(g[O.add]=(g[O.add]||0)+1,y(),n(`\u{1F9FA} ${an[O.add].name} \uB2F4\uC558\uC5B4\uC694`),d());if(O.inc)return g[O.inc]++,y(),d();if(O.dec)return--g[O.dec]<=0&&delete g[O.dec],y(),d();if(O.act==="pay"){for(let[b,D]of Object.entries(g)){Bn.items[b]=(Bn.items[b]||0)+D;let B=an[b].sheet;B&&lr[B].stickers.forEach((U,W)=>{Bn.stickers[B+":"+W]=(Bn.stickers[B+":"+W]||0)+D}),delete g[b]}dh(),y(),h&&(h.el.textContent="\uAC10\uC0AC\uD569\uB2C8\uB2E4! \uB610 \uB180\uB7EC \uC624\uC138\uC694 \u{1F380}",setTimeout(()=>h.el.textContent="\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}",5e3)),n("\u{1F4B3} \uACC4\uC0B0 \uC644\uB8CC! \uC0B0 \uBB3C\uAC74\uC740 \u{1F392} \uB0B4 \uBB3C\uAC74\uC5D0 \uC788\uC5B4\uC694"),p="mine",d()}}),o.addEventListener("click",C=>{w(),C.currentTarget.blur()}),l.addEventListener("click",C=>{_(x()?"cart":"browse"),C.currentTarget.blur()}),c.addEventListener("click",C=>{if(C.currentTarget.blur(),x()&&performance.now()-M>3e3)return M=performance.now(),c.textContent="\uD55C \uBC88 \uB354 \uB204\uB974\uBA74 \uB0B4\uB824\uB193\uC544\uC694",n("\uB2F4\uC740 \uC0C1\uD488\uC740 \uACC4\uC0B0\uD558\uC9C0 \uC54A\uC73C\uBA74 \uB0B4\uB824\uB193\uC544\uC694");T()}),addEventListener("keydown",C=>{C.code==="Escape"&&!a.hidden&&I()});let A=null;return{get open(){return!a.hidden},get shopping(){return f},openMine(){_("mine")},update(C,P){let O=s(C);if(o.hidden=f||!!P||!O,l.hidden=!f,c.hidden=!f,f){let D=`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 ${x()}`;l.textContent!==D&&(l.textContent=D),performance.now()-M>3e3&&c.textContent!=="\uC1FC\uD551 \uADF8\uB9CC\uB450\uAE30"&&(c.textContent="\uC1FC\uD551 \uADF8\uB9CC\uB450\uAE30")}u.g.visible=!P,f&&!P&&(e.arms[1].rotation.x=-.95,e.arms[1].rotation.z=.12);let b=S();b!==A&&(A=b,!a.hidden&&p==="cart"&&d())}}}async function ra(i,e){let t=await new Promise(a=>i.toBlob(a,"image/jpeg",.92)),n=new File([t],e,{type:"image/jpeg"});if(matchMedia("(pointer:coarse)").matches&&navigator.canShare&&navigator.canShare({files:[n]}))try{return await navigator.share({files:[n],title:"\uC218\uC787\uD574\uD53C"}),"shared"}catch(a){if(a.name==="AbortError")return"cancel"}let r=document.createElement("a");return r.href=URL.createObjectURL(t),r.download=e,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(r.href),r.remove()},4e3),"downloaded"}var aa=()=>{let i=new Date;return`${i.getFullYear()}.${String(i.getMonth()+1).padStart(2,"0")}.${String(i.getDate()).padStart(2,"0")}`};var rd='"Gamja Flower", "Poor Story", cursive',gh=6,CS={heart:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="500" height="100"><defs><pattern id="p" width="25" height="25" patternUnits="userSpaceOnUse">
    <path d="M12.5 19 C3 12 5 5 9 5 C11 5 12.5 7 12.5 8 C12.5 7 14 5 16 5 C20 5 22 12 12.5 19z" fill="#ff8fb7"/></pattern></defs>
    <path d="M4 0 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 V50 H246 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 V0z" fill="#ffd9e7" opacity=".88"/>
    <rect x="4" y="0" width="242" height="50" fill="url(#p)" opacity=".85"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="500" height="100"><defs><pattern id="p" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#eaf7df"/><rect width="8" height="16" fill="#a9db8a" opacity=".55"/><rect width="16" height="8" fill="#a9db8a" opacity=".55"/></pattern></defs>
    <path d="M4 0 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 V50 H246 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 V0z" fill="url(#p)" opacity=".9"/></svg>`},ad=i=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(CS[i]),cr={page:0,pages:Array.from({length:gh},()=>[])};try{let i=JSON.parse(localStorage.getItem("sh-diary"));i&&i.pages&&(cr=i)}catch{}var mh=()=>{try{return localStorage.setItem("sh-diary",JSON.stringify(cr)),!0}catch{return!1}};function d0({showToast:i}){let t=(F=>document.getElementById(F))("diary");t.innerHTML=`
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
    </div></div>`;let n=t.querySelector(".dpage"),s=t.querySelector(".dsel"),r=t.querySelector(".dinput"),a=r.querySelector("input"),o=t.querySelector(".dtabs"),l=t.querySelector(".dlist"),c=t.querySelector(".dfile"),h=t.querySelector(".dcrop"),u=h.querySelector(".dview"),f=u.querySelector("img"),p=h.querySelector(".dzoom"),v="stk",M=null,g=null,x=null,m=()=>cr.pages[cr.page];function S(){t.querySelector(".pg").textContent=`${cr.page+1} / ${gh}`;let F=n.clientWidth;n.innerHTML=m().map((H,$)=>{let Q=`left:${H.x*100}%;top:${H.y*100}%;transform:translate(-50%,-50%) rotate(${H.r}deg)`;if(H.t==="x")return`<div class="de dt ${g===$?"on":""}" data-i="${$}" style="${Q};color:${H.color};font-size:${H.s*F}px;max-width:${.84*F}px">${H.text.replace(/[<&]/g,z=>z==="<"?"&lt;":"&amp;")}</div>`;let k=H.t==="i"?H.src:H.t==="s"?gi(...H.k.split(":").map((z,N)=>N?+z:z)):ad(H.k);return`<img class="de${H.t==="i"?" dph":""} ${g===$?"on":""}" data-i="${$}" src="${k}" style="${Q};width:${H.s*F}px" draggable="false" alt="">`}).join(""),s.hidden=g===null}function y(){let F=Object.keys(an).filter($=>an[$].ink&&ph($)),H=Object.keys(an).filter($=>an[$].tape&&ph($));if(!M&&F.length&&(M=F[0]),o.innerHTML=[["stk","\u{1F31F} \uC2A4\uD2F0\uCEE4"],["photo","\u{1F4F7} \uC0AC\uC9C4"],["pen","\u270F\uFE0F \uBCFC\uD39C"],["tape","\u{1F380} \uD14C\uC774\uD504"]].map(([$,Q])=>`<button class="${v===$?"on":""}" data-tab="${$}">${Q}</button>`).join(""),v==="stk"){let $=Object.entries(Bn.stickers).filter(([,Q])=>Q>0);l.innerHTML=$.length?$.map(([Q,k])=>{let[z,N]=Q.split(":");return`<button class="dst" data-stk="${Q}"><img src="${gi(z,+N)}" alt=""><i>${k}</i></button>`}).join(""):"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uC2A4\uD2F0\uCEE4\uB97C \uC0AC \uC624\uBA74 \uC5EC\uAE30\uC11C \uB5BC\uC5B4 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694 \u{1F31F}</p>"}else v==="photo"?l.innerHTML='<button class="dpen" data-pick="1">\u{1F5BC}\uFE0F \uB0B4 \uAC24\uB7EC\uB9AC\uC5D0\uC11C \uC0AC\uC9C4 \uACE0\uB974\uAE30</button><p class="tip">\uACE0\uB978 \uC0AC\uC9C4\uC740 \uC798\uB77C\uC11C \uD06C\uAE30\uB97C \uB9DE\uCD98 \uB4A4 \uBD99\uC5EC\uC694</p>':v==="pen"?l.innerHTML=F.length?F.map($=>`<button class="dpen ${M===$?"on":""}" data-pen="${$}"><span style="background:${an[$].ink}"></span>${an[$].name}</button>`).join("")+'<p class="tip">\uB2E4\uC774\uC5B4\uB9AC \uBE48 \uACF3\uC744 \uD1A1 \uB204\uB974\uBA74 \uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694</p>':"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uBCFC\uD39C\uC744 \uC0AC \uC624\uBA74 \uC190\uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694 \u270F\uFE0F</p>":l.innerHTML=H.length?H.map($=>`<button class="dtape" data-tape="${an[$].tape}"><img src="${ad(an[$].tape)}" alt=""></button>`).join(""):"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504\uB97C \uC0AC \uC624\uBA74 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694 \u{1F380}</p>"}let w=F=>{m().push(F),g=m().length-1,mh()||(m().pop(),g=null,i("\uB2E4\uC774\uC5B4\uB9AC \uC800\uC7A5 \uACF5\uAC04\uC774 \uAF49 \uCC3C\uC5B4\uC694. \uC0AC\uC9C4\uC744 \uBA87 \uC7A5 \uB5BC\uACE0 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694")),S()},T=null,d="1",_={s:1,x:0,y:0,base:1},I=()=>{let F=Math.min(300,innerWidth-80),H=d==="circle"?1:+d;return[F,F/H]};function A(){let[F,H]=I();u.style.width=F+"px",u.style.height=H+"px",u.classList.toggle("circle",d==="circle"),_.base=Math.max(F/T.width,H/T.height),C(),P()}function C(){let[F,H]=I(),$=_.base*_.s,Q=T.width*$,k=T.height*$;_.x=Math.min(0,Math.max(F-Q,_.x)),_.y=Math.min(0,Math.max(H-k,_.y))}function P(){let F=_.base*_.s;f.style.width=T.width*F+"px",f.style.transform=`translate(${_.x}px,${_.y}px)`}c.addEventListener("change",async()=>{let F=c.files&&c.files[0];if(F)try{let H=URL.createObjectURL(F),$=new Image;$.src=H,await $.decode(),T=$,f.src=H,d="1",_={s:1,x:0,y:0,base:1},p.value=1,h.querySelectorAll("[data-shape]").forEach(N=>N.classList.toggle("on",N.dataset.shape===d)),h.hidden=!1,A();let[Q,k]=I(),z=_.base;_.x=(Q-T.width*z)/2,_.y=(k-T.height*z)/2,C(),P()}catch{i("\uC774 \uC0AC\uC9C4\uC740 \uC5F4 \uC218 \uC5C6\uC5B4\uC694. \uB2E4\uB978 \uC0AC\uC9C4\uC744 \uACE8\uB77C \uC8FC\uC138\uC694")}}),p.addEventListener("input",()=>{let[F,H]=I(),$=_.base*_.s;_.s=+p.value;let Q=_.base*_.s;_.x=F/2-(F/2-_.x)*Q/$,_.y=H/2-(H/2-_.y)*Q/$,C(),P()});let O=null;u.addEventListener("pointerdown",F=>{O={id:F.pointerId,x:F.clientX-_.x,y:F.clientY-_.y},u.setPointerCapture(F.pointerId),F.preventDefault()}),u.addEventListener("pointermove",F=>{!O||F.pointerId!==O.id||(_.x=F.clientX-O.x,_.y=F.clientY-O.y,C(),P())}),u.addEventListener("pointerup",()=>O=null),u.addEventListener("pointercancel",()=>O=null),u.addEventListener("wheel",F=>{F.preventDefault(),p.value=Math.min(4,Math.max(1,+p.value-F.deltaY*.002)),p.dispatchEvent(new Event("input"))},{passive:!1}),h.addEventListener("click",F=>{let H=F.target.closest("button");if(H){if(H.dataset.shape){d=H.dataset.shape,h.querySelectorAll("[data-shape]").forEach($=>$.classList.toggle("on",$===H)),A();return}if(H.dataset.crop==="cancel"){h.hidden=!0;return}if(H.dataset.crop==="ok"){let[$,Q]=I(),k=_.base*_.s,z=d==="circle",N=z?420:560,K=Math.round(N*Q/$),X=Math.round(N*.05),ee=document.createElement("canvas");ee.width=N+X*2,ee.height=K+X*2;let ve=ee.getContext("2d");z?(ve.fillStyle="#fff",ve.beginPath(),ve.arc(ee.width/2,ee.height/2,ee.width/2,0,7),ve.fill(),ve.save(),ve.beginPath(),ve.arc(ee.width/2,ee.height/2,N/2,0,7),ve.clip()):(ve.fillStyle="#fff",ve.fillRect(0,0,ee.width,ee.height)),ve.drawImage(T,-_.x/k,-_.y/k,$/k,Q/k,X,X,N,K),z&&ve.restore();let be=z?ee.toDataURL("image/png"):ee.toDataURL("image/jpeg",.84);h.hidden=!0,w({t:"i",src:be,x:.5,y:.45,s:d==="0.75"?.4:.48,r:Math.round((Math.random()-.5)*10)})}}}),o.addEventListener("click",F=>{let H=F.target.closest("[data-tab]");H&&(v=H.dataset.tab,r.hidden=!0,y())}),l.addEventListener("click",F=>{let H=F.target.closest("button");if(H)if(H.dataset.stk){let $=H.dataset.stk;if(!(Bn.stickers[$]>0))return;Bn.stickers[$]--,dh(),w({t:"s",k:$,x:.35+Math.random()*.3,y:.3+Math.random()*.4,s:.26,r:Math.round((Math.random()-.5)*24)}),y()}else H.dataset.pick?(c.value="",c.click()):H.dataset.pen?(M=H.dataset.pen,y()):H.dataset.tape&&w({t:"p",k:H.dataset.tape,x:.5,y:.2+Math.random()*.6,s:.55,r:Math.round((Math.random()-.5)*16)})});let b=null;n.addEventListener("pointerdown",F=>{let H=F.target.closest(".de"),$=n.getBoundingClientRect();if(H){g=+H.dataset.i;let Q=m()[g];b={id:F.pointerId,ox:Q.x-(F.clientX-$.left)/$.width,oy:Q.y-(F.clientY-$.top)/$.height,node:H},n.setPointerCapture(F.pointerId),s.hidden=!1,n.querySelectorAll(".de.on").forEach(k=>k!==H&&k.classList.remove("on")),H.classList.add("on"),F.preventDefault();return}g=null,S(),v==="pen"&&M?(x={x:(F.clientX-$.left)/$.width,y:(F.clientY-$.top)/$.height},r.hidden=!1,a.value="",setTimeout(()=>a.focus(),30)):v==="pen"&&i("\uC18C\uD488\uC0F5\uC5D0\uC11C \uBCFC\uD39C\uC744 \uC0AC \uC624\uBA74 \uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694")}),n.addEventListener("pointermove",F=>{if(!b||F.pointerId!==b.id)return;let H=n.getBoundingClientRect(),$=m()[g];$.x=Math.min(1,Math.max(0,(F.clientX-H.left)/H.width+b.ox)),$.y=Math.min(1,Math.max(0,(F.clientY-H.top)/H.height+b.oy)),b.node.style.left=$.x*100+"%",b.node.style.top=$.y*100+"%"});let D=F=>{b&&F.pointerId===b.id&&(b=null,mh())};n.addEventListener("pointerup",D),n.addEventListener("pointercancel",D),r.addEventListener("submit",F=>{F.preventDefault();let H=a.value.trim();r.hidden=!0,a.blur(),!(!H||!x)&&w({t:"x",text:H,color:an[M].ink,x:x.x,y:x.y,s:.07,r:Math.round((Math.random()-.5)*8)})}),t.addEventListener("click",async F=>{let H=F.target.closest("[data-act]");if(!H)return;let $=H.dataset.act,Q=g!==null?m()[g]:null;if($==="close")return V();if($==="prev"||$==="next")return cr.page=(cr.page+($==="next"?1:gh-1))%gh,g=null,r.hidden=!0,mh(),S();if($==="save")return U();Q&&($==="rotl"?Q.r-=12:$==="rotr"?Q.r+=12:$==="big"?Q.s=Math.min(Q.t==="x"?.2:.9,Q.s*1.18):$==="small"?Q.s=Math.max(Q.t==="x"?.03:.08,Q.s/1.18):$==="del"&&(m().splice(g,1),Q.t==="s"&&(Bn.stickers[Q.k]=(Bn.stickers[Q.k]||0)+1,dh(),y()),g=null),mh(),S())});function B(F,H,$){F.fillStyle="#fffdf6",F.fillRect(0,0,H,$),F.fillStyle="#e9dcef";for(let Q=60;Q<$;Q+=36)for(let k=90;k<H-20;k+=36)F.beginPath(),F.arc(k,Q,2,0,7),F.fill();F.fillStyle="#f6e3ec",F.fillRect(0,0,54,$);for(let Q=40;Q<$;Q+=60)F.fillStyle="#d8cde6",F.beginPath(),F.arc(27,Q,9,0,7),F.fill()}async function U(){try{await document.fonts.load(`40px ${rd}`)}catch{}let F=900,H=1200,$=document.createElement("canvas");$.width=F,$.height=H;let Q=$.getContext("2d");B(Q,F,H);for(let z of m()){if(Q.save(),Q.translate(z.x*F,z.y*H),Q.rotate(z.r*Math.PI/180),z.t==="x"){Q.font=`${z.s*F}px ${rd}`,Q.fillStyle=z.color,Q.textAlign="center",Q.textBaseline="middle";let N=[],K="";for(let ee of z.text.split(/(\s+)/))K&&Q.measureText(K+ee).width>F*.84?(N.push(K.trim()),K=ee.trimStart()):K+=ee;N.push(K.trim());let X=z.s*F*1.05;N.forEach((ee,ve)=>Q.fillText(ee,0,(ve-(N.length-1)/2)*X))}else{let N=new Image;N.src=z.t==="i"?z.src:z.t==="s"?gi(...z.k.split(":").map((ee,ve)=>ve?+ee:ee)):ad(z.k),await N.decode().catch(()=>{});let K=z.s*F,X=K*(N.naturalHeight/N.naturalWidth||1);Q.drawImage(N,-K/2,-X/2,K,X)}Q.restore()}Q.font=`28px ${rd}`,Q.fillStyle="#b9a6cf",Q.textAlign="right",Q.fillText(`\uC218\uC787\uD574\uD53C \uB2E4\uC774\uC5B4\uB9AC \xB7 ${aa()}`,F-30,H-30);let k=await ra($,`suithappy-diary-${Date.now()}.jpg`);i(k==="downloaded"?"\u{1F4BE} \uB2E4\uC774\uC5B4\uB9AC\uB97C \uC774\uBBF8\uC9C0\uB85C \uC800\uC7A5\uD588\uC5B4\uC694":k==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}function W(){if(!ph("diary"))return i("\u{1F4D2} \uC18C\uD488\uC0F5\uC5D0\uC11C \uB2E4\uC774\uC5B4\uB9AC \uC218\uCCA9\uC744 \uC0AC \uC624\uBA74 \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694");t.hidden=!1,g=null,r.hidden=!0,y(),requestAnimationFrame(S)}function V(){t.hidden=!0,r.hidden=!0}return addEventListener("resize",()=>{t.hidden||S()}),addEventListener("keydown",F=>{F.code==="Escape"&&!t.hidden&&r.hidden&&V()}),{open:W,close:V,get isOpen(){return!t.hidden}}}var p0={v:{label:"\u270C\uFE0F \uBE0C\uC774",arm:[-2.75,.32],tilt:.12},heart:{label:"\u{1FAF6} \uD558\uD2B8",arm:[-3.05,-.55],tilt:-.1},chin:{label:"\u{1F338} \uAF43\uBC1B\uCE68",arm:[-2,-.62],tilt:.2}};function m0({hero:i,mirrors:e,camera:t,player:n,showToast:s,renderNow:r}){let a=U=>document.getElementById(U),o=a("photo-btn"),l=a("photo-bar"),c=a("shot");l.innerHTML=`<div class="poses">${Object.entries(p0).map(([U,W])=>`<button data-pose="${U}">${W.label}</button>`).join("")}</div>
    <div class="prow"><button class="pclose" data-act="exit">\uB2EB\uAE30</button><button class="shutter" data-act="shoot" aria-label="\uCC0D\uAE30"></button><span class="ptip">\uD3EC\uC988\uB97C \uACE0\uB974\uACE0 \uCC30\uCE75!</span></div>`;let h=U=>new $t({color:U,roughness:.4}),u=new tt,f=new je(new kt(.07,.13,.014),h("#9f8af0"));u.add(f);let p=new je(new ot(.006,.006,.004,10),h("#3b2f4a"));p.rotation.x=Math.PI/2,p.position.set(-.018,.048,.008),u.add(p),u.position.set(0,-.27,.035),u.rotation.x=Math.PI/2;let v=new tt;v.position.set(.012,-.27,0);let M=h("#ffe3d0"),g=new tt;v.add(g);for(let U of[-1,1]){let W=new je(new Xa(.011,.05,3,6),M);W.position.set(.012*U,-.04,0),W.rotation.z=.28*U,g.add(W)}let x=new tt,m=new bs;m.moveTo(0,-.05),m.bezierCurveTo(-.07,0,-.04,.05,0,.025),m.bezierCurveTo(.04,.05,.07,0,0,-.05),x.add(new je(new Ks(m,{depth:.015,bevelEnabled:!1}),h("#ff6fa5"))),x.position.set(0,1.38,.05),x.scale.setScalar(1.8);let S=new tt;for(let U=0;U<5;U++){let W=new je(new Zt(.03,8,6),h(U%2?"#ffd1e3":"#fff3b0"));W.position.set(Math.cos(U*1.256)*.05,0,Math.sin(U*1.256)*.05),S.add(W)}S.position.set(0,.92,.2);let y=!1,w=null,T="v",d=!1,_=0,I=0,A=new G;function C(){for(let U of e){let W=U.c.x-n.x,V=n.z-U.c.z;if(W>.6&&W<2.6&&Math.abs(V)<.85)return U}return null}function P(U){T=U,l.querySelectorAll("[data-pose]").forEach(W=>W.classList.toggle("on",W.dataset.pose===U)),g.visible=U==="v",x.visible=U==="heart",S.visible=U==="chin"}function O(){if(w=C(),!!w){y=!0,n.face=Math.PI/2,I=t.fov,t.fov=64,t.updateProjectionMatrix();try{document.fonts.load('40px "Gamja Flower"')}catch{}i.arms[0].add(u),i.arms[1].add(v),i.root.add(x),i.root.add(S),P(T),l.hidden=!1,o.hidden=!0,document.body.classList.add("photo"),s("\u{1F4F8} \uAC70\uC6B8\uC0F7 \uBAA8\uB4DC! \uD3EC\uC988\uB97C \uACE0\uB974\uACE0 \uB3D9\uADF8\uB780 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC694")}}function b(){y=!1,l.hidden=!0,document.body.classList.remove("photo"),I&&(t.fov=I,t.updateProjectionMatrix()),i.arms[0].remove(u),i.arms[1].remove(v),i.root.remove(x),i.root.remove(S),i.head.rotation.z=0}l.addEventListener("click",U=>{let W=U.target.closest("button");W&&(W.dataset.pose?P(W.dataset.pose):W.dataset.act==="exit"?b():W.dataset.act==="shoot"&&(_=1,B.applyPose(performance.now()/1e3),i.root.updateMatrixWorld(!0),B.camera(),d=!0,B.afterRender(r())))}),o.addEventListener("click",U=>{O(),U.currentTarget.blur()});let D=null;c.addEventListener("click",async U=>{let W=U.target.closest("button");if(W&&(W.dataset.act==="again"&&(c.hidden=!0),W.dataset.act==="save"&&D)){let V=await ra(D,`suithappy-mirror-${Date.now()}.jpg`);s(V==="downloaded"?"\u{1F4BE} \uC0AC\uC9C4\uC744 \uC800\uC7A5\uD588\uC5B4\uC694":V==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}}),addEventListener("keydown",U=>{U.code==="Escape"&&y&&(c.hidden?b():c.hidden=!0)});let B={get active(){return y},update(U){o.hidden=y||!!U||!C()},applyPose(U){if(!y)return;let W=p0[T];i.arms[0].rotation.x=-1.95,i.arms[0].rotation.z=-.55,i.arms[1].rotation.x=W.arm[0],i.arms[1].rotation.z=W.arm[1],i.head.rotation.z=W.tilt,i.head.rotation.y=0,x.rotation.y=Math.sin(U*2)*.3,x.position.y=1.38+Math.sin(U*3)*.02},camera(){if(!y)return!1;let U=n.face,W=Math.sin(U),V=Math.cos(U),F=V,H=-W;return t.position.set(n.x+W*.42-F*.1,.78,n.z+V*.42-H*.1),t.lookAt(w.c.x,.72,n.z*.7+w.c.z*.3),!0},afterRender(U){let W=document.getElementById("flash");if(_>0&&(_=Math.max(0,_-.08),W.style.opacity=_),!d)return;d=!1;let V=900,F=1200,H=document.createElement("canvas");H.width=V,H.height=F;let $=H.getContext("2d"),Q=U.width,k=U.height,z=3/4,N=Q,K=Q/z;K>k&&(K=k,N=k*z),$.fillStyle="#fff",$.fillRect(0,0,V,F),$.drawImage(U,(Q-N)/2,(k-K)/2,N,K,30,30,V-60,F-150),$.fillStyle="#ff8fb7",$.font='700 40px "Gamja Flower", cursive',$.textAlign="left",$.fillText("Soo it Happy \u{1F353} \uC218\uC9D1\uC218\uC9D1",40,F-62),$.fillStyle="#b9a6cf",$.font='30px "Gamja Flower", cursive',$.textAlign="right",$.fillText(aa(),V-40,F-62),D=H,c.innerHTML=`<div class="shotcard"><img src="${H.toDataURL("image/jpeg",.85)}" alt="\uCC0D\uC740 \uAC70\uC6B8\uC0F7"><div class="srow"><button data-act="again">\uB2E4\uC2DC \uCC0D\uAE30</button><button class="go" data-act="save">\u{1F4F2} \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5</button></div></div>`,c.hidden=!1}};return B}var En=(i,e)=>i+Math.random()*(e-i),PS=i=>i[Math.floor(Math.random()*i.length)],xh=(i,e,t)=>Math.max(e,Math.min(t,i)),si=(i,e,t)=>i+(e-i)*t,ri=(i,e,t)=>{let n=parseInt(i.slice(1),16),s=parseInt(e.slice(1),16),r=a=>Math.round(si(n>>a&255,s>>a&255,xh(t,0,1)));return`rgb(${r(16)},${r(8)},${r(0)})`},hr=null,vh=()=>{if(!hr)try{hr=new(window.AudioContext||window.webkitAudioContext)}catch{}return hr&&hr.state==="suspended"&&hr.resume(),hr};function Ln(i,e=.12,t="triangle",n=.12,s=0){let r=vh();if(!r)return;let a=r.currentTime+s,o=r.createOscillator(),l=r.createGain();o.type=t,o.frequency.setValueAtTime(i,a),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l).connect(r.destination),o.start(a),o.stop(a+e+.02)}function IS(i=.05,e=.08,t=0,n=6e3){let s=vh();if(!s)return;let r=s.currentTime+t,a=Math.floor(s.sampleRate*i),o=s.createBuffer(1,a,s.sampleRate),l=o.getChannelData(0);for(let f=0;f<a;f++)l[f]=(Math.random()*2-1)*(1-f/a);let c=s.createBufferSource(),h=s.createBiquadFilter(),u=s.createGain();h.type="highpass",h.frequency.value=n,u.gain.value=e,c.buffer=o,c.connect(h).connect(u).connect(s.destination),c.start(r)}var wn={good:()=>{Ln(880,.1),Ln(1320,.12,"triangle",.1,.06)},bad:()=>Ln(180,.2,"sawtooth",.08),pop:()=>Ln(660,.08,"sine",.12),win:()=>[523,659,784,1047].forEach((i,e)=>Ln(i,.18,"triangle",.12,e*.09))};function Dt(i,e,t,n,s,r){i.beginPath(),i.roundRect(e,t,n,s,r)}function Ps(i,e,t,n,s){i.font=`${s}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(e,t,n)}function Yt(i,e,t,n,s=16,r="#4a3f66",a=800,o="center"){i.font=`${a} ${s}px "Malgun Gothic","Apple SD Gothic Neo",sans-serif`,i.fillStyle=r,i.textAlign=o,i.textBaseline="middle",i.fillText(e,t,n)}function zo(i,e,t){for(let n of i)n.t+=t,n.y-=40*t,e.globalAlpha=xh(1-n.t/.9,0,1),Yt(e,n.s,n.x,n.y,n.size||18,n.c||"#e0457b",900);e.globalAlpha=1;for(let n=i.length-1;n>=0;n--)i[n].t>.9&&i.splice(n,1)}function _h(i,e,t){Dt(i,10,10,110,34,17),i.fillStyle="#ffffffcc",i.fill(),Yt(i,`\u23F1 ${Math.max(0,Math.ceil(e))}\uCD08`,65,27,15),Dt(i,220,10,130,34,17),i.fillStyle="#ffffffcc",i.fill(),Yt(i,`\uC810\uC218 ${t}`,285,27,15,"#e0457b")}function LS(){let i=[],e=[],t=[],n=30,s=0,r=0,a=0,o=0,l=0,c=[{y:236,s:.84},{y:322,s:.97},{y:420,s:1.1}],h=[.68,.82],u=[.58,.95],f=1.25,p=d=>({side:0,done:[0,0],marks:[0,0],rate:En(.3,.46)*(1+a*.07),ph:Math.random()*6,flips:0,slide:0,lift:0,grades:[],wait:d,dead:0}),v=[p(0),p(2.2),p(4.4)],M=d=>d<.58?ri("#fbf6ec","#f3d9a8",d/.58):d<.82?ri("#f3d9a8","#e49a4c",(d-.58)/.24):d<.95?ri("#e49a4c","#a9572a",(d-.82)/.13):ri("#a9572a","#2a201c",(d-.95)/.3);function g(d){let _=v[d];if(!_||_.slide||_.wait>0||_.dead)return;let I=_.done[_.side],A=c[d],C;if(I<u[0])C=["\uB35C \uC775\uC5C8\uC5B4\uC694 \u{1F62F}",-10,"#8a7bb8"],wn.bad(),o=0;else if(I>=h[0]&&I<=h[1]){o++,C=[o>1?`PERFECT \xD7${o}!`:"PERFECT \uB178\uB987\uB178\uB987!",100+(o-1)*20,"#e0457b"],wn.good();for(let P=0;P<10;P++)t.push({x:360/2+En(-90,90)*A.s,y:A.y,vx:En(-60,60),vy:En(-160,-60),t:0})}else I<=u[1]?(C=["\uC88B\uC544\uC694 \u{1F44D}",50,"#e39b4f"],wn.pop(),o=0):(C=["\uC557 \uD0D4\uC5B4\uC694\u2026 \u{1F525}",-30,"#5a4a44"],wn.bad(),o=0);_.grades.push(C[1]),s=Math.max(0,s+C[1]),i.push({s:C[0],x:360/2,y:A.y-46*A.s,t:0,c:C[2]}),_.marks[_.side]=1,_.flips++,_.lift=1,_.flips>=2?(_.slide=.001,r++,a++,_.grades.every(P=>P>=100)&&(s+=80,i.push({s:"\uC644\uBCBD\uD55C \uB5A1\uAF2C\uCE58! +80",x:360/2,y:A.y-20,t:0,size:19}),wn.win())):_.side=1}let x=d=>{let _=0,I=1e9;return c.forEach((A,C)=>{let P=Math.abs(A.y-d);P<I&&(I=P,_=C)}),_},m=190,S=470,y=d=>si(78,8,(d-m)/(S-m)),w=d=>360-y(d);function T(d,_,I,A,C){let P=d.createLinearGradient(0,_,0,_+I);return P.addColorStop(0,ri("#ffffff","#fbf6ec",.5)),P.addColorStop(.18,M(A)),P.addColorStop(.62,M((A+C)/2)),P.addColorStop(1,M(C)),P}return{title:"\u{1F361} \uB5A1\uAF2C\uCE58 \uAD7D\uAE30",desc:"\uC22F\uBD88 \uC704 <b>\uAF2C\uCE58 3\uAC1C</b>\uAC00 \uB3D9\uC2DC\uC5D0 \uC775\uC5B4\uC694!<br>\uB5A1\uC774 <b>\uB178\uB987\uB178\uB987</b>(\uAC8C\uC774\uC9C0 \uCD08\uB85D)\uD560 \uB54C \uADF8 \uAF2C\uCE58\uB97C \uB20C\uB7EC \uB4A4\uC9D1\uC5B4\uC694.<br>\uAF2C\uCE58\uB9C8\uB2E4 \uC775\uB294 \uC18D\uB3C4\uAC00 \uB2EC\uB77C\uC694 \xB7 \uC624\uB798 \uB450\uBA74 \uC22F\uC774 \uB3FC\uC694 \u{1F525}<br>\uC5F0\uC18D PERFECT\uBA74 \uCF64\uBCF4 \uBCF4\uB108\uC2A4! (\uD0A4\uBCF4\uB4DC 1\xB72\xB73)",buttons:[{label:"\u2460 \uB4A4\uCABD",act:()=>g(0)},{label:"\u2461 \uAC00\uC6B4\uB370",act:()=>g(1)},{label:"\u2462 \uC55E\uCABD",act:()=>g(2)}],key(d){(d==="Digit1"||d==="Numpad1")&&g(0),(d==="Digit2"||d==="Numpad2")&&g(1),(d==="Digit3"||d==="Numpad3")&&g(2)},tapAt(d,_){_>m-50&&_<S+20&&g(x(_))},update(d){return n-=d,v.forEach((_,I)=>{if(_.wait>0){_.wait-=d;return}if(_.slide){_.slide+=d*1.8,_.slide>1&&(v[I]=p(En(.4,1.1)));return}if(_.dead){_.dead+=d,_.dead>1.2&&(v[I]=p(En(.5,1)));return}_.ph+=d;let A=1+Math.sin(_.ph*1.7)*.22+Math.sin(_.ph*4.3+I)*.1;_.done[_.side]=Math.min(1.5,_.done[_.side]+_.rate*A*d),_.done[_.side]>.9&&Math.random()<d*6&&e.push({x:360/2+En(-100,100)*c[I].s,y:c[I].y-10,t:0,r:En(6,12),dark:_.done[_.side]>1}),_.done[_.side]>=f&&(_.dead=.001,l++,o=0,s=Math.max(0,s-50),wn.bad(),i.push({s:"\uC22F\uC774 \uB410\uC5B4\uC694\u2026 -50",x:360/2,y:c[I].y-40,t:0,c:"#5a4a44"})),_.lift=Math.max(0,_.lift-d*3.5)}),Math.random()<d*2&&e.push({x:En(40,320),y:450,t:0,r:En(5,9),dark:!1}),n<=0?{score:s,msg:`\uB5A1\uAF2C\uCE58 ${r}\uAC1C \uC644\uC131!${l?` (\uC22F ${l}\uAC1C \u{1F525})`:""}`}:null},draw(d,_,I){let A=d.createLinearGradient(0,0,0,560);A.addColorStop(0,"#ffe9dc"),A.addColorStop(.32,"#ffd7c4"),A.addColorStop(1,"#c98f7a"),d.fillStyle=A,d.fillRect(0,0,360,560);for(let P=0;P<6;P++)d.fillStyle=P%2?"#ff8fb0":"#fff",d.beginPath(),d.moveTo(P*60,52),d.lineTo(P*60+60,52),d.lineTo(P*60+60,78),d.quadraticCurveTo(P*60+30,96,P*60,78),d.fill();_h(d,n,s),o>1&&(Dt(d,360/2-52,12,104,30,15),d.fillStyle="#e0457b",d.fill(),Yt(d,`\u{1F525} \uCF64\uBCF4 ${o}`,360/2,27,14,"#fff",900)),d.fillStyle="#3a2b2e",d.beginPath(),d.moveTo(y(m)-10,m-14),d.lineTo(w(m)+10,m-14),d.lineTo(w(S)+12,S+8),d.lineTo(y(S)-12,S+8),d.fill();let C=d.createLinearGradient(0,S,0,S+60);C.addColorStop(0,"#6d5a5e"),C.addColorStop(1,"#2d2224"),d.fillStyle=C,Dt(d,y(S)-12,S+6,w(S)-y(S)+24,54,8),d.fill(),d.fillStyle="#ffffff22",d.fillRect(y(S)-4,S+14,w(S)-y(S)+8,3);for(let P=0;P<26;P++){let O=m+12+P*37%250,b=si(y(O)+14,w(O)-14,P*53%100/100),D=si(8,15,(O-m)/(S-m)),B=.55+Math.sin(I*3+P*1.7)*.25,U=d.createRadialGradient(b,O,0,b,O,D*1.8);U.addColorStop(0,`rgba(255,${150+60*B|0},70,${B})`),U.addColorStop(1,"rgba(255,90,40,0)"),d.fillStyle=U,d.beginPath(),d.arc(b,O,D*1.8,0,7),d.fill()}for(let P=0;P<=14;P++){let O=P/14,b=si(m,S,O*(.75+.25*O)),D=si(2.2,5,O);d.strokeStyle="rgba(0,0,0,0.45)",d.lineWidth=D,d.beginPath(),d.moveTo(y(b),b+D*.6),d.lineTo(w(b),b+D*.6),d.stroke(),d.strokeStyle="#9d9298",d.lineWidth=D,d.beginPath(),d.moveTo(y(b),b),d.lineTo(w(b),b),d.stroke(),d.strokeStyle="#efe6ea",d.lineWidth=D*.3,d.beginPath(),d.moveTo(y(b)+4,b-D*.22),d.lineTo(w(b)-4,b-D*.22),d.stroke()}d.strokeStyle="#5b4a4f",d.lineWidth=7,d.beginPath(),d.moveTo(y(m)-6,m-8),d.lineTo(w(m)+6,m-8),d.lineTo(w(S)+8,S+4),d.lineTo(y(S)-8,S+4),d.closePath(),d.stroke(),v.forEach((P,O)=>{let b=c[O],D=b.s,B=P.slide?si(360/2,620,P.slide*P.slide):360/2;if(P.wait>0){Yt(d,"\u2026",360/2,b.y,16*D,"#ffffff88");return}let U=Math.sin(P.lift*Math.PI)*34*D,W=b.y-U-(P.dead?P.dead*30:0);d.globalAlpha=P.dead?Math.max(0,1-P.dead):1,d.fillStyle="rgba(0,0,0,0.35)",d.beginPath(),d.ellipse(B,b.y+16*D,125*D,9*D,0,0,7),d.fill(),d.strokeStyle="#e2bd86",d.lineWidth=6*D,d.lineCap="round",d.beginPath(),d.moveTo(B-160*D,W+4*D),d.lineTo(B+150*D,W+4*D),d.stroke(),d.fillStyle="#c99a5e",Dt(d,B-178*D,W-3*D,26*D,14*D,4),d.fill();let V=P.done[P.side],F=P.dead?1.5:P.flips?P.done[0]:0,H=P.dead?1.5:P.slide?P.done[1]:V;for(let $=0;$<4;$++){let Q=B-102*D+$*68*D,k=56*D,z=36*D,N=W-z/2;if(d.fillStyle=T(d,N,z,F,H),Dt(d,Q-k/2,N,k,z,14*D),d.fill(),P.marks[0]||P.slide){d.strokeStyle="rgba(70,35,20,0.55)",d.lineWidth=3*D;for(let K=-1;K<=1;K++)d.beginPath(),d.moveTo(Q+K*14*D-6*D,N+8*D),d.lineTo(Q+K*14*D+6*D,N+z-8*D),d.stroke()}P.slide&&(d.fillStyle="rgba(210,50,40,0.85)",Dt(d,Q-k/2+3,N+3,k-6,z*.55,10*D),d.fill(),d.fillStyle="#ffffff99",Dt(d,Q-k/2+8*D,N+6*D,14*D,5*D,3),d.fill()),d.fillStyle="#ffffff66",Dt(d,Q-k/2+7*D,N+5*D,16*D,6*D,3),d.fill()}if(d.globalAlpha=1,!P.slide&&!P.dead){let $=B-70*D,Q=W-40*D,k=140*D,z=9*D;Dt(d,$-3,Q-3,k+6,z+6,7),d.fillStyle="#ffffffd9",d.fill();let N=(K,X,ee)=>{d.fillStyle=ee,d.fillRect($+k*K/f,Q,k*(X-K)/f,z)};N(0,u[0],"#eee4ea"),N(u[0],h[0],"#ffe08a"),N(h[0],h[1],"#7fdc7a"),N(h[1],u[1],"#ffe08a"),N(u[1],f,"#e6a0a0"),d.fillStyle="#4a3f66",d.fillRect($+k*Math.min(V,f)/f-2,Q-4,4,z+8),Dt(d,$-26*D,Q-4*D,18*D,18*D,9*D),d.fillStyle="#e0457b",d.fill(),Yt(d,`${O+1}`,$-17*D,Q+5*D,12*D,"#fff",900),Yt(d,P.side?"\uB4B7\uBA74":"\uC55E\uBA74",$+k+20*D,Q+z/2,11*D,"#fff",800)}});for(let P=e.length-1;P>=0;P--){let O=e[P];O.t+=_,O.y-=34*_,O.x+=Math.sin(O.t*3+P)*10*_,O.r+=10*_,d.globalAlpha=Math.max(0,.32*(1-O.t/1.6)),d.fillStyle=O.dark?"#5a4f52":"#ffffff",d.beginPath(),d.arc(O.x,O.y,O.r,0,7),d.fill(),O.t>1.6&&e.splice(P,1)}for(let P=t.length-1;P>=0;P--){let O=t[P];O.t+=_,O.x+=O.vx*_,O.y+=O.vy*_,O.vy+=300*_,d.globalAlpha=Math.max(0,1-O.t/.7),d.fillStyle="#ffd36b",d.beginPath(),d.arc(O.x,O.y,2.5,0,7),d.fill(),O.t>.7&&t.splice(P,1)}d.globalAlpha=1,Yt(d,"\uC775\uC740 \uAF2C\uCE58\uB97C \uC9C1\uC811 \uB204\uB974\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC73C\uB85C \uB4A4\uC9D1\uC5B4\uC694",360/2,540,12,"#fff",700),zo(i,d,_)}}}function DS(){let i=[["\uC0DD\uD06C\uB9BC","#fffaf3"],["\uB538\uAE30","#f58aa6"],["\uCD08\uCF54","#8a5638"],["\uB179\uCC28","#a5d07f"],["\uCF58\uD50C\uB808\uC774\uD06C","#e9b860"],["\uBC14\uB2D0\uB77C","#fff0c2"],["\uBE14\uB8E8\uBCA0\uB9AC","#8f88dc"],["\uB9DD\uACE0","#ffc552"],["\uCFE0\uD0A4","#c49a6c"]],e=[],t=[],n=45,s=0,r=0,a=0,o=null,l=0,c=24,h=455,u=150,f=175,p=[{x:360/2,w:u,y:h,c:"#ffffff"}],v=null,M=()=>p[p.length-1];function g(){let S=M(),[y,w]=i[l%i.length];l++;let T=l%2?1:-1;v={name:y,c:w,w:S.w,x:360/2-T*f,dir:T,y:S.y-c,sp:120+p.length*9,drop:0}}g();function x(){if(!v||o)return;let S=M(),y=v.x-S.x,w=S.w-Math.abs(y);if(w<=3){t.push({x:v.x,y:v.y,w:v.w,c:v.c,vx:Math.sign(y||1)*70,vy:0,r:0}),v=null,o={t:0},r=0,wn.bad(),e.push({s:"\uC557, \uBE57\uB098\uAC14\uC5B4\uC694! \u{1F635}",x:360/2,y:230,t:0,size:21});return}let T,d;if(Math.abs(y)<7){r++,T=S.x,d=Math.min(u,S.w+(r>=3?8:0));let _=25+r*5;s+=_,wn.good(),e.push({s:r>1?`PERFECT \xD7${r} +${_}`:`PERFECT +${_}`,x:360/2,y:v.y-34+a,t:0,c:"#e0457b"})}else{r=0,d=w,T=S.x+y/2;let _=v.w-w,I=y>0?T+d/2+_/2:T-d/2-_/2;t.push({x:I,y:v.y,w:_,c:v.c,vx:Math.sign(y)*90,vy:-80,r:0}),s+=10,wn.pop(),e.push({s:`${v.name} +10`,x:360/2,y:v.y-34+a,t:0,c:"#7a6c99",size:15})}p.push({x:T,w:d,y:v.y,c:v.c,wob:1}),g()}function m(S,y,w,T,d,_=c){let I=Math.max(4,T*.14),A=S.createLinearGradient(y-T/2,0,y+T/2,0);A.addColorStop(0,ri(d,"#000000",.28)),A.addColorStop(.3,d),A.addColorStop(.55,ri(d,"#ffffff",.18)),A.addColorStop(1,ri(d,"#000000",.32)),S.fillStyle=A,S.beginPath(),S.moveTo(y-T/2,w),S.lineTo(y-T/2,w+_),S.ellipse(y,w+_,T/2,I,0,Math.PI,0,!0),S.lineTo(y+T/2,w),S.closePath(),S.fill(),S.fillStyle=ri(d,"#ffffff",.3),S.beginPath(),S.ellipse(y,w,T/2,I,0,0,7),S.fill(),S.strokeStyle=ri(d,"#000000",.12),S.lineWidth=1,S.stroke()}return{title:"\u{1F368} \uD30C\uB974\uD398 \uD0D1 \uC313\uAE30",desc:"\uC88C\uC6B0\uB85C \uBBF8\uB044\uB7EC\uC9C0\uB294 \uCE35\uC744 <b>\uD0ED</b>\uD574\uC11C \uB0B4\uB824\uB193\uC544\uC694.<br>\uC090\uC838\uB098\uC628 \uBD80\uBD84\uC740 <b>\uC798\uB824\uC11C</b> \uC810\uC810 \uC881\uC544\uC838\uC694! \uB531 \uB9DE\uCD94\uBA74 PERFECT \u2728<br>3\uBC88 \uC5F0\uC18D PERFECT\uBA74 \uB2E4\uC2DC \uC870\uAE08 \uB113\uC5B4\uC838\uC694. \uC644\uC804\uD788 \uBE57\uB098\uAC00\uBA74 \uB05D (45\uCD08)",buttons:[{label:"\u2B07\uFE0F \uB0B4\uB824\uB193\uAE30",act:x}],key(S){(S==="Space"||S==="Enter")&&x()},tap:x,update(S){n-=S,v&&(v.x+=v.dir*v.sp*S,v.x>360/2+f&&(v.x=360/2+f,v.dir=-1),v.x<360/2-f&&(v.x=360/2-f,v.dir=1));for(let T of t)T.vy+=1100*S,T.x+=T.vx*S,T.y+=T.vy*S,T.r+=S*3*Math.sign(T.vx);for(let T=t.length-1;T>=0;T--)t[T].y>h+400&&t.splice(T,1);let y=Math.max(0,h-M().y-230);a=si(a,y,Math.min(1,S*4));for(let T of p)T.wob&&(T.wob=Math.max(0,T.wob-S*3));let w=p.length-1;return o&&(o.t+=S,o.t>1.3)?{score:s,msg:`${w}\uCE35 \uD30C\uB974\uD398\uB97C \uC313\uC558\uC5B4\uC694! \u{1F368}`}:n<=0?{score:s,msg:`${w}\uCE35 \uD30C\uB974\uD398 \uC644\uC131! \u{1F368}`}:null},draw(S,y,w){let T=S.createLinearGradient(0,0,0,560);T.addColorStop(0,"#e8f6ff"),T.addColorStop(1,"#ffe8f1"),S.fillStyle=T,S.fillRect(0,0,360,560),S.fillStyle="#ffffff70";for(let _=0;_<12;_++)S.beginPath(),S.arc(_*73%360,(_*131+a*.3)%560,18,0,7),S.fill();S.save(),S.translate(0,a);let d=360/2;S.fillStyle="#ffffffb8",S.strokeStyle="#c9e6f2",S.lineWidth=3,S.beginPath(),S.moveTo(d-u/2,h),S.lineTo(d+u/2,h),S.lineTo(d+28,h+62),S.lineTo(d-28,h+62),S.closePath(),S.fill(),S.stroke(),Dt(S,d-8,h+60,16,26,4),S.fill(),S.stroke(),S.beginPath(),S.ellipse(d,h+88,44,9,0,0,7),S.fill(),S.stroke(),S.fillStyle="#ffffff80",S.fillRect(d-u/2+14,h+6,6,40),S.beginPath(),S.ellipse(d,h,u/2,u*.14,0,0,7),S.fillStyle="#eef8fd",S.fill(),S.strokeStyle="#c9e6f2",S.stroke();for(let _=1;_<p.length;_++){let I=p[_],A=I.wob?Math.sin(I.wob*18)*3*I.wob:0;m(S,I.x+A,I.y,I.w,I.c)}if(!o&&p.length>1){let _=M();Ps(S,"\u{1F352}",_.x+_.w*.18,_.y-10,22)}for(let _ of t)S.save(),S.translate(_.x,_.y+c/2),S.rotate(_.r),m(S,0,-c/2,_.w,_.c),S.restore();if(v){let _=M();S.globalAlpha=.18,S.fillStyle="#5a3d6e",S.beginPath(),S.ellipse(v.x,_.y,v.w/2,Math.max(4,v.w*.14),0,0,7),S.fill(),S.globalAlpha=1,m(S,v.x,v.y-6+Math.sin(w*6)*2,v.w,v.c)}S.restore(),_h(S,n,s),Yt(S,`${p.length-1}\uCE35`,360/2,70,17,"#e0457b",900),r>1&&Yt(S,`\u{1F525} PERFECT \uCF64\uBCF4 ${r}`,360/2,94,13,"#e0457b",800),zo(e,S,y)}}}function NS(){let i=[["\u{1F9CA}","\uC5BC\uC74C","#e3f4ff"],["\u{1F95B}","\uC6B0\uC720","#fffaf0"],["\u{1F353}","\uB538\uAE30","#f58aa6"],["\u{1F36B}","\uCD08\uCF54","#8a5638"],["\u{1FAE7}","\uD0C4\uC0B0","#c4ecff"],["\u{1F366}","\uC544\uC774\uC2A4\uD06C\uB9BC","#fff3cf"],["\u{1F352}","\uCCB4\uB9AC","#d6304a"],["\u{1F375}","\uB179\uCC28","#a5d07f"],["\u{1F34C}","\uBC14\uB098\uB098","#f6e08a"],["\u2615","\uCEE4\uD53C","#a0703f"]],e=["\uD06C\uB9BC\uC18C\uB2E4","\uB538\uAE30\uC6B0\uC720","\uCD08\uCF54\uB77C\uB5BC","\uB179\uCC28\uB77C\uB5BC","\uBC14\uB098\uB098\uC6B0\uC720","\uBA54\uB860\uC18C\uB2E4","\uCCB4\uB9AC\uD30C\uB974\uD398","\uC544\uC778\uC288\uD398\uB108"],t=[],n=60,s=0,r=0,a=null,o=0,l=0,c="show",h=0,u=[],f=0,p=0,v={st:"away",t:3},M=()=>{let m=xh(3+Math.floor(o/2),3,6);a={name:PS(e),seq:Array.from({length:m},()=>Math.floor(Math.random()*i.length))},c="show",h=Math.max(1.8,3-o*.1),u=[],v.st!=="away"&&(v.st="away"),v.t=Math.max(v.t,h+En(.8,1.6))};M();function g(m){if(c!=="make")return;if(v.st==="look"){l++,r=0,s=Math.max(0,s-40),f=-1,p=1,wn.bad(),t.push({s:"\uB4E4\uCF30\uB2E4! -40 \u{1F631}",x:360/2,y:330,t:0,c:"#e0457b",size:22});return}u.push(m),wn.pop();let S=u.length-1;if(a.seq[S]!==m){r=0,c="result",f=-1,wn.bad(),t.push({s:"\uC557, \uC21C\uC11C\uAC00 \uB2EC\uB77C\uC694! \u{1F623}",x:360/2,y:330,t:0,c:"#8a7bb8"}),setTimeout(M,900);return}if(u.length===a.seq.length){r++,o++;let y=Math.round(a.seq.length*20*(1+(r-1)*.25));s+=y,c="result",f=1,wn.good(),t.push({s:r>1?`\uCF64\uBCF4 ${r}! +${y}`:`\uC644\uBCBD\uD574\uC694! +${y}`,x:360/2,y:330,t:0,size:20}),setTimeout(M,800)}}function x(m,S,y,w,T){Dt(m,S-34,y+26,68,70,22),m.fillStyle="#f7f2ea",m.fill(),Dt(m,S-26,y+34,52,62,14),m.fillStyle="#7fc8a0",m.fill(),m.fillStyle="#ffe2cf",m.beginPath(),m.arc(S,y,30,0,7),m.fill(),m.fillStyle="#3f302f",w==="away"?(m.beginPath(),m.arc(S,y,31,0,7),m.fill(),m.beginPath(),m.ellipse(S+4,y+30+Math.sin(T*3)*2,9,18,.15,0,7),m.fill(),m.fillStyle="#ff9cc0",m.beginPath(),m.arc(S+2,y+12,5,0,7),m.fill()):w==="turn"?(m.beginPath(),m.arc(S,y,31,Math.PI*.35,Math.PI*1.75),m.fill(),m.beginPath(),m.arc(S-6,y-14,24,Math.PI,0),m.fill(),m.fillStyle="#3f302f",m.beginPath(),m.arc(S+14,y+2,3.2,0,7),m.fill()):(m.beginPath(),m.arc(S,y-6,30,Math.PI*1.02,Math.PI*1.98),m.fill(),m.fillRect(S-30,y-8,8,20),m.fillRect(S+22,y-8,8,20),m.fillStyle="#3f302f",m.beginPath(),m.arc(S-10,y+4,3.6,0,7),m.arc(S+10,y+4,3.6,0,7),m.fill(),m.strokeStyle="#c0606a",m.lineWidth=2,m.beginPath(),m.moveTo(S-6,y+16),m.lineTo(S+6,y+16),m.stroke(),m.fillStyle="#ffb3c6aa",m.beginPath(),m.arc(S-17,y+12,5,0,7),m.arc(S+17,y+12,5,0,7),m.fill());let d=w==="away"?"\u266A \uD765\uC5BC\uD765\uC5BC~":w==="turn"?"\uD760\u2026?":"\uBB50 \uD574\uC694? \u{1F440}";m.font='800 13px "Malgun Gothic",sans-serif';let _=m.measureText(d).width+20;Dt(m,S-_/2-6,y-66,_,26,13),m.fillStyle=w==="look"?"#ffe3ea":"#ffffff",m.fill(),Yt(m,d,S-6,y-53,13,w==="look"?"#e0457b":"#7a6c99",800),w==="turn"&&Yt(m,"\u2757",S+34,y-22,20)}return{title:"\u{1F92B} \uC0AC\uC7A5\uB2D8 \uBAB0\uB798 \uC8FC\uBB38\uBC1B\uAE30",desc:'\uC190\uB2D8 \uC8FC\uBB38\uC774 <b>3\uCD08</b> \uB3D9\uC548 \uBCF4\uC5EC\uC694. \uC0AC\uB77C\uC9C0\uBA74 \uC7AC\uB8CC\uB97C <b>\uC21C\uC11C\uB300\uB85C</b> \uACE8\uB77C\uC694.<br>\uB2E8, <b>\uC0AC\uC7A5\uB2D8\uC774 \uB3CC\uC544\uBCF4\uACE0 \uC788\uC744 \uB54C</b> \uB204\uB974\uBA74 \uB4E4\uCF1C\uC694! \u{1F631}<br>"\uD760\u2026?" \uD558\uBA74 \uC7A0\uAE50 \uBA48\uCD94\uAE30. \uC5F0\uC18D \uC815\uB2F5\uC774\uBA74 \uCF64\uBCF4 (60\uCD08)',buttons:i.map(([m,S],y)=>({label:`${m}<small>${S}</small>`,act:()=>g(y),cls:"ing"})),key(m){let S=parseInt(m.replace("Digit",""),10);isNaN(S)||g((S+9)%10)},update(m){if(n-=m,c==="show"&&(h-=m,h<=0&&(c="make")),v.t-=m,v.t<=0){let S=Math.min(1,o/8);v.st==="away"?(v.st="turn",v.t=si(.75,.5,S)):v.st==="turn"?(v.st="look",v.t=En(1,1.8)):(v.st="away",v.t=En(si(2.4,1.4,S),si(3.8,2.6,S)))}return f*=.9,p=Math.max(0,p-m*3),n<=0?{score:s,msg:`\uC8FC\uBB38 ${o}\uAC1C \uC131\uACF5!${l?` (\uB4E4\uD0A8 \uD69F\uC218 ${l}\uBC88 \u{1F605})`:" \uD55C \uBC88\uB3C4 \uC548 \uB4E4\uCF30\uC5B4\uC694 \u{1F92B}"}`}:null},draw(m,S,y){m.save(),p&&m.translate(Math.sin(y*60)*6*p,0);let w=m.createLinearGradient(0,0,0,560);w.addColorStop(0,"#fff6e6"),w.addColorStop(1,"#f0f8e8"),m.fillStyle=w,m.fillRect(0,0,360,560),m.fillStyle="#e8d6c4",m.fillRect(0,196,360,8);for(let B=0;B<5;B++)Ps(m,["\u{1FAD9}","\u{1F36F}","\u{1F9C1}","\u{1FAD6}","\u{1F36A}"][B],30+B*36,184,20);x(m,294,120,v.st,y),Dt(m,16,54,210,118,16),m.fillStyle=f>.1?"#e3f8dc":f<-.1?"#ffe3ea":"#ffffff",m.fill(),m.strokeStyle="#f3d5e2",m.lineWidth=2.5,m.stroke(),Yt(m,`\u{1F9FE} ${a.name}`,121,76,15);let T=a.seq.length,d=Math.min(36,186/T);a.seq.forEach((B,U)=>{let W=121+(U-(T-1)/2)*d;if(c==="show")Ps(m,i[B][0],W,116,26);else{let V=u[U];V!==void 0?Ps(m,i[V][0],W,116,26):(Dt(m,W-14,102,28,28,8),m.fillStyle="#f1e9ff",m.fill(),Yt(m,"?",W,117,15,"#c6a6f0"))}}),c==="show"?(Dt(m,36,148,170,8,4),m.fillStyle="#f1e6ee",m.fill(),Dt(m,36,148,170*xh(h/3,0,1),8,4),m.fillStyle="#f48fb9",m.fill()):Yt(m,"\uC21C\uC11C\uB300\uB85C \uB2F4\uC544\uC694",121,152,12,"#9a8cc4",700),m.fillStyle="#f6c9d8",m.fillRect(0,470,360,90),m.fillStyle="#ffffff70",m.fillRect(0,470,360,6);let _=360/2,I=260,A=470,C=64,P=46,O=a.seq.length,b=(A-I-30)/O,D=B=>si(P,C,(A-B)/(A-I));u.forEach((B,U)=>{let W=A-6-U*b,V=W-b,F=i[B][2],H=m.createLinearGradient(_-C,0,_+C,0);if(H.addColorStop(0,ri(F,"#000000",.2)),H.addColorStop(.4,F),H.addColorStop(1,ri(F,"#000000",.25)),m.fillStyle=H,m.beginPath(),m.moveTo(_-D(W)+4,W),m.lineTo(_-D(V)+4,V),m.lineTo(_+D(V)-4,V),m.lineTo(_+D(W)-4,W),m.closePath(),m.fill(),B===0)for(let $=0;$<3;$++)Dt(m,_-22+$*15,V+4,12,12,3),m.fillStyle="#ffffffcc",m.fill()}),m.strokeStyle="#bfe0ee",m.lineWidth=3,m.fillStyle="#ffffff40",m.beginPath(),m.moveTo(_-C,I),m.lineTo(_-P,A),m.lineTo(_+P,A),m.lineTo(_+C,I),m.fill(),m.stroke(),m.beginPath(),m.ellipse(_,I,C,10,0,0,7),m.stroke(),m.fillStyle="#ffffff90",m.fillRect(_-C+10,I+16,6,120),u.length===O&&f>.1&&(m.strokeStyle="#f48fb9",m.lineWidth=7,m.beginPath(),m.moveTo(_+18,I+40),m.lineTo(_+38,I-46),m.stroke()),r>1&&Yt(m,`\u{1F525} \uCF64\uBCF4 ${r}`,360/2,240,16,"#e0457b"),m.restore(),v.st==="look"&&c==="make"&&(m.strokeStyle=`rgba(240,80,120,${.45+Math.sin(y*10)*.2})`,m.lineWidth=14,m.strokeRect(0,0,360,560),Yt(m,"\uC9C0\uAE08 \uB204\uB974\uBA74 \uB4E4\uCF1C\uC694!",360/2,220,15,"#e0457b",900)),_h(m,n,s),zo(t,m,S)}}}function US(){let i=[],e=40,t=0,n=0,s=0,r=0,a=0,o=3,l=0,c=En(.8,1.6),h=0,u=0,f=0,p=["\u{1F964}","\u2615","\u{1F9CB}"],v=M=>()=>{r=M};return{title:"\u2615 \uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14",desc:"\uC7C1\uBC18\uC774 \uAE30\uC6B8\uBA74 <b>\u25C0 \u25B6</b>\uB85C \uBC18\uB300\uCABD\uC744 \uB20C\uB7EC \uADE0\uD615\uC744 \uC7A1\uC544\uC694.<br>\uB108\uBB34 \uAE30\uC6B8\uBA74 \uCEF5\uC774 \uB5A8\uC5B4\uC838\uC694! \uD14C\uC774\uBE14\uAE4C\uC9C0 \uC3DF\uC9C0 \uC54A\uACE0 \uC62E\uAE30\uAE30 (40\uCD08)",buttons:[{label:"\u25C0 \uC67C\uCABD",down:v(-1),up:v(0)},{label:"\uC624\uB978\uCABD \u25B6",down:v(1),up:v(0)}],key(M,g){(M==="ArrowLeft"||M==="KeyA")&&(r=g?-1:r===-1?0:r),(M==="ArrowRight"||M==="KeyD")&&(r=g?1:r===1?0:r)},pointer(M,g){r=g?M<360/2?-1:1:0},keyUp:!0,update(M){if(e-=M,h+=M,f-=M,c-=M,c<=0&&(s+=En(-1.6,1.6)*(1+u*.15),c=En(.5,1.3)-u*.04),s+=(-n*1.2+r*2.6+Math.sin(h*9)*.25)*M*3,s*=Math.pow(.35,M),n+=s*M,Math.abs(n)>.48&&f<=0&&(o--,f=.6,s*=-.4,n*=.6,wn.bad(),i.push({s:"\uC557 \uC3DF\uC558\uC5B4\uC694! \u{1F4A6}",x:360/2,y:210,t:0,c:"#8a7bb8"}),o<=0&&(a=0,o=3,n=0,s=0,i.push({s:"\uB2E4\uC2DC \uCE74\uC6B4\uD130\uC5D0\uC11C \uBC1B\uC544 \uC640\uC694",x:360/2,y:240,t:0,c:"#7a6c99",size:15}))),a+=M*(.16+u*.01),a>=1){let g=o*100;t+=g,l+=o,wn.win(),i.push({s:`\uC11C\uBE59 \uC644\uB8CC! ${o}\uC794 +${g}`,x:360/2,y:200,t:0,size:20}),a=0,o=3,u++,n*=.3}return e<=0?{score:t,msg:`\uC74C\uB8CC ${l}\uC794 \uBC30\uB2EC \uC131\uACF5!`}:null},draw(M,g,x){M.fillStyle="#e6f6dd",M.fillRect(0,0,360,560),M.fillStyle="#f6dce6",M.fillRect(0,400,360,160);for(let S=0;S<8;S++)M.fillStyle="#ffffff88",M.fillRect(((S*70-a*400)%430+360+70)%430-35,400,34,160);_h(M,e,t),Dt(M,40,60,280,14,7),M.fillStyle="#ffffffaa",M.fill(),Dt(M,40,60,280*a,14,7),M.fillStyle="#9be08a",M.fill(),Ps(M,"\u{1F37D}\uFE0F",326,67,22),Ps(M,"\u{1F9D1}\u200D\u{1F373}",30,67,20),M.strokeStyle="#f1e6ee",M.lineWidth=10,M.beginPath(),M.arc(360/2,170,60,Math.PI*1.1,Math.PI*1.9),M.stroke(),M.strokeStyle="#9be08a",M.beginPath(),M.arc(360/2,170,60,Math.PI*1.5-.3,Math.PI*1.5+.3),M.stroke(),M.strokeStyle="#e0457b",M.lineWidth=4,M.beginPath(),M.moveTo(360/2,170),M.lineTo(360/2+Math.sin(n*1.6)*60,170-Math.cos(n*1.6)*60),M.stroke();let m=330+Math.abs(Math.sin(h*9))*6;M.fillStyle="#ffe6dc",M.beginPath(),M.arc(360/2,m-40,34,0,7),M.fill(),M.fillStyle="#4b3634",M.beginPath(),M.arc(360/2,m-50,34,Math.PI,0),M.fill(),M.fillStyle="#2b2125",M.beginPath(),M.arc(360/2-11,m-38,4,0,7),M.arc(360/2+11,m-38,4,0,7),M.fill(),Dt(M,360/2-26,m-6,52,64,16),M.fillStyle="#bfe2f1",M.fill(),M.save(),M.translate(360/2,m-90),M.rotate(n),Dt(M,-80,-6,160,12,6),M.fillStyle="#ffc2da",M.fill();for(let S=0;S<o;S++)Ps(M,p[S],-46+S*46,-28,34);M.restore(),Yt(M,"\u25C0 \u25B6 \uB97C \uB204\uB974\uACE0 \uC788\uC73C\uBA74 \uADF8\uCABD\uC73C\uB85C \uC7C1\uBC18\uC744 \uB4E4\uC5B4 \uC62C\uB824\uC694",360/2,520,12,"#9a8cc4",700),zo(i,M,g)}}}function FS(){let e=.5357142857142857,t=30,n=462,s=96,r=360/2,a=1.6,o=[360/2-108,360/2,360/2+108],l=["\u{1F353}","\u{1F351}","\u{1F347}"],c=["#ff6f91","#ffb36b","#a98bff"],h=[[523,659,784],[587,698,880],[659,784,988]],u=[];for(let b=4;b*e*.5<t-1.5;b++){let D=b*e*.5;if(b%2===0?Math.random()<.85:Math.random()<.38){let B=Math.floor(Math.random()*3);u.push({t:D,lane:B,hit:0}),D>t*.45&&b%2===0&&Math.random()<.28&&u.push({t:D,lane:(B+1+Math.floor(Math.random()*2))%3,hit:0,chord:!0})}}let f=[],p=[],v=[0,0,0],M=-1.2,g=0,x=0,m=0,S=0,y=0,w=0,T=!1,d=0,_=0,I=b=>1/(1+b*3.2),A=b=>s+(n-s)*b,C=(b,D)=>r+(b-r)*D;function P(b){O(b),v[b]=1;let D=null,B=1;for(let U of u)if(!U.hit&&U.lane===b){let W=Math.abs(U.t-M);W<B&&(B=W,D=U)}!D||B>.14||(D.hit=B<=.06?2:1,x++,m=Math.max(m,x),p.push({lane:b,t:0,p:D.hit===2}),D.hit===2?(S++,g+=100+x*5,f.push({s:x>2?`PERFECT \xD7${x}`:"PERFECT",x:o[b],y:n-50,t:0,c:"#ffd27a"})):(y++,g+=50,f.push({s:"GOOD",x:o[b],y:n-50,t:0,c:"#9fe0cf"})))}let O=b=>Ln(h[b][1]*2,.08,"square",.05);return{title:"\u{1F3B5} \uB5A1\uAF2C\uCE58 \uC18C\uC2A4 \uB9AC\uB4EC\uAC8C\uC784",desc:"\uACFC\uC77C \uC18C\uC2A4\uAC00 <b>\uC800 \uBA40\uB9AC\uC11C \uB2E4\uAC00\uC640\uC694!</b> \uD310\uC815\uC120 \uB3D9\uADF8\uB77C\uBBF8\uC5D0 \uB2FF\uC744 \uB54C \uADF8 \uC904\uC744 \uD0ED.<br>\uD6C4\uBC18\uC5D4 <b>\uB450 \uC904 \uB3D9\uC2DC</b> \uB178\uD2B8\uB3C4 \uB098\uC640\uC694. PERFECT\uB97C \uC774\uC5B4 \uAC00\uBA74 \uB5A1\uAF2C\uCE58\uC5D0 \uC18C\uC2A4\uAC00 \uADF8\uB824\uC838\uC694 (30\uCD08, \uC18C\uB9AC \uCF1C \uC8FC\uC138\uC694 \u{1F50A})",buttons:[0,1,2].map(b=>({label:l[b],down:()=>P(b),cls:"lane"})),key(b,D){if(!D)return;let B={ArrowLeft:0,KeyA:0,KeyJ:0,ArrowDown:1,KeyS:1,KeyK:1,ArrowRight:2,KeyD:2,KeyL:2}[b];B!==void 0&&P(B)},pointer(b,D){D&&P(b<360/3?0:b<360*2/3?1:2)},update(b){if(!T){T=!0;let B=vh();_=B?B.currentTime+1.2:0}let D=hr;for(M=D&&_?D.currentTime-_:M+b;d*e*.5<M+.2&&d*e*.5<t;){let B=d*e*.5-M;B>-.05&&(d%2===0?Ln(90,.12,"sine",.25,Math.max(0,B)):IS(.04,.05,Math.max(0,B))),d++}for(let B of u)!B.hit&&M-B.t>.15&&(B.hit=-1,w++,x=0,f.push({s:"MISS",x:o[B.lane],y:n-34,t:0,c:"#b8acd8",size:15}));for(let B=0;B<3;B++)v[B]=Math.max(0,v[B]-b*5);return M>=t?{score:g,msg:`PERFECT ${S} \xB7 GOOD ${y} \xB7 MISS ${w} \xB7 \uCD5C\uB300 \uCF64\uBCF4 ${m}`}:null},draw(b,D,B){let U=M>0?Math.pow(1-M/e%1,3):0,W=b.createLinearGradient(0,0,0,560);W.addColorStop(0,"#1f1840"),W.addColorStop(.5,"#3a2a66"),W.addColorStop(1,"#6b4a8a"),b.fillStyle=W,b.fillRect(0,0,360,560);for(let k=0;k<4;k++){let z=40+k*93,N=b.createRadialGradient(z,0,0,z,0,160);N.addColorStop(0,`rgba(${k%2?"255,150,200":"160,140,255"},${.18+U*.3})`),N.addColorStop(1,"rgba(0,0,0,0)"),b.fillStyle=N,b.fillRect(z-160,0,320,200)}for(let k=0;k<18;k++)b.fillStyle=`rgba(255,255,255,${.3+.3*Math.sin(B*2+k)})`,b.fillRect(k*67%360,k*29%90,2,2);let V=I(1.35),F=(560-s)/(n-s),H=(k,z,N)=>{b.fillStyle=N,b.beginPath(),b.moveTo(C(k,V),A(V)),b.lineTo(C(z,V),A(V)),b.lineTo(C(z,F),560),b.lineTo(C(k,F),560),b.closePath(),b.fill()};H(o[0]-58,o[2]+58,"#2a2150"),o.forEach((k,z)=>H(k-50,k+50,v[z]?`rgba(255,255,255,${.06+v[z]*.18})`:"#ffffff0d"));for(let k=Math.floor(Math.max(0,M)/e);k<Math.floor(Math.max(0,M)/e)+6;k++){let z=(k*e-M)/a;if(z<0||z>1.35)continue;let N=I(z),K=A(N);b.strokeStyle=`rgba(255,210,122,${.25*N})`,b.lineWidth=1+N*2,b.beginPath(),b.moveTo(C(o[0]-58,N),K),b.lineTo(C(o[2]+58,N),K),b.stroke()}b.strokeStyle="#ffffff30",b.lineWidth=2,[o[0]-58,o[0]+54,o[1]+54,o[2]+58].forEach(k=>{b.beginPath(),b.moveTo(C(k,V),A(V)),b.lineTo(C(k,F),560),b.stroke()}),b.strokeStyle=`rgba(255,210,122,${.7+U*.3})`,b.lineWidth=4,b.beginPath(),b.moveTo(C(o[0]-58,1),n),b.lineTo(C(o[2]+58,1),n),b.stroke(),o.forEach((k,z)=>{b.strokeStyle=c[z],b.lineWidth=3+v[z]*3,b.beginPath(),b.ellipse(k,n,34,13,0,0,7),b.stroke()});let $=u.filter(k=>!k.hit).map(k=>({n:k,d:(k.t-M)/a})).filter(k=>k.d<1.35&&k.d>-.2).sort((k,z)=>z.d-k.d);for(let{n:k,d:z}of $){let N=I(Math.max(z,-.15)),K=C(o[k.lane],N),X=A(N);b.fillStyle=`rgba(0,0,0,${.3*N})`,b.beginPath(),b.ellipse(K,X+4*N,26*N,9*N,0,0,7),b.fill(),k.chord&&(b.strokeStyle="#ffffffaa",b.lineWidth=2*N,b.beginPath(),b.arc(K,X-18*N,26*N,0,7),b.stroke()),Ps(b,l[k.lane],K,X-18*N,48*N)}for(let k=p.length-1;k>=0;k--){let z=p[k];z.t+=D;let N=z.t/.4,K=o[z.lane];b.globalAlpha=Math.max(0,1-N),b.strokeStyle=z.p?"#ffd27a":"#9fe0cf",b.lineWidth=4,b.beginPath(),b.ellipse(K,n,34+N*40,13+N*15,0,0,7),b.stroke();for(let X=0;X<6;X++){let ee=X/6*Math.PI*2;b.fillStyle=c[z.lane],b.beginPath(),b.arc(K+Math.cos(ee)*N*60,n-14+Math.sin(ee)*N*26-N*20,3.5,0,7),b.fill()}b.globalAlpha=1,z.t>.4&&p.splice(k,1)}b.strokeStyle="#d9b07a",b.lineWidth=6,b.lineCap="round",b.beginPath(),b.moveTo(40,528),b.lineTo(320,528),b.stroke();for(let k=0;k<4;k++){let z=b.createLinearGradient(0,508,0,548);z.addColorStop(0,"#fbe3b8"),z.addColorStop(1,"#d99a55"),Dt(b,62+k*62,508,54,40,12),b.fillStyle=z,b.fill()}let Q=Math.min(1,S/30);b.strokeStyle="#d33a2c",b.lineWidth=5,b.beginPath();for(let k=0;k<=40*Q;k++)b.lineTo(66+k*6,514+k%2*26);b.stroke(),Dt(b,10,10,110,34,17),b.fillStyle="#ffffffcc",b.fill(),Yt(b,`\u23F1 ${Math.max(0,Math.ceil(t-M))}\uCD08`,65,27,15),Dt(b,220,10,130,34,17),b.fillStyle="#ffffffcc",b.fill(),Yt(b,`\uC810\uC218 ${g}`,285,27,15,"#e0457b"),x>1&&Yt(b,`${x} COMBO`,360/2,70+U*-4,24+U*4,"#ffd27a",900),M<0&&Yt(b,M<-.6?"\uC900\uBE44~":"\uC2DC\uC791!",360/2,260,34,"#fff",900),zo(f,b,D)}}}var OS={grill:LS,parfait:DS,order:NS,serving:US,rhythm:FS},od=[["grill","\u{1F361}","\uB5A1\uAF2C\uCE58 \uAD7D\uAE30","\uAF2C\uCE58 3\uAC1C \uB3D9\uC2DC\uC5D0 \uAD7D\uAE30"],["parfait","\u{1F368}","\uD30C\uB974\uD398 \uD0D1 \uC313\uAE30","\uB531 \uB9DE\uCDB0 \uB192\uC774 \uC313\uAE30"],["order","\u{1F92B}","\uC0AC\uC7A5\uB2D8 \uBAB0\uB798 \uC8FC\uBB38\uBC1B\uAE30","\uC678\uC6B0\uACE0\xB7\uB208\uCE58 \uBCF4\uAE30"],["serving","\u2615","\uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14","\uC9C4\uC9DC \uCE74\uD398\uC5D0\uC11C \uC74C\uB8CC \uBC30\uB2EC"],["rhythm","\u{1F3B5}","\uB5A1\uAF2C\uCE58 \uC18C\uC2A4 \uB9AC\uB4EC\uAC8C\uC784","3D \uB808\uC778 \uBC15\uC790 \uB9DE\uCD94\uAE30"]];function g0({showToast:i}){let t=(g=>document.getElementById(g))("mini"),n=null,s=null,r=0,a=0,o=null,l=!1,c=g=>{try{return+localStorage.getItem("sh-best-"+g)||0}catch{return 0}},h=(g,x)=>{try{localStorage.setItem("sh-best-"+g,x)}catch{}};function u(g,x){s=g,o=x||null,l=!1,n=OS[g](),t.innerHTML=`<div class="mcard"><div class="ghead"><b>${n.title}</b><span class="mbest">\uCD5C\uACE0 ${c(s)}</span><button class="x" data-a="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="mstage"><canvas width="${360*2}" height="${560*2}"></canvas>
        <div class="mintro"><p>${n.desc}</p><button class="go" data-a="start">\u25B6 \uC2DC\uC791!</button></div></div>
      <div class="mbtns">${n.buttons.map((m,S)=>`<button data-b="${S}" class="${m.cls||""}">${m.label}</button>`).join("")}</div></div>`,t.hidden=!1}function f(){t.querySelector(".mintro").remove(),vh();let g=t.querySelector("canvas"),x=g.getContext("2d");x.setTransform(2,0,0,2,0,0);let m=0;a=performance.now();let S=y=>{if(!n)return;let w=Math.min(.05,(y-a)/1e3);a=y,m+=w;let T=n.update(w);if(n.draw(x,w,m),T&&!l)return p(T);r=requestAnimationFrame(S)};r=requestAnimationFrame(S)}function p(g){l=!0,cancelAnimationFrame(r);let x=c(s),m=g.score>x;m&&h(s,g.score),wn.win();let S=document.createElement("div");S.className="mintro",S.innerHTML=`<h3>${m?"\u{1F389} \uCD5C\uACE0 \uAE30\uB85D!":"\uC218\uACE0\uD588\uC5B4\uC694! \u2728"}</h3><p class="mscore">${g.score}\uC810</p><p>${g.msg}</p><p class="mprev">\uCD5C\uACE0 \uAE30\uB85D ${Math.max(x,g.score)}\uC810</p>
      <button class="go" data-a="again">\u{1F501} \uB2E4\uC2DC \uD558\uAE30</button><button class="gsub" data-a="close">${o?"\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30":"\uB2EB\uAE30"}</button>`,t.querySelector(".mstage").appendChild(S),t.querySelector(".mbest").textContent=`\uCD5C\uACE0 ${Math.max(x,g.score)}`}function v(){cancelAnimationFrame(r),n=null,t.hidden=!0,t.innerHTML="";let g=o;o=null,g&&g(l)}t.addEventListener("click",g=>{let x=g.target.closest("button");if(x){if(x.dataset.a==="start"&&f(),x.dataset.a==="close"&&v(),x.dataset.a==="again"){let m=o;o=null,u(s,m),f()}if(x.dataset.b!==void 0&&n){let m=n.buttons[+x.dataset.b];m.act&&m.act()}}}),t.addEventListener("pointerdown",g=>{let x=g.target.closest("[data-b]");if(x&&n){let T=n.buttons[+x.dataset.b];T.down&&(g.preventDefault(),T.down());return}let m=g.target.closest("canvas");if(!m||!n||t.querySelector(".mintro"))return;let S=m.getBoundingClientRect(),y=(g.clientX-S.left)*360/S.width,w=(g.clientY-S.top)*560/S.height;n.tapAt?n.tapAt(y,w):n.pointer?n.pointer(y,!0):n.tap&&n.tap()});let M=g=>{if(!n)return;let x=g.target.closest&&g.target.closest("[data-b]");if(x){let m=n.buttons[+x.dataset.b];m.up&&m.up()}else n.pointer&&n.pointer.length&&n.pointer(0,!1)};return t.addEventListener("pointerup",M),t.addEventListener("pointercancel",M),t.addEventListener("pointerleave",M),addEventListener("keydown",g=>{if(!(t.hidden||!n)){if(g.code==="Escape")return v();if(t.querySelector(".mintro")&&!l&&(g.code==="Space"||g.code==="Enter"))return g.preventDefault(),f();n.key&&(g.preventDefault(),n.key(g.code,!0))}}),addEventListener("keyup",g=>{!t.hidden&&n&&n.key&&n.keyUp&&n.key(g.code,!1)}),{open:u,get isOpen(){return!t.hidden},result(g,x,m){i(`${g} \xB7 ${x}\uC810 ${m||""}`)}}}var yh={title:"\uBB35\uCC0C\uBE60 \uC2B9\uB9AC \uCFE0\uD3F0",benefit:"\uC18C\uD488 10% \uD560\uC778",note:"\uC624\uD504\uB77C\uC778 \uB9E4\uC7A5 \uACC4\uC0B0\uB300\uC5D0\uC11C \uC9C1\uC6D0\uC5D0\uAC8C \uBCF4\uC5EC \uC8FC\uC138\uC694",days:30},oa={muk:{emo:"\u270A",name:"\uBB35"},jji:{emo:"\u270C\uFE0F",name:"\uCC0C"},ppa:{emo:"\u{1F590}\uFE0F",name:"\uBE60"}},x0={muk:"jji",jji:"ppa",ppa:"muk"},v0=i=>i[Math.floor(Math.random()*i.length)],_0=i=>new Promise(e=>setTimeout(e,i));function y0({showToast:i,npcs:e,capture:t,views:n,minis:s,treasure:r,serving:a}){let o=z=>document.getElementById(z),l=e.find(z=>z.id==="shop"),c=e.find(z=>z.id==="cafe"),h=(z,N=3500)=>{l&&(clearTimeout(h.t),l.el.textContent=z,h.t=setTimeout(()=>l.el.textContent="\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}",N))},u=o("mjp"),f=null,p=!1;function v(){f={me:0,boss:0,round:1,attacker:null,log:"\uAC00\uC704\uBC14\uC704\uBCF4\uB85C \uACF5\uACA9\uD560 \uC0AC\uB78C\uC744 \uC815\uD574\uC694!"},u.hidden=!1,g("?","?"),h("\uBB35\uCC0C\uBE60 \uD55C \uD310 \uD574\uC694! \uC0BC\uC138\uD310\uC774\uC5D0\uC694 \u270A\u270C\uFE0F\u{1F590}\uFE0F",5e3)}let M=()=>{u.hidden=!0,f=null};function g(z,N,K=!1){let X=f.attacker==="me"?"\uB0B4\uAC00 \uACF5\uACA9 \uC911 \u{1F525}":f.attacker==="boss"?"\uC0AC\uC7A5\uB2D8\uC774 \uACF5\uACA9 \uC911 \u{1F525}":"\uAC00\uC704\uBC14\uC704\uBCF4!";u.innerHTML=`<div class="gcard">
      <div class="ghead"><b>\u270A \uC0AC\uC7A5\uB2D8\uACFC \uBB35\uCC0C\uBE60 \uC0BC\uC138\uD310</b><button class="x" data-g="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="gscore"><span>\uB098 <i>${f.me}</i></span><small>${f.round}\uD310\uC9F8 \xB7 2\uBC88 \uBA3C\uC800 \uC774\uAE30\uBA74 \uC2B9\uB9AC</small><span><i>${f.boss}</i> \uC0AC\uC7A5\uB2D8</span></div>
      <div class="garena ${K?"shake":""}"><div><em>${z}</em><small>\uB098</small></div><b>VS</b><div><em>${N}</em><small>\uC0AC\uC7A5\uB2D8</small></div></div>
      <p class="gturn">${X}</p><p class="glog">${f.log}</p>
      ${f.done?f.done==="win"?`<div class="gcoupon"><img alt="\uCFE0\uD3F0" src="${y().toDataURL("image/png")}"><button class="go" data-g="coupon">\u{1F4F2} \uCFE0\uD3F0 \uC774\uBBF8\uC9C0 \uC800\uC7A5</button><button class="gsub" data-g="close">\uB2EB\uAE30</button></div>`:'<button class="go" data-g="again">\u{1F501} \uB2E4\uC2DC \uB3C4\uC804</button>':`<div class="ghands">${Object.entries(oa).map(([ee,ve])=>`<button data-h="${ee}" ${p?"disabled":""}><em>${ve.emo}</em>${ve.name}</button>`).join("")}</div>`}
    </div>`}async function x(z){if(p||!f||f.done)return;p=!0;let N=v0(Object.keys(oa));for(let ee of["muk","jji","ppa"])f.log=f.attacker?`${oa[ee].name}!`:["\uAC00\uC704","\uBC14\uC704","\uBCF4!"][Object.keys(oa).indexOf(ee)],g("\u270A","\u270A",!0),await _0(260);let K=oa[z],X=oa[N];if(!f.attacker)z===N?f.log=`\uB458 \uB2E4 ${K.name}! \uB2E4\uC2DC \uAC00\uC704\uBC14\uC704\uBCF4 \u{1F648}`:(f.attacker=x0[z]===N?"me":"boss",f.log=f.attacker==="me"?"\uB0B4\uAC00 \uC774\uACBC\uC5B4\uC694! \uC774\uC81C \uB0B4\uAC00 \uACF5\uACA9, \uAC19\uC740 \uAC78 \uB0B4\uAC8C \uB9CC\uB4E4\uC5B4\uC694":"\uC0AC\uC7A5\uB2D8\uC774 \uC774\uACBC\uC5B4\uC694! \uC0AC\uC7A5\uB2D8 \uACF5\uACA9, \uB2E4\uB978 \uAC78 \uB0B4\uC57C \uBC84\uD168\uC694");else if(z===N){let ee=f.attacker==="me";if(ee?f.me++:f.boss++,f.log=ee?`\uB458 \uB2E4 ${K.name}! \uB0B4\uAC00 \uC774\uBC88 \uD310 \uC2B9\uB9AC \u{1F389}`:`\uB458 \uB2E4 ${K.name}! \uC0AC\uC7A5\uB2D8\uC774 \uC774\uBC88 \uD310 \uC2B9\uB9AC \u{1F61D}`,h(ee?"\uC557 \uC84C\uB2E4\u2026! \u{1F633}":"\uC81C\uAC00 \uC774\uACBC\uC8E0? \u{1F60E}"),f.attacker=null,f.round++,(f.me>=2||f.boss>=2)&&(f.done=f.me>=2?"win":"lose",f.log=f.done==="win"?`${f.me} : ${f.boss} \uC0BC\uC138\uD310 \uC2B9\uB9AC! \uCFE0\uD3F0\uC744 \uB4DC\uB9B4\uAC8C\uC694 \u{1F381}`:`${f.me} : ${f.boss} \uC544\uC27D\uAC8C \uC84C\uC5B4\uC694\u2026 \uB2E4\uC2DC \uB3C4\uC804\uD574 \uBCFC\uAE4C\uC694?`,h(f.done==="win"?"\uCD95\uD558\uD574\uC694! \uCFE0\uD3F0 \uB4DC\uB9B4\uAC8C\uC694 \u{1F381}":"\uB2E4\uC74C\uC5D0 \uB610 \uB3C4\uC804\uD574\uC694! \u{1F606}",6e3),f.done==="win")){S();try{localStorage.setItem("sh-coupon",JSON.stringify(m))}catch{}}}else f.attacker=x0[z]===N?"me":"boss",f.log=`${K.name} vs ${X.name} \u2192 ${f.attacker==="me"?"\uACF5\uACA9\uAD8C\uC774 \uB098\uC5D0\uAC8C!":"\uACF5\uACA9\uAD8C\uC774 \uC0AC\uC7A5\uB2D8\uAED8!"}`;p=!1,g(K.emo,X.emo)}let m=null;function S(){let z="SH-"+Math.random().toString(36).slice(2,6).toUpperCase()+"-"+String(Date.now()%1e4).padStart(4,"0"),N=new Date(Date.now()+yh.days*864e5);m={code:z,issued:aa(),until:`${N.getFullYear()}.${String(N.getMonth()+1).padStart(2,"0")}.${String(N.getDate()).padStart(2,"0")}`}}function y(){m||S();let z=1080,N=600,K=document.createElement("canvas");K.width=z,K.height=N;let X=K.getContext("2d"),ee=X.createLinearGradient(0,0,z,N);ee.addColorStop(0,"#ffe3ef"),ee.addColorStop(1,"#e4f6ea"),X.fillStyle=ee,X.fillRect(0,0,z,N),X.fillStyle="#ffffff66";for(let be=30;be<N;be+=60)for(let _e=be/60%2?30:60;_e<z;_e+=60)X.beginPath(),X.arc(_e,be,10,0,7),X.fill();X.fillStyle="#fffdfb",X.beginPath(),X.roundRect(40,40,z-80,N-80,36),X.fill(),X.setLineDash([14,10]),X.strokeStyle="#f48fb9",X.lineWidth=5,X.beginPath(),X.roundRect(56,56,z-112,N-112,28),X.stroke(),X.setLineDash([]),X.strokeStyle="#f3c6d8",X.lineWidth=3,X.beginPath(),X.moveTo(760,80),X.lineTo(760,N-80),X.stroke(),X.textAlign="left",X.fillStyle="#f27fae",X.font='700 40px "Gamja Flower", sans-serif',X.fillText("\uC218\uC9D1\uC218\uC9D1 \xD7 \uC218\uC787\uD574\uD53C",100,130),X.fillStyle="#4a3f66",X.font='900 34px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',X.fillText(yh.title+" \u270A\u270C\uFE0F\u{1F590}\uFE0F",100,190),X.fillStyle="#e0457b",X.font='900 84px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',X.fillText(yh.benefit,100,310),X.fillStyle="#7a6c99",X.font='600 26px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',X.fillText(yh.note,100,380),X.fillText(`\uBC1C\uAE09 ${m.issued} \xB7 ${m.until}\uAE4C\uC9C0 \xB7 1\uC778 1\uD68C`,100,420),X.fillStyle="#4a3f66",X.font="800 30px ui-monospace, Consolas, monospace",X.fillText(m.code,100,480);let ve=new Image;return ve.src=gi("staff",1),ve.complete&&X.drawImage(ve,790,150,240,240),X.textAlign="center",X.fillStyle="#f27fae",X.font='700 34px "Gamja Flower", sans-serif',X.fillText("\uC0AC\uC7A5\uB2D8\uC744 \uC774\uACBC\uC5B4\uC694!",910,440),K}{let z=new Image;z.src=gi("staff",1)}u.addEventListener("click",async z=>{let N=z.target.closest("button");if(!N)return;if(N.dataset.h)return x(N.dataset.h);let K=N.dataset.g;if(K==="close"&&M(),K==="again"&&v(),K==="coupon"){let X=await ra(y(),`suithappy-coupon-${m.code}.jpg`);i(X==="downloaded"?"\u{1F4BE} \uCFE0\uD3F0\uC744 \uC800\uC7A5\uD588\uC5B4\uC694":X==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}});let w=o("spot"),T=Array.from({length:n},(z,N)=>N),d=null,_=[],I=null,A=Object.keys(lr).flatMap(z=>lr[z].stickers.map((N,K)=>[z,K]));function C(z){I=z||null,_.length||(_=T.slice().sort(()=>Math.random()-.5)),w.hidden=!1,O()}function P(){w.hidden=!0;let z=I;I=null,d=null,z&&z(!1)}async function O(){_.length||(_=T.slice().sort(()=>Math.random()-.5));let z=_.pop();w.innerHTML=`<div class="spwrap"><div class="ghead"><b>\u{1F50D} \uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30</b><span class="spcount">\uBD88\uB7EC\uC624\uB294 \uC911\u2026</span><button class="gsub" data-s="hint">\u{1F4A1} \uD78C\uD2B8</button><button class="x" data-s="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="sppair"><div class="spimg"><canvas></canvas><small>\uC6D0\uB798 \uADF8\uB9BC</small></div><div class="spimg"><canvas></canvas><small>\uB2E4\uB978 \uACF3 5\uAC1C\uB97C \uCC3E\uC544\uC694</small></div></div>
      <p class="spmsg">${I?"\uB2E4 \uCC3E\uC73C\uBA74 \uC8FC\uBB38\uD55C \uBA54\uB274\uAC00 \uB098\uC640\uC694! \u2615":"\uB450 \uADF8\uB9BC \uC911 \uC544\uBB34 \uCABD\uC774\uB098 \uB2E4\uB978 \uACF3\uC744 \uB20C\uB7EC\uC694"}</p></div>`,await _0(30);let N=t(z),[K,X]=w.querySelectorAll("canvas"),ee=N.width,ve=N.height;for(let be of[K,X])be.width=ee,be.height=ve,be.getContext("2d").drawImage(N,0,0);d={W:ee,H:ve,ca:K,cb:X,base:K.getContext("2d").getImageData(0,0,ee,ve),diffs:b(X,ee,ve),found:0,miss:0},D(),B()}function b(z,N,K){let X=z.getContext("2d"),ee=[],ve=["hue","flip","sticker","erase","swap","hue","sticker"].sort(()=>Math.random()-.5),be=0;for(;ee.length<5&&be++<400;){let _e=Math.round(N*(.08+Math.random()*.05)),Ie=Math.round(N*.05+Math.random()*(N*.9-_e)),re=Math.round(K*.06+Math.random()*(K*.88-_e));if(ee.some(ye=>Math.abs(ye.x-Ie)<(ye.s+_e)/2+30&&Math.abs(ye.y-re)<(ye.s+_e)/2+30))continue;let me=ve[ee.length],Me={x:Ie,y:re,s:_e,k:me,hit:!1};if(me==="hue"||me==="swap"){let ye=X.getImageData(Ie,re,_e,_e),ce=ye.data,ke=(100+Math.random()*140)*Math.PI/180,Ue=Math.cos(ke),We=Math.sin(ke),Ze=[.299+.701*Ue+.168*We,.587-.587*Ue+.33*We,.114-.114*Ue-.497*We,.299-.299*Ue-.328*We,.587+.413*Ue+.035*We,.114-.114*Ue+.292*We,.299-.3*Ue+1.25*We,.587-.588*Ue-1.05*We,.114+.886*Ue-.203*We];for(let Je=0;Je<ce.length;Je+=4){let Y=ce[Je],bt=ce[Je+1],et=ce[Je+2];if(me==="swap"){ce[Je]=et,ce[Je+2]=Y;continue}ce[Je]=Ze[0]*Y+Ze[1]*bt+Ze[2]*et,ce[Je+1]=Ze[3]*Y+Ze[4]*bt+Ze[5]*et,ce[Je+2]=Ze[6]*Y+Ze[7]*bt+Ze[8]*et}X.putImageData(ye,Ie,re)}else if(me==="flip"){let ye=document.createElement("canvas");ye.width=ye.height=_e,ye.getContext("2d").drawImage(z,Ie,re,_e,_e,0,0,_e,_e),X.save(),X.translate(Ie+_e,re),X.scale(-1,1),X.drawImage(ye,0,0),X.restore(),Math.random()<.5&&(X.save(),X.translate(Ie,re+_e),X.scale(1,-1),X.drawImage(ye,0,0),X.restore())}else if(me==="sticker"){let ye=new Image,[ce,ke]=v0(A);ye.src=gi(ce,ke),ye.decode().then(()=>X.drawImage(ye,Ie,re,_e,_e)).catch(()=>{})}else{let ye=Ie+_e+12<N-_e?Ie+_e+12:Ie-_e-12,ce=document.createElement("canvas");ce.width=ce.height=_e;let ke=ce.getContext("2d");ke.drawImage(z,ye,re,_e,_e,0,0,_e,_e);let Ue=ke.createRadialGradient(_e/2,_e/2,_e*.3,_e/2,_e/2,_e*.5);Ue.addColorStop(0,"#000"),Ue.addColorStop(1,"rgba(0,0,0,0)"),ke.globalCompositeOperation="destination-in",ke.fillStyle=Ue,ke.fillRect(0,0,_e,_e),X.drawImage(ce,Ie,re)}ee.push(Me)}return ee}function D(){for(let z of[d.ca,d.cb]){let N=z.getContext("2d");for(let K of d.diffs)K.hit&&(N.lineWidth=Math.max(4,d.W/200),N.strokeStyle="#ff3d8b",N.shadowColor="#fff",N.shadowBlur=6,N.beginPath(),N.arc(K.x+K.s/2,K.y+K.s/2,K.s*.72,0,7),N.stroke(),N.shadowBlur=0)}}let B=()=>{let z=w.querySelector(".spcount");z&&d&&(z.textContent=`\uCC3E\uC740 \uACF3 ${d.found} / 5`)};w.addEventListener("click",z=>{let N=z.target.closest("button");if(N&&N.dataset.s==="close")return P();if(N&&N.dataset.s==="next")return O();if(N&&N.dataset.s==="done"){let Ie=I;I=null,w.hidden=!0,d=null,Ie&&Ie(!0);return}if(N&&N.dataset.s==="hint"&&d){let Ie=d.diffs.find(re=>!re.hit);if(!Ie)return;for(let re of[d.ca,d.cb]){let me=re.getBoundingClientRect(),Me=document.createElement("div");Me.className="sphint";let ye=me.width/d.W;Object.assign(Me.style,{left:me.left+(Ie.x-Ie.s*.3)*ye+"px",top:me.top+(Ie.y-Ie.s*.3)*ye+"px",width:Ie.s*1.6*ye+"px",height:Ie.s*1.6*ye+"px"}),document.body.appendChild(Me),setTimeout(()=>Me.remove(),1400)}return}let K=z.target.closest("canvas");if(!K||!d)return;let X=K.getBoundingClientRect(),ee=(z.clientX-X.left)*d.W/X.width,ve=(z.clientY-X.top)*d.H/X.height,be=d.W*.02,_e=d.diffs.find(Ie=>!Ie.hit&&ee>Ie.x-be&&ee<Ie.x+Ie.s+be&&ve>Ie.y-be&&ve<Ie.y+Ie.s+be);if(_e)_e.hit=!0,d.found++,D(),B(),d.found===5&&(w.querySelector(".spmsg").innerHTML=`\u{1F389} \uB2E4 \uCC3E\uC558\uC5B4\uC694! ${d.miss?`(\uD5DB\uD074\uB9AD ${d.miss}\uBC88)`:"\uD55C \uBC88\uB3C4 \uC548 \uD2C0\uB838\uC5B4\uC694!"}
          ${I?'<button class="go" data-s="done">\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30</button>':'<button class="go" data-s="next">\uB2E4\uC74C \uADF8\uB9BC \u25B6</button>'}`);else{d.miss++;let Ie=z.clientX,re=z.clientY,me=document.createElement("div");me.className="spmiss",me.textContent="\u2715",Object.assign(me.style,{left:Ie+"px",top:re+"px"}),document.body.appendChild(me),setTimeout(()=>me.remove(),600)}});let U=o("gmenu"),W=null,V=[["mjp","\u270A\u270C\uFE0F\u{1F590}\uFE0F","\uBB35\uCC0C\uBE60 \uC0BC\uC138\uD310","\uC774\uAE30\uBA74 \uC624\uD504\uB77C\uC778 \uCFE0\uD3F0 \u{1F381}"],["spot","\u{1F50D}","\uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30","\uB9E4\uC7A5 \uC18D \uB2E4\uB978 \uACF3 5\uAC1C"],["treasure","\u2B50","\uBE44\uBC00 \uBCF4\uBB3C\uCC3E\uAE30","\uC228\uC740 \uBCC4\uC0AC\uD0D5 7\uAC1C \xB7 90\uCD08"]];function F(z="shop",N=null){W=N;let K=z==="shop",X=K?V:od;U.innerHTML=`<div class="gcard"><div class="ghead"><b>${K?"\u{1F380} \uC18C\uD488\uC0F5 \uC0AC\uC7A5\uB2D8":"\u2615 \uCE74\uD398 \uC9C1\uC6D0"}</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${K?"\uC5B4\uC11C \uC624\uC138\uC694! \uC2EC\uC2EC\uD558\uBA74 \uC800\uB791 \uAC8C\uC784 \uD55C \uD310 \uD560\uB798\uC694? \u{1F60A}":N?"\uAC8C\uC784 \uD55C \uD310 \uD558\uB294 \uB3D9\uC548 \uBA54\uB274 \uB9CC\uB4E4\uC5B4 \uB458\uAC8C\uC694! \u{1F353}":"\uCE74\uD398 \uC54C\uBC14 \uCCB4\uD5D8 \uD574 \uBCFC\uB798\uC694? \uC7AC\uBC0C\uC5B4\uC694 \u{1F606}"}</p>
      <div class="gpick ${X.length>3?"many":""}">${X.map(([ee,ve,be,_e])=>`<button data-m="${ee}"><em>${ve}</em><b>${be}</b><small>${_e}</small></button>`).join("")}</div></div>`,U.hidden=!1,K?h("\uAC8C\uC784 \uD55C \uD310 \uD560\uB798\uC694? \u{1F606}",4e3):c&&(c.el.textContent="\uC54C\uBC14 \uCCB4\uD5D8 \uD574 \uBCFC\uB798\uC694? \u{1F606}",setTimeout(()=>c.el.textContent="\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615",4e3))}U.addEventListener("click",z=>{let N=z.target.closest("button");if(!N)return;U.hidden=!0;let K=N.dataset.m,X=W;if(W=null,K==="close"){X&&X(!1);return}K==="mjp"?v():K==="spot"?C(X):K==="treasure"||K==="again-treasure"?r.start():K==="serving"||K==="again-serving"?(H=X,a.start()):od.some(ee=>ee[0]===K)&&s.open(K,X)});let H=null;function $({score:z,delivered:N,spilled:K,trips:X}){let ee=H;H=null,ee&&ee(!0);let ve=0;try{ve=+localStorage.getItem("sh-best-serving")||0}catch{}let be=z>ve;if(be)try{localStorage.setItem("sh-best-serving",z)}catch{}U.innerHTML=`<div class="gcard"><div class="ghead"><b>\u2615 \uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${X}\uBC88 \uC655\uBCF5\uD574\uC11C \uC74C\uB8CC ${N}\uC794\uC744 \uBC30\uB2EC\uD588\uC5B4\uC694!${K?` (\uC3DF\uC740 \uC794 ${K}\uAC1C \u{1F4A6})`:" \uD55C \uC794\uB3C4 \uC548 \uC3DF\uC558\uC5B4\uC694 \u2728"}</p>
      <p class="mscore">${z}\uC810</p><p class="mprev">${be?"\u{1F3C6} \uCD5C\uACE0 \uAE30\uB85D!":`\uCD5C\uACE0 \uAE30\uB85D ${ve}\uC810`}</p>
      <button class="go" data-m="again-serving">\u{1F501} \uB2E4\uC2DC \uD558\uAE30</button></div>`,U.hidden=!1}function Q({found:z,total:N,time:K,done:X}){let ee=0;try{ee=+localStorage.getItem("sh-best-treasure")||0}catch{}let ve=z*100+(X?Math.max(0,90-K)*5:0),be=ve>ee;if(be)try{localStorage.setItem("sh-best-treasure",ve)}catch{}U.innerHTML=`<div class="gcard"><div class="ghead"><b>\u2B50 \uBE44\uBC00 \uBCF4\uBB3C\uCC3E\uAE30</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${X?`\u{1F389} ${K}\uCD08 \uB9CC\uC5D0 \uBCC4\uC0AC\uD0D5 ${N}\uAC1C\uB97C \uBAA8\uB450 \uCC3E\uC558\uC5B4\uC694!`:`\uBCC4\uC0AC\uD0D5 ${N}\uAC1C \uC911 ${z}\uAC1C\uB97C \uCC3E\uC558\uC5B4\uC694!`}</p>
      <p class="mscore">${ve}\uC810</p><p class="mprev">${be?"\u{1F3C6} \uCD5C\uACE0 \uAE30\uB85D!":`\uCD5C\uACE0 \uAE30\uB85D ${ee}\uC810`}</p>
      <button class="go" data-m="again-treasure">\u{1F501} \uB2E4\uC2DC \uD558\uAE30</button></div>`,U.hidden=!1}addEventListener("keydown",z=>{z.code==="Escape"&&(U.hidden?u.hidden?w.hidden||P():M():U.hidden=!0)});let k=z=>l&&Math.hypot(z.x-l.x,z.z-l.z)<2.8;return{get open(){return!u.hidden||!w.hidden||!U.hidden},mjp:v,spot:C,menu:F,owner:l,cafeStaff:c,treasureResult:Q,servingResult:$,update(z,N){o("mjp-btn").hidden=!k(z)||!!N||!u.hidden||!U.hidden,o("cafegame-btn").hidden=!(c&&Math.hypot(z.x-c.x,z.z-c.z)<2.8)||!!N||!U.hidden}}}var BS=7,M0=90,kS=.8;function S0({scene3d:i,data:e,canOccupy:t,player:n,camera:s,showToast:r,onFinish:a}){let l=(_=>document.getElementById(_))("treasure-hud"),c=!1,h=[],u=0,f=0,p=2,v=new bs;for(let _=0;_<10;_++){let I=_*Math.PI/5+Math.PI/2,A=_%2?.045:.1,C=Math.cos(I)*A,P=Math.sin(I)*A;_?v.lineTo(C,P):v.moveTo(C,P)}let M=new Ks(v,{depth:.035,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2});M.center();let g=["#ffd54a","#ff9cc0","#9fe0cf","#c6a6f0","#ffd54a","#a9d4f5","#ffb37a"],x=(()=>{let _=document.createElement("canvas");_.width=_.height=64;let I=_.getContext("2d"),A=I.createRadialGradient(32,32,0,32,32,32);return A.addColorStop(0,"rgba(255,240,180,1)"),A.addColorStop(1,"rgba(255,240,180,0)"),I.fillStyle=A,I.fillRect(0,0,64,64),new ei(_)})();function m(){let _=[],I=(b,D)=>_.every(B=>Math.hypot(B.x-b,B.z-D)>1.6),A=e.seats.slice().sort(()=>Math.random()-.5);for(let b of A){if(_.length>=3)break;I(b[0],b[1])&&_.push({x:b[0],z:b[1],y:.16,where:"\uC758\uC790 \uC544\uB798"})}let C=e.blocks.filter(b=>b[2]>.15&&b[3]>.15).sort(()=>Math.random()-.5);for(let b of C){if(_.length>=5)break;let[D,B,U,W,V]=b,F=Math.floor(Math.random()*4),H=Math.cos(V),$=Math.sin(V),Q=F<2?(F?1:-1)*(U+.3):S(-U,U),k=F>=2?(F===3?1:-1)*(W+.3):S(-W,W),z=D+Q*H-k*$,N=B+Q*$+k*H;t(z,N,.22)&&I(z,N)&&_.push({x:z,z:N,y:.35,where:"\uC9C4\uC5F4\uB300 \uC606"})}let P=e.floor.map(b=>b[0]),O=e.floor.map(b=>b[1]);for(let b=0;_.length<BS&&b<600;b++){let D=S(Math.min(...P),Math.max(...P)),B=S(Math.min(...O),Math.max(...O));t(D,B,.3)&&!t(D,B,.75)&&I(D,B)&&_.push({x:D,z:B,y:.25,where:"\uBCBD\xB7\uCEE4\uD2BC \uADFC\uCC98"})}return _}function S(_,I){return _+Math.random()*(I-_)}function y(){for(let _ of h)i.remove(_.g);h=[]}function w(){y(),c=!0,u=M0,f=0,p=2,m().forEach((_,I)=>{let A=new tt;A.position.set(_.x,_.y,_.z);let C=new je(M,new Ot({color:new Le(g[I%g.length]).multiplyScalar(1.6),toneMapped:!1})),P=new Ba(new zr({map:x,color:g[I%g.length],transparent:!0,opacity:.7,depthWrite:!1,blending:qn}));P.scale.setScalar(.5),A.add(P,C),i.add(A),h.push({g:A,m:C,glow:P,p:_,got:!1,pop:0,ph:Math.random()*6})}),r(`\u2B50 \uBCC4\uC0AC\uD0D5 ${h.length}\uAC1C\uB97C 90\uCD08 \uC548\uC5D0 \uCC3E\uC544\uC694! \uAC00\uAE4C\uC774 \uAC00\uBA74 \uC8FC\uC6CC\uC694`),d()}function T(_){c=!1,l.hidden=!0,setTimeout(y,600),a&&a({found:f,total:h.length,time:Math.round(M0-u),done:_})}function d(){l.hidden=!c,c&&(l.innerHTML=`<b>\u2B50 ${f} / ${h.length}</b><span>\u23F1 ${Math.ceil(u)}\uCD08</span><button data-t="hint" ${p?"":"disabled"}>\u{1F4A1} \uD78C\uD2B8 ${p}</button><button data-t="quit">\uADF8\uB9CC</button>`)}return l.addEventListener("click",_=>{let I=_.target.closest("button");if(I){if(I.dataset.t==="quit")return T(!1);if(I.dataset.t==="hint"&&p>0){p--;let A=h.filter(C=>!C.got).sort((C,P)=>Math.hypot(C.p.x-n.x,C.p.z-n.z)-Math.hypot(P.p.x-n.x,P.p.z-n.z))[0];if(A){let C=new G;s.getWorldDirection(C);let P=A.p.x-n.x,O=A.p.z-n.z,b=Math.hypot(P,O),D=Math.atan2(C.x*O-C.z*P,C.x*P+C.z*O),B=Math.abs(D)<.5?"\uC55E\uCABD":Math.abs(D)>2.5?"\uB4A4\uCABD":D>0?"\uC67C\uCABD":"\uC624\uB978\uCABD";r(`\u{1F4A1} \uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uBCC4\uC0AC\uD0D5: ${B}\uC73C\uB85C \uC57D ${b.toFixed(1)}m \xB7 ${A.p.where}`),A.flash=2.5}d()}}}),{start:w,get active(){return c},get spots(){return h.map(_=>_.p)},update(_,I){for(let A of h)A.m.rotation.y+=_*2,A.g.position.y=A.p.y+Math.sin(I*2.5+A.ph)*.04,A.flash&&(A.flash=Math.max(0,A.flash-_),A.glow.scale.setScalar(.5+Math.sin(A.flash*12)*.25+.3)),A.got&&(A.pop+=_*3,A.g.scale.setScalar(Math.max(.001,1+A.pop*1.5)*(1-Math.min(1,A.pop))),A.g.position.y+=A.pop*.5);if(c){u-=_;for(let A of h)!A.got&&Math.hypot(A.p.x-n.x,A.p.z-n.z)<kS&&(A.got=!0,f++,d(),r(f===h.length?"\u{1F389} \uBCC4\uC0AC\uD0D5\uC744 \uBAA8\uB450 \uCC3E\uC558\uC5B4\uC694!":`\u2B50 \uCC3E\uC558\uB2E4! ${f} / ${h.length}`),Ln(880,.1,"triangle",.12),Ln(1320,.14,"triangle",.1,.07));if(f===h.length)return T(!0);if(u<=0)return T(!1);Math.ceil(u)!==d.last&&(d.last=Math.ceil(u),d())}}}}var zS=60,Mh=.42,b0=[["melonSoda",{}],["chocoMilk",{}],["peachTea",{}],["creamSoda",{}],["bananaMilk",{}],["latte",{}]];function T0({scene3d:i,data:e,hero:t,player:n,npcs:s,showToast:r,onFinish:a}){let o=N=>document.getElementById(N),l=o("serve-hud"),c=s.find(N=>N.id==="cafe"),h=!1,u=0,f=0,p=0,v=0,M=0,g=[],x=null,m=!1,S=0,y={roll:0,vroll:0,pitch:0,vpitch:0,px:0,pz:0,vx:0,vz:0,face:0,bump:1,bob:0,dt:0,drift:0,dcur:0},w=new G,T=new tt;T.visible=!1,i.add(T);let d=new $t({color:"#ffc2da",roughness:.5}),_=new je(new kt(.42,.02,.28),d);T.add(_);for(let N of[-1,1]){let K=new je(new kt(.42,.035,.015),d);K.position.set(0,.02,.135*N),T.add(K)}let I=new tt;I.position.y=.012,T.add(I);let A=new no(.42,.55,40);A.rotateX(-Math.PI/2);let C=N=>{let K=new tt,X=new je(A,new Ot({color:N,transparent:!0,opacity:.85,toneMapped:!1,depthWrite:!1}));X.position.y=.02,K.add(X);let ee=new je(new Ss(.13,.3,4),new Ot({color:new Le(N).multiplyScalar(1.6),toneMapped:!1}));ee.rotation.x=Math.PI,ee.position.y=1.5,K.add(ee);let ve=new je(new ot(.5,.55,1.2,24,1,!0),new Ot({color:N,transparent:!0,opacity:.22,side:Bt,depthWrite:!1,blending:qn}));return ve.position.y=.6,K.add(ve),K.userData={ring:X,cone:ee},K.visible=!1,i.add(K),K},P=C("#9fe0cf"),O=C("#ff8fb7"),b=()=>c?{x:c.x-1.6,z:c.z}:{x:e.cafe[0],z:e.cafe[1]},D=[];for(let N of e.seats){if(N[1]<2.5||N[0]>4.5)continue;let K=N[0]+Math.sin(N[2])*.5,X=N[1]+Math.cos(N[2])*.5;D.some(ee=>Math.hypot(ee.x-K,ee.z-X)<.9)||D.push({x:K,z:X,seat:N})}let B=[];function U(){I.clear(),g=[];for(let K=0;K<3;K++){let[X,ee]=b0[Math.floor(Math.random()*b0.length)],ve=Bo(X,ee);ve.g.scale.setScalar(.66),ve.g.position.set((K-1)*.12,0,K%2?.04:-.03),I.add(ve.g),g.push({g:ve.g,k:X,o:ee,fall:0})}m=!0,y.roll=y.pitch=y.vroll=y.vpitch=y.dcur=0,y.dt=1.2;let N=D.filter(K=>Math.hypot(K.x-n.x,K.z-n.z)>2.2);x=(N.length?N:D)[Math.floor(Math.random()*(N.length||D.length))],O.position.set(x.x,0,x.z),O.visible=!0,P.visible=!1,Ln(660,.08),Ln(990,.1,"triangle",.1,.06),r("\u{1F964} \uC74C\uB8CC\uB97C \uBC1B\uC558\uC5B4\uC694! \uBC18\uC9DD\uC774\uB294 \uD14C\uC774\uBE14\uAE4C\uC9C0 \uC870\uC2EC\uC870\uC2EC \uAC78\uC5B4\uAC00\uC694")}function W(){let N=g.filter(ee=>!ee.fall).length;g.filter(ee=>!ee.fall).forEach((ee,ve)=>{let be=Bo(ee.k,ee.o);be.g.scale.setScalar(1.05),be.g.position.set(x.x+(ve-1)*.14,.74,x.z+(ve%2?.05:-.05)),i.add(be.g),B.push({g:be.g,t:3})}),I.clear(),g=[],m=!1,p+=N,M++;let K=N*100+(N===3?50:0);f+=K,O.visible=!1;let X=b();P.position.set(X.x,0,X.z),P.visible=!0,[523,659,784].forEach((ee,ve)=>Ln(ee,.14,"triangle",.12,ve*.07)),r(N===3?`\u2728 \uD55C \uBC29\uC6B8\uB3C4 \uC548 \uD758\uB838\uC5B4\uC694! +${K} \xB7 \uCE74\uC6B4\uD130\uB85C \uB3CC\uC544\uAC00\uC694`:`\uC11C\uBE59 \uC644\uB8CC ${N}\uC794 +${K} \xB7 \uCE74\uC6B4\uD130\uB85C \uB3CC\uC544\uAC00\uC694`),c&&(c.el.textContent="\uC798\uD588\uC5B4\uC694! \uB2E4\uC74C \uC74C\uB8CC \uC900\uBE44\uB410\uC5B4\uC694 \u2615")}function V(){let N=g.find(X=>!X.fall);if(!N)return;N.fall=.001,v++,y.vroll*=-.3,y.roll*=.4,y.vpitch*=-.3,y.pitch*=.4,Ln(220,.25,"sawtooth",.08);let K=g.filter(X=>!X.fall).length;if(r(K?`\u{1F4A6} \uC557 \uD55C \uC794 \uC3DF\uC558\uC5B4\uC694! \uB0A8\uC740 \uC74C\uB8CC ${K}\uC794`:"\u{1F4A6} \uB2E4 \uC3DF\uC558\uC5B4\uC694\u2026 \uCE74\uC6B4\uD130\uC5D0\uC11C \uB2E4\uC2DC \uBC1B\uC544 \uC640\uC694"),!K){m=!1,O.visible=!1;let X=b();P.position.set(X.x,0,X.z),P.visible=!0}}function F(){if(!D.length)return r("\uCE74\uD398 \uD14C\uC774\uBE14\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC5B4\uC694");h=!0,$=null,u=zS,f=0,p=0,v=0,M=0;let N=b();n.x=N.x,n.z=N.z,n.face=n.yaw=-Math.PI/2,n.pitch=-.32,y.px=n.x,y.pz=n.z,y.vx=y.vz=0,y.face=n.yaw,U(),Q()}function H(){h=!1,m=!1,T.visible=!1,I.clear(),g=[],O.visible=!1,P.visible=!1,l.hidden=!0,a&&a({score:f,delivered:p,spilled:v,trips:M})}let $=null;function Q(){if(l.hidden=!h,!h)return;$||(l.innerHTML=`<div class="sv-top"><b></b><span class="sv-t"></span><span class="sv-cups"></span><button data-s="quit">\uADF8\uB9CC</button></div>
        <div class="sv-row"><div class="sv-dir"><i>\u2B06</i><small></small></div><div class="sv-meter"><i></i><em></em></div><div class="sv-lvl"><i></i></div></div>`,$={b:l.querySelector("b"),t:l.querySelector(".sv-t"),c:l.querySelector(".sv-cups"),m:l.querySelector(".sv-meter i"),l:l.querySelector(".sv-lvl i"),meter:l.querySelector(".sv-meter"),di:l.querySelector(".sv-dir i"),dd:l.querySelector(".sv-dir small")});let N=g.filter(re=>!re.fall).length,K=Ho(y.roll/Mh,-1.1,1.1),X=Ho(y.pitch/Mh,-1.1,1.1);$.b.textContent=`\u2615 ${f}\uC810`,$.t.textContent=`\u23F1 ${Math.ceil(u)}\uCD08`,$.c.textContent=m?"\u{1F964}".repeat(N)+"\xB7".repeat(3-N):"\uCE74\uC6B4\uD130\uB85C \uB3CC\uC544\uAC00\uC694!";let ee=m?x:b(),ve=ee.x-n.x,be=ee.z-n.z,_e=Math.atan2(ve,be)-n.yaw;_e=Math.atan2(Math.sin(_e),Math.cos(_e)),$.di.style.transform=`rotate(${-_e}rad)`,$.dd.textContent=`${Math.hypot(ve,be).toFixed(1)}m`,$.m.style.left=`${50+K*45}%`,$.l.style.transform=`translate(${K*15}px, ${-X*15}px)`;let Ie=Math.max(Math.abs(K),Math.abs(X))>.72;$.meter.classList.toggle("danger",Ie),$.l.parentNode.classList.toggle("danger",Ie)}l.addEventListener("click",N=>{let K=N.target.closest("[data-s]");K&&K.dataset.s==="quit"&&H()});let k=o("serve-bal");k.addEventListener("pointerdown",N=>{let K=N.target.closest("[data-b]");K&&(N.preventDefault(),S=+K.dataset.b)});let z=()=>S=0;return k.addEventListener("pointerup",z),k.addEventListener("pointercancel",z),k.addEventListener("pointerleave",z),addEventListener("keydown",N=>{h&&(N.code==="KeyZ"&&(S=-1),N.code==="KeyC"&&(S=1))}),addEventListener("keyup",N=>{(N.code==="KeyZ"||N.code==="KeyC")&&(S=0)}),{start:F,get active(){return h},get target(){return x},get tilt(){return[y.roll,y.pitch]},place(N,K){if(!T.visible)return;let X=Math.sin(K),ee=Math.cos(K),ve=Math.sin(y.bob)*.012;T.position.set(N.position.x+X*.5,N.position.y-.36+Math.abs(ve),N.position.z+ee*.5),T.rotation.set(0,K,0),T.rotateX(y.pitch),T.rotateZ(-y.roll+ve*.6)},update(N,K){for(let ce=B.length-1;ce>=0;ce--){let ke=B[ce];ke.t-=N,ke.t<.5&&ke.g.scale.setScalar(1.05*Math.max(.001,ke.t*2)),ke.t<=0&&(i.remove(ke.g),B.splice(ce,1))}for(let ce of[P,O])ce.visible&&(ce.userData.cone.position.y=1.5+Math.sin(K*4)*.1,ce.userData.cone.rotation.y+=N*2,ce.userData.ring.material.opacity=.55+Math.sin(K*5)*.3);if(k.hidden=!h||!m,!h)return;u-=N;let X=(n.x-y.px)/Math.max(N,.001),ee=(n.z-y.pz)/Math.max(N,.001),ve=(X-y.vx)/Math.max(N,.001),be=(ee-y.vz)/Math.max(N,.001),_e=n.yaw-y.face;_e=Math.atan2(Math.sin(_e),Math.cos(_e))/Math.max(N,.001),y.px=n.x,y.pz=n.z,y.vx=X,y.vz=ee,y.face=n.yaw;let Ie=Math.sin(n.yaw),re=Math.cos(n.yaw),me=Ho(ve*Ie+be*re,-12,12),Me=Ho(ve*re-be*Ie,-12,12),ye=Math.hypot(X,ee);if(m){let ce=ye>.25;y.bump-=N;let ke=0;y.bump<=0&&(y.bump=ce?.35+Math.random()*.5:.9+Math.random(),ke=(Math.random()-.5)*(ce?2.2:.5)),y.dt-=N,y.dt<=0&&(y.dt=.9+Math.random()*1.2,y.drift=(Math.random()<.5?-1:1)*(ce?1.1+Math.random()*.9:.3+Math.random()*.4)),y.dcur+=(y.drift-y.dcur)*Math.min(1,N*2.5),y.vroll+=(-y.roll*4.5-y.vroll*2+y.dcur+Me*.2+Ho(_e,-5,5)*ye*.55+S*1.8)*N+ke*.7,y.vpitch+=(-y.pitch*6-y.vpitch*2.4-me*.13)*N+ke*.35,y.roll+=y.vroll*N,y.pitch+=y.vpitch*N,(Math.abs(y.roll)>Mh||Math.abs(y.pitch)>Mh)&&V(),y.bob+=N*ye*9}for(let ce of g)ce.fall&&(ce.fall+=N,ce.g.position.y-=ce.fall*.08,ce.g.rotation.z+=N*6*Math.sign(y.roll||1),ce.fall>.6&&(ce.g.visible=!1));if(T.visible=m||g.some(ce=>ce.fall&&ce.fall<.6),m&&x&&Math.hypot(n.x-x.x,n.z-x.z)<1.05&&W(),!m){let ce=b();Math.hypot(n.x-ce.x,n.z-ce.z)<.9&&U()}if(u<=0)return H();Q()}}}function Ho(i,e,t){return Math.max(e,Math.min(t,i))}function HS(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=new ei(i);return n.colorSpace=Rt,n}function E0({scene3d:i,data:e,storeRoot:t,isTouch:n}){let s=e.ceiling||2.9,r=e.floor.map(W=>W[0]),a=e.floor.map(W=>W[1]),o=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)],l=(W,V)=>{let F=!1,H=e.floor;for(let $=0,Q=H.length-1;$<H.length;Q=$++){let[k,z]=H[$],[N,K]=H[Q];z>V!=K>V&&W<(N-k)*(V-z)/(K-z)+k&&(F=!F)}return F},c=HS(),h=n?140:260,u=new Float32Array(h*3),f=new Float32Array(h*3),p=new Float32Array(h),v=["#ffffff","#ffd6e7","#d9f5e6","#e3dcff","#fff1c9"].map(W=>new Le(W));for(let W=0;W<h;W++){let V,F;do V=o[0]+Math.random()*(o[2]-o[0]),F=o[1]+Math.random()*(o[3]-o[1]);while(!l(V,F));u.set([V,.3+Math.random()*(s-.5),F],W*3);let H=v[W%v.length];f.set([H.r,H.g,H.b],W*3),p[W]=Math.random()*100}let M=new At;M.setAttribute("position",new qt(u,3)),M.setAttribute("color",new qt(f,3));let g=new Ms(M,new Yi({size:.07,map:c,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:qn,sizeAttenuation:!0}));g.frustumCulled=!1,g.renderOrder=5,i.add(g);let x=u.slice(),m=[],S=e.floor,y=(o[0]+o[2])/2,w=(o[1]+o[3])/2;for(let W=0;W<S.length;W++){let[V,F]=S[W],[H,$]=S[(W+1)%S.length],Q=Math.hypot(H-V,$-F);if(Q<1.2)continue;let k=-($-F)/Q,z=(H-V)/Q,N=(V+H)/2,K=(F+$)/2;l(N+k*.2,K+z*.2)||(k=-k,z=-z);let X=Math.max(1,Math.round(Q/1.15)),ee=6;for(let ve=0;ve<X;ve++)for(let be=0;be<ee;be++){let _e=(ve+be/ee)/X,Ie=be/ee,re=V+(H-V)*_e+k*.07,me=F+($-F)*_e+z*.07,Me=s-.14-Math.sin(Ie*Math.PI)*.16;l(re,me)&&m.push([re,Me,me])}}let T=["#fff4d6","#ffc2da","#c9f2dc","#fff4d6","#d9ccff"].map(W=>new Le(W)),d=new Ot({color:new Le(2.8,2.8,2.8),toneMapped:!1}),_=new $i(new Zt(.032,10,8),d,m.length),I=new Ye,A=new Le;m.forEach(([W,V,F],H)=>{I.makeTranslation(W,V,F),_.setMatrixAt(H,I),_.setColorAt(H,T[H%T.length])}),_.frustumCulled=!1,i.add(_);let C=new At().setFromPoints(m.flatMap((W,V)=>V&&Math.hypot(W[0]-m[V-1][0],W[2]-m[V-1][2])<.4?[new G(...m[V-1]),new G(...W)]:[]));i.add(new $s(C,new ys({color:"#b7a6c9",transparent:!0,opacity:.6})));let P=new At;P.setAttribute("position",new qt(new Float32Array(m.flat()),3));let O=new Float32Array(m.length*3);m.forEach((W,V)=>{let F=T[V%T.length];O.set([F.r,F.g,F.b],V*3)}),P.setAttribute("color",new qt(O,3));let b=new Ms(P,new Yi({size:.3,map:c,vertexColors:!0,transparent:!0,opacity:.75,depthWrite:!1,blending:qn}));b.frustumCulled=!1,i.add(b);let D=[];t.updateMatrixWorld(!0),t.traverse(W=>{if(W.isMesh&&W.material&&W.material.name==="light"){let V=new pn().setFromObject(W);D.push(V.getCenter(new G).setY(V.min.y))}});let B=new Ct({transparent:!0,depthWrite:!1,blending:qn,side:Bt,uniforms:{uColor:{value:new Le("#fff3df")},uStrength:{value:.045}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = uv.y; vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:"uniform vec3 uColor; uniform float uStrength; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN, vV)), 2.5); float a = uStrength * smoothstep(0.0, 1.0, vY) * edge; gl_FragColor = vec4(uColor * a, a); }"}),U=Math.max(1,Math.ceil(D.length/(n?6:10)));return D.filter((W,V)=>V%U===0).forEach(W=>{let V=W.y-.02,F=new je(new ot(.22,.7,V,24,1,!0),B);F.position.set(W.x,V/2,W.z),F.renderOrder=4,i.add(F)}),{update(W,V){let F=M.attributes.position.array;for(let H=0;H<h;H++){let $=p[H],Q=H*3;F[Q]=x[Q]+Math.sin(V*.21+$)*.25,F[Q+1]=x[Q+1]+Math.sin(V*.17+$*1.3)*.18,F[Q+2]=x[Q+2]+Math.cos(V*.19+$*.7)*.25}M.attributes.position.needsUpdate=!0,g.material.opacity=.65+Math.sin(V*1.3)*.15;for(let H=0;H<6;H++){let $=Math.floor(Math.random()*m.length);A.copy(T[$%T.length]).multiplyScalar(.55+Math.random()*.9),_.setColorAt($,A)}_.instanceColor.needsUpdate=!0}}}var Sh=class extends Ws{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new kt;e.deleteAttribute("uv");let t=new $t({side:gn}),n=new $t,s=new Zs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new je(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new $i(e,n,6),o=new Lt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new je(e,la(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new je(e,la(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new je(e,la(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new je(e,la(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new je(e,la(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new je(e,la(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function la(i){return new so({color:0,emissive:16777215,emissiveIntensity:i})}var Ii={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},GS=new ts(-1,1,1,-1,0,1),ld=class extends At{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}},VS=new ld,Li=class{constructor(e){this._mesh=new je(VS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,GS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ca=class extends Dn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xn.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Li(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Go=class extends Dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},bh=class extends Dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Th=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new pe);this._width=n.width,this._height=n.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ca(Ii),this.copyPass.material.blending=hn,this.timer=new fo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Go!==void 0&&(a instanceof Go?n=!0:a instanceof bh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Eh=class extends Dn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Vo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new pe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ye},cameraProjectionMatrixInverse:{value:new Ye},cameraWorldMatrix:{value:new Ye},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new G(-1,-1,-1)},sceneBoxMax:{value:new G(1,1,1)}},vertexShader:`

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
		}`};function w0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=WS(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new G(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Qn(s,e,e);return r.wrapS=Sn,r.wrapT=Sn,r.needsUpdate=!0,r}function WS(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Xo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:cd(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new pe},cameraProjectionMatrixInverse:{value:new Ye},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function cd(i,e,t){let n=XS(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function XS(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new G(Math.cos(r),Math.sin(r),a))}return n}var Ah=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,p=c-u,v=e-f,M=t-p,g,x;v>M?(g=1,x=0):(g=0,x=1);let m=v-g+h,S=M-x+h,y=v-1+2*h,w=M-1+2*h,T=l&255,d=c&255,_=this.perm[T+this.perm[d]]%12,I=this.perm[T+g+this.perm[d+x]]%12,A=this.perm[T+1+this.perm[d+1]]%12,C=.5-v*v-M*M;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[_],v,M));let P=.5-m*m-S*S;P<0?s=0:(P*=P,s=P*P*this._dot(this.grad3[I],m,S));let O=.5-y*y-w*w;return O<0?r=0:(O*=O,r=O*O*this._dot(this.grad3[A],y,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),p=1/6,v=(h+u+f)*p,M=h-v,g=u-v,x=f-v,m=e-M,S=t-g,y=n-x,w,T,d,_,I,A;m>=S?S>=y?(w=1,T=0,d=0,_=1,I=1,A=0):m>=y?(w=1,T=0,d=0,_=1,I=0,A=1):(w=0,T=0,d=1,_=1,I=0,A=1):S<y?(w=0,T=0,d=1,_=0,I=1,A=1):m<y?(w=0,T=1,d=0,_=0,I=1,A=1):(w=0,T=1,d=0,_=1,I=1,A=0);let C=m-w+p,P=S-T+p,O=y-d+p,b=m-_+2*p,D=S-I+2*p,B=y-A+2*p,U=m-1+3*p,W=S-1+3*p,V=y-1+3*p,F=h&255,H=u&255,$=f&255,Q=this.perm[F+this.perm[H+this.perm[$]]]%12,k=this.perm[F+w+this.perm[H+T+this.perm[$+d]]]%12,z=this.perm[F+_+this.perm[H+I+this.perm[$+A]]]%12,N=this.perm[F+1+this.perm[H+1+this.perm[$+1]]]%12,K=.6-m*m-S*S-y*y;K<0?s=0:(K*=K,s=K*K*this._dot3(this.grad3[Q],m,S,y));let X=.6-C*C-P*P-O*O;X<0?r=0:(X*=X,r=X*X*this._dot3(this.grad3[k],C,P,O));let ee=.6-b*b-D*D-B*B;ee<0?a=0:(ee*=ee,a=ee*ee*this._dot3(this.grad3[z],b,D,B));let ve=.6-U*U-W*W-V*V;return ve<0?o=0:(ve*=ve,o=ve*ve*this._dot3(this.grad3[N],U,W,V)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,p,v,M=(e+t+n+s)*l,g=Math.floor(e+M),x=Math.floor(t+M),m=Math.floor(n+M),S=Math.floor(s+M),y=(g+x+m+S)*c,w=g-y,T=x-y,d=m-y,_=S-y,I=e-w,A=t-T,C=n-d,P=s-_,O=I>A?32:0,b=I>C?16:0,D=A>C?8:0,B=I>P?4:0,U=A>P?2:0,W=C>P?1:0,V=O+b+D+B+U+W,F=a[V][0]>=3?1:0,H=a[V][1]>=3?1:0,$=a[V][2]>=3?1:0,Q=a[V][3]>=3?1:0,k=a[V][0]>=2?1:0,z=a[V][1]>=2?1:0,N=a[V][2]>=2?1:0,K=a[V][3]>=2?1:0,X=a[V][0]>=1?1:0,ee=a[V][1]>=1?1:0,ve=a[V][2]>=1?1:0,be=a[V][3]>=1?1:0,_e=I-F+c,Ie=A-H+c,re=C-$+c,me=P-Q+c,Me=I-k+2*c,ye=A-z+2*c,ce=C-N+2*c,ke=P-K+2*c,Ue=I-X+3*c,We=A-ee+3*c,Ze=C-ve+3*c,Je=P-be+3*c,Y=I-1+4*c,bt=A-1+4*c,et=C-1+4*c,ue=P-1+4*c,J=g&255,ge=x&255,de=m&255,Ae=S&255,L=o[J+o[ge+o[de+o[Ae]]]]%32,E=o[J+F+o[ge+H+o[de+$+o[Ae+Q]]]]%32,Z=o[J+k+o[ge+z+o[de+N+o[Ae+K]]]]%32,fe=o[J+X+o[ge+ee+o[de+ve+o[Ae+be]]]]%32,se=o[J+1+o[ge+1+o[de+1+o[Ae+1]]]]%32,xe=.6-I*I-A*A-C*C-P*P;xe<0?h=0:(xe*=xe,h=xe*xe*this._dot4(r[L],I,A,C,P));let Te=.6-_e*_e-Ie*Ie-re*re-me*me;Te<0?u=0:(Te*=Te,u=Te*Te*this._dot4(r[E],_e,Ie,re,me));let oe=.6-Me*Me-ye*ye-ce*ce-ke*ke;oe<0?f=0:(oe*=oe,f=oe*oe*this._dot4(r[Z],Me,ye,ce,ke));let le=.6-Ue*Ue-We*We-Ze*Ze-Je*Je;le<0?p=0:(le*=le,p=le*le*this._dot4(r[fe],Ue,We,Ze,Je));let Se=.6-Y*Y-bt*bt-et*et-ue*ue;return Se<0?v=0:(Se*=Se,v=Se*Se*this._dot4(r[se],Y,bt,et,ue)),27*(h+u+f+p+v)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var ha=class i extends Dn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=w0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ft(this.width,this.height,{type:Gt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ct({defines:Object.assign({},Vo.defines),uniforms:xn.clone(Vo.uniforms),vertexShader:Vo.vertexShader,fragmentShader:Vo.fragmentShader,blending:hn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new io,this.normalMaterial.blending=hn,this.pdMaterial=new Ct({defines:Object.assign({},Xo.defines),uniforms:xn.clone(Xo.uniforms),vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ct({defines:Object.assign({},Wo.defines),uniforms:xn.clone(Wo.uniforms),vertexShader:Wo.vertexShader,fragmentShader:Wo.fragmentShader,blending:hn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ct({uniforms:xn.clone(Ii.uniforms),vertexShader:Ii.vertexShader,fragmentShader:Ii.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:mo,blendDst:Qs,blendEquation:ti,blendSrcAlpha:po,blendDstAlpha:Qs,blendEquationAlpha:ti}),this.blendMaterial=new Ct({uniforms:xn.clone(wh.uniforms),vertexShader:wh.vertexShader,fragmentShader:wh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:cc,blendSrc:mo,blendDst:Qs,blendEquation:ti,blendSrcAlpha:po,blendDstAlpha:Qs,blendEquationAlpha:ti}),this._fsQuad=new Li(null),this._originalClearColor=new Le,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new fi;s.format=pi,s.type=is,this.normalRenderTarget=new Ft(this.width,this.height,{minFilter:Ut,magFilter:Ut,type:Gt,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=cd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Ah,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Qn(s,e,e,On,bn);return r.wrapS=Sn,r.wrapT=Sn,r.needsUpdate=!0,r}};ha.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var qo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Rh=class extends Dn{constructor(){super(),this.isOutputPass=!0,this.uniforms=xn.clone(qo.uniforms),this.material=new Wr({name:qo.name,uniforms:this.uniforms,vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader}),this._fsQuad=new Li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===go?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===er?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===yo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var A0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ua=class i extends Dn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new pe(e.x,e.y):new pe(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(r,a,{type:Gt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ft(r,a,{type:Gt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Ft(r,a,{type:Gt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=A0;this.highPassUniforms=xn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new pe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xn.clone(Ii.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:Ii.vertexShader,fragmentShader:Ii.fragmentShader,premultipliedAlpha:!0,blending:qn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new Ot,this._fsQuad=new Li(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new pe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ct({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new pe(.5,.5)},direction:{value:new pe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};ua.BlurDirectionX=new pe(1,0);ua.BlurDirectionY=new pe(0,1);var $o=class i extends je{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new Le(t.color):new Le(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new Vn,u=new G,f=new G,p=new G,v=new Ye,M=new G(0,0,-1),g=new St,x=new G,m=new G,S=new St,y=new Ye,w=new Ft(r,a,{samples:c,type:Gt}),T=new Ct({name:l.name!==void 0?l.name:"unspecified",uniforms:xn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=w.texture,T.uniforms.color.value=s,T.uniforms.textureMatrix.value=y,this.material=T,this.onBeforeRender=function(d,_,I){let A=this.getReflectionCamera(I);if(f.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(I.matrixWorld),v.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(v),x.subVectors(f,p),x.dot(u)>0===!0&&this.forceUpdate===!1)return;x.reflect(u).negate(),x.add(f),v.extractRotation(I.matrixWorld),M.set(0,0,-1),M.applyMatrix4(v),M.add(p),m.subVectors(f,M),m.reflect(u).negate(),m.add(f),A.position.copy(x),A.up.set(0,1,0),A.up.applyMatrix4(v),A.up.reflect(u),A.lookAt(m),A.far=I.far,A.updateMatrixWorld(),A.projectionMatrix.copy(I.projectionMatrix),A.projectionMatrix.elements[8]*=-1,A.projectionMatrix.elements[12]*=-1,y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(A.projectionMatrix),y.multiply(A.matrixWorldInverse),y.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(A.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let P=A.projectionMatrix;A.isOrthographicCamera?(S.x=(Math.sign(g.x)+P.elements[8])/P.elements[0],S.y=(Math.sign(g.y)+P.elements[9])/P.elements[5],S.z=-I.far,S.w=1):(S.x=(Math.sign(g.x)+P.elements[8])/P.elements[0],S.y=(Math.sign(g.y)+P.elements[9])/P.elements[5],S.z=-1,S.w=(1+P.elements[10])/P.elements[14]),g.multiplyScalar(2/g.dot(S)),P.elements[2]=g.x,P.elements[6]=g.y,A.isOrthographicCamera?(P.elements[10]=g.z-o,P.elements[14]=g.w-1):(P.elements[10]=g.z+1-o,P.elements[14]=g.w),n.visible=!1;let O=d.getRenderTarget(),b=d.xr.enabled,D=d.shadowMap.autoUpdate;d.xr.enabled=!1,d.shadowMap.autoUpdate=!1,d.setRenderTarget(w),d.state.buffers.depth.setMask(!0),d.autoClear===!1&&d.clear(),d.render(_,A),d.xr.enabled=b,d.shadowMap.autoUpdate=D,d.setRenderTarget(O);let B=I.viewport;B!==void 0&&d.state.viewport(B),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),n.material.dispose()},this.getReflectionCamera=function(d){let _=this._reflectionCameras.get(d);return _===void 0&&(_=d.clone(),this._reflectionCameras.set(d,_)),_}}};$o.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Et=i=>document.getElementById(i),Ke={canvas:Et("room"),overlay:Et("overlay"),bar:Et("bar"),pct:Et("pct"),enter:Et("enter"),where:Et("where"),map:Et("map"),toast:Et("toast"),joy:Et("joy"),knob:Et("knob"),err:Et("err")},Kn=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",Kn);var Ht;try{Ht=new eh({canvas:Ke.canvas,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0})}catch(i){throw Ke.err.hidden=!1,Ke.err.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C 3D(WebGL)\uB97C \uCF24 \uC218 \uC5C6\uC5B4\uC694. \uCD5C\uC2E0 Chrome\xB7Safari\xB7Edge\uC5D0\uC11C \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694.",i}Ht.setPixelRatio(Math.min(window.devicePixelRatio||1,Kn?1.5:1.75));Ht.outputColorSpace=Rt;Ht.toneMapping=er;Ht.toneMappingExposure=1.05;Ht.shadowMap.enabled=!0;Ht.shadowMap.type=Js;Ht.shadowMap.autoUpdate=!1;var zt=new Ws,F0=new Le("#e9e2fb");zt.background=F0;zt.fog=new Ua(F0,13,32);var _t=new tn(66,1,.05,60),qS=new na(Ht);zt.environment=qS.fromScene(new Sh,.04).texture;zt.environmentIntensity=.55;zt.add(new lo("#fffafd","#e3d2ec",.7));var vi=new Es("#fff6ec",2.4);vi.position.set(-3.2,9,2.4);vi.target.position.set(0,0,.4);zt.add(vi.target);vi.castShadow=!0;vi.shadow.mapSize.set(Kn?2048:3072,Kn?2048:3072);Object.assign(vi.shadow.camera,{left:-10.5,right:10.5,top:10.5,bottom:-10.5,near:1,far:22});vi.shadow.bias=-4e-4;vi.shadow.normalBias=.025;vi.shadow.radius=5;vi.shadow.blurSamples=12;var O0=new Es("#f1e9ff",.55);O0.position.set(2.5,4,-3);zt.add(O0);zt.add(vi);var B0=l0(),pd={floor:"#e4d6d8",mint:"#cbeebb",trim:"#b2dca0",ceiling:"#f8f3fb",pink:"#f6b7d2",pinkChair:"#f2a6c9",mintChair:"#a9dcbf",shelf:"#fff3e3",blue:"#a9d4f5",white:"#fbf8f2",steel:"#b3b8c6",glass:"#bfe3f0",curtain:"#f2a9c8",greenDrape:"#b9d6a4",greenCloth:"#b7df8f",pegboard:"#f1dfbd",paperA:"#f2b0c2",paperB:"#a9d0ec",paperC:"#f3d08f",paperD:"#c3dca0",paperE:"#cdbcf0",light:"#fffbe9",handle:"#8fb98a",displayWire:"#e6def2",acrylicEdge:"#c9e6f2",labelInk:"#8a78b8",pinkBasket:"#e7a2c4",meshTray:"#cdc4e6",paperWhite:"#fffaf7",line:"#c8b9c9",wood:"#e6bf93",woodDark:"#c99c6e",plushCream:"#fbecc9",plushPink:"#f8b9d3",plushBlue:"#bcdcf6",clothWhite:"#fffbf6"},hd=new Map;function md(i){if(hd.has(i.name))return hd.get(i.name);let e=pd[i.name]?new Le(pd[i.name]):i.color.clone(),t=new $t({color:e,roughness:.72,metalness:0,side:Bt});return(i.name==="steel"||i.name==="handle")&&(t.metalness=.45,t.roughness=.35),i.name==="floor"&&(t.roughness=.5),i.name==="acrylicEdge"&&(t.roughness=.25),i.name==="mirror"&&(t.metalness=1,t.roughness=.04,t.color=new Le("#eef3f7"),t.envMapIntensity=1.4),i.name==="leafGreen"&&(t.color=new Le("#86cc78")),t.name=i.name,i.name==="glass"&&(t.transparent=!0,t.opacity=.32,t.depthWrite=!1,t.roughness=.05,t.metalness=.1),i.name==="light"&&(t.emissive=new Le("#fff6e0"),t.emissiveIntensity=2.6),i.name==="ceiling"&&(t.emissive=new Le("#f3ecf7"),t.emissiveIntensity=.55),(i.name==="curtain"||i.name==="greenCloth")&&(t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb *= 0.88 + 0.12 * te.x * te.y;`)}),hd.set(i.name,t),t}var ud=1.32,$S=.2,R0=2.4,Pe={x:0,z:0,yaw:0,pitch:-.06,face:0},ls=!0,Is=2.4,k0=2.7,Dh=-.5,gd=null;try{gd=localStorage.getItem("sh-look")}catch{}var Jt=Kf(B0,{look:ar.includes(gd)?gd:ar[Math.floor(Math.random()*ar.length)]});zt.add(Jt.root);var pt=null,Jo=!1,da=!1,C0=!1,Yn=null,as=null,xi=null,Nn=null,xd=null,un=null,Ph=null,ur=null,Di=null,P0=()=>Ph&&Ph.isOpen||un&&un.open||Yn&&Yn.open||as&&as.open||xi&&xi.isOpen||Nn&&Nn.active;function Ih(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[a,o]=t[s],[l,c]=t[r];o>e!=c>e&&i<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}var z0=Array.from({length:12},(i,e)=>[Math.cos(e*Math.PI/6),Math.sin(e*Math.PI/6)]);function fr(i,e,t=$S){if(!Ih(i,e,pt.floor))return!1;for(let[n,s]of z0)if(!Ih(i+n*t,e+s*t,pt.floor))return!1;for(let[n,s,r,a,o]of pt.blocks){let l=i-n,c=e-s,h=Math.cos(o),u=Math.sin(o),f=Math.max(0,Math.abs(l*h+c*u)-r),p=Math.max(0,Math.abs(-l*u+c*h)-a);if(f*f+p*p<t*t)return!1}return!0}function YS(i,e,t=.12){if(!Ih(i,e,pt.floor))return!1;for(let[n,s]of z0)if(!Ih(i+n*t,e+s*t,pt.floor))return!1;for(let[n,s,r,a,o]of pt.blocks){if(Math.min(r,a)>.1)continue;let l=i-n,c=e-s,h=Math.cos(o),u=Math.sin(o),f=Math.max(0,Math.abs(l*h+c*u)-r),p=Math.max(0,Math.abs(-l*u+c*h)-a);if(f*f+p*p<t*t)return!1}return!0}function fd(i,e,t=-.06){Kt=null,Pe.x=i[0],Pe.z=i[1],Pe.yaw=Pe.face=Math.atan2(e[0]-Pe.x,e[1]-Pe.z),Pe.pitch=ls?Dh:t,Is=.5}var jo=()=>pt&&pt.scale||1,Lh={entry:()=>fd(pt.spawn,pt.look),display:()=>fd(pt.displayView,pt.displayLook,-.3),cafe:()=>fd(pt.cafe,[-2.6*jo(),3.7*jo()])};async function KS(){let i=fetch("scene.json").then(r=>{if(!r.ok)throw Error("scene.json "+r.status);return r.json()}),e=7907728,t=(async()=>{let r=await fetch("store.json");if(!r.ok)throw Error("store.json "+r.status);let a;if(r.body&&r.body.getReader){let c=r.body.getReader(),h=[],u=0;for(;;){let{done:f,value:p}=await c.read();if(f)break;h.push(p),u+=p.length;let v=Math.min(99,Math.round(u/e*100));Ke.bar.style.width=v+"%",Ke.pct.textContent="\uB9E4\uC7A5 \uBD88\uB7EC\uC624\uB294 \uC911\u2026 "+v+"%"}a=new TextDecoder().decode(await new Blob(h).arrayBuffer())}else a=await r.text();let o=atob(JSON.parse(a)),l=new Uint8Array(o.length);for(let c=0;c<o.length;c++)l[c]=o.charCodeAt(c);return new No().parseAsync(l.buffer,"")})(),[n,s]=await Promise.all([i,t]);pt=n,s.scene.traverse(r=>{if(r.isMesh){r.material=Array.isArray(r.material)?r.material.map(md):md(r.material),r.material.name==="glass"&&(r.renderOrder=2);let a=r.material.name;r.receiveShadow=!0,r.castShadow=!["ceiling","light","glass","floor","curtain"].includes(a),r.matrixAutoUpdate=!1,r.updateMatrix()}}),zt.add(s.scene),Ui=s.scene,ab(s.scene),rb(-.5),sb(),ib(s.scene).catch(r=>console.warn("baked light unavailable",r)),Lh.entry(),lb(),Ph=g0({showToast:ai}),ur=S0({scene3d:zt,data:pt,canOccupy:fr,player:Pe,camera:_t,showToast:ai,onFinish:r=>un.treasureResult(r)}),Di=T0({scene3d:zt,data:pt,hero:Jt,player:Pe,npcs:Ni,showToast:ai,onFinish:r=>{Pe.pitch=ls?Dh:-.06,un.servingResult(r)}}),un=y0({showToast:ai,npcs:Ni,capture:D0,views:yd.length,minis:Ph,treasure:ur,serving:Di}),Yn=c0({scene3d:zt,storeRoot:Ui,data:pt,hero:Jt,npcs:Ni,showToast:ai,isTouch:Kn,canOccupy:fr,playGame:r=>un.menu("cafe",r)}),as=f0({scene3d:zt,hero:Jt,npcs:Ni,showToast:ai,inShop:r=>!pt.seats.some(a=>Math.hypot(r.x-a[0],r.z-a[1])<1.3)&&!Ni.some(a=>a.id==="cafe"&&Math.hypot(r.x-a.x,r.z-a.z)<2.8)}),xi=d0({showToast:ai}),Nn=m0({hero:Jt,mirrors:Zo,camera:_t,player:Pe,showToast:ai,renderNow:()=>(Jt.root.position.set(Pe.x,0,Pe.z),Jt.root.rotation.y=Pe.face,Jt.root.visible=!0,q0(),zn!=="low"?oi.render():Ht.render(zt,_t),Ht.domElement)}),Et("diary-btn").addEventListener("click",r=>{xi.open(),r.currentTarget.blur()}),xd=E0({scene3d:zt,data:pt,storeRoot:Ui,isTouch:Kn}),Ht.compile(zt,_t),Ht.shadowMap.needsUpdate=!0,Jo=!0,Ke.bar.style.width="100%",Ke.pct.textContent="\uC900\uBE44 \uC644\uB8CC",Ke.enter.disabled=!1,Ke.enter.textContent="\uB9E4\uC7A5 \uB4E4\uC5B4\uAC00\uAE30",window.__store={mirrors:Zo,sit:r=>{let a=pt.seats[r];Kt=a,Pe.x=a[0],Pe.z=a[1],Pe.face=a[2],Yn.onSit(a)},get cafe(){return Yn},get shop(){return as},get diary(){return xi},get photo(){return Nn},stand:()=>Kt&&Ko(),get seats(){return pt.seats},player:Pe,setView:r=>Td(r),setQuality:r=>{zn=r,wd()},canOccupy:fr,spots:Lh,keys:An,get entered(){return da},info:()=>Ht.info.render,bloom:Ed,grade:W0,npcs:Ni,lmFloor:_d,get root(){return Ui},shot:r=>D0(r),get treasure(){return ur},get serving(){return Di},set camD(r){k0=r}}}KS().catch(i=>{console.error(i),Ke.pct.textContent="\uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694.",Ke.enter.textContent="\uB2E4\uC2DC \uC2DC\uB3C4",Ke.enter.disabled=!1,Ke.enter.onclick=()=>location.reload()});Ke.enter.addEventListener("click",()=>{Jo&&(da=!0,Ke.overlay.classList.add("gone"),setTimeout(()=>Ke.overlay.hidden=!0,450),ai(Kn?"\uC67C\uCABD \uC544\uB798 \uC6D0\uC73C\uB85C \uAC77\uACE0, \uD654\uBA74\uC744 \uB4DC\uB798\uADF8\uD574 \uCE74\uBA54\uB77C\uB97C \uB3CC\uB824\uC694":"WASD\uB85C \uAC77\uACE0, \uB9C8\uC6B0\uC2A4 \uB4DC\uB798\uADF8\uB85C \uCE74\uBA54\uB77C\uB97C \uB3CC\uB824\uC694 \xB7 V \uC2DC\uC810 \uC804\uD658"))});var An=new Set,jS=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","KeyQ","KeyE"]);addEventListener("keydown",i=>{i.target.closest&&i.target.closest("input,textarea")||!jS.has(i.code)||i.altKey||i.ctrlKey||i.metaKey||(i.preventDefault(),An.add(i.code))});addEventListener("keyup",i=>An.delete(i.code));addEventListener("blur",()=>{An.clear(),fn.x=fn.y=0});var Yo=new Map;Ke.canvas.addEventListener("pointerdown",i=>{if(da&&!(i.pointerType==="mouse"&&i.button!==0)){Yo.set(i.pointerId,{x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,t:performance.now()});try{Ke.canvas.setPointerCapture(i.pointerId)}catch{}Ke.canvas.classList.add("dragging")}});Ke.canvas.addEventListener("pointermove",i=>{let e=Yo.get(i.pointerId);if(!e)return;let t=i.pointerType==="mouse"?.0042:.0065;Pe.yaw-=(i.clientX-e.x)*t,Pe.pitch=Ai.clamp(Pe.pitch-(i.clientY-e.y)*t,ls?-1.1:-1.05,ls?-.12:.9),e.x=i.clientX,e.y=i.clientY});var Md=i=>{let e=Yo.get(i.pointerId);e&&i.type==="pointerup"&&Math.hypot(i.clientX-e.sx,i.clientY-e.sy)<9&&performance.now()-e.t<450&&eb(i.clientX,i.clientY),Yo.delete(i.pointerId),Yo.size||Ke.canvas.classList.remove("dragging")};Ke.canvas.addEventListener("pointerup",Md);Ke.canvas.addEventListener("pointercancel",Md);Ke.canvas.addEventListener("lostpointercapture",Md);Ke.canvas.addEventListener("contextmenu",i=>i.preventDefault());var fn={id:null,x:0,y:0,cx:0,cy:0};Ke.joy.addEventListener("pointerdown",i=>{if(fn.id!==null)return;i.preventDefault();let e=Ke.joy.getBoundingClientRect();fn.id=i.pointerId,fn.cx=e.left+e.width/2,fn.cy=e.top+e.height/2;try{Ke.joy.setPointerCapture(i.pointerId)}catch{}H0(i)});function H0(i){if(i.pointerId!==fn.id)return;let e=Ke.joy.clientWidth*.36,t=i.clientX-fn.cx,n=i.clientY-fn.cy,s=Math.hypot(t,n);s>e&&(t*=e/s,n*=e/s),fn.x=t/e,fn.y=n/e,Ke.knob.style.transform=`translate(${t}px, ${n}px)`}Ke.joy.addEventListener("pointermove",H0);var Sd=i=>{i.pointerId===fn.id&&(fn.id=null,fn.x=fn.y=0,Ke.knob.style.transform="")};Ke.joy.addEventListener("pointerup",Sd);Ke.joy.addEventListener("pointercancel",Sd);Ke.joy.addEventListener("lostpointercapture",Sd);document.querySelectorAll("[data-spot]").forEach(i=>i.addEventListener("click",()=>{Jo&&Lh[i.dataset.spot](),i.blur()}));var vd=Et("burger"),G0=Et("spots"),bd=i=>{G0.hidden=!i,vd.setAttribute("aria-expanded",String(i)),vd.setAttribute("aria-label",i?"\uBA54\uB274 \uB2EB\uAE30":"\uBA54\uB274 \uC5F4\uAE30")};vd.addEventListener("click",i=>{bd(G0.hidden),i.currentTarget.blur()});document.querySelectorAll("[data-spot]").forEach(i=>i.addEventListener("click",()=>bd(!1)));Ke.canvas.addEventListener("pointerdown",()=>bd(!1));function ZS(i){Kt=i,Pe.x=i[0],Pe.z=i[1],Pe.face=i[2],Pe.yaw=i[2],kn.set(0,0),Yn&&Yn.onSit(i)}function JS(){let i=Ni.find(e=>e.id==="cafe");return i&&pt.seats.filter(e=>e[1]>3).sort((e,t)=>Math.hypot(e[0]-i.x,e[1]-i.z)-Math.hypot(t[0]-i.x,t[1]-i.z))[0]||pt.seats[0]}document.querySelectorAll("[data-nav]").forEach(i=>i.addEventListener("click",()=>{if(i.blur(),!Jo||!da)return;xi&&xi.isOpen&&xi.close();let e=i.dataset.nav;if(e==="shop")Kt&&Ko(),as.shopping?Et("basket-btn").click():as.open||(Et("shop-btn").hidden?(Lh.display(),setTimeout(()=>Et("shop-btn").click(),60)):Et("shop-btn").click());else if(e==="cafe"){Kt&&Ko();let t=Ni.find(n=>n.id==="cafe");t&&(Pe.x=t.x-1.55,Pe.z=t.z,Pe.yaw=Pe.face=Math.PI/2,Pe.pitch=ls?Dh:-.06,Kt=null),setTimeout(()=>Et("order-btn").click(),60)}else if(e==="diary")Kt||ZS(JS()),xi.open();else if(e==="photo"){Kt&&Ko();let t=Zo[0];if(!t)return;Pe.x=t.c.x-1.2,Pe.z=t.c.z,Pe.yaw=Pe.face=Math.PI/2,Et("photo-btn").click()}else e==="mine"&&as.openMine()}));Et("look-toggle").addEventListener("click",i=>{if(i.currentTarget.blur(),Nn&&Nn.active)return;let e=ar[(ar.indexOf(Jt.look)+1)%ar.length];Jt.setLook(e),Jt.root.traverse(t=>{t.isMesh&&(t.frustumCulled=!1)});try{localStorage.setItem("sh-look",e)}catch{}ai(`\u{1F457} \uCE90\uB9AD\uD130\uB97C \uBC14\uAFE8\uC5B4\uC694 \xB7 ${o0[e]}`)});Et("mjp-btn").addEventListener("click",i=>{i.currentTarget.blur(),un.menu("shop")});Et("cafegame-btn").addEventListener("click",i=>{i.currentTarget.blur(),un.menu("cafe")});Et("hint-toggle").addEventListener("click",i=>{let e=Et("hint");e.hidden=!e.hidden,i.currentTarget.blur()});var V0=Et("view-toggle");function Td(i){ls=i,Jt.root.visible=i,Pe.pitch=i?Dh:-.06,Is=.5,V0.querySelector(".lbl").textContent=i?"1\uC778\uCE6D":"3\uC778\uCE6D"}V0.addEventListener("click",i=>{Td(!ls),i.currentTarget.blur()});addEventListener("keydown",i=>{i.code==="KeyV"&&da&&!(i.target.closest&&i.target.closest("input,textarea"))&&Td(!ls)});var I0;function ai(i){Ke.toast.textContent=i,Ke.toast.classList.add("on"),clearTimeout(I0),I0=setTimeout(()=>Ke.toast.classList.remove("on"),3600)}var xt=Ke.map?Ke.map.getContext("2d"):null,dd=null;function QS(){if(!Ke.map||Ke.map.hidden||!pt)return;if(!dd){let s=pt.floor.map(l=>l[0]),r=pt.floor.map(l=>l[1]),a=[Math.min(...s),Math.min(...r),Math.max(...s),Math.max(...r)],o=Math.min((Ke.map.width-24)/(a[2]-a[0]),(Ke.map.height-24)/(a[3]-a[1]));dd={s:o,mp:(l,c)=>[Ke.map.width/2+(l-(a[0]+a[2])/2)*o,Ke.map.height/2+(c-(a[1]+a[3])/2)*o]}}let{s:i,mp:e}=dd;xt.clearRect(0,0,Ke.map.width,Ke.map.height),xt.beginPath(),pt.floor.forEach(([s,r],a)=>xt[a?"lineTo":"moveTo"](...e(s,r))),xt.closePath(),xt.fillStyle="#dff3e8",xt.fill(),xt.strokeStyle="#8fc7aa",xt.lineWidth=3,xt.stroke();for(let[s,r,a,o,l,c]of pt.icons)xt.save(),xt.translate(...e(s,r)),xt.rotate(l),xt.fillStyle=pd[c]||"#"+pt.colors[c],xt.strokeStyle="#a89cc4",xt.lineWidth=1.2,xt.fillRect(-a*i/2,-o*i/2,a*i,o*i),xt.strokeRect(-a*i/2,-o*i/2,a*i,o*i),xt.restore();xt.textAlign="center",xt.font="700 19px system-ui, sans-serif",xt.fillStyle="#5d4f7c";for(let[s,[r,a]]of pt.labels)xt.fillText(s,...e(r,a));let[t,n]=e(Pe.x,Pe.z);xt.save(),xt.translate(t,n),xt.rotate(-Pe.yaw),xt.beginPath(),xt.moveTo(0,15),xt.lineTo(-9,-8),xt.lineTo(9,-8),xt.closePath(),xt.fillStyle="#9a72d8",xt.fill(),xt.lineWidth=2.5,xt.strokeStyle="#fff",xt.stroke(),xt.restore()}function Nh(){let i=Ke.canvas.clientWidth,e=Ke.canvas.clientHeight;Ht.setSize(i,e,!1),typeof oi!="undefined"&&(oi.setPixelRatio(Ht.getPixelRatio()),oi.setSize(i,e)),_t.aspect=i/e;let t=74*Math.PI/180,n=2*Math.atan(Math.tan(t/2)/_t.aspect)*180/Math.PI;_t.fov=Math.min(92,Math.max(64,n)),_t.updateProjectionMatrix()}var oi=new Th(Ht,new Ft(1,1,{type:Gt,samples:Kn?2:4}));oi.addPass(new Eh(zt,_t));var os=new ha(zt,_t,1,1);os.output=ha.OUTPUT.Default;os.blendIntensity=1;os.updateGtaoMaterial({radius:.55,distanceExponent:1.3,thickness:1.4,scale:1.25,samples:Kn?8:14});os.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:Kn?8:16});oi.addPass(os);{let i=os.render.bind(os);os.render=(...e)=>{for(let t of Yf)t.visible=!1;i(...e);for(let t of Yf)t.visible=!0}}var Ed=new ua(new pe(256,256),.3,.5,2);oi.addPass(Ed);oi.addPass(new Rh);var W0=new ca({uniforms:{tDiffuse:{value:null},saturation:{value:1.12},contrast:{value:1.05},warmth:{value:.025},lift:{value:.012},vignette:{value:.22}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`});oi.addPass(W0);var zn=Kn?"mid":"high";try{zn=localStorage.getItem("sh-quality")||zn}catch{}var X0=Et("quality-toggle");function wd(){os.enabled=zn==="high",Ed.enabled=zn!=="low",Ht.shadowMap.enabled=zn!=="low",zt.traverse(i=>{i.material&&i.material.needsUpdate!==void 0&&(i.material.needsUpdate=!0)}),Ht.shadowMap.needsUpdate=!0,X0.querySelector(".lbl").textContent={high:"\uACE0\uD654\uC9C8",mid:"\uBCF4\uD1B5",low:"\uAC00\uBCCD\uAC8C"}[zn]}X0.addEventListener("click",i=>{zn={high:"mid",mid:"low",low:"high"}[zn];try{localStorage.setItem("sh-quality",zn)}catch{}wd(),Nh(),i.currentTarget.blur()});wd();new ResizeObserver(Nh).observe(Ke.canvas);Nh();var Kt=null,Ui=null,Ch=new ws,L0=new pe;function eb(i,e){if(!pt||!pt.seats||!Ui)return;let t=Ke.canvas.getBoundingClientRect();if(L0.set((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),Ch.setFromCamera(L0,_t),un&&un.owner&&Ch.intersectObject(un.owner.c.root,!0).length){un.menu("shop");return}if(un&&un.cafeStaff&&Ch.intersectObject(un.cafeStaff.c.root,!0).length){un.menu("cafe");return}let n=Ch.intersectObject(Ui,!0)[0];if(!n)return;let s=null,r=.6;for(let a of pt.seats){let o=Math.hypot(a[0]-n.point.x,a[1]-n.point.z);o<r&&n.point.y<1.1&&(r=o,s=a)}s&&(Kt=s,Pe.x=s[0],Pe.z=s[1],Pe.face=s[2],kn.set(0,0),ai("\uC758\uC790\uC5D0 \uC549\uC558\uC5B4\uC694 \u{1FA91} \uC6C0\uC9C1\uC774\uBA74 \uC77C\uC5B4\uB098\uC694"),Yn&&Yn.onSit(s))}function Ko(){let i=Kt;Kt=null,Yn&&Yn.onStand();let e=i[2]+Math.PI;for(let t of[.45,.6,.8,1,1.25])for(let n of[0,.5,-.5,1,-1,1.6,-1.6]){let s=i[0]+Math.sin(e+n)*t,r=i[1]+Math.cos(e+n)*t;if(fr(s,r)){Pe.x=s,Pe.z=r;return}}}var tb=[/^Perimeter wall/,/^Guest floor$/,/^Ceiling$/,/^Display hall - angled partition$/,/^Cafe partition$/,/^Corridor partition$/,/^Corridor return$/,/^Cafe end wall/,/^Round column/,/^Shop counter - (staff area room|back wall|side wall)/],nb=1.12,_d={value:0};async function ib(i){let e=await fetch("light.json");if(!e.ok)return;let t=await e.json(),n=c=>{let h=atob(c),u=new Uint8Array(h.length);for(let f=0;f<h.length;f++)u[f]=h.charCodeAt(f);return u},s=await new No().parseAsync(n(t.shell).buffer,""),r=await createImageBitmap(new Blob([n(t.lightmap)],{type:"image/jpeg"}),{imageOrientation:"none"}),a=new jt(r);a.flipY=!1,a.colorSpace=Rt,a.needsUpdate=!0,a.anisotropy=4;{let c=document.createElement("canvas");c.width=c.height=64;let h=c.getContext("2d");h.drawImage(r,0,0,64,64);let u=h.getImageData(0,0,64,64).data,f=[];for(let p=0;p<u.length;p+=4)f.push(Math.pow((u[p]*.2126+u[p+1]*.7152+u[p+2]*.0722)/255,2.2));f.sort((p,v)=>p-v),_d.value=f[Math.floor(f.length*.9)]*.85}let o=c=>{c.uniforms.lmFloor=_d,c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
uniform float lmFloor;`).replace("reflectedLight.indirectDiffuse += lightMapTexel.rgb","reflectedLight.indirectDiffuse += max(lightMapTexel.rgb, vec3(lmFloor))")},l=new Map;s.scene.traverse(c=>{if(!c.isMesh)return;let h=Array.isArray(c.material)?c.material[0]:c.material,u=h.name;if(!l.has(u)){let f=md(h),p=new Ot({color:f.color,lightMap:a,lightMapIntensity:t.gain||nb,side:Bt});p.name=u,f.onBeforeCompile&&u==="floor"?p.onBeforeCompile=f.onBeforeCompile:p.onBeforeCompile=o,l.set(u,p)}c.material=l.get(u),c.castShadow=!1,c.receiveShadow=!1}),i.traverse(c=>{let h=(c.name||"").replace(/_/g," ");tb.some(u=>u.test(h))&&c.traverse(u=>{u.isMesh&&(u.visible=!1)})}),zt.add(s.scene),Ht.shadowMap.needsUpdate=!0}function sb(){Ui.updateMatrixWorld(!0);let i=new ws,e=new G,t=new G;for(let n of pt.seats){let s=null;for(let r of[.55,.65,.75])for(let a=0;a<72;a++){let o=a*Math.PI/36;t.set(Math.sin(o),0,Math.cos(o)),e.set(n[0],r,n[1]),i.set(e,t),i.far=.9;let l=i.intersectObject(Ui,!0).find(c=>c.object.visible&&!/chair|mint|trim|pink$/i.test(c.object.material&&c.object.material.name||""));l&&(!s||l.distance<s.d-.01)&&(s={d:l.distance,a:o})}s&&s.d<.8&&(n[2]=Math.atan2(Math.sin(s.a),Math.cos(s.a)))}}function rb(i){Ui.updateMatrixWorld(!0);let e=s=>/^Cafe end - cafe order counter/.test((s&&s.name||"").replace(/_/g," ")),t=[];Ui.traverse(s=>{e(s)&&!e(s.parent)&&t.push(s)});for(let s of t){let r=s.parent.worldToLocal(new G(0,0,0)),a=s.parent.worldToLocal(new G(i,0,0));s.position.add(a.sub(r)),s.updateMatrix(),s.updateMatrixWorld(!0)}for(let s of pt.blocks)Math.abs(s[0]-5.246)<.05&&Math.abs(s[1]-4.508)<.05&&(s[0]+=i);let n=(pt.npcs||[]).find(s=>s.id==="cafe");n&&(n.x=5.55)}var yd=[{p:[6.2,1.5,-4.6],t:[2.5,.8,-1.2]},{p:[.9,1.6,3],t:[-1.5,.7,-2]},{p:[3.4,1.5,3.6],t:[-3,.7,6.2]},{p:[3,1.5,4.5],t:[5.6,1,4.5]},{p:[5.4,1.5,-2.9],t:[4.6,.9,-5.8]},{p:[-6.4,1.6,6],t:[0,.7,2]},{p:[-2,1.7,-3],t:[3,.7,-5.2]},{p:[2.5,2.2,-.5],t:[-4,.4,4]},{p:[-1,1.6,5.8],t:[3,.8,1]},{p:[7,1.5,-2.6],t:[7,.9,2]}];function D0(i){let e=yd[i%yd.length],t=960,n=720,s={p:_t.position.clone(),q:_t.quaternion.clone(),fov:_t.fov,vis:Jt.root.visible};Jt.root.visible=!1,Ht.setSize(t,n,!1),oi.setSize(t,n),_t.aspect=t/n,_t.fov=62,_t.updateProjectionMatrix(),_t.position.set(...e.p),_t.lookAt(...e.t),_t.updateMatrixWorld(),zn!=="low"?oi.render():Ht.render(zt,_t);let r=document.createElement("canvas");return r.width=t,r.height=n,r.getContext("2d").drawImage(Ht.domElement,0,0,t,n),_t.position.copy(s.p),_t.quaternion.copy(s.q),_t.fov=s.fov,Jt.root.visible=s.vis,Nh(),r}var Zo=[];function ab(i){i.updateMatrixWorld(!0),i.traverse(e=>{if(!e.isMesh||!e.material||e.material.name!=="mirror")return;let t=e,n=!1;for(;t;)/leaning.mirror/i.test(t.name.replace(/_/g," "))&&(n=!0),t=t.parent;if(!n)return;let s=new pn().setFromObject(e),r=s.getCenter(new G),a=s.getSize(new G),o=.12,l=new G(-Math.cos(o),Math.sin(o),0),c=Math.max(a.x,a.z)-.02,h=a.y/Math.cos(o)-.02,u=Math.min(window.devicePixelRatio||1,2),f=new $o(new Ki(c,h),{textureWidth:Math.round((Kn?384:640)*u*(c/h)*2),textureHeight:Math.round((Kn?384:640)*u),color:14674158,clipBias:.003});f.position.copy(r).addScaledVector(l,.02),e.visible=!1,f.lookAt(f.position.clone().add(l)),zt.add(f),Zo.push({ref:f,c:r,pane:e})})}function q0(){for(let i of Zo)i.ref.visible=(zn!=="low"||Nn&&Nn.active)&&Math.hypot(Pe.x-i.c.x,Pe.z-i.c.z)<7,i.pane.visible=!i.ref.visible}var Ni=[],ob={cafe:{opt:{look:"cafe"},say:"\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615"},shop:{opt:{look:"shop"},say:"\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}"}};function lb(){for(let i of pt.npcs||[]){let e=ob[i.id];if(!e)continue;let t=Kf(B0,e.opt);t.root.position.set(i.x,0,i.z),t.root.rotation.y=i.face,t.root.scale.setScalar(1.12),t.root.position.y=i.id==="shop"?.15:.2,zt.add(t.root);let n=document.createElement("div");n.className="bubble",n.textContent=e.say,Et("bubbles").appendChild(n),Ni.push({...i,c:t,el:n,yaw:0})}}var fa=new G;function cb(i,e){for(let t of Ni){t.c.animate(i,t.speed||0,e+t.id.length),t.y!==void 0&&(t.c.root.position.set(t.x,t.y,t.z),t.c.root.rotation.y=t.face),t.carry&&(t.c.arms[0].rotation.x=t.c.arms[1].rotation.x=-1.35);let n=Pe.x-t.x,s=Pe.z-t.z,r=Math.hypot(n,s),a=0;if(r<4&&!t.speed&&(a=Math.atan2(n,s)-t.face,a=Math.atan2(Math.sin(a),Math.cos(a)),a=Ai.clamp(a,-.9,.9)),t.yaw+=(a-t.yaw)*Math.min(1,i*5),t.c.head.rotation.y=t.yaw,t.c.head.rotation.x+=((r<4?-.22:0)-t.c.head.rotation.x)*Math.min(1,i*4),r<2.8){fa.set(t.x,1.6,t.z).project(_t);let l=Ke.canvas.getBoundingClientRect(),c=fa.z<1&&Math.abs(fa.x)<1.1&&Math.abs(fa.y)<1.1;t.el.style.transform=`translate(${(fa.x*.5+.5)*l.width}px, ${(-fa.y*.5+.5)*l.height}px) translate(-50%, -100%)`,t.el.classList.toggle("on",c)}else t.el.classList.remove("on")}}var kn=new pe,N0=performance.now(),U0=0;function hb(){let i=jo();return Kt?"\u{1FA91} \uC549\uC544\uC11C \uC26C\uB294 \uC911":Pe.z>1.75*i?"\u2615 \uCE74\uD398 \uC88C\uC11D":Pe.x>3.2*i&&Pe.z<-1.6*i?"\u{1F6AA} \uC785\uAD6C":Pe.x>3*i?"\u{1F380} \uBCF5\uB3C4":"\u{1F9F8} \uC9C4\uC5F4\uB300 \uC0AC\uC774"}function $0(i){let e=Math.min((i-N0)/1e3,.05);if(N0=i,Jo){if(da){let o=(An.has("ArrowLeft")||An.has("KeyQ")?1:0)-(An.has("ArrowRight")||An.has("KeyE")?1:0);Pe.yaw+=o*1.7*e;let l=(An.has("KeyW")||An.has("ArrowUp")?1:0)-(An.has("KeyS")||An.has("ArrowDown")?1:0),c=(An.has("KeyD")?1:0)-(An.has("KeyA")?1:0);fn.id!==null&&(l=-fn.y,c=fn.x);let h=Math.hypot(l,c);h>1&&(l/=h,c/=h),Kt&&h>.25&&Ko(),(Kt||P0())&&(l=0,c=0);let u=An.has("ShiftLeft")||An.has("ShiftRight")?1.6:1,f=Math.sin(Pe.yaw),p=Math.cos(Pe.yaw),v=(l*f-c*p)*R0*u,M=(l*p+c*f)*R0*u,g=1-Math.exp(-e*12);kn.x+=(v-kn.x)*g,kn.y+=(M-kn.y)*g;let x=kn.x*e,m=kn.y*e;Math.abs(x)+Math.abs(m)>1e-5&&(fr(Pe.x+x,Pe.z+m)?(Pe.x+=x,Pe.z+=m):(fr(Pe.x+x,Pe.z)?Pe.x+=x:kn.x=0,fr(Pe.x,Pe.z+m)?Pe.z+=m:kn.y=0));let S=Math.hypot(kn.x,kn.y);if(S>.15){let w=Math.atan2(kn.x,kn.y)-Pe.face;w=Math.atan2(Math.sin(w),Math.cos(w)),Pe.face+=w*Math.min(1,e*12)}Jt.animate(e,S,i/1e3,!!Kt),Yn&&Yn.update(e,Pe,Kt),xd&&xd.update(e,i/1e3),un&&un.update(Pe,Kt),ur&&ur.update(e,i/1e3),Di&&Di.update(e,i/1e3),as&&as.update(Pe,Kt),Nn&&(Nn.update(Kt),Nn.applyPose(i/1e3)),Et("diary-btn").hidden=!Kt||!xi||xi.isOpen,Et("actions").style.visibility=P0()||Di&&Di.active||ur&&ur.active?"hidden":"",cb(e,i/1e3),q0(),!C0&&Pe.z>2*jo()&&Pe.x<3.6*jo()&&(C0=!0,ai("\uCE74\uD398 \uC88C\uC11D\uC5D0 \uB3C4\uCC29\uD588\uC5B4\uC694 \u2615"))}let t=Math.sin(Pe.pitch),n=Math.cos(Pe.pitch),s=Math.sin(Pe.yaw),r=Math.cos(Pe.yaw);if(Jt.root.position.set(Pe.x,0,Pe.z),Jt.root.rotation.y=Pe.face,Nn&&Nn.camera())Jt.root.visible=!0;else if(Di&&Di.active)_t.position.set(Pe.x,ud,Pe.z),_t.lookAt(Pe.x+s*n,ud+t,Pe.z+r*n),Jt.root.visible=!1,Di.place(_t,Pe.yaw);else if(ls){let o=Pe.x,l=.9,c=Pe.z,h=-s,u=-r,f=k0,p=n*f,v=p;for(let m=.2;m<=p;m+=.08)if(!YS(o+h*m,c+u*m)){v=Math.max(.15,m-.15);break}Is+=(v-Is)*Math.min(1,e*(v<Is?18:3));let M=(pt.ceiling||2.65)-.25,g=Math.min(M,l-t*f);_t.position.set(o+h*Is,g,c+u*Is);let x=Ai.clamp(1-Is/p,0,1);_t.lookAt(o+s*x*1.8,l+.05+x*.15,c+r*x*1.8),x>.7&&(_t.position.y=Math.min(M+.03,g+.1)),Jt.root.visible=!0}else{let o=Kt?1.02:ud;_t.position.set(Pe.x,o,Pe.z),_t.lookAt(Pe.x+s*n,o+t,Pe.z+r*n)}zn!=="low"?oi.render():Ht.render(zt,_t),Nn&&Nn.afterRender(Ht.domElement);let a=hb();Ke.where.textContent!==a&&(Ke.where.textContent=a),(U0=(U0+1)%2)===0&&QS()}requestAnimationFrame($0)}requestAnimationFrame($0);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
