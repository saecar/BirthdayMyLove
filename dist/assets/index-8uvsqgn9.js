var Op=Object.defineProperty;var Fp=(r,e,t)=>e in r?Op(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ih=(r,e,t)=>Fp(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ic="174",Bp=0,Dh=1,zp=2,Dd=1,kd=2,mi=3,bi=0,Zt=1,Et=2,xi=0,fs=1,Hr=2,kh=3,Uh=4,Gp=5,cs=100,Vp=101,Hp=102,Wp=103,Xp=104,Yp=200,qp=201,jp=202,$p=203,Sl=204,wl=205,Kp=206,Zp=207,Jp=208,Qp=209,em=210,tm=211,nm=212,im=213,sm=214,Tl=0,El=1,Al=2,Ks=3,Cl=4,Rl=5,Pl=6,Ll=7,Ud=0,rm=1,am=2,Gi=0,Nd=1,Od=2,Fd=3,Dc=4,Bd=5,zd=6,Gd=7,Nh="attached",om="detached",Vd=300,Zs=301,Js=302,Il=303,Dl=304,mo=306,Jn=1e3,Ni=1001,to=1002,Jt=1003,Hd=1004,Rr=1005,mn=1006,Wa=1007,Cn=1008,Si=1009,Wd=1010,Xd=1011,Wr=1012,kc=1013,vs=1014,Wn=1015,ei=1016,Uc=1017,Nc=1018,Qs=1020,Yd=35902,qd=1021,jd=1022,Rn=1023,$d=1024,Kd=1025,Hs=1026,er=1027,Oc=1028,Fc=1029,Zd=1030,Bc=1031,zc=1033,Xa=33776,Ya=33777,qa=33778,ja=33779,kl=35840,Ul=35841,Nl=35842,Ol=35843,Fl=36196,Bl=37492,zl=37496,Gl=37808,Vl=37809,Hl=37810,Wl=37811,Xl=37812,Yl=37813,ql=37814,jl=37815,$l=37816,Kl=37817,Zl=37818,Jl=37819,Ql=37820,ec=37821,$a=36492,tc=36494,nc=36495,Jd=36283,ic=36284,sc=36285,rc=36286,Xr=2300,Yr=2301,Ao=2302,Oh=2400,Fh=2401,Bh=2402,lm=2500,cm=0,Qd=1,ac=2,hm=3200,um=3201,ef=0,dm=1,ki="",ft="srgb",Qt="srgb-linear",no="linear",rt="srgb",bs=7680,zh=519,fm=512,pm=513,mm=514,tf=515,gm=516,_m=517,vm=518,ym=519,io=35044,Gh="300 es",yi=2e3,so=2001;class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vh=1234567;const Dr=Math.PI/180,tr=180/Math.PI;function Dn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[r&255]+Vt[r>>8&255]+Vt[r>>16&255]+Vt[r>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Ge(r,e,t){return Math.max(e,Math.min(t,r))}function Gc(r,e){return(r%e+e)%e}function xm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Mm(r,e,t){return r!==e?(t-r)/(e-r):0}function kr(r,e,t){return(1-t)*r+t*e}function bm(r,e,t,n){return kr(r,e,1-Math.exp(-t*n))}function Sm(r,e=1){return e-Math.abs(Gc(r,e*2)-e)}function wm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Tm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Em(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Am(r,e){return r+Math.random()*(e-r)}function Cm(r){return r*(.5-Math.random())}function Rm(r){r!==void 0&&(Vh=r);let e=Vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pm(r){return r*Dr}function Lm(r){return r*tr}function Im(r){return(r&r-1)===0&&r!==0}function Dm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function km(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Um(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function at(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const dn={DEG2RAD:Dr,RAD2DEG:tr,generateUUID:Dn,clamp:Ge,euclideanModulo:Gc,mapLinear:xm,inverseLerp:Mm,lerp:kr,damp:bm,pingpong:Sm,smoothstep:wm,smootherstep:Tm,randInt:Em,randFloat:Am,randFloatSpread:Cm,seededRandom:Rm,degToRad:Pm,radToDeg:Lm,isPowerOfTwo:Im,ceilPowerOfTwo:Dm,floorPowerOfTwo:km,setQuaternionFromProperEuler:Um,normalize:at,denormalize:Vn};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,i,s,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],x=i[4],v=i[7],S=i[2],A=i[5],T=i[8];return s[0]=a*_+o*y+l*S,s[3]=a*m+o*x+l*A,s[6]=a*p+o*v+l*T,s[1]=c*_+h*y+u*S,s[4]=c*m+h*x+u*A,s[7]=c*p+h*v+u*T,s[2]=d*_+f*y+g*S,s[5]=d*m+f*x+g*A,s[8]=d*p+f*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Co.makeScale(e,t)),this}rotate(e){return this.premultiply(Co.makeRotation(-e)),this}translate(e,t){return this.premultiply(Co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new Fe;function nf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function qr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Nm(){const r=qr("canvas");return r.style.display="block",r}const Hh={};function rs(r){r in Hh||(Hh[r]=!0,console.warn(r))}function Om(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Fm(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bm(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wh=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zm(){const r={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(i.r=Ws(i.r),i.g=Ws(i.g),i.b=Ws(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ki?no:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Qt]:{primaries:e,whitePoint:n,transfer:no,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),r}const Ye=zm();function Mi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ss;class Gm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=qr("canvas")),Ss.width=e.width,Ss.height=e.height;const n=Ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ss}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Mi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vm=0;class Vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ro(i[a].image)):s.push(Ro(i[a]))}else s=Ro(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ro(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hm=0;class Dt extends dr{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Ni,i=Ni,s=mn,a=Cn,o=Rn,l=Si,c=Dt.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Dn(),this.name="",this.source=new Vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Vd;Dt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(f+1)/2,S=(p+1)/2,A=(h+d)/4,T=(u+_)/4,C=(g+m)/4;return x>v&&x>S?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=T/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=A/i,s=C/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=T/s,i=C/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wm extends dr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Vc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Wm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sf extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xm extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const S=Math.sqrt(x),A=Math.atan2(S,p*y);m=Math.sin(m*A)/S,o=Math.sin(o*A)/S}const v=o*y;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new P,Yh=new Ei;class Xn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),pa.subVectors(this.max,yr),ws.subVectors(e.a,yr),Ts.subVectors(e.b,yr),Es.subVectors(e.c,yr),Ai.subVectors(Ts,ws),Ci.subVectors(Es,Ts),Ki.subVectors(ws,Es);let t=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-Ki.z,Ki.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,Ki.z,0,-Ki.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-Ki.y,Ki.x,0];return!Lo(t,ws,Ts,Es,pa)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,ws,Ts,Es,pa))?!1:(ma.crossVectors(Ai,Ci),t=[ma.x,ma.y,ma.z],Lo(t,ws,Ts,Es,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new P,new P,new P,new P,new P,new P,new P,new P],On=new P,fa=new Xn,ws=new P,Ts=new P,Es=new P,Ai=new P,Ci=new P,Ki=new P,yr=new P,pa=new P,ma=new P,Zi=new P;function Lo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Zi.fromArray(r,s);const o=i.x*Math.abs(Zi.x)+i.y*Math.abs(Zi.y)+i.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ym=new Xn,xr=new P,Io=new P;class ri{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ym.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Io)),this.expandByPoint(xr.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new P,Do=new P,ga=new P,Ri=new P,ko=new P,_a=new P,Uo=new P;class la{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Do.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Do);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ga),o=Ri.dot(this.direction),l=-Ri.dot(ga),c=Ri.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Do).addScaledVector(ga,d),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const n=hi.dot(this.direction),i=hi.dot(hi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,i,s){ko.subVectors(t,e),_a.subVectors(n,e),Uo.crossVectors(ko,_a);let a=this.direction.dot(Uo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);const l=o*this.direction.dot(_a.crossVectors(Ri,_a));if(l<0)return null;const c=o*this.direction.dot(ko.cross(Ri));if(c<0||l+c>a)return null;const h=-o*Ri.dot(Uo);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,i,s,a,o,l,c,h,u,d,f,g,_,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qm,e,jm)}lookAt(e,t,n){const i=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Pi.crossVectors(n,hn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Pi.crossVectors(n,hn)),Pi.normalize(),va.crossVectors(hn,Pi),i[0]=Pi.x,i[4]=va.x,i[8]=hn.x,i[1]=Pi.y,i[5]=va.y,i[9]=hn.y,i[2]=Pi.z,i[6]=va.z,i[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],S=n[15],A=i[0],T=i[4],C=i[8],M=i[12],b=i[1],L=i[5],O=i[9],U=i[13],F=i[2],G=i[6],H=i[10],X=i[14],z=i[3],ie=i[7],ae=i[11],ve=i[15];return s[0]=a*A+o*b+l*F+c*z,s[4]=a*T+o*L+l*G+c*ie,s[8]=a*C+o*O+l*H+c*ae,s[12]=a*M+o*U+l*X+c*ve,s[1]=h*A+u*b+d*F+f*z,s[5]=h*T+u*L+d*G+f*ie,s[9]=h*C+u*O+d*H+f*ae,s[13]=h*M+u*U+d*X+f*ve,s[2]=g*A+_*b+m*F+p*z,s[6]=g*T+_*L+m*G+p*ie,s[10]=g*C+_*O+m*H+p*ae,s[14]=g*M+_*U+m*X+p*ve,s[3]=y*A+x*b+v*F+S*z,s[7]=y*T+x*L+v*G+S*ie,s[11]=y*C+x*O+v*H+S*ae,s[15]=y*M+x*U+v*X+S*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+m*(+t*c*u-t*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,x=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,v=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,S=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,A=t*y+n*x+i*v+s*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=y*T,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*T,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*T,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*T,e[4]=x*T,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*T,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*T,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*f+t*l*f)*T,e[8]=v*T,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*T,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*T,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*f-t*o*f)*T,e[12]=S*T,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*T,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*T,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,_=a*h,m=a*u,p=o*u,y=l*c,x=l*h,v=l*u,S=n.x,A=n.y,T=n.z;return i[0]=(1-(_+p))*S,i[1]=(f+v)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(d+p))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+x)*T,i[9]=(m-y)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=As.set(i[0],i[1],i[2]).length();const a=As.set(i[4],i[5],i[6]).length(),o=As.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Fn.copy(this);const c=1/s,h=1/a,u=1/o;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,t.setFromRotationMatrix(Fn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=yi){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===yi)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===so)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=yi){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,f=(n+i)*h;let g,_;if(o===yi)g=(a+s)*u,_=-2*u;else if(o===so)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const As=new P,Fn=new Ne,qm=new P(0,0,0),jm=new P(1,1,1),Pi=new P,va=new P,hn=new P,qh=new Ne,jh=new Ei;class ii{constructor(e=0,t=0,n=0,i=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jh.setFromEuler(this),this.setFromQuaternion(jh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $m=0;const $h=new P,Cs=new Ei,ui=new Ne,ya=new P,Mr=new P,Km=new P,Zm=new Ei,Kh=new P(1,0,0),Zh=new P(0,1,0),Jh=new P(0,0,1),Qh={type:"added"},Jm={type:"removed"},Rs={type:"childadded",child:null},No={type:"childremoved",child:null};class pt extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new P,t=new ii,n=new Ei,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Fe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ya.copy(e):ya.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Mr,ya,this.up):ui.lookAt(ya,Mr,this.up),this.quaternion.setFromRotationMatrix(ui),i&&(ui.extractRotation(i.matrixWorld),Cs.setFromRotationMatrix(ui),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jm),No.child=e,this.dispatchEvent(No),No.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,Km),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new P(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new P,di=new P,Oo=new P,fi=new P,Ps=new P,Ls=new P,eu=new P,Fo=new P,Bo=new P,zo=new P,Go=new et,Vo=new et,Ho=new et;class Hn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bn.subVectors(e,t),i.cross(Bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Bn.subVectors(i,t),di.subVectors(n,t),Oo.subVectors(e,t);const a=Bn.dot(Bn),o=Bn.dot(di),l=Bn.dot(Oo),c=di.dot(di),h=di.dot(Oo),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Go.setScalar(0),Vo.setScalar(0),Ho.setScalar(0),Go.fromBufferAttribute(e,t),Vo.fromBufferAttribute(e,n),Ho.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Go,s.x),a.addScaledVector(Vo,s.y),a.addScaledVector(Ho,s.z),a}static isFrontFacing(e,t,n,i){return Bn.subVectors(n,t),di.subVectors(e,t),Bn.cross(di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Bn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ps.subVectors(i,n),Ls.subVectors(s,n),Fo.subVectors(e,n);const l=Ps.dot(Fo),c=Ls.dot(Fo);if(l<=0&&c<=0)return t.copy(n);Bo.subVectors(e,i);const h=Ps.dot(Bo),u=Ls.dot(Bo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ps,a);zo.subVectors(e,s);const f=Ps.dot(zo),g=Ls.dot(zo);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ls,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return eu.subVectors(s,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(eu,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Ps,a).addScaledVector(Ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},xa={h:0,s:0,l:0};function Wo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Gc(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Wo(a,s,e+1/3),this.g=Wo(a,s,e),this.b=Wo(a,s,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=ft){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){const n=rf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return Ye.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Ge(Ht.r*255,0,255))*65536+Math.round(Ge(Ht.g*255,0,255))*256+Math.round(Ge(Ht.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,s=Ht.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=ft){Ye.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(xa);const n=kr(Li.h,xa.h,t),i=kr(Li.s,xa.s,t),s=kr(Li.l,xa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new me;me.NAMES=rf;let Qm=0;class ti extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=fs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=wl,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sl&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pn extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new P,Ma=new re;let eg=0;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=io,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==io&&(e.usage=this.usage),e}}class af extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class of extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let tg=0;const wn=new Ne,Xo=new pt,Is=new P,un=new Xn,br=new Xn,Nt=new P;class Rt extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nf(e)?of:af)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];br.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(un.min,br.min),un.expandByPoint(Nt),Nt.addVectors(un.max,br.max),un.expandByPoint(Nt)):(un.expandByPoint(br.min),un.expandByPoint(br.max))}un.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(Is.fromBufferAttribute(e,c),Nt.add(Is)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new P,l[C]=new P;const c=new P,h=new P,u=new P,d=new re,f=new re,g=new re,_=new P,m=new P;function p(C,M,b){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[C].add(_),o[M].add(_),o[b].add(_),l[C].add(m),l[M].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,M=y.length;C<M;++C){const b=y[C],L=b.start,O=b.count;for(let U=L,F=L+O;U<F;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new P,v=new P,S=new P,A=new P;function T(C){S.fromBufferAttribute(i,C),A.copy(S);const M=o[C];x.copy(M),x.sub(S.multiplyScalar(S.dot(M))).normalize(),v.crossVectors(A,M);const L=v.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,L)}for(let C=0,M=y.length;C<M;++C){const b=y[C],L=b.start,O=b.count;for(let U=L,F=L+O;U<F;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ct(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tu=new Ne,Ji=new la,ba=new ri,nu=new P,Sa=new P,wa=new P,Ta=new P,Yo=new P,Ea=new P,iu=new P,Aa=new P;class K extends pt{constructor(e=new Rt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ea.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Yo.fromBufferAttribute(u,e),a?Ea.addScaledVector(Yo,h):Ea.addScaledVector(Yo.sub(t),h))}t.add(Ea)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(ba.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(ba,nu)===null||Ji.origin.distanceToSquared(nu)>(e.far-e.near)**2))&&(tu.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(tu),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,S=x;v<S;v+=3){const A=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);i=Ca(this,p,e,n,c,h,u,A,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);i=Ca(this,a,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,S=x;v<S;v+=3){const A=v,T=v+1,C=v+2;i=Ca(this,p,e,n,c,h,u,A,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,v=m+2;i=Ca(this,a,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ng(r,e,t,n,i,s,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===bi,o),l===null)return null;Aa.copy(o),Aa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Aa);return c<t.near||c>t.far?null:{distance:c,point:Aa.clone(),object:r}}function Ca(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Sa),r.getVertexPosition(l,wa),r.getVertexPosition(c,Ta);const h=ng(r,e,t,n,Sa,wa,Ta,iu);if(h){const u=new P;Hn.getBarycoord(iu,Sa,wa,Ta,u),i&&(h.uv=Hn.getInterpolatedAttribute(i,o,l,c,u,new re)),s&&(h.uv1=Hn.getInterpolatedAttribute(s,o,l,c,u,new re)),a&&(h.normal=Hn.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};Hn.getNormal(Sa,wa,Ta,d.normal),h.face=d,h.barycoord=u}return h}class He extends Rt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(_,m,p,y,x,v,S,A,T,C,M){const b=v/T,L=S/C,O=v/2,U=S/2,F=A/2,G=T+1,H=C+1;let X=0,z=0;const ie=new P;for(let ae=0;ae<H;ae++){const ve=ae*L-U;for(let Re=0;Re<G;Re++){const Ve=Re*b-O;ie[_]=Ve*y,ie[m]=ve*x,ie[p]=F,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[p]=A>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Re/T),u.push(1-ae/C),X+=1}}for(let ae=0;ae<C;ae++)for(let ve=0;ve<T;ve++){const Re=d+ve+G*ae,Ve=d+ve+G*(ae+1),q=d+(ve+1)+G*(ae+1),Y=d+(ve+1)+G*ae;l.push(Re,Ve,Y),l.push(Ve,q,Y),z+=6}o.addGroup(f,z,M),f+=z,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new He(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(r){const e={};for(let t=0;t<r.length;t++){const n=nr(r[t]);for(const i in n)e[i]=n[i]}return e}function ig(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function lf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const jr={clone:nr,merge:jt};var sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sg,this.fragmentShader=rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let cf=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Ii=new P,su=new re,ru=new re;class Kt extends cf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,su,ru),t.subVectors(ru,su)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ds=-90,ks=1;class ag extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(Ds,ks,e,t);i.layers=this.layers,this.add(i);const s=new Kt(Ds,ks,e,t);s.layers=this.layers,this.add(s);const a=new Kt(Ds,ks,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Ds,ks,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Ds,ks,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Ds,ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hf extends Dt{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class og extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new hf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new He(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:xi});s.uniforms.tEquirect.value=t;const a=new K(i,s),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=mn),new ag(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class it extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lg={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class cg extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=io,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new P;class Wc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const au=new P,ou=new et,lu=new et,ug=new P,cu=new Ne,Ra=new P,jo=new ri,hu=new Ne,$o=new la;class dg extends K{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nh,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingSphere.expandByPoint(Ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(i),e.ray.intersectsSphere(jo)!==!1&&(hu.copy(i).invert(),$o.copy(e.ray).applyMatrix4(hu),!(this.boundingBox!==null&&$o.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$o)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===om?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ou.fromBufferAttribute(i.attributes.skinIndex,e),lu.fromBufferAttribute(i.attributes.skinWeight,e),au.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=lu.getComponent(s);if(a!==0){const o=ou.getComponent(s);cu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ug.copy(au).applyMatrix4(cu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class uf extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class df extends Dt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Jt,h=Jt,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=new Ne,fg=new Ne;class Xc{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:fg;uu.multiplyMatrices(o,t[s]),uu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Xc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new df(t,e,e,Rn,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new uf),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ui extends Ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Us=new Ne,du=new Ne,Pa=[],fu=new Xn,pg=new Ne,Sr=new K,wr=new ri;class go extends K{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ui(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,pg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),fu.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(fu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),wr.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(n),e.ray.intersectsSphere(wr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Us),du.multiplyMatrices(n,Us),Sr.matrixWorld=du,Sr.raycast(e,Pa);for(let a=0,o=Pa.length;a<o;a++){const l=Pa[a];l.instanceId=s,l.object=this,t.push(l)}Pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new df(new Float32Array(i*this.count),i,this.count,Oc,Wn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ko=new P,mg=new P,gg=new Fe;class as{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ko.subVectors(n,t).cross(mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ko),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gg.getNormalMatrix(e),i=this.coplanarPoint(Ko).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new ri,La=new P;class Yc{constructor(e=new as,t=new as,n=new as,i=new as,s=new as,a=new as){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-f,v-p).normalize(),n[1].setComponents(l+s,d+c,m+f,v+p).normalize(),n[2].setComponents(l+a,d+h,m+g,v+y).normalize(),n[3].setComponents(l-a,d-h,m-g,v-y).normalize(),n[4].setComponents(l-o,d-u,m-_,v-x).normalize(),t===yi)n[5].setComponents(l+o,d+u,m+_,v+x).normalize();else if(t===so)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(La.x=i.normal.x>0?e.max.x:e.min.x,La.y=i.normal.y>0?e.max.y:e.min.y,La.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ff extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ro=new P,ao=new P,pu=new Ne,Tr=new la,Ia=new ri,Zo=new P,mu=new P;class qc extends pt{constructor(e=new Rt,t=new ff){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ro.fromBufferAttribute(t,i-1),ao.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ro.distanceTo(ao);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(i),Ia.radius+=s,e.ray.intersectsSphere(Ia)===!1)return;pu.copy(i).invert(),Tr.copy(e.ray).applyMatrix4(pu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),y=h.getX(_+1),x=Da(this,e,Tr,l,p,y,_);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Da(this,e,Tr,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=Da(this,e,Tr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Da(this,e,Tr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Da(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(ro.fromBufferAttribute(o,i),ao.fromBufferAttribute(o,s),t.distanceSqToSegment(ro,ao,Zo,mu)>n)return;Zo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Zo);if(!(c<e.near||c>e.far))return{distance:c,point:mu.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const gu=new P,_u=new P;class _g extends qc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)gu.fromBufferAttribute(t,i),_u.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gu.distanceTo(_u);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vg extends qc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ur extends ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vu=new Ne,oc=new la,ka=new ri,Ua=new P;class Ka extends pt{constructor(e=new Rt,t=new Ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(i),ka.radius+=s,e.ray.intersectsSphere(ka)===!1)return;vu.copy(i).invert(),oc.copy(e.ray).applyMatrix4(vu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Ua.fromBufferAttribute(u,m),yu(Ua,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Ua.fromBufferAttribute(u,g),yu(Ua,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function yu(r,e,t,n,i,s,a){const o=oc.distanceSqToPoint(r);if(o<t){const l=new P;oc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class $n extends Dt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pf extends Dt{constructor(e,t,n,i,s,a,o,l,c,h=Hs){if(h!==Hs&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hs&&(n=vs),n===void 0&&h===er&&(n=Qs),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new re:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,i=[],s=[],a=[],o=new P,l=new Ne;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ge(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Ge(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jc extends ai{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yg extends jc{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function $c(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Na=new P,Jo=new $c,Qo=new $c,el=new $c;class lc extends ai{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Na.subVectors(i[0],i[1]).add(i[0]),c=Na);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Na.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Na),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Jo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Qo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),el.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Jo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Qo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),el.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Jo.calc(l),Qo.calc(l),el.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xu(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function xg(r,e){const t=1-r;return t*t*e}function Mg(r,e){return 2*(1-r)*r*e}function bg(r,e){return r*r*e}function Nr(r,e,t,n){return xg(r,e)+Mg(r,t)+bg(r,n)}function Sg(r,e){const t=1-r;return t*t*t*e}function wg(r,e){const t=1-r;return 3*t*t*r*e}function Tg(r,e){return 3*(1-r)*r*r*e}function Eg(r,e){return r*r*r*e}function Or(r,e,t,n,i){return Sg(r,e)+wg(r,t)+Tg(r,n)+Eg(r,i)}class mf extends ai{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Or(e,i.x,s.x,a.x,o.x),Or(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ag extends ai{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Or(e,i.x,s.x,a.x,o.x),Or(e,i.y,s.y,a.y,o.y),Or(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gf extends ai{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cg extends ai{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _f extends ai{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Nr(e,i.x,s.x,a.x),Nr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rg extends ai{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Nr(e,i.x,s.x,a.x),Nr(e,i.y,s.y,a.y),Nr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vf extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(xu(o,l.x,c.x,h.x,u.x),xu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var Mu=Object.freeze({__proto__:null,ArcCurve:yg,CatmullRomCurve3:lc,CubicBezierCurve:mf,CubicBezierCurve3:Ag,EllipseCurve:jc,LineCurve:gf,LineCurve3:Cg,QuadraticBezierCurve:_f,QuadraticBezierCurve3:Rg,SplineCurve:vf});class Pg extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Mu[i.type]().fromJSON(i))}return this}}class bu extends Pg{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new gf(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new _f(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new mf(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new vf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new jc(e,t,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Kc extends Rt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new P,h=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ue extends Rt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function y(){const v=new P,S=new P;let A=0;const T=(t-e)/n;for(let C=0;C<=s;C++){const M=[],b=C/s,L=b*(t-e)+e;for(let O=0;O<=i;O++){const U=O/i,F=U*l+o,G=Math.sin(F),H=Math.cos(F);S.x=L*G,S.y=-b*n+m,S.z=L*H,u.push(S.x,S.y,S.z),v.set(G,T,H).normalize(),d.push(v.x,v.y,v.z),f.push(U,1-b),M.push(g++)}_.push(M)}for(let C=0;C<i;C++)for(let M=0;M<s;M++){const b=_[M][C],L=_[M+1][C],O=_[M+1][C+1],U=_[M][C+1];(e>0||M!==0)&&(h.push(b,L,U),A+=3),(t>0||M!==s-1)&&(h.push(L,O,U),A+=3)}c.addGroup(p,A,0),p+=A}function x(v){const S=g,A=new re,T=new P;let C=0;const M=v===!0?e:t,b=v===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const L=g;for(let O=0;O<=i;O++){const F=O/i*l+o,G=Math.cos(F),H=Math.sin(F);T.x=M*H,T.y=m*b,T.z=M*G,u.push(T.x,T.y,T.z),d.push(0,b,0),A.x=G*.5+.5,A.y=H*.5*b+.5,f.push(A.x,A.y),g++}for(let O=0;O<i;O++){const U=S+O,F=L+O;v===!0?h.push(F,F+1,U):h.push(F+1,F,U),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ue(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qn extends Ue{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new qn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _o extends Rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new P,v=new P,S=new P;for(let A=0;A<t.length;A+=3)f(t[A+0],x),f(t[A+1],v),f(t[A+2],S),l(x,v,S,y)}function l(y,x,v,S){const A=S+1,T=[];for(let C=0;C<=A;C++){T[C]=[];const M=y.clone().lerp(v,C/A),b=x.clone().lerp(v,C/A),L=A-C;for(let O=0;O<=L;O++)O===0&&C===A?T[C][O]=M:T[C][O]=M.clone().lerp(b,O/L)}for(let C=0;C<A;C++)for(let M=0;M<2*(A-C)-1;M++){const b=Math.floor(M/2);M%2===0?(d(T[C][b+1]),d(T[C+1][b]),d(T[C][b])):(d(T[C][b+1]),d(T[C+1][b+1]),d(T[C+1][b]))}}function c(y){const x=new P;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(y),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function h(){const y=new P;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const v=m(y)/2/Math.PI+.5,S=p(y)/Math.PI+.5;a.push(v,1-S)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const x=a[y+0],v=a[y+2],S=a[y+4],A=Math.max(x,v,S),T=Math.min(x,v,S);A>.9&&T<.1&&(x<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),S<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,x){const v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const y=new P,x=new P,v=new P,S=new P,A=new re,T=new re,C=new re;for(let M=0,b=0;M<s.length;M+=9,b+=6){y.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),A.set(a[b+0],a[b+1]),T.set(a[b+2],a[b+3]),C.set(a[b+4],a[b+5]),S.copy(y).add(x).add(v).divideScalar(3);const L=m(S);_(A,b+0,y,L),_(T,b+2,x,L),_(C,b+4,v,L)}}function _(y,x,v,S){S<0&&y.x===1&&(a[x]=y.x-1),v.x===0&&v.z===0&&(a[x]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.vertices,e.indices,e.radius,e.details)}}class Zc extends _o{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zc(e.radius,e.detail)}}class yf extends bu{constructor(e){super(e),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new bu().fromJSON(i))}return this}}class Lg{static triangulate(e,t,n=2){const i=t&&t.length,s=i?t[0]*n:e.length;let a=xf(e,0,s,n,!0);const o=[];if(!a||a.next===a.prev)return o;let l,c,h,u,d,f,g;if(i&&(a=Ng(e,t,a,n)),e.length>80*n){l=h=e[0],c=u=e[1];for(let _=n;_<s;_+=n)d=e[_],f=e[_+1],d<l&&(l=d),f<c&&(c=f),d>h&&(h=d),f>u&&(u=f);g=Math.max(h-l,u-c),g=g!==0?32767/g:0}return $r(a,o,n,l,c,g,0),o}}function xf(r,e,t,n,i){let s,a;if(i===qg(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Su(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Su(s,r[s],r[s+1],a);return a&&vo(a,a.next)&&(Zr(a),a=a.next),a}function ys(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(vo(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $r(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Gg(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Dg(r,n,i,s):Ig(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Zr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=kg(ys(r),e,t),$r(r,e,t,n,i,s,2)):a===2&&Ug(r,e,t,n,i,s):$r(ys(r),e,t,n,i,s,1);break}}}function Ig(r){const e=r.prev,t=r,n=r.next;if(Mt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Bs(i,o,s,l,a,c,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Dg(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Mt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=cc(f,g,e,t,n),y=cc(_,m,e,t,n);let x=r.prevZ,v=r.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Bs(o,h,l,u,c,d,x.x,x.y)&&Mt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&Bs(o,h,l,u,c,d,v.x,v.y)&&Mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Bs(o,h,l,u,c,d,x.x,x.y)&&Mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&Bs(o,h,l,u,c,d,v.x,v.y)&&Mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function kg(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!vo(i,s)&&Mf(i,n,n.next,s)&&Kr(i,s)&&Kr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Zr(n),Zr(n.next),n=r=s),n=n.next}while(n!==r);return ys(n)}function Ug(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wg(a,o)){let l=bf(a,o);a=ys(a,a.next),l=ys(l,l.next),$r(a,e,t,n,i,s,0),$r(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function Ng(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=xf(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Hg(c));for(i.sort(Og),s=0;s<i.length;s++)t=Fg(i[s],t);return t}function Og(r,e){return r.x-e.x}function Fg(r,e){const t=Bg(r,e);if(!t)return e;const n=bf(t,r);return ys(n,n.next),ys(t,t.next)}function Bg(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&Bs(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(s-t.x),Kr(t,r)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&zg(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function zg(r,e){return Mt(r.prev,r,e.prev)<0&&Mt(e.next,r,r.next)<0}function Gg(r,e,t,n){let i=r;do i.z===0&&(i.z=cc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Vg(i)}function Vg(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function cc(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Hg(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Bs(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Wg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Xg(r,e)&&(Kr(r,e)&&Kr(e,r)&&Yg(r,e)&&(Mt(r.prev,r,e.prev)||Mt(r,e.prev,e))||vo(r,e)&&Mt(r.prev,r,r.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function vo(r,e){return r.x===e.x&&r.y===e.y}function Mf(r,e,t,n){const i=Fa(Mt(r,e,t)),s=Fa(Mt(r,e,n)),a=Fa(Mt(t,n,r)),o=Fa(Mt(t,n,e));return!!(i!==s&&a!==o||i===0&&Oa(r,t,e)||s===0&&Oa(r,n,e)||a===0&&Oa(t,r,n)||o===0&&Oa(t,e,n))}function Oa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Fa(r){return r>0?1:r<0?-1:0}function Xg(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Mf(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Kr(r,e){return Mt(r.prev,r,r.next)<0?Mt(r,e,r.next)>=0&&Mt(r,r.prev,e)>=0:Mt(r,e,r.prev)<0||Mt(r,r.next,e)<0}function Yg(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function bf(r,e){const t=new hc(r.i,r.x,r.y),n=new hc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Su(r,e,t,n){const i=new hc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function hc(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qg(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Fr{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Fr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];wu(e),Tu(n,e);let a=e.length;t.forEach(wu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Tu(n,t[l]);const o=Lg.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function wu(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Tu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Jr extends _o{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jr(e.radius,e.detail)}}class $t extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let x=0;x<c;x++){const v=x*u-s;g.push(v,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,v=y+c*(p+1),S=y+1+c*(p+1),A=y+1+c*p;f.push(x,v,A),f.push(v,S,A)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jc extends Rt{constructor(e=new yf([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new lt(i,3)),this.setAttribute("normal",new lt(s,3)),this.setAttribute("uv",new lt(a,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;Fr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Fr.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=Fr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];i.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],x=y[0]+u,v=y[1]+u,S=y[2]+u;n.push(x,v,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return jg(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new Jc(n,e.curveSegments)}}function jg(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Gn extends Rt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){const A=S/t;u.x=-e*Math.cos(i+A*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+A*s)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+v,1-x),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=h[p][y+1],v=h[p][y],S=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&f.push(x,v,A),(p!==n-1||l<Math.PI)&&f.push(v,S,A)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xs extends Rt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class $g extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fe extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ef,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yn extends fe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Kg extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zg extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ba(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Jg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Qg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Eu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Sf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class ca{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class e0 extends ca{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fh:s=e,o=2*t-n;break;case Bh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fh:a=e,l=2*n-t;break;case Bh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let S=0;S!==o;++S)s[S]=p*a[h+S]+y*a[c+S]+x*a[l+S]+v*a[u+S];return s}}class t0 extends ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class n0 extends ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class oi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new n0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new t0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new e0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case Yr:t=this.InterpolantFactoryMethodLinear;break;case Ao:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return Yr;case this.InterpolantFactoryMethodSmooth:return Ao}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Jg(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ao,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Yr;class fr extends oi{constructor(e,t,n){super(e,t,n)}}fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=Xr;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class wf extends oi{}wf.prototype.ValueTypeName="color";class ir extends oi{}ir.prototype.ValueTypeName="number";class i0 extends ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ei.slerpFlat(s,0,a,c-o,a,c,l);return s}}class sr extends oi{InterpolantFactoryMethodLinear(e){return new i0(this.times,this.values,this.getValueSize(),e)}}sr.prototype.ValueTypeName="quaternion";sr.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends oi{constructor(e,t,n){super(e,t,n)}}pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Xr;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;class rr extends oi{}rr.prototype.ValueTypeName="vector";class s0{constructor(e="",t=-1,n=[],i=lm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(a0(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(oi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Qg(l);l=Eu(l,1,h),c=Eu(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ir(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Sf(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new ir(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(rr,f+".position",d,"pos",i),n(sr,f+".quaternion",d,"rot",i),n(rr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function r0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ir;case"vector":case"vector2":case"vector3":case"vector4":return rr;case"color":return wf;case"quaternion":return sr;case"bool":case"boolean":return fr;case"string":return pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function a0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=r0(r.type);if(r.times===void 0){const t=[],n=[];Sf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Oi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Qc{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const o0=new Qc;class mr{constructor(e){this.manager=e!==void 0?e:o0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mr.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={};class l0 extends Error{constructor(e,t){super(e),this.response=t}}class Tf extends mr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Oi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:i});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=pi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,T=h.length;A<T;A++){const C=h[A];C.onProgress&&C.onProgress(S)}p.enqueue(v),y()}},x=>{p.error(x)})}}});return new Response(m)}else throw new l0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Oi.add(e,c);const h=pi[e];delete pi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=pi[e];if(h===void 0)throw this.manager.itemError(e),c;delete pi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class c0 extends mr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Oi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=qr("img");function l(){h(),Oi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class eh extends mr{constructor(e){super(e)}load(e,t,n,i){const s=new Dt,a=new c0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class yo extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class h0 extends yo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const tl=new Ne,Au=new P,Cu=new P;class th{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Au.setFromMatrixPosition(e.matrixWorld),t.position.copy(Au),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class u0 extends th{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=tr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class d0 extends yo{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new u0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ru=new Ne,Er=new P,nl=new P;class f0 extends th{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Er.setFromMatrixPosition(e.matrixWorld),n.position.copy(Er),nl.copy(n.position),nl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nl),n.updateMatrixWorld(),i.makeTranslation(-Er.x,-Er.y,-Er.z),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}}class Fs extends yo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new f0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xo extends cf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class p0 extends th{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uc extends yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new p0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Br{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class m0 extends mr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Oi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Oi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Oi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Oi.add(e,l),s.manager.itemStart(e)}}class g0 extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class _0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Pu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Pu(){return performance.now()}const nh="\\[\\]\\.:\\/",v0=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",y0="[^"+nh.replace("\\.","")+"]",x0=/((?:WC+[\/:])*)/.source.replace("WC",ih),M0=/(WCOD+)?/.source.replace("WCOD",y0),b0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),S0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),w0=new RegExp("^"+x0+M0+b0+S0+"$"),T0=["material","materials","bones","map"];class E0{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v0,"")}static parseTrackName(e){const t=w0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);T0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=E0;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Lu=new Ne;class A0{constructor(e,t,n=0,i=1/0){this.ray=new la(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(e,t=!0,n=[]){return dc(e,this,n,t),n.sort(Iu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)dc(e[i],this,n,t);return n.sort(Iu),n}}function Iu(r,e){return r.distance-e.distance}function dc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)dc(s[a],e,t,!0)}}function Du(r,e,t,n){const i=C0(n);switch(t){case qd:return r*e;case $d:return r*e;case Kd:return r*e*2;case Oc:return r*e/i.components*i.byteLength;case Fc:return r*e/i.components*i.byteLength;case Zd:return r*e*2/i.components*i.byteLength;case Bc:return r*e*2/i.components*i.byteLength;case jd:return r*e*3/i.components*i.byteLength;case Rn:return r*e*4/i.components*i.byteLength;case zc:return r*e*4/i.components*i.byteLength;case Xa:case Ya:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qa:case ja:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Ol:return Math.max(r,16)*Math.max(e,8)/4;case kl:case Nl:return Math.max(r,8)*Math.max(e,8)/2;case Fl:case Bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case $a:case tc:case nc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Jd:case ic:return Math.ceil(r/4)*Math.ceil(e/4)*8;case sc:case rc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C0(r){switch(r){case Si:case Wd:return{byteLength:1,components:1};case Wr:case Xd:case ei:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case vs:case kc:case Wn:return{byteLength:4,components:1};case Yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ef(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function R0(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
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
#endif`,I0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
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
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,B0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H0=`#ifdef USE_IRIDESCENCE
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
#endif`,W0=`#ifdef USE_BUMPMAP
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Q0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,e_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,t_=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
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
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
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
#endif`,d_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,f_=`#ifdef USE_FOG
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
#endif`,__=`#ifdef USE_GRADIENTMAP
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
}`,v_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,b_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,S_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
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
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,C_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R_=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B_=`#if defined( USE_POINTS_UV )
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
#endif`,z_=`float metalnessFactor = metalness;
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
#endif`,H_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`#ifdef USE_MORPHTARGETS
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
#endif`,Y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J_=`#ifdef USE_NORMALMAP
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
#endif`,Q_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,pv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gv=`#ifdef USE_SKINNING
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
#endif`,xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mv=`#if defined( TONE_MAPPING )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sv=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wv=`#ifdef USE_TRANSMISSION
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
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;const Rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pv=`uniform sampler2D t2D;
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
}`,Iv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
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
}`,Nv=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ov=`#define DISTANCE
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
}`,Fv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zv=`uniform sampler2D tEquirect;
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
}`,Hv=`#include <common>
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
}`,Wv=`uniform vec3 diffuse;
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
}`,Xv=`#define LAMBERT
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
}`,Yv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,qv=`#define MATCAP
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
}`,jv=`#define MATCAP
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
}`,$v=`#define NORMAL
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
}`,Kv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zv=`#define PHONG
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
}`,Jv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Qv=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
#include <packing>
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
#include <packing>
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
}`,ze={alphahash_fragment:P0,alphahash_pars_fragment:L0,alphamap_fragment:I0,alphamap_pars_fragment:D0,alphatest_fragment:k0,alphatest_pars_fragment:U0,aomap_fragment:N0,aomap_pars_fragment:O0,batching_pars_vertex:F0,batching_vertex:B0,begin_vertex:z0,beginnormal_vertex:G0,bsdfs:V0,iridescence_fragment:H0,bumpmap_pars_fragment:W0,clipping_planes_fragment:X0,clipping_planes_pars_fragment:Y0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:j0,color_fragment:$0,color_pars_fragment:K0,color_pars_vertex:Z0,color_vertex:J0,common:Q0,cube_uv_reflection_fragment:e_,defaultnormal_vertex:t_,displacementmap_pars_vertex:n_,displacementmap_vertex:i_,emissivemap_fragment:s_,emissivemap_pars_fragment:r_,colorspace_fragment:a_,colorspace_pars_fragment:o_,envmap_fragment:l_,envmap_common_pars_fragment:c_,envmap_pars_fragment:h_,envmap_pars_vertex:u_,envmap_physical_pars_fragment:b_,envmap_vertex:d_,fog_vertex:f_,fog_pars_vertex:p_,fog_fragment:m_,fog_pars_fragment:g_,gradientmap_pars_fragment:__,lightmap_pars_fragment:v_,lights_lambert_fragment:y_,lights_lambert_pars_fragment:x_,lights_pars_begin:M_,lights_toon_fragment:S_,lights_toon_pars_fragment:w_,lights_phong_fragment:T_,lights_phong_pars_fragment:E_,lights_physical_fragment:A_,lights_physical_pars_fragment:C_,lights_fragment_begin:R_,lights_fragment_maps:P_,lights_fragment_end:L_,logdepthbuf_fragment:I_,logdepthbuf_pars_fragment:D_,logdepthbuf_pars_vertex:k_,logdepthbuf_vertex:U_,map_fragment:N_,map_pars_fragment:O_,map_particle_fragment:F_,map_particle_pars_fragment:B_,metalnessmap_fragment:z_,metalnessmap_pars_fragment:G_,morphinstance_vertex:V_,morphcolor_vertex:H_,morphnormal_vertex:W_,morphtarget_pars_vertex:X_,morphtarget_vertex:Y_,normal_fragment_begin:q_,normal_fragment_maps:j_,normal_pars_fragment:$_,normal_pars_vertex:K_,normal_vertex:Z_,normalmap_pars_fragment:J_,clearcoat_normal_fragment_begin:Q_,clearcoat_normal_fragment_maps:ev,clearcoat_pars_fragment:tv,iridescence_pars_fragment:nv,opaque_fragment:iv,packing:sv,premultiplied_alpha_fragment:rv,project_vertex:av,dithering_fragment:ov,dithering_pars_fragment:lv,roughnessmap_fragment:cv,roughnessmap_pars_fragment:hv,shadowmap_pars_fragment:uv,shadowmap_pars_vertex:dv,shadowmap_vertex:fv,shadowmask_pars_fragment:pv,skinbase_vertex:mv,skinning_pars_vertex:gv,skinning_vertex:_v,skinnormal_vertex:vv,specularmap_fragment:yv,specularmap_pars_fragment:xv,tonemapping_fragment:Mv,tonemapping_pars_fragment:bv,transmission_fragment:Sv,transmission_pars_fragment:wv,uv_pars_fragment:Tv,uv_pars_vertex:Ev,uv_vertex:Av,worldpos_vertex:Cv,background_vert:Rv,background_frag:Pv,backgroundCube_vert:Lv,backgroundCube_frag:Iv,cube_vert:Dv,cube_frag:kv,depth_vert:Uv,depth_frag:Nv,distanceRGBA_vert:Ov,distanceRGBA_frag:Fv,equirect_vert:Bv,equirect_frag:zv,linedashed_vert:Gv,linedashed_frag:Vv,meshbasic_vert:Hv,meshbasic_frag:Wv,meshlambert_vert:Xv,meshlambert_frag:Yv,meshmatcap_vert:qv,meshmatcap_frag:jv,meshnormal_vert:$v,meshnormal_frag:Kv,meshphong_vert:Zv,meshphong_frag:Jv,meshphysical_vert:Qv,meshphysical_frag:ey,meshtoon_vert:ty,meshtoon_frag:ny,points_vert:iy,points_frag:sy,shadow_vert:ry,shadow_frag:ay,sprite_vert:oy,sprite_frag:ly},oe={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Kn={basic:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new me(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new me(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:jt([oe.points,oe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:jt([oe.common,oe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:jt([oe.sprite,oe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:jt([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:jt([oe.lights,oe.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Kn.physical={uniforms:jt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const za={r:0,b:0,g:0},es=new ii,cy=new Ne;function hy(r,e,t,n,i,s,a){const o=new me(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const S=g(x);S===null?p(o,l):S&&S.isColor&&(p(S,1),v=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===mo)?(h===void 0&&(h=new K(new He(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:nr(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),es.copy(v.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(es)),h.material.toneMapped=Ye.getTransfer(S.colorSpace)!==rt,(u!==S||d!==S.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new K(new $t(2,2),new Ot({name:"BackgroundMaterial",uniforms:nr(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(za,lf(r)),n.buffers.color.setClear(za.r,za.g,za.b,v,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m,dispose:y}}function uy(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(b,L,O,U,F){let G=!1;const H=u(U,O,L);s!==H&&(s=H,c(s.object)),G=f(b,U,O,F),G&&g(b,U,O,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(b,L,O,U),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,L,O){const U=O.wireframe===!0;let F=n[b.id];F===void 0&&(F={},n[b.id]=F);let G=F[L.id];G===void 0&&(G={},F[L.id]=G);let H=G[U];return H===void 0&&(H=d(l()),G[U]=H),H}function d(b){const L=[],O=[],U=[];for(let F=0;F<t;F++)L[F]=0,O[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:U,object:b,attributes:{},index:null}}function f(b,L,O,U){const F=s.attributes,G=L.attributes;let H=0;const X=O.getAttributes();for(const z in X)if(X[z].location>=0){const ae=F[z];let ve=G[z];if(ve===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor)),ae===void 0||ae.attribute!==ve||ve&&ae.data!==ve.data)return!0;H++}return s.attributesNum!==H||s.index!==U}function g(b,L,O,U){const F={},G=L.attributes;let H=0;const X=O.getAttributes();for(const z in X)if(X[z].location>=0){let ae=G[z];ae===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor));const ve={};ve.attribute=ae,ae&&ae.data&&(ve.data=ae.data),F[z]=ve,H++}s.attributes=F,s.attributesNum=H,s.index=U}function _(){const b=s.newAttributes;for(let L=0,O=b.length;L<O;L++)b[L]=0}function m(b){p(b,0)}function p(b,L){const O=s.newAttributes,U=s.enabledAttributes,F=s.attributeDivisors;O[b]=1,U[b]===0&&(r.enableVertexAttribArray(b),U[b]=1),F[b]!==L&&(r.vertexAttribDivisor(b,L),F[b]=L)}function y(){const b=s.newAttributes,L=s.enabledAttributes;for(let O=0,U=L.length;O<U;O++)L[O]!==b[O]&&(r.disableVertexAttribArray(O),L[O]=0)}function x(b,L,O,U,F,G,H){H===!0?r.vertexAttribIPointer(b,L,O,F,G):r.vertexAttribPointer(b,L,O,U,F,G)}function v(b,L,O,U){_();const F=U.attributes,G=O.getAttributes(),H=L.defaultAttributeValues;for(const X in G){const z=G[X];if(z.location>=0){let ie=F[X];if(ie===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ie!==void 0){const ae=ie.normalized,ve=ie.itemSize,Re=e.get(ie);if(Re===void 0)continue;const Ve=Re.buffer,q=Re.type,Y=Re.bytesPerElement,Q=q===r.INT||q===r.UNSIGNED_INT||ie.gpuType===kc;if(ie.isInterleavedBufferAttribute){const te=ie.data,pe=te.stride,De=ie.offset;if(te.isInstancedInterleavedBuffer){for(let Ee=0;Ee<z.locationSize;Ee++)p(z.location+Ee,te.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ee=0;Ee<z.locationSize;Ee++)m(z.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let Ee=0;Ee<z.locationSize;Ee++)x(z.location+Ee,ve/z.locationSize,q,ae,pe*Y,(De+ve/z.locationSize*Ee)*Y,Q)}else{if(ie.isInstancedBufferAttribute){for(let te=0;te<z.locationSize;te++)p(z.location+te,ie.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let te=0;te<z.locationSize;te++)m(z.location+te);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let te=0;te<z.locationSize;te++)x(z.location+te,ve/z.locationSize,q,ae,ve*Y,ve/z.locationSize*te*Y,Q)}}else if(H!==void 0){const ae=H[X];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(z.location,ae);break;case 3:r.vertexAttrib3fv(z.location,ae);break;case 4:r.vertexAttrib4fv(z.location,ae);break;default:r.vertexAttrib1fv(z.location,ae)}}}}y()}function S(){C();for(const b in n){const L=n[b];for(const O in L){const U=L[O];for(const F in U)h(U[F].object),delete U[F];delete L[O]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const O in L){const U=L[O];for(const F in U)h(U[F].object),delete U[F];delete L[O]}delete n[b.id]}function T(b){for(const L in n){const O=n[L];if(O[b.id]===void 0)continue;const U=O[b.id];for(const F in U)h(U[F].object),delete U[F];delete O[b.id]}}function C(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function dy(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function fy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Rn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Si&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Wn&&!C)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:S,maxSamples:A}}function py(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new as,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:n,x=y*4;let v=p.clippingState||null;l.value=v,v=h(g,d,x,f);for(let S=0;S!==x;++S)v[S]=t[S];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function my(r){let e=new WeakMap;function t(a,o){return o===Il?a.mapping=Zs:o===Dl&&(a.mapping=Js),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Il||o===Dl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new og(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const zs=4,ku=[.125,.215,.35,.446,.526,.582],hs=20,il=new xo,Uu=new me;let sl=null,rl=0,al=0,ol=!1;const os=(1+Math.sqrt(5))/2,Ns=1/os,Nu=[new P(-os,Ns,0),new P(os,Ns,0),new P(-Ns,0,os),new P(Ns,0,os),new P(0,os,-Ns),new P(0,os,Ns),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],gy=new P;class Ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=gy}=s;sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sl,rl,al),this._renderer.xr.enabled=ol,e.scissorTest=!1,Ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:ei,format:Rn,colorSpace:Qt,depthBuffer:!1},i=Fu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_y(s)),this._blurMaterial=vy(s,e,t)}return i}_compileMaterial(e){const t=new K(this._lodPlanes[0],e);this._renderer.compile(t,il)}_sceneToCubeUV(e,t,n,i,s){const l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Uu),u.toneMapping=Gi,u.autoClear=!1;const g=new Pn({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),_=new K(new He,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Uu),m=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const v=this._cubeSize;Ga(i,x*v,y>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zs||e.mapping===Js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new K(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ga(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,il)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nu[(i-s-1)%Nu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new K(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*hs-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):hs;m>hs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hs}`);const p=[];let y=0;for(let T=0;T<hs;++T){const C=T/_,M=Math.exp(-C*C/2);p.push(M),T===0?y+=M:T<m&&(y+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[i],S=3*v*(i>x-zs?i-x+zs:0),A=4*(this._cubeSize-v);Ga(t,S,A,3*v,2*v),l.setRenderTarget(t),l.render(u,il)}}function _y(r){const e=[],t=[],n=[];let i=r;const s=r-zs+1+ku.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-zs?l=ku[a-r+zs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,C=A>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(M,_*g*A),x.set(d,m*g*A);const b=[A,A,A,A,A,A];v.set(b,p*g*A)}const S=new Rt;S.setAttribute("position",new Ct(y,_)),S.setAttribute("uv",new Ct(x,m)),S.setAttribute("faceIndex",new Ct(v,p)),e.push(S),i>zs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fu(r,e,t){const n=new kn(r,e,t);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ga(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function vy(r,e,t){const n=new Float32Array(hs),i=new P(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Bu(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function zu(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yy(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Il||l===Dl,h=l===Zs||l===Js;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ou(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Ou(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function xy(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function My(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,v=y.length;x<v;x+=3){const S=y[x+0],A=y[x+1],T=y[x+2];d.push(S,A,A,T,T,S)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const S=x+0,A=x+1,T=x+2;d.push(S,A,A,T,T,S)}}else return;const m=new(nf(d)?of:af)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function by(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Sy(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function wy(r,e,t){const n=new WeakMap,i=new et;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let S=o.attributes.position.count*v,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*A*4*u),C=new sf(T,S,A,u);C.type=Wn,C.needsUpdate=!0;const M=v*4;for(let L=0;L<u;L++){const O=p[L],U=y[L],F=x[L],G=S*A*4*L;for(let H=0;H<O.count;H++){const X=H*M;g===!0&&(i.fromBufferAttribute(O,H),T[G+X+0]=i.x,T[G+X+1]=i.y,T[G+X+2]=i.z,T[G+X+3]=0),_===!0&&(i.fromBufferAttribute(U,H),T[G+X+4]=i.x,T[G+X+5]=i.y,T[G+X+6]=i.z,T[G+X+7]=0),m===!0&&(i.fromBufferAttribute(F,H),T[G+X+8]=i.x,T[G+X+9]=i.y,T[G+X+10]=i.z,T[G+X+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new re(S,A)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Ty(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Af=new Dt,Gu=new pf(1,1),Cf=new sf,Rf=new Xm,Pf=new hf,Vu=[],Hu=[],Wu=new Float32Array(16),Xu=new Float32Array(9),Yu=new Float32Array(4);function gr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Vu[i];if(s===void 0&&(s=new Float32Array(i),Vu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Mo(r,e){let t=Hu[e];t===void 0&&(t=new Int32Array(e),Hu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ey(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ay(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function Cy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function Ry(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function Py(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,n))return;Yu.set(n),r.uniformMatrix2fv(this.addr,!1,Yu),Ut(t,n)}}function Ly(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,n))return;Xu.set(n),r.uniformMatrix3fv(this.addr,!1,Xu),Ut(t,n)}}function Iy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,n))return;Wu.set(n),r.uniformMatrix4fv(this.addr,!1,Wu),Ut(t,n)}}function Dy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ky(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function Uy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function Ny(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function Oy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Fy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function By(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function zy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function Gy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Gu.compareFunction=tf,s=Gu):s=Af,t.setTexture2D(e||s,i)}function Vy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rf,i)}function Hy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pf,i)}function Wy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cf,i)}function Xy(r){switch(r){case 5126:return Ey;case 35664:return Ay;case 35665:return Cy;case 35666:return Ry;case 35674:return Py;case 35675:return Ly;case 35676:return Iy;case 5124:case 35670:return Dy;case 35667:case 35671:return ky;case 35668:case 35672:return Uy;case 35669:case 35673:return Ny;case 5125:return Oy;case 36294:return Fy;case 36295:return By;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Wy}}function Yy(r,e){r.uniform1fv(this.addr,e)}function qy(r,e){const t=gr(e,this.size,2);r.uniform2fv(this.addr,t)}function jy(r,e){const t=gr(e,this.size,3);r.uniform3fv(this.addr,t)}function $y(r,e){const t=gr(e,this.size,4);r.uniform4fv(this.addr,t)}function Ky(r,e){const t=gr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Zy(r,e){const t=gr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Jy(r,e){const t=gr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Qy(r,e){r.uniform1iv(this.addr,e)}function ex(r,e){r.uniform2iv(this.addr,e)}function tx(r,e){r.uniform3iv(this.addr,e)}function nx(r,e){r.uniform4iv(this.addr,e)}function ix(r,e){r.uniform1uiv(this.addr,e)}function sx(r,e){r.uniform2uiv(this.addr,e)}function rx(r,e){r.uniform3uiv(this.addr,e)}function ax(r,e){r.uniform4uiv(this.addr,e)}function ox(r,e,t){const n=this.cache,i=e.length,s=Mo(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Af,s[a])}function lx(r,e,t){const n=this.cache,i=e.length,s=Mo(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Rf,s[a])}function cx(r,e,t){const n=this.cache,i=e.length,s=Mo(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Pf,s[a])}function hx(r,e,t){const n=this.cache,i=e.length,s=Mo(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Cf,s[a])}function ux(r){switch(r){case 5126:return Yy;case 35664:return qy;case 35665:return jy;case 35666:return $y;case 35674:return Ky;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return Qy;case 35667:case 35671:return ex;case 35668:case 35672:return tx;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}class dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xy(t.type)}}class fx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ux(t.type)}}class px{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function qu(r,e){r.seq.push(e),r.map[e.id]=e}function mx(r,e,t){const n=r.name,i=n.length;for(ll.lastIndex=0;;){const s=ll.exec(n),a=ll.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){qu(t,c===void 0?new dx(o,r,e):new fx(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new px(o),qu(t,u)),t=u}}}class Za{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);mx(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ju(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const gx=37297;let _x=0;function vx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const $u=new Fe;function yx(r){Ye._getMatrix($u,Ye.workingColorSpace,r);const e=`mat3( ${$u.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(r)){case no:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ku(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+vx(r.getShaderSource(e),a)}else return i}function xx(r,e){const t=yx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Mx(r,e){let t;switch(e){case Nd:t="Linear";break;case Od:t="Reinhard";break;case Fd:t="Cineon";break;case Dc:t="ACESFilmic";break;case zd:t="AgX";break;case Gd:t="Neutral";break;case Bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Va=new P;function bx(){Ye.getLuminanceCoefficients(Va);const r=Va.x.toFixed(4),e=Va.y.toFixed(4),t=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function wx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Pr(r){return r!==""}function Zu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ju(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(r){return r.replace(Ex,Cx)}const Ax=new Map;function Cx(r,e){let t=ze[e];if(t===void 0){const n=Ax.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fc(t)}const Rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(r){return r.replace(Rx,Px)}function Px(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ed(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Dd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===kd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ix(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function kx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ud:e="ENVMAP_BLENDING_MULTIPLY";break;case rm:e="ENVMAP_BLENDING_MIX";break;case am:e="ENVMAP_BLENDING_ADD";break}return e}function Ux(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Nx(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Lx(t),c=Ix(t),h=Dx(t),u=kx(t),d=Ux(t),f=Sx(t),g=wx(s),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),p.length>0&&(p+=`
`)):(m=[ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),p=[ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?ze.tonemapping_pars_fragment:"",t.toneMapping!==Gi?Mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,xx("linearToOutputTexel",t.outputColorSpace),bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),a=fc(a),a=Zu(a,t),a=Ju(a,t),o=fc(o),o=Zu(o,t),o=Ju(o,t),a=Qu(a),o=Qu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,v=y+p+o,S=ju(i,i.VERTEX_SHADER,x),A=ju(i,i.FRAGMENT_SHADER,v);i.attachShader(_,S),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(L){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(S).trim(),F=i.getShaderInfoLog(A).trim();let G=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,A);else{const X=Ku(i,S,"vertex"),z=Ku(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+X+`
`+z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||F==="")&&(H=!1);H&&(L.diagnostics={runnable:G,programLog:O,vertexShader:{log:U,prefix:m},fragmentShader:{log:F,prefix:p}})}i.deleteShader(S),i.deleteShader(A),C=new Za(i,_),M=Tx(i,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,gx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_x++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=A,this}let Ox=0;class Fx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Bx(e),t.set(e,n)),n}}class Bx{constructor(e){this.id=Ox++,this.code=e,this.usedTimes=0}}function zx(r,e,t,n,i,s,a){const o=new Hc,l=new Fx,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,L,O,U){const F=O.fog,G=U.geometry,H=M.isMeshStandardMaterial?O.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),z=X&&X.mapping===mo?X.image.height:null,ie=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ae=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ve=ae!==void 0?ae.length:0;let Re=0;G.morphAttributes.position!==void 0&&(Re=1),G.morphAttributes.normal!==void 0&&(Re=2),G.morphAttributes.color!==void 0&&(Re=3);let Ve,q,Y,Q;if(ie){const st=Kn[ie];Ve=st.vertexShader,q=st.fragmentShader}else Ve=M.vertexShader,q=M.fragmentShader,l.update(M),Y=l.getVertexShaderID(M),Q=l.getFragmentShaderID(M);const te=r.getRenderTarget(),pe=r.state.buffers.depth.getReversed(),De=U.isInstancedMesh===!0,Ee=U.isBatchedMesh===!0,mt=!!M.map,ut=!!M.matcap,We=!!X,I=!!M.aoMap,Mn=!!M.lightMap,je=!!M.bumpMap,$e=!!M.normalMap,Te=!!M.displacementMap,gt=!!M.emissiveMap,Se=!!M.metalnessMap,R=!!M.roughnessMap,w=M.anisotropy>0,B=M.clearcoat>0,Z=M.dispersion>0,ee=M.iridescence>0,$=M.sheen>0,be=M.transmission>0,he=w&&!!M.anisotropyMap,_e=B&&!!M.clearcoatMap,Ze=B&&!!M.clearcoatNormalMap,se=B&&!!M.clearcoatRoughnessMap,ye=ee&&!!M.iridescenceMap,Pe=ee&&!!M.iridescenceThicknessMap,Le=$&&!!M.sheenColorMap,xe=$&&!!M.sheenRoughnessMap,Ke=!!M.specularMap,Be=!!M.specularColorMap,dt=!!M.specularIntensityMap,D=be&&!!M.transmissionMap,le=be&&!!M.thicknessMap,j=!!M.gradientMap,J=!!M.alphaMap,de=M.alphaTest>0,ue=!!M.alphaHash,Oe=!!M.extensions;let St=Gi;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(St=r.toneMapping);const Gt={shaderID:ie,shaderType:M.type,shaderName:M.name,vertexShader:Ve,fragmentShader:q,defines:M.defines,customVertexShaderID:Y,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&U._colorsTexture!==null,instancing:De,instancingColor:De&&U.instanceColor!==null,instancingMorph:De&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Qt,alphaToCoverage:!!M.alphaToCoverage,map:mt,matcap:ut,envMap:We,envMapMode:We&&X.mapping,envMapCubeUVHeight:z,aoMap:I,lightMap:Mn,bumpMap:je,normalMap:$e,displacementMap:d&&Te,emissiveMap:gt,normalMapObjectSpace:$e&&M.normalMapType===dm,normalMapTangentSpace:$e&&M.normalMapType===ef,metalnessMap:Se,roughnessMap:R,anisotropy:w,anisotropyMap:he,clearcoat:B,clearcoatMap:_e,clearcoatNormalMap:Ze,clearcoatRoughnessMap:se,dispersion:Z,iridescence:ee,iridescenceMap:ye,iridescenceThicknessMap:Pe,sheen:$,sheenColorMap:Le,sheenRoughnessMap:xe,specularMap:Ke,specularColorMap:Be,specularIntensityMap:dt,transmission:be,transmissionMap:D,thicknessMap:le,gradientMap:j,opaque:M.transparent===!1&&M.blending===fs&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:ue,combine:M.combine,mapUv:mt&&_(M.map.channel),aoMapUv:I&&_(M.aoMap.channel),lightMapUv:Mn&&_(M.lightMap.channel),bumpMapUv:je&&_(M.bumpMap.channel),normalMapUv:$e&&_(M.normalMap.channel),displacementMapUv:Te&&_(M.displacementMap.channel),emissiveMapUv:gt&&_(M.emissiveMap.channel),metalnessMapUv:Se&&_(M.metalnessMap.channel),roughnessMapUv:R&&_(M.roughnessMap.channel),anisotropyMapUv:he&&_(M.anisotropyMap.channel),clearcoatMapUv:_e&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(M.sheenRoughnessMap.channel),specularMapUv:Ke&&_(M.specularMap.channel),specularColorMapUv:Be&&_(M.specularColorMap.channel),specularIntensityMapUv:dt&&_(M.specularIntensityMap.channel),transmissionMapUv:D&&_(M.transmissionMap.channel),thicknessMapUv:le&&_(M.thicknessMap.channel),alphaMapUv:J&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&($e||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(mt||J),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:pe,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Re,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:St,decodeVideoTexture:mt&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===rt,decodeVideoTextureEmissive:gt&&M.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(M.emissiveMap.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Et,flipSided:M.side===Zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Oe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&M.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)b.push(L),b.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(b,M),x(b,M),b.push(r.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const b=g[M.type];let L;if(b){const O=Kn[b];L=jr.clone(O.uniforms)}else L=M.uniforms;return L}function S(M,b){let L;for(let O=0,U=h.length;O<U;O++){const F=h[O];if(F.cacheKey===b){L=F,++L.usedTimes;break}}return L===void 0&&(L=new Nx(r,b,M,s),h.push(L)),L}function A(M){if(--M.usedTimes===0){const b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function Gx(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Vx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function td(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function nd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Vx),n.length>1&&n.sort(d||td),i.length>1&&i.sort(d||td)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Hx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new nd,r.set(n,[a])):i>=s.length?(a=new nd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Wx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new me};break;case"SpotLight":t={position:new P,direction:new P,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function Xx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Yx=0;function qx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function jx(r){const e=new Wx,t=Xx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,s=new Ne,a=new Ne;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,x=0,v=0,S=0,A=0,T=0;c.sort(qx);for(let M=0,b=c.length;M<b;M++){const L=c[M],O=L.color,U=L.intensity,F=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*U,u+=O.g*U,d+=O.b*U;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],U);T++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,z=t.get(L);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=H,f++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(O).multiplyScalar(U),H.distance=F,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[_]=H;const X=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,X.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=X.matrix,L.castShadow){const z=t.get(L);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=G,v++}_++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(O).multiplyScalar(U),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const X=L.shadow,z=t.get(L);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(U),H.groundColor.copy(L.groundColor).multiplyScalar(U),n.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==S||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+S-A,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=S,C.numLightProbes=T,n.version=Yx++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function id(r){const e=new jx(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function $x(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new id(r),e.set(i,[o])):s>=a.length?(o=new id(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jx(r,e,t){let n=new Yc;const i=new re,s=new re,a=new et,o=new Kg({depthPacking:um}),l=new Zg,c={},h=t.maxTextureSize,u={[bi]:Zt,[Zt]:bi,[Et]:Et},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Kx,fragmentShader:Zx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new K(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dd;let p=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=r.getRenderTarget(),b=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),O=r.state;O.setBlending(xi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=p!==mi&&this.type===mi,F=p===mi&&this.type!==mi;for(let G=0,H=A.length;G<H;G++){const X=A[G],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ie=z.getFrameExtents();if(i.multiply(ie),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ie.x),i.x=s.x*ie.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ie.y),i.y=s.y*ie.y,z.mapSize.y=s.y)),z.map===null||U===!0||F===!0){const ve=this.type!==mi?{minFilter:Jt,magFilter:Jt}:{};z.map!==null&&z.map.dispose(),z.map=new kn(i.x,i.y,ve),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const ae=z.getViewportCount();for(let ve=0;ve<ae;ve++){const Re=z.getViewport(ve);a.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),O.viewport(a),z.updateMatrices(X,ve),n=z.getFrustum(),v(T,C,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===mi&&y(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,b,L)};function y(A,T){const C=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,C,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,C,f,_,null)}function x(A,T,C,M){let b=null;const L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)b=L;else if(b=C.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=b.uuid,U=T.uuid;let F=c[O];F===void 0&&(F={},c[O]=F);let G=F[U];G===void 0&&(G=b.clone(),F[U]=G,T.addEventListener("dispose",S)),b=G}if(b.visible=T.visible,b.wireframe=T.wireframe,M===mi?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=r.properties.get(b);O.light=C}return b}function v(A,T,C,M,b){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===mi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const U=e.update(A),F=A.material;if(Array.isArray(F)){const G=U.groups;for(let H=0,X=G.length;H<X;H++){const z=G[H],ie=F[z.materialIndex];if(ie&&ie.visible){const ae=x(A,ie,M,b);A.onBeforeShadow(r,A,T,C,U,ae,z),r.renderBufferDirect(C,null,U,ae,A,z),A.onAfterShadow(r,A,T,C,U,ae,z)}}}else if(F.visible){const G=x(A,F,M,b);A.onBeforeShadow(r,A,T,C,U,G,null),r.renderBufferDirect(C,null,U,G,A,null),A.onAfterShadow(r,A,T,C,U,G,null)}}const O=A.children;for(let U=0,F=O.length;U<F;U++)v(O[U],T,C,M,b)}function S(A){A.target.removeEventListener("dispose",S);for(const C in c){const M=c[C],b=A.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const Qx={[Tl]:El,[Al]:Pl,[Cl]:Ll,[Ks]:Rl,[El]:Tl,[Pl]:Al,[Ll]:Cl,[Rl]:Ks};function eM(r,e){function t(){let D=!1;const le=new et;let j=null;const J=new et(0,0,0,0);return{setMask:function(de){j!==de&&!D&&(r.colorMask(de,de,de,de),j=de)},setLocked:function(de){D=de},setClear:function(de,ue,Oe,St,Gt){Gt===!0&&(de*=St,ue*=St,Oe*=St),le.set(de,ue,Oe,St),J.equals(le)===!1&&(r.clearColor(de,ue,Oe,St),J.copy(le))},reset:function(){D=!1,j=null,J.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,j=null,J=null,de=null;return{setReversed:function(ue){if(le!==ue){const Oe=e.get("EXT_clip_control");le?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const St=de;de=null,this.setClear(St)}le=ue},getReversed:function(){return le},setTest:function(ue){ue?te(r.DEPTH_TEST):pe(r.DEPTH_TEST)},setMask:function(ue){j!==ue&&!D&&(r.depthMask(ue),j=ue)},setFunc:function(ue){if(le&&(ue=Qx[ue]),J!==ue){switch(ue){case Tl:r.depthFunc(r.NEVER);break;case El:r.depthFunc(r.ALWAYS);break;case Al:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case Cl:r.depthFunc(r.EQUAL);break;case Rl:r.depthFunc(r.GEQUAL);break;case Pl:r.depthFunc(r.GREATER);break;case Ll:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ue}},setLocked:function(ue){D=ue},setClear:function(ue){de!==ue&&(le&&(ue=1-ue),r.clearDepth(ue),de=ue)},reset:function(){D=!1,j=null,J=null,de=null,le=!1}}}function i(){let D=!1,le=null,j=null,J=null,de=null,ue=null,Oe=null,St=null,Gt=null;return{setTest:function(st){D||(st?te(r.STENCIL_TEST):pe(r.STENCIL_TEST))},setMask:function(st){le!==st&&!D&&(r.stencilMask(st),le=st)},setFunc:function(st,Un,li){(j!==st||J!==Un||de!==li)&&(r.stencilFunc(st,Un,li),j=st,J=Un,de=li)},setOp:function(st,Un,li){(ue!==st||Oe!==Un||St!==li)&&(r.stencilOp(st,Un,li),ue=st,Oe=Un,St=li)},setLocked:function(st){D=st},setClear:function(st){Gt!==st&&(r.clearStencil(st),Gt=st)},reset:function(){D=!1,le=null,j=null,J=null,de=null,ue=null,Oe=null,St=null,Gt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,S=null,A=null,T=new me(0,0,0),C=0,M=!1,b=null,L=null,O=null,U=null,F=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,X=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=X>=2);let ie=null,ae={};const ve=r.getParameter(r.SCISSOR_BOX),Re=r.getParameter(r.VIEWPORT),Ve=new et().fromArray(ve),q=new et().fromArray(Re);function Y(D,le,j,J){const de=new Uint8Array(4),ue=r.createTexture();r.bindTexture(D,ue),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Oe=0;Oe<j;Oe++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,de):r.texImage2D(le+Oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,de);return ue}const Q={};Q[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(Ks),je(!1),$e(Dh),te(r.CULL_FACE),I(xi);function te(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function pe(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function De(D,le){return u[D]!==le?(r.bindFramebuffer(D,le),u[D]=le,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=le),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=le),!0):!1}function Ee(D,le){let j=f,J=!1;if(D){j=d.get(le),j===void 0&&(j=[],d.set(le,j));const de=D.textures;if(j.length!==de.length||j[0]!==r.COLOR_ATTACHMENT0){for(let ue=0,Oe=de.length;ue<Oe;ue++)j[ue]=r.COLOR_ATTACHMENT0+ue;j.length=de.length,J=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,J=!0);J&&r.drawBuffers(j)}function mt(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const ut={[cs]:r.FUNC_ADD,[Vp]:r.FUNC_SUBTRACT,[Hp]:r.FUNC_REVERSE_SUBTRACT};ut[Wp]=r.MIN,ut[Xp]=r.MAX;const We={[Yp]:r.ZERO,[qp]:r.ONE,[jp]:r.SRC_COLOR,[Sl]:r.SRC_ALPHA,[em]:r.SRC_ALPHA_SATURATE,[Jp]:r.DST_COLOR,[Kp]:r.DST_ALPHA,[$p]:r.ONE_MINUS_SRC_COLOR,[wl]:r.ONE_MINUS_SRC_ALPHA,[Qp]:r.ONE_MINUS_DST_COLOR,[Zp]:r.ONE_MINUS_DST_ALPHA,[tm]:r.CONSTANT_COLOR,[nm]:r.ONE_MINUS_CONSTANT_COLOR,[im]:r.CONSTANT_ALPHA,[sm]:r.ONE_MINUS_CONSTANT_ALPHA};function I(D,le,j,J,de,ue,Oe,St,Gt,st){if(D===xi){_===!0&&(pe(r.BLEND),_=!1);return}if(_===!1&&(te(r.BLEND),_=!0),D!==Gp){if(D!==m||st!==M){if((p!==cs||v!==cs)&&(r.blendEquation(r.FUNC_ADD),p=cs,v=cs),st)switch(D){case fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hr:r.blendFunc(r.ONE,r.ONE);break;case kh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case kh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,x=null,S=null,A=null,T.set(0,0,0),C=0,m=D,M=st}return}de=de||le,ue=ue||j,Oe=Oe||J,(le!==p||de!==v)&&(r.blendEquationSeparate(ut[le],ut[de]),p=le,v=de),(j!==y||J!==x||ue!==S||Oe!==A)&&(r.blendFuncSeparate(We[j],We[J],We[ue],We[Oe]),y=j,x=J,S=ue,A=Oe),(St.equals(T)===!1||Gt!==C)&&(r.blendColor(St.r,St.g,St.b,Gt),T.copy(St),C=Gt),m=D,M=!1}function Mn(D,le){D.side===Et?pe(r.CULL_FACE):te(r.CULL_FACE);let j=D.side===Zt;le&&(j=!j),je(j),D.blending===fs&&D.transparent===!1?I(xi):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const J=D.stencilWrite;o.setTest(J),J&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function je(D){b!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),b=D)}function $e(D){D!==Bp?(te(r.CULL_FACE),D!==L&&(D===Dh?r.cullFace(r.BACK):D===zp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pe(r.CULL_FACE),L=D}function Te(D){D!==O&&(H&&r.lineWidth(D),O=D)}function gt(D,le,j){D?(te(r.POLYGON_OFFSET_FILL),(U!==le||F!==j)&&(r.polygonOffset(le,j),U=le,F=j)):pe(r.POLYGON_OFFSET_FILL)}function Se(D){D?te(r.SCISSOR_TEST):pe(r.SCISSOR_TEST)}function R(D){D===void 0&&(D=r.TEXTURE0+G-1),ie!==D&&(r.activeTexture(D),ie=D)}function w(D,le,j){j===void 0&&(ie===null?j=r.TEXTURE0+G-1:j=ie);let J=ae[j];J===void 0&&(J={type:void 0,texture:void 0},ae[j]=J),(J.type!==D||J.texture!==le)&&(ie!==j&&(r.activeTexture(j),ie=j),r.bindTexture(D,le||Q[D]),J.type=D,J.texture=le)}function B(){const D=ae[ie];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{r.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{r.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{r.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{r.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{r.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{r.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{r.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{r.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{r.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){Ve.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Ve.copy(D))}function xe(D){q.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Ke(D,le){let j=c.get(le);j===void 0&&(j=new WeakMap,c.set(le,j));let J=j.get(D);J===void 0&&(J=r.getUniformBlockIndex(le,D.name),j.set(D,J))}function Be(D,le){const J=c.get(le).get(D);l.get(le)!==J&&(r.uniformBlockBinding(le,J,D.__bindingPointIndex),l.set(le,J))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ie=null,ae={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,S=null,A=null,T=new me(0,0,0),C=0,M=!1,b=null,L=null,O=null,U=null,F=null,Ve.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:pe,bindFramebuffer:De,drawBuffers:Ee,useProgram:mt,setBlending:I,setMaterial:Mn,setFlipSided:je,setCullFace:$e,setLineWidth:Te,setPolygonOffset:gt,setScissorTest:Se,activeTexture:R,bindTexture:w,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:ye,texImage3D:Pe,updateUBOMapping:Ke,uniformBlockBinding:Be,texStorage2D:Ze,texStorage3D:se,texSubImage2D:$,texSubImage3D:be,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:Le,viewport:xe,reset:dt}}function tM(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return f?new OffscreenCanvas(R,w):qr("canvas")}function _(R,w,B){let Z=1;const ee=Se(R);if((ee.width>B||ee.height>B)&&(Z=B/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(Z*ee.width),be=Math.floor(Z*ee.height);u===void 0&&(u=g($,be));const he=w?g($,be):u;return he.width=$,he.height=be,he.getContext("2d").drawImage(R,0,0,$,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+be+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(R,w,B,Z,ee=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=w;if(w===r.RED&&(B===r.FLOAT&&($=r.R32F),B===r.HALF_FLOAT&&($=r.R16F),B===r.UNSIGNED_BYTE&&($=r.R8)),w===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.R8UI),B===r.UNSIGNED_SHORT&&($=r.R16UI),B===r.UNSIGNED_INT&&($=r.R32UI),B===r.BYTE&&($=r.R8I),B===r.SHORT&&($=r.R16I),B===r.INT&&($=r.R32I)),w===r.RG&&(B===r.FLOAT&&($=r.RG32F),B===r.HALF_FLOAT&&($=r.RG16F),B===r.UNSIGNED_BYTE&&($=r.RG8)),w===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RG8UI),B===r.UNSIGNED_SHORT&&($=r.RG16UI),B===r.UNSIGNED_INT&&($=r.RG32UI),B===r.BYTE&&($=r.RG8I),B===r.SHORT&&($=r.RG16I),B===r.INT&&($=r.RG32I)),w===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGB8UI),B===r.UNSIGNED_SHORT&&($=r.RGB16UI),B===r.UNSIGNED_INT&&($=r.RGB32UI),B===r.BYTE&&($=r.RGB8I),B===r.SHORT&&($=r.RGB16I),B===r.INT&&($=r.RGB32I)),w===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGBA8UI),B===r.UNSIGNED_SHORT&&($=r.RGBA16UI),B===r.UNSIGNED_INT&&($=r.RGBA32UI),B===r.BYTE&&($=r.RGBA8I),B===r.SHORT&&($=r.RGBA16I),B===r.INT&&($=r.RGBA32I)),w===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),w===r.RGBA){const be=ee?no:Ye.getTransfer(Z);B===r.FLOAT&&($=r.RGBA32F),B===r.HALF_FLOAT&&($=r.RGBA16F),B===r.UNSIGNED_BYTE&&($=be===rt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(R,w){let B;return R?w===null||w===vs||w===Qs?B=r.DEPTH24_STENCIL8:w===Wn?B=r.DEPTH32F_STENCIL8:w===Wr&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===vs||w===Qs?B=r.DEPTH_COMPONENT24:w===Wn?B=r.DEPTH_COMPONENT32F:w===Wr&&(B=r.DEPTH_COMPONENT16),B}function S(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==mn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function A(R){const w=R.target;w.removeEventListener("dispose",A),C(w),w.isVideoTexture&&h.delete(w)}function T(R){const w=R.target;w.removeEventListener("dispose",T),b(w)}function C(R){const w=n.get(R);if(w.__webglInit===void 0)return;const B=R.source,Z=d.get(B);if(Z){const ee=Z[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(R),Object.keys(Z).length===0&&d.delete(B)}n.remove(R)}function M(R){const w=n.get(R);r.deleteTexture(w.__webglTexture);const B=R.source,Z=d.get(B);delete Z[w.__cacheKey],a.memory.textures--}function b(R){const w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let ee=0;ee<w.__webglFramebuffer[Z].length;ee++)r.deleteFramebuffer(w.__webglFramebuffer[Z][ee]);else r.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)r.deleteFramebuffer(w.__webglFramebuffer[Z]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const B=R.textures;for(let Z=0,ee=B.length;Z<ee;Z++){const $=n.get(B[Z]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(B[Z])}n.remove(R)}let L=0;function O(){L=0}function U(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function F(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function G(R,w){const B=n.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,R,w);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+w)}function H(R,w){const B=n.get(R);if(R.version>0&&B.__version!==R.version){q(B,R,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+w)}function X(R,w){const B=n.get(R);if(R.version>0&&B.__version!==R.version){q(B,R,w);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+w)}function z(R,w){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Y(B,R,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+w)}const ie={[Jn]:r.REPEAT,[Ni]:r.CLAMP_TO_EDGE,[to]:r.MIRRORED_REPEAT},ae={[Jt]:r.NEAREST,[Hd]:r.NEAREST_MIPMAP_NEAREST,[Rr]:r.NEAREST_MIPMAP_LINEAR,[mn]:r.LINEAR,[Wa]:r.LINEAR_MIPMAP_NEAREST,[Cn]:r.LINEAR_MIPMAP_LINEAR},ve={[fm]:r.NEVER,[ym]:r.ALWAYS,[pm]:r.LESS,[tf]:r.LEQUAL,[mm]:r.EQUAL,[vm]:r.GEQUAL,[gm]:r.GREATER,[_m]:r.NOTEQUAL};function Re(R,w){if(w.type===Wn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===mn||w.magFilter===Wa||w.magFilter===Rr||w.magFilter===Cn||w.minFilter===mn||w.minFilter===Wa||w.minFilter===Rr||w.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ie[w.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ie[w.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ie[w.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ae[w.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ae[w.minFilter]),w.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ve[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Jt||w.minFilter!==Rr&&w.minFilter!==Cn||w.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ve(R,w){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",A));const Z=w.source;let ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));const $=F(w);if($!==R.__cacheKey){ee[$]===void 0&&(ee[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ee[$].usedTimes++;const be=ee[R.__cacheKey];be!==void 0&&(ee[R.__cacheKey].usedTimes--,be.usedTimes===0&&M(w)),R.__cacheKey=$,R.__webglTexture=ee[$].texture}return B}function q(R,w,B){let Z=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=r.TEXTURE_3D);const ee=Ve(R,w),$=w.source;t.bindTexture(Z,R.__webglTexture,r.TEXTURE0+B);const be=n.get($);if($.version!==be.__version||ee===!0){t.activeTexture(r.TEXTURE0+B);const he=Ye.getPrimaries(Ye.workingColorSpace),_e=w.colorSpace===ki?null:Ye.getPrimaries(w.colorSpace),Ze=w.colorSpace===ki||he===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let se=_(w.image,!1,i.maxTextureSize);se=gt(w,se);const ye=s.convert(w.format,w.colorSpace),Pe=s.convert(w.type);let Le=x(w.internalFormat,ye,Pe,w.colorSpace,w.isVideoTexture);Re(Z,w);let xe;const Ke=w.mipmaps,Be=w.isVideoTexture!==!0,dt=be.__version===void 0||ee===!0,D=$.dataReady,le=S(w,se);if(w.isDepthTexture)Le=v(w.format===er,w.type),dt&&(Be?t.texStorage2D(r.TEXTURE_2D,1,Le,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Le,se.width,se.height,0,ye,Pe,null));else if(w.isDataTexture)if(Ke.length>0){Be&&dt&&t.texStorage2D(r.TEXTURE_2D,le,Le,Ke[0].width,Ke[0].height);for(let j=0,J=Ke.length;j<J;j++)xe=Ke[j],Be?D&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,xe.width,xe.height,ye,Pe,xe.data):t.texImage2D(r.TEXTURE_2D,j,Le,xe.width,xe.height,0,ye,Pe,xe.data);w.generateMipmaps=!1}else Be?(dt&&t.texStorage2D(r.TEXTURE_2D,le,Le,se.width,se.height),D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,ye,Pe,se.data)):t.texImage2D(r.TEXTURE_2D,0,Le,se.width,se.height,0,ye,Pe,se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Be&&dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,Le,Ke[0].width,Ke[0].height,se.depth);for(let j=0,J=Ke.length;j<J;j++)if(xe=Ke[j],w.format!==Rn)if(ye!==null)if(Be){if(D)if(w.layerUpdates.size>0){const de=Du(xe.width,xe.height,w.format,w.type);for(const ue of w.layerUpdates){const Oe=xe.data.subarray(ue*de/xe.data.BYTES_PER_ELEMENT,(ue+1)*de/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,ue,xe.width,xe.height,1,ye,Oe)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,se.depth,ye,xe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Le,xe.width,xe.height,se.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,se.depth,ye,Pe,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,Le,xe.width,xe.height,se.depth,0,ye,Pe,xe.data)}else{Be&&dt&&t.texStorage2D(r.TEXTURE_2D,le,Le,Ke[0].width,Ke[0].height);for(let j=0,J=Ke.length;j<J;j++)xe=Ke[j],w.format!==Rn?ye!==null?Be?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,j,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,xe.width,xe.height,ye,Pe,xe.data):t.texImage2D(r.TEXTURE_2D,j,Le,xe.width,xe.height,0,ye,Pe,xe.data)}else if(w.isDataArrayTexture)if(Be){if(dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,Le,se.width,se.height,se.depth),D)if(w.layerUpdates.size>0){const j=Du(se.width,se.height,w.format,w.type);for(const J of w.layerUpdates){const de=se.data.subarray(J*j/se.data.BYTES_PER_ELEMENT,(J+1)*j/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,ye,Pe,de)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ye,Pe,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,se.width,se.height,se.depth,0,ye,Pe,se.data);else if(w.isData3DTexture)Be?(dt&&t.texStorage3D(r.TEXTURE_3D,le,Le,se.width,se.height,se.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ye,Pe,se.data)):t.texImage3D(r.TEXTURE_3D,0,Le,se.width,se.height,se.depth,0,ye,Pe,se.data);else if(w.isFramebufferTexture){if(dt)if(Be)t.texStorage2D(r.TEXTURE_2D,le,Le,se.width,se.height);else{let j=se.width,J=se.height;for(let de=0;de<le;de++)t.texImage2D(r.TEXTURE_2D,de,Le,j,J,0,ye,Pe,null),j>>=1,J>>=1}}else if(Ke.length>0){if(Be&&dt){const j=Se(Ke[0]);t.texStorage2D(r.TEXTURE_2D,le,Le,j.width,j.height)}for(let j=0,J=Ke.length;j<J;j++)xe=Ke[j],Be?D&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,ye,Pe,xe):t.texImage2D(r.TEXTURE_2D,j,Le,ye,Pe,xe);w.generateMipmaps=!1}else if(Be){if(dt){const j=Se(se);t.texStorage2D(r.TEXTURE_2D,le,Le,j.width,j.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,Pe,se)}else t.texImage2D(r.TEXTURE_2D,0,Le,ye,Pe,se);m(w)&&p(Z),be.__version=$.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Y(R,w,B){if(w.image.length!==6)return;const Z=Ve(R,w),ee=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const $=n.get(ee);if(ee.version!==$.__version||Z===!0){t.activeTexture(r.TEXTURE0+B);const be=Ye.getPrimaries(Ye.workingColorSpace),he=w.colorSpace===ki?null:Ye.getPrimaries(w.colorSpace),_e=w.colorSpace===ki||be===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ze=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,ye=[];for(let J=0;J<6;J++)!Ze&&!se?ye[J]=_(w.image[J],!0,i.maxCubemapSize):ye[J]=se?w.image[J].image:w.image[J],ye[J]=gt(w,ye[J]);const Pe=ye[0],Le=s.convert(w.format,w.colorSpace),xe=s.convert(w.type),Ke=x(w.internalFormat,Le,xe,w.colorSpace),Be=w.isVideoTexture!==!0,dt=$.__version===void 0||Z===!0,D=ee.dataReady;let le=S(w,Pe);Re(r.TEXTURE_CUBE_MAP,w);let j;if(Ze){Be&&dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,Ke,Pe.width,Pe.height);for(let J=0;J<6;J++){j=ye[J].mipmaps;for(let de=0;de<j.length;de++){const ue=j[de];w.format!==Rn?Le!==null?Be?D&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,ue.width,ue.height,Le,ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Ke,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,ue.width,ue.height,Le,xe,ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Ke,ue.width,ue.height,0,Le,xe,ue.data)}}}else{if(j=w.mipmaps,Be&&dt){j.length>0&&le++;const J=Se(ye[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,le,Ke,J.width,J.height)}for(let J=0;J<6;J++)if(se){Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ye[J].width,ye[J].height,Le,xe,ye[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ke,ye[J].width,ye[J].height,0,Le,xe,ye[J].data);for(let de=0;de<j.length;de++){const Oe=j[de].image[J].image;Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Oe.width,Oe.height,Le,xe,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Ke,Oe.width,Oe.height,0,Le,xe,Oe.data)}}else{Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,xe,ye[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ke,Le,xe,ye[J]);for(let de=0;de<j.length;de++){const ue=j[de];Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Le,xe,ue.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Ke,Le,xe,ue.image[J])}}}m(w)&&p(r.TEXTURE_CUBE_MAP),$.__version=ee.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Q(R,w,B,Z,ee,$){const be=s.convert(B.format,B.colorSpace),he=s.convert(B.type),_e=x(B.internalFormat,be,he,B.colorSpace),Ze=n.get(w),se=n.get(B);if(se.__renderTarget=w,!Ze.__hasExternalTextures){const ye=Math.max(1,w.width>>$),Pe=Math.max(1,w.height>>$);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,$,_e,ye,Pe,w.depth,0,be,he,null):t.texImage2D(ee,$,_e,ye,Pe,0,be,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),$e(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,ee,se.__webglTexture,0,je(w)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,ee,se.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(R,w,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),w.depthBuffer){const Z=w.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,$=v(w.stencilBuffer,ee),be=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=je(w);$e(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,$,w.width,w.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,$,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,$,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,R)}else{const Z=w.textures;for(let ee=0;ee<Z.length;ee++){const $=Z[ee],be=s.convert($.format,$.colorSpace),he=s.convert($.type),_e=x($.internalFormat,be,he,$.colorSpace),Ze=je(w);B&&$e(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,_e,w.width,w.height):$e(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,_e,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,_e,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(w.depthTexture);Z.__renderTarget=w,(!Z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const ee=Z.__webglTexture,$=je(w);if(w.depthTexture.format===Hs)$e(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(w.depthTexture.format===er)$e(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function De(R){const w=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const ee=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),w.__depthDisposeCallback=ee}w.__boundDepthTexture=Z}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");pe(w.__webglFramebuffer,R)}else if(B){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=r.createRenderbuffer(),te(w.__webglDepthbuffer[Z],R,!1);else{const ee=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=w.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,$)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),te(w.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ee)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(R,w,B){const Z=n.get(R);w!==void 0&&Q(Z.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&De(R)}function mt(R){const w=R.texture,B=n.get(R),Z=n.get(w);R.addEventListener("dispose",T);const ee=R.textures,$=R.isWebGLCubeRenderTarget===!0,be=ee.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=w.version,a.memory.textures++),$){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let _e=0;_e<w.mipmaps.length;_e++)B.__webglFramebuffer[he][_e]=r.createFramebuffer()}else B.__webglFramebuffer[he]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)B.__webglFramebuffer[he]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(be)for(let he=0,_e=ee.length;he<_e;he++){const Ze=n.get(ee[he]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&$e(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<ee.length;he++){const _e=ee[he];B.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const Ze=s.convert(_e.format,_e.colorSpace),se=s.convert(_e.type),ye=x(_e.internalFormat,Ze,se,_e.colorSpace,R.isXRRenderTarget===!0),Pe=je(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,ye,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,B.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),te(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Re(r.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)Q(B.__webglFramebuffer[he][_e],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else Q(B.__webglFramebuffer[he],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(w)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let he=0,_e=ee.length;he<_e;he++){const Ze=ee[he],se=n.get(Ze);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),Re(r.TEXTURE_2D,Ze),Q(B.__webglFramebuffer,R,Ze,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,0),m(Ze)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,Z.__webglTexture),Re(he,w),w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)Q(B.__webglFramebuffer[_e],R,w,r.COLOR_ATTACHMENT0,he,_e);else Q(B.__webglFramebuffer,R,w,r.COLOR_ATTACHMENT0,he,0);m(w)&&p(he),t.unbindTexture()}R.depthBuffer&&De(R)}function ut(R){const w=R.textures;for(let B=0,Z=w.length;B<Z;B++){const ee=w[B];if(m(ee)){const $=y(R),be=n.get(ee).__webglTexture;t.bindTexture($,be),p($),t.unbindTexture()}}}const We=[],I=[];function Mn(R){if(R.samples>0){if($e(R)===!1){const w=R.textures,B=R.width,Z=R.height;let ee=r.COLOR_BUFFER_BIT;const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=n.get(R),he=w.length>1;if(he)for(let _e=0;_e<w.length;_e++)t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let _e=0;_e<w.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);const Ze=n.get(w[_e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ze,0)}r.blitFramebuffer(0,0,B,Z,0,0,B,Z,ee,r.NEAREST),l===!0&&(We.length=0,I.length=0,We.push(r.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(We.push($),I.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<w.length;_e++){t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);const Ze=n.get(w[_e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,Ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function je(R){return Math.min(i.maxSamples,R.samples)}function $e(R){const w=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Te(R){const w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function gt(R,w){const B=R.colorSpace,Z=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Qt&&B!==ki&&(Ye.getTransfer(B)===rt?(Z!==Rn||ee!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}function Se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=Ee,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=$e}function nM(r,e){function t(n,i=ki){let s;const a=Ye.getTransfer(i);if(n===Si)return r.UNSIGNED_BYTE;if(n===Uc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Yd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Wd)return r.BYTE;if(n===Xd)return r.SHORT;if(n===Wr)return r.UNSIGNED_SHORT;if(n===kc)return r.INT;if(n===vs)return r.UNSIGNED_INT;if(n===Wn)return r.FLOAT;if(n===ei)return r.HALF_FLOAT;if(n===qd)return r.ALPHA;if(n===jd)return r.RGB;if(n===Rn)return r.RGBA;if(n===$d)return r.LUMINANCE;if(n===Kd)return r.LUMINANCE_ALPHA;if(n===Hs)return r.DEPTH_COMPONENT;if(n===er)return r.DEPTH_STENCIL;if(n===Oc)return r.RED;if(n===Fc)return r.RED_INTEGER;if(n===Zd)return r.RG;if(n===Bc)return r.RG_INTEGER;if(n===zc)return r.RGBA_INTEGER;if(n===Xa||n===Ya||n===qa||n===ja)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===Ul||n===Nl||n===Ol)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fl||n===Bl||n===zl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fl||n===Bl)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gl||n===Vl||n===Hl||n===Wl||n===Xl||n===Yl||n===ql||n===jl||n===$l||n===Kl||n===Zl||n===Jl||n===Ql||n===ec)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ql)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$a||n===tc||n===nc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===$a)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jd||n===ic||n===sc||n===rc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===$a)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const iM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sM=`
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

}`;class rM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Dt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ot({vertexShader:iM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new $t(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aM extends dr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new rM,m=t.getContextAttributes();let p=null,y=null;const x=[],v=[],S=new re;let A=null;const T=new Kt;T.viewport=new et;const C=new Kt;C.viewport=new et;const M=[T,C],b=new g0;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Y=x[q];return Y===void 0&&(Y=new qo,x[q]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(q){let Y=x[q];return Y===void 0&&(Y=new qo,x[q]=Y),Y.getGripSpace()},this.getHand=function(q){let Y=x[q];return Y===void 0&&(Y=new qo,x[q]=Y),Y.getHandSpace()};function U(q){const Y=v.indexOf(q.inputSource);if(Y===-1)return;const Q=x[Y];Q!==void 0&&(Q.update(q.inputSource,q.frame,c||a),Q.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",G);for(let q=0;q<x.length;q++){const Y=v[q];Y!==null&&(v[q]=null,x[q].disconnect(Y))}L=null,O=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",F),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(S),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,te=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?er:Hs,te=m.stencil?Qs:vs);const De={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(De),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new kn(d.textureWidth,d.textureHeight,{format:Rn,type:Si,depthTexture:new pf(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new kn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(q){for(let Y=0;Y<q.removed.length;Y++){const Q=q.removed[Y],te=v.indexOf(Q);te>=0&&(v[te]=null,x[te].disconnect(Q))}for(let Y=0;Y<q.added.length;Y++){const Q=q.added[Y];let te=v.indexOf(Q);if(te===-1){for(let De=0;De<x.length;De++)if(De>=v.length){v.push(Q),te=De;break}else if(v[De]===null){v[De]=Q,te=De;break}if(te===-1)break}const pe=x[te];pe&&pe.connect(Q)}}const H=new P,X=new P;function z(q,Y,Q){H.setFromMatrixPosition(Y.matrixWorld),X.setFromMatrixPosition(Q.matrixWorld);const te=H.distanceTo(X),pe=Y.projectionMatrix.elements,De=Q.projectionMatrix.elements,Ee=pe[14]/(pe[10]-1),mt=pe[14]/(pe[10]+1),ut=(pe[9]+1)/pe[5],We=(pe[9]-1)/pe[5],I=(pe[8]-1)/pe[0],Mn=(De[8]+1)/De[0],je=Ee*I,$e=Ee*Mn,Te=te/(-I+Mn),gt=Te*-I;if(Y.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(gt),q.translateZ(Te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),pe[10]===-1)q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Se=Ee+Te,R=mt+Te,w=je-gt,B=$e+(te-gt),Z=ut*mt/R*Se,ee=We*mt/R*Se;q.projectionMatrix.makePerspective(w,B,Z,ee,Se,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,Y){Y===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Y.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Y=q.near,Q=q.far;_.texture!==null&&(_.depthNear>0&&(Y=_.depthNear),_.depthFar>0&&(Q=_.depthFar)),b.near=C.near=T.near=Y,b.far=C.far=T.far=Q,(L!==b.near||O!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,O=b.far),T.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,b.layers.mask=T.layers.mask|C.layers.mask;const te=q.parent,pe=b.cameras;ie(b,te);for(let De=0;De<pe.length;De++)ie(pe[De],te);pe.length===2?z(b,T,C):b.projectionMatrix.copy(T.projectionMatrix),ae(q,b,te)};function ae(q,Y,Q){Q===null?q.matrix.copy(Y.matrixWorld):(q.matrix.copy(Q.matrixWorld),q.matrix.invert(),q.matrix.multiply(Y.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=tr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let ve=null;function Re(q,Y){if(h=Y.getViewerPose(c||a),g=Y,h!==null){const Q=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let te=!1;Q.length!==b.cameras.length&&(b.cameras.length=0,te=!0);for(let Ee=0;Ee<Q.length;Ee++){const mt=Q[Ee];let ut=null;if(f!==null)ut=f.getViewport(mt);else{const I=u.getViewSubImage(d,mt);ut=I.viewport,Ee===0&&(e.setRenderTargetTextures(y,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(y))}let We=M[Ee];We===void 0&&(We=new Kt,We.layers.enable(Ee),We.viewport=new et,M[Ee]=We),We.matrix.fromArray(mt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(mt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ut.x,ut.y,ut.width,ut.height),Ee===0&&(b.matrix.copy(We.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),te===!0&&b.cameras.push(We)}const pe=i.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Ee=u.getDepthInformation(Q[0]);Ee&&Ee.isValid&&Ee.texture&&_.init(e,Ee,i.renderState)}}for(let Q=0;Q<x.length;Q++){const te=v[Q],pe=x[Q];te!==null&&pe!==void 0&&pe.update(te,Y,c||a)}ve&&ve(q,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Ve=new Ef;Ve.setAnimationLoop(Re),this.setAnimationLoop=function(q){ve=q},this.dispose=function(){}}}const ts=new ii,oM=new Ne;function lM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,ts.copy(v),ts.x*=-1,ts.y*=-1,ts.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(oM.makeRotationFromEuler(ts)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function cM(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(y,S);const A=e.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function h(y){const x=u();y.__bindingPointIndex=x;const v=r.createBuffer(),S=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,S,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],v=y.uniforms,S=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,T=v.length;A<T;A++){const C=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,b=C.length;M<b;M++){const L=C[M];if(f(L,A,M,S)===!0){const O=L.__offset,U=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let G=0;G<U.length;G++){const H=U[G],X=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,O+F,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,F),F+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,x,v,S){const A=y.value,T=x+"_"+v;if(S[T]===void 0)return typeof A=="number"||typeof A=="boolean"?S[T]=A:S[T]=A.clone(),!0;{const C=S[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return S[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(y){const x=y.uniforms;let v=0;const S=16;for(let T=0,C=x.length;T<C;T++){const M=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,L=M.length;b<L;b++){const O=M[b],U=Array.isArray(O.value)?O.value:[O.value];for(let F=0,G=U.length;F<G;F++){const H=U[F],X=_(H),z=v%S,ie=z%X.boundary,ae=z+ie;v+=ie,ae!==0&&S-ae<X.storage&&(v+=S-ae),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=X.storage}}}const A=v%S;return A>0&&(v+=S-A),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class hM{constructor(e={}){const{canvas:t=Nm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this.toneMapping=Gi,this.toneMappingExposure=1;const v=this;let S=!1,A=0,T=0,C=null,M=-1,b=null;const L=new et,O=new et;let U=null;const F=new me(0);let G=0,H=t.width,X=t.height,z=1,ie=null,ae=null;const ve=new et(0,0,H,X),Re=new et(0,0,H,X);let Ve=!1;const q=new Yc;let Y=!1,Q=!1;this.transmissionResolutionScale=1;const te=new Ne,pe=new Ne,De=new P,Ee=new et,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function We(){return C===null?z:1}let I=n;function Mn(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ic}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ue,!1),I===null){const k="webgl2";if(I=Mn(k,E),I===null)throw Mn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let je,$e,Te,gt,Se,R,w,B,Z,ee,$,be,he,_e,Ze,se,ye,Pe,Le,xe,Ke,Be,dt,D;function le(){je=new xy(I),je.init(),Be=new nM(I,je),$e=new fy(I,je,e,Be),Te=new eM(I,je),$e.reverseDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),gt=new Sy(I),Se=new Gx,R=new tM(I,je,Te,Se,$e,Be,gt),w=new my(v),B=new yy(v),Z=new R0(I),dt=new uy(I,Z),ee=new My(I,Z,gt,dt),$=new Ty(I,ee,Z,gt),Le=new wy(I,$e,R),se=new py(Se),be=new zx(v,w,B,je,$e,dt,se),he=new lM(v,Se),_e=new Hx,Ze=new $x(je),Pe=new hy(v,w,B,Te,$,f,l),ye=new Jx(v,$,$e),D=new cM(I,gt,$e,Te),xe=new dy(I,je,gt),Ke=new by(I,je,gt),gt.programs=be.programs,v.capabilities=$e,v.extensions=je,v.properties=Se,v.renderLists=_e,v.shadowMap=ye,v.state=Te,v.info=gt}le();const j=new aM(v,I);this.xr=j,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(H,X,!1))},this.getSize=function(E){return E.set(H,X)},this.setSize=function(E,k,V=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,X=k,t.width=Math.floor(E*z),t.height=Math.floor(k*z),V===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(H*z,X*z).floor()},this.setDrawingBufferSize=function(E,k,V){H=E,X=k,z=V,t.width=Math.floor(E*V),t.height=Math.floor(k*V),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,k,V,W){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,k,V,W),Te.viewport(L.copy(ve).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,k,V,W){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,k,V,W),Te.scissor(O.copy(Re).multiplyScalar(z).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(E){Te.setScissorTest(Ve=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,V=!0){let W=0;if(E){let N=!1;if(C!==null){const ne=C.texture.format;N=ne===zc||ne===Bc||ne===Fc}if(N){const ne=C.texture.type,ce=ne===Si||ne===vs||ne===Wr||ne===Qs||ne===Uc||ne===Nc,ge=Pe.getClearColor(),Me=Pe.getClearAlpha(),Ie=ge.r,ke=ge.g,Ae=ge.b;ce?(g[0]=Ie,g[1]=ke,g[2]=Ae,g[3]=Me,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ie,_[1]=ke,_[2]=Ae,_[3]=Me,I.clearBufferiv(I.COLOR,0,_))}else W|=I.COLOR_BUFFER_BIT}k&&(W|=I.DEPTH_BUFFER_BIT),V&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Pe.dispose(),_e.dispose(),Ze.dispose(),Se.dispose(),w.dispose(),B.dispose(),$.dispose(),dt.dispose(),D.dispose(),be.dispose(),j.dispose(),j.removeEventListener("sessionstart",Th),j.removeEventListener("sessionend",Eh),ji.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=gt.autoReset,k=ye.enabled,V=ye.autoUpdate,W=ye.needsUpdate,N=ye.type;le(),gt.autoReset=E,ye.enabled=k,ye.autoUpdate=V,ye.needsUpdate=W,ye.type=N}function ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Oe(E){const k=E.target;k.removeEventListener("dispose",Oe),St(k)}function St(E){Gt(E),Se.remove(E)}function Gt(E){const k=Se.get(E).programs;k!==void 0&&(k.forEach(function(V){be.releaseProgram(V)}),E.isShaderMaterial&&be.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,V,W,N,ne){k===null&&(k=mt);const ce=N.isMesh&&N.matrixWorld.determinant()<0,ge=Lp(E,k,V,W,N);Te.setMaterial(W,ce);let Me=V.index,Ie=1;if(W.wireframe===!0){if(Me=ee.getWireframeAttribute(V),Me===void 0)return;Ie=2}const ke=V.drawRange,Ae=V.attributes.position;let Je=ke.start*Ie,tt=(ke.start+ke.count)*Ie;ne!==null&&(Je=Math.max(Je,ne.start*Ie),tt=Math.min(tt,(ne.start+ne.count)*Ie)),Me!==null?(Je=Math.max(Je,0),tt=Math.min(tt,Me.count)):Ae!=null&&(Je=Math.max(Je,0),tt=Math.min(tt,Ae.count));const Pt=tt-Je;if(Pt<0||Pt===1/0)return;dt.setup(N,W,ge,V,Me);let wt,Qe=xe;if(Me!==null&&(wt=Z.get(Me),Qe=Ke,Qe.setIndex(wt)),N.isMesh)W.wireframe===!0?(Te.setLineWidth(W.wireframeLinewidth*We()),Qe.setMode(I.LINES)):Qe.setMode(I.TRIANGLES);else if(N.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),Te.setLineWidth(Ce*We()),N.isLineSegments?Qe.setMode(I.LINES):N.isLineLoop?Qe.setMode(I.LINE_LOOP):Qe.setMode(I.LINE_STRIP)}else N.isPoints?Qe.setMode(I.POINTS):N.isSprite&&Qe.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ce=N._multiDrawStarts,Bt=N._multiDrawCounts,nt=N._multiDrawCount,Nn=Me?Z.get(Me).bytesPerElement:1,Ms=Se.get(W).currentProgram.getUniforms();for(let cn=0;cn<nt;cn++)Ms.setValue(I,"_gl_DrawID",cn),Qe.render(Ce[cn]/Nn,Bt[cn])}else if(N.isInstancedMesh)Qe.renderInstances(Je,Pt,N.count);else if(V.isInstancedBufferGeometry){const Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Bt=Math.min(V.instanceCount,Ce);Qe.renderInstances(Je,Pt,Bt)}else Qe.render(Je,Pt)};function st(E,k,V){E.transparent===!0&&E.side===Et&&E.forceSinglePass===!1?(E.side=Zt,E.needsUpdate=!0,da(E,k,V),E.side=bi,E.needsUpdate=!0,da(E,k,V),E.side=Et):da(E,k,V)}this.compile=function(E,k,V=null){V===null&&(V=E),p=Ze.get(V),p.init(k),x.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==V&&E.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const W=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ne=N.material;if(ne)if(Array.isArray(ne))for(let ce=0;ce<ne.length;ce++){const ge=ne[ce];st(ge,V,N),W.add(ge)}else st(ne,V,N),W.add(ne)}),p=x.pop(),W},this.compileAsync=function(E,k,V=null){const W=this.compile(E,k,V);return new Promise(N=>{function ne(){if(W.forEach(function(ce){Se.get(ce).currentProgram.isReady()&&W.delete(ce)}),W.size===0){N(E);return}setTimeout(ne,10)}je.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Un=null;function li(E){Un&&Un(E)}function Th(){ji.stop()}function Eh(){ji.start()}const ji=new Ef;ji.setAnimationLoop(li),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(E){Un=E,j.setAnimationLoop(E),E===null?ji.stop():ji.start()},j.addEventListener("sessionstart",Th),j.addEventListener("sessionend",Eh),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,k,C),p=Ze.get(E,x.length),p.init(k),x.push(p),pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(pe),Q=this.localClippingEnabled,Y=se.init(this.clippingPlanes,Q),m=_e.get(E,y.length),m.init(),y.push(m),j.enabled===!0&&j.isPresenting===!0){const ne=v.xr.getDepthSensingMesh();ne!==null&&To(ne,k,-1/0,v.sortObjects)}To(E,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ie,ae),ut=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ut&&Pe.addToRenderList(m,E),this.info.render.frame++,Y===!0&&se.beginShadows();const V=p.state.shadowsArray;ye.render(V,E,k),Y===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,N=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ne=k.cameras;if(N.length>0)for(let ce=0,ge=ne.length;ce<ge;ce++){const Me=ne[ce];Ch(W,N,E,Me)}ut&&Pe.render(E);for(let ce=0,ge=ne.length;ce<ge;ce++){const Me=ne[ce];Ah(m,E,Me,Me.viewport)}}else N.length>0&&Ch(W,N,E,k),ut&&Pe.render(E),Ah(m,E,k);C!==null&&T===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,k),dt.resetDefaultState(),M=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],Y===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function To(E,k,V,W){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){W&&Ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const ce=$.update(E),ge=E.material;ge.visible&&m.push(E,ce,ge,V,Ee.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const ce=$.update(E),ge=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ee.copy(E.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ee.copy(ce.boundingSphere.center)),Ee.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(ge)){const Me=ce.groups;for(let Ie=0,ke=Me.length;Ie<ke;Ie++){const Ae=Me[Ie],Je=ge[Ae.materialIndex];Je&&Je.visible&&m.push(E,ce,Je,V,Ee.z,Ae)}}else ge.visible&&m.push(E,ce,ge,V,Ee.z,null)}}const ne=E.children;for(let ce=0,ge=ne.length;ce<ge;ce++)To(ne[ce],k,V,W)}function Ah(E,k,V,W){const N=E.opaque,ne=E.transmissive,ce=E.transparent;p.setupLightsView(V),Y===!0&&se.setGlobalState(v.clippingPlanes,V),W&&Te.viewport(L.copy(W)),N.length>0&&ua(N,k,V),ne.length>0&&ua(ne,k,V),ce.length>0&&ua(ce,k,V),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Ch(E,k,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new kn(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?ei:Si,minFilter:Cn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const ne=p.state.transmissionRenderTarget[W.id],ce=W.viewport||L;ne.setSize(ce.z*v.transmissionResolutionScale,ce.w*v.transmissionResolutionScale);const ge=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(F),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),ut&&Pe.render(V);const Me=v.toneMapping;v.toneMapping=Gi;const Ie=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Y===!0&&se.setGlobalState(v.clippingPlanes,W),ua(E,V,W),R.updateMultisampleRenderTarget(ne),R.updateRenderTargetMipmap(ne),je.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ae=0,Je=k.length;Ae<Je;Ae++){const tt=k[Ae],Pt=tt.object,wt=tt.geometry,Qe=tt.material,Ce=tt.group;if(Qe.side===Et&&Pt.layers.test(W.layers)){const Bt=Qe.side;Qe.side=Zt,Qe.needsUpdate=!0,Rh(Pt,V,W,wt,Qe,Ce),Qe.side=Bt,Qe.needsUpdate=!0,ke=!0}}ke===!0&&(R.updateMultisampleRenderTarget(ne),R.updateRenderTargetMipmap(ne))}v.setRenderTarget(ge),v.setClearColor(F,G),Ie!==void 0&&(W.viewport=Ie),v.toneMapping=Me}function ua(E,k,V){const W=k.isScene===!0?k.overrideMaterial:null;for(let N=0,ne=E.length;N<ne;N++){const ce=E[N],ge=ce.object,Me=ce.geometry,Ie=W===null?ce.material:W,ke=ce.group;ge.layers.test(V.layers)&&Rh(ge,k,V,Me,Ie,ke)}}function Rh(E,k,V,W,N,ne){E.onBeforeRender(v,k,V,W,N,ne),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(v,k,V,W,E,ne),N.transparent===!0&&N.side===Et&&N.forceSinglePass===!1?(N.side=Zt,N.needsUpdate=!0,v.renderBufferDirect(V,k,W,N,E,ne),N.side=bi,N.needsUpdate=!0,v.renderBufferDirect(V,k,W,N,E,ne),N.side=Et):v.renderBufferDirect(V,k,W,N,E,ne),E.onAfterRender(v,k,V,W,N,ne)}function da(E,k,V){k.isScene!==!0&&(k=mt);const W=Se.get(E),N=p.state.lights,ne=p.state.shadowsArray,ce=N.state.version,ge=be.getParameters(E,N.state,ne,k,V),Me=be.getProgramCacheKey(ge);let Ie=W.programs;W.environment=E.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(E.isMeshStandardMaterial?B:w).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",Oe),Ie=new Map,W.programs=Ie);let ke=Ie.get(Me);if(ke!==void 0){if(W.currentProgram===ke&&W.lightsStateVersion===ce)return Lh(E,ge),ke}else ge.uniforms=be.getUniforms(E),E.onBeforeCompile(ge,v),ke=be.acquireProgram(ge,Me),Ie.set(Me,ke),W.uniforms=ge.uniforms;const Ae=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=se.uniform),Lh(E,ge),W.needsLights=Dp(E),W.lightsStateVersion=ce,W.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=ke,W.uniformsList=null,ke}function Ph(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Za.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Lh(E,k){const V=Se.get(E);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function Lp(E,k,V,W,N){k.isScene!==!0&&(k=mt),R.resetTextureUnits();const ne=k.fog,ce=W.isMeshStandardMaterial?k.environment:null,ge=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Qt,Me=(W.isMeshStandardMaterial?B:w).get(W.envMap||ce),Ie=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!V.morphAttributes.position,Je=!!V.morphAttributes.normal,tt=!!V.morphAttributes.color;let Pt=Gi;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const wt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qe=wt!==void 0?wt.length:0,Ce=Se.get(W),Bt=p.state.lights;if(Y===!0&&(Q===!0||E!==b)){const Yt=E===b&&W.id===M;se.setState(W,E,Yt)}let nt=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Bt.state.version||Ce.outputColorSpace!==ge||N.isBatchedMesh&&Ce.batching===!1||!N.isBatchedMesh&&Ce.batching===!0||N.isBatchedMesh&&Ce.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ce.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ce.instancing===!1||!N.isInstancedMesh&&Ce.instancing===!0||N.isSkinnedMesh&&Ce.skinning===!1||!N.isSkinnedMesh&&Ce.skinning===!0||N.isInstancedMesh&&Ce.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ce.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ce.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ce.instancingMorph===!1&&N.morphTexture!==null||Ce.envMap!==Me||W.fog===!0&&Ce.fog!==ne||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==se.numPlanes||Ce.numIntersection!==se.numIntersection)||Ce.vertexAlphas!==Ie||Ce.vertexTangents!==ke||Ce.morphTargets!==Ae||Ce.morphNormals!==Je||Ce.morphColors!==tt||Ce.toneMapping!==Pt||Ce.morphTargetsCount!==Qe)&&(nt=!0):(nt=!0,Ce.__version=W.version);let Nn=Ce.currentProgram;nt===!0&&(Nn=da(W,k,N));let Ms=!1,cn=!1,vr=!1;const _t=Nn.getUniforms(),bn=Ce.uniforms;if(Te.useProgram(Nn.program)&&(Ms=!0,cn=!0,vr=!0),W.id!==M&&(M=W.id,cn=!0),Ms||b!==E){Te.buffers.depth.getReversed()?(te.copy(E.projectionMatrix),Fm(te),Bm(te),_t.setValue(I,"projectionMatrix",te)):_t.setValue(I,"projectionMatrix",E.projectionMatrix),_t.setValue(I,"viewMatrix",E.matrixWorldInverse);const tn=_t.map.cameraPosition;tn!==void 0&&tn.setValue(I,De.setFromMatrixPosition(E.matrixWorld)),$e.logarithmicDepthBuffer&&_t.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_t.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,cn=!0,vr=!0)}if(N.isSkinnedMesh){_t.setOptional(I,N,"bindMatrix"),_t.setOptional(I,N,"bindMatrixInverse");const Yt=N.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),_t.setValue(I,"boneTexture",Yt.boneTexture,R))}N.isBatchedMesh&&(_t.setOptional(I,N,"batchingTexture"),_t.setValue(I,"batchingTexture",N._matricesTexture,R),_t.setOptional(I,N,"batchingIdTexture"),_t.setValue(I,"batchingIdTexture",N._indirectTexture,R),_t.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&_t.setValue(I,"batchingColorTexture",N._colorsTexture,R));const Sn=V.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Le.update(N,V,Nn),(cn||Ce.receiveShadow!==N.receiveShadow)&&(Ce.receiveShadow=N.receiveShadow,_t.setValue(I,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(bn.envMap.value=Me,bn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(bn.envMapIntensity.value=k.environmentIntensity),cn&&(_t.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&Ip(bn,vr),ne&&W.fog===!0&&he.refreshFogUniforms(bn,ne),he.refreshMaterialUniforms(bn,W,z,X,p.state.transmissionRenderTarget[E.id]),Za.upload(I,Ph(Ce),bn,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Za.upload(I,Ph(Ce),bn,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_t.setValue(I,"center",N.center),_t.setValue(I,"modelViewMatrix",N.modelViewMatrix),_t.setValue(I,"normalMatrix",N.normalMatrix),_t.setValue(I,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Yt=W.uniformsGroups;for(let tn=0,Eo=Yt.length;tn<Eo;tn++){const $i=Yt[tn];D.update($i,Nn),D.bind($i,Nn)}}return Nn}function Ip(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Dp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,k,V){Se.get(E.texture).__webglTexture=k,Se.get(E.depthTexture).__webglTexture=V;const W=Se.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const V=Se.get(E);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0};const kp=I.createFramebuffer();this.setRenderTarget=function(E,k=0,V=0){C=E,A=k,T=V;let W=!0,N=null,ne=!1,ce=!1;if(E){const Me=Se.get(E);if(Me.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(Me.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Me.__hasExternalTextures)R.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ae=E.depthTexture;if(Me.__boundDepthTexture!==Ae){if(Ae!==null&&Se.has(Ae)&&(E.width!==Ae.image.width||E.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ce=!0);const ke=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[k])?N=ke[k][V]:N=ke[k],ne=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?N=Se.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?N=ke[V]:N=ke,L.copy(E.viewport),O.copy(E.scissor),U=E.scissorTest}else L.copy(ve).multiplyScalar(z).floor(),O.copy(Re).multiplyScalar(z).floor(),U=Ve;if(V!==0&&(N=kp),Te.bindFramebuffer(I.FRAMEBUFFER,N)&&W&&Te.drawBuffers(E,N),Te.viewport(L),Te.scissor(O),Te.setScissorTest(U),ne){const Me=Se.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Me.__webglTexture,V)}else if(ce){const Me=Se.get(E.texture),Ie=k;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.__webglTexture,V,Ie)}else if(E!==null&&V!==0){const Me=Se.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Me.__webglTexture,V)}M=-1},this.readRenderTargetPixels=function(E,k,V,W,N,ne,ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(ge=ge[ce]),ge){Te.bindFramebuffer(I.FRAMEBUFFER,ge);try{const Me=E.texture,Ie=Me.format,ke=Me.type;if(!$e.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-W&&V>=0&&V<=E.height-N&&I.readPixels(k,V,W,N,Be.convert(Ie),Be.convert(ke),ne)}finally{const Me=C!==null?Se.get(C).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(E,k,V,W,N,ne,ce){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(ge=ge[ce]),ge){const Me=E.texture,Ie=Me.format,ke=Me.type;if(!$e.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-W&&V>=0&&V<=E.height-N){Te.bindFramebuffer(I.FRAMEBUFFER,ge);const Ae=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.bufferData(I.PIXEL_PACK_BUFFER,ne.byteLength,I.STREAM_READ),I.readPixels(k,V,W,N,Be.convert(Ie),Be.convert(ke),0);const Je=C!==null?Se.get(C).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,Je);const tt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Om(I,tt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ne),I.deleteBuffer(Ae),I.deleteSync(tt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,V=0){E.isTexture!==!0&&(rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-V),N=Math.floor(E.image.width*W),ne=Math.floor(E.image.height*W),ce=k!==null?k.x:0,ge=k!==null?k.y:0;R.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,ce,ge,N,ne),Te.unbindTexture()};const Up=I.createFramebuffer(),Np=I.createFramebuffer();this.copyTextureToTexture=function(E,k,V=null,W=null,N=0,ne=null){E.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],k=arguments[2],ne=arguments[3]||0,V=null),ne===null&&(N!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=N,N=0):ne=0);let ce,ge,Me,Ie,ke,Ae,Je,tt,Pt;const wt=E.isCompressedTexture?E.mipmaps[ne]:E.image;if(V!==null)ce=V.max.x-V.min.x,ge=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,Ie=V.min.x,ke=V.min.y,Ae=V.isBox3?V.min.z:0;else{const Sn=Math.pow(2,-N);ce=Math.floor(wt.width*Sn),ge=Math.floor(wt.height*Sn),E.isDataArrayTexture?Me=wt.depth:E.isData3DTexture?Me=Math.floor(wt.depth*Sn):Me=1,Ie=0,ke=0,Ae=0}W!==null?(Je=W.x,tt=W.y,Pt=W.z):(Je=0,tt=0,Pt=0);const Qe=Be.convert(k.format),Ce=Be.convert(k.type);let Bt;k.isData3DTexture?(R.setTexture3D(k,0),Bt=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(R.setTexture2DArray(k,0),Bt=I.TEXTURE_2D_ARRAY):(R.setTexture2D(k,0),Bt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const nt=I.getParameter(I.UNPACK_ROW_LENGTH),Nn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ms=I.getParameter(I.UNPACK_SKIP_PIXELS),cn=I.getParameter(I.UNPACK_SKIP_ROWS),vr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,wt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,wt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ae);const _t=E.isDataArrayTexture||E.isData3DTexture,bn=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const Sn=Se.get(E),Yt=Se.get(k),tn=Se.get(Sn.__renderTarget),Eo=Se.get(Yt.__renderTarget);Te.bindFramebuffer(I.READ_FRAMEBUFFER,tn.__webglFramebuffer),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,Eo.__webglFramebuffer);for(let $i=0;$i<Me;$i++)_t&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(E).__webglTexture,N,Ae+$i),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(k).__webglTexture,ne,Pt+$i)),I.blitFramebuffer(Ie,ke,ce,ge,Je,tt,ce,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);Te.bindFramebuffer(I.READ_FRAMEBUFFER,null),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||Se.has(E)){const Sn=Se.get(E),Yt=Se.get(k);Te.bindFramebuffer(I.READ_FRAMEBUFFER,Up),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,Np);for(let tn=0;tn<Me;tn++)_t?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Sn.__webglTexture,N,Ae+tn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Sn.__webglTexture,N),bn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.__webglTexture,ne,Pt+tn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Yt.__webglTexture,ne),N!==0?I.blitFramebuffer(Ie,ke,ce,ge,Je,tt,ce,ge,I.COLOR_BUFFER_BIT,I.NEAREST):bn?I.copyTexSubImage3D(Bt,ne,Je,tt,Pt+tn,Ie,ke,ce,ge):I.copyTexSubImage2D(Bt,ne,Je,tt,Ie,ke,ce,ge);Te.bindFramebuffer(I.READ_FRAMEBUFFER,null),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else bn?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Bt,ne,Je,tt,Pt,ce,ge,Me,Qe,Ce,wt.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Bt,ne,Je,tt,Pt,ce,ge,Me,Qe,wt.data):I.texSubImage3D(Bt,ne,Je,tt,Pt,ce,ge,Me,Qe,Ce,wt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ne,Je,tt,ce,ge,Qe,Ce,wt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ne,Je,tt,wt.width,wt.height,Qe,wt.data):I.texSubImage2D(I.TEXTURE_2D,ne,Je,tt,ce,ge,Qe,Ce,wt);I.pixelStorei(I.UNPACK_ROW_LENGTH,nt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Nn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ms),I.pixelStorei(I.UNPACK_SKIP_ROWS,cn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,vr),ne===0&&k.generateMipmaps&&I.generateMipmap(Bt),Te.unbindTexture()},this.copyTextureToTexture3D=function(E,k,V=null,W=null,N=0){return E.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,E=arguments[2],k=arguments[3],N=arguments[4]||0),rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,V,W,N)},this.initRenderTarget=function(E){Se.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Te.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,Te.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class en{constructor(){this.callbacks={}}on(e,t){if(typeof e>"u"||e==="")return console.warn("Wrong names"),!1;if(typeof t>"u")return console.warn("Wrong callback"),!1;const n=e.split(" ");for(const i of n)this.callbacks[i]||(this.callbacks[i]=[]),this.callbacks[i].push(t);return this}off(e){if(typeof e>"u"||e==="")return console.warn("Wrong name"),!1;const t=e.split(" ");for(const n of t)delete this.callbacks[n];return this}trigger(e,t=[]){if(typeof e>"u"||e==="")return console.warn("Wrong name"),!1;if(this.callbacks[e])for(const n of this.callbacks[e])n.apply(this,t);return this}dispose(){this.callbacks={}}}class uM extends en{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this._onResize=this._onResize.bind(this),window.addEventListener("resize",this._onResize)}_onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")}dispose(){window.removeEventListener("resize",this._onResize),super.dispose()}}function gi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Lf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qr={duration:.5,overwrite:!1,delay:0},rh,zt,vt,Ln=1e8,ht=1/Ln,pc=Math.PI*2,dM=pc/4,fM=0,If=Math.sqrt,pM=Math.cos,mM=Math.sin,Ft=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},wi=function(e){return typeof e=="number"},ah=function(e){return typeof e>"u"},si=function(e){return typeof e=="object"},sn=function(e){return e!==!1},oh=function(){return typeof window<"u"},Ha=function(e){return Tt(e)||Ft(e)},Df=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xt=Array.isArray,gM=/random\([^)]+\)/g,_M=/,\s*/g,sd=/(?:-?\.?\d|\.)+/gi,kf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Gs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Uf=/[+-]=-?[.\d]+/,vM=/[^,'"\[\]\s]+/gi,yM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,jn,mc,lh,yn={},oo={},Nf,Of=function(e){return(oo=ar(e,yn))&&ln},ch=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ea=function(e,t){return!t&&console.warn(e)},Ff=function(e,t){return e&&(yn[e]=t)&&oo&&(oo[e]=t)||yn},ta=function(){return 0},xM={suppressEvents:!0,isStart:!0,kill:!1},Ja={suppressEvents:!0,kill:!1},MM={suppressEvents:!0},hh={},Vi=[],gc={},Bf,fn={},hl={},rd=30,Qa=[],uh="",dh=function(e){var t=e[0],n,i;if(si(t)||Tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Qa.length;i--&&!Qa[i].targetTest(t););n=Qa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new op(e[i],n)))||e.splice(i,1);return e},ps=function(e){return e._gsap||dh(In(e))[0]._gsap},zf=function(e,t,n){return(n=e[t])&&Tt(n)?e[t]():ah(n)&&e.getAttribute&&e.getAttribute(t)||n},rn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},yt=function(e){return Math.round(e*1e7)/1e7||0},Ys=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},bM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},lo=function(){var e=Vi.length,t=Vi.slice(0),n,i;for(gc={},Vi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},fh=function(e){return!!(e._initted||e._startAt||e.add)},Gf=function(e,t,n,i){Vi.length&&!zt&&lo(),e.render(t,n,!!(zt&&t<0&&fh(e))),Vi.length&&!zt&&lo()},Vf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(vM).length<2?t:Ft(e)?e.trim():e},Hf=function(e){return e},xn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},SM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ar=function(e,t){for(var n in t)e[n]=t[n];return e},ad=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=si(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},co=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},zr=function(e){var t=e.parent||xt,n=e.keyframes?SM(Xt(e.keyframes)):xn;if(sn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},wM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Wf=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},bo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Wi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ms=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},TM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_c=function(e,t,n,i){return e._startAt&&(zt?e._startAt.revert(Ja):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},EM=function r(e){return!e||e._ts&&r(e.parent)},od=function(e){return e._repeat?or(e._tTime,e=e.duration()+e._rDelay)*e:0},or=function(e,t){var n=Math.floor(e=yt(e/t));return e&&n===e?n-1:n},ho=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},So=function(e){return e._end=yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},wo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),So(e),n._dirty||ms(n,e)),e},Xf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ho(e.rawTime(),t),(!t._dur||ha(0,t.totalDuration(),n)-t._tTime>ht)&&t.render(n,!0)),ms(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ht}},Zn=function(e,t,n,i){return t.parent&&Wi(t),t._start=yt((wi(n)?n:n||e!==xt?Tn(e,n,t):e._time)+t._delay),t._end=yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Wf(e,t,"_first","_last",e._sort?"_start":0),vc(t)||(e._recent=t),i||Xf(e,t),e._ts<0&&wo(e,e._tTime),e},Yf=function(e,t){return(yn.ScrollTrigger||ch("scrollTrigger",t))&&yn.ScrollTrigger.create(t,e)},qf=function(e,t,n,i,s){if(mh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Bf!==pn.frame)return Vi.push(e),e._lazy=[s,i],1},AM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},vc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},CM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&AM(e)&&!(!e._initted&&vc(e))||(e._ts<0||e._dp._ts<0)&&!vc(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=ha(0,e._tDur,t),h=or(l,o),e._yoyo&&h&1&&(a=1-a),h!==or(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||zt||i||e._zTime===ht||!t&&e._zTime){if(!e._initted&&qf(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?ht:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&_c(e,t,n,!0),e._onUpdate&&!n&&gn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Wi(e,1),!n&&!zt&&(gn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},RM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},lr=function(e,t,n,i){var s=e._repeat,a=yt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:yt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&wo(e,e._tTime=e._tDur*o),e.parent&&So(e),n||ms(e.parent,e),e},ld=function(e){return e instanceof nn?ms(e):lr(e,e._dur)},PM={_start:0,endTime:ta,totalDuration:ta},Tn=function r(e,t,n){var i=e.labels,s=e._recent||PM,a=e.duration()>=Ln?s.endTime(!1):e._dur,o,l,c;return Ft(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Xt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Gr=function(e,t,n){var i=wi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=sn(l.vars.inherit)&&l.parent;a.immediateRender=sn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new It(t[0],a,t[s+1])},qi=function(e,t){return e||e===0?t(e):t},ha=function(e,t,n){return n<e?e:n>t?t:n},Wt=function(e,t){return!Ft(e)||!(t=yM.exec(e))?"":t[1]},LM=function(e,t,n){return qi(n,function(i){return ha(e,t,i)})},yc=[].slice,jf=function(e,t){return e&&si(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&si(e[0]))&&!e.nodeType&&e!==jn},IM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ft(i)&&!t||jf(i,1)?(s=n).push.apply(s,In(i)):n.push(i)})||n},In=function(e,t,n){return vt&&!t&&vt.selector?vt.selector(e):Ft(e)&&!n&&(mc||!cr())?yc.call((t||lh).querySelectorAll(e),0):Xt(e)?IM(e,n):jf(e)?yc.call(e,0):e?[e]:[]},xc=function(e){return e=In(e)[0]||ea("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return In(t,n.querySelectorAll?n:n===e?ea("Invalid scope")||lh.createElement("div"):e)}},$f=function(e){return e.sort(function(){return .5-Math.random()})},Kf=function(e){if(Tt(e))return e;var t=si(e)?e:{each:e},n=gs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return Ft(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||t).length,m=a[_],p,y,x,v,S,A,T,C,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Ln])[1],!M){for(T=-Ln;T<(T=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=a[_]=[],p=l?Math.min(M,_)*h-.5:i%M,y=M===Ln?0:l?_*u/M-.5:i/M|0,T=0,C=Ln,A=0;A<_;A++)x=A%M-p,v=y-(A/M|0),m[A]=S=c?Math.abs(c==="y"?v:x):If(x*x+v*v),S>T&&(T=S),S<C&&(C=S);i==="random"&&$f(m),m.max=T-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Wt(t.amount||t.each)||0,n=n&&_<0?XM(n):n}return _=(m[d]-m.min)/m.max||0,yt(m.b+(n?n(_):_)*m.v)+m.u}},Mc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=yt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(wi(n)?0:Wt(n))}},Zf=function(e,t){var n=Xt(e),i,s;return!n&&si(e)&&(i=n=e.radius||Ln,e.values?(e=In(e.values),(s=!wi(e[0]))&&(i*=i)):e=Mc(e.increment)),qi(t,n?Tt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ln,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-o,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:a,s||h===a||wi(a)?h:h+Wt(a)}:Mc(e))},Jf=function(e,t,n,i){return qi(Xt(e)?!t:n===!0?!!(n=0):!i,function(){return Xt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},DM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},kM=function(e,t){return function(n){return e(parseFloat(n))+(t||Wt(n))}},UM=function(e,t,n){return ep(e,t,0,1,n)},Qf=function(e,t,n){return qi(n,function(i){return e[~~t(i)]})},NM=function r(e,t,n){var i=t-e;return Xt(e)?Qf(e,r(0,e.length),t):qi(n,function(s){return(i+(s-e)%i)%i+e})},OM=function r(e,t,n){var i=t-e,s=i*2;return Xt(e)?Qf(e,r(0,e.length-1),t):qi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},na=function(e){return e.replace(gM,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(_M);return Jf(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ep=function(e,t,n,i,s){var a=t-e,o=i-n;return qi(s,function(l){return n+((l-e)/a*o||0)})},FM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Ft(e),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Xt(e)&&!Xt(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else i||(e=ar(Xt(e)?[]:{},e));if(!h){for(l in t)ph.call(o,e,l,"get",t[l]);s=function(g){return vh(g,o)||(a?e.p:e)}}}return qi(n,s)},cd=function(e,t,n){var i=e.labels,s=Ln,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},gn=function(e,t,n){var i=e.vars,s=i[t],a=vt,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Vi.length&&lo(),o&&(vt=o),h=l?s.apply(c,l):s.call(c),vt=a,h},Lr=function(e){return Wi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!zt),e.progress()<1&&gn(e,"onInterrupt"),e},Vs,tp=[],np=function(e){if(e)if(e=!e.name&&e.default||e,oh()||e.headless){var t=e.name,n=Tt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ta,render:vh,add:ph,kill:tb,modifier:eb,rawVars:0},a={targetTest:0,get:0,getSetter:_h,aliases:{},register:0};if(cr(),e!==i){if(fn[t])return;xn(i,xn(co(e,s),a)),ar(i.prototype,ar(s,co(e,a))),fn[i.prop=t]=i,e.targetTest&&(Qa.push(i),hh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ff(t,i),e.register&&e.register(ln,i,an)}else tp.push(e)},ct=255,Ir={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},ul=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ct+.5|0},ip=function(e,t,n){var i=e?wi(e)?[e>>16,e>>8&ct,e&ct]:0:Ir.black,s,a,o,l,c,h,u,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ir[e])i=Ir[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ct,i&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(sd),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=ul(l+1/3,s,a),i[1]=ul(l,s,a),i[2]=ul(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(kf),n&&i.length<4&&(i[3]=1),i}else i=e.match(sd)||Ir.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/ct,a=i[1]/ct,o=i[2]/ct,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},sp=function(e){var t=[],n=[],i=-1;return e.split(Hi).forEach(function(s){var a=s.match(Gs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},hd=function(e,t,n){var i="",s=(e+i).match(Hi),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=ip(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=sp(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Hi,"1").split(Gs),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Hi),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},Hi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ir)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),BM=/hsl[a]?\(/,rp=function(e){var t=e.join(" "),n;if(Hi.lastIndex=0,Hi.test(t))return n=BM.test(t),e[1]=hd(e[1],n),e[0]=hd(e[0],n,sp(e[1])),!0},ia,pn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,d,f,g=function _(m){var p=r()-i,y=m===!0,x,v,S,A;if((p>e||p<0)&&(n+=p-t),i+=p,S=i-n,x=S-a,(x>0||y)&&(A=++u.frame,d=S-u.time*1e3,u.time=S=S/1e3,a+=x+(x>=s?4:s-x),v=1),y||(l=c(_)),v)for(f=0;f<o.length;f++)o[f](S,d,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Nf&&(!mc&&oh()&&(jn=mc=window,lh=jn.document||{},yn.gsap=ln,(jn.gsapVersions||(jn.gsapVersions=[])).push(ln.version),Of(oo||jn.GreenSockGlobals||!jn.gsap&&jn||{}),tp.forEach(np)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},ia=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ia=0,c=ta},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,y){var x=p?function(v,S,A,T){m(v,S,A,T),u.remove(x)}:m;return u.remove(m),o[y?"unshift":"push"](x),cr(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u})(),cr=function(){return!ia&&pn.wake()},qe={},zM=/^[\d.\-M][\d.\-,\s]/,GM=/["']/g,VM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(GM,"").trim():+c,i=l.substr(o+1).trim();return t},HM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},WM=function(e){var t=(e+"").split("("),n=qe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[VM(t[1])]:HM(e).split(",").map(Vf)):qe._CE&&zM.test(e)?qe._CE("",e):n},XM=function(e){return function(t){return 1-e(1-t)}},gs=function(e,t){return e&&(Tt(e)?e:qe[e]||WM(e))||t},xs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return rn(e,function(o){qe[o]=yn[o]=s,qe[a=o.toLowerCase()]=n;for(var l in s)qe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[o+"."+l]=s[l]}),s},ap=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},dl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/pc*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*mM((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:ap(o);return s=pc/s,l.config=function(c,h){return r(e,c,h)},l},fl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:ap(n);return i.config=function(s){return r(e,s)},i};rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;xs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;xs("Elastic",dl("in"),dl("out"),dl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};xs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);xs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});xs("Circ",function(r){return-(If(1-r*r)-1)});xs("Sine",function(r){return r===1?1:-pM(r*dM)+1});xs("Back",fl("in"),fl("out"),fl());qe.SteppedEase=qe.steps=yn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-ht;return function(o){return((i*ha(0,a,o)|0)+s)*n}}};Qr.ease=qe["quad.out"];rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return uh+=r+","+r+"Params,"});var op=function(e,t){this.id=fM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:zf,this.set=t?t.getSetter:_h},sa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,lr(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),ia||pn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,lr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(cr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(wo(this,n),!s._dp||s.parent||Xf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Zn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ht||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Gf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+od(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+od(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?or(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ho(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ht?0:this._rts,this.totalTime(ha(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),So(this),TM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=yt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Zn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ho(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=MM);var i=zt;return zt=n,fh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),zt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ld(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ld(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Tn(this,n),sn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,sn(i)),this._dur||(this._zTime=-ht),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ht)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Tt(n)?n:Hf,l=function(){var h=i.then;i.then=null,s&&s(),Tt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Lr(this)},r})();xn(sa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});var nn=(function(r){Lf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=sn(n.sortChildren),xt&&Zn(n.parent||xt,gi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Yf(gi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Gr(0,arguments,this),this},t.from=function(i,s,a){return Gr(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Gr(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,zr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new It(i,s,Tn(this,a),1),this},t.call=function(i,s,a){return Zn(this,It.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new It(i,a,Tn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,zr(a).immediateRender=sn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,zr(o).immediateRender=sn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:yt(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,y,x,v,S,A,T;if(this!==xt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,v=this._start,x=this._ts,p=!x,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=yt(h%m),h===l?(_=this._repeat,d=c):(S=yt(h/m),_=~~S,_&&_===S&&(d=c,_--),d>c&&(d=c)),S=or(this._tTime,m),!o&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),A&&_&1&&(d=c-d,T=1),_!==S&&!this._lock){var C=A&&S&1,M=C===(A&&_&1);if(_<S&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(T?0:yt(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&gn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=RM(this,yt(o),yt(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!S&&(gn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){y=0,g&&(h+=this._zTime=-ht);break}}f=g}else{f=this._last;for(var b=i<0?i:d;f;){if(g=f._prev,(f._act||b<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(b-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(b-f._start)*f._ts,s,a||zt&&fh(f)),d!==this._time||!this._ts&&!p){y=0,g&&(h+=this._zTime=b?-ht:ht);break}}f=g}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-ht)._zTime=d>=o?1:-1,this._ts))return this._start=v,So(this),this.render(i,s,a);this._onUpdate&&!s&&gn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Wi(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(gn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(wi(s)||(s=Tn(this,s,i)),!(i instanceof sa)){if(Xt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ft(i))return this.addLabel(i,s);if(Tt(i))i=It.delayedCall(0,i);else return this}return this!==i?Zn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ln);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof It?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Ft(i)?this.removeLabel(i):Tt(i)?this.killTweensOf(i):(i.parent===this&&bo(this,i),i===this._recent&&(this._recent=this._last),ms(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=yt(pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Tn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=It.delayedCall(0,s||ta,a);return o.data="isPause",this._hasPause=1,Zn(this,o,Tn(this,i))},t.removePause=function(i){var s=this._first;for(i=Tn(this,i);s;)s._start===i&&s.data==="isPause"&&Wi(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Fi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=In(i),l=this._first,c=wi(s),h;l;)l instanceof It?bM(l._targets,o)&&(c?(!Fi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Tn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=It.to(a,xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ht,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&lr(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,xn({startAt:{time:Tn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),cd(this,Tn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),cd(this,Tn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=yt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return ms(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ms(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Ln,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Zn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=yt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;lr(a,a===xt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(xt._ts&&(Gf(xt,ho(i,xt)),Bf=pn.frame),pn.frame>=rd){rd+=vn.autoSleep||120;var s=xt._first;if((!s||!s._ts)&&vn.autoSleep&&pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||pn.sleep()}}},e})(sa);xn(nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var YM=function(e,t,n,i,s,a,o){var l=new an(this._pt,e,t,0,1,fp,null,s),c=0,h=0,u,d,f,g,_,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=na(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),d=n.match(cl)||[];u=cl.exec(i);)g=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Ys(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=cl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Uf.test(i)||p)&&(l.e=0),this._pt=l,l},ph=function(e,t,n,i,s,a,o,l,c,h){Tt(i)&&(i=i(s||0,e,a));var u=e[t],d=n!=="get"?n:Tt(u)?c?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=Tt(u)?c?ZM:up:gh,g;if(Ft(i)&&(~i.indexOf("random(")&&(i=na(i)),i.charAt(1)==="="&&(g=Ys(d,i)+(Wt(d)||0),(g||g===0)&&(i=g))),!h||d!==i||bc)return!isNaN(d*i)&&i!==""?(g=new an(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?QM:dp,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!u&&!(t in e)&&ch(t,i),YM.call(this,e,t,d,i,f,l||vn.stringFilter,c))},qM=function(e,t,n,i,s){if(Tt(e)&&(e=Vr(e,s,t,n,i)),!si(e)||e.style&&e.nodeType||Xt(e)||Df(e))return Ft(e)?Vr(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Vr(e[o],s,t,n,i);return a},lp=function(e,t,n,i,s,a){var o,l,c,h;if(fn[e]&&(o=new fn[e]).init(s,o.rawVars?t[e]:qM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new an(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Vs))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Fi,bc,mh=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!rh,v=e.timeline,S=i.easeReverse||u,A,T,C,M,b,L,O,U,F,G,H,X,z;if(v&&(!d||!s)&&(s="none"),e._ease=gs(s,Qr.ease),e._rEase=S&&(gs(S)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||d&&!i.stagger){if(U=m[0]?ps(m[0]).harness:0,X=U&&i[U.prop],A=co(i,hh),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?Ja:xM),_._lazy=0),a){if(Wi(e._startAt=It.set(m,xn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&sn(l),startAt:null,delay:0,onUpdate:c&&function(){return gn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt||!o&&!f)&&e._startAt.revert(Ja),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(o=!1),C=xn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&sn(l),immediateRender:o,stagger:0,parent:p},A),X&&(C[U.prop]=X),Wi(e._startAt=It.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt?e._startAt.revert(Ja):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&sn(l)||l&&!g,T=0;T<m.length;T++){if(b=m[T],O=b._gsap||dh(m)[T]._gsap,e._ptLookup[T]=G={},gc[O.id]&&Vi.length&&lo(),H=y===m?T:y.indexOf(b),U&&(F=new U).init(b,X||A,e,H,y)!==!1&&(e._pt=M=new an(e._pt,b,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(ie){G[ie]=M}),F.priority&&(L=1)),!U||X)for(C in A)fn[C]&&(F=lp(C,A,e,H,b,y))?F.priority&&(L=1):G[C]=M=ph.call(e,b,C,"get",A[C],H,y,0,i.stringFilter);e._op&&e._op[T]&&e.kill(b,e._op[T]),x&&e._pt&&(Fi=e,xt.killTweensOf(b,G,e.globalTime(t)),z=!e.parent,Fi=0),e._pt&&l&&(gc[O.id]=1)}L&&pp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,d&&t<=0&&v.render(Ln,!0,!0)},jM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return bc=1,e.vars[t]="+=0",mh(e,o),bc=0,l?ea(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=At(n)+Wt(u.e)),u.b&&(u.b=h.s+Wt(u.b))},$M=function(e,t){var n=e[0]?ps(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ar({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},KM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Xt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Vr=function(e,t,n,i,s){return Tt(e)?e.call(t,n,i,s):Ft(e)&&~e.indexOf("random(")?na(e):e},cp=uh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",hp={};rn(cp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return hp[r]=1});var It=(function(r){Lf(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:zr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||xt,y=(Xt(n)||Df(n)?wi(n[0]):"length"in i)?[n]:In(n),x,v,S,A,T,C,M,b;if(o._targets=y.length?dh(y):ea("GSAP target "+n+" not found. https://gsap.com",!vn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||Ha(c)||Ha(h)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(x=o.timeline=new nn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:y}),x.kill(),x.parent=x._dp=gi(o),x._start=0,d||Ha(c)||Ha(h)){if(A=y.length,M=d&&Kf(d),si(d))for(T in d)~cp.indexOf(T)&&(b||(b={}),b[T]=d[T]);for(v=0;v<A;v++)S=co(i,hp),S.stagger=0,L&&(S.easeReverse=L),b&&ar(S,b),C=y[v],S.duration=+Vr(c,gi(o),v,C,y),S.delay=(+Vr(h,gi(o),v,C,y)||0)-o._delay,!d&&A===1&&S.delay&&(o._delay=h=S.delay,o._start+=h,S.delay=0),x.to(C,S,M?M(v,C,y):0),x._ease=qe.none;x.duration()?c=h=0:o.timeline=0}else if(g){zr(xn(x.vars.defaults,{ease:"none"})),x._ease=gs(g.ease||i.ease||"none");var O=0,U,F,G;if(Xt(g))g.forEach(function(H){return x.to(y,H,">")}),x.duration();else{S={};for(T in g)T==="ease"||T==="easeEach"||KM(T,g[T],S,g.easeEach);for(T in S)for(U=S[T].sort(function(H,X){return H.t-X.t}),O=0,v=0;v<U.length;v++)F=U[v],G={ease:F.e,duration:(F.t-(v?U[v-1].t:0))/100*c},G[T]=F.v,x.to(y,G,O),O+=G.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!rh&&(Fi=gi(o),xt.killTweensOf(y),Fi=0),Zn(p,gi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===yt(p._time)&&sn(u)&&EM(gi(o))&&p.data!=="nested")&&(o._tTime=-ht,o.render(Math.max(0,-h)||0)),m&&Yf(gi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ht&&!h?l:i<ht?0:i,d,f,g,_,m,p,y,x;if(!c)CM(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(d=yt(u%_),u===l?(g=this._repeat,d=c):(m=yt(u/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(d=c-d),m=or(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(yt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(qf(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=d<o;if(v!==this._inv){var S=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(d/c);if(this._from&&(this.ratio=y=1-y),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!m&&(gn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&_c(this,i,s,a),gn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&gn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&_c(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Wi(this,1),!s&&!(h&&!o)&&(u||o||p)&&(gn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){ia||pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||mh(this,c),h=this._ease(c/this._dur),jM(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(wo(this,0),this.parent||Wf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Lr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!zt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Fi&&Fi.vars.overwrite!==!0)._first||Lr(this),this.parent&&a!==this.timeline.totalDuration()&&lr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?In(i):o,c=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!s||s==="all")&&wM(o,l))return s==="all"&&(this._pt=0),Lr(this);for(u=this._op=this._op||[],s!=="all"&&(Ft(s)&&(_={},rn(s,function(y){return _[y]=1}),s=_),s=$M(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(u[p]=s,g=d,f={}):(f=u[p]=u[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&bo(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Lr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Gr(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Gr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return xt.killTweensOf(i,s,a)},e})(sa);xn(It.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});rn("staggerTo,staggerFrom,staggerFromTo",function(r){It[r]=function(){var e=new nn,t=yc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var gh=function(e,t,n){return e[t]=n},up=function(e,t,n){return e[t](n)},ZM=function(e,t,n,i){return e[t](i.fp,n)},JM=function(e,t,n){return e.setAttribute(t,n)},_h=function(e,t){return Tt(e[t])?up:ah(e[t])&&e.setAttribute?JM:gh},dp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},QM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},fp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},vh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},eb=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},tb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?bo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},nb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},pp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},an=(function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||dp,this.d=l||this,this.set=c||gh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=nb,this.m=n,this.mt=s,this.tween=i},r})();rn(uh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return hh[r]=1});yn.TweenMax=yn.TweenLite=It;yn.TimelineLite=yn.TimelineMax=nn;xt=new nn({sortChildren:!1,defaults:Qr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vn.stringFilter=rp;var _s=[],eo={},ib=[],ud=0,sb=0,pl=function(e){return(eo[e]||ib).map(function(t){return t()})},Sc=function(){var e=Date.now(),t=[];e-ud>2&&(pl("matchMediaInit"),_s.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=jn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),pl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ud=e,pl("matchMedia"))},mp=(function(){function r(t,n){this.selector=n&&xc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=sb++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Tt(n)&&(s=i,i=n,n=Tt);var a=this,o=function(){var c=vt,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=xc(s)),vt=a,u=i.apply(a,arguments),Tt(u)&&a._r.push(u),vt=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Tt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=vt;vt=null,n(this),vt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof It&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof It)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=_s.length;a--;)_s[a].id===this.id&&_s.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),rb=(function(){function r(t){this.contexts=[],this.scope=t,vt&&vt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){si(n)||(n={matches:n});var a=new mp(0,s||this.scope),o=a.conditions={},l,c,h;vt&&!a.selector&&(a.selector=vt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=jn.matchMedia(n[c]),l&&(_s.indexOf(a)<0&&_s.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Sc):l.addEventListener("change",Sc)));return h&&i(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),uo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return np(i)})},timeline:function(e){return new nn(e)},getTweensOf:function(e,t){return xt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ft(e)&&(e=In(e)[0]);var s=ps(e||{}).get,a=n?Hf:Vf;return n==="native"&&(n=""),e&&(t?a((fn[t]&&fn[t].get||s)(e,t,n,i)):function(o,l,c){return a((fn[o]&&fn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=In(e),e.length>1){var i=e.map(function(h){return ln.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var a=fn[t],o=ps(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;Vs._pt=0,u.init(e,n?h+n:h,Vs,0,[e]),u.render(1,u),Vs._pt&&vh(1,Vs)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=ln.to(e,xn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gs(e.ease,Qr.ease)),ad(Qr,e||{})},config:function(e){return ad(vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!fn[o]&&!yn[o]&&ea(t+" effect requires "+o+" plugin.")}),hl[t]=function(o,l,c){return n(In(o),xn(l||{},s),c)},a&&(nn.prototype[t]=function(o,l,c){return this.add(hl[t](o,si(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){qe[e]=gs(t)},parseEase:function(e,t){return arguments.length?gs(e,t):qe},getById:function(e){return xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new nn(e),i,s;for(n.smoothChildTiming=sn(e.smoothChildTiming),xt.remove(n),n._dp=0,n._time=n._tTime=xt._time,i=xt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof It&&i.vars.onComplete===i._targets[0]))&&Zn(n,i,i._start-i._delay),i=s;return Zn(xt,n,0),n},context:function(e,t){return e?new mp(e,t):vt},matchMedia:function(e){return new rb(e)},matchMediaRefresh:function(){return _s.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Sc()},addEventListener:function(e,t){var n=eo[e]||(eo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=eo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:NM,wrapYoyo:OM,distribute:Kf,random:Jf,snap:Zf,normalize:UM,getUnit:Wt,clamp:LM,splitColor:ip,toArray:In,selector:xc,mapRange:ep,pipe:DM,unitize:kM,interpolate:FM,shuffle:$f},install:Of,effects:hl,ticker:pn,updateRoot:nn.updateRoot,plugins:fn,globalTimeline:xt,core:{PropTween:an,globals:Ff,Tween:It,Timeline:nn,Animation:sa,getCache:ps,_removeLinkedListItem:bo,reverting:function(){return zt},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return rh=e}}};rn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return uo[r]=It[r]});pn.add(nn.updateRoot);Vs=uo.to({},{duration:0});var ab=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ob=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ab(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},ml=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ft(s)&&(l={},rn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ob(o,s)}}}},ln=uo.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ml("roundProps",Mc),ml("modifiers"),ml("snap",Zf))||uo;It.version=nn.version=ln.version="3.15.0";Nf=1;oh()&&cr();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var dd,Bi,qs,yh,ds,fd,xh,lb=function(){return typeof window<"u"},Ti={},ls=180/Math.PI,js=Math.PI/180,Os=Math.atan2,pd=1e8,Mh=/([A-Z])/g,cb=/(left|right|width|margin|padding|x)/i,hb=/[\s,\(]\S/,Qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ub=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},db=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},fb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},pb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},gp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_p=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},mb=function(e,t,n){return e.style[t]=n},gb=function(e,t,n){return e.style.setProperty(t,n)},_b=function(e,t,n){return e._gsap[t]=n},vb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},yb=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},xb=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},bt="transform",on=bt+"Origin",Mb=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Ti&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Qn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=vi(i,o)}):this.tfm[e]=a.x?a[e]:vi(i,e),e===on&&(this.tfm.zOrigin=a.zOrigin);else return Qn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(bt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(on,t,"")),e=bt}(s||t)&&this.props.push(e,t,s[e])},vp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},bb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Mh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=xh(),(!s||!s.isStart)&&!n[bt]&&(vp(n),i.zOrigin&&n[on]&&(n[on]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},yp=function(e,t){var n={target:e,props:[],revert:bb,save:Mb};return e._gsap||ln.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},xp,Tc=function(e,t){var n=Bi.createElementNS?Bi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Bi.createElement(e);return n&&n.style?n:Bi.createElement(e)},_n=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Mh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,hr(t)||t,1)||""},md="O,Moz,ms,Ms,Webkit".split(","),hr=function(e,t,n){var i=t||ds,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(md[a]+e in s););return a<0?null:(a===3?"ms":a>=0?md[a]:"")+e},Ec=function(){lb()&&window.document&&(dd=window,Bi=dd.document,qs=Bi.documentElement,ds=Tc("div")||{style:{}},Tc("div"),bt=hr(bt),on=bt+"Origin",ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xp=!!hr("perspective"),xh=ln.core.reverting,yh=1)},gd=function(e){var t=e.ownerSVGElement,n=Tc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),qs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),qs.removeChild(n),s},_d=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Mp=function(e){var t,n;try{t=e.getBBox()}catch{t=gd(e),n=1}return t&&(t.width||t.height)||n||(t=gd(e)),t&&!t.width&&!t.x&&!t.y?{x:+_d(e,["x","cx","x1"])||0,y:+_d(e,["y","cy","y1"])||0,width:0,height:0}:t},bp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Mp(e))},Xi=function(e,t){if(t){var n=e.style,i;t in Ti&&t!==on&&(t=bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Mh,"-$1").toLowerCase())):n.removeAttribute(t)}},zi=function(e,t,n,i,s,a){var o=new an(e._pt,t,n,0,1,a?_p:gp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},vd={deg:1,rad:1,turn:1},Sb={grid:1,flex:1},Yi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ds.style,l=cb.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,m,p;if(i===a||!s||vd[i]||vd[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&bp(e),(f||a==="%")&&(Ti[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[h],At(f?s/g*u:s/100*g);if(o[l?"width":"height"]=u+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Bi||!_.appendChild)&&(_=Bi.body),m=_._gsap,m&&f&&m.width&&l&&m.time===pn.time&&!m.uncache)return At(s/m.width*u);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=u+i,g=e[h],y?e.style[t]=y:Xi(e,t)}else(f||a==="%")&&!Sb[_n(_,"display")]&&(o.position=_n(e,"position")),_===e&&(o.position="static"),_.appendChild(ds),g=ds[h],_.removeChild(ds),o.position="absolute";return l&&f&&(m=ps(_),m.time=pn.time,m.width=_[h]),At(d?g*s/u:g&&s?u/g*s:0)},vi=function(e,t,n,i){var s;return yh||Ec(),t in Qn&&t!=="transform"&&(t=Qn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ti[t]&&t!=="transform"?(s=aa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:po(_n(e,on))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=fo[t]&&fo[t](e,t,n)||_n(e,t)||zf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Yi(e,t,s,n)+n:s},wb=function(e,t,n,i){if(!n||n==="none"){var s=hr(t,e,1),a=s&&_n(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=_n(e,"borderTopColor"))}var o=new an(this._pt,e.style,t,0,1,fp),l=0,c=0,h,u,d,f,g,_,m,p,y,x,v,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=_n(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=_n(e,t)||i,_?e.style[t]=_:Xi(e,t)),h=[n,i],rp(h),n=h[0],i=h[1],d=n.match(Gs)||[],S=i.match(Gs)||[],S.length){for(;u=Gs.exec(i);)m=u[0],y=i.substring(l,u.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=Ys(f,m)+v),p=parseFloat(m),x=m.substr((p+"").length),l=Gs.lastIndex-x.length,x||(x=x||vn.units[t]||v,l===i.length&&(i+=x,o.e+=x)),v!==x&&(f=Yi(e,t,_,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?_p:gp;return Uf.test(i)&&(o.e=0),this._pt=o,o},yd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Tb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=yd[n]||n,t[1]=yd[i]||i,t.join(" ")},Eb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ti[o]&&(l=1,o=o==="transformOrigin"?on:bt),Xi(n,o);l&&(Xi(n,bt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",aa(n,1),a.uncache=1,vp(i)))}},fo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new an(e._pt,t,n,0,0,Eb);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},ra=[1,0,0,1,0,0],Sp={},wp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},xd=function(e){var t=_n(e,bt);return wp(t)?ra:t.substr(7).match(kf).map(At)},bh=function(e,t){var n=e._gsap||ps(e),i=e.style,s=xd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ra:s):(s===ra&&!e.offsetParent&&e!==qs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,qs.appendChild(e)),s=xd(e),l?i.display=l:Xi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):qs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ac=function(e,t,n,i,s,a){var o=e._gsap,l=s||bh(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,S=parseFloat(x[1])||0,A,T,C,M;n?l!==ra&&(T=f*m-g*_)&&(C=v*(m/T)+S*(-_/T)+(_*y-m*p)/T,M=v*(-g/T)+S*(f/T)-(f*y-g*p)/T,v=C,S=M):(A=Mp(e),v=A.x+(~x[0].indexOf("%")?v/100*A.width:v),S=A.y+(~(x[1]||x[0]).indexOf("%")?S/100*A.height:S)),i||i!==!1&&o.smooth?(p=v-c,y=S-h,o.xOffset=u+(p*f+y*_)-p,o.yOffset=d+(p*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[on]="0px 0px",a&&(zi(a,o,"xOrigin",c,v),zi(a,o,"yOrigin",h,S),zi(a,o,"xOffset",u,o.xOffset),zi(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+S)},aa=function(e,t){var n=e._gsap||new op(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=_n(e,on)||"0",h,u,d,f,g,_,m,p,y,x,v,S,A,T,C,M,b,L,O,U,F,G,H,X,z,ie,ae,ve,Re,Ve,q,Y;return h=u=d=_=m=p=y=x=v=0,f=g=1,n.svg=!!(e.getCTM&&bp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[bt]!=="none"?l[bt]:"")),i.scale=i.rotate=i.translate="none"),T=bh(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Ac(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,T)),S=n.xOrigin||0,A=n.yOrigin||0,T!==ra&&(L=T[0],O=T[1],U=T[2],F=T[3],h=G=T[4],u=H=T[5],T.length===6?(f=Math.sqrt(L*L+O*O),g=Math.sqrt(F*F+U*U),_=L||O?Os(O,L)*ls:0,y=U||F?Os(U,F)*ls+_:0,y&&(g*=Math.abs(Math.cos(y*js))),n.svg&&(h-=S-(S*L+A*U),u-=A-(S*O+A*F))):(Y=T[6],Ve=T[7],ae=T[8],ve=T[9],Re=T[10],q=T[11],h=T[12],u=T[13],d=T[14],C=Os(Y,Re),m=C*ls,C&&(M=Math.cos(-C),b=Math.sin(-C),X=G*M+ae*b,z=H*M+ve*b,ie=Y*M+Re*b,ae=G*-b+ae*M,ve=H*-b+ve*M,Re=Y*-b+Re*M,q=Ve*-b+q*M,G=X,H=z,Y=ie),C=Os(-U,Re),p=C*ls,C&&(M=Math.cos(-C),b=Math.sin(-C),X=L*M-ae*b,z=O*M-ve*b,ie=U*M-Re*b,q=F*b+q*M,L=X,O=z,U=ie),C=Os(O,L),_=C*ls,C&&(M=Math.cos(C),b=Math.sin(C),X=L*M+O*b,z=G*M+H*b,O=O*M-L*b,H=H*M-G*b,L=X,G=z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=At(Math.sqrt(L*L+O*O+U*U)),g=At(Math.sqrt(H*H+Y*Y)),C=Os(G,H),y=Math.abs(C)>2e-4?C*ls:0,v=q?1/(q<0?-q:q):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!wp(_n(e,bt)),X&&e.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=At(f),n.scaleY=At(g),n.rotation=At(_)+o,n.rotationX=At(m)+o,n.rotationY=At(p)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[on]=po(c)),n.xOffset=n.yOffset=0,n.force3D=vn.force3D,n.renderTransform=n.svg?Cb:xp?Tp:Ab,n.uncache=0,n},po=function(e){return(e=e.split(" "))[0]+" "+e[1]},gl=function(e,t,n){var i=Wt(t);return At(parseFloat(t)+parseFloat(Yi(e,"x",n+"px",i)))+i},Ab=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tp(e,t)},ns="0deg",Ar="0px",is=") ",Tp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,x=n.zOrigin,v="",S=p==="auto"&&e&&e!==1||p===!0;if(x&&(u!==ns||h!==ns)){var A=parseFloat(h)*js,T=Math.sin(A),C=Math.cos(A),M;A=parseFloat(u)*js,M=Math.cos(A),a=gl(y,a,T*M*-x),o=gl(y,o,-Math.sin(A)*-x),l=gl(y,l,C*M*-x+x)}m!==Ar&&(v+="perspective("+m+is),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(S||a!==Ar||o!==Ar||l!==Ar)&&(v+=l!==Ar||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+is),c!==ns&&(v+="rotate("+c+is),h!==ns&&(v+="rotateY("+h+is),u!==ns&&(v+="rotateX("+u+is),(d!==ns||f!==ns)&&(v+="skew("+d+", "+f+is),(g!==1||_!==1)&&(v+="scale("+g+", "+_+is),y.style[bt]=v||"translate(0, 0)"},Cb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,x=parseFloat(a),v=parseFloat(o),S,A,T,C,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=js,c*=js,S=Math.cos(l)*u,A=Math.sin(l)*u,T=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=js,M=Math.tan(c-h),M=Math.sqrt(1+M*M),T*=M,C*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),S*=M,A*=M)),S=At(S),A=At(A),T=At(T),C=At(C)):(S=u,C=d,A=T=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=Yi(f,"x",a,"px"),v=Yi(f,"y",o,"px")),(g||_||m||p)&&(x=At(x+g-(g*S+_*T)+m),v=At(v+_-(g*A+_*C)+p)),(i||s)&&(M=f.getBBox(),x=At(x+i/100*M.width),v=At(v+s/100*M.height)),M="matrix("+S+","+A+","+T+","+C+","+x+","+v+")",f.setAttribute("transform",M),y&&(f.style[bt]=M)},Rb=function(e,t,n,i,s){var a=360,o=Ft(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ls:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*pd)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*pd)%a-~~(c/a)*a)),e._pt=d=new an(e._pt,t,n,i,c,ub),d.e=h,d.u="deg",e._props.push(n),d},Md=function(e,t){for(var n in t)e[n]=t[n];return e},Pb=function(e,t,n){var i=Md({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[bt]=t,o=aa(n,1),Xi(n,bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[bt],a[bt]=t,o=aa(n,1),a[bt]=c);for(l in Ti)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=Wt(c),g=Wt(h),u=f!==g?Yi(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new an(e._pt,o,l,u,d-u,wc),e._pt.u=g||0,e._props.push(l));Md(o,i)};rn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});fo[e>1?"border"+r:r]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(g){return vi(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,u)}});var Ep={name:"css",register:Ec,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,d,f,g,_,m,p,y,x,v,S,A,T,C,M;yh||Ec(),this.styles=this.styles||yp(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(fn[_]&&lp(_,t,n,i,e,s)))){if(f=typeof h,g=fo[_],f==="function"&&(h=h.call(n,i,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=na(h)),g)g(this,e,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Hi.lastIndex=0,Hi.test(c)||(m=Wt(c),p=Wt(h),p?m!==p&&(c=Yi(e,_,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Ft(c)&&~c.indexOf("random(")&&(c=na(c)),Wt(c+"")||c==="auto"||(c+=vn.units[_]||Wt(vi(e,_))||""),(c+"").charAt(1)==="="&&(c=vi(e,_))):c=vi(e,_),d=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),_ in Qn&&(_==="autoAlpha"&&(d===1&&vi(e,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,o.visibility),zi(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Qn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Ti,x){if(this.styles.save(_),M=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=_n(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=h,h=_n(e,"perspective"),b?e.style.perspective=b:Xi(e,"perspective")}u=parseFloat(h)}if(v||(S=e._gsap,S.renderTransform&&!t.parseTransform||aa(e,t.parseTransform),A=t.smoothOrigin!==!1&&S.smooth,v=this._pt=new an(this._pt,o,bt,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new an(this._pt,S,"scaleY",S.scaleY,(y?Ys(S.scaleY,y+u):u)-S.scaleY||0,wc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(on,0,o[on]),h=Tb(h),S.svg?Ac(e,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==S.zOrigin&&zi(this,S,"zOrigin",S.zOrigin,p),zi(this,o,_,po(c),po(h)));continue}else if(_==="svgOrigin"){Ac(e,h,1,A,0,this);continue}else if(_ in Sp){Rb(this,S,_,d,y?Ys(d,y+h):h);continue}else if(_==="smoothOrigin"){zi(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){Pb(this,h,e);continue}}else _ in o||(_=hr(_)||_);if(x||(u||u===0)&&(d||d===0)&&!hb.test(h)&&_ in o)m=(c+"").substr((d+"").length),u||(u=0),p=Wt(h)||(_ in vn.units?vn.units[_]:m),m!==p&&(d=Yi(e,_,c,p)),this._pt=new an(this._pt,x?S:o,_,d,(y?Ys(d,y+u):u)-d,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?pb:wc),this._pt.u=p||0,x&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=fb):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=db);else if(_ in o)wb.call(this,e,_,c,y?y+h:h);else if(_ in e)this.add(e,_,c||e[_],y?y+h:h,i,s);else if(_!=="parseTransform"){ch(_,h);continue}x||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),a.push(_)}}T&&pp(this)},render:function(e,t){if(t.tween._time||!xh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vi,aliases:Qn,getSetter:function(e,t,n){var i=Qn[t];return i&&i.indexOf(",")<0&&(t=i),t in Ti&&t!==on&&(e._gsap.x||vi(e,"x"))?n&&fd===n?t==="scale"?vb:_b:(fd=n||{})&&(t==="scale"?yb:xb):e.style&&!ah(e.style[t])?mb:~t.indexOf("-")?gb:_h(e,t)},core:{_removeProperty:Xi,_getMatrix:bh}};ln.utils.checkPrefix=hr;ln.core.getStyleSaver=yp;(function(r,e,t,n){var i=rn(r+","+e+","+t,function(s){Ti[s]=1});rn(e,function(s){vn.units[s]="deg",Sp[s]=1}),Qn[i[13]]=r+","+e,rn(n,function(s){var a=s.split(":");Qn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){vn.units[r]="px"});ln.registerPlugin(Ep);var we=ln.registerPlugin(Ep)||ln;we.core.Tween;class Lb extends en{constructor(e,t){super(),this.camera=e,this.sizes=t,this.progress=0,this.targetProgress=0,this.momentumVelocity=0,this.touchVelocity=0,this.lastTouchTime=0,this._lastEmittedProgress=-1,this.isTransitioning=!1,this.isInspecting=!1,this.initCurves();const n=this.curve.getPointAt(0);this.camera.instance.position.copy(n),this.currentLookAt=this.lookAtCurve.getPointAt(0).clone(),this.camera.instance.lookAt(this.currentLookAt),this.initInputListeners()}initCurves(){const e=[new P(0,3.4,9.2),new P(4.2,2.2,5.6),new P(1.4,4.4,3),new P(-3.2,3.6,4.8),new P(-.2,5.6,7.2)];this.curve=new lc(e,!1,"centripetal",.5);const t=[new P(0,2.6,0),new P(.4,3,.2),new P(.1,4.2,0),new P(0,3.3,0),new P(0,2.4,0)];this.lookAtCurve=new lc(t,!1,"centripetal",.5)}initInputListeners(){this._onWheel=this._onWheel.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),window.addEventListener("wheel",this._onWheel,{passive:!0}),window.addEventListener("keydown",this._onKeyDown),this.touchStartX=0,this.touchStartY=0,this.isSwiping=!1,window.addEventListener("touchstart",this._onTouchStart,{passive:!0}),window.addEventListener("touchmove",this._onTouchMove,{passive:!0}),window.addEventListener("touchend",this._onTouchEnd,{passive:!0})}_onWheel(e){if(this.isTransitioning||this.isInspecting)return;const t=e.deltaY*65e-5;this.momentumVelocity+=t*1.8,this.momentumVelocity=dn.clamp(this.momentumVelocity,-2,2)}_onKeyDown(e){if(this.isTransitioning||this.isInspecting)return;let t=0;e.key==="ArrowDown"||e.key==="ArrowRight"||e.key==="PageDown"?t=.08:(e.key==="ArrowUp"||e.key==="ArrowLeft"||e.key==="PageUp")&&(t=-.08),t!==0&&(this.targetProgress=dn.clamp(this.targetProgress+t,0,1))}_onTouchStart(e){if(!this.isInspecting){if(e.target&&e.target.closest("button, nav, header, .story-card, .letter-card, .game-card, .easter-card, .candle-blow-card, .story-modal-overlay, .letter-modal-overlay, .game-modal-overlay, .easter-modal-overlay, .candle-modal-overlay, .perf-hud, .overlay-controls, .mini-timeline")){this.isSwiping=!1;return}e.touches.length>0&&(this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.lastTouchTime=performance.now(),this.touchVelocity=0,this.momentumVelocity=0,this.isSwiping=!0)}}_onTouchMove(e){if(!this.isSwiping||this.isTransitioning||this.isInspecting||e.touches.length===0)return;const t=e.touches[0].clientX,n=e.touches[0].clientY,i=performance.now(),s=Math.max(1,i-this.lastTouchTime),a=this.touchStartX-t,o=this.touchStartY-n;this.touchStartX=t,this.touchStartY=n,this.lastTouchTime=i;const c=(Math.abs(o)>=Math.abs(a)?o:a)*.0016,h=c/(s/1e3);this.touchVelocity=this.touchVelocity*.35+h*.65,this.targetProgress=dn.clamp(this.targetProgress+c,0,1)}_onTouchEnd(){this.isSwiping&&(this.isSwiping=!1,this.momentumVelocity=dn.clamp(this.touchVelocity,-1.8,1.8),this.touchVelocity=0)}transitionTo(e,t=1.8,n="power3.inOut"){this.isTransitioning=!0;const i=dn.clamp(e,0,1);return we.to(this,{targetProgress:i,duration:t,ease:n,onUpdate:()=>{this.trigger("progressChange",[this.targetProgress])},onComplete:()=>{this.isTransitioning=!1,this.trigger("transitionComplete",[this.targetProgress])}})}focusOnTarget(e,t,n=1.3,i="power2.out"){return this.isInspecting=!0,we.killTweensOf(this.camera.instance.position),we.killTweensOf(this.currentLookAt),we.to(this.camera.instance.position,{x:e.x,y:e.y,z:e.z,duration:n,ease:i}),we.to(this.currentLookAt,{x:t.x,y:t.y,z:t.z,duration:n,ease:i,onUpdate:()=>{this.camera.instance.lookAt(this.currentLookAt)}})}exitFocus(e=1.1,t="power2.inOut"){if(!this.isInspecting)return;const n=dn.clamp(this.progress,0,1),i=this.curve.getPointAt(n),s=this.lookAtCurve.getPointAt(n);return we.killTweensOf(this.camera.instance.position),we.killTweensOf(this.currentLookAt),we.to(this.camera.instance.position,{x:i.x,y:i.y,z:i.z,duration:e,ease:t}),we.to(this.currentLookAt,{x:s.x,y:s.y,z:s.z,duration:e,ease:t,onUpdate:()=>{this.camera.instance.lookAt(this.currentLookAt)},onComplete:()=>{this.isInspecting=!1}})}update(e){if(!this.camera||!this.camera.instance||this.isInspecting)return;if(!this.isSwiping&&Math.abs(this.momentumVelocity)>1e-4){this.targetProgress+=this.momentumVelocity*e;const a=Math.pow(.88,e*60);this.momentumVelocity*=a,(this.targetProgress<=0||this.targetProgress>=1)&&(this.momentumVelocity=0),this.targetProgress=dn.clamp(this.targetProgress,0,1)}const t=1-Math.exp(-6.5*e);this.progress+=(this.targetProgress-this.progress)*t;const n=dn.clamp(this.progress,0,1);Math.abs(n-this._lastEmittedProgress)>4e-4&&(this._lastEmittedProgress=n,this.trigger("progressChange",[n]));const i=this.curve.getPointAt(n);this.camera.instance.position.copy(i);const s=this.lookAtCurve.getPointAt(n);this.currentLookAt.lerp(s,t),this.camera.instance.lookAt(this.currentLookAt)}dispose(){window.removeEventListener("wheel",this._onWheel),window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("touchstart",this._onTouchStart),window.removeEventListener("touchmove",this._onTouchMove),window.removeEventListener("touchend",this._onTouchEnd),we.killTweensOf(this),this.curve=null,this.lookAtCurve=null,this.camera=null,super.dispose()}}class Ib{constructor(e){this.sceneManager=e,this.sizes=this.sceneManager.sizes,this.scene=this.sceneManager.scene,this.init()}init(){const e=this.sizes.width/this.sizes.height,t=e<1?dn.clamp(45/Math.pow(e,.45),48,62):45;this.instance=new Kt(t,e,.1,150),this.instance.position.set(0,3.4,9.2),this.instance.lookAt(0,2.6,0),this.scene.add(this.instance),this.track=new Lb(this,this.sizes)}resize(){if(!this.instance)return;const e=this.sizes.width/this.sizes.height;this.instance.aspect=e,e<1?this.instance.fov=dn.clamp(45/Math.pow(e,.45),48,62):this.instance.fov=45,this.instance.updateProjectionMatrix()}update(e){this.track&&this.track.update(e)}dispose(){this.track&&(this.track.dispose(),this.track=null),this.instance&&this.instance.parent&&this.instance.parent.remove(this.instance),this.instance=null}}class Db{constructor(e){this.sceneManager=e,this.canvas=this.sceneManager.canvas,this.sizes=this.sceneManager.sizes,this.scene=this.sceneManager.scene,this.camera=this.sceneManager.camera,this.init()}init(){this.instance=new hM({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio),this.instance.toneMapping=Dc,this.instance.toneMappingExposure=1,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=kd}resize(){this.instance&&(this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio))}render(){!this.instance||!this.camera||!this.camera.instance||this.instance.render(this.scene,this.camera.instance)}dispose(){this.instance&&(this.instance.dispose(),this.instance=null)}}class kb{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=_l(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ub.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=_l()-this._startTime,this}dispose(){return this.disconnect(),this}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:_l())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function _l(){return performance.now()}function Ub(){this._document.hidden===!1&&this.reset()}class Nb{constructor(e){this.sceneManager=e,this.renderer=this.sceneManager.renderer,this.isRunning=!1,this.timer=new kb,typeof document<"u"&&typeof this.timer.connect=="function"&&this.timer.connect(document),this._tick=this._tick.bind(this)}start(){this.isRunning||(this.isRunning=!0,this.renderer&&this.renderer.instance&&this.renderer.instance.setAnimationLoop(this._tick))}stop(){this.isRunning=!1,this.renderer&&this.renderer.instance&&this.renderer.instance.setAnimationLoop(null)}_tick(){if(!this.isRunning)return;this.timer.update();let e=this.timer.getDelta();e=Math.min(e,.1),this.sceneManager.update(e),this.sceneManager.render()}dispose(){this.stop(),this.timer&&typeof this.timer.dispose=="function"&&this.timer.dispose(),this.timer=null}}class Ob extends en{constructor(){super(),this.itemsLoaded=0,this.itemsTotal=0,this.progress=0,this.init()}init(){this.manager=new Qc(()=>{this.progress=1,this.trigger("progress",[{loaded:this.itemsTotal,total:this.itemsTotal,progress:1,percentage:100}]),setTimeout(()=>{this.trigger("ready")},300)},(e,t,n)=>{this.itemsLoaded=t,this.itemsTotal=n,this.progress=n>0?t/n:0,this.trigger("progress",[{url:e,loaded:t,total:n,progress:this.progress,percentage:Math.round(this.progress*100)}])},e=>{console.error(`[AssetLoader] Error loading asset: ${e}`),this.trigger("error",[e])}),this.textureLoader=new eh(this.manager)}loadInitialAssets(){const e=(n,i,s)=>{const a=document.createElement("canvas");a.width=256,a.height=256;const o=a.getContext("2d"),l=o.createLinearGradient(0,0,256,256);return l.addColorStop(0,n),l.addColorStop(1,i),o.fillStyle=l,o.fillRect(0,0,256,256),o.fillStyle="rgba(255, 255, 255, 0.4)",o.font="bold 24px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(s,128,128),a.toDataURL("image/png")},t=[{name:"baseGradient",url:e("#ff4d88","#1b1233","3D WORLD")},{name:"accentGlow",url:e("#4ef2d2","#21133f","SHADERS")},{name:"particlePattern",url:e("#ffe043","#ff4d88","READY")}];this.loadedTextures={};for(const n of t)this.textureLoader.load(n.url,i=>{i.colorSpace=ft,this.loadedTextures[n.name]=i})}dispose(){if(this.loadedTextures)for(const e in this.loadedTextures)this.loadedTextures[e]&&typeof this.loadedTextures[e].dispose=="function"&&this.loadedTextures[e].dispose();this.loadedTextures={},super.dispose()}}class Fb{constructor(e){this.assetLoader=e,this.screenElement=document.getElementById("loading-screen"),this.barElement=document.getElementById("progress-bar"),this.percentElement=document.getElementById("loader-percent"),this.itemsElement=document.getElementById("loader-items"),this.statusElement=document.getElementById("loader-status"),this.init()}init(){this.screenElement&&(this._onProgress=this._onProgress.bind(this),this._onReady=this._onReady.bind(this),this.assetLoader.on("progress",this._onProgress),this.assetLoader.on("ready",this._onReady))}_onProgress(e){e&&(this.barElement&&(this.barElement.style.width=`${e.percentage}%`),this.percentElement&&(this.percentElement.textContent=`${e.percentage}%`),this.itemsElement&&(this.itemsElement.textContent=`${e.loaded} / ${e.total}`),this.statusElement&&(e.percentage<40?this.statusElement.textContent="Memuat tekstur dan konfigurasi...":e.percentage<90?this.statusElement.textContent="Mengompilasi materi PBR dan pipeline...":this.statusElement.textContent="Menyelesaikan setup visual..."))}_onReady(){this.statusElement&&(this.statusElement.textContent="Siap! Memasuki dunia 3D..."),setTimeout(()=>{this.screenElement&&(this.screenElement.classList.add("fade-out"),setTimeout(()=>{this.screenElement&&(this.screenElement.style.display="none")},850))},400)}dispose(){this.assetLoader.off("progress"),this.assetLoader.off("ready"),this.screenElement&&this.screenElement.parentNode&&this.screenElement.parentNode.removeChild(this.screenElement),this.screenElement=null,this.barElement=null,this.percentElement=null,this.itemsElement=null,this.statusElement=null}}class Bb{constructor(e){this.sceneManager=e,this.renderer=this.sceneManager.renderer,this.world=this.sceneManager.world,this.frameCount=0,this.lastTime=performance.now(),this.currentFPS=60,this.drawCalls=0,this.triangles=0,this.isCollapsed=!0,this.init()}init(){this.container=document.createElement("div"),this.container.id="perf-hud",this.container.className=`perf-hud ${this.isCollapsed?"collapsed":""}`,this.container.innerHTML=`
      <div class="perf-header" id="perf-header" title="Klik untuk perkecil/perbesar telemetry">
        <span class="perf-status-dot"></span>
        <span class="perf-fps" id="hud-fps">60 FPS</span>
        <button class="perf-toggle-btn" id="perf-toggle-btn" aria-label="Toggle Telemetry">
          ${this.isCollapsed?"▾":"▴"}
        </button>
      </div>
      <div class="perf-body" id="perf-body">
        <div class="perf-row">
          <span class="perf-label">Render Mode:</span>
          <span class="perf-value" id="hud-mode" style="color: #4ef2d2;">Composer</span>
        </div>
        <div class="perf-row">
          <span class="perf-label">Draw Calls:</span>
          <span class="perf-value" id="hud-calls">--</span>
        </div>
        <div class="perf-row">
          <span class="perf-label">Kelopak Sakura:</span>
          <span class="perf-value" id="hud-petals">2,500</span>
        </div>
        <div class="perf-row">
          <span class="perf-label">Triangles:</span>
          <span class="perf-value" id="hud-tris">--</span>
        </div>
        <div class="perf-row" style="margin-top: 6px; border-top: 1px dashed rgba(255, 255, 255, 0.15); padding-top: 6px;">
          <span class="perf-label">Tweaks:</span>
          <span class="perf-value" id="hud-debug-link" style="color: #ff94b8; cursor: pointer; text-decoration: underline;" title="Klik untuk buka/tutup #debug menu">#debug (Shift+D)</span>
        </div>
      </div>
    `,document.body.appendChild(this.container),this.fpsEl=document.getElementById("hud-fps"),this.modeEl=document.getElementById("hud-mode"),this.callsEl=document.getElementById("hud-calls"),this.petalsEl=document.getElementById("hud-petals"),this.trisEl=document.getElementById("hud-tris"),this.headerEl=document.getElementById("perf-header"),this.toggleBtn=document.getElementById("perf-toggle-btn"),this.bodyEl=document.getElementById("perf-body"),this.headerEl.addEventListener("click",n=>{n.stopPropagation(),this.toggleCollapse()});const e=document.getElementById("hud-debug-link");e&&e.addEventListener("click",n=>{n.stopPropagation(),window.location.hash.toLowerCase().includes("debug")?window.location.hash="":window.location.hash="#debug"});const t=()=>{window.location.hash.toLowerCase().includes("debug")?this.container.classList.add("debug-visible"):this.container.classList.remove("debug-visible")};t(),window.addEventListener("hashchange",t)}toggleCollapse(){this.isCollapsed=!this.isCollapsed,this.container.classList.toggle("collapsed",this.isCollapsed),this.toggleBtn&&(this.toggleBtn.textContent=this.isCollapsed?"▾":"▴")}update(){var n,i;this.frameCount++;const e=performance.now(),t=e-this.lastTime;if(t>=500){if(this.currentFPS=Math.round(this.frameCount*1e3/t),this.frameCount=0,this.lastTime=e,this.sceneManager.postProcessing&&(this.sceneManager.postProcessing.checkPerformance(this.currentFPS),this.modeEl)){const a=this.sceneManager.postProcessing.isEnabled;this.modeEl.textContent=a?"Bloom+Vignette":"Direct Fallback",this.modeEl.style.color=a?"#4ef2d2":"#ffe043"}if(this.renderer&&this.renderer.instance){const a=this.renderer.instance.info;this.drawCalls=a.render.calls,this.triangles=a.render.triangles}const s=((i=(n=this.world)==null?void 0:n.petals)==null?void 0:i.count)||2500;this.fpsEl&&(this.fpsEl.textContent=`${this.currentFPS} FPS`,this.fpsEl.style.color=this.currentFPS>=55?"#4ef2d2":this.currentFPS>=35?"#ffe043":"#ff4d88"),this.callsEl&&(this.callsEl.textContent=`${this.drawCalls} calls`),this.petalsEl&&(this.petalsEl.textContent=`${s.toLocaleString()} (Instanced)`),this.trisEl&&(this.trisEl.textContent=`${this.triangles.toLocaleString()}`)}}getStats(){var e,t,n,i;return{fps:this.currentFPS,drawCalls:this.drawCalls,triangles:this.triangles,petals:((t=(e=this.world)==null?void 0:e.petals)==null?void 0:t.count)||2500,composerEnabled:((i=(n=this.sceneManager)==null?void 0:n.postProcessing)==null?void 0:i.isEnabled)??!1}}dispose(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.fpsEl=null,this.modeEl=null,this.callsEl=null,this.petalsEl=null,this.trisEl=null}}class zb extends en{constructor(){super(),this.STORAGE_KEY="birthday_3d_progress_v1",this.state=this.load()}load(){const e={goldenPetal:!1,openedMemories:[],letterRead:!1,easterEggFound:!1,relationshipStartDate:"2023-01-01"};try{const t=localStorage.getItem(this.STORAGE_KEY);if(t)return{...e,...JSON.parse(t)}}catch(t){console.warn("[ProgressStore] Failed to read localStorage, using default state.",t)}return e}save(){try{localStorage.setItem(this.STORAGE_KEY,JSON.stringify(this.state)),this.state.goldenPetal&&localStorage.setItem("goldenPetal_tangkapKelopak","true"),this.trigger("change",[this.state])}catch(e){console.warn("[ProgressStore] Failed to write localStorage.",e)}}markMemoryOpened(e){this.state.openedMemories.includes(e)||(this.state.openedMemories.push(e),this.save())}isMemoryOpened(e){return this.state.openedMemories.includes(e)}setGoldenPetal(e=!0){this.state.goldenPetal=e,this.save()}hasGoldenPetal(){return this.state.goldenPetal||localStorage.getItem("goldenPetal_tangkapKelopak")==="true"}setLetterRead(e=!0){this.state.letterRead=e,this.save()}hasLetterRead(){return this.state.letterRead}setEasterEggFound(e=!0){this.state.easterEggFound=e,this.save()}hasEasterEggFound(){return this.state.easterEggFound}resetProgress(){this.state={goldenPetal:!1,openedMemories:[],letterRead:!1,easterEggFound:!1,relationshipStartDate:"2023-01-01"};try{localStorage.removeItem(this.STORAGE_KEY),localStorage.removeItem("goldenPetal_tangkapKelopak")}catch{}this.save()}}const zn=new zb;class Gb extends en{constructor(e){super(),this.sceneManager=e,this.camera=this.sceneManager.camera,this.postProcessing=this.sceneManager.postProcessing,this.hasGoldenPetal=zn.hasGoldenPetal(),this.hasEasterEgg=zn.hasEasterEggFound(),this.hasLetterRead=zn.hasLetterRead();const t=new Date(zn.state.relationshipStartDate||"2023-01-01"),n=new Date;this.daysTogether=Math.max(1,Math.floor((n-t)/(1e3*60*60*24))),this.init(),zn.on("change",()=>{this.refreshProgressUI()})}init(){this.container=document.createElement("div"),this.container.id="scene-overlay",this.container.className="scene-overlay",this.container.innerHTML=`
      <!-- Top Center Hub (Clean Minimalist Floating Pill Dock) -->
      <header class="hub-header">
        <div class="hub-days-pill" id="hub-days-pill" title="Momen Bersama Nur Syarifa Syuhada">
          <span class="hub-days-text">${this.daysTogether.toLocaleString()} Hari Bersama</span>
        </div>

        <div class="hub-petal-badge ${this.hasGoldenPetal?"unlocked":""}" id="hub-petal-badge" title="Kelopak Emas Hub">
          <span class="hub-petal-text" id="hub-petal-text">${this.hasGoldenPetal?"1 / 1 Emas":"0 / 1 Emas"}</span>
        </div>

        <button class="hub-music-btn" id="btn-toggle-bgm" aria-label="Putar Musik Latar" title="Putar Musik Latar">
          <span class="hub-music-bars">
            <span class="bar bar-1"></span>
            <span class="bar bar-2"></span>
            <span class="bar bar-3"></span>
          </span>
          <span class="hub-btn-label">Musik</span>
        </button>

        <button class="hub-cake-btn" id="btn-open-cake-hub" aria-label="Tiup Lilin" title="Tiup Lilin Ulang Tahun">
          <span class="hub-btn-label">Tiup Lilin</span>
        </button>

        <button class="hub-game-btn" id="btn-open-minigame" aria-label="Mainkan Mini Game">
          <span class="hub-btn-label">Game</span>
        </button>

        <button class="hub-letter-btn ${this.hasLetterRead?"read":""}" id="btn-open-letter-hub" aria-label="Buka Surat Ucapan">
          <span class="hub-btn-label">Surat</span>
        </button>
      </header>

      <!-- Chapter Navigation Dock (Clean Minimalist 2-Chapter Flow) -->
      <nav class="chapter-dock">
        <button class="chapter-btn active" data-progress="0.0">
          <span class="chapter-num">01</span>
          <span class="chapter-title">Taman Sakura</span>
        </button>
        <button class="chapter-btn letter-nav-btn" data-progress="1.0" id="btn-chapter-letter">
          <span class="chapter-num">02</span>
          <span class="chapter-title">Surat Ucapan</span>
        </button>
      </nav>

      <!-- Scroll / Swipe Prompt -->
      <div class="scroll-prompt" id="scroll-prompt">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <span class="scroll-prompt-text">
          <span class="text-full">Gulir mouse atau geser layar</span>
          <span class="text-short">Geser untuk jelajahi</span>
        </span>
      </div>

      <!-- Controls & Toggle Fallback -->
      <div class="overlay-controls">
        <button class="ctrl-btn" id="btn-toggle-fullscreen" aria-label="Layar Penuh (F)" title="Layar Penuh (Tekan F)">
          <span class="ctrl-icon">MAX</span>
          <span class="text-full">Layar Penuh</span>
          <span class="text-short">Penuh</span>
        </button>

        <button class="ctrl-btn" id="btn-toggle-ui" aria-label="Sembunyikan UI (U)" title="Sembunyikan UI (Tekan U)">
          <span class="ctrl-icon">ZEN</span>
          <span class="text-full">Sembunyikan UI</span>
          <span class="text-short">Zen</span>
        </button>

        <button class="fx-toggle-btn active" id="btn-toggle-fx">
          <span class="fx-dot"></span>
          <span id="fx-status-text">
            <span class="text-full">Post-Processing: ON</span>
            <span class="text-short">FX: ON</span>
          </span>
        </button>
      </div>

      <!-- Floating Restore UI Button (Shown when UI is hidden) -->
      <button class="zen-restore-btn" id="btn-restore-ui" aria-label="Tampilkan UI (U / Esc)">
        <span class="ctrl-icon">UI</span>
        <span>Tampilkan UI (U / Esc)</span>
      </button>
    `,document.body.appendChild(this.container),this.chapterButtons=Array.from(this.container.querySelectorAll(".chapter-btn")),this.fxBtn=document.getElementById("btn-toggle-fx"),this.fxStatusText=document.getElementById("fx-status-text"),this.fullscreenBtn=document.getElementById("btn-toggle-fullscreen"),this.hideUIBtn=document.getElementById("btn-toggle-ui"),this.restoreUIBtn=document.getElementById("btn-restore-ui"),this.scrollPrompt=document.getElementById("scroll-prompt"),this.hubPetalBadge=document.getElementById("hub-petal-badge"),this.hubPetalIcon=document.getElementById("hub-petal-icon"),this.hubPetalText=document.getElementById("hub-petal-text"),this.bgmBtn=document.getElementById("btn-toggle-bgm"),this.openCakeBtn=document.getElementById("btn-open-cake-hub"),this.openGameBtn=document.getElementById("btn-open-minigame"),this.openLetterBtn=document.getElementById("btn-open-letter-hub"),this.chapterLetterBtn=document.getElementById("btn-chapter-letter"),this.easterPill=document.getElementById("hub-easter-pill"),this.bindEvents()}bindEvents(){this.chapterButtons.forEach(e=>{e.addEventListener("click",()=>{const t=parseFloat(e.dataset.progress);if(e.id==="btn-chapter-letter"){this.camera&&this.camera.track&&this.camera.track.transitionTo(t,1.8,"power3.inOut"),setTimeout(()=>{this.trigger("openLetter")},1400);return}this.camera&&this.camera.track&&this.camera.track.transitionTo(t,1.8,"power3.inOut")})}),this.camera&&this.camera.track&&this.camera.track.on("progressChange",e=>{this.updateActiveChapter(e),e>.05&&this.scrollPrompt?we.to(this.scrollPrompt,{opacity:0,duration:.5,pointerEvents:"none"}):e<=.05&&this.scrollPrompt&&we.to(this.scrollPrompt,{opacity:1,duration:.5})}),this.fxBtn&&this.fxBtn.addEventListener("click",()=>{if(!this.postProcessing)return;const e=this.postProcessing.toggle();this.updateFXButton(e)}),this.bgmBtn&&this.bgmBtn.addEventListener("click",()=>{this.trigger("toggleBGM")}),this.openCakeBtn&&this.openCakeBtn.addEventListener("click",()=>{this.trigger("openCake")}),this.openGameBtn&&this.openGameBtn.addEventListener("click",()=>{this.trigger("playGame")}),this.openLetterBtn&&this.openLetterBtn.addEventListener("click",()=>{this.trigger("openLetter")}),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{this.toggleFullscreen()}),this.hideUIBtn&&this.hideUIBtn.addEventListener("click",()=>{this.toggleUI(!1)}),this.restoreUIBtn&&this.restoreUIBtn.addEventListener("click",()=>{this.toggleUI(!0)}),this._onKeyDown=e=>{if(!(e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")))if(e.key==="f"||e.key==="F")this.toggleFullscreen();else if(e.key==="u"||e.key==="U"){const t=document.body.classList.contains("ui-hidden");this.toggleUI(t)}else e.key==="Escape"&&document.body.classList.contains("ui-hidden")&&this.toggleUI(!0)},window.addEventListener("keydown",this._onKeyDown)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen&&(document.exitFullscreen().catch(()=>{}),this.showToast("Keluar dari layar penuh","")):(document.documentElement.requestFullscreen().catch(()=>{}),this.showToast("Layar penuh aktif (Tekan F atau Esc untuk keluar)",""))}toggleUI(e=null){const t=document.body.classList.contains("ui-hidden");(e!==null?e:t)?(document.body.classList.remove("ui-hidden"),this.showToast("Antarmuka ditampilkan kembali","")):(document.body.classList.add("ui-hidden"),this.showToast("Mode Zen: UI disembunyikan (Tekan U atau tombol di pojok untuk kembali)",""))}refreshProgressUI(){this.hasGoldenPetal=zn.hasGoldenPetal(),this.hasEasterEgg=zn.hasEasterEggFound(),this.hasLetterRead=zn.hasLetterRead(),this.hubPetalBadge&&this.hubPetalText&&(this.hasGoldenPetal?(this.hubPetalBadge.classList.add("unlocked"),this.hubPetalText.textContent="1 / 1 Emas"):(this.hubPetalBadge.classList.remove("unlocked"),this.hubPetalText.textContent="0 / 1 Emas")),this.easterPill&&(this.hasEasterEgg?this.easterPill.classList.add("unlocked"):this.easterPill.classList.remove("unlocked")),this.openLetterBtn&&this.hasLetterRead&&this.openLetterBtn.classList.add("read")}awardGoldenPetal(){zn.setGoldenPetal(!0),this.hubPetalBadge&&we.fromTo(this.hubPetalBadge,{scale:1.35,rotate:-6},{scale:1,rotate:0,duration:.6,ease:"elastic.out(1.2, 0.4)"})}updateActiveChapter(e){let t=0;e>=.7?t=1:t=0,this.chapterButtons.forEach((n,i)=>{i===t?n.classList.add("active"):n.classList.remove("active")})}updateMusicButton(e){if(this.bgmBtn)if(e){this.bgmBtn.classList.add("playing");const t=this.bgmBtn.querySelector(".hub-btn-label");t&&(t.textContent="Musik: ON")}else{this.bgmBtn.classList.remove("playing");const t=this.bgmBtn.querySelector(".hub-btn-label");t&&(t.textContent="Musik: OFF")}}updateFXButton(e){!this.fxBtn||!this.fxStatusText||(e?(this.fxBtn.classList.add("active"),this.fxStatusText.innerHTML='<span class="text-full">Post-Processing: ON</span><span class="text-short">FX: ON</span>'):(this.fxBtn.classList.remove("active"),this.fxStatusText.innerHTML='<span class="text-full">Fallback: Direct WebGL</span><span class="text-short">FX: OFF</span>'))}showToast(e,t="",n=3600){let i=document.getElementById("garden-toast");i||(i=document.createElement("div"),i.id="garden-toast",i.className="garden-toast",document.body.appendChild(i)),i.innerHTML=t?`<span class="toast-icon">${t}</span><span class="toast-msg">${e}</span>`:`<span class="toast-msg">${e}</span>`,i.classList.add("visible"),this._toastTimeout&&clearTimeout(this._toastTimeout),this._toastTimeout=setTimeout(()=>{i.classList.remove("visible")},n)}dispose(){this._onKeyDown&&window.removeEventListener("keydown",this._onKeyDown),this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.chapterButtons=[],this.fxBtn=null,this.fxStatusText=null,this.fullscreenBtn=null,this.hideUIBtn=null,this.restoreUIBtn=null,this.scrollPrompt=null,this.hubPetalBadge=null,this.hubPetalIcon=null,this.hubPetalText=null,this.openGameBtn=null,this.openLetterBtn=null,this.chapterLetterBtn=null,this.easterPill=null,super.dispose()}}const Ap={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _r{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Vb=new xo(-1,1,1,-1,0,1);class Hb extends Rt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}}const Wb=new Hb;class Sh{constructor(e){this._mesh=new K(Wb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Cp extends _r{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jr.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Sh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class bd extends _r{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Xb extends _r{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Yb{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cp(Ap),this.copyPass.material.blending=xi,this.clock=new _0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}bd!==void 0&&(a instanceof bd?n=!0:a instanceof Xb&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qb extends _r{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new me}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const jb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ur extends _r{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new me(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new kn(s,a,{type:ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new kn(s,a,{type:ei});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new kn(s,a,{type:ei});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=jb;this.highPassUniforms=jr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new re(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Ap;this.copyUniforms=jr.clone(h.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Hr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new me,this.oldClearAlpha=1,this.basic=new Pn,this.fsQuad=new Sh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new re(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ur.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ur.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ur.BlurDirectionX=new re(1,0);ur.BlurDirectionY=new re(0,1);const $b={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Kb extends _r{constructor(){super();const e=$b;this.uniforms=jr.clone(e.uniforms),this.material=new $g({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Sh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ye.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Od?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Dc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gd?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Bd&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Zb={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float offset;
		uniform float darkness;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			// Eskil's vignette

			vec4 texel = texture2D( tDiffuse, vUv );
			vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );
			gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );

		}`};class Jb{constructor(e){this.sceneManager=e,this.renderer=this.sceneManager.renderer,this.sizes=this.sceneManager.sizes,this.scene=this.sceneManager.scene,this.camera=this.sceneManager.camera,this.isEnabled=!0,this.fallbackTriggered=!1,this.lowFPSCount=0,this.fpsThreshold=38,this.requiredLowFrames=3,this.init()}init(){if(!this.renderer||!this.renderer.instance)return;const e=this.sizes.width,t=this.sizes.height,n=new kn(e,t,{type:ei,samples:2});this.composer=new Yb(this.renderer.instance,n),this.composer.setPixelRatio(this.sizes.pixelRatio),this.composer.setSize(e,t),this.renderPass=new qb(this.scene,this.camera.instance),this.composer.addPass(this.renderPass);const i=new re(e,t);this.bloomPass=new ur(i,.42,.35,.82),this.composer.addPass(this.bloomPass),this.vignettePass=new Cp(Zb),this.vignettePass.uniforms.darkness.value=1.15,this.vignettePass.uniforms.offset.value=1.05,this.composer.addPass(this.vignettePass),this.outputPass=new Kb,this.composer.addPass(this.outputPass),console.log("[PostProcessing] Pipeline initialized: Bloom (0.42) + Vignette + OutputPass.")}resize(){this.composer&&(this.composer.setSize(this.sizes.width,this.sizes.height),this.composer.setPixelRatio(this.sizes.pixelRatio),this.bloomPass&&this.bloomPass.resolution&&this.bloomPass.resolution.set(this.sizes.width,this.sizes.height))}checkPerformance(e){this.fallbackTriggered||!this.isEnabled||(e<this.fpsThreshold&&e>5?(this.lowFPSCount++,this.lowFPSCount>=this.requiredLowFrames&&(this.fallbackTriggered=!0,this.disable(`Auto-fallback: FPS (${e}) drop detected. Post-processing bypassed.`))):this.lowFPSCount=0)}enable(){this.isEnabled=!0,console.log("[PostProcessing] Enabled.")}disable(e="Manual toggle"){this.isEnabled=!1,console.warn(`[PostProcessing] Disabled: ${e} Rendering directly via WebGLRenderer.`)}toggle(){return this.isEnabled?this.disable():this.enable(),this.isEnabled}render(){this.isEnabled&&this.composer?this.composer.render():this.renderer&&this.renderer.instance&&this.renderer.instance.render(this.scene,this.camera.instance)}dispose(){this.composer&&(this.bloomPass&&typeof this.bloomPass.dispose=="function"&&this.bloomPass.dispose(),this.vignettePass&&typeof this.vignettePass.dispose=="function"&&this.vignettePass.dispose(),this.outputPass&&typeof this.outputPass.dispose=="function"&&this.outputPass.dispose(),this.renderPass&&typeof this.renderPass.dispose=="function"&&this.renderPass.dispose(),this.composer.dispose(),this.composer=null),this.renderPass=null,this.bloomPass=null,this.vignettePass=null,this.outputPass=null}}class Qb{constructor(e){this.sceneManager=e,this.scene=this.sceneManager.scene,this.init()}init(){this.hemiLight=new h0(12445951,5012539,1.15),this.scene.add(this.hemiLight),this.sunLight=new uc(16775661,2),this.sunLight.position.set(8,14,6),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=32,this.sunLight.shadow.camera.top=8.5,this.sunLight.shadow.camera.right=8.5,this.sunLight.shadow.camera.bottom=-8.5,this.sunLight.shadow.camera.left=-8.5,this.sunLight.shadow.bias=-4e-4,this.sunLight.shadow.radius=2,this.scene.add(this.sunLight),this.rimLight=new uc(10213631,.7),this.rimLight.position.set(-7,6,-6),this.scene.add(this.rimLight)}update(e){}dispose(){var e,t,n,i,s,a;this.hemiLight&&(this.scene.remove(this.hemiLight),(t=(e=this.hemiLight).dispose)==null||t.call(e)),this.sunLight&&(this.scene.remove(this.sunLight),(i=(n=this.sunLight).dispose)==null||i.call(n)),this.rimLight&&(this.scene.remove(this.rimLight),(a=(s=this.rimLight).dispose)==null||a.call(s)),this.hemiLight=null,this.sunLight=null,this.rimLight=null}}class eS{constructor(e){this.sceneManager=e,this.scene=this.sceneManager.scene,this.elapsedTime=0,this.init()}init(){this.geometry=new Gn(75,32,24),this.material=new Ot({side:Zt,depthWrite:!1,uniforms:{uTime:{value:0},uTopColor:{value:new me(2784984)},uMidColor:{value:new me(8574463)},uBottomColor:{value:new me(16775146)},uSunPosition:{value:new P(12,18,-25).normalize()},uSunColor:{value:new me(16775914)}},vertexShader:`
        varying vec3 vWorldPosition;
        varying vec3 vNormal;

        void main() {
          vNormal = normalize(normal);
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uTopColor;
        uniform vec3 uMidColor;
        uniform vec3 uBottomColor;
        uniform vec3 uSunPosition;
        uniform vec3 uSunColor;

        varying vec3 vWorldPosition;
        varying vec3 vNormal;

        void main() {
          // Normalize direction from center
          vec3 dir = normalize(vWorldPosition);
          float height = dir.y; // -1.0 to 1.0

          // Smooth vertical anime sky gradient
          vec3 skyColor;
          if (height > 0.0) {
            float t = smoothstep(0.0, 0.72, height);
            skyColor = mix(uMidColor, uTopColor, t);
          } else {
            float t = smoothstep(-0.35, 0.0, height);
            skyColor = mix(uBottomColor, uMidColor, t);
          }

          // Stylized Drifting Anime Clouds (Makoto Shinkai / Ghibli Style)
          if (dir.y > 0.06 && dir.y < 0.62) {
            vec2 cloudUv = vec2(dir.x / (dir.y + 0.22), dir.z / (dir.y + 0.22)) * 0.75 + vec2(uTime * 0.005, 0.0);
            float n1 = sin(cloudUv.x * 3.4 + sin(cloudUv.y * 2.6)) * 0.5 + 0.5;
            float n2 = sin(cloudUv.x * 7.1 - cloudUv.y * 5.8) * 0.5 + 0.5;
            float cloudNoise = n1 * 0.68 + n2 * 0.32;
            float cloudMask = smoothstep(0.52, 0.76, cloudNoise);
            float hFade = smoothstep(0.06, 0.18, dir.y) * smoothstep(0.62, 0.38, dir.y);

            vec3 cloudCol = vec3(0.99, 0.98, 0.97);
            // Soft cloud shadow / volume tint
            vec3 cloudShade = mix(vec3(0.85, 0.91, 0.98), cloudCol, smoothstep(0.6, 0.8, cloudNoise));
            skyColor = mix(skyColor, cloudShade, cloudMask * hFade * 0.78);
          }

          // Radiant Sun Disc & Horizon Corona Glow
          float sunDot = max(dot(dir, uSunPosition), 0.0);
          float sunGlow = pow(sunDot, 12.0) * 0.55;
          float sunDisc = pow(sunDot, 320.0) * 1.2;
          skyColor += uSunColor * (sunGlow + sunDisc);

          // Dithering noise to prevent banding
          float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) * 0.006;
          skyColor += dither;

          gl_FragColor = vec4(skyColor, 1.0);

          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `}),this.mesh=new K(this.geometry,this.material),this.scene.add(this.mesh)}update(e){this.elapsedTime+=e,this.material&&this.material.uniforms&&this.material.uniforms.uTime&&(this.material.uniforms.uTime.value=this.elapsedTime)}dispose(){this.mesh&&this.scene.remove(this.mesh),this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose(),this.mesh=null,this.geometry=null,this.material=null}}function En(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Rt;let c=0;for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=Sd(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const g=Sd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Sd(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new Ct(a,t,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function wd(r,e){if(e===cm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ac||e===Qd){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ac)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function vl(r,e){const t=Math.sqrt(r*r+e*e);if(t<3.2)return 0;const n=Math.min(1,(t-3.2)/2.5);let i=Math.sin(r*.32)*Math.cos(e*.32)*.32+Math.sin(r*.16+e*.2)*.18;return t>14&&(i-=(t-14)*.12),i*n}class tS{constructor(e){this.sceneManager=e,this.scene=this.sceneManager.scene,this.init()}init(){this.geometry=new $t(38,38,54,54),this.geometry.rotateX(-Math.PI*.5);const n=this.geometry.attributes.position;for(let o=0;o<n.count;o++){const l=n.getX(o),c=n.getZ(o);n.setY(o,vl(l,c))}this.geometry.computeVertexNormals(),this.grassTexture=this.createGrassTexture(),this.grassBumpTexture=this.createGrassBumpTexture(),this.material=new fe({map:this.grassTexture,bumpMap:this.grassBumpTexture,bumpScale:.035,roughness:.88,metalness:.02,flatShading:!1}),this.mesh=new K(this.geometry,this.material),this.mesh.receiveShadow=!0,this.scene.add(this.mesh),this.initGrassTufts();const i=new Ue(.36,.42,.09,8),s=[{x:1.35,z:1.25,r:.3},{x:1.95,z:.8,r:-.2},{x:2.65,z:1.45,r:.5},{x:2.15,z:2.05,r:-.3},{x:1.55,z:2.55,r:.4},{x:-1.15,z:1.45,r:-.4},{x:-1.75,z:.95,r:.2},{x:-2.35,z:1.55,r:.35},{x:0,z:2.85,r:.1}],a=[];s.forEach(o=>{const l=i.clone();l.rotateY(o.r);const c=vl(o.x,o.z);l.translate(o.x,c+.045,o.z),a.push(l)}),this.mergedStonesGeo=En(a),i.dispose(),a.forEach(o=>o.dispose()),this.stonesMaterial=new fe({color:7764356,roughness:.88,metalness:.08}),this.stonesMesh=new K(this.mergedStonesGeo,this.stonesMaterial),this.stonesMesh.receiveShadow=!0,this.stonesMesh.castShadow=!0,this.scene.add(this.stonesMesh)}createGrassTexture(){const e=document.createElement("canvas");e.width=1024,e.height=1024;const t=e.getContext("2d");t.fillStyle="#3a6628",t.fillRect(0,0,1024,1024);const n=["#4a7b33","#2d531d","#54873c","#335c23","#416f2d","#5c9343"];for(let s=0;s<480;s++){const a=Math.random()*1024,o=Math.random()*1024,l=25+Math.random()*80,c=t.createRadialGradient(a,o,0,a,o,l),h=n[Math.floor(Math.random()*n.length)];c.addColorStop(0,h),c.addColorStop(1,"rgba(58, 102, 40, 0)"),t.fillStyle=c,t.beginPath(),t.arc(a,o,l,0,Math.PI*2),t.fill()}t.lineWidth=1.4;for(let s=0;s<22e3;s++){const a=Math.random()*1024,o=Math.random()*1024,l=3+Math.random()*7,c=(Math.random()-.5)*.7-Math.PI*.5,h=Math.random()>.45;t.strokeStyle=h?"rgba(125, 188, 92, 0.28)":"rgba(28, 52, 18, 0.32)",t.beginPath(),t.moveTo(a,o),t.lineTo(a+Math.cos(c)*l,o+Math.sin(c)*l),t.stroke()}t.fillStyle="rgba(165, 220, 130, 0.35)";for(let s=0;s<600;s++){const a=Math.random()*1024,o=Math.random()*1024;t.beginPath(),t.arc(a,o,1.8,0,Math.PI*2),t.fill()}const i=new $n(e);return i.wrapS=Jn,i.wrapT=Jn,i.repeat.set(6,6),i.colorSpace=ft,i.generateMipmaps=!0,i.minFilter=Cn,i}createGrassBumpTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,512,512);const n=t.getImageData(0,0,512,512),i=n.data;for(let a=0;a<i.length;a+=4){const o=115+Math.floor(Math.random()*55);i[a]=o,i[a+1]=o,i[a+2]=o}t.putImageData(n,0,0);const s=new $n(e);return s.wrapS=Jn,s.wrapT=Jn,s.repeat.set(12,12),s}initGrassTufts(){const e=new $t(.16,.22);e.translate(0,.11,0);const t=e.clone();t.rotateY(Math.PI*.5);const n=En([e,t]);e.dispose(),t.dispose();const i=new fe({color:5540667,roughness:.72,metalness:.02,side:Et}),s=130;this.tuftsMesh=new go(n,i,s),this.tuftsMesh.receiveShadow=!0;const a=new pt;let o=0;[{cx:0,cz:1.55,count:25,spread:1.4},{cx:1.8,cz:1.2,count:25,spread:1.2},{cx:-2.2,cz:1.8,count:25,spread:1.2},{cx:0,cz:-.6,count:25,spread:1.6},{cx:1.5,cz:2.3,count:30,spread:1.8}].forEach(c=>{for(let h=0;h<c.count&&o<s;h++){const u=Math.random()*Math.PI*2,d=Math.random()*c.spread+.2,f=c.cx+Math.cos(u)*d,g=c.cz+Math.sin(u)*d,_=vl(f,g);a.position.set(f,_-.01,g),a.rotation.y=Math.random()*Math.PI;const m=.7+Math.random()*.55;a.scale.set(m,m*(.8+Math.random()*.4),m),a.updateMatrix(),this.tuftsMesh.setMatrixAt(o++,a.matrix)}}),this.tuftsMesh.instanceMatrix.needsUpdate=!0,this.scene.add(this.tuftsMesh)}update(e){}dispose(){this.mesh&&(this.scene.remove(this.mesh),this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose(),this.grassTexture&&this.grassTexture.dispose(),this.grassBumpTexture&&this.grassBumpTexture.dispose()),this.tuftsMesh&&(this.scene.remove(this.tuftsMesh),this.tuftsMesh.geometry&&this.tuftsMesh.geometry.dispose(),this.tuftsMesh.material&&this.tuftsMesh.material.dispose()),this.stonesMesh&&(this.scene.remove(this.stonesMesh),this.mergedStonesGeo&&this.mergedStonesGeo.dispose(),this.stonesMaterial&&this.stonesMaterial.dispose()),this.mesh=null,this.geometry=null,this.material=null,this.tuftsMesh=null,this.stonesMesh=null,this.mergedStonesGeo=null,this.stonesMaterial=null}}class nS extends mr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new oS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new MS(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Br.extractUrlBase(e);a=Br.resolveURL(c,this.path)}else a=Br.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Tf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Rp){try{a[Xe.KHR_BINARY_GLTF]=new bS(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new US(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:a[u]=new rS;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[u]=new SS(s,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[u]=new wS;break;case Xe.KHR_MESH_QUANTIZATION:a[u]=new TS;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function iS(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sS{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new me(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Qt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new uc(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fs(h),c.distance=u;break;case"spot":c=new d0(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),_i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class rS{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return Pn}extendParams(e,t,n){const i=[];e.color=new me(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Qt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ft))}return Promise.all(i)}}class aS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class oS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(o,o)}return Promise.all(s)}}class lS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class cS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class hS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new me(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Qt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ft)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class uS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class dS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new me().setRGB(o[0],o[1],o[2],Qt),Promise.all(s)}}class fS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class pS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new me().setRGB(o[0],o[1],o[2],Qt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,ft)),Promise.all(s)}}class mS{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class gS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class _S{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class vS{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class yS{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xS{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class MS{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==An.TRIANGLES&&c.mode!==An.TRIANGLE_STRIP&&c.mode!==An.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Ne,m=new P,p=new Ei,y=new P(1,1,1),x=new go(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(m,p,y));for(const v in l)if(v==="_COLOR_0"){const S=l[v];x.instanceColor=new Ui(S.array,S.itemSize,S.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);pt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Rp="glTF",Cr=12,Td={JSON:1313821514,BIN:5130562};class bS{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Cr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Cr,s=new DataView(e,Cr);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Td.JSON){const c=new Uint8Array(e,Cr+a,o);this.content=n.decode(c)}else if(l===Td.BIN){const c=Cr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class SS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Cc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Cc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=$s[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},o,c,Qt,d)})})}}class wS{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class TS{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class Pp extends ca{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,y=1-m,x=p-d+u;for(let v=0;v!==o;v++){const S=a[_+v+o],A=a[_+v+l]*h,T=a[g+v+o],C=a[g+v]*h;s[v]=y*S+x*A+m*T+p*C}return s}}const ES=new Ei;class AS extends Pp{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return ES.fromArray(s).normalize().toArray(s),s}}const An={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ed={9728:Jt,9729:mn,9984:Hd,9985:Wa,9986:Rr,9987:Cn},Ad={33071:Ni,33648:to,10497:Jn},yl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},CS={CUBICSPLINE:void 0,LINEAR:Yr,STEP:Xr},xl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function RS(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new fe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bi})),r.DefaultMaterial}function ss(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _i(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function PS(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function LS(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function IS(r){let e;const t=r.extensions&&r.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ml(t.attributes):e=r.indices+":"+Ml(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ml(r.targets[n]);return e}function Ml(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Rc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function DS(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const kS=new Ne;class US{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new eh(this.options.manager):this.textureLoader=new m0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ss(s,o,i),_i(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Br.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=yl[i.type],o=$s[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ct(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=yl[i.type],c=$s[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(y);x||(_=new c(o,p*f,i.count*f/h),x=new hg(_,f/h),t.cache.add(y,x)),m=new Wc(x,l,d%f/h,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),m=new Ct(_,l,g);if(i.sparse!==void 0){const p=yl.SCALAR,y=$s[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new y(a[1],x,i.sparse.count*p),A=new c(a[2],v,i.sparse.count*l);o!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=S.length;T<C;T++){const M=S[T];if(m.setX(M,A[T*l]),l>=2&&m.setY(M,A[T*l+1]),l>=3&&m.setZ(M,A[T*l+2]),l>=4&&m.setW(M,A[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Ed[d.magFilter]||mn,h.minFilter=Ed[d.minFilter]||Cn,h.wrapS=Ad[d.wrapS]||Jn,h.wrapT=Ad[d.wrapT]||Jn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Jt&&h.minFilter!==mn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Dt(_);m.needsUpdate=!0,d(m)}),t.load(Br.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),_i(u,a),u.userData.mimeType=a.mimeType||DS(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ur,ti.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ff,ti.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return fe}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const u=i[Xe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new me(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Qt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,ft)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Et);const h=s.alphaMode||xl.OPAQUE;if(h===xl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===xl.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Pn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new re(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Pn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Pn){const u=s.emissiveFactor;o.emissive=new me().setRGB(u[0],u[1],u[2],Qt)}return s.emissiveTexture!==void 0&&a!==Pn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,ft)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),_i(u,s),t.associations.set(u,{materials:e}),s.extensions&&ss(i,u,s),u})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Cd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=IS(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Cd(new Rt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?RS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const y=c[f];if(m.mode===An.TRIANGLES||m.mode===An.TRIANGLE_STRIP||m.mode===An.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new dg(_,y):new K(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===An.TRIANGLE_STRIP?p.geometry=wd(p.geometry,Qd):m.mode===An.TRIANGLE_FAN&&(p.geometry=wd(p.geometry,ac));else if(m.mode===An.LINES)p=new _g(_,y);else if(m.mode===An.LINE_STRIP)p=new qc(_,y);else if(m.mode===An.LINE_LOOP)p=new vg(_,y);else if(m.mode===An.POINTS)p=new Ka(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&LS(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),_i(p,s),m.extensions&&ss(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&ss(i,u[0],s),u[0];const d=new it;s.extensions&&ss(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(dn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_i(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Ne;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xc(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let y=0,x=d.length;y<x;y++){const v=d[y],S=f[y],A=g[y],T=_[y],C=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,S,A,T,C);if(M)for(let b=0;b<M.length;b++)p.push(M[b])}return new s0(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,kS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new uf:c.length>1?h=new it:c.length===1?h=c[0]:h=new pt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),_i(h,s),s.extensions&&ss(n,h,s),s.matrix!==void 0){const u=new Ne;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new it;n.name&&(s.name=i.createUniqueName(n.name)),_i(s,n),n.extensions&&ss(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof ti||d instanceof Dt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];Di[s.path]===Di.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Di[s.path]){case Di.weights:c=ir;break;case Di.rotation:c=sr;break;case Di.position:case Di.scale:c=rr;break;default:switch(n.itemSize){case 1:c=ir;break;case 2:case 3:default:c=rr;break}break}const h=i.interpolation!==void 0?CS[i.interpolation]:Yr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Di[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Rc(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof sr?AS:Pp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function NS(r,e,t){const n=e.attributes,i=new Xn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const h=Rc($s[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new P,l=new P;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Rc($s[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new ri;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Cd(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Cc[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Ye.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),_i(r,e),NS(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?PS(r,e.targets,t):r})}const OS="/assets/sakura_spring_picnic-CuozhxF5.glb";class FS extends en{constructor(e){super(),this.sceneManager=e,this.scene=this.sceneManager.scene,this.group=new it,this.group.name="SakuraTreeGLBGroup",this.scene.add(this.group),this.pivot=new it,this.pivot.name="SakuraTreePivot",this.group.add(this.pivot),this.model=null,this.isLoaded=!1,this.elapsedTime=0,this.currentBloom=1,this.treeNodes=[],this.foliageNodes=[],this.blossomMaterials=[],this.interactiveMeshes=[],this.barkMesh=null,this.lanternNode=null,this.glassDomeMesh=null,this.baseMoundMeshes=[],this.picnicPropMeshes=[],this.transform={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:.85},this.idleParams={enabled:!0,preset:"Gentle Spring",swaySpeed:1.2,swayAngle:.016,floatSpeed:.9,floatAmplitude:.025,foliageWindSpeed:2.2,foliageWindStrength:.012,lanternSwingSpeed:2,lanternSwingAngle:.05},this.loadSavedTweaks(),this.init()}loadSavedTweaks(){try{const e=localStorage.getItem("birthday_sakura_tweaks");if(e){const t=JSON.parse(e);t.transform&&Object.assign(this.transform,t.transform),t.idleParams&&Object.assign(this.idleParams,t.idleParams)}}catch(e){console.warn("[SakuraTree] Could not load saved tweaks:",e)}}saveTweaks(){try{localStorage.setItem("birthday_sakura_tweaks",JSON.stringify({transform:this.transform,idleParams:this.idleParams}))}catch(e){console.warn("[SakuraTree] Could not save tweaks:",e)}}resetTweaks(){localStorage.removeItem("birthday_sakura_tweaks"),this.transform={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:.85},this.idleParams={enabled:!0,preset:"Gentle Spring",swaySpeed:1.2,swayAngle:.016,floatSpeed:.9,floatAmplitude:.025,foliageWindSpeed:2.2,foliageWindStrength:.012,lanternSwingSpeed:2,lanternSwingAngle:.05},this.applyTransform()}async init(){var i,s;const e=((s=(i=this.sceneManager)==null?void 0:i.assetLoader)==null?void 0:s.manager)||new Qc,t=new nS(e),n=OS;try{console.log("[SakuraTree] Loading 3D Sakura Spring Picnic GLB from:",n);const a=await t.loadAsync(n,o=>{var l,c;if(o.total>0){const h=(o.loaded/1048576).toFixed(1),u=(o.total/(1024*1024)).toFixed(1),d=Math.round(o.loaded/o.total*100);(c=(l=this.sceneManager)==null?void 0:l.loadingScreen)!=null&&c.statusElement&&(this.sceneManager.loadingScreen.statusElement.textContent=`Memuat 3D Sakura Spring Picnic (${h} / ${u} MB)...`)}});this.model=a.scene,this.model.name="SakuraSpringPicnicGLB",this.processModel(this.model),this.centerAndGroundModel(),this.pivot.add(this.model),this.applyTransform(),this.isLoaded=!0,this.trigger("loaded",[this.model]),this.setupInteractivity(),console.log("[SakuraTree] 3D Sakura Spring Picnic GLB successfully mounted and ready!")}catch(a){console.error("[SakuraTree] Failed to load sakura_spring_picnic.glb:",a)}}processModel(e){const t=new Set;e.traverse(n=>{n.userData.baseRotX=n.rotation.x,n.userData.baseRotY=n.rotation.y,n.userData.baseRotZ=n.rotation.z,n.userData.basePosY=n.position.y;const i=(n.name||"").toLowerCase();if(i.includes("sphere.005")||i.includes("glass_0")||n.material&&(n.material.name==="glass"||n.material.name==="glass_background")){n.visible=!1,n.material&&(n.material.visible=!1,n.material.opacity=0,n.material.transparent=!0);return}(i.includes("sakura_tree")||i==="tree"||i.includes("tree_sakura")||i.includes("sakura03"))&&(this.treeNodes.includes(n)||this.treeNodes.push(n)),(i.includes("sakura_leaf")||i.includes("plane.001")||i.includes("plane.003")||i.includes("plane.004")||i.includes("plane.161"))&&(this.foliageNodes.includes(n)||this.foliageNodes.push(n)),(i.includes("cylinder.040")||i.includes("light_metal")||i.includes("light_glass"))&&(this.lanternNode||(this.lanternNode=n.parent&&n.parent!==e?n.parent:n,this.lanternNode.userData.baseRotZ=this.lanternNode.rotation.z)),(i.includes("sphere.002")||i.includes("sphere.003")||i.includes("sphere.004"))&&this.baseMoundMeshes.push(n),(i.includes("blanket")||i.includes("cution")||i.includes("chair")||i.includes("bread")||i.includes("wine")||i.includes("cup")||i.includes("cake")||i.includes("teapot")||i.includes("grapes")||i.includes("apple"))&&this.picnicPropMeshes.push(n),n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.userData.isSakuraTree=!0,this.picnicPropMeshes.includes(n)&&(n.userData.isPicnicItem=!0),!this.barkMesh&&(i.includes("sakura_tree")||i.includes("tree01"))&&(this.barkMesh=n,n.userData.isBark=!0),this.interactiveMeshes.push(n),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{const o=(a.name||"").toLowerCase();a.map&&(a.map.colorSpace=ft,a.map.needsUpdate=!0),a.emissiveMap&&(a.emissiveMap.colorSpace=ft,a.emissiveMap.needsUpdate=!0),(a.isMeshStandardMaterial||a.isMeshPhysicalMaterial)&&(a.roughness=Math.min(.9,Math.max(.18,a.roughness)),a.envMapIntensity=1.25),(o.includes("glass")||o.includes("water"))&&(a.transparent=!0,a.opacity=o.includes("water")?.78:.42,a.depthWrite=!1),(o.includes("sakura01")||o.includes("sakura_tree03")||i.includes("sakura"))&&(t.has(a)||(t.add(a),a.emissive||(a.emissive=new me(16742815)),a.emissive.set(16742815),a.emissiveIntensity=.12))}))}),this.blossomMaterials=Array.from(t),!this.barkMesh&&this.interactiveMeshes.length>0&&(this.barkMesh=this.interactiveMeshes[0])}centerAndGroundModel(){var o;if(!this.model)return;(o=this.glassDomeMesh)==null||o.visible,this.glassDomeMesh&&(this.glassDomeMesh.visible=!1);const e=new Xn().setFromObject(this.model),t=new P;e.getSize(t);const n=new P;e.getCenter(n);let i=null;this.model.traverse(l=>{!i&&l.name&&(l.name.includes("Sphere.002")||l.name.includes("stone_floor"))&&(i=l)});let s=e.min.y,a=n.clone();if(i){const l=new Xn().setFromObject(i);s=l.min.y,a=l.getCenter(new P)}this.model.position.x=-a.x,this.model.position.z=-a.z,this.model.position.y=-s+.02,this.glassDomeMesh&&(this.glassDomeMesh.visible=!1),console.log("[SakuraTree] Bounding dimensions:",{size:t.toArray(),groundLevelY:s,center:a.toArray()})}mountBirthdayCake(e){}applyTransform(){this.pivot&&(this.pivot.position.set(this.transform.x,this.transform.y,this.transform.z),this.pivot.rotation.set(this.transform.rotX,this.transform.rotY,this.transform.rotZ),this.pivot.scale.set(this.transform.scale,this.transform.scale,this.transform.scale))}setupInteractivity(){var n;if(!((n=this.sceneManager)!=null&&n.interaction))return;const e=this.sceneManager.interaction.clickableTargets||[],t=Array.from(new Set([...e,...this.interactiveMeshes]));this.sceneManager.interaction.setClickables(t),this.sceneManager.interaction.on("picnicClick",()=>{var i;(i=this.sceneManager)!=null&&i.sceneOverlay&&this.sceneManager.sceneOverlay.showToast("Piknik Musim Semi Sakura bersama Nur Syarifa Syuhada","")}),this.sceneManager.interaction.on("barkClick",()=>{var i;this.setBloomProgress(1.4,1.2),this.burstPetals(),(i=this.sceneManager)!=null&&i.sceneOverlay&&this.sceneManager.sceneOverlay.showToast("Pohon Sakura Musim Semi bersemi indah mekar penuh kelopak!","")})}setBloomProgress(e=1,t=2){if(this.currentBloom=e,console.log(`[SakuraTree] Blooming scale & glow triggered: uBloom -> ${e}`),this.blossomMaterials.length>0){const n=e>1?(e-1)*1.5+.25:.12,i=e>1?new me(16745899):new me(16735370);this.blossomMaterials.forEach(s=>{s.emissive&&(we.to(s,{emissiveIntensity:n,duration:t,ease:"power2.out"}),we.to(s.emissive,{r:i.r,g:i.g,b:i.b,duration:t,ease:"power2.out"}))})}if(this.pivot&&e>1){const n=this.transform.scale;we.to(this.pivot.scale,{x:n*1.025,y:n*1.025,z:n*1.025,duration:t*.4,yoyo:!0,repeat:1,ease:"power2.inOut"})}}burstPetals(){var e,t,n,i;(t=(e=this.sceneManager)==null?void 0:e.world)!=null&&t.petals&&((i=(n=this.sceneManager.world.petals).burst)==null||i.call(n))}update(e){if(!this.isLoaded||!this.pivot||(this.elapsedTime+=e,!this.idleParams.enabled))return;const t=Math.sin(this.elapsedTime*this.idleParams.floatSpeed)*this.idleParams.floatAmplitude;this.pivot.position.y=this.transform.y+t;const n=this.elapsedTime*this.idleParams.swaySpeed,i=Math.sin(n)*this.idleParams.swayAngle+Math.sin(n*1.7)*(this.idleParams.swayAngle*.25),s=Math.cos(n*.75)*(this.idleParams.swayAngle*.5);for(let l=0;l<this.treeNodes.length;l++){const c=this.treeNodes[l];c.rotation.z=(c.userData.baseRotZ||0)+i,c.rotation.x=(c.userData.baseRotX||0)+s}const a=this.elapsedTime*this.idleParams.foliageWindSpeed;for(let l=0;l<this.foliageNodes.length;l++){const c=this.foliageNodes[l],h=l*1.15;c.rotation.z=(c.userData.baseRotZ||0)+Math.sin(a+h)*this.idleParams.foliageWindStrength,c.rotation.x=(c.userData.baseRotX||0)+Math.cos(a*.85+h)*(this.idleParams.foliageWindStrength*.6)}if(this.lanternNode){const l=this.elapsedTime*this.idleParams.lanternSwingSpeed;this.lanternNode.rotation.z=(this.lanternNode.userData.baseRotZ||0)+Math.sin(l)*this.idleParams.lanternSwingAngle}const o=Math.sin(this.elapsedTime*2.2)*.035;for(let l=0;l<this.blossomMaterials.length;l++){const c=this.blossomMaterials[l];if(c.emissive){const h=this.currentBloom>1?(this.currentBloom-1)*.8+.25:.12;c.emissiveIntensity=dn.clamp(h+o,0,3)}}}dispose(){this.group&&this.group.parent&&this.group.parent.remove(this.group),this.model&&(this.model.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n.map&&n.map.dispose(),n.emissiveMap&&n.emissiveMap.dispose(),n.dispose()}))}),this.model=null),this.treeNodes=[],this.foliageNodes=[],this.blossomMaterials=[],this.interactiveMeshes=[],this.barkMesh=null,this.lanternNode=null,this.glassDomeMesh=null,this.baseMoundMeshes=[],this.picnicPropMeshes=[],super.dispose()}}class BS{constructor(e,t=2500){this.sceneManager=e,this.scene=this.sceneManager.scene,this.count=t,this.init()}init(){const e=new yf;e.moveTo(0,-.08),e.bezierCurveTo(.06,-.04,.08,.04,0,.1),e.bezierCurveTo(-.08,.04,-.06,-.04,0,-.08);const t=new Jc(e,6),n=t.attributes.position;for(let h=0;h<n.count;h++){const u=n.getX(h),d=n.getY(h),f=-(u*u*2.5+d*d*.8);n.setZ(h,f)}t.computeVertexNormals(),this.geometry=t;const i=new Float32Array(this.count*3),s=new Float32Array(this.count*3),a=new Float32Array(this.count),o=new Float32Array(this.count),l=new Float32Array(this.count*3),c=[new me(16746661),new me(16757447),new me(16767974),new me(16773365)];for(let h=0;h<this.count;h++){const u=h*3,d=1+Math.random()*11,f=Math.random()*Math.PI*2;i[u+0]=Math.cos(f)*d-2.2,i[u+1]=Math.random()*11.5,i[u+2]=Math.sin(f)*d-1.2,s[u+0]=.6+Math.random()*.8,s[u+1]=.8+Math.random()*.7,s[u+2]=.5+Math.random()*.8,a[h]=.75+Math.random()*.6,o[h]=Math.random()*Math.PI*2;const g=c[Math.floor(Math.random()*c.length)];l[u+0]=g.r,l[u+1]=g.g,l[u+2]=g.b}this.geometry.setAttribute("aOffset",new Ui(i,3)),this.geometry.setAttribute("aSpeed",new Ui(s,3)),this.geometry.setAttribute("aScale",new Ui(a,1)),this.geometry.setAttribute("aPhase",new Ui(o,1)),this.geometry.setAttribute("aColor",new Ui(l,3)),this.material=new Ot({side:Et,transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uWindDir:{value:new P(1,0,.4).normalize()},uWindStrength:{value:1.2}},vertexShader:`
        uniform float uTime;
        uniform vec3 uWindDir;
        uniform float uWindStrength;

        attribute vec3 aOffset;
        attribute vec3 aSpeed;
        attribute float aScale;
        attribute float aPhase;
        attribute vec3 aColor;

        varying vec2 vUv;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vUv = uv;
          vColor = aColor;

          // 1. Cyclic Fall Height: seamlessly wraps from spawn height (11.0m) to ground (-0.3m)
          float spawnHeight = 11.0;
          float floorHeight = -0.3;
          float heightRange = spawnHeight - floorHeight;
          float fallDistance = aSpeed.y * uTime * 0.85;
          float currentY = spawnHeight - mod((aOffset.y - floorHeight) + fallDistance, heightRange);

          // 2. Continuous Wind Drift & Gentle Natural Gusts (Zero Popping / Zero Shattering)
          // Relative fall progress from 0.0 (top) to 1.0 (ground)
          float fallProgress = (spawnHeight - currentY) / heightRange;

          float time = uTime * 1.35 + aPhase;
          // Decoupled periodic gusts that never grow unbounded with uTime
          float windGust = sin(uTime * 1.2 + aPhase) * 0.45 * uWindStrength;
          float lateralSway = cos(time * aSpeed.z + currentY * 0.4) * 0.75;

          // Natural downwind drift proportional to fall progress + bounded gusts
          float downwindTravel = fallProgress * (6.0 + aSpeed.x * 3.5) + windGust;

          vec3 windDir = normalize(uWindDir);
          vec3 sideDir = vec3(-windDir.z, 0.0, windDir.x);

          vec3 worldPos = aOffset + (windDir * downwindTravel) + (sideDir * lateralSway);
          worldPos.y = currentY;

          // 3. 3D Tumbling & Fluttering Rotation Matrix on GPU
          float roll = sin(time * 3.6 + aPhase) * 1.3;
          float pitch = cos(time * 2.9 + aPhase) * 1.5;
          float yaw = time * aSpeed.x * 2.2;

          mat3 rotZ = mat3(
            cos(roll), -sin(roll), 0.0,
            sin(roll),  cos(roll), 0.0,
            0.0,        0.0,       1.0
          );
          mat3 rotX = mat3(
            1.0, 0.0,         0.0,
            0.0, cos(pitch), -sin(pitch),
            0.0, sin(pitch),  cos(pitch)
          );
          mat3 rotY = mat3(
            cos(yaw), 0.0, sin(yaw),
            0.0,      1.0, 0.0,
           -sin(yaw), 0.0, cos(yaw)
          );

          vec3 localPos = rotY * rotX * rotZ * (position * aScale);

          // 4. Soft Alpha Fade at extreme altitudes (completely hides vertical wrapping)
          float fadeIn = smoothstep(spawnHeight, spawnHeight - 1.0, currentY);
          float fadeOut = smoothstep(floorHeight, floorHeight + 0.6, currentY);
          vAlpha = fadeIn * fadeOut;

          gl_Position = projectionMatrix * viewMatrix * vec4(worldPos + localPos, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          // Delicate petal radial gradient: darker at base, soft translucent pastel at tip
          float grad = smoothstep(-0.08, 0.1, vUv.y);
          vec3 petalColor = mix(vColor * 0.92, vColor * 1.08, grad);

          // Soft translucent alpha
          float alpha = vAlpha * 0.92;

          gl_FragColor = vec4(petalColor, alpha);

          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `}),this.mesh=new go(this.geometry,this.material,this.count),this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(io),this.scene.add(this.mesh)}update(e,t){this.material&&this.material.uniforms&&(this.material.uniforms.uTime.value=t)}dispose(){this.mesh&&this.scene.remove(this.mesh),this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose(),this.mesh=null,this.geometry=null,this.material=null}}class zS extends en{constructor(e){super(),this.sceneManager=e,this.scene=this.sceneManager.scene,this.renderer=this.sceneManager.renderer,this.group=new it,this.group.name="PolaroidGallery",this.polaroids=[],this.interactiveMeshes=[],this.loadedTextures=new Map,this.hoveredPolaroid=null,this.activePolaroid=null,this.textureLoader=new eh,this.frameGeometry=new He(.58,.74,.012),this.photoGeometry=new $t(.5,.5),this.pegGeometry=new He(.038,.12,.028),this.stringGeometry=new Ue(.003,.003,1.2,6),this.frameMaterial=new fe({color:16644854,roughness:.85,metalness:.05,emissive:0,emissiveIntensity:.6}),this.pegMaterial=new fe({color:11895900,roughness:.7,metalness:.1}),this.stringMaterial=new fe({color:14666671,roughness:.9,metalness:.2}),this.barkMaterial=new fe({color:4007194,roughness:.85,metalness:.05}),this.leafMaterial=new fe({color:4750650,roughness:.75,side:Et}),this.blossomMaterial=new fe({color:16756162,roughness:.6}),this.init()}async init(){let e=[];try{const t=await fetch("/memories.json");t.ok&&(e=await t.json())}catch(t){console.warn("[PolaroidManager] Failed to fetch /memories.json, using fallback data.",t)}(!e||e.length===0)&&(e=this.getFallbackMemories()),this.memories=e,this.buildPolaroids(),this.trigger("loaded",[this.memories])}getFallbackMemories(){return[{id:"syarifa-potret",title:"Nur Syarifa Syuhada",date:"Spesial",location:"Momen Ulang Tahun",tag:"Birthday",caption:"Potret manis Nur Syarifa Syuhada di hari ulang tahunnya.",fullStory:"Selamat bertambah usia untuk Nur Syarifa Syuhada. Semoga di usia yang baru ini senantiasa diberi kesehatan, kebahagiaan, kemudahan dalam setiap urusan, dan tercapai semua harapan baik yang diinginkan.",position:[-1.55,1.95,1.65],rotation:[.05,.32,-.03],image:"/photos/photo-5.jpg"},{id:"syarifa-selfie",title:"Senyum Syarifa",date:"Momen Favorit",location:"Sudut Santai",tag:"Foto Favorit",caption:"Salah satu foto favorit yang selalu membawa suasana adem.",fullStory:"Foto simpel tapi selalu punya tempat tersendiri. Terima kasih sudah selalu jadi sosok yang menyenangkan dan membawa energi positif di setiap hariku.",position:[-.95,2.45,1.05],rotation:[.04,.18,-.02],image:"/photos/photo-6.jpg"},{id:"syarifa-4grid",title:"4 Frame Syarifa",date:"Koleksi Momen",location:"Galeri Kenangan",tag:"Aesthetic",caption:"Empat ekspresi lucu yang tertangkap kamera.",fullStory:"Setiap ekspresi punya keunikannya sendiri. Momen-momen santai seperti ini yang bikin memori kita selalu seru dan berkesan.",position:[-2.25,2.1,1.25],rotation:[.04,.45,-.03],image:"/photos/photo-7.jpg"},{id:"roblox-jembatan",title:"Duduk Santai di Jembatan",date:"Roblox Moment",location:"Puncak Salju Roblox",tag:"Gaming",caption:"Nongkrong berdua di pagar jembatan berlatar gunung salju.",fullStory:"Momen waktu kita asyik main game bareng, nyari spot estetik di jembatan lalu duduk santai berdua sambil ngobrol santai sampai lupa waktu.",position:[1.55,1.95,1.55],rotation:[-.05,-.32,.03],image:"/photos/photo-3.jpg"},{id:"roblox-rumput",title:"Rebahan di Rumput",date:"Roblox Moment",location:"Padang Rumput Roblox",tag:"Kembaran Creeper",caption:"Rebahan di rumput hijau pakai baju Creeper kembaran.",fullStory:"Keseruan waktu kita sengaja pakai baju hijau Creeper yang sama persis dan pose rebahan di tengah rumput sambil bawa boneka kecil.",position:[.95,2.45,.95],rotation:[-.04,-.18,.02],image:"/photos/photo-4.jpg"},{id:"roblox-bukit",title:"Pemandangan Bukit Hijau",date:"Roblox Adventure",location:"Tebing Padang Hijau",tag:"Adventure",caption:"Duduk di atas batu tebing melihat bukit dan barisan pohon pinus.",fullStory:"Eksplorasi map berdua sampai nemu tebing batu tinggi dengan view pegunungan yang luas dan adem. Selalu seru setiap kali keliling map bareng kamu.",position:[2.25,2.1,1.15],rotation:[-.04,-.45,.03],image:"/photos/photo-8.jpg"},{id:"roblox-kupu",title:"Kupu-kupu Merah Muda",date:"Momen Tenang",location:"Ruang Santai",tag:"Chill Time",caption:"Istirahat berdua ditemani kupu-kupu merah muda yang beterbangan.",fullStory:"Momen santai waktu rebahan di lantai kayu dengan suasana yang tenang dan kupu-kupu pink di sekitar kita.",position:[0,2.95,.5],rotation:[.06,0,0],image:"/photos/photo-9.jpg"},{id:"roblox-batik",title:"Lentera & Celana Batik",date:"Momen Lucu",location:"Rumah Kayu",tag:"Outfit Unik",caption:"Eksplorasi ruangan kayu dengan lentera dan outfit batik khas.",fullStory:"Outfit paling unik waktu main bareng, bawa lentera antik dan celana motif batik yang bikin suasana game jadi makin ikonik dan seru.",position:[-1.75,2.35,-.35],rotation:[.02,.55,.02],image:"/photos/photo-1.jpg"},{id:"roblox-luna",title:"Koleksi Hewan Lucu",date:"Mini Game",location:"Arena Hewan",tag:"Fun Time",caption:"Pose bareng laba-laba kecil yang gemes @Luna0evelyn.",fullStory:"Tangkapan layar waktu main mini game bareng Luna, ngumpulin hewan kecil sampai lengkap dan pose bareng di akhir ronde permainan.",position:[1.75,2.35,-.3],rotation:[-.02,-.55,-.02],image:"/photos/photo-2.jpg"}]}loadCroppedPhotoTexture(e,t,n){if(!e)return;const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{const s=document.createElement("canvas");s.width=512,s.height=512;const a=s.getContext("2d"),o=i.width/i.height;let l,c,h,u;o>1?(c=i.height,l=i.height,h=(i.width-l)/2,u=0):(l=i.width,c=i.width,h=0,u=(i.height-c)/2),a.drawImage(i,h,u,l,c,0,0,512,512);const d=a.createRadialGradient(256,256,190,256,256,360);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(0,0,0,0.16)"),a.fillStyle=d,a.fillRect(0,0,512,512);const f=new $n(s);f.colorSpace=ft,f.generateMipmaps=!0,f.minFilter=Cn,t.map=f,t.needsUpdate=!0,n&&(n.userData.textureLoaded=!0)},i.src=e}buildPolaroids(){const e=[new P(-.65,2.15,.6),new P(-.45,2.25,.4),new P(-.95,2.1,.35),new P(.65,2.15,.6),new P(.45,2.25,.4),new P(.95,2.1,.35),new P(0,2.3,.55),new P(-.8,2.2,-.2),new P(.8,2.2,-.2)];this.memories.forEach((t,n)=>{const i=e[n%e.length],[s,a,o]=t.position,[l,c,h]=t.rotation,u=new it;u.name=`PolaroidRig_${t.id}`,u.position.copy(i);const d=new it,f=new Ue(.016,.01,.22,6);f.rotateZ(.65),f.translate(.1,.06,.03);const g=new K(f,this.barkMaterial);d.add(g);const _=new $t(.065,.12);_.rotateZ(.4);const m=new K(_,this.leafMaterial);m.position.set(.18,.12,.05),m.rotation.y=.5,d.add(m);const p=new K(_,this.leafMaterial);p.position.set(.13,.1,-.04),p.rotation.y=-.6,d.add(p);const y=new Jr(.045,1),x=new K(y,this.blossomMaterial);x.position.set(-.06,.06,.04),d.add(x);const v=new Xs(.065,.012,8,20);v.rotateX(Math.PI/2);const S=new K(v,this.stringMaterial);S.castShadow=!0,d.add(S);const A=new K(new Gn(.018,8,8),this.stringMaterial);A.position.set(0,-.05,0),A.castShadow=!0,d.add(A);const T=new K(new Ue(.003,.002,.07,6),this.stringMaterial);T.position.set(.014,-.075,.012),T.rotation.z=-.28,d.add(T);const C=new K(new Ue(.003,.002,.055,6),this.stringMaterial);C.position.set(-.012,-.07,-.01),C.rotation.z=.32,d.add(C),u.add(d);const M=new it,b=.43,L=.46+n%3*.05,O=new Ue(.0032,.0032,L,8);O.translate(0,-L*.5,0);const U=new K(O,this.stringMaterial);U.castShadow=!0,M.add(U);const F=new it;F.name=`Polaroid_${t.id}`,F.position.set(0,-L-b,0),F.rotation.set(l,c,h);const G=new K(this.frameGeometry,this.frameMaterial.clone());G.castShadow=!0,G.receiveShadow=!0,F.add(G);const H=this.createArtisticPlaceholder(t,n),X=new fe({map:H,roughness:.35,metalness:.02}),z=new K(this.photoGeometry,X);z.position.set(0,.07,.008),F.add(z),t.image&&t.image.trim()!==""&&this.loadCroppedPhotoTexture(t.image,X,F);const ie=new K(this.pegGeometry,this.pegMaterial);ie.position.set(0,.37,.012),ie.castShadow=!0,F.add(ie),M.add(F),u.add(M),F.userData={memory:t,index:n,baseRotX:l,baseRotY:c,baseRotZ:h,frameMesh:G,photoMesh:z,pendulumArm:M,rigGroup:u,isPolaroid:!0,textureLoaded:!1},G.userData={polaroidGroup:F,memory:t,index:n},z.userData={polaroidGroup:F,memory:t,index:n},this.group.add(u),this.polaroids.push(F),this.interactiveMeshes.push(G,z)}),console.log(`[PolaroidManager] ${this.polaroids.length} 3D Polaroids instantiated with tree-anchored pendulums.`)}createArtisticPlaceholder(e,t){const n=document.createElement("canvas");n.width=512,n.height=512;const i=n.getContext("2d"),s=[["#ffe6ec","#ffb6c1","#f6869e"],["#fff4e6","#ffe0b2","#ffa726"],["#e8f4fd","#b3e5fc","#81d4fa"],["#f3e5f5","#e1bee7","#ce93d8"]],[a,o,l]=s[t%s.length],c=i.createLinearGradient(0,0,0,512);c.addColorStop(0,a),c.addColorStop(.5,o),c.addColorStop(1,l),i.fillStyle=c,i.fillRect(0,0,512,512),i.strokeStyle="rgba(255, 255, 255, 0.4)",i.lineWidth=14,i.strokeRect(16,16,480,480),i.fillStyle="rgba(255, 255, 255, 0.35)";for(let u=0;u<18;u++){const d=(Math.sin(u*47)*.5+.5)*480+16,f=(Math.cos(u*83)*.5+.5)*480+16,g=8+u%6*5;i.beginPath(),i.arc(d,f,g,0,Math.PI*2),i.fill()}i.font='bold 84px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',i.fillStyle="#422d6e",i.textAlign="center",i.textBaseline="middle",i.fillText(String(t+1).padStart(2,"0"),256,190),i.font='bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',i.fillStyle="#422d6e",i.fillText(e.title,256,305),i.font='600 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',i.fillStyle="#ff2a70",i.fillText(`${e.date} • ${e.tag}`,256,350),i.font='italic 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',i.fillStyle="rgba(66, 45, 110, 0.75)",i.fillText("Tap untuk membaca kenangan",256,420);const h=new $n(n);return h.colorSpace=ft,h.generateMipmaps=!0,h.minFilter=Cn,h}async lazyLoadPhoto(e){if(!e||e.userData.textureLoaded)return;const t=e.userData.memory;if(!t.image||t.image.trim()==="")return;const n=e.userData.photoMesh;n&&n.material&&this.loadCroppedPhotoTexture(t.image,n.material,e)}setHovered(e,t){if(!(this.hoveredPolaroid===e&&t))if(this.hoveredPolaroid&&this.hoveredPolaroid!==e&&this._unhover(this.hoveredPolaroid),t&&e){this.hoveredPolaroid=e;const n=e.userData.frameMesh;n&&n.material&&(n.material.emissive.set(16741792),n.material.emissiveIntensity=.45),we.to(e.scale,{x:1.08,y:1.08,z:1.08,duration:.35,ease:"power2.out"})}else!t&&e&&(this._unhover(e),this.hoveredPolaroid===e&&(this.hoveredPolaroid=null))}_unhover(e){const t=e.userData.frameMesh;t&&t.material&&(t.material.emissive.set(0),t.material.emissiveIntensity=0),we.to(e.scale,{x:1,y:1,z:1,duration:.35,ease:"power2.out"})}setActive(e){this.activePolaroid=e,e&&this.lazyLoadPhoto(e)}update(e,t){for(let n=0;n<this.polaroids.length;n++){const i=this.polaroids[n],s=i.userData;if(!s||!s.pendulumArm)continue;const a=Math.sin(t*1.3+n*1.4)*.032,o=Math.cos(t*1.05+n*1.2)*.025;s.pendulumArm.rotation.z=a,s.pendulumArm.rotation.x=o,i.rotation.y=s.baseRotY+Math.sin(t*.85+n*1.1)*.038}}dispose(){this.polaroids.forEach(e=>{we.killTweensOf(e.scale),e.traverse(t=>{t.isMesh&&t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())})}),this.loadedTextures.forEach(e=>e.dispose()),this.loadedTextures.clear(),this.frameGeometry&&this.frameGeometry.dispose(),this.photoGeometry&&this.photoGeometry.dispose(),this.pegGeometry&&this.pegGeometry.dispose(),this.stringGeometry&&this.stringGeometry.dispose(),this.frameMaterial&&this.frameMaterial.dispose(),this.pegMaterial&&this.pegMaterial.dispose(),this.stringMaterial&&this.stringMaterial.dispose(),this.group&&this.group.parent&&this.group.parent.remove(this.group),this.group=null,this.polaroids=[],this.interactiveMeshes=[],super.dispose()}}class GS{constructor(e){this.sceneManager=e,this.scene=this.sceneManager.scene,this.group=new it,this.group.name="JapaneseGarden",this.interactiveObjects=[],this.candleLit=!0,this.butterflies=[],this.init()}init(){this.buildMountFuji(),this.buildNodateParasol(),this.buildBirthdayCake(),this.buildBranchEmaPlaque(),this.buildStoneLantern(),this.buildFūrinWindChime(),this.buildIrisFlowerBeds(),this.buildFallenPetalsPatch(),this.buildKomorebiLightMotes(),this.buildAnimatedButterflies(),this.buildSparkleSystem(),this.buildCeremonialBirthdaySign(),this.scene.add(this.group)}buildMountFuji(){const e=new it;e.position.set(-14,2.5,-46),e.rotation.y=.35;const t=24,n=15,i=40,s=16,a=new qn(t,n,i,s,!0),o=a.attributes.position;for(let h=0;h<o.count;h++){const d=(o.getY(h)+n/2)/n,f=Math.pow(1-d,1.45),g=Math.atan2(o.getZ(h),o.getX(h)),_=t*f;o.setX(h,Math.cos(g)*_),o.setZ(h,Math.sin(g)*_),d>.94&&o.setY(h,n/2-.25)}a.computeVertexNormals();const l=new Ot({side:Et,depthWrite:!0,uniforms:{uSnowColor:{value:new me(16777215)},uBaseColor:{value:new me(4085117)},uMistColor:{value:new me(11066360)}},vertexShader:`
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,fragmentShader:`
        uniform vec3 uSnowColor;
        uniform vec3 uBaseColor;
        uniform vec3 uMistColor;
        varying vec3 vWorldPos;
        varying vec3 vNormal;

        void main() {
          float elevation = vWorldPos.y;
          float snowThreshold = 10.5 + sin(vWorldPos.x * 0.45) * 0.6;
          float snowT = smoothstep(snowThreshold - 1.2, snowThreshold + 0.8, elevation);

          vec3 mountainCol = mix(uBaseColor, uSnowColor, snowT);
          float mistT = smoothstep(6.0, -1.0, elevation);
          vec3 finalColor = mix(mountainCol, uMistColor, mistT * 0.65);

          vec3 lightDir = normalize(vec3(0.5, 0.8, 0.3));
          float diff = max(dot(vNormal, lightDir), 0.25);
          finalColor *= (0.75 + diff * 0.35);

          gl_FragColor = vec4(finalColor, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `}),c=new K(a,l);e.add(c),this.group.add(e)}buildTraditionalBench(){this.benchGroup=new it,this.benchGroup.position.set(2.1,0,1.1),this.benchGroup.rotation.y=-.38;const e=[],t=[];this.woodMaterial=new fe({color:4861208,roughness:.8,metalness:.05}),this.redClothMaterial=new fe({color:12198964,roughness:.9,metalness:.05}),this.goldHemMaterial=new fe({color:14660666,roughness:.4,metalness:.6});const n=new He(1.65,.08,.68);n.translate(0,.42,0),e.push(n);const i=new He(.09,.42,.09);[[-.72,.21,-.25],[.72,.21,-.25],[-.72,.21,.25],[.72,.21,.25]].forEach(([v,S,A])=>{const T=i.clone();T.translate(v,S,A),e.push(T)});const a=new He(1.48,.05,.05);a.translate(0,.16,-.25),e.push(a);const o=new He(1.48,.05,.05);o.translate(0,.16,.25),e.push(o);const l=new He(1.68,.035,.72);l.translate(0,.47,0),t.push(l);const c=new He(1.68,.16,.02);c.translate(0,.39,.36),t.push(c);const h=new He(1.68,.16,.02);h.translate(0,.39,-.36),t.push(h);const u=En(e);e.forEach(v=>v.dispose());const d=new K(u,this.woodMaterial);d.castShadow=!0,d.receiveShadow=!0,this.benchGroup.add(d);const f=En(t);t.forEach(v=>v.dispose());const g=new K(f,this.redClothMaterial);g.castShadow=!0,g.receiveShadow=!0,g.userData={isBench:!0},this.benchGroup.add(g),this.interactiveObjects.push(g);const _=new K(new He(1.69,.015,.025),this.goldHemMaterial);_.position.set(0,.31,.365),this.benchGroup.add(_);const m=new K(new He(1.69,.015,.025),this.goldHemMaterial);m.position.set(0,.31,-.365),this.benchGroup.add(m);const p=new He(.44,.06,.38);p.translate(-.48,.51,0);const y=new fe({color:16773363,roughness:.8}),x=new K(p,y);x.castShadow=!0,this.benchGroup.add(x),this.group.add(this.benchGroup)}buildRomanticParkBench(){this.parkBenchGroup=new it,this.parkBenchGroup.position.set(-2.1,0,1.1),this.parkBenchGroup.rotation.y=.35;const e=[],t=[],n=new fe({color:7224347,roughness:.72,metalness:.05}),i=new fe({color:2038037,roughness:.6,metalness:.4});for(let y=0;y<4;y++){const x=-.18+y*.11,v=new He(1.45,.035,.09);v.translate(0,.42+(y===0?.015:0),x),e.push(v)}for(let y=0;y<4;y++){const x=.52+y*.1,v=-.22-y*.025,S=new He(1.45,.08,.025);S.translate(0,x,v),e.push(S)}[-.68,.68].forEach(y=>{const x=new Ue(.035,.04,.42,8);x.translate(y,.21,.16),t.push(x);const v=new Ue(.035,.04,.85,8);v.rotateX(-.15),v.translate(y,.44,-.22),t.push(v);const S=new He(.05,.04,.42);S.translate(y,.56,-.02),t.push(S)});const a=En(e);e.forEach(y=>y.dispose());const o=new K(a,n);o.castShadow=!0,o.receiveShadow=!0,o.userData={isBench:!0},this.parkBenchGroup.add(o),this.interactiveObjects.push(o);const l=En(t);t.forEach(y=>y.dispose());const c=new K(l,i);c.castShadow=!0,c.receiveShadow=!0,this.parkBenchGroup.add(c);const h=new He(.42,.06,.36),u=new fe({color:16741792,roughness:.85}),d=new K(h,u);d.position.set(.28,.45,-.02),d.castShadow=!0,this.parkBenchGroup.add(d);const f=new fe({color:16773856,roughness:.85}),g=new K(h,f);g.position.set(-.28,.45,-.02),g.castShadow=!0,this.parkBenchGroup.add(g);const _=new Gn(.08,8,8),m=new fe({color:16756162,roughness:.7}),p=new K(_,m);p.scale.set(1.4,.6,1),p.position.set(0,.46,-.02),this.parkBenchGroup.add(p),this.group.add(this.parkBenchGroup)}buildCenterTreeBench(){this.centerBenchGroup=new it,this.centerBenchGroup.position.set(0,0,1.55),this.centerBenchGroup.rotation.y=0;const e=[],t=[],n=new fe({color:7749149,roughness:.62,metalness:.06}),i=new fe({color:1776670,roughness:.45,metalness:.65});[{y:.405,z:-.15},{y:.416,z:-.06},{y:.422,z:.03},{y:.418,z:.12},{y:.405,z:.21}].forEach(Y=>{const Q=new He(1.52,.032,.078);Q.translate(0,Y.y,Y.z),e.push(Q)}),[{y:.49,z:-.18,h:.065,t:.024},{y:.58,z:-.21,h:.065,t:.024},{y:.67,z:-.24,h:.065,t:.024},{y:.76,z:-.27,h:.065,t:.024},{y:.85,z:-.3,h:.08,t:.032}].forEach(Y=>{const Q=new He(1.52,Y.h,Y.t);Q.rotateX(-.16),Q.translate(0,Y.y,Y.z),e.push(Q)}),[-.68,0,.68].forEach((Y,Q)=>{const te=new Ue(.032,.038,.42,8);te.rotateX(.08),te.translate(Y,.21,.18),t.push(te);const pe=new Ue(.05,.055,.02,10);pe.translate(Y,.01,.2),t.push(pe);const De=new Ue(.032,.038,.43,8);De.rotateX(-.16),De.translate(Y,.21,-.16),t.push(De);const Ee=new Ue(.05,.055,.02,10);Ee.translate(Y,.01,-.19),t.push(Ee);const mt=new Ue(.03,.034,.52,8);mt.rotateX(-.16),mt.translate(Y,.65,-.24),t.push(mt);const ut=new He(.045,.04,.44);if(ut.translate(Y,.38,.03),t.push(ut),Q!==1){const We=new He(.05,.035,.42);We.translate(Y,.55,.02),t.push(We);const I=new Ue(.025,.028,.16,8);I.translate(Y,.46,.19),t.push(I)}});const l=new Ue(.022,.022,1.42,8);l.rotateZ(Math.PI/2),l.translate(0,.14,.17),t.push(l);const c=new Ue(.022,.022,1.42,8);c.rotateZ(Math.PI/2),c.translate(0,.14,-.16),t.push(c);const h=En(e);e.forEach(Y=>Y.dispose());const u=new K(h,n);u.castShadow=!0,u.receiveShadow=!0,u.userData={isCenterBench:!0,isBench:!0,name:"Bangku Kenangan Nur Syarifa Syuhada & Dill"},this.interactiveObjects.push(u),this.centerBenchGroup.add(u);const d=En(t);t.forEach(Y=>Y.dispose());const f=new K(d,i);f.castShadow=!0,f.receiveShadow=!0,this.centerBenchGroup.add(f);const g=document.createElement("canvas");g.width=512,g.height=256;const _=g.getContext("2d"),m=_.createLinearGradient(0,0,512,256);m.addColorStop(0,"#ffe082"),m.addColorStop(.3,"#d4af37"),m.addColorStop(.5,"#fff4cc"),m.addColorStop(.7,"#c59b27"),m.addColorStop(1,"#ffd54f"),_.fillStyle=m,_.fillRect(0,0,512,256),_.strokeStyle="#6d4c13",_.lineWidth=8,_.strokeRect(12,12,488,232),_.strokeStyle="#bfa15f",_.lineWidth=3,_.strokeRect(22,22,468,212),_.fillStyle="#ff6f91",[[32,32],[480,32],[32,224],[480,224]].forEach(([Y,Q])=>{_.beginPath(),_.arc(Y,Q,7,0,Math.PI*2),_.fill()}),_.textAlign="center",_.textBaseline="middle",_.font='600 24px "Noto Serif JP", serif',_.fillStyle="#4a2c11",_.fillText("〜 桜の木の下で 〜",256,56),_.font='bold 36px "Cinzel", "Playfair Display", serif',_.fillStyle="#8b1e3f",_.fillText("Nur Syarifa Syuhada & Dill",256,114),_.font='600 23px "Playfair Display", Georgia, serif',_.fillStyle="#5d3814",_.fillText("Selamat Ulang Tahun • Happy Birthday",256,172),_.font='500 18px "Noto Serif JP", serif',_.fillStyle="#7a4e23",_.fillText("祝・お誕生日おめでとう",256,212);const p=new $n(g),y=new fe({map:p,metalness:.8,roughness:.25}),x=new K(new He(.52,.24,.015),y);x.rotateX(-.16),x.position.set(0,.7,-.248),x.userData={isCenterBench:!0,isBench:!0,name:"Plakat Cinta Nur Syarifa Syuhada"},this.interactiveObjects.push(x),this.centerBenchGroup.add(x);const v=new fe({color:16766720,metalness:.9,roughness:.2}),S=new Ue(.008,.008,.02,8);S.rotateX(Math.PI/2),[[-.23,.09],[.23,.09],[-.23,-.09],[.23,-.09]].forEach(([Y,Q])=>{const te=new K(S,v);te.position.set(Y,Q,.008),x.add(te)});const A=new He(.42,.075,.38),T=new fe({color:16747937,roughness:.75,metalness:.05}),C=new K(A,T);C.position.set(-.38,.445,.03),C.castShadow=!0,C.userData={isCenterBench:!0,isBench:!0},this.interactiveObjects.push(C),this.centerBenchGroup.add(C);const M=new fe({color:16733046,roughness:.4}),b=new K(new Ue(.025,.025,.08,10),M);b.position.set(-.38,.448,.03),this.centerBenchGroup.add(b);const L=new fe({color:16774892,roughness:.75,metalness:.05}),O=new K(A,L);O.position.set(.38,.445,.03),O.castShadow=!0,O.userData={isCenterBench:!0,isBench:!0},this.interactiveObjects.push(O),this.centerBenchGroup.add(O);const U=this.goldHemMaterial||new fe({color:14660666,roughness:.4,metalness:.6}),F=new K(new Ue(.025,.025,.08,10),U);F.position.set(.38,.448,.03),this.centerBenchGroup.add(F);const G=new it;G.position.set(0,.455,.04),G.rotation.z=-.08;const H=new fe({color:12887170,roughness:.85}),X=new K(new qn(.08,.22,10,1,!0),H);X.rotation.x=Math.PI/2.3,X.position.set(0,.02,-.04),G.add(X);const z=new fe({color:16739211,roughness:.6}),ie=new K(new Xs(.035,.012,8,12),z);ie.rotation.y=Math.PI/2,ie.position.set(0,.03,.05),G.add(ie);const ae=[16747937,16777215,16758725,16740241,16769202];ae.forEach((Y,Q)=>{const te=new fe({color:Y,roughness:.5}),pe=new K(new Zc(.035,1),te),De=Q/ae.length*Math.PI*2,Ee=.042;pe.position.set(Math.cos(De)*Ee,.04+Q%2*.015,.08+Math.sin(De)*Ee),pe.scale.set(1,.7,1),G.add(pe)});const ve=new fe({color:4881497,roughness:.7});for(let Y=0;Y<4;Y++){const Q=new K(new qn(.025,.07,4),ve),te=Y/4*Math.PI*2+.3;Q.position.set(Math.cos(te)*.07,.03,.08+Math.sin(te)*.07),Q.rotation.set(.4,te,.4),G.add(Q)}this.centerBenchGroup.add(G);const Re=new Jr(.026,1);Re.scale(1.2,.2,.8);const Ve=new fe({color:16756162,roughness:.6});for(let Y=0;Y<9;Y++){const Q=new K(Re,Ve);Q.position.set((Math.random()-.5)*1.35,.428,-.08+Math.random()*.28),Q.rotation.set((Math.random()-.5)*.2,Math.random()*Math.PI,(Math.random()-.5)*.2),this.centerBenchGroup.add(Q)}const q=new Fs(16760453,.4,2.2);q.position.set(0,.2,0),this.centerBenchGroup.add(q),this.group.add(this.centerBenchGroup)}buildNodateParasol(){this.parasolGroup=new it,this.parasolGroup.position.set(3.55,0,.65),this.parasolGroup.rotation.z=.05,this.parasolGroup.rotation.y=.4;const e=new Ue(.038,.045,2.7,10);e.translate(0,1.35,0);const t=new fe({color:4007702,roughness:.7}),n=new K(e,t);n.castShadow=!0,this.parasolGroup.add(n);const i=new Ue(.22,.26,.16,8);i.translate(0,.08,0);const s=new fe({color:3026739,roughness:.9}),a=new K(i,s);a.castShadow=!0,this.parasolGroup.add(a);const o=new qn(1.25,.45,24,1,!0);o.translate(0,2.65,0);const l=new fe({color:12198451,roughness:.75,metalness:.05,side:Et}),c=new K(o,l);c.castShadow=!0,c.receiveShadow=!0,this.parasolGroup.add(c);const h=new Ue(.06,.1,.12,12);h.translate(0,2.9,0);const u=new fe({color:1118481,roughness:.4}),d=new K(h,u);this.parasolGroup.add(d),this.group.add(this.parasolGroup)}buildTeaTableAndPicnic(){this.tableGroup=new it,this.tableGroup.position.set(2.15,0,1.8),this.tableGroup.rotation.y=.25;const e=new Ue(.42,.44,.05,20);e.translate(0,.32,0);const t=new K(e,this.woodMaterial);t.castShadow=!0,t.receiveShadow=!0,this.tableGroup.add(t);const n=new Ue(.028,.035,.3,8);for(let v=0;v<3;v++){const S=v/3*Math.PI*2,A=new K(n,this.woodMaterial);A.position.set(Math.cos(S)*.32,.15,Math.sin(S)*.32),A.castShadow=!0,this.tableGroup.add(A)}const i=new fe({color:2964020,roughness:.4,metalness:.1}),s=new K(new Gn(.08,12,12),i);s.position.set(-.14,.42,-.08),s.castShadow=!0,this.tableGroup.add(s);const a=new K(new qn(.025,.08,8),i);a.rotation.z=-Math.PI/3,a.position.set(-.06,.43,-.08),this.tableGroup.add(a);const o=new fe({color:16118766,roughness:.3}),l=new fe({color:5930294,roughness:.2});[[-.14,.37,.1],[-.02,.37,.14]].forEach(([v,S,A])=>{const T=new K(new Ue(.038,.03,.06,12),o);T.position.set(v,S,A),T.castShadow=!0,this.tableGroup.add(T);const C=new K(new Kc(.032,12),l);C.rotation.x=-Math.PI/2,C.position.set(v,S+.025,A),this.tableGroup.add(C)});const c=new He(.24,.02,.14),h=new fe({color:9132587,roughness:.7}),u=new K(c,h);u.position.set(.14,.355,.02),u.rotation.y=-.3,this.tableGroup.add(u);const d=new Ue(.003,.003,.2,6);d.rotateZ(Math.PI/2),d.translate(.14,.38,.02);const f=new K(d,new Pn({color:13808780}));this.tableGroup.add(f),[16747937,16777215,7058260].forEach((v,S)=>{const A=new Gn(.026,10,10),T=new fe({color:v,roughness:.5}),C=new K(A,T);C.position.set(.08+S*.05,.38,.02),C.castShadow=!0,this.tableGroup.add(C)});const _=new He(.22,.16,.2);_.translate(.22,.12,.35);const m=new fe({color:16752828,roughness:.5}),p=new K(_,m);p.castShadow=!0,this.tableGroup.add(p);const y=new K(new He(.225,.165,.035),this.goldHemMaterial);y.position.set(.22,.12,.35),this.tableGroup.add(y);const x=new K(new He(.035,.165,.205),this.goldHemMaterial);x.position.set(.22,.12,.35),this.tableGroup.add(x),this.group.add(this.tableGroup)}buildBirthdayCake(){this.cakeTableGroup=new it,this.cakeTableGroup.name="BirthdayCakeCelebrationArea",this.cakeTableGroup.position.set(2.15,0,1.65),this.cakeTableGroup.rotation.y=-.32;const e=new Ue(.48,.5,.05,32);e.translate(0,.35,0);const t=new fe({color:5122836,roughness:.65,metalness:.08}),n=new K(e,t);n.castShadow=!0,n.receiveShadow=!0,n.userData={isCake:!0},this.cakeTableGroup.add(n),this.interactiveObjects.push(n);const i=new Ue(.026,.036,.35,12);for(let Q=0;Q<4;Q++){const te=Q/4*Math.PI*2+Math.PI/4,pe=new K(i,t);pe.position.set(Math.cos(te)*.36,.175,Math.sin(te)*.36),pe.castShadow=!0,this.cakeTableGroup.add(pe)}const s=new Ue(.44,.44,.015,32);s.translate(0,.38,0);const a=new fe({color:12197426,roughness:.85,metalness:.05}),o=new K(s,a);o.castShadow=!0,o.receiveShadow=!0,o.userData={isCake:!0},this.cakeTableGroup.add(o),this.interactiveObjects.push(o);const l=new fe({color:15054904,roughness:.35,metalness:.65}),c=new Xs(.438,.008,8,32);c.rotateX(Math.PI/2),c.translate(0,.388,0);const h=new K(c,l);this.cakeTableGroup.add(h);const u=new He(.18,.14,.18);u.translate(0,.07,0);const d=new fe({color:16752828,roughness:.5}),f=new K(u,d);f.position.set(-.25,.388,-.12),f.rotation.y=.25,f.castShadow=!0,f.userData={isCake:!0},this.cakeTableGroup.add(f),this.interactiveObjects.push(f);const g=new K(new He(.185,.145,.025),l);g.position.copy(f.position),g.position.y+=.07,g.rotation.y=.25,this.cakeTableGroup.add(g);const _=new K(new He(.025,.145,.185),l);_.position.copy(f.position),_.position.y+=.07,_.rotation.y=.25,this.cakeTableGroup.add(_);const m=new Gn(.03,8,8);m.scale(1.2,.6,1.2);const p=new K(m,l);p.position.copy(f.position),p.position.y+=.145,this.cakeTableGroup.add(p);const y=new Jr(.02,1);y.scale(1.2,.2,.8);const x=new fe({color:16756162,roughness:.6});for(let Q=0;Q<7;Q++){const te=new K(y,x),pe=Q/7*Math.PI*2+.4;te.position.set(Math.cos(pe)*.32,.392,Math.sin(pe)*.32),te.rotation.set((Math.random()-.5)*.2,Math.random()*Math.PI,(Math.random()-.5)*.2),this.cakeTableGroup.add(te)}const v=new Fs(16760453,.45,2);v.position.set(0,.2,0),this.cakeTableGroup.add(v),this.cakeGroup=new it,this.cakeGroup.name="BirthdayCakeModel",this.cakeGroup.position.set(.06,.388,.02),this.cakeGroup.scale.set(.85,.85,.85);const S=new Ue(.38,.32,.03,24),A=new fe({color:16447216,roughness:.3,metalness:.2}),T=new K(S,A);T.position.y=.015,T.castShadow=!0,this.cakeGroup.add(T);const C=new Ue(.3,.3,.14,28),M=new fe({color:16776439,roughness:.65,metalness:.02}),b=new K(C,M);b.position.y=.1,b.castShadow=!0,this.cakeGroup.add(b);const L=new Ue(.303,.303,.03,28),O=new fe({color:16745889,roughness:.6}),U=new K(L,O);U.position.y=.1,this.cakeGroup.add(U);const F=new Ue(.2,.2,.11,24),G=new K(F,M);G.position.y=.225,G.castShadow=!0,this.cakeGroup.add(G);const H=[],X=new qn(.035,.065,8);X.rotateX(Math.PI);for(let Q=0;Q<6;Q++){const te=Q/6*Math.PI*2,pe=.14,De=X.clone();De.translate(Math.cos(te)*pe,.31,Math.sin(te)*pe),H.push(De)}for(let Q=0;Q<8;Q++){const te=Q/8*Math.PI*2+.2,pe=.25,De=X.clone();De.translate(Math.cos(te)*pe,.19,Math.sin(te)*pe),H.push(De)}const z=En(H);X.dispose(),H.forEach(Q=>Q.dispose());const ie=new fe({color:14423100,roughness:.35,metalness:.1}),ae=new K(z,ie);ae.castShadow=!0,this.cakeGroup.add(ae);const ve=new Ue(.012,.012,.16,12),Re=new fe({color:16765243,roughness:.4}),Ve=new K(ve,Re);Ve.position.set(0,.36,0),Ve.castShadow=!0,this.cakeGroup.add(Ve);const q=new qn(.022,.05,8);this.flameMat=new Pn({color:16755234}),this.flameMesh=new K(q,this.flameMat),this.flameMesh.position.set(0,.46,0),this.cakeGroup.add(this.flameMesh),this.candleLight=new Fs(16750882,1.6,3.5,2),this.candleLight.position.set(0,.48,0),this.cakeGroup.add(this.candleLight);const Y=this.createCakePlaque();Y.position.set(0,.23,.21),Y.rotation.x=-.35,this.cakeGroup.add(Y),b.userData={isCake:!0},G.userData={isCake:!0},T.userData={isCake:!0},Ve.userData={isCake:!0},ae.userData={isCake:!0},Y.userData={isCake:!0},this.interactiveObjects.push(b,G,T,Ve,ae,Y),this.buildCandleSmoke(),this.cakeTableGroup.add(this.cakeGroup),this.group.add(this.cakeTableGroup)}buildCandleSmoke(){const t=new Rt,n=new Float32Array(90);this.smokeVelocities=[];for(let l=0;l<30;l++)n[l*3]=0,n[l*3+1]=.46,n[l*3+2]=0,this.smokeVelocities.push({x:(Math.random()-.5)*.04,y:.12+Math.random()*.22,z:(Math.random()-.5)*.04});t.setAttribute("position",new Ct(n,3));const i=document.createElement("canvas");i.width=64,i.height=64;const s=i.getContext("2d"),a=s.createRadialGradient(32,32,2,32,32,30);a.addColorStop(0,"rgba(240, 240, 245, 0.85)"),a.addColorStop(.5,"rgba(210, 215, 225, 0.4)"),a.addColorStop(1,"rgba(190, 195, 210, 0.0)"),s.fillStyle=a,s.fillRect(0,0,64,64);const o=new $n(i);this.smokeMat=new Ur({size:.08,map:o,transparent:!0,opacity:0,depthWrite:!1,blending:fs}),this.smokePoints=new Ka(t,this.smokeMat),this.smokePoints.position.set(0,0,0),this.cakeGroup.add(this.smokePoints),this.isSmoking=!1,this.smokeTimer=0}createCakePlaque(){const e=document.createElement("canvas");e.width=512,e.height=160;const t=e.getContext("2d");t.fillStyle="#26140d",t.roundRect(4,4,504,152,20),t.fill(),t.strokeStyle="#e6b840",t.lineWidth=6,t.stroke(),t.strokeStyle="#ffe485",t.lineWidth=2,t.strokeRect(14,14,484,132),t.fillStyle="#ffeaa7",t.font='bold 26px "Segoe UI", sans-serif',t.textAlign="center",t.fillText("Happy Birthday",256,52),t.fillStyle="#ff75a0",t.font='bold 32px "Georgia", serif',t.fillText("Nur Syarifa Syuhada",256,96),t.fillStyle="#ffffff",t.font="22px sans-serif",t.fillText("祝・お誕生日おめでとう",256,134);const n=new $n(e);n.colorSpace=ft;const i=new $t(.38,.12),s=new fe({map:n,roughness:.4,metalness:.1,transparent:!0}),a=new K(i,s);return a.castShadow=!0,a}buildBranchEmaPlaque(){this.emaGroup=new it,this.emaGroup.position.set(.35,2.65,.85),this.emaGroup.rotation.y=-.28;const e=new Xs(.075,.014,8,16);e.rotateX(Math.PI/2),e.translate(0,.5,0);const t=new fe({color:14231096,roughness:.6}),n=new K(e,t);n.castShadow=!0,this.emaGroup.add(n);const i=new Ue(.005,.005,.38,6);i.translate(-.06,.3,0);const s=new K(i,t);this.emaGroup.add(s);const a=new K(i,t);a.position.set(.12,0,0),this.emaGroup.add(a);const o=document.createElement("canvas");o.width=600,o.height=420;const l=o.getContext("2d");l.fillStyle="#f3ddb6",l.fillRect(0,0,600,420),l.fillStyle="#ebd1a2";for(let f=10;f<420;f+=18)l.fillRect(0,f,600,4);l.strokeStyle="#7c4826",l.lineWidth=14,l.strokeRect(8,8,584,404),l.fillStyle="#c52838",l.font="bold 32px serif",l.textAlign="center",l.fillText("祝・良き日",300,65),l.fillStyle="#2d1808",l.font='bold 28px "Georgia", serif',l.fillText("Taman Doa & Kenangan",300,108),l.fillStyle="#d92b65",l.font='bold 44px "Georgia", serif',l.fillText("Nur Syarifa Syuhada",300,172),l.fillStyle="#3d2511",l.font='22px "Noto Serif JP", serif',l.fillText("「お誕生日おめでとうございます」",300,222),l.font='20px "Segoe UI", sans-serif',l.fillText("Semoga selalu diberi kesehatan, kebahagiaan,",300,270),l.fillText("dan kemudahan dalam meraih semua impian.",300,305),l.fillStyle="#c52838",l.font="bold 24px serif",l.fillText("Best Wishes, Dill",300,365);const c=new $n(o);c.colorSpace=ft;const h=new $t(.52,.36),u=new fe({map:c,roughness:.7,metalness:.05,side:Et}),d=new K(h,u);d.position.set(0,.18,0),d.castShadow=!0,d.receiveShadow=!0,d.userData={isEma:!0},this.emaGroup.add(d),this.interactiveObjects.push(d),this.group.add(this.emaGroup)}buildFūrinWindChime(){this.chimeGroup=new it,this.chimeGroup.position.set(-.35,3.45,1.4);const e=new Yn({color:16777215,transmission:.85,opacity:1,transparent:!0,roughness:.1,ior:1.5}),t=new Gn(.065,16,12,0,Math.PI*2,0,Math.PI*.65),n=new K(t,e);this.chimeGroup.add(n);const i=document.createElement("canvas");i.width=128,i.height=384;const s=i.getContext("2d");s.fillStyle="#fff0f5",s.fillRect(0,0,128,384),s.strokeStyle="#ff75a0",s.lineWidth=6,s.strokeRect(4,4,120,376),s.fillStyle="#ff2a70",s.font="bold 36px serif",s.textAlign="center",s.fillText("*",64,70),s.font="bold 24px serif",s.fillText("風",64,140),s.fillText("鈴",64,180),s.font="bold 22px serif",s.fillText("幸福",64,250),s.font="bold 18px sans-serif",s.fillText("Syarifa",64,290);const a=new $n(i),o=new fe({map:a,side:Et});this.tanzakuMesh=new K(new $t(.08,.24),o),this.tanzakuMesh.position.set(0,-.22,0),this.chimeGroup.add(this.tanzakuMesh),this.tanzakuMesh.userData={isChime:!0},this.interactiveObjects.push(this.tanzakuMesh),this.group.add(this.chimeGroup)}buildStoneLantern(){this.lanternGroup=new it,this.lanternGroup.position.set(-3.35,0,1.85),this.lanternGroup.rotation.y=.5;const e=new fe({color:7238269,roughness:.92,metalness:.08}),t=[],n=new Ue(.26,.32,.14,6);n.translate(0,.07,0),t.push(n);const i=new Ue(.1,.12,.55,6);i.translate(0,.41,0),t.push(i);const s=new Ue(.28,.22,.08,6);s.translate(0,.72,0),t.push(s);const a=new qn(.38,.18,6);a.translate(0,1.06,0),t.push(a);const o=new Gn(.065,8,8);o.translate(0,1.2,0),t.push(o);const l=En(t);t.forEach(g=>g.dispose());const c=new K(l,e);c.castShadow=!0,c.receiveShadow=!0,this.lanternGroup.add(c);const h=new Ue(.18,.18,.18,6);h.translate(0,.85,0);const u=new Pn({color:16765301}),d=new K(h,u);this.lanternGroup.add(d);const f=new Fs(16758861,1.2,4,1.8);f.position.set(0,.85,0),this.lanternGroup.add(f),this.group.add(this.lanternGroup)}buildIrisFlowerBeds(){const e=new it,t=[],n=[],i=new fe({color:6113192,roughness:.6,side:Et}),s=new fe({color:4026413,roughness:.8});[[-1.9,0,1.6],[-2.5,0,1.1],[1.1,0,2.3],[2.7,0,.7],[-.9,0,2.1]].forEach(([u,d,f])=>{for(let g=0;g<3;g++){const _=u+(Math.random()-.5)*.25,m=f+(Math.random()-.5)*.25,p=.22+Math.random()*.14,y=new Ue(.008,.01,p,5);y.translate(_,d+p/2,m),n.push(y);for(let x=0;x<3;x++){const v=x/3*Math.PI*2,S=new $t(.045,.09);S.rotateX(.4),S.rotateY(v),S.translate(_,d+p,m),t.push(S)}}});const o=En(t);t.forEach(u=>u.dispose());const l=new K(o,i);l.castShadow=!0,e.add(l);const c=En(n);n.forEach(u=>u.dispose());const h=new K(c,s);e.add(h),this.group.add(e)}buildFallenPetalsPatch(){const t=new $t(.08,.05);t.rotateX(-Math.PI/2);const n=new fe({color:16752056,roughness:.85,metalness:.05,side:Et}),i=new go(t,n,380),s=new pt;for(let a=0;a<380;a++){const o=Math.random()*Math.PI*2,l=.5+Math.random()*3,c=Math.cos(o)*l+(Math.random()-.5)*.5,h=Math.sin(o)*l+.3,u=.012+Math.random()*.008;s.position.set(c,u,h),s.rotation.y=Math.random()*Math.PI*2,s.rotation.z=(Math.random()-.5)*.1,s.scale.setScalar(.7+Math.random()*.6),s.updateMatrix(),i.setMatrixAt(a,s.matrix)}i.receiveShadow=!0,this.group.add(i)}buildKomorebiLightMotes(){const t=new Rt,n=new Float32Array(135),i=new Float32Array(45);this.moteBases=[];for(let a=0;a<45;a++){const o=a*3,l=(Math.random()-.5)*6.5,c=.8+Math.random()*3.8,h=(Math.random()-.5)*5.5+.5;n[o+0]=l,n[o+1]=c,n[o+2]=h,i[a]=.05+Math.random()*.06,this.moteBases.push({x:l,y:c,z:h,speed:.8+Math.random()*1.2,phase:Math.random()*Math.PI*2})}t.setAttribute("position",new Ct(n,3));const s=new Ur({color:16771720,size:.09,transparent:!0,opacity:.65,blending:Hr,depthWrite:!1});this.komorebiMesh=new Ka(t,s),this.group.add(this.komorebiMesh)}buildAnimatedButterflies(){[{color:16769091,speed:.7,rX:2.2,rZ:1.8,yBase:1.6,phase:0,scale:1.2},{color:16741792,speed:.85,rX:1.7,rZ:2.3,yBase:2.1,phase:2.2,scale:1.15},{color:5173970,speed:.65,rX:2.5,rZ:1.5,yBase:1.3,phase:4.1,scale:1.2},{color:12216520,speed:.78,rX:1.9,rZ:2,yBase:1.8,phase:1.4,scale:1.15},{color:16777215,speed:.9,rX:.9,rZ:1.4,yBase:.85,phase:3.2,scale:1.3},{color:16755251,speed:.72,rX:1.3,rZ:1.6,yBase:1.05,phase:5.1,scale:1.25}].forEach(t=>{const n=new it,i=new fe({color:t.color,emissive:t.color,emissiveIntensity:.35,roughness:.35,side:Et}),s=t.scale||1,a=new $t(.1*s,.14*s);a.translate(-.05*s,0,0);const o=new K(a,i),l=new K(a,i);l.scale.x=-1;const c=new K(new Ue(.009*s,.009*s,.09*s,6),new Pn({color:2234901}));c.rotation.x=Math.PI/2,n.add(o),n.add(l),n.add(c),this.group.add(n),this.butterflies.push({group:n,wingL:o,wingR:l,cfg:t})})}buildSparkleSystem(){const t=new Rt,n=new Float32Array(360),i=new Float32Array(360),s=new Float32Array(360),a=[new me(16765243),new me(16741792),new me(5173970),new me(16774634)];for(let l=0;l<120;l++){const c=l*3;n[c+0]=0,n[c+1]=-100,n[c+2]=0,i[c+0]=(Math.random()-.5)*1.8,i[c+1]=1+Math.random()*2.2,i[c+2]=(Math.random()-.5)*1.8;const h=a[Math.floor(Math.random()*a.length)];s[c+0]=h.r,s[c+1]=h.g,s[c+2]=h.b}t.setAttribute("position",new Ct(n,3)),t.setAttribute("aVelocity",new Ct(i,3)),t.setAttribute("color",new Ct(s,3));const o=new Ur({size:.08,vertexColors:!0,transparent:!0,opacity:0,blending:Hr,depthWrite:!1});this.sparkleMesh=new Ka(t,o),this.group.add(this.sparkleMesh),this.isSparkling=!1,this.sparkleTimer=0}extinguishCandle(){if(this.candleLit=!1,this.flameMesh&&we.to(this.flameMesh.scale,{x:1.8,y:.2,z:1.8,duration:.15,onComplete:()=>{we.to(this.flameMesh.scale,{x:.001,y:.001,z:.001,duration:.15,onComplete:()=>{this.flameMesh&&(this.flameMesh.visible=!1)}})}}),this.candleLight&&we.to(this.candleLight,{intensity:0,duration:.35}),this.isSmoking=!0,this.smokeTimer=0,this.smokeMat&&(this.smokeMat.opacity=.85),this.smokePoints){const e=this.smokePoints.geometry.attributes.position;for(let t=0;t<this.smokeVelocities.length;t++)e.setXYZ(t,(Math.random()-.5)*.02,.46,(Math.random()-.5)*.02),this.smokeVelocities[t]={x:(Math.random()-.5)*.04,y:.12+Math.random()*.2,z:(Math.random()-.5)*.04};e.needsUpdate=!0}this.triggerCakeSparkles()}lightCandle(){this.candleLit=!0,this.flameMesh&&(this.flameMesh.visible=!0,we.to(this.flameMesh.scale,{x:1,y:1,z:1,duration:.4,ease:"back.out(2.0)"})),this.candleLight&&we.to(this.candleLight,{intensity:1.6,duration:.4})}triggerCakeSparkles(){if(this.isSparkling=!0,this.sparkleTimer=0,this.sparkleMesh&&this.sparkleMesh.material){this.sparkleMesh.material.opacity=1;const e=this.sparkleMesh.geometry.attributes.position,t=new P;this.cakeGroup.getWorldPosition(t);for(let n=0;n<e.count;n++)e.setXYZ(n,t.x+(Math.random()-.5)*.25,t.y+.46,t.z+(Math.random()-.5)*.25);e.needsUpdate=!0}we.fromTo(this.cakeGroup.scale,{x:.95,y:.75,z:.95},{x:.85,y:.85,z:.85,duration:.7,ease:"elastic.out(1.4, 0.4)"})}triggerCakeCelebration(){this.candleLit?this.extinguishCandle():this.lightCandle()}update(e,t){if(this.candleLit&&this.candleLight&&this.flameMesh){const n=Math.sin(t*18)*.12+Math.cos(t*31)*.08;this.candleLight.intensity=1.6+n*.4,this.flameMesh.scale.set(1+n*.2,1+n*.35,1+n*.2)}if(this.isSmoking&&this.smokePoints){this.smokeTimer+=e;const n=this.smokePoints.geometry.attributes.position;for(let i=0;i<this.smokeVelocities.length;i++){const s=this.smokeVelocities[i],a=n.getX(i)+s.x*e+Math.sin(t*2.5+i)*.015*e,o=n.getY(i)+s.y*e,l=n.getZ(i)+s.z*e+Math.cos(t*2+i)*.015*e;n.setXYZ(i,a,o,l)}n.needsUpdate=!0,this.smokeMat&&(this.smokeMat.opacity=Math.max(0,.85*(1-this.smokeTimer/2.5))),this.smokeTimer>=2.5&&(this.isSmoking=!1,this.smokeMat&&(this.smokeMat.opacity=0))}if(this.emaGroup&&(this.emaGroup.rotation.z=Math.sin(t*1.35)*.035,this.emaGroup.rotation.x=Math.cos(t*1.1)*.025),this.tanzakuMesh&&(this.tanzakuMesh.rotation.z=Math.sin(t*2.2)*.18,this.tanzakuMesh.rotation.x=Math.cos(t*1.8)*.12),this.komorebiMesh&&this.moteBases){const n=this.komorebiMesh.geometry.attributes.position;for(let i=0;i<this.moteBases.length;i++){const s=this.moteBases[i],a=s.y+Math.sin(t*s.speed+s.phase)*.35,o=s.x+Math.cos(t*.6+s.phase)*.2;n.setXYZ(i,o,a,s.z)}n.needsUpdate=!0}if(this.butterflies.forEach(({group:n,wingL:i,wingR:s,cfg:a})=>{const o=t*a.speed+a.phase,l=Math.sin(o)*a.rX,c=Math.cos(o*.8)*a.rZ,h=a.yBase+Math.sin(o*1.8)*.35;n.position.set(l,h,c),n.rotation.y=Math.atan2(Math.cos(o)*a.rX,-Math.sin(o*.8)*a.rZ*.8),n.rotation.z=Math.sin(o*2.5)*.15;const u=Math.sin(t*28+a.phase)*.72;i.rotation.y=u,s.rotation.y=-u}),this.isSparkling&&this.sparkleMesh){this.sparkleTimer+=e;const n=this.sparkleMesh.geometry.attributes.position,i=this.sparkleMesh.geometry.attributes.aVelocity;for(let s=0;s<n.count;s++){const a=i.getX(s),o=i.getY(s)-2.8*e,l=i.getZ(s);i.setY(s,o),n.setXYZ(s,n.getX(s)+a*e,n.getY(s)+o*e,n.getZ(s)+l*e)}n.needsUpdate=!0,this.sparkleTimer>1.8&&(this.sparkleMesh.material.opacity=Math.max(0,1-(this.sparkleTimer-1.8)*2),this.sparkleTimer>2.5&&(this.isSparkling=!1,this.sparkleMesh.material.opacity=0))}}buildCeremonialBirthdaySign(){this.birthdaySignGroup=new it,this.birthdaySignGroup.position.set(-2.55,0,2.15),this.birthdaySignGroup.rotation.y=.38,this.birthdaySignGroup.scale.set(.92,.92,.92);const e=new fe({color:4334871,roughness:.75,metalness:.08}),t=new fe({color:14660666,roughness:.4,metalness:.7}),n=new He(.08,1.45,.08);n.translate(0,.725,0);const i=new K(n,e);i.position.x=-.68,i.castShadow=!0,this.birthdaySignGroup.add(i);const s=new K(n,e);s.position.x=.68,s.castShadow=!0,this.birthdaySignGroup.add(s);const a=new He(.18,.12,.18),o=new fe({color:7238269,roughness:.9}),l=new K(a,o);l.position.set(-.68,.06,0),this.birthdaySignGroup.add(l);const c=new K(a,o);c.position.set(.68,.06,0),this.birthdaySignGroup.add(c);const h=new He(1.68,.08,.14);h.translate(0,1.48,0);const u=new K(h,e);u.castShadow=!0,this.birthdaySignGroup.add(u);const d=new He(.06,.085,.145),f=new K(d,t);f.position.set(-.81,1.48,0),this.birthdaySignGroup.add(f);const g=new K(d,t);g.position.set(.81,1.48,0),this.birthdaySignGroup.add(g);const _=document.createElement("canvas");_.width=1024,_.height=640;const m=_.getContext("2d");m.fillStyle="#1c0f0d",m.roundRect(12,12,1e3,616,28),m.fill();const p=m.createLinearGradient(0,30,0,610);p.addColorStop(0,"#fff4f6"),p.addColorStop(.5,"#ffebee"),p.addColorStop(1,"#ffdde4"),m.fillStyle=p,m.roundRect(32,32,960,576,20),m.fill(),m.strokeStyle="#d4af37",m.lineWidth=10,m.stroke(),m.strokeStyle="#c52838",m.lineWidth=3,m.strokeRect(48,48,928,544),m.fillStyle="#b71c1c",m.font='bold 36px "Cinzel", "Georgia", serif',m.textAlign="center",m.fillText("HAPPY BIRTHDAY",512,125),m.fillStyle="#c2185b",m.font='bold 64px "Georgia", serif',m.fillText("Nur Syarifa Syuhada",512,220),m.fillStyle="#2d1808",m.font='bold 40px "Hiragino Mincho ProN", "Yu Mincho", serif',m.fillText("祝・お誕生日おめでとう",512,290),m.strokeStyle="#d4af37",m.lineWidth=4,m.beginPath(),m.moveTo(180,330),m.lineTo(844,330),m.stroke(),m.fillStyle="#422517",m.font='500 28px "Segoe UI", sans-serif',m.fillText("Semoga panjang umur, sehat selalu,",512,395),m.fillText("dan dilancarkan segala hal baik yang kamu impikan.",512,445),m.fillStyle="#b71c1c",m.font='bold 30px "Georgia", serif',m.fillText("Best Wishes, Dill",512,530);const y=new $n(_);y.colorSpace=ft;const x=new $t(1.24,.78),v=new fe({map:y,roughness:.35,metalness:.05,side:Et}),S=new K(x,v);S.position.set(0,.92,.02),S.castShadow=!0,S.userData={isBirthdaySign:!0},this.birthdaySignGroup.add(S),this.interactiveObjects.push(S),[-.56,.56].forEach(A=>{const T=new Gn(.09,12,10);T.scale(.85,1.25,.85);const C=new fe({color:16731501,emissive:16722504,emissiveIntensity:.75,roughness:.6}),M=new K(T,C);M.position.set(A,1.28,.08),M.castShadow=!0,this.birthdaySignGroup.add(M);const b=new Fs(16755285,.9,2.5,2);b.position.set(A,1.28,.08),this.birthdaySignGroup.add(b)}),this.group.add(this.birthdaySignGroup)}dispose(){this.group&&this.group.parent&&this.group.parent.remove(this.group),this.interactiveObjects=[]}}class VS{constructor(e){this.sceneManager=e,this.scene=this.sceneManager.scene,this.elapsedTime=0,this.init()}get picnicScene(){return this.sakuraTree}init(){var e,t;this.environment=new Qb(this.sceneManager),this.sky=new eS(this.sceneManager),this.ground=new tS(this.sceneManager),this.sakuraTree=new FS(this.sceneManager),this.japaneseGarden=new GS(this.sceneManager),this.petals=new BS(this.sceneManager,2500),this.polaroids=new zS(this.sceneManager),(e=this.sakuraTree)!=null&&e.pivot&&((t=this.polaroids)!=null&&t.group)&&this.sakuraTree.pivot.add(this.polaroids.group)}update(e){this.elapsedTime+=e,this.sakuraTree&&this.sakuraTree.update(e),this.japaneseGarden&&this.japaneseGarden.update(e,this.elapsedTime),this.petals&&this.petals.update(e,this.elapsedTime),this.polaroids&&this.polaroids.update(e,this.elapsedTime),this.ground&&this.ground.update(e),this.sky&&this.sky.update(e)}dispose(){this.japaneseGarden&&(this.japaneseGarden.dispose(),this.japaneseGarden=null),this.polaroids&&(this.polaroids.dispose(),this.polaroids=null),this.environment&&(this.environment.dispose(),this.environment=null),this.sky&&(this.sky.dispose(),this.sky=null),this.ground&&(this.ground.dispose(),this.ground=null),this.sakuraTree&&(this.sakuraTree.dispose(),this.sakuraTree=null),this.petals&&(this.petals.dispose(),this.petals=null)}}class HS extends en{constructor(e){super(),this.sceneManager=e,this.renderer=this.sceneManager.renderer,this.camera=this.sceneManager.camera,this.domElement=this.renderer.instance.domElement,this.raycaster=new A0,this.pointer=new re,this.pointerDownPos=new re,this.pointerDownTime=0,this.maxTapDistance=9,this.maxTapDuration=350,this.clickableTargets=[],this.currentHovered=null,this.isEnabled=!0,this._onPointerDown=this._onPointerDown.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this.initEvents()}initEvents(){this.domElement.addEventListener("pointerdown",this._onPointerDown,{passive:!0}),this.domElement.addEventListener("pointermove",this._onPointerMove,{passive:!0}),this.domElement.addEventListener("pointerup",this._onPointerUp,{passive:!0})}setClickables(e){this.clickableTargets=Array.isArray(e)?e:[]}_updatePointerCoords(e){const t=this.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1}_onPointerDown(e){this.isEnabled&&(this.pointerDownPos.set(e.clientX,e.clientY),this.pointerDownTime=performance.now(),this.pointerDownType=e.pointerType)}_onPointerMove(e){var t,n,i,s,a,o,l,c,h,u,d;if(this.isEnabled&&e.pointerType==="mouse"&&this.clickableTargets.length>0){this._updatePointerCoords(e),this.raycaster.setFromCamera(this.pointer,this.camera.instance);const f=this.raycaster.intersectObjects(this.clickableTargets,!1);if(f.length>0){const g=f[0].object,_=(t=g.userData)==null?void 0:t.polaroidGroup;(n=g.userData)!=null&&n.isCake||(i=g.userData)!=null&&i.isEma||(s=g.userData)!=null&&s.isBench||(a=g.userData)!=null&&a.isCenterBench||(o=g.userData)!=null&&o.isBirthdaySign||(l=g.userData)!=null&&l.isPicnicItem||(c=g.userData)!=null&&c.isTreeTrunk||(h=g.userData)!=null&&h.isBark||(u=g.userData)!=null&&u.isSakuraTree?document.body.style.cursor="pointer":_!==this.currentHovered&&(this.currentHovered=_,document.body.style.cursor="pointer",this.trigger("hover",[_,!0,(d=g.userData)==null?void 0:d.memory]))}else document.body.style.cursor="default",this.currentHovered&&(this.trigger("hover",[this.currentHovered,!1,null]),this.currentHovered=null)}}_onPointerUp(e){var c,h,u,d,f,g,_,m,p,y;if(!this.isEnabled||this.clickableTargets.length===0)return;const t=e.clientX-this.pointerDownPos.x,n=e.clientY-this.pointerDownPos.y,i=Math.hypot(t,n),s=performance.now()-this.pointerDownTime,a=e.pointerType==="touch"||this.pointerDownType==="touch",o=a?16:this.maxTapDistance,l=a?450:this.maxTapDuration;if(i<=o&&s<=l){this._updatePointerCoords(e),this.raycaster.setFromCamera(this.pointer,this.camera.instance);const x=this.raycaster.intersectObjects(this.clickableTargets,!1);if(x.length>0){const v=x[0],S=(c=v.object.userData)==null?void 0:c.polaroidGroup,A=(h=v.object.userData)==null?void 0:h.memory;(u=v.object.userData)!=null&&u.isTreeTrunk||(d=v.object.userData)!=null&&d.isBark?(console.log("[InteractionManager] Tree trunk/bark clicked!"),this.trigger("trunkClick"),this.trigger("barkClick")):(f=v.object.userData)!=null&&f.isBirthdaySign?(console.log("[InteractionManager] Birthday sign clicked!"),this.trigger("birthdaySignClick")):(g=v.object.userData)!=null&&g.isCenterBench?(console.log("[InteractionManager] Center bench clicked!"),this.trigger("centerBenchClick")):(_=v.object.userData)!=null&&_.isCake?(console.log("[InteractionManager] Birthday cake clicked!"),this.trigger("cakeClick")):(m=v.object.userData)!=null&&m.isEma?(console.log("[InteractionManager] Ema plaque clicked!"),this.trigger("emaClick")):(p=v.object.userData)!=null&&p.isBench?(console.log("[InteractionManager] Bench clicked!"),this.trigger("benchClick")):(y=v.object.userData)!=null&&y.isPicnicItem?(console.log("[InteractionManager] Picnic item clicked!"),this.trigger("picnicClick",[v.object])):S&&A&&(console.log(`[InteractionManager] Clean tap on memory: "${A.title}"`),this.trigger("select",[S,A]))}}}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),document.body.style.cursor="default",this.clickableTargets=[],this.currentHovered=null,super.dispose()}}class WS extends en{constructor(e){super(),this.sceneManager=e,this.isOpen=!1,this.currentMemory=null,this.memoriesList=[],this.currentIndex=0,this.init()}init(){this.container=document.createElement("div"),this.container.id="story-modal",this.container.className="story-modal-overlay",this.container.style.display="none",this.container.innerHTML=`
      <div class="story-backdrop" id="story-backdrop"></div>
      <div class="story-card" id="story-card">
        <button class="story-close-btn" id="story-close-btn" aria-label="Tutup Panel">&times;</button>

        <div class="story-header">
          <span class="story-badge-date" id="story-date">--</span>
          <span class="story-badge-tag" id="story-tag">--</span>
        </div>

        <h2 class="story-title" id="story-title">Judul Kenangan</h2>
        <div class="story-location" id="story-location">Lokasi</div>

        <div class="story-polaroid-frame">
          <div class="story-img-container" id="story-img-container">
            <div class="story-img-placeholder" id="story-img-placeholder">
              <span class="story-emoji-icon" id="story-emoji">#</span>
            </div>
          </div>
          <p class="story-caption" id="story-caption">"Kutipan kenangan manis..."</p>
        </div>

        <div class="story-body">
          <p class="story-full-text" id="story-text">Cerita lengkap di balik foto kenangan ini...</p>
        </div>

        <div class="story-footer">
          <button class="story-nav-btn prev" id="story-btn-prev">‹ Sebelumnya</button>
          <button class="story-action-btn" id="story-btn-close-action">Lanjut Menjelajah</button>
          <button class="story-nav-btn next" id="story-btn-next">Selanjutnya ›</button>
        </div>
      </div>
    `,document.body.appendChild(this.container),this.cardEl=document.getElementById("story-card"),this.backdropEl=document.getElementById("story-backdrop"),this.closeBtn=document.getElementById("story-close-btn"),this.closeActionBtn=document.getElementById("story-btn-close-action"),this.prevBtn=document.getElementById("story-btn-prev"),this.nextBtn=document.getElementById("story-btn-next"),this.dateEl=document.getElementById("story-date"),this.tagEl=document.getElementById("story-tag"),this.titleEl=document.getElementById("story-title"),this.locationEl=document.getElementById("story-location"),this.emojiEl=document.getElementById("story-emoji"),this.captionEl=document.getElementById("story-caption"),this.textEl=document.getElementById("story-text"),this.imgContainer=document.getElementById("story-img-container"),this._onKeyDown=this._onKeyDown.bind(this),this.bindEvents()}setMemories(e){this.memoriesList=e||[]}bindEvents(){this.closeBtn.addEventListener("click",()=>this.close()),this.closeActionBtn.addEventListener("click",()=>this.close()),this.backdropEl.addEventListener("click",()=>this.close()),this.prevBtn.addEventListener("click",()=>{if(this.memoriesList.length===0)return;const i=(this.currentIndex-1+this.memoriesList.length)%this.memoriesList.length;this.trigger("navigate",[this.memoriesList[i],i])}),this.nextBtn.addEventListener("click",()=>{if(this.memoriesList.length===0)return;const i=(this.currentIndex+1)%this.memoriesList.length;this.trigger("navigate",[this.memoriesList[i],i])});let e=0,t=0,n=!1;this.cardEl.addEventListener("touchstart",i=>{i.touches.length===1&&(e=i.touches[0].clientX,t=i.touches[0].clientY,n=!0)},{passive:!0}),this.cardEl.addEventListener("touchend",i=>{if(!n||i.changedTouches.length===0)return;n=!1;const s=i.changedTouches[0].clientX-e,a=i.changedTouches[0].clientY-t;Math.abs(s)>45&&Math.abs(s)>Math.abs(a)*1.5&&(s<0?this.nextBtn.click():this.prevBtn.click())},{passive:!0}),window.addEventListener("keydown",this._onKeyDown)}_onKeyDown(e){this.isOpen&&(e.key==="Escape"?this.close():e.key==="ArrowLeft"?this.prevBtn.click():e.key==="ArrowRight"&&this.nextBtn.click())}open(e,t){this.isOpen=!0,this.currentMemory=e,this.currentIndex=t!==void 0?t:this.memoriesList.findIndex(i=>i.id===e.id),this.dateEl.textContent=e.date||"",this.tagEl.textContent=e.tag||"",this.titleEl.textContent=e.title||"",this.locationEl.textContent=e.location?e.location:"",this.captionEl.textContent=e.caption?`"${e.caption}"`:"",this.textEl.textContent=e.fullStory||"";const n=["01","02","03","04"];this.emojiEl.textContent=n[this.currentIndex%n.length]||"01",e.image&&e.image.trim()!==""?this.imgContainer.innerHTML=`<img src="${e.image}" alt="${e.title}" class="story-loaded-img" />`:this.imgContainer.innerHTML=`
        <div class="story-img-placeholder">
          <span class="story-emoji-icon">${n[this.currentIndex%n.length]||"01"}</span>
        </div>
      `,this.container.style.display="flex",we.killTweensOf([this.backdropEl,this.cardEl]),we.fromTo(this.backdropEl,{opacity:0},{opacity:1,duration:.35,ease:"power2.out"}),we.fromTo(this.cardEl,{opacity:0,scale:.92,y:25},{opacity:1,scale:1,y:0,duration:.45,ease:"back.out(1.2)"}),this.trigger("opened",[e])}close(){this.isOpen&&(this.isOpen=!1,we.to(this.backdropEl,{opacity:0,duration:.25,ease:"power2.in"}),we.to(this.cardEl,{opacity:0,scale:.94,y:15,duration:.3,ease:"power2.in",onComplete:()=>{this.container.style.display="none",this.trigger("closed",[this.currentMemory])}}))}dispose(){window.removeEventListener("keydown",this._onKeyDown),this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.memoriesList=[],super.dispose()}}class XS extends en{constructor(e){super(),this.sceneManager=e,this.memories=[],this.activeIndex=-1,this.isCollapsed=!0,this.init()}init(){this.container=document.createElement("div"),this.container.id="mini-timeline",this.container.className="mini-timeline collapsed",this.container.innerHTML=`
      <div class="timeline-header" id="timeline-header" title="Klik untuk membuka / menutup timeline">
        <div class="timeline-header-title">
          <span class="timeline-dot-live"></span>
          <span class="timeline-title">Kenangan</span>
          <span class="timeline-count-badge" id="timeline-count-badge">0</span>
        </div>
        <button class="timeline-toggle-btn" id="timeline-toggle-btn" aria-label="Buka atau tutup kenangan">
          <span id="timeline-toggle-label">Buka</span>
        </button>
      </div>
      <div class="timeline-body" id="timeline-body">
        <div class="timeline-track" id="timeline-track">
          <!-- Nodes populated dynamically -->
        </div>
      </div>
    `,document.body.appendChild(this.container),this.trackEl=document.getElementById("timeline-track"),this.headerEl=document.getElementById("timeline-header"),this.toggleBtn=document.getElementById("timeline-toggle-btn"),this.toggleLabel=document.getElementById("timeline-toggle-label"),this.countBadge=document.getElementById("timeline-count-badge"),this.headerEl.addEventListener("click",()=>{this.toggleCollapse()})}toggleCollapse(){this.isCollapsed=!this.isCollapsed,this.updateCollapseState()}setCollapsed(e){this.isCollapsed=!!e,this.updateCollapseState()}updateCollapseState(){this.isCollapsed?(this.container.classList.add("collapsed"),this.toggleLabel&&(this.toggleLabel.textContent="Buka")):(this.container.classList.remove("collapsed"),this.toggleLabel&&(this.toggleLabel.textContent="Tutup"))}setMemories(e){this.memories=e||[],this.countBadge&&(this.countBadge.textContent=this.memories.length),this.renderNodes()}renderNodes(){if(!this.trackEl)return;this.trackEl.innerHTML="";const e=["01","02","03","04"];this.memories.forEach((t,n)=>{const i=document.createElement("button");i.className="timeline-node",i.dataset.index=n,i.title=t.title,i.innerHTML=`
        <span class="timeline-node-icon">${e[n%e.length]||"01"}</span>
        <div class="timeline-node-info">
          <span class="timeline-node-date">${t.date}</span>
          <span class="timeline-node-label">${t.title}</span>
        </div>
      `,i.addEventListener("click",s=>{s.stopPropagation(),this.setActive(n),this.trigger("select",[t,n])}),this.trackEl.appendChild(i)})}setActive(e){this.activeIndex=e,this.container.querySelectorAll(".timeline-node").forEach((n,i)=>{i===e?(n.classList.add("active"),this.isCollapsed||n.scrollIntoView({block:"nearest",behavior:"smooth"})):n.classList.remove("active")})}clearActive(){this.activeIndex=-1,this.container.querySelectorAll(".timeline-node").forEach(t=>t.classList.remove("active"))}dispose(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.memories=[],super.dispose()}}class YS{constructor(){this.ctx=null,this.enabled=!0}_initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playTone(e,t="sine",n=.12,i=.08){if(this.enabled)try{if(this._initContext(),!this.ctx)return;const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type=t,s.frequency.setValueAtTime(e,this.ctx.currentTime),a.gain.setValueAtTime(i,this.ctx.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+n),s.connect(a),a.connect(this.ctx.destination),s.start(),s.stop(this.ctx.currentTime+n)}catch{}}sfxCatchPetal(){this.playTone(659.25,"sine",.12,.07)}sfxCatchGolden(){[587.33,739.99,880,1174.66].forEach((t,n)=>{setTimeout(()=>this.playTone(t,"triangle",.15,.08),n*55)})}sfxHurt(){try{if(this._initContext(),!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(150,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(45,this.ctx.currentTime+.22),t.gain.setValueAtTime(.1,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.22),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.22)}catch{}}sfxVictory(){const e=[{f:523.25,d:.12},{f:659.25,d:.12},{f:783.99,d:.12},{f:1046.5,d:.35}];let t=0;e.forEach(n=>{setTimeout(()=>this.playTone(n.f,"triangle",n.d,.1),t),t+=130})}}class qS extends en{constructor(){super(),this.audio=new YS,this.isOpen=!1,this.isRunning=!1,this.targetScore=15,this.score=0,this.lives=3,this.canvasWidth=360,this.canvasHeight=480,this.player={x:180,y:430,width:72,height:24,speed:360,vx:0},this.items=[],this.particles=[],this.floatingTexts=[],this.spawnTimer=0,this.lastTime=0,this.keys={left:!1,right:!1},this.initDOM()}initDOM(){this.container=document.createElement("div"),this.container.id="petal-catch-modal",this.container.className="game-modal-overlay",this.container.style.display="none",this.container.innerHTML=`
      <div class="game-backdrop" id="gc-backdrop"></div>
      <div class="game-card" id="gc-card">
        <button class="game-close-btn" id="gc-close-btn" aria-label="Tutup Game">&times;</button>

        <div class="game-header">
          <div class="game-title-row">
            <span class="game-icon-title"></span>
            <h3 class="game-title">Tangkap Kelopak Sakura</h3>
          </div>
          <div class="game-stats-row">
            <div class="stat-pill score-pill">
              <span class="stat-label">Skor:</span>
              <span class="stat-val" id="gc-score">0 / 15</span>
            </div>
            <div class="stat-pill lives-pill">
              <span class="stat-val" id="gc-lives">Nyawa: 3</span>
            </div>
          </div>
        </div>

        <div class="game-canvas-wrapper">
          <canvas id="gc-canvas" width="360" height="480"></canvas>

          <!-- Victory Overlay -->
          <div class="game-result-overlay" id="gc-win-overlay" style="display: none;">
            <div class="result-box win-box">
              <div class="trophy-anim"></div>
              <h4>LEVEL CLEAR!</h4>
              <p>Hebat sekali! Kamu berhasil menangkap 15 kelopak sakura!</p>
              <div class="reward-box">
                <span class="reward-icon"></span>
                <span class="reward-name">+1 Kelopak Emas Diberikan ke Hub!</span>
              </div>
              <button class="game-action-btn primary" id="gc-btn-claim">Klaim & Kembali ke Hub</button>
            </div>
          </div>

          <!-- Game Over Overlay -->
          <div class="game-result-overlay" id="gc-lose-overlay" style="display: none;">
            <div class="result-box lose-box">
              <div class="trophy-anim"></div>
              <h4>YAH, BELUM BERUNTUNG</h4>
              <p>Kelopak sakura terbang terbawa angin kencang.</p>
              <button class="game-action-btn secondary" id="gc-btn-restart">Coba Lagi</button>
            </div>
          </div>
        </div>

        <!-- Touch Controls for Mobile -->
        <div class="game-touch-controls">
          <button class="touch-ctrl-btn" id="gc-touch-left">‹ Geser Kiri</button>
          <span class="touch-hint">atau seret keranjang</span>
          <button class="touch-ctrl-btn" id="gc-touch-right">Geser Kanan ›</button>
        </div>
      </div>
    `,document.body.appendChild(this.container),this.cardEl=document.getElementById("gc-card"),this.backdropEl=document.getElementById("gc-backdrop"),this.closeBtn=document.getElementById("gc-close-btn"),this.scoreEl=document.getElementById("gc-score"),this.livesEl=document.getElementById("gc-lives"),this.winOverlay=document.getElementById("gc-win-overlay"),this.loseOverlay=document.getElementById("gc-lose-overlay"),this.claimBtn=document.getElementById("gc-btn-claim"),this.restartBtn=document.getElementById("gc-btn-restart"),this.canvas=document.getElementById("gc-canvas"),this.ctx=this.canvas.getContext("2d"),this.touchLeft=document.getElementById("gc-touch-left"),this.touchRight=document.getElementById("gc-touch-right"),this.bindEvents()}bindEvents(){this._onKeyDown=this._onKeyDown.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._loop=this._loop.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this.closeBtn.addEventListener("click",()=>this.close()),this.backdropEl.addEventListener("click",()=>this.close()),this.claimBtn.addEventListener("click",()=>{this.close()}),this.restartBtn.addEventListener("click",()=>{this.startGame()}),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.canvas.addEventListener("pointerdown",this._onPointerMove),this.canvas.addEventListener("pointermove",this._onPointerMove);const e=(t,n)=>{const i=a=>{a.preventDefault(),n==="left"&&(this.keys.left=!0),n==="right"&&(this.keys.right=!0)},s=a=>{a.preventDefault(),n==="left"&&(this.keys.left=!1),n==="right"&&(this.keys.right=!1)};t.addEventListener("pointerdown",i),t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("pointerleave",s)};e(this.touchLeft,"left"),e(this.touchRight,"right")}_onPointerMove(e){if(!this.isRunning)return;const t=this.canvas.getBoundingClientRect(),n=this.canvasWidth/t.width,s=(e.clientX-t.left)*n;this.player.x=Math.max(this.player.width/2,Math.min(this.canvasWidth-this.player.width/2,s))}_onKeyDown(e){this.isOpen&&(e.key==="ArrowLeft"||e.key==="a"||e.key==="A"?this.keys.left=!0:e.key==="ArrowRight"||e.key==="d"||e.key==="D"?this.keys.right=!0:e.key==="Escape"&&this.close())}_onKeyUp(e){e.key==="ArrowLeft"||e.key==="a"||e.key==="A"?this.keys.left=!1:(e.key==="ArrowRight"||e.key==="d"||e.key==="D")&&(this.keys.right=!1)}open(){this.isOpen=!0,this.container.style.display="flex",we.killTweensOf([this.backdropEl,this.cardEl]),we.fromTo(this.backdropEl,{opacity:0},{opacity:1,duration:.3}),we.fromTo(this.cardEl,{opacity:0,scale:.9,y:20},{opacity:1,scale:1,y:0,duration:.4,ease:"back.out(1.2)"}),this.startGame()}close(){this.isOpen&&(this.isOpen=!1,this.isRunning=!1,this.animId&&(cancelAnimationFrame(this.animId),this.animId=null),we.to(this.backdropEl,{opacity:0,duration:.25}),we.to(this.cardEl,{opacity:0,scale:.94,duration:.25,onComplete:()=>{this.container.style.display="none",this.trigger("closed")}}))}startGame(){this.score=0,this.lives=3,this.items=[],this.particles=[],this.floatingTexts=[],this.spawnTimer=0,this.player.x=this.canvasWidth/2,this.isRunning=!0,this.winOverlay.style.display="none",this.loseOverlay.style.display="none",this.updateHUD(),this.lastTime=performance.now(),this.animId&&cancelAnimationFrame(this.animId),this.animId=requestAnimationFrame(this._loop)}updateHUD(){this.scoreEl.textContent=`${this.score} / ${this.targetScore}`,this.livesEl.textContent=`Nyawa: ${Math.max(0,this.lives)}`}spawnItem(){const e=Math.random();let t="pink",n=150+Math.random()*40,i=12;e<.2?(t="gold",n=190+Math.random()*50,i=14):e<.35&&(t="storm",n=170+Math.random()*40,i=16);const s=24,a=s+Math.random()*(this.canvasWidth-s*2);this.items.push({type:t,x:a,baseX:a,y:-20,speed:n,radius:i,swayOffset:Math.random()*Math.PI*2,swaySpeed:2.5+Math.random()*2,rotation:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*4})}createCatchParticles(e,t,n){for(let i=0;i<12;i++){const s=Math.PI*2*i/12+(Math.random()-.5)*.5,a=60+Math.random()*120;this.particles.push({x:e,y:t,vx:Math.cos(s)*a,vy:Math.sin(s)*a,size:3+Math.random()*4,color:n,alpha:1,life:.45+Math.random()*.25})}}addFloatingText(e,t,n,i){this.floatingTexts.push({text:e,x:t,y:n,color:i,alpha:1,vy:-55})}_loop(e){if(!this.isRunning)return;const t=Math.min((e-this.lastTime)/1e3,.1);this.lastTime=e,this.update(t,e/1e3),this.render(),this.isRunning&&(this.animId=requestAnimationFrame(this._loop))}update(e,t){this.keys.left&&(this.player.x-=this.player.speed*e),this.keys.right&&(this.player.x+=this.player.speed*e),this.player.x=Math.max(this.player.width/2,Math.min(this.canvasWidth-this.player.width/2,this.player.x)),this.spawnTimer+=e,this.spawnTimer>=.72&&(this.spawnTimer=0,this.spawnItem());const n=this.player.y-this.player.height/2,i=this.player.y+this.player.height/2,s=this.player.x-this.player.width/2,a=this.player.x+this.player.width/2;for(let o=this.items.length-1;o>=0;o--){const l=this.items[o];if(l.y+=l.speed*e,l.x=l.baseX+Math.sin(t*l.swaySpeed+l.swayOffset)*22,l.rotation+=l.rotSpeed*e,l.y+l.radius>=n&&l.y-l.radius<=i&&l.x>=s&&l.x<=a){if(l.type==="pink"?(this.score+=1,this.audio.sfxCatchPetal(),this.createCatchParticles(l.x,l.y,"#ff75a0"),this.addFloatingText("+1",l.x,l.y-10,"#ff75a0")):l.type==="gold"?(this.score+=3,this.audio.sfxCatchGolden(),this.createCatchParticles(l.x,l.y,"#ffd13b"),this.addFloatingText("+3",l.x,l.y-10,"#ffe043")):l.type==="storm"&&(this.lives-=1,this.audio.sfxHurt(),this.createCatchParticles(l.x,l.y,"#a491c7"),this.addFloatingText("-1",l.x,l.y-10,"#ff4d88")),this.items.splice(o,1),this.updateHUD(),this.score>=this.targetScore){this.triggerWin();return}if(this.lives<=0){this.triggerLose();return}continue}l.y>this.canvasHeight+30&&this.items.splice(o,1)}for(let o=this.particles.length-1;o>=0;o--){const l=this.particles[o];l.x+=l.vx*e,l.y+=l.vy*e,l.alpha-=e/l.life,l.alpha<=0&&this.particles.splice(o,1)}for(let o=this.floatingTexts.length-1;o>=0;o--){const l=this.floatingTexts[o];l.y+=l.vy*e,l.alpha-=e*1.5,l.alpha<=0&&this.floatingTexts.splice(o,1)}}render(){const e=this.ctx;e.clearRect(0,0,this.canvasWidth,this.canvasHeight);const t=e.createLinearGradient(0,0,0,this.canvasHeight);t.addColorStop(0,"#140c26"),t.addColorStop(.65,"#23153c"),t.addColorStop(1,"#341a4a"),e.fillStyle=t,e.fillRect(0,0,this.canvasWidth,this.canvasHeight),e.fillStyle="rgba(255, 255, 255, 0.25)";for(let s=0;s<18;s++){const a=(Math.sin(s*37)*.5+.5)*this.canvasWidth,o=(Math.cos(s*59)*.5+.5)*(this.canvasHeight-80);e.fillRect(a,o,2,2)}this.items.forEach(s=>{e.save(),e.translate(s.x,s.y),e.rotate(s.rotation),s.type==="pink"?(e.fillStyle="#ff7da3",e.shadowColor="rgba(255, 117, 160, 0.6)",e.shadowBlur=8,e.beginPath(),e.ellipse(0,0,7,13,0,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.ellipse(-2,-3,2,4,0,0,Math.PI*2),e.fill()):s.type==="gold"?(e.fillStyle="#ffd13b",e.shadowColor="rgba(255, 224, 67, 0.9)",e.shadowBlur=14,e.beginPath(),e.ellipse(0,0,8,14,0,0,Math.PI*2),e.fill(),e.fillStyle="#fffef0",e.beginPath(),e.arc(0,0,4,0,Math.PI*2),e.fill()):s.type==="storm"&&(e.fillStyle="#83719c",e.shadowColor="rgba(131, 113, 156, 0.5)",e.shadowBlur=6,e.beginPath(),e.arc(0,0,12,0,Math.PI*2),e.fill(),e.fillStyle="#e8dff5",e.font="bold 12px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("!",0,1)),e.restore()});const n=this.player.x-this.player.width/2,i=this.player.y-this.player.height/2;e.save(),e.fillStyle="#b48356",e.shadowColor="rgba(0, 0, 0, 0.45)",e.shadowBlur=10,e.shadowOffsetY=4,e.beginPath(),e.roundRect(n,i,this.player.width,this.player.height,[4,4,12,12]),e.fill(),e.fillStyle="#ff75a0",e.fillRect(n,i,this.player.width,5),e.fillStyle="#ffe043",e.beginPath(),e.arc(this.player.x,i+2.5,4,0,Math.PI*2),e.fill(),e.restore(),this.particles.forEach(s=>{e.save(),e.globalAlpha=Math.max(0,s.alpha),e.fillStyle=s.color,e.beginPath(),e.arc(s.x,s.y,s.size,0,Math.PI*2),e.fill(),e.restore()}),this.floatingTexts.forEach(s=>{e.save(),e.globalAlpha=Math.max(0,s.alpha),e.font='bold 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.fillStyle=s.color,e.shadowColor="rgba(0, 0, 0, 0.7)",e.shadowBlur=4,e.textAlign="center",e.fillText(s.text,s.x,s.y),e.restore()})}triggerWin(){this.isRunning=!1,this.audio.sfxVictory();try{localStorage.setItem("goldenPetal_tangkapKelopak","true")}catch{}this.winOverlay.style.display="flex",we.fromTo(this.winOverlay.querySelector(".result-box"),{scale:.85,opacity:0},{scale:1,opacity:1,duration:.45,ease:"back.out(1.4)"}),this.trigger("win",[{gameId:"tangkap-kelopak",goldenPetalAwarded:!0}]),console.log("[PetalCatchGame] Victory! 1 Golden Petal awarded to Hub.")}triggerLose(){this.isRunning=!1,this.loseOverlay.style.display="flex",we.fromTo(this.loseOverlay.querySelector(".result-box"),{scale:.85,opacity:0},{scale:1,opacity:1,duration:.4,ease:"back.out(1.2)"})}dispose(){this.isRunning=!1,this.animId&&cancelAnimationFrame(this.animId),window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.canvas=null,this.ctx=null,this.items=[],this.particles=[],super.dispose()}}class jS extends en{constructor(e){super(),this.sceneManager=e,this.isOpen=!1,this.defaultLetter={recipient:"Nur Syarifa Syuhada",title:"Selamat Ulang Tahun, Nur Syarifa Syuhada",body:["Happy birthday ya, Sayaangggg! Panjang umur, sehat-sehat terus, dan semoga apa pun yang lagi kamu usahain ke depannya selalu dipermudah sama Yang Kuasa.","Di hari spesial kamu ini, selain ngucapin selamat, aku cuma mau ngingetin kamu beberapa hal penting. Aku tahu banget akhir-akhir ini pundak kamu lagi berat banget. Kamu harus mondar-mandir ngurusin mama di RS, kurang tidur, kepalamu pusing, ditambah lagi harus nyaksiin dan ngadepin masalah keluarga di rumah yang lagi ribut-ributnya. Aku tahu kamu tipe orang yang kuat dan suka memendam semuanya sendiri biar kelihatan baik-baik aja, tapi please, sadar juga sama kapasitas diri kamu, ya. Nasihat aku, jangan terlalu diporsir semua beban itu sendirian. Kalau emang lagi capek banget, capek fisik atau mental, gak apa-apa banget buat berhenti sebentar, nangis kalau emang pengen nangis, atau sekadar rebahan tanpa mikirin beban orang lain untuk sesaat. Badan sama mental kamu juga butuh disayang, jangan cuma mikirin urusan luar terus sampai diri kamu sendiri yang tumbang.","Semoga di umur yang baru ini, kedamaian batin, kebahagiaan, dan hal-hal baik lebih banyak dateng ke hidup kamu. Capeknya berkurang, senyumnya makin sering. Makasih ya udah bertahan sejauh ini dan udah mau maafin aku kemarin. Ingat, apa pun yang terjadi di luar sana, kalau kamu butuh tempat buat pulang, bersandar, atau sekadar ngeluh tanpa dihakimi, I'm always right here for you. Have a wonderful day, and happy birthday once again!","---divider---","My love, I honestly can't put into words how much you mean to me. You've become such an important part of my life and my heart, and sometimes I wonder how one person can mean so much to another. You make me feel things I never thought were possible, and I wish you could see yourself through my eyes just once so you could understand how special, beautiful, and irreplaceable you truly are to me.","I want you to know that my love for you is real, deep, and genuine. I want to be there for you on your best and worst days, to make you smile when you're sad, comfort you when things get difficult, and remind you that you never have to face everything alone. I want to be someone you can always turn to, someone who listens to you, understands you, and makes you feel safe and loved. I don't want my love to exist only in the words I say, but also in the little things I do every day to show you how much you matter to me.","The thought of losing you hurts because you've become such a meaningful part of my world. You're not just someone I love; you're someone I want to share my happiness with, talk to about my dreams, and make beautiful memories with. I want to experience the little things in life with you, laugh with you over the smallest things, and be beside you through both the good and difficult moments.","I know we won't always be perfect, and there may be days when we misunderstand each other, but I want us to keep communicating, understanding each other, and choosing our love even when things aren't easy. I don't need a perfect relationship; I just want something real, honest, and meaningful with you, something we both continue to care for and protect.","You have a place in my heart that nobody else could ever replace, and I hope you never have to question how important you are to me. Even when I struggle to find the right words, please remember that my feelings for you never become any less real. I love you for who you are, for your beautiful heart, and for all the little things that make you uniquely you. I want to keep learning about you, supporting your dreams, celebrating your happiness, and reminding you how loved you are.","I can't promise that every day will be perfect, but I promise that what I feel for you is genuine, and I want to keep showing you that through my actions, my patience, and my effort. I hope I can make you feel even a little of the love I carry in my heart for you, because you deserve to feel appreciated, valued, and loved without having to question it.","You mean more to me than these words could ever explain, my love, and if I had the chance to choose all over again, my heart would still find its way back to you, every single time."],sender:"Siapa yaa??"},this.init()}init(){this.container=document.createElement("div"),this.container.id="letter-modal",this.container.className="letter-modal-overlay",this.container.style.display="none",this.container.innerHTML=`
      <div class="letter-backdrop" id="letter-backdrop"></div>
      <div class="letter-card" id="letter-card">
        <button class="letter-close-btn" id="letter-close-btn" aria-label="Tutup Surat">&times;</button>

        <div class="letter-seal">
          <span class="seal-icon"></span>
        </div>

        <div class="letter-header">
          <span class="letter-badge">PESAN ULANG TAHUN SPESIAL</span>
          <h2 class="letter-title" id="letter-title">${this.defaultLetter.title}</h2>
          <div class="letter-to">Kepada: <strong>${this.defaultLetter.recipient}</strong></div>
        </div>

        <div class="letter-paper">
          <div class="letter-content" id="letter-content">
            ${this.defaultLetter.body.map(e=>e==="---divider---"?'<div class="letter-divider" aria-hidden="true"><span>❀ ❀ ❀</span></div>':`<p class="letter-paragraph">${e}</p>`).join("")}
          </div>
          <div class="letter-signature">
            <span class="sig-with-love">Dengan segenap cintaku,</span>
            <strong class="sig-name" id="letter-sender">${this.defaultLetter.sender}</strong>
          </div>
        </div>

        <div class="letter-footer">
          <button class="letter-action-btn secondary" id="btn-restart-journey">
            <span>↺ Putar Ulang Cerita</span>
          </button>
          <button class="letter-action-btn primary" id="btn-close-letter">
            <span>Nikmati Sakura Mekar</span>
          </button>
        </div>
      </div>
    `,document.body.appendChild(this.container),this.cardEl=document.getElementById("letter-card"),this.backdropEl=document.getElementById("letter-backdrop"),this.closeBtn=document.getElementById("letter-close-btn"),this.closeActionBtn=document.getElementById("btn-close-letter"),this.restartBtn=document.getElementById("btn-restart-journey"),this.bindEvents()}bindEvents(){this.closeBtn.addEventListener("click",()=>this.close()),this.closeActionBtn.addEventListener("click",()=>this.close()),this.backdropEl.addEventListener("click",()=>this.close()),this.restartBtn.addEventListener("click",()=>{this.close(),this.trigger("restart")}),window.addEventListener("keydown",e=>{this.isOpen&&e.key==="Escape"&&this.close()})}open(){var t,n;this.isOpen=!0,this.container.style.display="flex",zn.setLetterRead(!0),(n=(t=this.sceneManager)==null?void 0:t.world)!=null&&n.sakuraTree&&this.sceneManager.world.sakuraTree.setBloomProgress(1.18,2.5),we.killTweensOf([this.backdropEl,this.cardEl]),we.fromTo(this.backdropEl,{opacity:0},{opacity:1,duration:.35}),we.fromTo(this.cardEl,{opacity:0,scale:.88,y:35},{opacity:1,scale:1,y:0,duration:.55,ease:"back.out(1.2)"});const e=this.cardEl.querySelectorAll(".letter-paragraph, .letter-divider");we.fromTo(e,{opacity:0,y:14},{opacity:1,y:0,duration:.45,stagger:.08,delay:.2,ease:"power2.out"}),this.trigger("opened")}close(){var e,t;this.isOpen&&(this.isOpen=!1,(t=(e=this.sceneManager)==null?void 0:e.world)!=null&&t.sakuraTree&&this.sceneManager.world.sakuraTree.setBloomProgress(1,1.8),we.to(this.backdropEl,{opacity:0,duration:.25}),we.to(this.cardEl,{opacity:0,scale:.94,y:15,duration:.3,ease:"power2.in",onComplete:()=>{this.container.style.display="none",this.trigger("closed")}}))}dispose(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,super.dispose()}}class $S extends en{constructor(e){super(),this.sceneManager=e,this.isOpen=!1,this.keyBuffer="",this.trunkClickCount=0,this.lastTrunkClickTime=0,this.initDOM(),this.initTriggers()}initDOM(){this.container=document.createElement("div"),this.container.id="easter-egg-modal",this.container.className="easter-modal-overlay",this.container.style.display="none",this.container.innerHTML=`
      <div class="easter-backdrop" id="ee-backdrop"></div>
      <div class="easter-card" id="ee-card">
        <button class="easter-close-btn" id="ee-close-btn">&times;</button>
        
        <div class="easter-glow-icon"></div>
        <h3 class="easter-title">PESAN RAHASIA DITEMUKAN!</h3>
        <span class="easter-badge">SECRET EASTER EGG UNLOCKED</span>

        <p class="easter-quote">
          "Terima kasih untuk semua tawa, obrolan santai, dan momen seru yang selalu bikin hari-hari jadi menyenangkan."
        </p>

        <div class="easter-dedication">
          <span>Special Birthday Edition • Nur Syarifa Syuhada</span>
        </div>

        <button class="easter-claim-btn" id="ee-claim-btn">Simpan ke Hub & Lanjut</button>
      </div>
    `,document.body.appendChild(this.container),this.cardEl=document.getElementById("ee-card"),this.backdropEl=document.getElementById("ee-backdrop"),this.closeBtn=document.getElementById("ee-close-btn"),this.claimBtn=document.getElementById("ee-claim-btn"),this.closeBtn.addEventListener("click",()=>this.close()),this.backdropEl.addEventListener("click",()=>this.close()),this.claimBtn.addEventListener("click",()=>this.close())}initTriggers(){var e;window.addEventListener("keydown",t=>{this.isOpen||(this.keyBuffer=(this.keyBuffer+t.key.toLowerCase()).slice(-4),this.keyBuffer==="love"&&(this.open(),this.keyBuffer=""))}),(e=this.sceneManager)!=null&&e.interaction&&this.sceneManager.interaction.on("trunkClick",()=>{this.handleTrunkClick()})}handleTrunkClick(){const e=performance.now();e-this.lastTrunkClickTime<900?(this.trunkClickCount++,this.trunkClickCount>=3&&(this.open(),this.trunkClickCount=0)):this.trunkClickCount=1,this.lastTrunkClickTime=e}open(){var e,t;this.isOpen=!0,this.container.style.display="flex",zn.setEasterEggFound(!0),(t=(e=this.sceneManager)==null?void 0:e.world)!=null&&t.sakuraTree&&this.sceneManager.world.sakuraTree.setBloomProgress(1.8,2),we.killTweensOf([this.backdropEl,this.cardEl]),we.fromTo(this.backdropEl,{opacity:0},{opacity:1,duration:.3}),we.fromTo(this.cardEl,{opacity:0,scale:.8,rotate:-4},{opacity:1,scale:1,rotate:0,duration:.45,ease:"back.out(1.5)"}),this.trigger("unlocked")}close(){this.isOpen&&(this.isOpen=!1,we.to(this.backdropEl,{opacity:0,duration:.25}),we.to(this.cardEl,{opacity:0,scale:.9,duration:.25,onComplete:()=>{this.container.style.display="none",this.trigger("closed")}}))}dispose(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,super.dispose()}}class KS extends en{constructor(e){super(),this.sceneManager=e,this.isOpen=!1,this.isListening=!1,this.audioContext=null,this.analyser=null,this.micStream=null,this.animFrameId=null,this.calibrationFrames=0,this.ambientBaseline=.05,this.blowProgress=0,this.isExtinguished=!1,this.previousBGMVolume=null,this.sensitivity="low",this.init()}init(){this.overlay=document.createElement("div"),this.overlay.className="candle-modal-overlay",this.overlay.id="candle-modal-overlay",this.overlay.innerHTML=`
      <div class="candle-blow-card" id="candle-blow-card" role="dialog" aria-modal="true" aria-labelledby="candle-title">
        <!-- Close Button -->
        <button class="candle-close-btn" id="candle-close-btn" aria-label="Tutup Dialog">&times;</button>

        <!-- Header Icon & Status -->
        <div class="candle-card-icon-wrap">
          <span class="candle-card-flame" id="candle-card-flame"></span>
          <span class="candle-sparkle-burst" id="candle-sparkle-burst"></span>
        </div>

        <h2 class="candle-title" id="candle-title">Tiup Lilin Ulang Tahun</h2>
        <p class="candle-recipient">Nur Syarifa Syuhada</p>

        <p class="candle-instruction" id="candle-instruction">
          Dekatkan mulutmu ke mikrofon, lalu <strong>tiup dengan hembusan nafas kuat</strong> sampai meter penuh!
        </p>

        <!-- Live Breath / Mic Level Meter -->
        <div class="candle-meter-wrap" id="candle-meter-wrap">
          <div class="candle-meter-header">
            <span class="candle-meter-label" id="candle-meter-label">Menyiapkan mikrofon...</span>
            <span class="candle-meter-val" id="candle-meter-val">0%</span>
          </div>
          <div class="candle-meter-track">
            <div class="candle-meter-bar" id="candle-meter-bar"></div>
          </div>
        </div>

        <!-- Mic Sensitivity Selector -->
        <div class="candle-sens-wrap" id="candle-sens-wrap">
          <span class="candle-sens-label">Sensitivitas:</span>
          <div class="candle-sens-btns">
            <button type="button" class="candle-sens-pill active" data-sens="low" title="Paling kebal dari suara bicara & bising">Rendah (Kuat)</button>
            <button type="button" class="candle-sens-pill" data-sens="med" title="Sensitivitas normal sedang">Sedang</button>
            <button type="button" class="candle-sens-pill" data-sens="high" title="Untuk mikrofon yang pelan / jauh">Tinggi</button>
          </div>
        </div>

        <!-- Success Message (Revealed on Blow) -->
        <div class="candle-success-box" id="candle-success-box">
          <div class="candle-success-badge">Lilin Berhasil Ditiup!</div>
          <p class="candle-success-text">
            Selamat ulang tahun, <strong>Nur Syarifa Syuhada</strong>! Semoga doa dan harapan terbaikmu dikabulkan, senantiasa diberikan kesehatan, ketenangan hati, dan kebahagiaan abadi.
          </p>
        </div>

        <!-- Action Controls -->
        <div class="candle-actions">
          <button class="candle-action-btn mic-btn" id="btn-toggle-mic">
            <span class="btn-text" id="mic-btn-text">Matikan Mikrofon</span>
          </button>

          <button class="candle-action-btn blow-btn" id="btn-manual-blow">
            <span class="btn-text">Tiup Manual (Tanpa Mic)</span>
          </button>

          <button class="candle-action-btn relight-btn" id="btn-relight-candle" style="display: none;">
            <span class="btn-text">Nyalakan Lilin Lagi</span>
          </button>
        </div>
      </div>
    `,document.body.appendChild(this.overlay),this.card=document.getElementById("candle-blow-card"),this.closeBtn=document.getElementById("candle-close-btn"),this.flameIcon=document.getElementById("candle-card-flame"),this.instructionEl=document.getElementById("candle-instruction"),this.meterWrap=document.getElementById("candle-meter-wrap"),this.meterBar=document.getElementById("candle-meter-bar"),this.meterVal=document.getElementById("candle-meter-val"),this.meterLabel=document.getElementById("candle-meter-label"),this.sensWrap=document.getElementById("candle-sens-wrap"),this.sensPills=Array.from(this.card.querySelectorAll(".candle-sens-pill")),this.successBox=document.getElementById("candle-success-box"),this.manualBlowBtn=document.getElementById("btn-manual-blow"),this.toggleMicBtn=document.getElementById("btn-toggle-mic"),this.micBtnText=document.getElementById("mic-btn-text"),this.relightBtn=document.getElementById("btn-relight-candle"),this.bindEvents()}bindEvents(){this.closeBtn.addEventListener("click",()=>this.close()),this.overlay.addEventListener("click",e=>{e.target===this.overlay&&this.close()}),this.manualBlowBtn.addEventListener("click",()=>{this.simulateManualBlow()}),this.sensPills.forEach(e=>{e.addEventListener("click",()=>{if(this.sensPills.forEach(t=>t.classList.remove("active")),e.classList.add("active"),this.sensitivity=e.dataset.sens||"low",this.blowProgress=0,this.meterBar&&(this.meterBar.style.width="0%"),this.meterVal&&(this.meterVal.textContent="0%"),this.meterLabel&&this.isListening){const t={low:"Rendah (Kuat)",med:"Sedang",high:"Tinggi"};this.meterLabel.textContent=`Sensitivitas ${t[this.sensitivity]} aktif — Silakan tiup!`}})}),this.toggleMicBtn.addEventListener("click",()=>{this.isListening?(this.stopListening(),this.micBtnText&&(this.micBtnText.textContent="Nyalakan Mikrofon"),this.meterLabel&&(this.meterLabel.textContent="Mikrofon nonaktif — Gunakan tombol manual")):this.startListening()}),this.relightBtn.addEventListener("click",()=>{this.relight()})}open(){var t,n;if(this.isOpen)return;this.isOpen=!0;const e=(n=(t=this.sceneManager)==null?void 0:t.world)==null?void 0:n.japaneseGarden;e&&!e.candleLit?(this.isExtinguished=!0,this.showExtinguishedUI()):(this.isExtinguished=!1,this.blowProgress=0,this.showLitUI(),this.startListening()),this.overlay.classList.add("active"),we.killTweensOf(this.card),we.fromTo(this.card,{opacity:0,scale:.92,y:30},{opacity:1,scale:1,y:0,duration:.45,ease:"back.out(1.2)"})}close(){this.isOpen&&(this.isOpen=!1,this.stopListening(),this.restoreBGMVolume(),this.trigger("close"),we.to(this.card,{opacity:0,scale:.94,y:20,duration:.25,ease:"power2.in",onComplete:()=>{this.overlay.classList.remove("active")}}))}async startListening(){if(!(this.isListening||this.isExtinguished))try{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){this.meterLabel&&(this.meterLabel.textContent="Mic tidak didukung browser ini"),this.toggleMicBtn&&(this.toggleMicBtn.style.display="none");return}this.micStream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!1,autoGainControl:!0}});const e=window.AudioContext||window.webkitAudioContext;this.audioContext=new e,this.audioContext.state==="suspended"&&await this.audioContext.resume();const t=this.audioContext.createMediaStreamSource(this.micStream);this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=512,this.analyser.smoothingTimeConstant=.25,t.connect(this.analyser),this.isListening=!0,this.calibrationFrames=0,this.ambientBaseline=.05,this.blowProgress=0,this.duckBGMVolume(),this.micBtnText&&(this.micBtnText.textContent="Matikan Mikrofon"),this.meterLabel&&(this.meterLabel.textContent="Menyiapkan mikrofon..."),this.meterBar&&(this.meterBar.style.width="0%"),this.meterVal&&(this.meterVal.textContent="0%"),this.processAudio()}catch(e){console.warn("[CandleBlow] Mic access error:",e),this.meterLabel&&(this.meterLabel.textContent="Izin mikrofon belum aktif — Gunakan tiup manual"),this.micBtnText&&(this.micBtnText.textContent="Nyalakan Mikrofon")}}stopListening(){this.isListening=!1,this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null),this.micStream&&(this.micStream.getTracks().forEach(e=>e.stop()),this.micStream=null),this.audioContext&&this.audioContext.state!=="closed"&&(this.audioContext.close().catch(()=>{}),this.audioContext=null),this.restoreBGMVolume(),this.meterBar&&(this.meterBar.style.width="0%"),this.meterVal&&(this.meterVal.textContent="0%")}duckBGMVolume(){var t;const e=(t=this.sceneManager)==null?void 0:t.bgm;e&&e.player&&typeof e.player.getVolume=="function"&&(this.previousBGMVolume===null&&(this.previousBGMVolume=e.player.getVolume()),e.player.setVolume(Math.min(18,this.previousBGMVolume)))}restoreBGMVolume(){var t;const e=(t=this.sceneManager)==null?void 0:t.bgm;e&&e.player&&typeof e.player.setVolume=="function"&&this.previousBGMVolume!==null&&(e.player.setVolume(this.previousBGMVolume),this.previousBGMVolume=null)}processAudio(){var A,T;if(!this.isListening||!this.analyser||this.isExtinguished)return;const e=this.analyser.frequencyBinCount,t=new Uint8Array(e),n=new Uint8Array(this.analyser.fftSize);this.analyser.getByteFrequencyData(t),this.analyser.getByteTimeDomainData(n);let i=0;for(let C=0;C<n.length;C++){const M=(n[C]-128)/128;i+=M*M}const s=Math.sqrt(i/n.length);let a=0;const o=Math.min(4,e);for(let C=1;C<o;C++)a+=t[C];const l=o>1?a/(o-1)/255:0;let c=0;const h=Math.min(25,e);for(let C=5;C<h;C++)c+=t[C];const u=c/(h-5)/255;if(this.calibrationFrames<35){this.calibrationFrames++;const C=Math.max(.02,l*.7+s*.3);this.ambientBaseline=this.ambientBaseline*.92+C*.08,this.meterLabel&&(this.meterLabel.textContent="Menyiapkan mikrofon..."),this.animFrameId=requestAnimationFrame(()=>this.processAudio());return}const f=u>l*.65||u>.12&&l<.35?.3:1,g=Math.max(0,s-this.ambientBaseline),m=(Math.max(0,l-this.ambientBaseline)*.78+g*.22)*f,p={low:{threshold:.3,rate:.016},med:{threshold:.22,rate:.024},high:{threshold:.15,rate:.034}},y=p[this.sensitivity]||p.low,x=y.threshold,v=(T=(A=this.sceneManager)==null?void 0:A.world)==null?void 0:T.japaneseGarden;if(m>x){const C=y.rate+(m-x)*.08;if(this.blowProgress=Math.min(1,this.blowProgress+C),this.meterLabel&&(this.meterLabel.textContent="💨 Sedang meniup... Tahan hembusan nafas!"),this.flameIcon&&!this.isExtinguished){const M=(Math.random()-.5)*45;this.flameIcon.style.transform=`scale(${1+m*1.1}) rotate(${M}deg)`}v!=null&&v.flameMesh&&v.candleLit&&(v.flameMesh.rotation.z=(Math.random()-.5)*.7,v.flameMesh.scale.x=1+m*1.6,v.flameMesh.scale.y=Math.max(.35,1-m*.75))}else this.blowProgress=Math.max(0,this.blowProgress-.035),this.blowProgress<=.04&&this.meterLabel&&(this.meterLabel.textContent="Mikrofon aktif — Dekatkan dan tiup sekuat lilin!"),this.flameIcon&&!this.isExtinguished&&(this.flameIcon.style.transform="scale(1) rotate(0deg)"),v!=null&&v.flameMesh&&v.candleLit&&(v.flameMesh.rotation.z=0,v.flameMesh.scale.set(1,1,1));const S=Math.min(100,Math.round(this.blowProgress*100));if(this.meterBar&&(this.meterBar.style.width=`${S}%`),this.meterVal&&(this.meterVal.textContent=`${S}%`),this.blowProgress>=1){this.extinguish();return}this.animFrameId=requestAnimationFrame(()=>this.processAudio())}simulateManualBlow(){var n,i;if(this.isExtinguished)return;this.stopListening(),this.manualBlowBtn&&(this.manualBlowBtn.disabled=!0),this.meterLabel&&(this.meterLabel.textContent="💨 Meniup lilin...");const e=(i=(n=this.sceneManager)==null?void 0:n.world)==null?void 0:i.japaneseGarden,t={progress:this.blowProgress||0};we.to(t,{progress:1,duration:.9,ease:"power1.inOut",onUpdate:()=>{const s=Math.round(t.progress*100);if(this.meterBar&&(this.meterBar.style.width=`${s}%`),this.meterVal&&(this.meterVal.textContent=`${s}%`),this.flameIcon){const a=(Math.random()-.5)*40;this.flameIcon.style.transform=`scale(${1+t.progress*.6}) rotate(${a}deg)`}e!=null&&e.flameMesh&&e.candleLit&&(e.flameMesh.rotation.z=(Math.random()-.5)*.55,e.flameMesh.scale.set(1.4,.5,1.4))},onComplete:()=>{this.manualBlowBtn&&(this.manualBlowBtn.disabled=!1),this.extinguish()}})}extinguish(){var n,i,s,a,o;if(this.isExtinguished)return;this.isExtinguished=!0,this.stopListening();const e=(i=(n=this.sceneManager)==null?void 0:n.world)==null?void 0:i.japaneseGarden;e&&e.extinguishCandle();const t=(a=(s=this.sceneManager)==null?void 0:s.world)==null?void 0:a.sakuraTree;t&&typeof t.burstPetals=="function"&&t.burstPetals(),this.playCelebrationChime(),this.showExtinguishedUI(),(o=this.sceneManager)!=null&&o.sceneOverlay&&this.sceneManager.sceneOverlay.showToast("Lilin padam! Selamat Ulang Tahun, Nur Syarifa Syuhada!","")}relight(){var t,n;this.isExtinguished=!1,this.blowProgress=0;const e=(n=(t=this.sceneManager)==null?void 0:t.world)==null?void 0:n.japaneseGarden;e&&e.lightCandle(),this.showLitUI(),this.startListening()}showLitUI(){this.flameIcon&&(this.flameIcon.textContent="",this.flameIcon.classList.remove("extinguished"),this.flameIcon.style.transform="scale(1)"),this.instructionEl&&(this.instructionEl.style.display="block",this.instructionEl.innerHTML="Dekatkan mulutmu ke mikrofon, lalu <strong>tiup dengan hembusan nafas kuat</strong> sampai meter penuh!"),this.meterWrap&&(this.meterWrap.style.display="block"),this.meterBar&&(this.meterBar.style.width="0%"),this.meterVal&&(this.meterVal.textContent="0%"),this.meterLabel&&(this.meterLabel.textContent="Menyiapkan mikrofon..."),this.sensWrap&&(this.sensWrap.style.display="flex"),this.successBox&&this.successBox.classList.remove("visible"),this.manualBlowBtn&&(this.manualBlowBtn.style.display="inline-flex"),this.toggleMicBtn&&(this.toggleMicBtn.style.display="inline-flex"),this.relightBtn&&(this.relightBtn.style.display="none")}showExtinguishedUI(){this.flameIcon&&(this.flameIcon.textContent="",this.flameIcon.classList.add("extinguished"),we.fromTo(this.flameIcon,{scale:1.6,rotate:20},{scale:1,rotate:0,duration:.5,ease:"elastic.out(1.2, 0.4)"})),this.instructionEl&&(this.instructionEl.style.display="none"),this.meterWrap&&(this.meterWrap.style.display="none"),this.sensWrap&&(this.sensWrap.style.display="none"),this.successBox&&this.successBox.classList.add("visible"),this.manualBlowBtn&&(this.manualBlowBtn.style.display="none"),this.toggleMicBtn&&(this.toggleMicBtn.style.display="none"),this.relightBtn&&(this.relightBtn.style.display="inline-flex")}playCelebrationChime(){try{const e=window.AudioContext||window.webkitAudioContext,t=new e,n=t.currentTime;[523.25,659.25,783.99,987.77,1046.5,1318.51].forEach((s,a)=>{const o=t.createOscillator(),l=t.createGain();o.type="sine",o.frequency.setValueAtTime(s,n+a*.08),l.gain.setValueAtTime(1e-4,n+a*.08),l.gain.exponentialRampToValueAtTime(.18,n+a*.08+.02),l.gain.exponentialRampToValueAtTime(1e-4,n+a*.08+1.2),o.connect(l),l.connect(t.destination),o.start(n+a*.08),o.stop(n+a*.08+1.25)})}catch(e){console.warn("[CandleBlow] Synthesized chime error:",e)}}dispose(){this.stopListening(),this.restoreBGMVolume(),this.overlay&&this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay),super.dispose()}}class ZS extends en{constructor(e="Q49pnA4jsp8"){super(),this.videoId=e,this.player=null,this.isReady=!1,this.isPlaying=!1,this.hasUnlocked=!1,this.init()}init(){this.container=document.createElement("div"),this.container.id="yt-bgm-container",this.container.style.cssText="position:fixed; width:200px; height:200px; right:0; bottom:0; opacity:0.001; pointer-events:none; z-index:-999; overflow:hidden;";const e=document.createElement("div");e.id="yt-bgm-iframe-target",this.container.appendChild(e),document.body.appendChild(this.container),this.synthCtx=null,this.isSynthPlaying=!1,this.synthTimer=null,this.synthStep=0,this.setupGestureUnlock(),this.loadYouTubeAPI()}loadYouTubeAPI(){if(window.YT&&window.YT.Player){this.initPlayer();return}let e=document.querySelector('script[src*="youtube.com/iframe_api"]');e||(e=document.createElement("script"),e.src="https://www.youtube.com/iframe_api",e.async=!0,document.head.appendChild(e));const t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{typeof t=="function"&&t(),this.initPlayer()}}initPlayer(){if(!(this.player||!window.YT||!window.YT.Player))try{this.player=new window.YT.Player("yt-bgm-iframe-target",{height:"100",width:"100",videoId:this.videoId,playerVars:{autoplay:1,controls:0,disablekb:1,enablejsapi:1,fs:0,iv_load_policy:3,loop:1,playlist:this.videoId,modestbranding:1,playsinline:1,rel:0},events:{onReady:e=>{this.isReady=!0,this.player.setVolume(55),this.tryAutoPlay()},onStateChange:e=>{e.data===0?this.player&&typeof this.player.seekTo=="function"&&(this.player.seekTo(0),this.player.playVideo()):e.data===1?(this.isPlaying=!0,this.stopSynthAmbient(),this.trigger("stateChange",[!0])):e.data===2&&(this.isPlaying=!1,this.trigger("stateChange",[!1]))},onError:e=>{console.warn("[BGMController] YouTube Player error, using ambient synth fallback:",e),this.isPlaying&&this.startSynthAmbient()}}})}catch(e){console.warn("[BGMController] Failed to initialize YT Player, using fallback:",e)}}setupGestureUnlock(){const e=()=>{this.hasUnlocked||(this.hasUnlocked=!0,this.player&&typeof this.player.playVideo=="function"&&!this.isPlaying?this.player.playVideo():!this.isPlaying&&this.isSynthPlaying&&this.initWebAudioFallback(),window.removeEventListener("click",e,!0),window.removeEventListener("touchstart",e,!0),window.removeEventListener("pointerdown",e,!0))};window.addEventListener("click",e,!0),window.addEventListener("touchstart",e,!0),window.addEventListener("pointerdown",e,!0)}tryAutoPlay(){if(!(!this.player||typeof this.player.playVideo!="function"))try{this.player.playVideo()}catch{console.log("[BGMController] Autoplay pending user gesture")}}initWebAudioFallback(){if(!this.synthCtx)try{const e=window.AudioContext||window.webkitAudioContext;this.synthCtx=new e}catch(e){console.warn("[BGMController] Web Audio fallback unavailable:",e)}}startSynthAmbient(){if(this.isSynthPlaying||(this.initWebAudioFallback(),!this.synthCtx))return;this.synthCtx.state==="suspended"&&this.synthCtx.resume().catch(()=>{}),this.isSynthPlaying=!0,this.synthStep=0;const e=[220,246.94,261.63,329.63,349.23,440,493.88,523.25],t=[0,2,3,4,3,2,5,4,2,0,1,3,4,6,5,3],n=()=>{if(!this.isSynthPlaying||!this.synthCtx)return;const i=e[t[this.synthStep%t.length]];this.synthStep++;const s=this.synthCtx.currentTime,a=this.synthCtx.createOscillator(),o=this.synthCtx.createGain();a.type="sine",a.frequency.setValueAtTime(i,s),o.gain.setValueAtTime(1e-4,s),o.gain.exponentialRampToValueAtTime(.045,s+.08),o.gain.exponentialRampToValueAtTime(1e-4,s+1.4),a.connect(o),o.connect(this.synthCtx.destination),a.start(s),a.stop(s+1.5),this.synthTimer=setTimeout(n,420)};n()}stopSynthAmbient(){this.isSynthPlaying=!1,this.synthTimer&&(clearTimeout(this.synthTimer),this.synthTimer=null)}toggle(){return this.isPlaying?(this.pause(),!1):(this.play(),!0)}play(){this.isPlaying=!0;let e=!1;if(this.player&&typeof this.player.playVideo=="function"&&this.isReady)try{this.player.playVideo(),e=!0}catch(t){console.warn("[BGMController] YT play failed, using fallback:",t)}e||this.startSynthAmbient(),this.trigger("stateChange",[!0])}pause(){if(this.isPlaying=!1,this.player&&typeof this.player.pauseVideo=="function")try{this.player.pauseVideo()}catch{}this.stopSynthAmbient(),this.trigger("stateChange",[!1])}dispose(){if(this.stopSynthAmbient(),this.synthCtx&&this.synthCtx.state!=="closed"&&(this.synthCtx.close().catch(()=>{}),this.synthCtx=null),this.player&&typeof this.player.destroy=="function")try{this.player.destroy()}catch{}this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),super.dispose()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class ni{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),ni.nextNameID=ni.nextNameID||0,this.$name.id=`lil-gui-name-${++ni.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class JS extends ni{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Pc(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const QS={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Pc,toHexString:Pc},oa={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},ew={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const n=oa.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return oa.toHexString(i)}},tw={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=oa.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return oa.toHexString(i)}},nw=[QS,oa,ew,tw];function iw(r){return nw.find(e=>e.match(r))}class sw extends ni{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=iw(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Pc(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class bl extends ni{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class rw extends ni{constructor(e,t,n,i,s,a){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+y),this.$input.value=this.getValue())},i=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},s=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let a=!1,o,l,c,h,u;const d=5,f=y=>{o=y.clientX,l=c=y.clientY,a=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=y=>{if(a){const x=y.clientX-o,v=y.clientY-l;Math.abs(v)>d?(y.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&_()}if(!a){const x=y.clientY-c;u-=x*this._step*this._arrowKeyMultiplier(y),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=y.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,y,x,v,S)=>(p-y)/(x-y)*(S-v)+v,t=p=>{const y=this.$slider.getBoundingClientRect();let x=e(p,y.left,y.right,this._min,this._max);this._snapClampSetValue(x)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let a=!1,o,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),a=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(o=p.touches[0].clientX,l=p.touches[0].clientY,a=!0):c(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(a){const y=p.touches[0].clientX-o,x=p.touches[0].clientY-l;Math.abs(y)>Math.abs(x)?c(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const x=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class aw extends ni{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class ow extends ni{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var lw=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function cw(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Rd=!1;class wh{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Rd&&o&&(cw(lw),Rd=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a}add(e,t,n,i,s){if(Object(n)===n)return new aw(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new rw(this,e,t,n,i,s);case"boolean":return new JS(this,e,t);case"string":return new ow(this,e,t);case"function":return new bl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new sw(this,e,t,n)}addFolder(e){const t=new wh({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof bl||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof bl)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Pd={"Gentle Spring":{swaySpeed:1.2,swayAngle:.016,floatSpeed:.9,floatAmplitude:.025,foliageWindSpeed:2.2,foliageWindStrength:.012,lanternSwingSpeed:2,lanternSwingAngle:.05},"Deep Breathing":{swaySpeed:.6,swayAngle:.01,floatSpeed:.7,floatAmplitude:.045,foliageWindSpeed:1.4,foliageWindStrength:.008,lanternSwingSpeed:1.2,lanternSwingAngle:.03},"Windy Hanami":{swaySpeed:2.4,swayAngle:.032,floatSpeed:1.4,floatAmplitude:.04,foliageWindSpeed:4.5,foliageWindStrength:.028,lanternSwingSpeed:3.8,lanternSwingAngle:.12},"Calm Stillness":{swaySpeed:0,swayAngle:0,floatSpeed:0,floatAmplitude:0,foliageWindSpeed:0,foliageWindStrength:0,lanternSwingSpeed:0,lanternSwingAngle:0}};class hw{constructor(e){this.sceneManager=e,this.gui=null,this.badgeEl=null,this.controllers={},this._onHashChange=this._onHashChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),window.addEventListener("hashchange",this._onHashChange),window.addEventListener("keydown",this._onKeyDown),this.isHashDebug()?this.initGUI():console.log("[DebugGUI] Tips: Tambahkan #debug di URL (atau tekan Shift + D) untuk membuka Debug Menu tweaks & idle animation.")}isHashDebug(){return window.location.hash.toLowerCase().includes("debug")}_onHashChange(){this.isHashDebug()?this.gui||this.initGUI():this.gui&&this.destroyGUI()}_onKeyDown(e){e.shiftKey&&(e.key==="D"||e.key==="d")&&(this.isHashDebug()?window.location.hash="":window.location.hash="#debug")}initGUI(){var c,h,u,d,f,g,_,m;if(this.gui)return;this.gui=new wh({title:"Sakura & Picnic Debug (#debug)",width:330,closeFolders:!1});const e=this.gui.domElement;e.style.zIndex="99999",e.style.position="fixed",e.style.top="64px",e.style.right="16px",e.style.maxHeight="calc(100vh - 80px)",e.style.overflowY="auto",e.style.borderRadius="12px",e.style.boxShadow="0 8px 24px rgba(230, 77, 120, 0.15)",this.createBadge(),(c=this.sceneManager)!=null&&c.sceneOverlay&&this.sceneManager.sceneOverlay.showToast("Mode Debug Aktif (#debug)! Menu tweaks siap digunakan.","");const t=(u=(h=this.sceneManager)==null?void 0:h.world)==null?void 0:u.sakuraTree,n=this.gui.addFolder("Model Transform & Tweaks");if(t){const p=()=>{t.applyTransform(),t.saveTweaks()};n.add(t.transform,"x",-10,10,.05).name("Position X").onChange(p),n.add(t.transform,"y",-5,5,.05).name("Position Y").onChange(p),n.add(t.transform,"z",-10,10,.05).name("Position Z").onChange(p),n.add(t.transform,"rotX",-Math.PI,Math.PI,.02).name("Rotation X (rad)").onChange(p),n.add(t.transform,"rotY",-Math.PI,Math.PI,.02).name("Rotation Y (rad)").onChange(p),n.add(t.transform,"rotZ",-Math.PI,Math.PI,.02).name("Rotation Z (rad)").onChange(p),n.add(t.transform,"scale",.1,2.5,.01).name("Scale").onChange(p);const y={showGlassDome:t.glassDomeMesh?t.glassDomeMesh.visible:!1,showPicnicItems:!0,showBaseMound:!0};n.add(y,"showGlassDome").name("Show Glass Bubble").onChange(v=>{t.glassDomeMesh&&(t.glassDomeMesh.visible=v)}),n.add(y,"showPicnicItems").name("Show Picnic Props").onChange(v=>{t.picnicPropMeshes.forEach(S=>{S.visible=v})}),n.add(y,"showBaseMound").name("Show Base Mound").onChange(v=>{t.baseMoundMeshes.forEach(S=>{S.visible=v})});const x={copyCode:()=>{var A,T;const v={transform:{...t.transform},idleParams:{...t.idleParams}},S=JSON.stringify(v,null,2);console.log(`[DebugGUI] Current Tweaks:
`,S),(A=navigator.clipboard)==null||A.writeText(S),(T=this.sceneManager)!=null&&T.sceneOverlay&&this.sceneManager.sceneOverlay.showToast("Pengaturan disalin ke Clipboard & Console!","")},resetDefaults:()=>{var v;t.resetTweaks(),this.gui.controllersRecursive().forEach(S=>S.updateDisplay()),(v=this.sceneManager)!=null&&v.sceneOverlay&&this.sceneManager.sceneOverlay.showToast("Transform & Animasi direset ke awal!","")}};n.add(x,"copyCode").name("Copy Tweaks (JSON)"),n.add(x,"resetDefaults").name("Reset Transform")}const i=this.gui.addFolder("Idle Animation");t&&(i.add(t.idleParams,"enabled").name("Enable Idle Motion").onChange(()=>t.saveTweaks()),i.add(t.idleParams,"preset",Object.keys(Pd)).name("Motion Preset").onChange(p=>{const y=Pd[p];y&&(Object.assign(t.idleParams,y),i.controllersRecursive().forEach(x=>x.updateDisplay()),t.saveTweaks())}),this.controllers.swaySpeed=i.add(t.idleParams,"swaySpeed",0,5,.1).name("Tree Sway Speed").onChange(()=>t.saveTweaks()),this.controllers.swayAngle=i.add(t.idleParams,"swayAngle",0,.1,.002).name("Tree Sway Angle").onChange(()=>t.saveTweaks()),this.controllers.floatSpeed=i.add(t.idleParams,"floatSpeed",0,5,.1).name("Float Speed").onChange(()=>t.saveTweaks()),this.controllers.floatAmp=i.add(t.idleParams,"floatAmplitude",0,.15,.005).name("Float Amplitude").onChange(()=>t.saveTweaks()),this.controllers.foliageSpeed=i.add(t.idleParams,"foliageWindSpeed",0,8,.1).name("Foliage Wind Speed").onChange(()=>t.saveTweaks()),this.controllers.foliageStrength=i.add(t.idleParams,"foliageWindStrength",0,.06,.002).name("Foliage Strength").onChange(()=>t.saveTweaks()),this.controllers.lanternSpeed=i.add(t.idleParams,"lanternSwingSpeed",0,8,.1).name("Lantern Swing Speed").onChange(()=>t.saveTweaks()),this.controllers.lanternAngle=i.add(t.idleParams,"lanternSwingAngle",0,.25,.01).name("Lantern Swing Angle").onChange(()=>t.saveTweaks()));const s=this.gui.addFolder("Bloom & Blossom Glow");if(t){const p={glowTarget:1,roughnessMult:1,envMapIntensity:1.25,triggerCelebration:()=>{t.setBloomProgress(1.8,1.8),t.burstPetals()},triggerPetals:()=>{t.burstPetals()}};s.add(p,"glowTarget",.5,3,.05).name("Bloom Level").onChange(y=>{t.setBloomProgress(y,.6)}),s.add(p,"roughnessMult",.2,2,.05).name("Roughness Mult").onChange(y=>{t.blossomMaterials.forEach(x=>{x.roughness!==void 0&&(x.roughness=dn.clamp(x.roughness*y,.1,1))})}),s.add(p,"envMapIntensity",0,3,.1).name("EnvMap Intensity").onChange(y=>{t.blossomMaterials.forEach(x=>{x.envMapIntensity!==void 0&&(x.envMapIntensity=y)})}),s.add(p,"triggerCelebration").name("Trigger Bloom"),s.add(p,"triggerPetals").name("Burst Petals")}const a=(f=(d=this.sceneManager)==null?void 0:d.world)==null?void 0:f.environment;if(a){const p=this.gui.addFolder("Scene Lighting");a.sunLight&&p.add(a.sunLight,"intensity",0,5,.1).name("Sun Intensity"),a.ambientLight&&p.add(a.ambientLight,"intensity",0,3,.1).name("Ambient Intensity"),p.close()}const o=(_=(g=this.sceneManager)==null?void 0:g.world)==null?void 0:_.japaneseGarden;if(o){const p=this.gui.addFolder("Garden Props (Canopy & Table)");o.parasolGroup&&(p.add(o.parasolGroup.position,"x",0,8,.05).name("Canopy X"),p.add(o.parasolGroup.position,"z",-5,5,.05).name("Canopy Z")),o.tableGroup&&(p.add(o.tableGroup.position,"x",0,8,.05).name("Table X"),p.add(o.tableGroup.position,"z",-5,5,.05).name("Table Z")),p.close()}const l=(m=this.sceneManager)==null?void 0:m.camera;if(l&&l.track){const p=this.gui.addFolder("Camera Flight Track"),y={progress:l.track.progress||0,fov:l.instance?l.instance.fov:45};p.add(y,"progress",0,1,.005).name("Track Progress").onChange(x=>{l.track.transitionTo(x,.1)}),p.add(y,"fov",25,80,1).name("Camera FOV").onChange(x=>{l.instance&&(l.instance.fov=x,l.instance.updateProjectionMatrix())}),p.close()}}createBadge(){if(this.badgeEl)return;this.badgeEl=document.createElement("div"),this.badgeEl.className="debug-mode-badge",this.badgeEl.innerHTML=`
      <div style="
        position: fixed;
        bottom: 16px;
        right: 16px;
        background: #ffffff;
        color: #d81b60;
        border: 1.5px solid #ffd1dc;
        padding: 6px 14px;
        border-radius: 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 11px;
        font-weight: 700;
        z-index: 99998;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 4px 16px rgba(230, 77, 120, 0.15);
        user-select: none;
      ">
        <span>DEBUG ACTIVE (#debug)</span>
        <button id="btn-close-debug" style="
          background: #ff4d88;
          border: none;
          color: #ffffff;
          border-radius: 10px;
          padding: 3px 8px;
          cursor: pointer;
          font-size: 10px;
          font-weight: 600;
          margin-left: 4px;
        ">&times; Tutup</button>
      </div>
    `,document.body.appendChild(this.badgeEl);const e=this.badgeEl.querySelector("#btn-close-debug");e&&e.addEventListener("click",()=>{window.location.hash=""})}removeBadge(){this.badgeEl&&this.badgeEl.parentNode&&this.badgeEl.parentNode.removeChild(this.badgeEl),this.badgeEl=null}destroyGUI(){this.gui&&(this.gui.destroy(),this.gui=null),this.removeBadge(),this.controllers={}}dispose(){window.removeEventListener("hashchange",this._onHashChange),window.removeEventListener("keydown",this._onKeyDown),this.destroyGUI()}}const us=class us{constructor(e){if(us.instance)return us.instance;if(us.instance=this,this.canvas=e||document.querySelector("canvas.webgl"),!this.canvas)throw new Error("[SceneManager] Canvas element .webgl not found in DOM.");this._onResize=this._onResize.bind(this),this.init()}init(){this.scene=new cg,this.scene.background=new me(8574463),this.sizes=new uM,this.camera=new Ib(this),this.renderer=new Db(this),this.postProcessing=new Jb(this),this.assetLoader=new Ob,this.loadingScreen=new Fb(this.assetLoader),this.world=new VS(this),this.perfHUD=new Bb(this),this.sceneOverlay=new Gb(this),this.interaction=new HS(this),this.storyPanel=new WS(this),this.miniTimeline=new XS(this),this.petalCatchGame=new qS,this.letterModal=new jS(this),this.easterEggModal=new $S(this),this.candleBlowModal=new KS(this),this.candleBlowModal.on("close",()=>{this.camera&&this.camera.track&&this.camera.track.exitFocus(1.2)}),this.bgm=new ZS("Q49pnA4jsp8"),this.sceneOverlay.on("toggleBGM",()=>{const e=this.bgm.toggle();this.sceneOverlay.updateMusicButton(e),this.sceneOverlay.showToast(e?"Musik diputar (YouTube)":"Musik dijeda","")}),this.bgm.on("stateChange",e=>{this.sceneOverlay.updateMusicButton(e)}),this.sceneOverlay.on("playGame",()=>{this.petalCatchGame.open()}),this.sceneOverlay.on("openLetter",()=>{this.letterModal.open()}),this.sceneOverlay.on("openCake",()=>{this.openCandleExperience()}),this.petalCatchGame.on("win",()=>{this.sceneOverlay.awardGoldenPetal()}),this.letterModal.on("restart",()=>{var e;this.camera&&this.camera.track&&this.camera.track.transitionTo(0,2),(e=this.world)!=null&&e.sakuraTree&&this.world.sakuraTree.setBloomProgress(1,1.5)}),this.initPolaroidInteractions(),this.debugGUI=new hw(this),this.loop=new Nb(this),this.sizes.on("resize",this._onResize),this.loop.start(),this.assetLoader.loadInitialAssets(),console.log("[SceneManager] 3D Polaroids, Raycasting, Camera Zoom, Story Panel & Timeline ready.")}initPolaroidInteractions(){if(!this.world||!this.world.polaroids)return;const e=t=>{const n=[...this.world.polaroids.interactiveMeshes];this.world.sakuraTree&&this.world.sakuraTree.barkMesh&&n.push(this.world.sakuraTree.barkMesh),this.world.japaneseGarden&&this.world.japaneseGarden.interactiveObjects&&n.push(...this.world.japaneseGarden.interactiveObjects),this.interaction.setClickables(n),this.storyPanel.setMemories(t),this.miniTimeline.setMemories(t)};this.world.polaroids.memories&&this.world.polaroids.memories.length>0?e(this.world.polaroids.memories):this.world.polaroids.on("loaded",t=>e(t)),this.interaction.on("hover",(t,n)=>{this.world.polaroids.setHovered(t,n)}),this.interaction.on("birthdaySignClick",()=>{var t;(t=this.world)!=null&&t.japaneseGarden&&this.world.japaneseGarden.triggerCakeCelebration(),this.sceneOverlay&&this.sceneOverlay.showToast("Selamat Ulang Tahun, Nur Syarifa Syuhada! Semoga panjang umur, sehat selalu, dan bahagia selamanya!",""),this.camera&&this.camera.track&&(this.camera.track.focusOnTarget(new P(-2.45,1.35,3.8),new P(-2.55,1.05,2.15),1.4),setTimeout(()=>{this.camera.track.exitFocus(1.5)},4500))}),this.interaction.on("cakeClick",()=>{this.openCandleExperience()}),this.interaction.on("emaClick",()=>{this.sceneOverlay&&this.sceneOverlay.showToast('Papan Doa Ema: "Semoga Nur Syarifa Syuhada senantiasa dipenuhi cinta dan kebahagiaan abadi."',""),this.camera&&this.camera.track&&(this.camera.track.focusOnTarget(new P(.95,.95,3.1),new P(.95,.85,2.2),1.3),setTimeout(()=>{this.camera.track.exitFocus(1.5)},4e3))}),this.interaction.on("benchClick",()=>{this.sceneOverlay&&this.sceneOverlay.showToast("Duduk santai di bangku Hanami di bawah rindangnya bunga sakura...",""),this.camera&&this.camera.track&&(this.camera.track.focusOnTarget(new P(2.25,1.4,2.9),new P(2.1,.4,1.05),1.4),setTimeout(()=>{this.camera.track.exitFocus(1.5)},4200))}),this.interaction.on("centerBenchClick",()=>{var t,n,i;this.sceneOverlay&&this.sceneOverlay.showToast("Bangku Kenangan Nur Syarifa Syuhada & Dill — Selamanya Bersamamu",""),(t=this.world)!=null&&t.sakuraTree&&((i=(n=this.world.sakuraTree).burstPetals)==null||i.call(n)),this.camera&&this.camera.track&&(this.camera.track.focusOnTarget(new P(0,1.25,3.4),new P(0,.48,1.55),1.4),setTimeout(()=>{this.camera.track.exitFocus(1.5)},4500))}),this.interaction.on("select",(t,n)=>{this.openMemory(t,n)}),this.miniTimeline.on("select",(t,n)=>{const i=this.world.polaroids.polaroids[n];i&&this.openMemory(i,t)}),this.storyPanel.on("navigate",(t,n)=>{const i=this.world.polaroids.polaroids[n];i&&this.openMemory(i,t)}),this.storyPanel.on("closed",()=>{this.camera&&this.camera.track&&this.camera.track.exitFocus(),this.miniTimeline.clearActive(),this.world.polaroids.setActive(null)})}openMemory(e,t){var c;if(!e)return;this.world.polaroids.setActive(e);const n=new P;e.getWorldPosition(n);const i=new Ei;e.getWorldQuaternion(i);const s=new P(0,0,1).applyQuaternion(i).normalize(),a=n.clone().addScaledVector(s,2).add(new P(0,.05,0)),o=n.clone().add(new P(0,.05,0));this.camera&&this.camera.track&&this.camera.track.focusOnTarget(a,o,1.4);const l=((c=e.userData)==null?void 0:c.index)??0;this.miniTimeline.setActive(l),this.storyPanel.open(t,l)}openCandleExperience(){var e,t;if(this.camera&&this.camera.track){const n=new P;(t=(e=this.world)==null?void 0:e.japaneseGarden)!=null&&t.cakeGroup?this.world.japaneseGarden.cakeGroup.getWorldPosition(n):n.set(2.15,.4,1.65);const i=new P(n.x,n.y+.32,n.z),s=new P(n.x,n.y+.58,n.z+1.15);this.camera.track.focusOnTarget(s,i,1.25)}this.candleBlowModal&&setTimeout(()=>{this.candleBlowModal.open()},300)}_onResize(){this.resize()}resize(){this.camera&&this.camera.resize(),this.renderer&&this.renderer.resize(),this.postProcessing&&this.postProcessing.resize()}update(e){this.world&&this.world.update(e),this.camera&&this.camera.update(e),this.perfHUD&&this.perfHUD.update()}render(){this.postProcessing?this.postProcessing.render():this.renderer&&this.renderer.render()}dispose(){console.log("[SceneManager] Disposing scene resources..."),this.loop&&(this.loop.dispose(),this.loop=null),this.sizes&&(this.sizes.off("resize"),this.sizes.dispose(),this.sizes=null),this.letterModal&&(this.letterModal.dispose(),this.letterModal=null),this.candleBlowModal&&(this.candleBlowModal.dispose(),this.candleBlowModal=null),this.bgm&&(this.bgm.dispose(),this.bgm=null),this.easterEggModal&&(this.easterEggModal.dispose(),this.easterEggModal=null),this.petalCatchGame&&(this.petalCatchGame.dispose(),this.petalCatchGame=null),this.interaction&&(this.interaction.dispose(),this.interaction=null),this.storyPanel&&(this.storyPanel.dispose(),this.storyPanel=null),this.miniTimeline&&(this.miniTimeline.dispose(),this.miniTimeline=null),this.sceneOverlay&&(this.sceneOverlay.dispose(),this.sceneOverlay=null),this.perfHUD&&(this.perfHUD.dispose(),this.perfHUD=null),this.debugGUI&&(this.debugGUI.dispose(),this.debugGUI=null),this.postProcessing&&(this.postProcessing.dispose(),this.postProcessing=null),this.world&&(this.world.dispose(),this.world=null),this.camera&&(this.camera.dispose(),this.camera=null),this.scene&&(this.scene.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()))}),this.scene.clear(),this.scene=null),this.assetLoader&&(this.assetLoader.dispose(),this.assetLoader=null),this.loadingScreen&&(this.loadingScreen.dispose(),this.loadingScreen=null),this.renderer&&(this.renderer.dispose(),this.renderer=null),us.instance=null,console.log("[SceneManager] All resources disposed.")}};Ih(us,"instance",null);let Lc=us,Ld=null;function Id(){const r=document.querySelector("canvas.webgl");if(!r){console.error("[main] Canvas .webgl not found");return}Ld=new Lc(r),window.sceneManager=Ld}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Id):Id();
//# sourceMappingURL=index-8uvsqgn9.js.map
