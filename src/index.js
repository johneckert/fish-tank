// import * as THREE from 'three';
// import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200);
// const renderer = new THREE.WebGLRenderer({antialias: true});

// renderer.setClearColor("#233143");
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Make Canvas Responsive
// window.addEventListener('resize', () => {
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
// })

function component() {
  const element = document.createElement('div');

 // Lodash, now imported by this script
  element.innerHTML = "Hello";

  return element;
}

document.body.appendChild(component());