import TWEEN from 'tween';
import Sprite from "./sprite";
import octopusPNG from '../spriteMaps/octopus.png';


class Octopus extends Sprite {
  constructor(context, posX, posY, speed) {
    const octopusSpriteSheet = new Image();
    const frameWidth = 100;
    const frameHeight = 100;
    octopusSpriteSheet.src = octopusPNG;
    
    super(context, posX, posY, octopusSpriteSheet, frameWidth, frameHeight, speed);
    this.direction = -1;
    this.pos;
    this.tween;
    this.tick = this.speed;
    this.endFrame = 5;
  }

  move() {
    if (this.tick === this.speed) {
      this.pos = { x: this.x, y: this.y };
      let yVal = Math.random() * (this.context.canvas.height - 10) + 10;
      let xVal = Math.random() * (this.context.canvas.width - 10) + 10;
      this.tween = new TWEEN.Tween(this.pos).to({ x: xVal, y: yVal }, 1000 / 60 * this.speed);
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

export default Octopus;