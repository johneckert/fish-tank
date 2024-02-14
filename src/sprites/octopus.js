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
    this.tween;
    this.tick = this.speed;
    this.endFrame = 5;
  }

  move() {
    if (this.tick === this.speed) {
      const pos = { x: this.x, y: this.y };
      const yVal = Math.random() * (this.context.canvas.height - 20) + 10;
      const xVal = Math.random() * (this.context.canvas.width - 20) + 10;
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

export default Octopus;