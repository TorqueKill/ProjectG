import * as THREE from "three";

export function createSpinningWheel(scene) {
  const geometry = new THREE.CircleGeometry(5, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const circle = new THREE.Mesh(geometry, material);
  scene.add(circle);

  return () => {
    circle.rotation.z += 0.01; // Spin the wheel
  };
}
