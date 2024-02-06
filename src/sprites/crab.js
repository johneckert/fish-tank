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
    this.pos;
    this.tween;
    this.tick = 0;
  }

  move() {
    if (this.tick > this.speed) {
      if (this.x > window.innerWidth) {
        this.direction = -1;
      }

      if (this.x < 0) {
        this.direction = 1;
      }

      this.pos = { x: this.x, y: this.y };
      this.tween = new TWEEN.Tween(this.pos).to({ x: this.pos.x + (5 * this.direction) }, 1000 / 60 * this.speed);

      this.tween.onUpdate(() => {
        this.x = this.pos.x;
      });
      this.tween.start();
      this.tick = 0;
    } else {
      this.tick++;
    }
  }
}

export default Crab;