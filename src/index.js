import TWEEN from 'tween';
import './styles.css';
import OrangeFish from './sprites/orangeFish';
import Crab from './sprites/crab';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const fps = 60;

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + 'px';

const orangeFish = new OrangeFish(context, 300, 300, 30);
const crab = new Crab(context, 1, height - 100, 40);

function frame() {
    context.clearRect(0, 0, width, height);
    orangeFish.animate();
    orangeFish.move();
    crab.animate();
    crab.move();

    requestAnimationFrame(frame);
    TWEEN.update();
}

frame();

// Clock
const clockDiv = document.getElementById('clock');
let clockInterval = setInterval(() => {
    let time = new Date();
    clockDiv.innerHTML = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}, 500);
