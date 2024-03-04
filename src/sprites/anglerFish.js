import TWEEN from 'tween';
import Sprite from "./sprite";
import AnglerFishPNG from '../spriteMaps/anglerFish.png';


class AnglerFish extends Sprite {
  constructor(context, posX, posY, speed) {
    const anglerFishSpriteSheet = new Image();
    const frameWidth = 200;
    const frameHeight = 200;
    const frames = 4;
    const modY = posY > context.canvas.height - frameHeight ? posY - frameHeight : posY;
    anglerFishSpriteSheet.src = AnglerFishPNG;
    
    super(context, posX, modY, anglerFishSpriteSheet, frameWidth, frameHeight, speed, frames);
    this.tween;
    this.tick = this.speed;
  }

  move() {
    if (this.tick === this.speed) {
      if (this.x > this.context.canvas.width + this.frameWidth) {
        this.x = -this.frameWidth;
      }

      const pos = { x: this.x, y: this.y };
      this.tween = new TWEEN.Tween(pos).to({ x: pos.x + this.speed, y: pos.y }, 1000 / 60 * this.speed);
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

export default AnglerFish;