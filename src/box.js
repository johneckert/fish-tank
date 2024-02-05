import * as THREE from 'three';

// Create box:
const boxGeometry = new THREE.BoxGeometry(2, 2, 2); // Define geometry
const boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF}); // Define material
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial); // Build box

export default boxMesh;
