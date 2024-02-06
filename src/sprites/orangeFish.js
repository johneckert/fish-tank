import Sprite from "./sprite";
import OrangeFishPNG from '../spriteMaps/orangeFish.png';


class OrangeFish extends Sprite {
  constructor(context, posX, posY, speed) {
    const orangeFishSpriteSheet = new Image();
    const frameWidth = 100;
    const frameHeight = 100;
    orangeFishSpriteSheet.src = OrangeFishPNG;
    
    super(context, posX, posY, orangeFishSpriteSheet, frameWidth, frameHeight, speed);
  }

  move() {
    console.log(t);
    if (this.count % this.speed === 0) { // speed of animation
      if (this.x > this.context.canvas.width) {
        this.x = -this.frameWidth;
      }
      this.x += 5;
      this.y += Math.sin(this.x) * this.context.canvas.height / 10; // sin * amplitude
    }
  }
}

export default OrangeFish;