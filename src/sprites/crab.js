import TWEEN from 'tween';
import Sprite from "./sprite";
import CrabPNG from '../spriteMaps/crab.png';

class Crab extends Sprite {
  constructor(context, posX, posY, speed) {
    const crabSpriteSheet = new Image();
    const frameWidth = 100;
    const frameHeight = 100;
    crabSpriteSheet.src = CrabPNG;
    
    super(context, posX, posY, crabSpriteSheet, frameWidth, frameHeight, speed);
    this.direction = 1;
    this.tween;
    this.tick = 0;
  }

  move() {
    if (this.tick > this.speed) {
      let random = Math.floor(Math.random() * 100);
      if (random < 5) {
        this.direction *= -1;
      }

      if (this.x > this.context.canvas.width) {
        this.direction = -1;
      }

      if (this.x < 0) {
        this.direction = 1;
      }

      const pos = { x: this.x, y: this.y };
      this.tween = new TWEEN.Tween(pos).to({ x: pos.x + (5 * this.direction) }, 1000 / 60 * this.speed);

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

export default Crab;