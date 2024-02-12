import Sprite from "./sprite";
import RedSeaweedPNG from '../spriteMaps/redSeaweed.png';

class RedSeaweed extends Sprite {
  constructor(context, posX, posY, speed) {
    const redSeaweedSpriteSheet = new Image();
    const frameWidth = 100;
    const frameHeight = 100;
    redSeaweedSpriteSheet.src = RedSeaweedPNG;
    
    super(context, posX, posY, redSeaweedSpriteSheet, frameWidth, frameHeight, speed);
    this.endFrame = 0;
  }
}

export default RedSeaweed;