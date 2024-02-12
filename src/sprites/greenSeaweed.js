import Sprite from "./sprite";
import GreenSeaweedPNG from '../spriteMaps/greenSeaweed.png';

class GreenSeaweed extends Sprite {
  constructor(context, posX, posY, speed) {
    const greenSeaweedSpriteSheet = new Image();
    const frameWidth = 100;
    const frameHeight = 100;
    greenSeaweedSpriteSheet.src = GreenSeaweedPNG;
    
    super(context, posX, posY, greenSeaweedSpriteSheet, frameWidth, frameHeight, speed);
    this.endFrame = 0;
  }
}

export default GreenSeaweed;