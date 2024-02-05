import './styles.css';
import OrangeFish from './sprites/OrangeFish.png';
import Sprite from './sprite';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const fps = 60;

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + 'px';

const orangeFishSpriteSheet = new Image();
orangeFishSpriteSheet.src = OrangeFish;
const orangeFish = new Sprite(context, 100, 100, orangeFishSpriteSheet, 100, 100, 35);

const orangeFish2 = new Sprite(context, 300, 300, orangeFishSpriteSheet, 100, 100, 15);

function frame() {
    context.clearRect(0, 0, width, height);
    orangeFish.animate();
    orangeFish2.animate();
    requestAnimationFrame(frame);
}

frame();