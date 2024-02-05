const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const frameWidth = 100;
const frameHeight = 100;
const xPos = 100;
const yPos = 100;
const scale = 1;
const fps = 60;
const secondsToUpdate = 1 * fps;
let count = 0;

canvas.style.marginTop = '0px';
