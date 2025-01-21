import App from "./App.svelte";
import * as THREE from "three";

// WebGL Setup
const scene = new THREE.Scene();

// Add a Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 50;

// Add a Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a Simple Object to Render
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation Loop
const animate = () => {
  requestAnimationFrame(animate);

  // Rotate the cube (for debugging visibility)
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};
animate();

// Svelte App Initialization
const app = new App({
  target: document.body,
});

export default app;
