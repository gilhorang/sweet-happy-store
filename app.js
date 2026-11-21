(()=>{var Op=0,Cu=1,Bp=2;var er=1,kp=2,jr=3,Ei=0,gn=1,Bt=2,hn=0,Zr=1,$n=2,Pu=3,Iu=4,uc=5;var ni=100,zp=101,Hp=102,Gp=103,Vp=104,tr=200,Wp=201,Xp=202,$p=203,Lu=204,Du=205,go=206,qp=207,xo=208,Yp=209,Kp=210,jp=211,Zp=212,Jp=213,Qp=214,Ul=0,Fl=1,Ol=2,Nr=3,Bl=4,kl=5,zl=6,Hl=7,fc=0,em=1,tm=2,wi=0,vo=1,_o=2,yo=3,Mo=4,So=5,bo=6,nr=7,fu="attached",nm="detached",Nu=300,ir=301,Jr=302,dc=303,pc=304,Sn=1e3,Jn=1001,Ur=1002,Ut=1003,mc=1004;var sr=1005;var nn=1006,Qr=1007;var ii=1008;var bn=1009,Uu=1010,Fu=1011,ea=1012,gc=1013,di=1014,qn=1015,Gt=1016,xc=1017,vc=1018,is=1020,Ou=35902,Bu=35899,ku=1021,zu=1022,On=1023,Xi=1026,pi=1027,_c=1028,yc=1029,Rs=1030,Mc=1031;var Sc=1033,To=33776,Eo=33777,wo=33778,Ao=33779,bc=35840,Tc=35841,Ec=35842,wc=35843,Ac=36196,Rc=37492,Cc=37496,Pc=37488,Ic=37489,Ro=37490,Lc=37491,Dc=37808,Nc=37809,Uc=37810,Fc=37811,Oc=37812,Bc=37813,kc=37814,zc=37815,Hc=37816,Gc=37817,Vc=37818,Wc=37819,Xc=37820,$c=37821,qc=36492,Yc=36494,Kc=36495,jc=36283,Zc=36284,Co=36285,Jc=36286;var Vs=2300,Ws=2301,Dl=2302,du=2303,pu=2400,mu=2401,gu=2402,im=2500;var Hu=0,Po=1,ta=2,sm=3200;var na=0,rm=1,ss="",Ct="srgb",Pn="srgb-linear",Na="linear",bt="srgb";var Nl=7680;var am=519,om=512,lm=513,cm=514,Gu=515,hm=516,um=517,Vu=518,Wu=519,Xu=35044;var $u="300 es",Qn=2e3,Fr=2001;function og(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fm(){let i=Or("canvas");return i.style.display="block",i}var Hd={},Br=null;function Ua(...i){let e="THREE."+i.shift();Br?Br("log",e,...i):console.log(e,...i)}function dm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=dm(i);let e="THREE."+i.shift();if(Br)Br("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=dm(i);let e="THREE."+i.shift();if(Br)Br("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Gs(...i){let e=i.join(" ");e in Hd||(Hd[e]=!0,qe(...i))}function pm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var mm={[Ul]:Ul,[Ol]:zl,[Bl]:Bl,[Nr]:kl,[Fl]:Fl,[zl]:Ol,[Hl]:Hl,[kl]:Nr},Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gd=1234567,Pa=Math.PI/180,Xs=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function qu(i,e){return(i%e+e)%e}function cg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hg(i,e,t){return i!==e?(t-i)/(e-i):0}function Ia(i,e,t){return(1-t)*i+t*e}function ug(i,e,t,n){return Ia(i,e,1-Math.exp(-t*n))}function fg(i,e=1){return e-Math.abs(qu(i,e*2)-e)}function dg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gg(i,e){return i+Math.random()*(e-i)}function xg(i){return i*(.5-Math.random())}function vg(i){i!==void 0&&(Gd=i);let e=Gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _g(i){return i*Pa}function yg(i){return i*Xs}function Mg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Sg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ku(i,e){if(e.constructor===Float32Array)return i;let t=Qc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function ju(i,e){if(e.constructor===Float32Array)return i;let t=Qc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ai={DEG2RAD:Pa,RAD2DEG:Xs,generateUUID:mi,clamp:ut,euclideanModulo:qu,mapLinear:cg,inverseLerp:hg,lerp:Ia,damp:ug,pingpong:fg,smoothstep:dg,smootherstep:pg,randInt:mg,randFloat:gg,randFloatSpread:xg,seededRandom:vg,degToRad:_g,radToDeg:yg,isPowerOfTwo:Mg,ceilPowerOfTwo:Sg,floorPowerOfTwo:Yu,setQuaternionFromProperEuler:bg,normalize:ju,denormalize:Ku},nf=class nf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nf.prototype.isVector2=!0;var ye=nf,Wn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==f||c!==d||h!==g){let p=l*f+c*d+h*g+u*v;p<0&&(f=-f,d=-d,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),_=Math.sin(M);m=Math.sin(m*M)/_,o=Math.sin(o*M)/_,l=l*m+f*o,c=c*m+d*o,h=h*m+g*o,u=u*m+v*o}else{l=l*m+f*o,c=c*m+d*o,h=h*m+g*o,u=u*m+v*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sf=class sf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bh.copy(this).projectOnVector(e),this.sub(Bh)}reflect(e){return this.sub(Bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sf.prototype.isVector3=!0;var H=sf,Bh=new H,Vd=new Wn,rf=class rf{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],p=s[3],m=s[6],M=s[1],_=s[4],y=s[7],T=s[2],E=s[5],x=s[8];return r[0]=a*v+o*M+l*T,r[3]=a*p+o*_+l*E,r[6]=a*m+o*y+l*x,r[1]=c*v+h*M+u*T,r[4]=c*p+h*_+u*E,r[7]=c*m+h*y+u*x,r[2]=f*v+d*M+g*T,r[5]=f*p+d*_+g*E,r[8]=f*m+d*y+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kh.makeScale(e,t)),this}rotate(e){return Gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kh.makeRotation(-e)),this}translate(e,t){return Gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rf.prototype.isMatrix3=!0;var st=rf,kh=new st,Wd=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xd=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tg(){let i={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===bt&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(s.r=Dr(s.r),s.g=Dr(s.g),s.b=Dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?Na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pn]:{primaries:e,whitePoint:n,transfer:Na,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}var ct=Tg();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mr,Gl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mr===void 0&&(mr=Or("canvas")),mr.width=e.width,mr.height=e.height;let s=mr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Or("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Eg=0,kr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zh(s[a].image)):r.push(zh(s[a]))}else r=zh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function zh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Gl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var wg=0,Hh=new H,jt=class i extends Mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Jn,s=Jn,r=nn,a=ii,o=On,l=bn,c=i.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=mi(),this.name="",this.source=new kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Hh).x}get height(){return this.source.getSize(Hh).y}get depth(){return this.source.getSize(Hh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Nu;jt.DEFAULT_ANISOTROPY=1;var af=class af{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(d+1)/2,T=(m+1)/2,E=(h+f)/4,x=(u+v)/4,b=(g+p)/4;return _>y&&_>T?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=x/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=b/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=x/r,s=b/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-v)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};af.prototype.isVector4=!0;var Tt=af,Vl=class extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new jt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new kr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends Vl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fa=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wl=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var hc=class hc{constructor(e,t,n,s,r,a,o,l,c,h,u,f,d,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,d,g,v,p)}set(e,t,n,s,r,a,o,l,c,h,u,f,d,g,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/gr.setFromMatrixColumn(e,0).length(),r=1/gr.setFromMatrixColumn(e,1).length(),a=1/gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ag,e,Rg)}lookAt(e,t,n){let s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),fs.crossVectors(n,Hn),fs.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),fs.crossVectors(n,Hn)),fs.normalize(),il.crossVectors(Hn,fs),s[0]=fs.x,s[4]=il.x,s[8]=Hn.x,s[1]=fs.y,s[5]=il.y,s[9]=Hn.y,s[2]=fs.z,s[6]=il.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],M=n[3],_=n[7],y=n[11],T=n[15],E=s[0],x=s[4],b=s[8],P=s[12],S=s[1],R=s[5],I=s[9],z=s[13],L=s[2],w=s[6],U=s[10],D=s[14],O=s[3],k=s[7],F=s[11],B=s[15];return r[0]=a*E+o*S+l*L+c*O,r[4]=a*x+o*R+l*w+c*k,r[8]=a*b+o*I+l*U+c*F,r[12]=a*P+o*z+l*D+c*B,r[1]=h*E+u*S+f*L+d*O,r[5]=h*x+u*R+f*w+d*k,r[9]=h*b+u*I+f*U+d*F,r[13]=h*P+u*z+f*D+d*B,r[2]=g*E+v*S+p*L+m*O,r[6]=g*x+v*R+p*w+m*k,r[10]=g*b+v*I+p*U+m*F,r[14]=g*P+v*z+p*D+m*B,r[3]=M*E+_*S+y*L+T*O,r[7]=M*x+_*R+y*w+T*k,r[11]=M*b+_*I+y*U+T*F,r[15]=M*P+_*z+y*D+T*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],p=e[11],m=e[15],M=l*d-c*f,_=o*d-c*u,y=o*f-l*u,T=a*d-c*h,E=a*f-l*h,x=a*u-o*h;return t*(v*M-p*_+m*y)-n*(g*M-p*T+m*E)+s*(g*_-v*T+m*x)-r*(g*y-v*E+p*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],p=e[14],m=e[15],M=t*o-n*a,_=t*l-s*a,y=t*c-r*a,T=n*l-s*o,E=n*c-r*o,x=s*c-r*l,b=h*v-u*g,P=h*p-f*g,S=h*m-d*g,R=u*p-f*v,I=u*m-d*v,z=f*m-d*p,L=M*z-_*I+y*R+T*S-E*P+x*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/L;return e[0]=(o*z-l*I+c*R)*w,e[1]=(s*I-n*z-r*R)*w,e[2]=(v*x-p*E+m*T)*w,e[3]=(f*E-u*x-d*T)*w,e[4]=(l*S-a*z-c*P)*w,e[5]=(t*z-s*S+r*P)*w,e[6]=(p*y-g*x-m*_)*w,e[7]=(h*x-f*y+d*_)*w,e[8]=(a*I-o*S+c*b)*w,e[9]=(n*S-t*I-r*b)*w,e[10]=(g*E-v*y+m*M)*w,e[11]=(u*y-h*E-d*M)*w,e[12]=(o*P-a*R-l*b)*w,e[13]=(t*R-n*P+s*b)*w,e[14]=(v*_-g*T-p*M)*w,e[15]=(h*T-u*_+f*M)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,v=a*h,p=a*u,m=o*u,M=l*c,_=l*h,y=l*u,T=n.x,E=n.y,x=n.z;return s[0]=(1-(v+m))*T,s[1]=(d+y)*T,s[2]=(g-_)*T,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+m))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(g+_)*x,s[9]=(p-M)*x,s[10]=(1-(f+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=gr.set(s[0],s[1],s[2]).length(),o=gr.set(s[4],s[5],s[6]).length(),l=gr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ci.copy(this);let c=1/a,h=1/o,u=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,t.setFromRotationMatrix(ci),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Qn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Qn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Fr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Qn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Qn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Fr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};hc.prototype.isMatrix4=!0;var Ye=hc,gr=new H,ci=new Ye,Ag=new H(0,0,0),Rg=new H(1,1,1),fs=new H,il=new H,Hn=new H,$d=new Ye,qd=new Wn,Si=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $d.makeRotationFromQuaternion(e),this.setFromRotationMatrix($d,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qd.setFromEuler(this),this.setFromQuaternion(qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cg=0,Yd=new H,xr=new Wn,Oi=new Ye,sl=new H,xa=new H,Pg=new H,Ig=new Wn,Kd=new H(1,0,0),jd=new H(0,1,0),Zd=new H(0,0,1),Jd={type:"added"},Lg={type:"removed"},vr={type:"childadded",child:null},Gh={type:"childremoved",child:null},Dt=class i extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Si,n=new Wn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new st}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis(Zd,e)}translateOnAxis(e,t){return Yd.copy(e).applyQuaternion(this.quaternion),this.position.add(Yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis(Zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sl.copy(e):sl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(xa,sl,this.up):Oi.lookAt(sl,xa,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),xr.setFromRotationMatrix(Oi),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jd),vr.child=e,this.dispatchEvent(vr),vr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lg),Gh.child=e,this.dispatchEvent(Gh),Gh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jd),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,Pg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,Ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Dt.DEFAULT_UP=new H(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tt=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dg={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Vh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=qu(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Vh(a,r,e+1/3),this.g=Vh(a,r,e),this.b=Vh(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=gm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return ct.workingToColorSpace(Mn.copy(this),e),Math.round(ut(Mn.r*255,0,255))*65536+Math.round(ut(Mn.g*255,0,255))*256+Math.round(ut(Mn.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,s=Mn.g,r=Mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Ct){ct.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,s=Mn.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(rl);let n=Ia(ds.h,rl.h,t),s=Ia(ds.s,rl.s,t),r=Ia(ds.l,rl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new De;De.NAMES=gm;var Oa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$s=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=new H,Bi=new H,Wh=new H,ki=new H,_r=new H,yr=new H,Qd=new H,Xh=new H,$h=new H,qh=new H,Yh=new Tt,Kh=new Tt,jh=new Tt,Vi=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),Bi.subVectors(n,t),Wh.subVectors(e,t);let a=hi.dot(hi),o=hi.dot(Bi),l=hi.dot(Wh),c=Bi.dot(Bi),h=Bi.dot(Wh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Yh.setScalar(0),Kh.setScalar(0),jh.setScalar(0),Yh.fromBufferAttribute(e,t),Kh.fromBufferAttribute(e,n),jh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Yh,r.x),a.addScaledVector(Kh,r.y),a.addScaledVector(jh,r.z),a}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),Bi.subVectors(e,t),hi.cross(Bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),hi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;_r.subVectors(s,n),yr.subVectors(r,n),Xh.subVectors(e,n);let l=_r.dot(Xh),c=yr.dot(Xh);if(l<=0&&c<=0)return t.copy(n);$h.subVectors(e,s);let h=_r.dot($h),u=yr.dot($h);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(_r,a);qh.subVectors(e,r);let d=_r.dot(qh),g=yr.dot(qh);if(g>=0&&d<=g)return t.copy(r);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(yr,o);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Qd.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Qd,o);let m=1/(p+v+f);return a=v*m,o=f*m,t.copy(n).addScaledVector(_r,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ui):ui.fromBufferAttribute(r,a),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),al.copy(n.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),ol.subVectors(this.max,va),Mr.subVectors(e.a,va),Sr.subVectors(e.b,va),br.subVectors(e.c,va),ps.subVectors(Sr,Mr),ms.subVectors(br,Sr),Os.subVectors(Mr,br);let t=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Os.z,Os.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Os.z,0,-Os.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Os.y,Os.x,0];return!Zh(t,Mr,Sr,br,ol)||(t=[1,0,0,0,1,0,0,0,1],!Zh(t,Mr,Sr,br,ol))?!1:(ll.crossVectors(ps,ms),t=[ll.x,ll.y,ll.z],Zh(t,Mr,Sr,br,ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zi=[new H,new H,new H,new H,new H,new H,new H,new H],ui=new H,al=new pn,Mr=new H,Sr=new H,br=new H,ps=new H,ms=new H,Os=new H,va=new H,ol=new H,ll=new H,Bs=new H;function Zh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Bs.fromArray(i,r);let o=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),l=e.dot(Bs),c=t.dot(Bs),h=n.dot(Bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var en=new H,cl=new ye,Ng=0,qt=class extends Mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ng++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xu,this.updateRanges=[],this.gpuType=qn,this.version=0,this._normalizationScale=e!==void 0?Qc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cl.fromBufferAttribute(this,t),cl.applyMatrix3(e),this.setXY(t,cl.x,cl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ku(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ju(e,this.array)}};var Ba=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ka=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ug=new pn,_a=new H,Jh=new H,Un=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ug.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);let t=_a.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_a,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Jh)),this.expandByPoint(_a.copy(e.center).sub(Jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fg=0,Zn=new Ye,Qh=new Dt,Tr=new H,Gn=new pn,ya=new pn,cn=new H,At=class i extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(og(e)?ka:Ba)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Gn.min,ya.min),Gn.expandByPoint(cn),cn.addVectors(Gn.max,ya.max),Gn.expandByPoint(cn)):(Gn.expandByPoint(ya.min),Gn.expandByPoint(ya.max))}Gn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)cn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(cn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)cn.fromBufferAttribute(o,c),l&&(Tr.fromBufferAttribute(e,c),cn.add(Tr)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new H,l[P]=new H;let h=new H,u=new H,f=new H,d=new ye,g=new ye,v=new ye,p=new H,m=new H;function M(P,S,R){c[P]=c[S]=c[R]=1,h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,R),d.fromBufferAttribute(r,P),g.fromBufferAttribute(r,S),v.fromBufferAttribute(r,R),u.sub(h),f.sub(h),g.sub(d),v.sub(d);let I=1/(g.x*v.y-v.x*g.y);isFinite(I)&&(p.copy(u).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(I),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(I),o[P].add(p),o[S].add(p),o[R].add(p),l[P].add(m),l[S].add(m),l[R].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,S=_.length;P<S;++P){let R=_[P],I=R.start,z=R.count;for(let L=I,w=I+z;L<w;L+=3)M(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let y=new H,T=new H,E=new H,x=new H;function b(P){E.fromBufferAttribute(s,P),x.copy(E);let S=o[P];y.copy(S),y.sub(E.multiplyScalar(E.dot(S))).normalize(),T.crossVectors(x,S);let I=T.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,I)}for(let P=0,S=n.count;P<S;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,h=new H,u=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new qt(f,h,u)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xu,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ep(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ep(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ep(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=mi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Cn=new H,vs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Qc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ku(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ju(e,this.data.array)}},eu=new H,Og=new H,Bg=new st,Vn=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=eu.subVectors(n,t).cross(Og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(eu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Bg.getNormalMatrix(e),s=this.coplanarPoint(eu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},kg=0,mn=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Zr,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lu,this.blendDst=Du,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nl,this.stencilZFail=Nl,this.stencilZPass=Nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gr=class extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Er,Ma=new H,wr=new H,Ar=new H,Rr=new ye,Sa=new ye,xm=new Ye,hl=new H,ba=new H,ul=new H,tp=new ye,tu=new ye,np=new ye,za=class extends Dt{constructor(e=new Gr){if(super(),this.isSprite=!0,this.type="Sprite",Er===void 0){Er=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qs(t,5);Er.setIndex([0,1,2,0,2,3]),Er.setAttribute("position",new vs(n,3,0,!1)),Er.setAttribute("uv",new vs(n,2,3,!1))}this.geometry=Er,this.material=e,this.center=new ye(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wr.setFromMatrixScale(this.matrixWorld),xm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Ar.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;fl(hl.set(-.5,-.5,0),Ar,a,wr,s,r),fl(ba.set(.5,-.5,0),Ar,a,wr,s,r),fl(ul.set(.5,.5,0),Ar,a,wr,s,r),tp.set(0,0),tu.set(1,0),np.set(1,1);let o=e.ray.intersectTriangle(hl,ba,ul,!1,Ma);if(o===null&&(fl(ba.set(-.5,.5,0),Ar,a,wr,s,r),tu.set(0,1),o=e.ray.intersectTriangle(hl,ul,ba,!1,Ma),o===null))return;let l=e.ray.origin.distanceTo(Ma);l<e.near||l>e.far||t.push({distance:l,point:Ma.clone(),uv:Vi.getInterpolation(Ma,hl,ba,ul,tp,tu,np,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function fl(i,e,t,n,s,r){Rr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Sa.x=r*Rr.x-s*Rr.y,Sa.y=s*Rr.x+r*Rr.y):Sa.copy(Rr),i.copy(e),i.x+=Sa.x,i.y+=Sa.y,i.applyMatrix4(xm)}var Hi=new H,nu=new H,dl=new H,pl=new H,_s=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){nu.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),pl.copy(this.origin).sub(nu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(dl),o=pl.dot(this.direction),l=-pl.dot(dl),c=pl.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nu).addScaledVector(dl,f),d}intersectSphere(e,t){if(e.radius<0)return null;Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,g=t.x-a.x,v=t.y-a.y,p=t.z-a.z,m=n.x-a.x,M=n.y-a.y,_=n.z-a.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(h),x,b,P,S,R,I,z,L,w,U,D,O;if(y>=T&&y>=E?(P=l,I=u,w=g,O=m,l>=0?(x=c,b=h,S=f,R=d,z=v,L=p,U=M,D=_):(x=h,b=c,S=d,R=f,z=p,L=v,U=_,D=M)):T>=E?(P=c,I=f,w=v,O=M,c>=0?(x=h,b=l,S=d,R=u,z=p,L=g,U=_,D=m):(x=l,b=h,S=u,R=d,z=g,L=p,U=m,D=_)):(P=h,I=d,w=p,O=_,h>=0?(x=l,b=c,S=u,R=f,z=g,L=v,U=m,D=M):(x=c,b=l,S=f,R=u,z=v,L=g,U=M,D=m)),P===0)return null;let k=x/P,F=b/P,B=1/P,$=S-k*I,ee=R-F*I,Z=z-k*w,V=L-F*w,ne=U-k*O,q=D-F*O,J=ne*V-q*Z,W=$*q-ee*ne,Q=Z*ee-V*$;if(s){if(J<0||W<0||Q<0)return null}else if((J<0||W<0||Q<0)&&(J>0||W>0||Q>0))return null;let oe=J+W+Q;if(oe===0)return null;let ie=B*(J*I+W*w+Q*O);return(oe>0?ie<0:ie>0)?null:this.at(ie/oe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ip=new Ye,ks=new _s,ml=new Un,sp=new H,gl=new H,xl=new H,vl=new H,iu=new H,_l=new H,rp=new H,yl=new H,Ze=class extends Dt{constructor(e=new At,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){_l.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(iu.fromBufferAttribute(u,e),a?_l.addScaledVector(iu,h):_l.addScaledVector(iu.sub(t),h))}t.add(_l)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(ml.containsPoint(ks.origin)===!1&&(ks.intersectSphere(ml,sp)===null||ks.origin.distanceToSquared(sp)>(e.far-e.near)**2))&&(ip.copy(r).invert(),ks.copy(e.ray).applyMatrix4(ip),!(n.boundingBox!==null&&ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let p=f[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),_=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,T=_;y<T;y+=3){let E=o.getX(y),x=o.getX(y+1),b=o.getX(y+2);s=Ml(this,m,e,n,c,h,u,E,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){let M=o.getX(p),_=o.getX(p+1),y=o.getX(p+2);s=Ml(this,a,e,n,c,h,u,M,_,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let p=f[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),_=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,T=_;y<T;y+=3){let E=y,x=y+1,b=y+2;s=Ml(this,m,e,n,c,h,u,E,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){let M=p,_=p+1,y=p+2;s=Ml(this,a,e,n,c,h,u,M,_,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function zg(i,e,t,n,s,r,a,o){let l;if(e.side===gn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ei,o),l===null)return null;yl.copy(o),yl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(yl);return c<t.near||c>t.far?null:{distance:c,point:yl.clone(),object:i}}function Ml(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,gl),i.getVertexPosition(l,xl),i.getVertexPosition(c,vl);let h=zg(i,e,t,n,gl,xl,vl,rp);if(h){let u=new H;Vi.getBarycoord(rp,gl,xl,vl,u),s&&(h.uv=Vi.getInterpolatedAttribute(s,o,l,c,u,new ye)),r&&(h.uv1=Vi.getInterpolatedAttribute(r,o,l,c,u,new ye)),a&&(h.normal=Vi.getInterpolatedAttribute(a,o,l,c,u,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new H,materialIndex:0};Vi.getNormal(gl,xl,vl,f.normal),h.face=f,h.barycoord=u}return h}var Ta=new Tt,ap=new Tt,op=new Tt,Hg=new Tt,lp=new Ye,Sl=new H,su=new Un,cp=new Ye,ru=new _s,Ha=class extends Ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fu,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sl),this.boundingBox.expandByPoint(Sl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sl),this.boundingSphere.expandByPoint(Sl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),su.copy(this.boundingSphere),su.applyMatrix4(s),e.ray.intersectsSphere(su)!==!1&&(cp.copy(s).invert(),ru.copy(e.ray).applyMatrix4(cp),!(this.boundingBox!==null&&ru.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ru)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nm?this.bindMatrixInverse.copy(this.bindMatrix).invert():qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;ap.fromBufferAttribute(s.attributes.skinIndex,e),op.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ta.copy(t),t.set(0,0,0,0)):(Ta.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ta.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=op.getComponent(r);if(a!==0){let o=ap.getComponent(r);lp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Hg.copy(Ta).applyMatrix4(lp),a)}}return t.isVector4&&(t.w=Ta.w),t.applyMatrix4(this.bindMatrixInverse)}},Vr=class extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ei=class extends jt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ut,h=Ut,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hp=new Ye,Gg=new Ye,Ga=class i{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Gg;hp.multiplyMatrices(o,t[r]),hp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ei(t,e,e,On,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(qe("Skeleton: No bone found with UUID:",r),a=new Vr),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},$i=class extends qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cr=new Ye,up=new Ye,bl=[],fp=new pn,Vg=new Ye,Ea=new Ze,wa=new Un,qi=class extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cr),fp.copy(e.boundingBox).applyMatrix4(Cr),this.boundingBox.union(fp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cr),wa.copy(e.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(n),e.ray.intersectsSphere(wa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cr),up.multiplyMatrices(n,Cr),Ea.matrixWorld=up,Ea.raycast(e,bl);for(let a=0,o=bl.length;a<o;a++){let l=bl[a];l.instanceId=r,l.object=this,t.push(l)}bl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ei(new Float32Array(s*this.count),s,this.count,_c,qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zs=new Un,Wg=new ye(.5,.5),Tl=new H,ys=class{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],p=r[10],m=r[11],M=r[12],_=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,d-h,m-g,T-M).normalize(),s[1].setComponents(c+a,d+h,m+g,T+M).normalize(),s[2].setComponents(c+o,d+u,m+v,T+_).normalize(),s[3].setComponents(c-o,d-u,m-v,T-_).normalize(),n)s[4].setComponents(l,f,p,y).normalize(),s[5].setComponents(c-l,d-f,m-p,T-y).normalize();else if(s[4].setComponents(c-l,d-f,m-p,T-y).normalize(),t===Qn)s[5].setComponents(c+l,d+f,m+p,T+y).normalize();else if(t===Fr)s[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);let t=Wg.distanceTo(e.center);return zs.radius=.7071067811865476+t,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Tl.x=s.normal.x>0?e.max.x:e.min.x,Tl.y=s.normal.y>0?e.max.y:e.min.y,Tl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},dp=new Ye,Xl=class i{constructor(){this.coordinateSystem=Qn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];dp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ys),n[s].setFromProjectionMatrix(dp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ys),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Ms=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$l=new H,ql=new H,pp=new Ye,Aa=new _s,El=new Un,au=new H,mp=new H,Ys=class extends Dt{constructor(e=new At,t=new Ms){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$l.fromBufferAttribute(t,s-1),ql.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$l.distanceTo(ql);e.setAttribute("lineDistance",new ht(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(s),El.radius+=r,e.ray.intersectsSphere(El)===!1)return;pp.copy(s).invert(),Aa.copy(e.ray).applyMatrix4(pp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,p=g-1;v<p;v+=c){let m=h.getX(v),M=h.getX(v+1),_=wl(this,e,Aa,l,m,M,v);_&&t.push(_)}if(this.isLineLoop){let v=h.getX(g-1),p=h.getX(d),m=wl(this,e,Aa,l,v,p,g-1);m&&t.push(m)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=d,p=g-1;v<p;v+=c){let m=wl(this,e,Aa,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=wl(this,e,Aa,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if($l.fromBufferAttribute(o,s),ql.fromBufferAttribute(o,r),t.distanceSqToSegment($l,ql,au,mp)>n)return;au.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(au);if(!(c<e.near||c>e.far))return{distance:c,point:mp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var gp=new H,xp=new H,Ks=class extends Ys{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)gp.fromBufferAttribute(t,s),xp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gp.distanceTo(xp);e.setAttribute("lineDistance",new ht(n,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Va=class extends Ys{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Yi=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vp=new Ye,xu=new _s,Al=new Un,Rl=new H,Ss=class extends Dt{constructor(e=new At,t=new Yi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Al.copy(n.boundingSphere),Al.applyMatrix4(s),Al.radius+=r,e.ray.intersectsSphere(Al)===!1)return;vp.copy(s).invert(),xu.copy(e.ray).applyMatrix4(vp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,v=d;g<v;g++){let p=c.getX(g);Rl.fromBufferAttribute(u,p),_p(Rl,p,l,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,v=d;g<v;g++)Rl.fromBufferAttribute(u,g),_p(Rl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _p(i,e,t,n,s,r,a){let o=xu.distanceSqToPoint(i);if(o<t){let l=new H;xu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Wa=class extends jt{constructor(e=[],t=ir,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ti=class extends jt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends jt{constructor(e,t,n=di,s,r,a,o=Ut,l=Ut,c,h=Xi,u=1){if(h!==Xi&&h!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xa=class extends fi{constructor(e,t=di,n=ir,s,r,a=Ut,o=Ut,l,c=Xi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$a=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},kt=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function g(v,p,m,M,_,y,T,E,x,b,P){let S=y/x,R=T/b,I=y/2,z=T/2,L=E/2,w=x+1,U=b+1,D=0,O=0,k=new H;for(let F=0;F<U;F++){let B=F*R-z;for(let $=0;$<w;$++){let ee=$*S-I;k[v]=ee*M,k[p]=B*_,k[m]=L,c.push(k.x,k.y,k.z),k[v]=0,k[p]=0,k[m]=E>0?1:-1,h.push(k.x,k.y,k.z),u.push($/x),u.push(1-F/b),D+=1}}for(let F=0;F<b;F++)for(let B=0;B<x;B++){let $=f+B+w*F,ee=f+B+w*(F+1),Z=f+(B+1)+w*(F+1),V=f+(B+1)+w*F;l.push($,ee,V),l.push(ee,Z,V),O+=6}o.addGroup(d,O,P),d+=O,f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},qa=class i extends At{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,g=n*2+r,v=s+1,p=new H,m=new H;for(let M=0;M<=g;M++){let _=0,y=0,T=0,E=0;if(M<=n){let P=M/n,S=P*Math.PI/2;y=-h-e*Math.cos(S),T=e*Math.sin(S),E=-e*Math.cos(S),_=P*u}else if(M<=n+r){let P=(M-n)/r;y=-h+P*t,T=e,E=0,_=u+P*f}else{let P=(M-n-r)/n,S=P*Math.PI/2;y=h+e*Math.sin(S),T=e*Math.cos(S),E=e*Math.sin(S),_=u+f+P*u}let x=Math.max(0,Math.min(1,_/d)),b=0;M===0?b=.5/s:M===g&&(b=-.5/s);for(let P=0;P<=s;P++){let S=P/s,R=S*Math.PI*2,I=Math.sin(R),z=Math.cos(R);m.x=-T*z,m.y=y,m.z=T*I,o.push(m.x,m.y,m.z),p.set(-T*z,E,T*I),p.normalize(),l.push(p.x,p.y,p.z),c.push(S+b,x)}if(M>0){let P=(M-1)*v;for(let S=0;S<s;S++){let R=P+S,I=P+S+1,z=M*v+S,L=M*v+S+1;a.push(R,I,z),a.push(I,L,z)}}}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ya=class i extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new H,h=new ye;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ot=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,v=[],p=n/2,m=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(d,2));function M(){let y=new H,T=new H,E=0,x=(t-e)/n;for(let b=0;b<=r;b++){let P=[],S=b/r,R=S*(t-e)+e;for(let I=0;I<=s;I++){let z=I/s,L=z*l+o,w=Math.sin(L),U=Math.cos(L);T.x=R*w,T.y=-S*n+p,T.z=R*U,u.push(T.x,T.y,T.z),y.set(w,x,U).normalize(),f.push(y.x,y.y,y.z),d.push(z,1-S),P.push(g++)}v.push(P)}for(let b=0;b<s;b++)for(let P=0;P<r;P++){let S=v[P][b],R=v[P+1][b],I=v[P+1][b+1],z=v[P][b+1];(e>0||P!==0)&&(h.push(S,R,z),E+=3),(t>0||P!==r-1)&&(h.push(R,I,z),E+=3)}c.addGroup(m,E,0),m+=E}function _(y){let T=g,E=new ye,x=new H,b=0,P=y===!0?e:t,S=y===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,p*S,0),f.push(0,S,0),d.push(.5,.5),g++;let R=g;for(let I=0;I<=s;I++){let L=I/s*l+o,w=Math.cos(L),U=Math.sin(L);x.x=P*U,x.y=p*S,x.z=P*w,u.push(x.x,x.y,x.z),f.push(0,S,0),E.x=w*.5+.5,E.y=U*.5*S+.5,d.push(E.x,E.y),g++}for(let I=0;I<s;I++){let z=T+I,L=R+I;y===!0?h.push(L,L+1,z):h.push(L+1,L,z),b+=3}c.addGroup(m,b,y===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bs=class i extends ot{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ye:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,s=[],r=[],a=[],o=new H,l=new Ye;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new H)}r[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ut(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ut(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Wr=class extends Xn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ye){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Yl=class extends Wr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Zu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var yp=new H,Mp=new H,ou=new Zu,lu=new Zu,cu=new Zu,Kl=class extends Xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new H){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Mp.subVectors(s[0],s[1]).add(s[0]),c=Mp);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(yp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yp),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),ou.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,p),lu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,p),cu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(ou.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),lu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),cu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ou.calc(l),lu.calc(l),cu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sp(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Xg(i,e){let t=1-i;return t*t*e}function $g(i,e){return 2*(1-i)*i*e}function qg(i,e){return i*i*e}function La(i,e,t,n){return Xg(i,e)+$g(i,t)+qg(i,n)}function Yg(i,e){let t=1-i;return t*t*t*e}function Kg(i,e){let t=1-i;return 3*t*t*i*e}function jg(i,e){return 3*(1-i)*i*i*e}function Zg(i,e){return i*i*i*e}function Da(i,e,t,n,s){return Yg(i,e)+Kg(i,t)+jg(i,n)+Zg(i,s)}var Ka=class extends Xn{constructor(e=new ye,t=new ye,n=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Da(e,s.x,r.x,a.x,o.x),Da(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jl=class extends Xn{constructor(e=new H,t=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Da(e,s.x,r.x,a.x,o.x),Da(e,s.y,r.y,a.y,o.y),Da(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends Xn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zl=class extends Xn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Xn{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(La(e,s.x,r.x,a.x),La(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jl=class extends Xn{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(La(e,s.x,r.x,a.x),La(e,s.y,r.y,a.y),La(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Sp(o,l.x,c.x,h.x,u.x),Sp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ye().fromArray(s))}return this}},vu=Object.freeze({__proto__:null,ArcCurve:Yl,CatmullRomCurve3:Kl,CubicBezierCurve:Ka,CubicBezierCurve3:jl,EllipseCurve:Wr,LineCurve:ja,LineCurve3:Zl,QuadraticBezierCurve:Za,QuadraticBezierCurve3:Jl,SplineCurve:Ja}),Ql=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new vu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Qa=class extends Ql{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ja(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Za(this.currentPoint.clone(),new ye(e,t),new ye(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ka(this.currentPoint.clone(),new ye(e,t),new ye(n,s),new ye(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ja(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Wr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ts=class extends Qa{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Qa().fromJSON(s))}return this}};function Jg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=vm(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=ix(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let f=t;f<s;f+=t){let d=i[f],g=i[f+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return eo(r,a,t,o,l,c,0),a}function vm(i,e,t,n,s){let r;if(s===px(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=bp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=bp(a/n|0,i[a],i[a+1],r);return r&&Xr(r,r.next)&&(no(r),r=r.next),r}function js(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function eo(i,e,t,n,s,r,a){if(!i)return;!a&&r&&lx(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ex(i,n,s,r):Qg(i)){e.push(l.i,i.i,c.i),no(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=tx(js(i),e),eo(i,e,t,n,s,r,2)):a===2&&nx(i,e,t,n,s,r):eo(js(i),e,t,n,s,r,1);break}}}function Qg(i){let e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ra(s,o,r,l,a,c,g.x,g.y)&&Wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ex(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Wt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),g=Math.min(h,u,f),v=Math.max(o,l,c),p=Math.max(h,u,f),m=_u(d,g,e,t,n),M=_u(v,p,e,t,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=m&&y&&y.z<=M;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&Ra(o,h,l,u,c,f,_.x,_.y)&&Wt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Ra(o,h,l,u,c,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&Ra(o,h,l,u,c,f,_.x,_.y)&&Wt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Ra(o,h,l,u,c,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function tx(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Xr(n,s)&&ym(n,t,t.next,s)&&to(n,s)&&to(s,n)&&(e.push(n.i,t.i,s.i),no(t),no(t.next),t=i=s),t=t.next}while(t!==i);return js(t)}function nx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ux(a,o)){let l=Mm(a,o);a=js(a,a.next),l=js(l,l.next),eo(a,e,t,n,s,r,0),eo(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ix(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=vm(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(hx(c))}s.sort(sx);for(let r=0;r<s.length;r++)t=rx(s[r],t);return t}function sx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function rx(i,e){let t=ax(i,e);if(!t)return e;let n=Mm(t,i);return js(n,n.next),js(t,t.next)}function ax(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Xr(i,t))return t;do{if(Xr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&_m(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);to(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&ox(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function ox(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function lx(i,e,t,n){let s=i;do s.z===0&&(s.z=_u(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cx(s)}function cx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function _u(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function hx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function _m(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ra(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&_m(i,e,t,n,s,r,a,o)}function ux(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!fx(i,e)&&(to(i,e)&&to(e,i)&&dx(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||Xr(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xr(i,e){return i.x===e.x&&i.y===e.y}function ym(i,e,t,n){let s=Pl(Wt(i,e,t)),r=Pl(Wt(i,e,n)),a=Pl(Wt(t,n,i)),o=Pl(Wt(t,n,e));return!!(s!==r&&a!==o||s===0&&Cl(i,t,e)||r===0&&Cl(i,n,e)||a===0&&Cl(t,i,n)||o===0&&Cl(t,e,n))}function Cl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Pl(i){return i>0?1:i<0?-1:0}function fx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ym(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function to(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function dx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Mm(i,e){let t=yu(i.i,i.x,i.y),n=yu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bp(i,e,t,n){let s=yu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function no(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function px(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Mu=class{static triangulate(e,t,n=2){return Jg(e,t,n)}},Hs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Tp(e),Ep(n,e);let a=e.length;t.forEach(Tp);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Ep(n,t[l]);let o=Mu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Tp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ep(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Zs=class i extends At{constructor(e=new Ts([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:mx,_,y=!1,T,E,x,b;if(m){_=m.getSpacedPoints(h),y=!0,f=!1;let re=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,re),E=new H,x=new H,b=new H}f||(p=0,d=0,g=0,v=0);let P=o.extractPoints(c),S=P.shape,R=P.holes;if(!Hs.isClockWise(S)){S=S.reverse();for(let re=0,xe=R.length;re<xe;re++){let ue=R[re];Hs.isClockWise(ue)&&(R[re]=ue.reverse())}}function z(re){let ue=10000000000000001e-36,_e=re[0];for(let Se=1;Se<=re.length;Se++){let Ae=Se%re.length,Le=re[Ae],ke=Le.x-_e.x,ze=Le.y-_e.y,et=ke*ke+ze*ze,X=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(_e.x),Math.abs(_e.y)),mt=ue*X*X;if(et<=mt){re.splice(Ae,1),Se--;continue}_e=Le}}z(S),R.forEach(z);let L=R.length,w=S;for(let re=0;re<L;re++){let xe=R[re];S=S.concat(xe)}function U(re,xe,ue){return xe||Qe("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(xe,ue)}let D=S.length;function O(re,xe,ue){let _e,Se,Ae,Le=re.x-xe.x,ke=re.y-xe.y,ze=ue.x-re.x,et=ue.y-re.y,X=Le*Le+ke*ke,mt=Le*et-ke*ze;if(Math.abs(mt)>Number.EPSILON){let je=Math.sqrt(X),rt=Math.sqrt(ze*ze+et*et),j=xe.x-ke/je,me=xe.y+Le/je,le=ue.x-et/rt,Me=ue.y+ze/rt,N=((le-j)*et-(Me-me)*ze)/(Le*et-ke*ze);_e=j+Le*N-re.x,Se=me+ke*N-re.y;let A=_e*_e+Se*Se;if(A<=2)return new ye(_e,Se);Ae=Math.sqrt(A/2)}else{let je=!1;Le>Number.EPSILON?ze>Number.EPSILON&&(je=!0):Le<-Number.EPSILON?ze<-Number.EPSILON&&(je=!0):Math.sign(ke)===Math.sign(et)&&(je=!0),je?(_e=-ke,Se=Le,Ae=Math.sqrt(X)):(_e=Le,Se=ke,Ae=Math.sqrt(X/2))}return new ye(_e/Ae,Se/Ae)}let k=[];for(let re=0,xe=w.length,ue=xe-1,_e=re+1;re<xe;re++,ue++,_e++)ue===xe&&(ue=0),_e===xe&&(_e=0),k[re]=O(w[re],w[ue],w[_e]);let F=[],B,$=k.concat();for(let re=0,xe=L;re<xe;re++){let ue=R[re];B=[];for(let _e=0,Se=ue.length,Ae=Se-1,Le=_e+1;_e<Se;_e++,Ae++,Le++)Ae===Se&&(Ae=0),Le===Se&&(Le=0),B[_e]=O(ue[_e],ue[Ae],ue[Le]);F.push(B),$=$.concat(B)}let ee;if(p===0)ee=Hs.triangulateShape(w,R);else{let re=[],xe=[];for(let ue=0;ue<p;ue++){let _e=ue/p,Se=d*Math.cos(_e*Math.PI/2),Ae=g*Math.sin(_e*Math.PI/2)+v;for(let Le=0,ke=w.length;Le<ke;Le++){let ze=U(w[Le],k[Le],Ae);W(ze.x,ze.y,-Se),_e===0&&re.push(ze)}for(let Le=0,ke=L;Le<ke;Le++){let ze=R[Le];B=F[Le];let et=[];for(let X=0,mt=ze.length;X<mt;X++){let je=U(ze[X],B[X],Ae);W(je.x,je.y,-Se),_e===0&&et.push(je)}_e===0&&xe.push(et)}}ee=Hs.triangulateShape(re,xe)}let Z=ee.length,V=g+v;for(let re=0;re<D;re++){let xe=f?U(S[re],$[re],V):S[re];y?(x.copy(T.normals[0]).multiplyScalar(xe.x),E.copy(T.binormals[0]).multiplyScalar(xe.y),b.copy(_[0]).add(x).add(E),W(b.x,b.y,b.z)):W(xe.x,xe.y,0)}for(let re=1;re<=h;re++)for(let xe=0;xe<D;xe++){let ue=f?U(S[xe],$[xe],V):S[xe];y?(x.copy(T.normals[re]).multiplyScalar(ue.x),E.copy(T.binormals[re]).multiplyScalar(ue.y),b.copy(_[re]).add(x).add(E),W(b.x,b.y,b.z)):W(ue.x,ue.y,u/h*re)}for(let re=p-1;re>=0;re--){let xe=re/p,ue=d*Math.cos(xe*Math.PI/2),_e=g*Math.sin(xe*Math.PI/2)+v;for(let Se=0,Ae=w.length;Se<Ae;Se++){let Le=U(w[Se],k[Se],_e);W(Le.x,Le.y,u+ue)}for(let Se=0,Ae=R.length;Se<Ae;Se++){let Le=R[Se];B=F[Se];for(let ke=0,ze=Le.length;ke<ze;ke++){let et=U(Le[ke],B[ke],_e);y?W(et.x,et.y+_[h-1].y,_[h-1].x+ue):W(et.x,et.y,u+ue)}}}ne(),q();function ne(){let re=s.length/3;if(f){let xe=0,ue=D*xe;for(let _e=0;_e<Z;_e++){let Se=ee[_e];Q(Se[2]+ue,Se[1]+ue,Se[0]+ue)}xe=h+p*2,ue=D*xe;for(let _e=0;_e<Z;_e++){let Se=ee[_e];Q(Se[0]+ue,Se[1]+ue,Se[2]+ue)}}else{for(let xe=0;xe<Z;xe++){let ue=ee[xe];Q(ue[2],ue[1],ue[0])}for(let xe=0;xe<Z;xe++){let ue=ee[xe];Q(ue[0]+D*h,ue[1]+D*h,ue[2]+D*h)}}n.addGroup(re,s.length/3-re,0)}function q(){let re=s.length/3,xe=0;J(w,xe),xe+=w.length;for(let ue=0,_e=R.length;ue<_e;ue++){let Se=R[ue];J(Se,xe),xe+=Se.length}n.addGroup(re,s.length/3-re,1)}function J(re,xe){let ue=re.length;for(;--ue>=0;){let _e=ue,Se=ue-1;Se<0&&(Se=re.length-1);for(let Ae=0,Le=h+p*2;Ae<Le;Ae++){let ke=D*Ae,ze=D*(Ae+1),et=xe+_e+ke,X=xe+Se+ke,mt=xe+Se+ze,je=xe+_e+ze;oe(et,X,mt,je)}}}function W(re,xe,ue){l.push(re),l.push(xe),l.push(ue)}function Q(re,xe,ue){ie(re),ie(xe),ie(ue);let _e=s.length/3,Se=M.generateTopUV(n,s,_e-3,_e-2,_e-1);Ee(Se[0]),Ee(Se[1]),Ee(Se[2])}function oe(re,xe,ue,_e){ie(re),ie(xe),ie(_e),ie(xe),ie(ue),ie(_e);let Se=s.length/3,Ae=M.generateSideWallUV(n,s,Se-6,Se-3,Se-2,Se-1);Ee(Ae[0]),Ee(Ae[1]),Ee(Ae[3]),Ee(Ae[1]),Ee(Ae[2]),Ee(Ae[3])}function ie(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function Ee(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new vu[s.type]().fromJSON(s)),new i(n,e.options)}},mx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ye(r,a),new ye(o,l),new ye(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ye(a,1-l),new ye(c,1-u),new ye(f,1-g),new ye(v,1-m)]:[new ye(o,1-l),new ye(h,1-u),new ye(d,1-g),new ye(p,1-m)]}};function gx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var io=class i extends At{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ut(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new H,f=new ye,d=new H,g=new H,v=new H,p=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:p=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,d.x=m*1,d.y=-p,d.z=m*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:p=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let M=0;M<=t;M++){let _=n+M*h*s,y=Math.sin(_),T=Math.cos(_);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*T,a.push(u.x,u.y,u.z),f.x=M/t,f.y=E/(e.length-1),o.push(f.x,f.y);let x=l[3*E+0]*y,b=l[3*E+1],P=l[3*E+0]*T;c.push(x,b,P)}}for(let M=0;M<t;M++)for(let _=0;_<e.length-1;_++){let y=_+M*e.length,T=y,E=y+e.length,x=y+e.length+1,b=y+1;r.push(T,E,b),r.push(x,b,E)}this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("uv",new ht(o,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ki=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],v=[],p=[];for(let m=0;m<h;m++){let M=m*f-a;for(let _=0;_<c;_++){let y=_*u-r;g.push(y,-M,0),v.push(0,0,1),p.push(_/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let _=M+c*m,y=M+c*(m+1),T=M+1+c*(m+1),E=M+1+c*m;d.push(_,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},so=class i extends At{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new H,g=new ye;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){let m=r+p/n*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){let p=v*(n+1);for(let m=0;m<n;m++){let M=m+p,_=M,y=M+n+1,T=M+n+2,E=M+1;o.push(_,y,E),o.push(y,T,E)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Zt=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new H,f=new H,d=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let M=[],_=m/n,y=a+_*o,T=e*Math.cos(y),E=Math.sqrt(e*e-T*T),x=0;m===0&&a===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let P=b/t,S=s+P*r;u.x=-E*Math.cos(S),u.y=T,u.z=E*Math.sin(S),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(P+x,1-_),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let _=h[m][M+1],y=h[m][M],T=h[m+1][M],E=h[m+1][M+1];(m!==0||a>0)&&d.push(_,y,E),(m!==n-1||l<Math.PI)&&d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ji=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new H,d=new H,g=new H;for(let v=0;v<=n;v++){let p=a+v/n*o;for(let m=0;m<=s;m++){let M=m/s*r;d.x=(e+t*Math.cos(p))*Math.cos(M),d.y=(e+t*Math.cos(p))*Math.sin(M),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){let m=(s+1)*v+p-1,M=(s+1)*(v-1)+p-1,_=(s+1)*(v-1)+p,y=(s+1)*v+p;l.push(m,M,y),l.push(M,_,y)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(wp(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(wp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Tn(i){let e={};for(let t=0;t<i.length;t++){let n=rr(i[t]);for(let s in n)e[s]=n[s]}return e}function wp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function xx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ju(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var xn={clone:rr,merge:Tn},vx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vx,this.fragmentShader=_x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new ye().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ye().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},$r=class extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yt=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},In=class extends Yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Gs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Gs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ro=class extends mn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},ao=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=fc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ec=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tc=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ca(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function yx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ap(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Mx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nc=class extends bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pu,endingEnd:pu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case mu:r=e,o=2*t-n;break;case gu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mu:a=e,l=2*n-t;break;case gu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,m=-f*p+2*f*v-f*g,M=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*g+1,_=(-1-d)*p+(1.5+d)*v+.5*g,y=d*p-d*v;for(let T=0;T!==o;++T)r[T]=m*a[h+T]+M*a[c+T]+_*a[l+T]+y*a[u+T];return r}},ic=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},sc=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},rc=class extends bi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),v=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*v+a[l+p]*g;return r}let f=o*2,d=e-1;for(let g=0;g!==o;++g){let v=a[c+g],p=a[l+g],m=d*f+g*2,M=u[m],_=u[m+1],y=e*f+g*2,T=h[y],E=h[y+1],x=bx(n,t,M,T,s);r[g]=Sm(x,v,_,E,p)}return r}};function Sm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Sx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function bx(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Sm(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Sx(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xs(t,this.TimeBufferType),this.values=xs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xs(e.times,Array),values:xs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ca(e.settings)&&(n.settings={inTangents:xs(e.settings.inTangents,Array),outTangents:xs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new rc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case Dl:t=this.InterpolantFactoryMethodSmooth;break;case du:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return Dl;case this.InterpolantFactoryMethodBezier:return du}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ca(this.settings)&&(Rp(this.settings.inTangents,e),Rp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ca(this.settings)&&(Cp(this.settings.inTangents,e),Cp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Qe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&lg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Dl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ca(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Cp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Ws;var Zi=class extends Fn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Vs;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};oo.prototype.ValueTypeName="color";var Ji=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};Ji.prototype.ValueTypeName="number";var ac=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Wn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qi=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}};Qi.prototype.ValueTypeName="quaternion";Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Fn{constructor(e,t,n){super(e,t,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Vs;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};Es.prototype.ValueTypeName="vector";var lo=class{constructor(e="",t=-1,n=[],s=im){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=mi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ex(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Fn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=yx(l);l=Ap(l,1,h),c=Ap(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ji(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Tx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ji;case"vector":case"vector2":case"vector3":case"vector4":return Es;case"color":return oo;case"quaternion":return Qi;case"bool":case"boolean":return Zi;case"string":return es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ex(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Tx(i.type);if(i.times===void 0){let n=[],s=[];Mx(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ca(i.settings)&&(t.settings={inTangents:xs(i.settings.inTangents,Float32Array),outTangents:xs(i.settings.outTangents,Float32Array)}),t}var yi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Pp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Pp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Pp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var oc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bm=new oc,Ti=class{constructor(e){this.manager=e!==void 0?e:bm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gi={},Su=class extends Error{constructor(e,t){super(e),this.response=t}},qr=class extends Ti{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=yi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:n,onError:s});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Gi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,v=0,p=new ReadableStream({start(m){M();function M(){u.read().then(({done:_,value:y})=>{if(_)m.close();else{v+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let E=0,x=h.length;E<x;E++){let b=h[E];b.onProgress&&b.onProgress(T)}m.enqueue(y),M()}},_=>{m.error(_)})}}});return new Response(p)}else throw new Su(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{yi.add(`file:${e}`,c);let h=Gi[e];delete Gi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Gi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Gi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Pr=new WeakMap,lc=class extends Ti{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Pr.get(a);u===void 0&&(u=[],Pr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Or("img");function l(){h(),t&&t(this);let u=Pr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Pr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),yi.remove(`image:${e}`);let f=Pr.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(u)}Pr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),yi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var co=class extends Ti{constructor(e){super(e)}load(e,t,n,s){let r=new jt,a=new lc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Js=class extends Dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ho=class extends Js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hu=new Ye,Ip=new H,Lp=new H,Yr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ip),Lp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){hu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(hu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Fr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Il=new H,Ll=new Wn,_i=new H,uo=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Il,Ll,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ll,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Il,Ll,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ll,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gs=new H,Dp=new ye,Np=new ye,tn=class extends uo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,Dp,Np),t.subVectors(Np,Dp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bu=class extends Yr{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Xs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},fo=class extends Js{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new bu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Tu=class extends Yr{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},Qs=class extends Js{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ts=class extends uo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Eu=class extends Yr{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends Js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Eu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ns=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var uu=new WeakMap,po=class extends Ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{uu.has(a)===!0?(s&&s(uu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return yi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),uu.set(l,c),yi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});yi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ir=-90,Lr=1,Kr=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Ir,Lr,e,t);s.layers=this.layers,this.add(s);let r=new tn(Ir,Lr,e,t);r.layers=this.layers,this.add(r);let a=new tn(Ir,Lr,e,t);a.layers=this.layers,this.add(a);let o=new tn(Ir,Lr,e,t);o.layers=this.layers,this.add(o);let l=new tn(Ir,Lr,e,t);l.layers=this.layers,this.add(l);let c=new tn(Ir,Lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},cc=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},mo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=wx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function wx(){this._document.hidden===!1&&this.reset()}var Qu="\\[\\]\\.:\\/",Ax=new RegExp("["+Qu+"]","g"),ef="[^"+Qu+"]",Rx="[^"+Qu.replace("\\.","")+"]",Cx=/((?:WC+[\/:])*)/.source.replace("WC",ef),Px=/(WCOD+)?/.source.replace("WCOD",Rx),Ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ef),Lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ef),Dx=new RegExp("^"+Cx+Px+Ix+Lx+"$"),Nx=["material","materials","bones","map"],wu=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ax,"")}static parseTrackName(e){let t=Dx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Nx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=wu;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mb=new Float32Array(1);var Up=new Ye,As=class{constructor(e,t,n=0,s=1/0){this.ray=new _s(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Up.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Up),this}intersectObject(e,t=!0,n=[]){return Au(e,this,n,t),n.sort(Fp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Au(e[s],this,n,t);return n.sort(Fp),n}};function Fp(i,e){return i.distance-e.distance}function Au(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Au(r[a],e,t,!0)}}var of=class of{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};of.prototype.isMatrix2=!0;var Ru=of;function tf(i,e,t,n){let s=Ux(n);switch(t){case ku:return i*e;case _c:return i*e/s.components*s.byteLength;case yc:return i*e/s.components*s.byteLength;case Rs:return i*e*2/s.components*s.byteLength;case Mc:return i*e*2/s.components*s.byteLength;case zu:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case Sc:return i*e*4/s.components*s.byteLength;case To:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tc:case wc:return Math.max(i,16)*Math.max(e,8)/4;case bc:case Ec:return Math.max(i,8)*Math.max(e,8)/2;case Ac:case Rc:case Pc:case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cc:case Ro:case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case qc:case Yc:case Kc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jc:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Co:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ux(i){switch(i){case bn:case Uu:return{byteLength:1,components:1};case ea:case Fu:case Gt:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case di:case gc:case qn:return{byteLength:4,components:1};case Ou:case Bu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Xm(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ox(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Bx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kx=`#ifdef USE_ALPHAHASH
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
#endif`,zx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wx=`#ifdef USE_AOMAP
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
#endif`,Xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$x=`#ifdef USE_BATCHING
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
#endif`,qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zx=`#ifdef USE_IRIDESCENCE
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
#endif`,Jx=`#ifdef USE_BUMPMAP
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
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ov=`#define PI 3.141592653589793
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
} // validated`,lv=`vec3 transformedNormal = objectNormal;
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
#endif`,cv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dv="gl_FragColor = linearToOutputTexel( gl_FragColor );",pv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_v=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tv=`#ifdef USE_GRADIENTMAP
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
}`,Ev=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nv=`PhysicalMaterial material;
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
#endif`,Uv=`uniform sampler2D dfgLUT;
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
}`,Fv=`
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
#endif`,Ov=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$v=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qv=`#if defined( USE_POINTS_UV )
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
#endif`,Yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zv=`#if defined( USE_MORPHCOLORS )
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
#endif`,Jv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qv=`#ifdef USE_MORPHTARGETS
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
#endif`,e_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a_=`#ifdef USE_NORMALMAP
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
#endif`,o_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,__=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S_=`float getShadowMask() {
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
}`,b_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,E_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w_=`#ifdef USE_SKINNING
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
#endif`,A_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
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
#endif`,L_=`#ifdef USE_TRANSMISSION
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B_=`uniform sampler2D t2D;
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`uniform float backgroundBlurriness;
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
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`#include <common>
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
}`,W_=`#if DEPTH_PACKING == 3200
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
}`,X_=`#define DISTANCE
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
}`,$_=`#define DISTANCE
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
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`uniform float scale;
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
}`,j_=`uniform vec3 diffuse;
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
}`,Z_=`#include <common>
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
}`,J_=`uniform vec3 diffuse;
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
}`,Q_=`#define LAMBERT
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
}`,ey=`#define LAMBERT
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
}`,ty=`#define MATCAP
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
}`,ny=`#define MATCAP
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
}`,iy=`#define NORMAL
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
}`,sy=`#define NORMAL
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
}`,ry=`#define PHONG
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
}`,ay=`#define PHONG
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
}`,oy=`#define STANDARD
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
}`,ly=`#define STANDARD
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
}`,cy=`#define TOON
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
}`,hy=`#define TOON
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
}`,uy=`uniform float size;
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
}`,fy=`uniform vec3 diffuse;
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
}`,dy=`#include <common>
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
}`,py=`uniform vec3 color;
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
}`,my=`uniform float rotation;
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
}`,gy=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Bx,alphahash_pars_fragment:kx,alphamap_fragment:zx,alphamap_pars_fragment:Hx,alphatest_fragment:Gx,alphatest_pars_fragment:Vx,aomap_fragment:Wx,aomap_pars_fragment:Xx,batching_pars_vertex:$x,batching_vertex:qx,begin_vertex:Yx,beginnormal_vertex:Kx,bsdfs:jx,iridescence_fragment:Zx,bumpmap_pars_fragment:Jx,clipping_planes_fragment:Qx,clipping_planes_pars_fragment:ev,clipping_planes_pars_vertex:tv,clipping_planes_vertex:nv,color_fragment:iv,color_pars_fragment:sv,color_pars_vertex:rv,color_vertex:av,common:ov,defaultnormal_vertex:lv,displacementmap_pars_vertex:cv,displacementmap_vertex:hv,emissivemap_fragment:uv,emissivemap_pars_fragment:fv,colorspace_fragment:dv,colorspace_pars_fragment:pv,envmap_fragment:mv,envmap_common_pars_fragment:gv,envmap_pars_fragment:xv,envmap_pars_vertex:vv,envmap_physical_pars_fragment:Cv,envmap_vertex:_v,fog_vertex:yv,fog_pars_vertex:Mv,fog_fragment:Sv,fog_pars_fragment:bv,gradientmap_pars_fragment:Tv,lightmap_pars_fragment:Ev,lights_lambert_fragment:wv,lights_lambert_pars_fragment:Av,lights_pars_begin:Rv,lights_toon_fragment:Pv,lights_toon_pars_fragment:Iv,lights_phong_fragment:Lv,lights_phong_pars_fragment:Dv,lights_physical_fragment:Nv,lights_physical_pars_fragment:Uv,lights_fragment_begin:Fv,lights_fragment_maps:Ov,lights_fragment_end:Bv,lightprobes_pars_fragment:kv,logdepthbuf_fragment:zv,logdepthbuf_pars_fragment:Hv,logdepthbuf_pars_vertex:Gv,logdepthbuf_vertex:Vv,map_fragment:Wv,map_pars_fragment:Xv,map_particle_fragment:$v,map_particle_pars_fragment:qv,metalnessmap_fragment:Yv,metalnessmap_pars_fragment:Kv,morphinstance_vertex:jv,morphcolor_vertex:Zv,morphnormal_vertex:Jv,morphtarget_pars_vertex:Qv,morphtarget_vertex:e_,normal_fragment_begin:t_,normal_fragment_maps:n_,normal_pars_fragment:i_,normal_pars_vertex:s_,normal_vertex:r_,normalmap_pars_fragment:a_,clearcoat_normal_fragment_begin:o_,clearcoat_normal_fragment_maps:l_,clearcoat_pars_fragment:c_,iridescence_pars_fragment:h_,opaque_fragment:u_,packing:f_,premultiplied_alpha_fragment:d_,project_vertex:p_,dithering_fragment:m_,dithering_pars_fragment:g_,roughnessmap_fragment:x_,roughnessmap_pars_fragment:v_,shadowmap_pars_fragment:__,shadowmap_pars_vertex:y_,shadowmap_vertex:M_,shadowmask_pars_fragment:S_,skinbase_vertex:b_,skinning_pars_vertex:T_,skinning_vertex:E_,skinnormal_vertex:w_,specularmap_fragment:A_,specularmap_pars_fragment:R_,tonemapping_fragment:C_,tonemapping_pars_fragment:P_,transmission_fragment:I_,transmission_pars_fragment:L_,uv_pars_fragment:D_,uv_pars_vertex:N_,uv_vertex:U_,worldpos_vertex:F_,background_vert:O_,background_frag:B_,backgroundCube_vert:k_,backgroundCube_frag:z_,cube_vert:H_,cube_frag:G_,depth_vert:V_,depth_frag:W_,distance_vert:X_,distance_frag:$_,equirect_vert:q_,equirect_frag:Y_,linedashed_vert:K_,linedashed_frag:j_,meshbasic_vert:Z_,meshbasic_frag:J_,meshlambert_vert:Q_,meshlambert_frag:ey,meshmatcap_vert:ty,meshmatcap_frag:ny,meshnormal_vert:iy,meshnormal_frag:sy,meshphong_vert:ry,meshphong_frag:ay,meshphysical_vert:oy,meshphysical_frag:ly,meshtoon_vert:cy,meshtoon_frag:hy,points_vert:uy,points_frag:fy,shadow_vert:dy,shadow_frag:py,sprite_vert:my,sprite_frag:gy},Oe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ci={basic:{uniforms:Tn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Tn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Tn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Tn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Tn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new De(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Tn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Tn([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Tn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Tn([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Tn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Tn([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Tn([Oe.common,Oe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Tn([Oe.lights,Oe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ci.physical={uniforms:Tn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var eh={r:0,b:0,g:0},xy=new Ye,$m=new st;$m.set(-1,0,0,0,1,0,0,0,1);function vy(i,e,t,n,s,r){let a=new De(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(M){let _=M.isScene===!0?M.background:null;if(_&&_.isTexture){let y=M.backgroundBlurriness>0;_=e.get(_,y)}return _}function g(M){let _=!1,y=d(M);y===null?p(a,o):y&&y.isColor&&(p(y,1),_=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,_){let y=d(_);y&&y.isCubeTexture?(c===void 0&&(c=new Ze(new kt(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:rr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xy.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($m),c.material.toneMapped=ct.getTransfer(y.colorSpace)!==bt,(h!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ze(new Ki(2,2),new Pt({name:"BackgroundMaterial",uniforms:rr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ct.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,_){M.getRGB(eh,Ju(i)),t.buffers.color.setClear(eh.r,eh.g,eh.b,_,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),o=_,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:v,dispose:m}}function _y(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(R,I,z,L,w){let U=!1,D=u(R,L,z,I);r!==D&&(r=D,c(r.object)),U=d(R,L,z,w),U&&g(R,L,z,w),w!==null&&e.update(w,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,y(R,I,z,L),w!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function u(R,I,z,L){let w=L.wireframe===!0,U=n[I.id];U===void 0&&(U={},n[I.id]=U);let D=R.isInstancedMesh===!0?R.id:0,O=U[D];O===void 0&&(O={},U[D]=O);let k=O[z.id];k===void 0&&(k={},O[z.id]=k);let F=k[w];return F===void 0&&(F=f(l()),k[w]=F),F}function f(R){let I=[],z=[],L=[];for(let w=0;w<t;w++)I[w]=0,z[w]=0,L[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:L,object:R,attributes:{},index:null}}function d(R,I,z,L){let w=r.attributes,U=I.attributes,D=0,O=z.getAttributes();for(let k in O)if(O[k].location>=0){let B=w[k],$=U[k];if($===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),B===void 0||B.attribute!==$||$&&B.data!==$.data)return!0;D++}return r.attributesNum!==D||r.index!==L}function g(R,I,z,L){let w={},U=I.attributes,D=0,O=z.getAttributes();for(let k in O)if(O[k].location>=0){let B=U[k];B===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(B=R.instanceColor));let $={};$.attribute=B,B&&B.data&&($.data=B.data),w[k]=$,D++}r.attributes=w,r.attributesNum=D,r.index=L}function v(){let R=r.newAttributes;for(let I=0,z=R.length;I<z;I++)R[I]=0}function p(R){m(R,0)}function m(R,I){let z=r.newAttributes,L=r.enabledAttributes,w=r.attributeDivisors;z[R]=1,L[R]===0&&(i.enableVertexAttribArray(R),L[R]=1),w[R]!==I&&(i.vertexAttribDivisor(R,I),w[R]=I)}function M(){let R=r.newAttributes,I=r.enabledAttributes;for(let z=0,L=I.length;z<L;z++)I[z]!==R[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function _(R,I,z,L,w,U,D){D===!0?i.vertexAttribIPointer(R,I,z,w,U):i.vertexAttribPointer(R,I,z,L,w,U)}function y(R,I,z,L){v();let w=L.attributes,U=z.getAttributes(),D=I.defaultAttributeValues;for(let O in U){let k=U[O];if(k.location>=0){let F=w[O];if(F===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),F!==void 0){let B=F.normalized,$=F.itemSize,ee=e.get(F);if(ee===void 0)continue;let Z=ee.buffer,V=ee.type,ne=ee.bytesPerElement,q=V===i.INT||V===i.UNSIGNED_INT||F.gpuType===gc;if(F.isInterleavedBufferAttribute){let J=F.data,W=J.isInterleavedBuffer===!0?J.stride:J.itemSize,Q=F.offset;if(J.isInstancedInterleavedBuffer||J.isInstancedBufferAttribute){for(let oe=0;oe<k.locationSize;oe++)m(k.location+oe,J.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let oe=0;oe<k.locationSize;oe++)p(k.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let oe=0;oe<k.locationSize;oe++)_(k.location+oe,$/k.locationSize,V,B,W*ne,(Q+$/k.locationSize*oe)*ne,q)}else{if(F.isInstancedBufferAttribute){for(let J=0;J<k.locationSize;J++)m(k.location+J,F.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let J=0;J<k.locationSize;J++)p(k.location+J);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let J=0;J<k.locationSize;J++)_(k.location+J,$/k.locationSize,V,B,$*ne,$/k.locationSize*J*ne,q)}}else if(D!==void 0){let B=D[O];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(k.location,B);break;case 3:i.vertexAttrib3fv(k.location,B);break;case 4:i.vertexAttrib4fv(k.location,B);break;default:i.vertexAttrib1fv(k.location,B)}}}}M()}function T(){P();for(let R in n){let I=n[R];for(let z in I){let L=I[z];for(let w in L){let U=L[w];for(let D in U)h(U[D].object),delete U[D];delete L[w]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;let I=n[R.id];for(let z in I){let L=I[z];for(let w in L){let U=L[w];for(let D in U)h(U[D].object),delete U[D];delete L[w]}}delete n[R.id]}function x(R){for(let I in n){let z=n[I];for(let L in z){let w=z[L];if(w[R.id]===void 0)continue;let U=w[R.id];for(let D in U)h(U[D].object),delete U[D];delete w[R.id]}}}function b(R){for(let I in n){let z=n[I],L=R.isInstancedMesh===!0?R.id:0,w=z[L];if(w!==void 0){for(let U in w){let D=w[U];for(let O in D)h(D[O].object),delete D[O];delete w[U]}delete z[L],Object.keys(z).length===0&&delete n[I]}}}function P(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function yy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function My(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==On&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===Gt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==bn&&x!==qn&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:y,maxSamples:T,samples:E}}function Sy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Vn,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,_=M*4,y=m.clippingState||null;l.value=y,y=h(g,f,_,d);for(let T=0;T!==_;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=d+v*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,y=d;_!==v;++_,y+=4)a.copy(u[_]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var Do=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kt(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:hn});r.uniforms.tEquirect.value=t;let a=new Ze(s,r),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=nn),new Kr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Tm=256,by=3,Ty=20,qm=256,Ym=16,Ey=3,wy=new H,Ay=new De,sa=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Kr(1,10,null),this._boxMesh=new Ze(new kt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=wy}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(Ay));let p=new Kr(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=g,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Tm,Yu(e))}_fromTexture(e,t){e.mapping===ir||e.mapping===Jr?this._setSize(e.image.length===0?Tm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Em(e,!1,!1),n=Math.log2(e)-by;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Em(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ir||e.mapping===Jr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ry(),this._integrationMaterial=Cy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ym);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Ey)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(qm*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Py());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Em(i,e,t){return new Do(i,{minFilter:ii,generateMipmaps:e,type:Gt,colorSpace:Pn,depthBuffer:t})}function No(i,e,t){return new Pt({name:i,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:gn,blending:hn,depthTest:!1,depthWrite:!1})}function Ry(){return No("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qm}u

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
	`)}function Cy(){return No("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ym}},`

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
	`)}function Py(){return No("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ty}
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
	`)}function wm(){return No("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Am(){return No("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Iy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===dc||d===pc)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let v=new Do(g.height);return v.fromEquirectangularTexture(i,f),e.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===dc||d===pc,v=d===ir||d===Jr;if(g||v){let p=t.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new sa(i)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let M=f.image;return g&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new sa(i)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,d){return d===dc?f.mapping=ir:d===pc&&(f.mapping=Jr),f}function l(f){let d=0,g=6;for(let v=0;v<g;v++)f[v]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Ly(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Gs("WebGLRenderer: "+n+" extension not supported."),s}}}function Dy(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(e.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function h(g){let v=g.attributes;for(let p in v)e.update(v[p],i.ARRAY_BUFFER)}function u(g){let v=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=v!==null?v.array.length:p.array.length/3-1,_=p.count>=65535?ka:Ba,y=new _(Math.ceil(M/3)*6,1),T=y.array;if(v!==null){let x=v.array;m=v.version;for(let b=0,P=0;b<M;b+=3){let S=x[b+0],R=x[b+1],I=x[b+2];T[P++]=S,T[P++]=R,T[P++]=R,T[P++]=I,T[P++]=I,T[P++]=S}}else{m=p.version;for(let x=0,b=0;x<M;x+=3){let P=x+0,S=x+1,R=x+2;T[b++]=P,T[b++]=S,T[b++]=S,T[b++]=R,T[b++]=R,T[b++]=P}}y.version=m;let E=r.get(g);E&&e.remove(E),r.set(g,y)}function f(g){let v=r.get(g);if(v){let p=g.index;p!==null&&v.version<p.version&&u(g)}else u(g);return r.get(g)}function d(){for(let g in s){let v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function Ny(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*a,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let v=0;for(let p=0;p<d;p++)v+=f[p];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Uy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Fy(i,e,t){let n=new WeakMap,s=new Tt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],_=0;d===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let y=o.attributes.position.count*_,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*u),x=new Fa(E,y,T,u);x.type=qn,x.needsUpdate=!0;let b=_*4;for(let S=0;S<u;S++){let R=p[S],I=m[S],z=M[S],L=y*T*4*S;for(let w=0;w<R.count;w++){let U=w*b;d===!0&&(s.fromBufferAttribute(R,w),E[L+U+0]=s.x,E[L+U+1]=s.y,E[L+U+2]=s.z,E[L+U+3]=0),g===!0&&(s.fromBufferAttribute(I,w),E[L+U+4]=s.x,E[L+U+5]=s.y,E[L+U+6]=s.z,E[L+U+7]=0),v===!0&&(s.fromBufferAttribute(z,w),E[L+U+8]=s.x,E[L+U+9]=s.y,E[L+U+10]=s.z,E[L+U+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new ye(y,T)},n.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Oy(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var By={[vo]:"LINEAR_TONE_MAPPING",[_o]:"REINHARD_TONE_MAPPING",[yo]:"CINEON_TONE_MAPPING",[Mo]:"ACES_FILMIC_TONE_MAPPING",[bo]:"AGX_TONE_MAPPING",[nr]:"NEUTRAL_TONE_MAPPING",[So]:"CUSTOM_TONE_MAPPING"};function ky(i,e,t,n,s,r){let a=new Ft(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new At;h.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ht([0,2,0,0,2,0],2));let u=new $r({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ze(h,u),d=new ts(-1,1,1,-1,0,1),g=null,v=null,p=!1,m,M=null,_=[],y=!1;this.setSize=function(T,E){a.setSize(T,E),o!==null&&o.setSize(T,E),l!==null&&l.setSize(T,E);for(let x=0;x<_.length;x++){let b=_[x];b.setSize&&b.setSize(T,E)}},this.setEffects=function(T){_=T,y=_.length>0&&_[0].isRenderPass===!0;let E=a.width,x=a.height;_.length>0&&o===null&&(o=new Ft(E,x,{type:Gt,depthBuffer:!1,stencilBuffer:!1}),l=new Ft(E,x,{type:Gt,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&_.some(P=>P.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new fi(E,x),r===!0&&(c.format=pi,c.type=is)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let P=0;P<_.length;P++){let S=_[P];S.setSize&&S.setSize(E,x),b&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(c)}},this.begin=function(T,E){if(p||T.toneMapping===wi&&_.length===0)return!1;if(M=E,E!==null){let x=E.width,b=E.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return y===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=wi,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=m,p=!0;let x=a,b=o;for(let P=0;P<_.length;P++){let S=_[P];S.enabled!==!1&&(S.render(T,b,x,E),S.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(g!==T.outputColorSpace||v!==T.toneMapping){g=T.outputColorSpace,v=T.toneMapping,u.defines={},ct.getTransfer(g)===bt&&(u.defines.SRGB_TRANSFER="");let P=By[v];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(M),T.render(f,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Km=new jt,jm=new fi(1,1),Zm=new Xa(1),Jm=new Fa,Qm=new Wl,e0=new Wa,Rm=[],Cm=[],Pm=new Float32Array(16),Im=new Float32Array(9),Lm=new Float32Array(4);function ra(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Rm[s];if(r===void 0&&(r=new Float32Array(s),Rm[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ih(i,e){let t=Cm[e];t===void 0&&(t=new Int32Array(e),Cm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function Wy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Lm.set(n),i.uniformMatrix2fv(this.addr,!1,Lm),rn(t,n)}}function Xy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Im.set(n),i.uniformMatrix3fv(this.addr,!1,Im),rn(t,n)}}function $y(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Pm.set(n),i.uniformMatrix4fv(this.addr,!1,Pm),rn(t,n)}}function qy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Zy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function Qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function eM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function sh(i){return i.version===0&&(i.compareFunction=Wu,i.needsUpdate=!0),i}function tM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=sh(jm):r=Km,t.setTexture2D(e||r,s)}function nM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qm,s)}function iM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=sh(Zm):r=e0,t.setTextureCube(e||r,s)}function sM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jm,s)}function rM(i){switch(i){case 5126:return zy;case 35664:return Hy;case 35665:return Gy;case 35666:return Vy;case 35674:return Wy;case 35675:return Xy;case 35676:return $y;case 5124:case 35670:return qy;case 35667:case 35671:return Yy;case 35668:case 35672:return Ky;case 35669:case 35673:return jy;case 5125:return Zy;case 36294:return Jy;case 36295:return Qy;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return sM}}function aM(i,e){i.uniform1fv(this.addr,e)}function oM(i,e){let t=ra(e,this.size,2);i.uniform2fv(this.addr,t)}function lM(i,e){let t=ra(e,this.size,3);i.uniform3fv(this.addr,t)}function cM(i,e){let t=ra(e,this.size,4);i.uniform4fv(this.addr,t)}function hM(i,e){let t=ra(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function uM(i,e){let t=ra(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fM(i,e){let t=ra(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dM(i,e){i.uniform1iv(this.addr,e)}function pM(i,e){i.uniform2iv(this.addr,e)}function mM(i,e){i.uniform3iv(this.addr,e)}function gM(i,e){i.uniform4iv(this.addr,e)}function xM(i,e){i.uniform1uiv(this.addr,e)}function vM(i,e){i.uniform2uiv(this.addr,e)}function _M(i,e){i.uniform3uiv(this.addr,e)}function yM(i,e){i.uniform4uiv(this.addr,e)}function MM(i,e,t){let n=this.cache,s=e.length,r=ih(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=sh(jm):a=Km;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function SM(i,e,t){let n=this.cache,s=e.length,r=ih(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Qm,r[a])}function bM(i,e,t){let n=this.cache,s=e.length,r=ih(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=sh(Zm):a=e0;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function TM(i,e,t){let n=this.cache,s=e.length,r=ih(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jm,r[a])}function EM(i){switch(i){case 5126:return aM;case 35664:return oM;case 35665:return lM;case 35666:return cM;case 35674:return hM;case 35675:return uM;case 35676:return fM;case 5124:case 35670:return dM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return xM;case 36294:return vM;case 36295:return _M;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return TM}}var hf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rM(t.type)}},uf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=EM(t.type)}},ff=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},lf=/(\w+)(\])?(\[|\.)?/g;function Dm(i,e){i.seq.push(e),i.map[e.id]=e}function wM(i,e,t){let n=i.name,s=n.length;for(lf.lastIndex=0;;){let r=lf.exec(n),a=lf.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Dm(t,c===void 0?new hf(o,i,e):new uf(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ff(o),Dm(t,u)),t=u}}}var ia=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);wM(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Nm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var AM=37297,RM=0;function CM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Um=new st;function PM(i){ct._getMatrix(Um,ct.workingColorSpace,i);let e=`mat3( ${Um.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Na:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+CM(i.getShaderSource(e),o)}else return r}function IM(i,e){let t=PM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var LM={[vo]:"Linear",[_o]:"Reinhard",[yo]:"Cineon",[Mo]:"ACESFilmic",[bo]:"AgX",[nr]:"Neutral",[So]:"Custom"};function DM(i,e){let t=LM[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var th=new H;function NM(){ct.getLuminanceCoefficients(th);let i=th.x.toFixed(4),e=th.y.toFixed(4),t=th.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function FM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function OM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Lo(i){return i!==""}function Om(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Bm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var BM=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(i){return i.replace(BM,kM)}function kM(i,e){let t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return df(t)}var zM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(i){return i.replace(zM,HM)}function HM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var GM={[er]:"SHADOWMAP_TYPE_PCF",[jr]:"SHADOWMAP_TYPE_VSM"};function VM(i){return GM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var WM={[Jr]:"ENVMAP_MODE_REFRACTION"};function XM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":WM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $M={[fc]:"ENVMAP_BLENDING_MULTIPLY",[em]:"ENVMAP_BLENDING_MIX",[tm]:"ENVMAP_BLENDING_ADD"};function qM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$M[i.combine]||"ENVMAP_BLENDING_NONE"}function YM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=VM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=XM(t),u=qM(t),f=UM(t),d=FM(r),g=s.createProgram(),v,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Lo).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Lo).join(`
`),p.length>0&&(p+=`
`)):(v=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),p=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?ft.tonemapping_pars_fragment:"",t.toneMapping!==wi?DM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,IM("linearToOutputTexel",t.outputColorSpace),NM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),a=df(a),a=Om(a,t),a=Bm(a,t),o=df(o),o=Om(o,t),o=Bm(o,t),a=km(a),o=km(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+v+a,_=m+p+o,y=Nm(s,s.VERTEX_SHADER,M),T=Nm(s,s.FRAGMENT_SHADER,_);s.attachShader(g,y),s.attachShader(g,T),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(S){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(g)||"",I=s.getShaderInfoLog(y)||"",z=s.getShaderInfoLog(T)||"",L=R.trim(),w=I.trim(),U=z.trim(),D=!0,O=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,T);else{let k=Fm(s,y,"vertex"),F=Fm(s,T,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+L+`
`+k+`
`+F)}else L!==""?qe("WebGLProgram: Program Info Log:",L):(w===""||U==="")&&(O=!1);O&&(S.diagnostics={runnable:D,programLog:L,vertexShader:{log:w,prefix:v},fragmentShader:{log:U,prefix:p}})}s.deleteShader(y),s.deleteShader(T),x=new ia(s,g),b=OM(s,g)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(g,AM)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=T,this}var KM=0,pf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mf(e),t.set(e,n)),n}},mf=class{constructor(e){this.id=KM++,this.code=e,this.usedTimes=0}};function jM(i){return i===Rs||i===Ro||i===Co}function ZM(i,e,t,n,s,r){let a=new zr,o=new pf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,P,S,R,I){let z=S.fog,L=R.geometry,w=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?S.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=e.get(x.envMap||w,U),O=f[x.type],k=n.precision;x.precision!==null&&(k=n.getMaxPrecision(x.precision),k!==x.precision&&qe("WebGLProgram.getParameters:",x.precision,"not supported, using",k,"instead."));let F=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,B=F!==void 0?F.length:0,$=0;L.morphAttributes.position!==void 0&&($=1),L.morphAttributes.normal!==void 0&&($=2),L.morphAttributes.color!==void 0&&($=3);let ee,Z,V,ne;if(O){let Fe=Ci[O];ee=Fe.vertexShader,Z=Fe.fragmentShader}else{ee=x.vertexShader,Z=x.fragmentShader;let Fe=o.getVertexShaderStage(x),Mt=o.getFragmentShaderStage(x);o.update(x,Fe,Mt),V=Fe.id,ne=Mt.id}let q=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),W=R.isInstancedMesh===!0,Q=R.isBatchedMesh===!0,oe=!!x.map,ie=!!x.matcap,Ee=!!D,re=Ee&&D.isPMREMTexture===!0,xe=!!x.aoMap,ue=!!x.lightMap,_e=!!x.bumpMap&&x.wireframe===!1,Se=!!x.normalMap,Ae=!!x.displacementMap,Le=!!x.emissiveMap,ke=!!x.metalnessMap,ze=!!x.roughnessMap,et=x.anisotropy>0,X=x.clearcoat>0,mt=x.diffuseRoughness>0,je=x.dispersion>0,rt=x.retroreflectivity>0,j=x.iridescence>0,me=x.sheen>0,le=x.transmission>0,Me=et&&!!x.anisotropyMap,N=X&&!!x.clearcoatMap,A=X&&!!x.clearcoatNormalMap,Y=X&&!!x.clearcoatRoughnessMap,ge=mt&&!!x.diffuseRoughnessMap,ae=j&&!!x.iridescenceMap,ve=j&&!!x.iridescenceThicknessMap,Te=me&&!!x.sheenColorMap,ce=me&&!!x.sheenRoughnessMap,de=!!x.specularMap,Ce=!!x.specularColorMap,G=!!x.specularIntensityMap,pe=le&&!!x.transmissionMap,fe=le&&!!x.thicknessMap,be=!!x.gradientMap,Re=!!x.alphaMap,Pe=x.alphaTest>0,Ge=!!x.alphaHash,Je=!!x.extensions,we=wi;x.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(we=i.toneMapping);let $e=re?D.isCompressedCubeTexture?D.image[0].mipmaps:D.mipmaps:null,it={shaderID:O,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:Z,defines:x.defines,customVertexShaderID:V,customFragmentShaderID:ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:k,batching:Q,batchingColor:Q&&R._colorsTexture!==null,instancing:W,instancingColor:W&&R.instanceColor!==null,instancingMorph:W&&R.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:oe,matcap:ie,envMap:Ee,envMapMode:Ee&&D.mapping,envMapPMREM:re,envMapMaxLod:re?$e.length-1:null,envMapSize:re?$e[0].width:null,aoMap:xe,lightMap:ue,bumpMap:_e,normalMap:Se,displacementMap:Ae,emissiveMap:Le,normalMapObjectSpace:Se&&x.normalMapType===rm,normalMapTangentSpace:Se&&x.normalMapType===na,packedNormalMap:Se&&x.normalMapType===na&&jM(x.normalMap.format),metalnessMap:ke,roughnessMap:ze,anisotropy:et,anisotropyMap:Me,clearcoat:X,clearcoatMap:N,clearcoatNormalMap:A,clearcoatRoughnessMap:Y,diffuseRoughness:mt,diffuseRoughnessMap:ge,dispersion:je,retroreflection:rt,iridescence:j,iridescenceMap:ae,iridescenceThicknessMap:ve,sheen:me,sheenColorMap:Te,sheenRoughnessMap:ce,specularMap:de,specularColorMap:Ce,specularIntensityMap:G,transmission:le,transmissionMap:pe,thicknessMap:fe,gradientMap:be,opaque:x.transparent===!1&&x.blending===Zr&&x.alphaToCoverage===!1,alphaMap:Re,alphaTest:Pe,alphaHash:Ge,combine:x.combine,mapUv:oe&&d(x.map.channel),aoMapUv:xe&&d(x.aoMap.channel),lightMapUv:ue&&d(x.lightMap.channel),bumpMapUv:_e&&d(x.bumpMap.channel),normalMapUv:Se&&d(x.normalMap.channel),displacementMapUv:Ae&&d(x.displacementMap.channel),emissiveMapUv:Le&&d(x.emissiveMap.channel),metalnessMapUv:ke&&d(x.metalnessMap.channel),roughnessMapUv:ze&&d(x.roughnessMap.channel),anisotropyMapUv:Me&&d(x.anisotropyMap.channel),clearcoatMapUv:N&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:A&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ge&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:ce&&d(x.sheenRoughnessMap.channel),specularMapUv:de&&d(x.specularMap.channel),specularColorMapUv:Ce&&d(x.specularColorMap.channel),specularIntensityMapUv:G&&d(x.specularIntensityMap.channel),transmissionMapUv:pe&&d(x.transmissionMap.channel),thicknessMapUv:fe&&d(x.thicknessMap.channel),alphaMapUv:Re&&d(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Se||et),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(oe||Re),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&Se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:J,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:$,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:I.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:oe&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===bt,decodeVideoTextureEmissive:Le&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bt,flipSided:x.side===gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Je&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&x.extensions.multiDraw===!0||Q)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function v(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(b,x),m(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function m(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){let b=f[x.type],P;if(b){let S=Ci[b];P=xn.clone(S.uniforms)}else P=x.uniforms;return P}function _(x,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new YM(i,b,x,s),c.push(P),h.set(b,P)),P}function y(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:_,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:E}}function JM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function QM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Hm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,v,p,m){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:p,group:m},i[e]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=g,M.materialVariant=a(f),M.groupOrder=v,M.renderOrder=f.renderOrder,M.z=p,M.group=m),e++,M}function l(f,d,g,v,p,m,M){M.reversedDepth===!0&&(p=-p);let _=o(f,d,g,v,p,m);g.transmission>0?n.push(_):g.transparent===!0?s.push(_):t.push(_)}function c(f,d,g,v,p,m){let M=o(f,d,g,v,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(f,d){t.length>1&&t.sort(f||QM),n.length>1&&n.sort(d||Hm),s.length>1&&s.sort(d||Hm)}function u(){for(let f=e,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function eS(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Gm,i.set(n,[a])):s>=r.length?(a=new Gm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function tS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new De};break;case"SpotLight":t={position:new H,direction:new H,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function nS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var iS=0;function sS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rS(i){let e=new tS,t=nS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new Ye,a=new Ye;function o(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,M=0,_=0,y=0,T=0,E=0,x=0,b=0,P=0,S=0;c.sort(sS);for(let I=0,z=c.length;I<z;I++){let L=c[I],w=L.color,U=L.intensity,D=L.distance,O=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Rs?O=L.shadow.map.texture:O=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=w.r*U,u+=w.g*U,f+=w.b*U;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],U);S++}else if(L.isSunLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let F=L.shadow,B=t.get(L);B.shadowIntensity=F.intensity,B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),n.sunShadow[g]=B,n.sunShadowMap[g]=O;let $=F.getViewportCount();for(let ee=0;ee<$;ee++)n.sunShadowMatrix[v+ee]=F.getMatrix(ee),n.sunShadowCascade[v+ee]=F._cascadeData[ee];v+=$,g++}n.sun[d]=k,d++}else if(L.isDirectionalLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let F=L.shadow,B=t.get(L);B.shadowIntensity=F.intensity,B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=k,p++}else if(L.isSpotLight){let k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(w).multiplyScalar(U),k.distance=D,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[M]=k;let F=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,F.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[M]=F.matrix,L.castShadow){let B=t.get(L);B.shadowIntensity=F.intensity,B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,n.spotShadow[M]=B,n.spotShadowMap[M]=O,x++}M++}else if(L.isRectAreaLight){let k=e.get(L);k.color.copy(w).multiplyScalar(U),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=k,_++}else if(L.isPointLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let F=L.shadow,B=t.get(L);B.shadowIntensity=F.intensity,B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,B.shadowCameraNear=F.camera.near,B.shadowCameraFar=F.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=L.shadow.matrix,E++}n.point[m]=k,m++}else if(L.isHemisphereLight){let k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(U),k.groundColor.copy(L.groundColor).multiplyScalar(U),n.hemi[y]=k,y++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.sunLength!==d||R.directionalLength!==p||R.pointLength!==m||R.spotLength!==M||R.rectAreaLength!==_||R.hemiLength!==y||R.numSunShadows!==g||R.numDirectionalShadows!==T||R.numPointShadows!==E||R.numSpotShadows!==x||R.numSpotMaps!==b||R.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=p,n.spot.length=M,n.rectArea.length=_,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=S,R.sunLength=d,R.directionalLength=p,R.pointLength=m,R.spotLength=M,R.rectAreaLength=_,R.hemiLength=y,R.numSunShadows=g,R.numDirectionalShadows=T,R.numPointShadows=E,R.numSpotShadows=x,R.numSpotMaps=b,R.numLightProbes=S,n.version=iS++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0,p=0,m=h.matrixWorldInverse;for(let M=0,_=c.length;M<_;M++){let y=c[M];if(y.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),u++}else if(y.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),f++}else if(y.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let T=n.rectArea[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Vm(i){let e=new rS(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function aS(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Vm(i),e.set(s,[o])):r>=a.length?(o=new Vm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var oS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lS=`uniform sampler2D shadow_pass;
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
}`,cS=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],hS=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Wm=new Ye,Io=new H,cf=new H;function uS(i,e,t){let n=new ys,s=new ye,r=new ye,a=new Tt,o=new ec,l=new tc,c={},h=t.maxTextureSize,u={[Ei]:gn,[gn]:Ei,[Bt]:Bt},f=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:oS,fragmentShader:lS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ze(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let m=this.type;this.render=function(E,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===kp&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);let P=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(hn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let z=m!==this.type;z&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(w=>w.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,w=E.length;L<w;L++){let U=E[L],D=U.shadow;if(D===void 0){qe("WebGLShadowMap:",U,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let O=D.getFrameExtents();s.multiply(O),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/O.x),s.x=r.x*O.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/O.y),s.y=r.y*O.y,D.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(D.camera._reversedDepth=k,D.map===null||z===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===jr){if(U.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new Ft(s.x,s.y,{format:Rs,type:Gt,minFilter:nn,magFilter:nn,generateMipmaps:!1}),D.map.texture.name=U.name+".shadowMap",D.map.depthTexture=new fi(s.x,s.y,qn),D.map.depthTexture.name=U.name+".shadowMapDepth",D.map.depthTexture.format=Xi,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ut,D.map.depthTexture.magFilter=Ut}else U.isPointLight?(D.map=new Do(s.x),D.map.depthTexture=new Xa(s.x,di)):(D.map=new Ft(s.x,s.y),D.map.depthTexture=new fi(s.x,s.y,di)),D.map.depthTexture.name=U.name+".shadowMap",D.map.depthTexture.format=Xi,this.type===er?(D.map.depthTexture.compareFunction=k?Vu:Gu,D.map.depthTexture.minFilter=nn,D.map.depthTexture.magFilter=nn):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ut,D.map.depthTexture.magFilter=Ut);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==s.x||D.map.height!==s.y)&&D.map.setSize(s.x,s.y);let F=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();U.isPointLight!==!0&&D.updateMatrices(U,b);let B=(D.camera.layers.mask&4294967294)!==0?D.camera.layers:b.layers;for(let $=0;$<F;$++){let ee=D.getCamera($);if(U.isPointLight){let Z=D.camera,V=D.matrix,ne=U.distance||Z.far;ne!==Z.far&&(Z.far=ne,Z.updateProjectionMatrix()),Io.setFromMatrixPosition(U.matrixWorld),Z.position.copy(Io),cf.copy(Z.position),cf.add(cS[$]),Z.up.copy(hS[$]),Z.lookAt(cf),Z.updateMatrixWorld(),V.makeTranslation(-Io.x,-Io.y,-Io.z),Wm.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),D._frustum.setFromProjectionMatrix(Wm,Z.coordinateSystem,Z.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)i.setRenderTarget(D.map,$),i.clear();else{$===0&&(i.setRenderTarget(D.map),i.clear());let Z=D.getViewport($);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),I.viewport(a)}n=D.getFrustum($),y(x,b,ee,U,B,this.type)}D.isPointLightShadow!==!0&&this.type===jr&&M(D,b),D.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(P,S,R)};function M(E,x){let b=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ft(s.x,s.y,{format:Rs,type:Gt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,b,f,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,b,d,v,null)}function _(E,x,b,P){let S=null,R=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=b.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let I=S.uuid,z=x.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let w=L[z];w===void 0&&(w=S.clone(),L[z]=w,x.addEventListener("dispose",T)),S=w}if(S.visible=x.visible,S.wireframe=x.wireframe,P===jr?S.side=x.shadowSide!==null?x.shadowSide:x.side:S.side=x.shadowSide!==null?x.shadowSide:u[x.side],S.alphaMap=x.alphaMap,S.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,S.map=x.map,S.clipShadows=x.clipShadows,S.clippingPlanes=x.clippingPlanes,S.clipIntersection=x.clipIntersection,S.displacementMap=x.displacementMap,S.displacementScale=x.displacementScale,S.displacementBias=x.displacementBias,S.wireframeLinewidth=x.wireframeLinewidth,S.linewidth=x.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=i.properties.get(S);I.light=b}return S}function y(E,x,b,P,S,R){if(E.visible===!1)return;if(E.layers.test(S)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===jr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let L=e.update(E),w=E.material;if(Array.isArray(w)){let U=L.groups;for(let D=0,O=U.length;D<O;D++){let k=U[D],F=w[k.materialIndex];if(F&&F.visible){let B=_(E,F,P,R);E.onBeforeShadow(i,E,x,b,L,B,k),i.renderBufferDirect(b,null,L,B,E,k),E.onAfterShadow(i,E,x,b,L,B,k)}}}else if(w.visible){let U=_(E,w,P,R);E.onBeforeShadow(i,E,x,b,L,U,null),i.renderBufferDirect(b,null,L,U,E,null),E.onAfterShadow(i,E,x,b,L,U,null)}}let z=E.children;for(let L=0,w=z.length;L<w;L++)y(z[L],x,b,P,S,R)}function T(E){E.target.removeEventListener("dispose",T);for(let b in c){let P=c[b],S=E.target.uuid;S in P&&(P[S].dispose(),delete P[S])}}}function fS(i,e){function t(){let G=!1,pe=new Tt,fe=null,be=new Tt(0,0,0,0);return{setMask:function(Re){fe!==Re&&!G&&(i.colorMask(Re,Re,Re,Re),fe=Re)},setLocked:function(Re){G=Re},setClear:function(Re,Pe,Ge,Je,we){we===!0&&(Re*=Je,Pe*=Je,Ge*=Je),pe.set(Re,Pe,Ge,Je),be.equals(pe)===!1&&(i.clearColor(Re,Pe,Ge,Je),be.copy(pe))},reset:function(){G=!1,fe=null,be.set(-1,0,0,0)}}}function n(){let G=!1,pe=!1,fe=null,be=null,Re=null;return{setReversed:function(Pe){if(pe!==Pe){let Ge=e.get("EXT_clip_control");Pe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),pe=Pe;let Je=Re;Re=null,this.setClear(Je)}},getReversed:function(){return pe},setTest:function(Pe){Pe?J(i.DEPTH_TEST):W(i.DEPTH_TEST)},setMask:function(Pe){fe!==Pe&&!G&&(i.depthMask(Pe),fe=Pe)},setFunc:function(Pe){if(pe&&(Pe=mm[Pe]),be!==Pe){switch(Pe){case Ul:i.depthFunc(i.NEVER);break;case Fl:i.depthFunc(i.ALWAYS);break;case Ol:i.depthFunc(i.LESS);break;case Nr:i.depthFunc(i.LEQUAL);break;case Bl:i.depthFunc(i.EQUAL);break;case kl:i.depthFunc(i.GEQUAL);break;case zl:i.depthFunc(i.GREATER);break;case Hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Re!==Pe&&(Re=Pe,pe&&(Pe=1-Pe),i.clearDepth(Pe))},reset:function(){G=!1,fe=null,be=null,Re=null,pe=!1}}}function s(){let G=!1,pe=null,fe=null,be=null,Re=null,Pe=null,Ge=null,Je=null,we=null;return{setTest:function($e){G||($e?J(i.STENCIL_TEST):W(i.STENCIL_TEST))},setMask:function($e){pe!==$e&&!G&&(i.stencilMask($e),pe=$e)},setFunc:function($e,it,Fe){(fe!==$e||be!==it||Re!==Fe)&&(i.stencilFunc($e,it,Fe),fe=$e,be=it,Re=Fe)},setOp:function($e,it,Fe){(Pe!==$e||Ge!==it||Je!==Fe)&&(i.stencilOp($e,it,Fe),Pe=$e,Ge=it,Je=Fe)},setLocked:function($e){G=$e},setClear:function($e){we!==$e&&(i.clearStencil($e),we=$e)},reset:function(){G=!1,pe=null,fe=null,be=null,Re=null,Pe=null,Ge=null,Je=null,we=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],v=null,p=!1,m=null,M=null,_=null,y=null,T=null,E=null,x=null,b=new De(0,0,0),P=0,S=!1,R=null,I=null,z=null,L=null,w=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,O=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(k)[1]),D=O>=1):k.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),D=O>=2);let F=null,B={},$=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),Z=new Tt().fromArray($),V=new Tt().fromArray(ee);function ne(G,pe,fe,be){let Re=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(G,Pe),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<fe;Ge++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(pe+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return Pe}let q={};q[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Nr),_e(!1),Se(Cu),J(i.CULL_FACE),xe(hn);function J(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function W(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function Q(G,pe){return f[G]!==pe?(i.bindFramebuffer(G,pe),f[G]=pe,G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pe),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function oe(G,pe){let fe=g,be=!1;if(G){fe=d.get(pe),fe===void 0&&(fe=[],d.set(pe,fe));let Re=G.textures;if(fe.length!==Re.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,Ge=Re.length;Pe<Ge;Pe++)fe[Pe]=i.COLOR_ATTACHMENT0+Pe;fe.length=Re.length,be=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,be=!0);be&&i.drawBuffers(fe)}function ie(G){return v!==G?(i.useProgram(G),v=G,!0):!1}let Ee={[ni]:i.FUNC_ADD,[zp]:i.FUNC_SUBTRACT,[Hp]:i.FUNC_REVERSE_SUBTRACT};Ee[Gp]=i.MIN,Ee[Vp]=i.MAX;let re={[tr]:i.ZERO,[Wp]:i.ONE,[Xp]:i.SRC_COLOR,[Lu]:i.SRC_ALPHA,[Kp]:i.SRC_ALPHA_SATURATE,[xo]:i.DST_COLOR,[go]:i.DST_ALPHA,[$p]:i.ONE_MINUS_SRC_COLOR,[Du]:i.ONE_MINUS_SRC_ALPHA,[Yp]:i.ONE_MINUS_DST_COLOR,[qp]:i.ONE_MINUS_DST_ALPHA,[jp]:i.CONSTANT_COLOR,[Zp]:i.ONE_MINUS_CONSTANT_COLOR,[Jp]:i.CONSTANT_ALPHA,[Qp]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(G,pe,fe,be,Re,Pe,Ge,Je,we,$e){if(G===hn){p===!0&&(W(i.BLEND),p=!1);return}if(p===!1&&(J(i.BLEND),p=!0),G!==uc){if(G!==m||$e!==S){if((M!==ni||T!==ni)&&(i.blendEquation(i.FUNC_ADD),M=ni,T=ni),$e)switch(G){case Zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFunc(i.ONE,i.ONE);break;case Pu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Iu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",G);break}else switch(G){case Zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pu:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Iu:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",G);break}_=null,y=null,E=null,x=null,b.set(0,0,0),P=0,m=G,S=$e}return}Re=Re||pe,Pe=Pe||fe,Ge=Ge||be,(pe!==M||Re!==T)&&(i.blendEquationSeparate(Ee[pe],Ee[Re]),M=pe,T=Re),(fe!==_||be!==y||Pe!==E||Ge!==x)&&(i.blendFuncSeparate(re[fe],re[be],re[Pe],re[Ge]),_=fe,y=be,E=Pe,x=Ge),(Je.equals(b)===!1||we!==P)&&(i.blendColor(Je.r,Je.g,Je.b,we),b.copy(Je),P=we),m=G,S=!1}function ue(G,pe){G.side===Bt?W(i.CULL_FACE):J(i.CULL_FACE);let fe=G.side===gn;pe&&(fe=!fe),_e(fe),G.blending===Zr&&G.transparent===!1?xe(hn):xe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let be=G.stencilWrite;o.setTest(be),be&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Le(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):W(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(G){R!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),R=G)}function Se(G){G!==Op?(J(i.CULL_FACE),G!==I&&(G===Cu?i.cullFace(i.BACK):G===Bp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):W(i.CULL_FACE),I=G}function Ae(G){G!==z&&(D&&i.lineWidth(G),z=G)}function Le(G,pe,fe){G?(J(i.POLYGON_OFFSET_FILL),(L!==pe||w!==fe)&&(L=pe,w=fe,a.getReversed()&&(pe=-pe,fe=-fe),i.polygonOffset(pe,fe))):W(i.POLYGON_OFFSET_FILL)}function ke(G){G?J(i.SCISSOR_TEST):W(i.SCISSOR_TEST)}function ze(G){G===void 0&&(G=i.TEXTURE0+U-1),F!==G&&(i.activeTexture(G),F=G)}function et(G,pe,fe){fe===void 0&&(F===null?fe=i.TEXTURE0+U-1:fe=F);let be=B[fe];be===void 0&&(be={type:void 0,texture:void 0},B[fe]=be),(be.type!==G||be.texture!==pe)&&(F!==fe&&(i.activeTexture(fe),F=fe),i.bindTexture(G,pe||q[G]),be.type=G,be.texture=pe)}function X(){let G=B[F];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function mt(){try{i.compressedTexImage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function je(){try{i.compressedTexImage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function rt(){try{i.texSubImage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function j(){try{i.texSubImage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function me(){try{i.compressedTexSubImage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function le(){try{i.compressedTexSubImage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function Me(){try{i.texStorage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function N(){try{i.texStorage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function A(){try{i.texImage2D(...arguments)}catch(G){Qe("WebGLState:",G)}}function Y(){try{i.texImage3D(...arguments)}catch(G){Qe("WebGLState:",G)}}function ge(G){return u[G]!==void 0?u[G]:i.getParameter(G)}function ae(G,pe){u[G]!==pe&&(i.pixelStorei(G,pe),u[G]=pe)}function ve(G){Z.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Z.copy(G))}function Te(G){V.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),V.copy(G))}function ce(G,pe){let fe=c.get(pe);fe===void 0&&(fe=new WeakMap,c.set(pe,fe));let be=fe.get(G);be===void 0&&(be=i.getUniformBlockIndex(pe,G.name),i.uniformBlockBinding(pe,be,be),fe.set(G,be))}function de(G,pe,fe){let Re=c.get(pe).get(G);l[Re]!==fe&&(i.bindBufferBase(i.UNIFORM_BUFFER,Re,fe),l[Re]=fe)}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},F=null,B={},f={},l={},d=new WeakMap,g=[],v=null,p=!1,m=null,M=null,_=null,y=null,T=null,E=null,x=null,b=new De(0,0,0),P=0,S=!1,R=null,I=null,z=null,L=null,w=null,Z.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:W,bindFramebuffer:Q,drawBuffers:oe,useProgram:ie,setBlending:xe,setMaterial:ue,setFlipSided:_e,setCullFace:Se,setLineWidth:Ae,setPolygonOffset:Le,setScissorTest:ke,activeTexture:ze,bindTexture:et,unbindTexture:X,compressedTexImage2D:mt,compressedTexImage3D:je,texImage2D:A,texImage3D:Y,pixelStorei:ae,getParameter:ge,updateUBOMapping:ce,uniformBlockBinding:de,texStorage2D:Me,texStorage3D:N,texSubImage2D:rt,texSubImage3D:j,compressedTexSubImage2D:me,compressedTexSubImage3D:le,scissor:ve,viewport:Te,reset:Ce}}function dS(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,h=new WeakMap,u=new Set,f,d=new WeakMap,g=new Set,v=new FinalizationRegistry(N=>g.delete(N)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,A){return p?new OffscreenCanvas(N,A):Or("canvas")}function M(N,A,Y){let ge=1,ae=Me(N);if((ae.width>Y||ae.height>Y)&&(ge=Y/Math.max(ae.width,ae.height)),ge<1)if(typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&N instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&N instanceof ImageBitmap||typeof VideoFrame!="undefined"&&N instanceof VideoFrame){let ve=Math.floor(ge*ae.width),Te=Math.floor(ge*ae.height);f===void 0&&(f=m(ve,Te));let ce=A?m(ve,Te):f;return ce.width=ve,ce.height=Te,ce.getContext("2d").drawImage(N,0,0,ve,Te),qe("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ve+"x"+Te+")."),ce}else return"data"in N&&qe("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),N;return N}function _(N){return N.generateMipmaps}function y(N){i.generateMipmap(N)}function T(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(N,A,Y,ge,ae,ve=!1){if(N!==null){if(i[N]!==void 0)return i[N];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Te;ge&&(Te=e.get("EXT_texture_norm16"),Te||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=A;if(A===i.RED&&(Y===i.FLOAT&&(ce=i.R32F),Y===i.HALF_FLOAT&&(ce=i.R16F),Y===i.UNSIGNED_BYTE&&(ce=i.R8),Y===i.UNSIGNED_SHORT&&Te&&(ce=Te.R16_EXT),Y===i.SHORT&&Te&&(ce=Te.R16_SNORM_EXT)),A===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.R8UI),Y===i.UNSIGNED_SHORT&&(ce=i.R16UI),Y===i.UNSIGNED_INT&&(ce=i.R32UI),Y===i.BYTE&&(ce=i.R8I),Y===i.SHORT&&(ce=i.R16I),Y===i.INT&&(ce=i.R32I)),A===i.RG&&(Y===i.FLOAT&&(ce=i.RG32F),Y===i.HALF_FLOAT&&(ce=i.RG16F),Y===i.UNSIGNED_BYTE&&(ce=i.RG8),Y===i.UNSIGNED_SHORT&&Te&&(ce=Te.RG16_EXT),Y===i.SHORT&&Te&&(ce=Te.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ce=i.RG16UI),Y===i.UNSIGNED_INT&&(ce=i.RG32UI),Y===i.BYTE&&(ce=i.RG8I),Y===i.SHORT&&(ce=i.RG16I),Y===i.INT&&(ce=i.RG32I)),A===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),Y===i.UNSIGNED_INT&&(ce=i.RGB32UI),Y===i.BYTE&&(ce=i.RGB8I),Y===i.SHORT&&(ce=i.RGB16I),Y===i.INT&&(ce=i.RGB32I)),A===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ce=i.RGBA32UI),Y===i.BYTE&&(ce=i.RGBA8I),Y===i.SHORT&&(ce=i.RGBA16I),Y===i.INT&&(ce=i.RGBA32I)),A===i.RGB&&(Y===i.UNSIGNED_SHORT&&Te&&(ce=Te.RGB16_EXT),Y===i.SHORT&&Te&&(ce=Te.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),A===i.RGBA){let de=ve?Na:ct.getTransfer(ae);Y===i.FLOAT&&(ce=i.RGBA32F),Y===i.HALF_FLOAT&&(ce=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ce=de===bt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Te&&(ce=Te.RGBA16_EXT),Y===i.SHORT&&Te&&(ce=Te.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(N,A){let Y;return N?A===null||A===di||A===is?Y=i.DEPTH24_STENCIL8:A===qn?Y=i.DEPTH32F_STENCIL8:A===ea&&(Y=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===di||A===is?Y=i.DEPTH_COMPONENT24:A===qn?Y=i.DEPTH_COMPONENT32F:A===ea&&(Y=i.DEPTH_COMPONENT16),Y}function b(N,A){return _(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ut&&N.minFilter!==nn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function P(N){let A=new WeakRef(N);n.get(N).__ref=A,g.add(A),v.register(N,A,A)}function S(N){let A=n.get(N).__ref;A!==void 0&&(g.delete(A),v.unregister(A))}function R(N){z(N.target)}function I(N){L(N.target)}function z(N){N.removeEventListener("dispose",R),S(N),U(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&u.delete(N)}function L(N){N.removeEventListener("dispose",I),S(N),O(N)}function w(){for(let N of g){let A=N.deref();A!==void 0&&(A.isRenderTarget===!0?L(A):z(A))}g.clear(),u.clear()}function U(N){let A=n.get(N);if(A.__webglInit===void 0)return;let Y=N.source,ge=d.get(Y);if(ge){let ae=ge[A.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&D(N),Object.keys(ge).length===0&&d.delete(Y)}n.remove(N)}function D(N){let A=n.get(N);i.deleteTexture(A.__webglTexture);let Y=N.source,ge=d.get(Y);delete ge[A.__cacheKey],a.memory.textures--}function O(N){let A=n.get(N);A.__depthDisposeCallback&&A.__depthDisposeCallback();let Y=N.depthTexture;if(Y&&Y.renderTarget===N&&z(Y),N.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(A.__webglFramebuffer[ae]))for(let ve=0;ve<A.__webglFramebuffer[ae].length;ve++)i.deleteFramebuffer(A.__webglFramebuffer[ae][ve]);else i.deleteFramebuffer(A.__webglFramebuffer[ae]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[ae])}else{if(Array.isArray(A.__webglFramebuffer))for(let ae=0;ae<A.__webglFramebuffer.length;ae++)i.deleteFramebuffer(A.__webglFramebuffer[ae]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ae=0;ae<A.__webglColorRenderbuffer.length;ae++)A.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[ae]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let ge=N.textures;for(let ae=0,ve=ge.length;ae<ve;ae++){let Te=n.get(ge[ae]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(ge[ae])}n.remove(N)}let k=0;function F(){k=0}function B(){return k}function $(N){k=N}function ee(){let N=k;return N>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,N}function Z(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.mipmapsAutoUpdate),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function V(N,A){let Y=n.get(N);if(N.isVideoTexture&&me(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){let ge=N.image;if(ge===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(Y,N,A);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+A)}function ne(N,A){let Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){ue(Y,N,A);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+A)}function q(N,A){let Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){ue(Y,N,A);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+A)}function J(N,A){let Y=n.get(N);if(N.version>0&&Y.__version!==N.version){_e(Y,N,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+A)}let W={[Sn]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[Ur]:i.MIRRORED_REPEAT},Q={[Ut]:i.NEAREST,[mc]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},oe={[om]:i.NEVER,[Wu]:i.ALWAYS,[lm]:i.LESS,[Gu]:i.LEQUAL,[cm]:i.EQUAL,[Vu]:i.GEQUAL,[hm]:i.GREATER,[um]:i.NOTEQUAL};function ie(N,A){if(A.type===qn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===nn||A.magFilter===Qr||A.magFilter===sr||A.magFilter===ii||A.minFilter===nn||A.minFilter===Qr||A.minFilter===sr||A.minFilter===ii)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,W[A.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,W[A.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,W[A.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Q[A.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Q[A.minFilter]),A.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,oe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ut||A.minFilter!==sr&&A.minFilter!==ii||A.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ee(N,A){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",R),P(A));let ge=A.source,ae=d.get(ge);ae===void 0&&(ae={},d.set(ge,ae));let ve=Z(A);if(ve!==N.__cacheKey){ae[ve]===void 0&&(ae[ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ae[ve].usedTimes++;let Te=ae[N.__cacheKey];Te!==void 0&&(ae[N.__cacheKey].usedTimes--,Te.usedTimes===0&&D(A)),N.__cacheKey=ve,N.__webglTexture=ae[ve].texture}return Y}function re(N,A,Y){return Math.floor(Math.floor(N/Y)/A)}function xe(N,A,Y,ge){let ve=N.updateRanges;if(ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Y,ge,A.data);else{ve.sort((G,pe)=>G.start-pe.start);let Te=0;for(let G=1;G<ve.length;G++){let pe=ve[Te],fe=ve[G],be=pe.start+pe.count,Re=re(fe.start,A.width,4),Pe=re(pe.start,A.width,4);fe.start<=be+1&&Re===Pe&&re(fe.start+fe.count-1,A.width,4)===Re?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++Te,ve[Te]=fe)}ve.length=Te+1;let ce=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),Ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let G=0,pe=ve.length;G<pe;G++){let fe=ve[G],be=Math.floor(fe.start/4),Re=Math.ceil(fe.count/4),Pe=be%A.width,Ge=Math.floor(be/A.width),Je=Re,we=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(i.TEXTURE_2D,0,Pe,Ge,Je,we,Y,ge,A.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ce),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function ue(N,A,Y){let ge=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=i.TEXTURE_3D);let ae=Ee(N,A),ve=A.source;t.bindTexture(ge,N.__webglTexture,i.TEXTURE0+Y);let Te=n.get(ve);if(ve.version!==Te.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap!="undefined"&&A.image instanceof ImageBitmap)===!1){let we=ct.getPrimaries(ct.workingColorSpace),$e=A.colorSpace===ss?null:ct.getPrimaries(A.colorSpace),it=A.colorSpace===ss||we===$e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let de=M(A.image,!1,s.maxTextureSize);de=le(A,de);let Ce=r.convert(A.format,A.colorSpace),G=r.convert(A.type),pe=E(A.internalFormat,Ce,G,A.normalized,A.colorSpace,A.isVideoTexture);ie(ge,A);let fe,be=A.mipmaps,Re=A.isVideoTexture!==!0,Pe=Te.__version===void 0||ae===!0,Ge=ve.dataReady,Je=b(A,de);if(A.isDepthTexture)pe=x(A.format===pi,A.type),Pe&&(Re?t.texStorage2D(i.TEXTURE_2D,1,pe,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,pe,de.width,de.height,0,Ce,G,null));else if(A.isDataTexture)if(be.length>0){Re&&Pe&&t.texStorage2D(i.TEXTURE_2D,Je,pe,be[0].width,be[0].height);for(let we=0,$e=be.length;we<$e;we++)fe=be[we],Re?Ge&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,fe.width,fe.height,Ce,G,fe.data):t.texImage2D(i.TEXTURE_2D,we,pe,fe.width,fe.height,0,Ce,G,fe.data);A.generateMipmaps=!1}else Re?(Pe&&t.texStorage2D(i.TEXTURE_2D,Je,pe,de.width,de.height),Ge&&xe(A,de,Ce,G)):t.texImage2D(i.TEXTURE_2D,0,pe,de.width,de.height,0,Ce,G,de.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Re&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,pe,be[0].width,be[0].height,de.depth);for(let we=0,$e=be.length;we<$e;we++)if(fe=be[we],A.format!==On)if(Ce!==null)if(Re){if(Ge)if(A.layerUpdates.size>0){let it=tf(fe.width,fe.height,A.format,A.type);for(let Fe of A.layerUpdates){let Mt=fe.data.subarray(Fe*it/fe.data.BYTES_PER_ELEMENT,(Fe+1)*it/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,Fe,fe.width,fe.height,1,Ce,Mt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,fe.width,fe.height,de.depth,Ce,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,pe,fe.width,fe.height,de.depth,0,fe.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,fe.width,fe.height,de.depth,Ce,G,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,pe,fe.width,fe.height,de.depth,0,Ce,G,fe.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Re&&Pe&&t.texStorage2D(i.TEXTURE_2D,Je,pe,be[0].width,be[0].height);for(let we=0,$e=be.length;we<$e;we++)fe=be[we],A.format!==On?Ce!==null?Re?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,fe.width,fe.height,Ce,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,we,pe,fe.width,fe.height,0,fe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?Ge&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,fe.width,fe.height,Ce,G,fe.data):t.texImage2D(i.TEXTURE_2D,we,pe,fe.width,fe.height,0,Ce,G,fe.data)}else if(A.isDataArrayTexture)if(Re){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,pe,de.width,de.height,de.depth),Ge)if(A.layerUpdates.size>0){let we=tf(de.width,de.height,A.format,A.type);for(let $e of A.layerUpdates){let it=de.data.subarray($e*we/de.data.BYTES_PER_ELEMENT,($e+1)*we/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$e,de.width,de.height,1,Ce,G,it)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ce,G,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,de.width,de.height,de.depth,0,Ce,G,de.data);else if(A.isData3DTexture)Re?(Pe&&t.texStorage3D(i.TEXTURE_3D,Je,pe,de.width,de.height,de.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ce,G,de.data)):t.texImage3D(i.TEXTURE_3D,0,pe,de.width,de.height,de.depth,0,Ce,G,de.data);else if(A.isFramebufferTexture){if(Pe)if(Re)t.texStorage2D(i.TEXTURE_2D,Je,pe,de.width,de.height);else{let we=de.width,$e=de.height;for(let it=0;it<Je;it++)t.texImage2D(i.TEXTURE_2D,it,pe,we,$e,0,Ce,G,null),we>>=1,$e>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let we=i.canvas;if(we.hasAttribute("layoutsubtree")||we.setAttribute("layoutsubtree","true"),de.parentNode!==we){we.appendChild(de),u.add(A),we.onpaint=$e=>{let it=$e.changedElements;for(let Fe of u)it.includes(Fe.image)&&(Fe.needsUpdate=!0)},we.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let it=i.RGBA,Fe=i.RGBA,Mt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,it,Fe,Mt,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(be.length>0){if(Re&&Pe){let we=Me(be[0]);t.texStorage2D(i.TEXTURE_2D,Je,pe,we.width,we.height)}for(let we=0,$e=be.length;we<$e;we++)fe=be[we],Re?Ge&&t.texSubImage2D(i.TEXTURE_2D,we,0,0,Ce,G,fe):t.texImage2D(i.TEXTURE_2D,we,pe,Ce,G,fe);A.generateMipmaps=!1}else if(Re){if(Pe){let we=Me(de);t.texStorage2D(i.TEXTURE_2D,Je,pe,we.width,we.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,G,de)}else t.texImage2D(i.TEXTURE_2D,0,pe,Ce,G,de);_(A)&&A.mipmapsAutoUpdate===!0&&y(ge),Te.__version=ve.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function _e(N,A,Y){if(A.image.length!==6)return;let ge=Ee(N,A),ae=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+Y);let ve=n.get(ae);if(ae.version!==ve.__version||ge===!0){t.activeTexture(i.TEXTURE0+Y);let Te=ct.getPrimaries(ct.workingColorSpace),ce=A.colorSpace===ss?null:ct.getPrimaries(A.colorSpace),de=A.colorSpace===ss||Te===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ce=A.isCompressedTexture||A.image[0].isCompressedTexture,G=A.image[0]&&A.image[0].isDataTexture,pe=[];for(let Fe=0;Fe<6;Fe++)!Ce&&!G?pe[Fe]=M(A.image[Fe],!0,s.maxCubemapSize):pe[Fe]=G?A.image[Fe].image:A.image[Fe],pe[Fe]=le(A,pe[Fe]);let fe=pe[0],be=r.convert(A.format,A.colorSpace),Re=r.convert(A.type),Pe=E(A.internalFormat,be,Re,A.normalized,A.colorSpace),Ge=A.isVideoTexture!==!0,Je=ve.__version===void 0||ge===!0,we=ae.dataReady,$e=b(A,fe);ie(i.TEXTURE_CUBE_MAP,A);let it;if(A.isDepthTexture){if(Pe=x(A.format===pi,A.type),Je)if(Ge)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Pe,fe.width,fe.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Pe,fe.width,fe.height,0,be,Re,null)}else if(Ce){Ge&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,Pe,fe.width,fe.height);for(let Fe=0;Fe<6;Fe++){it=pe[Fe].mipmaps;for(let Mt=0;Mt<it.length;Mt++){let on=it[Mt];A.format!==On?be!==null?Ge?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt,0,0,on.width,on.height,be,on.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt,Pe,on.width,on.height,0,on.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt,0,0,on.width,on.height,be,Re,on.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt,Pe,on.width,on.height,0,be,Re,on.data)}}}else{if(it=A.mipmaps,Ge&&Je){it.length>0&&$e++;let Fe=Me(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,Pe,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(G){Ge?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,pe[Fe].width,pe[Fe].height,be,Re,pe[Fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Pe,pe[Fe].width,pe[Fe].height,0,be,Re,pe[Fe].data);for(let Mt=0;Mt<it.length;Mt++){let hs=it[Mt].image[Fe].image;Ge?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt+1,0,0,hs.width,hs.height,be,Re,hs.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt+1,Pe,hs.width,hs.height,0,be,Re,hs.data)}}else{Ge?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,be,Re,pe[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Pe,be,Re,pe[Fe]);for(let Mt=0;Mt<it.length;Mt++){let on=it[Mt];Ge?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt+1,0,0,be,Re,on.image[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt+1,Pe,be,Re,on.image[Fe])}}}_(A)&&A.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ve.__version=ae.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Se(N,A,Y,ge,ae,ve){let Te=r.convert(Y.format,Y.colorSpace),ce=r.convert(Y.type),de=E(Y.internalFormat,Te,ce,Y.normalized,Y.colorSpace),Ce=n.get(A),G=n.get(Y);if(G.__renderTarget=A,!Ce.__hasExternalTextures){let pe=Math.max(1,A.width>>ve),fe=Math.max(1,A.height>>ve);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ve,de,pe,fe,A.depth,0,Te,ce,null):t.texImage2D(ae,ve,de,pe,fe,0,Te,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),j(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ae,G.__webglTexture,0,rt(A)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,ae,G.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(N,A,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,N),A.depthBuffer){let ge=A.depthTexture,ae=ge&&ge.isDepthTexture?ge.type:null,ve=x(A.stencilBuffer,ae),Te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;j(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(A),ve,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(A),ve,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ve,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,N)}else{let ge=A.textures;for(let ae=0;ae<ge.length;ae++){let ve=ge[ae],Te=r.convert(ve.format,ve.colorSpace),ce=r.convert(ve.type),de=E(ve.internalFormat,Te,ce,ve.normalized,ve.colorSpace);j(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(A),de,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(A),de,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,de,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(N,A,Y){let ge=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(A.depthTexture);ae.__renderTarget=A;let ve=ge?A.depthTexture.image[0]:A.depthTexture.image;(!ae.__webglTexture||ve.width!==A.width||ve.height!==A.height)&&(ve.width=A.width,ve.height=A.height,A.depthTexture.needsUpdate=!0),ge?J(A.depthTexture,0):V(A.depthTexture,0);let Te=ae.__webglTexture,ce=rt(A),de=ge?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,Ce=A.depthTexture.format===pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Xi)j(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,de,Te,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,de,Te,0);else if(A.depthTexture.format===pi)j(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,de,Te,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,de,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(N){let A=n.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let ge=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ge){let ae=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ge.removeEventListener("dispose",ae)};ge.addEventListener("dispose",ae),A.__depthDisposeCallback=ae}A.__boundDepthTexture=ge}if(N.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let ge=0;ge<6;ge++)Le(A.__webglFramebuffer[ge],N,ge);else N.texture.mipmaps.length>0?Le(A.__webglFramebuffer[0],N,0):Le(A.__webglFramebuffer,N,0);else if(Y){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]===void 0)A.__webglDepthbuffer[ge]=i.createRenderbuffer(),Ae(A.__webglDepthbuffer[ge],N,!1);else{let ae=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer[ge];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ve)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Ae(A.__webglDepthbuffer,N,!1);else{let ae=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ve)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(N,A,Y){let ge=n.get(N);A!==void 0&&Se(ge.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ke(N)}function et(N){let A=N.texture,Y=n.get(N),ge=n.get(A);N.addEventListener("dispose",I),P(N);let ae=N.textures,ve=N.isWebGLCubeRenderTarget===!0,Te=ae.length>1;if(Te||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=A.version,a.memory.textures++),ve){Y.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(A.mipmaps.length>0){Y.__webglFramebuffer[ce]=[];for(let de=0;de<A.mipmaps.length;de++)Y.__webglFramebuffer[ce][de]=i.createFramebuffer()}else Y.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)Y.__webglFramebuffer[ce]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Te)for(let ce=0,de=ae.length;ce<de;ce++){let Ce=n.get(ae[ce]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&j(N)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ce=0;ce<ae.length;ce++){let de=ae[ce];Y.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ce]);let Ce=r.convert(de.format,de.colorSpace),G=r.convert(de.type),pe=E(de.internalFormat,Ce,G,de.normalized,de.colorSpace,N.isXRRenderTarget===!0),fe=rt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,pe,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(Y.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),ie(i.TEXTURE_CUBE_MAP,A);for(let ce=0;ce<6;ce++)if(A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)Se(Y.__webglFramebuffer[ce][de],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else Se(Y.__webglFramebuffer[ce],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);_(A)?y(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let ce=0,de=ae.length;ce<de;ce++){let Ce=ae[ce],G=n.get(Ce),pe=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(pe=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,G.__webglTexture),ie(pe,Ce),Se(Y.__webglFramebuffer,N,Ce,i.COLOR_ATTACHMENT0+ce,pe,0),_(Ce)&&y(pe)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ce=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,ge.__webglTexture),ie(ce,A),A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)Se(Y.__webglFramebuffer[de],N,A,i.COLOR_ATTACHMENT0,ce,de);else Se(Y.__webglFramebuffer,N,A,i.COLOR_ATTACHMENT0,ce,0);_(A)?y(ce):A.mipmaps.length>0&&i.texParameteri(ce,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&ke(N)}function X(N){let A=N.textures;for(let Y=0,ge=A.length;Y<ge;Y++){let ae=A[Y];if(_(ae)&&ae.mipmapsAutoUpdate===!0){let ve=T(N),Te=n.get(ae).__webglTexture;t.bindTexture(ve,Te),y(ve),t.unbindTexture()}}}let mt=[];function je(N){if(N.samples>0){if(j(N)===!1){let A=N.textures,Y=N.width,ge=N.height,ae=i.COLOR_BUFFER_BIT,ve=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(N),ce=A.length>1;if(ce)for(let Ce=0;Ce<A.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ce=0;Ce<A.length;Ce++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ce]);let G=n.get(A[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,G,0)}i.blitFramebuffer(0,0,Y,ge,0,0,Y,ge,ae,i.NEAREST),l===!0&&(mt.length=0,mt.push(i.COLOR_ATTACHMENT0+Ce),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&mt.push(ve),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Ce=0;Ce<A.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ce]);let G=n.get(A[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,G,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let A=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function rt(N){return Math.min(s.maxSamples,N.samples)}function j(N){let A=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function me(N){let A=a.render.frame;h.get(N)!==A&&(h.set(N,A),N.update())}function le(N,A){let Y=N.colorSpace,ge=N.format,ae=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==Pn&&Y!==ss&&(ct.getTransfer(Y)===bt?(ge!==On||ae!==bn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",Y)),A}function Me(N){return typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame!="undefined"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=F,this.getTextureUnits=B,this.setTextureUnits=$,this.setTexture2D=V,this.setTexture2DArray=ne,this.setTexture3D=q,this.setTextureCube=J,this.rebindTextures=ze,this.setupRenderTarget=et,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=j,this.dispose=w}function pS(i,e){function t(n,s=ss){let r,a=ct.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uu)return i.BYTE;if(n===Fu)return i.SHORT;if(n===ea)return i.UNSIGNED_SHORT;if(n===gc)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Gt)return i.HALF_FLOAT;if(n===ku)return i.ALPHA;if(n===zu)return i.RGB;if(n===On)return i.RGBA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===_c)return i.RED;if(n===yc)return i.RED_INTEGER;if(n===Rs)return i.RG;if(n===Mc)return i.RG_INTEGER;if(n===Sc)return i.RGBA_INTEGER;if(n===To||n===Eo||n===wo||n===Ao)if(a===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Tc||n===Ec||n===wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Ro||n===Lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ac||n===Rc)return a===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pc)return r.COMPRESSED_R11_EAC;if(n===Ic)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ro)return r.COMPRESSED_RG11_EAC;if(n===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Hc||n===Gc||n===Vc||n===Wc||n===Xc||n===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qc||n===Yc||n===Kc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===qc)return a===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jc||n===Zc||n===Co||n===Jc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var mS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gS=`
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

}`,gf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $a(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pt({vertexShader:mS,fragmentShader:gS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xf=class extends Mi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,v=typeof XRWebGLBinding!="undefined",p=new gf,m={},M=t.getContextAttributes(),_=null,y=null,T=[],E=[],x=new ye,b=null,P=null,S=new tn;S.viewport=new Tt;let R=new tn;R.viewport=new Tt;let I=[S,R],z=new cc,L=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let V=T[Z];return V===void 0&&(V=new Hr,T[Z]=V),V.getTargetRaySpace()},this.getControllerGrip=function(Z){let V=T[Z];return V===void 0&&(V=new Hr,T[Z]=V),V.getGripSpace()},this.getHand=function(Z){let V=T[Z];return V===void 0&&(V=new Hr,T[Z]=V),V.getHandSpace()};function U(Z){let V=E.indexOf(Z.inputSource);if(V===-1)return;let ne=T[V];ne!==void 0&&(ne.update(Z.inputSource,Z.frame,c||a),ne.dispatchEvent({type:Z.type,data:Z.inputSource}))}function D(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",O);for(let Z=0;Z<T.length;Z++){let V=E[Z];V!==null&&(E[Z]=null,T[Z].disconnect(V))}L=null,w=null,p.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(_),d=null,f=null,u=null,s=null,y=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),P!==null){let Z=P.camera;Z.fov=P.fov,Z.zoom=P.zoom,Z.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",D),s.addEventListener("inputsourceschange",O),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,q=null,J=null;M.depth&&(J=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=M.stencil?pi:Xi,q=M.stencil?is:di);let W={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(W),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ft(f.textureWidth,f.textureHeight,{format:On,type:bn,depthTexture:new fi(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ne={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ft(d.framebufferWidth,d.framebufferHeight,{format:On,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(Z){for(let V=0;V<Z.removed.length;V++){let ne=Z.removed[V],q=E.indexOf(ne);q>=0&&(E[q]=null,T[q].disconnect(ne))}for(let V=0;V<Z.added.length;V++){let ne=Z.added[V],q=E.indexOf(ne);if(q===-1){for(let W=0;W<T.length;W++)if(W>=E.length){E.push(ne),q=W;break}else if(E[W]===null){E[W]=ne,q=W;break}if(q===-1)break}let J=T[q];J&&J.connect(ne)}}function k(Z,V){V===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(V.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let V=Z.near,ne=Z.far;p.texture!==null&&(p.depthNear>0&&(V=p.depthNear),p.depthFar>0&&(ne=p.depthFar)),z.near=R.near=S.near=V,z.far=R.far=S.far=ne,(L!==z.near||w!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,w=z.far),z.layers.mask=Z.layers.mask|6,S.layers.mask=z.layers.mask&-5,R.layers.mask=z.layers.mask&-3;let q=Z.parent,J=z.cameras;k(z,q);for(let W=0;W<J.length;W++)k(J[W],q);z.projectionMatrix.copy(S.projectionMatrix),z.projectionMatrixInverse.copy(S.projectionMatrixInverse),P===null&&Z.isPerspectiveCamera&&(P={camera:Z,fov:Z.fov,zoom:Z.zoom}),F(Z,z,q)};function F(Z,V,ne){ne===null?Z.matrix.copy(V.matrixWorld):(Z.matrix.copy(ne.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(V.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(V.projectionMatrix),Z.projectionMatrixInverse.copy(V.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Xs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(Z){return m[Z]};let B=null;function $(Z,V){if(h=V.getViewerPose(c||a),g=V,h!==null){let ne=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let q=!1;ne.length!==z.cameras.length&&(z.cameras.length=0,q=!0);for(let oe=0;oe<ne.length;oe++){let ie=ne[oe],Ee=null;if(d!==null)Ee=d.getViewport(ie);else{let xe=u.getViewSubImage(f,ie);Ee=xe.viewport,oe===0&&(e.setRenderTargetTextures(y,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(y))}let re=I[oe];re===void 0&&(re=new tn,re.layers.enable(oe),re.viewport=new Tt,I[oe]=re),re.matrix.fromArray(ie.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ie.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),oe===0&&(z.matrix.copy(re.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),q===!0&&z.cameras.push(re)}let J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let oe=u.getDepthInformation(ne[0]);oe&&oe.isValid&&oe.texture&&p.init(oe,s.renderState)}if(J&&J.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let oe=0;oe<ne.length;oe++){let ie=ne[oe].camera;if(ie){let Ee=m[ie];Ee||(Ee=new $a,m[ie]=Ee);let re=u.getCameraImage(ie);Ee.sourceTexture=re}}}}for(let ne=0;ne<T.length;ne++){let q=E[ne],J=T[ne];q!==null&&J!==void 0&&J.update(q,V,c||a)}B&&B(Z,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}let ee=new Xm;ee.setAnimationLoop($),this.setAnimationLoop=function(Z){B=Z},this.dispose=function(){}}},xS=new Ye,t0=new st;t0.set(-1,0,0,0,1,0,0,0,1);function vS(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ju(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,_,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===gn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===gn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=e.get(m),_=M.envMap,y=M.envMapRotation;_&&(p.envMap.value=_,p.envMapRotation.value.setFromMatrix4(xS.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(t0),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _S(i,e,t,n){let s={},r={};function a(M,_){let y=_.program;n.uniformBlockBinding(M,y,s[M.id])}function o(M,_){let y=s[M.id];y===void 0&&(g(M),y=l(M),s[M.id]=y,M.addEventListener("dispose",p));let T=_.program;n.updateUBOMapping(M,T);let E=e.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){let _=i.createBuffer(),y=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,y,T),i.bindBuffer(i.UNIFORM_BUFFER,null),_}function c(M){let _=s[M.id],y=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,x=y.length;E<x;E++){let b=y[E];if(Array.isArray(b))for(let P=0,S=b.length;P<S;P++)h(b[P],E,P,T);else h(b,E,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,_,y,T){if(f(M,_,y,T)===!0){let E=M.__offset,x=M.value;if(Array.isArray(x)){let b=0;for(let P=0;P<x.length;P++){let S=x[P],R=v(S,!0);u(S,M.__data,b),b+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,M.__data)}}function u(M,_,y){typeof M=="number"||typeof M=="boolean"?_[y]=M:M.isMatrix3?(_[y]=M.elements[0],_[y+1]=M.elements[1],_[y+2]=M.elements[2],_[y+3]=0,_[y+4]=M.elements[3],_[y+5]=M.elements[4],_[y+6]=M.elements[5],_[y+7]=0,_[y+8]=M.elements[6],_[y+9]=M.elements[7],_[y+10]=M.elements[8],_[y+11]=0):ArrayBuffer.isView(M)?_.set(M.subarray(0,_.length-y),y):M.toArray(_,y)}function f(M,_,y,T){let E=M.value,x=_+"_"+y;if(Array.isArray(E)){T[x]===void 0&&(T[x]=[]);let b=T[x],P=!1;for(let S=0;S<E.length;S++)d(E[S],b,S)===!0&&(P=!0);return P}return d(E,T,x)}function d(M,_,y){if(_[y]===void 0)return typeof M=="number"||typeof M=="boolean"?_[y]=M:ArrayBuffer.isView(M)?_[y]=M.slice():_[y]=M.clone(),!0;{let T=_[y];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return _[y]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function g(M){let _=M.uniforms,y=0,T=16;for(let x=0,b=_.length;x<b;x++){let P=Array.isArray(_[x])?_[x]:[_[x]];for(let S=0,R=P.length;S<R;S++){let I=P[S],z=Array.isArray(I.value)?I.value:[I.value],L=Array.isArray(_[x])||Array.isArray(I.value),w=y;for(let D=0,O=z.length;D<O;D++){let k=z[D],F=v(k,L),B=y%T,$=B%F.boundary,ee=B+$;y+=$,ee!==0&&T-ee<F.storage&&(y+=T-ee),D===0&&(w=y),y+=F.storage}let U=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new U((y-w)/Float32Array.BYTES_PER_ELEMENT),I.__offset=w}}let E=y%T;return E>0&&(y+=T-E),M.__size=y,M.__cache={},this}function v(M,_){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=16,y.storage=48):M.isMatrix4?(y.boundary=16,y.storage=64):M.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",M),_===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(M){let _=M.target;_.removeEventListener("dispose",p),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var yS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function MS(){return Ri===null&&(Ri=new ei(yS,16,16,Rs,Gt),Ri.name="DFG_LUT",Ri.minFilter=nn,Ri.magFilter=nn,Ri.wrapS=Jn,Ri.wrapT=Jn,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var nh=class{constructor(e={}){let{canvas:t=fm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=bn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=d,p=new Set([Sc,Mc,yc]),m=new Set([bn,di,ea,is,xc,vc]),M=new Uint32Array(4),_=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,x=[],b=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,R=!1,I=null,z=null,L=null,w=null;this._outputColorSpace=Ct;let U=0,D=0,O=null,k=-1,F=null,B=new Tt,$=new Tt,ee=null,Z=new De(0),V=0,ne=t.width,q=t.height,J=1,W=null,Q=null,oe=new Tt(0,0,ne,q),ie=new Tt(0,0,ne,q),Ee=!1,re=new ys,xe=new Xl,ue=!1,_e=!1,Se=new Ye,Ae=new H,Le=new Tt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function et(){return O===null?J:1}let X=n;function mt(C,K){return t.getContext(C,K)}let je,rt,j,me,le,Me,N,A,Y,ge,ae,ve,Te,ce,de,Ce,G,pe,fe,be,Re,Pe,Ge;try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",$e,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),X===null){let K="webgl2";if(X=mt(K,C),X===null)throw mt(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(C){throw t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Qe("WebGLRenderer: "+C.message),C}function Je(){je=new Ly(X),je.init(),Re=new pS(X,je),rt=new My(X,je,e,Re),j=new fS(X,je),rt.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),z=X.createFramebuffer(),L=X.createFramebuffer(),w=X.createFramebuffer(),me=new Uy(X),le=new JM,Me=new dS(X,je,j,le,rt,Re,me),N=new Iy(S),A=new Ox(X),Pe=new _y(X,A),Y=new Dy(X,A,me,Pe),ge=new Oy(X,Y,A,Pe,me),pe=new Fy(X,rt,Me),de=new Sy(le),ae=new ZM(S,N,je,rt,Pe,de),ve=new vS(S,le),Te=new eS,ce=new aS(je),G=new vy(S,N,j,ge,g,l),Ce=new uS(S,ge,rt),Ge=new _S(X,me,rt,j),fe=new yy(X,je,me),be=new Ny(X,je,me),me.programs=ae.programs,S.capabilities=rt,S.extensions=je,S.properties=le,S.renderLists=Te,S.shadowMap=Ce,S.state=j,S.info=me}v!==bn&&(P=new ky(v,t.width,t.height,o,s,r));let we=new xf(S,X);this.xr=we,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let C=je.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=je.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(ne,q,!1))},this.getSize=function(C){return C.set(ne,q)},this.setSize=function(C,K,he=!0){if(we.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=C,q=K,t.width=Math.floor(C*J),t.height=Math.floor(K*J),he===!0&&(t.style.width=C+"px",t.style.height=K+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(ne*J,q*J).floor()},this.setDrawingBufferSize=function(C,K,he){ne=C,q=K,J=he,t.width=Math.floor(C*he),t.height=Math.floor(K*he),this.setViewport(0,0,C,K)},this.setEffects=function(C){if(v===bn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let K=0;K<C.length;K++)if(C[K].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(oe)},this.setViewport=function(C,K,he,te){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,K,he,te),j.viewport(B.copy(oe).multiplyScalar(et()).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,K,he,te){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,K,he,te),j.scissor($.copy(ie).multiplyScalar(et()).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(C){j.setScissorTest(Ee=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,he=!0){let te=0;if(C){let se=!1;if(O!==null){let Ue=O.texture.format;se=p.has(Ue)}if(se){let Ue=O.texture.type,He=m.has(Ue),Ne=G.getClearColor(),Be=G.getClearAlpha(),Xe=Ne.r,at=Ne.g,gt=Ne.b;He?(M[0]=Xe,M[1]=at,M[2]=gt,M[3]=Be,X.clearBufferuiv(X.COLOR,0,M)):(_[0]=Xe,_[1]=at,_[2]=gt,_[3]=Be,X.clearBufferiv(X.COLOR,0,_))}else te|=X.COLOR_BUFFER_BIT}K&&(te|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(te|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&X.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),I=C},this.dispose=function(){t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),G.dispose(),Te.dispose(),ce.dispose(),Me.dispose(),le.dispose(),N.dispose(),ge.dispose(),Y.dispose(),Pe.dispose(),Ge.dispose(),ae.dispose(),we.dispose(),we.removeEventListener("sessionstart",Id),we.removeEventListener("sessionend",Ld),Ns.stop()};function $e(C){C.preventDefault(),Ua("WebGLRenderer: Context Lost."),R=!0}function it(){Ua("WebGLRenderer: Context Restored."),R=!1;let C=me.autoReset,K=Ce.enabled,he=Ce.autoUpdate,te=Ce.needsUpdate,se=Ce.type;Je(),me.autoReset=C,Ce.enabled=K,Ce.autoUpdate=he,Ce.needsUpdate=te,Ce.type=se}function Fe(C){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Mt(C){let K=C.target;K.removeEventListener("dispose",Mt),on(K)}function on(C){hs(C),le.remove(C)}function hs(C){let K=le.get(C).programs;K!==void 0&&(K.forEach(function(he){ae.releaseProgram(he)}),C.isShaderMaterial&&ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,he,te,se,Ue){K===null&&(K=ke);let He=se.isMesh&&se.matrixWorld.determinantAffine()<0,Ne=sg(C,K,he,te,se);j.setMaterial(te,He);let Be=he.index,Xe=1;if(te.wireframe===!0){if(Be=Y.getWireframeAttribute(he),Be===void 0)return;Xe=2}let at=he.drawRange,gt=he.attributes.position,Ve=at.start*Xe,xt=(at.start+at.count)*Xe;Ue!==null&&(Ve=Math.max(Ve,Ue.start*Xe),xt=Math.min(xt,(Ue.start+Ue.count)*Xe)),Be!==null?(Ve=Math.max(Ve,0),xt=Math.min(xt,Be.count)):gt!=null&&(Ve=Math.max(Ve,0),xt=Math.min(xt,gt.count));let Qt=xt-Ve;if(Qt<0||Qt===1/0)return;Pe.setup(se,te,Ne,he,Be);let Nt,It=fe;if(Be!==null&&(Nt=A.get(Be),It=be,It.setIndex(Nt)),se.isMesh)te.wireframe===!0?(j.setLineWidth(te.wireframeLinewidth*et()),It.setMode(X.LINES)):It.setMode(X.TRIANGLES);else if(se.isLine){let vn=te.linewidth;vn===void 0&&(vn=1),j.setLineWidth(vn*et()),se.isLineSegments?It.setMode(X.LINES):se.isLineLoop?It.setMode(X.LINE_LOOP):It.setMode(X.LINE_STRIP)}else se.isPoints?It.setMode(X.POINTS):se.isSprite&&It.setMode(X.TRIANGLES);if(se.isBatchedMesh)if(je.get("WEBGL_multi_draw"))It.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{let vn=se._multiDrawStarts,We=se._multiDrawCounts,Rn=se._multiDrawCount,Et=Be?A.get(Be).bytesPerElement:1,Us=le.get(te).currentProgram.getUniforms();for(let _n=0;_n<Rn;_n++)Us.setValue(X,"_gl_DrawID",_n),It.render(vn[_n]/Et,We[_n])}else if(se.isInstancedMesh)It.renderInstances(Ve,Qt,se.count);else if(he.isInstancedBufferGeometry){let vn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,We=Math.min(he.instanceCount,vn);It.renderInstances(Ve,Qt,We)}else It.render(Ve,Qt)};function Pd(C,K,he,te){I!==null&&C.isNodeMaterial&&I.setObject(te,C),ue===!0&&de.setState(C,he,!1),C.transparent===!0&&C.side===Bt&&C.forceSinglePass===!1?(C.side=gn,C.needsUpdate=!0,ga(C,K,te),C.side=Ei,C.needsUpdate=!0,ga(C,K,te),C.side=Bt):ga(C,K,te)}this.compile=function(C,K,he=null){he===null&&(he=C),I!==null&&I.renderStart(C,K,he),E=ce.get(he),E.init(K),b.push(E),he.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(E.pushLight(se),se.castShadow&&E.pushShadow(se))}),C!==he&&C.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(E.pushLight(se),se.castShadow&&E.pushShadow(se))}),E.setupLights(),I!==null&&I.updateLights(E.state.lightsArray),_e=this.localClippingEnabled,ue=de.init(this.clippingPlanes,_e),ue===!0&&de.setGlobalState(this.clippingPlanes,K),I!==null&&Ce.render(E.state.shadowsArray,he,K);let te=new Set;return C.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;let Ue=se.material;if(Ue)if(Array.isArray(Ue))for(let He=0;He<Ue.length;He++){let Ne=Ue[He];Pd(Ne,he,K,se),te.add(Ne)}else Pd(Ue,he,K,se),te.add(Ue)}),E=b.pop(),I!==null&&I.renderEnd(),te},this.compileAsync=function(C,K,he=null){let te=this.compile(C,K,he);return new Promise(se=>{function Ue(){if(te.forEach(function(He){let Be=le.get(He).currentProgram;(Be===void 0||Be.isReady())&&te.delete(He)}),te.size===0){se(C);return}setTimeout(Ue,10)}je.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Fh=null;function ng(C){Fh&&Fh(C)}function Id(){Ns.stop()}function Ld(){Ns.start()}let Ns=new Xm;Ns.setAnimationLoop(ng),typeof self!="undefined"&&Ns.setContext(self),this.setAnimationLoop=function(C){Fh=C,we.setAnimationLoop(C),C===null?Ns.stop():Ns.start()},we.addEventListener("sessionstart",Id),we.addEventListener("sessionend",Ld),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;I!==null&&I.renderStart(C,K);let he=we.enabled===!0&&we.isPresenting===!0,te=P!==null&&(O===null||he)&&P.begin(S,O);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(K),K=we.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,K,O),E=ce.get(C,b.length),E.init(K),E.state.textureUnits=Me.getTextureUnits(),b.push(E),Se.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),K.isArrayCamera?xe.setFromArrayCamera(K):re.setFromProjectionMatrix(Se,Qn,K.reversedDepth),_e=this.localClippingEnabled,ue=de.init(this.clippingPlanes,_e),T=Te.get(C,x.length),T.init(),x.push(T),this.info.render.frame++,we.enabled===!0&&we.isPresenting===!0){let He=S.xr.getDepthSensingMesh();He!==null&&Oh(He,K,-1/0,S.sortObjects)}Oh(C,K,0,S.sortObjects),T.finish(),I!==null&&I.updateLights(E.state.lightsArray),S.sortObjects===!0&&T.sort(W,Q),ze=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ze&&G.addToRenderList(T,C),this.info.autoReset===!0&&this.info.reset(),ue===!0&&de.beginShadows();let se=E.state.shadowsArray;if(Ce.render(se,C,K),ue===!0&&de.endShadows(),(te&&P.hasRenderPass())===!1){let He=T.opaque,Ne=T.transmissive;if(E.setupLights(),K.isArrayCamera){let Be=K.cameras;if(Ne.length>0)for(let Xe=0,at=Be.length;Xe<at;Xe++){let gt=Be[Xe];Nd(He,Ne,C,gt)}ze&&G.render(C);for(let Xe=0,at=Be.length;Xe<at;Xe++){let gt=Be[Xe];Dd(T,C,gt,gt.viewport)}}else Ne.length>0&&Nd(He,Ne,C,K),ze&&G.render(C),Dd(T,C,K)}O!==null&&D===0&&(Me.updateMultisampleRenderTarget(O),Me.updateRenderTargetMipmap(O)),te&&P.end(S),C.isScene===!0&&C.onAfterRender(S,C,K),Pe.resetDefaultState(),k=-1,F=null,b.pop(),b.length>0?(E=b[b.length-1],Me.setTextureUnits(E.state.textureUnits),ue===!0&&de.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,I!==null&&I.renderEnd()};function Oh(C,K,he,te){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)he=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){let He=K.isArrayCamera?xe:re;if(!C.frustumCulled||C.intersectsFrustum(He)){te&&Le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Se);let Ne=ge.update(C),Be=C.material;Be.visible&&T.push(C,Ne,Be,he,Le.z,null,K)}}else if(C.isMesh||C.isLine||C.isPoints){let He=K.isArrayCamera?xe:re;if(!C.frustumCulled||C.intersectsFrustum(He)){let Ne=ge.update(C),Be=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Le.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Le.copy(Ne.boundingSphere.center)),Le.applyMatrix4(C.matrixWorld).applyMatrix4(Se)),Array.isArray(Be)){let Xe=Ne.groups;for(let at=0,gt=Xe.length;at<gt;at++){let Ve=Xe[at],xt=Be[Ve.materialIndex];xt&&xt.visible&&T.push(C,Ne,xt,he,Le.z,Ve,K)}}else Be.visible&&T.push(C,Ne,Be,he,Le.z,null,K)}}}let Ue=C.children;for(let He=0,Ne=Ue.length;He<Ne;He++)Oh(Ue[He],K,he,te)}function Dd(C,K,he,te){let{opaque:se,transmissive:Ue,transparent:He}=C;E.setupLightsView(he),ue===!0&&de.setGlobalState(S.clippingPlanes,he),te&&j.viewport(B.copy(te)),se.length>0&&tl(se,K,he),Ue.length>0&&tl(Ue,K,he),He.length>0&&tl(He,K,he),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Nd(C,K,he,te){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[te.id]===void 0){let Ve=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[te.id]=new Ft(1,1,{generateMipmaps:!0,type:Ve?Gt:bn,minFilter:ii,samples:Math.max(4,rt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Ue=E.state.transmissionRenderTarget[te.id],He=te.viewport||B;Ue.setSize(He.z*S.transmissionResolutionScale,He.w*S.transmissionResolutionScale);let Ne=S.getRenderTarget(),Be=S.getActiveCubeFace(),Xe=S.getActiveMipmapLevel();S.setRenderTarget(Ue),S.getClearColor(Z),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),ze&&G.render(he);let at=S.toneMapping;S.toneMapping=wi;let gt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),E.setupLightsView(te),ue===!0&&de.setGlobalState(S.clippingPlanes,te),tl(C,he,te),Me.updateMultisampleRenderTarget(Ue),Me.updateRenderTargetMipmap(Ue),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let xt=0,Qt=K.length;xt<Qt;xt++){let Nt=K[xt],{object:It,geometry:vn,material:We,group:Rn}=Nt;if(We.side===Bt&&It.layers.test(te.layers)){let Et=We.side;We.side=gn,We.needsUpdate=!0,Ud(It,he,te,vn,We,Rn),We.side=Et,We.needsUpdate=!0,Ve=!0}}Ve===!0&&(Me.updateMultisampleRenderTarget(Ue),Me.updateRenderTargetMipmap(Ue))}S.setRenderTarget(Ne,Be,Xe),S.setClearColor(Z,V),gt!==void 0&&(te.viewport=gt),S.toneMapping=at}function tl(C,K,he){let te=K.isScene===!0?K.overrideMaterial:null;for(let se=0,Ue=C.length;se<Ue;se++){let He=C[se],{object:Ne,geometry:Be,group:Xe}=He,at=He.material;at.allowOverride===!0&&te!==null&&(at=te),Ne.layers.test(he.layers)&&Ud(Ne,K,he,Be,at,Xe)}}function Ud(C,K,he,te,se,Ue){I!==null&&se.isNodeMaterial&&I.setObject(C,se),C.onBeforeRender(S,K,he,te,se,Ue),C.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),se.onBeforeRender(S,K,he,te,C,Ue),se.transparent===!0&&se.side===Bt&&se.forceSinglePass===!1?(se.side=gn,se.needsUpdate=!0,S.renderBufferDirect(he,K,te,se,C,Ue),se.side=Ei,se.needsUpdate=!0,S.renderBufferDirect(he,K,te,se,C,Ue),se.side=Bt):S.renderBufferDirect(he,K,te,se,C,Ue),C.onAfterRender(S,K,he,te,se,Ue)}function Fd(C){let K=0;for(let he of C)he.texture!==null&&K++;return K}function ga(C,K,he){K.isScene!==!0&&(K=ke);let te=le.get(C),se=E.state.lights,Ue=E.state.shadowsArray,He=se.state.version,Ne=ae.getParameters(C,se.state,Ue,K,he,E.state.lightProbeGridArray),Be=ae.getProgramCacheKey(Ne),Xe=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?K.environment:null,te.fog=K.fog;let at=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=N.get(C.envMap||te.environment,at),te.envMapRotation=te.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,Xe===void 0&&(C.addEventListener("dispose",Mt),Xe=new Map,te.programs=Xe,te.programVariants=new Map);let gt=Xe.get(Be);if(gt!==void 0){if(te.currentProgram===gt&&te.lightsStateVersion===He)return Bd(C,Ne),gt}else Ne.uniforms=ae.getUniforms(C),I!==null&&C.isNodeMaterial&&I.build(C,he,Ne),C.onBeforeCompile(Ne,S),gt=ae.acquireProgram(Ne,Be),Xe.set(Be,gt),te.uniforms=Ne.uniforms;let Ve=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=de.uniform),Bd(C,Ne),te.needsLights=ag(C),te.lightsStateVersion=He,te.needsLights&&(Ve.ambientLightColor.value=se.state.ambient,Ve.lightProbe.value=se.state.probe,Ve.sunLights.value=se.state.sun,Ve.sunLightShadows.value=se.state.sunShadow,Ve.directionalLights.value=se.state.directional,Ve.directionalLightShadows.value=se.state.directionalShadow,Ve.spotLights.value=se.state.spot,Ve.spotLightShadows.value=se.state.spotShadow,Ve.rectAreaLights.value=se.state.rectArea,Ve.ltc_1.value=se.state.rectAreaLTC1,Ve.ltc_2.value=se.state.rectAreaLTC2,Ve.pointLights.value=se.state.point,Ve.pointLightShadows.value=se.state.pointShadow,Ve.hemisphereLights.value=se.state.hemi,Ve.sunShadowMatrix.value=se.state.sunShadowMatrix,Ve.sunShadowCascade.value=se.state.sunShadowCascade,Ve.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ve.spotLightMatrix.value=se.state.spotLightMatrix,Ve.spotLightMap.value=se.state.spotLightMap,Ve.pointShadowMatrix.value=se.state.pointShadowMatrix),te.numLightProbeGrids=Fd(E.state.lightProbeGridArray),te.currentProgram=gt,te.uniformsList=null,gt}function ig(C,K,he,te,se){let Ue=le.get(C),He=Ue.currentProgram.id+","+te+","+se,Ne=Ue.programVariants.get(He);return Ne===void 0?(Ne=ga(C,K,he),Ue.programVariants.set(He,Ne)):(Ue.currentProgram=Ne,Ue.uniformsList=null,Ue.outputColorSpace=te,Ue.toneMapping=se),Ne}function Od(C){if(C.uniformsList===null){let K=C.currentProgram.getUniforms();C.uniformsList=ia.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Bd(C,K){let he=le.get(C);he.outputColorSpace=K.outputColorSpace,he.batching=K.batching,he.batchingColor=K.batchingColor,he.instancing=K.instancing,he.instancingColor=K.instancingColor,he.instancingMorph=K.instancingMorph,he.skinning=K.skinning,he.morphTargets=K.morphTargets,he.morphNormals=K.morphNormals,he.morphColors=K.morphColors,he.morphTargetsCount=K.morphTargetsCount,he.numClippingPlanes=K.numClippingPlanes,he.numIntersection=K.numClipIntersection,he.vertexAlphas=K.vertexAlphas,he.vertexTangents=K.vertexTangents,he.toneMapping=K.toneMapping}function sg(C,K,he,te,se){K.isScene!==!0&&(K=ke),Me.resetTextureUnits();let Ue=K.fog,He=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?K.environment:null,Ne=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ct.workingColorSpace,Be=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Xe=N.get(te.envMap||He,Be),at=te.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,gt=!!he.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ve=!!he.morphAttributes.position,xt=!!he.morphAttributes.normal,Qt=!!he.morphAttributes.color,Nt=wi;te.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Nt=S.toneMapping);let It=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,vn=It!==void 0?It.length:0,We=le.get(te),Rn=E.state.lights;if(ue===!0&&(_e===!0||C!==F)){let Vt=C===F&&te.id===k;de.setState(te,C,Vt)}let Et=!1,Us=!1;te.version===We.__version?We.needsLights&&We.lightsStateVersion!==Rn.state.version||se.isBatchedMesh&&We.batching===!1||!se.isBatchedMesh&&We.batching===!0||se.isBatchedMesh&&We.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&We.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&We.instancing===!1||!se.isInstancedMesh&&We.instancing===!0||se.isSkinnedMesh&&We.skinning===!1||!se.isSkinnedMesh&&We.skinning===!0||se.isInstancedMesh&&We.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&We.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&We.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&We.instancingMorph===!1&&se.morphTexture!==null||We.envMap!==Xe||te.fog===!0&&We.fog!==Ue||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==de.numPlanes||We.numIntersection!==de.numIntersection)||We.vertexAlphas!==at||We.vertexTangents!==gt||We.morphTargets!==Ve||We.morphNormals!==xt||We.morphColors!==Qt||We.morphTargetsCount!==vn||We.numLightProbeGrids!==Fd(E.state.lightProbeGridArray)?Et=!0:(We.outputColorSpace!==Ne||We.toneMapping!==Nt)&&(Us=!0):(Et=!0,We.__version=te.version);let _n=We.currentProgram;(Et===!0||Us===!0)&&(_n=Us===!0?ig(te,K,se,Ne,Nt):ga(te,K,se),I&&te.isNodeMaterial&&I.onUpdateProgram(te,_n,We));let nl=!1,us=!1,Fs=!1,St=_n.getUniforms(),dn=We.uniforms;if(j.useProgram(_n.program)&&(nl=!0,us=!0,Fs=!0),te.id!==k&&(k=te.id,us=!0),nl||F!==C){j.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),St.setValue(X,"projectionMatrix",C.projectionMatrix),St.setValue(X,"viewMatrix",C.matrixWorldInverse);let ln=St.map.cameraPosition;ln!==void 0&&ln.setValue(X,Ae.setFromMatrixPosition(C.matrixWorld)),rt.logarithmicDepthBuffer&&St.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&St.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),F!==C&&(F=C,us=!0,Fs=!0)}if(We.needsLights&&(Rn.state.sunShadowMap.length>0&&St.setValue(X,"sunShadowMap",Rn.state.sunShadowMap,Me),Rn.state.directionalShadowMap.length>0&&St.setValue(X,"directionalShadowMap",Rn.state.directionalShadowMap,Me),Rn.state.spotShadowMap.length>0&&St.setValue(X,"spotShadowMap",Rn.state.spotShadowMap,Me),Rn.state.pointShadowMap.length>0&&St.setValue(X,"pointShadowMap",Rn.state.pointShadowMap,Me)),se.isSkinnedMesh){St.setOptional(X,se,"bindMatrix"),St.setOptional(X,se,"bindMatrixInverse");let Vt=se.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),St.setValue(X,"boneTexture",Vt.boneTexture,Me))}se.isBatchedMesh&&(St.setOptional(X,se,"batchingTexture"),St.setValue(X,"batchingTexture",se._matricesTexture,Me),St.setOptional(X,se,"batchingIdTexture"),St.setValue(X,"batchingIdTexture",se._indirectTexture,Me),St.setOptional(X,se,"batchingColorTexture"),se._colorsTexture!==null&&St.setValue(X,"batchingColorTexture",se._colorsTexture,Me));let li=he.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&pe.update(se,he,_n),(us||We.receiveShadow!==se.receiveShadow)&&(We.receiveShadow=se.receiveShadow,St.setValue(X,"receiveShadow",se.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&K.environment!==null&&(dn.envMapIntensity.value=K.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=MS()),us){if(St.setValue(X,"toneMappingExposure",S.toneMappingExposure),We.needsLights&&rg(dn,Fs),Ue&&te.fog===!0&&ve.refreshFogUniforms(dn,Ue),ve.refreshMaterialUniforms(dn,te,J,q,E.state.transmissionRenderTarget[C.id]),We.needsLights&&We.numLightProbeGrids>0){let Vt=y,ln=0;for(let Fi of E.state.lightProbeGridArray)Fi.texture!==null&&(Vt.textures[ln]=Fi.texture,Vt.min[ln]=Fi.boundingBox.min,Vt.max[ln]=Fi.boundingBox.max,Vt.resolution[ln]=Fi.resolution,ln++);for(let Fi in Vt)Vt[Fi].length=ln;dn.probesSH.value=Vt.textures,dn.probesMin.value=Vt.min,dn.probesMax.value=Vt.max,dn.probesResolution.value=Vt.resolution}ia.upload(X,Od(We),dn,Me)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ia.upload(X,Od(We),dn,Me),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&St.setValue(X,"center",se.center),St.setValue(X,"modelViewMatrix",se.modelViewMatrix),St.setValue(X,"normalMatrix",se.normalMatrix),St.setValue(X,"modelMatrix",se.matrixWorld),te.uniformsGroups!==void 0){let Vt=te.uniformsGroups;for(let ln=0,Fi=Vt.length;ln<Fi;ln++){let zd=Vt[ln];Ge.update(zd,_n),Ge.bind(zd,_n)}}return _n}function rg(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.sunLights.needsUpdate=K,C.sunLightShadows.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function ag(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(C,K,he){let te=le.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),le.get(C.texture).__webglTexture=K,le.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:he,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){let he=le.get(C);he.__webglFramebuffer=K,he.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,he=0){O=C,U=K,D=he;let te=null,se=!1,Ue=!1;if(C){let Ne=le.get(C);if(Ne.__useDefaultFramebuffer!==void 0){j.bindFramebuffer(X.FRAMEBUFFER,Ne.__webglFramebuffer),B.copy(C.viewport),$.copy(C.scissor),ee=C.scissorTest,j.viewport(B),j.scissor($),j.setScissorTest(ee),k=-1;return}else if(Ne.__webglFramebuffer===void 0)Me.setupRenderTarget(C);else if(Ne.__hasExternalTextures)Me.rebindTextures(C,le.get(C.texture).__webglTexture,le.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let at=C.depthTexture;if(Ne.__boundDepthTexture!==at){if(at!==null&&le.has(at)&&(C.width!==at.image.width||C.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(C)}}let Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ue=!0);let Xe=le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xe[K])?te=Xe[K][he]:te=Xe[K],se=!0):C.samples>0&&Me.useMultisampledRTT(C)===!1?te=le.get(C).__webglMultisampledFramebuffer:Array.isArray(Xe)?te=Xe[he]:te=Xe,B.copy(C.viewport),$.copy(C.scissor),ee=C.scissorTest}else B.copy(oe).multiplyScalar(J).floor(),$.copy(ie).multiplyScalar(J).floor(),ee=Ee;if(he!==0&&(te=z),j.bindFramebuffer(X.FRAMEBUFFER,te)&&j.drawBuffers(C,te),j.viewport(B),j.scissor($),j.setScissorTest(ee),se){let Ne=le.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ne.__webglTexture,he)}else if(Ue){let Ne=K;for(let Be=0;Be<C.textures.length;Be++){let Xe=le.get(C.textures[Be]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Be,Xe.__webglTexture,he,Ne)}}else if(C!==null&&he!==0){let Ne=le.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ne.__webglTexture,he)}k=-1};function kd(C){let K=le.get(C);return(K.__readFormat!==C.format||K.__readType!==C.type)&&(K.__readFormat=C.format,K.__readType=C.type,K.__formatReadable=rt.textureFormatReadable(C.format),K.__typeReadable=rt.textureTypeReadable(C.type)),K}this.readRenderTargetPixels=function(C,K,he,te,se,Ue,He,Ne=0){if(!(C&&C.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(Be=Be[He],Array.isArray(Be)&&(Be=Be[0])),Be){j.bindFramebuffer(X.FRAMEBUFFER,Be);try{let Xe=C.textures[Ne],at=Xe.format,gt=Xe.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ne);let Ve=kd(Xe);if(Ve.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-te&&he>=0&&he<=C.height-se&&X.readPixels(K,he,te,se,Re.convert(at),Re.convert(gt),Ue)}finally{let Xe=O!==null?le.get(O).__webglFramebuffer:null;j.bindFramebuffer(X.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(C,K,he,te,se,Ue,He,Ne=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(Be=Be[He],Array.isArray(Be)&&(Be=Be[0])),Be)if(K>=0&&K<=C.width-te&&he>=0&&he<=C.height-se){j.bindFramebuffer(X.FRAMEBUFFER,Be);let Xe=C.textures[Ne],at=Xe.format,gt=Xe.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ne);let Ve=kd(Xe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,xt),X.bufferData(X.PIXEL_PACK_BUFFER,Ue.byteLength,X.STREAM_READ),X.readPixels(K,he,te,se,Re.convert(at),Re.convert(gt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Qt=O!==null?le.get(O).__webglFramebuffer:null;j.bindFramebuffer(X.FRAMEBUFFER,Qt);let Nt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await pm(X,Nt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,xt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ue),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(xt),X.deleteSync(Nt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,he=0){let te=Math.pow(2,-he),se=Math.floor(C.image.width*te),Ue=Math.floor(C.image.height*te),He=K!==null?K.x:0,Ne=K!==null?K.y:0;Me.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,he,0,0,He,Ne,se,Ue),j.unbindTexture()},this.copyTextureToTexture=function(C,K,he=null,te=null,se=0,Ue=0){let He,Ne,Be,Xe,at,gt,Ve,xt,Qt,Nt=C.isCompressedTexture?C.mipmaps[Ue]:C.image;if(he!==null)He=he.max.x-he.min.x,Ne=he.max.y-he.min.y,Be=he.isBox3?he.max.z-he.min.z:1,Xe=he.min.x,at=he.min.y,gt=he.isBox3?he.min.z:0;else{let St=Math.pow(2,-se);He=Math.floor(Nt.width*St),Ne=Math.floor(Nt.height*St),C.isDataArrayTexture?Be=Nt.depth:C.isData3DTexture?Be=Math.floor(Nt.depth*St):Be=1,Xe=0,at=0,gt=0}te!==null?(Ve=te.x,xt=te.y,Qt=te.z):(Ve=0,xt=0,Qt=0);let It=Re.convert(K.format),vn=Re.convert(K.type),We;K.isData3DTexture?(Me.setTexture3D(K,0),We=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Me.setTexture2DArray(K,0),We=X.TEXTURE_2D_ARRAY):(Me.setTexture2D(K,0),We=X.TEXTURE_2D),j.activeTexture(X.TEXTURE0),j.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),j.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),j.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);let Rn=j.getParameter(X.UNPACK_ROW_LENGTH),Et=j.getParameter(X.UNPACK_IMAGE_HEIGHT),Us=j.getParameter(X.UNPACK_SKIP_PIXELS),_n=j.getParameter(X.UNPACK_SKIP_ROWS),nl=j.getParameter(X.UNPACK_SKIP_IMAGES);j.pixelStorei(X.UNPACK_ROW_LENGTH,Nt.width),j.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Nt.height),j.pixelStorei(X.UNPACK_SKIP_PIXELS,Xe),j.pixelStorei(X.UNPACK_SKIP_ROWS,at),j.pixelStorei(X.UNPACK_SKIP_IMAGES,gt);let us=C.isDataArrayTexture||C.isData3DTexture,Fs=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){let St=le.get(C),dn=le.get(K),li=le.get(St.__renderTarget),Vt=le.get(dn.__renderTarget);j.bindFramebuffer(X.READ_FRAMEBUFFER,li.__webglFramebuffer),j.bindFramebuffer(X.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let ln=0;ln<Be;ln++)us&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,le.get(C).__webglTexture,se,gt+ln),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,le.get(K).__webglTexture,Ue,Qt+ln)),X.blitFramebuffer(Xe,at,Xe+He,at+Ne,Ve,xt,Ve+He,xt+Ne,X.DEPTH_BUFFER_BIT,X.NEAREST);j.bindFramebuffer(X.READ_FRAMEBUFFER,null),j.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(se!==0||C.isRenderTargetTexture||le.has(C)){let St=le.get(C),dn=le.get(K);j.bindFramebuffer(X.READ_FRAMEBUFFER,L),j.bindFramebuffer(X.DRAW_FRAMEBUFFER,w);for(let li=0;li<Be;li++)us?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,St.__webglTexture,se,gt+li):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,St.__webglTexture,se),Fs?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,dn.__webglTexture,Ue,Qt+li):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,dn.__webglTexture,Ue),se!==0?X.blitFramebuffer(Xe,at,Xe+He,at+Ne,Ve,xt,Ve+He,xt+Ne,X.COLOR_BUFFER_BIT,X.NEAREST):Fs?X.copyTexSubImage3D(We,Ue,Ve,xt,Qt+li,Xe,at,He,Ne):X.copyTexSubImage2D(We,Ue,Ve,xt,Xe,at,He,Ne);j.bindFramebuffer(X.READ_FRAMEBUFFER,null),j.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Fs?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(We,Ue,Ve,xt,Qt,He,Ne,Be,It,vn,Nt.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(We,Ue,Ve,xt,Qt,He,Ne,Be,It,Nt.data):X.texSubImage3D(We,Ue,Ve,xt,Qt,He,Ne,Be,It,vn,Nt):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ue,Ve,xt,He,Ne,It,vn,Nt.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ue,Ve,xt,Nt.width,Nt.height,It,Nt.data):X.texSubImage2D(X.TEXTURE_2D,Ue,Ve,xt,He,Ne,It,vn,Nt);j.pixelStorei(X.UNPACK_ROW_LENGTH,Rn),j.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Et),j.pixelStorei(X.UNPACK_SKIP_PIXELS,Us),j.pixelStorei(X.UNPACK_SKIP_ROWS,_n),j.pixelStorei(X.UNPACK_SKIP_IMAGES,nl),Ue===0&&K.generateMipmaps===!0&&K.mipmapsAutoUpdate===!0&&X.generateMipmap(We),j.unbindTexture()},this.initRenderTarget=function(C){le.get(C).__webglFramebuffer===void 0&&Me.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Me.setTextureCube(C,0):C.isData3DTexture?Me.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Me.setTexture2DArray(C,0):Me.setTexture2D(C,0),j.unbindTexture()},this.resetState=function(){U=0,D=0,O=null,j.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};function vf(i,e){if(e===Hu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ta||e===Po){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ta)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function n0(i){let e=new Map,t=new Map,n=i.clone();return i0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function i0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)i0(i.children[n],e.children[n],t)}var Fo=class extends Ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ef(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new rh(t,dt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new rh(t,dt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new kf(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ns.extractUrlBase(e);a=ns.resolveURL(c,this.path)}else a=ns.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new qr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===l0){try{a[dt.KHR_BINARY_GLTF]=new zf(e)}catch(u){s&&s(u);return}r=JSON.parse(a[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new qf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:a[u]=new bf;break;case dt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Hf(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:a[u]=new Gf;break;case dt.KHR_MESH_QUANTIZATION:a[u]=new Vf;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function SS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Xt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Sf=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new De(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Pn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ws(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qs(h),c.distance=u;break;case"spot":c=new fo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},bf=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ot}extendParams(e,t,n){let s=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Pn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(s)}},Tf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ef=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(r,r)}return Promise.all(s)}},wf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Af=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Rf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Cf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ct)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Pf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},If=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(r[0],r[1],r[2],Pn),Promise.all(s)}},Lf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Df=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(r[0],r[1],r[2],Pn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ct)),Promise.all(s)}},Nf=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Uf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Ff=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Of=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Bf=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},rh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},kf=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==si.TRIANGLES&&c.mode!==si.TRIANGLE_STRIP&&c.mode!==si.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let g of u){let v=new Ye,p=new H,m=new Wn,M=new H(1,1,1),_=new qi(g.geometry,g.material,f);for(let T=0;T<f;T++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,T),l.SCALE&&M.fromBufferAttribute(l.SCALE,T),_.setMatrixAt(T,v.compose(p,m,M));let y=null;for(let T in l)if(T==="_COLOR_0"){let E=l[T];_.instanceColor=new $i(E.array,E.itemSize,E.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(y===null){let x=_.geometry;y=new At,y.name=x.name;for(let b in x.attributes)y.setAttribute(b,x.attributes[b]);for(let b in x.morphAttributes)y.morphAttributes[b]=x.morphAttributes[b];x.index!==null&&y.setIndex(x.index),y.morphTargetsRelative=x.morphTargetsRelative;for(let b of x.groups)y.addGroup(b.start,b.count,b.materialIndex);x.boundingBox!==null&&(y.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(y.boundingSphere=x.boundingSphere.clone()),y.drawRange.start=x.drawRange.start,y.drawRange.count=x.drawRange.count,y.userData=Object.assign({},x.userData),_.geometry=y}let E=l[T];y.setAttribute(T,new $i(E.array,E.itemSize,E.normalized))}Dt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},l0="glTF",Uo=12,s0={JSON:1313821514,BIN:5130562},zf=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Uo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==l0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Uo,r=new DataView(e,Uo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===s0.JSON){let c=new Uint8Array(e,Uo+a,o);this.content=n.decode(c)}else if(l===s0.BIN){let c=Uo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Hf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Xf[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Xf[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],d=aa[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let g in d.attributes){let v=d.attributes[g],p=l[g];p!==void 0&&(v.normalized=p)}u(d)},o,c,Pn,f)})})}},Gf=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Vf=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},ah=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,v=g-c,p=-2*d+3*f,m=d-f,M=1-p,_=m-f+u;for(let y=0;y!==o;y++){let T=a[v+y+o],E=a[v+y+l]*h,x=a[g+y+o],b=a[g+y]*h;r[y]=M*T+_*E+p*x+m*b}return r}},bS=new Wn,Wf=class extends ah{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return bS.fromArray(r).normalize().toArray(r),r}},si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},aa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},r0={9728:Ut,9729:nn,9984:mc,9985:Qr,9986:sr,9987:ii},a0={33071:Jn,33648:Ur,10497:Sn},_f={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},TS={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Vs},yf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ES(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Yt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ei})),i.DefaultMaterial}function ar(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function AS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function RS(i){let e,t=i.extensions&&i.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mf(t.attributes):e=i.indices+":"+Mf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Mf(i.targets[n]);return e}function Mf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function $f(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function CS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var PS=new Ye,qf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new SS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&a<98?(this.textureLoader=new co(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new po(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ar(r,o,s),Pi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(ns.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=_f[s.type],o=aa[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new qt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=_f[s.type],c=aa[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,p;if(d&&d!==u){let m=Math.floor(f/d),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,_=t.cache.get(M);_||(v=new c(o,m*d,s.count*d/h),_=new qs(v,d/h),t.cache.add(M,_)),p=new vs(_,l,f%d/h,g)}else o===null?v=new c(s.count*l):v=new c(o,f,s.count*l),p=new qt(v,l,g);if(s.sparse!==void 0){let m=_f.SCALAR,M=aa[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,T=new M(a[1],_,s.sparse.count*m),E=new c(a[2],y,s.sparse.count*l);o!==null&&(p=new qt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let x=0,b=T.length;x<b;x++){let P=T[x];if(p.setX(P,E[x*l]),l>=2&&p.setY(P,E[x*l+1]),l>=3&&p.setZ(P,E[x*l+2]),l>=4&&p.setW(P,E[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=r0[f.magFilter]||nn,h.minFilter=r0[f.minFilter]||ii,h.wrapS=a0[f.wrapS]||Sn,h.wrapT=a0[f.wrapT]||Sn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ut&&h.minFilter!==nn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(f){return new Promise(function(d,g){t.parse(f,d,g)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(d,g){let v=d;t.isImageBitmapLoader===!0&&(v=function(p){let m=new jt(p);m.needsUpdate=!0,d(m)}),t.load(ns.resolveURL(f,r.path),v,void 0,g)})})}let u=h.then(function(f){return c===!0&&o.revokeObjectURL(l),Pi(f,a),f.userData.mimeType=a.mimeType||CS(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Yi,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ms,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Yt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[dt.KHR_MATERIALS_UNLIT]){let u=s[dt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Pn),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Ct)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Bt);let h=r.alphaMode||yf.OPAQUE;if(h===yf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===yf.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ot&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ot&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ot){let u=r.emissiveFactor;o.emissive=new De().setRGB(u[0],u[1],u[2],Pn)}return r.emissiveTexture!==void 0&&a!==Ot&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ar(s,u,r),u})}createUniqueName(e){let t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return o0(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=RS(c),u=s[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=o0(new At,c,t),c.mode===si.TRIANGLE_STRIP?f=f.then(d=>vf(d,Po)):c.mode===si.TRIANGLE_FAN&&(f=f.then(d=>vf(d,ta))),s[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?ES(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let v=h[d],p=a[d],m,M=c[d];if(p.mode===si.TRIANGLES||p.mode===si.TRIANGLE_STRIP||p.mode===si.TRIANGLE_FAN||p.mode===void 0){let _=r.isSkinnedMesh===!0,y=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");_&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=_&&y?new Ha(v,M):new Ze(v,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===si.LINES)m=new Ks(v,M);else if(p.mode===si.LINE_STRIP)m=new Ys(v,M);else if(p.mode===si.LINE_LOOP)m=new Va(v,M);else if(p.mode===si.POINTS)m=new Ss(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&AS(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Pi(m,r),p.extensions&&ar(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ar(s,u[0],r),u[0];let f=new tt;r.extensions&&ar(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(Ai.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ts(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new Ye;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ga(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],g=s.samplers[d.sampler],v=d.target,p=v.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],v=u[3],p=u[4],m=[];for(let _=0,y=f.length;_<y;_++){let T=f[_],E=d[_],x=g[_],b=v[_],P=p[_];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let S=n._createAnimationTracks(T,E,x,b,P);if(S)for(let R=0;R<S.length;R++)m.push(S[R])}let M=new lo(r,void 0,m);return Pi(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,PS)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,g=u[0];h.pivot=new H().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Vr:c.length>1?h=new tt:c.length===1?h=c[0]:h=new Dt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Pi(h,r),r.extensions&&ar(n,h,r),r.matrix!==void 0){let u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new tt;n.name&&(r.name=s.createUniqueName(n.name)),Pi(r,n),n.extensions&&ar(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(n0(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof mn||f instanceof jt)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Ps[r.path]===Ps.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Ps[r.path]){case Ps.weights:h=Ji;break;case Ps.rotation:h=Qi;break;case Ps.translation:case Ps.scale:h=Es;break;default:n.itemSize===1?h=Ji:h=Es;break}let u=s.interpolation!==void 0?TS[s.interpolation]:Ws,f=this._getArrayFromAccessor(n);for(let d=0,g=l.length;d<g;d++){let v=new h(l[d]+"."+Ps[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=$f(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Qi?Wf:ah;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function IS(i,e,t){let n=e.attributes,s=new pn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),o.normalized){let h=$f(aa[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new H,l=new H;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let v=$f(aa[f.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Un;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function o0(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Xf[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ct.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),Pi(i,e),IS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?wS(i,e.targets,t):i})}var lr=["guestA","guestB","guestC"],h0={guestA:"\uB370\uB2D8 \uBCC4\uBB34\uB2AC",guestB:"\uAE08\uBC1C \uB54B\uC740 \uBA38\uB9AC",guestC:"\uD770 \uC6D0\uD53C\uC2A4"},Kf=new Set;function u0(){let i=new Uint8Array([150,150,150,255,205,205,205,255,255,255,255,255]),e=new ei(i,3,1);return e.minFilter=e.magFilter=Ut,e.needsUpdate=!0,e}var or="#fde9e7",LS="#f5c6c9",c0={guestA:{hair:"#4b3634",hairStyle:"long",top:"#bfe2f1",sleeve:null,bottom:"pants",bottomColor:"#8fa1df",shoes:"#bfe2f1",F:[12,20,202,350],B:[20,393,195,722],head:[.12,0,.88,.385],topCrop:[.22,.43,.78,.67],legL:[.12,.63,.5,.94],legR:[.5,.63,.88,.94]},guestB:{hair:"#f2df8c",hairStyle:"braids",top:"#ffffff",sleeve:"#ffcaca",bottom:"shorts",bottomColor:"#cdebc9",warmers:"#ffffff",shoes:"#ffcaca",F:[234,19,413,352],B:[239,393,407,722],head:[.12,0,.88,.385],topCrop:[.2,.43,.8,.66],lowCrop:[.15,.62,.85,.76]},guestC:{hair:"#a68a6b",hairStyle:"wavy",top:"#fffdfb",sleeve:"#fffdfb",longSleeve:!0,bottom:"dress",bottomColor:"#fffdfb",boots:"#8c6d58",F:[444,22,634,348],B:[450,395,628,720],head:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.78]},shop:{hair:"#3f302f",hairStyle:"wavy",top:"#bfe2f1",sleeve:"#bfe2f1",bottom:"dress",bottomColor:"#fbf09b",shoes:"#bfe2f1",F:[666,23,844,347],B:[671,395,839,719],head:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.8]},cafe:{hair:"#3f302f",hairStyle:"ponytail",top:"#fbdede",sleeve:"#fbdede",bottom:"dress",bottomColor:"#d4efbf",shoes:"#fbdede",F:[868,3,1075,368],B:[881,376,1062,738],head:[.1,.02,.86,.405],headB:[.12,0,.88,.385],lowCrop:[.12,.42,.88,.8]}},Oo=new Image;Oo.src="looks.png";var Yf=new Map;function DS(i,e,t,{clean:n=!1,skinBelow:s=!1}={}){let r=i.join(",")+e.join(",")+t+n+s;if(Yf.has(r))return Yf.get(r);let[a,o,l,c]=i,h=l-a,u=c-o,f=a+e[0]*h,d=o+e[1]*u,g=(e[2]-e[0])*h,v=(e[3]-e[1])*u,p=n?Math.max(48,Math.round(g)):256,m=Math.round(p*v/g),M=document.createElement("canvas");M.width=p,M.height=m;let _=M.getContext("2d",{willReadFrequently:n});_.fillStyle=t,_.fillRect(0,0,p,m),s&&(_.fillStyle=or,_.fillRect(0,m*.55,p,m));let y=new ti(M);y.colorSpace=Ct,y.anisotropy=4;let T=()=>{if(_.drawImage(Oo,f,d,g,v,0,0,p,m),n){let E=_.getImageData(0,0,p,m),x=E.data,b=new Uint8ClampedArray(x),P=3,S=R=>x[R]*.3+x[R+1]*.59+x[R+2]*.11;for(let R=0;R<m;R++)for(let I=0;I<p;I++){let z=(R*p+I)*4,L=S(z),w=z,U=L;for(let D=-P;D<=P;D++){let O=R+D;if(!(O<0||O>=m))for(let k=-P;k<=P;k++){let F=I+k;if(F<0||F>=p)continue;let B=(O*p+F)*4,$=S(B);$>U&&(U=$,w=B)}}L<U*.84&&(b[z]=x[w],b[z+1]=x[w+1],b[z+2]=x[w+2])}E.data.set(b),_.putImageData(E,0,0)}y.needsUpdate=!0};return Oo.complete&&Oo.naturalWidth?T():Oo.addEventListener("load",T,{once:!0}),Yf.set(r,y),y}function jf(i,e={}){let t=new tt,n=[],s=[],r={root:t,arms:n,head:null,animate:p,setLook:u,look:null},a=null,o=document.createElement("canvas");o.width=o.height=64;let l=o.getContext("2d"),c=l.createRadialGradient(32,32,4,32,32,30);c.addColorStop(0,"rgba(90,60,120,0.32)"),c.addColorStop(1,"rgba(90,60,120,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);let h=new Ze(new Ki(.62,.62),new Ot({map:new ti(o),transparent:!0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.004,t.add(h);function u(m){a&&t.remove(a);let M=c0[m]||c0.guestA;r.look=m;let _=new Map,y=(U,D=1)=>{let O=U+D;return _.has(O)||_.set(O,new Ot({color:new De(U).multiplyScalar(D)})),_.get(O)},T=(U,D,O,k)=>new Ot({map:DS(M[U],D,O,k),side:Bt}),E={clean:!0},x=(U,D,O,k=0,F=0,B=0)=>{let $=new Ze(D,O);return $.position.set(k,F,B),$.castShadow=!0,U.add($),$},b=(U,D=10,O=8)=>new Zt(U,D,O),P=(U,D,O,k,F,B,$,ee=0,Z=8)=>(x(U,new ot(D,O,k,Z,1,!0,-Math.PI/2,Math.PI),F,0,$,ee),x(U,new ot(D,O,k,Z,1,!0,Math.PI/2,Math.PI),B,0,$,ee));a=new tt,t.add(a),n.length=0,s.length=0;for(let U of[-1,1]){let D=new tt;if(D.position.set(.07*U,.34,0),a.add(D),M.bottom==="pants"){let O=new tt;O.position.y=-.12,D.add(O),P(O,.075,.085,.28,T("F",U<0?M.legL:M.legR,M.bottomColor,E),T("B",U<0?M.legR:M.legL,M.bottomColor,E),0)}else x(D,new ot(.044,.04,.24,6),y(or),0,-.12,0);M.warmers&&x(D,new ot(.058,.06,.11,7),y(M.warmers),0,-.205,0),M.boots?(x(D,new ot(.06,.058,.14,7),y(M.boots),0,-.2,0),x(D,b(.066,8,6),y(M.boots),0,-.275,.02).scale.set(1,.6,1.3)):x(D,b(.066,8,6),y(M.shoes),0,-.29,.022).scale.set(1,.62,1.35),s.push(D)}x(a,new ot(.06,.06,.12,10),y(or),0,.68,0),M.bottom==="dress"?P(a,.12,.25,.4,T("F",M.lowCrop,M.bottomColor,E),T("B",M.lowCrop,M.bottomColor,E),.44):(P(a,.115,.135,.28,T("F",M.topCrop,M.top,E),T("B",M.topCrop,M.top,E),.5),M.bottom==="pants"&&P(a,.135,.15,.06,y(M.bottomColor),y(M.bottomColor,.94),.37),M.bottom==="shorts"&&P(a,.14,.17,.13,T("F",M.lowCrop,M.bottomColor,E),T("B",M.lowCrop,M.bottomColor,E),.33));for(let U of[-1,1]){let D=new tt;D.position.set(.14*U,.61,0),a.add(D),M.sleeve&&x(D,b(M.longSleeve?.06:.07,8,6),y(M.sleeve),.01*U,-.03,0).scale.set(1,1.1,1),x(D,new ot(.036,.04,.2,6),y(M.longSleeve?M.sleeve:or),.012*U,-.12,0),M.longSleeve&&x(D,b(.05,8,6),y(M.sleeve),.014*U,-.19,0).scale.set(1,.7,1),x(D,b(.055,8,6),y(or),.016*U,-.245,.006),D.rotation.z=.32*U,n.push(D)}let S=new tt;S.position.set(0,.89,0),a.add(S);let R=.24,I=1.12,z=.97;x(S,b(R*1.04,14,10),y(or)).scale.set(I,z,1),x(S,new Zt(R*1.06,16,10,0,Math.PI,0,Math.PI*.69),T("F",M.head,M.hair,{skinBelow:!0})).scale.set(I,z,1),x(S,new Zt(R*1.055,16,10,Math.PI,Math.PI,0,Math.PI*.72),T("B",M.headB||M.head,M.hair)).scale.set(I,z,1);for(let U of[-1,1])x(S,b(.08,8,6),y(or),.3*U,-.03,.02).scale.set(.55,1,.75),x(S,b(.048,8,6),y(LS),.32*U,-.03,.035).scale.set(.35,.8,.6);f(S,M,x,y,b),r.head=S,t.traverse(U=>{U.isMesh&&(U.frustumCulled=!1)})}function f(m,M,_,y,T){if(M.hairStyle!=="braids")return;let E=y(M.hair,.97);for(let x of[-1,1])for(let b=0;b<5;b++)_(m,T(.045-b*.003,7,5),E,(.2-b*.006)*x,-.15-b*.065,.09+b*.012).scale.set(1,.85,1)}let d=0,g=0,v=0;function p(m,M,_,y=!1,T=!1){let E=r.head;if(v+=((y?1:0)-v)*Math.min(1,m*10),v>.02){s[0].rotation.x=s[1].rotation.x=-1.45*v,n[0].rotation.x=n[1].rotation.x=-.5*v,a.position.y=.11*v,a.rotation.x=0,E.rotation.z=0,g=0;return}let x=Math.min(1,M/2);g+=(x-g)*Math.min(1,m*10),d+=m*(5+M*3.2);let b=Math.sin(d)*.75*g;s[0].rotation.x=b,s[1].rotation.x=-b,n[0].rotation.x=-b*.8,n[1].rotation.x=b*.8,n[0].rotation.z=-.32,n[1].rotation.z=.32,T&&(n[0].rotation.x=n[1].rotation.x=-1.2),a.position.y=Math.abs(Math.sin(d))*.035*g+Math.sin(_*2.2)*.006*(1-g),E.rotation.z=Math.sin(d*.5)*.05*g,a.rotation.x=.07*g}return u(e.look||"guestA"),r}var NS=500,oh=6,uh=1.05,rs={tteok:{name:"\uB5A1\uAF2C\uCE58",price:2e3,emoji:"\u{1F361}",tag:"\uB300\uD45C",desc:"\uB2EC\uCF64\uC9ED\uC9E4 \uC18C\uC2A4 \uB5A1\uAF2C\uCE58 \xB7 \uD3EC\uC7A5 \uAC00\uB2A5",model:"skewer"},mochi:{name:"\uACFC\uC77C\uCC39\uC300\uB5A1",price:4500,emoji:"\u{1F353}",desc:"\uBCF4\uB4E4\uBCF4\uB4E4\uD55C \uD53C\uC5D0 \uACFC\uC77C\uC774 \uAC00\uB4DD",model:"mochi",opts:{flavor:["\uC694\uAC70\uC0E4\uC778\uBA38\uC2A4\uCF13","\uD06C\uB9BC\uACE8\uB4DC\uD0A4\uC704\uD30C\uC778"]}},kiwiPf:{name:"\uD0A4\uC704 \uD30C\uC778 \uD06C\uB9BC \uCC39\uC300\uB5A1 \uD30C\uB974\uD398",price:12e3,emoji:"\u{1F95D}",desc:"\uACFC\uC77C \uAC00\uB4DD, \uCAC0\uCAC0\uD55C \uCC39\uC300\uB5A1 \uD30C\uB974\uD398",model:"kiwiParfait"},puddPf:{name:"\uD478\uB529\uCD08\uCF54\uD30C\uB974\uD398",price:12e3,emoji:"\u{1F36E}",desc:"\uCEE4\uC2A4\uD130\uB4DC \uD478\uB529\uACFC \uBC14\uB098\uB098\uC758 \uC870\uD569",model:"puddingParfait"},tangSoda:{name:"\uADE4\uC18C\uB2E4",price:6e3,emoji:"\u{1F34A}",model:"soda",c:"#ffa81e",scoop:"#fff4dc"},melonSoda:{name:"\uBA54\uB860\uC18C\uB2E4",price:6e3,emoji:"\u{1F348}",model:"soda",c:"#6fd34a",scoop:"#d6f2c4"},creamSoda:{name:"\uD06C\uB9BC\uC18C\uB2E4",price:6e3,emoji:"\u{1FAE7}",desc:"\uC5F4\uB300\uACFC\uC77C + \uB77C\uBB34\uB124\uB9DB",model:"soda",c:"#2f93ee",scoop:"#fff0c8"},chocoMilk:{name:"\uCD08\uCF54\uC6B0\uC720",price:6e3,emoji:"\u{1F36B}",model:"milk",c:"#7b4a33",drizzle:!0},greenMilk:{name:"\uB179\uCC28\uC6B0\uC720",price:6e3,emoji:"\u{1F375}",model:"milk",c:"#86a95b",drizzle:!0},melonMilk:{name:"\uBA54\uB860\uC6B0\uC720",price:6e3,emoji:"\u{1F348}",model:"milk",c:"#b9e3a0"},bananaMilk:{name:"\uBC14\uB098\uB098\uC6B0\uC720",price:6e3,emoji:"\u{1F34C}",model:"milk",c:"#f3dc8e"},mintMilk:{name:"\uBBFC\uD2B8\uCD08\uCF54\uC6B0\uC720",price:6e3,emoji:"\u{1F33F}",model:"milk",c:"#7d5a47",cream:"#d4f5e6"},americano:{name:"\uC544\uBA54\uB9AC\uCE74\uB178",price:4500,emoji:"\u2615",desc:"\uB354\uCE58 \uC6D0\uC561\uC744 \uC368\uC694",model:"coffee",opts:{temp:["\uC544\uC774\uC2A4","\uD56B"],shot:!0}},latte:{name:"\uC5F0\uC720\uB77C\uB5BC",price:5e3,emoji:"\u{1F95B}",desc:"\uC544\uC774\uC2A4\uB9CC \uAC00\uB2A5\uD574\uC694",model:"latte",opts:{shot:!0}},sodaSlush:{name:"\uC18C\uB2E4 \uC2AC\uB7EC\uC2DC",price:6500,emoji:"\u{1F9CA}",model:"slush",c:"#9dd6ff"},mintSlush:{name:"\uBBFC\uD2B8\uCD08\uCF54 \uC2AC\uB7EC\uC2DC",price:6500,emoji:"\u{1F367}",model:"slush",c:"#bdeedb",chips:!0},pineSando:{name:"\uD30C\uC778\uC560\uD50C \uC0B0\uB3C4",price:6500,emoji:"\u{1F96A}",model:"sando"},pudding:{name:"\uCEE4\uC2A4\uD130\uB4DC \uD478\uB529",price:4500,emoji:"\u{1F36E}",model:"pudding"},peachTea:{name:"\uBCF5\uC22D\uC544 \uC544\uC774\uC2A4\uD2F0",price:4500,emoji:"\u{1F351}",model:"tea",c:"#f0a050"}},Zf=[["\uCD94\uCC9C",["tteok","mochi","kiwiPf","puddPf"]],["\uC18C\uB2E4",["tangSoda","melonSoda","creamSoda"]],["\uC6B0\uC720",["chocoMilk","greenMilk","melonMilk","bananaMilk","mintMilk"]],["\uCEE4\uD53C",["americano","latte"]],["\uC2AC\uB7EC\uC2DC",["sodaSlush","mintSlush"]],["\uB514\uC800\uD2B8",["pineSando","puddPf","pudding"]],["\uD2F0",["peachTea"]]],f0=i=>"\u{1FA99} "+i.toLocaleString("ko-KR"),Jf=new Map;function lt(i,e={}){let t=i+JSON.stringify(e);return Jf.has(t)||Jf.set(t,new Yt({color:i,roughness:.45,metalness:0,...e})),Jf.get(t)}var fh=()=>lt("#eef8fc",{transparent:!0,opacity:.32,roughness:.05,depthWrite:!1});function nt(i,e,t,n=0,s=0,r=0){let a=new Ze(e,t);return a.position.set(n,s,r),i.add(a),a}var ko=(i,e=20)=>new io(i.map(([t,n])=>new ye(t,n)),e);function lh(i,e,{h:t=.17,w:n=.04}={}){nt(i,ko([[0,0],[.034,0],[.035,.006],[.008,.014],[.007,.06-.008],[.014,.06],[n*.75,.06+.035],[n,t-.02],[n+.002,t]]),fh()).renderOrder=3;let r=new tt;return r.position.y=.06+.002,i.add(r),nt(r,ko([[0,0],[.012,0],[n*.72,.035],[n-.004,t-.06-.03],[0,t-.06-.03]]),lt(e,{roughness:.3})),{lv:r,top:t-.02}}function Qf(i,e,t="#fffaf3",n=1){let s=new tt;s.position.y=e,i.add(s);let r=lt(t,{roughness:.75});return nt(s,new Zt(.036*n,12,8),r,0,.008,0).scale.y=.6,nt(s,new Zt(.027*n,12,8),r,0,.028*n,0).scale.y=.7,nt(s,new bs(.018*n,.03*n,10),r,0,.05*n,0),s}function Bo(i,e,t,n){let s=new tt;s.position.set(e,t,n),i.add(s),nt(s,new Zt(.013,10,8),lt("#e0142f",{roughness:.15}));let r=nt(s,new ot(.0015,.0015,.04,4),lt("#5b7a2a"),.006,.022,0);return r.rotation.z=-.35,s}function ch(i,e,t,n=.12){let s=nt(i,new ot(.004,.004,n,6),lt(e));return s.position.set(.012,t,.005),s.rotation.z=-.22,s}function hh(i,e=.085){nt(i,new ot(e,e*.8,.01,24),lt("#fffdf8",{roughness:.3}),0,.005,0)}function zo(i,e){let t=rs[i],n=new tt,s=[],r=[],a=null;switch(t.model){case"soda":{let o=lh(n,t.c);a=o.lv;let l=nt(n,new Zt(.035,14,10),lt(t.scoop,{roughness:.85}),0,o.top+.012,0);l.scale.y=.85,s.push(l),s.push(Bo(n,.012,o.top+.048,.012));break}case"milk":{let o=lh(n,t.c);a=o.lv;let l=Qf(n,o.top-.004,t.cream);if(s.push(l),t.drizzle)for(let c=0;c<3;c++){let h=nt(l,new ji(.026-c*.006,.0025,4,18),lt("#4a2a1d"),0,.015+c*.016,0);h.rotation.x=Math.PI/2}s.push(Bo(n,0,o.top+.066,0));break}case"slush":{let o=lh(n,t.c,{h:.16,w:.042});a=o.lv;let l=nt(n,new Zt(.043,14,8,0,Math.PI*2,0,Math.PI/2),lt(t.c,{roughness:.95}),0,o.top-.004,0);if(l.scale.y=.7,s.push(l),t.chips)for(let c=0;c<6;c++)s.push(nt(n,new kt(.008,.004,.008),lt("#3b2418"),Math.cos(c)*.022,o.top+.016,Math.sin(c*1.7)*.022));s.push(ch(n,"#ff8fb8",o.top));break}case"tea":{let o=nt(n,ko([[0,0],[.034,0],[.04,.15],[.041,.15]]),fh());o.renderOrder=3,a=new tt,a.position.y=.004,n.add(a),nt(a,new ot(.037,.032,.13,18),lt(t.c,{roughness:.25,transparent:!0,opacity:.88}),0,.065,0);for(let c=0;c<3;c++)nt(a,new kt(.02,.02,.02),lt("#ffffff",{transparent:!0,opacity:.55,roughness:.05}),Math.cos(c*2.1)*.016,.115,Math.sin(c*2.1)*.016).rotation.y=c;let l=nt(n,new ot(.02,.02,.005,14),lt("#ffd58a"),.03,.15,0);l.rotation.z=Math.PI/2,s.push(l),s.push(ch(n,"#9be0c4",.14,.16));break}case"coffee":{if(e.temp==="\uD56B"){nt(n,new ot(.075,.06,.008,20),lt("#fffdf8"),0,.004,0),nt(n,new ot(.042,.034,.08,18,1,!0),lt("#fffaf2",{side:Bt}),0,.048,0),nt(n,new ot(.034,.034,.004,18),lt("#fffaf2"),0,.01,0);let o=nt(n,new ji(.02,.006,6,12,Math.PI),lt("#fffaf2"),.042,.05,0);o.rotation.z=-Math.PI/2,a=new tt,a.position.y=.012,n.add(a),nt(a,new ot(.039,.034,.066,18),lt("#3a2014",{roughness:.15}),0,.033,0)}else{let o=nt(n,ko([[0,0],[.034,0],[.04,.15],[.041,.15]]),fh());o.renderOrder=3,a=new tt,a.position.y=.004,n.add(a),nt(a,new ot(.037,.032,.13,18),lt("#3a1f12",{roughness:.2,transparent:!0,opacity:.92}),0,.065,0);for(let l=0;l<3;l++)nt(a,new kt(.02,.02,.02),lt("#ffffff",{transparent:!0,opacity:.5,roughness:.05}),Math.cos(l*2.1)*.016,.118,Math.sin(l*2.1)*.016).rotation.y=l;s.push(ch(n,"#2b2b2b",.14,.16))}break}case"latte":{let o=nt(n,ko([[0,0],[.034,0],[.04,.15],[.041,.15]]),fh());o.renderOrder=3,a=new tt,a.position.y=.004,n.add(a),nt(a,new ot(.034,.032,.03,18),lt("#fff6e2"),0,.015,0),nt(a,new ot(.036,.034,.05,18),lt("#f1e5d2"),0,.055,0),nt(a,new ot(.037,.036,.05,18),lt("#8a5634",{roughness:.25}),0,.105,0),s.push(ch(n,"#f7b6cf",.14,.16));break}case"puddingParfait":case"kiwiParfait":{let o=lh(n,t.model==="kiwiParfait"?"#f6efe0":"#5a3322",{h:.15,w:.045});a=o.lv;let l=o.top;if(s.push(Qf(n,l-.006,"#fffaf3",1.25)),t.model==="puddingParfait"){let c=new tt;c.position.set(-.012,l+.02,.012),n.add(c),s.push(c),nt(c,new ot(.022,.028,.032,18),lt("#f7c75a",{roughness:.35}),0,.016,0),nt(c,new ot(.0225,.022,.008,18),lt("#8c4a12",{roughness:.2}),0,.034,0),s.push(Bo(n,-.012,l+.072,.012));for(let u=0;u<3;u++){let f=nt(n,new ot(.013,.013,.006,12),lt("#fff2c4"),.03,l+.01+u*.012,-.02+u*.016);f.rotation.x=Math.PI/2-.4,s.push(f)}let h=nt(n,new Zt(.009,8,6),lt("#ff9cc0"),.028,l+.032,.028);h.scale.z=.4,s.push(h)}else{for(let h=0;h<5;h++)s.push(nt(n,new kt(.018,.016,.018),lt("#ffd23f",{roughness:.35}),Math.cos(h*1.3)*.03,l+.022+h%2*.012,Math.sin(h*1.3)*.03));for(let h=0;h<2;h++){let u=nt(n,new ot(.016,.016,.005,14),lt("#9ccf3a",{roughness:.4}),-.026+h*.05,l+.04,.02-h*.03);u.rotation.x=Math.PI/2-.3,u.rotation.z=h?.4:-.4,s.push(u)}let c=nt(n,new Zt(.02,12,8),lt("#fffefa",{roughness:.8}),0,l+.05,0);c.scale.y=.75,s.push(c),s.push(Bo(n,.004,l+.075,.004))}break}case"pudding":{hh(n);let o=new tt;n.add(o),r.push(o),nt(o,new ot(.028,.038,.045,20),lt("#f7c75a",{roughness:.35}),0,.032,0),nt(o,new ot(.0285,.028,.01,20),lt("#8c4a12",{roughness:.2}),0,.058,0);let l=Qf(o,.062,"#fffaf3",.55);s.push(l),s.push(Bo(o,0,.09,0));break}case"sando":{hh(n,.095);for(let o of[-1,1]){let l=new tt;l.position.set(.032*o,.01,0),l.rotation.y=.3*o,n.add(l),r.push(l),nt(l,new kt(.05,.065,.026),lt("#fffaf2",{roughness:.9}),0,.033,0),nt(l,new kt(.051,.026,.02),lt("#fff7e6",{roughness:.6}),0,.033,.0035);let c=nt(l,new bs(.012,.016,12),lt("#ffcf3d",{roughness:.35}),0,.034,.014);c.rotation.x=Math.PI/2}break}case"skewer":{hh(n,.095);let o=new tt;o.position.y=.018,o.rotation.y=.5,n.add(o),r.push(o);let l=nt(o,new ot(.0022,.0022,.2,5),lt("#d9b07a"),0,0,0);l.rotation.z=Math.PI/2;for(let c=0;c<4;c++)nt(o,new kt(.022,.016,.03),lt("#d9561e",{roughness:.25}),-.04+c*.024,0,0);break}case"mochi":{hh(n,.07);let o=new tt;n.add(o),r.push(o),nt(o,new ot(.045,.036,.022,14,1,!0),lt("#8fd16b",{side:Bt}),0,.02,0);let l=nt(o,new Zt(.042,16,12),lt("#fffefb",{roughness:.9}),0,.04,0);l.scale.y=.72;let c=e.flavor==="\uD06C\uB9BC\uACE8\uB4DC\uD0A4\uC704\uD30C\uC778"?"#ffd23f":"#b9e46a";nt(o,new Zt(.01,8,6),lt(c),.02,.066,.012);break}}return n.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)}),n.scale.setScalar(uh),{g:n,top:s,body:r,lv:a,stage:0,pop:0}}function d0({scene3d:i,storeRoot:e,data:t,hero:n,npcs:s,showToast:r,isTouch:a,canOccupy:o,playGame:l,coins:c}){let h=j=>document.getElementById(j),u=h("menu"),f=h("order-btn"),d=h("eat-btn"),g=h("order-chip"),v=s.find(j=>j.id==="cafe"),p=[],m=0,M="idle",_=0,y=0,T=[],E=null,x=[],b=null,P=0,S=j=>[j.temp,j.shot?"shot":"",j.flavor].filter(Boolean).join("\xB7"),R=j=>rs[j.key].price+(j.opt.shot?NS:0),I=()=>p.reduce((j,me)=>j+me.qty,0),z=()=>p.reduce((j,me)=>j+R(me)*me.qty,0);function L(j,me=4e3){v&&(clearTimeout(L.t),v.el.textContent=j,L.t=setTimeout(()=>v.el.textContent="\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615",me))}function w(){if(M==="done")return U();let[,j]=Zf[m];u.innerHTML=`
      <div class="mhead"><div><b>Soo it Happy MENU</b><span>\uC218\uC787\uD574\uD53C \uCE74\uD398 \xB7 \uC6D0\uD558\uB294 \uBA54\uB274\uB97C \uB2F4\uC544 \uC8FC\uC138\uC694</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="cats">${Zf.map(([me],le)=>`<button class="${le===m?"on":""}" data-cat="${le}">${me}</button>`).join("")}</div>
      ${Zf[m][0]==="\uCEE4\uD53C"?'<p class="note">* \uB354\uCE58 \uC6D0\uC561 \uC0AC\uC6A9 \xB7 \uC544\uBA54\uB9AC\uCE74\uB178\uB294 \uC544\uC774\uC2A4/\uD56B \uC120\uD0DD \xB7 \uC5F0\uC720\uB77C\uB5BC\uB294 \uC544\uC774\uC2A4\uB9CC \xB7 \uC0F7 \uCD94\uAC00 +500\uC6D0</p>':""}
      <div class="items">${j.map(me=>{let le=rs[me],Me=le.opts||{};return`<div class="item" data-key="${me}">
          <span class="emo">${le.emoji}</span>
          <div class="info"><b>${le.name}${le.tag?` <i>${le.tag}</i>`:""}</b>${le.desc?`<small>${le.desc}</small>`:""}
            ${Me.temp?`<div class="seg">${Me.temp.map((N,A)=>`<button data-opt="temp" data-v="${N}" class="${A?"":"on"}">${N}</button>`).join("")}</div>`:""}
            ${Me.flavor?`<div class="seg">${Me.flavor.map((N,A)=>`<button data-opt="flavor" data-v="${N}" class="${A?"":"on"}">${N}</button>`).join("")}</div>`:""}
            ${Me.shot?'<label class="shot"><input type="checkbox" data-opt="shot"> \uC0F7 \uCD94\uAC00 +500\uC6D0</label>':""}
          </div>
          <div class="buy"><span class="price">${f0(le.price)}</span><button class="add" data-act="add">\uB2F4\uAE30</button></div>
        </div>`}).join("")}</div>
      <div class="cart">
        ${p.length?`<div class="lines">${p.map((me,le)=>`<div class="line"><span>${rs[me.key].emoji} ${rs[me.key].name}${S(me.opt)?` <small>(${S(me.opt)})</small>`:""}</span>
          <span class="step"><button data-act="dec" data-i="${le}" aria-label="\uBE7C\uAE30">\u2212</button><b>${me.qty}</b><button data-act="inc" data-i="${le}" aria-label="\uB354\uD558\uAE30">+</button></span></div>`).join("")}</div>`:'<p class="empty">\uC544\uC9C1 \uB2F4\uC740 \uBA54\uB274\uAC00 \uC5C6\uC5B4\uC694</p>'}
        <button class="go" data-act="order" ${p.length?"":"disabled"}>${p.length?`\u{1F9FE} ${I()}\uAC1C \xB7 \u{1FA99} ${z().toLocaleString("ko-KR")}\uCF54\uC778\uC73C\uB85C \uC8FC\uBB38\uD558\uAE30`:"\uBA54\uB274\uB97C \uB2F4\uC544 \uC8FC\uC138\uC694"}</button>
        <p class="fine">\uB0B4 \uCF54\uC778 <b>\u{1FA99} ${c?c.fmt(c.balance):0}</b>${c&&p.length&&c.balance<z()?` \xB7 <b style="color:#e0457b">${c.fmt(z()-c.balance)} \uBD80\uC871\uD574\uC694 \u2192 \uC9C1\uC6D0\uC5D0\uAC8C \uC54C\uBC14 \uAC8C\uC784\uC73C\uB85C \uBAA8\uC544\uC694 \u{1F3AE}</b>`:""}<br>\uAC8C\uC784\uC5D0\uC11C \uBAA8\uC740 \uCF54\uC778\uC73C\uB85C \uC8FC\uBB38\uD574\uC694 \xB7 \uC2E4\uC81C \uACB0\uC81C\uB294 \uB418\uC9C0 \uC54A\uC544\uC694</p>
      </div>`}function U(){u.innerHTML=`
      <div class="mhead"><div><b>\uC8FC\uBB38 \uC644\uB8CC! \u{1F9FE}</b><span>\uC8FC\uBB38\uBC88\uD638 ${_} \xB7 ${f0(E.total)}</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="done">
        <div class="list">${E.lines.map(j=>`<div>${rs[j.key].emoji} ${rs[j.key].name}${S(j.opt)?` (${S(j.opt)})`:""} \xD7 ${j.qty}</div>`).join("")}</div>
        <p>\uC5B4\uB5BB\uAC8C \uBC1B\uC744\uAE4C\uC694?</p>
        <button class="go" data-act="eat">\u{1F37D}\uFE0F \uADF8\uB0E5 \uBA39\uC744\uB798\uC694</button>
        <button class="go game" data-act="game">\u{1F50D} \uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30 \uD558\uACE0 \uBA39\uAE30</button>
      </div>`}function D(){M==="done"&&(M="idle"),w(),u.hidden=!1,u.offsetWidth,u.classList.add("on")}function O(){u.classList.remove("on"),setTimeout(()=>{u.classList.contains("on")||(u.hidden=!0)},250)}u.addEventListener("click",j=>{let me=j.target.closest("button");if(!me)return;if(me.dataset.cat){m=+me.dataset.cat,w(),u.querySelector(".items").scrollTop=0;return}if(me.dataset.opt){me.parentElement.querySelectorAll("button").forEach(Me=>Me.classList.toggle("on",Me===me));return}let le=me.dataset.act;if(le==="close")O();else if(le==="add"){let Me=me.closest(".item"),N=Me.dataset.key,A={};Me.querySelectorAll(".seg .on").forEach(ve=>A[ve.dataset.opt]=ve.dataset.v);let Y=Me.querySelector("[data-opt=shot]");if(Y&&Y.checked&&(A.shot=!0),I()>=oh){r(`\uD55C \uBC88\uC5D0 ${oh}\uAC1C\uAE4C\uC9C0 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694`);return}let ge=p.find(ve=>ve.key===N&&S(ve.opt)===S(A));ge?ge.qty++:p.push({key:N,opt:A,qty:1}),w(),r(`${rs[N].emoji} ${rs[N].name} \uB2F4\uC558\uC5B4\uC694`);let ae=u.querySelector(".lines");ae&&(ae.scrollTop=ae.scrollHeight)}else if(le==="inc"||le==="dec"){let Me=p[+me.dataset.i];if(le==="inc"){if(I()>=oh){r(`\uD55C \uBC88\uC5D0 ${oh}\uAC1C\uAE4C\uC9C0 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694`);return}Me.qty++}else--Me.qty<=0&&p.splice(+me.dataset.i,1);w()}else if(le==="order"){if(M!=="idle"&&M!=="done"||T.length){r("\uBA3C\uC800 \uC8FC\uBB38\uD55C \uBA54\uB274\uB97C \uBC1B\uC740 \uB4A4\uC5D0 \uB610 \uC8FC\uBB38\uD560 \uC218 \uC788\uC5B4\uC694");return}if(c&&!c.spend(z(),"\uCE74\uD398 \uC8FC\uBB38"))return w();_=10+Math.floor(Math.random()*89),E={lines:p.map(Me=>({...Me,opt:{...Me.opt}})),total:z()},p.length=0,M="done",w()}else le==="eat"?(O(),M="making",y=performance.now()+4500,L(`\uC8FC\uBB38\uBC88\uD638 ${_}\uBC88, \uC8FC\uBB38 \uBC1B\uC558\uC5B4\uC694! \uC790\uB9AC\uC5D0 \uC549\uC544 \uACC4\uC2DC\uBA74 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F353}`,6e3),r("\u{1FA91} \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694 \xB7 \uC9C1\uC6D0\uC774 \uAC00\uC838\uB2E4 \uB4DC\uB824\uC694")):le==="game"&&k(E)});function k(){if(O(),!l)return r("\u{1F3AE} \uAC8C\uC784\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694");M="gaming",l(j=>{M="making",y=performance.now()+(j?800:1500),L(j?"\uAC8C\uC784 \uC131\uACF5! \uBC14\uB85C \uB9CC\uB4E4\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F389}":"\uAD1C\uCC2E\uC544\uC694! \uADF8\uB798\uB3C4 \uB9DB\uC788\uAC8C \uB9CC\uB4E4\uC5B4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F60A}",5e3),r(j?"\u{1F389} \uC131\uACF5! \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694":"\uBA54\uB274\uB294 \uADF8\uB300\uB85C \uC900\uBE44\uD574 \uB4DC\uB824\uC694 \xB7 \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694")})}f.addEventListener("click",j=>{D(),j.currentTarget.blur()}),addEventListener("keydown",j=>{j.code==="Escape"&&!u.hidden&&O()});let F=new As,B=new H(0,-1,0),$=new H;function ee(j,me){F.set($.set(j,1.4,me),B),F.far=1.4;for(let le of F.intersectObject(e,!0))if(le.point.y>.4&&le.point.y<1.05)return le.point.y;return null}function Z(j,me){let le=Math.sin(j[2]),Me=Math.cos(j[2]),N=Me,A=-le,Y=.42,ge=null;for(let Te of[.3,.36,.42,.5,.58]){let ce=ee(j[0]+le*Te,j[1]+Me*Te);if(ce!==null){Y=Te+.04,ge=ce;break}}ge===null&&(ge=.74);let ae=me.length,ve=Math.min(3,ae);me.forEach((Te,ce)=>{let de=Math.floor(ce/3),Ce=de?ae-3:ve,pe=(ce%3-(Ce-1)/2)*.13,fe=Y+de*.12,be=zo(Te.key,Te.opt);be.g.position.set(j[0]+le*fe+N*pe,ge+.002,j[1]+Me*fe+A*pe),be.g.rotation.y=j[2]+Math.PI+(Math.random()-.5)*.4,be.g.scale.setScalar(.001),be.pop=.001,i.add(be.g),x.push({food:be,seat:j})})}let V=v&&{x:v.x,z:v.z,face:v.face,y:v.c.root.position.y};v&&(v.y=V.y,v.speed=0);let ne=.2,q=.15,J=1.25,W=t.floor.map(j=>j[0]),Q=t.floor.map(j=>j[1]),oe=Math.min(...W),ie=Math.min(...Q),Ee=Math.ceil((Math.max(...W)-oe)/q)+1,re=Math.ceil((Math.max(...Q)-ie)/q)+1,xe=new Map,ue=j=>oe+j*q,_e=j=>ie+j*q;function Se(j,me){if(j<0||me<0||j>=Ee||me>=re)return!1;let le=me*Ee+j,Me=xe.get(le);return Me===void 0&&(Me=o(ue(j),_e(me),ne),xe.set(le,Me)),Me}function Ae(j,me,le=8){let Me=Math.round((j-oe)/q),N=Math.round((me-ie)/q);for(let A=0;A<=le;A++){let Y=null,ge=1e9;for(let ae=-A;ae<=A;ae++)for(let ve=-A;ve<=A;ve++){if(Math.max(Math.abs(ae),Math.abs(ve))!==A||!Se(Me+ae,N+ve))continue;let Te=Math.hypot(ue(Me+ae)-j,_e(N+ve)-me);Te<ge&&(ge=Te,Y=[Me+ae,N+ve])}if(Y)return Y}return null}function Le(j,me,le,Me){let N=Math.ceil(Math.hypot(le-j,Me-me)/.06);for(let A=1;A<N;A++)if(!o(j+(le-j)*A/N,me+(Me-me)*A/N,ne))return!1;return!0}function ke(j,me,le,Me){let N=Ae(j,me),A=Ae(le,Me);if(!N||!A)return null;let Y=(be,Re)=>Re*Ee+be,ge=Y(A[0],A[1]),ae=[[0,N[0],N[1]]],ve=new Map([[Y(N[0],N[1]),0]]),Te=new Map,ce=new Set,de=!1,Ce=0;for(;ae.length&&Ce++<4e4;){let be=0;for(let Je=1;Je<ae.length;Je++)ae[Je][0]<ae[be][0]&&(be=Je);let[,Re,Pe]=ae.splice(be,1)[0],Ge=Y(Re,Pe);if(!ce.has(Ge)){if(ce.add(Ge),Ge===ge){de=!0;break}for(let[Je,we]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let $e=Re+Je,it=Pe+we;if(!Se($e,it)||Je&&we&&(!Se(Re+Je,Pe)||!Se(Re,Pe+we)))continue;let Fe=Y($e,it),Mt=ve.get(Ge)+Math.hypot(Je,we);Mt<(ve.has(Fe)?ve.get(Fe):1e9)&&(ve.set(Fe,Mt),Te.set(Fe,Ge),ae.push([Mt+Math.hypot($e-A[0],it-A[1]),$e,it]))}}}if(!de)return null;let G=[];for(let be=ge;be!==void 0;be=Te.get(be))G.push([ue(be%Ee),_e(Math.floor(be/Ee))]);G.reverse(),G.push([le,Me]);let pe=[G[0]],fe=0;for(;fe<G.length-1;){let be=G.length-1;for(;be>fe+1&&!Le(G[fe][0],G[fe][1],G[be][0],G[be][1]);)be--;pe.push(G[be]),fe=be}return pe}let ze=null,et=lt("#ffc2da",{roughness:.5});function X(j){let me=T;if(T=[],!v){Z(j,me),M="idle";return}let le=Math.sin(j[2]),Me=Math.cos(j[2]),N=[j[0]+le*.5,j[1]+Me*.5],A=null;for(let[ge,ae]of[[Me,-le],[-Me,le],[le,Me]])for(let ve of[.55,.7,.85]){let Te=N[0]+ge*ve,ce=N[1]+ae*ve;if(!o(Te,ce,ne))continue;let de=ke(V.x,V.z,Te,ce);if(de){(!A||de.length<A.length)&&(A=de);break}}if(M="delivering",!A){Z(j,me),M="idle",r("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}");return}let Y=new tt;Y.position.set(0,.5,.24),nt(Y,new kt(.36,.016,.26),et),me.slice(0,6).forEach((ge,ae)=>{let ve=zo(ge.key,ge.opt);ve.g.scale.setScalar(uh*.62),ve.g.position.set((ae%3-1)*.1,.008,me.length>3?(Math.floor(ae/3)-.5)*.09:0),Y.add(ve.g)}),v.c.root.add(Y),ze={stage:"go",path:[[V.x,V.z],...A],i:1,seat:j,wait:0,tray:Y,items:me,look:N},v.carry=!0,L("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694! \u{1F370}",2e4)}function mt(j){let me=v,le=ze;if(le.stage==="go"||le.stage==="back"){let[Me,N]=le.path[le.i],A=Me-me.x,Y=N-me.z,ge=Math.hypot(A,Y),ae=Math.min(ge,J*j);if(ge>1e-4){me.x+=A/ge*ae,me.z+=Y/ge*ae;let Te=Math.atan2(A,Y)-me.face;Te=Math.atan2(Math.sin(Te),Math.cos(Te)),me.face+=Te*Math.min(1,j*10)}me.speed=J;let ve=Math.hypot(me.x-V.x,me.z-V.z);me.y=V.y*Ai.clamp(1-(ve-.15)/.35,0,1),ge<.02&&++le.i>=le.path.length&&(me.speed=0,le.stage==="go"?(le.stage="serve",le.wait=.7):(me.x=V.x,me.z=V.z,me.face=V.face,me.y=V.y,ze=null))}else if(le.stage==="serve"){let Me=Math.atan2(le.look[0]-me.x,le.look[1]-me.z)-me.face;if(Me=Math.atan2(Math.sin(Me),Math.cos(Me)),me.face+=Me*Math.min(1,j*8),le.wait-=j,le.wait<=0&&le.tray)me.c.root.remove(le.tray),le.tray=null,me.carry=!1,Z(le.seat,le.items),M="idle",L("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274 \uB098\uC654\uC2B5\uB2C8\uB2E4! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}",4e3),r("\uC8FC\uBB38\uD558\uC2E0 \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uB9DB\uC788\uAC8C \uB4DC\uC138\uC694 \u{1F60B}"),le.wait=1.2;else if(le.wait<=0){let N=ke(me.x,me.z,V.x,V.z);le.stage="back",le.path=N?[[me.x,me.z],...N.slice(0,-1),[V.x,V.z]]:[[me.x,me.z],[V.x,V.z]],le.i=1,M="idle"}}}let je=()=>x.filter(j=>j.seat===b);function rt(){let j=je();if(!j.length)return;let me=j[0].food;me.stage++,P=.7;let le=me.stage;for(let Me of me.top)le>=2?Me.visible=!1:Me.scale.multiplyScalar(.65);me.lv&&(me.lv.scale.y=Math.max(.02,1-le/3));for(let Me of me.body)Me.scale.setScalar(Math.max(.05,1-le*.3));le>=3&&(me.dying=1,setTimeout(()=>{i.remove(me.g),x.splice(x.findIndex(Me=>Me.food===me),1),x.some(Me=>Me.seat===b)||r("\uB2E4 \uBA39\uC5C8\uC5B4\uC694! \uB9DB\uC788\uC5C8\uB2E4 \u{1F60B} \uB610 \uC8FC\uBB38\uD574 \uBCF4\uC138\uC694")},450))}return d.addEventListener("click",j=>{rt(),j.currentTarget.blur()}),{get open(){return!u.hidden},onSit(j){b=j,M==="ready"&&T.length&&!ze&&X(j)},get npcBusy(){return!!ze},onStand(){b=null},update(j,me,le){le!==b&&(b=le),M==="making"&&performance.now()>=y&&(T=E.lines.flatMap(Y=>Array.from({length:Y.qty},()=>({key:Y.key,opt:Y.opt}))),M="ready",b&&!ze?X(b):(L(`\uC8FC\uBB38\uBC88\uD638 ${_}\uBC88 \uBA54\uB274 \uB098\uC654\uC5B4\uC694! \uC790\uB9AC\uC5D0 \uC549\uC73C\uC2DC\uBA74 \uAC00\uC838\uB2E4 \uB4DC\uB9B4\uAC8C\uC694 \u{1F370}`,7e3),r("\u{1F514} \uBA54\uB274\uAC00 \uB098\uC654\uC5B4\uC694! \uCE74\uD398 \uC758\uC790\uB97C \uB20C\uB7EC \uC549\uC73C\uBA74 \uC9C1\uC6D0\uC774 \uAC00\uC838\uB2E4 \uB4DC\uB824\uC694"))),ze&&mt(j);let Me=v&&!le&&!ze&&Math.hypot(me.x-V.x,me.z-V.z)<2.6;f.hidden=!Me||!u.hidden;let N=!!le&&je().length>0;d.hidden=!N;let A=M==="making"?"\u{1F9D1}\u200D\u{1F373} \uBA54\uB274 \uB9CC\uB4DC\uB294 \uC911\u2026 \uC790\uB9AC\uC5D0 \uC549\uC544 \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694":M==="ready"?`\u{1F514} \uBA54\uB274 ${T.length}\uAC1C \uC900\uBE44\uB410\uC5B4\uC694 \xB7 \uCE74\uD398 \uC758\uC790\uC5D0 \uC549\uC544 \uBCF4\uC138\uC694`:M==="delivering"?"\u{1F370} \uC9C1\uC6D0\uC774 \uBA54\uB274\uB97C \uAC00\uC838\uB2E4 \uB4DC\uB9AC\uB294 \uC911\u2026":"";g.textContent!==A&&(g.textContent=A),g.hidden=!A||!u.hidden;for(let{food:Y}of x){if(Y.pop<1){Y.pop=Math.min(1,Y.pop+j*3);let ge=1-Math.pow(1-Y.pop,3);Y.g.scale.setScalar(uh*(.2+.8*ge+Math.sin(Y.pop*Math.PI)*.12))}Y.dying&&(Y.dying=Math.max(0,Y.dying-j*2.5),Y.g.scale.setScalar(uh*Y.dying))}if(P>0&&n.arms){P=Math.max(0,P-j);let Y=Math.sin((1-P/.7)*Math.PI);n.arms[0].rotation.x=-.5-1.7*Y,n.head.rotation.x=.12*Y}}}}var cr='stroke="#4a3f66" stroke-linejoin="round" stroke-linecap="round"',_t=cr+' stroke-width="2.6"',p0=(i,e,t,n=2.6)=>`<circle cx="${i}" cy="${t}" r="${n}" fill="#3b2f4a"/><circle cx="${e}" cy="${t}" r="${n}" fill="#3b2f4a"/><circle cx="${i+.9}" cy="${t-.9}" r="0.9" fill="#fff"/><circle cx="${e+.9}" cy="${t-.9}" r="0.9" fill="#fff"/>`,id=(i,e,t)=>`<ellipse cx="${i}" cy="${t}" rx="4" ry="2.4" fill="#ff9fbf" opacity=".8"/><ellipse cx="${e}" cy="${t}" rx="4" ry="2.4" fill="#ff9fbf" opacity=".8"/>`,dh=(i,e)=>`<path d="M${i} ${e} q3 -10 9 -12" fill="none" ${cr} stroke-width="1.8"/><circle cx="${i}" cy="${e+2}" r="5.5" fill="#e8243c" ${_t}/><circle cx="${i-1.8}" cy="${e}" r="1.5" fill="#fff" opacity=".8"/>`,ed=(i,e,t)=>`
  <path d="M43 76 h14 l2 12 h-18z" fill="#eef8fc" ${_t}/><ellipse cx="50" cy="89" rx="15" ry="4" fill="#eef8fc" ${_t}/>
  <path d="M27 36 h46 l-7 36 q-16 8 -32 0z" fill="${i}" ${_t}/>
  <path d="M33 42 l-3 22" stroke="#fff" stroke-width="3" opacity=".55" stroke-linecap="round"/>
  ${e?`<circle cx="50" cy="30" r="14" fill="${e}" ${_t}/><path d="M38 34 q12 6 24 0" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/>`:""}
  ${t?`<path d="M30 37 q-3 -10 8 -12 q2 -10 12 -9 q10 -1 12 9 q11 2 8 12z" fill="${t}" ${_t}/><path d="M36 31 q14 -6 28 0" fill="none" stroke="#6b3b25" stroke-width="2.4" stroke-linecap="round"/>`:""}`,Ho=(i,e,t=1,n="")=>`<g transform="translate(${i} ${e}) scale(${t})">
  <ellipse cx="-17" cy="2" rx="8" ry="13" fill="#fff" ${_t} transform="rotate(18 -17 2)"/><ellipse cx="17" cy="2" rx="8" ry="13" fill="#fff" ${_t} transform="rotate(-18 17 2)"/>
  <path d="M-16 -6 q-4 -14 8 -16 q8 -8 16 0 q12 2 8 16 q6 10 -2 20 q-14 10 -28 0 q-8 -10 -2 -20z" fill="#fff" ${_t}/>
  ${p0(-6,6,0,2.8)}<ellipse cx="0" cy="7" rx="3" ry="2.2" fill="#3b2f4a"/><path d="M-3 10 q3 3 6 0" fill="none" ${cr} stroke-width="1.6"/>
  ${id(-11,11,8)}${n}</g>`,td=({hair:i,hairDark:e,bun:t,glasses:n,clip:s,collar:r})=>`
  ${t?`<circle cx="50" cy="20" r="11" fill="${i}" ${_t}/>`:""}
  <path d="M22 54 q-4 -34 28 -36 q32 2 28 36 q-2 10 -8 12 l-40 0 q-6 -2 -8 -12z" fill="${i}" ${_t}/>
  <ellipse cx="50" cy="54" rx="22" ry="21" fill="#ffe6d6" ${_t}/>
  <path d="M28 46 q8 -14 22 -12 q-2 8 -10 10 q10 -2 14 -10 q8 10 18 12 q-4 -18 -22 -18 q-18 0 -22 18z" fill="${i}"/>
  <path d="M27 58 q-3 10 1 20 M73 58 q3 10 -1 20" fill="none" stroke="${e}" stroke-width="7" stroke-linecap="round"/>
  ${p0(41,59,55,3)}${id(35,65,63)}<path d="M46 65 q4 4 8 0" fill="none" ${cr} stroke-width="1.8"/>
  ${n?'<circle cx="41" cy="55" r="7" fill="none" stroke="#4a3326" stroke-width="2.4"/><circle cx="59" cy="55" r="7" fill="none" stroke="#4a3326" stroke-width="2.4"/><path d="M48 54 h4" stroke="#4a3326" stroke-width="2.4"/>':""}
  ${s?`<circle cx="32" cy="36" r="5" fill="#e8243c" ${cr} stroke-width="1.8"/><path d="M30 31 l2 -3 l2 3" fill="#6cc05a"/>`:""}
  ${r?`<path d="M34 78 q16 8 32 0 l6 10 q-22 10 -44 0z" fill="${r}" ${_t}/>`:""}`,hr={menu:{name:"\uC218\uC787\uD574\uD53C \uBA54\uB274 \uC2A4\uD2F0\uCEE4",color:"#d6efbf",stickers:[ed("#2f93ee","#fff0c8")+dh(57,14),ed("#6fd34a","#d6f2c4")+dh(57,14),`<ellipse cx="50" cy="80" rx="34" ry="9" fill="#fff" ${_t}/><path d="M32 78 l6 -34 h24 l6 34z" fill="#f7c75a" ${_t}/><path d="M38 44 h24 l-1 7 q-11 4 -22 0z" fill="#8c4a12" ${_t}/>
       <path d="M40 44 q-3 -9 6 -10 q4 -8 8 0 q9 1 6 10z" fill="#fffaf3" ${_t}/>${dh(50,24)}<path d="M37 70 q13 4 26 0" stroke="#fff" stroke-width="2.4" opacity=".5" fill="none"/>`,`<path d="M18 86 L84 20" stroke="#d9b07a" stroke-width="4" stroke-linecap="round"/>
       ${[0,1,2,3].map(i=>`<rect x="${24+i*13}" y="${56-i*13}" width="15" height="12" rx="4" fill="#e0622a" ${_t} transform="rotate(-45 ${31+i*13} ${62-i*13})"/>`).join("")}
       <path d="M30 60 l40 -40" stroke="#fff" stroke-width="2" opacity=".45" stroke-linecap="round"/>`,`<path d="M22 64 h56 l-6 18 h-44z" fill="#8fd16b" ${_t}/><path d="M28 64 l4 18 M40 64 l1 18 M52 64 l-1 18 M64 64 l-3 18" stroke="#6aa94a" stroke-width="1.6"/>`+Ho(50,44,1.05),ed("#7b4a33",null,"#fffaf3")+dh(54,10)]},staff:{name:"\uC18C\uD488\uC0F5 \uC9C1\uC6D0 \uC2A4\uD2F0\uCEE4",color:"#ffe1ee",stickers:[td({hair:"#7a5640",hairDark:"#64432f",bun:!0,collar:"#c4e76a"}),td({hair:"#3d3346",hairDark:"#2c2433",glasses:!0,collar:"#fff0a3"}),td({hair:"#f7a9c8",hairDark:"#ec8db5",clip:!0,collar:"#aee3cf"}),`<path d="M10 24 q0 -12 14 -12 h52 q14 0 14 12 v30 q0 12 -14 12 h-36 l-14 14 l2 -14 q-18 0 -18 -12z" fill="#fff" ${_t}/>
       <text x="50" y="47" text-anchor="middle" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-weight="900" font-size="12.5" fill="#e0457b">\uC5B4\uC11C\uC624\uC138\uC694!</text>`,`<path d="M50 86 C10 58 12 22 34 20 C44 19 50 28 50 32 C50 28 56 19 66 20 C88 22 90 58 50 86z" fill="#f6a9c9" ${_t}/>
       <text x="50" y="54" text-anchor="middle" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-weight="900" font-size="13" fill="#c2477e">\uC218\uC787\uD574\uD53C</text>`,`<path d="M50 50 l-30 -18 q-8 -2 -8 8 v20 q0 10 8 8z M50 50 l30 -18 q8 -2 8 8 v20 q0 10 -8 8z" fill="#ff9cc0" ${_t}/>
       <path d="M44 52 l-10 30 l8 -4 l4 8 l6 -32z M56 52 l10 30 l-8 -4 l-4 8 l-6 -32z" fill="#ff86b2" ${_t}/><circle cx="50" cy="50" r="8" fill="#ffb8d2" ${_t}/>`]},dog:{name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC2A4\uD2F0\uCEE4",color:"#e3f3ff",stickers:[Ho(50,52,1.5,'<path d="M-3 12 q3 5 6 0z" fill="#ff8fb0" stroke="#4a3f66" stroke-width="1.4"/>'),`<ellipse cx="52" cy="72" rx="24" ry="16" fill="#fff" ${_t}/><ellipse cx="38" cy="84" rx="7" ry="5" fill="#fff" ${_t}/><ellipse cx="62" cy="84" rx="7" ry="5" fill="#fff" ${_t}/>
       <path d="M74 66 q12 -6 8 -16" fill="none" ${cr} stroke-width="5"/><path d="M74 66 q12 -6 8 -16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`+Ho(48,40,1.05),`<ellipse cx="50" cy="66" rx="34" ry="18" fill="#fff" ${_t}/><path d="M24 62 q-4 -16 12 -18 q10 -10 20 0" fill="#fff" ${_t}/>
       <path d="M30 60 q4 3 8 0 M44 60 q4 3 8 0" fill="none" ${cr} stroke-width="2"/><ellipse cx="41" cy="67" rx="2.6" ry="2" fill="#3b2f4a"/>${id(28,54,68)}
       <text x="66" y="38" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="15" fill="#9a8cc4">z</text><text x="76" y="26" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="11" fill="#9a8cc4">z</text>`,Ho(50,54,1.4)+`<path d="M50 24 l-14 -8 q-4 0 -4 4 v8 q0 4 4 4z M50 24 l14 -8 q4 0 4 4 v8 q0 4 -4 4z" fill="#ff8fb7" ${_t}/><circle cx="50" cy="24" r="4.5" fill="#ffb3cf" ${_t}/>`,`<ellipse cx="50" cy="62" rx="18" ry="15" fill="#f7a9c8" ${_t}/>${[[28,40],[42,30],[58,30],[72,40]].map(([i,e])=>`<ellipse cx="${i}" cy="${e}" rx="7" ry="8.5" fill="#f7a9c8" ${_t}/>`).join("")}`,`<path d="M14 20 q0 -10 12 -10 h48 q12 0 12 10 v26 q0 10 -12 10 h-30 l-14 12 l2 -12 h-6 q-12 0 -12 -10z" fill="#fffbe0" ${_t}/>
       <text x="50" y="42" text-anchor="middle" font-family="Malgun Gothic, sans-serif" font-weight="900" font-size="18" fill="#4a3f66">\uBA4D!</text>`+Ho(70,76,.8)]}},nd=new Map;function gi(i,e){let t=i+e;if(!nd.has(t)){let n=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 112 112" width="224" height="224">
      <defs><filter id="b" x="-20%" y="-20%" width="140%" height="140%"><feMorphology in="SourceAlpha" operator="dilate" radius="4.5" result="d"/>
      <feFlood flood-color="#ffffff"/><feComposite in2="d" operator="in" result="w"/>
      <feGaussianBlur in="d" stdDeviation="1.6" result="s"/><feOffset in="s" dy="1.4" result="so"/><feFlood flood-color="#6a53a0" flood-opacity=".28"/><feComposite in2="so" operator="in" result="sh"/>
      <feMerge><feMergeNode in="sh"/><feMergeNode in="w"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g filter="url(#b)">${hr[i].stickers[e]}</g></svg>`;nd.set(t,"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n))}return nd.get(t)}var an={stkMenu:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uC218\uC787\uD574\uD53C \uBA54\uB274 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"menu",desc:"\uD06C\uB9BC\uC18C\uB2E4\xB7\uBA54\uB860\uC18C\uB2E4\xB7\uD478\uB529\xB7\uB5A1\uAF2C\uCE58\u2026",color:"#d6efbf"},stkStaff:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uC18C\uD488\uC0F5 \uC9C1\uC6D0 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"staff",desc:"\uCE74\uD398 \uC5B8\uB2C8\xB7\uC18C\uD488\uC0F5 \uC5B8\uB2C8\xB7\uC190\uB2D8",color:"#ffd3e4"},stkDog:{cat:"\uC2A4\uD2F0\uCEE4",name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC2A4\uD2F0\uCEE4",price:3e3,sheet:"dog",desc:"\uBABD\uAE00\uBABD\uAE00 \uD558\uC580 \uAC15\uC544\uC9C0",color:"#dcefff"},diary:{cat:"\uBB38\uAD6C",name:"\uB2E4\uC774\uC5B4\uB9AC \uC218\uCCA9",price:5e3,emoji:"\u{1F4D2}",desc:"\uCE74\uD398 \uC790\uB9AC\uC5D0\uC11C \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694",color:"#f7c9dc"},penBear:{cat:"\uBB38\uAD6C",name:"\uACF0\uB3CC\uC774 \uBCFC\uD39C",price:2500,emoji:"\u{1F43B}",desc:"\uCD08\uCF54 \uBE0C\uB77C\uC6B4 \uC789\uD06C",ink:"#7a4a33",color:"#c99c6e"},penBerry:{cat:"\uBB38\uAD6C",name:"\uB538\uAE30 \uBCFC\uD39C",price:2500,emoji:"\u{1F353}",desc:"\uB538\uAE30 \uD551\uD06C \uC789\uD06C",ink:"#e0457b",color:"#f48fb9"},penMint:{cat:"\uBB38\uAD6C",name:"\uBBFC\uD2B8 \uC824\uD39C",price:2500,emoji:"\u{1F33F}",desc:"\uBBFC\uD2B8 \uC789\uD06C",ink:"#2f9d8f",color:"#9fe0cf"},tapeHeart:{cat:"\uBB38\uAD6C",name:"\uD558\uD2B8 \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504",price:2e3,emoji:"\u{1F497}",desc:"\uB2E4\uAFB8\uC5D0 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694",tape:"heart",color:"#ffc2da"},tapeCheck:{cat:"\uBB38\uAD6C",name:"\uAE45\uC5C4 \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504",price:2e3,emoji:"\u{1F49A}",desc:"\uB2E4\uAFB8\uC5D0 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694",tape:"check",color:"#bfe6a8"},memo:{cat:"\uBB38\uAD6C",name:"\uB9D0\uB791 \uBA54\uBAA8\uC9C0",price:2e3,emoji:"\u{1F5D2}\uFE0F",color:"#fff3b0"},letter:{cat:"\uBB38\uAD6C",name:"\uD3B8\uC9C0\uC9C0 \uC138\uD2B8",price:3500,emoji:"\u{1F48C}",color:"#ffe1ee"},postcard:{cat:"\uBB38\uAD6C",name:"\uC218\uC787\uD574\uD53C \uC5FD\uC11C",price:1500,emoji:"\u{1F5BC}\uFE0F",color:"#cdbcf0"},plushDog:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uD558\uC580 \uAC15\uC544\uC9C0 \uC778\uD615",price:15e3,emoji:"\u{1F436}",color:"#ffffff"},keyBear:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uACF0\uB3CC\uC774 \uC778\uD615 \uD0A4\uB9C1",price:6e3,emoji:"\u{1F9F8}",color:"#e6bf93"},keyBunny:{cat:"\uC778\uD615\xB7\uD0A4\uB9C1",name:"\uD1A0\uB07C \uC778\uD615 \uD0A4\uB9C1",price:6e3,emoji:"\u{1F430}",color:"#f8b9d3"},hairpin:{cat:"\uC7A1\uD654",name:"\uB538\uAE30 \uBA38\uB9AC\uD540",price:3e3,emoji:"\u{1F380}",color:"#ff8fb0"}},m0=["\uC2A4\uD2F0\uCEE4","\uBB38\uAD6C","\uC778\uD615\xB7\uD0A4\uB9C1","\uC7A1\uD654"],sd=i=>"\u{1FA99} "+i.toLocaleString("ko-KR"),rd=i=>{let e=an[i];return e.sheet?`<img src="${gi(e.sheet,0)}" alt="">`:e.emoji},Bn={items:{},stickers:{}};try{Object.assign(Bn,JSON.parse(localStorage.getItem("sh-inv"))||{})}catch{}function ph(){try{localStorage.setItem("sh-inv",JSON.stringify(Bn))}catch{}}var mh=i=>(Bn.items[i]||0)>0;function US(){let i=document.createElement("canvas");i.width=512,i.height=128;let e=i.getContext("2d");e.fillStyle="#f4a7bf",e.fillRect(0,0,512,128),e.globalCompositeOperation="destination-out";let t=(s,r,a)=>{e.beginPath(),e.moveTo(s,r+a*.9),e.bezierCurveTo(s-a*1.3,r,s-a*.7,r-a*.9,s,r-a*.3),e.bezierCurveTo(s+a*.7,r-a*.9,s+a*1.3,r,s,r+a*.9),e.fill()};for(let s=0;s<2;s++)for(let r=0;r<16;r++)t(16+r*32+(s?16:0),44+s*42,11);let n=new ti(i);return n.colorSpace=Ct,n.wrapS=Sn,n.anisotropy=4,n}function FS(){let i=new tt,e=new Yt({color:"#f4a7bf",roughness:.55}),t=new Yt({map:US(),alphaTest:.5,side:Bt,roughness:.55}),n=new tt;n.scale.set(1.3,1,.85),i.add(n);let s=.1,r=new Ze(new ot(.11,.08,s,28,1,!0),t);r.position.y=s/2,n.add(r);let a=new Ze(new Ya(.08,24),e);a.rotation.x=-Math.PI/2,a.position.y=.002,n.add(a);let o=new Ze(new ji(.11,.008,6,32),e);o.rotation.x=Math.PI/2,o.position.y=s,n.add(o);for(let c of[-1,1]){let h=new Ze(new ji(.075,.009,6,18,Math.PI),e);h.position.set(0,s,.07*c),h.rotation.x=.25*c,i.add(h)}let l=new tt;return l.position.y=.01,i.add(l),i.traverse(c=>{c.isMesh&&(c.castShadow=!1)}),{g:i,goods:l}}function g0({scene3d:i,hero:e,npcs:t,showToast:n,inShop:s,coins:r}){let a=I=>document.getElementById(I),o=a("shop"),l=a("shop-btn"),c=a("basket-btn"),h=a("stop-btn"),u=t.find(I=>I.id==="shop"),f=FS();f.g.position.set(.21,.29,.24),f.g.rotation.y=Math.PI/2;let d=!1,g="browse",v=0,p=0,m={},M=()=>Object.values(m).reduce((I,z)=>I+z,0),_=()=>Object.entries(m).reduce((I,[z,L])=>I+an[z].price*L,0),y=()=>u&&Math.hypot(e.root.position.x-u.x,e.root.position.z-u.z)<2.8;function T(){f.goods.clear();let I=0;for(let[z,L]of Object.entries(m))for(let w=0;w<L&&I<10;w++,I++){let U=an[z],D=new Ze(U.sheet?new kt(.06,.004,.08):new kt(.045,.035,.04),new Yt({color:U.color,roughness:.6}));D.position.set((I%3-1)*.06,.02+Math.floor(I/3)*.025,(I%2-.5)*.04),D.rotation.set(.2*(I%2-.5),I*.7,.15*(I%3-1)),f.goods.add(D)}}function E(){d=!0,e.root.add(f.g),T(),n("\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8\uB97C \uB4E4\uC5C8\uC5B4\uC694! \uC0C1\uD488\uC744 \uB2F4\uC544 \uBCF4\uC138\uC694"),P("browse")}function x(){d=!1,e.root.remove(f.g);for(let I of Object.keys(m))delete m[I];S(),n("\uC1FC\uD551\uC744 \uADF8\uB9CC\uB480\uC5B4\uC694. \uBC14\uAD6C\uB2C8\uB294 \uC81C\uC790\uB9AC\uC5D0 \uB450\uC5C8\uC5B4\uC694")}function b(){let I=M(),z=`<div class="cats">${[["browse","\u{1F6CD}\uFE0F \uC0C1\uD488"],["cart",`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 ${I}`],["mine","\u{1F392} \uB0B4 \uBB3C\uAC74"]].map(([w,U])=>`<button class="${g===w?"on":""}" data-tab="${w}">${U}</button>`).join("")}</div>`,L="";if(g==="browse")L=`<div class="cats sub">${m0.map((w,U)=>`<button class="${U===v?"on":""}" data-cat="${U}">${w}</button>`).join("")}</div>
      <div class="items">${Object.entries(an).filter(([,w])=>w.cat===m0[v]).map(([w,U])=>`
        <div class="item"><span class="emo">${rd(w)}</span>
          <div class="info"><b>${U.name}</b>${U.desc?`<small>${U.desc}</small>`:""}
            ${U.sheet?`<div class="mini">${hr[U.sheet].stickers.map((D,O)=>`<img src="${gi(U.sheet,O)}" alt="">`).join("")}</div>`:""}</div>
          <div class="buy"><span class="price">${sd(U.price)}</span><button class="add" data-add="${w}">${m[w]?`\uB2F4\uC74C ${m[w]}`:"\uB2F4\uAE30"}</button></div>
        </div>`).join("")}</div>
      <div class="cart"><button class="go" data-tab="cart" ${I?"":"disabled"}>${I?`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 \uBCF4\uAE30 \xB7 ${I}\uAC1C \xB7 ${sd(_())}`:"\uB9C8\uC74C\uC5D0 \uB4DC\uB294 \uC0C1\uD488\uC744 \uB2F4\uC544 \uBCF4\uC138\uC694"}</button></div>`;else if(g==="cart"){let w=y();L=`<div class="items">${I?Object.entries(m).map(([U,D])=>`
        <div class="item"><span class="emo">${rd(U)}</span><div class="info"><b>${an[U].name}</b><small>${sd(an[U].price)}</small></div>
          <span class="step"><button data-dec="${U}" aria-label="\uBE7C\uAE30">\u2212</button><b>${D}</b><button data-inc="${U}" aria-label="\uB354\uD558\uAE30">+</button></span></div>`).join(""):'<p class="empty">\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4 \uC788\uC5B4\uC694</p>'}</div>
      <div class="cart">
        <button class="go" data-act="pay" ${I&&w?"":"disabled"}>${I?w?`\u{1FA99} ${_().toLocaleString("ko-KR")}\uCF54\uC778\uC73C\uB85C \uACC4\uC0B0\uD558\uAE30`:"\u{1F380} \uACC4\uC0B0\uB300 \uC9C1\uC6D0\uC5D0\uAC8C \uAC00\uBA74 \uACC4\uC0B0\uD560 \uC218 \uC788\uC5B4\uC694":"\uB2F4\uC740 \uC0C1\uD488\uC774 \uC5C6\uC5B4\uC694"}</button>
        <p class="fine">\uB0B4 \uCF54\uC778 <b>\u{1FA99} ${r?r.fmt(r.balance):0}</b>${r&&I&&r.balance<_()?` \xB7 <b style="color:#e0457b">${r.fmt(_()-r.balance)} \uBD80\uC871\uD574\uC694 \u2192 \uAC8C\uC784\uC73C\uB85C \uBAA8\uC544\uC694 \u{1F3AE}</b>`:""}<br>\uAC8C\uC784\uC5D0\uC11C \uBAA8\uC740 \uCF54\uC778\uC73C\uB85C \uACC4\uC0B0\uD574\uC694 \xB7 \uC2E4\uC81C \uACB0\uC81C\uB294 \uB418\uC9C0 \uC54A\uC544\uC694</p></div>`}else{let w=Object.entries(Bn.items).filter(([,U])=>U>0);L=`<div class="items">${w.length?w.map(([U,D])=>`
        <div class="item"><span class="emo">${rd(U)}</span><div class="info"><b>${an[U].name}</b><small>${D}\uAC1C \uAC00\uC9C0\uACE0 \uC788\uC5B4\uC694</small></div></div>`).join(""):'<p class="empty">\uC544\uC9C1 \uC0B0 \uBB3C\uAC74\uC774 \uC5C6\uC5B4\uC694</p>'}
        <p class="fine">\u{1F4D2} \uB2E4\uC774\uC5B4\uB9AC + \uC2A4\uD2F0\uCEE4 + \uBCFC\uD39C\uC774 \uC788\uC73C\uBA74 \uCE74\uD398 \uC790\uB9AC\uC5D0 \uC549\uC544 \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694</p></div>`}o.innerHTML=`<div class="mhead"><div><b>\uC218\uC9D1\uC218\uC9D1 \uC18C\uD488\uC0F5</b><span>${d?"\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uACE0 \uACC4\uC0B0\uB300\uC5D0\uC11C \uACC4\uC0B0\uD574\uC694":"\uB0B4\uAC00 \uC0B0 \uBB3C\uAC74"}</span></div><button class="x" data-act="close" aria-label="\uB2EB\uAE30">\u2715</button></div>${z}${L}`}function P(I){g=I||g,b(),o.hidden=!1,o.offsetWidth,o.classList.add("on")}function S(){o.classList.remove("on"),setTimeout(()=>{o.classList.contains("on")||(o.hidden=!0)},250)}o.addEventListener("click",I=>{let z=I.target.closest("button");if(!z)return;let L=z.dataset;if(L.act==="close")return S();if(L.tab)return!d&&L.tab!=="mine"?void 0:(g=L.tab,b());if(L.cat)return v=+L.cat,b();if(L.add)return M()>=20?n("\uBC14\uAD6C\uB2C8\uAC00 \uAC00\uB4DD \uCC3C\uC5B4\uC694"):(m[L.add]=(m[L.add]||0)+1,T(),n(`\u{1F9FA} ${an[L.add].name} \uB2F4\uC558\uC5B4\uC694`),b());if(L.inc)return m[L.inc]++,T(),b();if(L.dec)return--m[L.dec]<=0&&delete m[L.dec],T(),b();if(L.act==="pay"){if(r&&!r.spend(_(),"\uC18C\uD488\uC0F5 \uACC4\uC0B0"))return b();for(let[w,U]of Object.entries(m)){Bn.items[w]=(Bn.items[w]||0)+U;let D=an[w].sheet;D&&hr[D].stickers.forEach((O,k)=>{Bn.stickers[D+":"+k]=(Bn.stickers[D+":"+k]||0)+U}),delete m[w]}ph(),T(),u&&(u.el.textContent="\uAC10\uC0AC\uD569\uB2C8\uB2E4! \uB610 \uB180\uB7EC \uC624\uC138\uC694 \u{1F380}",setTimeout(()=>u.el.textContent="\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}",5e3)),n("\u{1F4B3} \uACC4\uC0B0 \uC644\uB8CC! \uC0B0 \uBB3C\uAC74\uC740 \u{1F392} \uB0B4 \uBB3C\uAC74\uC5D0 \uC788\uC5B4\uC694"),g="mine",b()}}),l.addEventListener("click",I=>{E(),I.currentTarget.blur()}),c.addEventListener("click",I=>{P(M()?"cart":"browse"),I.currentTarget.blur()}),h.addEventListener("click",I=>{if(I.currentTarget.blur(),M()&&performance.now()-p>3e3)return p=performance.now(),h.textContent="\uD55C \uBC88 \uB354 \uB204\uB974\uBA74 \uB0B4\uB824\uB193\uC544\uC694",n("\uB2F4\uC740 \uC0C1\uD488\uC740 \uACC4\uC0B0\uD558\uC9C0 \uC54A\uC73C\uBA74 \uB0B4\uB824\uB193\uC544\uC694");x()}),addEventListener("keydown",I=>{I.code==="Escape"&&!o.hidden&&S()});let R=null;return{get open(){return!o.hidden},get shopping(){return d},openMine(){P("mine")},update(I,z){let L=s(I);if(l.hidden=d||!!z||!L,c.hidden=!d,h.hidden=!d,d){let U=`\u{1F9FA} \uC7A5\uBC14\uAD6C\uB2C8 ${M()}`;c.textContent!==U&&(c.textContent=U),performance.now()-p>3e3&&h.textContent!=="\uC1FC\uD551 \uADF8\uB9CC\uB450\uAE30"&&(h.textContent="\uC1FC\uD551 \uADF8\uB9CC\uB450\uAE30")}f.g.visible=!z,d&&!z&&(e.arms[1].rotation.x=-.95,e.arms[1].rotation.z=.12);let w=y();w!==R&&(R=w,!o.hidden&&g==="cart"&&b())}}}async function oa(i,e){let t=await new Promise(a=>i.toBlob(a,"image/jpeg",.92)),n=new File([t],e,{type:"image/jpeg"});if(matchMedia("(pointer:coarse)").matches&&navigator.canShare&&navigator.canShare({files:[n]}))try{return await navigator.share({files:[n],title:"\uC218\uC787\uD574\uD53C"}),"shared"}catch(a){if(a.name==="AbortError")return"cancel"}let r=document.createElement("a");return r.href=URL.createObjectURL(t),r.download=e,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(r.href),r.remove()},4e3),"downloaded"}var la=()=>{let i=new Date;return`${i.getFullYear()}.${String(i.getMonth()+1).padStart(2,"0")}.${String(i.getDate()).padStart(2,"0")}`};var ad='"Gamja Flower", "Poor Story", cursive',xh=6,OS={heart:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="500" height="100"><defs><pattern id="p" width="25" height="25" patternUnits="userSpaceOnUse">
    <path d="M12.5 19 C3 12 5 5 9 5 C11 5 12.5 7 12.5 8 C12.5 7 14 5 16 5 C20 5 22 12 12.5 19z" fill="#ff8fb7"/></pattern></defs>
    <path d="M4 0 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 V50 H246 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 V0z" fill="#ffd9e7" opacity=".88"/>
    <rect x="4" y="0" width="242" height="50" fill="url(#p)" opacity=".85"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="500" height="100"><defs><pattern id="p" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#eaf7df"/><rect width="8" height="16" fill="#a9db8a" opacity=".55"/><rect width="16" height="8" fill="#a9db8a" opacity=".55"/></pattern></defs>
    <path d="M4 0 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 l4 6 l-4 6 V50 H246 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 l-4 -6 l4 -6 V0z" fill="url(#p)" opacity=".9"/></svg>`},od=i=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(OS[i]),ur={page:0,pages:Array.from({length:xh},()=>[])};try{let i=JSON.parse(localStorage.getItem("sh-diary"));i&&i.pages&&(ur=i)}catch{}var gh=()=>{try{return localStorage.setItem("sh-diary",JSON.stringify(ur)),!0}catch{return!1}};function x0({showToast:i}){let t=(F=>document.getElementById(F))("diary");t.innerHTML=`
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
    </div></div>`;let n=t.querySelector(".dpage"),s=t.querySelector(".dsel"),r=t.querySelector(".dinput"),a=r.querySelector("input"),o=t.querySelector(".dtabs"),l=t.querySelector(".dlist"),c=t.querySelector(".dfile"),h=t.querySelector(".dcrop"),u=h.querySelector(".dview"),f=u.querySelector("img"),d=h.querySelector(".dzoom"),g="stk",v=null,p=null,m=null,M=()=>ur.pages[ur.page];function _(){t.querySelector(".pg").textContent=`${ur.page+1} / ${xh}`;let F=n.clientWidth;n.innerHTML=M().map((B,$)=>{let ee=`left:${B.x*100}%;top:${B.y*100}%;transform:translate(-50%,-50%) rotate(${B.r}deg)`;if(B.t==="x")return`<div class="de dt ${p===$?"on":""}" data-i="${$}" style="${ee};color:${B.color};font-size:${B.s*F}px;max-width:${.84*F}px">${B.text.replace(/[<&]/g,V=>V==="<"?"&lt;":"&amp;")}</div>`;let Z=B.t==="i"?B.src:B.t==="s"?gi(...B.k.split(":").map((V,ne)=>ne?+V:V)):od(B.k);return`<img class="de${B.t==="i"?" dph":""} ${p===$?"on":""}" data-i="${$}" src="${Z}" style="${ee};width:${B.s*F}px" draggable="false" alt="">`}).join(""),s.hidden=p===null}function y(){let F=Object.keys(an).filter($=>an[$].ink&&mh($)),B=Object.keys(an).filter($=>an[$].tape&&mh($));if(!v&&F.length&&(v=F[0]),o.innerHTML=[["stk","\u{1F31F} \uC2A4\uD2F0\uCEE4"],["photo","\u{1F4F7} \uC0AC\uC9C4"],["pen","\u270F\uFE0F \uBCFC\uD39C"],["tape","\u{1F380} \uD14C\uC774\uD504"]].map(([$,ee])=>`<button class="${g===$?"on":""}" data-tab="${$}">${ee}</button>`).join(""),g==="stk"){let $=Object.entries(Bn.stickers).filter(([,ee])=>ee>0);l.innerHTML=$.length?$.map(([ee,Z])=>{let[V,ne]=ee.split(":");return`<button class="dst" data-stk="${ee}"><img src="${gi(V,+ne)}" alt=""><i>${Z}</i></button>`}).join(""):"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uC2A4\uD2F0\uCEE4\uB97C \uC0AC \uC624\uBA74 \uC5EC\uAE30\uC11C \uB5BC\uC5B4 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694 \u{1F31F}</p>"}else g==="photo"?l.innerHTML='<button class="dpen" data-pick="1">\u{1F5BC}\uFE0F \uB0B4 \uAC24\uB7EC\uB9AC\uC5D0\uC11C \uC0AC\uC9C4 \uACE0\uB974\uAE30</button><p class="tip">\uACE0\uB978 \uC0AC\uC9C4\uC740 \uC798\uB77C\uC11C \uD06C\uAE30\uB97C \uB9DE\uCD98 \uB4A4 \uBD99\uC5EC\uC694</p>':g==="pen"?l.innerHTML=F.length?F.map($=>`<button class="dpen ${v===$?"on":""}" data-pen="${$}"><span style="background:${an[$].ink}"></span>${an[$].name}</button>`).join("")+'<p class="tip">\uB2E4\uC774\uC5B4\uB9AC \uBE48 \uACF3\uC744 \uD1A1 \uB204\uB974\uBA74 \uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694</p>':"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uBCFC\uD39C\uC744 \uC0AC \uC624\uBA74 \uC190\uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694 \u270F\uFE0F</p>":l.innerHTML=B.length?B.map($=>`<button class="dtape" data-tape="${an[$].tape}"><img src="${od(an[$].tape)}" alt=""></button>`).join(""):"<p>\uC18C\uD488\uC0F5\uC5D0\uC11C \uB9C8\uC2A4\uD0B9\uD14C\uC774\uD504\uB97C \uC0AC \uC624\uBA74 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694 \u{1F380}</p>"}let T=F=>{M().push(F),p=M().length-1,gh()||(M().pop(),p=null,i("\uB2E4\uC774\uC5B4\uB9AC \uC800\uC7A5 \uACF5\uAC04\uC774 \uAF49 \uCC3C\uC5B4\uC694. \uC0AC\uC9C4\uC744 \uBA87 \uC7A5 \uB5BC\uACE0 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694")),_()},E=null,x="1",b={s:1,x:0,y:0,base:1},P=()=>{let F=Math.min(300,innerWidth-80),B=x==="circle"?1:+x;return[F,F/B]};function S(){let[F,B]=P();u.style.width=F+"px",u.style.height=B+"px",u.classList.toggle("circle",x==="circle"),b.base=Math.max(F/E.width,B/E.height),R(),I()}function R(){let[F,B]=P(),$=b.base*b.s,ee=E.width*$,Z=E.height*$;b.x=Math.min(0,Math.max(F-ee,b.x)),b.y=Math.min(0,Math.max(B-Z,b.y))}function I(){let F=b.base*b.s;f.style.width=E.width*F+"px",f.style.transform=`translate(${b.x}px,${b.y}px)`}c.addEventListener("change",async()=>{let F=c.files&&c.files[0];if(F)try{let B=URL.createObjectURL(F),$=new Image;$.src=B,await $.decode(),E=$,f.src=B,x="1",b={s:1,x:0,y:0,base:1},d.value=1,h.querySelectorAll("[data-shape]").forEach(ne=>ne.classList.toggle("on",ne.dataset.shape===x)),h.hidden=!1,S();let[ee,Z]=P(),V=b.base;b.x=(ee-E.width*V)/2,b.y=(Z-E.height*V)/2,R(),I()}catch{i("\uC774 \uC0AC\uC9C4\uC740 \uC5F4 \uC218 \uC5C6\uC5B4\uC694. \uB2E4\uB978 \uC0AC\uC9C4\uC744 \uACE8\uB77C \uC8FC\uC138\uC694")}}),d.addEventListener("input",()=>{let[F,B]=P(),$=b.base*b.s;b.s=+d.value;let ee=b.base*b.s;b.x=F/2-(F/2-b.x)*ee/$,b.y=B/2-(B/2-b.y)*ee/$,R(),I()});let z=null;u.addEventListener("pointerdown",F=>{z={id:F.pointerId,x:F.clientX-b.x,y:F.clientY-b.y},u.setPointerCapture(F.pointerId),F.preventDefault()}),u.addEventListener("pointermove",F=>{!z||F.pointerId!==z.id||(b.x=F.clientX-z.x,b.y=F.clientY-z.y,R(),I())}),u.addEventListener("pointerup",()=>z=null),u.addEventListener("pointercancel",()=>z=null),u.addEventListener("wheel",F=>{F.preventDefault(),d.value=Math.min(4,Math.max(1,+d.value-F.deltaY*.002)),d.dispatchEvent(new Event("input"))},{passive:!1}),h.addEventListener("click",F=>{let B=F.target.closest("button");if(B){if(B.dataset.shape){x=B.dataset.shape,h.querySelectorAll("[data-shape]").forEach($=>$.classList.toggle("on",$===B)),S();return}if(B.dataset.crop==="cancel"){h.hidden=!0;return}if(B.dataset.crop==="ok"){let[$,ee]=P(),Z=b.base*b.s,V=x==="circle",ne=V?420:560,q=Math.round(ne*ee/$),J=Math.round(ne*.05),W=document.createElement("canvas");W.width=ne+J*2,W.height=q+J*2;let Q=W.getContext("2d");V?(Q.fillStyle="#fff",Q.beginPath(),Q.arc(W.width/2,W.height/2,W.width/2,0,7),Q.fill(),Q.save(),Q.beginPath(),Q.arc(W.width/2,W.height/2,ne/2,0,7),Q.clip()):(Q.fillStyle="#fff",Q.fillRect(0,0,W.width,W.height)),Q.drawImage(E,-b.x/Z,-b.y/Z,$/Z,ee/Z,J,J,ne,q),V&&Q.restore();let oe=V?W.toDataURL("image/png"):W.toDataURL("image/jpeg",.84);h.hidden=!0,T({t:"i",src:oe,x:.5,y:.45,s:x==="0.75"?.4:.48,r:Math.round((Math.random()-.5)*10)})}}}),o.addEventListener("click",F=>{let B=F.target.closest("[data-tab]");B&&(g=B.dataset.tab,r.hidden=!0,y())}),l.addEventListener("click",F=>{let B=F.target.closest("button");if(B)if(B.dataset.stk){let $=B.dataset.stk;if(!(Bn.stickers[$]>0))return;Bn.stickers[$]--,ph(),T({t:"s",k:$,x:.35+Math.random()*.3,y:.3+Math.random()*.4,s:.26,r:Math.round((Math.random()-.5)*24)}),y()}else B.dataset.pick?(c.value="",c.click()):B.dataset.pen?(v=B.dataset.pen,y()):B.dataset.tape&&T({t:"p",k:B.dataset.tape,x:.5,y:.2+Math.random()*.6,s:.55,r:Math.round((Math.random()-.5)*16)})});let L=null;n.addEventListener("pointerdown",F=>{let B=F.target.closest(".de"),$=n.getBoundingClientRect();if(B){p=+B.dataset.i;let ee=M()[p];L={id:F.pointerId,ox:ee.x-(F.clientX-$.left)/$.width,oy:ee.y-(F.clientY-$.top)/$.height,node:B},n.setPointerCapture(F.pointerId),s.hidden=!1,n.querySelectorAll(".de.on").forEach(Z=>Z!==B&&Z.classList.remove("on")),B.classList.add("on"),F.preventDefault();return}p=null,_(),g==="pen"&&v?(m={x:(F.clientX-$.left)/$.width,y:(F.clientY-$.top)/$.height},r.hidden=!1,a.value="",setTimeout(()=>a.focus(),30)):g==="pen"&&i("\uC18C\uD488\uC0F5\uC5D0\uC11C \uBCFC\uD39C\uC744 \uC0AC \uC624\uBA74 \uAE00\uC528\uB97C \uC4F8 \uC218 \uC788\uC5B4\uC694")}),n.addEventListener("pointermove",F=>{if(!L||F.pointerId!==L.id)return;let B=n.getBoundingClientRect(),$=M()[p];$.x=Math.min(1,Math.max(0,(F.clientX-B.left)/B.width+L.ox)),$.y=Math.min(1,Math.max(0,(F.clientY-B.top)/B.height+L.oy)),L.node.style.left=$.x*100+"%",L.node.style.top=$.y*100+"%"});let w=F=>{L&&F.pointerId===L.id&&(L=null,gh())};n.addEventListener("pointerup",w),n.addEventListener("pointercancel",w),r.addEventListener("submit",F=>{F.preventDefault();let B=a.value.trim();r.hidden=!0,a.blur(),!(!B||!m)&&T({t:"x",text:B,color:an[v].ink,x:m.x,y:m.y,s:.07,r:Math.round((Math.random()-.5)*8)})}),t.addEventListener("click",async F=>{let B=F.target.closest("[data-act]");if(!B)return;let $=B.dataset.act,ee=p!==null?M()[p]:null;if($==="close")return k();if($==="prev"||$==="next")return ur.page=(ur.page+($==="next"?1:xh-1))%xh,p=null,r.hidden=!0,gh(),_();if($==="save")return D();ee&&($==="rotl"?ee.r-=12:$==="rotr"?ee.r+=12:$==="big"?ee.s=Math.min(ee.t==="x"?.2:.9,ee.s*1.18):$==="small"?ee.s=Math.max(ee.t==="x"?.03:.08,ee.s/1.18):$==="del"&&(M().splice(p,1),ee.t==="s"&&(Bn.stickers[ee.k]=(Bn.stickers[ee.k]||0)+1,ph(),y()),p=null),gh(),_())});function U(F,B,$){F.fillStyle="#fffdf6",F.fillRect(0,0,B,$),F.fillStyle="#e9dcef";for(let ee=60;ee<$;ee+=36)for(let Z=90;Z<B-20;Z+=36)F.beginPath(),F.arc(Z,ee,2,0,7),F.fill();F.fillStyle="#f6e3ec",F.fillRect(0,0,54,$);for(let ee=40;ee<$;ee+=60)F.fillStyle="#d8cde6",F.beginPath(),F.arc(27,ee,9,0,7),F.fill()}async function D(){try{await document.fonts.load(`40px ${ad}`)}catch{}let F=900,B=1200,$=document.createElement("canvas");$.width=F,$.height=B;let ee=$.getContext("2d");U(ee,F,B);for(let V of M()){if(ee.save(),ee.translate(V.x*F,V.y*B),ee.rotate(V.r*Math.PI/180),V.t==="x"){ee.font=`${V.s*F}px ${ad}`,ee.fillStyle=V.color,ee.textAlign="center",ee.textBaseline="middle";let ne=[],q="";for(let W of V.text.split(/(\s+)/))q&&ee.measureText(q+W).width>F*.84?(ne.push(q.trim()),q=W.trimStart()):q+=W;ne.push(q.trim());let J=V.s*F*1.05;ne.forEach((W,Q)=>ee.fillText(W,0,(Q-(ne.length-1)/2)*J))}else{let ne=new Image;ne.src=V.t==="i"?V.src:V.t==="s"?gi(...V.k.split(":").map((W,Q)=>Q?+W:W)):od(V.k),await ne.decode().catch(()=>{});let q=V.s*F,J=q*(ne.naturalHeight/ne.naturalWidth||1);ee.drawImage(ne,-q/2,-J/2,q,J)}ee.restore()}ee.font=`28px ${ad}`,ee.fillStyle="#b9a6cf",ee.textAlign="right",ee.fillText(`\uC218\uC787\uD574\uD53C \uB2E4\uC774\uC5B4\uB9AC \xB7 ${la()}`,F-30,B-30);let Z=await oa($,`suithappy-diary-${Date.now()}.jpg`);i(Z==="downloaded"?"\u{1F4BE} \uB2E4\uC774\uC5B4\uB9AC\uB97C \uC774\uBBF8\uC9C0\uB85C \uC800\uC7A5\uD588\uC5B4\uC694":Z==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}function O(){if(!mh("diary"))return i("\u{1F4D2} \uC18C\uD488\uC0F5\uC5D0\uC11C \uB2E4\uC774\uC5B4\uB9AC \uC218\uCCA9\uC744 \uC0AC \uC624\uBA74 \uB2E4\uAFB8\uD560 \uC218 \uC788\uC5B4\uC694");t.hidden=!1,p=null,r.hidden=!0,y(),requestAnimationFrame(_)}function k(){t.hidden=!0,r.hidden=!0}return addEventListener("resize",()=>{t.hidden||_()}),addEventListener("keydown",F=>{F.code==="Escape"&&!t.hidden&&r.hidden&&k()}),{open:O,close:k,get isOpen(){return!t.hidden}}}var v0={v:{label:"\u270C\uFE0F \uBE0C\uC774",arm:[-2.75,.32],tilt:.12},heart:{label:"\u{1FAF6} \uD558\uD2B8",arm:[-3.05,-.55],tilt:-.1},chin:{label:"\u{1F338} \uAF43\uBC1B\uCE68",arm:[-2,-.62],tilt:.2}};function _0({hero:i,mirrors:e,camera:t,player:n,showToast:s,renderNow:r}){let a=D=>document.getElementById(D),o=a("photo-btn"),l=a("photo-bar"),c=a("shot");l.innerHTML=`<div class="poses">${Object.entries(v0).map(([D,O])=>`<button data-pose="${D}">${O.label}</button>`).join("")}</div>
    <div class="prow"><button class="pclose" data-act="exit">\uB2EB\uAE30</button><button class="shutter" data-act="shoot" aria-label="\uCC0D\uAE30"></button><span class="ptip">\uD3EC\uC988\uB97C \uACE0\uB974\uACE0 \uCC30\uCE75!</span></div>`;let h=D=>new Yt({color:D,roughness:.4}),u=new tt,f=new Ze(new kt(.07,.13,.014),h("#9f8af0"));u.add(f);let d=new Ze(new ot(.006,.006,.004,10),h("#3b2f4a"));d.rotation.x=Math.PI/2,d.position.set(-.018,.048,.008),u.add(d),u.position.set(0,-.27,.035),u.rotation.x=Math.PI/2;let g=new tt;g.position.set(.012,-.27,0);let v=h("#ffe3d0"),p=new tt;g.add(p);for(let D of[-1,1]){let O=new Ze(new qa(.011,.05,3,6),v);O.position.set(.012*D,-.04,0),O.rotation.z=.28*D,p.add(O)}let m=new tt,M=new Ts;M.moveTo(0,-.05),M.bezierCurveTo(-.07,0,-.04,.05,0,.025),M.bezierCurveTo(.04,.05,.07,0,0,-.05),m.add(new Ze(new Zs(M,{depth:.015,bevelEnabled:!1}),h("#ff6fa5"))),m.position.set(0,1.38,.05),m.scale.setScalar(1.8);let _=new tt;for(let D=0;D<5;D++){let O=new Ze(new Zt(.03,8,6),h(D%2?"#ffd1e3":"#fff3b0"));O.position.set(Math.cos(D*1.256)*.05,0,Math.sin(D*1.256)*.05),_.add(O)}_.position.set(0,.92,.2);let y=!1,T=null,E="v",x=!1,b=0,P=0,S=new H;function R(){for(let D of e){let O=D.c.x-n.x,k=n.z-D.c.z;if(O>.6&&O<2.6&&Math.abs(k)<.85)return D}return null}function I(D){E=D,l.querySelectorAll("[data-pose]").forEach(O=>O.classList.toggle("on",O.dataset.pose===D)),p.visible=D==="v",m.visible=D==="heart",_.visible=D==="chin"}function z(){if(T=R(),!!T){y=!0,n.face=Math.PI/2,P=t.fov,t.fov=64,t.updateProjectionMatrix();try{document.fonts.load('40px "Gamja Flower"')}catch{}i.arms[0].add(u),i.arms[1].add(g),i.root.add(m),i.root.add(_),I(E),l.hidden=!1,o.hidden=!0,document.body.classList.add("photo"),s("\u{1F4F8} \uAC70\uC6B8\uC0F7 \uBAA8\uB4DC! \uD3EC\uC988\uB97C \uACE0\uB974\uACE0 \uB3D9\uADF8\uB780 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC694")}}function L(){y=!1,l.hidden=!0,document.body.classList.remove("photo"),P&&(t.fov=P,t.updateProjectionMatrix()),i.arms[0].remove(u),i.arms[1].remove(g),i.root.remove(m),i.root.remove(_),i.head.rotation.z=0}l.addEventListener("click",D=>{let O=D.target.closest("button");O&&(O.dataset.pose?I(O.dataset.pose):O.dataset.act==="exit"?L():O.dataset.act==="shoot"&&(b=1,U.applyPose(performance.now()/1e3),i.root.updateMatrixWorld(!0),U.camera(),x=!0,U.afterRender(r())))}),o.addEventListener("click",D=>{z(),D.currentTarget.blur()});let w=null;c.addEventListener("click",async D=>{let O=D.target.closest("button");if(O&&(O.dataset.act==="again"&&(c.hidden=!0),O.dataset.act==="save"&&w)){let k=await oa(w,`suithappy-mirror-${Date.now()}.jpg`);s(k==="downloaded"?"\u{1F4BE} \uC0AC\uC9C4\uC744 \uC800\uC7A5\uD588\uC5B4\uC694":k==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}}),addEventListener("keydown",D=>{D.code==="Escape"&&y&&(c.hidden?L():c.hidden=!0)});let U={get active(){return y},update(D){o.hidden=y||!!D||!R()},applyPose(D){if(!y)return;let O=v0[E];i.arms[0].rotation.x=-1.95,i.arms[0].rotation.z=-.55,i.arms[1].rotation.x=O.arm[0],i.arms[1].rotation.z=O.arm[1],i.head.rotation.z=O.tilt,i.head.rotation.y=0,m.rotation.y=Math.sin(D*2)*.3,m.position.y=1.38+Math.sin(D*3)*.02},camera(){if(!y)return!1;let D=n.face,O=Math.sin(D),k=Math.cos(D),F=k,B=-O;return t.position.set(n.x+O*.42-F*.1,.78,n.z+k*.42-B*.1),t.lookAt(T.c.x,.72,n.z*.7+T.c.z*.3),!0},afterRender(D){let O=document.getElementById("flash");if(b>0&&(b=Math.max(0,b-.08),O.style.opacity=b),!x)return;x=!1;let k=900,F=1200,B=document.createElement("canvas");B.width=k,B.height=F;let $=B.getContext("2d"),ee=D.width,Z=D.height,V=3/4,ne=ee,q=ee/V;q>Z&&(q=Z,ne=Z*V),$.fillStyle="#fff",$.fillRect(0,0,k,F),$.drawImage(D,(ee-ne)/2,(Z-q)/2,ne,q,30,30,k-60,F-150),$.fillStyle="#ff8fb7",$.font='700 40px "Gamja Flower", cursive',$.textAlign="left",$.fillText("Soo it Happy \u{1F353} \uC218\uC9D1\uC218\uC9D1",40,F-62),$.fillStyle="#b9a6cf",$.font='30px "Gamja Flower", cursive',$.textAlign="right",$.fillText(la(),k-40,F-62),w=B,c.innerHTML=`<div class="shotcard"><img src="${B.toDataURL("image/jpeg",.85)}" alt="\uCC0D\uC740 \uAC70\uC6B8\uC0F7"><div class="srow"><button data-act="again">\uB2E4\uC2DC \uCC0D\uAE30</button><button class="go" data-act="save">\u{1F4F2} \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5</button></div></div>`,c.hidden=!1}};return U}var BS={grill:.4,parfait:1.6,order:.9,rhythm:.22,serving:.8},S0={mjp:"\uC774\uAE30\uBA74 1,500 \xB7 \uC838\uB3C4 200",spot:"\uCC3E\uC744 \uB54C\uB9C8\uB2E4 100 + \uB2E4 \uCC3E\uC73C\uBA74 \uCD5C\uB300 300",treasure:"\uBCC4\uC0AC\uD0D5 1\uAC1C\uB2F9 100 + \uB2E4 \uCC3E\uC73C\uBA74 \uBCF4\uB108\uC2A4",grill:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000",parfait:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000",order:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000",rhythm:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000",serving:"\uC810\uC218\uC5D0 \uB530\uB77C \uCD5C\uB300 2,000"},y0="sh-coins",M0="sh-coins-daily",Is=i=>i.toLocaleString("ko-KR");function b0({showToast:i}){let e=!1,t=3e3;try{let f=localStorage.getItem(y0);f===null?e=!0:t=Math.max(0,+f||0)}catch{e=!0}let n=document.getElementById("coin-pill"),s=()=>{try{localStorage.setItem(y0,t)}catch{}};function r(f){n&&(n.querySelector("b").textContent=Is(t),f&&(n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump")))}function a(f){if(!n)return;let d=n.getBoundingClientRect(),g=document.createElement("div");g.className="coin-float "+(f>0?"up":"down"),g.textContent=`${f>0?"+":"\u2212"}${Is(Math.abs(f))}`,Object.assign(g.style,{left:d.left+d.width/2+"px",top:d.bottom+4+"px"}),document.body.appendChild(g),setTimeout(()=>g.remove(),1300)}function o(f){return f=Math.round(f),f?(t=Math.max(0,t+f),s(),r(!0),a(f),f):0}let l=()=>{let f=new Date;return`${f.getFullYear()}-${f.getMonth()+1}-${f.getDate()}`};function c(f=500){if(t<f){let d=null;try{d=localStorage.getItem(M0)}catch{}if(d!==l()){try{localStorage.setItem(M0,l())}catch{}o(1e3),i(`\u{1FA99} \uCF54\uC778\uC774 \uBD80\uC871\uD574\uC11C \uC624\uB298\uC758 \uC751\uC6D0 \uCF54\uC778 ${Is(1e3)}\uC744 \uB4DC\uB838\uC5B4\uC694! \uD654\uC774\uD305 \u{1F4AA}`)}}return t<f?(i(`\u{1FA99} \uCF54\uC778\uC774 \uBD80\uC871\uD574\uC694 (\uCC38\uAC00\uBE44 ${Is(f)}) \xB7 \uB0B4\uC77C \uC751\uC6D0 \uCF54\uC778\uC744 \uB610 \uBC1B\uC744 \uC218 \uC788\uC5B4\uC694`),r(!0),!1):(o(-f),!0)}function h(f,d=""){return t<f?(i(`\u{1FA99} \uCF54\uC778\uC774 ${Is(f-t)} \uBAA8\uC790\uB77C\uC694${d?` (${d})`:""} \xB7 \uAC8C\uC784\uD558\uACE0 \uCF54\uC778\uC744 \uBAA8\uC544 \uC624\uC138\uC694! \u{1F3AE}`),r(!0),!1):(o(-f),!0)}function u(f,d,g=!1){let v=BS[f]||.5;return kS(Math.round(d*v/10)*10,g?0:100,2e3)}return r(!1),{get balance(){return t},add:o,pay:c,spend:h,fromScore:u,fmt:Is,welcome(){e&&(e=!1,s(),r(!0),setTimeout(()=>i(`\u{1FA99} \uCCAB \uBC29\uBB38 \uC120\uBB3C! \uAE30\uBCF8 \uCF54\uC778 ${Is(3e3)}\uC744 \uB4DC\uB824\uC694 \xB7 \uAC8C\uC784 \uD55C \uD310 \uCC38\uAC00\uBE44 ${Is(500)}`),3800))}}}function kS(i,e,t){return Math.max(e,Math.min(t,i))}var En=(i,e)=>i+Math.random()*(e-i),zS=i=>i[Math.floor(Math.random()*i.length)],vh=(i,e,t)=>Math.max(e,Math.min(t,i)),ri=(i,e,t)=>i+(e-i)*t,ai=(i,e,t)=>{let n=parseInt(i.slice(1),16),s=parseInt(e.slice(1),16),r=a=>Math.round(ri(n>>a&255,s>>a&255,vh(t,0,1)));return`rgb(${r(16)},${r(8)},${r(0)})`},fr=null,_h=()=>{if(!fr)try{fr=new(window.AudioContext||window.webkitAudioContext)}catch{}return fr&&fr.state==="suspended"&&fr.resume(),fr};function Ln(i,e=.12,t="triangle",n=.12,s=0){let r=_h();if(!r)return;let a=r.currentTime+s,o=r.createOscillator(),l=r.createGain();o.type=t,o.frequency.setValueAtTime(i,a),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l).connect(r.destination),o.start(a),o.stop(a+e+.02)}function HS(i=.05,e=.08,t=0,n=6e3){let s=_h();if(!s)return;let r=s.currentTime+t,a=Math.floor(s.sampleRate*i),o=s.createBuffer(1,a,s.sampleRate),l=o.getChannelData(0);for(let f=0;f<a;f++)l[f]=(Math.random()*2-1)*(1-f/a);let c=s.createBufferSource(),h=s.createBiquadFilter(),u=s.createGain();h.type="highpass",h.frequency.value=n,u.gain.value=e,c.buffer=o,c.connect(h).connect(u).connect(s.destination),c.start(r)}var wn={good:()=>{Ln(880,.1),Ln(1320,.12,"triangle",.1,.06)},bad:()=>Ln(180,.2,"sawtooth",.08),pop:()=>Ln(660,.08,"sine",.12),win:()=>[523,659,784,1047].forEach((i,e)=>Ln(i,.18,"triangle",.12,e*.09))};function Rt(i,e,t,n,s,r){i.beginPath(),i.roundRect(e,t,n,s,r)}function as(i,e,t,n,s){i.font=`${s}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(e,t,n)}function $t(i,e,t,n,s=16,r="#4a3f66",a=800,o="center"){i.font=`${a} ${s}px "Malgun Gothic","Apple SD Gothic Neo",sans-serif`,i.fillStyle=r,i.textAlign=o,i.textBaseline="middle",i.fillText(e,t,n)}function Go(i,e,t){for(let n of i)n.t+=t,n.y-=40*t,e.globalAlpha=vh(1-n.t/.9,0,1),$t(e,n.s,n.x,n.y,n.size||18,n.c||"#e0457b",900);e.globalAlpha=1;for(let n=i.length-1;n>=0;n--)i[n].t>.9&&i.splice(n,1)}function ld(i,e,t,n=360/2,s=112){let r=t*22+14;Rt(i,n-r/2,s-13,r,26,13),i.fillStyle="#ffffffd0",i.fill();for(let a=0;a<t;a++)i.globalAlpha=a<e?1:.28,as(i,a<e?"\u2764\uFE0F":"\u{1F90D}",n-r/2+18+a*22,s+1,16);i.globalAlpha=1}function yh(i,e,t){Rt(i,10,10,110,34,17),i.fillStyle="#ffffffcc",i.fill(),$t(i,`\u23F1 ${Math.max(0,Math.ceil(e))}\uCD08`,65,27,15),Rt(i,220,10,130,34,17),i.fillStyle="#ffffffcc",i.fill(),$t(i,`\uC810\uC218 ${t}`,285,27,15,"#e0457b")}function GS(){let i=[],e=[],t=[],n=30,s=0,r=0,a=0,o=0,l=0,c=3,h=!1,u=()=>{c=Math.max(0,c-1),c||(h=!0)},f=[{y:236,s:.84},{y:322,s:.97},{y:420,s:1.1}],d=[.68,.82],g=[.58,.95],v=1.25,p=S=>({side:0,done:[0,0],marks:[0,0],rate:En(.3,.46)*(1+a*.07),ph:Math.random()*6,flips:0,slide:0,lift:0,grades:[],wait:S,dead:0}),m=[p(0),p(2.2),p(4.4)],M=S=>S<.58?ai("#fbf6ec","#f3d9a8",S/.58):S<.82?ai("#f3d9a8","#e49a4c",(S-.58)/.24):S<.95?ai("#e49a4c","#a9572a",(S-.82)/.13):ai("#a9572a","#2a201c",(S-.95)/.3);function _(S){let R=m[S];if(!R||R.slide||R.wait>0||R.dead)return;let I=R.done[R.side],z=f[S],L;if(I<g[0])L=["\uB35C \uC775\uC5C8\uC5B4\uC694 \u{1F62F} \u{1F494}",-10,"#8a7bb8"],wn.bad(),o=0,u();else if(I>=d[0]&&I<=d[1]){o++,L=[o>1?`PERFECT \xD7${o}!`:"PERFECT \uB178\uB987\uB178\uB987!",100+(o-1)*20,"#e0457b"],wn.good();for(let w=0;w<10;w++)t.push({x:360/2+En(-90,90)*z.s,y:z.y,vx:En(-60,60),vy:En(-160,-60),t:0})}else I<=g[1]?(L=["\uC88B\uC544\uC694 \u{1F44D}",50,"#e39b4f"],wn.pop(),o=0):(L=["\uC557 \uD0D4\uC5B4\uC694\u2026 \u{1F525} \u{1F494}",-30,"#5a4a44"],wn.bad(),o=0,u());R.grades.push(L[1]),s=Math.max(0,s+L[1]),i.push({s:L[0],x:360/2,y:z.y-46*z.s,t:0,c:L[2]}),R.marks[R.side]=1,R.flips++,R.lift=1,R.flips>=2?(R.slide=.001,r++,a++,R.grades.every(w=>w>=100)&&(s+=80,i.push({s:"\uC644\uBCBD\uD55C \uB5A1\uAF2C\uCE58! +80",x:360/2,y:z.y-20,t:0,size:19}),wn.win())):R.side=1}let y=S=>{let R=0,I=1e9;return f.forEach((z,L)=>{let w=Math.abs(z.y-S);w<I&&(I=w,R=L)}),R},T=190,E=470,x=S=>ri(78,8,(S-T)/(E-T)),b=S=>360-x(S);function P(S,R,I,z,L){let w=S.createLinearGradient(0,R,0,R+I);return w.addColorStop(0,ai("#ffffff","#fbf6ec",.5)),w.addColorStop(.18,M(z)),w.addColorStop(.62,M((z+L)/2)),w.addColorStop(1,M(L)),w}return{title:"\u{1F361} \uB5A1\uAF2C\uCE58 \uAD7D\uAE30",desc:"\uC22F\uBD88 \uC704 <b>\uAF2C\uCE58 3\uAC1C</b>\uAC00 \uB3D9\uC2DC\uC5D0 \uC775\uC5B4\uC694!<br>\uB5A1\uC774 <b>\uB178\uB987\uB178\uB987</b>(\uAC8C\uC774\uC9C0 \uCD08\uB85D)\uD560 \uB54C \uADF8 \uAF2C\uCE58\uB97C \uB20C\uB7EC \uB4A4\uC9D1\uC5B4\uC694.<br>\uAF2C\uCE58\uB9C8\uB2E4 \uC775\uB294 \uC18D\uB3C4\uAC00 \uB2EC\uB77C\uC694 \xB7 \uC624\uB798 \uB450\uBA74 \uC22F\uC774 \uB3FC\uC694 \u{1F525}<br>\uC5F0\uC18D PERFECT\uBA74 \uCF64\uBCF4 \uBCF4\uB108\uC2A4! (\uD0A4\uBCF4\uB4DC 1\xB72\xB73)<br>\u2764\uFE0F <b>3\uBC88 \uC2E4\uC218</b>(\uB35C \uC775\uD798\xB7\uD0DC\uC6C0\xB7\uC22F)\uD558\uBA74 \uAC8C\uC784 \uC624\uBC84!",buttons:[{label:"\u2460 \uB4A4\uCABD",act:()=>_(0)},{label:"\u2461 \uAC00\uC6B4\uB370",act:()=>_(1)},{label:"\u2462 \uC55E\uCABD",act:()=>_(2)}],key(S){(S==="Digit1"||S==="Numpad1")&&_(0),(S==="Digit2"||S==="Numpad2")&&_(1),(S==="Digit3"||S==="Numpad3")&&_(2)},tapAt(S,R){R>T-50&&R<E+20&&_(y(R))},update(S){return n-=S,m.forEach((R,I)=>{if(R.wait>0){R.wait-=S;return}if(R.slide){R.slide+=S*1.8,R.slide>1&&(m[I]=p(En(.4,1.1)));return}if(R.dead){R.dead+=S,R.dead>1.2&&(m[I]=p(En(.5,1)));return}R.ph+=S;let z=1+Math.sin(R.ph*1.7)*.22+Math.sin(R.ph*4.3+I)*.1;R.done[R.side]=Math.min(1.5,R.done[R.side]+R.rate*z*S),R.done[R.side]>.9&&Math.random()<S*6&&e.push({x:360/2+En(-100,100)*f[I].s,y:f[I].y-10,t:0,r:En(6,12),dark:R.done[R.side]>1}),R.done[R.side]>=v&&(R.dead=.001,l++,o=0,u(),s=Math.max(0,s-50),wn.bad(),i.push({s:"\uC22F\uC774 \uB410\uC5B4\uC694\u2026 -50 \u{1F494}",x:360/2,y:f[I].y-40,t:0,c:"#5a4a44"})),R.lift=Math.max(0,R.lift-S*3.5)}),Math.random()<S*2&&e.push({x:En(40,320),y:450,t:0,r:En(5,9),dark:!1}),h?{score:s,over:!0,msg:`\uC2E4\uC218 3\uBC88! \uB5A1\uAF2C\uCE58 ${r}\uAC1C\uAE4C\uC9C0 \uAD6C\uC6E0\uC5B4\uC694${l?` (\uC22F ${l}\uAC1C \u{1F525})`:""}`}:n<=0?{score:s,msg:`\uB5A1\uAF2C\uCE58 ${r}\uAC1C \uC644\uC131!${l?` (\uC22F ${l}\uAC1C \u{1F525})`:""}`}:null},draw(S,R,I){let z=S.createLinearGradient(0,0,0,560);z.addColorStop(0,"#ffe9dc"),z.addColorStop(.32,"#ffd7c4"),z.addColorStop(1,"#c98f7a"),S.fillStyle=z,S.fillRect(0,0,360,560);for(let w=0;w<6;w++)S.fillStyle=w%2?"#ff8fb0":"#fff",S.beginPath(),S.moveTo(w*60,52),S.lineTo(w*60+60,52),S.lineTo(w*60+60,78),S.quadraticCurveTo(w*60+30,96,w*60,78),S.fill();yh(S,n,s),o>1&&(Rt(S,360/2-52,12,104,30,15),S.fillStyle="#e0457b",S.fill(),$t(S,`\u{1F525} \uCF64\uBCF4 ${o}`,360/2,27,14,"#fff",900)),ld(S,c,3,360/2,122),S.fillStyle="#3a2b2e",S.beginPath(),S.moveTo(x(T)-10,T-14),S.lineTo(b(T)+10,T-14),S.lineTo(b(E)+12,E+8),S.lineTo(x(E)-12,E+8),S.fill();let L=S.createLinearGradient(0,E,0,E+60);L.addColorStop(0,"#6d5a5e"),L.addColorStop(1,"#2d2224"),S.fillStyle=L,Rt(S,x(E)-12,E+6,b(E)-x(E)+24,54,8),S.fill(),S.fillStyle="#ffffff22",S.fillRect(x(E)-4,E+14,b(E)-x(E)+8,3);for(let w=0;w<26;w++){let U=T+12+w*37%250,D=ri(x(U)+14,b(U)-14,w*53%100/100),O=ri(8,15,(U-T)/(E-T)),k=.55+Math.sin(I*3+w*1.7)*.25,F=S.createRadialGradient(D,U,0,D,U,O*1.8);F.addColorStop(0,`rgba(255,${150+60*k|0},70,${k})`),F.addColorStop(1,"rgba(255,90,40,0)"),S.fillStyle=F,S.beginPath(),S.arc(D,U,O*1.8,0,7),S.fill()}for(let w=0;w<=14;w++){let U=w/14,D=ri(T,E,U*(.75+.25*U)),O=ri(2.2,5,U);S.strokeStyle="rgba(0,0,0,0.45)",S.lineWidth=O,S.beginPath(),S.moveTo(x(D),D+O*.6),S.lineTo(b(D),D+O*.6),S.stroke(),S.strokeStyle="#9d9298",S.lineWidth=O,S.beginPath(),S.moveTo(x(D),D),S.lineTo(b(D),D),S.stroke(),S.strokeStyle="#efe6ea",S.lineWidth=O*.3,S.beginPath(),S.moveTo(x(D)+4,D-O*.22),S.lineTo(b(D)-4,D-O*.22),S.stroke()}S.strokeStyle="#5b4a4f",S.lineWidth=7,S.beginPath(),S.moveTo(x(T)-6,T-8),S.lineTo(b(T)+6,T-8),S.lineTo(b(E)+8,E+4),S.lineTo(x(E)-8,E+4),S.closePath(),S.stroke(),m.forEach((w,U)=>{let D=f[U],O=D.s,k=w.slide?ri(360/2,620,w.slide*w.slide):360/2;if(w.wait>0){$t(S,"\u2026",360/2,D.y,16*O,"#ffffff88");return}let F=Math.sin(w.lift*Math.PI)*34*O,B=D.y-F-(w.dead?w.dead*30:0);S.globalAlpha=w.dead?Math.max(0,1-w.dead):1,S.fillStyle="rgba(0,0,0,0.35)",S.beginPath(),S.ellipse(k,D.y+16*O,125*O,9*O,0,0,7),S.fill(),S.strokeStyle="#e2bd86",S.lineWidth=6*O,S.lineCap="round",S.beginPath(),S.moveTo(k-160*O,B+4*O),S.lineTo(k+150*O,B+4*O),S.stroke(),S.fillStyle="#c99a5e",Rt(S,k-178*O,B-3*O,26*O,14*O,4),S.fill();let $=w.done[w.side],ee=w.dead?1.5:w.flips?w.done[0]:0,Z=w.dead?1.5:w.slide?w.done[1]:$;for(let V=0;V<4;V++){let ne=k-102*O+V*68*O,q=56*O,J=36*O,W=B-J/2;if(S.fillStyle=P(S,W,J,ee,Z),Rt(S,ne-q/2,W,q,J,14*O),S.fill(),w.marks[0]||w.slide){S.strokeStyle="rgba(70,35,20,0.55)",S.lineWidth=3*O;for(let Q=-1;Q<=1;Q++)S.beginPath(),S.moveTo(ne+Q*14*O-6*O,W+8*O),S.lineTo(ne+Q*14*O+6*O,W+J-8*O),S.stroke()}w.slide&&(S.fillStyle="rgba(210,50,40,0.85)",Rt(S,ne-q/2+3,W+3,q-6,J*.55,10*O),S.fill(),S.fillStyle="#ffffff99",Rt(S,ne-q/2+8*O,W+6*O,14*O,5*O,3),S.fill()),S.fillStyle="#ffffff66",Rt(S,ne-q/2+7*O,W+5*O,16*O,6*O,3),S.fill()}if(S.globalAlpha=1,!w.slide&&!w.dead){let V=k-70*O,ne=B-40*O,q=140*O,J=9*O;Rt(S,V-3,ne-3,q+6,J+6,7),S.fillStyle="#ffffffd9",S.fill();let W=(Q,oe,ie)=>{S.fillStyle=ie,S.fillRect(V+q*Q/v,ne,q*(oe-Q)/v,J)};W(0,g[0],"#eee4ea"),W(g[0],d[0],"#ffe08a"),W(d[0],d[1],"#7fdc7a"),W(d[1],g[1],"#ffe08a"),W(g[1],v,"#e6a0a0"),S.fillStyle="#4a3f66",S.fillRect(V+q*Math.min($,v)/v-2,ne-4,4,J+8),Rt(S,V-26*O,ne-4*O,18*O,18*O,9*O),S.fillStyle="#e0457b",S.fill(),$t(S,`${U+1}`,V-17*O,ne+5*O,12*O,"#fff",900),$t(S,w.side?"\uB4B7\uBA74":"\uC55E\uBA74",V+q+20*O,ne+J/2,11*O,"#fff",800)}});for(let w=e.length-1;w>=0;w--){let U=e[w];U.t+=R,U.y-=34*R,U.x+=Math.sin(U.t*3+w)*10*R,U.r+=10*R,S.globalAlpha=Math.max(0,.32*(1-U.t/1.6)),S.fillStyle=U.dark?"#5a4f52":"#ffffff",S.beginPath(),S.arc(U.x,U.y,U.r,0,7),S.fill(),U.t>1.6&&e.splice(w,1)}for(let w=t.length-1;w>=0;w--){let U=t[w];U.t+=R,U.x+=U.vx*R,U.y+=U.vy*R,U.vy+=300*R,S.globalAlpha=Math.max(0,1-U.t/.7),S.fillStyle="#ffd36b",S.beginPath(),S.arc(U.x,U.y,2.5,0,7),S.fill(),U.t>.7&&t.splice(w,1)}S.globalAlpha=1,$t(S,"\uC775\uC740 \uAF2C\uCE58\uB97C \uC9C1\uC811 \uB204\uB974\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC73C\uB85C \uB4A4\uC9D1\uC5B4\uC694",360/2,540,12,"#fff",700),Go(i,S,R)}}}function VS(){let i=[["\uC0DD\uD06C\uB9BC","#fffaf3"],["\uB538\uAE30","#f58aa6"],["\uCD08\uCF54","#8a5638"],["\uB179\uCC28","#a5d07f"],["\uCF58\uD50C\uB808\uC774\uD06C","#e9b860"],["\uBC14\uB2D0\uB77C","#fff0c2"],["\uBE14\uB8E8\uBCA0\uB9AC","#8f88dc"],["\uB9DD\uACE0","#ffc552"],["\uCFE0\uD0A4","#c49a6c"]],e=[],t=[],n=45,s=0,r=0,a=0,o=null,l=0,c=3,h=24,u=455,f=150,d=175,g=[{x:360/2,w:f,y:u,c:"#ffffff"}],v=null,p=()=>g[g.length-1];function m(){let y=p(),[T,E]=i[l%i.length];l++;let x=l%2?1:-1;v={name:T,c:E,w:y.w,x:360/2-x*d,dir:x,y:y.y-h,sp:120+g.length*9,drop:0}}m();function M(){if(!v||o)return;let y=p(),T=v.x-y.x,E=y.w-Math.abs(T);if(E<=3){if(t.push({x:v.x,y:v.y,w:v.w,c:v.c,vx:Math.sign(T||1)*70,vy:0,r:0}),r=0,wn.bad(),c--,c<=0){v=null,o={t:0},e.push({s:"\uC557, \uBE57\uB098\uAC14\uC5B4\uC694! \u{1F635}",x:360/2,y:230,t:0,size:21});return}e.push({s:`\uBE57\uB098\uAC14\uC5B4\uC694! \u{1F494} \uB0A8\uC740 \uAE30\uD68C ${c}`,x:360/2,y:230,t:0,size:18,c:"#8a7bb8"}),l--,m();return}let x,b;if(Math.abs(T)<7){r++,x=y.x,b=Math.min(f,y.w+(r>=3?8:0));let P=25+r*5;s+=P,wn.good(),e.push({s:r>1?`PERFECT \xD7${r} +${P}`:`PERFECT +${P}`,x:360/2,y:v.y-34+a,t:0,c:"#e0457b"})}else{r=0,b=E,x=y.x+T/2;let P=v.w-E,S=T>0?x+b/2+P/2:x-b/2-P/2;t.push({x:S,y:v.y,w:P,c:v.c,vx:Math.sign(T)*90,vy:-80,r:0}),s+=10,wn.pop(),e.push({s:`${v.name} +10`,x:360/2,y:v.y-34+a,t:0,c:"#7a6c99",size:15})}g.push({x,w:b,y:v.y,c:v.c,wob:1}),m()}function _(y,T,E,x,b,P=h){let S=Math.max(4,x*.14),R=y.createLinearGradient(T-x/2,0,T+x/2,0);R.addColorStop(0,ai(b,"#000000",.28)),R.addColorStop(.3,b),R.addColorStop(.55,ai(b,"#ffffff",.18)),R.addColorStop(1,ai(b,"#000000",.32)),y.fillStyle=R,y.beginPath(),y.moveTo(T-x/2,E),y.lineTo(T-x/2,E+P),y.ellipse(T,E+P,x/2,S,0,Math.PI,0,!0),y.lineTo(T+x/2,E),y.closePath(),y.fill(),y.fillStyle=ai(b,"#ffffff",.3),y.beginPath(),y.ellipse(T,E,x/2,S,0,0,7),y.fill(),y.strokeStyle=ai(b,"#000000",.12),y.lineWidth=1,y.stroke()}return{title:"\u{1F368} \uD30C\uB974\uD398 \uD0D1 \uC313\uAE30",desc:"\uC88C\uC6B0\uB85C \uBBF8\uB044\uB7EC\uC9C0\uB294 \uCE35\uC744 <b>\uD0ED</b>\uD574\uC11C \uB0B4\uB824\uB193\uC544\uC694.<br>\uC090\uC838\uB098\uC628 \uBD80\uBD84\uC740 <b>\uC798\uB824\uC11C</b> \uC810\uC810 \uC881\uC544\uC838\uC694! \uB531 \uB9DE\uCD94\uBA74 PERFECT \u2728<br>3\uBC88 \uC5F0\uC18D PERFECT\uBA74 \uB2E4\uC2DC \uC870\uAE08 \uB113\uC5B4\uC838\uC694. <b>3\uBC88 \uBE57\uB098\uAC00\uBA74</b> \uAC8C\uC784 \uC624\uBC84 \u2764\uFE0F\xD73 (45\uCD08)",buttons:[{label:"\u2B07\uFE0F \uB0B4\uB824\uB193\uAE30",act:M}],key(y){(y==="Space"||y==="Enter")&&M()},tap:M,update(y){n-=y,v&&(v.x+=v.dir*v.sp*y,v.x>360/2+d&&(v.x=360/2+d,v.dir=-1),v.x<360/2-d&&(v.x=360/2-d,v.dir=1));for(let x of t)x.vy+=1100*y,x.x+=x.vx*y,x.y+=x.vy*y,x.r+=y*3*Math.sign(x.vx);for(let x=t.length-1;x>=0;x--)t[x].y>u+400&&t.splice(x,1);let T=Math.max(0,u-p().y-230);a=ri(a,T,Math.min(1,y*4));for(let x of g)x.wob&&(x.wob=Math.max(0,x.wob-y*3));let E=g.length-1;return o&&(o.t+=y,o.t>1.3)?{score:s,over:!0,msg:`3\uBC88 \uBE57\uB098\uAC14\uC5B4\uC694! ${E}\uCE35 \uD30C\uB974\uD398\uB97C \uC313\uC558\uC5B4\uC694 \u{1F368}`}:n<=0?{score:s,msg:`${E}\uCE35 \uD30C\uB974\uD398 \uC644\uC131! \u{1F368}`}:null},draw(y,T,E){let x=y.createLinearGradient(0,0,0,560);x.addColorStop(0,"#e8f6ff"),x.addColorStop(1,"#ffe8f1"),y.fillStyle=x,y.fillRect(0,0,360,560),y.fillStyle="#ffffff70";for(let P=0;P<12;P++)y.beginPath(),y.arc(P*73%360,(P*131+a*.3)%560,18,0,7),y.fill();y.save(),y.translate(0,a);let b=360/2;y.fillStyle="#ffffffb8",y.strokeStyle="#c9e6f2",y.lineWidth=3,y.beginPath(),y.moveTo(b-f/2,u),y.lineTo(b+f/2,u),y.lineTo(b+28,u+62),y.lineTo(b-28,u+62),y.closePath(),y.fill(),y.stroke(),Rt(y,b-8,u+60,16,26,4),y.fill(),y.stroke(),y.beginPath(),y.ellipse(b,u+88,44,9,0,0,7),y.fill(),y.stroke(),y.fillStyle="#ffffff80",y.fillRect(b-f/2+14,u+6,6,40),y.beginPath(),y.ellipse(b,u,f/2,f*.14,0,0,7),y.fillStyle="#eef8fd",y.fill(),y.strokeStyle="#c9e6f2",y.stroke();for(let P=1;P<g.length;P++){let S=g[P],R=S.wob?Math.sin(S.wob*18)*3*S.wob:0;_(y,S.x+R,S.y,S.w,S.c)}if(!o&&g.length>1){let P=p();as(y,"\u{1F352}",P.x+P.w*.18,P.y-10,22)}for(let P of t)y.save(),y.translate(P.x,P.y+h/2),y.rotate(P.r),_(y,0,-h/2,P.w,P.c),y.restore();if(v){let P=p();y.globalAlpha=.18,y.fillStyle="#5a3d6e",y.beginPath(),y.ellipse(v.x,P.y,v.w/2,Math.max(4,v.w*.14),0,0,7),y.fill(),y.globalAlpha=1,_(y,v.x,v.y-6+Math.sin(E*6)*2,v.w,v.c)}y.restore(),yh(y,n,s),$t(y,`${g.length-1}\uCE35`,360/2,70,17,"#e0457b",900),ld(y,c,3,360/2,122),r>1&&$t(y,`\u{1F525} PERFECT \uCF64\uBCF4 ${r}`,360/2,94,13,"#e0457b",800),Go(e,y,T)}}}function WS(){let i=[["\u{1F9CA}","\uC5BC\uC74C","#e3f4ff"],["\u{1F95B}","\uC6B0\uC720","#fffaf0"],["\u{1F353}","\uB538\uAE30","#f58aa6"],["\u{1F36B}","\uCD08\uCF54","#8a5638"],["\u{1FAE7}","\uD0C4\uC0B0","#c4ecff"],["\u{1F366}","\uC544\uC774\uC2A4\uD06C\uB9BC","#fff3cf"],["\u{1F352}","\uCCB4\uB9AC","#d6304a"],["\u{1F375}","\uB179\uCC28","#a5d07f"],["\u{1F34C}","\uBC14\uB098\uB098","#f6e08a"],["\u2615","\uCEE4\uD53C","#a0703f"]],e=["\uD06C\uB9BC\uC18C\uB2E4","\uB538\uAE30\uC6B0\uC720","\uCD08\uCF54\uB77C\uB5BC","\uB179\uCC28\uB77C\uB5BC","\uBC14\uB098\uB098\uC6B0\uC720","\uBA54\uB860\uC18C\uB2E4","\uCCB4\uB9AC\uD30C\uB974\uD398","\uC544\uC778\uC288\uD398\uB108"],t=[],n=60,s=0,r=0,a=null,o=0,l=0,c="show",h=0,u=[],f=0,d=0,g=3,v={st:"away",t:3},p=()=>{let _=vh(3+Math.floor(o/2),3,6);a={name:zS(e),seq:Array.from({length:_},()=>Math.floor(Math.random()*i.length))},c="show",h=Math.max(1.8,3-o*.1),u=[],v.st!=="away"&&(v.st="away"),v.t=Math.max(v.t,h+En(.8,1.6))};p();function m(_){if(c!=="make")return;if(v.st==="look"){l++,r=0,s=Math.max(0,s-40),f=-1,d=1,wn.bad(),g--,t.push({s:"\uB4E4\uCF30\uB2E4! -40 \u{1F631} \u{1F494}",x:360/2,y:330,t:0,c:"#e0457b",size:22});return}u.push(_),wn.pop();let y=u.length-1;if(a.seq[y]!==_){r=0,c="result",f=-1,wn.bad(),g--,t.push({s:"\uC557, \uC21C\uC11C\uAC00 \uB2EC\uB77C\uC694! \u{1F623} \u{1F494}",x:360/2,y:330,t:0,c:"#8a7bb8"}),g>0&&setTimeout(p,900);return}if(u.length===a.seq.length){r++,o++;let T=Math.round(a.seq.length*20*(1+(r-1)*.25));s+=T,c="result",f=1,wn.good(),t.push({s:r>1?`\uCF64\uBCF4 ${r}! +${T}`:`\uC644\uBCBD\uD574\uC694! +${T}`,x:360/2,y:330,t:0,size:20}),setTimeout(p,800)}}function M(_,y,T,E,x){Rt(_,y-34,T+26,68,70,22),_.fillStyle="#f7f2ea",_.fill(),Rt(_,y-26,T+34,52,62,14),_.fillStyle="#7fc8a0",_.fill(),_.fillStyle="#ffe2cf",_.beginPath(),_.arc(y,T,30,0,7),_.fill(),_.fillStyle="#3f302f",E==="away"?(_.beginPath(),_.arc(y,T,31,0,7),_.fill(),_.beginPath(),_.ellipse(y+4,T+30+Math.sin(x*3)*2,9,18,.15,0,7),_.fill(),_.fillStyle="#ff9cc0",_.beginPath(),_.arc(y+2,T+12,5,0,7),_.fill()):E==="turn"?(_.beginPath(),_.arc(y,T,31,Math.PI*.35,Math.PI*1.75),_.fill(),_.beginPath(),_.arc(y-6,T-14,24,Math.PI,0),_.fill(),_.fillStyle="#3f302f",_.beginPath(),_.arc(y+14,T+2,3.2,0,7),_.fill()):(_.beginPath(),_.arc(y,T-6,30,Math.PI*1.02,Math.PI*1.98),_.fill(),_.fillRect(y-30,T-8,8,20),_.fillRect(y+22,T-8,8,20),_.fillStyle="#3f302f",_.beginPath(),_.arc(y-10,T+4,3.6,0,7),_.arc(y+10,T+4,3.6,0,7),_.fill(),_.strokeStyle="#c0606a",_.lineWidth=2,_.beginPath(),_.moveTo(y-6,T+16),_.lineTo(y+6,T+16),_.stroke(),_.fillStyle="#ffb3c6aa",_.beginPath(),_.arc(y-17,T+12,5,0,7),_.arc(y+17,T+12,5,0,7),_.fill());let b=E==="away"?"\u266A \uD765\uC5BC\uD765\uC5BC~":E==="turn"?"\uD760\u2026?":"\uBB50 \uD574\uC694? \u{1F440}";_.font='800 13px "Malgun Gothic",sans-serif';let P=_.measureText(b).width+20;Rt(_,y-P/2-6,T-66,P,26,13),_.fillStyle=E==="look"?"#ffe3ea":"#ffffff",_.fill(),$t(_,b,y-6,T-53,13,E==="look"?"#e0457b":"#7a6c99",800),E==="turn"&&$t(_,"\u2757",y+34,T-22,20)}return{title:"\u{1F92B} \uC0AC\uC7A5\uB2D8 \uBAB0\uB798 \uC8FC\uBB38\uBC1B\uAE30",desc:'\uC190\uB2D8 \uC8FC\uBB38\uC774 <b>3\uCD08</b> \uB3D9\uC548 \uBCF4\uC5EC\uC694. \uC0AC\uB77C\uC9C0\uBA74 \uC7AC\uB8CC\uB97C <b>\uC21C\uC11C\uB300\uB85C</b> \uACE8\uB77C\uC694.<br>\uB2E8, <b>\uC0AC\uC7A5\uB2D8\uC774 \uB3CC\uC544\uBCF4\uACE0 \uC788\uC744 \uB54C</b> \uB204\uB974\uBA74 \uB4E4\uCF1C\uC694! \u{1F631}<br>"\uD760\u2026?" \uD558\uBA74 \uC7A0\uAE50 \uBA48\uCD94\uAE30. \uC5F0\uC18D \uC815\uB2F5\uC774\uBA74 \uCF64\uBCF4 (60\uCD08)<br>\u2764\uFE0F \uC21C\uC11C \uD2C0\uB9AC\uAC70\uB098 \uB4E4\uD0A4\uAE30 <b>3\uBC88</b>\uC774\uBA74 \uAC8C\uC784 \uC624\uBC84!',buttons:i.map(([_,y],T)=>({label:`${_}<small>${y}</small>`,act:()=>m(T),cls:"ing"})),key(_){let y=parseInt(_.replace("Digit",""),10);isNaN(y)||m((y+9)%10)},update(_){if(n-=_,c==="show"&&(h-=_,h<=0&&(c="make")),v.t-=_,v.t<=0){let y=Math.min(1,o/8);v.st==="away"?(v.st="turn",v.t=ri(.75,.5,y)):v.st==="turn"?(v.st="look",v.t=En(1,1.8)):(v.st="away",v.t=En(ri(2.4,1.4,y),ri(3.8,2.6,y)))}return f*=.9,d=Math.max(0,d-_*3),g<=0?{score:s,over:!0,msg:`\uC2E4\uC218 3\uBC88! \uC0AC\uC7A5\uB2D8\uAED8 \uB531 \uAC78\uB838\uC5B4\uC694 \u{1F631} \xB7 \uC8FC\uBB38 ${o}\uAC1C \uC131\uACF5`}:n<=0?{score:s,msg:`\uC8FC\uBB38 ${o}\uAC1C \uC131\uACF5!${l?` (\uB4E4\uD0A8 \uD69F\uC218 ${l}\uBC88 \u{1F605})`:" \uD55C \uBC88\uB3C4 \uC548 \uB4E4\uCF30\uC5B4\uC694 \u{1F92B}"}`}:null},draw(_,y,T){_.save(),d&&_.translate(Math.sin(T*60)*6*d,0);let E=_.createLinearGradient(0,0,0,560);E.addColorStop(0,"#fff6e6"),E.addColorStop(1,"#f0f8e8"),_.fillStyle=E,_.fillRect(0,0,360,560),_.fillStyle="#e8d6c4",_.fillRect(0,196,360,8);for(let D=0;D<5;D++)as(_,["\u{1FAD9}","\u{1F36F}","\u{1F9C1}","\u{1FAD6}","\u{1F36A}"][D],30+D*36,184,20);M(_,294,120,v.st,T),Rt(_,16,54,210,118,16),_.fillStyle=f>.1?"#e3f8dc":f<-.1?"#ffe3ea":"#ffffff",_.fill(),_.strokeStyle="#f3d5e2",_.lineWidth=2.5,_.stroke(),$t(_,`\u{1F9FE} ${a.name}`,121,76,15);let x=a.seq.length,b=Math.min(36,186/x);a.seq.forEach((D,O)=>{let k=121+(O-(x-1)/2)*b;if(c==="show")as(_,i[D][0],k,116,26);else{let F=u[O];F!==void 0?as(_,i[F][0],k,116,26):(Rt(_,k-14,102,28,28,8),_.fillStyle="#f1e9ff",_.fill(),$t(_,"?",k,117,15,"#c6a6f0"))}}),c==="show"?(Rt(_,36,148,170,8,4),_.fillStyle="#f1e6ee",_.fill(),Rt(_,36,148,170*vh(h/3,0,1),8,4),_.fillStyle="#f48fb9",_.fill()):$t(_,"\uC21C\uC11C\uB300\uB85C \uB2F4\uC544\uC694",121,152,12,"#9a8cc4",700),_.fillStyle="#f6c9d8",_.fillRect(0,470,360,90),_.fillStyle="#ffffff70",_.fillRect(0,470,360,6);let P=360/2,S=260,R=470,I=64,z=46,L=a.seq.length,w=(R-S-30)/L,U=D=>ri(z,I,(R-D)/(R-S));u.forEach((D,O)=>{let k=R-6-O*w,F=k-w,B=i[D][2],$=_.createLinearGradient(P-I,0,P+I,0);if($.addColorStop(0,ai(B,"#000000",.2)),$.addColorStop(.4,B),$.addColorStop(1,ai(B,"#000000",.25)),_.fillStyle=$,_.beginPath(),_.moveTo(P-U(k)+4,k),_.lineTo(P-U(F)+4,F),_.lineTo(P+U(F)-4,F),_.lineTo(P+U(k)-4,k),_.closePath(),_.fill(),D===0)for(let ee=0;ee<3;ee++)Rt(_,P-22+ee*15,F+4,12,12,3),_.fillStyle="#ffffffcc",_.fill()}),_.strokeStyle="#bfe0ee",_.lineWidth=3,_.fillStyle="#ffffff40",_.beginPath(),_.moveTo(P-I,S),_.lineTo(P-z,R),_.lineTo(P+z,R),_.lineTo(P+I,S),_.fill(),_.stroke(),_.beginPath(),_.ellipse(P,S,I,10,0,0,7),_.stroke(),_.fillStyle="#ffffff90",_.fillRect(P-I+10,S+16,6,120),u.length===L&&f>.1&&(_.strokeStyle="#f48fb9",_.lineWidth=7,_.beginPath(),_.moveTo(P+18,S+40),_.lineTo(P+38,S-46),_.stroke()),r>1&&$t(_,`\u{1F525} \uCF64\uBCF4 ${r}`,360/2,240,16,"#e0457b"),_.restore(),v.st==="look"&&c==="make"&&(_.strokeStyle=`rgba(240,80,120,${.45+Math.sin(T*10)*.2})`,_.lineWidth=14,_.strokeRect(0,0,360,560),$t(_,"\uC9C0\uAE08 \uB204\uB974\uBA74 \uB4E4\uCF1C\uC694!",360/2,220,15,"#e0457b",900)),yh(_,n,s),ld(_,Math.max(0,g),3,121,190),Go(t,_,y)}}}function XS(){let i=[],e=40,t=0,n=0,s=0,r=0,a=0,o=3,l=0,c=En(.8,1.6),h=0,u=0,f=0,d=["\u{1F964}","\u2615","\u{1F9CB}"],g=v=>()=>{r=v};return{title:"\u2615 \uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14",desc:"\uC7C1\uBC18\uC774 \uAE30\uC6B8\uBA74 <b>\u25C0 \u25B6</b>\uB85C \uBC18\uB300\uCABD\uC744 \uB20C\uB7EC \uADE0\uD615\uC744 \uC7A1\uC544\uC694.<br>\uB108\uBB34 \uAE30\uC6B8\uBA74 \uCEF5\uC774 \uB5A8\uC5B4\uC838\uC694! \uD14C\uC774\uBE14\uAE4C\uC9C0 \uC3DF\uC9C0 \uC54A\uACE0 \uC62E\uAE30\uAE30 (40\uCD08)",buttons:[{label:"\u25C0 \uC67C\uCABD",down:g(-1),up:g(0)},{label:"\uC624\uB978\uCABD \u25B6",down:g(1),up:g(0)}],key(v,p){(v==="ArrowLeft"||v==="KeyA")&&(r=p?-1:r===-1?0:r),(v==="ArrowRight"||v==="KeyD")&&(r=p?1:r===1?0:r)},pointer(v,p){r=p?v<360/2?-1:1:0},keyUp:!0,update(v){if(e-=v,h+=v,f-=v,c-=v,c<=0&&(s+=En(-1.6,1.6)*(1+u*.15),c=En(.5,1.3)-u*.04),s+=(-n*1.2+r*2.6+Math.sin(h*9)*.25)*v*3,s*=Math.pow(.35,v),n+=s*v,Math.abs(n)>.48&&f<=0&&(o--,f=.6,s*=-.4,n*=.6,wn.bad(),i.push({s:"\uC557 \uC3DF\uC558\uC5B4\uC694! \u{1F4A6}",x:360/2,y:210,t:0,c:"#8a7bb8"}),o<=0&&(a=0,o=3,n=0,s=0,i.push({s:"\uB2E4\uC2DC \uCE74\uC6B4\uD130\uC5D0\uC11C \uBC1B\uC544 \uC640\uC694",x:360/2,y:240,t:0,c:"#7a6c99",size:15}))),a+=v*(.16+u*.01),a>=1){let p=o*100;t+=p,l+=o,wn.win(),i.push({s:`\uC11C\uBE59 \uC644\uB8CC! ${o}\uC794 +${p}`,x:360/2,y:200,t:0,size:20}),a=0,o=3,u++,n*=.3}return e<=0?{score:t,msg:`\uC74C\uB8CC ${l}\uC794 \uBC30\uB2EC \uC131\uACF5!`}:null},draw(v,p,m){v.fillStyle="#e6f6dd",v.fillRect(0,0,360,560),v.fillStyle="#f6dce6",v.fillRect(0,400,360,160);for(let _=0;_<8;_++)v.fillStyle="#ffffff88",v.fillRect(((_*70-a*400)%430+360+70)%430-35,400,34,160);yh(v,e,t),Rt(v,40,60,280,14,7),v.fillStyle="#ffffffaa",v.fill(),Rt(v,40,60,280*a,14,7),v.fillStyle="#9be08a",v.fill(),as(v,"\u{1F37D}\uFE0F",326,67,22),as(v,"\u{1F9D1}\u200D\u{1F373}",30,67,20),v.strokeStyle="#f1e6ee",v.lineWidth=10,v.beginPath(),v.arc(360/2,170,60,Math.PI*1.1,Math.PI*1.9),v.stroke(),v.strokeStyle="#9be08a",v.beginPath(),v.arc(360/2,170,60,Math.PI*1.5-.3,Math.PI*1.5+.3),v.stroke(),v.strokeStyle="#e0457b",v.lineWidth=4,v.beginPath(),v.moveTo(360/2,170),v.lineTo(360/2+Math.sin(n*1.6)*60,170-Math.cos(n*1.6)*60),v.stroke();let M=330+Math.abs(Math.sin(h*9))*6;v.fillStyle="#ffe6dc",v.beginPath(),v.arc(360/2,M-40,34,0,7),v.fill(),v.fillStyle="#4b3634",v.beginPath(),v.arc(360/2,M-50,34,Math.PI,0),v.fill(),v.fillStyle="#2b2125",v.beginPath(),v.arc(360/2-11,M-38,4,0,7),v.arc(360/2+11,M-38,4,0,7),v.fill(),Rt(v,360/2-26,M-6,52,64,16),v.fillStyle="#bfe2f1",v.fill(),v.save(),v.translate(360/2,M-90),v.rotate(n),Rt(v,-80,-6,160,12,6),v.fillStyle="#ffc2da",v.fill();for(let _=0;_<o;_++)as(v,d[_],-46+_*46,-28,34);v.restore(),$t(v,"\u25C0 \u25B6 \uB97C \uB204\uB974\uACE0 \uC788\uC73C\uBA74 \uADF8\uCABD\uC73C\uB85C \uC7C1\uBC18\uC744 \uB4E4\uC5B4 \uC62C\uB824\uC694",360/2,520,12,"#9a8cc4",700),Go(i,v,p)}}}function $S(){let t=.5357142857142857,n=30,s=462,r=96,a=360/2,o=1.6,l=[360/2-108,360/2,360/2+108],c=["\u{1F353}","\u{1F351}","\u{1F347}"],h=["#ff6f91","#ffb36b","#a98bff"],u=[[523,659,784],[587,698,880],[659,784,988]],f=[];for(let w=4;w*t*.5<n-1.5;w++){let U=w*t*.5;if(w%2===0?Math.random()<.85:Math.random()<.38){let D=Math.floor(Math.random()*3);f.push({t:U,lane:D,hit:0}),U>n*.45&&w%2===0&&Math.random()<.28&&f.push({t:U,lane:(D+1+Math.floor(Math.random()*2))%3,hit:0,chord:!0})}}let d=[],g=[],v=[0,0,0],p=-1.2,m=0,M=0,_=0,y=0,T=0,E=0,x=!1,b=0,P=0,S=w=>1/(1+w*3.2),R=w=>r+(s-r)*w,I=(w,U)=>a+(w-a)*U;function z(w){L(w),v[w]=1;let U=null,D=1;for(let O of f)if(!O.hit&&O.lane===w){let k=Math.abs(O.t-p);k<D&&(D=k,U=O)}!U||D>.14||(U.hit=D<=.06?2:1,M++,_=Math.max(_,M),g.push({lane:w,t:0,p:U.hit===2}),U.hit===2?(y++,m+=100+M*5,d.push({s:M>2?`PERFECT \xD7${M}`:"PERFECT",x:l[w],y:s-50,t:0,c:"#ffd27a"})):(T++,m+=50,d.push({s:"GOOD",x:l[w],y:s-50,t:0,c:"#9fe0cf"})))}let L=w=>Ln(u[w][1]*2,.08,"square",.05);return{title:"\u{1F3B5} \uB5A1\uAF2C\uCE58 \uC18C\uC2A4 \uB9AC\uB4EC\uAC8C\uC784",desc:"\uACFC\uC77C \uC18C\uC2A4\uAC00 <b>\uC800 \uBA40\uB9AC\uC11C \uB2E4\uAC00\uC640\uC694!</b> \uD310\uC815\uC120 \uB3D9\uADF8\uB77C\uBBF8\uC5D0 \uB2FF\uC744 \uB54C \uADF8 \uC904\uC744 \uD0ED.<br>\uD6C4\uBC18\uC5D4 <b>\uB450 \uC904 \uB3D9\uC2DC</b> \uB178\uD2B8\uB3C4 \uB098\uC640\uC694. PERFECT\uB97C \uC774\uC5B4 \uAC00\uBA74 \uB5A1\uAF2C\uCE58\uC5D0 \uC18C\uC2A4\uAC00 \uADF8\uB824\uC838\uC694<br>\u{1F494} <b>MISS 10\uBC88</b>\uC774\uBA74 \uAC8C\uC784 \uC624\uBC84! (30\uCD08, \uC18C\uB9AC \uCF1C \uC8FC\uC138\uC694 \u{1F50A})",buttons:[0,1,2].map(w=>({label:c[w],down:()=>z(w),cls:"lane"})),key(w,U){if(!U)return;let D={ArrowLeft:0,KeyA:0,KeyJ:0,ArrowDown:1,KeyS:1,KeyK:1,ArrowRight:2,KeyD:2,KeyL:2}[w];D!==void 0&&z(D)},pointer(w,U){U&&z(w<360/3?0:w<360*2/3?1:2)},update(w){if(!x){x=!0;let D=_h();P=D?D.currentTime+1.2:0}let U=fr;for(p=U&&P?U.currentTime-P:p+w;b*t*.5<p+.2&&b*t*.5<n;){let D=b*t*.5-p;D>-.05&&(b%2===0?Ln(90,.12,"sine",.25,Math.max(0,D)):HS(.04,.05,Math.max(0,D))),b++}for(let D of f)!D.hit&&p-D.t>.15&&(D.hit=-1,E++,M=0,d.push({s:"MISS",x:l[D.lane],y:s-34,t:0,c:"#b8acd8",size:15}));if(E>=10)return{score:m,over:!0,msg:`MISS 10\uBC88! \uC18C\uC2A4\uAC00 \uB2E4 \uD758\uB800\uC5B4\uC694 \u{1F4A6} \xB7 PERFECT ${y} \xB7 \uCD5C\uB300 \uCF64\uBCF4 ${_}`};for(let D=0;D<3;D++)v[D]=Math.max(0,v[D]-w*5);return p>=n?{score:m,msg:`PERFECT ${y} \xB7 GOOD ${T} \xB7 MISS ${E} \xB7 \uCD5C\uB300 \uCF64\uBCF4 ${_}`}:null},draw(w,U,D){let O=p>0?Math.pow(1-p/t%1,3):0,k=w.createLinearGradient(0,0,0,560);k.addColorStop(0,"#1f1840"),k.addColorStop(.5,"#3a2a66"),k.addColorStop(1,"#6b4a8a"),w.fillStyle=k,w.fillRect(0,0,360,560);for(let V=0;V<4;V++){let ne=40+V*93,q=w.createRadialGradient(ne,0,0,ne,0,160);q.addColorStop(0,`rgba(${V%2?"255,150,200":"160,140,255"},${.18+O*.3})`),q.addColorStop(1,"rgba(0,0,0,0)"),w.fillStyle=q,w.fillRect(ne-160,0,320,200)}for(let V=0;V<18;V++)w.fillStyle=`rgba(255,255,255,${.3+.3*Math.sin(D*2+V)})`,w.fillRect(V*67%360,V*29%90,2,2);let F=S(1.35),B=(560-r)/(s-r),$=(V,ne,q)=>{w.fillStyle=q,w.beginPath(),w.moveTo(I(V,F),R(F)),w.lineTo(I(ne,F),R(F)),w.lineTo(I(ne,B),560),w.lineTo(I(V,B),560),w.closePath(),w.fill()};$(l[0]-58,l[2]+58,"#2a2150"),l.forEach((V,ne)=>$(V-50,V+50,v[ne]?`rgba(255,255,255,${.06+v[ne]*.18})`:"#ffffff0d"));for(let V=Math.floor(Math.max(0,p)/t);V<Math.floor(Math.max(0,p)/t)+6;V++){let ne=(V*t-p)/o;if(ne<0||ne>1.35)continue;let q=S(ne),J=R(q);w.strokeStyle=`rgba(255,210,122,${.25*q})`,w.lineWidth=1+q*2,w.beginPath(),w.moveTo(I(l[0]-58,q),J),w.lineTo(I(l[2]+58,q),J),w.stroke()}w.strokeStyle="#ffffff30",w.lineWidth=2,[l[0]-58,l[0]+54,l[1]+54,l[2]+58].forEach(V=>{w.beginPath(),w.moveTo(I(V,F),R(F)),w.lineTo(I(V,B),560),w.stroke()}),w.strokeStyle=`rgba(255,210,122,${.7+O*.3})`,w.lineWidth=4,w.beginPath(),w.moveTo(I(l[0]-58,1),s),w.lineTo(I(l[2]+58,1),s),w.stroke(),l.forEach((V,ne)=>{w.strokeStyle=h[ne],w.lineWidth=3+v[ne]*3,w.beginPath(),w.ellipse(V,s,34,13,0,0,7),w.stroke()});let ee=f.filter(V=>!V.hit).map(V=>({n:V,d:(V.t-p)/o})).filter(V=>V.d<1.35&&V.d>-.2).sort((V,ne)=>ne.d-V.d);for(let{n:V,d:ne}of ee){let q=S(Math.max(ne,-.15)),J=I(l[V.lane],q),W=R(q);w.fillStyle=`rgba(0,0,0,${.3*q})`,w.beginPath(),w.ellipse(J,W+4*q,26*q,9*q,0,0,7),w.fill(),V.chord&&(w.strokeStyle="#ffffffaa",w.lineWidth=2*q,w.beginPath(),w.arc(J,W-18*q,26*q,0,7),w.stroke()),as(w,c[V.lane],J,W-18*q,48*q)}for(let V=g.length-1;V>=0;V--){let ne=g[V];ne.t+=U;let q=ne.t/.4,J=l[ne.lane];w.globalAlpha=Math.max(0,1-q),w.strokeStyle=ne.p?"#ffd27a":"#9fe0cf",w.lineWidth=4,w.beginPath(),w.ellipse(J,s,34+q*40,13+q*15,0,0,7),w.stroke();for(let W=0;W<6;W++){let Q=W/6*Math.PI*2;w.fillStyle=h[ne.lane],w.beginPath(),w.arc(J+Math.cos(Q)*q*60,s-14+Math.sin(Q)*q*26-q*20,3.5,0,7),w.fill()}w.globalAlpha=1,ne.t>.4&&g.splice(V,1)}w.strokeStyle="#d9b07a",w.lineWidth=6,w.lineCap="round",w.beginPath(),w.moveTo(40,528),w.lineTo(320,528),w.stroke();for(let V=0;V<4;V++){let ne=w.createLinearGradient(0,508,0,548);ne.addColorStop(0,"#fbe3b8"),ne.addColorStop(1,"#d99a55"),Rt(w,62+V*62,508,54,40,12),w.fillStyle=ne,w.fill()}let Z=Math.min(1,y/30);w.strokeStyle="#d33a2c",w.lineWidth=5,w.beginPath();for(let V=0;V<=40*Z;V++)w.lineTo(66+V*6,514+V%2*26);w.stroke(),Rt(w,10,10,110,34,17),w.fillStyle="#ffffffcc",w.fill(),$t(w,`\u23F1 ${Math.max(0,Math.ceil(n-p))}\uCD08`,65,27,15),Rt(w,220,10,130,34,17),w.fillStyle="#ffffffcc",w.fill(),$t(w,`\uC810\uC218 ${m}`,285,27,15,"#e0457b"),Rt(w,10,50,110,26,13),w.fillStyle=E>=7?"#ffd0dccc":"#ffffffaa",w.fill(),$t(w,`\u{1F494} MISS ${E}/10`,65,63,12.5,E>=7?"#e0457b":"#4a3f66",900),M>1&&$t(w,`${M} COMBO`,360/2,70+O*-4,24+O*4,"#ffd27a",900),p<0&&$t(w,p<-.6?"\uC900\uBE44~":"\uC2DC\uC791!",360/2,260,34,"#fff",900),Go(d,w,U)}}}var qS={grill:GS,parfait:VS,order:WS,serving:XS,rhythm:$S},cd=[["grill","\u{1F361}","\uB5A1\uAF2C\uCE58 \uAD7D\uAE30","\uAF2C\uCE58 3\uAC1C \uB3D9\uC2DC\uC5D0 \uAD7D\uAE30"],["parfait","\u{1F368}","\uD30C\uB974\uD398 \uD0D1 \uC313\uAE30","\uB531 \uB9DE\uCDB0 \uB192\uC774 \uC313\uAE30"],["order","\u{1F92B}","\uC0AC\uC7A5\uB2D8 \uBAB0\uB798 \uC8FC\uBB38\uBC1B\uAE30","\uC678\uC6B0\uACE0\xB7\uB208\uCE58 \uBCF4\uAE30"],["serving","\u2615","\uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14","\uC9C4\uC9DC \uCE74\uD398\uC5D0\uC11C \uC74C\uB8CC \uBC30\uB2EC"],["rhythm","\u{1F3B5}","\uB5A1\uAF2C\uCE58 \uC18C\uC2A4 \uB9AC\uB4EC\uAC8C\uC784","3D \uB808\uC778 \uBC15\uC790 \uB9DE\uCD94\uAE30"]];function T0({showToast:i,coins:e}){let n=(m=>document.getElementById(m))("mini"),s=null,r=null,a=0,o=0,l=null,c=!1,h=m=>{try{return+localStorage.getItem("sh-best-"+m)||0}catch{return 0}},u=(m,M)=>{try{localStorage.setItem("sh-best-"+m,M)}catch{}};function f(m,M){r=m,l=M||null,c=!1,s=qS[m](),n.innerHTML=`<div class="mcard"><div class="ghead"><b>${s.title}</b><span class="mbest">\uCD5C\uACE0 ${h(r)}</span><button class="x" data-a="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="mstage"><canvas width="${360*2}" height="${560*2}"></canvas>
        <div class="mintro"><p>${s.desc}</p><button class="go" data-a="start">\u25B6 \uC2DC\uC791! <small class="fee">\u{1FA99} 500</small></button></div></div>
      <div class="mbtns">${s.buttons.map((_,y)=>`<button data-b="${y}" class="${_.cls||""}">${_.label}</button>`).join("")}</div></div>`,n.hidden=!1}function d(){if(e&&!e.pay())return;n.querySelector(".mintro").remove(),_h();let m=n.querySelector("canvas"),M=m.getContext("2d");M.setTransform(2,0,0,2,0,0);let _=0;o=performance.now();let y=T=>{if(!s)return;let E=Math.min(.05,(T-o)/1e3);o=T,_+=E;let x=s.update(E);if(s.draw(M,E,_),x&&!c)return g(x);a=requestAnimationFrame(y)};a=requestAnimationFrame(y)}function g(m){c=!0,cancelAnimationFrame(a);let M=h(r),_=m.score>M;_&&u(r,m.score);let y=e?e.add(e.fromScore(r,m.score,m.over)):0;wn.win();let T=document.createElement("div");T.className="mintro",T.innerHTML=`<h3>${m.over?"\u{1F4A5} \uAC8C\uC784 \uC624\uBC84!":_?"\u{1F389} \uCD5C\uACE0 \uAE30\uB85D!":"\uC218\uACE0\uD588\uC5B4\uC694! \u2728"}</h3><p class="mscore">${m.score}\uC810</p>${y?`<p class="mcoin">\u{1FA99} +${y.toLocaleString("ko-KR")} \uCF54\uC778 \uD68D\uB4DD!</p>`:""}<p>${m.msg}</p><p class="mprev">\uCD5C\uACE0 \uAE30\uB85D ${Math.max(M,m.score)}\uC810</p>
      <button class="go" data-a="again">\u{1F501} \uB2E4\uC2DC \uD558\uAE30 <small class="fee">\u{1FA99} 500</small></button><button class="gsub" data-a="close">${l?"\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30":"\uB2EB\uAE30"}</button>`,n.querySelector(".mstage").appendChild(T),n.querySelector(".mbest").textContent=`\uCD5C\uACE0 ${Math.max(M,m.score)}`}function v(){cancelAnimationFrame(a),s=null,n.hidden=!0,n.innerHTML="";let m=l;l=null,m&&m(c)}n.addEventListener("click",m=>{let M=m.target.closest("button");if(M){if(M.dataset.a==="start"&&d(),M.dataset.a==="close"&&v(),M.dataset.a==="again"){let _=l;l=null,f(r,_),d()}if(M.dataset.b!==void 0&&s){let _=s.buttons[+M.dataset.b];_.act&&_.act()}}}),n.addEventListener("pointerdown",m=>{let M=m.target.closest("[data-b]");if(M&&s){let x=s.buttons[+M.dataset.b];x.down&&(m.preventDefault(),x.down());return}let _=m.target.closest("canvas");if(!_||!s||n.querySelector(".mintro"))return;let y=_.getBoundingClientRect(),T=(m.clientX-y.left)*360/y.width,E=(m.clientY-y.top)*560/y.height;s.tapAt?s.tapAt(T,E):s.pointer?s.pointer(T,!0):s.tap&&s.tap()});let p=m=>{if(!s)return;let M=m.target.closest&&m.target.closest("[data-b]");if(M){let _=s.buttons[+M.dataset.b];_.up&&_.up()}else s.pointer&&s.pointer.length&&s.pointer(0,!1)};return n.addEventListener("pointerup",p),n.addEventListener("pointercancel",p),n.addEventListener("pointerleave",p),addEventListener("keydown",m=>{if(!(n.hidden||!s)){if(m.code==="Escape")return v();if(n.querySelector(".mintro")&&!c&&(m.code==="Space"||m.code==="Enter"))return m.preventDefault(),d();s.key&&(m.preventDefault(),s.key(m.code,!0))}}),addEventListener("keyup",m=>{!n.hidden&&s&&s.key&&s.keyUp&&s.key(m.code,!1)}),{open:f,get isOpen(){return!n.hidden},result(m,M,_){i(`${m} \xB7 ${M}\uC810 ${_||""}`)}}}var Mh={title:"\uBB35\uCC0C\uBE60 \uC2B9\uB9AC \uCFE0\uD3F0",benefit:"\uC18C\uD488 10% \uD560\uC778",note:"\uC624\uD504\uB77C\uC778 \uB9E4\uC7A5 \uACC4\uC0B0\uB300\uC5D0\uC11C \uC9C1\uC6D0\uC5D0\uAC8C \uBCF4\uC5EC \uC8FC\uC138\uC694",days:30},ca={muk:{emo:"\u270A",name:"\uBB35"},jji:{emo:"\u270C\uFE0F",name:"\uCC0C"},ppa:{emo:"\u{1F590}\uFE0F",name:"\uBE60"}},E0={muk:"jji",jji:"ppa",ppa:"muk"},w0=i=>i[Math.floor(Math.random()*i.length)],A0=i=>new Promise(e=>setTimeout(e,i));function R0({showToast:i,npcs:e,capture:t,views:n,minis:s,treasure:r,serving:a,coins:o}){let l=()=>!o||o.pay(),c=W=>o?o.add(W):0,h=W=>W?`<p class="mcoin">\u{1FA99} +${W.toLocaleString("ko-KR")} \uCF54\uC778 \uD68D\uB4DD!</p>`:"",u=W=>document.getElementById(W),f=e.find(W=>W.id==="shop"),d=e.find(W=>W.id==="cafe"),g=(W,Q=3500)=>{f&&(clearTimeout(g.t),f.el.textContent=W,g.t=setTimeout(()=>f.el.textContent="\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}",Q))},v=u("mjp"),p=null,m=!1;function M(){l()&&(p={me:0,boss:0,round:1,attacker:null,log:"\uAC00\uC704\uBC14\uC704\uBCF4\uB85C \uACF5\uACA9\uD560 \uC0AC\uB78C\uC744 \uC815\uD574\uC694!"},v.hidden=!1,y("?","?"),g("\uBB35\uCC0C\uBE60 \uD55C \uD310 \uD574\uC694! \uC0BC\uC138\uD310\uC774\uC5D0\uC694 \u270A\u270C\uFE0F\u{1F590}\uFE0F",5e3))}let _=()=>{v.hidden=!0,p=null};function y(W,Q,oe=!1){let ie=p.attacker==="me"?"\uB0B4\uAC00 \uACF5\uACA9 \uC911 \u{1F525}":p.attacker==="boss"?"\uC0AC\uC7A5\uB2D8\uC774 \uACF5\uACA9 \uC911 \u{1F525}":"\uAC00\uC704\uBC14\uC704\uBCF4!";v.innerHTML=`<div class="gcard">
      <div class="ghead"><b>\u270A \uC0AC\uC7A5\uB2D8\uACFC \uBB35\uCC0C\uBE60 \uC0BC\uC138\uD310</b><button class="x" data-g="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="gscore"><span>\uB098 <i>${p.me}</i></span><small>${p.round}\uD310\uC9F8 \xB7 2\uBC88 \uBA3C\uC800 \uC774\uAE30\uBA74 \uC2B9\uB9AC</small><span><i>${p.boss}</i> \uC0AC\uC7A5\uB2D8</span></div>
      <div class="garena ${oe?"shake":""}"><div><em>${W}</em><small>\uB098</small></div><b>VS</b><div><em>${Q}</em><small>\uC0AC\uC7A5\uB2D8</small></div></div>
      <p class="gturn">${ie}</p><p class="glog">${p.log}</p>${p.done?h(p.coins):""}
      ${p.done?p.done==="win"?`<div class="gcoupon"><img alt="\uCFE0\uD3F0" src="${b().toDataURL("image/png")}"><button class="go" data-g="coupon">\u{1F4F2} \uCFE0\uD3F0 \uC774\uBBF8\uC9C0 \uC800\uC7A5</button><button class="gsub" data-g="close">\uB2EB\uAE30</button></div>`:'<button class="go" data-g="again">\u{1F501} \uB2E4\uC2DC \uB3C4\uC804 <small class="fee">\u{1FA99} 500</small></button>':`<div class="ghands">${Object.entries(ca).map(([Ee,re])=>`<button data-h="${Ee}" ${m?"disabled":""}><em>${re.emo}</em>${re.name}</button>`).join("")}</div>`}
    </div>`}async function T(W){if(m||!p||p.done)return;m=!0;let Q=w0(Object.keys(ca));for(let Ee of["muk","jji","ppa"])p.log=p.attacker?`${ca[Ee].name}!`:["\uAC00\uC704","\uBC14\uC704","\uBCF4!"][Object.keys(ca).indexOf(Ee)],y("\u270A","\u270A",!0),await A0(260);let oe=ca[W],ie=ca[Q];if(!p.attacker)W===Q?p.log=`\uB458 \uB2E4 ${oe.name}! \uB2E4\uC2DC \uAC00\uC704\uBC14\uC704\uBCF4 \u{1F648}`:(p.attacker=E0[W]===Q?"me":"boss",p.log=p.attacker==="me"?"\uB0B4\uAC00 \uC774\uACBC\uC5B4\uC694! \uC774\uC81C \uB0B4\uAC00 \uACF5\uACA9, \uAC19\uC740 \uAC78 \uB0B4\uAC8C \uB9CC\uB4E4\uC5B4\uC694":"\uC0AC\uC7A5\uB2D8\uC774 \uC774\uACBC\uC5B4\uC694! \uC0AC\uC7A5\uB2D8 \uACF5\uACA9, \uB2E4\uB978 \uAC78 \uB0B4\uC57C \uBC84\uD168\uC694");else if(W===Q){let Ee=p.attacker==="me";if(Ee?p.me++:p.boss++,p.log=Ee?`\uB458 \uB2E4 ${oe.name}! \uB0B4\uAC00 \uC774\uBC88 \uD310 \uC2B9\uB9AC \u{1F389}`:`\uB458 \uB2E4 ${oe.name}! \uC0AC\uC7A5\uB2D8\uC774 \uC774\uBC88 \uD310 \uC2B9\uB9AC \u{1F61D}`,g(Ee?"\uC557 \uC84C\uB2E4\u2026! \u{1F633}":"\uC81C\uAC00 \uC774\uACBC\uC8E0? \u{1F60E}"),p.attacker=null,p.round++,(p.me>=2||p.boss>=2)&&(p.done=p.me>=2?"win":"lose",p.log=p.done==="win"?`${p.me} : ${p.boss} \uC0BC\uC138\uD310 \uC2B9\uB9AC! \uCFE0\uD3F0\uC744 \uB4DC\uB9B4\uAC8C\uC694 \u{1F381}`:`${p.me} : ${p.boss} \uC544\uC27D\uAC8C \uC84C\uC5B4\uC694\u2026 \uB2E4\uC2DC \uB3C4\uC804\uD574 \uBCFC\uAE4C\uC694?`,g(p.done==="win"?"\uCD95\uD558\uD574\uC694! \uCFE0\uD3F0 \uB4DC\uB9B4\uAC8C\uC694 \u{1F381}":"\uB2E4\uC74C\uC5D0 \uB610 \uB3C4\uC804\uD574\uC694! \u{1F606}",6e3),p.coins=c(p.done==="win"?1500:200),p.done==="win")){x();try{localStorage.setItem("sh-coupon",JSON.stringify(E))}catch{}}}else p.attacker=E0[W]===Q?"me":"boss",p.log=`${oe.name} vs ${ie.name} \u2192 ${p.attacker==="me"?"\uACF5\uACA9\uAD8C\uC774 \uB098\uC5D0\uAC8C!":"\uACF5\uACA9\uAD8C\uC774 \uC0AC\uC7A5\uB2D8\uAED8!"}`;m=!1,y(oe.emo,ie.emo)}let E=null;function x(){let W="SH-"+Math.random().toString(36).slice(2,6).toUpperCase()+"-"+String(Date.now()%1e4).padStart(4,"0"),Q=new Date(Date.now()+Mh.days*864e5);E={code:W,issued:la(),until:`${Q.getFullYear()}.${String(Q.getMonth()+1).padStart(2,"0")}.${String(Q.getDate()).padStart(2,"0")}`}}function b(){E||x();let W=1080,Q=600,oe=document.createElement("canvas");oe.width=W,oe.height=Q;let ie=oe.getContext("2d"),Ee=ie.createLinearGradient(0,0,W,Q);Ee.addColorStop(0,"#ffe3ef"),Ee.addColorStop(1,"#e4f6ea"),ie.fillStyle=Ee,ie.fillRect(0,0,W,Q),ie.fillStyle="#ffffff66";for(let xe=30;xe<Q;xe+=60)for(let ue=xe/60%2?30:60;ue<W;ue+=60)ie.beginPath(),ie.arc(ue,xe,10,0,7),ie.fill();ie.fillStyle="#fffdfb",ie.beginPath(),ie.roundRect(40,40,W-80,Q-80,36),ie.fill(),ie.setLineDash([14,10]),ie.strokeStyle="#f48fb9",ie.lineWidth=5,ie.beginPath(),ie.roundRect(56,56,W-112,Q-112,28),ie.stroke(),ie.setLineDash([]),ie.strokeStyle="#f3c6d8",ie.lineWidth=3,ie.beginPath(),ie.moveTo(760,80),ie.lineTo(760,Q-80),ie.stroke(),ie.textAlign="left",ie.fillStyle="#f27fae",ie.font='700 40px "Gamja Flower", sans-serif',ie.fillText("\uC218\uC9D1\uC218\uC9D1 \xD7 \uC218\uC787\uD574\uD53C",100,130),ie.fillStyle="#4a3f66",ie.font='900 34px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',ie.fillText(Mh.title+" \u270A\u270C\uFE0F\u{1F590}\uFE0F",100,190),ie.fillStyle="#e0457b",ie.font='900 84px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',ie.fillText(Mh.benefit,100,310),ie.fillStyle="#7a6c99",ie.font='600 26px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',ie.fillText(Mh.note,100,380),ie.fillText(`\uBC1C\uAE09 ${E.issued} \xB7 ${E.until}\uAE4C\uC9C0 \xB7 1\uC778 1\uD68C`,100,420),ie.fillStyle="#4a3f66",ie.font="800 30px ui-monospace, Consolas, monospace",ie.fillText(E.code,100,480);let re=new Image;return re.src=gi("staff",1),re.complete&&ie.drawImage(re,790,150,240,240),ie.textAlign="center",ie.fillStyle="#f27fae",ie.font='700 34px "Gamja Flower", sans-serif',ie.fillText("\uC0AC\uC7A5\uB2D8\uC744 \uC774\uACBC\uC5B4\uC694!",910,440),oe}{let W=new Image;W.src=gi("staff",1)}v.addEventListener("click",async W=>{let Q=W.target.closest("button");if(!Q)return;if(Q.dataset.h)return T(Q.dataset.h);let oe=Q.dataset.g;if(oe==="close"&&_(),oe==="again"&&M(),oe==="coupon"){let ie=await oa(b(),`suithappy-coupon-${E.code}.jpg`);i(ie==="downloaded"?"\u{1F4BE} \uCFE0\uD3F0\uC744 \uC800\uC7A5\uD588\uC5B4\uC694":ie==="shared"?'\u{1F4F2} \uACF5\uC720 \uCC3D\uC5D0\uC11C "\uC774\uBBF8\uC9C0 \uC800\uC7A5"\uC744 \uB204\uB974\uBA74 \uAC24\uB7EC\uB9AC\uC5D0 \uC800\uC7A5\uB3FC\uC694':"\uC800\uC7A5\uC744 \uCDE8\uC18C\uD588\uC5B4\uC694")}});let P=u("spot"),S=Array.from({length:n},(W,Q)=>Q),R=null,I=[],z=null,L=Object.keys(hr).flatMap(W=>hr[W].stickers.map((Q,oe)=>[W,oe]));function w(W){z=W||null,I.length||(I=S.slice().sort(()=>Math.random()-.5)),P.hidden=!1,D()}function U(){P.hidden=!0;let W=z;z=null,R=null,W&&W(!1)}async function D(){if(I.length||(I=S.slice().sort(()=>Math.random()-.5)),!l()){U();return}let W=I.pop();P.innerHTML=`<div class="spwrap"><div class="ghead"><b>\u{1F50D} \uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30</b><span class="spcount">\uBD88\uB7EC\uC624\uB294 \uC911\u2026</span><button class="gsub" data-s="hint">\u{1F4A1} \uD78C\uD2B8</button><button class="x" data-s="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <div class="sppair"><div class="spimg"><canvas></canvas><small>\uC6D0\uB798 \uADF8\uB9BC</small></div><div class="spimg"><canvas></canvas><small>\uB2E4\uB978 \uACF3 5\uAC1C\uB97C \uCC3E\uC544\uC694</small></div></div>
      <p class="spmsg">${z?"\uB2E4 \uCC3E\uC73C\uBA74 \uC8FC\uBB38\uD55C \uBA54\uB274\uAC00 \uB098\uC640\uC694! \u2615":"\uB450 \uADF8\uB9BC \uC911 \uC544\uBB34 \uCABD\uC774\uB098 \uB2E4\uB978 \uACF3\uC744 \uB20C\uB7EC\uC694"} \xB7 \uD5DB\uD074\uB9AD 5\uBC88\uC774\uBA74 \uAC8C\uC784 \uC624\uBC84</p></div>`,await A0(30);let Q=t(W),[oe,ie]=P.querySelectorAll("canvas"),Ee=Q.width,re=Q.height;for(let xe of[oe,ie])xe.width=Ee,xe.height=re,xe.getContext("2d").drawImage(Q,0,0);R={W:Ee,H:re,ca:oe,cb:ie,base:oe.getContext("2d").getImageData(0,0,Ee,re),diffs:O(ie,Ee,re),found:0,miss:0,hints:0},k(),F()}function O(W,Q,oe){let ie=W.getContext("2d"),Ee=[],re=["hue","flip","sticker","erase","swap","hue","sticker"].sort(()=>Math.random()-.5),xe=0;for(;Ee.length<5&&xe++<400;){let ue=Math.round(Q*(.08+Math.random()*.05)),_e=Math.round(Q*.05+Math.random()*(Q*.9-ue)),Se=Math.round(oe*.06+Math.random()*(oe*.88-ue));if(Ee.some(ke=>Math.abs(ke.x-_e)<(ke.s+ue)/2+30&&Math.abs(ke.y-Se)<(ke.s+ue)/2+30))continue;let Ae=re[Ee.length],Le={x:_e,y:Se,s:ue,k:Ae,hit:!1};if(Ae==="hue"||Ae==="swap"){let ke=ie.getImageData(_e,Se,ue,ue),ze=ke.data,et=(100+Math.random()*140)*Math.PI/180,X=Math.cos(et),mt=Math.sin(et),je=[.299+.701*X+.168*mt,.587-.587*X+.33*mt,.114-.114*X-.497*mt,.299-.299*X-.328*mt,.587+.413*X+.035*mt,.114-.114*X+.292*mt,.299-.3*X+1.25*mt,.587-.588*X-1.05*mt,.114+.886*X-.203*mt];for(let rt=0;rt<ze.length;rt+=4){let j=ze[rt],me=ze[rt+1],le=ze[rt+2];if(Ae==="swap"){ze[rt]=le,ze[rt+2]=j;continue}ze[rt]=je[0]*j+je[1]*me+je[2]*le,ze[rt+1]=je[3]*j+je[4]*me+je[5]*le,ze[rt+2]=je[6]*j+je[7]*me+je[8]*le}ie.putImageData(ke,_e,Se)}else if(Ae==="flip"){let ke=document.createElement("canvas");ke.width=ke.height=ue,ke.getContext("2d").drawImage(W,_e,Se,ue,ue,0,0,ue,ue),ie.save(),ie.translate(_e+ue,Se),ie.scale(-1,1),ie.drawImage(ke,0,0),ie.restore(),Math.random()<.5&&(ie.save(),ie.translate(_e,Se+ue),ie.scale(1,-1),ie.drawImage(ke,0,0),ie.restore())}else if(Ae==="sticker"){let ke=new Image,[ze,et]=w0(L);ke.src=gi(ze,et),ke.decode().then(()=>ie.drawImage(ke,_e,Se,ue,ue)).catch(()=>{})}else{let ke=_e+ue+12<Q-ue?_e+ue+12:_e-ue-12,ze=document.createElement("canvas");ze.width=ze.height=ue;let et=ze.getContext("2d");et.drawImage(W,ke,Se,ue,ue,0,0,ue,ue);let X=et.createRadialGradient(ue/2,ue/2,ue*.3,ue/2,ue/2,ue*.5);X.addColorStop(0,"#000"),X.addColorStop(1,"rgba(0,0,0,0)"),et.globalCompositeOperation="destination-in",et.fillStyle=X,et.fillRect(0,0,ue,ue),ie.drawImage(ze,_e,Se)}Ee.push(Le)}return Ee}function k(){for(let W of[R.ca,R.cb]){let Q=W.getContext("2d");for(let oe of R.diffs)oe.hit&&(Q.lineWidth=Math.max(4,R.W/200),Q.strokeStyle="#ff3d8b",Q.shadowColor="#fff",Q.shadowBlur=6,Q.beginPath(),Q.arc(oe.x+oe.s/2,oe.y+oe.s/2,oe.s*.72,0,7),Q.stroke(),Q.shadowBlur=0)}}let F=()=>{let W=P.querySelector(".spcount");W&&R&&(W.textContent=`\uCC3E\uC740 \uACF3 ${R.found} / 5`)};P.addEventListener("click",W=>{let Q=W.target.closest("button");if(Q&&Q.dataset.s==="close")return U();if(Q&&Q.dataset.s==="next")return D();if(Q&&Q.dataset.s==="done"){let _e=z;z=null,P.hidden=!0,R=null,_e&&_e(!0);return}if(Q&&Q.dataset.s==="hint"&&R){let _e=R.diffs.find(Se=>!Se.hit);if(!_e)return;R.hints++;for(let Se of[R.ca,R.cb]){let Ae=Se.getBoundingClientRect(),Le=document.createElement("div");Le.className="sphint";let ke=Ae.width/R.W;Object.assign(Le.style,{left:Ae.left+(_e.x-_e.s*.3)*ke+"px",top:Ae.top+(_e.y-_e.s*.3)*ke+"px",width:_e.s*1.6*ke+"px",height:_e.s*1.6*ke+"px"}),document.body.appendChild(Le),setTimeout(()=>Le.remove(),1400)}return}let oe=W.target.closest("canvas");if(!oe||!R)return;let ie=oe.getBoundingClientRect(),Ee=(W.clientX-ie.left)*R.W/ie.width,re=(W.clientY-ie.top)*R.H/ie.height,xe=R.W*.02;if(R.over)return;let ue=R.diffs.find(_e=>!_e.hit&&Ee>_e.x-xe&&Ee<_e.x+_e.s+xe&&re>_e.y-xe&&re<_e.y+_e.s+xe);if(ue){if(ue.hit=!0,R.found++,k(),F(),c(100),R.found===5){let _e=c(Math.max(0,300-R.miss*20-R.hints*80));P.querySelector(".spmsg").innerHTML=`\u{1F389} \uB2E4 \uCC3E\uC558\uC5B4\uC694! ${R.miss?`(\uD5DB\uD074\uB9AD ${R.miss}\uBC88)`:"\uD55C \uBC88\uB3C4 \uC548 \uD2C0\uB838\uC5B4\uC694!"} \xB7 \u{1FA99} ${(500+_e).toLocaleString("ko-KR")} \uCF54\uC778 \uD68D\uB4DD
          ${z?'<button class="go" data-s="done">\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30</button>':'<button class="go" data-s="next">\uB2E4\uC74C \uADF8\uB9BC \u25B6 <small class="fee">\u{1FA99} 500</small></button>'}`}}else{if(R.found>=5||R.over)return;if(R.miss++,R.miss>=5){R.over=!0;let Le=P.querySelector(".spcount");Le&&(Le.textContent=`\uCC3E\uC740 \uACF3 ${R.found} / 5 \xB7 \uD5DB\uD074\uB9AD 5\uBC88`),P.querySelector(".spmsg").innerHTML=`\u{1F4A5} <b>\uAC8C\uC784 \uC624\uBC84!</b> \uD5DB\uD074\uB9AD 5\uBC88\uC774\uC5D0\uC694 (\uCC3E\uC740 \uACF3 ${R.found}\uAC1C \xB7 \u{1FA99} ${R.found*100} \uD68D\uB4DD)
          ${z?'<button class="go" data-s="done">\u2615 \uBA54\uB274 \uBC1B\uC73C\uB7EC \uAC00\uAE30</button>':'<button class="go" data-s="next">\uB2E4\uC2DC \uB3C4\uC804 \u25B6 <small class="fee">\u{1FA99} 500</small></button>'}`}let _e=W.clientX,Se=W.clientY,Ae=document.createElement("div");Ae.className="spmiss",Ae.textContent="\u2715",Object.assign(Ae.style,{left:_e+"px",top:Se+"px"}),document.body.appendChild(Ae),setTimeout(()=>Ae.remove(),600)}});let B=u("gmenu"),$=null,ee=[["mjp","\u270A\u270C\uFE0F\u{1F590}\uFE0F","\uBB35\uCC0C\uBE60 \uC0BC\uC138\uD310","\uC774\uAE30\uBA74 \uC624\uD504\uB77C\uC778 \uCFE0\uD3F0 \u{1F381}"],["spot","\u{1F50D}","\uD2C0\uB9B0\uADF8\uB9BC\uCC3E\uAE30","\uB9E4\uC7A5 \uC18D \uB2E4\uB978 \uACF3 5\uAC1C"],["treasure","\u2B50","\uBE44\uBC00 \uBCF4\uBB3C\uCC3E\uAE30","\uC228\uC740 \uBCC4\uC0AC\uD0D5 7\uAC1C \xB7 90\uCD08"]];function Z(W="shop",Q=null){$=Q;let oe=W==="shop",ie=oe?ee:cd;B.innerHTML=`<div class="gcard"><div class="ghead"><b>${oe?"\u{1F380} \uC18C\uD488\uC0F5 \uC0AC\uC7A5\uB2D8":"\u2615 \uCE74\uD398 \uC9C1\uC6D0"}</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${oe?"\uC5B4\uC11C \uC624\uC138\uC694! \uC2EC\uC2EC\uD558\uBA74 \uC800\uB791 \uAC8C\uC784 \uD55C \uD310 \uD560\uB798\uC694? \u{1F60A}":Q?"\uAC8C\uC784 \uD55C \uD310 \uD558\uB294 \uB3D9\uC548 \uBA54\uB274 \uB9CC\uB4E4\uC5B4 \uB458\uAC8C\uC694! \u{1F353}":"\uCE74\uD398 \uC54C\uBC14 \uCCB4\uD5D8 \uD574 \uBCFC\uB798\uC694? \uC7AC\uBC0C\uC5B4\uC694 \u{1F606}"}</p>
      <div class="gpick ${ie.length>3?"many":""}">${ie.map(([Ee,re,xe,ue])=>`<button data-m="${Ee}"><em>${re}</em><b>${xe}</b><small>${ue}</small><i class="fee">\u{1FA99} 500 \xB7 ${S0[Ee]||""}</i></button>`).join("")}</div></div>`,B.hidden=!1,oe?g("\uAC8C\uC784 \uD55C \uD310 \uD560\uB798\uC694? \u{1F606}",4e3):d&&(d.el.textContent="\uC54C\uBC14 \uCCB4\uD5D8 \uD574 \uBCFC\uB798\uC694? \u{1F606}",setTimeout(()=>d.el.textContent="\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615",4e3))}B.addEventListener("click",W=>{let Q=W.target.closest("button");if(!Q)return;B.hidden=!0;let oe=Q.dataset.m,ie=$;if($=null,oe==="close"){ie&&ie(!1);return}if(oe==="mjp")M();else if(oe==="spot")w(ie);else if(oe==="treasure"||oe==="again-treasure")l()&&r.start();else if(oe==="serving"||oe==="again-serving"){if(!l()){ie&&ie(!1);return}V=ie,a.start()}else cd.some(Ee=>Ee[0]===oe)&&s.open(oe,ie)});let V=null;function ne({score:W,delivered:Q,spilled:oe,trips:ie,over:Ee}){let re=V;V=null,re&&re(!0);let xe=0;try{xe=+localStorage.getItem("sh-best-serving")||0}catch{}let ue=W>xe;if(ue)try{localStorage.setItem("sh-best-serving",W)}catch{}let _e=c(o?o.fromScore("serving",W,Ee):0);B.innerHTML=`<div class="gcard"><div class="ghead"><b>\u2615 \uD754\uB4E4\uD754\uB4E4 \uC11C\uBE59\uC54C\uBC14</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${Ee?"\u{1F4A5} <b>\uAC8C\uC784 \uC624\uBC84!</b> \uC74C\uB8CC\uB97C 5\uC794 \uC3DF\uC558\uC5B4\uC694<br>":""}${ie}\uBC88 \uC655\uBCF5\uD574\uC11C \uC74C\uB8CC ${Q}\uC794\uC744 \uBC30\uB2EC\uD588\uC5B4\uC694!${oe?` (\uC3DF\uC740 \uC794 ${oe}\uAC1C \u{1F4A6})`:" \uD55C \uC794\uB3C4 \uC548 \uC3DF\uC558\uC5B4\uC694 \u2728"}</p>
      <p class="mscore">${W}\uC810</p>${h(_e)}<p class="mprev">${ue?"\u{1F3C6} \uCD5C\uACE0 \uAE30\uB85D!":`\uCD5C\uACE0 \uAE30\uB85D ${xe}\uC810`}</p>
      <button class="go" data-m="again-serving">\u{1F501} \uB2E4\uC2DC \uD558\uAE30 <small class="fee">\u{1FA99} 500</small></button></div>`,B.hidden=!1}function q({found:W,total:Q,time:oe,done:ie}){let Ee=0;try{Ee=+localStorage.getItem("sh-best-treasure")||0}catch{}let re=W*100+(ie?Math.max(0,90-oe)*5:0),xe=re>Ee,ue=c(W*100+(ie?300+Math.max(0,90-oe)*5:0));if(xe)try{localStorage.setItem("sh-best-treasure",re)}catch{}B.innerHTML=`<div class="gcard"><div class="ghead"><b>\u2B50 \uBE44\uBC00 \uBCF4\uBB3C\uCC3E\uAE30</b><button class="x" data-m="close" aria-label="\uB2EB\uAE30">\u2715</button></div>
      <p class="gtalk">${ie?`\u{1F389} ${oe}\uCD08 \uB9CC\uC5D0 \uBCC4\uC0AC\uD0D5 ${Q}\uAC1C\uB97C \uBAA8\uB450 \uCC3E\uC558\uC5B4\uC694!`:`\uBCC4\uC0AC\uD0D5 ${Q}\uAC1C \uC911 ${W}\uAC1C\uB97C \uCC3E\uC558\uC5B4\uC694!`}</p>
      <p class="mscore">${re}\uC810</p>${h(ue)}<p class="mprev">${xe?"\u{1F3C6} \uCD5C\uACE0 \uAE30\uB85D!":`\uCD5C\uACE0 \uAE30\uB85D ${Ee}\uC810`}</p>
      <button class="go" data-m="again-treasure">\u{1F501} \uB2E4\uC2DC \uD558\uAE30 <small class="fee">\u{1FA99} 500</small></button></div>`,B.hidden=!1}addEventListener("keydown",W=>{W.code==="Escape"&&(B.hidden?v.hidden?P.hidden||U():_():B.hidden=!0)});let J=W=>f&&Math.hypot(W.x-f.x,W.z-f.z)<2.8;return{get open(){return!v.hidden||!P.hidden||!B.hidden},mjp:M,spot:w,menu:Z,owner:f,cafeStaff:d,treasureResult:q,servingResult:ne,update(W,Q){u("mjp-btn").hidden=!J(W)||!!Q||!v.hidden||!B.hidden,u("cafegame-btn").hidden=!(d&&Math.hypot(W.x-d.x,W.z-d.z)<2.8)||!!Q||!B.hidden}}}var YS=7,C0=90,KS=.8;function P0({scene3d:i,data:e,canOccupy:t,player:n,camera:s,showToast:r,onFinish:a}){let l=(b=>document.getElementById(b))("treasure-hud"),c=!1,h=[],u=0,f=0,d=2,g=new Ts;for(let b=0;b<10;b++){let P=b*Math.PI/5+Math.PI/2,S=b%2?.045:.1,R=Math.cos(P)*S,I=Math.sin(P)*S;b?g.lineTo(R,I):g.moveTo(R,I)}let v=new Zs(g,{depth:.035,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2});v.center();let p=["#ffd54a","#ff9cc0","#9fe0cf","#c6a6f0","#ffd54a","#a9d4f5","#ffb37a"],m=(()=>{let b=document.createElement("canvas");b.width=b.height=64;let P=b.getContext("2d"),S=P.createRadialGradient(32,32,0,32,32,32);return S.addColorStop(0,"rgba(255,240,180,1)"),S.addColorStop(1,"rgba(255,240,180,0)"),P.fillStyle=S,P.fillRect(0,0,64,64),new ti(b)})();function M(){let b=[],P=(L,w)=>b.every(U=>Math.hypot(U.x-L,U.z-w)>1.6),S=e.seats.slice().sort(()=>Math.random()-.5);for(let L of S){if(b.length>=3)break;P(L[0],L[1])&&b.push({x:L[0],z:L[1],y:.16,where:"\uC758\uC790 \uC544\uB798"})}let R=e.blocks.filter(L=>L[2]>.15&&L[3]>.15).sort(()=>Math.random()-.5);for(let L of R){if(b.length>=5)break;let[w,U,D,O,k]=L,F=Math.floor(Math.random()*4),B=Math.cos(k),$=Math.sin(k),ee=F<2?(F?1:-1)*(D+.3):_(-D,D),Z=F>=2?(F===3?1:-1)*(O+.3):_(-O,O),V=w+ee*B-Z*$,ne=U+ee*$+Z*B;t(V,ne,.22)&&P(V,ne)&&b.push({x:V,z:ne,y:.35,where:"\uC9C4\uC5F4\uB300 \uC606"})}let I=e.floor.map(L=>L[0]),z=e.floor.map(L=>L[1]);for(let L=0;b.length<YS&&L<600;L++){let w=_(Math.min(...I),Math.max(...I)),U=_(Math.min(...z),Math.max(...z));t(w,U,.3)&&!t(w,U,.75)&&P(w,U)&&b.push({x:w,z:U,y:.25,where:"\uBCBD\xB7\uCEE4\uD2BC \uADFC\uCC98"})}return b}function _(b,P){return b+Math.random()*(P-b)}function y(){for(let b of h)i.remove(b.g);h=[]}function T(){y(),c=!0,u=C0,f=0,d=2,M().forEach((b,P)=>{let S=new tt;S.position.set(b.x,b.y,b.z);let R=new Ze(v,new Ot({color:new De(p[P%p.length]).multiplyScalar(1.6),toneMapped:!1})),I=new za(new Gr({map:m,color:p[P%p.length],transparent:!0,opacity:.7,depthWrite:!1,blending:$n}));I.scale.setScalar(.5),S.add(I,R),i.add(S),h.push({g:S,m:R,glow:I,p:b,got:!1,pop:0,ph:Math.random()*6})}),r(`\u2B50 \uBCC4\uC0AC\uD0D5 ${h.length}\uAC1C\uB97C 90\uCD08 \uC548\uC5D0 \uCC3E\uC544\uC694! \uAC00\uAE4C\uC774 \uAC00\uBA74 \uC8FC\uC6CC\uC694`),x()}function E(b){c=!1,l.hidden=!0,setTimeout(y,600),a&&a({found:f,total:h.length,time:Math.round(C0-u),done:b})}function x(){l.hidden=!c,c&&(l.innerHTML=`<b>\u2B50 ${f} / ${h.length}</b><span>\u23F1 ${Math.ceil(u)}\uCD08</span><button data-t="hint" ${d?"":"disabled"}>\u{1F4A1} \uD78C\uD2B8 ${d}</button><button data-t="quit">\uADF8\uB9CC</button>`)}return l.addEventListener("click",b=>{let P=b.target.closest("button");if(P){if(P.dataset.t==="quit")return E(!1);if(P.dataset.t==="hint"&&d>0){d--;let S=h.filter(R=>!R.got).sort((R,I)=>Math.hypot(R.p.x-n.x,R.p.z-n.z)-Math.hypot(I.p.x-n.x,I.p.z-n.z))[0];if(S){let R=new H;s.getWorldDirection(R);let I=S.p.x-n.x,z=S.p.z-n.z,L=Math.hypot(I,z),w=Math.atan2(R.x*z-R.z*I,R.x*I+R.z*z),U=Math.abs(w)<.5?"\uC55E\uCABD":Math.abs(w)>2.5?"\uB4A4\uCABD":w>0?"\uC67C\uCABD":"\uC624\uB978\uCABD";r(`\u{1F4A1} \uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uBCC4\uC0AC\uD0D5: ${U}\uC73C\uB85C \uC57D ${L.toFixed(1)}m \xB7 ${S.p.where}`),S.flash=2.5}x()}}}),{start:T,get active(){return c},get spots(){return h.map(b=>b.p)},update(b,P){for(let S of h)S.m.rotation.y+=b*2,S.g.position.y=S.p.y+Math.sin(P*2.5+S.ph)*.04,S.flash&&(S.flash=Math.max(0,S.flash-b),S.glow.scale.setScalar(.5+Math.sin(S.flash*12)*.25+.3)),S.got&&(S.pop+=b*3,S.g.scale.setScalar(Math.max(.001,1+S.pop*1.5)*(1-Math.min(1,S.pop))),S.g.position.y+=S.pop*.5);if(c){u-=b;for(let S of h)!S.got&&Math.hypot(S.p.x-n.x,S.p.z-n.z)<KS&&(S.got=!0,f++,x(),r(f===h.length?"\u{1F389} \uBCC4\uC0AC\uD0D5\uC744 \uBAA8\uB450 \uCC3E\uC558\uC5B4\uC694!":`\u2B50 \uCC3E\uC558\uB2E4! ${f} / ${h.length}`),Ln(880,.1,"triangle",.12),Ln(1320,.14,"triangle",.1,.07));if(f===h.length)return E(!0);if(u<=0)return E(!1);Math.ceil(u)!==x.last&&(x.last=Math.ceil(u),x())}}}}var jS=60,Sh=.42,hd=5,I0=[["melonSoda",{}],["chocoMilk",{}],["peachTea",{}],["creamSoda",{}],["bananaMilk",{}],["latte",{}]];function L0({scene3d:i,data:e,hero:t,player:n,npcs:s,showToast:r,onFinish:a}){let o=q=>document.getElementById(q),l=o("serve-hud"),c=s.find(q=>q.id==="cafe"),h=!1,u=0,f=0,d=0,g=0,v=0,p=!1,m=[],M=null,_=!1,y=0,T={roll:0,vroll:0,pitch:0,vpitch:0,px:0,pz:0,vx:0,vz:0,face:0,bump:1,bob:0,dt:0,drift:0,dcur:0},E=new H,x=new tt;x.visible=!1,i.add(x);let b=new Yt({color:"#ffc2da",roughness:.5}),P=new Ze(new kt(.42,.02,.28),b);x.add(P);for(let q of[-1,1]){let J=new Ze(new kt(.42,.035,.015),b);J.position.set(0,.02,.135*q),x.add(J)}let S=new tt;S.position.y=.012,x.add(S);let R=new so(.42,.55,40);R.rotateX(-Math.PI/2);let I=q=>{let J=new tt,W=new Ze(R,new Ot({color:q,transparent:!0,opacity:.85,toneMapped:!1,depthWrite:!1}));W.position.y=.02,J.add(W);let Q=new Ze(new bs(.13,.3,4),new Ot({color:new De(q).multiplyScalar(1.6),toneMapped:!1}));Q.rotation.x=Math.PI,Q.position.y=1.5,J.add(Q);let oe=new Ze(new ot(.5,.55,1.2,24,1,!0),new Ot({color:q,transparent:!0,opacity:.22,side:Bt,depthWrite:!1,blending:$n}));return oe.position.y=.6,J.add(oe),J.userData={ring:W,cone:Q},J.visible=!1,i.add(J),J},z=I("#9fe0cf"),L=I("#ff8fb7"),w=()=>c?{x:c.x-1.6,z:c.z}:{x:e.cafe[0],z:e.cafe[1]},U=[];for(let q of e.seats){if(q[1]<2.5||q[0]>4.5)continue;let J=q[0]+Math.sin(q[2])*.5,W=q[1]+Math.cos(q[2])*.5;U.some(Q=>Math.hypot(Q.x-J,Q.z-W)<.9)||U.push({x:J,z:W,seat:q})}let D=[];function O(){S.clear(),m=[];for(let J=0;J<3;J++){let[W,Q]=I0[Math.floor(Math.random()*I0.length)],oe=zo(W,Q);oe.g.scale.setScalar(.66),oe.g.position.set((J-1)*.12,0,J%2?.04:-.03),S.add(oe.g),m.push({g:oe.g,k:W,o:Q,fall:0})}_=!0,T.roll=T.pitch=T.vroll=T.vpitch=T.dcur=0,T.dt=1.2;let q=U.filter(J=>Math.hypot(J.x-n.x,J.z-n.z)>2.2);M=(q.length?q:U)[Math.floor(Math.random()*(q.length||U.length))],L.position.set(M.x,0,M.z),L.visible=!0,z.visible=!1,Ln(660,.08),Ln(990,.1,"triangle",.1,.06),r("\u{1F964} \uC74C\uB8CC\uB97C \uBC1B\uC558\uC5B4\uC694! \uBC18\uC9DD\uC774\uB294 \uD14C\uC774\uBE14\uAE4C\uC9C0 \uC870\uC2EC\uC870\uC2EC \uAC78\uC5B4\uAC00\uC694")}function k(){let q=m.filter(Q=>!Q.fall).length;m.filter(Q=>!Q.fall).forEach((Q,oe)=>{let ie=zo(Q.k,Q.o);ie.g.scale.setScalar(1.05),ie.g.position.set(M.x+(oe-1)*.14,.74,M.z+(oe%2?.05:-.05)),i.add(ie.g),D.push({g:ie.g,t:3})}),S.clear(),m=[],_=!1,d+=q,v++;let J=q*100+(q===3?50:0);f+=J,L.visible=!1;let W=w();z.position.set(W.x,0,W.z),z.visible=!0,[523,659,784].forEach((Q,oe)=>Ln(Q,.14,"triangle",.12,oe*.07)),r(q===3?`\u2728 \uD55C \uBC29\uC6B8\uB3C4 \uC548 \uD758\uB838\uC5B4\uC694! +${J} \xB7 \uCE74\uC6B4\uD130\uB85C \uB3CC\uC544\uAC00\uC694`:`\uC11C\uBE59 \uC644\uB8CC ${q}\uC794 +${J} \xB7 \uCE74\uC6B4\uD130\uB85C \uB3CC\uC544\uAC00\uC694`),c&&(c.el.textContent="\uC798\uD588\uC5B4\uC694! \uB2E4\uC74C \uC74C\uB8CC \uC900\uBE44\uB410\uC5B4\uC694 \u2615")}function F(){if(p)return;let q=m.find(W=>!W.fall);if(!q)return;q.fall=.001,g++,T.vroll*=-.3,T.roll*=.4,T.vpitch*=-.3,T.pitch*=.4,Ln(220,.25,"sawtooth",.08);let J=m.filter(W=>!W.fall).length;if(g>=hd){r(`\u{1F4A5} \uAC8C\uC784 \uC624\uBC84! \uC74C\uB8CC\uB97C ${hd}\uC794\uC774\uB098 \uC3DF\uC558\uC5B4\uC694`),p=!0,setTimeout($,700);return}if(r(J?`\u{1F4A6} \uC557 \uD55C \uC794 \uC3DF\uC558\uC5B4\uC694! \uB0A8\uC740 \uC74C\uB8CC ${J}\uC794`:"\u{1F4A6} \uB2E4 \uC3DF\uC558\uC5B4\uC694\u2026 \uCE74\uC6B4\uD130\uC5D0\uC11C \uB2E4\uC2DC \uBC1B\uC544 \uC640\uC694"),!J){_=!1,L.visible=!1;let W=w();z.position.set(W.x,0,W.z),z.visible=!0}}function B(){if(!U.length)return r("\uCE74\uD398 \uD14C\uC774\uBE14\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC5B4\uC694");h=!0,p=!1,ee=null,u=jS,f=0,d=0,g=0,v=0;let q=w();n.x=q.x,n.z=q.z,n.face=n.yaw=-Math.PI/2,n.pitch=-.32,T.px=n.x,T.pz=n.z,T.vx=T.vz=0,T.face=n.yaw,O(),Z()}function $(){h&&(h=!1,_=!1,x.visible=!1,S.clear(),m=[],L.visible=!1,z.visible=!1,l.hidden=!0,a&&a({score:f,delivered:d,spilled:g,trips:v,over:p}))}let ee=null;function Z(){if(l.hidden=!h,!h)return;ee||(l.innerHTML=`<div class="sv-top"><b></b><span class="sv-t"></span><span class="sv-cups"></span><button data-s="quit">\uADF8\uB9CC</button></div>
        <div class="sv-row"><div class="sv-dir"><i>\u2B06</i><small></small></div><div class="sv-meter"><i></i><em></em></div><div class="sv-lvl"><i></i></div></div>`,ee={b:l.querySelector("b"),t:l.querySelector(".sv-t"),c:l.querySelector(".sv-cups"),m:l.querySelector(".sv-meter i"),l:l.querySelector(".sv-lvl i"),meter:l.querySelector(".sv-meter"),di:l.querySelector(".sv-dir i"),dd:l.querySelector(".sv-dir small")});let q=m.filter(xe=>!xe.fall).length,J=Vo(T.roll/Sh,-1.1,1.1),W=Vo(T.pitch/Sh,-1.1,1.1);ee.b.textContent=`\u2615 ${f}\uC810`,ee.t.textContent=`\u23F1 ${Math.ceil(u)}\uCD08`,ee.c.textContent=(_?"\u{1F964}".repeat(q)+"\xB7".repeat(3-q):"\uCE74\uC6B4\uD130\uB85C!")+` \u{1F4A6}${g}/${hd}`;let Q=_?M:w(),oe=Q.x-n.x,ie=Q.z-n.z,Ee=Math.atan2(oe,ie)-n.yaw;Ee=Math.atan2(Math.sin(Ee),Math.cos(Ee)),ee.di.style.transform=`rotate(${-Ee}rad)`,ee.dd.textContent=`${Math.hypot(oe,ie).toFixed(1)}m`,ee.m.style.left=`${50+J*45}%`,ee.l.style.transform=`translate(${J*15}px, ${-W*15}px)`;let re=Math.max(Math.abs(J),Math.abs(W))>.72;ee.meter.classList.toggle("danger",re),ee.l.parentNode.classList.toggle("danger",re)}l.addEventListener("click",q=>{let J=q.target.closest("[data-s]");J&&J.dataset.s==="quit"&&$()});let V=o("serve-bal");V.addEventListener("pointerdown",q=>{let J=q.target.closest("[data-b]");J&&(q.preventDefault(),y=+J.dataset.b)});let ne=()=>y=0;return V.addEventListener("pointerup",ne),V.addEventListener("pointercancel",ne),V.addEventListener("pointerleave",ne),addEventListener("keydown",q=>{h&&(q.code==="KeyZ"&&(y=-1),q.code==="KeyC"&&(y=1))}),addEventListener("keyup",q=>{(q.code==="KeyZ"||q.code==="KeyC")&&(y=0)}),{start:B,get active(){return h},get target(){return M},get tilt(){return[T.roll,T.pitch]},place(q,J){if(!x.visible)return;let W=Math.sin(J),Q=Math.cos(J),oe=Math.sin(T.bob)*.012;x.position.set(q.position.x+W*.5,q.position.y-.36+Math.abs(oe),q.position.z+Q*.5),x.rotation.set(0,J,0),x.rotateX(T.pitch),x.rotateZ(-T.roll+oe*.6)},update(q,J){for(let Ae=D.length-1;Ae>=0;Ae--){let Le=D[Ae];Le.t-=q,Le.t<.5&&Le.g.scale.setScalar(1.05*Math.max(.001,Le.t*2)),Le.t<=0&&(i.remove(Le.g),D.splice(Ae,1))}for(let Ae of[z,L])Ae.visible&&(Ae.userData.cone.position.y=1.5+Math.sin(J*4)*.1,Ae.userData.cone.rotation.y+=q*2,Ae.userData.ring.material.opacity=.55+Math.sin(J*5)*.3);if(V.hidden=!h||!_,!h)return;u-=q;let W=(n.x-T.px)/Math.max(q,.001),Q=(n.z-T.pz)/Math.max(q,.001),oe=(W-T.vx)/Math.max(q,.001),ie=(Q-T.vz)/Math.max(q,.001),Ee=n.yaw-T.face;Ee=Math.atan2(Math.sin(Ee),Math.cos(Ee))/Math.max(q,.001),T.px=n.x,T.pz=n.z,T.vx=W,T.vz=Q,T.face=n.yaw;let re=Math.sin(n.yaw),xe=Math.cos(n.yaw),ue=Vo(oe*re+ie*xe,-12,12),_e=Vo(oe*xe-ie*re,-12,12),Se=Math.hypot(W,Q);if(_){let Ae=Se>.25;T.bump-=q;let Le=0;T.bump<=0&&(T.bump=Ae?.35+Math.random()*.5:.9+Math.random(),Le=(Math.random()-.5)*(Ae?2.2:.5)),T.dt-=q,T.dt<=0&&(T.dt=.9+Math.random()*1.2,T.drift=(Math.random()<.5?-1:1)*(Ae?1.1+Math.random()*.9:.3+Math.random()*.4)),T.dcur+=(T.drift-T.dcur)*Math.min(1,q*2.5),T.vroll+=(-T.roll*4.5-T.vroll*2+T.dcur+_e*.2+Vo(Ee,-5,5)*Se*.55+y*1.8)*q+Le*.7,T.vpitch+=(-T.pitch*6-T.vpitch*2.4-ue*.13)*q+Le*.35,T.roll+=T.vroll*q,T.pitch+=T.vpitch*q,(Math.abs(T.roll)>Sh||Math.abs(T.pitch)>Sh)&&F(),T.bob+=q*Se*9}for(let Ae of m)Ae.fall&&(Ae.fall+=q,Ae.g.position.y-=Ae.fall*.08,Ae.g.rotation.z+=q*6*Math.sign(T.roll||1),Ae.fall>.6&&(Ae.g.visible=!1));if(x.visible=_||m.some(Ae=>Ae.fall&&Ae.fall<.6),_&&M&&Math.hypot(n.x-M.x,n.z-M.z)<1.05&&k(),!_){let Ae=w();Math.hypot(n.x-Ae.x,n.z-Ae.z)<.9&&O()}if(u<=0)return $();Z()}}}function Vo(i,e,t){return Math.max(e,Math.min(t,i))}function ZS(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=new ti(i);return n.colorSpace=Ct,n}function D0({scene3d:i,data:e,storeRoot:t,isTouch:n}){let s=e.ceiling||2.9,r=e.floor.map(O=>O[0]),a=e.floor.map(O=>O[1]),o=[Math.min(...r),Math.min(...a),Math.max(...r),Math.max(...a)],l=(O,k)=>{let F=!1,B=e.floor;for(let $=0,ee=B.length-1;$<B.length;ee=$++){let[Z,V]=B[$],[ne,q]=B[ee];V>k!=q>k&&O<(ne-Z)*(k-V)/(q-V)+Z&&(F=!F)}return F},c=ZS(),h=n?140:260,u=new Float32Array(h*3),f=new Float32Array(h*3),d=new Float32Array(h),g=["#ffffff","#ffd6e7","#d9f5e6","#e3dcff","#fff1c9"].map(O=>new De(O));for(let O=0;O<h;O++){let k,F;do k=o[0]+Math.random()*(o[2]-o[0]),F=o[1]+Math.random()*(o[3]-o[1]);while(!l(k,F));u.set([k,.3+Math.random()*(s-.5),F],O*3);let B=g[O%g.length];f.set([B.r,B.g,B.b],O*3),d[O]=Math.random()*100}let v=new At;v.setAttribute("position",new qt(u,3)),v.setAttribute("color",new qt(f,3));let p=new Ss(v,new Yi({size:.07,map:c,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:$n,sizeAttenuation:!0}));p.frustumCulled=!1,p.renderOrder=5,i.add(p);let m=u.slice(),M=[],_=e.floor,y=(o[0]+o[2])/2,T=(o[1]+o[3])/2;for(let O=0;O<_.length;O++){let[k,F]=_[O],[B,$]=_[(O+1)%_.length],ee=Math.hypot(B-k,$-F);if(ee<1.2)continue;let Z=-($-F)/ee,V=(B-k)/ee,ne=(k+B)/2,q=(F+$)/2;l(ne+Z*.2,q+V*.2)||(Z=-Z,V=-V);let J=Math.max(1,Math.round(ee/1.15)),W=6;for(let Q=0;Q<J;Q++)for(let oe=0;oe<W;oe++){let ie=(Q+oe/W)/J,Ee=oe/W,re=k+(B-k)*ie+Z*.07,xe=F+($-F)*ie+V*.07,ue=s-.14-Math.sin(Ee*Math.PI)*.16;l(re,xe)&&M.push([re,ue,xe])}}let E=["#fff4d6","#ffc2da","#c9f2dc","#fff4d6","#d9ccff"].map(O=>new De(O)),x=new Ot({color:new De(2.8,2.8,2.8),toneMapped:!1}),b=new qi(new Zt(.032,10,8),x,M.length),P=new Ye,S=new De;M.forEach(([O,k,F],B)=>{P.makeTranslation(O,k,F),b.setMatrixAt(B,P),b.setColorAt(B,E[B%E.length])}),b.frustumCulled=!1,i.add(b);let R=new At().setFromPoints(M.flatMap((O,k)=>k&&Math.hypot(O[0]-M[k-1][0],O[2]-M[k-1][2])<.4?[new H(...M[k-1]),new H(...O)]:[]));i.add(new Ks(R,new Ms({color:"#b7a6c9",transparent:!0,opacity:.6})));let I=new At;I.setAttribute("position",new qt(new Float32Array(M.flat()),3));let z=new Float32Array(M.length*3);M.forEach((O,k)=>{let F=E[k%E.length];z.set([F.r,F.g,F.b],k*3)}),I.setAttribute("color",new qt(z,3));let L=new Ss(I,new Yi({size:.3,map:c,vertexColors:!0,transparent:!0,opacity:.75,depthWrite:!1,blending:$n}));L.frustumCulled=!1,i.add(L);let w=[];t.updateMatrixWorld(!0),t.traverse(O=>{if(O.isMesh&&O.material&&O.material.name==="light"){let k=new pn().setFromObject(O);w.push(k.getCenter(new H).setY(k.min.y))}});let U=new Pt({transparent:!0,depthWrite:!1,blending:$n,side:Bt,uniforms:{uColor:{value:new De("#fff3df")},uStrength:{value:.045}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = uv.y; vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:"uniform vec3 uColor; uniform float uStrength; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN, vV)), 2.5); float a = uStrength * smoothstep(0.0, 1.0, vY) * edge; gl_FragColor = vec4(uColor * a, a); }"}),D=Math.max(1,Math.ceil(w.length/(n?6:10)));return w.filter((O,k)=>k%D===0).forEach(O=>{let k=O.y-.02,F=new Ze(new ot(.22,.7,k,24,1,!0),U);F.position.set(O.x,k/2,O.z),F.renderOrder=4,i.add(F)}),{update(O,k){let F=v.attributes.position.array;for(let B=0;B<h;B++){let $=d[B],ee=B*3;F[ee]=m[ee]+Math.sin(k*.21+$)*.25,F[ee+1]=m[ee+1]+Math.sin(k*.17+$*1.3)*.18,F[ee+2]=m[ee+2]+Math.cos(k*.19+$*.7)*.25}v.attributes.position.needsUpdate=!0,p.material.opacity=.65+Math.sin(k*1.3)*.15;for(let B=0;B<6;B++){let $=Math.floor(Math.random()*M.length);S.copy(E[$%E.length]).multiplyScalar(.55+Math.random()*.9),b.setColorAt($,S)}b.instanceColor.needsUpdate=!0}}}var bh=class extends $s{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new kt;e.deleteAttribute("uv");let t=new Yt({side:gn}),n=new Yt,s=new Qs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ze(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new qi(e,n,6),o=new Dt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ze(e,ha(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ze(e,ha(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ze(e,ha(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ze(e,ha(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Ze(e,ha(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Ze(e,ha(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ha(i){return new ao({color:0,emissive:16777215,emissiveIntensity:i})}var Ii={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},JS=new ts(-1,1,1,-1,0,1),ud=class extends At{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}},QS=new ud,Li=class{constructor(e){this._mesh=new Ze(QS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,JS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ua=class extends Dn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xn.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Li(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wo=class extends Dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Th=class extends Dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Eh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ye);this._width=n.width,this._height=n.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ua(Ii),this.copyPass.material.blending=hn,this.timer=new mo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Wo!==void 0&&(a instanceof Wo?n=!0:a instanceof Th&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var wh=class extends Dn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new De}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Xo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ye},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ye},cameraProjectionMatrixInverse:{value:new Ye},cameraWorldMatrix:{value:new Ye},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new H(-1,-1,-1)},sceneBoxMax:{value:new H(1,1,1)}},vertexShader:`

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

		}`},Ah={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function N0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=eb(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new H(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new ei(s,e,e);return r.wrapS=Sn,r.wrapT=Sn,r.needsUpdate=!0,r}function eb(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var qo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:fd(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ye},cameraProjectionMatrixInverse:{value:new Ye},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function fd(i,e,t){let n=tb(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function tb(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new H(Math.cos(r),Math.sin(r),a))}return n}var Rh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,g=e-f,v=t-d,p,m;g>v?(p=1,m=0):(p=0,m=1);let M=g-p+h,_=v-m+h,y=g-1+2*h,T=v-1+2*h,E=l&255,x=c&255,b=this.perm[E+this.perm[x]]%12,P=this.perm[E+p+this.perm[x+m]]%12,S=this.perm[E+1+this.perm[x+1]]%12,R=.5-g*g-v*v;R<0?n=0:(R*=R,n=R*R*this._dot(this.grad3[b],g,v));let I=.5-M*M-_*_;I<0?s=0:(I*=I,s=I*I*this._dot(this.grad3[P],M,_));let z=.5-y*y-T*T;return z<0?r=0:(z*=z,r=z*z*this._dot(this.grad3[S],y,T)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,g=(h+u+f)*d,v=h-g,p=u-g,m=f-g,M=e-v,_=t-p,y=n-m,T,E,x,b,P,S;M>=_?_>=y?(T=1,E=0,x=0,b=1,P=1,S=0):M>=y?(T=1,E=0,x=0,b=1,P=0,S=1):(T=0,E=0,x=1,b=1,P=0,S=1):_<y?(T=0,E=0,x=1,b=0,P=1,S=1):M<y?(T=0,E=1,x=0,b=0,P=1,S=1):(T=0,E=1,x=0,b=1,P=1,S=0);let R=M-T+d,I=_-E+d,z=y-x+d,L=M-b+2*d,w=_-P+2*d,U=y-S+2*d,D=M-1+3*d,O=_-1+3*d,k=y-1+3*d,F=h&255,B=u&255,$=f&255,ee=this.perm[F+this.perm[B+this.perm[$]]]%12,Z=this.perm[F+T+this.perm[B+E+this.perm[$+x]]]%12,V=this.perm[F+b+this.perm[B+P+this.perm[$+S]]]%12,ne=this.perm[F+1+this.perm[B+1+this.perm[$+1]]]%12,q=.6-M*M-_*_-y*y;q<0?s=0:(q*=q,s=q*q*this._dot3(this.grad3[ee],M,_,y));let J=.6-R*R-I*I-z*z;J<0?r=0:(J*=J,r=J*J*this._dot3(this.grad3[Z],R,I,z));let W=.6-L*L-w*w-U*U;W<0?a=0:(W*=W,a=W*W*this._dot3(this.grad3[V],L,w,U));let Q=.6-D*D-O*O-k*k;return Q<0?o=0:(Q*=Q,o=Q*Q*this._dot3(this.grad3[ne],D,O,k)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,g,v=(e+t+n+s)*l,p=Math.floor(e+v),m=Math.floor(t+v),M=Math.floor(n+v),_=Math.floor(s+v),y=(p+m+M+_)*c,T=p-y,E=m-y,x=M-y,b=_-y,P=e-T,S=t-E,R=n-x,I=s-b,z=P>S?32:0,L=P>R?16:0,w=S>R?8:0,U=P>I?4:0,D=S>I?2:0,O=R>I?1:0,k=z+L+w+U+D+O,F=a[k][0]>=3?1:0,B=a[k][1]>=3?1:0,$=a[k][2]>=3?1:0,ee=a[k][3]>=3?1:0,Z=a[k][0]>=2?1:0,V=a[k][1]>=2?1:0,ne=a[k][2]>=2?1:0,q=a[k][3]>=2?1:0,J=a[k][0]>=1?1:0,W=a[k][1]>=1?1:0,Q=a[k][2]>=1?1:0,oe=a[k][3]>=1?1:0,ie=P-F+c,Ee=S-B+c,re=R-$+c,xe=I-ee+c,ue=P-Z+2*c,_e=S-V+2*c,Se=R-ne+2*c,Ae=I-q+2*c,Le=P-J+3*c,ke=S-W+3*c,ze=R-Q+3*c,et=I-oe+3*c,X=P-1+4*c,mt=S-1+4*c,je=R-1+4*c,rt=I-1+4*c,j=p&255,me=m&255,le=M&255,Me=_&255,N=o[j+o[me+o[le+o[Me]]]]%32,A=o[j+F+o[me+B+o[le+$+o[Me+ee]]]]%32,Y=o[j+Z+o[me+V+o[le+ne+o[Me+q]]]]%32,ge=o[j+J+o[me+W+o[le+Q+o[Me+oe]]]]%32,ae=o[j+1+o[me+1+o[le+1+o[Me+1]]]]%32,ve=.6-P*P-S*S-R*R-I*I;ve<0?h=0:(ve*=ve,h=ve*ve*this._dot4(r[N],P,S,R,I));let Te=.6-ie*ie-Ee*Ee-re*re-xe*xe;Te<0?u=0:(Te*=Te,u=Te*Te*this._dot4(r[A],ie,Ee,re,xe));let ce=.6-ue*ue-_e*_e-Se*Se-Ae*Ae;ce<0?f=0:(ce*=ce,f=ce*ce*this._dot4(r[Y],ue,_e,Se,Ae));let de=.6-Le*Le-ke*ke-ze*ze-et*et;de<0?d=0:(de*=de,d=de*de*this._dot4(r[ge],Le,ke,ze,et));let Ce=.6-X*X-mt*mt-je*je-rt*rt;return Ce<0?g=0:(Ce*=Ce,g=Ce*Ce*this._dot4(r[ae],X,mt,je,rt)),27*(h+u+f+d+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var fa=class i extends Dn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=N0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ft(this.width,this.height,{type:Gt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Pt({defines:Object.assign({},Xo.defines),uniforms:xn.clone(Xo.uniforms),vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader,blending:hn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ro,this.normalMaterial.blending=hn,this.pdMaterial=new Pt({defines:Object.assign({},qo.defines),uniforms:xn.clone(qo.uniforms),vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Pt({defines:Object.assign({},$o.defines),uniforms:xn.clone($o.uniforms),vertexShader:$o.vertexShader,fragmentShader:$o.fragmentShader,blending:hn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Pt({uniforms:xn.clone(Ii.uniforms),vertexShader:Ii.vertexShader,fragmentShader:Ii.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:xo,blendDst:tr,blendEquation:ni,blendSrcAlpha:go,blendDstAlpha:tr,blendEquationAlpha:ni}),this.blendMaterial=new Pt({uniforms:xn.clone(Ah.uniforms),vertexShader:Ah.vertexShader,fragmentShader:Ah.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:uc,blendSrc:xo,blendDst:tr,blendEquation:ni,blendSrcAlpha:go,blendDstAlpha:tr,blendEquationAlpha:ni}),this._fsQuad=new Li(null),this._originalClearColor=new De,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new fi;s.format=pi,s.type=is,this.normalRenderTarget=new Ft(this.width,this.height,{minFilter:Ut,magFilter:Ut,type:Gt,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=fd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Rh,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new ei(s,e,e,On,bn);return r.wrapS=Sn,r.wrapT=Sn,r.needsUpdate=!0,r}};fa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Yo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ch=class extends Dn{constructor(){super(),this.isOutputPass=!0,this.uniforms=xn.clone(Yo.uniforms),this.material=new $r({name:Yo.name,uniforms:this.uniforms,vertexShader:Yo.vertexShader,fragmentShader:Yo.fragmentShader}),this._fsQuad=new Li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===nr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===So&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var U0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var da=class i extends Dn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ye(e.x,e.y):new ye(256,256),this.clearColor=new De(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(r,a,{type:Gt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ft(r,a,{type:Gt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Ft(r,a,{type:Gt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=U0;this.highPassUniforms=xn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ye(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xn.clone(Ii.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:Ii.vertexShader,fragmentShader:Ii.fragmentShader,premultipliedAlpha:!0,blending:$n,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new De,this._oldClearAlpha=1,this._basic=new Ot,this._fsQuad=new Li(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ye(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Pt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ye(.5,.5)},direction:{value:new ye(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};da.BlurDirectionX=new ye(1,0);da.BlurDirectionY=new ye(0,1);var Ko=class i extends Ze{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new De(t.color):new De(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new Vn,u=new H,f=new H,d=new H,g=new Ye,v=new H(0,0,-1),p=new Tt,m=new H,M=new H,_=new Tt,y=new Ye,T=new Ft(r,a,{samples:c,type:Gt}),E=new Pt({name:l.name!==void 0?l.name:"unspecified",uniforms:xn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=T.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=y,this.material=E,this.onBeforeRender=function(x,b,P){let S=this.getReflectionCamera(P);if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(P.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),m.subVectors(f,d),m.dot(u)>0===!0&&this.forceUpdate===!1)return;m.reflect(u).negate(),m.add(f),g.extractRotation(P.matrixWorld),v.set(0,0,-1),v.applyMatrix4(g),v.add(d),M.subVectors(f,v),M.reflect(u).negate(),M.add(f),S.position.copy(m),S.up.set(0,1,0),S.up.applyMatrix4(g),S.up.reflect(u),S.lookAt(M),S.far=P.far,S.updateMatrixWorld(),S.projectionMatrix.copy(P.projectionMatrix),S.projectionMatrix.elements[8]*=-1,S.projectionMatrix.elements[12]*=-1,y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(S.projectionMatrix),y.multiply(S.matrixWorldInverse),y.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(S.matrixWorldInverse),p.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let I=S.projectionMatrix;S.isOrthographicCamera?(_.x=(Math.sign(p.x)+I.elements[8])/I.elements[0],_.y=(Math.sign(p.y)+I.elements[9])/I.elements[5],_.z=-P.far,_.w=1):(_.x=(Math.sign(p.x)+I.elements[8])/I.elements[0],_.y=(Math.sign(p.y)+I.elements[9])/I.elements[5],_.z=-1,_.w=(1+I.elements[10])/I.elements[14]),p.multiplyScalar(2/p.dot(_)),I.elements[2]=p.x,I.elements[6]=p.y,S.isOrthographicCamera?(I.elements[10]=p.z-o,I.elements[14]=p.w-1):(I.elements[10]=p.z+1-o,I.elements[14]=p.w),n.visible=!1;let z=x.getRenderTarget(),L=x.xr.enabled,w=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(T),x.state.buffers.depth.setMask(!0),x.autoClear===!1&&x.clear(),x.render(b,S),x.xr.enabled=L,x.shadowMap.autoUpdate=w,x.setRenderTarget(z);let U=P.viewport;U!==void 0&&x.state.viewport(U),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()},this.getReflectionCamera=function(x){let b=this._reflectionCameras.get(x);return b===void 0&&(b=x.clone(),this._reflectionCameras.set(x,b)),b}}};Ko.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var wt=i=>document.getElementById(i),Ke={canvas:wt("room"),overlay:wt("overlay"),bar:wt("bar"),pct:wt("pct"),enter:wt("enter"),where:wt("where"),map:wt("map"),toast:wt("toast"),joy:wt("joy"),knob:wt("knob"),err:wt("err")},jn=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",jn);var Ht;try{Ht=new nh({canvas:Ke.canvas,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0})}catch(i){throw Ke.err.hidden=!1,Ke.err.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C 3D(WebGL)\uB97C \uCF24 \uC218 \uC5C6\uC5B4\uC694. \uCD5C\uC2E0 Chrome\xB7Safari\xB7Edge\uC5D0\uC11C \uB2E4\uC2DC \uC5F4\uC5B4 \uC8FC\uC138\uC694.",i}Ht.setPixelRatio(Math.min(window.devicePixelRatio||1,jn?1.5:1.75));Ht.outputColorSpace=Ct;Ht.toneMapping=nr;Ht.toneMappingExposure=1.05;Ht.shadowMap.enabled=!0;Ht.shadowMap.type=er;Ht.shadowMap.autoUpdate=!1;var zt=new $s,W0=new De("#e9e2fb");zt.background=W0;zt.fog=new Oa(W0,13,32);var yt=new tn(66,1,.05,60),nb=new sa(Ht);zt.environment=nb.fromScene(new bh,.04).texture;zt.environmentIntensity=.55;zt.add(new ho("#fffafd","#e3d2ec",.7));var vi=new ws("#fff6ec",2.4);vi.position.set(-3.2,9,2.4);vi.target.position.set(0,0,.4);zt.add(vi.target);vi.castShadow=!0;vi.shadow.mapSize.set(jn?2048:3072,jn?2048:3072);Object.assign(vi.shadow.camera,{left:-10.5,right:10.5,top:10.5,bottom:-10.5,near:1,far:22});vi.shadow.bias=-4e-4;vi.shadow.normalBias=.025;vi.shadow.radius=5;vi.shadow.blurSamples=12;var X0=new ws("#f1e9ff",.55);X0.position.set(2.5,4,-3);zt.add(X0);zt.add(vi);var $0=u0(),xd={floor:"#e4d6d8",mint:"#cbeebb",trim:"#b2dca0",ceiling:"#f8f3fb",pink:"#f6b7d2",pinkChair:"#f2a6c9",mintChair:"#a9dcbf",shelf:"#fff3e3",blue:"#a9d4f5",white:"#fbf8f2",steel:"#b3b8c6",glass:"#bfe3f0",curtain:"#f2a9c8",greenDrape:"#b9d6a4",greenCloth:"#b7df8f",pegboard:"#f1dfbd",paperA:"#f2b0c2",paperB:"#a9d0ec",paperC:"#f3d08f",paperD:"#c3dca0",paperE:"#cdbcf0",light:"#fffbe9",handle:"#8fb98a",displayWire:"#e6def2",acrylicEdge:"#c9e6f2",labelInk:"#8a78b8",pinkBasket:"#e7a2c4",meshTray:"#cdc4e6",paperWhite:"#fffaf7",line:"#c8b9c9",wood:"#e6bf93",woodDark:"#c99c6e",plushCream:"#fbecc9",plushPink:"#f8b9d3",plushBlue:"#bcdcf6",clothWhite:"#fffbf6"},dd=new Map;function vd(i){if(dd.has(i.name))return dd.get(i.name);let e=xd[i.name]?new De(xd[i.name]):i.color.clone(),t=new Yt({color:e,roughness:.72,metalness:0,side:Bt});return(i.name==="steel"||i.name==="handle")&&(t.metalness=.45,t.roughness=.35),i.name==="floor"&&(t.roughness=.5),i.name==="acrylicEdge"&&(t.roughness=.25),i.name==="mirror"&&(t.metalness=1,t.roughness=.04,t.color=new De("#eef3f7"),t.envMapIntensity=1.4),i.name==="leafGreen"&&(t.color=new De("#86cc78")),t.name=i.name,i.name==="glass"&&(t.transparent=!0,t.opacity=.32,t.depthWrite=!1,t.roughness=.05,t.metalness=.1),i.name==="light"&&(t.emissive=new De("#fff6e0"),t.emissiveIntensity=2.6),i.name==="ceiling"&&(t.emissive=new De("#f3ecf7"),t.emissiveIntensity=.55),(i.name==="curtain"||i.name==="greenCloth")&&(t.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb *= 0.88 + 0.12 * te.x * te.y;`)}),dd.set(i.name,t),t}var pd=1.32,ib=.2,F0=2.4,Ie={x:0,z:0,yaw:0,pitch:-.06,face:0},cs=!0,Ls=2.4,q0=2.7,Nh=-.5,_d=null;try{_d=localStorage.getItem("sh-look")}catch{}var Jt=jf($0,{look:lr.includes(_d)?_d:lr[Math.floor(Math.random()*lr.length)]});zt.add(Jt.root);var pt=null,el=!1,ma=!1,O0=!1,Kn=null,os=null,xi=null,Nn=null,yd=null,un=null,Ih=null,dr=null,Di=null,Ds=null,B0=()=>Ih&&Ih.isOpen||un&&un.open||Kn&&Kn.open||os&&os.open||xi&&xi.isOpen||Nn&&Nn.active;function Lh(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[a,o]=t[s],[l,c]=t[r];o>e!=c>e&&i<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}var Y0=Array.from({length:12},(i,e)=>[Math.cos(e*Math.PI/6),Math.sin(e*Math.PI/6)]);function pr(i,e,t=ib){if(!Lh(i,e,pt.floor))return!1;for(let[n,s]of Y0)if(!Lh(i+n*t,e+s*t,pt.floor))return!1;for(let[n,s,r,a,o]of pt.blocks){let l=i-n,c=e-s,h=Math.cos(o),u=Math.sin(o),f=Math.max(0,Math.abs(l*h+c*u)-r),d=Math.max(0,Math.abs(-l*u+c*h)-a);if(f*f+d*d<t*t)return!1}return!0}function sb(i,e,t=.12){if(!Lh(i,e,pt.floor))return!1;for(let[n,s]of Y0)if(!Lh(i+n*t,e+s*t,pt.floor))return!1;for(let[n,s,r,a,o]of pt.blocks){if(Math.min(r,a)>.1)continue;let l=i-n,c=e-s,h=Math.cos(o),u=Math.sin(o),f=Math.max(0,Math.abs(l*h+c*u)-r),d=Math.max(0,Math.abs(-l*u+c*h)-a);if(f*f+d*d<t*t)return!1}return!0}function md(i,e,t=-.06){Kt=null,Ie.x=i[0],Ie.z=i[1],Ie.yaw=Ie.face=Math.atan2(e[0]-Ie.x,e[1]-Ie.z),Ie.pitch=cs?Nh:t,Ls=.5}var Jo=()=>pt&&pt.scale||1,Dh={entry:()=>md(pt.spawn,pt.look),display:()=>md(pt.displayView,pt.displayLook,-.3),cafe:()=>md(pt.cafe,[-2.6*Jo(),3.7*Jo()])};async function rb(){let i=fetch("scene.json").then(r=>{if(!r.ok)throw Error("scene.json "+r.status);return r.json()}),e=7907728,t=(async()=>{let r=await fetch("store.json");if(!r.ok)throw Error("store.json "+r.status);let a;if(r.body&&r.body.getReader){let c=r.body.getReader(),h=[],u=0;for(;;){let{done:f,value:d}=await c.read();if(f)break;h.push(d),u+=d.length;let g=Math.min(99,Math.round(u/e*100));Ke.bar.style.width=g+"%",Ke.pct.textContent="\uB9E4\uC7A5 \uBD88\uB7EC\uC624\uB294 \uC911\u2026 "+g+"%"}a=new TextDecoder().decode(await new Blob(h).arrayBuffer())}else a=await r.text();let o=atob(JSON.parse(a)),l=new Uint8Array(o.length);for(let c=0;c<o.length;c++)l[c]=o.charCodeAt(c);return new Fo().parseAsync(l.buffer,"")})(),[n,s]=await Promise.all([i,t]);pt=n,s.scene.traverse(r=>{if(r.isMesh){r.material=Array.isArray(r.material)?r.material.map(vd):vd(r.material),r.material.name==="glass"&&(r.renderOrder=2);let a=r.material.name;r.receiveShadow=!0,r.castShadow=!["ceiling","light","glass","floor","curtain"].includes(a),r.matrixAutoUpdate=!1,r.updateMatrix()}}),zt.add(s.scene),Ui=s.scene,gb(s.scene),mb(-.5),pb(),db(s.scene).catch(r=>console.warn("baked light unavailable",r)),Dh.entry(),vb(),Ds=b0({showToast:Yn}),Ih=T0({showToast:Yn,coins:Ds}),dr=P0({scene3d:zt,data:pt,canOccupy:pr,player:Ie,camera:yt,showToast:Yn,onFinish:r=>un.treasureResult(r)}),Di=L0({scene3d:zt,data:pt,hero:Jt,player:Ie,npcs:Ni,showToast:Yn,onFinish:r=>{Ie.pitch=cs?Nh:-.06,un.servingResult(r)}}),un=R0({showToast:Yn,npcs:Ni,capture:H0,views:bd.length,minis:Ih,treasure:dr,serving:Di,coins:Ds}),Kn=d0({scene3d:zt,storeRoot:Ui,data:pt,hero:Jt,npcs:Ni,showToast:Yn,isTouch:jn,canOccupy:pr,playGame:r=>un.menu("cafe",r),coins:Ds}),os=g0({scene3d:zt,hero:Jt,npcs:Ni,showToast:Yn,inShop:r=>!pt.seats.some(a=>Math.hypot(r.x-a[0],r.z-a[1])<1.3)&&!Ni.some(a=>a.id==="cafe"&&Math.hypot(r.x-a.x,r.z-a.z)<2.8),coins:Ds}),xi=x0({showToast:Yn}),Nn=_0({hero:Jt,mirrors:Qo,camera:yt,player:Ie,showToast:Yn,renderNow:()=>(Jt.root.position.set(Ie.x,0,Ie.z),Jt.root.rotation.y=Ie.face,Jt.root.visible=!0,eg(),zn!=="low"?oi.render():Ht.render(zt,yt),Ht.domElement)}),wt("diary-btn").addEventListener("click",r=>{xi.open(),r.currentTarget.blur()}),yd=D0({scene3d:zt,data:pt,storeRoot:Ui,isTouch:jn}),Ht.compile(zt,yt),Ht.shadowMap.needsUpdate=!0,el=!0,Ke.bar.style.width="100%",Ke.pct.textContent="\uC900\uBE44 \uC644\uB8CC",Ke.enter.disabled=!1,Ke.enter.textContent="\uB9E4\uC7A5 \uB4E4\uC5B4\uAC00\uAE30",window.__store={mirrors:Qo,sit:r=>{let a=pt.seats[r];Kt=a,Ie.x=a[0],Ie.z=a[1],Ie.face=a[2],Kn.onSit(a)},get cafe(){return Kn},get shop(){return os},get diary(){return xi},get photo(){return Nn},stand:()=>Kt&&Zo(),get seats(){return pt.seats},player:Ie,setView:r=>Ad(r),setQuality:r=>{zn=r,Cd()},canOccupy:pr,spots:Dh,keys:An,get entered(){return ma},info:()=>Ht.info.render,bloom:Rd,grade:J0,npcs:Ni,lmFloor:Sd,get root(){return Ui},shot:r=>H0(r),get treasure(){return dr},get serving(){return Di},get coins(){return Ds},set camD(r){q0=r}}}rb().catch(i=>{console.error(i),Ke.pct.textContent="\uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC0C8\uB85C\uACE0\uCE68\uD574 \uC8FC\uC138\uC694.",Ke.enter.textContent="\uB2E4\uC2DC \uC2DC\uB3C4",Ke.enter.disabled=!1,Ke.enter.onclick=()=>location.reload()});Ke.enter.addEventListener("click",()=>{el&&(ma=!0,Ds&&Ds.welcome(),Ke.overlay.classList.add("gone"),setTimeout(()=>Ke.overlay.hidden=!0,450),Yn(jn?"\uC67C\uCABD \uC544\uB798 \uC6D0\uC73C\uB85C \uAC77\uACE0, \uD654\uBA74\uC744 \uB4DC\uB798\uADF8\uD574 \uCE74\uBA54\uB77C\uB97C \uB3CC\uB824\uC694":"WASD\uB85C \uAC77\uACE0, \uB9C8\uC6B0\uC2A4 \uB4DC\uB798\uADF8\uB85C \uCE74\uBA54\uB77C\uB97C \uB3CC\uB824\uC694 \xB7 V \uC2DC\uC810 \uC804\uD658"))});var An=new Set,ab=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","KeyQ","KeyE"]);addEventListener("keydown",i=>{i.target.closest&&i.target.closest("input,textarea")||!ab.has(i.code)||i.altKey||i.ctrlKey||i.metaKey||(i.preventDefault(),An.add(i.code))});addEventListener("keyup",i=>An.delete(i.code));addEventListener("blur",()=>{An.clear(),fn.x=fn.y=0});var jo=new Map;Ke.canvas.addEventListener("pointerdown",i=>{if(ma&&!(i.pointerType==="mouse"&&i.button!==0)){jo.set(i.pointerId,{x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,t:performance.now()});try{Ke.canvas.setPointerCapture(i.pointerId)}catch{}Ke.canvas.classList.add("dragging")}});Ke.canvas.addEventListener("pointermove",i=>{let e=jo.get(i.pointerId);if(!e)return;let t=i.pointerType==="mouse"?.0042:.0065;Ie.yaw-=(i.clientX-e.x)*t,Ie.pitch=Ai.clamp(Ie.pitch-(i.clientY-e.y)*t,cs?-1.1:-1.05,cs?-.12:.9),e.x=i.clientX,e.y=i.clientY});var Td=i=>{let e=jo.get(i.pointerId);e&&i.type==="pointerup"&&Math.hypot(i.clientX-e.sx,i.clientY-e.sy)<9&&performance.now()-e.t<450&&hb(i.clientX,i.clientY),jo.delete(i.pointerId),jo.size||Ke.canvas.classList.remove("dragging")};Ke.canvas.addEventListener("pointerup",Td);Ke.canvas.addEventListener("pointercancel",Td);Ke.canvas.addEventListener("lostpointercapture",Td);Ke.canvas.addEventListener("contextmenu",i=>i.preventDefault());var fn={id:null,x:0,y:0,cx:0,cy:0};Ke.joy.addEventListener("pointerdown",i=>{if(fn.id!==null)return;i.preventDefault();let e=Ke.joy.getBoundingClientRect();fn.id=i.pointerId,fn.cx=e.left+e.width/2,fn.cy=e.top+e.height/2;try{Ke.joy.setPointerCapture(i.pointerId)}catch{}K0(i)});function K0(i){if(i.pointerId!==fn.id)return;let e=Ke.joy.clientWidth*.36,t=i.clientX-fn.cx,n=i.clientY-fn.cy,s=Math.hypot(t,n);s>e&&(t*=e/s,n*=e/s),fn.x=t/e,fn.y=n/e,Ke.knob.style.transform=`translate(${t}px, ${n}px)`}Ke.joy.addEventListener("pointermove",K0);var Ed=i=>{i.pointerId===fn.id&&(fn.id=null,fn.x=fn.y=0,Ke.knob.style.transform="")};Ke.joy.addEventListener("pointerup",Ed);Ke.joy.addEventListener("pointercancel",Ed);Ke.joy.addEventListener("lostpointercapture",Ed);document.querySelectorAll("[data-spot]").forEach(i=>i.addEventListener("click",()=>{el&&Dh[i.dataset.spot](),i.blur()}));var Md=wt("burger"),j0=wt("spots"),wd=i=>{j0.hidden=!i,Md.setAttribute("aria-expanded",String(i)),Md.setAttribute("aria-label",i?"\uBA54\uB274 \uB2EB\uAE30":"\uBA54\uB274 \uC5F4\uAE30")};Md.addEventListener("click",i=>{wd(j0.hidden),i.currentTarget.blur()});document.querySelectorAll("[data-spot]").forEach(i=>i.addEventListener("click",()=>wd(!1)));Ke.canvas.addEventListener("pointerdown",()=>wd(!1));function ob(i){Kt=i,Ie.x=i[0],Ie.z=i[1],Ie.face=i[2],Ie.yaw=i[2],kn.set(0,0),Kn&&Kn.onSit(i)}function lb(){let i=Ni.find(e=>e.id==="cafe");return i&&pt.seats.filter(e=>e[1]>3).sort((e,t)=>Math.hypot(e[0]-i.x,e[1]-i.z)-Math.hypot(t[0]-i.x,t[1]-i.z))[0]||pt.seats[0]}document.querySelectorAll("[data-nav]").forEach(i=>i.addEventListener("click",()=>{if(i.blur(),!el||!ma)return;xi&&xi.isOpen&&xi.close();let e=i.dataset.nav;if(e==="shop")Kt&&Zo(),os.shopping?wt("basket-btn").click():os.open||(wt("shop-btn").hidden?(Dh.display(),setTimeout(()=>wt("shop-btn").click(),60)):wt("shop-btn").click());else if(e==="cafe"){Kt&&Zo();let t=Ni.find(n=>n.id==="cafe");t&&(Ie.x=t.x-1.55,Ie.z=t.z,Ie.yaw=Ie.face=Math.PI/2,Ie.pitch=cs?Nh:-.06,Kt=null),setTimeout(()=>wt("order-btn").click(),60)}else if(e==="diary")Kt||ob(lb()),xi.open();else if(e==="photo"){Kt&&Zo();let t=Qo[0];if(!t)return;Ie.x=t.c.x-1.2,Ie.z=t.c.z,Ie.yaw=Ie.face=Math.PI/2,wt("photo-btn").click()}else e==="mine"&&os.openMine()}));wt("look-toggle").addEventListener("click",i=>{if(i.currentTarget.blur(),Nn&&Nn.active)return;let e=lr[(lr.indexOf(Jt.look)+1)%lr.length];Jt.setLook(e),Jt.root.traverse(t=>{t.isMesh&&(t.frustumCulled=!1)});try{localStorage.setItem("sh-look",e)}catch{}Yn(`\u{1F457} \uCE90\uB9AD\uD130\uB97C \uBC14\uAFE8\uC5B4\uC694 \xB7 ${h0[e]}`)});wt("mjp-btn").addEventListener("click",i=>{i.currentTarget.blur(),un.menu("shop")});wt("cafegame-btn").addEventListener("click",i=>{i.currentTarget.blur(),un.menu("cafe")});wt("hint-toggle").addEventListener("click",i=>{let e=wt("hint");e.hidden=!e.hidden,i.currentTarget.blur()});var Z0=wt("view-toggle");function Ad(i){cs=i,Jt.root.visible=i,Ie.pitch=i?Nh:-.06,Ls=.5,Z0.querySelector(".lbl").textContent=i?"1\uC778\uCE6D":"3\uC778\uCE6D"}Z0.addEventListener("click",i=>{Ad(!cs),i.currentTarget.blur()});addEventListener("keydown",i=>{i.code==="KeyV"&&ma&&!(i.target.closest&&i.target.closest("input,textarea"))&&Ad(!cs)});var k0;function Yn(i){Ke.toast.textContent=i,Ke.toast.classList.add("on"),clearTimeout(k0),k0=setTimeout(()=>Ke.toast.classList.remove("on"),3600)}var vt=Ke.map?Ke.map.getContext("2d"):null,gd=null;function cb(){if(!Ke.map||Ke.map.hidden||!pt)return;if(!gd){let s=pt.floor.map(l=>l[0]),r=pt.floor.map(l=>l[1]),a=[Math.min(...s),Math.min(...r),Math.max(...s),Math.max(...r)],o=Math.min((Ke.map.width-24)/(a[2]-a[0]),(Ke.map.height-24)/(a[3]-a[1]));gd={s:o,mp:(l,c)=>[Ke.map.width/2+(l-(a[0]+a[2])/2)*o,Ke.map.height/2+(c-(a[1]+a[3])/2)*o]}}let{s:i,mp:e}=gd;vt.clearRect(0,0,Ke.map.width,Ke.map.height),vt.beginPath(),pt.floor.forEach(([s,r],a)=>vt[a?"lineTo":"moveTo"](...e(s,r))),vt.closePath(),vt.fillStyle="#dff3e8",vt.fill(),vt.strokeStyle="#8fc7aa",vt.lineWidth=3,vt.stroke();for(let[s,r,a,o,l,c]of pt.icons)vt.save(),vt.translate(...e(s,r)),vt.rotate(l),vt.fillStyle=xd[c]||"#"+pt.colors[c],vt.strokeStyle="#a89cc4",vt.lineWidth=1.2,vt.fillRect(-a*i/2,-o*i/2,a*i,o*i),vt.strokeRect(-a*i/2,-o*i/2,a*i,o*i),vt.restore();vt.textAlign="center",vt.font="700 19px system-ui, sans-serif",vt.fillStyle="#5d4f7c";for(let[s,[r,a]]of pt.labels)vt.fillText(s,...e(r,a));let[t,n]=e(Ie.x,Ie.z);vt.save(),vt.translate(t,n),vt.rotate(-Ie.yaw),vt.beginPath(),vt.moveTo(0,15),vt.lineTo(-9,-8),vt.lineTo(9,-8),vt.closePath(),vt.fillStyle="#9a72d8",vt.fill(),vt.lineWidth=2.5,vt.strokeStyle="#fff",vt.stroke(),vt.restore()}function Uh(){let i=Ke.canvas.clientWidth,e=Ke.canvas.clientHeight;Ht.setSize(i,e,!1),typeof oi!="undefined"&&(oi.setPixelRatio(Ht.getPixelRatio()),oi.setSize(i,e)),yt.aspect=i/e;let t=74*Math.PI/180,n=2*Math.atan(Math.tan(t/2)/yt.aspect)*180/Math.PI;yt.fov=Math.min(92,Math.max(64,n)),yt.updateProjectionMatrix()}var oi=new Eh(Ht,new Ft(1,1,{type:Gt,samples:jn?2:4}));oi.addPass(new wh(zt,yt));var ls=new fa(zt,yt,1,1);ls.output=fa.OUTPUT.Default;ls.blendIntensity=1;ls.updateGtaoMaterial({radius:.55,distanceExponent:1.3,thickness:1.4,scale:1.25,samples:jn?8:14});ls.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:jn?8:16});oi.addPass(ls);{let i=ls.render.bind(ls);ls.render=(...e)=>{for(let t of Kf)t.visible=!1;i(...e);for(let t of Kf)t.visible=!0}}var Rd=new da(new ye(256,256),.3,.5,2);oi.addPass(Rd);oi.addPass(new Ch);var J0=new ua({uniforms:{tDiffuse:{value:null},saturation:{value:1.12},contrast:{value:1.05},warmth:{value:.025},lift:{value:.012},vignette:{value:.22}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`});oi.addPass(J0);var zn=jn?"mid":"high";try{zn=localStorage.getItem("sh-quality")||zn}catch{}var Q0=wt("quality-toggle");function Cd(){ls.enabled=zn==="high",Rd.enabled=zn!=="low",Ht.shadowMap.enabled=zn!=="low",zt.traverse(i=>{i.material&&i.material.needsUpdate!==void 0&&(i.material.needsUpdate=!0)}),Ht.shadowMap.needsUpdate=!0,Q0.querySelector(".lbl").textContent={high:"\uACE0\uD654\uC9C8",mid:"\uBCF4\uD1B5",low:"\uAC00\uBCCD\uAC8C"}[zn]}Q0.addEventListener("click",i=>{zn={high:"mid",mid:"low",low:"high"}[zn];try{localStorage.setItem("sh-quality",zn)}catch{}Cd(),Uh(),i.currentTarget.blur()});Cd();new ResizeObserver(Uh).observe(Ke.canvas);Uh();var Kt=null,Ui=null,Ph=new As,z0=new ye;function hb(i,e){if(!pt||!pt.seats||!Ui)return;let t=Ke.canvas.getBoundingClientRect();if(z0.set((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),Ph.setFromCamera(z0,yt),un&&un.owner&&Ph.intersectObject(un.owner.c.root,!0).length){un.menu("shop");return}if(un&&un.cafeStaff&&Ph.intersectObject(un.cafeStaff.c.root,!0).length){un.menu("cafe");return}let n=Ph.intersectObject(Ui,!0)[0];if(!n)return;let s=null,r=.6;for(let a of pt.seats){let o=Math.hypot(a[0]-n.point.x,a[1]-n.point.z);o<r&&n.point.y<1.1&&(r=o,s=a)}s&&(Kt=s,Ie.x=s[0],Ie.z=s[1],Ie.face=s[2],kn.set(0,0),Yn("\uC758\uC790\uC5D0 \uC549\uC558\uC5B4\uC694 \u{1FA91} \uC6C0\uC9C1\uC774\uBA74 \uC77C\uC5B4\uB098\uC694"),Kn&&Kn.onSit(s))}function Zo(){let i=Kt;Kt=null,Kn&&Kn.onStand();let e=i[2]+Math.PI;for(let t of[.45,.6,.8,1,1.25])for(let n of[0,.5,-.5,1,-1,1.6,-1.6]){let s=i[0]+Math.sin(e+n)*t,r=i[1]+Math.cos(e+n)*t;if(pr(s,r)){Ie.x=s,Ie.z=r;return}}}var ub=[/^Perimeter wall/,/^Guest floor$/,/^Ceiling$/,/^Display hall - angled partition$/,/^Cafe partition$/,/^Corridor partition$/,/^Corridor return$/,/^Cafe end wall/,/^Round column/,/^Shop counter - (staff area room|back wall|side wall)/],fb=1.12,Sd={value:0};async function db(i){let e=await fetch("light.json");if(!e.ok)return;let t=await e.json(),n=c=>{let h=atob(c),u=new Uint8Array(h.length);for(let f=0;f<h.length;f++)u[f]=h.charCodeAt(f);return u},s=await new Fo().parseAsync(n(t.shell).buffer,""),r=await createImageBitmap(new Blob([n(t.lightmap)],{type:"image/jpeg"}),{imageOrientation:"none"}),a=new jt(r);a.flipY=!1,a.colorSpace=Ct,a.needsUpdate=!0,a.anisotropy=4;{let c=document.createElement("canvas");c.width=c.height=64;let h=c.getContext("2d");h.drawImage(r,0,0,64,64);let u=h.getImageData(0,0,64,64).data,f=[];for(let d=0;d<u.length;d+=4)f.push(Math.pow((u[d]*.2126+u[d+1]*.7152+u[d+2]*.0722)/255,2.2));f.sort((d,g)=>d-g),Sd.value=f[Math.floor(f.length*.9)]*.85}let o=c=>{c.uniforms.lmFloor=Sd,c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
uniform float lmFloor;`).replace("reflectedLight.indirectDiffuse += lightMapTexel.rgb","reflectedLight.indirectDiffuse += max(lightMapTexel.rgb, vec3(lmFloor))")},l=new Map;s.scene.traverse(c=>{if(!c.isMesh)return;let h=Array.isArray(c.material)?c.material[0]:c.material,u=h.name;if(!l.has(u)){let f=vd(h),d=new Ot({color:f.color,lightMap:a,lightMapIntensity:t.gain||fb,side:Bt});d.name=u,f.onBeforeCompile&&u==="floor"?d.onBeforeCompile=f.onBeforeCompile:d.onBeforeCompile=o,l.set(u,d)}c.material=l.get(u),c.castShadow=!1,c.receiveShadow=!1}),i.traverse(c=>{let h=(c.name||"").replace(/_/g," ");ub.some(u=>u.test(h))&&c.traverse(u=>{u.isMesh&&(u.visible=!1)})}),zt.add(s.scene),Ht.shadowMap.needsUpdate=!0}function pb(){Ui.updateMatrixWorld(!0);let i=new As,e=new H,t=new H;for(let n of pt.seats){let s=null;for(let r of[.55,.65,.75])for(let a=0;a<72;a++){let o=a*Math.PI/36;t.set(Math.sin(o),0,Math.cos(o)),e.set(n[0],r,n[1]),i.set(e,t),i.far=.9;let l=i.intersectObject(Ui,!0).find(c=>c.object.visible&&!/chair|mint|trim|pink$/i.test(c.object.material&&c.object.material.name||""));l&&(!s||l.distance<s.d-.01)&&(s={d:l.distance,a:o})}s&&s.d<.8&&(n[2]=Math.atan2(Math.sin(s.a),Math.cos(s.a)))}}function mb(i){Ui.updateMatrixWorld(!0);let e=s=>/^Cafe end - cafe order counter/.test((s&&s.name||"").replace(/_/g," ")),t=[];Ui.traverse(s=>{e(s)&&!e(s.parent)&&t.push(s)});for(let s of t){let r=s.parent.worldToLocal(new H(0,0,0)),a=s.parent.worldToLocal(new H(i,0,0));s.position.add(a.sub(r)),s.updateMatrix(),s.updateMatrixWorld(!0)}for(let s of pt.blocks)Math.abs(s[0]-5.246)<.05&&Math.abs(s[1]-4.508)<.05&&(s[0]+=i);let n=(pt.npcs||[]).find(s=>s.id==="cafe");n&&(n.x=5.55)}var bd=[{p:[6.2,1.5,-4.6],t:[2.5,.8,-1.2]},{p:[.9,1.6,3],t:[-1.5,.7,-2]},{p:[3.4,1.5,3.6],t:[-3,.7,6.2]},{p:[3,1.5,4.5],t:[5.6,1,4.5]},{p:[5.4,1.5,-2.9],t:[4.6,.9,-5.8]},{p:[-6.4,1.6,6],t:[0,.7,2]},{p:[-2,1.7,-3],t:[3,.7,-5.2]},{p:[2.5,2.2,-.5],t:[-4,.4,4]},{p:[-1,1.6,5.8],t:[3,.8,1]},{p:[7,1.5,-2.6],t:[7,.9,2]}];function H0(i){let e=bd[i%bd.length],t=960,n=720,s={p:yt.position.clone(),q:yt.quaternion.clone(),fov:yt.fov,vis:Jt.root.visible};Jt.root.visible=!1,Ht.setSize(t,n,!1),oi.setSize(t,n),yt.aspect=t/n,yt.fov=62,yt.updateProjectionMatrix(),yt.position.set(...e.p),yt.lookAt(...e.t),yt.updateMatrixWorld(),zn!=="low"?oi.render():Ht.render(zt,yt);let r=document.createElement("canvas");return r.width=t,r.height=n,r.getContext("2d").drawImage(Ht.domElement,0,0,t,n),yt.position.copy(s.p),yt.quaternion.copy(s.q),yt.fov=s.fov,Jt.root.visible=s.vis,Uh(),r}var Qo=[];function gb(i){i.updateMatrixWorld(!0),i.traverse(e=>{if(!e.isMesh||!e.material||e.material.name!=="mirror")return;let t=e,n=!1;for(;t;)/leaning.mirror/i.test(t.name.replace(/_/g," "))&&(n=!0),t=t.parent;if(!n)return;let s=new pn().setFromObject(e),r=s.getCenter(new H),a=s.getSize(new H),o=.12,l=new H(-Math.cos(o),Math.sin(o),0),c=Math.max(a.x,a.z)-.02,h=a.y/Math.cos(o)-.02,u=Math.min(window.devicePixelRatio||1,2),f=new Ko(new Ki(c,h),{textureWidth:Math.round((jn?384:640)*u*(c/h)*2),textureHeight:Math.round((jn?384:640)*u),color:14674158,clipBias:.003});f.position.copy(r).addScaledVector(l,.02),e.visible=!1,f.lookAt(f.position.clone().add(l)),zt.add(f),Qo.push({ref:f,c:r,pane:e})})}function eg(){for(let i of Qo)i.ref.visible=(zn!=="low"||Nn&&Nn.active)&&Math.hypot(Ie.x-i.c.x,Ie.z-i.c.z)<7,i.pane.visible=!i.ref.visible}var Ni=[],xb={cafe:{opt:{look:"cafe"},say:"\uC5B4\uC11C \uC624\uC138\uC694! \uC74C\uB8CC\uB294 \uC5EC\uAE30\uC11C \uC8FC\uBB38\uD574\uC694 \u2615"},shop:{opt:{look:"shop"},say:"\uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694! \uACC4\uC0B0\uC740 \uC5EC\uAE30\uC11C \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694 \u{1F380}"}};function vb(){for(let i of pt.npcs||[]){let e=xb[i.id];if(!e)continue;let t=jf($0,e.opt);t.root.position.set(i.x,0,i.z),t.root.rotation.y=i.face,t.root.scale.setScalar(1.12),t.root.position.y=i.id==="shop"?.15:.2,zt.add(t.root);let n=document.createElement("div");n.className="bubble",n.textContent=e.say,wt("bubbles").appendChild(n),Ni.push({...i,c:t,el:n,yaw:0})}}var pa=new H;function _b(i,e){for(let t of Ni){t.c.animate(i,t.speed||0,e+t.id.length),t.y!==void 0&&(t.c.root.position.set(t.x,t.y,t.z),t.c.root.rotation.y=t.face),t.carry&&(t.c.arms[0].rotation.x=t.c.arms[1].rotation.x=-1.35);let n=Ie.x-t.x,s=Ie.z-t.z,r=Math.hypot(n,s),a=0;if(r<4&&!t.speed&&(a=Math.atan2(n,s)-t.face,a=Math.atan2(Math.sin(a),Math.cos(a)),a=Ai.clamp(a,-.9,.9)),t.yaw+=(a-t.yaw)*Math.min(1,i*5),t.c.head.rotation.y=t.yaw,t.c.head.rotation.x+=((r<4?-.22:0)-t.c.head.rotation.x)*Math.min(1,i*4),r<2.8){pa.set(t.x,1.6,t.z).project(yt);let l=Ke.canvas.getBoundingClientRect(),c=pa.z<1&&Math.abs(pa.x)<1.1&&Math.abs(pa.y)<1.1;t.el.style.transform=`translate(${(pa.x*.5+.5)*l.width}px, ${(-pa.y*.5+.5)*l.height}px) translate(-50%, -100%)`,t.el.classList.toggle("on",c)}else t.el.classList.remove("on")}}var kn=new ye,G0=performance.now(),V0=0;function yb(){let i=Jo();return Kt?"\u{1FA91} \uC549\uC544\uC11C \uC26C\uB294 \uC911":Ie.z>1.75*i?"\u2615 \uCE74\uD398 \uC88C\uC11D":Ie.x>3.2*i&&Ie.z<-1.6*i?"\u{1F6AA} \uC785\uAD6C":Ie.x>3*i?"\u{1F380} \uBCF5\uB3C4":"\u{1F9F8} \uC9C4\uC5F4\uB300 \uC0AC\uC774"}function tg(i){let e=Math.min((i-G0)/1e3,.05);if(G0=i,el){if(ma){let o=(An.has("ArrowLeft")||An.has("KeyQ")?1:0)-(An.has("ArrowRight")||An.has("KeyE")?1:0);Ie.yaw+=o*1.7*e;let l=(An.has("KeyW")||An.has("ArrowUp")?1:0)-(An.has("KeyS")||An.has("ArrowDown")?1:0),c=(An.has("KeyD")?1:0)-(An.has("KeyA")?1:0);fn.id!==null&&(l=-fn.y,c=fn.x);let h=Math.hypot(l,c);h>1&&(l/=h,c/=h),Kt&&h>.25&&Zo(),(Kt||B0())&&(l=0,c=0);let u=An.has("ShiftLeft")||An.has("ShiftRight")?1.6:1,f=Math.sin(Ie.yaw),d=Math.cos(Ie.yaw),g=(l*f-c*d)*F0*u,v=(l*d+c*f)*F0*u,p=1-Math.exp(-e*12);kn.x+=(g-kn.x)*p,kn.y+=(v-kn.y)*p;let m=kn.x*e,M=kn.y*e;Math.abs(m)+Math.abs(M)>1e-5&&(pr(Ie.x+m,Ie.z+M)?(Ie.x+=m,Ie.z+=M):(pr(Ie.x+m,Ie.z)?Ie.x+=m:kn.x=0,pr(Ie.x,Ie.z+M)?Ie.z+=M:kn.y=0));let _=Math.hypot(kn.x,kn.y);if(_>.15){let T=Math.atan2(kn.x,kn.y)-Ie.face;T=Math.atan2(Math.sin(T),Math.cos(T)),Ie.face+=T*Math.min(1,e*12)}Jt.animate(e,_,i/1e3,!!Kt),Kn&&Kn.update(e,Ie,Kt),yd&&yd.update(e,i/1e3),un&&un.update(Ie,Kt),dr&&dr.update(e,i/1e3),Di&&Di.update(e,i/1e3),os&&os.update(Ie,Kt),Nn&&(Nn.update(Kt),Nn.applyPose(i/1e3)),wt("diary-btn").hidden=!Kt||!xi||xi.isOpen,wt("actions").style.visibility=B0()||Di&&Di.active||dr&&dr.active?"hidden":"",_b(e,i/1e3),eg(),!O0&&Ie.z>2*Jo()&&Ie.x<3.6*Jo()&&(O0=!0,Yn("\uCE74\uD398 \uC88C\uC11D\uC5D0 \uB3C4\uCC29\uD588\uC5B4\uC694 \u2615"))}let t=Math.sin(Ie.pitch),n=Math.cos(Ie.pitch),s=Math.sin(Ie.yaw),r=Math.cos(Ie.yaw);if(Jt.root.position.set(Ie.x,0,Ie.z),Jt.root.rotation.y=Ie.face,Nn&&Nn.camera())Jt.root.visible=!0;else if(Di&&Di.active)yt.position.set(Ie.x,pd,Ie.z),yt.lookAt(Ie.x+s*n,pd+t,Ie.z+r*n),Jt.root.visible=!1,Di.place(yt,Ie.yaw);else if(cs){let o=Ie.x,l=.9,c=Ie.z,h=-s,u=-r,f=q0,d=n*f,g=d;for(let M=.2;M<=d;M+=.08)if(!sb(o+h*M,c+u*M)){g=Math.max(.15,M-.15);break}Ls+=(g-Ls)*Math.min(1,e*(g<Ls?18:3));let v=(pt.ceiling||2.65)-.25,p=Math.min(v,l-t*f);yt.position.set(o+h*Ls,p,c+u*Ls);let m=Ai.clamp(1-Ls/d,0,1);yt.lookAt(o+s*m*1.8,l+.05+m*.15,c+r*m*1.8),m>.7&&(yt.position.y=Math.min(v+.03,p+.1)),Jt.root.visible=!0}else{let o=Kt?1.02:pd;yt.position.set(Ie.x,o,Ie.z),yt.lookAt(Ie.x+s*n,o+t,Ie.z+r*n)}zn!=="low"?oi.render():Ht.render(zt,yt),Nn&&Nn.afterRender(Ht.domElement);let a=yb();Ke.where.textContent!==a&&(Ke.where.textContent=a),(V0=(V0+1)%2)===0&&cb()}requestAnimationFrame(tg)}requestAnimationFrame(tg);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
