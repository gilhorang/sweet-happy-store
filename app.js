(()=>{var Fp=0,Pu=1,Op=2;var Js=1,Bp=2,Kr=3,Ei=0,gn=1,Bt=2,hn=0,jr=1,$n=2,Iu=3,Lu=4,uc=5;var ni=100,kp=101,zp=102,Hp=103,Gp=104,Qs=200,Vp=201,Wp=202,Xp=203,Du=204,Nu=205,go=206,$p=207,xo=208,qp=209,Yp=210,Kp=211,jp=212,Zp=213,Jp=214,Ul=0,Fl=1,Ol=2,Dr=3,Bl=4,kl=5,zl=6,Hl=7,fc=0,Qp=1,em=2,wi=0,vo=1,_o=2,yo=3,Mo=4,So=5,bo=6,er=7,du="attached",tm="detached",Uu=300,tr=301,Zr=302,dc=303,pc=304,Sn=1e3,Jn=1001,Nr=1002,Ut=1003,mc=1004;var nr=1005;var nn=1006,Jr=1007;var ii=1008;var bn=1009,Fu=1010,Ou=1011,Qr=1012,gc=1013,di=1014,qn=1015,Gt=1016,xc=1017,vc=1018,is=1020,Bu=35902,ku=35899,zu=1021,Hu=1022,On=1023,Xi=1026,pi=1027,_c=1028,yc=1029,As=1030,Mc=1031;var Sc=1033,To=33776,Eo=33777,wo=33778,Ao=33779,bc=35840,Tc=35841,Ec=35842,wc=35843,Ac=36196,Rc=37492,Cc=37496,Pc=37488,Ic=37489,Ro=37490,Lc=37491,Dc=37808,Nc=37809,Uc=37810,Fc=37811,Oc=37812,Bc=37813,kc=37814,zc=37815,Hc=37816,Gc=37817,Vc=37818,Wc=37819,Xc=37820,$c=37821,qc=36492,Yc=36494,Kc=36495,jc=36283,Zc=36284,Co=36285,Jc=36286;var Hs=2300,Gs=2301,Dl=2302,pu=2303,mu=2400,gu=2401,xu=2402,nm=2500;var Gu=0,Po=1,ea=2,im=3200;var ta=0,sm=1,ss="",Rt="srgb",Pn="srgb-linear",Na="linear",St="srgb";var Nl=7680;var rm=519,am=512,om=513,lm=514,Vu=515,cm=516,hm=517,Wu=518,Xu=519,$u=35044;var qu="300 es",Qn=2e3,Ur=2001;function rg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ag(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function um(){let i=Fr("canvas");return i.style.display="block",i}var zd={},Or=null;function Ua(...i){let e="THREE."+i.shift();Or?Or("log",e,...i):console.log(e,...i)}function fm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=fm(i);let e="THREE."+i.shift();if(Or)Or("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=fm(i);let e="THREE."+i.shift();if(Or)Or("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function zs(...i){let e=i.join(" ");e in zd||(zd[e]=!0,Ye(...i))}function dm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var pm={[Ul]:Ul,[Ol]:zl,[Bl]:Bl,[Dr]:kl,[Fl]:Fl,[zl]:Ol,[Hl]:Hl,[kl]:Dr},Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hd=1234567,Pa=Math.PI/180,Vs=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Yu(i,e){return(i%e+e)%e}function og(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function lg(i,e,t){return i!==e?(t-i)/(e-i):0}function Ia(i,e,t){return(1-t)*i+t*e}function cg(i,e,t,n){return Ia(i,e,1-Math.exp(-t*n))}function hg(i,e=1){return e-Math.abs(Yu(i,e*2)-e)}function ug(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pg(i,e){return i+Math.random()*(e-i)}function mg(i){return i*(.5-Math.random())}function gg(i){i!==void 0&&(Hd=i);let e=Hd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xg(i){return i*Pa}function vg(i){return i*Vs}function _g(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function yg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*d,o*h,o*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ju(i,e){if(e.constructor===Float32Array)return i;let t=Qc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Zu(i,e){if(e.constructor===Float32Array)return i;let t=Qc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ai={DEG2RAD:Pa,RAD2DEG:Vs,generateUUID:mi,clamp:ut,euclideanModulo:Yu,mapLinear:og,inverseLerp:lg,lerp:Ia,damp:cg,pingpong:hg,smoothstep:ug,smootherstep:fg,randInt:dg,randFloat:pg,randFloatSpread:mg,seededRandom:gg,degToRad:xg,radToDeg:vg,isPowerOfTwo:_g,ceilPowerOfTwo:yg,floorPowerOfTwo:Ku,setQuaternionFromProperEuler:Mg,normalize:Zu,denormalize:ju},sf=class sf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sf.prototype.isVector2=!0;var ye=sf,Wn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],v=r[a+2],S=r[a+3];if(u!==S||l!==f||c!==d||h!==v){let g=l*f+c*d+h*v+u*S;g<0&&(f=-f,d=-d,v=-v,S=-S,g=-g);let x=1-o;if(g<.9995){let m=Math.acos(g),M=Math.sin(m);x=Math.sin(x*m)/M,o=Math.sin(o*m)/M,l=l*x+f*o,c=c*x+d*o,h=h*x+v*o,u=u*x+S*o}else{l=l*x+f*o,c=c*x+d*o,h=h*x+v*o,u=u*x+S*o;let m=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=m,c*=m,h*=m,u*=m}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],v=r[a+3];return e[t]=o*v+h*u+l*d-c*f,e[t+1]=l*v+h*f+c*u-o*d,e[t+2]=c*v+h*d+o*f-l*u,e[t+3]=h*v-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u-f*d*v;break;case"YXZ":this._x=f*h*u+c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u+f*d*v;break;case"ZXY":this._x=f*h*u-c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u-f*d*v;break;case"ZYX":this._x=f*h*u-c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u+f*d*v;break;case"YZX":this._x=f*h*u+c*d*v,this._y=c*d*u+f*h*v,this._z=c*h*v-f*d*u,this._w=c*h*u-f*d*v;break;case"XZY":this._x=f*h*u-c*d*v,this._y=c*d*u-f*h*v,this._z=c*h*v+f*d*u,this._w=c*h*u+f*d*v;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},rf=class rf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kh.copy(this).projectOnVector(e),this.sub(kh)}reflect(e){return this.sub(kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rf.prototype.isVector3=!0;var z=rf,kh=new z,Gd=new Wn,af=class af{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],v=n[8],S=s[0],g=s[3],x=s[6],m=s[1],M=s[4],y=s[7],w=s[2],T=s[5],p=s[8];return r[0]=a*S+o*m+l*w,r[3]=a*g+o*M+l*T,r[6]=a*x+o*y+l*p,r[1]=c*S+h*m+u*w,r[4]=c*g+h*M+u*T,r[7]=c*x+h*y+u*p,r[2]=f*S+d*m+v*w,r[5]=f*g+d*M+v*T,r[8]=f*x+d*y+v*p,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,v=t*u+n*f+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/v;return e[0]=u*S,e[1]=(s*c-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=f*S,e[4]=(h*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=d*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zh.makeScale(e,t)),this}rotate(e){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zh.makeRotation(-e)),this}translate(e,t){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};af.prototype.isMatrix3=!0;var st=af,zh=new st,Vd=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wd=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sg(){let i={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===St&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(s.r=Lr(s.r),s.g=Lr(s.g),s.b=Lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?Na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pn]:{primaries:e,whitePoint:n,transfer:Na,toXYZ:Vd,fromXYZ:Wd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:Vd,fromXYZ:Wd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}var ct=Sg();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pr,Gl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{pr===void 0&&(pr=Fr("canvas")),pr.width=e.width,pr.height=e.height;let s=pr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=pr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Fr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bg=0,Br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hh(s[a].image)):r.push(Hh(s[a]))}else r=Hh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Hh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Gl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var Tg=0,Gh=new z,jt=class i extends Mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Jn,s=Jn,r=nn,a=ii,o=On,l=bn,c=i.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=mi(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Uu;jt.DEFAULT_ANISOTROPY=1;var of=class of{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],v=l[9],S=l[2],g=l[6],x=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-S)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+S)<.1&&Math.abs(v+g)<.1&&Math.abs(c+d+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(d+1)/2,w=(x+1)/2,T=(h+f)/4,p=(u+S)/4,_=(v+g)/4;return M>y&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=p/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=p/r,s=_/r),this.set(n,s,r,t),this}let m=Math.sqrt((g-v)*(g-v)+(u-S)*(u-S)+(f-h)*(f-h));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(u-S)/m,this.z=(f-h)/m,this.w=Math.acos((c+d+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};of.prototype.isVector4=!0;var bt=of,Vl=class extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new jt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends Vl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fa=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wl=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var hc=class hc{constructor(e,t,n,s,r,a,o,l,c,h,u,f,d,v,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,d,v,S,g)}set(e,t,n,s,r,a,o,l,c,h,u,f,d,v,S,g){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=f,x[3]=d,x[7]=v,x[11]=S,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/mr.setFromMatrixColumn(e,0).length(),r=1/mr.setFromMatrixColumn(e,1).length(),a=1/mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,v=o*h,S=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+v*c,t[5]=f-S*c,t[9]=-o*l,t[2]=S-f*c,t[6]=v+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,v=c*h,S=c*u;t[0]=f+S*o,t[4]=v*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-v,t[6]=S+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,v=c*h,S=c*u;t[0]=f-S*o,t[4]=-a*u,t[8]=v+d*o,t[1]=d+v*o,t[5]=a*h,t[9]=S-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,v=o*h,S=o*u;t[0]=l*h,t[4]=v*c-d,t[8]=f*c+S,t[1]=l*u,t[5]=S*c+f,t[9]=d*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,v=o*l,S=o*c;t[0]=l*h,t[4]=S-f*u,t[8]=v*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+v,t[10]=f-S*u}else if(e.order==="XZY"){let f=a*l,d=a*c,v=o*l,S=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+S,t[5]=a*h,t[9]=d*u-v,t[2]=v*u-d,t[6]=o*h,t[10]=S*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eg,e,wg)}lookAt(e,t,n){let s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),us.crossVectors(n,Hn),us.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),us.crossVectors(n,Hn)),us.normalize(),il.crossVectors(Hn,us),s[0]=us.x,s[4]=il.x,s[8]=Hn.x,s[1]=us.y,s[5]=il.y,s[9]=Hn.y,s[2]=us.z,s[6]=il.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],v=n[2],S=n[6],g=n[10],x=n[14],m=n[3],M=n[7],y=n[11],w=n[15],T=s[0],p=s[4],_=s[8],I=s[12],A=s[1],R=s[5],P=s[9],N=s[13],b=s[2],D=s[6],O=s[10],U=s[14],G=s[3],H=s[7],F=s[11],k=s[15];return r[0]=a*T+o*A+l*b+c*G,r[4]=a*p+o*R+l*D+c*H,r[8]=a*_+o*P+l*O+c*F,r[12]=a*I+o*N+l*U+c*k,r[1]=h*T+u*A+f*b+d*G,r[5]=h*p+u*R+f*D+d*H,r[9]=h*_+u*P+f*O+d*F,r[13]=h*I+u*N+f*U+d*k,r[2]=v*T+S*A+g*b+x*G,r[6]=v*p+S*R+g*D+x*H,r[10]=v*_+S*P+g*O+x*F,r[14]=v*I+S*N+g*U+x*k,r[3]=m*T+M*A+y*b+w*G,r[7]=m*p+M*R+y*D+w*H,r[11]=m*_+M*P+y*O+w*F,r[15]=m*I+M*N+y*U+w*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],v=e[3],S=e[7],g=e[11],x=e[15],m=l*d-c*f,M=o*d-c*u,y=o*f-l*u,w=a*d-c*h,T=a*f-l*h,p=a*u-o*h;return t*(S*m-g*M+x*y)-n*(v*m-g*w+x*T)+s*(v*M-S*w+x*p)-r*(v*y-S*T+g*p)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],v=e[12],S=e[13],g=e[14],x=e[15],m=t*o-n*a,M=t*l-s*a,y=t*c-r*a,w=n*l-s*o,T=n*c-r*o,p=s*c-r*l,_=h*S-u*v,I=h*g-f*v,A=h*x-d*v,R=u*g-f*S,P=u*x-d*S,N=f*x-d*g,b=m*N-M*P+y*R+w*A-T*I+p*_;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/b;return e[0]=(o*N-l*P+c*R)*D,e[1]=(s*P-n*N-r*R)*D,e[2]=(S*p-g*T+x*w)*D,e[3]=(f*T-u*p-d*w)*D,e[4]=(l*A-a*N-c*I)*D,e[5]=(t*N-s*A+r*I)*D,e[6]=(g*y-v*p-x*M)*D,e[7]=(h*p-f*y+d*M)*D,e[8]=(a*P-o*A+c*_)*D,e[9]=(n*A-t*P-r*_)*D,e[10]=(v*T-S*y+x*m)*D,e[11]=(u*y-h*T-d*m)*D,e[12]=(o*I-a*R-l*_)*D,e[13]=(t*R-n*I+s*_)*D,e[14]=(S*M-v*w-g*m)*D,e[15]=(h*w-u*M+f*m)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,v=r*u,S=a*h,g=a*u,x=o*u,m=l*c,M=l*h,y=l*u,w=n.x,T=n.y,p=n.z;return s[0]=(1-(S+x))*w,s[1]=(d+y)*w,s[2]=(v-M)*w,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(f+x))*T,s[6]=(g+m)*T,s[7]=0,s[8]=(v+M)*p,s[9]=(g-m)*p,s[10]=(1-(f+S))*p,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=mr.set(s[0],s[1],s[2]).length(),o=mr.set(s[4],s[5],s[6]).length(),l=mr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ci.copy(this);let c=1/a,h=1/o,u=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,t.setFromRotationMatrix(ci),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Qn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),v,S;if(l)v=r/(a-r),S=a*r/(a-r);else if(o===Qn)v=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Ur)v=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Qn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),v,S;if(l)v=1/(a-r),S=a/(a-r);else if(o===Qn)v=-2/(a-r),S=-(a+r)/(a-r);else if(o===Ur)v=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};hc.prototype.isMatrix4=!0;var Ke=hc,mr=new z,ci=new Ke,Eg=new z(0,0,0),wg=new z(1,1,1),us=new z,il=new z,Hn=new z,Xd=new Ke,$d=new Wn,Si=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $d.setFromEuler(this),this.setFromQuaternion($d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ag=0,qd=new z,gr=new Wn,Oi=new Ke,sl=new z,xa=new z,Rg=new z,Cg=new Wn,Yd=new z(1,0,0),Kd=new z(0,1,0),jd=new z(0,0,1),Zd={type:"added"},Pg={type:"removed"},xr={type:"childadded",child:null},Vh={type:"childremoved",child:null},Lt=class i extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new Si,n=new Wn,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new st}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Yd,e)}rotateY(e){return this.rotateOnAxis(Kd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yd,e)}translateY(e){return this.translateOnAxis(Kd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sl.copy(e):sl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(xa,sl,this.up):Oi.lookAt(sl,xa,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),gr.setFromRotationMatrix(Oi),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zd),xr.child=e,this.dispatchEvent(xr),xr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pg),Vh.child=e,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zd),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,Rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,Cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new z(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ig={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let S of e.hand.values()){let g=t.getJointPose(S,n),x=this._getHandJoint(c,S);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,v=.005;c.inputState.pinching&&f>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ig)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Wh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Yu(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wh(a,r,e+1/3),this.g=Wh(a,r,e),this.b=Wh(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=mm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return ct.workingToColorSpace(Mn.copy(this),e),Math.round(ut(Mn.r*255,0,255))*65536+Math.round(ut(Mn.g*255,0,255))*256+Math.round(ut(Mn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,s=Mn.g,r=Mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Rt){ct.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,s=Mn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(rl);let n=Ia(fs.h,rl.h,t),s=Ia(fs.s,rl.s,t),r=Ia(fs.l,rl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Le;Le.NAMES=mm;var Oa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ws=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=new z,Bi=new z,Xh=new z,ki=new z,vr=new z,_r=new z,Jd=new z,$h=new z,qh=new z,Yh=new z,Kh=new bt,jh=new bt,Zh=new bt,Vi=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),Bi.subVectors(n,t),Xh.subVectors(e,t);let a=hi.dot(hi),o=hi.dot(Bi),l=hi.dot(Xh),c=Bi.dot(Bi),h=Bi.dot(Xh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,v=(a*h-o*l)*f;return r.set(1-d-v,v,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Kh.setScalar(0),jh.setScalar(0),Zh.setScalar(0),Kh.fromBufferAttribute(e,t),jh.fromBufferAttribute(e,n),Zh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Kh,r.x),a.addScaledVector(jh,r.y),a.addScaledVector(Zh,r.z),a}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),Bi.subVectors(e,t),hi.cross(Bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),hi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;vr.subVectors(s,n),_r.subVectors(r,n),$h.subVectors(e,n);let l=vr.dot($h),c=_r.dot($h);if(l<=0&&c<=0)return t.copy(n);qh.subVectors(e,s);let h=vr.dot(qh),u=_r.dot(qh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(vr,a);Yh.subVectors(e,r);let d=vr.dot(Yh),v=_r.dot(Yh);if(v>=0&&d<=v)return t.copy(r);let S=d*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(_r,o);let g=h*v-d*u;if(g<=0&&u-h>=0&&d-v>=0)return Jd.subVectors(r,s),o=(u-h)/(u-h+(d-v)),t.copy(s).addScaledVector(Jd,o);let x=1/(g+S+f);return a=S*x,o=f*x,t.copy(n).addScaledVector(vr,a).addScaledVector(_r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pn=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ui):ui.fromBufferAttribute(r,a),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),al.copy(n.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),ol.subVectors(this.max,va),yr.subVectors(e.a,va),Mr.subVectors(e.b,va),Sr.subVectors(e.c,va),ds.subVectors(Mr,yr),ps.subVectors(Sr,Mr),Us.subVectors(yr,Sr);let t=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-Us.z,Us.y,ds.z,0,-ds.x,ps.z,0,-ps.x,Us.z,0,-Us.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-Us.y,Us.x,0];return!Jh(t,yr,Mr,Sr,ol)||(t=[1,0,0,0,1,0,0,0,1],!Jh(t,yr,Mr,Sr,ol))?!1:(ll.crossVectors(ds,ps),t=[ll.x,ll.y,ll.z],Jh(t,yr,Mr,Sr,ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zi=[new z,new z,new z,new z,new z,new z,new z,new z],ui=new z,al=new pn,yr=new z,Mr=new z,Sr=new z,ds=new z,ps=new z,Us=new z,va=new z,ol=new z,ll=new z,Fs=new z;function Jh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fs.fromArray(i,r);let o=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=e.dot(Fs),c=t.dot(Fs),h=n.dot(Fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var en=new z,cl=new ye,Lg=0,$t=class extends Mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$u,this.updateRanges=[],this.gpuType=qn,this.version=0,this._normalizationScale=e!==void 0?Qc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cl.fromBufferAttribute(this,t),cl.applyMatrix3(e),this.setXY(t,cl.x,cl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ju(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zu(e,this.array)}};var Ba=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ka=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dg=new pn,_a=new z,Qh=new z,Un=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Dg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);let t=_a.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_a,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Qh)),this.expandByPoint(_a.copy(e.center).sub(Qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ng=0,Zn=new Ke,eu=new Lt,br=new z,Gn=new pn,ya=new pn,cn=new z,At=class i extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rg(e)?ka:Ba)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return eu.lookAt(e),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Gn.min,ya.min),Gn.expandByPoint(cn),cn.addVectors(Gn.max,ya.max),Gn.expandByPoint(cn)):(Gn.expandByPoint(ya.min),Gn.expandByPoint(ya.max))}Gn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)cn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(cn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)cn.fromBufferAttribute(o,c),l&&(br.fromBufferAttribute(e,c),cn.add(br)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $t(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new z,l[I]=new z;let h=new z,u=new z,f=new z,d=new ye,v=new ye,S=new ye,g=new z,x=new z;function m(I,A,R){c[I]=c[A]=c[R]=1,h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,R),d.fromBufferAttribute(r,I),v.fromBufferAttribute(r,A),S.fromBufferAttribute(r,R),u.sub(h),f.sub(h),v.sub(d),S.sub(d);let P=1/(v.x*S.y-S.x*v.y);isFinite(P)&&(g.copy(u).multiplyScalar(S.y).addScaledVector(f,-v.y).multiplyScalar(P),x.copy(f).multiplyScalar(v.x).addScaledVector(u,-S.x).multiplyScalar(P),o[I].add(g),o[A].add(g),o[R].add(g),l[I].add(x),l[A].add(x),l[R].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,A=M.length;I<A;++I){let R=M[I],P=R.start,N=R.count;for(let b=P,D=P+N;b<D;b+=3)m(e.getX(b+0),e.getX(b+1),e.getX(b+2))}let y=new z,w=new z,T=new z,p=new z;function _(I){T.fromBufferAttribute(s,I),p.copy(T);let A=o[I];y.copy(A),y.sub(T.multiplyScalar(T.dot(A))).normalize(),w.crossVectors(p,A);let P=w.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,P)}for(let I=0,A=n.count;I<A;++I)c[I]&&_(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,h=new z,u=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){let v=e.getX(f+0),S=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,v=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*h;for(let x=0;x<h;x++)f[v++]=c[d++]}return new $t(f,h,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$u,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Qd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Qd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Qd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=mi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Cn=new z,xs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Qc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ju(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zu(e,this.data.array)}},tu=new z,Ug=new z,Fg=new st,Vn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=tu.subVectors(n,t).cross(Ug.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(tu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fg.getNormalMatrix(e),s=this.coplanarPoint(tu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Og=0,mn=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=jr,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Du,this.blendDst=Nu,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nl,this.stencilZFail=Nl,this.stencilZPass=Nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Hr=class extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tr,Ma=new z,Er=new z,wr=new z,Ar=new ye,Sa=new ye,gm=new Ke,hl=new z,ba=new z,ul=new z,ep=new ye,nu=new ye,tp=new ye,za=class extends Lt{constructor(e=new Hr){if(super(),this.isSprite=!0,this.type="Sprite",Tr===void 0){Tr=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xs(t,5);Tr.setIndex([0,1,2,0,2,3]),Tr.setAttribute("position",new xs(n,3,0,!1)),Tr.setAttribute("uv",new xs(n,2,3,!1))}this.geometry=Tr,this.material=e,this.center=new ye(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Er.setFromMatrixScale(this.matrixWorld),gm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Er.multiplyScalar(-wr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;fl(hl.set(-.5,-.5,0),wr,a,Er,s,r),fl(ba.set(.5,-.5,0),wr,a,Er,s,r),fl(ul.set(.5,.5,0),wr,a,Er,s,r),ep.set(0,0),nu.set(1,0),tp.set(1,1);let o=e.ray.intersectTriangle(hl,ba,ul,!1,Ma);if(o===null&&(fl(ba.set(-.5,.5,0),wr,a,Er,s,r),nu.set(0,1),o=e.ray.intersectTriangle(hl,ul,ba,!1,Ma),o===null))return;let l=e.ray.origin.distanceTo(Ma);l<e.near||l>e.far||t.push({distance:l,point:Ma.clone(),uv:Vi.getInterpolation(Ma,hl,ba,ul,ep,nu,tp,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function fl(i,e,t,n,s,r){Ar.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Sa.x=r*Ar.x-s*Ar.y,Sa.y=s*Ar.x+r*Ar.y):Sa.copy(Ar),i.copy(e),i.x+=Sa.x,i.y+=Sa.y,i.applyMatrix4(gm)}var Hi=new z,iu=new z,dl=new z,pl=new z,vs=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){iu.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),pl.copy(this.origin).sub(iu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(dl),o=pl.dot(this.direction),l=-pl.dot(dl),c=pl.lengthSq(),h=Math.abs(1-a*a),u,f,d,v;if(h>0)if(u=a*l-o,f=a*o-l,v=r*h,u>=0)if(f>=-v)if(f<=v){let S=1/h;u*=S,f*=S,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(iu).addScaledVector(dl,f),d}intersectSphere(e,t){if(e.radius<0)return null;Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,v=t.x-a.x,S=t.y-a.y,g=t.z-a.z,x=n.x-a.x,m=n.y-a.y,M=n.z-a.z,y=Math.abs(l),w=Math.abs(c),T=Math.abs(h),p,_,I,A,R,P,N,b,D,O,U,G;if(y>=w&&y>=T?(I=l,P=u,D=v,G=x,l>=0?(p=c,_=h,A=f,R=d,N=S,b=g,O=m,U=M):(p=h,_=c,A=d,R=f,N=g,b=S,O=M,U=m)):w>=T?(I=c,P=f,D=S,G=m,c>=0?(p=h,_=l,A=d,R=u,N=g,b=v,O=M,U=x):(p=l,_=h,A=u,R=d,N=v,b=g,O=x,U=M)):(I=h,P=d,D=g,G=M,h>=0?(p=l,_=c,A=u,R=f,N=v,b=S,O=x,U=m):(p=c,_=l,A=f,R=u,N=S,b=v,O=m,U=x)),I===0)return null;let H=p/I,F=_/I,k=1/I,W=A-H*P,J=R-F*P,B=N-H*D,Z=b-F*D,X=O-H*G,se=U-F*G,he=X*Z-se*B,q=W*se-J*X,re=B*J-Z*W;if(s){if(he<0||q<0||re<0)return null}else if((he<0||q<0||re<0)&&(he>0||q>0||re>0))return null;let fe=he+q+re;if(fe===0)return null;let ne=k*(he*P+q*D+re*G);return(fe>0?ne<0:ne>0)?null:this.at(ne/fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},np=new Ke,Os=new vs,ml=new Un,ip=new z,gl=new z,xl=new z,vl=new z,su=new z,_l=new z,sp=new z,yl=new z,Je=class extends Lt{constructor(e=new At,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){_l.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(su.fromBufferAttribute(u,e),a?_l.addScaledVector(su,h):_l.addScaledVector(su.sub(t),h))}t.add(_l)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(ml.containsPoint(Os.origin)===!1&&(Os.intersectSphere(ml,ip)===null||Os.origin.distanceToSquared(ip)>(e.far-e.near)**2))&&(np.copy(r).invert(),Os.copy(e.ray).applyMatrix4(np),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=f.length;v<S;v++){let g=f[v],x=a[g.materialIndex],m=Math.max(g.start,d.start),M=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=m,w=M;y<w;y+=3){let T=o.getX(y),p=o.getX(y+1),_=o.getX(y+2);s=Ml(this,x,e,n,c,h,u,T,p,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let v=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let g=v,x=S;g<x;g+=3){let m=o.getX(g),M=o.getX(g+1),y=o.getX(g+2);s=Ml(this,a,e,n,c,h,u,m,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=f.length;v<S;v++){let g=f[v],x=a[g.materialIndex],m=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=m,w=M;y<w;y+=3){let T=y,p=y+1,_=y+2;s=Ml(this,x,e,n,c,h,u,T,p,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let v=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let g=v,x=S;g<x;g+=3){let m=g,M=g+1,y=g+2;s=Ml(this,a,e,n,c,h,u,m,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Bg(i,e,t,n,s,r,a,o){let l;if(e.side===gn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ei,o),l===null)return null;yl.copy(o),yl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(yl);return c<t.near||c>t.far?null:{distance:c,point:yl.clone(),object:i}}function Ml(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,gl),i.getVertexPosition(l,xl),i.getVertexPosition(c,vl);let h=Bg(i,e,t,n,gl,xl,vl,sp);if(h){let u=new z;Vi.getBarycoord(sp,gl,xl,vl,u),s&&(h.uv=Vi.getInterpolatedAttribute(s,o,l,c,u,new ye)),r&&(h.uv1=Vi.getInterpolatedAttribute(r,o,l,c,u,new ye)),a&&(h.normal=Vi.getInterpolatedAttribute(a,o,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new z,materialIndex:0};Vi.getNormal(gl,xl,vl,f.normal),h.face=f,h.barycoord=u}return h}var Ta=new bt,rp=new bt,ap=new bt,kg=new bt,op=new Ke,Sl=new z,ru=new Un,lp=new Ke,au=new vs,Ha=class extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=du,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sl),this.boundingBox.expandByPoint(Sl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sl),this.boundingSphere.expandByPoint(Sl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ru.copy(this.boundingSphere),ru.applyMatrix4(s),e.ray.intersectsSphere(ru)!==!1&&(lp.copy(s).invert(),au.copy(e.ray).applyMatrix4(lp),!(this.boundingBox!==null&&au.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,au)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===du?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;rp.fromBufferAttribute(s.attributes.skinIndex,e),ap.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ta.copy(t),t.set(0,0,0,0)):(Ta.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ta.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=ap.getComponent(r);if(a!==0){let o=rp.getComponent(r);op.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(kg.copy(Ta).applyMatrix4(op),a)}}return t.isVector4&&(t.w=Ta.w),t.applyMatrix4(this.bindMatrixInverse)}},Gr=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ei=class extends jt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ut,h=Ut,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cp=new Ke,zg=new Ke,Ga=class i{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:zg;cp.multiplyMatrices(o,t[r]),cp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ei(t,e,e,On,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ye("Skeleton: No bone found with UUID:",r),a=new Gr),this.bones.push(a),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},$i=class extends $t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rr=new Ke,hp=new Ke,bl=[],up=new pn,Hg=new Ke,Ea=new Je,wa=new Un,qi=class extends Je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rr),up.copy(e.boundingBox).applyMatrix4(Rr),this.boundingBox.union(up)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rr),wa.copy(e.boundingSphere).applyMatrix4(Rr),this.boundingSphere.union(wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(n),e.ray.intersectsSphere(wa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rr),hp.multiplyMatrices(n,Rr),Ea.matrixWorld=hp,Ea.raycast(e,bl);for(let a=0,o=bl.length;a<o;a++){let l=bl[a];l.instanceId=r,l.object=this,t.push(l)}bl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ei(new Float32Array(s*this.count),s,this.count,_c,qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bs=new Un,Gg=new ye(.5,.5),Tl=new z,_s=class{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],v=r[8],S=r[9],g=r[10],x=r[11],m=r[12],M=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,x-v,w-m).normalize(),s[1].setComponents(c+a,d+h,x+v,w+m).normalize(),s[2].setComponents(c+o,d+u,x+S,w+M).normalize(),s[3].setComponents(c-o,d-u,x-S,w-M).normalize(),n)s[4].setComponents(l,f,g,y).normalize(),s[5].setComponents(c-l,d-f,x-g,w-y).normalize();else if(s[4].setComponents(c-l,d-f,x-g,w-y).normalize(),t===Qn)s[5].setComponents(c+l,d+f,x+g,w+y).normalize();else if(t===Ur)s[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);let t=Gg.distanceTo(e.center);return Bs.radius=.7071067811865476+t,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Tl.x=s.normal.x>0?e.max.x:e.min.x,Tl.y=s.normal.y>0?e.max.y:e.min.y,Tl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fp=new Ke,Xl=class i{constructor(){this.coordinateSystem=Qn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];fp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new _s),n[s].setFromProjectionMatrix(fp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new _s),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var ys=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$l=new z,ql=new z,dp=new Ke,Aa=new vs,El=new Un,ou=new z,pp=new z,$s=class extends Lt{constructor(e=new At,t=new ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$l.fromBufferAttribute(t,s-1),ql.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$l.distanceTo(ql);e.setAttribute("lineDistance",new ht(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(s),El.radius+=r,e.ray.intersectsSphere(El)===!1)return;dp.copy(s).invert(),Aa.copy(e.ray).applyMatrix4(dp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let S=d,g=v-1;S<g;S+=c){let x=h.getX(S),m=h.getX(S+1),M=wl(this,e,Aa,l,x,m,S);M&&t.push(M)}if(this.isLineLoop){let S=h.getX(v-1),g=h.getX(d),x=wl(this,e,Aa,l,S,g,v-1);x&&t.push(x)}}else{let d=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let S=d,g=v-1;S<g;S+=c){let x=wl(this,e,Aa,l,S,S+1,S);x&&t.push(x)}if(this.isLineLoop){let S=wl(this,e,Aa,l,v-1,d,v-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if($l.fromBufferAttribute(o,s),ql.fromBufferAttribute(o,r),t.distanceSqToSegment($l,ql,ou,pp)>n)return;ou.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ou);if(!(c<e.near||c>e.far))return{distance:c,point:pp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var mp=new z,gp=new z,qs=class extends $s{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)mp.fromBufferAttribute(t,s),gp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mp.distanceTo(gp);e.setAttribute("lineDistance",new ht(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Va=class extends $s{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Yi=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xp=new Ke,vu=new vs,Al=new Un,Rl=new z,Ms=class extends Lt{constructor(e=new At,t=new Yi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Al.copy(n.boundingSphere),Al.applyMatrix4(s),Al.radius+=r,e.ray.intersectsSphere(Al)===!1)return;xp.copy(s).invert(),vu.copy(e.ray).applyMatrix4(xp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let v=f,S=d;v<S;v++){let g=c.getX(v);Rl.fromBufferAttribute(u,g),vp(Rl,g,l,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let v=f,S=d;v<S;v++)Rl.fromBufferAttribute(u,v),vp(Rl,v,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vp(i,e,t,n,s,r,a){let o=vu.distanceSqToPoint(i);if(o<t){let l=new z;vu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Wa=class extends jt{constructor(e=[],t=tr,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ti=class extends jt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends jt{constructor(e,t,n=di,s,r,a,o=Ut,l=Ut,c,h=Xi,u=1){if(h!==Xi&&h!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xa=class extends fi{constructor(e,t=di,n=tr,s,r,a=Ut,o=Ut,l,c=Xi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$a=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},kt=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function v(S,g,x,m,M,y,w,T,p,_,I){let A=y/p,R=w/_,P=y/2,N=w/2,b=T/2,D=p+1,O=_+1,U=0,G=0,H=new z;for(let F=0;F<O;F++){let k=F*R-N;for(let W=0;W<D;W++){let J=W*A-P;H[S]=J*m,H[g]=k*M,H[x]=b,c.push(H.x,H.y,H.z),H[S]=0,H[g]=0,H[x]=T>0?1:-1,h.push(H.x,H.y,H.z),u.push(W/p),u.push(1-F/_),U+=1}}for(let F=0;F<_;F++)for(let k=0;k<p;k++){let W=f+k+D*F,J=f+k+D*(F+1),B=f+(k+1)+D*(F+1),Z=f+(k+1)+D*F;l.push(W,J,Z),l.push(J,B,Z),G+=6}o.addGroup(d,G,I),d+=G,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},qa=class i extends At{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,v=n*2+r,S=s+1,g=new z,x=new z;for(let m=0;m<=v;m++){let M=0,y=0,w=0,T=0;if(m<=n){let I=m/n,A=I*Math.PI/2;y=-h-e*Math.cos(A),w=e*Math.sin(A),T=-e*Math.cos(A),M=I*u}else if(m<=n+r){let I=(m-n)/r;y=-h+I*t,w=e,T=0,M=u+I*f}else{let I=(m-n-r)/n,A=I*Math.PI/2;y=h+e*Math.sin(A),w=e*Math.cos(A),T=e*Math.sin(A),M=u+f+I*u}let p=Math.max(0,Math.min(1,M/d)),_=0;m===0?_=.5/s:m===v&&(_=-.5/s);for(let I=0;I<=s;I++){let A=I/s,R=A*Math.PI*2,P=Math.sin(R),N=Math.cos(R);x.x=-w*N,x.y=y,x.z=w*P,o.push(x.x,x.y,x.z),g.set(-w*N,T,w*P),g.normalize(),l.push(g.x,g.y,g.z),c.push(A+_,p)}if(m>0){let I=(m-1)*S;for(let A=0;A<s;A++){let R=I+A,P=I+A+1,N=m*S+A,b=m*S+A+1;a.push(R,P,N),a.push(P,b,N)}}}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ya=class i extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new z,h=new ye;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ot=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],v=0,S=[],g=n/2,x=0;m(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(d,2));function m(){let y=new z,w=new z,T=0,p=(t-e)/n;for(let _=0;_<=r;_++){let I=[],A=_/r,R=A*(t-e)+e;for(let P=0;P<=s;P++){let N=P/s,b=N*l+o,D=Math.sin(b),O=Math.cos(b);w.x=R*D,w.y=-A*n+g,w.z=R*O,u.push(w.x,w.y,w.z),y.set(D,p,O).normalize(),f.push(y.x,y.y,y.z),d.push(N,1-A),I.push(v++)}S.push(I)}for(let _=0;_<s;_++)for(let I=0;I<r;I++){let A=S[I][_],R=S[I+1][_],P=S[I+1][_+1],N=S[I][_+1];(e>0||I!==0)&&(h.push(A,R,N),T+=3),(t>0||I!==r-1)&&(h.push(R,P,N),T+=3)}c.addGroup(x,T,0),x+=T}function M(y){let w=v,T=new ye,p=new z,_=0,I=y===!0?e:t,A=y===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,g*A,0),f.push(0,A,0),d.push(.5,.5),v++;let R=v;for(let P=0;P<=s;P++){let b=P/s*l+o,D=Math.cos(b),O=Math.sin(b);p.x=I*O,p.y=g*A,p.z=I*D,u.push(p.x,p.y,p.z),f.push(0,A,0),T.x=D*.5+.5,T.y=O*.5*A+.5,d.push(T.x,T.y),v++}for(let P=0;P<s;P++){let N=w+P,b=R+P;y===!0?h.push(b,b+1,N):h.push(b+1,b,N),_+=3}c.addGroup(x,_,y===!0?1:2),x+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ss=class i extends ot{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ye:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,s=[],r=[],a=[],o=new z,l=new Ke;for(let d=0;d<=e;d++){let v=d/e;s[d]=this.getTangentAt(v,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(ut(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ut(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Vr=class extends Xn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ye){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Yl=class extends Vr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ju(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var _p=new z,yp=new z,lu=new Ju,cu=new Ju,hu=new Ju,Kl=class extends Xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(yp.subVectors(s[0],s[1]).add(s[0]),c=yp);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(_p.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_p),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(u),d),S=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);S<1e-4&&(S=1),v<1e-4&&(v=S),g<1e-4&&(g=S),lu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,v,S,g),cu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,v,S,g),hu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,v,S,g)}else this.curveType==="catmullrom"&&(lu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),cu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),hu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(lu.calc(l),cu.calc(l),hu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Mp(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Vg(i,e){let t=1-i;return t*t*e}function Wg(i,e){return 2*(1-i)*i*e}function Xg(i,e){return i*i*e}function La(i,e,t,n){return Vg(i,e)+Wg(i,t)+Xg(i,n)}function $g(i,e){let t=1-i;return t*t*t*e}function qg(i,e){let t=1-i;return 3*t*t*i*e}function Yg(i,e){return 3*(1-i)*i*i*e}function Kg(i,e){return i*i*i*e}function Da(i,e,t,n,s){return $g(i,e)+qg(i,t)+Yg(i,n)+Kg(i,s)}var Ka=class extends Xn{constructor(e=new ye,t=new ye,n=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Da(e,s.x,r.x,a.x,o.x),Da(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jl=class extends Xn{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Da(e,s.x,r.x,a.x,o.x),Da(e,s.y,r.y,a.y,o.y),Da(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends Xn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zl=class extends Xn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Xn{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(La(e,s.x,r.x,a.x),La(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jl=class extends Xn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(La(e,s.x,r.x,a.x),La(e,s.y,r.y,a.y),La(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Mp(o,l.x,c.x,h.x,u.x),Mp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ye().fromArray(s))}return this}},_u=Object.freeze({__proto__:null,ArcCurve:Yl,CatmullRomCurve3:Kl,CubicBezierCurve:Ka,CubicBezierCurve3:jl,EllipseCurve:Vr,LineCurve:ja,LineCurve3:Zl,QuadraticBezierCurve:Za,QuadraticBezierCurve3:Jl,SplineCurve:Ja}),Ql=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _u[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new _u[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Qa=class extends Ql{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ja(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Za(this.currentPoint.clone(),new ye(e,t),new ye(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ka(this.currentPoint.clone(),new ye(e,t),new ye(n,s),new ye(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ja(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Vr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},bs=class extends Qa{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Qa().fromJSON(s))}return this}};function jg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=xm(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=tx(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let f=t;f<s;f+=t){let d=i[f],v=i[f+1];d<o&&(o=d),v<l&&(l=v),d>h&&(h=d),v>u&&(u=v)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return eo(r,a,t,o,l,c,0),a}function xm(i,e,t,n,s){let r;if(s===fx(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Sp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Sp(a/n|0,i[a],i[a+1],r);return r&&Wr(r,r.next)&&(no(r),r=r.next),r}function Ys(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function eo(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ax(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Jg(i,n,s,r):Zg(i)){e.push(l.i,i.i,c.i),no(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Qg(Ys(i),e),eo(i,e,t,n,s,r,2)):a===2&&ex(i,e,t,n,s,r):eo(Ys(i),e,t,n,s,r,1);break}}}function Zg(i){let e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c),v=n.next;for(;v!==e;){if(v.x>=h&&v.x<=f&&v.y>=u&&v.y<=d&&Ra(s,o,r,l,a,c,v.x,v.y)&&Wt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Jg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Wt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),v=Math.min(h,u,f),S=Math.max(o,l,c),g=Math.max(h,u,f),x=yu(d,v,e,t,n),m=yu(S,g,e,t,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=x&&y&&y.z<=m;){if(M.x>=d&&M.x<=S&&M.y>=v&&M.y<=g&&M!==s&&M!==a&&Ra(o,h,l,u,c,f,M.x,M.y)&&Wt(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=d&&y.x<=S&&y.y>=v&&y.y<=g&&y!==s&&y!==a&&Ra(o,h,l,u,c,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=x;){if(M.x>=d&&M.x<=S&&M.y>=v&&M.y<=g&&M!==s&&M!==a&&Ra(o,h,l,u,c,f,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=m;){if(y.x>=d&&y.x<=S&&y.y>=v&&y.y<=g&&y!==s&&y!==a&&Ra(o,h,l,u,c,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Qg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Wr(n,s)&&_m(n,t,t.next,s)&&to(n,s)&&to(s,n)&&(e.push(n.i,t.i,s.i),no(t),no(t.next),t=i=s),t=t.next}while(t!==i);return Ys(t)}function ex(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cx(a,o)){let l=ym(a,o);a=Ys(a,a.next),l=Ys(l,l.next),eo(a,e,t,n,s,r,0),eo(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function tx(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=xm(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(lx(c))}s.sort(nx);for(let r=0;r<s.length;r++)t=ix(s[r],t);return t}function nx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ix(i,e){let t=sx(i,e);if(!t)return e;let n=ym(t,i);return Ys(n,n.next),Ys(t,t.next)}function sx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Wr(i,t))return t;do{if(Wr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&vm(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);to(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&rx(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function rx(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function ax(i,e,t,n){let s=i;do s.z===0&&(s.z=yu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ox(s)}function ox(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function yu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function lx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function vm(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ra(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&vm(i,e,t,n,s,r,a,o)}function cx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!hx(i,e)&&(to(i,e)&&to(e,i)&&ux(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||Wr(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wr(i,e){return i.x===e.x&&i.y===e.y}function _m(i,e,t,n){let s=Pl(Wt(i,e,t)),r=Pl(Wt(i,e,n)),a=Pl(Wt(t,n,i)),o=Pl(Wt(t,n,e));return!!(s!==r&&a!==o||s===0&&Cl(i,t,e)||r===0&&Cl(i,n,e)||a===0&&Cl(t,i,n)||o===0&&Cl(t,e,n))}function Cl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Pl(i){return i>0?1:i<0?-1:0}function hx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&_m(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function to(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function ux(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ym(i,e){let t=Mu(i.i,i.x,i.y),n=Mu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Sp(i,e,t,n){let s=Mu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function no(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Mu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Su=class{static triangulate(e,t,n=2){return jg(e,t,n)}},ks=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];bp(e),Tp(n,e);let a=e.length;t.forEach(bp);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Tp(n,t[l]);let o=Su.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function bp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Tp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ks=class i extends At{constructor(e=new bs([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:d-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:dx,M,y=!1,w,T,p,_;if(x){M=x.getSpacedPoints(h),y=!0,f=!1;let ie=x.isCatmullRomCurve3?x.closed:!1;w=x.computeFrenetFrames(h,ie),T=new z,p=new z,_=new z}f||(g=0,d=0,v=0,S=0);let I=o.extractPoints(c),A=I.shape,R=I.holes;if(!ks.isClockWise(A)){A=A.reverse();for(let ie=0,_e=R.length;ie<_e;ie++){let le=R[ie];ks.isClockWise(le)&&(R[ie]=le.reverse())}}function N(ie){let le=10000000000000001e-36,ve=ie[0];for(let pe=1;pe<=ie.length;pe++){let Fe=pe%ie.length,ze=ie[Fe],Oe=ze.x-ve.x,$e=ze.y-ve.y,Qe=Oe*Oe+$e*$e,$=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(ve.x),Math.abs(ve.y)),mt=le*$*$;if(Qe<=mt){ie.splice(Fe,1),pe--;continue}ve=ze}}N(A),R.forEach(N);let b=R.length,D=A;for(let ie=0;ie<b;ie++){let _e=R[ie];A=A.concat(_e)}function O(ie,_e,le){return _e||et("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(_e,le)}let U=A.length;function G(ie,_e,le){let ve,pe,Fe,ze=ie.x-_e.x,Oe=ie.y-_e.y,$e=le.x-ie.x,Qe=le.y-ie.y,$=ze*ze+Oe*Oe,mt=ze*Qe-Oe*$e;if(Math.abs(mt)>Number.EPSILON){let Ze=Math.sqrt($),ue=Math.sqrt($e*$e+Qe*Qe),j=_e.x-Oe/Ze,Me=_e.y+ze/Ze,xe=le.x-Qe/ue,Ae=le.y+$e/ue,L=((xe-j)*Qe-(Ae-Me)*$e)/(ze*Qe-Oe*$e);ve=j+ze*L-ie.x,pe=Me+Oe*L-ie.y;let E=ve*ve+pe*pe;if(E<=2)return new ye(ve,pe);Fe=Math.sqrt(E/2)}else{let Ze=!1;ze>Number.EPSILON?$e>Number.EPSILON&&(Ze=!0):ze<-Number.EPSILON?$e<-Number.EPSILON&&(Ze=!0):Math.sign(Oe)===Math.sign(Qe)&&(Ze=!0),Ze?(ve=-Oe,pe=ze,Fe=Math.sqrt($)):(ve=ze,pe=Oe,Fe=Math.sqrt($/2))}return new ye(ve/Fe,pe/Fe)}let H=[];for(let ie=0,_e=D.length,le=_e-1,ve=ie+1;ie<_e;ie++,le++,ve++)le===_e&&(le=0),ve===_e&&(ve=0),H[ie]=G(D[ie],D[le],D[ve]);let F=[],k,W=H.concat();for(let ie=0,_e=b;ie<_e;ie++){let le=R[ie];k=[];for(let ve=0,pe=le.length,Fe=pe-1,ze=ve+1;ve<pe;ve++,Fe++,ze++)Fe===pe&&(Fe=0),ze===pe&&(ze=0),k[ve]=G(le[ve],le[Fe],le[ze]);F.push(k),W=W.concat(k)}let J;if(g===0)J=ks.triangulateShape(D,R);else{let ie=[],_e=[];for(let le=0;le<g;le++){let ve=le/g,pe=d*Math.cos(ve*Math.PI/2),Fe=v*Math.sin(ve*Math.PI/2)+S;for(let ze=0,Oe=D.length;ze<Oe;ze++){let $e=O(D[ze],H[ze],Fe);q($e.x,$e.y,-pe),ve===0&&ie.push($e)}for(let ze=0,Oe=b;ze<Oe;ze++){let $e=R[ze];k=F[ze];let Qe=[];for(let $=0,mt=$e.length;$<mt;$++){let Ze=O($e[$],k[$],Fe);q(Ze.x,Ze.y,-pe),ve===0&&Qe.push(Ze)}ve===0&&_e.push(Qe)}}J=ks.triangulateShape(ie,_e)}let B=J.length,Z=v+S;for(let ie=0;ie<U;ie++){let _e=f?O(A[ie],W[ie],Z):A[ie];y?(p.copy(w.normals[0]).multiplyScalar(_e.x),T.copy(w.binormals[0]).multiplyScalar(_e.y),_.copy(M[0]).add(p).add(T),q(_.x,_.y,_.z)):q(_e.x,_e.y,0)}for(let ie=1;ie<=h;ie++)for(let _e=0;_e<U;_e++){let le=f?O(A[_e],W[_e],Z):A[_e];y?(p.copy(w.normals[ie]).multiplyScalar(le.x),T.copy(w.binormals[ie]).multiplyScalar(le.y),_.copy(M[ie]).add(p).add(T),q(_.x,_.y,_.z)):q(le.x,le.y,u/h*ie)}for(let ie=g-1;ie>=0;ie--){let _e=ie/g,le=d*Math.cos(_e*Math.PI/2),ve=v*Math.sin(_e*Math.PI/2)+S;for(let pe=0,Fe=D.length;pe<Fe;pe++){let ze=O(D[pe],H[pe],ve);q(ze.x,ze.y,u+le)}for(let pe=0,Fe=R.length;pe<Fe;pe++){let ze=R[pe];k=F[pe];for(let Oe=0,$e=ze.length;Oe<$e;Oe++){let Qe=O(ze[Oe],k[Oe],ve);y?q(Qe.x,Qe.y+M[h-1].y,M[h-1].x+le):q(Qe.x,Qe.y,u+le)}}}X(),se();function X(){let ie=s.length/3;if(f){let _e=0,le=U*_e;for(let ve=0;ve<B;ve++){let pe=J[ve];re(pe[2]+le,pe[1]+le,pe[0]+le)}_e=h+g*2,le=U*_e;for(let ve=0;ve<B;ve++){let pe=J[ve];re(pe[0]+le,pe[1]+le,pe[2]+le)}}else{for(let _e=0;_e<B;_e++){let le=J[_e];re(le[2],le[1],le[0])}for(let _e=0;_e<B;_e++){let le=J[_e];re(le[0]+U*h,le[1]+U*h,le[2]+U*h)}}n.addGroup(ie,s.length/3-ie,0)}function se(){let ie=s.length/3,_e=0;he(D,_e),_e+=D.length;for(let le=0,ve=R.length;le<ve;le++){let pe=R[le];he(pe,_e),_e+=pe.length}n.addGroup(ie,s.length/3-ie,1)}function he(ie,_e){let le=ie.length;for(;--le>=0;){let ve=le,pe=le-1;pe<0&&(pe=ie.length-1);for(let Fe=0,ze=h+g*2;Fe<ze;Fe++){let Oe=U*Fe,$e=U*(Fe+1),Qe=_e+ve+Oe,$=_e+pe+Oe,mt=_e+pe+$e,Ze=_e+ve+$e;fe(Qe,$,mt,Ze)}}}function q(ie,_e,le){l.push(ie),l.push(_e),l.push(le)}function re(ie,_e,le){ne(ie),ne(_e),ne(le);let ve=s.length/3,pe=m.generateTopUV(n,s,ve-3,ve-2,ve-1);Re(pe[0]),Re(pe[1]),Re(pe[2])}function fe(ie,_e,le,ve){ne(ie),ne(_e),ne(ve),ne(_e),ne(le),ne(ve);let pe=s.length/3,Fe=m.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);Re(Fe[0]),Re(Fe[1]),Re(Fe[3]),Re(Fe[1]),Re(Fe[2]),Re(Fe[3])}function ne(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function Re(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return px(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new _u[s.type]().fromJSON(s)),new i(n,e.options)}},dx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ye(r,a),new ye(o,l),new ye(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],v=e[s*3+2],S=e[r*3],g=e[r*3+1],x=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ye(a,1-l),new ye(c,1-u),new ye(f,1-v),new ye(S,1-x)]:[new ye(o,1-l),new ye(h,1-u),new ye(d,1-v),new ye(g,1-x)]}};function px(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var io=class i extends At{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ut(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new z,f=new ye,d=new z,v=new z,S=new z,g=0,x=0;for(let m=0;m<=e.length-1;m++)switch(m){case 0:g=e[m+1].x-e[m].x,x=e[m+1].y-e[m].y,d.x=x*1,d.y=-g,d.z=x*0,S.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:S.normalize(),l.push(S.x,S.y,S.z);break;default:g=e[m+1].x-e[m].x,x=e[m+1].y-e[m].y,d.x=x*1,d.y=-g,d.z=x*0,v.copy(d),d.x+=S.x,d.y+=S.y,d.z+=S.z,d.normalize(),l.push(d.x,d.y,d.z),S.copy(v)}for(let m=0;m<=t;m++){let M=n+m*h*s,y=Math.sin(M),w=Math.cos(M);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*y,u.y=e[T].y,u.z=e[T].x*w,a.push(u.x,u.y,u.z),f.x=m/t,f.y=T/(e.length-1),o.push(f.x,f.y);let p=l[3*T+0]*y,_=l[3*T+1],I=l[3*T+0]*w;c.push(p,_,I)}}for(let m=0;m<t;m++)for(let M=0;M<e.length-1;M++){let y=M+m*e.length,w=y,T=y+e.length,p=y+e.length+1,_=y+1;r.push(w,T,_),r.push(p,_,T)}this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("uv",new ht(o,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ki=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],v=[],S=[],g=[];for(let x=0;x<h;x++){let m=x*f-a;for(let M=0;M<c;M++){let y=M*u-r;v.push(y,-m,0),S.push(0,0,1),g.push(M/o),g.push(1-x/l)}}for(let x=0;x<l;x++)for(let m=0;m<o;m++){let M=m+c*x,y=m+c*(x+1),w=m+1+c*(x+1),T=m+1+c*x;d.push(M,y,T),d.push(y,w,T)}this.setIndex(d),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(S,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},so=class i extends At{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new z,v=new ye;for(let S=0;S<=s;S++){for(let g=0;g<=n;g++){let x=r+g/n*a;d.x=u*Math.cos(x),d.y=u*Math.sin(x),l.push(d.x,d.y,d.z),c.push(0,0,1),v.x=(d.x/t+1)/2,v.y=(d.y/t+1)/2,h.push(v.x,v.y)}u+=f}for(let S=0;S<s;S++){let g=S*(n+1);for(let x=0;x<n;x++){let m=x+g,M=m,y=m+n+1,w=m+n+2,T=m+1;o.push(M,y,T),o.push(y,w,T)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Zt=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new z,f=new z,d=[],v=[],S=[],g=[];for(let x=0;x<=n;x++){let m=[],M=x/n,y=a+M*o,w=e*Math.cos(y),T=Math.sqrt(e*e-w*w),p=0;x===0&&a===0?p=.5/t:x===n&&l===Math.PI&&(p=-.5/t);for(let _=0;_<=t;_++){let I=_/t,A=s+I*r;u.x=-T*Math.cos(A),u.y=w,u.z=T*Math.sin(A),v.push(u.x,u.y,u.z),f.copy(u).normalize(),S.push(f.x,f.y,f.z),g.push(I+p,1-M),m.push(c++)}h.push(m)}for(let x=0;x<n;x++)for(let m=0;m<t;m++){let M=h[x][m+1],y=h[x][m],w=h[x+1][m],T=h[x+1][m+1];(x!==0||a>0)&&d.push(M,y,T),(x!==n-1||l<Math.PI)&&d.push(y,w,T)}this.setIndex(d),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(S,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ji=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new z,d=new z,v=new z;for(let S=0;S<=n;S++){let g=a+S/n*o;for(let x=0;x<=s;x++){let m=x/s*r;d.x=(e+t*Math.cos(g))*Math.cos(m),d.y=(e+t*Math.cos(g))*Math.sin(m),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),f.x=e*Math.cos(m),f.y=e*Math.sin(m),v.subVectors(d,f).normalize(),h.push(v.x,v.y,v.z),u.push(x/s),u.push(S/n)}}for(let S=1;S<=n;S++)for(let g=1;g<=s;g++){let x=(s+1)*S+g-1,m=(s+1)*(S-1)+g-1,M=(s+1)*(S-1)+g,y=(s+1)*S+g;l.push(x,m,y),l.push(m,M,y)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ep(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ep(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Tn(i){let e={};for(let t=0;t<i.length;t++){let n=ir(i[t]);for(let s in n)e[s]=n[s]}return e}function Ep(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var xn={clone:ir,merge:Tn},gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gx,this.fragmentShader=xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(s.value);break;case"v2":this.uniforms[n].value=new ye().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xr=class extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qt=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},In=class extends qt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return zs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){zs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ro=class extends mn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},ao=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=fc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ec=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tc=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ca(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function vx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function wp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function _x(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nc=class extends bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mu,endingEnd:mu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gu:r=e,o=2*t-n;break;case xu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gu:a=e,l=2*n-t;break;case xu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,v=(n-t)/(s-t),S=v*v,g=S*v,x=-f*g+2*f*S-f*v,m=(1+f)*g+(-1.5-2*f)*S+(-.5+f)*v+1,M=(-1-d)*g+(1.5+d)*S+.5*v,y=d*g-d*S;for(let w=0;w!==o;++w)r[w]=x*a[h+w]+m*a[c+w]+M*a[l+w]+y*a[u+w];return r}},ic=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},sc=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},rc=class extends bi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let v=(n-t)/(s-t),S=1-v;for(let g=0;g!==o;++g)r[g]=a[c+g]*S+a[l+g]*v;return r}let f=o*2,d=e-1;for(let v=0;v!==o;++v){let S=a[c+v],g=a[l+v],x=d*f+v*2,m=u[x],M=u[x+1],y=e*f+v*2,w=h[y],T=h[y+1],p=Mx(n,t,m,w,s);r[v]=Mm(p,S,M,T,g)}return r}};function Mm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function yx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Mx(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Mm(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=yx(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ca(e.settings)&&(n.settings={inTangents:gs(e.settings.inTangents,Array),outTangents:gs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new rc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case Dl:t=this.InterpolantFactoryMethodSmooth;break;case pu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return Dl;case this.InterpolantFactoryMethodBezier:return pu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ca(this.settings)&&(Ap(this.settings.inTangents,e),Ap(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ca(this.settings)&&(Rp(this.settings.inTangents,e),Rp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){et("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ag(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Dl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let v=0;v!==n;++v){let S=t[u+v];if(S!==t[f+v]||S!==t[d+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ca(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ap(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Rp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Gs;var Zi=class extends Fn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Hs;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};oo.prototype.ValueTypeName="color";var Ji=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};Ji.prototype.ValueTypeName="number";var ac=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Wn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qi=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}};Qi.prototype.ValueTypeName="quaternion";Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Fn{constructor(e,t,n){super(e,t,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Hs;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};Ts.prototype.ValueTypeName="vector";var lo=class{constructor(e="",t=-1,n=[],s=nm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=mi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(bx(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Fn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=vx(l);l=wp(l,1,h),c=wp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ji(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Sx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ji;case"vector":case"vector2":case"vector3":case"vector4":return Ts;case"color":return oo;case"quaternion":return Qi;case"bool":case"boolean":return Zi;case"string":return es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function bx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Sx(i.type);if(i.times===void 0){let n=[],s=[];_x(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ca(i.settings)&&(t.settings={inTangents:gs(i.settings.inTangents,Float32Array),outTangents:gs(i.settings.outTangents,Float32Array)}),t}var yi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Cp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Cp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Cp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var oc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],v=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sm=new oc,Ti=class{constructor(e){this.manager=e!==void 0?e:Sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gi={},bu=class extends Error{constructor(e,t){super(e),this.response=t}},$r=class extends Ti{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=yi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:n,onError:s});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Gi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,v=d!==0,S=0,g=new ReadableStream({start(x){m();function m(){u.read().then(({done:M,value:y})=>{if(M)x.close();else{S+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:v,loaded:S,total:d});for(let T=0,p=h.length;T<p;T++){let _=h[T];_.onProgress&&_.onProgress(w)}x.enqueue(y),m()}},M=>{x.error(M)})}}});return new Response(g)}else throw new bu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(v=>d.decode(v))}}}).then(c=>{yi.add(`file:${e}`,c);let h=Gi[e];delete Gi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Gi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Gi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Cr=new WeakMap,lc=class extends Ti{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Cr.get(a);u===void 0&&(u=[],Cr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Fr("img");function l(){h(),t&&t(this);let u=Cr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Cr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),yi.remove(`image:${e}`);let f=Cr.get(this)||[];for(let d=0;d<f.length;d++){let v=f[d];v.onError&&v.onError(u)}Cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),yi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var co=class extends Ti{constructor(e){super(e)}load(e,t,n,s){let r=new jt,a=new lc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},js=class extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ho=class extends js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},uu=new Ke,Pp=new z,Ip=new z,qr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Pp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pp),Ip.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ip),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){uu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ur||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Il=new z,Ll=new Wn,_i=new z,uo=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Il,Ll,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ll,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Il,Ll,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ll,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new z,Lp=new ye,Dp=new ye,tn=class extends uo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,Lp,Dp),t.subVectors(Dp,Lp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tu=class extends qr{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},fo=class extends js{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Tu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Eu=class extends qr{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},Zs=class extends js{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Eu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ts=class extends uo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wu=class extends qr{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Es=class extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new wu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ns=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var fu=new WeakMap,po=class extends Ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&Ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&Ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{fu.has(a)===!0?(s&&s(fu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return yi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),fu.set(l,c),yi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});yi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Pr=-90,Ir=1,Yr=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Pr,Ir,e,t);s.layers=this.layers,this.add(s);let r=new tn(Pr,Ir,e,t);r.layers=this.layers,this.add(r);let a=new tn(Pr,Ir,e,t);a.layers=this.layers,this.add(a);let o=new tn(Pr,Ir,e,t);o.layers=this.layers,this.add(o);let l=new tn(Pr,Ir,e,t);l.layers=this.layers,this.add(l);let c=new tn(Pr,Ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},cc=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},mo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Tx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Tx(){this._document.hidden===!1&&this.reset()}var ef="\\[\\]\\.:\\/",Ex=new RegExp("["+ef+"]","g"),tf="[^"+ef+"]",wx="[^"+ef.replace("\\.","")+"]",Ax=/((?:WC+[\/:])*)/.source.replace("WC",tf),Rx=/(WCOD+)?/.source.replace("WCOD",wx),Cx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tf),Px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tf),Ix=new RegExp("^"+Ax+Rx+Cx+Px+"$"),Lx=["material","materials","bones","map"],Au=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ex,"")}static parseTrackName(e){let t=Ix.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Au;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _b=new Float32Array(1);var Np=new Ke,ws=class{constructor(e,t,n=0,s=1/0){this.ray=new vs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Np.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Np),this}intersectObject(e,t=!0,n=[]){return Ru(e,this,n,t),n.sort(Up),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ru(e[s],this,n,t);return n.sort(Up),n}};function Up(i,e){return i.distance-e.distance}function Ru(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ru(r[a],e,t,!0)}}var lf=class lf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};lf.prototype.isMatrix2=!0;var Cu=lf;function nf(i,e,t,n){let s=Dx(n);switch(t){case zu:return i*e;case _c:return i*e/s.components*s.byteLength;case yc:return i*e/s.components*s.byteLength;case As:return i*e*2/s.components*s.byteLength;case Mc:return i*e*2/s.components*s.byteLength;case Hu:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case Sc:return i*e*4/s.components*s.byteLength;case To:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tc:case wc:return Math.max(i,16)*Math.max(e,8)/4;case bc:case Ec:return Math.max(i,8)*Math.max(e,8)/2;case Ac:case Rc:case Pc:case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cc:case Ro:case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case qc:case Yc:case Kc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jc:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Co:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dx(i){switch(i){case bn:case Fu:return{byteLength:1,components:1};case Qr:case Ou:case Gt:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case di:case gc:case qn:return{byteLength:4,components:1};case Bu:case ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Wm(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ux(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<u.length;d++){let v=u[f],S=u[d];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++f,u[f]=S)}u.length=f+1;for(let d=0,v=u.length;d<v;d++){let S=u[d];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ox=`#ifdef USE_ALPHAHASH
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
#endif`,Bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gx=`#ifdef USE_AOMAP
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
#endif`,Vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wx=`#ifdef USE_BATCHING
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
#endif`,Xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kx=`#ifdef USE_IRIDESCENCE
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
#endif`,jx=`#ifdef USE_BUMPMAP
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
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rv=`#define PI 3.141592653589793
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
} // validated`,av=`vec3 transformedNormal = objectNormal;
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
#endif`,ov=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",fv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dv=`#ifdef USE_ENVMAP
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
#endif`,pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_v=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sv=`#ifdef USE_GRADIENTMAP
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
}`,bv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Av=`#ifdef USE_ENVMAP
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
#endif`,Rv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lv=`PhysicalMaterial material;
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
#endif`,Dv=`uniform sampler2D dfgLUT;
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
}`,Nv=`
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
#endif`,Uv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ov=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xv=`#if defined( USE_POINTS_UV )
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
#endif`,$v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kv=`#if defined( USE_MORPHCOLORS )
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
#endif`,jv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zv=`#ifdef USE_MORPHTARGETS
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
#endif`,Jv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,s_=`#ifdef USE_NORMALMAP
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
#endif`,r_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,__=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y_=`float getShadowMask() {
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
}`,M_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S_=`#ifdef USE_SKINNING
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
#endif`,b_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,E_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C_=`#ifdef USE_TRANSMISSION
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
#endif`,P_=`#ifdef USE_TRANSMISSION
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
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F_=`uniform sampler2D t2D;
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
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B_=`uniform float backgroundBlurriness;
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`#include <common>
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
}`,G_=`#if DEPTH_PACKING == 3200
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
}`,V_=`#define DISTANCE
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
}`,W_=`#define DISTANCE
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
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`uniform float scale;
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
}`,Y_=`uniform vec3 diffuse;
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
}`,K_=`#include <common>
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
}`,j_=`uniform vec3 diffuse;
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
}`,Z_=`#define LAMBERT
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
}`,J_=`#define LAMBERT
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
}`,Q_=`#define MATCAP
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
}`,ey=`#define MATCAP
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
}`,ty=`#define NORMAL
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
}`,ny=`#define NORMAL
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
}`,iy=`#define PHONG
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
}`,sy=`#define PHONG
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
}`,ry=`#define STANDARD
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
}`,ay=`#define STANDARD
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
}`,oy=`#define TOON
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
}`,ly=`#define TOON
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
}`,cy=`uniform float size;
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
}`,hy=`uniform vec3 diffuse;
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
}`,uy=`#include <common>
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
}`,fy=`uniform vec3 color;
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
}`,dy=`uniform float rotation;
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
}`,py=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Fx,alphahash_pars_fragment:Ox,alphamap_fragment:Bx,alphamap_pars_fragment:kx,alphatest_fragment:zx,alphatest_pars_fragment:Hx,aomap_fragment:Gx,aomap_pars_fragment:Vx,batching_pars_vertex:Wx,batching_vertex:Xx,begin_vertex:$x,beginnormal_vertex:qx,bsdfs:Yx,iridescence_fragment:Kx,bumpmap_pars_fragment:jx,clipping_planes_fragment:Zx,clipping_planes_pars_fragment:Jx,clipping_planes_pars_vertex:Qx,clipping_planes_vertex:ev,color_fragment:tv,color_pars_fragment:nv,color_pars_vertex:iv,color_vertex:sv,common:rv,defaultnormal_vertex:av,displacementmap_pars_vertex:ov,displacementmap_vertex:lv,emissivemap_fragment:cv,emissivemap_pars_fragment:hv,colorspace_fragment:uv,colorspace_pars_fragment:fv,envmap_fragment:dv,envmap_common_pars_fragment:pv,envmap_pars_fragment:mv,envmap_pars_vertex:gv,envmap_physical_pars_fragment:Av,envmap_vertex:xv,fog_vertex:vv,fog_pars_vertex:_v,fog_fragment:yv,fog_pars_fragment:Mv,gradientmap_pars_fragment:Sv,lightmap_pars_fragment:bv,lights_lambert_fragment:Tv,lights_lambert_pars_fragment:Ev,lights_pars_begin:wv,lights_toon_fragment:Rv,lights_toon_pars_fragment:Cv,lights_phong_fragment:Pv,lights_phong_pars_fragment:Iv,lights_physical_fragment:Lv,lights_physical_pars_fragment:Dv,lights_fragment_begin:Nv,lights_fragment_maps:Uv,lights_fragment_end:Fv,lightprobes_pars_fragment:Ov,logdepthbuf_fragment:Bv,logdepthbuf_pars_fragment:kv,logdepthbuf_pars_vertex:zv,logdepthbuf_vertex:Hv,map_fragment:Gv,map_pars_fragment:Vv,map_particle_fragment:Wv,map_particle_pars_fragment:Xv,metalnessmap_fragment:$v,metalnessmap_pars_fragment:qv,morphinstance_vertex:Yv,morphcolor_vertex:Kv,morphnormal_vertex:jv,morphtarget_pars_vertex:Zv,morphtarget_vertex:Jv,normal_fragment_begin:Qv,normal_fragment_maps:e_,normal_pars_fragment:t_,normal_pars_vertex:n_,normal_vertex:i_,normalmap_pars_fragment:s_,clearcoat_normal_fragment_begin:r_,clearcoat_normal_fragment_maps:a_,clearcoat_pars_fragment:o_,iridescence_pars_fragment:l_,opaque_fragment:c_,packing:h_,premultiplied_alpha_fragment:u_,project_vertex:f_,dithering_fragment:d_,dithering_pars_fragment:p_,roughnessmap_fragment:m_,roughnessmap_pars_fragment:g_,shadowmap_pars_fragment:x_,shadowmap_pars_vertex:v_,shadowmap_vertex:__,shadowmask_pars_fragment:y_,skinbase_vertex:M_,skinning_pars_vertex:S_,skinning_vertex:b_,skinnormal_vertex:T_,specularmap_fragment:E_,specularmap_pars_fragment:w_,tonemapping_fragment:A_,tonemapping_pars_fragment:R_,transmission_fragment:C_,transmission_pars_fragment:P_,uv_pars_fragment:I_,uv_pars_vertex:L_,uv_vertex:D_,worldpos_vertex:N_,background_vert:U_,background_frag:F_,backgroundCube_vert:O_,backgroundCube_frag:B_,cube_vert:k_,cube_frag:z_,depth_vert:H_,depth_frag:G_,distance_vert:V_,distance_frag:W_,equirect_vert:X_,equirect_frag:$_,linedashed_vert:q_,linedashed_frag:Y_,meshbasic_vert:K_,meshbasic_frag:j_,meshlambert_vert:Z_,meshlambert_frag:J_,meshmatcap_vert:Q_,meshmatcap_frag:ey,meshnormal_vert:ty,meshnormal_frag:ny,meshphong_vert:iy,meshphong_frag:sy,meshphysical_vert:ry,meshphysical_frag:ay,meshtoon_vert:oy,meshtoon_frag:ly,points_vert:cy,points_frag:hy,shadow_vert:uy,shadow_frag:fy,sprite_vert:dy,sprite_frag:py},Be={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ci={basic:{uniforms:Tn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Tn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Tn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Tn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Tn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Le(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Tn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Tn([Be.points,Be.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Tn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Tn([Be.common,Be.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Tn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Tn([Be.sprite,Be.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Tn([Be.common,Be.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Tn([Be.lights,Be.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ci.physical={uniforms:Tn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var eh={r:0,b:0,g:0},my=new Ke,Xm=new st;Xm.set(-1,0,0,0,1,0,0,0,1);function gy(i,e,t,n,s,r){let a=new Le(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(m){let M=m.isScene===!0?m.background:null;if(M&&M.isTexture){let y=m.backgroundBlurriness>0;M=e.get(M,y)}return M}function v(m){let M=!1,y=d(m);y===null?g(a,o):y&&y.isColor&&(g(y,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(m,M){let y=d(M);y&&y.isCubeTexture?(c===void 0&&(c=new Je(new kt(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:ir(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(my.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xm),c.material.toneMapped=ct.getTransfer(y.colorSpace)!==St,(h!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Je(new Ki(2,2),new Ct({name:"BackgroundMaterial",uniforms:ir(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ct.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,M){m.getRGB(eh,Qu(i)),t.buffers.color.setClear(eh.r,eh.g,eh.b,M,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,M=1){a.set(m),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:v,addToRenderList:S,dispose:x}}function xy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(R,P,N,b,D){let O=!1,U=u(R,b,N,P);r!==U&&(r=U,c(r.object)),O=d(R,b,N,D),O&&v(R,b,N,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,y(R,P,N,b),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function u(R,P,N,b){let D=b.wireframe===!0,O=n[P.id];O===void 0&&(O={},n[P.id]=O);let U=R.isInstancedMesh===!0?R.id:0,G=O[U];G===void 0&&(G={},O[U]=G);let H=G[N.id];H===void 0&&(H={},G[N.id]=H);let F=H[D];return F===void 0&&(F=f(l()),H[D]=F),F}function f(R){let P=[],N=[],b=[];for(let D=0;D<t;D++)P[D]=0,N[D]=0,b[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:b,object:R,attributes:{},index:null}}function d(R,P,N,b){let D=r.attributes,O=P.attributes,U=0,G=N.getAttributes();for(let H in G)if(G[H].location>=0){let k=D[H],W=O[H];if(W===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(W=R.instanceColor)),k===void 0||k.attribute!==W||W&&k.data!==W.data)return!0;U++}return r.attributesNum!==U||r.index!==b}function v(R,P,N,b){let D={},O=P.attributes,U=0,G=N.getAttributes();for(let H in G)if(G[H].location>=0){let k=O[H];k===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(k=R.instanceColor));let W={};W.attribute=k,k&&k.data&&(W.data=k.data),D[H]=W,U++}r.attributes=D,r.attributesNum=U,r.index=b}function S(){let R=r.newAttributes;for(let P=0,N=R.length;P<N;P++)R[P]=0}function g(R){x(R,0)}function x(R,P){let N=r.newAttributes,b=r.enabledAttributes,D=r.attributeDivisors;N[R]=1,b[R]===0&&(i.enableVertexAttribArray(R),b[R]=1),D[R]!==P&&(i.vertexAttribDivisor(R,P),D[R]=P)}function m(){let R=r.newAttributes,P=r.enabledAttributes;for(let N=0,b=P.length;N<b;N++)P[N]!==R[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function M(R,P,N,b,D,O,U){U===!0?i.vertexAttribIPointer(R,P,N,D,O):i.vertexAttribPointer(R,P,N,b,D,O)}function y(R,P,N,b){S();let D=b.attributes,O=N.getAttributes(),U=P.defaultAttributeValues;for(let G in O){let H=O[G];if(H.location>=0){let F=D[G];if(F===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),F!==void 0){let k=F.normalized,W=F.itemSize,J=e.get(F);if(J===void 0)continue;let B=J.buffer,Z=J.type,X=J.bytesPerElement,se=Z===i.INT||Z===i.UNSIGNED_INT||F.gpuType===gc;if(F.isInterleavedBufferAttribute){let he=F.data,q=he.isInterleavedBuffer===!0?he.stride:he.itemSize,re=F.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let fe=0;fe<H.locationSize;fe++)x(H.location+fe,he.meshPerAttribute);R.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let fe=0;fe<H.locationSize;fe++)g(H.location+fe);i.bindBuffer(i.ARRAY_BUFFER,B);for(let fe=0;fe<H.locationSize;fe++)M(H.location+fe,W/H.locationSize,Z,k,q*X,(re+W/H.locationSize*fe)*X,se)}else{if(F.isInstancedBufferAttribute){for(let he=0;he<H.locationSize;he++)x(H.location+he,F.meshPerAttribute);R.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let he=0;he<H.locationSize;he++)g(H.location+he);i.bindBuffer(i.ARRAY_BUFFER,B);for(let he=0;he<H.locationSize;he++)M(H.location+he,W/H.locationSize,Z,k,W*X,W/H.locationSize*he*X,se)}}else if(U!==void 0){let k=U[G];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(H.location,k);break;case 3:i.vertexAttrib3fv(H.location,k);break;case 4:i.vertexAttrib4fv(H.location,k);break;default:i.vertexAttrib1fv(H.location,k)}}}}m()}function w(){I();for(let R in n){let P=n[R];for(let N in P){let b=P[N];for(let D in b){let O=b[D];for(let U in O)h(O[U].object),delete O[U];delete b[D]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;let P=n[R.id];for(let N in P){let b=P[N];for(let D in b){let O=b[D];for(let U in O)h(O[U].object),delete O[U];delete b[D]}}delete n[R.id]}function p(R){for(let P in n){let N=n[P];for(let b in N){let D=N[b];if(D[R.id]===void 0)continue;let O=D[R.id];for(let U in O)h(O[U].object),delete O[U];delete D[R.id]}}}function _(R){for(let P in n){let N=n[P],b=R.isInstancedMesh===!0?R.id:0,D=N[b];if(D!==void 0){for(let O in D){let U=D[O];for(let G in U)h(U[G].object),delete U[G];delete D[O]}delete N[b],Object.keys(N).length===0&&delete n[P]}}}function I(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:p,initAttributes:S,enableAttribute:g,disableUnusedAttributes:m}}function vy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _y(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let p=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(p){return!(p!==On&&n.convert(p)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(p){let _=p===Gt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(p!==bn&&p!==qn&&!_&&n.convert(p)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(p){if(p==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ye("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:y,maxSamples:w,samples:T}}function yy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Vn,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let v=u.clippingPlanes,S=u.clipIntersection,g=u.clipShadows,x=i.get(u);if(!s||v===null||v.length===0||r&&!g)r?h(null):c();else{let m=r?0:n,M=m*4,y=x.clippingState||null;l.value=y,y=h(v,f,M,d);for(let w=0;w!==M;++w)y[w]=t[w];x.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,v){let S=u!==null?u.length:0,g=null;if(S!==0){if(g=l.value,v!==!0||g===null){let x=d+S*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<x)&&(g=new Float32Array(x));for(let M=0,y=d;M!==S;++M,y+=4)a.copy(u[M]).applyMatrix4(m,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}var Do=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kt(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:hn});r.uniforms.tEquirect.value=t;let a=new Je(s,r),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=nn),new Yr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},bm=256,My=3,Sy=20,$m=256,qm=16,by=3,Ty=new z,Ey=new Le,ia=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Yr(1,10,null),this._boxMesh=new Je(new kt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ty}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,v=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(Ey));let g=new Yr(n,s,h);return g.position.copy(o),g.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=v,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(bm,Ku(e))}_fromTexture(e,t){e.mapping===tr||e.mapping===Zr?this._setSize(e.image.length===0?bm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Tm(e,!1,!1),n=Math.log2(e)-My;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Tm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===tr||e.mapping===Zr?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Em()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=wy(),this._integrationMaterial=Ay());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/qm);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-by)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/($m*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ry());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Tm(i,e,t){return new Do(i,{minFilter:ii,generateMipmaps:e,type:Gt,colorSpace:Pn,depthBuffer:t})}function No(i,e,t){return new Ct({name:i,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:gn,blending:hn,depthTest:!1,depthWrite:!1})}function wy(){return No("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$m}u

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
	`)}function Ay(){return No("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qm}},`

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
	`)}function Ry(){return No("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Sy}
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
	`)}function Em(){return No("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function wm(){return No("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===dc||d===pc)if(e.has(f)){let v=e.get(f).texture;return o(v,f.mapping)}else{let v=f.image;if(v&&v.height>0){let S=new Do(v.height);return S.fromEquirectangularTexture(i,f),e.set(f,S),f.addEventListener("dispose",c),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,v=d===dc||d===pc,S=d===tr||d===Zr;if(v||S){let g=t.get(f),x=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new ia(i)),g=v?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let m=f.image;return v&&m&&m.height>0||S&&m&&l(m)?(n===null&&(n=new ia(i)),g=v?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,d){return d===dc?f.mapping=tr:d===pc&&(f.mapping=Zr),f}function l(f){let d=0,v=6;for(let S=0;S<v;S++)f[S]!==void 0&&d++;return d===v}function c(f){let d=f.target;d.removeEventListener("dispose",c);let v=e.get(d);v!==void 0&&(e.delete(d),v.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Py(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&zs("WebGLRenderer: "+n+" extension not supported."),s}}}function Iy(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(let g in v.attributes)e.remove(v.attributes[g]);v.removeEventListener("dispose",o),delete s[v.id],a.unregister(v);let S=r.get(v);S&&(e.remove(S),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(v,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(v){let S=v.attributes;for(let g in S)e.update(S[g],i.ARRAY_BUFFER)}function u(v){let S=v.index,g=v.attributes.position,x=0;if(g===void 0)return;let m=S!==null?S.array.length:g.array.length/3-1,M=g.count>=65535?ka:Ba,y=new M(Math.ceil(m/3)*6,1),w=y.array;if(S!==null){let p=S.array;x=S.version;for(let _=0,I=0;_<m;_+=3){let A=p[_+0],R=p[_+1],P=p[_+2];w[I++]=A,w[I++]=R,w[I++]=R,w[I++]=P,w[I++]=P,w[I++]=A}}else{x=g.version;for(let p=0,_=0;p<m;p+=3){let I=p+0,A=p+1,R=p+2;w[_++]=I,w[_++]=A,w[_++]=A,w[_++]=R,w[_++]=R,w[_++]=I}}y.version=x;let T=r.get(v);T&&e.remove(T),r.set(v,y)}function f(v){let S=r.get(v);if(S){let g=v.index;g!==null&&S.version<g.version&&u(v)}else u(v);return r.get(v)}function d(){for(let v in s){let S=s[v].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function Ly(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*a,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let S=0;for(let g=0;g<d;g++)S+=f[g];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Dy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ny(i,e,t){let n=new WeakMap,s=new bt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let I=function(){p.dispose(),n.delete(o),o.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],M=0;d===!0&&(M=1),v===!0&&(M=2),S===!0&&(M=3);let y=o.attributes.position.count*M,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*w*4*u),p=new Fa(T,y,w,u);p.type=qn,p.needsUpdate=!0;let _=M*4;for(let A=0;A<u;A++){let R=g[A],P=x[A],N=m[A],b=y*w*4*A;for(let D=0;D<R.count;D++){let O=D*_;d===!0&&(s.fromBufferAttribute(R,D),T[b+O+0]=s.x,T[b+O+1]=s.y,T[b+O+2]=s.z,T[b+O+3]=0),v===!0&&(s.fromBufferAttribute(P,D),T[b+O+4]=s.x,T[b+O+5]=s.y,T[b+O+6]=s.z,T[b+O+7]=0),S===!0&&(s.fromBufferAttribute(N,D),T[b+O+8]=s.x,T[b+O+9]=s.y,T[b+O+10]=s.z,T[b+O+11]=N.itemSize===4?s.w:1)}}f={count:u,texture:p,size:new ye(y,w)},n.set(o,f),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Uy(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Fy={[vo]:"LINEAR_TONE_MAPPING",[_o]:"REINHARD_TONE_MAPPING",[yo]:"CINEON_TONE_MAPPING",[Mo]:"ACES_FILMIC_TONE_MAPPING",[bo]:"AGX_TONE_MAPPING",[er]:"NEUTRAL_TONE_MAPPING",[So]:"CUSTOM_TONE_MAPPING"};function Oy(i,e,t,n,s,r){let a=new Ft(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new At;h.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ht([0,2,0,0,2,0],2));let u=new Xr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Je(h,u),d=new ts(-1,1,1,-1,0,1),v=null,S=null,g=!1,x,m=null,M=[],y=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let p=0;p<M.length;p++){let _=M[p];_.setSize&&_.setSize(w,T)}},this.setEffects=function(w){M=w,y=M.length>0&&M[0].isRenderPass===!0;let T=a.width,p=a.height;M.length>0&&o===null&&(o=new Ft(T,p,{type:Gt,depthBuffer:!1,stencilBuffer:!1}),l=new Ft(T,p,{type:Gt,depthBuffer:!1,stencilBuffer:!1}));let _=s===!0&&M.some(I=>I.needsDepthTexture===!0);_!==(a.depthTexture!==null)&&(_===!0&&c===null&&(c=new fi(T,p),r===!0&&(c.format=pi,c.type=is)),a.dispose(),a.depthTexture=_?c:null,a.resolveDepthBuffer=_,a.storeMultisampledDepthBuffer=_);for(let I=0;I<M.length;I++){let A=M[I];A.setSize&&A.setSize(T,p),_&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(w,T){if(g||w.toneMapping===wi&&M.length===0)return!1;if(m=T,T!==null){let p=T.width,_=T.height;(a.width!==p||a.height!==_)&&this.setSize(p,_)}return y===!1&&w.setRenderTarget(a),x=w.toneMapping,w.toneMapping=wi,!0},this.hasRenderPass=function(){return y},this.end=function(w,T){w.toneMapping=x,g=!0;let p=a,_=o;for(let I=0;I<M.length;I++){let A=M[I];A.enabled!==!1&&(A.render(w,_,p,T),A.needsSwap!==!1&&(p=_,_=_===o?l:o))}if(v!==w.outputColorSpace||S!==w.toneMapping){v=w.outputColorSpace,S=w.toneMapping,u.defines={},ct.getTransfer(v)===St&&(u.defines.SRGB_TRANSFER="");let I=Fy[S];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=p.texture,w.setRenderTarget(m),w.render(f,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Ym=new jt,Km=new fi(1,1),jm=new Xa(1),Zm=new Fa,Jm=new Wl,Qm=new Wa,Am=[],Rm=[],Cm=new Float32Array(16),Pm=new Float32Array(9),Im=new Float32Array(4);function sa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Am[s];if(r===void 0&&(r=new Float32Array(s),Am[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ih(i,e){let t=Rm[e];t===void 0&&(t=new Int32Array(e),Rm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function By(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function Gy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Im.set(n),i.uniformMatrix2fv(this.addr,!1,Im),rn(t,n)}}function Vy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Pm.set(n),i.uniformMatrix3fv(this.addr,!1,Pm),rn(t,n)}}function Wy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Cm.set(n),i.uniformMatrix4fv(this.addr,!1,Cm),rn(t,n)}}function Xy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function Yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Ky(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function Zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function Jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function sh(i){return i.version===0&&(i.compareFunction=Xu,i.needsUpdate=!0),i}function Qy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=sh(Km):r=Ym,t.setTexture2D(e||r,s)}function eM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Jm,s)}function tM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=sh(jm):r=Qm,t.setTextureCube(e||r,s)}function nM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Zm,s)}function iM(i){switch(i){case 5126:return By;case 35664:return ky;case 35665:return zy;case 35666:return Hy;case 35674:return Gy;case 35675:return Vy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return $y;case 35668:case 35672:return qy;case 35669:case 35673:return Yy;case 5125:return Ky;case 36294:return jy;case 36295:return Zy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}function sM(i,e){i.uniform1fv(this.addr,e)}function rM(i,e){let t=sa(e,this.size,2);i.uniform2fv(this.addr,t)}function aM(i,e){let t=sa(e,this.size,3);i.uniform3fv(this.addr,t)}function oM(i,e){let t=sa(e,this.size,4);i.uniform4fv(this.addr,t)}function lM(i,e){let t=sa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cM(i,e){let t=sa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hM(i,e){let t=sa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function uM(i,e){i.uniform1iv(this.addr,e)}function fM(i,e){i.uniform2iv(this.addr,e)}function dM(i,e){i.uniform3iv(this.addr,e)}function pM(i,e){i.uniform4iv(this.addr,e)}function mM(i,e){i.uniform1uiv(this.addr,e)}function gM(i,e){i.uniform2uiv(this.addr,e)}function xM(i,e){i.uniform3uiv(this.addr,e)}function vM(i,e){i.uniform4uiv(this.addr,e)}function _M(i,e,t){let n=this.cache,s=e.length,r=ih(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=sh(Km):a=Ym;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function yM(i,e,t){let n=this.cache,s=e.length,r=ih(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Jm,r[a])}function MM(i,e,t){let n=this.cache,s=e.length,r=ih(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=sh(jm):a=Qm;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function SM(i,e,t){let n=this.cache,s=e.length,r=ih(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Zm,r[a])}function bM(i){switch(i){case 5126:return sM;case 35664:return rM;case 35665:return aM;case 35666:return oM;case 35674:return lM;case 35675:return cM;case 35676:return hM;case 5124:case 35670:return uM;case 35667:case 35671:return fM;case 35668:case 35672:return dM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return xM;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return SM}}var uf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iM(t.type)}},ff=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bM(t.type)}},df=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},cf=/(\w+)(\])?(\[|\.)?/g;function Lm(i,e){i.seq.push(e),i.map[e.id]=e}function TM(i,e,t){let n=i.name,s=n.length;for(cf.lastIndex=0;;){let r=cf.exec(n),a=cf.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lm(t,c===void 0?new uf(o,i,e):new ff(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new df(o),Lm(t,u)),t=u}}}var na=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);TM(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Dm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var EM=37297,wM=0;function AM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Nm=new st;function RM(i){ct._getMatrix(Nm,ct.workingColorSpace,i);let e=`mat3( ${Nm.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Na:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Um(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+AM(i.getShaderSource(e),o)}else return r}function CM(i,e){let t=RM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var PM={[vo]:"Linear",[_o]:"Reinhard",[yo]:"Cineon",[Mo]:"ACESFilmic",[bo]:"AgX",[er]:"Neutral",[So]:"Custom"};function IM(i,e){let t=PM[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var th=new z;function LM(){ct.getLuminanceCoefficients(th);let i=th.x.toFixed(4),e=th.y.toFixed(4),t=th.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function NM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function UM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Lo(i){return i!==""}function Fm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Om(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var FM=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(i){return i.replace(FM,OM)}function OM(i,e){let t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return pf(t)}var BM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(i){return i.replace(BM,kM)}function kM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function km(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var zM={[Js]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function HM(i){return zM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var GM={[Zr]:"ENVMAP_MODE_REFRACTION"};function VM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":GM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var WM={[fc]:"ENVMAP_BLENDING_MULTIPLY",[Qp]:"ENVMAP_BLENDING_MIX",[em]:"ENVMAP_BLENDING_ADD"};function XM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":WM[i.combine]||"ENVMAP_BLENDING_NONE"}function $M(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=HM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=VM(t),u=XM(t),f=DM(t),d=NM(r),v=s.createProgram(),S,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Lo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Lo).join(`
`),g.length>0&&(g+=`
`)):(S=[km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),g=[km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?ft.tonemapping_pars_fragment:"",t.toneMapping!==wi?IM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,CM("linearToOutputTexel",t.outputColorSpace),LM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),a=pf(a),a=Fm(a,t),a=Om(a,t),o=pf(o),o=Fm(o,t),o=Om(o,t),a=Bm(a),o=Bm(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",t.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let m=x+S+a,M=x+g+o,y=Dm(s,s.VERTEX_SHADER,m),w=Dm(s,s.FRAGMENT_SHADER,M);s.attachShader(v,y),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(A){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(v)||"",P=s.getShaderInfoLog(y)||"",N=s.getShaderInfoLog(w)||"",b=R.trim(),D=P.trim(),O=N.trim(),U=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,y,w);else{let H=Um(s,y,"vertex"),F=Um(s,w,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+b+`
`+H+`
`+F)}else b!==""?Ye("WebGLProgram: Program Info Log:",b):(D===""||O==="")&&(G=!1);G&&(A.diagnostics={runnable:U,programLog:b,vertexShader:{log:D,prefix:S},fragmentShader:{log:O,prefix:g}})}s.deleteShader(y),s.deleteShader(w),p=new na(s,v),_=UM(s,v)}let p;this.getUniforms=function(){return p===void 0&&T(this),p};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,EM)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=w,this}var qM=0,mf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gf(e),t.set(e,n)),n}},gf=class{constructor(e){this.id=qM++,this.code=e,this.usedTimes=0}};function YM(i){return i===As||i===Ro||i===Co}function KM(i,e,t,n,s,r){let a=new kr,o=new mf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(p){return l.add(p),p===0?"uv":`uv${p}`}function v(p,_,I,A,R,P){let N=A.fog,b=R.geometry,D=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?A.environment:null,O=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,U=e.get(p.envMap||D,O),G=f[p.type],H=n.precision;p.precision!==null&&(H=n.getMaxPrecision(p.precision),H!==p.precision&&Ye("WebGLProgram.getParameters:",p.precision,"not supported, using",H,"instead."));let F=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,k=F!==void 0?F.length:0,W=0;b.morphAttributes.position!==void 0&&(W=1),b.morphAttributes.normal!==void 0&&(W=2),b.morphAttributes.color!==void 0&&(W=3);let J,B,Z,X;if(G){let Ue=Ci[G];J=Ue.vertexShader,B=Ue.fragmentShader}else{J=p.vertexShader,B=p.fragmentShader;let Ue=o.getVertexShaderStage(p),wt=o.getFragmentShaderStage(p);o.update(p,Ue,wt),Z=Ue.id,X=wt.id}let se=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),q=R.isInstancedMesh===!0,re=R.isBatchedMesh===!0,fe=!!p.map,ne=!!p.matcap,Re=!!U,ie=Re&&U.isPMREMTexture===!0,_e=!!p.aoMap,le=!!p.lightMap,ve=!!p.bumpMap&&p.wireframe===!1,pe=!!p.normalMap,Fe=!!p.displacementMap,ze=!!p.emissiveMap,Oe=!!p.metalnessMap,$e=!!p.roughnessMap,Qe=p.anisotropy>0,$=p.clearcoat>0,mt=p.diffuseRoughness>0,Ze=p.dispersion>0,ue=p.retroreflectivity>0,j=p.iridescence>0,Me=p.sheen>0,xe=p.transmission>0,Ae=Qe&&!!p.anisotropyMap,L=$&&!!p.clearcoatMap,E=$&&!!p.clearcoatNormalMap,K=$&&!!p.clearcoatRoughnessMap,ge=mt&&!!p.diffuseRoughnessMap,ae=j&&!!p.iridescenceMap,Se=j&&!!p.iridescenceThicknessMap,Te=Me&&!!p.sheenColorMap,ce=Me&&!!p.sheenRoughnessMap,de=!!p.specularMap,be=!!p.specularColorMap,V=!!p.specularIntensityMap,me=xe&&!!p.transmissionMap,ee=xe&&!!p.thicknessMap,Ce=!!p.gradientMap,we=!!p.alphaMap,Pe=p.alphaTest>0,He=!!p.alphaHash,rt=!!p.extensions,Ee=wi;p.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let qe=ie?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,it={shaderID:G,shaderType:p.type,shaderName:p.name,vertexShader:J,fragmentShader:B,defines:p.defines,customVertexShaderID:Z,customFragmentShaderID:X,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:H,batching:re,batchingColor:re&&R._colorsTexture!==null,instancing:q,instancingColor:q&&R.instanceColor!==null,instancingMorph:q&&R.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:fe,matcap:ne,envMap:Re,envMapMode:Re&&U.mapping,envMapPMREM:ie,envMapMaxLod:ie?qe.length-1:null,envMapSize:ie?qe[0].width:null,aoMap:_e,lightMap:le,bumpMap:ve,normalMap:pe,displacementMap:Fe,emissiveMap:ze,normalMapObjectSpace:pe&&p.normalMapType===sm,normalMapTangentSpace:pe&&p.normalMapType===ta,packedNormalMap:pe&&p.normalMapType===ta&&YM(p.normalMap.format),metalnessMap:Oe,roughnessMap:$e,anisotropy:Qe,anisotropyMap:Ae,clearcoat:$,clearcoatMap:L,clearcoatNormalMap:E,clearcoatRoughnessMap:K,diffuseRoughness:mt,diffuseRoughnessMap:ge,dispersion:Ze,retroreflection:ue,iridescence:j,iridescenceMap:ae,iridescenceThicknessMap:Se,sheen:Me,sheenColorMap:Te,sheenRoughnessMap:ce,specularMap:de,specularColorMap:be,specularIntensityMap:V,transmission:xe,transmissionMap:me,thicknessMap:ee,gradientMap:Ce,opaque:p.transparent===!1&&p.blending===jr&&p.alphaToCoverage===!1,alphaMap:we,alphaTest:Pe,alphaHash:He,combine:p.combine,mapUv:fe&&d(p.map.channel),aoMapUv:_e&&d(p.aoMap.channel),lightMapUv:le&&d(p.lightMap.channel),bumpMapUv:ve&&d(p.bumpMap.channel),normalMapUv:pe&&d(p.normalMap.channel),displacementMapUv:Fe&&d(p.displacementMap.channel),emissiveMapUv:ze&&d(p.emissiveMap.channel),metalnessMapUv:Oe&&d(p.metalnessMap.channel),roughnessMapUv:$e&&d(p.roughnessMap.channel),anisotropyMapUv:Ae&&d(p.anisotropyMap.channel),clearcoatMapUv:L&&d(p.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&d(p.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ge&&d(p.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&d(p.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&d(p.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&d(p.sheenColorMap.channel),sheenRoughnessMapUv:ce&&d(p.sheenRoughnessMap.channel),specularMapUv:de&&d(p.specularMap.channel),specularColorMapUv:be&&d(p.specularColorMap.channel),specularIntensityMapUv:V&&d(p.specularIntensityMap.channel),transmissionMapUv:me&&d(p.transmissionMap.channel),thicknessMapUv:ee&&d(p.thicknessMap.channel),alphaMapUv:we&&d(p.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(pe||Qe),vertexNormals:!!b.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!b.attributes.uv&&(fe||we),fog:!!N,useFog:p.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||b.attributes.normal===void 0&&pe===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:b.attributes.position!==void 0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:W,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:P.filter(Ue=>Ue.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:p.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:fe&&p.map.isVideoTexture===!0&&ct.getTransfer(p.map.colorSpace)===St,decodeVideoTextureEmissive:ze&&p.emissiveMap.isVideoTexture===!0&&ct.getTransfer(p.emissiveMap.colorSpace)===St,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Bt,flipSided:p.side===gn,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:rt&&p.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&p.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function S(p){let _=[];if(p.shaderID?_.push(p.shaderID):(_.push(p.customVertexShaderID),_.push(p.customFragmentShaderID)),p.defines!==void 0)for(let I in p.defines)_.push(I),_.push(p.defines[I]);return p.isRawShaderMaterial===!1&&(g(_,p),x(_,p),_.push(i.outputColorSpace)),_.push(p.customProgramCacheKey),_.join()}function g(p,_){p.push(_.precision),p.push(_.outputColorSpace),p.push(_.envMapMode),p.push(_.envMapPMREM),p.push(_.envMapMaxLod),p.push(_.envMapSize),p.push(_.mapUv),p.push(_.alphaMapUv),p.push(_.lightMapUv),p.push(_.aoMapUv),p.push(_.bumpMapUv),p.push(_.normalMapUv),p.push(_.displacementMapUv),p.push(_.emissiveMapUv),p.push(_.metalnessMapUv),p.push(_.roughnessMapUv),p.push(_.anisotropyMapUv),p.push(_.clearcoatMapUv),p.push(_.clearcoatNormalMapUv),p.push(_.clearcoatRoughnessMapUv),p.push(_.diffuseRoughnessMapUv),p.push(_.iridescenceMapUv),p.push(_.iridescenceThicknessMapUv),p.push(_.sheenColorMapUv),p.push(_.sheenRoughnessMapUv),p.push(_.specularMapUv),p.push(_.specularColorMapUv),p.push(_.specularIntensityMapUv),p.push(_.transmissionMapUv),p.push(_.thicknessMapUv),p.push(_.combine),p.push(_.fogExp2),p.push(_.sizeAttenuation),p.push(_.morphTargetsCount),p.push(_.numSunLights),p.push(_.numDirLights),p.push(_.numPointLights),p.push(_.numSpotLights),p.push(_.numSpotLightMaps),p.push(_.numHemiLights),p.push(_.numRectAreaLights),p.push(_.numSunLightShadows),p.push(_.numDirLightShadows),p.push(_.numPointLightShadows),p.push(_.numSpotLightShadows),p.push(_.numSpotLightShadowsWithMaps),p.push(_.numLightProbes),p.push(_.numLightProbeGrids),p.push(_.shadowMapType),p.push(_.toneMapping),p.push(_.numClippingPlanes),p.push(_.numClipIntersection),p.push(_.depthPacking)}function x(p,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.retroreflection&&a.enable(24),_.diffuseRoughness&&a.enable(25),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),p.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),p.push(a.mask)}function m(p){let _=f[p.type],I;if(_){let A=Ci[_];I=xn.clone(A.uniforms)}else I=p.uniforms;return I}function M(p,_){let I=h.get(_);return I!==void 0?++I.usedTimes:(I=new $M(i,_,p,s),c.push(I),h.set(_,I)),I}function y(p){if(--p.usedTimes===0){let _=c.indexOf(p);c[_]=c[c.length-1],c.pop(),h.delete(p.cacheKey),p.destroy()}}function w(p){o.remove(p)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:S,getUniforms:m,acquireProgram:M,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:T}}function jM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ZM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function zm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,v,S,g,x){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:v,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:g,group:x},i[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=v,m.materialVariant=a(f),m.groupOrder=S,m.renderOrder=f.renderOrder,m.z=g,m.group=x),e++,m}function l(f,d,v,S,g,x,m){m.reversedDepth===!0&&(g=-g);let M=o(f,d,v,S,g,x);v.transmission>0?n.push(M):v.transparent===!0?s.push(M):t.push(M)}function c(f,d,v,S,g,x){let m=o(f,d,v,S,g,x);v.transmission>0?n.unshift(m):v.transparent===!0?s.unshift(m):t.unshift(m)}function h(f,d){t.length>1&&t.sort(f||ZM),n.length>1&&n.sort(d||zm),s.length>1&&s.sort(d||zm)}function u(){for(let f=e,d=i.length;f<d;f++){let v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function JM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Hm,i.set(n,[a])):s>=r.length?(a=new Hm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function QM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Le};break;case"SpotLight":t={position:new z,direction:new z,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function eS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tS=0;function nS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iS(i){let e=new QM,t=eS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new Ke,a=new Ke;function o(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,v=0,S=0,g=0,x=0,m=0,M=0,y=0,w=0,T=0,p=0,_=0,I=0,A=0;c.sort(nS);for(let P=0,N=c.length;P<N;P++){let b=c[P],D=b.color,O=b.intensity,U=b.distance,G=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===As?G=b.shadow.map.texture:G=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)h+=D.r*O,u+=D.g*O,f+=D.b*O;else if(b.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(b.sh.coefficients[H],O);A++}else if(b.isSunLight){let H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let F=b.shadow,k=t.get(b);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),n.sunShadow[v]=k,n.sunShadowMap[v]=G;let W=F.getViewportCount();for(let J=0;J<W;J++)n.sunShadowMatrix[S+J]=F.getMatrix(J),n.sunShadowCascade[S+J]=F._cascadeData[J];S+=W,v++}n.sun[d]=H,d++}else if(b.isDirectionalLight){let H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let F=b.shadow,k=t.get(b);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,n.directionalShadow[g]=k,n.directionalShadowMap[g]=G,n.directionalShadowMatrix[g]=b.shadow.matrix,w++}n.directional[g]=H,g++}else if(b.isSpotLight){let H=e.get(b);H.position.setFromMatrixPosition(b.matrixWorld),H.color.copy(D).multiplyScalar(O),H.distance=U,H.coneCos=Math.cos(b.angle),H.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),H.decay=b.decay,n.spot[m]=H;let F=b.shadow;if(b.map&&(n.spotLightMap[_]=b.map,_++,F.updateMatrices(b),b.castShadow&&I++),n.spotLightMatrix[m]=F.matrix,b.castShadow){let k=t.get(b);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,n.spotShadow[m]=k,n.spotShadowMap[m]=G,p++}m++}else if(b.isRectAreaLight){let H=e.get(b);H.color.copy(D).multiplyScalar(O),H.halfWidth.set(b.width*.5,0,0),H.halfHeight.set(0,b.height*.5,0),n.rectArea[M]=H,M++}else if(b.isPointLight){let H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),H.distance=b.distance,H.decay=b.decay,b.castShadow){let F=b.shadow,k=t.get(b);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,k.shadowCameraNear=F.camera.near,k.shadowCameraFar=F.camera.far,n.pointShadow[x]=k,n.pointShadowMap[x]=G,n.pointShadowMatrix[x]=b.shadow.matrix,T++}n.point[x]=H,x++}else if(b.isHemisphereLight){let H=e.get(b);H.skyColor.copy(b.color).multiplyScalar(O),H.groundColor.copy(b.groundColor).multiplyScalar(O),n.hemi[y]=H,y++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.sunLength!==d||R.directionalLength!==g||R.pointLength!==x||R.spotLength!==m||R.rectAreaLength!==M||R.hemiLength!==y||R.numSunShadows!==v||R.numDirectionalShadows!==w||R.numPointShadows!==T||R.numSpotShadows!==p||R.numSpotMaps!==_||R.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=g,n.spot.length=m,n.rectArea.length=M,n.point.length=x,n.hemi.length=y,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=p,n.spotShadowMap.length=p,n.spotLightMatrix.length=p+_-I,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=A,R.sunLength=d,R.directionalLength=g,R.pointLength=x,R.spotLength=m,R.rectAreaLength=M,R.hemiLength=y,R.numSunShadows=v,R.numDirectionalShadows=w,R.numPointShadows=T,R.numSpotShadows=p,R.numSpotMaps=_,R.numLightProbes=A,n.version=tS++)}function l(c,h){let u=0,f=0,d=0,v=0,S=0,g=0,x=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let y=c[m];if(y.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(x),u++}else if(y.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),f++}else if(y.isSpotLight){let w=n.spot[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),v++}else if(y.isRectAreaLight){let w=n.rectArea[S];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),a.identity(),r.copy(y.matrixWorld),r.premultiply(x),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),d++}else if(y.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(x),g++}}}return{setup:o,setupView:l,state:n}}function Gm(i){let e=new iS(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function sS(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Gm(i),e.set(s,[o])):r>=a.length?(o=new Gm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var rS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aS=`uniform sampler2D shadow_pass;
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
}`,oS=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],lS=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Vm=new Ke,Io=new z,hf=new z;function cS(i,e,t){let n=new _s,s=new ye,r=new ye,a=new bt,o=new ec,l=new tc,c={},h=t.maxTextureSize,u={[Ei]:gn,[gn]:Ei,[Bt]:Bt},f=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:rS,fragmentShader:aS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let v=new At;v.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Je(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let x=this.type;this.render=function(T,p,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Bp&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Js);let I=i.getRenderTarget(),A=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(hn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let N=x!==this.type;N&&p.traverse(function(b){b.material&&(Array.isArray(b.material)?b.material.forEach(D=>D.needsUpdate=!0):b.material.needsUpdate=!0)});for(let b=0,D=T.length;b<D;b++){let O=T[b],U=O.shadow;if(U===void 0){Ye("WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let G=U.getFrameExtents();s.multiply(G),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,U.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=H,U.map===null||N===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Kr){if(O.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Ft(s.x,s.y,{format:As,type:Gt,minFilter:nn,magFilter:nn,generateMipmaps:!1}),U.map.texture.name=O.name+".shadowMap",U.map.depthTexture=new fi(s.x,s.y,qn),U.map.depthTexture.name=O.name+".shadowMapDepth",U.map.depthTexture.format=Xi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ut,U.map.depthTexture.magFilter=Ut}else O.isPointLight?(U.map=new Do(s.x),U.map.depthTexture=new Xa(s.x,di)):(U.map=new Ft(s.x,s.y),U.map.depthTexture=new fi(s.x,s.y,di)),U.map.depthTexture.name=O.name+".shadowMap",U.map.depthTexture.format=Xi,this.type===Js?(U.map.depthTexture.compareFunction=H?Wu:Vu,U.map.depthTexture.minFilter=nn,U.map.depthTexture.magFilter=nn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ut,U.map.depthTexture.magFilter=Ut);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let F=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();O.isPointLight!==!0&&U.updateMatrices(O,_);let k=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:_.layers;for(let W=0;W<F;W++){let J=U.getCamera(W);if(O.isPointLight){let B=U.camera,Z=U.matrix,X=O.distance||B.far;X!==B.far&&(B.far=X,B.updateProjectionMatrix()),Io.setFromMatrixPosition(O.matrixWorld),B.position.copy(Io),hf.copy(B.position),hf.add(oS[W]),B.up.copy(lS[W]),B.lookAt(hf),B.updateMatrixWorld(),Z.makeTranslation(-Io.x,-Io.y,-Io.z),Vm.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Vm,B.coordinateSystem,B.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,W),i.clear();else{W===0&&(i.setRenderTarget(U.map),i.clear());let B=U.getViewport(W);a.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),P.viewport(a)}n=U.getFrustum(W),y(p,_,J,O,k,this.type)}U.isPointLightShadow!==!0&&this.type===Kr&&m(U,_),U.needsUpdate=!1}x=this.type,g.needsUpdate=!1,i.setRenderTarget(I,A,R)};function m(T,p){let _=e.update(S);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ft(s.x,s.y,{format:As,type:Gt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(p,null,_,f,S,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(p,null,_,d,S,null)}function M(T,p,_,I){let A=null,R=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)A=R;else if(A=_.isPointLight===!0?l:o,i.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0||p.alphaToCoverage===!0){let P=A.uuid,N=p.uuid,b=c[P];b===void 0&&(b={},c[P]=b);let D=b[N];D===void 0&&(D=A.clone(),b[N]=D,p.addEventListener("dispose",w)),A=D}if(A.visible=p.visible,A.wireframe=p.wireframe,I===Kr?A.side=p.shadowSide!==null?p.shadowSide:p.side:A.side=p.shadowSide!==null?p.shadowSide:u[p.side],A.alphaMap=p.alphaMap,A.alphaTest=p.alphaToCoverage===!0?.5:p.alphaTest,A.map=p.map,A.clipShadows=p.clipShadows,A.clippingPlanes=p.clippingPlanes,A.clipIntersection=p.clipIntersection,A.displacementMap=p.displacementMap,A.displacementScale=p.displacementScale,A.displacementBias=p.displacementBias,A.wireframeLinewidth=p.wireframeLinewidth,A.linewidth=p.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let P=i.properties.get(A);P.light=_}return A}function y(T,p,_,I,A,R){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Kr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let b=e.update(T),D=T.material;if(Array.isArray(D)){let O=b.groups;for(let U=0,G=O.length;U<G;U++){let H=O[U],F=D[H.materialIndex];if(F&&F.visible){let k=M(T,F,I,R);T.onBeforeShadow(i,T,p,_,b,k,H),i.renderBufferDirect(_,null,b,k,T,H),T.onAfterShadow(i,T,p,_,b,k,H)}}}else if(D.visible){let O=M(T,D,I,R);T.onBeforeShadow(i,T,p,_,b,O,null),i.renderBufferDirect(_,null,b,O,T,null),T.onAfterShadow(i,T,p,_,b,O,null)}}let N=T.children;for(let b=0,D=N.length;b<D;b++)y(N[b],p,_,I,A,R)}function w(T){T.target.removeEventListener("dispose",w);for(let _ in c){let I=c[_],A=T.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function hS(i,e){function t(){let V=!1,me=new bt,ee=null,Ce=new bt(0,0,0,0);return{setMask:function(we){ee!==we&&!V&&(i.colorMask(we,we,we,we),ee=we)},setLocked:function(we){V=we},setClear:function(we,Pe,He,rt,Ee){Ee===!0&&(we*=rt,Pe*=rt,He*=rt),me.set(we,Pe,He,rt),Ce.equals(me)===!1&&(i.clearColor(we,Pe,He,rt),Ce.copy(me))},reset:function(){V=!1,ee=null,Ce.set(-1,0,0,0)}}}function n(){let V=!1,me=!1,ee=null,Ce=null,we=null;return{setReversed:function(Pe){if(me!==Pe){let He=e.get("EXT_clip_control");Pe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),me=Pe;let rt=we;we=null,this.setClear(rt)}},getReversed:function(){return me},setTest:function(Pe){Pe?he(i.DEPTH_TEST):q(i.DEPTH_TEST)},setMask:function(Pe){ee!==Pe&&!V&&(i.depthMask(Pe),ee=Pe)},setFunc:function(Pe){if(me&&(Pe=pm[Pe]),Ce!==Pe){switch(Pe){case Ul:i.depthFunc(i.NEVER);break;case Fl:i.depthFunc(i.ALWAYS);break;case Ol:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Bl:i.depthFunc(i.EQUAL);break;case kl:i.depthFunc(i.GEQUAL);break;case zl:i.depthFunc(i.GREATER);break;case Hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=Pe}},setLocked:function(Pe){V=Pe},setClear:function(Pe){we!==Pe&&(we=Pe,me&&(Pe=1-Pe),i.clearDepth(Pe))},reset:function(){V=!1,ee=null,Ce=null,we=null,me=!1}}}function s(){let V=!1,me=null,ee=null,Ce=null,we=null,Pe=null,He=null,rt=null,Ee=null;return{setTest:function(qe){V||(qe?he(i.STENCIL_TEST):q(i.STENCIL_TEST))},setMask:function(qe){me!==qe&&!V&&(i.stencilMask(qe),me=qe)},setFunc:function(qe,it,Ue){(ee!==qe||Ce!==it||we!==Ue)&&(i.stencilFunc(qe,it,Ue),ee=qe,Ce=it,we=Ue)},setOp:function(qe,it,Ue){(Pe!==qe||He!==it||rt!==Ue)&&(i.stencilOp(qe,it,Ue),Pe=qe,He=it,rt=Ue)},setLocked:function(qe){V=qe},setClear:function(qe){Ee!==qe&&(i.clearStencil(qe),Ee=qe)},reset:function(){V=!1,me=null,ee=null,Ce=null,we=null,Pe=null,He=null,rt=null,Ee=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,v=[],S=null,g=!1,x=null,m=null,M=null,y=null,w=null,T=null,p=null,_=new Le(0,0,0),I=0,A=!1,R=null,P=null,N=null,b=null,D=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,G=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=G>=2);let F=null,k={},W=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),B=new bt().fromArray(W),Z=new bt().fromArray(J);function X(V,me,ee,Ce){let we=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(V,Pe),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<ee;He++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(me+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Pe}let se={};se[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),se[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),se[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(Dr),ve(!1),pe(Pu),he(i.CULL_FACE),_e(hn);function he(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function q(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function re(V,me){return f[V]!==me?(i.bindFramebuffer(V,me),f[V]=me,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=me),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=me),!0):!1}function fe(V,me){let ee=v,Ce=!1;if(V){ee=d.get(me),ee===void 0&&(ee=[],d.set(me,ee));let we=V.textures;if(ee.length!==we.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,He=we.length;Pe<He;Pe++)ee[Pe]=i.COLOR_ATTACHMENT0+Pe;ee.length=we.length,Ce=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(ee)}function ne(V){return S!==V?(i.useProgram(V),S=V,!0):!1}let Re={[ni]:i.FUNC_ADD,[kp]:i.FUNC_SUBTRACT,[zp]:i.FUNC_REVERSE_SUBTRACT};Re[Hp]=i.MIN,Re[Gp]=i.MAX;let ie={[Qs]:i.ZERO,[Vp]:i.ONE,[Wp]:i.SRC_COLOR,[Du]:i.SRC_ALPHA,[Yp]:i.SRC_ALPHA_SATURATE,[xo]:i.DST_COLOR,[go]:i.DST_ALPHA,[Xp]:i.ONE_MINUS_SRC_COLOR,[Nu]:i.ONE_MINUS_SRC_ALPHA,[qp]:i.ONE_MINUS_DST_COLOR,[$p]:i.ONE_MINUS_DST_ALPHA,[Kp]:i.CONSTANT_COLOR,[jp]:i.ONE_MINUS_CONSTANT_COLOR,[Zp]:i.CONSTANT_ALPHA,[Jp]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(V,me,ee,Ce,we,Pe,He,rt,Ee,qe){if(V===hn){g===!0&&(q(i.BLEND),g=!1);return}if(g===!1&&(he(i.BLEND),g=!0),V!==uc){if(V!==x||qe!==A){if((m!==ni||w!==ni)&&(i.blendEquation(i.FUNC_ADD),m=ni,w=ni),qe)switch(V){case jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFunc(i.ONE,i.ONE);break;case Iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",V);break}else switch(V){case jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Iu:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lu:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",V);break}M=null,y=null,T=null,p=null,_.set(0,0,0),I=0,x=V,A=qe}return}we=we||me,Pe=Pe||ee,He=He||Ce,(me!==m||we!==w)&&(i.blendEquationSeparate(Re[me],Re[we]),m=me,w=we),(ee!==M||Ce!==y||Pe!==T||He!==p)&&(i.blendFuncSeparate(ie[ee],ie[Ce],ie[Pe],ie[He]),M=ee,y=Ce,T=Pe,p=He),(rt.equals(_)===!1||Ee!==I)&&(i.blendColor(rt.r,rt.g,rt.b,Ee),_.copy(rt),I=Ee),x=V,A=!1}function le(V,me){V.side===Bt?q(i.CULL_FACE):he(i.CULL_FACE);let ee=V.side===gn;me&&(ee=!ee),ve(ee),V.blending===jr&&V.transparent===!1?_e(hn):_e(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let Ce=V.stencilWrite;o.setTest(Ce),Ce&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ze(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):q(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(V){R!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),R=V)}function pe(V){V!==Fp?(he(i.CULL_FACE),V!==P&&(V===Pu?i.cullFace(i.BACK):V===Op?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):q(i.CULL_FACE),P=V}function Fe(V){V!==N&&(U&&i.lineWidth(V),N=V)}function ze(V,me,ee){V?(he(i.POLYGON_OFFSET_FILL),(b!==me||D!==ee)&&(b=me,D=ee,a.getReversed()&&(me=-me,ee=-ee),i.polygonOffset(me,ee))):q(i.POLYGON_OFFSET_FILL)}function Oe(V){V?he(i.SCISSOR_TEST):q(i.SCISSOR_TEST)}function $e(V){V===void 0&&(V=i.TEXTURE0+O-1),F!==V&&(i.activeTexture(V),F=V)}function Qe(V,me,ee){ee===void 0&&(F===null?ee=i.TEXTURE0+O-1:ee=F);let Ce=k[ee];Ce===void 0&&(Ce={type:void 0,texture:void 0},k[ee]=Ce),(Ce.type!==V||Ce.texture!==me)&&(F!==ee&&(i.activeTexture(ee),F=ee),i.bindTexture(V,me||se[V]),Ce.type=V,Ce.texture=me)}function $(){let V=k[F];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function mt(){try{i.compressedTexImage2D(...arguments)}catch(V){et("WebGLState:",V)}}function Ze(){try{i.compressedTexImage3D(...arguments)}catch(V){et("WebGLState:",V)}}function ue(){try{i.texSubImage2D(...arguments)}catch(V){et("WebGLState:",V)}}function j(){try{i.texSubImage3D(...arguments)}catch(V){et("WebGLState:",V)}}function Me(){try{i.compressedTexSubImage2D(...arguments)}catch(V){et("WebGLState:",V)}}function xe(){try{i.compressedTexSubImage3D(...arguments)}catch(V){et("WebGLState:",V)}}function Ae(){try{i.texStorage2D(...arguments)}catch(V){et("WebGLState:",V)}}function L(){try{i.texStorage3D(...arguments)}catch(V){et("WebGLState:",V)}}function E(){try{i.texImage2D(...arguments)}catch(V){et("WebGLState:",V)}}function K(){try{i.texImage3D(...arguments)}catch(V){et("WebGLState:",V)}}function ge(V){return u[V]!==void 0?u[V]:i.getParameter(V)}function ae(V,me){u[V]!==me&&(i.pixelStorei(V,me),u[V]=me)}function Se(V){B.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),B.copy(V))}function Te(V){Z.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function ce(V,me){let ee=c.get(me);ee===void 0&&(ee=new WeakMap,c.set(me,ee));let Ce=ee.get(V);Ce===void 0&&(Ce=i.getUniformBlockIndex(me,V.name),i.uniformBlockBinding(me,Ce,Ce),ee.set(V,Ce))}function de(V,me,ee){let we=c.get(me).get(V);l[we]!==ee&&(i.bindBufferBase(i.UNIFORM_BUFFER,we,ee),l[we]=ee)}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},F=null,k={},f={},l={},d=new WeakMap,v=[],S=null,g=!1,x=null,m=null,M=null,y=null,w=null,T=null,p=null,_=new Le(0,0,0),I=0,A=!1,R=null,P=null,N=null,b=null,D=null,B.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:q,bindFramebuffer:re,drawBuffers:fe,useProgram:ne,setBlending:_e,setMaterial:le,setFlipSided:ve,setCullFace:pe,setLineWidth:Fe,setPolygonOffset:ze,setScissorTest:Oe,activeTexture:$e,bindTexture:Qe,unbindTexture:$,compressedTexImage2D:mt,compressedTexImage3D:Ze,texImage2D:E,texImage3D:K,pixelStorei:ae,getParameter:ge,updateUBOMapping:ce,uniformBlockBinding:de,texStorage2D:Ae,texStorage3D:L,texSubImage2D:ue,texSubImage3D:j,compressedTexSubImage2D:Me,compressedTexSubImage3D:xe,scissor:Se,viewport:Te,reset:be}}function uS(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,h=new WeakMap,u=new Set,f,d=new WeakMap,v=new Set,S=new FinalizationRegistry(L=>v.delete(L)),g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return g?new OffscreenCanvas(L,E):Fr("canvas")}function m(L,E,K){let ge=1,ae=Ae(L);if((ae.width>K||ae.height>K)&&(ge=K/Math.max(ae.width,ae.height)),ge<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let Se=Math.floor(ge*ae.width),Te=Math.floor(ge*ae.height);f===void 0&&(f=x(Se,Te));let ce=E?x(Se,Te):f;return ce.width=Se,ce.height=Te,ce.getContext("2d").drawImage(L,0,0,Se,Te),Ye("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Se+"x"+Te+")."),ce}else return"data"in L&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),L;return L}function M(L){return L.generateMipmaps}function y(L){i.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(L,E,K,ge,ae,Se=!1){if(L!==null){if(i[L]!==void 0)return i[L];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Te;ge&&(Te=e.get("EXT_texture_norm16"),Te||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=E;if(E===i.RED&&(K===i.FLOAT&&(ce=i.R32F),K===i.HALF_FLOAT&&(ce=i.R16F),K===i.UNSIGNED_BYTE&&(ce=i.R8),K===i.UNSIGNED_SHORT&&Te&&(ce=Te.R16_EXT),K===i.SHORT&&Te&&(ce=Te.R16_SNORM_EXT)),E===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ce=i.R8UI),K===i.UNSIGNED_SHORT&&(ce=i.R16UI),K===i.UNSIGNED_INT&&(ce=i.R32UI),K===i.BYTE&&(ce=i.R8I),K===i.SHORT&&(ce=i.R16I),K===i.INT&&(ce=i.R32I)),E===i.RG&&(K===i.FLOAT&&(ce=i.RG32F),K===i.HALF_FLOAT&&(ce=i.RG16F),K===i.UNSIGNED_BYTE&&(ce=i.RG8),K===i.UNSIGNED_SHORT&&Te&&(ce=Te.RG16_EXT),K===i.SHORT&&Te&&(ce=Te.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ce=i.RG8UI),K===i.UNSIGNED_SHORT&&(ce=i.RG16UI),K===i.UNSIGNED_INT&&(ce=i.RG32UI),K===i.BYTE&&(ce=i.RG8I),K===i.SHORT&&(ce=i.RG16I),K===i.INT&&(ce=i.RG32I)),E===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),K===i.UNSIGNED_INT&&(ce=i.RGB32UI),K===i.BYTE&&(ce=i.RGB8I),K===i.SHORT&&(ce=i.RGB16I),K===i.INT&&(ce=i.RGB32I)),E===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),K===i.UNSIGNED_INT&&(ce=i.RGBA32UI),K===i.BYTE&&(ce=i.RGBA8I),K===i.SHORT&&(ce=i.RGBA16I),K===i.INT&&(ce=i.RGBA32I)),E===i.RGB&&(K===i.UNSIGNED_SHORT&&Te&&(ce=Te.RGB16_EXT),K===i.SHORT&&Te&&(ce=Te.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),E===i.RGBA){let de=Se?Na:ct.getTransfer(ae);K===i.FLOAT&&(ce=i.RGBA32F),K===i.HALF_FLOAT&&(ce=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ce=de===St?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Te&&(ce=Te.RGBA16_EXT),K===i.SHORT&&Te&&(ce=Te.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function p(L,E){let K;return L?E===null||E===di||E===is?K=i.DEPTH24_STENCIL8:E===qn?K=i.DEPTH32F_STENCIL8:E===Qr&&(K=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===di||E===is?K=i.DEPTH_COMPONENT24:E===qn?K=i.DEPTH_COMPONENT32F:E===Qr&&(K=i.DEPTH_COMPONENT16),K}function _(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ut&&L.minFilter!==nn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function I(L){let E=new WeakRef(L);n.get(L).__ref=E,v.add(E),S.register(L,E,E)}function A(L){let E=n.get(L).__ref;E!==void 0&&(v.delete(E),S.unregister(E))}function R(L){N(L.target)}function P(L){b(L.target)}function N(L){L.removeEventListener("dispose",R),A(L),O(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function b(L){L.removeEventListener("dispose",P),A(L),G(L)}function D(){for(let L of v){let E=L.deref();E!==void 0&&(E.isRenderTarget===!0?b(E):N(E))}v.clear(),u.clear()}function O(L){let E=n.get(L);if(E.__webglInit===void 0)return;let K=L.source,ge=d.get(K);if(ge){let ae=ge[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&U(L),Object.keys(ge).length===0&&d.delete(K)}n.remove(L)}function U(L){let E=n.get(L);i.deleteTexture(E.__webglTexture);let K=L.source,ge=d.get(K);delete ge[E.__cacheKey],a.memory.textures--}function G(L){let E=n.get(L);E.__depthDisposeCallback&&E.__depthDisposeCallback();let K=L.depthTexture;if(K&&K.renderTarget===L&&N(K),L.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let Se=0;Se<E.__webglFramebuffer[ae].length;Se++)i.deleteFramebuffer(E.__webglFramebuffer[ae][Se]);else i.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[ae]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ge=L.textures;for(let ae=0,Se=ge.length;ae<Se;ae++){let Te=n.get(ge[ae]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(ge[ae])}n.remove(L)}let H=0;function F(){H=0}function k(){return H}function W(L){H=L}function J(){let L=H;return L>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,L}function B(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.mipmapsAutoUpdate),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Z(L,E){let K=n.get(L);if(L.isVideoTexture&&Me(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&K.__version!==L.version){let ge=L.image;if(ge===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{le(K,L,E);return}}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+E)}function X(L,E){let K=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){le(K,L,E);return}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+E)}function se(L,E){let K=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){le(K,L,E);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+E)}function he(L,E){let K=n.get(L);if(L.version>0&&K.__version!==L.version){ve(K,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+E)}let q={[Sn]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[Nr]:i.MIRRORED_REPEAT},re={[Ut]:i.NEAREST,[mc]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},fe={[am]:i.NEVER,[Xu]:i.ALWAYS,[om]:i.LESS,[Vu]:i.LEQUAL,[lm]:i.EQUAL,[Wu]:i.GEQUAL,[cm]:i.GREATER,[hm]:i.NOTEQUAL};function ne(L,E){if(E.type===qn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===nn||E.magFilter===Jr||E.magFilter===nr||E.magFilter===ii||E.minFilter===nn||E.minFilter===Jr||E.minFilter===nr||E.minFilter===ii)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,q[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,q[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,q[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,re[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ut||E.minFilter!==nr&&E.minFilter!==ii||E.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Re(L,E){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",R),I(E));let ge=E.source,ae=d.get(ge);ae===void 0&&(ae={},d.set(ge,ae));let Se=B(E);if(Se!==L.__cacheKey){ae[Se]===void 0&&(ae[Se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ae[Se].usedTimes++;let Te=ae[L.__cacheKey];Te!==void 0&&(ae[L.__cacheKey].usedTimes--,Te.usedTimes===0&&U(E)),L.__cacheKey=Se,L.__webglTexture=ae[Se].texture}return K}function ie(L,E,K){return Math.floor(Math.floor(L/K)/E)}function _e(L,E,K,ge){let Se=L.updateRanges;if(Se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,K,ge,E.data);else{Se.sort((V,me)=>V.start-me.start);let Te=0;for(let V=1;V<Se.length;V++){let me=Se[Te],ee=Se[V],Ce=me.start+me.count,we=ie(ee.start,E.width,4),Pe=ie(me.start,E.width,4);ee.start<=Ce+1&&we===Pe&&ie(ee.start+ee.count-1,E.width,4)===we?me.count=Math.max(me.count,ee.start+ee.count-me.start):(++Te,Se[Te]=ee)}Se.length=Te+1;let ce=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let V=0,me=Se.length;V<me;V++){let ee=Se[V],Ce=Math.floor(ee.start/4),we=Math.ceil(ee.count/4),Pe=Ce%E.width,He=Math.floor(Ce/E.width),rt=we,Ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,He),t.texSubImage2D(i.TEXTURE_2D,0,Pe,He,rt,Ee,K,ge,E.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ce),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function le(L,E,K){let ge=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=i.TEXTURE_3D);let ae=Re(L,E),Se=E.source;t.bindTexture(ge,L.__webglTexture,i.TEXTURE0+K);let Te=n.get(Se);if(Se.version!==Te.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap!="undefined"&&E.image instanceof ImageBitmap)===!1){let Ee=ct.getPrimaries(ct.workingColorSpace),qe=E.colorSpace===ss?null:ct.getPrimaries(E.colorSpace),it=E.colorSpace===ss||Ee===qe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let de=m(E.image,!1,s.maxTextureSize);de=xe(E,de);let be=r.convert(E.format,E.colorSpace),V=r.convert(E.type),me=T(E.internalFormat,be,V,E.normalized,E.colorSpace,E.isVideoTexture);ne(ge,E);let ee,Ce=E.mipmaps,we=E.isVideoTexture!==!0,Pe=Te.__version===void 0||ae===!0,He=Se.dataReady,rt=_(E,de);if(E.isDepthTexture)me=p(E.format===pi,E.type),Pe&&(we?t.texStorage2D(i.TEXTURE_2D,1,me,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,me,de.width,de.height,0,be,V,null));else if(E.isDataTexture)if(Ce.length>0){we&&Pe&&t.texStorage2D(i.TEXTURE_2D,rt,me,Ce[0].width,Ce[0].height);for(let Ee=0,qe=Ce.length;Ee<qe;Ee++)ee=Ce[Ee],we?He&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,ee.width,ee.height,be,V,ee.data):t.texImage2D(i.TEXTURE_2D,Ee,me,ee.width,ee.height,0,be,V,ee.data);E.generateMipmaps=!1}else we?(Pe&&t.texStorage2D(i.TEXTURE_2D,rt,me,de.width,de.height),He&&_e(E,de,be,V)):t.texImage2D(i.TEXTURE_2D,0,me,de.width,de.height,0,be,V,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){we&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,me,Ce[0].width,Ce[0].height,de.depth);for(let Ee=0,qe=Ce.length;Ee<qe;Ee++)if(ee=Ce[Ee],E.format!==On)if(be!==null)if(we){if(He)if(E.layerUpdates.size>0){let it=nf(ee.width,ee.height,E.format,E.type);for(let Ue of E.layerUpdates){let wt=ee.data.subarray(Ue*it/ee.data.BYTES_PER_ELEMENT,(Ue+1)*it/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,Ue,ee.width,ee.height,1,be,wt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,ee.width,ee.height,de.depth,be,ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ee,me,ee.width,ee.height,de.depth,0,ee.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?He&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,ee.width,ee.height,de.depth,be,V,ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ee,me,ee.width,ee.height,de.depth,0,be,V,ee.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{we&&Pe&&t.texStorage2D(i.TEXTURE_2D,rt,me,Ce[0].width,Ce[0].height);for(let Ee=0,qe=Ce.length;Ee<qe;Ee++)ee=Ce[Ee],E.format!==On?be!==null?we?He&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ee,0,0,ee.width,ee.height,be,ee.data):t.compressedTexImage2D(i.TEXTURE_2D,Ee,me,ee.width,ee.height,0,ee.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?He&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,ee.width,ee.height,be,V,ee.data):t.texImage2D(i.TEXTURE_2D,Ee,me,ee.width,ee.height,0,be,V,ee.data)}else if(E.isDataArrayTexture)if(we){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,me,de.width,de.height,de.depth),He)if(E.layerUpdates.size>0){let Ee=nf(de.width,de.height,E.format,E.type);for(let qe of E.layerUpdates){let it=de.data.subarray(qe*Ee/de.data.BYTES_PER_ELEMENT,(qe+1)*Ee/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,qe,de.width,de.height,1,be,V,it)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,be,V,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,de.width,de.height,de.depth,0,be,V,de.data);else if(E.isData3DTexture)we?(Pe&&t.texStorage3D(i.TEXTURE_3D,rt,me,de.width,de.height,de.depth),He&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,be,V,de.data)):t.texImage3D(i.TEXTURE_3D,0,me,de.width,de.height,de.depth,0,be,V,de.data);else if(E.isFramebufferTexture){if(Pe)if(we)t.texStorage2D(i.TEXTURE_2D,rt,me,de.width,de.height);else{let Ee=de.width,qe=de.height;for(let it=0;it<rt;it++)t.texImage2D(i.TEXTURE_2D,it,me,Ee,qe,0,be,V,null),Ee>>=1,qe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let Ee=i.canvas;if(Ee.hasAttribute("layoutsubtree")||Ee.setAttribute("layoutsubtree","true"),de.parentNode!==Ee){Ee.appendChild(de),u.add(E),Ee.onpaint=qe=>{let it=qe.changedElements;for(let Ue of u)it.includes(Ue.image)&&(Ue.needsUpdate=!0)},Ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let it=i.RGBA,Ue=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,it,Ue,wt,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(we&&Pe){let Ee=Ae(Ce[0]);t.texStorage2D(i.TEXTURE_2D,rt,me,Ee.width,Ee.height)}for(let Ee=0,qe=Ce.length;Ee<qe;Ee++)ee=Ce[Ee],we?He&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,be,V,ee):t.texImage2D(i.TEXTURE_2D,Ee,me,be,V,ee);E.generateMipmaps=!1}else if(we){if(Pe){let Ee=Ae(de);t.texStorage2D(i.TEXTURE_2D,rt,me,Ee.width,Ee.height)}He&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,V,de)}else t.texImage2D(i.TEXTURE_2D,0,me,be,V,de);M(E)&&E.mipmapsAutoUpdate===!0&&y(ge),Te.__version=Se.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ve(L,E,K){if(E.image.length!==6)return;let ge=Re(L,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+K);let Se=n.get(ae);if(ae.version!==Se.__version||ge===!0){t.activeTexture(i.TEXTURE0+K);let Te=ct.getPrimaries(ct.workingColorSpace),ce=E.colorSpace===ss?null:ct.getPrimaries(E.colorSpace),de=E.colorSpace===ss||Te===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let be=E.isCompressedTexture||E.image[0].isCompressedTexture,V=E.image[0]&&E.image[0].isDataTexture,me=[];for(let Ue=0;Ue<6;Ue++)!be&&!V?me[Ue]=m(E.image[Ue],!0,s.maxCubemapSize):me[Ue]=V?E.image[Ue].image:E.image[Ue],me[Ue]=xe(E,me[Ue]);let ee=me[0],Ce=r.convert(E.format,E.colorSpace),we=r.convert(E.type),Pe=T(E.internalFormat,Ce,we,E.normalized,E.colorSpace),He=E.isVideoTexture!==!0,rt=Se.__version===void 0||ge===!0,Ee=ae.dataReady,qe=_(E,ee);ne(i.TEXTURE_CUBE_MAP,E);let it;if(E.isDepthTexture){if(Pe=p(E.format===pi,E.type),rt)if(He)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Pe,ee.width,ee.height);else for(let Ue=0;Ue<6;Ue++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Pe,ee.width,ee.height,0,Ce,we,null)}else if(be){He&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Pe,ee.width,ee.height);for(let Ue=0;Ue<6;Ue++){it=me[Ue].mipmaps;for(let wt=0;wt<it.length;wt++){let on=it[wt];E.format!==On?Ce!==null?He?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,wt,0,0,on.width,on.height,Ce,on.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,wt,Pe,on.width,on.height,0,on.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,wt,0,0,on.width,on.height,Ce,we,on.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,wt,Pe,on.width,on.height,0,Ce,we,on.data)}}}else{if(it=E.mipmaps,He&&rt){it.length>0&&qe++;let Ue=Ae(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Pe,Ue.width,Ue.height)}for(let Ue=0;Ue<6;Ue++)if(V){He?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,me[Ue].width,me[Ue].height,Ce,we,me[Ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Pe,me[Ue].width,me[Ue].height,0,Ce,we,me[Ue].data);for(let wt=0;wt<it.length;wt++){let cs=it[wt].image[Ue].image;He?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,wt+1,0,0,cs.width,cs.height,Ce,we,cs.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,wt+1,Pe,cs.width,cs.height,0,Ce,we,cs.data)}}else{He?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,Ce,we,me[Ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Pe,Ce,we,me[Ue]);for(let wt=0;wt<it.length;wt++){let on=it[wt];He?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,wt+1,0,0,Ce,we,on.image[Ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,wt+1,Pe,Ce,we,on.image[Ue])}}}M(E)&&E.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),Se.__version=ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function pe(L,E,K,ge,ae,Se){let Te=r.convert(K.format,K.colorSpace),ce=r.convert(K.type),de=T(K.internalFormat,Te,ce,K.normalized,K.colorSpace),be=n.get(E),V=n.get(K);if(V.__renderTarget=E,!be.__hasExternalTextures){let me=Math.max(1,E.width>>Se),ee=Math.max(1,E.height>>Se);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,Se,de,me,ee,E.depth,0,Te,ce,null):t.texImage2D(ae,Se,de,me,ee,0,Te,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),j(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ae,V.__webglTexture,0,ue(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,ae,V.__webglTexture,Se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(L,E,K){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){let ge=E.depthTexture,ae=ge&&ge.isDepthTexture?ge.type:null,Se=p(E.stencilBuffer,ae),Te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;j(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(E),Se,E.width,E.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(E),Se,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Se,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,L)}else{let ge=E.textures;for(let ae=0;ae<ge.length;ae++){let Se=ge[ae],Te=r.convert(Se.format,Se.colorSpace),ce=r.convert(Se.type),de=T(Se.internalFormat,Te,ce,Se.normalized,Se.colorSpace);j(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(E),de,E.width,E.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(E),de,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,de,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(L,E,K){let ge=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(E.depthTexture);ae.__renderTarget=E;let Se=ge?E.depthTexture.image[0]:E.depthTexture.image;(!ae.__webglTexture||Se.width!==E.width||Se.height!==E.height)&&(Se.width=E.width,Se.height=E.height,E.depthTexture.needsUpdate=!0),ge?he(E.depthTexture,0):Z(E.depthTexture,0);let Te=ae.__webglTexture,ce=ue(E),de=ge?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,be=E.depthTexture.format===pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Xi)j(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,de,Te,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,be,de,Te,0);else if(E.depthTexture.format===pi)j(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,de,Te,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,be,de,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(L){let E=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let ge=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ge){let ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ge.removeEventListener("dispose",ae)};ge.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=ge}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let ge=0;ge<6;ge++)ze(E.__webglFramebuffer[ge],L,ge);else L.texture.mipmaps.length>0?ze(E.__webglFramebuffer[0],L,0):ze(E.__webglFramebuffer,L,0);else if(K){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]===void 0)E.__webglDepthbuffer[ge]=i.createRenderbuffer(),Fe(E.__webglDepthbuffer[ge],L,!1);else{let ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=E.__webglDepthbuffer[ge];i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Se)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Fe(E.__webglDepthbuffer,L,!1);else{let ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(L,E,K){let ge=n.get(L);E!==void 0&&pe(ge.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Oe(L)}function Qe(L){let E=L.texture,K=n.get(L),ge=n.get(E);L.addEventListener("dispose",P),I(L);let ae=L.textures,Se=L.isWebGLCubeRenderTarget===!0,Te=ae.length>1;if(Te||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=E.version,a.memory.textures++),Se){K.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps.length>0){K.__webglFramebuffer[ce]=[];for(let de=0;de<E.mipmaps.length;de++)K.__webglFramebuffer[ce][de]=i.createFramebuffer()}else K.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(E.mipmaps.length>0){K.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)K.__webglFramebuffer[ce]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Te)for(let ce=0,de=ae.length;ce<de;ce++){let be=n.get(ae[ce]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&j(L)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ce=0;ce<ae.length;ce++){let de=ae[ce];K.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[ce]);let be=r.convert(de.format,de.colorSpace),V=r.convert(de.type),me=T(de.internalFormat,be,V,de.normalized,de.colorSpace,L.isXRRenderTarget===!0),ee=ue(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,me,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,K.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Se){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),ne(i.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)pe(K.__webglFramebuffer[ce][de],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else pe(K.__webglFramebuffer[ce],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);M(E)?y(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let ce=0,de=ae.length;ce<de;ce++){let be=ae[ce],V=n.get(be),me=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(me=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,V.__webglTexture),ne(me,be),pe(K.__webglFramebuffer,L,be,i.COLOR_ATTACHMENT0+ce,me,0),M(be)&&y(me)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ce=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,ge.__webglTexture),ne(ce,E),E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)pe(K.__webglFramebuffer[de],L,E,i.COLOR_ATTACHMENT0,ce,de);else pe(K.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,ce,0);M(E)?y(ce):E.mipmaps.length>0&&i.texParameteri(ce,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&Oe(L)}function $(L){let E=L.textures;for(let K=0,ge=E.length;K<ge;K++){let ae=E[K];if(M(ae)&&ae.mipmapsAutoUpdate===!0){let Se=w(L),Te=n.get(ae).__webglTexture;t.bindTexture(Se,Te),y(Se),t.unbindTexture()}}}let mt=[];function Ze(L){if(L.samples>0){if(j(L)===!1){let E=L.textures,K=L.width,ge=L.height,ae=i.COLOR_BUFFER_BIT,Se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(L),ce=E.length>1;if(ce)for(let be=0;be<E.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let be=0;be<E.length;be++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);let V=n.get(E[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,V,0)}i.blitFramebuffer(0,0,K,ge,0,0,K,ge,ae,i.NEAREST),l===!0&&(mt.length=0,mt.push(i.COLOR_ATTACHMENT0+be),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&mt.push(Se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let be=0;be<E.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);let V=n.get(E[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,V,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ue(L){return Math.min(s.maxSamples,L.samples)}function j(L){let E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(L){let E=a.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function xe(L,E){let K=L.colorSpace,ge=L.format,ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==Pn&&K!==ss&&(ct.getTransfer(K)===St?(ge!==On||ae!==bn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",K)),E}function Ae(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=F,this.getTextureUnits=k,this.setTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=se,this.setTextureCube=he,this.rebindTextures=$e,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=j,this.dispose=D}function fS(i,e){function t(n,s=ss){let r,a=ct.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fu)return i.BYTE;if(n===Ou)return i.SHORT;if(n===Qr)return i.UNSIGNED_SHORT;if(n===gc)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Gt)return i.HALF_FLOAT;if(n===zu)return i.ALPHA;if(n===Hu)return i.RGB;if(n===On)return i.RGBA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===_c)return i.RED;if(n===yc)return i.RED_INTEGER;if(n===As)return i.RG;if(n===Mc)return i.RG_INTEGER;if(n===Sc)return i.RGBA_INTEGER;if(n===To||n===Eo||n===wo||n===Ao)if(a===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Tc||n===Ec||n===wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Ro||n===Lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ac||n===Rc)return a===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pc)return r.COMPRESSED_R11_EAC;if(n===Ic)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ro)return r.COMPRESSED_RG11_EAC;if(n===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Hc||n===Gc||n===Vc||n===Wc||n===Xc||n===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qc||n===Yc||n===Kc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===qc)return a===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jc||n===Zc||n===Co||n===Jc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pS=`
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

}`,xf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $a(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ct({vertexShader:dS,fragmentShader:pS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vf=class extends Mi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,v=null,S=typeof XRWebGLBinding!="undefined",g=new xf,x={},m=t.getContextAttributes(),M=null,y=null,w=[],T=[],p=new ye,_=null,I=null,A=new tn;A.viewport=new bt;let R=new tn;R.viewport=new bt;let P=[A,R],N=new cc,b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=w[B];return Z===void 0&&(Z=new zr,w[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=w[B];return Z===void 0&&(Z=new zr,w[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=w[B];return Z===void 0&&(Z=new zr,w[B]=Z),Z.getHandSpace()};function O(B){let Z=T.indexOf(B.inputSource);if(Z===-1)return;let X=w[Z];X!==void 0&&(X.update(B.inputSource,B.frame,c||a),X.dispatchEvent({type:B.type,data:B.inputSource}))}function U(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",G);for(let B=0;B<w.length;B++){let Z=T[B];Z!==null&&(T[B]=null,w[B].disconnect(Z))}b=null,D=null,g.reset();for(let B in x)delete x[B];if(e.setRenderTarget(M),d=null,f=null,u=null,s=null,y=null,J.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(p.width,p.height,!1),I!==null){let B=I.camera;B.fov=I.fov,B.zoom=I.zoom,B.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",U),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(p),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,se=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=m.stencil?pi:Xi,se=m.stencil?is:di);let q={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(q),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ft(f.textureWidth,f.textureHeight,{format:On,type:bn,depthTexture:new fi(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let X={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ft(d.framebufferWidth,d.framebufferHeight,{format:On,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(B){for(let Z=0;Z<B.removed.length;Z++){let X=B.removed[Z],se=T.indexOf(X);se>=0&&(T[se]=null,w[se].disconnect(X))}for(let Z=0;Z<B.added.length;Z++){let X=B.added[Z],se=T.indexOf(X);if(se===-1){for(let q=0;q<w.length;q++)if(q>=T.length){T.push(X),se=q;break}else if(T[q]===null){T[q]=X,se=q;break}if(se===-1)break}let he=w[se];he&&he.connect(X)}}function H(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let Z=B.near,X=B.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(X=g.depthFar)),N.near=R.near=A.near=Z,N.far=R.far=A.far=X,(b!==N.near||D!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),b=N.near,D=N.far),N.layers.mask=B.layers.mask|6,A.layers.mask=N.layers.mask&-5,R.layers.mask=N.layers.mask&-3;let se=B.parent,he=N.cameras;H(N,se);for(let q=0;q<he.length;q++)H(he[q],se);N.projectionMatrix.copy(A.projectionMatrix),N.projectionMatrixInverse.copy(A.projectionMatrixInverse),I===null&&B.isPerspectiveCamera&&(I={camera:B,fov:B.fov,zoom:B.zoom}),F(B,N,se)};function F(B,Z,X){X===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(X.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Vs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(B){return x[B]};let k=null;function W(B,Z){if(h=Z.getViewerPose(c||a),v=Z,h!==null){let X=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let se=!1;X.length!==N.cameras.length&&(N.cameras.length=0,se=!0);for(let fe=0;fe<X.length;fe++){let ne=X[fe],Re=null;if(d!==null)Re=d.getViewport(ne);else{let _e=u.getViewSubImage(f,ne);Re=_e.viewport,fe===0&&(e.setRenderTargetTextures(y,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(y))}let ie=P[fe];ie===void 0&&(ie=new tn,ie.layers.enable(fe),ie.viewport=new bt,P[fe]=ie),ie.matrix.fromArray(ne.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ne.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Re.x,Re.y,Re.width,Re.height),fe===0&&(N.matrix.copy(ie.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),se===!0&&N.cameras.push(ie)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=n.getBinding();let fe=u.getDepthInformation(X[0]);fe&&fe.isValid&&fe.texture&&g.init(fe,s.renderState)}if(he&&he.includes("camera-access")&&S){e.state.unbindTexture(),u=n.getBinding();for(let fe=0;fe<X.length;fe++){let ne=X[fe].camera;if(ne){let Re=x[ne];Re||(Re=new $a,x[ne]=Re);let ie=u.getCameraImage(ne);Re.sourceTexture=ie}}}}for(let X=0;X<w.length;X++){let se=T[X],he=w[X];se!==null&&he!==void 0&&he.update(se,Z,c||a)}k&&k(B,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),v=null}let J=new Wm;J.setAnimationLoop(W),this.setAnimationLoop=function(B){k=B},this.dispose=function(){}}},mS=new Ke,e0=new st;e0.set(-1,0,0,0,1,0,0,0,1);function gS(i,e){function t(g,x){g.matrixAutoUpdate===!0&&g.updateMatrix(),x.value.copy(g.matrix)}function n(g,x){x.color.getRGB(g.fogColor.value,Qu(i)),x.isFog?(g.fogNear.value=x.near,g.fogFar.value=x.far):x.isFogExp2&&(g.fogDensity.value=x.density)}function s(g,x,m,M,y){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(g,x):x.isMeshLambertMaterial?(r(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(g,x),u(g,x)):x.isMeshPhongMaterial?(r(g,x),h(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(g,x),f(g,x),x.isMeshPhysicalMaterial&&d(g,x,y)):x.isMeshMatcapMaterial?(r(g,x),v(g,x)):x.isMeshDepthMaterial?r(g,x):x.isMeshDistanceMaterial?(r(g,x),S(g,x)):x.isMeshNormalMaterial?r(g,x):x.isLineBasicMaterial?(a(g,x),x.isLineDashedMaterial&&o(g,x)):x.isPointsMaterial?l(g,x,m,M):x.isSpriteMaterial?c(g,x):x.isShadowMaterial?(g.color.value.copy(x.color),g.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(g,x){g.opacity.value=x.opacity,x.color&&g.diffuse.value.copy(x.color),x.emissive&&g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(g.map.value=x.map,t(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.bumpMap&&(g.bumpMap.value=x.bumpMap,t(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===gn&&(g.bumpScale.value*=-1)),x.normalMap&&(g.normalMap.value=x.normalMap,t(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===gn&&g.normalScale.value.negate()),x.displacementMap&&(g.displacementMap.value=x.displacementMap,t(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias),x.emissiveMap&&(g.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,g.emissiveMapTransform)),x.specularMap&&(g.specularMap.value=x.specularMap,t(x.specularMap,g.specularMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest);let m=e.get(x),M=m.envMap,y=m.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(mS.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(e0),g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio),x.lightMap&&(g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,g.lightMapTransform)),x.aoMap&&(g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,g.aoMapTransform))}function a(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map&&(g.map.value=x.map,t(x.map,g.mapTransform))}function o(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}function l(g,x,m,M){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*m,g.scale.value=M*.5,x.map&&(g.map.value=x.map,t(x.map,g.uvTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function c(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map&&(g.map.value=x.map,t(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function h(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,1e-4)}function u(g,x){x.gradientMap&&(g.gradientMap.value=x.gradientMap)}function f(g,x){g.metalness.value=x.metalness,x.metalnessMap&&(g.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,g.metalnessMapTransform)),g.roughness.value=x.roughness,x.roughnessMap&&(g.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,g.roughnessMapTransform)),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)}function d(g,x,m){g.ior.value=x.ior,x.diffuseRoughness>0&&(g.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),x.sheen>0&&(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(g.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,g.sheenColorMapTransform)),x.sheenRoughnessMap&&(g.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,g.sheenRoughnessMapTransform))),x.clearcoat>0&&(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(g.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,g.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(g.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===gn&&g.clearcoatNormalScale.value.negate())),x.dispersion>0&&(g.dispersion.value=x.dispersion),x.retroreflectivity>0&&(g.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(g.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,g.iridescenceMapTransform)),x.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),x.transmission>0&&(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),x.transmissionMap&&(g.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,g.transmissionMapTransform)),g.thickness.value=x.thickness,x.thicknessMap&&(g.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(g.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap&&(g.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,g.specularColorMapTransform)),x.specularIntensityMap&&(g.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,x){x.matcap&&(g.matcap.value=x.matcap)}function S(g,x){let m=e.get(x).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xS(i,e,t,n){let s={},r={};function a(m,M){let y=M.program;n.uniformBlockBinding(m,y,s[m.id])}function o(m,M){let y=s[m.id];y===void 0&&(v(m),y=l(m),s[m.id]=y,m.addEventListener("dispose",g));let w=M.program;n.updateUBOMapping(m,w);let T=e.render.frame;r[m.id]!==T&&(c(m),r[m.id]=T)}function l(m){let M=i.createBuffer(),y=m.__size,w=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,y,w),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(m){let M=s[m.id],y=m.uniforms,w=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,p=y.length;T<p;T++){let _=y[T];if(Array.isArray(_))for(let I=0,A=_.length;I<A;I++)h(_[I],T,I,w);else h(_,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(m,M,y,w){if(f(m,M,y,w)===!0){let T=m.__offset,p=m.value;if(Array.isArray(p)){let _=0;for(let I=0;I<p.length;I++){let A=p[I],R=S(A,!0);u(A,m.__data,_),_+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(p,m.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,m.__data)}}function u(m,M,y){typeof m=="number"||typeof m=="boolean"?M[y]=m:m.isMatrix3?(M[y]=m.elements[0],M[y+1]=m.elements[1],M[y+2]=m.elements[2],M[y+3]=0,M[y+4]=m.elements[3],M[y+5]=m.elements[4],M[y+6]=m.elements[5],M[y+7]=0,M[y+8]=m.elements[6],M[y+9]=m.elements[7],M[y+10]=m.elements[8],M[y+11]=0):ArrayBuffer.isView(m)?M.set(m.subarray(0,M.length-y),y):m.toArray(M,y)}function f(m,M,y,w){let T=m.value,p=M+"_"+y;if(Array.isArray(T)){w[p]===void 0&&(w[p]=[]);let _=w[p],I=!1;for(let A=0;A<T.length;A++)d(T[A],_,A)===!0&&(I=!0);return I}return d(T,w,p)}function d(m,M,y){if(M[y]===void 0)return typeof m=="number"||typeof m=="boolean"?M[y]=m:ArrayBuffer.isView(m)?M[y]=m.slice():M[y]=m.clone(),!0;{let w=M[y];if(typeof m=="number"||typeof m=="boolean"){if(w!==m)return M[y]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(w.equals(m)===!1)return w.copy(m),!0}}return!1}function v(m){let M=m.uniforms,y=0,w=16;for(let p=0,_=M.length;p<_;p++){let I=Array.isArray(M[p])?M[p]:[M[p]];for(let A=0,R=I.length;A<R;A++){let P=I[A],N=Array.isArray(P.value)?P.value:[P.value],b=Array.isArray(M[p])||Array.isArray(P.value),D=y;for(let U=0,G=N.length;U<G;U++){let H=N[U],F=S(H,b),k=y%w,W=k%F.boundary,J=k+W;y+=W,J!==0&&w-J<F.storage&&(y+=w-J),U===0&&(D=y),y+=F.storage}let O=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new O((y-D)/Float32Array.BYTES_PER_ELEMENT),P.__offset=D}}let T=y%w;return T>0&&(y+=w-T),m.__size=y,m.__cache={},this}function S(m,M){let y={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(y.boundary=4,y.storage=4):m.isVector2?(y.boundary=8,y.storage=8):m.isVector3||m.isColor?(y.boundary=16,y.storage=12):m.isVector4?(y.boundary=16,y.storage=16):m.isMatrix3?(y.boundary=16,y.storage=48):m.isMatrix4?(y.boundary=16,y.storage=64):m.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(y.boundary=16,y.storage=m.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",m),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(m){let M=m.target;M.removeEventListener("dispose",g),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function x(){for(let m in s)i.deleteBuffer(s[m]);s={},r={}}return{bind:a,update:o,dispose:x}}var vS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function _S(){return Ri===null&&(Ri=new ei(vS,16,16,As,Gt),Ri.name="DFG_LUT",Ri.minFilter=nn,Ri.magFilter=nn,Ri.wrapS=Jn,Ri.wrapT=Jn,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var nh=class{constructor(e={}){let{canvas:t=um(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=bn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let S=d,g=new Set([Sc,Mc,yc]),x=new Set([bn,di,Qr,is,xc,vc]),m=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,T=null,p=[],_=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,R=!1,P=null,N=null,b=null,D=null;this._outputColorSpace=Rt;let O=0,U=0,G=null,H=-1,F=null,k=new bt,W=new bt,J=null,B=new Le(0),Z=0,X=t.width,se=t.height,he=1,q=null,re=null,fe=new bt(0,0,X,se),ne=new bt(0,0,X,se),Re=!1,ie=new _s,_e=new Xl,le=!1,ve=!1,pe=new Ke,Fe=new z,ze=new bt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function Qe(){return G===null?he:1}let $=n;function mt(C,Y){return t.getContext(C,Y)}let Ze,ue,j,Me,xe,Ae,L,E,K,ge,ae,Se,Te,ce,de,be,V,me,ee,Ce,we,Pe,He;try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),$===null){let Y="webgl2";if($=mt(Y,C),$===null)throw mt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(C){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),et("WebGLRenderer: "+C.message),C}function rt(){Ze=new Py($),Ze.init(),we=new fS($,Ze),ue=new _y($,Ze,e,we),j=new hS($,Ze),ue.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),N=$.createFramebuffer(),b=$.createFramebuffer(),D=$.createFramebuffer(),Me=new Dy($),xe=new jM,Ae=new uS($,Ze,j,xe,ue,we,Me),L=new Cy(A),E=new Ux($),Pe=new xy($,E),K=new Iy($,E,Me,Pe),ge=new Uy($,K,E,Pe,Me),me=new Ny($,ue,Ae),de=new yy(xe),ae=new KM(A,L,Ze,ue,Pe,de),Se=new gS(A,xe),Te=new JM,ce=new sS(Ze),V=new gy(A,L,j,ge,v,l),be=new cS(A,ge,ue),He=new xS($,Me,ue,j),ee=new vy($,Ze,Me),Ce=new Ly($,Ze,Me),Me.programs=ae.programs,A.capabilities=ue,A.extensions=Ze,A.properties=xe,A.renderLists=Te,A.shadowMap=be,A.state=j,A.info=Me}S!==bn&&(I=new Oy(S,t.width,t.height,o,s,r));let Ee=new vf(A,$);this.xr=Ee,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let C=Ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(C){C!==void 0&&(he=C,this.setSize(X,se,!1))},this.getSize=function(C){return C.set(X,se)},this.setSize=function(C,Y,oe=!0){if(Ee.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,se=Y,t.width=Math.floor(C*he),t.height=Math.floor(Y*he),oe===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(X*he,se*he).floor()},this.setDrawingBufferSize=function(C,Y,oe){X=C,se=Y,he=oe,t.width=Math.floor(C*oe),t.height=Math.floor(Y*oe),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(S===bn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(fe)},this.setViewport=function(C,Y,oe,Q){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,Y,oe,Q),j.viewport(k.copy(fe).multiplyScalar(Qe()).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,Y,oe,Q){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,Y,oe,Q),j.scissor(W.copy(ne).multiplyScalar(Qe()).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(C){j.setScissorTest(Re=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){re=C},this.getClearColor=function(C){return C.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,oe=!0){let Q=0;if(C){let te=!1;if(G!==null){let Ne=G.texture.format;te=g.has(Ne)}if(te){let Ne=G.texture.type,Ge=x.has(Ne),De=V.getClearColor(),ke=V.getClearAlpha(),Xe=De.r,at=De.g,gt=De.b;Ge?(m[0]=Xe,m[1]=at,m[2]=gt,m[3]=ke,$.clearBufferuiv($.COLOR,0,m)):(M[0]=Xe,M[1]=at,M[2]=gt,M[3]=ke,$.clearBufferiv($.COLOR,0,M))}else Q|=$.COLOR_BUFFER_BIT}Y&&(Q|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(Q|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&$.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),P=C},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),V.dispose(),Te.dispose(),ce.dispose(),Ae.dispose(),xe.dispose(),L.dispose(),ge.dispose(),K.dispose(),Pe.dispose(),He.dispose(),ae.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Pd),Ee.removeEventListener("sessionend",Id),Ls.stop()};function qe(C){C.preventDefault(),Ua("WebGLRenderer: Context Lost."),R=!0}function it(){Ua("WebGLRenderer: Context Restored."),R=!1;let C=Me.autoReset,Y=be.enabled,oe=be.autoUpdate,Q=be.needsUpdate,te=be.type;rt(),Me.autoReset=C,be.enabled=Y,be.autoUpdate=oe,be.needsUpdate=Q,be.type=te}function Ue(C){et("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function wt(C){let Y=C.target;Y.removeEventListener("dispose",wt),on(Y)}function on(C){cs(C),xe.remove(C)}function cs(C){let Y=xe.get(C).programs;Y!==void 0&&(Y.forEach(function(oe){ae.releaseProgram(oe)}),C.isShaderMaterial&&ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,oe,Q,te,Ne){Y===null&&(Y=Oe);let Ge=te.isMesh&&te.matrixWorld.determinantAffine()<0,De=ng(C,Y,oe,Q,te);j.setMaterial(Q,Ge);let ke=oe.index,Xe=1;if(Q.wireframe===!0){if(ke=K.getWireframeAttribute(oe),ke===void 0)return;Xe=2}let at=oe.drawRange,gt=oe.attributes.position,Ve=at.start*Xe,xt=(at.start+at.count)*Xe;Ne!==null&&(Ve=Math.max(Ve,Ne.start*Xe),xt=Math.min(xt,(Ne.start+Ne.count)*Xe)),ke!==null?(Ve=Math.max(Ve,0),xt=Math.min(xt,ke.count)):gt!=null&&(Ve=Math.max(Ve,0),xt=Math.min(xt,gt.count));let Qt=xt-Ve;if(Qt<0||Qt===1/0)return;Pe.setup(te,Q,De,oe,ke);let Nt,Pt=ee;if(ke!==null&&(Nt=E.get(ke),Pt=Ce,Pt.setIndex(Nt)),te.isMesh)Q.wireframe===!0?(j.setLineWidth(Q.wireframeLinewidth*Qe()),Pt.setMode($.LINES)):Pt.setMode($.TRIANGLES);else if(te.isLine){let vn=Q.linewidth;vn===void 0&&(vn=1),j.setLineWidth(vn*Qe()),te.isLineSegments?Pt.setMode($.LINES):te.isLineLoop?Pt.setMode($.LINE_LOOP):Pt.setMode($.LINE_STRIP)}else te.isPoints?Pt.setMode($.POINTS):te.isSprite&&Pt.setMode($.TRIANGLES);if(te.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))Pt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let vn=te._multiDrawStarts,We=te._multiDrawCounts,Rn=te._multiDrawCount,Tt=ke?E.get(ke).bytesPerElement:1,Ds=xe.get(Q).currentProgram.getUniforms();for(let _n=0;_n<Rn;_n++)Ds.setValue($,"_gl_DrawID",_n),Pt.render(vn[_n]/Tt,We[_n])}else if(te.isInstancedMesh)Pt.renderInstances(Ve,Qt,te.count);else if(oe.isInstancedBufferGeometry){let vn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,We=Math.min(oe.instanceCount,vn);Pt.renderInstances(Ve,Qt,We)}else Pt.render(Ve,Qt)};function Cd(C,Y,oe,Q){P!==null&&C.isNodeMaterial&&P.setObject(Q,C),le===!0&&de.setState(C,oe,!1),C.transparent===!0&&C.side===Bt&&C.forceSinglePass===!1?(C.side=gn,C.needsUpdate=!0,ga(C,Y,Q),C.side=Ei,C.needsUpdate=!0,ga(C,Y,Q),C.side=Bt):ga(C,Y,Q)}this.compile=function(C,Y,oe=null){oe===null&&(oe=C),P!==null&&P.renderStart(C,Y,oe),T=ce.get(oe),T.init(Y),_.push(T),oe.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),C!==oe&&C.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),ve=this.localClippingEnabled,le=de.init(this.clippingPlanes,ve),le===!0&&de.setGlobalState(this.clippingPlanes,Y),P!==null&&be.render(T.state.shadowsArray,oe,Y);let Q=new Set;return C.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Ne=te.material;if(Ne)if(Array.isArray(Ne))for(let Ge=0;Ge<Ne.length;Ge++){let De=Ne[Ge];Cd(De,oe,Y,te),Q.add(De)}else Cd(Ne,oe,Y,te),Q.add(Ne)}),T=_.pop(),P!==null&&P.renderEnd(),Q},this.compileAsync=function(C,Y,oe=null){let Q=this.compile(C,Y,oe);return new Promise(te=>{function Ne(){if(Q.forEach(function(Ge){let ke=xe.get(Ge).currentProgram;(ke===void 0||ke.isReady())&&Q.delete(Ge)}),Q.size===0){te(C);return}setTimeout(Ne,10)}Ze.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Oh=null;function eg(C){Oh&&Oh(C)}function Pd(){Ls.stop()}function Id(){Ls.start()}let Ls=new Wm;Ls.setAnimationLoop(eg),typeof self!="undefined"&&Ls.setContext(self),this.setAnimationLoop=function(C){Oh=C,Ee.setAnimationLoop(C),C===null?Ls.stop():Ls.start()},Ee.addEventListener("sessionstart",Pd),Ee.addEventListener("sessionend",Id),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(C,Y);let oe=Ee.enabled===!0&&Ee.isPresenting===!0,Q=I!==null&&(G===null||oe)&&I.begin(A,G);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(Y),Y=Ee.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,Y,G),T=ce.get(C,_.length),T.init(Y),T.state.textureUnits=Ae.getTextureUnits(),_.push(T),pe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Y.isArrayCamera?_e.setFromArrayCamera(Y):ie.setFromProjectionMatrix(pe,Qn,Y.reversedDepth),ve=this.localClippingEnabled,le=de.init(this.clippingPlanes,ve),w=Te.get(C,p.length),w.init(),p.push(w),this.info.render.frame++,Ee.enabled===!0&&Ee.isPresenting===!0){let Ge=A.xr.getDepthSensingMesh();Ge!==null&&Bh(Ge,Y,-1/0,A.sortObjects)}Bh(C,Y,0,A.sortObjects),w.finish(),P!==null&&P.updateLights(T.state.lightsArray),A.sortObjects===!0&&w.sort(q,re),$e=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,$e&&V.addToRenderList(w,C),this.info.autoReset===!0&&this.info.reset(),le===!0&&de.beginShadows();let te=T.state.shadowsArray;if(be.render(te,C,Y),le===!0&&de.endShadows(),(Q&&I.hasRenderPass())===!1){let Ge=w.opaque,De=w.transmissive;if(T.setupLights(),Y.isArrayCamera){let ke=Y.cameras;if(De.length>0)for(let Xe=0,at=ke.length;Xe<at;Xe++){let gt=ke[Xe];Dd(Ge,De,C,gt)}$e&&V.render(C);for(let Xe=0,at=ke.length;Xe<at;Xe++){let gt=ke[Xe];Ld(w,C,gt,gt.viewport)}}else De.length>0&&Dd(Ge,De,C,Y),$e&&V.render(C),Ld(w,C,Y)}G!==null&&U===0&&(Ae.updateMultisampleRenderTarget(G),Ae.updateRenderTargetMipmap(G)),Q&&I.end(A),C.isScene===!0&&C.onAfterRender(A,C,Y),Pe.resetDefaultState(),H=-1,F=null,_.pop(),_.length>0?(T=_[_.length-1],Ae.setTextureUnits(T.state.textureUnits),le===!0&&de.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,p.pop(),p.length>0?w=p[p.length-1]:w=null,P!==null&&P.renderEnd()};function Bh(C,Y,oe,Q){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){let Ge=Y.isArrayCamera?_e:ie;if(!C.frustumCulled||C.intersectsFrustum(Ge)){Q&&ze.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pe);let De=ge.update(C),ke=C.material;ke.visible&&w.push(C,De,ke,oe,ze.z,null,Y)}}else if(C.isMesh||C.isLine||C.isPoints){let Ge=Y.isArrayCamera?_e:ie;if(!C.frustumCulled||C.intersectsFrustum(Ge)){let De=ge.update(C),ke=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ze.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ze.copy(De.boundingSphere.center)),ze.applyMatrix4(C.matrixWorld).applyMatrix4(pe)),Array.isArray(ke)){let Xe=De.groups;for(let at=0,gt=Xe.length;at<gt;at++){let Ve=Xe[at],xt=ke[Ve.materialIndex];xt&&xt.visible&&w.push(C,De,xt,oe,ze.z,Ve,Y)}}else ke.visible&&w.push(C,De,ke,oe,ze.z,null,Y)}}}let Ne=C.children;for(let Ge=0,De=Ne.length;Ge<De;Ge++)Bh(Ne[Ge],Y,oe,Q)}function Ld(C,Y,oe,Q){let{opaque:te,transmissive:Ne,transparent:Ge}=C;T.setupLightsView(oe),le===!0&&de.setGlobalState(A.clippingPlanes,oe),Q&&j.viewport(k.copy(Q)),te.length>0&&tl(te,Y,oe),Ne.length>0&&tl(Ne,Y,oe),Ge.length>0&&tl(Ge,Y,oe),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Dd(C,Y,oe,Q){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Q.id]===void 0){let Ve=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Q.id]=new Ft(1,1,{generateMipmaps:!0,type:Ve?Gt:bn,minFilter:ii,samples:Math.max(4,ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Ne=T.state.transmissionRenderTarget[Q.id],Ge=Q.viewport||k;Ne.setSize(Ge.z*A.transmissionResolutionScale,Ge.w*A.transmissionResolutionScale);let De=A.getRenderTarget(),ke=A.getActiveCubeFace(),Xe=A.getActiveMipmapLevel();A.setRenderTarget(Ne),A.getClearColor(B),Z=A.getClearAlpha(),Z<1&&A.setClearColor(16777215,.5),A.clear(),$e&&V.render(oe);let at=A.toneMapping;A.toneMapping=wi;let gt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),T.setupLightsView(Q),le===!0&&de.setGlobalState(A.clippingPlanes,Q),tl(C,oe,Q),Ae.updateMultisampleRenderTarget(Ne),Ae.updateRenderTargetMipmap(Ne),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let xt=0,Qt=Y.length;xt<Qt;xt++){let Nt=Y[xt],{object:Pt,geometry:vn,material:We,group:Rn}=Nt;if(We.side===Bt&&Pt.layers.test(Q.layers)){let Tt=We.side;We.side=gn,We.needsUpdate=!0,Nd(Pt,oe,Q,vn,We,Rn),We.side=Tt,We.needsUpdate=!0,Ve=!0}}Ve===!0&&(Ae.updateMultisampleRenderTarget(Ne),Ae.updateRenderTargetMipmap(Ne))}A.setRenderTarget(De,ke,Xe),A.setClearColor(B,Z),gt!==void 0&&(Q.viewport=gt),A.toneMapping=at}function tl(C,Y,oe){let Q=Y.isScene===!0?Y.overrideMaterial:null;for(let te=0,Ne=C.length;te<Ne;te++){let Ge=C[te],{object:De,geometry:ke,group:Xe}=Ge,at=Ge.material;at.allowOverride===!0&&Q!==null&&(at=Q),De.layers.test(oe.layers)&&Nd(De,Y,oe,ke,at,Xe)}}function Nd(C,Y,oe,Q,te,Ne){P!==null&&te.isNodeMaterial&&P.setObject(C,te),C.onBeforeRender(A,Y,oe,Q,te,Ne),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(A,Y,oe,Q,C,Ne),te.transparent===!0&&te.side===Bt&&te.forceSinglePass===!1?(te.side=gn,te.needsUpdate=!0,A.renderBufferDirect(oe,Y,Q,te,C,Ne),te.side=Ei,te.needsUpdate=!0,A.renderBufferDirect(oe,Y,Q,te,C,Ne),te.side=Bt):A.renderBufferDirect(oe,Y,Q,te,C,Ne),C.onAfterRender(A,Y,oe,Q,te,Ne)}function Ud(C){let Y=0;for(let oe of C)oe.texture!==null&&Y++;return Y}function ga(C,Y,oe){Y.isScene!==!0&&(Y=Oe);let Q=xe.get(C),te=T.state.lights,Ne=T.state.shadowsArray,Ge=te.state.version,De=ae.getParameters(C,te.state,Ne,Y,oe,T.state.lightProbeGridArray),ke=ae.getProgramCacheKey(De),Xe=Q.programs;Q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,Q.fog=Y.fog;let at=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Q.envMap=L.get(C.envMap||Q.environment,at),Q.envMapRotation=Q.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Xe===void 0&&(C.addEventListener("dispose",wt),Xe=new Map,Q.programs=Xe,Q.programVariants=new Map);let gt=Xe.get(ke);if(gt!==void 0){if(Q.currentProgram===gt&&Q.lightsStateVersion===Ge)return Od(C,De),gt}else De.uniforms=ae.getUniforms(C),P!==null&&C.isNodeMaterial&&P.build(C,oe,De),C.onBeforeCompile(De,A),gt=ae.acquireProgram(De,ke),Xe.set(ke,gt),Q.uniforms=De.uniforms;let Ve=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=de.uniform),Od(C,De),Q.needsLights=sg(C),Q.lightsStateVersion=Ge,Q.needsLights&&(Ve.ambientLightColor.value=te.state.ambient,Ve.lightProbe.value=te.state.probe,Ve.sunLights.value=te.state.sun,Ve.sunLightShadows.value=te.state.sunShadow,Ve.directionalLights.value=te.state.directional,Ve.directionalLightShadows.value=te.state.directionalShadow,Ve.spotLights.value=te.state.spot,Ve.spotLightShadows.value=te.state.spotShadow,Ve.rectAreaLights.value=te.state.rectArea,Ve.ltc_1.value=te.state.rectAreaLTC1,Ve.ltc_2.value=te.state.rectAreaLTC2,Ve.pointLights.value=te.state.point,Ve.pointLightShadows.value=te.state.pointShadow,Ve.hemisphereLights.value=te.state.hemi,Ve.sunShadowMatrix.value=te.state.sunShadowMatrix,Ve.sunShadowCascade.value=te.state.sunShadowCascade,Ve.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ve.spotLightMatrix.value=te.state.spotLightMatrix,Ve.spotLightMap.value=te.state.spotLightMap,Ve.pointShadowMatrix.value=te.state.pointShadowMatrix),Q.numLightProbeGrids=Ud(T.state.lightProbeGridArray),Q.currentProgram=gt,Q.uniformsList=null,gt}function tg(C,Y,oe,Q,te){let Ne=xe.get(C),Ge=Ne.currentProgram.id+","+Q+","+te,De=Ne.programVariants.get(Ge);return De===void 0?(De=ga(C,Y,oe),Ne.programVariants.set(Ge,De)):(Ne.currentProgram=De,Ne.uniformsList=null,Ne.outputColorSpace=Q,Ne.toneMapping=te),De}function Fd(C){if(C.uniformsList===null){let Y=C.currentProgram.getUniforms();C.uniformsList=na.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function Od(C,Y){let oe=xe.get(C);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function ng(C,Y,oe,Q,te){Y.isScene!==!0&&(Y=Oe),Ae.resetTextureUnits();let Ne=Y.fog,Ge=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?Y.environment:null,De=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ct.workingColorSpace,ke=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Xe=L.get(Q.envMap||Ge,ke),at=Q.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,gt=!!oe.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ve=!!oe.morphAttributes.position,xt=!!oe.morphAttributes.normal,Qt=!!oe.morphAttributes.color,Nt=wi;Q.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Nt=A.toneMapping);let Pt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,vn=Pt!==void 0?Pt.length:0,We=xe.get(Q),Rn=T.state.lights;if(le===!0&&(ve===!0||C!==F)){let Vt=C===F&&Q.id===H;de.setState(Q,C,Vt)}let Tt=!1,Ds=!1;Q.version===We.__version?We.needsLights&&We.lightsStateVersion!==Rn.state.version||te.isBatchedMesh&&We.batching===!1||!te.isBatchedMesh&&We.batching===!0||te.isBatchedMesh&&We.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&We.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&We.instancing===!1||!te.isInstancedMesh&&We.instancing===!0||te.isSkinnedMesh&&We.skinning===!1||!te.isSkinnedMesh&&We.skinning===!0||te.isInstancedMesh&&We.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&We.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&We.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&We.instancingMorph===!1&&te.morphTexture!==null||We.envMap!==Xe||Q.fog===!0&&We.fog!==Ne||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==de.numPlanes||We.numIntersection!==de.numIntersection)||We.vertexAlphas!==at||We.vertexTangents!==gt||We.morphTargets!==Ve||We.morphNormals!==xt||We.morphColors!==Qt||We.morphTargetsCount!==vn||We.numLightProbeGrids!==Ud(T.state.lightProbeGridArray)?Tt=!0:(We.outputColorSpace!==De||We.toneMapping!==Nt)&&(Ds=!0):(Tt=!0,We.__version=Q.version);let _n=We.currentProgram;(Tt===!0||Ds===!0)&&(_n=Ds===!0?tg(Q,Y,te,De,Nt):ga(Q,Y,te),P&&Q.isNodeMaterial&&P.onUpdateProgram(Q,_n,We));let nl=!1,hs=!1,Ns=!1,Mt=_n.getUniforms(),dn=We.uniforms;if(j.useProgram(_n.program)&&(nl=!0,hs=!0,Ns=!0),Q.id!==H&&(H=Q.id,hs=!0),nl||F!==C){j.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Mt.setValue($,"projectionMatrix",C.projectionMatrix),Mt.setValue($,"viewMatrix",C.matrixWorldInverse);let ln=Mt.map.cameraPosition;ln!==void 0&&ln.setValue($,Fe.setFromMatrixPosition(C.matrixWorld)),ue.logarithmicDepthBuffer&&Mt.setValue($,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Mt.setValue($,"isOrthographic",C.isOrthographicCamera===!0),F!==C&&(F=C,hs=!0,Ns=!0)}if(We.needsLights&&(Rn.state.sunShadowMap.length>0&&Mt.setValue($,"sunShadowMap",Rn.state.sunShadowMap,Ae),Rn.state.directionalShadowMap.length>0&&Mt.setValue($,"directionalShadowMap",Rn.state.directionalShadowMap,Ae),Rn.state.spotShadowMap.length>0&&Mt.setValue($,"spotShadowMap",Rn.state.spotShadowMap,Ae),Rn.state.pointShadowMap.length>0&&Mt.setValue($,"pointShadowMap",Rn.state.pointShadowMap,Ae)),te.isSkinnedMesh){Mt.setOptional($,te,"bindMatrix"),Mt.setOptional($,te,"bindMatrixInverse");let Vt=te.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Mt.setValue($,"boneTexture",Vt.boneTexture,Ae))}te.isBatchedMesh&&(Mt.setOptional($,te,"batchingTexture"),Mt.setValue($,"batchingTexture",te._matricesTexture,Ae),Mt.setOptional($,te,"batchingIdTexture"),Mt.setValue($,"batchingIdTexture",te._indirectTexture,Ae),Mt.setOptional($,te,"batchingColorTexture"),te._colorsTexture!==null&&Mt.setValue($,"batchingColorTexture",te._colorsTexture,Ae));let li=oe.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&me.update(te,oe,_n),(hs||We.receiveShadow!==te.receiveShadow)&&(We.receiveShadow=te.receiveShadow,Mt.setValue($,"receiveShadow",te.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&Y.environment!==null&&(dn.envMapIntensity.value=Y.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=_S()),hs){if(Mt.setValue($,"toneMappingExposure",A.toneMappingExposure),We.needsLights&&ig(dn,Ns),Ne&&Q.fog===!0&&Se.refreshFogUniforms(dn,Ne),Se.refreshMaterialUniforms(dn,Q,he,se,T.state.transmissionRenderTarget[C.id]),We.needsLights&&We.numLightProbeGrids>0){let Vt=y,ln=0;for(let Fi of T.state.lightProbeGridArray)Fi.texture!==null&&(Vt.textures[ln]=Fi.texture,Vt.min[ln]=Fi.boundingBox.min,Vt.max[ln]=Fi.boundingBox.max,Vt.resolution[ln]=Fi.resolution,ln++);for(let Fi in Vt)Vt[Fi].length=ln;dn.probesSH.value=Vt.textures,dn.probesMin.value=Vt.min,dn.probesMax.value=Vt.max,dn.probesResolution.value=Vt.resolution}na.upload($,Fd(We),dn,Ae)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(na.upload($,Fd(We),dn,Ae),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Mt.setValue($,"center",te.center),Mt.setValue($,"modelViewMatrix",te.modelViewMatrix),Mt.setValue($,"normalMatrix",te.normalMatrix),Mt.setValue($,"modelMatrix",te.matrixWorld),Q.uniformsGroups!==void 0){let Vt=Q.uniformsGroups;for(let ln=0,Fi=Vt.length;ln<Fi;ln++){let kd=Vt[ln];He.update(kd,_n),He.bind(kd,_n)}}return _n}function ig(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.sunLights.needsUpdate=Y,C.sunLightShadows.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function sg(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,Y,oe){let Q=xe.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),xe.get(C.texture).__webglTexture=Y,xe.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:oe,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){let oe=xe.get(C);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,oe=0){G=C,O=Y,U=oe;let Q=null,te=!1,Ne=!1;if(C){let De=xe.get(C);if(De.__useDefaultFramebuffer!==void 0){j.bindFramebuffer($.FRAMEBUFFER,De.__webglFramebuffer),k.copy(C.viewport),W.copy(C.scissor),J=C.scissorTest,j.viewport(k),j.scissor(W),j.setScissorTest(J),H=-1;return}else if(De.__webglFramebuffer===void 0)Ae.setupRenderTarget(C);else if(De.__hasExternalTextures)Ae.rebindTextures(C,xe.get(C.texture).__webglTexture,xe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let at=C.depthTexture;if(De.__boundDepthTexture!==at){if(at!==null&&xe.has(at)&&(C.width!==at.image.width||C.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(C)}}let ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ne=!0);let Xe=xe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xe[Y])?Q=Xe[Y][oe]:Q=Xe[Y],te=!0):C.samples>0&&Ae.useMultisampledRTT(C)===!1?Q=xe.get(C).__webglMultisampledFramebuffer:Array.isArray(Xe)?Q=Xe[oe]:Q=Xe,k.copy(C.viewport),W.copy(C.scissor),J=C.scissorTest}else k.copy(fe).multiplyScalar(he).floor(),W.copy(ne).multiplyScalar(he).floor(),J=Re;if(oe!==0&&(Q=N),j.bindFramebuffer($.FRAMEBUFFER,Q)&&j.drawBuffers(C,Q),j.viewport(k),j.scissor(W),j.setScissorTest(J),te){let De=xe.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Y,De.__webglTexture,oe)}else if(Ne){let De=Y;for(let ke=0;ke<C.textures.length;ke++){let Xe=xe.get(C.textures[ke]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+ke,Xe.__webglTexture,oe,De)}}else if(C!==null&&oe!==0){let De=xe.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,De.__webglTexture,oe)}H=-1};function Bd(C){let Y=xe.get(C);return(Y.__readFormat!==C.format||Y.__readType!==C.type)&&(Y.__readFormat=C.format,Y.__readType=C.type,Y.__formatReadable=ue.textureFormatReadable(C.format),Y.__typeReadable=ue.textureTypeReadable(C.type)),Y}this.readRenderTargetPixels=function(C,Y,oe,Q,te,Ne,Ge,De=0){if(!(C&&C.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(ke=ke[Ge],Array.isArray(ke)&&(ke=ke[0])),ke){j.bindFramebuffer($.FRAMEBUFFER,ke);try{let Xe=C.textures[De],at=Xe.format,gt=Xe.type;C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+De);let Ve=Bd(Xe);if(Ve.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-Q&&oe>=0&&oe<=C.height-te&&$.readPixels(Y,oe,Q,te,we.convert(at),we.convert(gt),Ne)}finally{let Xe=G!==null?xe.get(G).__webglFramebuffer:null;j.bindFramebuffer($.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(C,Y,oe,Q,te,Ne,Ge,De=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(ke=ke[Ge],Array.isArray(ke)&&(ke=ke[0])),ke)if(Y>=0&&Y<=C.width-Q&&oe>=0&&oe<=C.height-te){j.bindFramebuffer($.FRAMEBUFFER,ke);let Xe=C.textures[De],at=Xe.format,gt=Xe.type;C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+De);let Ve=Bd(Xe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,xt),$.bufferData($.PIXEL_PACK_BUFFER,Ne.byteLength,$.STREAM_READ),$.readPixels(Y,oe,Q,te,we.convert(at),we.convert(gt),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);let Qt=G!==null?xe.get(G).__webglFramebuffer:null;j.bindFramebuffer($.FRAMEBUFFER,Qt);let Nt=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await dm($,Nt,4),$.bindBuffer($.PIXEL_PACK_BUFFER,xt),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Ne),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(xt),$.deleteSync(Nt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,oe=0){let Q=Math.pow(2,-oe),te=Math.floor(C.image.width*Q),Ne=Math.floor(C.image.height*Q),Ge=Y!==null?Y.x:0,De=Y!==null?Y.y:0;Ae.setTexture2D(C,0),$.copyTexSubImage2D($.TEXTURE_2D,oe,0,0,Ge,De,te,Ne),j.unbindTexture()},this.copyTextureToTexture=function(C,Y,oe=null,Q=null,te=0,Ne=0){let Ge,De,ke,Xe,at,gt,Ve,xt,Qt,Nt=C.isCompressedTexture?C.mipmaps[Ne]:C.image;if(oe!==null)Ge=oe.max.x-oe.min.x,De=oe.max.y-oe.min.y,ke=oe.isBox3?oe.max.z-oe.min.z:1,Xe=oe.min.x,at=oe.min.y,gt=oe.isBox3?oe.min.z:0;else{let Mt=Math.pow(2,-te);Ge=Math.floor(Nt.width*Mt),De=Math.floor(Nt.height*Mt),C.isDataArrayTexture?ke=Nt.depth:C.isData3DTexture?ke=Math.floor(Nt.depth*Mt):ke=1,Xe=0,at=0,gt=0}Q!==null?(Ve=Q.x,xt=Q.y,Qt=Q.z):(Ve=0,xt=0,Qt=0);let Pt=we.convert(Y.format),vn=we.convert(Y.type),We;Y.isData3DTexture?(Ae.setTexture3D(Y,0),We=$.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Ae.setTexture2DArray(Y,0),We=$.TEXTURE_2D_ARRAY):(Ae.setTexture2D(Y,0),We=$.TEXTURE_2D),j.activeTexture($.TEXTURE0),j.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Y.flipY),j.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),j.pixelStorei($.UNPACK_ALIGNMENT,Y.unpackAlignment);let Rn=j.getParameter($.UNPACK_ROW_LENGTH),Tt=j.getParameter($.UNPACK_IMAGE_HEIGHT),Ds=j.getParameter($.UNPACK_SKIP_PIXELS),_n=j.getParameter($.UNPACK_SKIP_ROWS),nl=j.getParameter($.UNPACK_SKIP_IMAGES);j.pixelStorei($.UNPACK_ROW_LENGTH,Nt.width),j.pixelStorei($.UNPACK_IMAGE_HEIGHT,Nt.height),j.pixelStorei($.UNPACK_SKIP_PIXELS,Xe),j.pixelStorei($.UNPACK_SKIP_ROWS,at),j.pixelStorei($.UNPACK_SKIP_IMAGES,gt);let hs=C.isDataArrayTexture||C.isData3DTexture,Ns=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){let Mt=xe.get(C),dn=xe.get(Y),li=xe.get(Mt.__renderTarget),Vt=xe.get(dn.__renderTarget);j.bindFramebuffer($.READ_FRAMEBUFFER,li.__webglFramebuffer),j.bindFramebuffer($.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let ln=0;ln<ke;ln++)hs&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,xe.get(C).__webglTexture,te,gt+ln),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,xe.get(Y).__webglTexture,Ne,Qt+ln)),$.blitFramebuffer(Xe,at,Xe+Ge,at+De,Ve,xt,Ve+Ge,xt+De,$.DEPTH_BUFFER_BIT,$.NEAREST);j.bindFramebuffer($.READ_FRAMEBUFFER,null),j.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(te!==0||C.isRenderTargetTexture||xe.has(C)){let Mt=xe.get(C),dn=xe.get(Y);j.bindFramebuffer($.READ_FRAMEBUFFER,b),j.bindFramebuffer($.DRAW_FRAMEBUFFER,D);for(let li=0;li<ke;li++)hs?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Mt.__webglTexture,te,gt+li):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Mt.__webglTexture,te),Ns?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,dn.__webglTexture,Ne,Qt+li):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,dn.__webglTexture,Ne),te!==0?$.blitFramebuffer(Xe,at,Xe+Ge,at+De,Ve,xt,Ve+Ge,xt+De,$.COLOR_BUFFER_BIT,$.NEAREST):Ns?$.copyTexSubImage3D(We,Ne,Ve,xt,Qt+li,Xe,at,Ge,De):$.copyTexSubImage2D(We,Ne,Ve,xt,Xe,at,Ge,De);j.bindFramebuffer($.READ_FRAMEBUFFER,null),j.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Ns?C.isDataTexture||C.isData3DTexture?$.texSubImage3D(We,Ne,Ve,xt,Qt,Ge,De,ke,Pt,vn,Nt.data):Y.isCompressedArrayTexture?$.compressedTexSubImage3D(We,Ne,Ve,xt,Qt,Ge,De,ke,Pt,Nt.data):$.texSubImage3D(We,Ne,Ve,xt,Qt,Ge,De,ke,Pt,vn,Nt):C.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Ne,Ve,xt,Ge,De,Pt,vn,Nt.data):C.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Ne,Ve,xt,Nt.width,Nt.height,Pt,Nt.data):$.texSubImage2D($.TEXTURE_2D,Ne,Ve,xt,Ge,De,Pt,vn,Nt);j.pixelStorei($.UNPACK_ROW_LENGTH,Rn),j.pixelStorei($.UNPACK_IMAGE_HEIGHT,Tt),j.pixelStorei($.UNPACK_SKIP_PIXELS,Ds),j.pixelStorei($.UNPACK_SKIP_ROWS,_n),j.pixelStorei($.UNPACK_SKIP_IMAGES,nl),Ne===0&&Y.generateMipmaps===!0&&Y.mipmapsAutoUpdate===!0&&$.generateMipmap(We),j.unbindTexture()},this.initRenderTarget=function(C){xe.get(C).__webglFramebuffer===void 0&&Ae.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ae.setTextureCube(C,0):C.isData3DTexture?Ae.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ae.setTexture2DArray(C,0):Ae.setTexture2D(C,0),j.unbindTexture()},this.resetState=function(){O=0,U=0,G=null,j.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};function _f(i,e){if(e===Gu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ea||e===Po){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ea)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function t0(i){let e=new Map,t=new Map,n=i.clone();return n0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function n0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)n0(i.children[n],e.children[n],t)}var Fo=class extends Ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new rh(t,dt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new rh(t,dt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new zf(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ns.extractUrlBase(e);a=ns.resolveURL(c,this.path)}else a=ns.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new $r(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===o0){try{a[dt.KHR_BINARY_GLTF]=new Hf(e)}catch(u){s&&s(u);return}r=JSON.parse(a[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Yf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:a[u]=new Tf;break;case dt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Gf(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:a[u]=new Vf;break;case dt.KHR_MESH_QUANTIZATION:a[u]=new Wf;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function yS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Xt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bf=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Le(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Pn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Es(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zs(h),c.distance=u;break;case"spot":c=new fo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Tf=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ot}extendParams(e,t,n){let s=[];e.color=new Le(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Pn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}},Ef=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},wf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(r,r)}return Promise.all(s)}},Af=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Rf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Cf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Pf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Rt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},If=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Lf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(r[0],r[1],r[2],Pn),Promise.all(s)}},Df=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Nf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(r[0],r[1],r[2],Pn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Rt)),Promise.all(s)}},Uf=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Ff=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Of=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Bf=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},kf=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},rh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},zf=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==si.TRIANGLES&&c.mode!==si.TRIANGLE_STRIP&&c.mode!==si.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let v of u){let S=new Ke,g=new z,x=new Wn,m=new z(1,1,1),M=new qi(v.geometry,v.material,f);for(let w=0;w<f;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,w),l.SCALE&&m.fromBufferAttribute(l.SCALE,w),M.setMatrixAt(w,S.compose(g,x,m));let y=null;for(let w in l)if(w==="_COLOR_0"){let T=l[w];M.instanceColor=new $i(T.array,T.itemSize,T.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(y===null){let p=M.geometry;y=new At,y.name=p.name;for(let _ in p.attributes)y.setAttribute(_,p.attributes[_]);for(let _ in p.morphAttributes)y.morphAttributes[_]=p.morphAttributes[_];p.index!==null&&y.setIndex(p.index),y.morphTargetsRelative=p.morphTargetsRelative;for(let _ of p.groups)y.addGroup(_.start,_.count,_.materialIndex);p.boundingBox!==null&&(y.boundingBox=p.boundingBox.clone()),p.boundingSphere!==null&&(y.boundingSphere=p.boundingSphere.clone()),y.drawRange.start=p.drawRange.start,y.drawRange.count=p.drawRange.count,y.userData=Object.assign({},p.userData),M.geometry=y}let T=l[w];y.setAttribute(w,new $i(T.array,T.itemSize,T.normalized))}Lt.prototype.copy.call(M,v),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},o0="glTF",Uo=12,i0={JSON:1313821514,BIN:5130562},Hf=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Uo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==o0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Uo,r=new DataView(e,Uo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===i0.JSON){let c=new Uint8Array(e,Uo+a,o);this.content=n.decode(c)}else if(l===i0.BIN){let c=Uo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Gf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=$f[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=$f[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],d=ra[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let v in d.attributes){let S=d.attributes[v],g=l[v];g!==void 0&&(S.normalized=g)}u(d)},o,c,Pn,f)})})}},Vf=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Wf=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},ah=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,v=e*c,S=v-c,g=-2*d+3*f,x=d-f,m=1-g,M=x-f+u;for(let y=0;y!==o;y++){let w=a[S+y+o],T=a[S+y+l]*h,p=a[v+y+o],_=a[v+y]*h;r[y]=m*w+M*T+g*p+x*_}return r}},MS=new Wn,Xf=class extends ah{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return MS.fromArray(r).normalize().toArray(r),r}},si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ra={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},s0={9728:Ut,9729:nn,9984:mc,9985:Jr,9986:nr,9987:ii},r0={33071:Jn,33648:Nr,10497:Sn},yf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$f={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Cs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},SS={CUBICSPLINE:void 0,LINEAR:Gs,STEP:Hs},Mf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ei})),i.DefaultMaterial}function sr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function TS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function ES(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wS(i){let e,t=i.extensions&&i.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sf(t.attributes):e=i.indices+":"+Sf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Sf(i.targets[n]);return e}function Sf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function qf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var RS=new Ke,Yf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&a<98?(this.textureLoader=new co(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new po(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $r(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return sr(r,o,s),Pi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(ns.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=yf[s.type],o=ra[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new $t(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=yf[s.type],c=ra[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,v=s.normalized===!0,S,g;if(d&&d!==u){let x=Math.floor(f/d),m="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count,M=t.cache.get(m);M||(S=new c(o,x*d,s.count*d/h),M=new Xs(S,d/h),t.cache.add(m,M)),g=new xs(M,l,f%d/h,v)}else o===null?S=new c(s.count*l):S=new c(o,f,s.count*l),g=new $t(S,l,v);if(s.sparse!==void 0){let x=yf.SCALAR,m=ra[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,w=new m(a[1],M,s.sparse.count*x),T=new c(a[2],y,s.sparse.count*l);o!==null&&(g=new $t(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let p=0,_=w.length;p<_;p++){let I=w[p];if(g.setX(I,T[p*l]),l>=2&&g.setY(I,T[p*l+1]),l>=3&&g.setZ(I,T[p*l+2]),l>=4&&g.setW(I,T[p*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=v}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=s0[f.magFilter]||nn,h.minFilter=s0[f.minFilter]||ii,h.wrapS=r0[f.wrapS]||Sn,h.wrapT=r0[f.wrapT]||Sn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ut&&h.minFilter!==nn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(f){return new Promise(function(d,v){t.parse(f,d,v)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(d,v){let S=d;t.isImageBitmapLoader===!0&&(S=function(g){let x=new jt(g);x.needsUpdate=!0,d(x)}),t.load(ns.resolveURL(f,r.path),S,void 0,v)})})}let u=h.then(function(f){return c===!0&&o.revokeObjectURL(l),Pi(f,a),f.userData.mimeType=a.mimeType||AS(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Yi,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ys,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return qt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[dt.KHR_MATERIALS_UNLIT]){let u=s[dt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Pn),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Rt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Bt);let h=r.alphaMode||Mf.OPAQUE;if(h===Mf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Mf.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ot&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ot&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ot){let u=r.emissiveFactor;o.emissive=new Le().setRGB(u[0],u[1],u[2],Pn)}return r.emissiveTexture!==void 0&&a!==Ot&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&sr(s,u,r),u})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return a0(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=wS(c),u=s[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=a0(new At,c,t),c.mode===si.TRIANGLE_STRIP?f=f.then(d=>_f(d,Po)):c.mode===si.TRIANGLE_FAN&&(f=f.then(d=>_f(d,ea))),s[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?bS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,v=h.length;d<v;d++){let S=h[d],g=a[d],x,m=c[d];if(g.mode===si.TRIANGLES||g.mode===si.TRIANGLE_STRIP||g.mode===si.TRIANGLE_FAN||g.mode===void 0){let M=r.isSkinnedMesh===!0,y=S.hasAttribute("skinIndex")&&S.hasAttribute("skinWeight");M&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),x=M&&y?new Ha(S,m):new Je(S,m),x.isSkinnedMesh===!0&&x.normalizeSkinWeights()}else if(g.mode===si.LINES)x=new qs(S,m);else if(g.mode===si.LINE_STRIP)x=new $s(S,m);else if(g.mode===si.LINE_LOOP)x=new Va(S,m);else if(g.mode===si.POINTS)x=new Ms(S,m);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(x.geometry.morphAttributes).length>0&&ES(x,r),x.name=t.createUniqueName(r.name||"mesh_"+e),Pi(x,r),g.extensions&&sr(s,x,g),t.assignFinalMaterial(x),u.push(x)}for(let d=0,v=u.length;d<v;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&sr(s,u[0],r),u[0];let f=new tt;r.extensions&&sr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,v=u.length;d<v;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(Ai.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ts(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new Ke;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ga(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],v=s.samplers[d.sampler],S=d.target,g=S.node,x=s.parameters!==void 0?s.parameters[v.input]:v.input,m=s.parameters!==void 0?s.parameters[v.output]:v.output;S.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",x)),l.push(this.getDependency("accessor",m)),c.push(v),h.push(S))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],v=u[2],S=u[3],g=u[4],x=[];for(let M=0,y=f.length;M<y;M++){let w=f[M],T=d[M],p=v[M],_=S[M],I=g[M];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let A=n._createAnimationTracks(w,T,p,_,I);if(A)for(let R=0;R<A.length;R++)x.push(A[R])}let m=new lo(r,void 0,x);return Pi(m,s),m})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,RS)});for(let d=0,v=u.length;d<v;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,v=u[0];h.pivot=new z().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],v.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Gr:c.length>1?h=new tt:c.length===1?h=c[0]:h=new Lt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Pi(h,r),r.extensions&&sr(n,h,r),r.matrix!==void 0){let u=new Ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new tt;n.name&&(r.name=s.createUniqueName(n.name)),Pi(r,n),n.extensions&&sr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(t0(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof mn||f instanceof jt)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Cs[r.path]===Cs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Cs[r.path]){case Cs.weights:h=Ji;break;case Cs.rotation:h=Qi;break;case Cs.translation:case Cs.scale:h=Ts;break;default:n.itemSize===1?h=Ji:h=Ts;break}let u=s.interpolation!==void 0?SS[s.interpolation]:Gs,f=this._getArrayFromAccessor(n);for(let d=0,v=l.length;d<v;d++){let S=new h(l[d]+"."+Cs[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),a.push(S)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=qf(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Qi?Xf:ah;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function CS(i,e,t){let n=e.attributes,s=new pn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),o.normalized){let h=qf(ra[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new z,l=new z;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,v=f.max;if(d!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(v[2]))),f.normalized){let S=qf(ra[f.componentType]);l.multiplyScalar(S)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Un;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function a0(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=$f[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ct.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),Pi(i,e),CS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?TS(i,e.targets,t):i})}var ar=["guestA","guestB","guestC"],c0={guestA:"\uB370\uB2D8 \uBCC4\uBB34\uB2AC",guestB:"\uAE08\uBC1C \uB54B\uC740 \uBA38\uB9AC",guestC:"\uD770 \uC6D0\uD53C\uC2A4"},jf=new Set;function h0(){let i=new Uint8Array([150,150,150,255,205,205,205,255,255,255,255,255]),e=new ei(i,3,1);return e.minFilter=e.magFilter=Ut,e.needsUpdate=!0,e}var rr="#fde9e7",PS="#f5c6c9",l0={guestA:{hair:"#4b3634",hairStyle:"long",top:"#bfe2f1",sleeve:null,bottom:"pants",bottomColor:"#8fa1df",shoes:"#bfe2f1",F:[12,20,202,350],B:[20,393,195,722],head:[.12,0,.88,.385],topCrop:[.22,.43,.78,.67],legL:[.12,.63,.5,.94],legR:[.5,.63,.88,.94]},guestB:{hair:"#f2df8c",hairStyle:"braids",top:"#ffffff",sleeve:"#ffcaca",bottom:"shorts",bottomColor:"#cdebc9",warmers:"#ffffff",shoes:"#ffcaca",F:[234,19,413,352],B:[239,393,407,722],head:[.12,0,.88,.385],topCrop:[.2,.43,.8,.66],lowCrop:[.15,.62,.85,.76]},guestC:{hair:"#a68a6b",hairStyle:"wavy",top:"#fffdfb",sleeve:"#fffdfb",longSleeve:!0,bottom:"dress",bottomColor:"#fffdfb",boots:"#8c6d58",F:[444,22,634,348],B:[450,395,628,720],head:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.78]},shop:{hair:"#3f302f",hairStyle:"wavy",top:"#bfe2f1",sleeve:"#bfe2f1",bottom:"dress",bottomColor:"#fbf09b",shoes:"#bfe2f1",F:[666,23,844,347],B:[671,395,839,719],head:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.8]},cafe:{hair:"#3f302f",hairStyle:"ponytail",top:"#fbdede",sleeve:"#fbdede",bottom:"dress",bottomColor:"#d4efbf",shoes:"#fbdede",F:[868,3,1075,368],B:[881,376,1062,738],head:[.1,.02,.86,.405],headB:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.8]}},Oo=new Image;Oo.src="looks.png";var Kf=new Map;function IS(i,e,t,{clean:n=!1,skinBelow:s=!1}={}){let r=i.join(",")+e.join(",")+t+n+s;if(Kf.has(r))return Kf.get(r);let[a,o,l,c]=i,h=l-a,u=c-o,f=a+e[0]*h,d=o+e[1]*u,v=(e[2]-e[0])*h,S=(e[3]-e[1])*u,g=n?Math.max(48,Math.round(v)):256,x=Math.round(g*S/v),m=document.createElement("canvas");m.width=g,m.height=x;let M=m.getContext("2d",{willReadFrequently:n});M.fillStyle=t,M.fillRect(0,0,g,x),s&&(M.fillStyle=rr,M.fillRect(0,x*.55,g,x));let y=new ti(m);y.colorSpace=Rt,y.anisotropy=4;let w=()=>{if(M.drawImage(Oo,f,d,v,S,0,0,g,x),n){let T=M.getImageData(0,0,g,x),p=T.data,_=new Uint8ClampedArray(p),I=3,A=R=>p[R]*.3+p[R+1]*.59+p[R+2]*.11;for(let R=0;R<x;R++)for(let P=0;P<g;P++){let N=(R*g+P)*4,b=A(N),D=N,O=b;for(let U=-I;U<=I;U++){let G=R+U;if(!(G<0||G>=x))for(let H=-I;H<=I;H++){let F=P+H;if(F<0||F>=g)continue;let k=(G*g+F)*4,W=A(k);W>O&&(O=W,D=k)}}b<O*.84&&(_[N]=p[D],_[N+1]=p[D+1],_[N+2]=p[D+2])}T.data.set(_),M.putImageData(T,0,0)}y.needsUpdate=!0};return Oo.complete&&Oo.naturalWidth?w():Oo.addEventListener("load",w,{once:!0}),Kf.set(r,y),y}function Zf(i,e={}){let t=new tt,n=[],s=[],r={root:t,arms:n,head:null,animate:g,setLook:u,look:null},a=null,o=document.createElement("canvas");o.width=o.height=64;let l=o.getContext("2d"),c=l.createRadialGradient(32,32,4,32,32,30);c.addColorStop(0,"rgba(90,60,120,0.32)"),c.addColorStop(1,"rgba(90,60,120,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);let h=new Je(new Ki(.62,.62),new Ot({map:new ti(o),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.004,t.add(h);function u(x){a&&t.remove(a);let m=l0[x]||l0.guestA;r.look=x;let M=new Map,y=(O,U=1)=>{let G=O+U;return M.has(G)||M.set(G,new Ot({color:new Le(O).multiplyScalar(U)})),M.get(G)},w=(O,U,G,H)=>new Ot({map:IS(m[O],U,G,H),side:Bt}),T={clean:!0},p=(O,U,G,H=0,F=0,k=0)=>{let W=new Je(U,G);return W.position.set(H,F,k),W.castShadow=!0,O.add(W),W},_=(O,U=10,G=8)=>new Zt(O,U,G),I=(O,U,G,H,F,k,W,J=0,B=8)=>(p(O,new ot(U,G,H,B,1,!0,-Math.PI/2,Math.PI),F,0,W,J),p(O,new ot(U,G,H,B,1,!0,Math.PI/2,Math.PI),k,0,W,J));a=new tt,t.add(a),n.length=0,s.length=0;for(let O of[-1,1]){let U=new tt;if(U.position.set(.07*O,.34,0),a.add(U),m.bottom==="pants"){let G=new tt;G.position.y=-.12,U.add(G),I(G,.075,.085,.28,w("F",O<0?m.legL:m.legR,m.bottomColor,T),w("B",O<0?m.legR:m.legL,m.bottomColor,T),0)}else p(U,new ot(.044,.04,.24,6),y(rr),0,-.12,0);m.warmers&&p(U,new ot(.058,.06,.11,7),y(m.warmers),0,-.205,0),m.boots?(p(U,new ot(.06,.058,.14,7),y(m.boots),0,-.2,0),p(U,_(.066,8,6),y(m.boots),0,-.275,.02).scale.set(1,.6,1.3)):p(U,_(.066,8,6),y(m.shoes),0,-.29,.022).scale.set(1,.62,1.35),s.push(U)}p(a,new ot(.06,.06,.12,10),y(rr),0,.68,0),m.bottom==="dress"?I(a,.12,.25,.4,w("F",m.lowCrop,m.bottomColor,T),w("B",m.lowCrop,m.bottomColor,T),.44):(I(a,.115,.135,.28,w("F",m.topCrop,m.top,T),w("B",m.topCrop,m.top,T),.5),m.bottom==="pants"&&I(a,.135,.15,.06,y(m.bottomColor),y(m.bottomColor,.94),.37),m.bottom==="shorts"&&I(a,.14,.17,.13,w("F",m.lowCrop,m.bottomColor,T),w("B",m.lowCrop,m.bottomColor,T),.33));for(let O of[-1,1]){let U=new tt;U.position.set(.14*O,.61,0),a.add(U),m.sleeve&&p(U,_(m.longSleeve?.06:.07,8,6),y(m.sleeve),.01*O,-.03,0).scale.set(1,1.1,1),p(U,new ot(.036,.04,.2,6),y(m.longSleeve?m.sleeve:rr),.012*O,-.12,0),m.longSleeve&&p(U,_(.05,8,6),y(m.sleeve),.014*O,-.19,0).scale.set(1,.7,1),p(U,_(.055,8,6),y(rr),.016*O,-.245,.006),U.rotation.z=.32*O,n.push(U)}let A=new tt;A.position.set(0,.89,0),a.add(A);let R=.24,P=1.12,N=.97;p(A,_(R*1.04,14,10),y(rr)).scale.set(P,N,1),p(A,new Zt(R*1.06,16,10,0,Math.PI,0,Math.PI*.69),w("F",m.head,m.hair,{skinBelow:!0})).scale.set(P,N,1),p(A,new Zt(R*1.055,16,10,Math.PI,Math.PI,0,Math.PI*.72),w("B",m.headB||m.head,m.hair)).scale.set(P,N,1);for(let O of[-1,1])p(A,_(.08,8,6),y(rr),.3*O,-.03,.02).scale.set(.55,1,.75),p(A,_(.048,8,6),y(PS),.32*O,-.03,.035).scale.set(.35,.8,.6);f(A,m,p,y,_),r.head=A,t.traverse(O=>{O.isMesh&&(O.frustumCulled=!1)})}function f(x,m,M,y,w){if(m.hairStyle!=="braids")return;let T=y(m.hair,.97);for(let p of[-1,1])for(let _=0;_<5;_++)M(x,w(.045-_*.003,7,5),T,(.2-_*.006)*p,-.15-_*.065,.09+_*.012).scale.set(1,.85,1)}let d=0,v=0,S=0;function g(x,m,M,y=!1,w=!1){let T=r.head;if(S+=((y?1:0)-S)*Math.min(1,x*10),S>.02){s[0].rotation.x=s[1].rotation.x=-1.45*S,n[0].rotation.x=n[1].rotation.x=-.5*S,a.position.y=.11*S,a.rotation.x=0,T.rotation.z=0,v=0;return}let p=Math.min(1,m/2);v+=(p-v)*Math.min(1,x*10),d+=x*(5+m*3.2);let _=Math.sin(d)*.75*v;s[0].rotation.x=_,s[1].rotation.x=-_,n[0].rotation.x=-_*.8,n[1].rotation.x=_*.8,n[0].rotation.z=-.32,n[1].rotation.z=.32,w&&(n[0].rotation.x=n[1].rotation.x=-1.2),a.position.y=Math.abs(Math.sin(d))*.035*v+Math.sin(M*2.2)*.006*(1-v),T.rotation.z=Math.sin(d*.5)*.05*v,a.rotation.x=.07*v}return u(e.look||"guestA"),r}var LS=500,oh=6,uh=1.05,rs={tteok:{name:"\uB5A1\uAF2C\uCE58",price:2e3,emoji:"\u{1F361}",tag:"\uB300\uD45C",desc:"\uB2EC\uCF64\uC9ED\uC9E4 \uC18C\uC2A4 \uB5A1\uAF2C\uCE58 \xB7 \uD3EC\uC7A5 \uAC00\uB2A5",model:"skewer"},mochi:{name:"\uACFC\uC77C\uCC39\uC300\uB5A1",price:4500,emoji:"\u{1F353}",desc:"\uBCF4\uB4E4\uBCF4\uB4E4\uD55C \uD53C\uC5D0 \uACFC\uC77C\uC774 \uAC00\uB4DD",model:"mochi",opts:{flavor:["\uC694\uAC70\uC0E4\uC778\uBA38\uC2A4\uCF13","\uD06C\uB9BC\uACE8\uB4DC\uD0A4\uC704\uD30C\uC778"]}},kiwiPf:{name:"\uD0A4\uC704 \uD30C\uC778 \uD06C\uB9BC \uCC39\uC300\uB5A1 \uD30C\uB974\uD398",price:12e3,emoji:"\u{1F95D}",desc:"\uACFC\uC77C \uAC00\uB4DD, \uCAC0\uCAC0\uD55C \uCC39\uC300\uB5A1 \uD30C\uB974\uD398",model:"kiwiParfait"},puddPf:{name:"\uD478\uB529\uCD08\uCF54\uD30C\uB974\uD398",price:12e3,emoji:"\u{1F36E}",desc:"\uCEE4\uC2A4\uD130\uB4DC \uD478\uB529\uACFC \uBC14\uB098\uB098\uC758 \uC870\uD569",model:"puddingParfait"},tangSoda:{name:"\uADE4\uC18C\uB2E4",price:6e3,emoji:"\u{1F34A}",model:"soda",c:"#ffa81e",scoop:"#fff4dc"},melonSoda:{name:"\uBA54\uB860\uC18C\uB2E4",price:6e3,emoji:"\u{1F348}",model:"soda",c:"#6fd34a",scoop:"#d6f2c4"},creamSoda:{name:"\uD06C\uB9BC\uC18C\uB2E4",price:6e3,emoji:"\u{1FAE7}",desc:"\uC5F4\uB300\uACFC\uC77C + \uB77C\uBB34\uB124\uB9DB",model:"soda",c:"#2f93ee",scoop:"#fff0c8"},chocoMilk:{name:"\uCD08\uCF54\uC6B0\uC720",price:6e3,emoji:"\u{1F36B}",model:"milk",c:"#7b4a33",drizzle:!0},greenMilk:{name:"\uB179\uCC28\uC6B0\uC720",price:6e3,emoji:"\u{1F375}",model:"milk",c:"#86a95b",drizzle:!0},melonMilk:{name:"\uBA54\uB860\uC6B0\uC720",price:6e3,emoji:"\u{1F348}",model:"milk",c:"#b9e3a0"},bananaMilk:{name:"\uBC14\uB098\uB098\uC6B0\uC720",price:6e3,emoji:"\u{1F34C}",model:"milk",c:"#f3dc8e"},mintMilk:{name:"\uBBFC\uD2B8\uCD08\uCF54\uC6B0\uC720",price:6e3,emoji:"\u{1F33F}",model:"milk",c:"#7d5a47",cream:"#d4f5e6"},americano:{name:"\uC544\uBA54\uB9AC\uCE74\uB178",price:4500,emoji:"\u2615",desc:"\uB354\uCE58 \uC6D0\uC561\uC744 \uC368\uC694",model:"coffee",opts:{temp:["\uC544\uC774\uC2A4","\uD56B"],shot:!0}},latte:{name:"\uC5F0\uC720\uB77C\uB5BC",price:5e3,emoji:"\u{1F95B}",desc:"\uC544\uC774\uC2A4\uB9CC \uAC00\uB2A5\uD574\uC694",model:"latte",opts:{shot:!0}},sodaSlush:{name:"\uC18C\uB2E4 \uC2AC\uB7EC\uC2DC",price:6500,emoji:"\u{1F9CA}",model:"slush",c:"#9dd6ff"},mintSlush:{name:"\uBBFC\uD2B8\uCD08\uCF54 \uC2AC\uB7EC\uC2DC",price:6500,emoji:"\u{1F367}",model:"slush",c:"#bdeedb",chips:!0},pineSando:{name:"\uD30C\uC778\uC560\uD50C \uC0B0\uB3C4",price:6500,emoji:"\u{1F96A}",model:"sando"},pudding:{name:"\uCEE4\uC2A4\uD130\uB4DC \uD478\uB529",price:4500,emoji:"\u{1F36E}",model:"pudding"},peachTea:{name:"\uBCF5\uC22D\uC544 \uC544\uC774\uC2A4\uD2F0",price:4500,emoji:"\u{1F351}",model:"tea",c:"#f0a050"}},Jf=[["\uCD94\uCC9C",["tteok","mochi","kiwiPf","puddPf"]],["\uC18C\uB2E4",["tangSoda","melonSoda","creamSoda"]],["\uC6B0\uC720",["chocoMilk","greenMilk","melonMilk","bananaMilk","mintMilk"]],["\uCEE4\uD53C",["americano","latte"]],["\uC2AC\uB7EC\uC2DC",["sodaSlush","mintSlush"]],["\uB514\uC800\uD2B8",["pineSando","puddPf","pudding"]],["\uD2F0",["peachTea"]]],Qf=i=>i.toLocaleString("ko-KR")+"\uC6D0",ed=new Map;function lt(i,e={}){let t=i+JSON.stringify(e);return ed.has(t)||ed.set(t,new qt({color:i,roughness:.45,metalness:0,...e})),ed.get(t)}var fh=()=>lt("#eef8fc",{transparent:!0,opacity:.32,roughness:.05,depthWrite:!1});function nt(i,e,t,n=0,s=0,r=0){let a=new Je(e,t);return a.position.set(n,s,r),i.add(a),a}var ko=(i,e=20)=>new io(i.map(([t,n])=>new ye(t,n)),e);function lh(i,e,{h:t=.17,w:n=.04}={}){nt(i,ko([[0,0],[.034,0],[.035,.006],[.008,.014],[.007,.06-.008],[.014,.06],[n*.75,.06+.035],[n,t-.02],[n+.002,t]]),fh()).renderOrder=3;let r=new tt;return r.position.y=.06+.002,i.add(r),nt(r,ko([[0,0],[.012,0],[n*.72,.035],[n-.004,t-.06-.03],[0,t-.06-.03]]),lt(e,{roughness:.3})),{lv:r,top:t-.02}}function td(i,e,t="#fffaf3",n=1){let s=new tt;s.position.y=e,i.add(s);let r=lt(t,{roughness:.75});return nt(s,new Zt(.036*n,12,8),r,0,.008,0).scale.y=.6,nt(s,new Zt(.027*n,12,8),r,0,.028*n,0).scale.y=.7,nt(s,new Ss(.018*n,.03*n,10),r,0,.05*n,0),s}function Bo(i,e,t,n){let s=new tt;s.position.set(e,t,n),i.add(s),nt(s,new Zt(.013,10,8),lt("#e0142f",{roughness:.15}));let r=nt(s,new ot(.0015,.0015,.04,4),lt("#5b7a2a"),.006,.022,0);return r.rotation.z=-.35,s}function ch(i,e,t,n=.12){let s=nt(i,new ot(.004,.004,n,6),lt(e));return s.position.set(.012,t,.005),s.rotation.z=-.22,s}function hh(i,e=.085){nt(i,new ot(e,e*.8,.01,24),lt("#fffdf8",{roughness:.3}),0,.005,0)}function zo(i,e){let t=rs[i],n=new tt,s=[],r=[],a=null;switch(t.model){case"soda":{let o=lh(n,t.c);a=o.lv;let l=nt(n,new Zt(.035,14,10),lt(t.scoop,{roughness:.85}),0,o.top+.012,0);l.scale.y=.85,s.push(l),s.push(Bo(n,.012,o.top+.048,.012));break}case"milk":{let o=lh(n,t.c);a=o.lv;let l=td(n,o.top-.004,t.cream);if(s.push(l),t.drizzle)for(let c=0;c<3;c++){let h=nt(l,new ji(.026-c*.006,.0025,4,18),lt("#4a2a1d"),0,.015+c*.016,0);h.rotation.x=Math.PI/2}s.push(Bo(n,0,o.top+.066,0));break}case"slush":{let o=lh(n,t.c,{h:.16,w:.042});a=o.lv;let l=nt(n,new Zt(.043,14,8,0,Math.PI*2,0,Math.PI/2),lt(t.c,{roughness:.95}),0,o.top-.004,0);if(l.scale.y=.7,s.push(l),t.chips)for(let c=0;c<6;c++)s.push(nt(n,new kt(.008,.004,.008),lt("#3b2418"),Math.cos(c)*.022,o.top+.016,Math.sin(c*1.7)*.022));s.push(ch(n,"#ff8fb8",o.top));break}case"tea":{let o=nt(n,ko([[0,0],[.034,0],[.04,.15],[.041,.15]]),fh());o.renderOrder=3,a=new tt,a.position.y=.004,n.add(a),nt(a,new ot(.037,.032,.13,18),lt(t.c,{roughness:.25,transparent:!0,opacity:.88}),0,.065,0);for(let c=0;c<3;c++)nt(a,new kt(.02,.02,.02),lt("#ffffff",{transparent:!0,opacity:.55,roughness:.05}),Math.cos(c*2.1)*.016,.115,Math.sin(c*2.1)*.016).rotation.y=c;let l=nt(n,new ot(.02,.02,.005,14),lt("#ffd58a"),.03,.15,0);l.rotation.z=Math.PI/2,s.push(l),s.push(ch(n,"#9be0c4",.14,.16));break}case"coffee":{if(e.temp==="\uD56B"){nt(n,new ot(.075,.06,.008,20),lt("#fffdf8"),0,.004,0),nt(n,new ot(.042,.034,.08,18,1,!0),lt("#fffaf2",{side:Bt}),0,.048,0),nt(n,new ot(.034,.034,.004,18),lt("#fffaf2"),0,.01,0);let o=nt(n,new ji(.02,.006,6,12,Math.PI),lt("#fffaf2"),.042,.05,0);o.rotation.z=-Math.PI/2,a=new tt,a.position.y=.012,n.add(a),nt(a,new ot(.039,.034,.066,18),lt("#3a2014",{roughness:.15}),0,.033,0)}else{let o=nt(n,ko([[0,0],[.034,0],[.04,.15],[.041,.15]]),fh());o.renderOrder=3,a=new tt,a.position.y=.004,n.add(a),nt(a,new ot(.037,.032,.13,18),lt("#3a1f12",{roughness:.2,transparent:!0,opacity:.92}),0,.065,0);for(let l=0;l<3;l++)nt(a,new kt(.02,.02,.02),lt("#ffffff",{transparent:!0,opacity:.5,roughness:.05}),Math.cos(l*2.1)*.016,.118,Math.sin(l*2.1)*.016).rotation.y=l;s.push(ch(n,"#2b2b2b",.14,.16))}break}case"latte":{let o=nt(n,ko([[0,0],[.034,0],[.04,.15],[.041,.15]]),fh());o.renderOrder=3,a=new tt,a.position.y=.004,n.add(a),nt(a,new ot(.034,.032,.03,18),lt("#fff6e2"),0,.015,0),nt(a,new ot(.036,.034,.05,18),lt("#f1e5d2"),0,.055,0),nt(a,new ot(.037,.036,.05,18),lt("#8a5634",{roughness:.25}),0,.105,0),s.push(ch(n,"#f7b6cf",.14,.16));break}case"puddingParfait":case"kiwiParfait":{let o=lh(n,t.model==="kiwiParfait"?"#f6efe0":"#5a3322",{h:.15,w:.045});a=o.lv;let l=o.top;if(s.push(td(n,l-.006,"#fffaf3",1.25)),t.model==="puddingParfait"){let c=new tt;c.position.set(-.012,l+.02,.012),n.add(c),s.push(c),nt(c,new ot(.022,.028,.032,18),lt("#f7c75a",{roughness:.35}),0,.016,0),nt(c,new ot(.0225,.022,.008,18),lt("#8c4a12",{roughness:.2}),0,.034,0),s.push(Bo(n,-.012,l+.072,.012));for(let u=0;u<3;u++){let f=nt(n,new ot(.013,.013,.006,12),lt("#fff2c4"),.03,l+.01+u*.012,-.02+u*.016);f.rotation.x=Math.PI/2-.4,s.push(f)}let h=nt(n,new Zt(.009,8,6),lt("#ff9cc0"),.028,l+.032,.028);h.scale.z=.4,s.push(h)}else{for(let h=0;h<5;h++)s.push(nt(n,new kt(.018,.016,.018),lt("#ffd23f",{roughness:.35}),Math.cos(h*1.3)*.03,l+.022+h%2*.012,Math.sin(h*1.3)*.03));for(let h=0;h<2;h++){let u=nt(n,new ot(.016,.016,.005,14),lt("#9ccf3a",{roughness:.4}),-.026+h*.05,l+.04,.02-h*.03);u.rotation.x=Math.PI/2-.3,u.rotation.z=h?.4:-.4,s.push(u)}let c=nt(n,new Zt(.02,12,8),lt("#fffefa",{roughness:.8}),0,l+.05,0);c.scale.y=.75,s.push(c),s.push(Bo(n,.004,l+.075,.004))}break}case"pudding":{hh(n);let o=new tt;n.add(o),r.push(o),nt(o,new ot(.028,.038,.045,20),lt("#f7c75a",{roughness:.35}),0,.032,0),nt(o,new ot(.0285,.028,.01,20),lt("#8c4a12",{roughness:.2}),0,.058,0);let l=td(o,.062,"#fffaf3",.55);s.push(l),s.push(Bo(o,0,.09,0));break}case"sando":{hh(n,.095);for(let o of[-1,1]){let l=new tt;l.position.set(.032*o,.01,0),l.rotation.y=.3*o,n.add(l),r.push(l),nt(l,new kt(.05,.065,.026),lt("#fffaf2",{roughness:.9}),0,.033,0),nt(l,new kt(.051,.026,.02),lt("#fff7e6",{roughness:.6}),0,.033,.0035);let c=nt(l,new Ss(.012,.016,12),lt("#ffcf3d",{roughness:.35}),0,.034,.014);c.rotation.x=Math.PI/2}break}case"skewer":{hh(n,.095);let o=new tt;o.position.y=.018,o.rotation.y=.5,n.add(o),r.push(o);let l=nt(o,new ot(.0022,.0022,.2,5),lt("#d9b07a"),0,0,0);l.rotation.z=Math.PI/2;for(let c=0;c<4;c++)nt(o,new kt(.022,.016,.03),lt("#d9561e",{roughness:.25}),-.04+c*.024,0,0);break}case"mochi":{hh(n,.07);let o=new tt;n.add(o),r.push(o),nt(o,new ot(.045,.036,.022,14,1,!0),lt("#8fd16b",{side:Bt}),0,.02,0);let l=nt(o,new Zt(.042,16,12),lt("#fffefb",{roughness:.9}),0,.04,0);l.scale.y=.72;let c=e.flavor==="\uD06C\uB9BC\uACE8\uB4DC\uD0A4\uC704\uD30C\uC778"?"#ffd23f":"#b9e46a";nt(o,new Zt(.01,8,6),lt(c),.02,.066,.012);break}}return n.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)}),n.scale.setScalar(uh),{g:n,top:s,body:r,lv:a,stage:0,pop:0}}function u0({scene3d:i,storeRoot:e,data:t,hero:n,npcs:s,showToast:r,isTouch:a,canOccupy:o,playGame:l}){let c=ue=>document.getElementById(ue),h=c("menu"),u=c("order-btn"),f=c("eat-btn"),d=c("order-chip"),v=s.find(ue=>ue.id==="cafe"),S=[],g=0,x="idle",m=0,M=0,y=[],w=null,T=[],p=null,_=0,I=ue=>[ue.temp,ue.shot?"shot":"",ue.flavor].filter(Boolean).join("\xB7"),A=ue=>rs[ue.key].price+(ue.opt.shot?LS:0),R=()=>S.reduce((ue,j)=>ue+j.qty,0),P=()=>S.reduce((ue,j)=>ue+A(j)*j.qty,0);function N(ue,j=4e3){v&&(clearTimeout(N.t),v.el.textContent=ue,N.t=setTimeout(()=>v.el.textContent="\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615",j))}function b(){if(x==="done")return D();let[,ue]=Jf[g];h.innerHTML=`
      <div class="mhead"><div><b>Soo it Happy MENU</b><span>\uC218\uC787\uD574\uD53C \uCE74\uD398 \xB7 \uC6D0\uD558\uB294 \uBA54\uB274\uB97C \uB2F4\uC544 \uC8FC\uC138\uC694</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="cats">${Jf.map(([j],Me)=>`<button class="${Me===g?"on":""}" data-cat="${Me}">${j}</button>`).join("")}</div>
      ${Jf[g][0]==="\uCEE4\uD53C"?'<p class="note">* \uB354\uCE58 \uC6D0\uC561 \uC0AC\uC6A9 \xB7 \uC544\uBA54\uB9AC\uCE74\uB178\uB294 \uC544\uC774\uC2A4/\uD56B \uC120\uD0DD \xB7 \uC5F0\uC720\uB77C\uB5BC\uB294 \uC544\uC774\uC2A4\uB9CC \xB7 \uC0F7 \uCD94\uAC00 +500\uC6D0</p>':""}
      <div class="items">${ue.map(j=>{let Me=rs[j],xe=Me.opts||{};return`<div class="item" data-key="${j}">
          <span class="emo">${Me.emoji}</span>
          <div class="info"><b>${Me.name}${Me.tag?` <i>${Me.tag}</i>`:""}</b>${Me.desc?`<small>${Me.desc}</small>`:""}
            ${xe.temp?`<div class="seg">${xe.temp.map((Ae,L)=>`<button data-opt="temp" data-v="${Ae}" class="${L?"":"on"}">${Ae}</button>`).join("")}</div>`:""}
            ${xe.flavor?`<div class="seg">${xe.flavor.map((Ae,L)=>`<button data-opt="flavor" data-v="${Ae}" class="${L?"":"on"}">${Ae}</button>`).join("")}</div>`:""}
            ${xe.shot?'<label class="shot"><input type="checkbox" data-opt="shot"> \uC0F7 \uCD94\uAC00 +500\uC6D0</label>':""}
          </div>
          <div class="buy"><span class="price">${Qf(Me.price)}</span><button class="add" data-act="add">\uB2F4\uAE30</button></div>
        </div>`}).join("")}</div>
      <div class="cart">
        ${S.length?`<div class="lines">${S.map((j,Me)=>`<div class="line"><span>${rs[j.key].emoji} ${rs[j.key].name}${I(j.opt)?` <small>(${I(j.opt)})</small>`:""}</span>
          <span class="step"><button data-act="dec" data-i="${Me}" aria-label="\uBE7C\uAE30">\u2212</button><b>${j.qty}</b><button data-act="inc" data-i="${Me}" aria-label="\uB354\uD558\uAE30">+</button></span></div>`).join("")}</div>`:'<p class="empty">\uC544\uC9C1 \uB2F4\uC740 \uBA54\uB274\uAC00 \uC5C6\uC5B4\uC694</p>'}
        <button class="go" data-act="order" ${S.length?"":"disabled"}>${S.length?`\u{1F9FE} ${R()}\uAC1C \xB7 ${Qf(P())} \uC8FC\uBB38\uD558\uAE30`:"\uBA54\uB274\uB97C \uB2F4\uC544 \uC8FC\uC138\uC694"}</button>
        <p class="fine">\uAC00\uC0C1 \uC8FC\uBB38\uC774\uC5D0\uC694 \xB7 \uC2E4\uC81C \uACB0\uC81C\uB294 \uB418\uC9C0 \uC54A\uC544\uC694</p>
      </div>`}function D(){h.innerHTML=`
      <div class="mhead"><div><b>\uC8FC\uBB38 \uC644\uB8CC! \u{1F9FE}</b><span>\uC8FC\uBB38\uBC88\uD638 ${m} \xB7 ${Qf(w.total)}</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="done">
        <div class="list">${w.lines.map(ue=>`<div>${rs[ue.key].emoji} ${rs[ue.key].name}${I(ue.opt)?` (${I(ue.opt)})`:""} \xD7 ${ue.qty}</div>`).join("")}</div>
        <p>\uC5B4\uB5BB\uAC8C \uBC1B\uC744\uAE4C\uC694?</p>
        <button class="go" data-act="eat">\u{1F37D}\uFE0F \uADF8\uB0E5 \uBA39\uC744\uB798\uC694</button>
        <button class="go game" data-act="game">\u{1F50D} \uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30 \uD558\uACE0 \uBA39\uAE30</button>
      </div>`}function O(){x==="done"&&(x="idle"),b(),h.hidden=!1,h.offsetWidth,h.classList.add("on")}function U(){h.classList.remove("on"),setTimeout(()=>{h.classList.contains("on")||(h.hidden=!0)},250)}h.addEventListener("click",ue=>{let j=ue.target.closest("button");if(!j)return;if(j.dataset.cat){g=+j.dataset.cat,b(),h.querySelector(".items").scrollTop=0;return}if(j.dataset.opt){j.parentElement.querySelectorAll("button").forEach(xe=>xe.classList.toggle("on",xe===j));return}let Me=j.dataset.act;if(Me==="close")U();else if(Me==="add"){let xe=j.closest(".item"),Ae=xe.dataset.key,L={};xe.querySelectorAll(".seg .on").forEach(ae=>L[ae.dataset.opt]=ae.dataset.v);let E=xe.querySelector("[data-opt=shot]");if(E&&E.checked&&(L.shot=!0),R()>=oh){r(`\uD55C \uBC88\uC5D0 ${oh}\uAC1C\uAE4C\uC9C0 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694`);return}let K=S.find(ae=>ae.key===Ae&&I(ae.opt)===I(L));K?K.qty++:S.push({key:Ae,opt:L,qty:1}),b(),r(`${rs[Ae].emoji} ${rs[Ae].name} \uB2F4\uC558\uC5B4\uC694`);let ge=h.querySelector(".lines");ge&&(ge.scrollTop=ge.scrollHeight)}else if(Me==="inc"||Me==="dec"){let xe=S[+j.dataset.i];if(Me==="inc"){if(R()>=oh){r(`\uD55C \uBC88\uC5D0 ${oh}\uAC1C\uAE4C\uC9C0 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694`);return}xe.qty++}else--xe.qty<=0&&S.splice(+j.dataset.i,1);b()}else if(Me==="order"){if(x!=="idle"&&x!=="done"||y.length){r("\uBA3C\uC800 \uC8FC\uBB38\uD55C \uBA54\uB274\uB97C \uBC1B\uC740 \uB4A4\uC5D0 \uB610 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694");return}m=10+Math.floor(Math.random()*89),w={lines:S.map(xe=>({...xe,opt:{...xe.opt}})),total:P()},S.length=0,x="done",b()}else Me==="eat"?(U(),x="making",M=performance.now()+4500,N(`\uC8FC\uBB38\uBC88\uD638 ${m}\uBC88, \uC8FC\uBB38 \uBC1B\uC558\uC5B4\uC694! \uC790\uB9AC\uC5D0 \uC549\uC544 \uACC4\uC2DC\uBA74 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F353}`,6e3),r("\u{1FA91} \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694 \xB7 \uC9C1\uC6D0\uC774 \uAC00\uC838\uB2E4 \uB4DC\uB824\uC694")):Me==="game"&&G(w)});function G(){if(U(),!l)return r("\u{1F3AE} \uAC8C\uC784\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694");x="gaming",l(ue=>{x="making",M=performance.now()+(ue?800:1500),N(ue?"\uAC8C\uC784 \uC131\uACF5! \uBC14\uB85C \uB9CC\uB4E4\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F389}":"\uAD1C\uCC2E\uC544\uC694! \uADF8\uB798\uB3C4 \uB9DB\uC788\uAC8C \uB9CC\uB4E4\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F60A}",5e3),r(ue?"\u{1F389} \uC131\uACF5! \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694":"\uBA54\uB274\uB294 \uADF8\uB300\uB85C \uC900\uBE44\uD574 \uB4DC\uB824\uC694 \xB7 \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694")})}u.addEventListener("click",ue=>{O(),ue.currentTarget.blur()}),addEventListener("keydown",ue=>{ue.code==="Escape"&&!h.hidden&&U()});let H=new ws,F=new z(0,-1,0),k=new z;function W(ue,j){H.set(k.set(ue,1.4,j),F),H.far=1.4;for(let Me of H.intersectObject(e,!0))if(Me.point.y>.4&&Me.point.y<1.05)return Me.point.y;return null}function J(ue,j){let Me=Math.sin(ue[2]),xe=Math.cos(ue[2]),Ae=xe,L=-Me,E=.42,K=null;for(let Se of[.3,.36,.42,.5,.58]){let Te=W(ue[0]+Me*Se,ue[1]+xe*Se);if(Te!==null){E=Se+.04,K=Te;break}}K===null&&(K=.74);let ge=j.length,ae=Math.min(3,ge);j.forEach((Se,Te)=>{let ce=Math.floor(Te/3),de=ce?ge-3:ae,V=(Te%3-(de-1)/2)*.13,me=E+ce*.12,ee=zo(Se.key,Se.opt);ee.g.position.set(ue[0]+Me*me+Ae*V,K+.002,ue[1]+xe*me+L*V),ee.g.rotation.y=ue[2]+Math.PI+(Math.random()-.5)*.4,ee.g.scale.setScalar(.001),ee.pop=.001,i.add(ee.g),T.push({food:ee,seat:ue})})}let B=v&&{x:v.x,z:v.z,face:v.face,y:v.c.root.position.y};v&&(v.y=B.y,v.speed=0);let Z=.2,X=.15,se=1.25,he=t.floor.map(ue=>ue[0]),q=t.floor.map(ue=>ue[1]),re=Math.min(...he),fe=Math.min(...q),ne=Math.ceil((Math.max(...he)-re)/X)+1,Re=Math.ceil((Math.max(...q)-fe)/X)+1,ie=new Map,_e=ue=>re+ue*X,le=ue=>fe+ue*X;function ve(ue,j){if(ue<0||j<0||ue>=ne||j>=Re)return!1;let Me=j*ne+ue,xe=ie.get(Me);return xe===void 0&&(xe=o(_e(ue),le(j),Z),ie.set(Me,xe)),xe}function pe(ue,j,Me=8){let xe=Math.round((ue-re)/X),Ae=Math.round((j-fe)/X);for(let L=0;L<=Me;L++){let E=null,K=1e9;for(let ge=-L;ge<=L;ge++)for(let ae=-L;ae<=L;ae++){if(Math.max(Math.abs(ge),Math.abs(ae))!==L||!ve(xe+ge,Ae+ae))continue;let Se=Math.hypot(_e(xe+ge)-ue,le(Ae+ae)-j);Se<K&&(K=Se,E=[xe+ge,Ae+ae])}if(E)return E}return null}function Fe(ue,j,Me,xe){let Ae=Math.ceil(Math.hypot(Me-ue,xe-j)/.06);for(let L=1;L<Ae;L++)if(!o(ue+(Me-ue)*L/Ae,j+(xe-j)*L/Ae,Z))return!1;return!0}function ze(ue,j,Me,xe){let Ae=pe(ue,j),L=pe(Me,xe);if(!Ae||!L)return null;let E=(ee,Ce)=>Ce*ne+ee,K=E(L[0],L[1]),ge=[[0,Ae[0],Ae[1]]],ae=new Map([[E(Ae[0],Ae[1]),0]]),Se=new Map,Te=new Set,ce=!1,de=0;for(;ge.length&&de++<4e4;){let ee=0;for(let He=1;He<ge.length;He++)ge[He][0]<ge[ee][0]&&(ee=He);let[,Ce,we]=ge.splice(ee,1)[0],Pe=E(Ce,we);if(!Te.has(Pe)){if(Te.add(Pe),Pe===K){ce=!0;break}for(let[He,rt]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let Ee=Ce+He,qe=we+rt;if(!ve(Ee,qe)||He&&rt&&(!ve(Ce+He,we)||!ve(Ce,we+rt)))continue;let it=E(Ee,qe),Ue=ae.get(Pe)+Math.hypot(He,rt);Ue<(ae.has(it)?ae.get(it):1e9)&&(ae.set(it,Ue),Se.set(it,Pe),ge.push([Ue+Math.hypot(Ee-L[0],qe-L[1]),Ee,qe]))}}}if(!ce)return null;let be=[];for(let ee=K;ee!==void 0;ee=Se.get(ee))be.push([_e(ee%ne),le(Math.floor(ee/ne))]);be.reverse(),be.push([Me,xe]);let V=[be[0]],me=0;for(;me<be.length-1;){let ee=be.length-1;for(;ee>me+1&&!Fe(be[me][0],be[me][1],be[ee][0],be[ee][1]);)ee--;V.push(be[ee]),me=ee}return V}let Oe=null,$e=lt("#ffc2da",{roughness:.5});function Qe(ue){let j=y;if(y=[],!v){J(ue,j),x="idle";return}let Me=Math.sin(ue[2]),xe=Math.cos(ue[2]),Ae=[ue[0]+Me*.5,ue[1]+xe*.5],L=null;for(let[K,ge]of[[xe,-Me],[-xe,Me],[Me,xe]])for(let ae of[.55,.7,.85]){let Se=Ae[0]+K*ae,Te=Ae[1]+ge*ae;if(!o(Se,Te,Z))continue;let ce=ze(B.x,B.z,Se,Te);if(ce){(!L||ce.length<L.length)&&(L=ce);break}}if(x="delivering",!L){J(ue,j),x="idle",r("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}");return}let E=new tt;E.position.set(0,.5,.24),nt(E,new kt(.36,.016,.26),$e),j.slice(0,6).forEach((K,ge)=>{let ae=zo(K.key,K.opt);ae.g.scale.setScalar(uh*.62),ae.g.position.set((ge%3-1)*.1,.008,j.length>3?(Math.floor(ge/3)-.5)*.09:0),E.add(ae.g)}),v.c.root.add(E),Oe={stage:"go",path:[[B.x,B.z],...L],i:1,seat:ue,wait:0,tray:E,items:j,look:Ae},v.carry=!0,N("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694! \u{1F370}",2e4)}function $(ue){let j=v,Me=Oe;if(Me.stage==="go"||Me.stage==="back"){let[xe,Ae]=Me.path[Me.i],L=xe-j.x,E=Ae-j.z,K=Math.hypot(L,E),ge=Math.min(K,se*ue);if(K>1e-4){j.x+=L/K*ge,j.z+=E/K*ge;let Se=Math.atan2(L,E)-j.face;Se=Math.atan2(Math.sin(Se),Math.cos(Se)),j.face+=Se*Math.min(1,ue*10)}j.speed=se;let ae=Math.hypot(j.x-B.x,j.z-B.z);j.y=B.y*Ai.clamp(1-(ae-.15)/.35,0,1),K<.02&&++Me.i>=Me.path.length&&(j.speed=0,Me.stage==="go"?(Me.stage="serve",Me.wait=.7):(j.x=B.x,j.z=B.z,j.face=B.face,j.y=B.y,Oe=null))}else if(Me.stage==="serve"){let xe=Math.atan2(Me.look[0]-j.x,Me.look[1]-j.z)-j.face;if(xe=Math.atan2(Math.sin(xe),Math.cos(xe)),j.face+=xe*Math.min(1,ue*8),Me.wait-=ue,Me.wait<=0&&Me.tray)j.c.root.remove(Me.tray),Me.tray=null,j.carry=!1,J(Me.seat,Me.items),x="idle",N("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274 \uB098\uC654\uC2B5\uB2C8\uB2E4! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}",4e3),r("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}"),Me.wait=1.2;else if(Me.wait<=0){let Ae=ze(j.x,j.z,B.x,B.z);Me.stage="back",Me.path=Ae?[[j.x,j.z],...Ae.slice(0,-1),[B.x,B.z]]:[[j.x,j.z],[B.x,B.z]],Me.i=1,x="idle"}}}let mt=()=>T.filter(ue=>ue.seat===p);function Ze(){let ue=mt();if(!ue.length)return;let j=ue[0].food;j.stage++,_=.7;let Me=j.stage;for(let xe of j.top)Me>=2?xe.visible=!1:xe.scale.multiplyScalar(.65);j.lv&&(j.lv.scale.y=Math.max(.02,1-Me/3));for(let xe of j.body)xe.scale.setScalar(Math.max(.05,1-Me*.3));Me>=3&&(j.dying=1,setTimeout(()=>{i.remove(j.g),T.splice(T.findIndex(xe=>xe.food===j),1),T.some(xe=>xe.seat===p)||r("\uB2E4 \uBA39\uC5C8\uC5B4\uC694! \uB9DB\uC788\uC5C8\uB2E4 \u{1F60B} \uB610 \uC8FC\uBB38\uD574 \uBCF4\uC138\uC694")},450))}return f.addEventListener("click",ue=>{Ze(),ue.currentTarget.blur()}),{get open(){return!h.hidden},onSit(ue){p=ue,x==="ready"&&y.length&&!Oe&&Qe(ue)},get npcBusy(){return!!Oe},onStand(){p=null},update(ue,j,Me){Me!==p&&(p=Me),x==="making"&&performance.now()>=M&&(y=w.lines.flatMap(E=>Array.from({length:E.qty},()=>({key:E.key,opt:E.opt}))),x="ready",p&&!Oe?Qe(p):(N(`\uC8FC\uBB38\uBC88\uD638 ${m}\uBC88 \uBA54\uB274 \uB098\uC654\uC5B4\uC694! \uC790\uB9AC\uC5D0 \uC549\uC73C\uC2DC\uBA74 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F370}`,7e3),r("\u{1F514} \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uCE74\uD398 \uC758\uC790\uB97C \uB20C\uB7EC \uC549\uC73C\uBA74 \uC9C1\uC6D0\uC774 \uAC00\uC838\uB2E4 \uB4DC\uB824\uC694"))),Oe&&$(ue);let xe=v&&!Me&&!Oe&&Math.hypot(j.x-B.x,j.z-B.z)<2.6;u.hidden=!xe||!h.hidden;let Ae=!!Me&&mt().length>0;f.hidden=!Ae;let L=x==="making"?"\u{1F9D1}\u200D\u{1F373} \uBA54\uB274 \uB9CC\uB4DC\uB294 \uC911\u2026 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694":x==="ready"?`\u{1F514} \uBA54\uB274 ${y.length}\uAC1C \uC900\uBE44\uB410\uC5B4\uC694 \xB7 \uCE74\uD398 \uC758\uC790\uC5D0 \uC549\uC544 \uBCF4\uC138\uC694`:x==="delivering"?"\u{1F370} \uC9C1\uC6D0\uC774 \uBA54\uB274\uB97C \uAC00\uC838\uB2E4 \uB4DC\uB9AC\uB294 \uC911\u2026":"";d.textContent!==L&&(d.textContent=L),d.hidden=!L||!h.hidden;for(let{food:E}of T){if(E.pop<1){E.pop=Math.min(1,E.pop+ue*3);let K=1-Math.pow(1-E.pop,3);E.g.scale.setScalar(uh*(.2+.8*K+Math.sin(E.pop*Math.PI)*.12))}E.dying&&(E.dying=Math.max(0,E.dying-ue*2.5),E.g.scale.setScalar(uh*E.dying))}if(_>0&&n.arms){_=Math.max(0,_-ue);let E=Math.sin((1-_/.7)*Math.PI);n.arms[0].rotation.x=-.5-1.7*E,n.head.rotation.x=.12*E}}}}var or='stroke="#4a3f66" stroke-linejoin="round" stroke-linecap="round"',_t=or+' stroke-width="2.6"',f0=(i,e,t,n=2.6)=>`<circle cx="${i}" cy="${t}" r="${n}" fill="#3b2f4a"/><circle cx="${e}" cy="${t}" r="${n}" fill="#3b2f4a"/><circle cx="${i+.9}" cy="${t-.9}" r="0.9" fill="#fff"/><circle cx="${e+.9}" cy="${t-.9}" r="0.9" fill="#fff"/>`,rd=(i,e,t)=>`<ellipse cx="${i}" cy="${t}" rx="4" ry="2.4" fill="#ff9fbf" opacity=".8"/><ellipse cx="${e}" cy="${t}" rx="4" ry="2.4" fill="#ff9fbf" opacity=".8"/>`,dh=(i,e)=>`<path d="M${i} ${e} q3 -10 9 -12" fill="none" ${or} stroke-width="1.8"/><circle cx="${i}" cy="${e+2}" r="5.5" fill="#e8243c" ${_t}/><circle cx="${i-1.8}" cy="${e}" r="1.5" fill="#fff" opacity=".8"/>`,nd=(i,e,t)=>`
  <path d="M43 76 h14 l2 12 h-18z" fill="#eef8fc" ${_t}/><ellipse cx="50" cy="89" rx="15" ry="4" fill="#eef8fc" ${_t}/>
  <path d="M27 36 h46 l-7 36 q-16 8 -32 0z" fill="${i}" ${_t}/>
  <path d="M33 42 l-3 22" stroke="#fff" stroke-width="3" opacity=".55" stroke-linecap="round"/>
  ${e?`<circle cx="50" cy="30" r="14" fill="${e}" ${_t}/><path d="M38 34 q12 6 24 0" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/>`:""}
  ${t?`<path d="M30 37 q-3 -10 8 -12 q2 -10 12 -9 q10 -1 12 9 q11 2 8 12z" fill="${t}" ${_t}/><path d="M36 31 q14 -6 28 0" fill="none" stroke="#6b3b25" stroke-width="2.4" stroke-linecap="round"/>`:""}`,Ho=(i,e,t=1,n="")=>`<g transform="translate(${i} ${e}) scale(${t})">
  <ellipse cx="-17" cy="2" rx="8" ry="13" fill="#fff" ${_t} transform="rotate(18 -17 2)"/><ellipse cx="17" cy="2" rx="8" ry="13" fill="#fff" ${_t} transform="rotate(-18 17 2)"/>
  <path d="M-16 -6 q-4 -14 8 -16 q8 -8 16 0 q12 2 8 16 q6 10 -2 20 q-14 10 -28 0 q-8 -10 -2 -20z" fill="#fff" ${_t}/>
  ${f0(-6,6,0,2.8)}<ellipse cx="0" cy="7" rx="3" ry="2.2" fill="#3b2f4a"/><path d="M-3 10 q3 3 6 0" fill="none" ${or} stroke-width="1.6"/>
  ${rd(-11,11,8)}${n}</g>`,id=({hair:i,hairDark:e,bun:t,glasses:n,clip:s,collar:r})=>`
  ${t?`<circle cx="50" cy="20" r="11" fill="${i}" ${_t}/>`:""}
  <path d="M22 54 q-4 -34 28 -36 q32 2 28 36 q-2 10 -8 12 l-40 0 q-6 -2 -8 -12z" fill="${i}" ${_t}/>
  <ellipse cx="50" cy="54" rx="22" ry="21" fill="#ffe6d6" ${_t}/>
  <path d="M28 46 q8 -14 22 -12 q-2 8 -10 10 q10 -2 14 -10 q8 10 18 12 q-4 -18 -22 -18 q-18 0 -22 18z" fill="${i}"/>
  <path d="M27 58 q-3 10 1 20 M73 58 q3 10 -1 20" fill="none" stroke="${e}" stroke-width="7" stroke-linecap="round"/>
  ${f0(41,59,55,3)}${rd(35,65,63)}<path d="M46 65 q4 4 8 0" fill="none" ${or} stroke-width="1.8"/>
  ${n?'<circle cx="41" cy="55" r="7" fill="none" stroke="#4a3326" stroke-width="2.4"/><circle cx="59" cy="55" r="7" fill="none" stroke="#4a3326" stroke-width="2.4"/><path d="M48 54 h4" stroke="#4a3326" stroke-width="2.4"/>':""}
  ${s?`<circle cx="32" cy="36" r="5" fill="#e8243c" ${or} stroke-width="1.8"/><path d="M30 31 l2 -3 l2 3" fill="#6cc05a"/>`:""}
  ${r?`<path d="M34 78 q16 8 32 0 l6 10 q-22 10 -44 0z" fill="${r}" ${_t}/>`:""}`,lr={menu:{name:"\uC218\uC787\uD574\uD53C \uBA54\uB274 \uC2A4\uD2F0\uCEE4",color:"#d6efbf",stickers:[nd("#2f93ee","#fff0c8")+dh(57,14),nd("#6fd34a","#d6f2c4")+dh(57,14),`<ellipse cx="50" cy="80" rx="34" ry="9" fill="#fff" ${_t}/><path d="M32 78 l6 -34 h24 l6 34z" fill="#f7c75a" ${_t}/><path d="M38 44 h24 l-1 7 q-11 4 -22 0z" fill="#8c4a12" ${_t}/>
       <path d="M40 44 q-3 -9 6 -10 q4 -8 8 0 q9 1 6 10z" fill="#fffaf3" ${_t}/>${dh(50,24)}<path d="M37 70 q13 4 26 0" stroke="#fff" stroke-width="2.4" opacity=".5" fill="none"/>`,`<path d="M18 86 L84 20" stroke="#d9b07a" stroke-width="4" stroke-linecap="round"/>
       ${[0,1,2,3].map(i=>`<rect x="${24+i*13}" y="${56-i*13}" width="15" height="12" rx="4" fill="#e0622a" ${_t} transform="rotate(-45 ${31+i*13} ${62-i*13})"/>`).join("")}
       <path d="M30 60 l40 -40" stroke="#fff" stroke-width="2" opacity=".45" stroke-linecap="round"/>`,`<path d="M22 64 h56 l-6 18 h-44z" fill="#8fd16b" ${_t}/><path d="M28 64 l4 18 M40 64 l1 18 M52 64 l-1 18 M64 64 l-3 18" stroke="#6aa94a" stroke-width="1.6"/>`+Ho(50,44,1.05),nd("#7b4a33",null,"#fffaf3")+dh(54,10)]},staff:{name:"\uC18C\uD488\uC0F5 \uC9C1\uC6D0 \uC2A4\uD2F0\uCEE4",color:"#ffe1ee",stickers:[id({hair:"#7a5640",hairDark:"#64432f",bun:!0,collar:"#c4e76a"}),id({hair:"#3d3346",hairDark:"#2c2433",glasses:!0,collar:"#fff0a3"}),id({hair:"#f7a9c8",hairDark:"#ec8db5",clip:!0,collar:"#aee3cf"}),`<path d="M10 24 q0 -12 14 -12 h52 q14 0 14 12 v30 q0 12 -14 12 h-36 l-14 14 l2 -14 q-18 0 -18 -12z" fill="#fff" ${_t}/>
       <text x="50" y="47" text-anchor="middle" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-weight="900" font-size="12.5" fill="#e0457b">\uC5B4\uC11C\uC624\uC138\uC694!</text>`,`<path d="M50 86 C10 58 12 22 34 20 C44 19 50 28 50 32 C50 28 56 19 66 20 C88 22 90 58 50 86z" fill="#f6a9c9" ${_t}/>
       <text x="50" y="54" text-anchor="middle" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-weight="900" font-size="13" fill="#c2477e">\uC218\uC787\uD574\uD53C</text>`,`<path d="M50 50 l-30 -18 q-8 -2 -8 8 v20 q0 10 8 8z M50 50 l30 -18 q8 -2 8 8 v20 q0 10 -8 8z" fill="#ff9cc0" ${_t}/>
       <path d="M44 52 l-10 30 l8 -4 l4 8 l6 -32z M56 52 l10 30 l-8 -4 l-4 8 l-6 -32z" fill="#ff86b2" ${_t}/><circle cx="50" cy="50" r="8" fill="#ffb8d2" ${_t}/>`]},dog:{name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC2A4\uD2F0\uCEE4",color:"#e3f3ff",stickers:[Ho(50,52,1.5,'<path d="M-3 12 q3 5 6 0z" fill="#ff8fb0" stroke="#4a3f66" stroke-width="1.4"/>'),`<ellipse cx="52" cy="72" rx="24" ry="16" fill="#fff" ${_t}/><ellipse cx="38" cy="84" rx="7" ry="5" fill="#fff" ${_t}/><ellipse cx="62" cy="84" rx="7" ry="5" fill="#fff" ${_t}/>
       <path d="M74 66 q12 -6 8 -16" fill="none" ${or} stroke-width="5"/><path d="M74 66 q12 -6 8 -16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`+Ho(48,40,1.05),`<ellipse cx="50" cy="66" rx="34" ry="18" fill="#fff" ${_t}/><path d="M24 62 q-4 -16 12 -18 q10 -10 20 0" fill="#fff" ${_t}/>
       <path d="M30 60 q4 3 8 0 M44 60 q4 3 8 0" fill="none" ${or} stroke-width="2"/><ellipse cx="41" cy="67" rx="2.6" ry="2" fill="#3b2f4a"/>${rd(28,54,68)}
       <text x="66" y="38" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="15" fill="#9a8cc4">z</text><text x="76" y="26" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="11" fill="#9a8cc4">z</text>`,Ho(50,54,1.4)+`<path d="M50 24 l-14 -8 q-4 0 -4 4 v8 q0 4 4 4z M50 24 l14 -8 q4 0 4 4 v8 q0 4 -4 4z" fill="#ff8fb7" ${_t}/><circle cx="50" cy="24" r="4.5" fill="#ffb3cf" ${_t}/>`,`<ellipse cx="50" cy="62" rx="18" ry="15" fill="#f7a9c8" ${_t}/>${[[28,40],[42,30],[58,30],[72,40]].map(([i,e])=>`<ellipse cx="${i}" cy="${e}" rx="7" ry="8.5" fill="#f7a9c8" ${_t}/>`).join("")}`,`<path d="M14 20 q0 -10 12 -10 h48 q12 0 12 10 v26 q0 10 -12 10 h-30 l-14 12 l2 -12 h-6 q-12 0 -12 -10z" fill="#fffbe0" ${_t}/>
       <text x="50" y="42" text-anchor="middle" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="18" fill="#4a3f66">\uBA4D!</text>`+Ho(70,76,.8)]}},sd=new Map;function gi(i,e){let t=i+e;if(!sd.has(t)){let n=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 112 112" width="224" height="224">
      <defs><filter id="b" x="-20%" y="-20%" width="140%" height="140%"><feMorphology in="SourceAlpha" operator="dilate" radius="4.5" result="d"/>
      <feFlood flood-color="#ffffff"/><feComposite in2="d" operator="in" result="w"/>
      <feGaussianBlur in="d" stdDeviation="1.6" result="s"/><feOffset in="s" dy="1.4" result="so"/><feFlood flood-color="#6a53a0" flood-opacity=".28"/><feComposite in2="so" operator="in" result="sh"/>
      <feMerge><feMergeNode in="sh"/><feMergeNode in="w"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g filter="url(#b)">${lr[i].stickers[e]}</g></svg>`;sd.set(t,"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n))}return sd.get(t)}var an={stkMenu:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uC218\uC787\uD574\uD53C \uBA54\uB274 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"menu",desc:"\uD06C\uB9BC\uC18C\uB2E4\xB7\uBA54\uB860\uC18C\uB2E4\xB7\uD478\uB529\xB7\uB5A1\uAF2C\uCE58\u2026",color:"#d6efbf"},stkStaff:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uC18C\uD488\uC0F5 \uC9C1\uC6D0 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"staff",desc:"\uCE74\uD398 \uC5B8\uB2C8\xB7\uC18C\uD488\uC0F5 \uC5B8\uB2C8\xB7\uC190\uB2D8",color:"#ffd3e4"},stkDog:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"dog",desc:"\uBABD\uAE00\uBABD\uAE00 \uD558\uC580 \uAC15\uC544\uC9C0",color:"#dcefff"},diary:{cat:"\uBB38\uAD6C",name:"\uB2E4\uC774\uC5B4\uB9AC \uC218\uCCA9",price:5e3,emoji:"\u{1F4D2}",desc:"\uCE74\uD398 \uC790\uB9AC\uC5D0\uC11C \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694",color:"#f7c9dc"},penBear:{cat:"\uBB38\uAD6C",name:"\uACF0\uB3CC\uC774 \uBCFC\uD39C",price:2500,emoji:"\u{1F43B}",desc:"\uCD08\uCF54 \uBE0C\uB77C\uC6B4 \uC789\uD06C",ink:"#7a4a33",color:"#c99c6e"},penBerry:{cat:"\uBB38\uAD6C",name:"\uB538\uAE30 \uBCFC\uD39C",price:2500,emoji:"\u{1F353}",desc:"\uB538\uAE30 \uD551\uD06C \uC789\uD06C",ink:"#e0457b",color:"#f48fb9"},penMint:{cat:"\uBB38\uAD6C",name:"\uBBFC\uD2B8 \uC824\uD39C",price:2500,emoji:"\u{1F33F}",desc:"\uBBFC\uD2B8 \uC789\uD06C",ink:"#2f9d8f",color:"#9fe0cf"},tapeHeart:{cat:"\uBB38\uAD6C",name:"\uD558\uD2B8 \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504",price:2e3,emoji:"\u{1F497}",desc:"\uB2E4\uAFB8\uC5D0 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694",tape:"heart",color:"#ffc2da"},tapeCheck:{cat:"\uBB38\uAD6C",name:"\uAE45\uC5C4 \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504",price:2e3,emoji:"\u{1F49A}",desc:"\uB2E4\uAFB8\uC5D0 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694",tape:"check",color:"#bfe6a8"},memo:{cat:"\uBB38\uAD6C",name:"\uB9D0\uB791 \uBA54\uBAA8\uC9C0",price:2e3,emoji:"\u{1F5D2}\uFE0F",color:"#fff3b0"},letter:{cat:"\uBB38\uAD6C",name:"\uD3B8\uC9C0\uC9C0 \uC138\uD2B8",price:3500,emoji:"\u{1F48C}",color:"#ffe1ee"},postcard:{cat:"\uBB38\uAD6C",name:"\uC218\uC787\uD574\uD53C \uC5FD\uC11C",price:1500,emoji:"\u{1F5BC}\uFE0F",color:"#cdbcf0"},plushDog:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC778\uD615",price:15e3,emoji:"\u{1F436}",color:"#ffffff"},keyBear:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uACF0\uB3CC\uC774 \uC778\uD615 \uD0A4\uB9C1",price:6e3,emoji:"\u{1F9F8}",color:"#e6bf93"},keyBunny:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uD1A0\uB07C \uC778\uD615 \uD0A4\uB9C1",price:6e3,emoji:"\u{1F430}",color:"#f8b9d3"},hairpin:{cat:"\uC7A1\uD654",name:"\uB538\uAE30 \uBA38\uB9AC\uD540",price:3e3,emoji:"\u{1F380}",color:"#ff8fb0"}},d0=["\uC2A4\uD2F0\uCEE4","\uBB38\uAD6C","\uC778\uD615\xB7\uD0A4\uB9C1","\uC7A1\uD654"],ph=i=>i.toLocaleString("ko-KR")+"\uC6D0",ad=i=>{let e=an[i];return e.sheet?`<img src="${gi(e.sheet,0)}" alt="">`:e.emoji},Bn={items:{},stickers:{}};try{Object.assign(Bn,JSON.parse(localStorage.getItem("sh-inv"))||{})}catch{}function mh(){try{localStorage.setItem("sh-inv",JSON.stringify(Bn))}catch{}}var gh=i=>(Bn.items[i]||0)>0;function DS(){let i=document.createElement("canvas");i.width=512,i.height=128;let e=i.getContext("2d");e.fillStyle="#f4a7bf",e.fillRect(0,0,512,128),e.globalCompositeOperation="destination-out";let t=(s,r,a)=>{e.beginPath(),e.moveTo(s,r+a*.9),e.bezierCurveTo(s-a*1.3,r,s-a*.7,r-a*.9,s,r-a*.3),e.bezierCurveTo(s+a*.7,r-a*.9,s+a*1.3,r,s,r+a*.9),e.fill()};for(let s=0;s<2;s++)for(let r=0;r<16;r++)t(16+r*32+(s?16:0),44+s*42,11);let n=new ti(i);return n.colorSpace=Rt,n.wrapS=Sn,n.anisotropy=4,n}function NS(){let i=new tt,e=new qt({color:"#f4a7bf",roughness:.55}),t=new qt({map:DS(),alphaTest:.5,side:Bt,roughness:.55}),n=new tt;n.scale.set(1.3,1,.85),i.add(n);let s=.1,r=new Je(new ot(.11,.08,s,28,1,!0),t);r.position.y=s/2,n.add(r);let a=new Je(new Ya(.08,24),e);a.rotation.x=-Math.PI/2,a.position.y=.002,n.add(a);let o=new Je(new ji(.11,.008,6,32),e);o.rotation.x=Math.PI/2,o.position.y=s,n.add(o);for(let c of[-1,1]){let h=new Je(new ji(.075,.009,6,18,Math.PI),e);h.position.set(0,s,.07*c),h.rotation.x=.25*c,i.add(h)}let l=new tt;return l.position.y=.01,i.add(l),i.traverse(c=>{c.isMesh&&(c.castShadow=!1)}),{g:i,goods:l}}function p0({scene3d:i,hero:e,npcs:t,showToast:n,inShop:s}){let r=R=>document.getElementById(R),a=r("shop"),o=r("shop-btn"),l=r("basket-btn"),c=r("stop-btn"),h=t.find(R=>R.id==="shop"),u=NS();u.g.position.set(.21,.29,.24),u.g.rotation.y=Math.PI/2;let f=!1,d="browse",v=0,S=0,g={},x=()=>Object.values(g).reduce((R,P)=>R+P,0),m=()=>Object.entries(g).reduce((R,[P,N])=>R+an[P].price*N,0),M=()=>h&&Math.hypot(e.root.position.x-h.x,e.root.position.z-h.z)<2.8;function y(){u.goods.clear();let R=0;for(let[P,N]of Object.entries(g))for(let b=0;b<N&&R<10;b++,R++){let D=an[P],O=new Je(D.sheet?new kt(.06,.004,.08):new kt(.045,.035,.04),new qt({color:D.color,roughness:.6}));O.position.set((R%3-1)*.06,.02+Math.floor(R/3)*.025,(R%2-.5)*.04),O.rotation.set(.2*(R%2-.5),R*.7,.15*(R%3-1)),u.goods.add(O)}}function w(){f=!0,e.root.add(u.g),y(),n("\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8\uB97C \uB4E4\uC5C8\uC5B4\uC694! \uC0C1\uD488\uC744 \uB2F4\uC544 \uBCF4\uC138\uC694"),_("browse")}function T(){f=!1,e.root.remove(u.g);for(let R of Object.keys(g))delete g[R];I(),n("\uC1FC\uD551\uC744 \uADF8\uB9CC\uB480\uC5B4\uC694. \uBC14\uAD6C\uB2C8\uB294 \uC81C\uC790\uB9AC\uC5D0 \uB450\uC5C8\uC5B4\uC694")}function p(){let R=x(),P=`<div class="cats">${[["browse","\u{1F6CD}\uFE0F \uC0C1\uD488"],["cart",`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 ${R}`],["mine","\u{1F392} \uB0B4 \uBB3C\uAC74"]].map(([b,D])=>`<button class="${d===b?"on":""}" data-tab="${b}">${D}</button>`).join("")}</div>`,N="";if(d==="browse")N=`<div class="cats sub">${d0.map((b,D)=>`<button class="${D===v?"on":""}" data-cat="${D}">${b}</button>`).join("")}</div>
      <div class="items">${Object.entries(an).filter(([,b])=>b.cat===d0[v]).map(([b,D])=>`
        <div class="item"><span class="emo">${ad(b)}</span>
          <div class="info"><b>${D.name}</b>${D.desc?`<small>${D.desc}</small>`:""}
            ${D.sheet?`<div class="mini">${lr[D.sheet].stickers.map((O,U)=>`<img src="${gi(D.sheet,U)}" alt="">`).join("")}</div>`:""}</div>
          <div class="buy"><span class="price">${ph(D.price)}</span><button class="add" data-add="${b}">${g[b]?`\uB2F4\uC74C ${g[b]}`:"\uB2F4\uAE30"}</button></div>
        </div>`).join("")}</div>
      <div class="cart"><button class="go" data-tab="cart" ${R?"":"disabled"}>${R?`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 \uBCF4\uAE30 \xB7 ${R}\uAC1C \xB7 ${ph(m())}`:"\uB9C8\uC74C\uC5D0 \uB4DC\uB294 \uC0C1\uD488\uC744 \uB2F4\uC544 \uBCF4\uC138\uC694"}</button></div>`;else if(d==="cart"){let b=M();N=`<div class="items">${R?Object.entries(g).map(([D,O])=>`
        <div class="item"><span class="emo">${ad(D)}</span><div class="info"><b>${an[D].name}</b><small>${ph(an[D].price)}</small></div>
          <span class="step"><button data-dec="${D}" aria-label="\uBE7C\uAE30">\u2212</button><b>${O}</b><button data-inc="${D}" aria-label="\uB354\uD558\uAE30">+</button></span></div>`).join(""):'<p class="empty">\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4 \uC788\uC5B4\uC694</p>'}</div>
      <div class="cart">
        <button class="go" data-act="pay" ${R&&b?"":"disabled"}>${R?b?`\u{1F4B3} ${ph(m())} \uACC4\uC0B0\uD558\uAE30`:"\u{1F380} \uACC4\uC0B0\uB300 \uC9C1\uC6D0\uC5D0\uAC8C \uAC00\uBA74 \uACC4\uC0B0\uD560 \uC218 \uC788\uC5B4\uC694":"\uB2F4\uC740 \uC0C1\uD488\uC774 \uC5C6\uC5B4\uC694"}</button>
        <p class="fine">\uAC00\uC0C1 \uC1FC\uD551\uC774\uC5D0\uC694 \xB7 \uC2E4\uC81C \uACB0\uC81C\uB294 \uB418\uC9C0 \uC54A\uC544\uC694</p></div>`}else{let b=Object.entries(Bn.items).filter(([,D])=>D>0);N=`<div class="items">${b.length?b.map(([D,O])=>`
        <div class="item"><span class="emo">${ad(D)}</span><div class="info"><b>${an[D].name}</b><small>${O}\uAC1C \uAC00\uC9C0\uACE0 \uC788\uC5B4\uC694</small></div></div>`).join(""):'<p class="empty">\uC544\uC9C1 \uC0B0 \uBB3C\uAC74\uC774 \uC5C6\uC5B4\uC694</p>'}
        <p class="fine">\u{1F4D2} \uB2E4\uC774\uC5B4\uB9AC + \uC2A4\uD2F0\uCEE4 + \uBCFC\uD39C\uC774 \uC788\uC73C\uBA74 \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694</p></div>`}a.innerHTML=`<div class="mhead"><div><b>\uC218\uC9D1\uC218\uC9D1 \uC18C\uD488\uC0F5</b><span>${f?"\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uACE0 \uACC4\uC0B0\uB300\uC5D0\uC11C \uACC4\uC0B0\uD574\uC694":"\uB0B4\uAC00 \uC0B0 \uBB3C\uAC74"}</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>${P}${N}`}function _(R){d=R||d,p(),a.hidden=!1,a.offsetWidth,a.classList.add("on")}function I(){a.classList.remove("on"),setTimeout(()=>{a.classList.contains("on")||(a.hidden=!0)},250)}a.addEventListener("click",R=>{let P=R.target.closest("button");if(!P)return;let N=P.dataset;if(N.act==="close")return I();if(N.tab)return!f&&N.tab!=="mine"?void 0:(d=N.tab,p());if(N.cat)return v=+N.cat,p();if(N.add)return x()>=20?n("\uBC14\uAD6C\uB2C8\uAC00 \uAC00\uB4DD \uCC3C\uC5B4\uC694"):(g[N.add]=(g[N.add]||0)+1,y(),n(`\u{1F9FA} ${an[N.add].name} \uB2F4\uC558\uC5B4\uC694`),p());if(N.inc)return g[N.inc]++,y(),p();if(N.dec)return--g[N.dec]<=0&&delete g[N.dec],y(),p();if(N.act==="pay"){for(let[b,D]of Object.entries(g)){Bn.items[b]=(Bn.items[b]||0)+D;let O=an[b].sheet;O&&lr[O].stickers.forEach((U,G)=>{Bn.stickers[O+":"+G]=(Bn.stickers[O+":"+G]||0)+D}),delete g[b]}mh(),y(),h&&(h.el.textContent="\uAC10\uC0AC\uD569\uB2C8\uB2E4! \uB610 \uB180\uB7EC \uC624\uC138\uC694 \u{1F380}",setTimeout(()=>h.el.textContent="\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}",5e3)),n("\u{1F4B3} \uACC4\uC0B0 \uC644\uB8CC! \uC0B0 \uBB3C\uAC74\uC740 \u{1F392} \uB0B4 \uBB3C\uAC74\uC5D0 \uC788\uC5B4\uC694"),d="mine",p()}}),o.addEventListener("click",R=>{w(),R.currentTarget.blur()}),l.addEventListener("click",R=>{_(x()?"cart":"browse"),R.currentTarget.blur()}),c.addEventListener("click",R=>{if(R.currentTarget.blur(),x()&&performance.now()-S>3e3)return S=performance.now(),c.textContent="\uD55C \uBC88 \uB354 \uB204\uB974\uBA74 \uB0B4\uB824\uB193\uC544\uC694",n("\uB2F4\uC740 \uC0C1\uD488\uC740 \uACC4\uC0B0\uD558\uC9C0 \uC54A\uC73C\uBA74 \uB0B4\uB824\uB193\uC544\uC694");T()}),addEventListener("keydown",R=>{R.code==="Escape"&&!a.hidden&&I()});let A=null;return{get open(){return!a.hidden},get shopping(){return f},openMine(){_("mine")},update(R,P){let N=s(R);if(o.hidden=f||!!P||!N,l.hidden=!f,c.hidden=!f,f){let D=`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 ${x()}`;l.textContent!==D&&(l.textContent=D),performance.now()-S>3e3&&c.textContent!=="\uC1FC\uD551 \uADF8\uB9CC\uB450\uAE30"&&(c.textContent="\uC1FC\uD551 \uADF8\uB9CC\uB450\uAE30")}u.g.visible=!P,f&&!P&&(e.arms[1].rotation.x=-.95,e.arms[1].rotation.z=.12);let b=M();b!==A&&(A=b,!a.hidden&&d==="cart"&&p())}}}async function aa(i,e){let t=await new Promise(a=>i.toBlob(a,"image/jpeg",.92)),n=new File([t],e,{type:"image/jpeg"});if(matchMedia("(pointer:coarse)").matches&&navigator.canShare&&navigator.canShare({files:[n]}))try{return await navigator.share({files:[n],title:"\uC218\uC787\uD574\uD53C"}),"shared"}catch(a){if(a.name==="AbortError")return"cancel"}let r=document.createElement("a");return r.href=URL.createObjectURL(t),r.download=e,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(r.href),r.remove()},4e3),"downloaded"}var oa=()=>{let i=new Date;return`${i.getFullYear()}.${String(i.getMonth()+1).padStart(2,"0")}.${String(i.getDate()).padStart(2,"0")}`};var od='"Gamja Flower", "Poor Story", cursive',vh=6,US={heart:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="500" height="100"><defs><pattern id="p" width="25" height="25" patternUnits="userSpaceOnUse">
    <path d="M12.5 19 C3 12 5 5 9 5 C11 5 12.5 7 12.5 8 C12.5 7 14 5 16 5 C20 5 22 12 12.5 19z" fill="#ff8fb7"/></pattern></defs>
    <path d="M4 0 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 V50 H246 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 V0z" fill="#ffd9e7" opacity=".88"/>
    <rect x="4" y="0" width="242" height="50" fill="url(#p)" opacity=".85"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="500" height="100"><defs><pattern id="p" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#eaf7df"/><rect width="8" height="16" fill="#a9db8a" opacity=".55"/><rect width="16" height="8" fill="#a9db8a" opacity=".55"/></pattern></defs>
    <path d="M4 0 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 V50 H246 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 V0z" fill="url(#p)" opacity=".9"/></svg>`},ld=i=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(US[i]),cr={page:0,pages:Array.from({length:vh},()=>[])};try{let i=JSON.parse(localStorage.getItem("sh-diary"));i&&i.pages&&(cr=i)}catch{}var xh=()=>{try{return localStorage.setItem("sh-diary",JSON.stringify(cr)),!0}catch{return!1}};function m0({showToast:i}){let t=(F=>document.getElementById(F))("diary");t.innerHTML=`
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
    </div></div>`;let n=t.querySelector(".dpage"),s=t.querySelector(".dsel"),r=t.querySelector(".dinput"),a=r.querySelector("input"),o=t.querySelector(".dtabs"),l=t.querySelector(".dlist"),c=t.querySelector(".dfile"),h=t.querySelector(".dcrop"),u=h.querySelector(".dview"),f=u.querySelector("img"),d=h.querySelector(".dzoom"),v="stk",S=null,g=null,x=null,m=()=>cr.pages[cr.page];function M(){t.querySelector(".pg").textContent=`${cr.page+1} / ${vh}`;let F=n.clientWidth;n.innerHTML=m().map((k,W)=>{let J=`left:${k.x*100}%;top:${k.y*100}%;transform:translate(-50%,-50%) rotate(${k.r}deg)`;if(k.t==="x")return`<div class="de dt ${g===W?"on":""}" data-i="${W}" style="${J};color:${k.color};font-size:${k.s*F}px;max-width:${.84*F}px">${k.text.replace(/[<&]/g,Z=>Z==="<"?"&lt;":"&amp;")}</div>`;let B=k.t==="i"?k.src:k.t==="s"?gi(...k.k.split(":").map((Z,X)=>X?+Z:Z)):ld(k.k);return`<img class="de${k.t==="i"?" dph":""} ${g===W?"on":""}" data-i="${W}" src="${B}" style="${J};width:${k.s*F}px" draggable="false" alt="">`}).join(""),s.hidden=g===null}function y(){let F=Object.keys(an).filter(W=>an[W].ink&&gh(W)),k=Object.keys(an).filter(W=>an[W].tape&&gh(W));if(!S&&F.length&&(S=F[0]),o.innerHTML=[["stk","\u{1F31F} \uC2A4\uD2F0\uCEE4"],["photo","\u{1F4F7} \uC0AC\uC9C4"],["pen","\u270F\uFE0F \uBCFC\uD39C"],["tape","\u{1F380} \uD14C\uC774\uD504"]].map(([W,J])=>`<button class="${v===W?"on":""}" data-tab="${W}">${J}</button>`).join(""),v==="stk"){let W=Object.entries(Bn.stickers).filter(([,J])=>J>0);l.innerHTML=W.length?W.map(([J,B])=>{let[Z,X]=J.split(":");return`<button class="dst" data-stk="${J}"><img src="${gi(Z,+X)}" alt=""><i>${B}</i></button>`}).join(""):"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uC2A4\uD2F0\uCEE4\uB97C \uC0AC \uC624\uBA74 \uC5EC\uAE30\uC11C \uB5BC\uC5B4 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694 \u{1F31F}</p>"}else v==="photo"?l.innerHTML='<button class="dpen" data-pick="1">\u{1F5BC}\uFE0F \uB0B4 \uAC24\uB7EC\uB9AC\uC5D0\uC11C \uC0AC\uC9C4 \uACE0\uB974\uAE30</button><p class="tip">\uACE0\uB978 \uC0AC\uC9C4\uC740 \uC798\uB77C\uC11C \uD06C\uAE30\uB97C \uB9DE\uCD98 \uB4A4 \uBD99\uC5EC\uC694</p>':v==="pen"?l.innerHTML=F.length?F.map(W=>`<button class="dpen ${S===W?"on":""}" data-pen="${W}"><span style="background:${an[W].ink}"></span>${an[W].name}</button>`).join("")+'<p class="tip">\uB2E4\uC774\uC5B4\uB9AC \uBE48 \uACF3\uC744 \uD1A1 \uB204\uB974\uBA74 \uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694</p>':"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uBCFC\uD39C\uC744 \uC0AC \uC624\uBA74 \uC190\uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694 \u270F\uFE0F</p>":l.innerHTML=k.length?k.map(W=>`<button class="dtape" data-tape="${an[W].tape}"><img src="${ld(an[W].tape)}" alt=""></button>`).join(""):"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504\uB97C \uC0AC \uC624\uBA74 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694 \u{1F380}</p>"}let w=F=>{m().push(F),g=m().length-1,xh()||(m().pop(),g=null,i("\uB2E4\uC774\uC5B4\uB9AC \uC800\uC7A5 \uACF5\uAC04\uC774 \uAF49 \uCC3C\uC5B4\uC694. \uC0AC\uC9C4\uC744 \uBA87 \uC7A5 \uB5BC\uACE0 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694")),M()},T=null,p="1",_={s:1,x:0,y:0,base:1},I=()=>{let F=Math.min(300,innerWidth-80),k=p==="circle"?1:+p;return[F,F/k]};function A(){let[F,k]=I();u.style.width=F+"px",u.style.height=k+"px",u.classList.toggle("circle",p==="circle"),_.base=Math.max(F/T.width,k/T.height),R(),P()}function R(){let[F,k]=I(),W=_.base*_.s,J=T.width*W,B=T.height*W;_.x=Math.min(0,Math.max(F-J,_.x)),_.y=Math.min(0,Math.max(k-B,_.y))}function P(){let F=_.base*_.s;f.style.width=T.width*F+"px",f.style.transform=`translate(${_.x}px,${_.y}px)`}c.addEventListener("change",async()=>{let F=c.files&&c.files[0];if(F)try{let k=URL.createObjectURL(F),W=new Image;W.src=k,await W.decode(),T=W,f.src=k,p="1",_={s:1,x:0,y:0,base:1},d.value=1,h.querySelectorAll("[data-shape]").forEach(X=>X.classList.toggle("on",X.dataset.shape===p)),h.hidden=!1,A();let[J,B]=I(),Z=_.base;_.x=(J-T.width*Z)/2,_.y=(B-T.height*Z)/2,R(),P()}catch{i("\uC774 \uC0AC\uC9C4\uC740 \uC5F4 \uC218 \uC5C6\uC5B4\uC694. \uB2E4\uB978 \uC0AC\uC9C4\uC744 \uACE8\uB77C \uC8FC\uC138\uC694")}}),d.addEventListener("input",()=>{let[F,k]=I(),W=_.base*_.s;_.s=+d.value;let J=_.base*_.s;_.x=F/2-(F/2-_.x)*J/W,_.y=k/2-(k/2-_.y)*J/W,R(),P()});let N=null;u.addEventListener("pointerdown",F=>{N={id:F.pointerId,x:F.clientX-_.x,y:F.clientY-_.y},u.setPointerCapture(F.pointerId),F.preventDefault()}),u.addEventListener("pointermove",F=>{!N||F.pointerId!==N.id||(_.x=F.clientX-N.x,_.y=F.clientY-N.y,R(),P())}),u.addEventListener("pointerup",()=>N=null),u.addEventListener("pointercancel",()=>N=null),u.addEventListener("wheel",F=>{F.preventDefault(),d.value=Math.min(4,Math.max(1,+d.value-F.deltaY*.002)),d.dispatchEvent(new Event("input"))},{passive:!1}),h.addEventListener("click",F=>{let k=F.target.closest("button");if(k){if(k.dataset.shape){p=k.dataset.shape,h.querySelectorAll("[data-shape]").forEach(W=>W.classList.toggle("on",W===k)),A();return}if(k.dataset.crop==="cancel"){h.hidden=!0;return}if(k.dataset.crop==="ok"){let[W,J]=I(),B=_.base*_.s,Z=p==="circle",X=Z?420:560,se=Math.round(X*J/W),he=Math.round(X*.05),q=document.createElement("canvas");q.width=X+he*2,q.height=se+he*2;let re=q.getContext("2d");Z?(re.fillStyle="#fff",re.beginPath(),re.arc(q.width/2,q.height/2,q.width/2,0,7),re.fill(),re.save(),re.beginPath(),re.arc(q.width/2,q.height/2,X/2,0,7),re.clip()):(re.fillStyle="#fff",re.fillRect(0,0,q.width,q.height)),re.drawImage(T,-_.x/B,-_.y/B,W/B,J/B,he,he,X,se),Z&&re.restore();let fe=Z?q.toDataURL("image/png"):q.toDataURL("image/jpeg",.84);h.hidden=!0,w({t:"i",src:fe,x:.5,y:.45,s:p==="0.75"?.4:.48,r:Math.round((Math.random()-.5)*10)})}}}),o.addEventListener("click",F=>{let k=F.target.closest("[data-tab]");k&&(v=k.dataset.tab,r.hidden=!0,y())}),l.addEventListener("click",F=>{let k=F.target.closest("button");if(k)if(k.dataset.stk){let W=k.dataset.stk;if(!(Bn.stickers[W]>0))return;Bn.stickers[W]--,mh(),w({t:"s",k:W,x:.35+Math.random()*.3,y:.3+Math.random()*.4,s:.26,r:Math.round((Math.random()-.5)*24)}),y()}else k.dataset.pick?(c.value="",c.click()):k.dataset.pen?(S=k.dataset.pen,y()):k.dataset.tape&&w({t:"p",k:k.dataset.tape,x:.5,y:.2+Math.random()*.6,s:.55,r:Math.round((Math.random()-.5)*16)})});let b=null;n.addEventListener("pointerdown",F=>{let k=F.target.closest(".de"),W=n.getBoundingClientRect();if(k){g=+k.dataset.i;let J=m()[g];b={id:F.pointerId,ox:J.x-(F.clientX-W.left)/W.width,oy:J.y-(F.clientY-W.top)/W.height,node:k},n.setPointerCapture(F.pointerId),s.hidden=!1,n.querySelectorAll(".de.on").forEach(B=>B!==k&&B.classList.remove("on")),k.classList.add("on"),F.preventDefault();return}g=null,M(),v==="pen"&&S?(x={x:(F.clientX-W.left)/W.width,y:(F.clientY-W.top)/W.height},r.hidden=!1,a.value="",setTimeout(()=>a.focus(),30)):v==="pen"&&i("\uC18C\uD488\uC0F5\uC5D0\uC11C \uBCFC\uD39C\uC744 \uC0AC \uC624\uBA74 \uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694")}),n.addEventListener("pointermove",F=>{if(!b||F.pointerId!==b.id)return;let k=n.getBoundingClientRect(),W=m()[g];W.x=Math.min(1,Math.max(0,(F.clientX-k.left)/k.width+b.ox)),W.y=Math.min(1,Math.max(0,(F.clientY-k.top)/k.height+b.oy)),b.node.style.left=W.x*100+"%",b.node.style.top=W.y*100+"%"});let D=F=>{b&&F.pointerId===b.id&&(b=null,xh())};n.addEventListener("pointerup",D),n.addEventListener("pointercancel",D),r.addEventListener("submit",F=>{F.preventDefault();let k=a.value.trim();r.hidden=!0,a.blur(),!(!k||!x)&&w({t:"x",text:k,color:an[S].ink,x:x.x,y:x.y,s:.07,r:Math.round((Math.random()-.5)*8)})}),t.addEventListener("click",async F=>{let k=F.target.closest("[data-act]");if(!k)return;let W=k.dataset.act,J=g!==null?m()[g]:null;if(W==="close")return H();if(W==="prev"||W==="next")return cr.page=(cr.page+(W==="next"?1:vh-1))%vh,g=null,r.hidden=!0,xh(),M();if(W==="save")return U();J&&(W==="rotl"?J.r-=12:W==="rotr"?J.r+=12:W==="big"?J.s=Math.min(J.t==="x"?.2:.9,J.s*1.18):W==="small"?J.s=Math.max(J.t==="x"?.03:.08,J.s/1.18):W==="del"&&(m().splice(g,1),J.t==="s"&&(Bn.stickers[J.k]=(Bn.stickers[J.k]||0)+1,mh(),y()),g=null),xh(),M())});function O(F,k,W){F.fillStyle="#fffdf6",F.fillRect(0,0,k,W),F.fillStyle="#e9dcef";for(let J=60;J<W;J+=36)for(let B=90;B<k-20;B+=36)F.beginPath(),F.arc(B,J,2,0,7),F.fill();F.fillStyle="#f6e3ec",F.fillRect(0,0,54,W);for(let J=40;J<W;J+=60)F.fillStyle="#d8cde6",F.beginPath(),F.arc(27,J,9,0,7),F.fill()}async function U(){try{await document.fonts.load(`40px ${od}`)}catch{}let F=900,k=1200,W=document.createElement("canvas");W.width=F,W.height=k;let J=W.getContext("2d");O(J,F,k);for(let Z of m()){if(J.save(),J.translate(Z.x*F,Z.y*k),J.rotate(Z.r*Math.PI/180),Z.t==="x"){J.font=`${Z.s*F}px ${od}`,J.fillStyle=Z.color,J.textAlign="center",J.textBaseline="middle";let X=[],se="";for(let q of Z.text.split(/(\s+)/))se&&J.measureText(se+q).width>F*.84?(X.push(se.trim()),se=q.trimStart()):se+=q;X.push(se.trim());let he=Z.s*F*1.05;X.forEach((q,re)=>J.fillText(q,0,(re-(X.length-1)/2)*he))}else{let X=new Image;X.src=Z.t==="i"?Z.src:Z.t==="s"?gi(...Z.k.split(":").map((q,re)=>re?+q:q)):ld(Z.k),await X.decode().catch(()=>{});let se=Z.s*F,he=se*(X.naturalHeight/X.naturalWidth||1);J.drawImage(X,-se/2,-he/2,se,he)}J.restore()}J.font=`28px ${od}`,J.fillStyle="#b9a6cf",J.textAlign="right",J.fillText(`\uC218\uC787\uD574\uD53C \uB2E4\uC774\uC5B4\uB9AC \xB7 ${oa()}`,F-30,k-30);let B=await aa(W,`suithappy-diary-${Date.now()}.jpg`);i(B==="downloaded"?"\u{1F4BE} \uB2E4\uC774\uC5B4\uB9AC\uB97C \uC774\uBBF8\uC9C0\uB85C \uC800\uC7A5\uD588\uC5B4\uC694":B==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}function G(){if(!gh("diary"))return i("\u{1F4D2} \uC18C\uD488\uC0F5\uC5D0\uC11C \uB2E4\uC774\uC5B4\uB9AC \uC218\uCCA9\uC744 \uC0AC \uC624\uBA74 \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694");t.hidden=!1,g=null,r.hidden=!0,y(),requestAnimationFrame(M)}function H(){t.hidden=!0,r.hidden=!0}return addEventListener("resize",()=>{t.hidden||M()}),addEventListener("keydown",F=>{F.code==="Escape"&&!t.hidden&&r.hidden&&H()}),{open:G,close:H,get isOpen(){return!t.hidden}}}var g0={v:{label:"\u270C\uFE0F \uBE0C\uC774",arm:[-2.75,.32],tilt:.12},heart:{label:"\u{1FAF6} \uD558\uD2B8",arm:[-3.05,-.55],tilt:-.1},chin:{label:"\u{1F338} \uAF43\uBC1B\uCE68",arm:[-2,-.62],tilt:.2}};function x0({hero:i,mirrors:e,camera:t,player:n,showToast:s,renderNow:r}){let a=U=>document.getElementById(U),o=a("photo-btn"),l=a("photo-bar"),c=a("shot");l.innerHTML=`<div class="poses">${Object.entries(g0).map(([U,G])=>`<button data-pose="${U}">${G.label}</button>`).join("")}</div>
    <div class="prow"><button class="pclose" data-act="exit">\uB2EB\uAE30</button><button class="shutter" data-act="shoot" aria-label="\uCC0D\uAE30"></button><span class="ptip">\uD3EC\uC988\uB97C \uACE0\uB974\uACE0 \uCC30\uCE75!</span></div>`;let h=U=>new qt({color:U,roughness:.4}),u=new tt,f=new Je(new kt(.07,.13,.014),h("#9f8af0"));u.add(f);let d=new Je(new ot(.006,.006,.004,10),h("#3b2f4a"));d.rotation.x=Math.PI/2,d.position.set(-.018,.048,.008),u.add(d),u.position.set(0,-.27,.035),u.rotation.x=Math.PI/2;let v=new tt;v.position.set(.012,-.27,0);let S=h("#ffe3d0"),g=new tt;v.add(g);for(let U of[-1,1]){let G=new Je(new qa(.011,.05,3,6),S);G.position.set(.012*U,-.04,0),G.rotation.z=.28*U,g.add(G)}let x=new tt,m=new bs;m.moveTo(0,-.05),m.bezierCurveTo(-.07,0,-.04,.05,0,.025),m.bezierCurveTo(.04,.05,.07,0,0,-.05),x.add(new Je(new Ks(m,{depth:.015,bevelEnabled:!1}),h("#ff6fa5"))),x.position.set(0,1.38,.05),x.scale.setScalar(1.8);let M=new tt;for(let U=0;U<5;U++){let G=new Je(new Zt(.03,8,6),h(U%2?"#ffd1e3":"#fff3b0"));G.position.set(Math.cos(U*1.256)*.05,0,Math.sin(U*1.256)*.05),M.add(G)}M.position.set(0,.92,.2);let y=!1,w=null,T="v",p=!1,_=0,I=0,A=new z;function R(){for(let U of e){let G=U.c.x-n.x,H=n.z-U.c.z;if(G>.6&&G<2.6&&Math.abs(H)<.85)return U}return null}function P(U){T=U,l.querySelectorAll("[data-pose]").forEach(G=>G.classList.toggle("on",G.dataset.pose===U)),g.visible=U==="v",x.visible=U==="heart",M.visible=U==="chin"}function N(){if(w=R(),!!w){y=!0,n.face=Math.PI/2,I=t.fov,t.fov=64,t.updateProjectionMatrix();try{document.fonts.load('40px "Gamja Flower"')}catch{}i.arms[0].add(u),i.arms[1].add(v),i.root.add(x),i.root.add(M),P(T),l.hidden=!1,o.hidden=!0,document.body.classList.add("photo"),s("\u{1F4F8} \uAC70\uC6B8\uC0F7 \uBAA8\uB4DC! \uD3EC\uC988\uB97C \uACE0\uB974\uACE0 \uB3D9\uADF8\uB780 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC694")}}function b(){y=!1,l.hidden=!0,document.body.classList.remove("photo"),I&&(t.fov=I,t.updateProjectionMatrix()),i.arms[0].remove(u),i.arms[1].remove(v),i.root.remove(x),i.root.remove(M),i.head.rotation.z=0}l.addEventListener("click",U=>{let G=U.target.closest("button");G&&(G.dataset.pose?P(G.dataset.pose):G.dataset.act==="exit"?b():G.dataset.act==="shoot"&&(_=1,O.applyPose(performance.now()/1e3),i.root.updateMatrixWorld(!0),O.camera(),p=!0,O.afterRender(r())))}),o.addEventListener("click",U=>{N(),U.currentTarget.blur()});let D=null;c.addEventListener("click",async U=>{let G=U.target.closest("button");if(G&&(G.dataset.act==="again"&&(c.hidden=!0),G.dataset.act==="save"&&D)){let H=await aa(D,`suithappy-mirror-${Date.now()}.jpg`);s(H==="downloaded"?"\u{1F4BE} \uC0AC\uC9C4\uC744 \uC800\uC7A5\uD588\uC5B4\uC694":H==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}}),addEventListener("keydown",U=>{U.code==="Escape"&&y&&(c.hidden?b():c.hidden=!0)});let O={get active(){return y},update(U){o.hidden=y||!!U||!R()},applyPose(U){if(!y)return;let G=g0[T];i.arms[0].rotation.x=-1.95,i.arms[0].rotation.z=-.55,i.arms[1].rotation.x=G.arm[0],i.arms[1].rotation.z=G.arm[1],i.head.rotation.z=G.tilt,i.head.rotation.y=0,x.rotation.y=Math.sin(U*2)*.3,x.position.y=1.38+Math.sin(U*3)*.02},camera(){if(!y)return!1;let U=n.face,G=Math.sin(U),H=Math.cos(U),F=H,k=-G;return t.position.set(n.x+G*.42-F*.1,.78,n.z+H*.42-k*.1),t.lookAt(w.c.x,.72,n.z*.7+w.c.z*.3),!0},afterRender(U){let G=document.getElementById("flash");if(_>0&&(_=Math.max(0,_-.08),G.style.opacity=_),!p)return;p=!1;let H=900,F=1200,k=document.createElement("canvas");k.width=H,k.height=F;let W=k.getContext("2d"),J=U.width,B=U.height,Z=3/4,X=J,se=J/Z;se>B&&(se=B,X=B*Z),W.fillStyle="#fff",W.fillRect(0,0,H,F),W.drawImage(U,(J-X)/2,(B-se)/2,X,se,30,30,H-60,F-150),W.fillStyle="#ff8fb7",W.font='700 40px "Gamja Flower", cursive',W.textAlign="left",W.fillText("Soo it Happy \u{1F353} \uC218\uC9D1\uC218\uC9D1",40,F-62),W.fillStyle="#b9a6cf",W.font='30px "Gamja Flower", cursive',W.textAlign="right",W.fillText(oa(),H-40,F-62),D=k,c.innerHTML=`<div class="shotcard"><img src="${k.toDataURL("image/jpeg",.85)}" alt="\uCC0D\uC740 \uAC70\uC6B8\uC0F7"><div class="srow"><button data-act="again">\uB2E4\uC2DC \uCC0D\uAE30</button><button class="go" data-act="save">\u{1F4F2} \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5</button></div></div>`,c.hidden=!1}};return O}var FS={grill:.4,parfait:1.6,order:.9,rhythm:.22,serving:.8},y0={mjp:"\uC774\uAE30\uBA74 1,500 \xB7 \uC838\uB3C4 200",spot:"\uCC3E\uC744 \uB54C\uB9C8\uB2E4 100 + \uB2E4 \uCC3E\uC73C\uBA74 \uCD5C\uB300 300",treasure:"\uBCC4\uC0AC\uD0D5 1\uAC1C\uB2F9 100 + \uB2E4 \uCC3E\uC73C\uBA74 \uBCF4\uB108\uC2A4",grill:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000",parfait:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000",order:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000",rhythm:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000",serving:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000"},v0="sh-coins",_0="sh-coins-daily",hr=i=>i.toLocaleString("ko-KR");function M0({showToast:i}){let e=!1,t=3e3;try{let u=localStorage.getItem(v0);u===null?e=!0:t=Math.max(0,+u||0)}catch{e=!0}let n=document.getElementById("coin-pill"),s=()=>{try{localStorage.setItem(v0,t)}catch{}};function r(u){n&&(n.querySelector("b").textContent=hr(t),u&&(n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump")))}function a(u){if(!n)return;let f=n.getBoundingClientRect(),d=document.createElement("div");d.className="coin-float "+(u>0?"up":"down"),d.textContent=`${u>0?"+":"\u2212"}${hr(Math.abs(u))}`,Object.assign(d.style,{left:f.left+f.width/2+"px",top:f.bottom+4+"px"}),document.body.appendChild(d),setTimeout(()=>d.remove(),1300)}function o(u){return u=Math.round(u),u?(t=Math.max(0,t+u),s(),r(!0),a(u),u):0}let l=()=>{let u=new Date;return`${u.getFullYear()}-${u.getMonth()+1}-${u.getDate()}`};function c(u=500){if(t<u){let f=null;try{f=localStorage.getItem(_0)}catch{}if(f!==l()){try{localStorage.setItem(_0,l())}catch{}o(1e3),i(`\u{1FA99} \uCF54\uC778\uC774 \uBD80\uC871\uD574\uC11C \uC624\uB298\uC758 \uC751\uC6D0 \uCF54\uC778 ${hr(1e3)}\uC744 \uB4DC\uB838\uC5B4\uC694! \uD654\uC774\uD305 \u{1F4AA}`)}}return t<u?(i(`\u{1FA99} \uCF54\uC778\uC774 \uBD80\uC871\uD574\uC694 (\uCC38\uAC00\uBE44 ${hr(u)}) \xB7 \uB0B4\uC77C \uC751\uC6D0 \uCF54\uC778\uC744 \uB610 \uBC1B\uC744 \uC218 \uC788\uC5B4\uC694`),r(!0),!1):(o(-u),!0)}function h(u,f){let d=FS[u]||.5;return OS(Math.round(f*d/10)*10,100,2e3)}return r(!1),{get balance(){return t},add:o,pay:c,fromScore:h,fmt:hr,welcome(){e&&(e=!1,s(),r(!0),setTimeout(()=>i(`\u{1FA99} \uCCAB \uBC29\uBB38 \uC120\uBB3C! \uAE30\uBCF8 \uCF54\uC778 ${hr(3e3)}\uC744 \uB4DC\uB824\uC694 \xB7 \uAC8C\uC784 \uD55C \uD310 \uCC38\uAC00\uBE44 ${hr(500)}`),3800))}}}function OS(i,e,t){return Math.max(e,Math.min(t,i))}var En=(i,e)=>i+Math.random()*(e-i),BS=i=>i[Math.floor(Math.random()*i.length)],_h=(i,e,t)=>Math.max(e,Math.min(t,i)),ri=(i,e,t)=>i+(e-i)*t,ai=(i,e,t)=>{let n=parseInt(i.slice(1),16),s=parseInt(e.slice(1),16),r=a=>Math.round(ri(n>>a&255,s>>a&255,_h(t,0,1)));return`rgb(${r(16)},${r(8)},${r(0)})`},ur=null,yh=()=>{if(!ur)try{ur=new(window.AudioContext||window.webkitAudioContext)}catch{}return ur&&ur.state==="suspended"&&ur.resume(),ur};function Ln(i,e=.12,t="triangle",n=.12,s=0){let r=yh();if(!r)return;let a=r.currentTime+s,o=r.createOscillator(),l=r.createGain();o.type=t,o.frequency.setValueAtTime(i,a),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l).connect(r.destination),o.start(a),o.stop(a+e+.02)}function kS(i=.05,e=.08,t=0,n=6e3){let s=yh();if(!s)return;let r=s.currentTime+t,a=Math.floor(s.sampleRate*i),o=s.createBuffer(1,a,s.sampleRate),l=o.getChannelData(0);for(let f=0;f<a;f++)l[f]=(Math.random()*2-1)*(1-f/a);let c=s.createBufferSource(),h=s.createBiquadFilter(),u=s.createGain();h.type="highpass",h.frequency.value=n,u.gain.value=e,c.buffer=o,c.connect(h).connect(u).connect(s.destination),c.start(r)}var wn={good:()=>{Ln(880,.1),Ln(1320,.12,"triangle",.1,.06)},bad:()=>Ln(180,.2,"sawtooth",.08),pop:()=>Ln(660,.08,"sine",.12),win:()=>[523,659,784,1047].forEach((i,e)=>Ln(i,.18,"triangle",.12,e*.09))};function Dt(i,e,t,n,s,r){i.beginPath(),i.roundRect(e,t,n,s,r)}function Ps(i,e,t,n,s){i.font=`${s}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(e,t,n)}function Yt(i,e,t,n,s=16,r="#4a3f66",a=800,o="center"){i.font=`${a} ${s}px "Malgun Gothic","Apple SD Gothic Neo",sans-serif`,i.fillStyle=r,i.textAlign=o,i.textBaseline="middle",i.fillText(e,t,n)}function Go(i,e,t){for(let n of i)n.t+=t,n.y-=40*t,e.globalAlpha=_h(1-n.t/.9,0,1),Yt(e,n.s,n.x,n.y,n.size||18,n.c||"#e0457b",900);e.globalAlpha=1;for(let n=i.length-1;n>=0;n--)i[n].t>.9&&i.splice(n,1)}function Mh(i,e,t){Dt(i,10,10,110,34,17),i.fillStyle="#ffffffcc",i.fill(),Yt(i,`\u23F1 ${Math.max(0,Math.ceil(e))}\uCD08`,65,27,15),Dt(i,220,10,130,34,17),i.fillStyle="#ffffffcc",i.fill(),Yt(i,`\uC810\uC218 ${t}`,285,27,15,"#e0457b")}function zS(){let i=[],e=[],t=[],n=30,s=0,r=0,a=0,o=0,l=0,c=[{y:236,s:.84},{y:322,s:.97},{y:420,s:1.1}],h=[.68,.82],u=[.58,.95],f=1.25,d=p=>({side:0,done:[0,0],marks:[0,0],rate:En(.3,.46)*(1+a*.07),ph:Math.random()*6,flips:0,slide:0,lift:0,grades:[],wait:p,dead:0}),v=[d(0),d(2.2),d(4.4)],S=p=>p<.58?ai("#fbf6ec","#f3d9a8",p/.58):p<.82?ai("#f3d9a8","#e49a4c",(p-.58)/.24):p<.95?ai("#e49a4c","#a9572a",(p-.82)/.13):ai("#a9572a","#2a201c",(p-.95)/.3);function g(p){let _=v[p];if(!_||_.slide||_.wait>0||_.dead)return;let I=_.done[_.side],A=c[p],R;if(I<u[0])R=["\uB35C \uC775\uC5C8\uC5B4\uC694 \u{1F62F}",-10,"#8a7bb8"],wn.bad(),o=0;else if(I>=h[0]&&I<=h[1]){o++,R=[o>1?`PERFECT \xD7${o}!`:"PERFECT \uB178\uB987\uB178\uB987!",100+(o-1)*20,"#e0457b"],wn.good();for(let P=0;P<10;P++)t.push({x:360/2+En(-90,90)*A.s,y:A.y,vx:En(-60,60),vy:En(-160,-60),t:0})}else I<=u[1]?(R=["\uC88B\uC544\uC694 \u{1F44D}",50,"#e39b4f"],wn.pop(),o=0):(R=["\uC557 \uD0D4\uC5B4\uC694\u2026 \u{1F525}",-30,"#5a4a44"],wn.bad(),o=0);_.grades.push(R[1]),s=Math.max(0,s+R[1]),i.push({s:R[0],x:360/2,y:A.y-46*A.s,t:0,c:R[2]}),_.marks[_.side]=1,_.flips++,_.lift=1,_.flips>=2?(_.slide=.001,r++,a++,_.grades.every(P=>P>=100)&&(s+=80,i.push({s:"\uC644\uBCBD\uD55C \uB5A1\uAF2C\uCE58! +80",x:360/2,y:A.y-20,t:0,size:19}),wn.win())):_.side=1}let x=p=>{let _=0,I=1e9;return c.forEach((A,R)=>{let P=Math.abs(A.y-p);P<I&&(I=P,_=R)}),_},m=190,M=470,y=p=>ri(78,8,(p-m)/(M-m)),w=p=>360-y(p);function T(p,_,I,A,R){let P=p.createLinearGradient(0,_,0,_+I);return P.addColorStop(0,ai("#ffffff","#fbf6ec",.5)),P.addColorStop(.18,S(A)),P.addColorStop(.62,S((A+R)/2)),P.addColorStop(1,S(R)),P}return{title:"\u{1F361} \uB5A1\uAF2C\uCE58 \uAD7D\uAE30",desc:"\uC22F\uBD88 \uC704 <b>\uAF2C\uCE58 3\uAC1C</b>\uAC00 \uB3D9\uC2DC\uC5D0 \uC775\uC5B4\uC694!<br>\uB5A1\uC774 <b>\uB178\uB987\uB178\uB987</b>(\uAC8C\uC774\uC9C0 \uCD08\uB85D)\uD560 \uB54C \uADF8 \uAF2C\uCE58\uB97C \uB20C\uB7EC \uB4A4\uC9D1\uC5B4\uC694.<br>\uAF2C\uCE58\uB9C8\uB2E4 \uC775\uB294 \uC18D\uB3C4\uAC00 \uB2EC\uB77C\uC694 \xB7 \uC624\uB798 \uB450\uBA74 \uC22F\uC774 \uB3FC\uC694 \u{1F525}<br>\uC5F0\uC18D PERFECT\uBA74 \uCF64\uBCF4 \uBCF4\uB108\uC2A4! (\uD0A4\uBCF4\uB4DC 1\xB72\xB73)",buttons:[{label:"\u2460 \uB4A4\uCABD",act:()=>g(0)},{label:"\u2461 \uAC00\uC6B4\uB370",act:()=>g(1)},{label:"\u2462 \uC55E\uCABD",act:()=>g(2)}],key(p){(p==="Digit1"||p==="Numpad1")&&g(0),(p==="Digit2"||p==="Numpad2")&&g(1),(p==="Digit3"||p==="Numpad3")&&g(2)},tapAt(p,_){_>m-50&&_<M+20&&g(x(_))},update(p){return n-=p,v.forEach((_,I)=>{if(_.wait>0){_.wait-=p;return}if(_.slide){_.slide+=p*1.8,_.slide>1&&(v[I]=d(En(.4,1.1)));return}if(_.dead){_.dead+=p,_.dead>1.2&&(v[I]=d(En(.5,1)));return}_.ph+=p;let A=1+Math.sin(_.ph*1.7)*.22+Math.sin(_.ph*4.3+I)*.1;_.done[_.side]=Math.min(1.5,_.done[_.side]+_.rate*A*p),_.done[_.side]>.9&&Math.random()<p*6&&e.push({x:360/2+En(-100,100)*c[I].s,y:c[I].y-10,t:0,r:En(6,12),dark:_.done[_.side]>1}),_.done[_.side]>=f&&(_.dead=.001,l++,o=0,s=Math.max(0,s-50),wn.bad(),i.push({s:"\uC22F\uC774 \uB410\uC5B4\uC694\u2026 -50",x:360/2,y:c[I].y-40,t:0,c:"#5a4a44"})),_.lift=Math.max(0,_.lift-p*3.5)}),Math.random()<p*2&&e.push({x:En(40,320),y:450,t:0,r:En(5,9),dark:!1}),n<=0?{score:s,msg:`\uB5A1\uAF2C\uCE58 ${r}\uAC1C \uC644\uC131!${l?` (\uC22F ${l}\uAC1C \u{1F525})`:""}`}:null},draw(p,_,I){let A=p.createLinearGradient(0,0,0,560);A.addColorStop(0,"#ffe9dc"),A.addColorStop(.32,"#ffd7c4"),A.addColorStop(1,"#c98f7a"),p.fillStyle=A,p.fillRect(0,0,360,560);for(let P=0;P<6;P++)p.fillStyle=P%2?"#ff8fb0":"#fff",p.beginPath(),p.moveTo(P*60,52),p.lineTo(P*60+60,52),p.lineTo(P*60+60,78),p.quadraticCurveTo(P*60+30,96,P*60,78),p.fill();Mh(p,n,s),o>1&&(Dt(p,360/2-52,12,104,30,15),p.fillStyle="#e0457b",p.fill(),Yt(p,`\u{1F525} \uCF64\uBCF4 ${o}`,360/2,27,14,"#fff",900)),p.fillStyle="#3a2b2e",p.beginPath(),p.moveTo(y(m)-10,m-14),p.lineTo(w(m)+10,m-14),p.lineTo(w(M)+12,M+8),p.lineTo(y(M)-12,M+8),p.fill();let R=p.createLinearGradient(0,M,0,M+60);R.addColorStop(0,"#6d5a5e"),R.addColorStop(1,"#2d2224"),p.fillStyle=R,Dt(p,y(M)-12,M+6,w(M)-y(M)+24,54,8),p.fill(),p.fillStyle="#ffffff22",p.fillRect(y(M)-4,M+14,w(M)-y(M)+8,3);for(let P=0;P<26;P++){let N=m+12+P*37%250,b=ri(y(N)+14,w(N)-14,P*53%100/100),D=ri(8,15,(N-m)/(M-m)),O=.55+Math.sin(I*3+P*1.7)*.25,U=p.createRadialGradient(b,N,0,b,N,D*1.8);U.addColorStop(0,`rgba(255,${150+60*O|0},70,${O})`),U.addColorStop(1,"rgba(255,90,40,0)"),p.fillStyle=U,p.beginPath(),p.arc(b,N,D*1.8,0,7),p.fill()}for(let P=0;P<=14;P++){let N=P/14,b=ri(m,M,N*(.75+.25*N)),D=ri(2.2,5,N);p.strokeStyle="rgba(0,0,0,0.45)",p.lineWidth=D,p.beginPath(),p.moveTo(y(b),b+D*.6),p.lineTo(w(b),b+D*.6),p.stroke(),p.strokeStyle="#9d9298",p.lineWidth=D,p.beginPath(),p.moveTo(y(b),b),p.lineTo(w(b),b),p.stroke(),p.strokeStyle="#efe6ea",p.lineWidth=D*.3,p.beginPath(),p.moveTo(y(b)+4,b-D*.22),p.lineTo(w(b)-4,b-D*.22),p.stroke()}p.strokeStyle="#5b4a4f",p.lineWidth=7,p.beginPath(),p.moveTo(y(m)-6,m-8),p.lineTo(w(m)+6,m-8),p.lineTo(w(M)+8,M+4),p.lineTo(y(M)-8,M+4),p.closePath(),p.stroke(),v.forEach((P,N)=>{let b=c[N],D=b.s,O=P.slide?ri(360/2,620,P.slide*P.slide):360/2;if(P.wait>0){Yt(p,"\u2026",360/2,b.y,16*D,"#ffffff88");return}let U=Math.sin(P.lift*Math.PI)*34*D,G=b.y-U-(P.dead?P.dead*30:0);p.globalAlpha=P.dead?Math.max(0,1-P.dead):1,p.fillStyle="rgba(0,0,0,0.35)",p.beginPath(),p.ellipse(O,b.y+16*D,125*D,9*D,0,0,7),p.fill(),p.strokeStyle="#e2bd86",p.lineWidth=6*D,p.lineCap="round",p.beginPath(),p.moveTo(O-160*D,G+4*D),p.lineTo(O+150*D,G+4*D),p.stroke(),p.fillStyle="#c99a5e",Dt(p,O-178*D,G-3*D,26*D,14*D,4),p.fill();let H=P.done[P.side],F=P.dead?1.5:P.flips?P.done[0]:0,k=P.dead?1.5:P.slide?P.done[1]:H;for(let W=0;W<4;W++){let J=O-102*D+W*68*D,B=56*D,Z=36*D,X=G-Z/2;if(p.fillStyle=T(p,X,Z,F,k),Dt(p,J-B/2,X,B,Z,14*D),p.fill(),P.marks[0]||P.slide){p.strokeStyle="rgba(70,35,20,0.55)",p.lineWidth=3*D;for(let se=-1;se<=1;se++)p.beginPath(),p.moveTo(J+se*14*D-6*D,X+8*D),p.lineTo(J+se*14*D+6*D,X+Z-8*D),p.stroke()}P.slide&&(p.fillStyle="rgba(210,50,40,0.85)",Dt(p,J-B/2+3,X+3,B-6,Z*.55,10*D),p.fill(),p.fillStyle="#ffffff99",Dt(p,J-B/2+8*D,X+6*D,14*D,5*D,3),p.fill()),p.fillStyle="#ffffff66",Dt(p,J-B/2+7*D,X+5*D,16*D,6*D,3),p.fill()}if(p.globalAlpha=1,!P.slide&&!P.dead){let W=O-70*D,J=G-40*D,B=140*D,Z=9*D;Dt(p,W-3,J-3,B+6,Z+6,7),p.fillStyle="#ffffffd9",p.fill();let X=(se,he,q)=>{p.fillStyle=q,p.fillRect(W+B*se/f,J,B*(he-se)/f,Z)};X(0,u[0],"#eee4ea"),X(u[0],h[0],"#ffe08a"),X(h[0],h[1],"#7fdc7a"),X(h[1],u[1],"#ffe08a"),X(u[1],f,"#e6a0a0"),p.fillStyle="#4a3f66",p.fillRect(W+B*Math.min(H,f)/f-2,J-4,4,Z+8),Dt(p,W-26*D,J-4*D,18*D,18*D,9*D),p.fillStyle="#e0457b",p.fill(),Yt(p,`${N+1}`,W-17*D,J+5*D,12*D,"#fff",900),Yt(p,P.side?"\uB4B7\uBA74":"\uC55E\uBA74",W+B+20*D,J+Z/2,11*D,"#fff",800)}});for(let P=e.length-1;P>=0;P--){let N=e[P];N.t+=_,N.y-=34*_,N.x+=Math.sin(N.t*3+P)*10*_,N.r+=10*_,p.globalAlpha=Math.max(0,.32*(1-N.t/1.6)),p.fillStyle=N.dark?"#5a4f52":"#ffffff",p.beginPath(),p.arc(N.x,N.y,N.r,0,7),p.fill(),N.t>1.6&&e.splice(P,1)}for(let P=t.length-1;P>=0;P--){let N=t[P];N.t+=_,N.x+=N.vx*_,N.y+=N.vy*_,N.vy+=300*_,p.globalAlpha=Math.max(0,1-N.t/.7),p.fillStyle="#ffd36b",p.beginPath(),p.arc(N.x,N.y,2.5,0,7),p.fill(),N.t>.7&&t.splice(P,1)}p.globalAlpha=1,Yt(p,"\uC775\uC740 \uAF2C\uCE58\uB97C \uC9C1\uC811 \uB204\uB974\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC73C\uB85C \uB4A4\uC9D1\uC5B4\uC694",360/2,540,12,"#fff",700),Go(i,p,_)}}}function HS(){let i=[["\uC0DD\uD06C\uB9BC","#fffaf3"],["\uB538\uAE30","#f58aa6"],["\uCD08\uCF54","#8a5638"],["\uB179\uCC28","#a5d07f"],["\uCF58\uD50C\uB808\uC774\uD06C","#e9b860"],["\uBC14\uB2D0\uB77C","#fff0c2"],["\uBE14\uB8E8\uBCA0\uB9AC","#8f88dc"],["\uB9DD\uACE0","#ffc552"],["\uCFE0\uD0A4","#c49a6c"]],e=[],t=[],n=45,s=0,r=0,a=0,o=null,l=0,c=24,h=455,u=150,f=175,d=[{x:360/2,w:u,y:h,c:"#ffffff"}],v=null,S=()=>d[d.length-1];function g(){let M=S(),[y,w]=i[l%i.length];l++;let T=l%2?1:-1;v={name:y,c:w,w:M.w,x:360/2-T*f,dir:T,y:M.y-c,sp:120+d.length*9,drop:0}}g();function x(){if(!v||o)return;let M=S(),y=v.x-M.x,w=M.w-Math.abs(y);if(w<=3){t.push({x:v.x,y:v.y,w:v.w,c:v.c,vx:Math.sign(y||1)*70,vy:0,r:0}),v=null,o={t:0},r=0,wn.bad(),e.push({s:"\uC557, \uBE57\uB098\uAC14\uC5B4\uC694! \u{1F635}",x:360/2,y:230,t:0,size:21});return}let T,p;if(Math.abs(y)<7){r++,T=M.x,p=Math.min(u,M.w+(r>=3?8:0));let _=25+r*5;s+=_,wn.good(),e.push({s:r>1?`PERFECT \xD7${r} +${_}`:`PERFECT +${_}`,x:360/2,y:v.y-34+a,t:0,c:"#e0457b"})}else{r=0,p=w,T=M.x+y/2;let _=v.w-w,I=y>0?T+p/2+_/2:T-p/2-_/2;t.push({x:I,y:v.y,w:_,c:v.c,vx:Math.sign(y)*90,vy:-80,r:0}),s+=10,wn.pop(),e.push({s:`${v.name} +10`,x:360/2,y:v.y-34+a,t:0,c:"#7a6c99",size:15})}d.push({x:T,w:p,y:v.y,c:v.c,wob:1}),g()}function m(M,y,w,T,p,_=c){let I=Math.max(4,T*.14),A=M.createLinearGradient(y-T/2,0,y+T/2,0);A.addColorStop(0,ai(p,"#000000",.28)),A.addColorStop(.3,p),A.addColorStop(.55,ai(p,"#ffffff",.18)),A.addColorStop(1,ai(p,"#000000",.32)),M.fillStyle=A,M.beginPath(),M.moveTo(y-T/2,w),M.lineTo(y-T/2,w+_),M.ellipse(y,w+_,T/2,I,0,Math.PI,0,!0),M.lineTo(y+T/2,w),M.closePath(),M.fill(),M.fillStyle=ai(p,"#ffffff",.3),M.beginPath(),M.ellipse(y,w,T/2,I,0,0,7),M.fill(),M.strokeStyle=ai(p,"#000000",.12),M.lineWidth=1,M.stroke()}return{title:"\u{1F368} \uD30C\uB974\uD398 \uD0D1 \uC313\uAE30",desc:"\uC88C\uC6B0\uB85C \uBBF8\uB044\uB7EC\uC9C0\uB294 \uCE35\uC744 <b>\uD0ED</b>\uD574\uC11C \uB0B4\uB824\uB193\uC544\uC694.<br>\uC090\uC838\uB098\uC628 \uBD80\uBD84\uC740 <b>\uC798\uB824\uC11C</b> \uC810\uC810 \uC881\uC544\uC838\uC694! \uB531 \uB9DE\uCD94\uBA74 PERFECT \u2728<br>3\uBC88 \uC5F0\uC18D PERFECT\uBA74 \uB2E4\uC2DC \uC870\uAE08 \uB113\uC5B4\uC838\uC694. \uC644\uC804\uD788 \uBE57\uB098\uAC00\uBA74 \uB05D (45\uCD08)",buttons:[{label:"\u2B07\uFE0F \uB0B4\uB824\uB193\uAE30",act:x}],key(M){(M==="Space"||M==="Enter")&&x()},tap:x,update(M){n-=M,v&&(v.x+=v.dir*v.sp*M,v.x>360/2+f&&(v.x=360/2+f,v.dir=-1),v.x<360/2-f&&(v.x=360/2-f,v.dir=1));for(let T of t)T.vy+=1100*M,T.x+=T.vx*M,T.y+=T.vy*M,T.r+=M*3*Math.sign(T.vx);for(let T=t.length-1;T>=0;T--)t[T].y>h+400&&t.splice(T,1);let y=Math.max(0,h-S().y-230);a=ri(a,y,Math.min(1,M*4));for(let T of d)T.wob&&(T.wob=Math.max(0,T.wob-M*3));let w=d.length-1;return o&&(o.t+=M,o.t>1.3)?{score:s,msg:`${w}\uCE35 \uD30C\uB974\uD398\uB97C \uC313\uC558\uC5B4\uC694! \u{1F368}`}:n<=0?{score:s,msg:`${w}\uCE35 \uD30C\uB974\uD398 \uC644\uC131! \u{1F368}`}:null},draw(M,y,w){let T=M.createLinearGradient(0,0,0,560);T.addColorStop(0,"#e8f6ff"),T.addColorStop(1,"#ffe8f1"),M.fillStyle=T,M.fillRect(0,0,360,560),M.fillStyle="#ffffff70";for(let _=0;_<12;_++)M.beginPath(),M.arc(_*73%360,(_*131+a*.3)%560,18,0,7),M.fill();M.save(),M.translate(0,a);let p=360/2;M.fillStyle="#ffffffb8",M.strokeStyle="#c9e6f2",M.lineWidth=3,M.beginPath(),M.moveTo(p-u/2,h),M.lineTo(p+u/2,h),M.lineTo(p+28,h+62),M.lineTo(p-28,h+62),M.closePath(),M.fill(),M.stroke(),Dt(M,p-8,h+60,16,26,4),M.fill(),M.stroke(),M.beginPath(),M.ellipse(p,h+88,44,9,0,0,7),M.fill(),M.stroke(),M.fillStyle="#ffffff80",M.fillRect(p-u/2+14,h+6,6,40),M.beginPath(),M.ellipse(p,h,u/2,u*.14,0,0,7),M.fillStyle="#eef8fd",M.fill(),M.strokeStyle="#c9e6f2",M.stroke();for(let _=1;_<d.length;_++){let I=d[_],A=I.wob?Math.sin(I.wob*18)*3*I.wob:0;m(M,I.x+A,I.y,I.w,I.c)}if(!o&&d.length>1){let _=S();Ps(M,"\u{1F352}",_.x+_.w*.18,_.y-10,22)}for(let _ of t)M.save(),M.translate(_.x,_.y+c/2),M.rotate(_.r),m(M,0,-c/2,_.w,_.c),M.restore();if(v){let _=S();M.globalAlpha=.18,M.fillStyle="#5a3d6e",M.beginPath(),M.ellipse(v.x,_.y,v.w/2,Math.max(4,v.w*.14),0,0,7),M.fill(),M.globalAlpha=1,m(M,v.x,v.y-6+Math.sin(w*6)*2,v.w,v.c)}M.restore(),Mh(M,n,s),Yt(M,`${d.length-1}\uCE35`,360/2,70,17,"#e0457b",900),r>1&&Yt(M,`\u{1F525} PERFECT \uCF64\uBCF4 ${r}`,360/2,94,13,"#e0457b",800),Go(e,M,y)}}}function GS(){let i=[["\u{1F9CA}","\uC5BC\uC74C","#e3f4ff"],["\u{1F95B}","\uC6B0\uC720","#fffaf0"],["\u{1F353}","\uB538\uAE30","#f58aa6"],["\u{1F36B}","\uCD08\uCF54","#8a5638"],["\u{1FAE7}","\uD0C4\uC0B0","#c4ecff"],["\u{1F366}","\uC544\uC774\uC2A4\uD06C\uB9BC","#fff3cf"],["\u{1F352}","\uCCB4\uB9AC","#d6304a"],["\u{1F375}","\uB179\uCC28","#a5d07f"],["\u{1F34C}","\uBC14\uB098\uB098","#f6e08a"],["\u2615","\uCEE4\uD53C","#a0703f"]],e=["\uD06C\uB9BC\uC18C\uB2E4","\uB538\uAE30\uC6B0\uC720","\uCD08\uCF54\uB77C\uB5BC","\uB179\uCC28\uB77C\uB5BC","\uBC14\uB098\uB098\uC6B0\uC720","\uBA54\uB860\uC18C\uB2E4","\uCCB4\uB9AC\uD30C\uB974\uD398","\uC544\uC778\uC288\uD398\uB108"],t=[],n=60,s=0,r=0,a=null,o=0,l=0,c="show",h=0,u=[],f=0,d=0,v={st:"away",t:3},S=()=>{let m=_h(3+Math.floor(o/2),3,6);a={name:BS(e),seq:Array.from({length:m},()=>Math.floor(Math.random()*i.length))},c="show",h=Math.max(1.8,3-o*.1),u=[],v.st!=="away"&&(v.st="away"),v.t=Math.max(v.t,h+En(.8,1.6))};S();function g(m){if(c!=="make")return;if(v.st==="look"){l++,r=0,s=Math.max(0,s-40),f=-1,d=1,wn.bad(),t.push({s:"\uB4E4\uCF30\uB2E4! -40 \u{1F631}",x:360/2,y:330,t:0,c:"#e0457b",size:22});return}u.push(m),wn.pop();let M=u.length-1;if(a.seq[M]!==m){r=0,c="result",f=-1,wn.bad(),t.push({s:"\uC557, \uC21C\uC11C\uAC00 \uB2EC\uB77C\uC694! \u{1F623}",x:360/2,y:330,t:0,c:"#8a7bb8"}),setTimeout(S,900);return}if(u.length===a.seq.length){r++,o++;let y=Math.round(a.seq.length*20*(1+(r-1)*.25));s+=y,c="result",f=1,wn.good(),t.push({s:r>1?`\uCF64\uBCF4 ${r}! +${y}`:`\uC644\uBCBD\uD574\uC694! +${y}`,x:360/2,y:330,t:0,size:20}),setTimeout(S,800)}}function x(m,M,y,w,T){Dt(m,M-34,y+26,68,70,22),m.fillStyle="#f7f2ea",m.fill(),Dt(m,M-26,y+34,52,62,14),m.fillStyle="#7fc8a0",m.fill(),m.fillStyle="#ffe2cf",m.beginPath(),m.arc(M,y,30,0,7),m.fill(),m.fillStyle="#3f302f",w==="away"?(m.beginPath(),m.arc(M,y,31,0,7),m.fill(),m.beginPath(),m.ellipse(M+4,y+30+Math.sin(T*3)*2,9,18,.15,0,7),m.fill(),m.fillStyle="#ff9cc0",m.beginPath(),m.arc(M+2,y+12,5,0,7),m.fill()):w==="turn"?(m.beginPath(),m.arc(M,y,31,Math.PI*.35,Math.PI*1.75),m.fill(),m.beginPath(),m.arc(M-6,y-14,24,Math.PI,0),m.fill(),m.fillStyle="#3f302f",m.beginPath(),m.arc(M+14,y+2,3.2,0,7),m.fill()):(m.beginPath(),m.arc(M,y-6,30,Math.PI*1.02,Math.PI*1.98),m.fill(),m.fillRect(M-30,y-8,8,20),m.fillRect(M+22,y-8,8,20),m.fillStyle="#3f302f",m.beginPath(),m.arc(M-10,y+4,3.6,0,7),m.arc(M+10,y+4,3.6,0,7),m.fill(),m.strokeStyle="#c0606a",m.lineWidth=2,m.beginPath(),m.moveTo(M-6,y+16),m.lineTo(M+6,y+16),m.stroke(),m.fillStyle="#ffb3c6aa",m.beginPath(),m.arc(M-17,y+12,5,0,7),m.arc(M+17,y+12,5,0,7),m.fill());let p=w==="away"?"\u266A \uD765\uC5BC\uD765\uC5BC~":w==="turn"?"\uD760\u2026?":"\uBB50 \uD574\uC694? \u{1F440}";m.font='800 13px "Malgun Gothic",sans-serif';let _=m.measureText(p).width+20;Dt(m,M-_/2-6,y-66,_,26,13),m.fillStyle=w==="look"?"#ffe3ea":"#ffffff",m.fill(),Yt(m,p,M-6,y-53,13,w==="look"?"#e0457b":"#7a6c99",800),w==="turn"&&Yt(m,"\u2757",M+34,y-22,20)}return{title:"\u{1F92B} \uC0AC\uC7A5\uB2D8 \uBAB0\uB798 \uC8FC\uBB38\uBC1B\uAE30",desc:'\uC190\uB2D8 \uC8FC\uBB38\uC774 <b>3\uCD08</b> \uB3D9\uC548 \uBCF4\uC5EC\uC694. \uC0AC\uB77C\uC9C0\uBA74 \uC7AC\uB8CC\uB97C <b>\uC21C\uC11C\uB300\uB85C</b> \uACE8\uB77C\uC694.<br>\uB2E8, <b>\uC0AC\uC7A5\uB2D8\uC774 \uB3CC\uC544\uBCF4\uACE0 \uC788\uC744 \uB54C</b> \uB204\uB974\uBA74 \uB4E4\uCF1C\uC694! \u{1F631}<br>"\uD760\u2026?" \uD558\uBA74 \uC7A0\uAE50 \uBA48\uCD94\uAE30. \uC5F0\uC18D \uC815\uB2F5\uC774\uBA74 \uCF64\uBCF4 (60\uCD08)',buttons:i.map(([m,M],y)=>({label:`${m}<small>${M}</small>`,act:()=>g(y),cls:"ing"})),key(m){let M=parseInt(m.replace("Digit",""),10);isNaN(M)||g((M+9)%10)},update(m){if(n-=m,c==="show"&&(h-=m,h<=0&&(c="make")),v.t-=m,v.t<=0){let M=Math.min(1,o/8);v.st==="away"?(v.st="turn",v.t=ri(.75,.5,M)):v.st==="turn"?(v.st="look",v.t=En(1,1.8)):(v.st="away",v.t=En(ri(2.4,1.4,M),ri(3.8,2.6,M)))}return f*=.9,d=Math.max(0,d-m*3),n<=0?{score:s,msg:`\uC8FC\uBB38 ${o}\uAC1C \uC131\uACF5!${l?` (\uB4E4\uD0A8 \uD69F\uC218 ${l}\uBC88 \u{1F605})`:" \uD55C \uBC88\uB3C4 \uC548 \uB4E4\uCF30\uC5B4\uC694 \u{1F92B}"}`}:null},draw(m,M,y){m.save(),d&&m.translate(Math.sin(y*60)*6*d,0);let w=m.createLinearGradient(0,0,0,560);w.addColorStop(0,"#fff6e6"),w.addColorStop(1,"#f0f8e8"),m.fillStyle=w,m.fillRect(0,0,360,560),m.fillStyle="#e8d6c4",m.fillRect(0,196,360,8);for(let O=0;O<5;O++)Ps(m,["\u{1FAD9}","\u{1F36F}","\u{1F9C1}","\u{1FAD6}","\u{1F36A}"][O],30+O*36,184,20);x(m,294,120,v.st,y),Dt(m,16,54,210,118,16),m.fillStyle=f>.1?"#e3f8dc":f<-.1?"#ffe3ea":"#ffffff",m.fill(),m.strokeStyle="#f3d5e2",m.lineWidth=2.5,m.stroke(),Yt(m,`\u{1F9FE} ${a.name}`,121,76,15);let T=a.seq.length,p=Math.min(36,186/T);a.seq.forEach((O,U)=>{let G=121+(U-(T-1)/2)*p;if(c==="show")Ps(m,i[O][0],G,116,26);else{let H=u[U];H!==void 0?Ps(m,i[H][0],G,116,26):(Dt(m,G-14,102,28,28,8),m.fillStyle="#f1e9ff",m.fill(),Yt(m,"?",G,117,15,"#c6a6f0"))}}),c==="show"?(Dt(m,36,148,170,8,4),m.fillStyle="#f1e6ee",m.fill(),Dt(m,36,148,170*_h(h/3,0,1),8,4),m.fillStyle="#f48fb9",m.fill()):Yt(m,"\uC21C\uC11C\uB300\uB85C \uB2F4\uC544\uC694",121,152,12,"#9a8cc4",700),m.fillStyle="#f6c9d8",m.fillRect(0,470,360,90),m.fillStyle="#ffffff70",m.fillRect(0,470,360,6);let _=360/2,I=260,A=470,R=64,P=46,N=a.seq.length,b=(A-I-30)/N,D=O=>ri(P,R,(A-O)/(A-I));u.forEach((O,U)=>{let G=A-6-U*b,H=G-b,F=i[O][2],k=m.createLinearGradient(_-R,0,_+R,0);if(k.addColorStop(0,ai(F,"#000000",.2)),k.addColorStop(.4,F),k.addColorStop(1,ai(F,"#000000",.25)),m.fillStyle=k,m.beginPath(),m.moveTo(_-D(G)+4,G),m.lineTo(_-D(H)+4,H),m.lineTo(_+D(H)-4,H),m.lineTo(_+D(G)-4,G),m.closePath(),m.fill(),O===0)for(let W=0;W<3;W++)Dt(m,_-22+W*15,H+4,12,12,3),m.fillStyle="#ffffffcc",m.fill()}),m.strokeStyle="#bfe0ee",m.lineWidth=3,m.fillStyle="#ffffff40",m.beginPath(),m.moveTo(_-R,I),m.lineTo(_-P,A),m.lineTo(_+P,A),m.lineTo(_+R,I),m.fill(),m.stroke(),m.beginPath(),m.ellipse(_,I,R,10,0,0,7),m.stroke(),m.fillStyle="#ffffff90",m.fillRect(_-R+10,I+16,6,120),u.length===N&&f>.1&&(m.strokeStyle="#f48fb9",m.lineWidth=7,m.beginPath(),m.moveTo(_+18,I+40),m.lineTo(_+38,I-46),m.stroke()),r>1&&Yt(m,`\u{1F525} \uCF64\uBCF4 ${r}`,360/2,240,16,"#e0457b"),m.restore(),v.st==="look"&&c==="make"&&(m.strokeStyle=`rgba(240,80,120,${.45+Math.sin(y*10)*.2})`,m.lineWidth=14,m.strokeRect(0,0,360,560),Yt(m,"\uC9C0\uAE08 \uB204\uB974\uBA74 \uB4E4\uCF1C\uC694!",360/2,220,15,"#e0457b",900)),Mh(m,n,s),Go(t,m,M)}}}function VS(){let i=[],e=40,t=0,n=0,s=0,r=0,a=0,o=3,l=0,c=En(.8,1.6),h=0,u=0,f=0,d=["\u{1F964}","\u2615","\u{1F9CB}"],v=S=>()=>{r=S};return{title:"\u2615 \uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14",desc:"\uC7C1\uBC18\uC774 \uAE30\uC6B8\uBA74 <b>\u25C0 \u25B6</b>\uB85C \uBC18\uB300\uCABD\uC744 \uB20C\uB7EC \uADE0\uD615\uC744 \uC7A1\uC544\uC694.<br>\uB108\uBB34 \uAE30\uC6B8\uBA74 \uCEF5\uC774 \uB5A8\uC5B4\uC838\uC694! \uD14C\uC774\uBE14\uAE4C\uC9C0 \uC3DF\uC9C0 \uC54A\uACE0 \uC62E\uAE30\uAE30 (40\uCD08)",buttons:[{label:"\u25C0 \uC67C\uCABD",down:v(-1),up:v(0)},{label:"\uC624\uB978\uCABD \u25B6",down:v(1),up:v(0)}],key(S,g){(S==="ArrowLeft"||S==="KeyA")&&(r=g?-1:r===-1?0:r),(S==="ArrowRight"||S==="KeyD")&&(r=g?1:r===1?0:r)},pointer(S,g){r=g?S<360/2?-1:1:0},keyUp:!0,update(S){if(e-=S,h+=S,f-=S,c-=S,c<=0&&(s+=En(-1.6,1.6)*(1+u*.15),c=En(.5,1.3)-u*.04),s+=(-n*1.2+r*2.6+Math.sin(h*9)*.25)*S*3,s*=Math.pow(.35,S),n+=s*S,Math.abs(n)>.48&&f<=0&&(o--,f=.6,s*=-.4,n*=.6,wn.bad(),i.push({s:"\uC557 \uC3DF\uC558\uC5B4\uC694! \u{1F4A6}",x:360/2,y:210,t:0,c:"#8a7bb8"}),o<=0&&(a=0,o=3,n=0,s=0,i.push({s:"\uB2E4\uC2DC \uCE74\uC6B4\uD130\uC5D0\uC11C \uBC1B\uC544 \uC640\uC694",x:360/2,y:240,t:0,c:"#7a6c99",size:15}))),a+=S*(.16+u*.01),a>=1){let g=o*100;t+=g,l+=o,wn.win(),i.push({s:`\uC11C\uBE59 \uC644\uB8CC! ${o}\uC794 +${g}`,x:360/2,y:200,t:0,size:20}),a=0,o=3,u++,n*=.3}return e<=0?{score:t,msg:`\uC74C\uB8CC ${l}\uC794 \uBC30\uB2EC \uC131\uACF5!`}:null},draw(S,g,x){S.fillStyle="#e6f6dd",S.fillRect(0,0,360,560),S.fillStyle="#f6dce6",S.fillRect(0,400,360,160);for(let M=0;M<8;M++)S.fillStyle="#ffffff88",S.fillRect(((M*70-a*400)%430+360+70)%430-35,400,34,160);Mh(S,e,t),Dt(S,40,60,280,14,7),S.fillStyle="#ffffffaa",S.fill(),Dt(S,40,60,280*a,14,7),S.fillStyle="#9be08a",S.fill(),Ps(S,"\u{1F37D}\uFE0F",326,67,22),Ps(S,"\u{1F9D1}\u200D\u{1F373}",30,67,20),S.strokeStyle="#f1e6ee",S.lineWidth=10,S.beginPath(),S.arc(360/2,170,60,Math.PI*1.1,Math.PI*1.9),S.stroke(),S.strokeStyle="#9be08a",S.beginPath(),S.arc(360/2,170,60,Math.PI*1.5-.3,Math.PI*1.5+.3),S.stroke(),S.strokeStyle="#e0457b",S.lineWidth=4,S.beginPath(),S.moveTo(360/2,170),S.lineTo(360/2+Math.sin(n*1.6)*60,170-Math.cos(n*1.6)*60),S.stroke();let m=330+Math.abs(Math.sin(h*9))*6;S.fillStyle="#ffe6dc",S.beginPath(),S.arc(360/2,m-40,34,0,7),S.fill(),S.fillStyle="#4b3634",S.beginPath(),S.arc(360/2,m-50,34,Math.PI,0),S.fill(),S.fillStyle="#2b2125",S.beginPath(),S.arc(360/2-11,m-38,4,0,7),S.arc(360/2+11,m-38,4,0,7),S.fill(),Dt(S,360/2-26,m-6,52,64,16),S.fillStyle="#bfe2f1",S.fill(),S.save(),S.translate(360/2,m-90),S.rotate(n),Dt(S,-80,-6,160,12,6),S.fillStyle="#ffc2da",S.fill();for(let M=0;M<o;M++)Ps(S,d[M],-46+M*46,-28,34);S.restore(),Yt(S,"\u25C0 \u25B6 \uB97C \uB204\uB974\uACE0 \uC788\uC73C\uBA74 \uADF8\uCABD\uC73C\uB85C \uC7C1\uBC18\uC744 \uB4E4\uC5B4 \uC62C\uB824\uC694",360/2,520,12,"#9a8cc4",700),Go(i,S,g)}}}function WS(){let e=.5357142857142857,t=30,n=462,s=96,r=360/2,a=1.6,o=[360/2-108,360/2,360/2+108],l=["\u{1F353}","\u{1F351}","\u{1F347}"],c=["#ff6f91","#ffb36b","#a98bff"],h=[[523,659,784],[587,698,880],[659,784,988]],u=[];for(let b=4;b*e*.5<t-1.5;b++){let D=b*e*.5;if(b%2===0?Math.random()<.85:Math.random()<.38){let O=Math.floor(Math.random()*3);u.push({t:D,lane:O,hit:0}),D>t*.45&&b%2===0&&Math.random()<.28&&u.push({t:D,lane:(O+1+Math.floor(Math.random()*2))%3,hit:0,chord:!0})}}let f=[],d=[],v=[0,0,0],S=-1.2,g=0,x=0,m=0,M=0,y=0,w=0,T=!1,p=0,_=0,I=b=>1/(1+b*3.2),A=b=>s+(n-s)*b,R=(b,D)=>r+(b-r)*D;function P(b){N(b),v[b]=1;let D=null,O=1;for(let U of u)if(!U.hit&&U.lane===b){let G=Math.abs(U.t-S);G<O&&(O=G,D=U)}!D||O>.14||(D.hit=O<=.06?2:1,x++,m=Math.max(m,x),d.push({lane:b,t:0,p:D.hit===2}),D.hit===2?(M++,g+=100+x*5,f.push({s:x>2?`PERFECT \xD7${x}`:"PERFECT",x:o[b],y:n-50,t:0,c:"#ffd27a"})):(y++,g+=50,f.push({s:"GOOD",x:o[b],y:n-50,t:0,c:"#9fe0cf"})))}let N=b=>Ln(h[b][1]*2,.08,"square",.05);return{title:"\u{1F3B5} \uB5A1\uAF2C\uCE58 \uC18C\uC2A4 \uB9AC\uB4EC\uAC8C\uC784",desc:"\uACFC\uC77C \uC18C\uC2A4\uAC00 <b>\uC800 \uBA40\uB9AC\uC11C \uB2E4\uAC00\uC640\uC694!</b> \uD310\uC815\uC120 \uB3D9\uADF8\uB77C\uBBF8\uC5D0 \uB2FF\uC744 \uB54C \uADF8 \uC904\uC744 \uD0ED.<br>\uD6C4\uBC18\uC5D4 <b>\uB450 \uC904 \uB3D9\uC2DC</b> \uB178\uD2B8\uB3C4 \uB098\uC640\uC694. PERFECT\uB97C \uC774\uC5B4 \uAC00\uBA74 \uB5A1\uAF2C\uCE58\uC5D0 \uC18C\uC2A4\uAC00 \uADF8\uB824\uC838\uC694 (30\uCD08, \uC18C\uB9AC \uCF1C \uC8FC\uC138\uC694 \u{1F50A})",buttons:[0,1,2].map(b=>({label:l[b],down:()=>P(b),cls:"lane"})),key(b,D){if(!D)return;let O={ArrowLeft:0,KeyA:0,KeyJ:0,ArrowDown:1,KeyS:1,KeyK:1,ArrowRight:2,KeyD:2,KeyL:2}[b];O!==void 0&&P(O)},pointer(b,D){D&&P(b<360/3?0:b<360*2/3?1:2)},update(b){if(!T){T=!0;let O=yh();_=O?O.currentTime+1.2:0}let D=ur;for(S=D&&_?D.currentTime-_:S+b;p*e*.5<S+.2&&p*e*.5<t;){let O=p*e*.5-S;O>-.05&&(p%2===0?Ln(90,.12,"sine",.25,Math.max(0,O)):kS(.04,.05,Math.max(0,O))),p++}for(let O of u)!O.hit&&S-O.t>.15&&(O.hit=-1,w++,x=0,f.push({s:"MISS",x:o[O.lane],y:n-34,t:0,c:"#b8acd8",size:15}));for(let O=0;O<3;O++)v[O]=Math.max(0,v[O]-b*5);return S>=t?{score:g,msg:`PERFECT ${M} \xB7 GOOD ${y} \xB7 MISS ${w} \xB7 \uCD5C\uB300 \uCF64\uBCF4 ${m}`}:null},draw(b,D,O){let U=S>0?Math.pow(1-S/e%1,3):0,G=b.createLinearGradient(0,0,0,560);G.addColorStop(0,"#1f1840"),G.addColorStop(.5,"#3a2a66"),G.addColorStop(1,"#6b4a8a"),b.fillStyle=G,b.fillRect(0,0,360,560);for(let B=0;B<4;B++){let Z=40+B*93,X=b.createRadialGradient(Z,0,0,Z,0,160);X.addColorStop(0,`rgba(${B%2?"255,150,200":"160,140,255"},${.18+U*.3})`),X.addColorStop(1,"rgba(0,0,0,0)"),b.fillStyle=X,b.fillRect(Z-160,0,320,200)}for(let B=0;B<18;B++)b.fillStyle=`rgba(255,255,255,${.3+.3*Math.sin(O*2+B)})`,b.fillRect(B*67%360,B*29%90,2,2);let H=I(1.35),F=(560-s)/(n-s),k=(B,Z,X)=>{b.fillStyle=X,b.beginPath(),b.moveTo(R(B,H),A(H)),b.lineTo(R(Z,H),A(H)),b.lineTo(R(Z,F),560),b.lineTo(R(B,F),560),b.closePath(),b.fill()};k(o[0]-58,o[2]+58,"#2a2150"),o.forEach((B,Z)=>k(B-50,B+50,v[Z]?`rgba(255,255,255,${.06+v[Z]*.18})`:"#ffffff0d"));for(let B=Math.floor(Math.max(0,S)/e);B<Math.floor(Math.max(0,S)/e)+6;B++){let Z=(B*e-S)/a;if(Z<0||Z>1.35)continue;let X=I(Z),se=A(X);b.strokeStyle=`rgba(255,210,122,${.25*X})`,b.lineWidth=1+X*2,b.beginPath(),b.moveTo(R(o[0]-58,X),se),b.lineTo(R(o[2]+58,X),se),b.stroke()}b.strokeStyle="#ffffff30",b.lineWidth=2,[o[0]-58,o[0]+54,o[1]+54,o[2]+58].forEach(B=>{b.beginPath(),b.moveTo(R(B,H),A(H)),b.lineTo(R(B,F),560),b.stroke()}),b.strokeStyle=`rgba(255,210,122,${.7+U*.3})`,b.lineWidth=4,b.beginPath(),b.moveTo(R(o[0]-58,1),n),b.lineTo(R(o[2]+58,1),n),b.stroke(),o.forEach((B,Z)=>{b.strokeStyle=c[Z],b.lineWidth=3+v[Z]*3,b.beginPath(),b.ellipse(B,n,34,13,0,0,7),b.stroke()});let W=u.filter(B=>!B.hit).map(B=>({n:B,d:(B.t-S)/a})).filter(B=>B.d<1.35&&B.d>-.2).sort((B,Z)=>Z.d-B.d);for(let{n:B,d:Z}of W){let X=I(Math.max(Z,-.15)),se=R(o[B.lane],X),he=A(X);b.fillStyle=`rgba(0,0,0,${.3*X})`,b.beginPath(),b.ellipse(se,he+4*X,26*X,9*X,0,0,7),b.fill(),B.chord&&(b.strokeStyle="#ffffffaa",b.lineWidth=2*X,b.beginPath(),b.arc(se,he-18*X,26*X,0,7),b.stroke()),Ps(b,l[B.lane],se,he-18*X,48*X)}for(let B=d.length-1;B>=0;B--){let Z=d[B];Z.t+=D;let X=Z.t/.4,se=o[Z.lane];b.globalAlpha=Math.max(0,1-X),b.strokeStyle=Z.p?"#ffd27a":"#9fe0cf",b.lineWidth=4,b.beginPath(),b.ellipse(se,n,34+X*40,13+X*15,0,0,7),b.stroke();for(let he=0;he<6;he++){let q=he/6*Math.PI*2;b.fillStyle=c[Z.lane],b.beginPath(),b.arc(se+Math.cos(q)*X*60,n-14+Math.sin(q)*X*26-X*20,3.5,0,7),b.fill()}b.globalAlpha=1,Z.t>.4&&d.splice(B,1)}b.strokeStyle="#d9b07a",b.lineWidth=6,b.lineCap="round",b.beginPath(),b.moveTo(40,528),b.lineTo(320,528),b.stroke();for(let B=0;B<4;B++){let Z=b.createLinearGradient(0,508,0,548);Z.addColorStop(0,"#fbe3b8"),Z.addColorStop(1,"#d99a55"),Dt(b,62+B*62,508,54,40,12),b.fillStyle=Z,b.fill()}let J=Math.min(1,M/30);b.strokeStyle="#d33a2c",b.lineWidth=5,b.beginPath();for(let B=0;B<=40*J;B++)b.lineTo(66+B*6,514+B%2*26);b.stroke(),Dt(b,10,10,110,34,17),b.fillStyle="#ffffffcc",b.fill(),Yt(b,`\u23F1 ${Math.max(0,Math.ceil(t-S))}\uCD08`,65,27,15),Dt(b,220,10,130,34,17),b.fillStyle="#ffffffcc",b.fill(),Yt(b,`\uC810\uC218 ${g}`,285,27,15,"#e0457b"),x>1&&Yt(b,`${x} COMBO`,360/2,70+U*-4,24+U*4,"#ffd27a",900),S<0&&Yt(b,S<-.6?"\uC900\uBE44~":"\uC2DC\uC791!",360/2,260,34,"#fff",900),Go(f,b,D)}}}var XS={grill:zS,parfait:HS,order:GS,serving:VS,rhythm:WS},cd=[["grill","\u{1F361}","\uB5A1\uAF2C\uCE58 \uAD7D\uAE30","\uAF2C\uCE58 3\uAC1C \uB3D9\uC2DC\uC5D0 \uAD7D\uAE30"],["parfait","\u{1F368}","\uD30C\uB974\uD398 \uD0D1 \uC313\uAE30","\uB531 \uB9DE\uCDB0 \uB192\uC774 \uC313\uAE30"],["order","\u{1F92B}","\uC0AC\uC7A5\uB2D8 \uBAB0\uB798 \uC8FC\uBB38\uBC1B\uAE30","\uC678\uC6B0\uACE0\xB7\uB208\uCE58 \uBCF4\uAE30"],["serving","\u2615","\uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14","\uC9C4\uC9DC \uCE74\uD398\uC5D0\uC11C \uC74C\uB8CC \uBC30\uB2EC"],["rhythm","\u{1F3B5}","\uB5A1\uAF2C\uCE58 \uC18C\uC2A4 \uB9AC\uB4EC\uAC8C\uC784","3D \uB808\uC778 \uBC15\uC790 \uB9DE\uCD94\uAE30"]];function S0({showToast:i,coins:e}){let n=(x=>document.getElementById(x))("mini"),s=null,r=null,a=0,o=0,l=null,c=!1,h=x=>{try{return+localStorage.getItem("sh-best-"+x)||0}catch{return 0}},u=(x,m)=>{try{localStorage.setItem("sh-best-"+x,m)}catch{}};function f(x,m){r=x,l=m||null,c=!1,s=XS[x](),n.innerHTML=`<div class="mcard"><div class="ghead"><b>${s.title}</b><span class="mbest">\uCD5C\uACE0 ${h(r)}</span><button class="x" data-a="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="mstage"><canvas width="${360*2}" height="${560*2}"></canvas>
        <div class="mintro"><p>${s.desc}</p><button class="go" data-a="start">\u25B6 \uC2DC\uC791! <small class="fee">\u{1FA99} 500</small></button></div></div>
      <div class="mbtns">${s.buttons.map((M,y)=>`<button data-b="${y}" class="${M.cls||""}">${M.label}</button>`).join("")}</div></div>`,n.hidden=!1}function d(){if(e&&!e.pay())return;n.querySelector(".mintro").remove(),yh();let x=n.querySelector("canvas"),m=x.getContext("2d");m.setTransform(2,0,0,2,0,0);let M=0;o=performance.now();let y=w=>{if(!s)return;let T=Math.min(.05,(w-o)/1e3);o=w,M+=T;let p=s.update(T);if(s.draw(m,T,M),p&&!c)return v(p);a=requestAnimationFrame(y)};a=requestAnimationFrame(y)}function v(x){c=!0,cancelAnimationFrame(a);let m=h(r),M=x.score>m;M&&u(r,x.score);let y=e?e.add(e.fromScore(r,x.score)):0;wn.win();let w=document.createElement("div");w.className="mintro",w.innerHTML=`<h3>${M?"\u{1F389} \uCD5C\uACE0 \uAE30\uB85D!":"\uC218\uACE0\uD588\uC5B4\uC694! \u2728"}</h3><p class="mscore">${x.score}\uC810</p>${y?`<p class="mcoin">\u{1FA99} +${y.toLocaleString("ko-KR")} \uCF54\uC778 \uD68D\uB4DD!</p>`:""}<p>${x.msg}</p><p class="mprev">\uCD5C\uACE0 \uAE30\uB85D ${Math.max(m,x.score)}\uC810</p>
      <button class="go" data-a="again">\u{1F501} \uB2E4\uC2DC \uD558\uAE30 <small class="fee">\u{1FA99} 500</small></button><button class="gsub" data-a="close">${l?"\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30":"\uB2EB\uAE30"}</button>`,n.querySelector(".mstage").appendChild(w),n.querySelector(".mbest").textContent=`\uCD5C\uACE0 ${Math.max(m,x.score)}`}function S(){cancelAnimationFrame(a),s=null,n.hidden=!0,n.innerHTML="";let x=l;l=null,x&&x(c)}n.addEventListener("click",x=>{let m=x.target.closest("button");if(m){if(m.dataset.a==="start"&&d(),m.dataset.a==="close"&&S(),m.dataset.a==="again"){let M=l;l=null,f(r,M),d()}if(m.dataset.b!==void 0&&s){let M=s.buttons[+m.dataset.b];M.act&&M.act()}}}),n.addEventListener("pointerdown",x=>{let m=x.target.closest("[data-b]");if(m&&s){let p=s.buttons[+m.dataset.b];p.down&&(x.preventDefault(),p.down());return}let M=x.target.closest("canvas");if(!M||!s||n.querySelector(".mintro"))return;let y=M.getBoundingClientRect(),w=(x.clientX-y.left)*360/y.width,T=(x.clientY-y.top)*560/y.height;s.tapAt?s.tapAt(w,T):s.pointer?s.pointer(w,!0):s.tap&&s.tap()});let g=x=>{if(!s)return;let m=x.target.closest&&x.target.closest("[data-b]");if(m){let M=s.buttons[+m.dataset.b];M.up&&M.up()}else s.pointer&&s.pointer.length&&s.pointer(0,!1)};return n.addEventListener("pointerup",g),n.addEventListener("pointercancel",g),n.addEventListener("pointerleave",g),addEventListener("keydown",x=>{if(!(n.hidden||!s)){if(x.code==="Escape")return S();if(n.querySelector(".mintro")&&!c&&(x.code==="Space"||x.code==="Enter"))return x.preventDefault(),d();s.key&&(x.preventDefault(),s.key(x.code,!0))}}),addEventListener("keyup",x=>{!n.hidden&&s&&s.key&&s.keyUp&&s.key(x.code,!1)}),{open:f,get isOpen(){return!n.hidden},result(x,m,M){i(`${x} \xB7 ${m}\uC810 ${M||""}`)}}}var Sh={title:"\uBB35\uCC0C\uBE60 \uC2B9\uB9AC \uCFE0\uD3F0",benefit:"\uC18C\uD488 10% \uD560\uC778",note:"\uC624\uD504\uB77C\uC778 \uB9E4\uC7A5 \uACC4\uC0B0\uB300\uC5D0\uC11C \uC9C1\uC6D0\uC5D0\uAC8C \uBCF4\uC5EC \uC8FC\uC138\uC694",days:30},la={muk:{emo:"\u270A",name:"\uBB35"},jji:{emo:"\u270C\uFE0F",name:"\uCC0C"},ppa:{emo:"\u{1F590}\uFE0F",name:"\uBE60"}},b0={muk:"jji",jji:"ppa",ppa:"muk"},T0=i=>i[Math.floor(Math.random()*i.length)],E0=i=>new Promise(e=>setTimeout(e,i));function w0({showToast:i,npcs:e,capture:t,views:n,minis:s,treasure:r,serving:a,coins:o}){let l=()=>!o||o.pay(),c=q=>o?o.add(q):0,h=q=>q?`<p class="mcoin">\u{1FA99} +${q.toLocaleString("ko-KR")} \uCF54\uC778 \uD68D\uB4DD!</p>`:"",u=q=>document.getElementById(q),f=e.find(q=>q.id==="shop"),d=e.find(q=>q.id==="cafe"),v=(q,re=3500)=>{f&&(clearTimeout(v.t),f.el.textContent=q,v.t=setTimeout(()=>f.el.textContent="\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}",re))},S=u("mjp"),g=null,x=!1;function m(){l()&&(g={me:0,boss:0,round:1,attacker:null,log:"\uAC00\uC704\uBC14\uC704\uBCF4\uB85C \uACF5\uACA9\uD560 \uC0AC\uB78C\uC744 \uC815\uD574\uC694!"},S.hidden=!1,y("?","?"),v("\uBB35\uCC0C\uBE60 \uD55C \uD310 \uD574\uC694! \uC0BC\uC138\uD310\uC774\uC5D0\uC694 \u270A\u270C\uFE0F\u{1F590}\uFE0F",5e3))}let M=()=>{S.hidden=!0,g=null};function y(q,re,fe=!1){let ne=g.attacker==="me"?"\uB0B4\uAC00 \uACF5\uACA9 \uC911 \u{1F525}":g.attacker==="boss"?"\uC0AC\uC7A5\uB2D8\uC774 \uACF5\uACA9 \uC911 \u{1F525}":"\uAC00\uC704\uBC14\uC704\uBCF4!";S.innerHTML=`<div class="gcard">
      <div class="ghead"><b>\u270A \uC0AC\uC7A5\uB2D8\uACFC \uBB35\uCC0C\uBE60 \uC0BC\uC138\uD310</b><button class="x" data-g="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="gscore"><span>\uB098 <i>${g.me}</i></span><small>${g.round}\uD310\uC9F8 \xB7 2\uBC88 \uBA3C\uC800 \uC774\uAE30\uBA74 \uC2B9\uB9AC</small><span><i>${g.boss}</i> \uC0AC\uC7A5\uB2D8</span></div>
      <div class="garena ${fe?"shake":""}"><div><em>${q}</em><small>\uB098</small></div><b>VS</b><div><em>${re}</em><small>\uC0AC\uC7A5\uB2D8</small></div></div>
      <p class="gturn">${ne}</p><p class="glog">${g.log}</p>${g.done?h(g.coins):""}
      ${g.done?g.done==="win"?`<div class="gcoupon"><img alt="\uCFE0\uD3F0" src="${_().toDataURL("image/png")}"><button class="go" data-g="coupon">\u{1F4F2} \uCFE0\uD3F0 \uC774\uBBF8\uC9C0 \uC800\uC7A5</button><button class="gsub" data-g="close">\uB2EB\uAE30</button></div>`:'<button class="go" data-g="again">\u{1F501} \uB2E4\uC2DC \uB3C4\uC804 <small class="fee">\u{1FA99} 500</small></button>':`<div class="ghands">${Object.entries(la).map(([Re,ie])=>`<button data-h="${Re}" ${x?"disabled":""}><em>${ie.emo}</em>${ie.name}</button>`).join("")}</div>`}
    </div>`}async function w(q){if(x||!g||g.done)return;x=!0;let re=T0(Object.keys(la));for(let Re of["muk","jji","ppa"])g.log=g.attacker?`${la[Re].name}!`:["\uAC00\uC704","\uBC14\uC704","\uBCF4!"][Object.keys(la).indexOf(Re)],y("\u270A","\u270A",!0),await E0(260);let fe=la[q],ne=la[re];if(!g.attacker)q===re?g.log=`\uB458 \uB2E4 ${fe.name}! \uB2E4\uC2DC \uAC00\uC704\uBC14\uC704\uBCF4 \u{1F648}`:(g.attacker=b0[q]===re?"me":"boss",g.log=g.attacker==="me"?"\uB0B4\uAC00 \uC774\uACBC\uC5B4\uC694! \uC774\uC81C \uB0B4\uAC00 \uACF5\uACA9, \uAC19\uC740 \uAC78 \uB0B4\uAC8C \uB9CC\uB4E4\uC5B4\uC694":"\uC0AC\uC7A5\uB2D8\uC774 \uC774\uACBC\uC5B4\uC694! \uC0AC\uC7A5\uB2D8 \uACF5\uACA9, \uB2E4\uB978 \uAC78 \uB0B4\uC57C \uBC84\uD168\uC694");else if(q===re){let Re=g.attacker==="me";if(Re?g.me++:g.boss++,g.log=Re?`\uB458 \uB2E4 ${fe.name}! \uB0B4\uAC00 \uC774\uBC88 \uD310 \uC2B9\uB9AC \u{1F389}`:`\uB458 \uB2E4 ${fe.name}! \uC0AC\uC7A5\uB2D8\uC774 \uC774\uBC88 \uD310 \uC2B9\uB9AC \u{1F61D}`,v(Re?"\uC557 \uC84C\uB2E4\u2026! \u{1F633}":"\uC81C\uAC00 \uC774\uACBC\uC8E0? \u{1F60E}"),g.attacker=null,g.round++,(g.me>=2||g.boss>=2)&&(g.done=g.me>=2?"win":"lose",g.log=g.done==="win"?`${g.me} : ${g.boss} \uC0BC\uC138\uD310 \uC2B9\uB9AC! \uCFE0\uD3F0\uC744 \uB4DC\uB9B4\uAC8C\uC694 \u{1F381}`:`${g.me} : ${g.boss} \uC544\uC27D\uAC8C \uC84C\uC5B4\uC694\u2026 \uB2E4\uC2DC \uB3C4\uC804\uD574 \uBCFC\uAE4C\uC694?`,v(g.done==="win"?"\uCD95\uD558\uD574\uC694! \uCFE0\uD3F0 \uB4DC\uB9B4\uAC8C\uC694 \u{1F381}":"\uB2E4\uC74C\uC5D0 \uB610 \uB3C4\uC804\uD574\uC694! \u{1F606}",6e3),g.coins=c(g.done==="win"?1500:200),g.done==="win")){p();try{localStorage.setItem("sh-coupon",JSON.stringify(T))}catch{}}}else g.attacker=b0[q]===re?"me":"boss",g.log=`${fe.name} vs ${ne.name} \u2192 ${g.attacker==="me"?"\uACF5\uACA9\uAD8C\uC774 \uB098\uC5D0\uAC8C!":"\uACF5\uACA9\uAD8C\uC774 \uC0AC\uC7A5\uB2D8\uAED8!"}`;x=!1,y(fe.emo,ne.emo)}let T=null;function p(){let q="SH-"+Math.random().toString(36).slice(2,6).toUpperCase()+"-"+String(Date.now()%1e4).padStart(4,"0"),re=new Date(Date.now()+Sh.days*864e5);T={code:q,issued:oa(),until:`${re.getFullYear()}.${String(re.getMonth()+1).padStart(2,"0")}.${String(re.getDate()).padStart(2,"0")}`}}function _(){T||p();let q=1080,re=600,fe=document.createElement("canvas");fe.width=q,fe.height=re;let ne=fe.getContext("2d"),Re=ne.createLinearGradient(0,0,q,re);Re.addColorStop(0,"#ffe3ef"),Re.addColorStop(1,"#e4f6ea"),ne.fillStyle=Re,ne.fillRect(0,0,q,re),ne.fillStyle="#ffffff66";for(let _e=30;_e<re;_e+=60)for(let le=_e/60%2?30:60;le<q;le+=60)ne.beginPath(),ne.arc(le,_e,10,0,7),ne.fill();ne.fillStyle="#fffdfb",ne.beginPath(),ne.roundRect(40,40,q-80,re-80,36),ne.fill(),ne.setLineDash([14,10]),ne.strokeStyle="#f48fb9",ne.lineWidth=5,ne.beginPath(),ne.roundRect(56,56,q-112,re-112,28),ne.stroke(),ne.setLineDash([]),ne.strokeStyle="#f3c6d8",ne.lineWidth=3,ne.beginPath(),ne.moveTo(760,80),ne.lineTo(760,re-80),ne.stroke(),ne.textAlign="left",ne.fillStyle="#f27fae",ne.font='700 40px "Gamja Flower", sans-serif',ne.fillText("\uC218\uC9D1\uC218\uC9D1 \xD7 \uC218\uC787\uD574\uD53C",100,130),ne.fillStyle="#4a3f66",ne.font='900 34px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',ne.fillText(Sh.title+" \u270A\u270C\uFE0F\u{1F590}\uFE0F",100,190),ne.fillStyle="#e0457b",ne.font='900 84px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',ne.fillText(Sh.benefit,100,310),ne.fillStyle="#7a6c99",ne.font='600 26px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',ne.fillText(Sh.note,100,380),ne.fillText(`\uBC1C\uAE09 ${T.issued} \xB7 ${T.until}\uAE4C\uC9C0 \xB7 1\uC778 1\uD68C`,100,420),ne.fillStyle="#4a3f66",ne.font="800 30px ui-monospace, Consolas, monospace",ne.fillText(T.code,100,480);let ie=new Image;return ie.src=gi("staff",1),ie.complete&&ne.drawImage(ie,790,150,240,240),ne.textAlign="center",ne.fillStyle="#f27fae",ne.font='700 34px "Gamja Flower", sans-serif',ne.fillText("\uC0AC\uC7A5\uB2D8\uC744 \uC774\uACBC\uC5B4\uC694!",910,440),fe}{let q=new Image;q.src=gi("staff",1)}S.addEventListener("click",async q=>{let re=q.target.closest("button");if(!re)return;if(re.dataset.h)return w(re.dataset.h);let fe=re.dataset.g;if(fe==="close"&&M(),fe==="again"&&m(),fe==="coupon"){let ne=await aa(_(),`suithappy-coupon-${T.code}.jpg`);i(ne==="downloaded"?"\u{1F4BE} \uCFE0\uD3F0\uC744 \uC800\uC7A5\uD588\uC5B4\uC694":ne==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}});let I=u("spot"),A=Array.from({length:n},(q,re)=>re),R=null,P=[],N=null,b=Object.keys(lr).flatMap(q=>lr[q].stickers.map((re,fe)=>[q,fe]));function D(q){N=q||null,P.length||(P=A.slice().sort(()=>Math.random()-.5)),I.hidden=!1,U()}function O(){I.hidden=!0;let q=N;N=null,R=null,q&&q(!1)}async function U(){if(P.length||(P=A.slice().sort(()=>Math.random()-.5)),!l()){O();return}let q=P.pop();I.innerHTML=`<div class="spwrap"><div class="ghead"><b>\u{1F50D} \uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30</b><span class="spcount">\uBD88\uB7EC\uC624\uB294 \uC911\u2026</span><button class="gsub" data-s="hint">\u{1F4A1} \uD78C\uD2B8</button><button class="x" data-s="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="sppair"><div class="spimg"><canvas></canvas><small>\uC6D0\uB798 \uADF8\uB9BC</small></div><div class="spimg"><canvas></canvas><small>\uB2E4\uB978 \uACF3 5\uAC1C\uB97C \uCC3E\uC544\uC694</small></div></div>
      <p class="spmsg">${N?"\uB2E4 \uCC3E\uC73C\uBA74 \uC8FC\uBB38\uD55C \uBA54\uB274\uAC00 \uB098\uC640\uC694! \u2615":"\uB450 \uADF8\uB9BC \uC911 \uC544\uBB34 \uCABD\uC774\uB098 \uB2E4\uB978 \uACF3\uC744 \uB20C\uB7EC\uC694"}</p></div>`,await E0(30);let re=t(q),[fe,ne]=I.querySelectorAll("canvas"),Re=re.width,ie=re.height;for(let _e of[fe,ne])_e.width=Re,_e.height=ie,_e.getContext("2d").drawImage(re,0,0);R={W:Re,H:ie,ca:fe,cb:ne,base:fe.getContext("2d").getImageData(0,0,Re,ie),diffs:G(ne,Re,ie),found:0,miss:0,hints:0},H(),F()}function G(q,re,fe){let ne=q.getContext("2d"),Re=[],ie=["hue","flip","sticker","erase","swap","hue","sticker"].sort(()=>Math.random()-.5),_e=0;for(;Re.length<5&&_e++<400;){let le=Math.round(re*(.08+Math.random()*.05)),ve=Math.round(re*.05+Math.random()*(re*.9-le)),pe=Math.round(fe*.06+Math.random()*(fe*.88-le));if(Re.some(Oe=>Math.abs(Oe.x-ve)<(Oe.s+le)/2+30&&Math.abs(Oe.y-pe)<(Oe.s+le)/2+30))continue;let Fe=ie[Re.length],ze={x:ve,y:pe,s:le,k:Fe,hit:!1};if(Fe==="hue"||Fe==="swap"){let Oe=ne.getImageData(ve,pe,le,le),$e=Oe.data,Qe=(100+Math.random()*140)*Math.PI/180,$=Math.cos(Qe),mt=Math.sin(Qe),Ze=[.299+.701*$+.168*mt,.587-.587*$+.33*mt,.114-.114*$-.497*mt,.299-.299*$-.328*mt,.587+.413*$+.035*mt,.114-.114*$+.292*mt,.299-.3*$+1.25*mt,.587-.588*$-1.05*mt,.114+.886*$-.203*mt];for(let ue=0;ue<$e.length;ue+=4){let j=$e[ue],Me=$e[ue+1],xe=$e[ue+2];if(Fe==="swap"){$e[ue]=xe,$e[ue+2]=j;continue}$e[ue]=Ze[0]*j+Ze[1]*Me+Ze[2]*xe,$e[ue+1]=Ze[3]*j+Ze[4]*Me+Ze[5]*xe,$e[ue+2]=Ze[6]*j+Ze[7]*Me+Ze[8]*xe}ne.putImageData(Oe,ve,pe)}else if(Fe==="flip"){let Oe=document.createElement("canvas");Oe.width=Oe.height=le,Oe.getContext("2d").drawImage(q,ve,pe,le,le,0,0,le,le),ne.save(),ne.translate(ve+le,pe),ne.scale(-1,1),ne.drawImage(Oe,0,0),ne.restore(),Math.random()<.5&&(ne.save(),ne.translate(ve,pe+le),ne.scale(1,-1),ne.drawImage(Oe,0,0),ne.restore())}else if(Fe==="sticker"){let Oe=new Image,[$e,Qe]=T0(b);Oe.src=gi($e,Qe),Oe.decode().then(()=>ne.drawImage(Oe,ve,pe,le,le)).catch(()=>{})}else{let Oe=ve+le+12<re-le?ve+le+12:ve-le-12,$e=document.createElement("canvas");$e.width=$e.height=le;let Qe=$e.getContext("2d");Qe.drawImage(q,Oe,pe,le,le,0,0,le,le);let $=Qe.createRadialGradient(le/2,le/2,le*.3,le/2,le/2,le*.5);$.addColorStop(0,"#000"),$.addColorStop(1,"rgba(0,0,0,0)"),Qe.globalCompositeOperation="destination-in",Qe.fillStyle=$,Qe.fillRect(0,0,le,le),ne.drawImage($e,ve,pe)}Re.push(ze)}return Re}function H(){for(let q of[R.ca,R.cb]){let re=q.getContext("2d");for(let fe of R.diffs)fe.hit&&(re.lineWidth=Math.max(4,R.W/200),re.strokeStyle="#ff3d8b",re.shadowColor="#fff",re.shadowBlur=6,re.beginPath(),re.arc(fe.x+fe.s/2,fe.y+fe.s/2,fe.s*.72,0,7),re.stroke(),re.shadowBlur=0)}}let F=()=>{let q=I.querySelector(".spcount");q&&R&&(q.textContent=`\uCC3E\uC740 \uACF3 ${R.found} / 5`)};I.addEventListener("click",q=>{let re=q.target.closest("button");if(re&&re.dataset.s==="close")return O();if(re&&re.dataset.s==="next")return U();if(re&&re.dataset.s==="done"){let ve=N;N=null,I.hidden=!0,R=null,ve&&ve(!0);return}if(re&&re.dataset.s==="hint"&&R){let ve=R.diffs.find(pe=>!pe.hit);if(!ve)return;R.hints++;for(let pe of[R.ca,R.cb]){let Fe=pe.getBoundingClientRect(),ze=document.createElement("div");ze.className="sphint";let Oe=Fe.width/R.W;Object.assign(ze.style,{left:Fe.left+(ve.x-ve.s*.3)*Oe+"px",top:Fe.top+(ve.y-ve.s*.3)*Oe+"px",width:ve.s*1.6*Oe+"px",height:ve.s*1.6*Oe+"px"}),document.body.appendChild(ze),setTimeout(()=>ze.remove(),1400)}return}let fe=q.target.closest("canvas");if(!fe||!R)return;let ne=fe.getBoundingClientRect(),Re=(q.clientX-ne.left)*R.W/ne.width,ie=(q.clientY-ne.top)*R.H/ne.height,_e=R.W*.02,le=R.diffs.find(ve=>!ve.hit&&Re>ve.x-_e&&Re<ve.x+ve.s+_e&&ie>ve.y-_e&&ie<ve.y+ve.s+_e);if(le){if(le.hit=!0,R.found++,H(),F(),c(100),R.found===5){let ve=c(Math.max(0,300-R.miss*20-R.hints*80));I.querySelector(".spmsg").innerHTML=`\u{1F389} \uB2E4 \uCC3E\uC558\uC5B4\uC694! ${R.miss?`(\uD5DB\uD074\uB9AD ${R.miss}\uBC88)`:"\uD55C \uBC88\uB3C4 \uC548 \uD2C0\uB838\uC5B4\uC694!"} \xB7 \u{1FA99} ${(500+ve).toLocaleString("ko-KR")} \uCF54\uC778 \uD68D\uB4DD
          ${N?'<button class="go" data-s="done">\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30</button>':'<button class="go" data-s="next">\uB2E4\uC74C \uADF8\uB9BC \u25B6 <small class="fee">\u{1FA99} 500</small></button>'}`}}else{R.miss++;let ve=q.clientX,pe=q.clientY,Fe=document.createElement("div");Fe.className="spmiss",Fe.textContent="\u2715",Object.assign(Fe.style,{left:ve+"px",top:pe+"px"}),document.body.appendChild(Fe),setTimeout(()=>Fe.remove(),600)}});let k=u("gmenu"),W=null,J=[["mjp","\u270A\u270C\uFE0F\u{1F590}\uFE0F","\uBB35\uCC0C\uBE60 \uC0BC\uC138\uD310","\uC774\uAE30\uBA74 \uC624\uD504\uB77C\uC778 \uCFE0\uD3F0 \u{1F381}"],["spot","\u{1F50D}","\uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30","\uB9E4\uC7A5 \uC18D \uB2E4\uB978 \uACF3 5\uAC1C"],["treasure","\u2B50","\uBE44\uBC00 \uBCF4\uBB3C\uCC3E\uAE30","\uC228\uC740 \uBCC4\uC0AC\uD0D5 7\uAC1C \xB7 90\uCD08"]];function B(q="shop",re=null){W=re;let fe=q==="shop",ne=fe?J:cd;k.innerHTML=`<div class="gcard"><div class="ghead"><b>${fe?"\u{1F380} \uC18C\uD488\uC0F5 \uC0AC\uC7A5\uB2D8":"\u2615 \uCE74\uD398 \uC9C1\uC6D0"}</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${fe?"\uC5B4\uC11C \uC624\uC138\uC694! \uC2EC\uC2EC\uD558\uBA74 \uC800\uB791 \uAC8C\uC784 \uD55C \uD310 \uD560\uB798\uC694? \u{1F60A}":re?"\uAC8C\uC784 \uD55C \uD310 \uD558\uB294 \uB3D9\uC548 \uBA54\uB274 \uB9CC\uB4E4\uC5B4 \uB458\uAC8C\uC694! \u{1F353}":"\uCE74\uD398 \uC54C\uBC14 \uCCB4\uD5D8 \uD574 \uBCFC\uB798\uC694? \uC7AC\uBC0C\uC5B4\uC694 \u{1F606}"}</p>
      <div class="gpick ${ne.length>3?"many":""}">${ne.map(([Re,ie,_e,le])=>`<button data-m="${Re}"><em>${ie}</em><b>${_e}</b><small>${le}</small><i class="fee">\u{1FA99} 500 \xB7 ${y0[Re]||""}</i></button>`).join("")}</div></div>`,k.hidden=!1,fe?v("\uAC8C\uC784 \uD55C \uD310 \uD560\uB798\uC694? \u{1F606}",4e3):d&&(d.el.textContent="\uC54C\uBC14 \uCCB4\uD5D8 \uD574 \uBCFC\uB798\uC694? \u{1F606}",setTimeout(()=>d.el.textContent="\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615",4e3))}k.addEventListener("click",q=>{let re=q.target.closest("button");if(!re)return;k.hidden=!0;let fe=re.dataset.m,ne=W;if(W=null,fe==="close"){ne&&ne(!1);return}if(fe==="mjp")m();else if(fe==="spot")D(ne);else if(fe==="treasure"||fe==="again-treasure")l()&&r.start();else if(fe==="serving"||fe==="again-serving"){if(!l()){ne&&ne(!1);return}Z=ne,a.start()}else cd.some(Re=>Re[0]===fe)&&s.open(fe,ne)});let Z=null;function X({score:q,delivered:re,spilled:fe,trips:ne}){let Re=Z;Z=null,Re&&Re(!0);let ie=0;try{ie=+localStorage.getItem("sh-best-serving")||0}catch{}let _e=q>ie;if(_e)try{localStorage.setItem("sh-best-serving",q)}catch{}let le=c(o?o.fromScore("serving",q):0);k.innerHTML=`<div class="gcard"><div class="ghead"><b>\u2615 \uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${ne}\uBC88 \uC655\uBCF5\uD574\uC11C \uC74C\uB8CC ${re}\uC794\uC744 \uBC30\uB2EC\uD588\uC5B4\uC694!${fe?` (\uC3DF\uC740 \uC794 ${fe}\uAC1C \u{1F4A6})`:" \uD55C \uC794\uB3C4 \uC548 \uC3DF\uC558\uC5B4\uC694 \u2728"}</p>
      <p class="mscore">${q}\uC810</p>${h(le)}<p class="mprev">${_e?"\u{1F3C6} \uCD5C\uACE0 \uAE30\uB85D!":`\uCD5C\uACE0 \uAE30\uB85D ${ie}\uC810`}</p>
      <button class="go" data-m="again-serving">\u{1F501} \uB2E4\uC2DC \uD558\uAE30 <small class="fee">\u{1FA99} 500</small></button></div>`,k.hidden=!1}function se({found:q,total:re,time:fe,done:ne}){let Re=0;try{Re=+localStorage.getItem("sh-best-treasure")||0}catch{}let ie=q*100+(ne?Math.max(0,90-fe)*5:0),_e=ie>Re,le=c(q*100+(ne?300+Math.max(0,90-fe)*5:0));if(_e)try{localStorage.setItem("sh-best-treasure",ie)}catch{}k.innerHTML=`<div class="gcard"><div class="ghead"><b>\u2B50 \uBE44\uBC00 \uBCF4\uBB3C\uCC3E\uAE30</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${ne?`\u{1F389} ${fe}\uCD08 \uB9CC\uC5D0 \uBCC4\uC0AC\uD0D5 ${re}\uAC1C\uB97C \uBAA8\uB450 \uCC3E\uC558\uC5B4\uC694!`:`\uBCC4\uC0AC\uD0D5 ${re}\uAC1C \uC911 ${q}\uAC1C\uB97C \uCC3E\uC558\uC5B4\uC694!`}</p>
      <p class="mscore">${ie}\uC810</p>${h(le)}<p class="mprev">${_e?"\u{1F3C6} \uCD5C\uACE0 \uAE30\uB85D!":`\uCD5C\uACE0 \uAE30\uB85D ${Re}\uC810`}</p>
      <button class="go" data-m="again-treasure">\u{1F501} \uB2E4\uC2DC \uD558\uAE30 <small class="fee">\u{1FA99} 500</small></button></div>`,k.hidden=!1}addEventListener("keydown",q=>{q.code==="Escape"&&(k.hidden?S.hidden?I.hidden||O():M():k.hidden=!0)});let he=q=>f&&Math.hypot(q.x-f.x,q.z-f.z)<2.8;return{get open(){return!S.hidden||!I.hidden||!k.hidden},mjp:m,spot:D,menu:B,owner:f,cafeStaff:d,treasureResult:se,servingResult:X,update(q,re){u("mjp-btn").hidden=!he(q)||!!re||!S.hidden||!k.hidden,u("cafegame-btn").hidden=!(d&&Math.hypot(q.x-d.x,q.z-d.z)<2.8)||!!re||!k.hidden}}}var $S=7,A0=90,qS=.8;function R0({scene3d:i,data:e,canOccupy:t,player:n,camera:s,showToast:r,onFinish:a}){let l=(_=>document.getElementById(_))("treasure-hud"),c=!1,h=[],u=0,f=0,d=2,v=new bs;for(let _=0;_<10;_++){let I=_*Math.PI/5+Math.PI/2,A=_%2?.045:.1,R=Math.cos(I)*A,P=Math.sin(I)*A;_?v.lineTo(R,P):v.moveTo(R,P)}let S=new Ks(v,{depth:.035,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2});S.center();let g=["#ffd54a","#ff9cc0","#9fe0cf","#c6a6f0","#ffd54a","#a9d4f5","#ffb37a"],x=(()=>{let _=document.createElement("canvas");_.width=_.height=64;let I=_.getContext("2d"),A=I.createRadialGradient(32,32,0,32,32,32);return A.addColorStop(0,"rgba(255,240,180,1)"),A.addColorStop(1,"rgba(255,240,180,0)"),I.fillStyle=A,I.fillRect(0,0,64,64),new ti(_)})();function m(){let _=[],I=(b,D)=>_.every(O=>Math.hypot(O.x-b,O.z-D)>1.6),A=e.seats.slice().sort(()=>Math.random()-.5);for(let b of A){if(_.length>=3)break;I(b[0],b[1])&&_.push({x:b[0],z:b[1],y:.16,where:"\uC758\uC790 \uC544\uB798"})}let R=e.blocks.filter(b=>b[2]>.15&&b[3]>.15).sort(()=>Math.random()-.5);for(let b of R){if(_.length>=5)break;let[D,O,U,G,H]=b,F=Math.floor(Math.random()*4),k=Math.cos(H),W=Math.sin(H),J=F<2?(F?1:-1)*(U+.3):M(-U,U),B=F>=2?(F===3?1:-1)*(G+.3):M(-G,G),Z=D+J*k-B*W,X=O+J*W+B*k;t(Z,X,.22)&&I(Z,X)&&_.push({x:Z,z:X,y:.35,where:"\uC9C4\uC5F4\uB300 \uC606"})}let P=e.floor.map(b=>b[0]),N=e.floor.map(b=>b[1]);for(let b=0;_.length<$S&&b<600;b++){let D=M(Math.min(...P),Math.max(...P)),O=M(Math.min(...N),Math.max(...N));t(D,O,.3)&&!t(D,O,.75)&&I(D,O)&&_.push({x:D,z:O,y:.25,where:"\uBCBD\xB7\uCEE4\uD2BC \uADFC\uCC98"})}return _}function M(_,I){return _+Math.random()*(I-_)}function y(){for(let _ of h)i.remove(_.g);h=[]}function w(){y(),c=!0,u=A0,f=0,d=2,m().forEach((_,I)=>{let A=new tt;A.position.set(_.x,_.y,_.z);let R=new Je(S,new Ot({color:new Le(g[I%g.length]).multiplyScalar(1.6),toneMapped:!1})),P=new za(new Hr({map:x,color:g[I%g.length],transparent:!0,opacity:.7,depthWrite:!1,blending:$n}));P.scale.setScalar(.5),A.add(P,R),i.add(A),h.push({g:A,m:R,glow:P,p:_,got:!1,pop:0,ph:Math.random()*6})}),r(`\u2B50 \uBCC4\uC0AC\uD0D5 ${h.length}\uAC1C\uB97C 90\uCD08 \uC548\uC5D0 \uCC3E\uC544\uC694! \uAC00\uAE4C\uC774 \uAC00\uBA74 \uC8FC\uC6CC\uC694`),p()}function T(_){c=!1,l.hidden=!0,setTimeout(y,600),a&&a({found:f,total:h.length,time:Math.round(A0-u),done:_})}function p(){l.hidden=!c,c&&(l.innerHTML=`<b>\u2B50 ${f} / ${h.length}</b><span>\u23F1 ${Math.ceil(u)}\uCD08</span><button data-t="hint" ${d?"":"disabled"}>\u{1F4A1} \uD78C\uD2B8 ${d}</button><button data-t="quit">\uADF8\uB9CC</button>`)}return l.addEventListener("click",_=>{let I=_.target.closest("button");if(I){if(I.dataset.t==="quit")return T(!1);if(I.dataset.t==="hint"&&d>0){d--;let A=h.filter(R=>!R.got).sort((R,P)=>Math.hypot(R.p.x-n.x,R.p.z-n.z)-Math.hypot(P.p.x-n.x,P.p.z-n.z))[0];if(A){let R=new z;s.getWorldDirection(R);let P=A.p.x-n.x,N=A.p.z-n.z,b=Math.hypot(P,N),D=Math.atan2(R.x*N-R.z*P,R.x*P+R.z*N),O=Math.abs(D)<.5?"\uC55E\uCABD":Math.abs(D)>2.5?"\uB4A4\uCABD":D>0?"\uC67C\uCABD":"\uC624\uB978\uCABD";r(`\u{1F4A1} \uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uBCC4\uC0AC\uD0D5: ${O}\uC73C\uB85C \uC57D ${b.toFixed(1)}m \xB7 ${A.p.where}`),A.flash=2.5}p()}}}),{start:w,get active(){return c},get spots(){return h.map(_=>_.p)},update(_,I){for(let A of h)A.m.rotation.y+=_*2,A.g.position.y=A.p.y+Math.sin(I*2.5+A.ph)*.04,A.flash&&(A.flash=Math.max(0,A.flash-_),A.glow.scale.setScalar(.5+Math.sin(A.flash*12)*.25+.3)),A.got&&(A.pop+=_*3,A.g.scale.setScalar(Math.max(.001,1+A.pop*1.5)*(1-Math.min(1,A.pop))),A.g.position.y+=A.pop*.5);if(c){u-=_;for(let A of h)!A.got&&Math.hypot(A.p.x-n.x,A.p.z-n.z)<qS&&(A.got=!0,f++,p(),r(f===h.length?"\u{1F389} \uBCC4\uC0AC\uD0D5\uC744 \uBAA8\uB450 \uCC3E\uC558\uC5B4\uC694!":`\u2B50 \uCC3E\uC558\uB2E4! ${f} / ${h.length}`),Ln(880,.1,"triangle",.12),Ln(1320,.14,"triangle",.1,.07));if(f===h.length)return T(!0);if(u<=0)return T(!1);Math.ceil(u)!==p.last&&(p.last=Math.ceil(u),p())}}}}var YS=60,bh=.42,C0=[["melonSoda",{}],["chocoMilk",{}],["peachTea",{}],["creamSoda",{}],["bananaMilk",{}],["latte",{}]];function P0({scene3d:i,data:e,hero:t,player:n,npcs:s,showToast:r,onFinish:a}){let o=X=>document.getElementById(X),l=o("serve-hud"),c=s.find(X=>X.id==="cafe"),h=!1,u=0,f=0,d=0,v=0,S=0,g=[],x=null,m=!1,M=0,y={roll:0,vroll:0,pitch:0,vpitch:0,px:0,pz:0,vx:0,vz:0,face:0,bump:1,bob:0,dt:0,drift:0,dcur:0},w=new z,T=new tt;T.visible=!1,i.add(T);let p=new qt({color:"#ffc2da",roughness:.5}),_=new Je(new kt(.42,.02,.28),p);T.add(_);for(let X of[-1,1]){let se=new Je(new kt(.42,.035,.015),p);se.position.set(0,.02,.135*X),T.add(se)}let I=new tt;I.position.y=.012,T.add(I);let A=new so(.42,.55,40);A.rotateX(-Math.PI/2);let R=X=>{let se=new tt,he=new Je(A,new Ot({color:X,transparent:!0,opacity:.85,toneMapped:!1,depthWrite:!1}));he.position.y=.02,se.add(he);let q=new Je(new Ss(.13,.3,4),new Ot({color:new Le(X).multiplyScalar(1.6),toneMapped:!1}));q.rotation.x=Math.PI,q.position.y=1.5,se.add(q);let re=new Je(new ot(.5,.55,1.2,24,1,!0),new Ot({color:X,transparent:!0,opacity:.22,side:Bt,depthWrite:!1,blending:$n}));return re.position.y=.6,se.add(re),se.userData={ring:he,cone:q},se.visible=!1,i.add(se),se},P=R("#9fe0cf"),N=R("#ff8fb7"),b=()=>c?{x:c.x-1.6,z:c.z}:{x:e.cafe[0],z:e.cafe[1]},D=[];for(let X of e.seats){if(X[1]<2.5||X[0]>4.5)continue;let se=X[0]+Math.sin(X[2])*.5,he=X[1]+Math.cos(X[2])*.5;D.some(q=>Math.hypot(q.x-se,q.z-he)<.9)||D.push({x:se,z:he,seat:X})}let O=[];function U(){I.clear(),g=[];for(let se=0;se<3;se++){let[he,q]=C0[Math.floor(Math.random()*C0.length)],re=zo(he,q);re.g.scale.setScalar(.66),re.g.position.set((se-1)*.12,0,se%2?.04:-.03),I.add(re.g),g.push({g:re.g,k:he,o:q,fall:0})}m=!0,y.roll=y.pitch=y.vroll=y.vpitch=y.dcur=0,y.dt=1.2;let X=D.filter(se=>Math.hypot(se.x-n.x,se.z-n.z)>2.2);x=(X.length?X:D)[Math.floor(Math.random()*(X.length||D.length))],N.position.set(x.x,0,x.z),N.visible=!0,P.visible=!1,Ln(660,.08),Ln(990,.1,"triangle",.1,.06),r("\u{1F964} \uC74C\uB8CC\uB97C \uBC1B\uC558\uC5B4\uC694! \uBC18\uC9DD\uC774\uB294 \uD14C\uC774\uBE14\uAE4C\uC9C0 \uC870\uC2EC\uC870\uC2EC \uAC78\uC5B4\uAC00\uC694")}function G(){let X=g.filter(q=>!q.fall).length;g.filter(q=>!q.fall).forEach((q,re)=>{let fe=zo(q.k,q.o);fe.g.scale.setScalar(1.05),fe.g.position.set(x.x+(re-1)*.14,.74,x.z+(re%2?.05:-.05)),i.add(fe.g),O.push({g:fe.g,t:3})}),I.clear(),g=[],m=!1,d+=X,S++;let se=X*100+(X===3?50:0);f+=se,N.visible=!1;let he=b();P.position.set(he.x,0,he.z),P.visible=!0,[523,659,784].forEach((q,re)=>Ln(q,.14,"triangle",.12,re*.07)),r(X===3?`\u2728 \uD55C \uBC29\uC6B8\uB3C4 \uC548 \uD758\uB838\uC5B4\uC694! +${se} \xB7 \uCE74\uC6B4\uD130\uB85C \uB3CC\uC544\uAC00\uC694`:`\uC11C\uBE59 \uC644\uB8CC ${X}\uC794 +${se} \xB7 \uCE74\uC6B4\uD130\uB85C \uB3CC\uC544\uAC00\uC694`),c&&(c.el.textContent="\uC798\uD588\uC5B4\uC694! \uB2E4\uC74C \uC74C\uB8CC \uC900\uBE44\uB410\uC5B4\uC694 \u2615")}function H(){let X=g.find(he=>!he.fall);if(!X)return;X.fall=.001,v++,y.vroll*=-.3,y.roll*=.4,y.vpitch*=-.3,y.pitch*=.4,Ln(220,.25,"sawtooth",.08);let se=g.filter(he=>!he.fall).length;if(r(se?`\u{1F4A6} \uC557 \uD55C \uC794 \uC3DF\uC558\uC5B4\uC694! \uB0A8\uC740 \uC74C\uB8CC ${se}\uC794`:"\u{1F4A6} \uB2E4 \uC3DF\uC558\uC5B4\uC694\u2026 \uCE74\uC6B4\uD130\uC5D0\uC11C \uB2E4\uC2DC \uBC1B\uC544 \uC640\uC694"),!se){m=!1,N.visible=!1;let he=b();P.position.set(he.x,0,he.z),P.visible=!0}}function F(){if(!D.length)return r("\uCE74\uD398 \uD14C\uC774\uBE14\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC5B4\uC694");h=!0,W=null,u=YS,f=0,d=0,v=0,S=0;let X=b();n.x=X.x,n.z=X.z,n.face=n.yaw=-Math.PI/2,n.pitch=-.32,y.px=n.x,y.pz=n.z,y.vx=y.vz=0,y.face=n.yaw,U(),J()}function k(){h=!1,m=!1,T.visible=!1,I.clear(),g=[],N.visible=!1,P.visible=!1,l.hidden=!0,a&&a({score:f,delivered:d,spilled:v,trips:S})}let W=null;function J(){if(l.hidden=!h,!h)return;W||(l.innerHTML=`<div class="sv-top"><b></b><span class="sv-t"></span><span class="sv-cups"></span><button data-s="quit">\uADF8\uB9CC</button></div>
        <div class="sv-row"><div class="sv-dir"><i>\u2B06</i><small></small></div><div class="sv-meter"><i></i><em></em></div><div class="sv-lvl"><i></i></div></div>`,W={b:l.querySelector("b"),t:l.querySelector(".sv-t"),c:l.querySelector(".sv-cups"),m:l.querySelector(".sv-meter i"),l:l.querySelector(".sv-lvl i"),meter:l.querySelector(".sv-meter"),di:l.querySelector(".sv-dir i"),dd:l.querySelector(".sv-dir small")});let X=g.filter(ie=>!ie.fall).length,se=Vo(y.roll/bh,-1.1,1.1),he=Vo(y.pitch/bh,-1.1,1.1);W.b.textContent=`\u2615 ${f}\uC810`,W.t.textContent=`\u23F1 ${Math.ceil(u)}\uCD08`,W.c.textContent=m?"\u{1F964}".repeat(X)+"\xB7".repeat(3-X):"\uCE74\uC6B4\uD130\uB85C \uB3CC\uC544\uAC00\uC694!";let q=m?x:b(),re=q.x-n.x,fe=q.z-n.z,ne=Math.atan2(re,fe)-n.yaw;ne=Math.atan2(Math.sin(ne),Math.cos(ne)),W.di.style.transform=`rotate(${-ne}rad)`,W.dd.textContent=`${Math.hypot(re,fe).toFixed(1)}m`,W.m.style.left=`${50+se*45}%`,W.l.style.transform=`translate(${se*15}px, ${-he*15}px)`;let Re=Math.max(Math.abs(se),Math.abs(he))>.72;W.meter.classList.toggle("danger",Re),W.l.parentNode.classList.toggle("danger",Re)}l.addEventListener("click",X=>{let se=X.target.closest("[data-s]");se&&se.dataset.s==="quit"&&k()});let B=o("serve-bal");B.addEventListener("pointerdown",X=>{let se=X.target.closest("[data-b]");se&&(X.preventDefault(),M=+se.dataset.b)});let Z=()=>M=0;return B.addEventListener("pointerup",Z),B.addEventListener("pointercancel",Z),B.addEventListener("pointerleave",Z),addEventListener("keydown",X=>{h&&(X.code==="KeyZ"&&(M=-1),X.code==="KeyC"&&(M=1))}),addEventListener("keyup",X=>{(X.code==="KeyZ"||X.code==="KeyC")&&(M=0)}),{start:F,get active(){return h},get target(){return x},get tilt(){return[y.roll,y.pitch]},place(X,se){if(!T.visible)return;let he=Math.sin(se),q=Math.cos(se),re=Math.sin(y.bob)*.012;T.position.set(X.position.x+he*.5,X.position.y-.36+Math.abs(re),X.position.z+q*.5),T.rotation.set(0,se,0),T.rotateX(y.pitch),T.rotateZ(-y.roll+re*.6)},update(X,se){for(let pe=O.length-1;pe>=0;pe--){let Fe=O[pe];Fe.t-=X,Fe.t<.5&&Fe.g.scale.setScalar(1.05*Math.max(.001,Fe.t*2)),Fe.t<=0&&(i.remove(Fe.g),O.splice(pe,1))}for(let pe of[P,N])pe.visible&&(pe.userData.cone.position.y=1.5+Math.sin(se*4)*.1,pe.userData.cone.rotation.y+=X*2,pe.userData.ring.material.opacity=.55+Math.sin(se*5)*.3);if(B.hidden=!h||!m,!h)return;u-=X;let he=(n.x-y.px)/Math.max(X,.001),q=(n.z-y.pz)/Math.max(X,.001),re=(he-y.vx)/Math.max(X,.001),fe=(q-y.vz)/Math.max(X,.001),ne=n.yaw-y.face;ne=Math.atan2(Math.sin(ne),Math.cos(ne))/Math.max(X,.001),y.px=n.x,y.pz=n.z,y.vx=he,y.vz=q,y.face=n.yaw;let Re=Math.sin(n.yaw),ie=Math.cos(n.yaw),_e=Vo(re*Re+fe*ie,-12,12),le=Vo(re*ie-fe*Re,-12,12),ve=Math.hypot(he,q);if(m){let pe=ve>.25;y.bump-=X;let Fe=0;y.bump<=0&&(y.bump=pe?.35+Math.random()*.5:.9+Math.random(),Fe=(Math.random()-.5)*(pe?2.2:.5)),y.dt-=X,y.dt<=0&&(y.dt=.9+Math.random()*1.2,y.drift=(Math.random()<.5?-1:1)*(pe?1.1+Math.random()*.9:.3+Math.random()*.4)),y.dcur+=(y.drift-y.dcur)*Math.min(1,X*2.5),y.vroll+=(-y.roll*4.5-y.vroll*2+y.dcur+le*.2+Vo(ne,-5,5)*ve*.55+M*1.8)*X+Fe*.7,y.vpitch+=(-y.pitch*6-y.vpitch*2.4-_e*.13)*X+Fe*.35,y.roll+=y.vroll*X,y.pitch+=y.vpitch*X,(Math.abs(y.roll)>bh||Math.abs(y.pitch)>bh)&&H(),y.bob+=X*ve*9}for(let pe of g)pe.fall&&(pe.fall+=X,pe.g.position.y-=pe.fall*.08,pe.g.rotation.z+=X*6*Math.sign(y.roll||1),pe.fall>.6&&(pe.g.visible=!1));if(T.visible=m||g.some(pe=>pe.fall&&pe.fall<.6),m&&x&&Math.hypot(n.x-x.x,n.z-x.z)<1.05&&G(),!m){let pe=b();Math.hypot(n.x-pe.x,n.z-pe.z)<.9&&U()}if(u<=0)return k();J()}}}function Vo(i,e,t){return Math.max(e,Math.min(t,i))}function KS(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=new ti(i);return n.colorSpace=Rt,n}function I0({scene3d:i,data:e,storeRoot:t,isTouch:n}){let s=e.ceiling||2.9,r=e.floor.map(G=>G[0]),a=e.floor.map(G=>G[1]),o=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)],l=(G,H)=>{let F=!1,k=e.floor;for(let W=0,J=k.length-1;W<k.length;J=W++){let[B,Z]=k[W],[X,se]=k[J];Z>H!=se>H&&G<(X-B)*(H-Z)/(se-Z)+B&&(F=!F)}return F},c=KS(),h=n?140:260,u=new Float32Array(h*3),f=new Float32Array(h*3),d=new Float32Array(h),v=["#ffffff","#ffd6e7","#d9f5e6","#e3dcff","#fff1c9"].map(G=>new Le(G));for(let G=0;G<h;G++){let H,F;do H=o[0]+Math.random()*(o[2]-o[0]),F=o[1]+Math.random()*(o[3]-o[1]);while(!l(H,F));u.set([H,.3+Math.random()*(s-.5),F],G*3);let k=v[G%v.length];f.set([k.r,k.g,k.b],G*3),d[G]=Math.random()*100}let S=new At;S.setAttribute("position",new $t(u,3)),S.setAttribute("color",new $t(f,3));let g=new Ms(S,new Yi({size:.07,map:c,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:$n,sizeAttenuation:!0}));g.frustumCulled=!1,g.renderOrder=5,i.add(g);let x=u.slice(),m=[],M=e.floor,y=(o[0]+o[2])/2,w=(o[1]+o[3])/2;for(let G=0;G<M.length;G++){let[H,F]=M[G],[k,W]=M[(G+1)%M.length],J=Math.hypot(k-H,W-F);if(J<1.2)continue;let B=-(W-F)/J,Z=(k-H)/J,X=(H+k)/2,se=(F+W)/2;l(X+B*.2,se+Z*.2)||(B=-B,Z=-Z);let he=Math.max(1,Math.round(J/1.15)),q=6;for(let re=0;re<he;re++)for(let fe=0;fe<q;fe++){let ne=(re+fe/q)/he,Re=fe/q,ie=H+(k-H)*ne+B*.07,_e=F+(W-F)*ne+Z*.07,le=s-.14-Math.sin(Re*Math.PI)*.16;l(ie,_e)&&m.push([ie,le,_e])}}let T=["#fff4d6","#ffc2da","#c9f2dc","#fff4d6","#d9ccff"].map(G=>new Le(G)),p=new Ot({color:new Le(2.8,2.8,2.8),toneMapped:!1}),_=new qi(new Zt(.032,10,8),p,m.length),I=new Ke,A=new Le;m.forEach(([G,H,F],k)=>{I.makeTranslation(G,H,F),_.setMatrixAt(k,I),_.setColorAt(k,T[k%T.length])}),_.frustumCulled=!1,i.add(_);let R=new At().setFromPoints(m.flatMap((G,H)=>H&&Math.hypot(G[0]-m[H-1][0],G[2]-m[H-1][2])<.4?[new z(...m[H-1]),new z(...G)]:[]));i.add(new qs(R,new ys({color:"#b7a6c9",transparent:!0,opacity:.6})));let P=new At;P.setAttribute("position",new $t(new Float32Array(m.flat()),3));let N=new Float32Array(m.length*3);m.forEach((G,H)=>{let F=T[H%T.length];N.set([F.r,F.g,F.b],H*3)}),P.setAttribute("color",new $t(N,3));let b=new Ms(P,new Yi({size:.3,map:c,vertexColors:!0,transparent:!0,opacity:.75,depthWrite:!1,blending:$n}));b.frustumCulled=!1,i.add(b);let D=[];t.updateMatrixWorld(!0),t.traverse(G=>{if(G.isMesh&&G.material&&G.material.name==="light"){let H=new pn().setFromObject(G);D.push(H.getCenter(new z).setY(H.min.y))}});let O=new Ct({transparent:!0,depthWrite:!1,blending:$n,side:Bt,uniforms:{uColor:{value:new Le("#fff3df")},uStrength:{value:.045}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = uv.y; vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:"uniform vec3 uColor; uniform float uStrength; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN, vV)), 2.5); float a = uStrength * smoothstep(0.0, 1.0, vY) * edge; gl_FragColor = vec4(uColor * a, a); }"}),U=Math.max(1,Math.ceil(D.length/(n?6:10)));return D.filter((G,H)=>H%U===0).forEach(G=>{let H=G.y-.02,F=new Je(new ot(.22,.7,H,24,1,!0),O);F.position.set(G.x,H/2,G.z),F.renderOrder=4,i.add(F)}),{update(G,H){let F=S.attributes.position.array;for(let k=0;k<h;k++){let W=d[k],J=k*3;F[J]=x[J]+Math.sin(H*.21+W)*.25,F[J+1]=x[J+1]+Math.sin(H*.17+W*1.3)*.18,F[J+2]=x[J+2]+Math.cos(H*.19+W*.7)*.25}S.attributes.position.needsUpdate=!0,g.material.opacity=.65+Math.sin(H*1.3)*.15;for(let k=0;k<6;k++){let W=Math.floor(Math.random()*m.length);A.copy(T[W%T.length]).multiplyScalar(.55+Math.random()*.9),_.setColorAt(W,A)}_.instanceColor.needsUpdate=!0}}}var Th=class extends Ws{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new kt;e.deleteAttribute("uv");let t=new qt({side:gn}),n=new qt,s=new Zs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Je(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new qi(e,n,6),o=new Lt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Je(e,ca(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Je(e,ca(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Je(e,ca(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Je(e,ca(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Je(e,ca(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Je(e,ca(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ca(i){return new ao({color:0,emissive:16777215,emissiveIntensity:i})}var Ii={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},jS=new ts(-1,1,1,-1,0,1),hd=class extends At{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}},ZS=new hd,Li=class{constructor(e){this._mesh=new Je(ZS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,jS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ha=class extends Dn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xn.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Li(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wo=class extends Dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Eh=class extends Dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var wh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ye);this._width=n.width,this._height=n.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ha(Ii),this.copyPass.material.blending=hn,this.timer=new mo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Wo!==void 0&&(a instanceof Wo?n=!0:a instanceof Eh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ah=class extends Dn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Xo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ye},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ke},cameraProjectionMatrixInverse:{value:new Ke},cameraWorldMatrix:{value:new Ke},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new z(-1,-1,-1)},sceneBoxMax:{value:new z(1,1,1)}},vertexShader:`

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
		}`},$o={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Rh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function L0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=JS(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new z(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new ei(s,e,e);return r.wrapS=Sn,r.wrapT=Sn,r.needsUpdate=!0,r}function JS(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var qo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:ud(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ye},cameraProjectionMatrixInverse:{value:new Ke},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function ud(i,e,t){let n=QS(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function QS(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new z(Math.cos(r),Math.sin(r),a))}return n}var Ch=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,v=e-f,S=t-d,g,x;v>S?(g=1,x=0):(g=0,x=1);let m=v-g+h,M=S-x+h,y=v-1+2*h,w=S-1+2*h,T=l&255,p=c&255,_=this.perm[T+this.perm[p]]%12,I=this.perm[T+g+this.perm[p+x]]%12,A=this.perm[T+1+this.perm[p+1]]%12,R=.5-v*v-S*S;R<0?n=0:(R*=R,n=R*R*this._dot(this.grad3[_],v,S));let P=.5-m*m-M*M;P<0?s=0:(P*=P,s=P*P*this._dot(this.grad3[I],m,M));let N=.5-y*y-w*w;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[A],y,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,v=(h+u+f)*d,S=h-v,g=u-v,x=f-v,m=e-S,M=t-g,y=n-x,w,T,p,_,I,A;m>=M?M>=y?(w=1,T=0,p=0,_=1,I=1,A=0):m>=y?(w=1,T=0,p=0,_=1,I=0,A=1):(w=0,T=0,p=1,_=1,I=0,A=1):M<y?(w=0,T=0,p=1,_=0,I=1,A=1):m<y?(w=0,T=1,p=0,_=0,I=1,A=1):(w=0,T=1,p=0,_=1,I=1,A=0);let R=m-w+d,P=M-T+d,N=y-p+d,b=m-_+2*d,D=M-I+2*d,O=y-A+2*d,U=m-1+3*d,G=M-1+3*d,H=y-1+3*d,F=h&255,k=u&255,W=f&255,J=this.perm[F+this.perm[k+this.perm[W]]]%12,B=this.perm[F+w+this.perm[k+T+this.perm[W+p]]]%12,Z=this.perm[F+_+this.perm[k+I+this.perm[W+A]]]%12,X=this.perm[F+1+this.perm[k+1+this.perm[W+1]]]%12,se=.6-m*m-M*M-y*y;se<0?s=0:(se*=se,s=se*se*this._dot3(this.grad3[J],m,M,y));let he=.6-R*R-P*P-N*N;he<0?r=0:(he*=he,r=he*he*this._dot3(this.grad3[B],R,P,N));let q=.6-b*b-D*D-O*O;q<0?a=0:(q*=q,a=q*q*this._dot3(this.grad3[Z],b,D,O));let re=.6-U*U-G*G-H*H;return re<0?o=0:(re*=re,o=re*re*this._dot3(this.grad3[X],U,G,H)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,v,S=(e+t+n+s)*l,g=Math.floor(e+S),x=Math.floor(t+S),m=Math.floor(n+S),M=Math.floor(s+S),y=(g+x+m+M)*c,w=g-y,T=x-y,p=m-y,_=M-y,I=e-w,A=t-T,R=n-p,P=s-_,N=I>A?32:0,b=I>R?16:0,D=A>R?8:0,O=I>P?4:0,U=A>P?2:0,G=R>P?1:0,H=N+b+D+O+U+G,F=a[H][0]>=3?1:0,k=a[H][1]>=3?1:0,W=a[H][2]>=3?1:0,J=a[H][3]>=3?1:0,B=a[H][0]>=2?1:0,Z=a[H][1]>=2?1:0,X=a[H][2]>=2?1:0,se=a[H][3]>=2?1:0,he=a[H][0]>=1?1:0,q=a[H][1]>=1?1:0,re=a[H][2]>=1?1:0,fe=a[H][3]>=1?1:0,ne=I-F+c,Re=A-k+c,ie=R-W+c,_e=P-J+c,le=I-B+2*c,ve=A-Z+2*c,pe=R-X+2*c,Fe=P-se+2*c,ze=I-he+3*c,Oe=A-q+3*c,$e=R-re+3*c,Qe=P-fe+3*c,$=I-1+4*c,mt=A-1+4*c,Ze=R-1+4*c,ue=P-1+4*c,j=g&255,Me=x&255,xe=m&255,Ae=M&255,L=o[j+o[Me+o[xe+o[Ae]]]]%32,E=o[j+F+o[Me+k+o[xe+W+o[Ae+J]]]]%32,K=o[j+B+o[Me+Z+o[xe+X+o[Ae+se]]]]%32,ge=o[j+he+o[Me+q+o[xe+re+o[Ae+fe]]]]%32,ae=o[j+1+o[Me+1+o[xe+1+o[Ae+1]]]]%32,Se=.6-I*I-A*A-R*R-P*P;Se<0?h=0:(Se*=Se,h=Se*Se*this._dot4(r[L],I,A,R,P));let Te=.6-ne*ne-Re*Re-ie*ie-_e*_e;Te<0?u=0:(Te*=Te,u=Te*Te*this._dot4(r[E],ne,Re,ie,_e));let ce=.6-le*le-ve*ve-pe*pe-Fe*Fe;ce<0?f=0:(ce*=ce,f=ce*ce*this._dot4(r[K],le,ve,pe,Fe));let de=.6-ze*ze-Oe*Oe-$e*$e-Qe*Qe;de<0?d=0:(de*=de,d=de*de*this._dot4(r[ge],ze,Oe,$e,Qe));let be=.6-$*$-mt*mt-Ze*Ze-ue*ue;return be<0?v=0:(be*=be,v=be*be*this._dot4(r[ae],$,mt,Ze,ue)),27*(h+u+f+d+v)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var ua=class i extends Dn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=L0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ft(this.width,this.height,{type:Gt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ct({defines:Object.assign({},Xo.defines),uniforms:xn.clone(Xo.uniforms),vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader,blending:hn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ro,this.normalMaterial.blending=hn,this.pdMaterial=new Ct({defines:Object.assign({},qo.defines),uniforms:xn.clone(qo.uniforms),vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ct({defines:Object.assign({},$o.defines),uniforms:xn.clone($o.uniforms),vertexShader:$o.vertexShader,fragmentShader:$o.fragmentShader,blending:hn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ct({uniforms:xn.clone(Ii.uniforms),vertexShader:Ii.vertexShader,fragmentShader:Ii.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:xo,blendDst:Qs,blendEquation:ni,blendSrcAlpha:go,blendDstAlpha:Qs,blendEquationAlpha:ni}),this.blendMaterial=new Ct({uniforms:xn.clone(Rh.uniforms),vertexShader:Rh.vertexShader,fragmentShader:Rh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:uc,blendSrc:xo,blendDst:Qs,blendEquation:ni,blendSrcAlpha:go,blendDstAlpha:Qs,blendEquationAlpha:ni}),this._fsQuad=new Li(null),this._originalClearColor=new Le,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new fi;s.format=pi,s.type=is,this.normalRenderTarget=new Ft(this.width,this.height,{minFilter:Ut,magFilter:Ut,type:Gt,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=ud(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Ch,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new ei(s,e,e,On,bn);return r.wrapS=Sn,r.wrapT=Sn,r.needsUpdate=!0,r}};ua.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Yo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ph=class extends Dn{constructor(){super(),this.isOutputPass=!0,this.uniforms=xn.clone(Yo.uniforms),this.material=new Xr({name:Yo.name,uniforms:this.uniforms,vertexShader:Yo.vertexShader,fragmentShader:Yo.fragmentShader}),this._fsQuad=new Li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===er?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===So&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var D0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var fa=class i extends Dn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ye(e.x,e.y):new ye(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(r,a,{type:Gt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ft(r,a,{type:Gt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Ft(r,a,{type:Gt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=D0;this.highPassUniforms=xn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ye(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xn.clone(Ii.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:Ii.vertexShader,fragmentShader:Ii.fragmentShader,premultipliedAlpha:!0,blending:$n,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new Ot,this._fsQuad=new Li(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ye(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ct({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ye(.5,.5)},direction:{value:new ye(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};fa.BlurDirectionX=new ye(1,0);fa.BlurDirectionY=new ye(0,1);var Ko=class i extends Je{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new Le(t.color):new Le(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new Vn,u=new z,f=new z,d=new z,v=new Ke,S=new z(0,0,-1),g=new bt,x=new z,m=new z,M=new bt,y=new Ke,w=new Ft(r,a,{samples:c,type:Gt}),T=new Ct({name:l.name!==void 0?l.name:"unspecified",uniforms:xn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=w.texture,T.uniforms.color.value=s,T.uniforms.textureMatrix.value=y,this.material=T,this.onBeforeRender=function(p,_,I){let A=this.getReflectionCamera(I);if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(I.matrixWorld),v.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(v),x.subVectors(f,d),x.dot(u)>0===!0&&this.forceUpdate===!1)return;x.reflect(u).negate(),x.add(f),v.extractRotation(I.matrixWorld),S.set(0,0,-1),S.applyMatrix4(v),S.add(d),m.subVectors(f,S),m.reflect(u).negate(),m.add(f),A.position.copy(x),A.up.set(0,1,0),A.up.applyMatrix4(v),A.up.reflect(u),A.lookAt(m),A.far=I.far,A.updateMatrixWorld(),A.projectionMatrix.copy(I.projectionMatrix),A.projectionMatrix.elements[8]*=-1,A.projectionMatrix.elements[12]*=-1,y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(A.projectionMatrix),y.multiply(A.matrixWorldInverse),y.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(A.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let P=A.projectionMatrix;A.isOrthographicCamera?(M.x=(Math.sign(g.x)+P.elements[8])/P.elements[0],M.y=(Math.sign(g.y)+P.elements[9])/P.elements[5],M.z=-I.far,M.w=1):(M.x=(Math.sign(g.x)+P.elements[8])/P.elements[0],M.y=(Math.sign(g.y)+P.elements[9])/P.elements[5],M.z=-1,M.w=(1+P.elements[10])/P.elements[14]),g.multiplyScalar(2/g.dot(M)),P.elements[2]=g.x,P.elements[6]=g.y,A.isOrthographicCamera?(P.elements[10]=g.z-o,P.elements[14]=g.w-1):(P.elements[10]=g.z+1-o,P.elements[14]=g.w),n.visible=!1;let N=p.getRenderTarget(),b=p.xr.enabled,D=p.shadowMap.autoUpdate;p.xr.enabled=!1,p.shadowMap.autoUpdate=!1,p.setRenderTarget(w),p.state.buffers.depth.setMask(!0),p.autoClear===!1&&p.clear(),p.render(_,A),p.xr.enabled=b,p.shadowMap.autoUpdate=D,p.setRenderTarget(N);let O=I.viewport;O!==void 0&&p.state.viewport(O),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),n.material.dispose()},this.getReflectionCamera=function(p){let _=this._reflectionCameras.get(p);return _===void 0&&(_=p.clone(),this._reflectionCameras.set(p,_)),_}}};Ko.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Et=i=>document.getElementById(i),je={canvas:Et("room"),overlay:Et("overlay"),bar:Et("bar"),pct:Et("pct"),enter:Et("enter"),where:Et("where"),map:Et("map"),toast:Et("toast"),joy:Et("joy"),knob:Et("knob"),err:Et("err")},jn=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",jn);var Ht;try{Ht=new nh({canvas:je.canvas,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0})}catch(i){throw je.err.hidden=!1,je.err.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C 3D(WebGL)\uB97C \uCF24 \uC218 \uC5C6\uC5B4\uC694. \uCD5C\uC2E0 Chrome\xB7Safari\xB7Edge\uC5D0\uC11C \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694.",i}Ht.setPixelRatio(Math.min(window.devicePixelRatio||1,jn?1.5:1.75));Ht.outputColorSpace=Rt;Ht.toneMapping=er;Ht.toneMappingExposure=1.05;Ht.shadowMap.enabled=!0;Ht.shadowMap.type=Js;Ht.shadowMap.autoUpdate=!1;var zt=new Ws,G0=new Le("#e9e2fb");zt.background=G0;zt.fog=new Oa(G0,13,32);var yt=new tn(66,1,.05,60),eb=new ia(Ht);zt.environment=eb.fromScene(new Th,.04).texture;zt.environmentIntensity=.55;zt.add(new ho("#fffafd","#e3d2ec",.7));var vi=new Es("#fff6ec",2.4);vi.position.set(-3.2,9,2.4);vi.target.position.set(0,0,.4);zt.add(vi.target);vi.castShadow=!0;vi.shadow.mapSize.set(jn?2048:3072,jn?2048:3072);Object.assign(vi.shadow.camera,{left:-10.5,right:10.5,top:10.5,bottom:-10.5,near:1,far:22});vi.shadow.bias=-4e-4;vi.shadow.normalBias=.025;vi.shadow.radius=5;vi.shadow.blurSamples=12;var V0=new Es("#f1e9ff",.55);V0.position.set(2.5,4,-3);zt.add(V0);zt.add(vi);var W0=h0(),gd={floor:"#e4d6d8",mint:"#cbeebb",trim:"#b2dca0",ceiling:"#f8f3fb",pink:"#f6b7d2",pinkChair:"#f2a6c9",mintChair:"#a9dcbf",shelf:"#fff3e3",blue:"#a9d4f5",white:"#fbf8f2",steel:"#b3b8c6",glass:"#bfe3f0",curtain:"#f2a9c8",greenDrape:"#b9d6a4",greenCloth:"#b7df8f",pegboard:"#f1dfbd",paperA:"#f2b0c2",paperB:"#a9d0ec",paperC:"#f3d08f",paperD:"#c3dca0",paperE:"#cdbcf0",light:"#fffbe9",handle:"#8fb98a",displayWire:"#e6def2",acrylicEdge:"#c9e6f2",labelInk:"#8a78b8",pinkBasket:"#e7a2c4",meshTray:"#cdc4e6",paperWhite:"#fffaf7",line:"#c8b9c9",wood:"#e6bf93",woodDark:"#c99c6e",plushCream:"#fbecc9",plushPink:"#f8b9d3",plushBlue:"#bcdcf6",clothWhite:"#fffbf6"},fd=new Map;function xd(i){if(fd.has(i.name))return fd.get(i.name);let e=gd[i.name]?new Le(gd[i.name]):i.color.clone(),t=new qt({color:e,roughness:.72,metalness:0,side:Bt});return(i.name==="steel"||i.name==="handle")&&(t.metalness=.45,t.roughness=.35),i.name==="floor"&&(t.roughness=.5),i.name==="acrylicEdge"&&(t.roughness=.25),i.name==="mirror"&&(t.metalness=1,t.roughness=.04,t.color=new Le("#eef3f7"),t.envMapIntensity=1.4),i.name==="leafGreen"&&(t.color=new Le("#86cc78")),t.name=i.name,i.name==="glass"&&(t.transparent=!0,t.opacity=.32,t.depthWrite=!1,t.roughness=.05,t.metalness=.1),i.name==="light"&&(t.emissive=new Le("#fff6e0"),t.emissiveIntensity=2.6),i.name==="ceiling"&&(t.emissive=new Le("#f3ecf7"),t.emissiveIntensity=.55),(i.name==="curtain"||i.name==="greenCloth")&&(t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb *= 0.88 + 0.12 * te.x * te.y;`)}),fd.set(i.name,t),t}var dd=1.32,tb=.2,N0=2.4,Ie={x:0,z:0,yaw:0,pitch:-.06,face:0},ls=!0,Is=2.4,X0=2.7,Uh=-.5,vd=null;try{vd=localStorage.getItem("sh-look")}catch{}var Jt=Zf(W0,{look:ar.includes(vd)?vd:ar[Math.floor(Math.random()*ar.length)]});zt.add(Jt.root);var pt=null,el=!1,ma=!1,U0=!1,Kn=null,as=null,xi=null,Nn=null,_d=null,un=null,Lh=null,fr=null,Di=null,pa=null,F0=()=>Lh&&Lh.isOpen||un&&un.open||Kn&&Kn.open||as&&as.open||xi&&xi.isOpen||Nn&&Nn.active;function Dh(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[a,o]=t[s],[l,c]=t[r];o>e!=c>e&&i<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}var $0=Array.from({length:12},(i,e)=>[Math.cos(e*Math.PI/6),Math.sin(e*Math.PI/6)]);function dr(i,e,t=tb){if(!Dh(i,e,pt.floor))return!1;for(let[n,s]of $0)if(!Dh(i+n*t,e+s*t,pt.floor))return!1;for(let[n,s,r,a,o]of pt.blocks){let l=i-n,c=e-s,h=Math.cos(o),u=Math.sin(o),f=Math.max(0,Math.abs(l*h+c*u)-r),d=Math.max(0,Math.abs(-l*u+c*h)-a);if(f*f+d*d<t*t)return!1}return!0}function nb(i,e,t=.12){if(!Dh(i,e,pt.floor))return!1;for(let[n,s]of $0)if(!Dh(i+n*t,e+s*t,pt.floor))return!1;for(let[n,s,r,a,o]of pt.blocks){if(Math.min(r,a)>.1)continue;let l=i-n,c=e-s,h=Math.cos(o),u=Math.sin(o),f=Math.max(0,Math.abs(l*h+c*u)-r),d=Math.max(0,Math.abs(-l*u+c*h)-a);if(f*f+d*d<t*t)return!1}return!0}function pd(i,e,t=-.06){Kt=null,Ie.x=i[0],Ie.z=i[1],Ie.yaw=Ie.face=Math.atan2(e[0]-Ie.x,e[1]-Ie.z),Ie.pitch=ls?Uh:t,Is=.5}var Jo=()=>pt&&pt.scale||1,Nh={entry:()=>pd(pt.spawn,pt.look),display:()=>pd(pt.displayView,pt.displayLook,-.3),cafe:()=>pd(pt.cafe,[-2.6*Jo(),3.7*Jo()])};async function ib(){let i=fetch("scene.json").then(r=>{if(!r.ok)throw Error("scene.json "+r.status);return r.json()}),e=7907728,t=(async()=>{let r=await fetch("store.json");if(!r.ok)throw Error("store.json "+r.status);let a;if(r.body&&r.body.getReader){let c=r.body.getReader(),h=[],u=0;for(;;){let{done:f,value:d}=await c.read();if(f)break;h.push(d),u+=d.length;let v=Math.min(99,Math.round(u/e*100));je.bar.style.width=v+"%",je.pct.textContent="\uB9E4\uC7A5 \uBD88\uB7EC\uC624\uB294 \uC911\u2026 "+v+"%"}a=new TextDecoder().decode(await new Blob(h).arrayBuffer())}else a=await r.text();let o=atob(JSON.parse(a)),l=new Uint8Array(o.length);for(let c=0;c<o.length;c++)l[c]=o.charCodeAt(c);return new Fo().parseAsync(l.buffer,"")})(),[n,s]=await Promise.all([i,t]);pt=n,s.scene.traverse(r=>{if(r.isMesh){r.material=Array.isArray(r.material)?r.material.map(xd):xd(r.material),r.material.name==="glass"&&(r.renderOrder=2);let a=r.material.name;r.receiveShadow=!0,r.castShadow=!["ceiling","light","glass","floor","curtain"].includes(a),r.matrixAutoUpdate=!1,r.updateMatrix()}}),zt.add(s.scene),Ui=s.scene,pb(s.scene),db(-.5),fb(),ub(s.scene).catch(r=>console.warn("baked light unavailable",r)),Nh.entry(),gb(),pa=M0({showToast:Yn}),Lh=S0({showToast:Yn,coins:pa}),fr=R0({scene3d:zt,data:pt,canOccupy:dr,player:Ie,camera:yt,showToast:Yn,onFinish:r=>un.treasureResult(r)}),Di=P0({scene3d:zt,data:pt,hero:Jt,player:Ie,npcs:Ni,showToast:Yn,onFinish:r=>{Ie.pitch=ls?Uh:-.06,un.servingResult(r)}}),un=w0({showToast:Yn,npcs:Ni,capture:k0,views:Sd.length,minis:Lh,treasure:fr,serving:Di,coins:pa}),Kn=u0({scene3d:zt,storeRoot:Ui,data:pt,hero:Jt,npcs:Ni,showToast:Yn,isTouch:jn,canOccupy:dr,playGame:r=>un.menu("cafe",r)}),as=p0({scene3d:zt,hero:Jt,npcs:Ni,showToast:Yn,inShop:r=>!pt.seats.some(a=>Math.hypot(r.x-a[0],r.z-a[1])<1.3)&&!Ni.some(a=>a.id==="cafe"&&Math.hypot(r.x-a.x,r.z-a.z)<2.8)}),xi=m0({showToast:Yn}),Nn=x0({hero:Jt,mirrors:Qo,camera:yt,player:Ie,showToast:Yn,renderNow:()=>(Jt.root.position.set(Ie.x,0,Ie.z),Jt.root.rotation.y=Ie.face,Jt.root.visible=!0,J0(),zn!=="low"?oi.render():Ht.render(zt,yt),Ht.domElement)}),Et("diary-btn").addEventListener("click",r=>{xi.open(),r.currentTarget.blur()}),_d=I0({scene3d:zt,data:pt,storeRoot:Ui,isTouch:jn}),Ht.compile(zt,yt),Ht.shadowMap.needsUpdate=!0,el=!0,je.bar.style.width="100%",je.pct.textContent="\uC900\uBE44 \uC644\uB8CC",je.enter.disabled=!1,je.enter.textContent="\uB9E4\uC7A5 \uB4E4\uC5B4\uAC00\uAE30",window.__store={mirrors:Qo,sit:r=>{let a=pt.seats[r];Kt=a,Ie.x=a[0],Ie.z=a[1],Ie.face=a[2],Kn.onSit(a)},get cafe(){return Kn},get shop(){return as},get diary(){return xi},get photo(){return Nn},stand:()=>Kt&&Zo(),get seats(){return pt.seats},player:Ie,setView:r=>wd(r),setQuality:r=>{zn=r,Rd()},canOccupy:dr,spots:Nh,keys:An,get entered(){return ma},info:()=>Ht.info.render,bloom:Ad,grade:j0,npcs:Ni,lmFloor:Md,get root(){return Ui},shot:r=>k0(r),get treasure(){return fr},get serving(){return Di},get coins(){return pa},set camD(r){X0=r}}}ib().catch(i=>{console.error(i),je.pct.textContent="\uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694.",je.enter.textContent="\uB2E4\uC2DC \uC2DC\uB3C4",je.enter.disabled=!1,je.enter.onclick=()=>location.reload()});je.enter.addEventListener("click",()=>{el&&(ma=!0,pa&&pa.welcome(),je.overlay.classList.add("gone"),setTimeout(()=>je.overlay.hidden=!0,450),Yn(jn?"\uC67C\uCABD \uC544\uB798 \uC6D0\uC73C\uB85C \uAC77\uACE0, \uD654\uBA74\uC744 \uB4DC\uB798\uADF8\uD574 \uCE74\uBA54\uB77C\uB97C \uB3CC\uB824\uC694":"WASD\uB85C \uAC77\uACE0, \uB9C8\uC6B0\uC2A4 \uB4DC\uB798\uADF8\uB85C \uCE74\uBA54\uB77C\uB97C \uB3CC\uB824\uC694 \xB7 V \uC2DC\uC810 \uC804\uD658"))});var An=new Set,sb=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","KeyQ","KeyE"]);addEventListener("keydown",i=>{i.target.closest&&i.target.closest("input,textarea")||!sb.has(i.code)||i.altKey||i.ctrlKey||i.metaKey||(i.preventDefault(),An.add(i.code))});addEventListener("keyup",i=>An.delete(i.code));addEventListener("blur",()=>{An.clear(),fn.x=fn.y=0});var jo=new Map;je.canvas.addEventListener("pointerdown",i=>{if(ma&&!(i.pointerType==="mouse"&&i.button!==0)){jo.set(i.pointerId,{x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,t:performance.now()});try{je.canvas.setPointerCapture(i.pointerId)}catch{}je.canvas.classList.add("dragging")}});je.canvas.addEventListener("pointermove",i=>{let e=jo.get(i.pointerId);if(!e)return;let t=i.pointerType==="mouse"?.0042:.0065;Ie.yaw-=(i.clientX-e.x)*t,Ie.pitch=Ai.clamp(Ie.pitch-(i.clientY-e.y)*t,ls?-1.1:-1.05,ls?-.12:.9),e.x=i.clientX,e.y=i.clientY});var bd=i=>{let e=jo.get(i.pointerId);e&&i.type==="pointerup"&&Math.hypot(i.clientX-e.sx,i.clientY-e.sy)<9&&performance.now()-e.t<450&&lb(i.clientX,i.clientY),jo.delete(i.pointerId),jo.size||je.canvas.classList.remove("dragging")};je.canvas.addEventListener("pointerup",bd);je.canvas.addEventListener("pointercancel",bd);je.canvas.addEventListener("lostpointercapture",bd);je.canvas.addEventListener("contextmenu",i=>i.preventDefault());var fn={id:null,x:0,y:0,cx:0,cy:0};je.joy.addEventListener("pointerdown",i=>{if(fn.id!==null)return;i.preventDefault();let e=je.joy.getBoundingClientRect();fn.id=i.pointerId,fn.cx=e.left+e.width/2,fn.cy=e.top+e.height/2;try{je.joy.setPointerCapture(i.pointerId)}catch{}q0(i)});function q0(i){if(i.pointerId!==fn.id)return;let e=je.joy.clientWidth*.36,t=i.clientX-fn.cx,n=i.clientY-fn.cy,s=Math.hypot(t,n);s>e&&(t*=e/s,n*=e/s),fn.x=t/e,fn.y=n/e,je.knob.style.transform=`translate(${t}px, ${n}px)`}je.joy.addEventListener("pointermove",q0);var Td=i=>{i.pointerId===fn.id&&(fn.id=null,fn.x=fn.y=0,je.knob.style.transform="")};je.joy.addEventListener("pointerup",Td);je.joy.addEventListener("pointercancel",Td);je.joy.addEventListener("lostpointercapture",Td);document.querySelectorAll("[data-spot]").forEach(i=>i.addEventListener("click",()=>{el&&Nh[i.dataset.spot](),i.blur()}));var yd=Et("burger"),Y0=Et("spots"),Ed=i=>{Y0.hidden=!i,yd.setAttribute("aria-expanded",String(i)),yd.setAttribute("aria-label",i?"\uBA54\uB274 \uB2EB\uAE30":"\uBA54\uB274 \uC5F4\uAE30")};yd.addEventListener("click",i=>{Ed(Y0.hidden),i.currentTarget.blur()});document.querySelectorAll("[data-spot]").forEach(i=>i.addEventListener("click",()=>Ed(!1)));je.canvas.addEventListener("pointerdown",()=>Ed(!1));function rb(i){Kt=i,Ie.x=i[0],Ie.z=i[1],Ie.face=i[2],Ie.yaw=i[2],kn.set(0,0),Kn&&Kn.onSit(i)}function ab(){let i=Ni.find(e=>e.id==="cafe");return i&&pt.seats.filter(e=>e[1]>3).sort((e,t)=>Math.hypot(e[0]-i.x,e[1]-i.z)-Math.hypot(t[0]-i.x,t[1]-i.z))[0]||pt.seats[0]}document.querySelectorAll("[data-nav]").forEach(i=>i.addEventListener("click",()=>{if(i.blur(),!el||!ma)return;xi&&xi.isOpen&&xi.close();let e=i.dataset.nav;if(e==="shop")Kt&&Zo(),as.shopping?Et("basket-btn").click():as.open||(Et("shop-btn").hidden?(Nh.display(),setTimeout(()=>Et("shop-btn").click(),60)):Et("shop-btn").click());else if(e==="cafe"){Kt&&Zo();let t=Ni.find(n=>n.id==="cafe");t&&(Ie.x=t.x-1.55,Ie.z=t.z,Ie.yaw=Ie.face=Math.PI/2,Ie.pitch=ls?Uh:-.06,Kt=null),setTimeout(()=>Et("order-btn").click(),60)}else if(e==="diary")Kt||rb(ab()),xi.open();else if(e==="photo"){Kt&&Zo();let t=Qo[0];if(!t)return;Ie.x=t.c.x-1.2,Ie.z=t.c.z,Ie.yaw=Ie.face=Math.PI/2,Et("photo-btn").click()}else e==="mine"&&as.openMine()}));Et("look-toggle").addEventListener("click",i=>{if(i.currentTarget.blur(),Nn&&Nn.active)return;let e=ar[(ar.indexOf(Jt.look)+1)%ar.length];Jt.setLook(e),Jt.root.traverse(t=>{t.isMesh&&(t.frustumCulled=!1)});try{localStorage.setItem("sh-look",e)}catch{}Yn(`\u{1F457} \uCE90\uB9AD\uD130\uB97C \uBC14\uAFE8\uC5B4\uC694 \xB7 ${c0[e]}`)});Et("mjp-btn").addEventListener("click",i=>{i.currentTarget.blur(),un.menu("shop")});Et("cafegame-btn").addEventListener("click",i=>{i.currentTarget.blur(),un.menu("cafe")});Et("hint-toggle").addEventListener("click",i=>{let e=Et("hint");e.hidden=!e.hidden,i.currentTarget.blur()});var K0=Et("view-toggle");function wd(i){ls=i,Jt.root.visible=i,Ie.pitch=i?Uh:-.06,Is=.5,K0.querySelector(".lbl").textContent=i?"1\uC778\uCE6D":"3\uC778\uCE6D"}K0.addEventListener("click",i=>{wd(!ls),i.currentTarget.blur()});addEventListener("keydown",i=>{i.code==="KeyV"&&ma&&!(i.target.closest&&i.target.closest("input,textarea"))&&wd(!ls)});var O0;function Yn(i){je.toast.textContent=i,je.toast.classList.add("on"),clearTimeout(O0),O0=setTimeout(()=>je.toast.classList.remove("on"),3600)}var vt=je.map?je.map.getContext("2d"):null,md=null;function ob(){if(!je.map||je.map.hidden||!pt)return;if(!md){let s=pt.floor.map(l=>l[0]),r=pt.floor.map(l=>l[1]),a=[Math.min(...s),Math.min(...r),Math.max(...s),Math.max(...r)],o=Math.min((je.map.width-24)/(a[2]-a[0]),(je.map.height-24)/(a[3]-a[1]));md={s:o,mp:(l,c)=>[je.map.width/2+(l-(a[0]+a[2])/2)*o,je.map.height/2+(c-(a[1]+a[3])/2)*o]}}let{s:i,mp:e}=md;vt.clearRect(0,0,je.map.width,je.map.height),vt.beginPath(),pt.floor.forEach(([s,r],a)=>vt[a?"lineTo":"moveTo"](...e(s,r))),vt.closePath(),vt.fillStyle="#dff3e8",vt.fill(),vt.strokeStyle="#8fc7aa",vt.lineWidth=3,vt.stroke();for(let[s,r,a,o,l,c]of pt.icons)vt.save(),vt.translate(...e(s,r)),vt.rotate(l),vt.fillStyle=gd[c]||"#"+pt.colors[c],vt.strokeStyle="#a89cc4",vt.lineWidth=1.2,vt.fillRect(-a*i/2,-o*i/2,a*i,o*i),vt.strokeRect(-a*i/2,-o*i/2,a*i,o*i),vt.restore();vt.textAlign="center",vt.font="700 19px system-ui, sans-serif",vt.fillStyle="#5d4f7c";for(let[s,[r,a]]of pt.labels)vt.fillText(s,...e(r,a));let[t,n]=e(Ie.x,Ie.z);vt.save(),vt.translate(t,n),vt.rotate(-Ie.yaw),vt.beginPath(),vt.moveTo(0,15),vt.lineTo(-9,-8),vt.lineTo(9,-8),vt.closePath(),vt.fillStyle="#9a72d8",vt.fill(),vt.lineWidth=2.5,vt.strokeStyle="#fff",vt.stroke(),vt.restore()}function Fh(){let i=je.canvas.clientWidth,e=je.canvas.clientHeight;Ht.setSize(i,e,!1),typeof oi!="undefined"&&(oi.setPixelRatio(Ht.getPixelRatio()),oi.setSize(i,e)),yt.aspect=i/e;let t=74*Math.PI/180,n=2*Math.atan(Math.tan(t/2)/yt.aspect)*180/Math.PI;yt.fov=Math.min(92,Math.max(64,n)),yt.updateProjectionMatrix()}var oi=new wh(Ht,new Ft(1,1,{type:Gt,samples:jn?2:4}));oi.addPass(new Ah(zt,yt));var os=new ua(zt,yt,1,1);os.output=ua.OUTPUT.Default;os.blendIntensity=1;os.updateGtaoMaterial({radius:.55,distanceExponent:1.3,thickness:1.4,scale:1.25,samples:jn?8:14});os.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:jn?8:16});oi.addPass(os);{let i=os.render.bind(os);os.render=(...e)=>{for(let t of jf)t.visible=!1;i(...e);for(let t of jf)t.visible=!0}}var Ad=new fa(new ye(256,256),.3,.5,2);oi.addPass(Ad);oi.addPass(new Ph);var j0=new ha({uniforms:{tDiffuse:{value:null},saturation:{value:1.12},contrast:{value:1.05},warmth:{value:.025},lift:{value:.012},vignette:{value:.22}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`});oi.addPass(j0);var zn=jn?"mid":"high";try{zn=localStorage.getItem("sh-quality")||zn}catch{}var Z0=Et("quality-toggle");function Rd(){os.enabled=zn==="high",Ad.enabled=zn!=="low",Ht.shadowMap.enabled=zn!=="low",zt.traverse(i=>{i.material&&i.material.needsUpdate!==void 0&&(i.material.needsUpdate=!0)}),Ht.shadowMap.needsUpdate=!0,Z0.querySelector(".lbl").textContent={high:"\uACE0\uD654\uC9C8",mid:"\uBCF4\uD1B5",low:"\uAC00\uBCCD\uAC8C"}[zn]}Z0.addEventListener("click",i=>{zn={high:"mid",mid:"low",low:"high"}[zn];try{localStorage.setItem("sh-quality",zn)}catch{}Rd(),Fh(),i.currentTarget.blur()});Rd();new ResizeObserver(Fh).observe(je.canvas);Fh();var Kt=null,Ui=null,Ih=new ws,B0=new ye;function lb(i,e){if(!pt||!pt.seats||!Ui)return;let t=je.canvas.getBoundingClientRect();if(B0.set((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),Ih.setFromCamera(B0,yt),un&&un.owner&&Ih.intersectObject(un.owner.c.root,!0).length){un.menu("shop");return}if(un&&un.cafeStaff&&Ih.intersectObject(un.cafeStaff.c.root,!0).length){un.menu("cafe");return}let n=Ih.intersectObject(Ui,!0)[0];if(!n)return;let s=null,r=.6;for(let a of pt.seats){let o=Math.hypot(a[0]-n.point.x,a[1]-n.point.z);o<r&&n.point.y<1.1&&(r=o,s=a)}s&&(Kt=s,Ie.x=s[0],Ie.z=s[1],Ie.face=s[2],kn.set(0,0),Yn("\uC758\uC790\uC5D0 \uC549\uC558\uC5B4\uC694 \u{1FA91} \uC6C0\uC9C1\uC774\uBA74 \uC77C\uC5B4\uB098\uC694"),Kn&&Kn.onSit(s))}function Zo(){let i=Kt;Kt=null,Kn&&Kn.onStand();let e=i[2]+Math.PI;for(let t of[.45,.6,.8,1,1.25])for(let n of[0,.5,-.5,1,-1,1.6,-1.6]){let s=i[0]+Math.sin(e+n)*t,r=i[1]+Math.cos(e+n)*t;if(dr(s,r)){Ie.x=s,Ie.z=r;return}}}var cb=[/^Perimeter wall/,/^Guest floor$/,/^Ceiling$/,/^Display hall - angled partition$/,/^Cafe partition$/,/^Corridor partition$/,/^Corridor return$/,/^Cafe end wall/,/^Round column/,/^Shop counter - (staff area room|back wall|side wall)/],hb=1.12,Md={value:0};async function ub(i){let e=await fetch("light.json");if(!e.ok)return;let t=await e.json(),n=c=>{let h=atob(c),u=new Uint8Array(h.length);for(let f=0;f<h.length;f++)u[f]=h.charCodeAt(f);return u},s=await new Fo().parseAsync(n(t.shell).buffer,""),r=await createImageBitmap(new Blob([n(t.lightmap)],{type:"image/jpeg"}),{imageOrientation:"none"}),a=new jt(r);a.flipY=!1,a.colorSpace=Rt,a.needsUpdate=!0,a.anisotropy=4;{let c=document.createElement("canvas");c.width=c.height=64;let h=c.getContext("2d");h.drawImage(r,0,0,64,64);let u=h.getImageData(0,0,64,64).data,f=[];for(let d=0;d<u.length;d+=4)f.push(Math.pow((u[d]*.2126+u[d+1]*.7152+u[d+2]*.0722)/255,2.2));f.sort((d,v)=>d-v),Md.value=f[Math.floor(f.length*.9)]*.85}let o=c=>{c.uniforms.lmFloor=Md,c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
uniform float lmFloor;`).replace("reflectedLight.indirectDiffuse += lightMapTexel.rgb","reflectedLight.indirectDiffuse += max(lightMapTexel.rgb, vec3(lmFloor))")},l=new Map;s.scene.traverse(c=>{if(!c.isMesh)return;let h=Array.isArray(c.material)?c.material[0]:c.material,u=h.name;if(!l.has(u)){let f=xd(h),d=new Ot({color:f.color,lightMap:a,lightMapIntensity:t.gain||hb,side:Bt});d.name=u,f.onBeforeCompile&&u==="floor"?d.onBeforeCompile=f.onBeforeCompile:d.onBeforeCompile=o,l.set(u,d)}c.material=l.get(u),c.castShadow=!1,c.receiveShadow=!1}),i.traverse(c=>{let h=(c.name||"").replace(/_/g," ");cb.some(u=>u.test(h))&&c.traverse(u=>{u.isMesh&&(u.visible=!1)})}),zt.add(s.scene),Ht.shadowMap.needsUpdate=!0}function fb(){Ui.updateMatrixWorld(!0);let i=new ws,e=new z,t=new z;for(let n of pt.seats){let s=null;for(let r of[.55,.65,.75])for(let a=0;a<72;a++){let o=a*Math.PI/36;t.set(Math.sin(o),0,Math.cos(o)),e.set(n[0],r,n[1]),i.set(e,t),i.far=.9;let l=i.intersectObject(Ui,!0).find(c=>c.object.visible&&!/chair|mint|trim|pink$/i.test(c.object.material&&c.object.material.name||""));l&&(!s||l.distance<s.d-.01)&&(s={d:l.distance,a:o})}s&&s.d<.8&&(n[2]=Math.atan2(Math.sin(s.a),Math.cos(s.a)))}}function db(i){Ui.updateMatrixWorld(!0);let e=s=>/^Cafe end - cafe order counter/.test((s&&s.name||"").replace(/_/g," ")),t=[];Ui.traverse(s=>{e(s)&&!e(s.parent)&&t.push(s)});for(let s of t){let r=s.parent.worldToLocal(new z(0,0,0)),a=s.parent.worldToLocal(new z(i,0,0));s.position.add(a.sub(r)),s.updateMatrix(),s.updateMatrixWorld(!0)}for(let s of pt.blocks)Math.abs(s[0]-5.246)<.05&&Math.abs(s[1]-4.508)<.05&&(s[0]+=i);let n=(pt.npcs||[]).find(s=>s.id==="cafe");n&&(n.x=5.55)}var Sd=[{p:[6.2,1.5,-4.6],t:[2.5,.8,-1.2]},{p:[.9,1.6,3],t:[-1.5,.7,-2]},{p:[3.4,1.5,3.6],t:[-3,.7,6.2]},{p:[3,1.5,4.5],t:[5.6,1,4.5]},{p:[5.4,1.5,-2.9],t:[4.6,.9,-5.8]},{p:[-6.4,1.6,6],t:[0,.7,2]},{p:[-2,1.7,-3],t:[3,.7,-5.2]},{p:[2.5,2.2,-.5],t:[-4,.4,4]},{p:[-1,1.6,5.8],t:[3,.8,1]},{p:[7,1.5,-2.6],t:[7,.9,2]}];function k0(i){let e=Sd[i%Sd.length],t=960,n=720,s={p:yt.position.clone(),q:yt.quaternion.clone(),fov:yt.fov,vis:Jt.root.visible};Jt.root.visible=!1,Ht.setSize(t,n,!1),oi.setSize(t,n),yt.aspect=t/n,yt.fov=62,yt.updateProjectionMatrix(),yt.position.set(...e.p),yt.lookAt(...e.t),yt.updateMatrixWorld(),zn!=="low"?oi.render():Ht.render(zt,yt);let r=document.createElement("canvas");return r.width=t,r.height=n,r.getContext("2d").drawImage(Ht.domElement,0,0,t,n),yt.position.copy(s.p),yt.quaternion.copy(s.q),yt.fov=s.fov,Jt.root.visible=s.vis,Fh(),r}var Qo=[];function pb(i){i.updateMatrixWorld(!0),i.traverse(e=>{if(!e.isMesh||!e.material||e.material.name!=="mirror")return;let t=e,n=!1;for(;t;)/leaning.mirror/i.test(t.name.replace(/_/g," "))&&(n=!0),t=t.parent;if(!n)return;let s=new pn().setFromObject(e),r=s.getCenter(new z),a=s.getSize(new z),o=.12,l=new z(-Math.cos(o),Math.sin(o),0),c=Math.max(a.x,a.z)-.02,h=a.y/Math.cos(o)-.02,u=Math.min(window.devicePixelRatio||1,2),f=new Ko(new Ki(c,h),{textureWidth:Math.round((jn?384:640)*u*(c/h)*2),textureHeight:Math.round((jn?384:640)*u),color:14674158,clipBias:.003});f.position.copy(r).addScaledVector(l,.02),e.visible=!1,f.lookAt(f.position.clone().add(l)),zt.add(f),Qo.push({ref:f,c:r,pane:e})})}function J0(){for(let i of Qo)i.ref.visible=(zn!=="low"||Nn&&Nn.active)&&Math.hypot(Ie.x-i.c.x,Ie.z-i.c.z)<7,i.pane.visible=!i.ref.visible}var Ni=[],mb={cafe:{opt:{look:"cafe"},say:"\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615"},shop:{opt:{look:"shop"},say:"\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}"}};function gb(){for(let i of pt.npcs||[]){let e=mb[i.id];if(!e)continue;let t=Zf(W0,e.opt);t.root.position.set(i.x,0,i.z),t.root.rotation.y=i.face,t.root.scale.setScalar(1.12),t.root.position.y=i.id==="shop"?.15:.2,zt.add(t.root);let n=document.createElement("div");n.className="bubble",n.textContent=e.say,Et("bubbles").appendChild(n),Ni.push({...i,c:t,el:n,yaw:0})}}var da=new z;function xb(i,e){for(let t of Ni){t.c.animate(i,t.speed||0,e+t.id.length),t.y!==void 0&&(t.c.root.position.set(t.x,t.y,t.z),t.c.root.rotation.y=t.face),t.carry&&(t.c.arms[0].rotation.x=t.c.arms[1].rotation.x=-1.35);let n=Ie.x-t.x,s=Ie.z-t.z,r=Math.hypot(n,s),a=0;if(r<4&&!t.speed&&(a=Math.atan2(n,s)-t.face,a=Math.atan2(Math.sin(a),Math.cos(a)),a=Ai.clamp(a,-.9,.9)),t.yaw+=(a-t.yaw)*Math.min(1,i*5),t.c.head.rotation.y=t.yaw,t.c.head.rotation.x+=((r<4?-.22:0)-t.c.head.rotation.x)*Math.min(1,i*4),r<2.8){da.set(t.x,1.6,t.z).project(yt);let l=je.canvas.getBoundingClientRect(),c=da.z<1&&Math.abs(da.x)<1.1&&Math.abs(da.y)<1.1;t.el.style.transform=`translate(${(da.x*.5+.5)*l.width}px, ${(-da.y*.5+.5)*l.height}px) translate(-50%, -100%)`,t.el.classList.toggle("on",c)}else t.el.classList.remove("on")}}var kn=new ye,z0=performance.now(),H0=0;function vb(){let i=Jo();return Kt?"\u{1FA91} \uC549\uC544\uC11C \uC26C\uB294 \uC911":Ie.z>1.75*i?"\u2615 \uCE74\uD398 \uC88C\uC11D":Ie.x>3.2*i&&Ie.z<-1.6*i?"\u{1F6AA} \uC785\uAD6C":Ie.x>3*i?"\u{1F380} \uBCF5\uB3C4":"\u{1F9F8} \uC9C4\uC5F4\uB300 \uC0AC\uC774"}function Q0(i){let e=Math.min((i-z0)/1e3,.05);if(z0=i,el){if(ma){let o=(An.has("ArrowLeft")||An.has("KeyQ")?1:0)-(An.has("ArrowRight")||An.has("KeyE")?1:0);Ie.yaw+=o*1.7*e;let l=(An.has("KeyW")||An.has("ArrowUp")?1:0)-(An.has("KeyS")||An.has("ArrowDown")?1:0),c=(An.has("KeyD")?1:0)-(An.has("KeyA")?1:0);fn.id!==null&&(l=-fn.y,c=fn.x);let h=Math.hypot(l,c);h>1&&(l/=h,c/=h),Kt&&h>.25&&Zo(),(Kt||F0())&&(l=0,c=0);let u=An.has("ShiftLeft")||An.has("ShiftRight")?1.6:1,f=Math.sin(Ie.yaw),d=Math.cos(Ie.yaw),v=(l*f-c*d)*N0*u,S=(l*d+c*f)*N0*u,g=1-Math.exp(-e*12);kn.x+=(v-kn.x)*g,kn.y+=(S-kn.y)*g;let x=kn.x*e,m=kn.y*e;Math.abs(x)+Math.abs(m)>1e-5&&(dr(Ie.x+x,Ie.z+m)?(Ie.x+=x,Ie.z+=m):(dr(Ie.x+x,Ie.z)?Ie.x+=x:kn.x=0,dr(Ie.x,Ie.z+m)?Ie.z+=m:kn.y=0));let M=Math.hypot(kn.x,kn.y);if(M>.15){let w=Math.atan2(kn.x,kn.y)-Ie.face;w=Math.atan2(Math.sin(w),Math.cos(w)),Ie.face+=w*Math.min(1,e*12)}Jt.animate(e,M,i/1e3,!!Kt),Kn&&Kn.update(e,Ie,Kt),_d&&_d.update(e,i/1e3),un&&un.update(Ie,Kt),fr&&fr.update(e,i/1e3),Di&&Di.update(e,i/1e3),as&&as.update(Ie,Kt),Nn&&(Nn.update(Kt),Nn.applyPose(i/1e3)),Et("diary-btn").hidden=!Kt||!xi||xi.isOpen,Et("actions").style.visibility=F0()||Di&&Di.active||fr&&fr.active?"hidden":"",xb(e,i/1e3),J0(),!U0&&Ie.z>2*Jo()&&Ie.x<3.6*Jo()&&(U0=!0,Yn("\uCE74\uD398 \uC88C\uC11D\uC5D0 \uB3C4\uCC29\uD588\uC5B4\uC694 \u2615"))}let t=Math.sin(Ie.pitch),n=Math.cos(Ie.pitch),s=Math.sin(Ie.yaw),r=Math.cos(Ie.yaw);if(Jt.root.position.set(Ie.x,0,Ie.z),Jt.root.rotation.y=Ie.face,Nn&&Nn.camera())Jt.root.visible=!0;else if(Di&&Di.active)yt.position.set(Ie.x,dd,Ie.z),yt.lookAt(Ie.x+s*n,dd+t,Ie.z+r*n),Jt.root.visible=!1,Di.place(yt,Ie.yaw);else if(ls){let o=Ie.x,l=.9,c=Ie.z,h=-s,u=-r,f=X0,d=n*f,v=d;for(let m=.2;m<=d;m+=.08)if(!nb(o+h*m,c+u*m)){v=Math.max(.15,m-.15);break}Is+=(v-Is)*Math.min(1,e*(v<Is?18:3));let S=(pt.ceiling||2.65)-.25,g=Math.min(S,l-t*f);yt.position.set(o+h*Is,g,c+u*Is);let x=Ai.clamp(1-Is/d,0,1);yt.lookAt(o+s*x*1.8,l+.05+x*.15,c+r*x*1.8),x>.7&&(yt.position.y=Math.min(S+.03,g+.1)),Jt.root.visible=!0}else{let o=Kt?1.02:dd;yt.position.set(Ie.x,o,Ie.z),yt.lookAt(Ie.x+s*n,o+t,Ie.z+r*n)}zn!=="low"?oi.render():Ht.render(zt,yt),Nn&&Nn.afterRender(Ht.domElement);let a=vb();je.where.textContent!==a&&(je.where.textContent=a),(H0=(H0+1)%2)===0&&ob()}requestAnimationFrame(Q0)}requestAnimationFrame(Q0);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
