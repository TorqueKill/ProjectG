<script>
    import { onMount } from "svelte";
    import * as THREE from "three";
  
    let container;
  
    onMount(() => {
      // Set up the scene, camera, and renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        container.offsetWidth / container.offsetHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
  
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      container.appendChild(renderer.domElement);
  
      // Create the spinning wheel
      const geometry = new THREE.CircleGeometry(2, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
      const wheel = new THREE.Mesh(geometry, material);
      scene.add(wheel);
  
      // Animation loop
      function animate() {
        requestAnimationFrame(animate);
  
        // Rotate the wheel
        wheel.rotation.z += 0.05;
  
        renderer.render(scene, camera);
      }
      animate();
  
      // Cleanup when the component is destroyed
      return () => {
        renderer.dispose();
      };
    });
  </script>
  
  <div bind:this={container} class="wheel-container"></div>
  
  <style>
    .wheel-container {
      width: 100%;
      height: 100%;
      background: #000; /* Background color for better visibility */
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
  