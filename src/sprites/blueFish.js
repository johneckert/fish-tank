import TWEEN from 'tween';
import Sprite from "./sprite";
import BlueFishPNG from '../spriteMaps/blueFish.png';


class BlueFish extends Sprite {
  constructor(context, posX, posY, speed) {
    const blueFishSpriteSheet = new Image();
    const frameWidth = 100;
    const frameHeight = 100;
    blueFishSpriteSheet.src = BlueFishPNG;
    
    super(context, posX, posY, blueFishSpriteSheet, frameWidth, frameHeight, speed);
    this.direction = -1;
    this.pos;
    this.tween;
    this.tick = this.speed;
  }

  move() {
    if (this.tick === this.speed) {
      if (this.x < -1 * this.frameWidth) {
        this.x = this.context.canvas.width + this.frameWidth;
      }

      this.pos = { x: this.x, y: this.y };
      let random = Math.random() * 20 ;
      let yVal = this.pos.y + Math.cos(this.pos.x) * (this.speed * random) * this.direction;
      if (yVal > this.context.canvas.height - this.frameHeight) {
        yVal = this.context.canvas.height - this.frameHeight - 10;
      }
      if (yVal < 0) {
        yVal = 10;
      }

      this.tween = new TWEEN.Tween(this.pos).to({ x: this.pos.x + this.speed * this.direction, y: yVal }, 1000 / 60 * this.speed);
      this.tween.easing(TWEEN.Easing.Quadratic.Out);

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

export default BlueFish;