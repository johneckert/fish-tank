import './styles.css';
import OrangeFish from './sprites/orangeFish';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const fps = 60;

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + 'px';

const orangeFish = new OrangeFish(context, 100, 100, 1);

const orangeFish2 = new OrangeFish(context, 300, 300, 5);

function frame() {
    context.clearRect(0, 0, width, height);
    orangeFish.animate();
    orangeFish.move();
    orangeFish2.animate();
    orangeFish2.move();
    requestAnimationFrame(frame);
}

frame();