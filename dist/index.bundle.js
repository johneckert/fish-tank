(()=>{"use strict";var t={};function e(){}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var i=t.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var n=i.getElementsByTagName("script");if(n.length)for(var s=n.length-1;s>-1&&!e;)e=n[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),e.create=function(t,e){for(var i=new Array,n=arguments.length,s=2;s<n;s++)i[s-2]=arguments[s];return function(){var n=[].concat(arguments,i);e.apply(t,n)}},Tween=function(t,e,i,n,s,r,o){this.init(t,e,i,n,s,r,o)};var i=Tween.prototype;i.obj=new Object,i.prop="",i.func=function(t,e,i,n){return i*t/n+e},i.begin=0,i.change=0,i.prevTime=0,i.prevPos=0,i.looping=!1,i._duration=0,i._time=0,i._pos=0,i._position=0,i._startTime=0,i._finish=0,i.name="",i.suffixe="",i._listeners=new Array,i.setTime=function(t){this.prevTime=this._time,t>this.getDuration()?this.looping?(this.rewind(t-this._duration),this.update(),this.broadcastMessage("onMotionLooped",{target:this,type:"onMotionLooped"})):(this._time=this._duration,this.update(),this.stop(),this.broadcastMessage("onMotionFinished",{target:this,type:"onMotionFinished"})):t<0?(this.rewind(),this.update()):(this._time=t,this.update())},i.getTime=function(){return this._time},i.setDuration=function(t){this._duration=null==t||t<=0?1e5:t},i.getDuration=function(){return this._duration},i.setPosition=function(t){this.prevPos=this._pos;var e=""!=this.suffixe?this.suffixe:"";this.obj[this.prop]=Math.round(t)+e,this._pos=t,this.broadcastMessage("onMotionChanged",{target:this,type:"onMotionChanged"})},i.getPosition=function(t){return null==t&&(t=this._time),this.func(t,this.begin,this.change,this._duration)},i.setFinish=function(t){this.change=t-this.begin},i.geFinish=function(){return this.begin+this.change},i.init=function(t,e,i,n,s,r,o){arguments.length&&(this._listeners=new Array,this.addListener(this),o&&(this.suffixe=o),this.obj=t,this.prop=e,this.begin=n,this._pos=n,this.setDuration(r),null!=i&&""!=i&&(this.func=i),this.setFinish(s))},i.start=function(){this.rewind(),this.startEnterFrame(),this.broadcastMessage("onMotionStarted",{target:this,type:"onMotionStarted"})},i.rewind=function(t){this.stop(),this._time=null==t?0:t,this.fixTime(),this.update()},i.fforward=function(){this._time=this._duration,this.fixTime(),this.update()},i.update=function(){this.setPosition(this.getPosition(this._time))},i.startEnterFrame=function(){this.stopEnterFrame(),this.isPlaying=!0,this.onEnterFrame()},i.onEnterFrame=function(){this.isPlaying&&(this.nextFrame(),setTimeout(e.create(this,this.onEnterFrame),0))},i.nextFrame=function(){this.setTime((this.getTimer()-this._startTime)/1e3)},i.stop=function(){this.stopEnterFrame(),this.broadcastMessage("onMotionStopped",{target:this,type:"onMotionStopped"})},i.stopEnterFrame=function(){this.isPlaying=!1},i.continueTo=function(t,e){this.begin=this._pos,this.setFinish(t),null!=this._duration&&this.setDuration(e),this.start()},i.resume=function(){this.fixTime(),this.startEnterFrame(),this.broadcastMessage("onMotionResumed",{target:this,type:"onMotionResumed"})},i.yoyo=function(){this.continueTo(this.begin,this._time)},i.addListener=function(t){return this.removeListener(t),this._listeners.push(t)},i.removeListener=function(t){for(var e=this._listeners,i=e.length;i--;)if(e[i]==t)return e.splice(i,1),!0;return!1},i.broadcastMessage=function(){for(var t=new Array,e=0;e<arguments.length;e++)t.push(arguments[e]);var i=t.shift(),n=this._listeners,s=n.length;for(e=0;e<s;e++)n[e][i]&&n[e][i].apply(n[e],t)},i.fixTime=function(){this._startTime=this.getTimer()-1e3*this._time},i.getTimer=function(){return(new Date).getTime()-this._time},Tween.backEaseIn=function(t,e,i,n,s,r){if(null==o)var o=1.70158;return i*(t/=n)*t*((o+1)*t-o)+e},Tween.backEaseOut=function(t,e,i,n,s,r){if(null==o)var o=1.70158;return i*((t=t/n-1)*t*((o+1)*t+o)+1)+e},Tween.backEaseInOut=function(t,e,i,n,s,r){if(null==o)var o=1.70158;return(t/=n/2)<1?i/2*(t*t*((1+(o*=1.525))*t-o))+e:i/2*((t-=2)*t*((1+(o*=1.525))*t+o)+2)+e},Tween.elasticEaseIn=function(t,e,i,n,s,r){if(0==t)return e;if(1==(t/=n))return e+i;if(r||(r=.3*n),!s||s<Math.abs(i)){s=i;var o=r/4}else o=r/(2*Math.PI)*Math.asin(i/s);return-s*Math.pow(2,10*(t-=1))*Math.sin((t*n-o)*(2*Math.PI)/r)+e},Tween.elasticEaseOut=function(t,e,i,n,s,r){if(0==t)return e;if(1==(t/=n))return e+i;if(r||(r=.3*n),!s||s<Math.abs(i)){s=i;var o=r/4}else o=r/(2*Math.PI)*Math.asin(i/s);return s*Math.pow(2,-10*t)*Math.sin((t*n-o)*(2*Math.PI)/r)+i+e},Tween.elasticEaseInOut=function(t,e,i,n,s,r){if(0==t)return e;if(2==(t/=n/2))return e+i;if(r||(r=n*(.3*1.5)),!s||s<Math.abs(i)){s=i;var o=r/4}else o=r/(2*Math.PI)*Math.asin(i/s);return t<1?s*Math.pow(2,10*(t-=1))*Math.sin((t*n-o)*(2*Math.PI)/r)*-.5+e:s*Math.pow(2,-10*(t-=1))*Math.sin((t*n-o)*(2*Math.PI)/r)*.5+i+e},Tween.bounceEaseOut=function(t,e,i,n){return(t/=n)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},Tween.bounceEaseIn=function(t,e,i,n){return i-Tween.bounceEaseOut(n-t,0,i,n)+e},Tween.bounceEaseInOut=function(t,e,i,n){return t<n/2?.5*Tween.bounceEaseIn(2*t,0,i,n)+e:.5*Tween.bounceEaseOut(2*t-n,0,i,n)+.5*i+e},Tween.strongEaseInOut=function(t,e,i,n){return i*(t/=n)*t*t*t*t+e},Tween.regularEaseIn=function(t,e,i,n){return i*(t/=n)*t+e},Tween.regularEaseOut=function(t,e,i,n){return-i*(t/=n)*(t-2)+e},Tween.regularEaseInOut=function(t,e,i,n){return(t/=n/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},Tween.strongEaseIn=function(t,e,i,n){return i*(t/=n)*t*t*t*t+e},Tween.strongEaseOut=function(t,e,i,n){return i*((t=t/n-1)*t*t*t*t+1)+e},Tween.strongEaseInOut=function(t,e,i,n){return(t/=n/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e};const n=i,s=class{constructor(t,e,i,n,s,r,o){this.context=t,this.x=e,this.y=i,this.img=n,this.frameWidth=s,this.frameHeight=r,this.frameIndex=0,this.speed=o,this.count=0,this.scale=1}animate(){this.context.drawImage(this.img,this.frameIndex*this.frameWidth,0,this.frameWidth,this.frameHeight,this.x,this.y,this.frameWidth*this.scale,this.frameHeight*this.scale),this.count++,this.count>this.speed&&(this.frameIndex++,this.count=0),this.frameIndex>5&&(this.frameIndex=0)}move(){this.x>this.context.canvas.width&&(this.x=-this.frameWidth),this.x+=5}},r=t.p+"images/orangeFish.png",o=class extends s{constructor(t,e,i,n){const s=new Image;s.src=r,super(t,e,i,s,100,100,n)}move(){if(console.log(n),this.count%this.speed==0){this.x>this.context.canvas.width&&(this.x=-this.frameWidth);var t=new n.Tween(this.x,n.Tween.strongEaseInOut,this.x,x+5,1e3/60),e=new n.Tween(this.y,n.Tween.strongEaseInOut,this.y,Math.sin(this.x)*this.context.canvas.height/10,1e3/60);t.start(),e.start()}}},a=t.p+"images/crab.png",h=document.getElementById("canvas"),u=h.getContext("2d"),c=h.width=window.innerWidth,f=h.height=window.innerHeight;h.style.marginTop=window.innerHeight/2-f/2+"px";const m=new o(u,100,100,30),g=new o(u,300,300,20),d=new class extends s{constructor(t,e,i,n){const s=new Image;s.src=a,super(t,e,i,s,100,100,n),this.direction=1}move(){this.x>window.innerWidth&&(this.direction=-1),this.x<0&&(this.direction=1),this.x+=5*this.direction}}(u,1,f-100,40);!function t(){u.clearRect(0,0,c,f),m.animate(),m.move(),g.animate(),g.move(),d.animate(),d.move(),requestAnimationFrame(t)}()})();