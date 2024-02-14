import TWEEN from 'tween';
import Sprite from "./sprite";
import jellyFishPNG from '../spriteMaps/jellyFish.png';


class JellyFish extends Sprite {
  constructor(context, posX, posY, speed) {
    const jellyFishSpriteSheet = new Image();
    const frameWidth = 100;
    const frameHeight = 100;
    jellyFishSpriteSheet.src = jellyFishPNG;
    
    super(context, posX, posY, jellyFishSpriteSheet, frameWidth, frameHeight, speed);
    this.direction = 1;
    this.tween;
    this.tick = this.speed;
    this.endFrame = 5;
  }

  move() {
    const yDir = Math.random() > 0.5 ? this.direction = 1 : this.direction = -1;
    if (this.x > this.context.canvas.width) {
      this.x = 1;
    }

    if (this.tick === this.speed) {
      const pos = { x: this.x, y: this.y };
      let yVal = this.y + Math.random() * this.speed * yDir;
      if (yVal > this.context.canvas.height - 100) {
        yVal = this.context.canvas.height - 100;
      }
      let xVal = this.x + Math.random() * this.speed;
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

export default JellyFish;