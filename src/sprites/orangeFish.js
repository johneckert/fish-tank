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
    this.pos;
    this.tween;
    this.tick = 0;
  }

  move() {
    if (this.tick > this.speed) {
      if (this.x > this.context.canvas.width) {
        this.x = -this.frameWidth;
      }

      this.pos = { x: this.x, y: this.y };
      let yVal = this.pos.y + Math.sin(this.pos.x) * (this.context.canvas.height / this.speed);

      this.tween = new TWEEN.Tween(this.pos).to({ x: this.pos.x + 20, y: yVal }, 1000 / 60 * this.speed);

      this.tween.onUpdate(() => {
        this.x = this.pos.x;
        this.y = this.pos.y;
      });
      this.tween.start();
      this.tick = 0;
    } else {
      this.tick++;
    }
  }
}

export default OrangeFish;