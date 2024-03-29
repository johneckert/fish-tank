import TWEEN from 'tween';
import Sprite from "./sprite";
import OrangeFishPNG from '../spriteMaps/orangeFish.png';


class OrangeFish extends Sprite {
  constructor(context, posX, posY, speed) {
    const orangeFishSpriteSheet = new Image();
    const frameWidth = 100;
    const frameHeight = 100;
    orangeFishSpriteSheet.src = OrangeFishPNG;
    
    super(context, posX, posY, orangeFishSpriteSheet, frameWidth, frameHeight, speed);
    this.tween;
    this.tick = this.speed;
  }

  move() {
    if (this.tick === this.speed) {
      if (this.x > this.context.canvas.width) {
        this.x = -this.frameWidth;
      }

      const pos = { x: this.x, y: this.y };
      let yVal = Math.sin(pos.x / 100) * (this.speed * 10);
      if (yVal > this.context.canvas.height - this.frameHeight) {
        yVal = this.context.canvas.height - this.frameHeight - 10;
      }
      if (yVal < 0) {
        yVal = 10;
      }
      
      this.tween = new TWEEN.Tween(pos).to({ x: pos.x + this.speed, y: yVal }, 1000 / 60 * this.speed);

      this.tween.onUpdate(() => {
        this.x = pos.x;
        this.y = pos.y;
      });
      this.tween.start();
      this.tick = 0;
    } else {
      this.tick++;
    }
  }
}

export default OrangeFish;