(()=>{var t={84:t=>{void 0===Date.now&&(Date.now=function(){return(new Date).valueOf()});var n,e,i=i||(n=[],{REVISION:"8",getAll:function(){return n},removeAll:function(){n=[]},add:function(t){n.push(t)},remove:function(t){var e=n.indexOf(t);-1!==e&&n.splice(e,1)},update:function(t){if(0===n.length)return!1;var e=0,i=n.length;for(t=void 0!==t?t:Date.now();e<i;)n[e].update(t)?e++:(n.splice(e,1),i--);return!0}});i.Tween=function(t){var n=t,e={},r={},s=1e3,o=0,a=null,h=i.Easing.Linear.None,u=i.Interpolation.Linear,c=[],f=null,l=!1,p=null,d=null;this.to=function(t,n){return void 0!==n&&(s=n),r=t,this},this.start=function(t){for(var s in i.add(this),l=!1,a=void 0!==t?t:Date.now(),a+=o,r)if(null!==n[s]&&s in n){if(r[s]instanceof Array){if(0===r[s].length)continue;r[s]=[n[s]].concat(r[s])}e[s]=n[s]}return this},this.stop=function(){return i.remove(this),this},this.delay=function(t){return o=t,this},this.easing=function(t){return h=t,this},this.interpolation=function(t){return u=t,this},this.chain=function(){return c=arguments,this},this.onStart=function(t){return f=t,this},this.onUpdate=function(t){return p=t,this},this.onComplete=function(t){return d=t,this},this.update=function(t){if(t<a)return!0;!1===l&&(null!==f&&f.call(n),l=!0);var i=(t-a)/s,o=h(i=i>1?1:i);for(var m in e){var g=e[m],w=r[m];n[m]=w instanceof Array?u(w,o):g+(w-g)*o}if(null!==p&&p.call(n,o),1==i){null!==d&&d.call(n);for(var v=0,x=c.length;v<x;v++)c[v].start(t);return!1}return!0}},i.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){var n,e=.1;return 0===t?0:1===t?1:(!e||e<1?(e=1,n=.1):n=.4*Math.asin(1/e)/(2*Math.PI),-e*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/.4))},Out:function(t){var n,e=.1;return 0===t?0:1===t?1:(!e||e<1?(e=1,n=.1):n=.4*Math.asin(1/e)/(2*Math.PI),e*Math.pow(2,-10*t)*Math.sin((t-n)*(2*Math.PI)/.4)+1)},InOut:function(t){var n,e=.1;return 0===t?0:1===t?1:(!e||e<1?(e=1,n=.1):n=.4*Math.asin(1/e)/(2*Math.PI),(t*=2)<1?e*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/.4)*-.5:e*Math.pow(2,-10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/.4)*.5+1)}},Back:{In:function(t){var n=1.70158;return t*t*((n+1)*t-n)},Out:function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1},InOut:function(t){var n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)}},Bounce:{In:function(t){return 1-i.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*i.Easing.Bounce.In(2*t):.5*i.Easing.Bounce.Out(2*t-1)+.5}}},i.Interpolation={Linear:function(t,n){var e=t.length-1,r=e*n,s=Math.floor(r),o=i.Interpolation.Utils.Linear;return n<0?o(t[0],t[1],r):n>1?o(t[e],t[e-1],e-r):o(t[s],t[s+1>e?e:s+1],r-s)},Bezier:function(t,n){var e,r=0,s=t.length-1,o=Math.pow,a=i.Interpolation.Utils.Bernstein;for(e=0;e<=s;e++)r+=o(1-n,s-e)*o(n,e)*t[e]*a(s,e);return r},CatmullRom:function(t,n){var e=t.length-1,r=e*n,s=Math.floor(r),o=i.Interpolation.Utils.CatmullRom;return t[0]===t[e]?(n<0&&(s=Math.floor(r=e*(1+n))),o(t[(s-1+e)%e],t[s],t[(s+1)%e],t[(s+2)%e],r-s)):n<0?t[0]-(o(t[0],t[0],t[1],t[1],-r)-t[0]):n>1?t[e]-(o(t[e],t[e],t[e-1],t[e-1],r-e)-t[e]):o(t[s?s-1:0],t[s],t[e<s+1?e:s+1],t[e<s+2?e:s+2],r-s)},Utils:{Linear:function(t,n,e){return(n-t)*e+t},Bernstein:function(t,n){var e=i.Interpolation.Utils.Factorial;return e(t)/e(n)/e(t-n)},Factorial:(e=[1],function(t){var n,i=1;if(e[t])return e[t];for(n=t;n>1;n--)i*=n;return e[t]=i}),CatmullRom:function(t,n,e,i,r){var s=.5*(e-t),o=.5*(i-n),a=r*r;return(2*n-2*e+s+o)*(r*a)+(-3*n+3*e-2*s-o)*a+s*r+n}}},t.exports=i}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var s=n[i]={exports:{}};return t[i](s,s.exports,e),s.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!t;)t=i[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{"use strict";var t=e(84),n=e.n(t);const i=class{constructor(t,n,e,i,r,s,o){this.context=t,this.x=n,this.y=e,this.img=i,this.frameWidth=r,this.frameHeight=s,this.frameIndex=0,this.endFrame=5,this.speed=o,this.count=0,this.scale=1}animate(){this.context.drawImage(this.img,this.frameIndex*this.frameWidth,0,this.frameWidth,this.frameHeight,this.x,this.y,this.frameWidth*this.scale,this.frameHeight*this.scale),this.count++,this.count>this.speed&&(this.frameIndex++,this.count=0),this.frameIndex>this.endFrame&&(this.frameIndex=0)}},r=e.p+"images/orangeFish.png",s=e.p+"images/greenFish.png",o=e.p+"images/crab.png",a=e.p+"images/greenSeaweed.png",h=class extends i{constructor(t,n,e,i){const r=new Image;r.src=a,super(t,n,e,r,100,100,i),this.endFrame=0}},u=e.p+"images/blueSeaweed.png",c=class extends i{constructor(t,n,e,i){const r=new Image;r.src=u,super(t,n,e,r,100,100,i),this.endFrame=0}},f=e.p+"images/redSeaweed.png",l=class extends i{constructor(t,n,e,i){const r=new Image;r.src=f,super(t,n,e,r,100,100,i),this.endFrame=0}},p=document.getElementById("canvas"),d=p.getContext("2d"),m=p.width=window.innerWidth,g=p.height=window.innerHeight;p.style.marginTop=window.innerHeight/2-g/2+"px";const w=new class extends i{constructor(t,n,e,i){const s=new Image;s.src=r,super(t,n,e,s,100,100,i),this.pos,this.tween,this.tick=this.speed}move(){if(this.tick===this.speed){this.x>this.context.canvas.width&&(this.x=-this.frameWidth),this.pos={x:this.x,y:this.y};let t=this.pos.y+Math.sin(this.pos.x)*this.speed;t>this.context.canvas.height-this.frameHeight&&(t=this.context.canvas.height-this.frameHeight-10),t<0&&(t=10),this.tween=new(n().Tween)(this.pos).to({x:this.pos.x+this.speed,y:t},1e3/60*this.speed),this.tween.onUpdate((()=>{this.x=this.pos.x,this.y=this.pos.y})),this.tween.start(),this.tick=0}else this.tick++}}(d,m-200,300,30),v=new class extends i{constructor(t,n,e,i){const r=new Image;r.src=s,super(t,n,e,r,100,100,i),this.pos,this.tween,this.tick=this.speed}move(){if(this.tick===this.speed){this.x>this.context.canvas.width&&(this.x=-this.frameWidth),this.pos={x:this.x,y:this.y};let t=20*Math.random(),e=this.pos.y+Math.cos(this.pos.x)*(this.speed*t);e>this.context.canvas.height-this.frameHeight&&(e=this.context.canvas.height-this.frameHeight-10),e<0&&(e=10),this.tween=new(n().Tween)(this.pos).to({x:this.pos.x+this.speed,y:e},1e3/60*this.speed),this.tween.onUpdate((()=>{this.x=this.pos.x,this.y=this.pos.y})),this.tween.start(),this.tick=0}else this.tick++}}(d,1,500,100),x=new class extends i{constructor(t,n,e,i){const r=new Image;r.src=o,super(t,n,e,r,100,100,i),this.direction=1,this.pos,this.tween,this.tick=0}move(){this.tick>this.speed?(Math.floor(100*Math.random())<5&&(this.direction*=-1),this.x>this.context.canvas.width&&(this.direction=-1),this.x<0&&(this.direction=1),this.pos={x:this.x,y:this.y},this.tween=new(n().Tween)(this.pos).to({x:this.pos.x+5*this.direction},1e3/60*this.speed),this.tween.onUpdate((()=>{this.x=this.pos.x})),this.tween.start(),this.tick=0):this.tick++}}(d,1,g-100,40),I=[];for(let t=0;t<m;t+=110)I.push(new h(d,t,g-100,0));const M=[];for(let t=50;t<m;t+=75)M.push(new c(d,t,g-100,0));const y=[];for(let t=Math.floor(24*Math.random());t<m-15;t+=m/Math.floor(6*Math.random()+3))y.push(new l(d,t,g-100,0));!function t(){d.clearRect(0,0,m,g),I.map((t=>t.animate())),M.map((t=>t.animate())),y.map((t=>t.animate())),w.animate(),w.move(),v.animate(),v.move(),x.animate(),x.move(),requestAnimationFrame(t),n().update()}(),function(){const t=document.getElementById("clock"),n=document.getElementById("date");function e(){const e=new Date;t.innerHTML=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),n.innerHTML=e.toLocaleDateString([],{weekday:"long",month:"long",day:"numeric"})}e();const i=setInterval(e,500);window.addEventListener("beforeunload",(function(t){clearInterval(i)}))}()})()})();