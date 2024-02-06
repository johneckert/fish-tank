import './styles.css';
import OrangeFish from './sprites/orangeFish';
import Crab from './sprites/crab';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const fps = 60;

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + 'px';

const orangeFish = new OrangeFish(context, 100, 100, 30);
const orangeFish2 = new OrangeFish(context, 300, 300, 20);
const crab = new Crab(context, 1, height - 100, 40);

function frame() {
    context.clearRect(0, 0, width, height);
    orangeFish.animate();
    orangeFish.move();
    orangeFish2.animate();
    orangeFish2.move();
    crab.animate();
    crab.move();

    requestAnimationFrame(frame);
}

frame();
