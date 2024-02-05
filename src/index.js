import "./styles.css"
import boxMesh from "./box";
import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();
// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200);
camera.position.z = 5; // Set camera position
// Renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#233143"); // Set background colour
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Make Canvas Responsive
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight); // Update size
    camera.aspect = window.innerWidth / window.innerHeight; // Update aspect ratio
    camera.updateProjectionMatrix(); // Apply changes
})

scene.add(boxMesh); // Add box to canvas

// Lights
const lights = [];
const lightHelpers = [];
const lightValues = [
    {colour: 0xFFFFFF, intensity: 20, dist: 0, x: 1, y: 0, z: 8},
];
for (let i=0; i<1; i++) {
    lights[i] = new THREE.PointLight(
        lightValues[i]['colour'], 
        lightValues[i]['intensity'], 
        lightValues[i]['dist']);
    lights[i].position.set(
        lightValues[i]['x'], 
        lightValues[i]['y'], 
        lightValues[i]['z']);
    scene.add(lights[i]);

    // Add light helpers for each light
    lightHelpers[i] = new THREE.PointLightHelper(lights[i]);
    scene.add(lightHelpers[i]);
}

// Axes Helper
const axesHelper = new THREE.AxesHelper(5);
scene.add( axesHelper ); // X axis = red, Y axis = green, Z axis = blue


const rendering = function() {
    // Rerender every time the page refreshes (pause when on another tab)
    requestAnimationFrame(rendering);
    renderer.render(scene, camera);
}
rendering();