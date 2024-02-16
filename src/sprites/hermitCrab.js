import TWEEN from 'tween';
import Sprite from "./sprite";
import hermitCrabPNG from '../spriteMaps/hermitCrab.png';

class HermitCrab extends Sprite {
  constructor(context, posX, posY, speed) {
    const hermitCrabSpriteSheet = new Image();
    const frameWidth = 100;
    const frameHeight = 100;
    const frames = 4;
    hermitCrabSpriteSheet.src = hermitCrabPNG;
    
    super(context, posX, posY, hermitCrabSpriteSheet, frameWidth, frameHeight, speed, frames);
    this.tween;
    this.tick = 0;
  }

  move() {
    if (this.tick > this.speed) {
      if (this.x > this.context.canvas.width + this.frameWidth) {
        this.x = -this.frameWidth;
      }
      const pos = { x: this.x, y: this.y };
      this.tween = new TWEEN.Tween(pos).to({ x: pos.x + 5 }, 1000 / 60 * this.speed);

      this.tween.onUpdate(() => {
        this.x = pos.x;
      });
      this.tween.start();
      this.tick = 0;
    } else {
      this.tick++;
    }
  }
}

export default HermitCrab;