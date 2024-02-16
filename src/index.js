import TWEEN from 'tween';
import fitty from 'fitty';
import './styles.css';
import clock from './clock';
import OrangeFish from './sprites/orangeFish';
import GreenFish from './sprites/greenFish';
import BlueFish from './sprites/blueFish';
import Crab from './sprites/crab';
import HermitCrab from './sprites/hermitCrab';
import Prawn from './sprites/prawn';
import Octopus from './sprites/octopus';
import JellyFish from './sprites/jellyFish';
import AnglerFish from './sprites/anglerFish';
import GreenSeaweed from './sprites/greenSeaweed';
import BlueSeaweed from './sprites/blueSeaweed';
import RedSeaweed from './sprites/redSeaweed';

fitty('#date');
fitty('#clock');

const currentTime = new Date();
const isNight = currentTime.getHours() > 18 || currentTime.getHours() < 6;

const overlay = document.getElementById('overlay');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = context.canvas.width = window.innerWidth;
const height = context.canvas.height = window.innerHeight;

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + 'px';

if (!isNight) {
  canvas.classList.add('night');
  overlay.classList.add('night');
}

const randomX = () => Math.floor(Math.random() * width);
const randomY = () => Math.floor(Math.random() * height);
const randomSpeed = () => Math.floor((Math.random() * 300) + 100);

const DAY_FISH = [OrangeFish, GreenFish, BlueFish, Prawn, Octopus, JellyFish];
const NIGHT_FISH = [JellyFish, AnglerFish];

const DAY_BOTTOM_FEEDERS = [Crab];
const NIGHT_BOTTOM_FEEDERS = [HermitCrab];

const createFish = () => {
  const fishOptions = !isNight ? NIGHT_FISH : DAY_FISH;
  const randomFish = fishOptions[Math.floor(Math.random() * fishOptions.length)];
  return new randomFish(context, randomX(), randomY(), randomSpeed());
}

const createBottomFeeder = () => {
  const bottomFeeders = !isNight ? NIGHT_BOTTOM_FEEDERS : DAY_BOTTOM_FEEDERS;
  const randomBottomFeeder = bottomFeeders[Math.floor(Math.random() * bottomFeeders.length)];
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