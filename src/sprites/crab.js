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
  }

  move() {
    if (this.x > window.innerWidth) {
      this.direction = -1;
    }

    if (this.x < 0) {
      this.direction = 1;
    }
    this.x += (5 * this.direction);
  }
}

export default Crab;