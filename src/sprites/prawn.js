import TWEEN from 'tween';
import Sprite from "./sprite";
import prawnPNG from '../spriteMaps/prawn.png';


class Prawn extends Sprite {
  constructor(context, posX, posY, speed) {
    const prawnSpriteSheet = new Image();
    const frameWidth = 100;
    const frameHeight = 100;
    prawnSpriteSheet.src = prawnPNG;
    
    super(context, posX, posY, prawnSpriteSheet, frameWidth, frameHeight, speed);
    this.direction = -1;
    this.tween;
    this.tick = this.speed;
    this.endFrame = 1;
  }

  move() {
    if (this.tick === this.speed) {
      const pos = { x: this.x, y: this.y };
      let yVal = Math.random() * (this.context.canvas.height - this.frameHeight) + this.frameHeight;
      if (yVal > this.context.canvas.height - 100) {
        yVal = this.context.canvas.height - 100;
      }
      const xVal = Math.random() * (this.context.canvas.width - this.frameWidth) + this.frameWidth;
      this.tween = new TWEEN.Tween(pos).to({ x: xVal, y: yVal }, 1000 / 60 * this.speed);
      this.tween.easing(TWEEN.Easing.Quadratic.Out);

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

export default Prawn;