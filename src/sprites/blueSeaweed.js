import Sprite from "./sprite";
import BlueSeaweedPNG from '../spriteMaps/blueSeaweed.png';

class BlueSeaweed extends Sprite {
  constructor(context, posX, posY, speed) {
    const blueSeaweedSpriteSheet = new Image();
    const frameWidth = 100;
    const frameHeight = 100;
    blueSeaweedSpriteSheet.src = BlueSeaweedPNG;
    
    super(context, posX, posY, blueSeaweedSpriteSheet, frameWidth, frameHeight, speed);
    this.endFrame = 0;
  }
}

export default BlueSeaweed;