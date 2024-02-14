import TWEEN from 'tween';

class Sprite {
  constructor(context, posX, posY, img, frameWidth, frameHeight, speed) {
    this.context = context;
    this.x = posX;
    this.y = posY;
    this.img = img;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.frameIndex = 0;
    this.endFrame = 5;
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

    if (this.frameIndex > this.endFrame) {
      this.frameIndex = 0;
    }
  }

  move() {
    if (this.tick === this.speed) {
      if (this.x > this.context.canvas.width) {
        this.x = -this.frameWidth;
      }

      let pos = { x: this.x, y: this.y };
      
      this.tween = new TWEEN.Tween(pos).to({ x: pos.x + this.speed }, 1000 / 60 * this.speed);

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

export default Sprite;