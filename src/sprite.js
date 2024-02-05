class Sprite {
  constructor(context, posX, posY, img, frameWidth, frameHeight, speed ) {
    this.context = context;
    this.x = posX;
    this.y = posY;
    this.img = img;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.frameIndex = 0;
    this.speed = speed;
    this.count = 0;
    this.scale = 1;
  }
  animate() {
    this.context.drawImage(
      this.img,
      this.frameIndex * this.frameWidth,
      0,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.frameWidth * this.scale,
      this.frameHeight * this.scale
    );

    this.count ++;
    if (this.count > this.speed) { // speed of animation
      this.frameIndex ++;
      this.count = 0;
    }

    if (this.frameIndex > 5) {
      this.frameIndex = 0;
    }
  }
}

export default Sprite;