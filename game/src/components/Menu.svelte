<script>
    import { writable } from "svelte/store";
    import Wheel from "./Wheel.svelte";
  
    const activeTab = writable(null);
  
    function showWheel() {
      activeTab.set("wheel");
    }
  </script>
  
  <div class="menu">
    <button on:click={showWheel}>Show Spinning Wheel</button>
  </div>
  
  {#if $activeTab === "wheel"}
    <div class="wheel-section">
      <Wheel />
    </div>
  {/if}
  
  <style>
    .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
  
    button {
      padding: 10px 20px;
      font-size: 1rem;
      cursor: pointer;
      background-color: #ffcc00;
      border: none;
      border-radius: 5px;
      color: #000;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: #ffaa00;
    }
  
    .wheel-section {
      margin-top: 20px;
      width: 400px;
      height: 400px;
      border: 2px solid #ffcc00;
      border-radius: 10px;
    }
  </style>
  