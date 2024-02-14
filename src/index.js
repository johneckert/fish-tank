import TWEEN from 'tween';
import fitty from 'fitty';
import './styles.css';
import clock from './clock';
import OrangeFish from './sprites/orangeFish';
import GreenFish from './sprites/greenFish';
import BlueFish from './sprites/blueFish';
import Crab from './sprites/crab';
import Prawn from './sprites/prawn';
import Octopus from './sprites/octopus';
import JellyFish from './sprites/jellyFish';
import GreenSeaweed from './sprites/greenSeaweed';
import BlueSeaweed from './sprites/blueSeaweed';
import RedSeaweed from './sprites/redSeaweed';

fitty('#date');
fitty('#clock');

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = context.canvas.width = window.innerWidth;
const height = context.canvas.height = window.innerHeight;

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + 'px';

const randomX = () => Math.floor(Math.random() * width);
const randomY = () => Math.floor(Math.random() * height);
const randomSpeed = () => Math.floor((Math.random() * 300) + 100);

const createFish = () => {
  const FISH_OPTIONS = [OrangeFish, GreenFish, BlueFish, Prawn, Octopus, JellyFish];
  const randomFish = FISH_OPTIONS[Math.floor(Math.random() * FISH_OPTIONS.length)];
  return new randomFish(context, randomX(), randomY(), randomSpeed());
}

const createBottomFeeder = () => {
  const BOTTOM_FEEDERS = [Crab];
  const randomBottomFeeder = BOTTOM_FEEDERS[Math.floor(Math.random() * BOTTOM_FEEDERS.length)];
  return new randomBottomFeeder(context, randomX(), height - 100, randomSpeed());
}

const greenSeaweed = [];
for (let i = 0; i < width; i+= 110) {
  greenSeaweed.push(new GreenSeaweed(context, i, height - 100, 0));
}

const blueSeaweed = [];
for (let i = 50; i < width; i+= 75) {
  blueSeaweed.push(new BlueSeaweed(context, i, height - 100, 0));
}

const fish = [];
for (let i = 0; i < 10; i++) {
  fish.push(createFish());
}

for (let i = 0; i < Math.floor(Math.random() * 4); i++) {
  fish.push(createBottomFeeder());
}

function frame() {
    context.clearRect(0, 0, width, height);
    greenSeaweed.map((sprite) => sprite.animate());
    blueSeaweed.map((sprite) => sprite.animate());
    fish.map((sprite) => sprite.animate());
    fish.map((sprite) => sprite.move());

    requestAnimationFrame(frame);
    TWEEN.update();
}

frame();
clock();

window.addEventListener('resize', () => {
    window.location.reload();
});