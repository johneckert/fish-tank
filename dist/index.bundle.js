(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var i=t.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var n=i.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"images/OrangeFish.png",i=class{constructor(t,e,i,n,r,s,h){this.context=t,this.x=e,this.y=i,this.img=n,this.frameWidth=r,this.frameHeight=s,this.frameIndex=0,this.speed=h,this.count=0,this.scale=1}animate(){this.context.drawImage(this.img,this.frameIndex*this.frameWidth,0,this.frameWidth,this.frameHeight,this.x,this.y,this.frameWidth*this.scale,this.frameHeight*this.scale),this.count++,this.count>this.speed&&(this.frameIndex++,this.count=0),this.frameIndex>5&&(this.frameIndex=0)}},n=document.getElementById("canvas"),r=n.getContext("2d"),s=n.width=window.innerWidth,h=n.height=window.innerHeight;n.style.marginTop=window.innerHeight/2-h/2+"px";const a=new Image;a.src=e;const c=new i(r,100,100,a,100,100,35),o=new i(r,300,300,a,100,100,15);!function t(){r.clearRect(0,0,s,h),c.animate(),o.animate(),requestAnimationFrame(t)}()})();