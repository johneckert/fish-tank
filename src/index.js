import TWEEN from 'tween';
import './styles.css';
import clock from './clock';
import OrangeFish from './sprites/orangeFish';
import GreenFish from './sprites/greenFish';
import Crab from './sprites/crab';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const fps = 60;

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + 'px';

const orangeFish = new OrangeFish(context, width - 200, 300, 30);
const greenFish = new GreenFish(context, 1, 500, 100);
const crab = new Crab(context, 1, height - 100, 40);

function frame() {
    context.clearRect(0, 0, width, height);
    orangeFish.animate();
    orangeFish.move();
    greenFish.animate();
    greenFish.move();
    crab.animate();
    crab.move();

    requestAnimationFrame(frame);
    TWEEN.update();
}

frame();
clock();
// Could the background match the current weather?