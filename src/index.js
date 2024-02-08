import TWEEN from 'tween';
import './styles.css';
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

// Clock
function updateTime() {
    const clockDiv = document.getElementById('clock');
    const time = new Date();
    clockDiv.innerHTML = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
updateTime();
const clockInterval = setInterval(updateTime, 500);

window.addEventListener("beforeunload", function (e) {
    clearInterval(clockInterval);
});