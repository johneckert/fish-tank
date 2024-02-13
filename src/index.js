import TWEEN from 'tween';
import './styles.css';
import clock from './clock';
import OrangeFish from './sprites/orangeFish';
import GreenFish from './sprites/greenFish';
import BlueFish from './sprites/blueFish';
import Crab from './sprites/crab';
import Prawn from './sprites/prawn';
import GreenSeaweed from './sprites/greenSeaweed';
import BlueSeaweed from './sprites/blueSeaweed';
import RedSeaweed from './sprites/redSeaweed';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const fps = 60;

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + 'px';

const orangeFish = new OrangeFish(context, width - 200, 300, 30);
const greenFish = new GreenFish(context, 1, 500, 100);
const blueFish = new BlueFish(context, width, 100, 200);
const crab = new Crab(context, 1, height - 100, 40);
const prawn = new Prawn(context, 1, 1, 700);

const greenSeaweed = [];
for (let i = 0; i < width; i+= 110) {
    greenSeaweed.push(new GreenSeaweed(context, i, height - 100, 0));
}

const blueSeaweed = [];
for (let i = 50; i < width; i+= 75) {
    blueSeaweed.push(new BlueSeaweed(context, i, height - 100, 0));
}

const redSeaweed = [];
for (let i = Math.floor(Math.random() * 24); i < width - 15; i+= width / Math.floor(Math.random() * 6 + 3 )) {
    redSeaweed.push(new RedSeaweed(context, i, height - 100, 0));
}

function frame() {
    context.clearRect(0, 0, width, height);
    greenSeaweed.map((sprite) => sprite.animate());
    blueSeaweed.map((sprite) => sprite.animate());
    redSeaweed.map((sprite) => sprite.animate());
    orangeFish.animate();
    orangeFish.move();
    greenFish.animate();
    greenFish.move();
    blueFish.animate();
    blueFish.move();
    crab.animate();
    crab.move();
    prawn.animate();
    prawn.move();

    requestAnimationFrame(frame);
    TWEEN.update();
}

frame();
clock();
// Could the background match the current weather?