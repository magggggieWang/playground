<script setup lang="ts">
import { ref, computed } from "vue";
</script>

<template>
  <div class="header-fix">
    <div class="header-container">
      <div class="menu-container">
        <span class="menu-btn active"> Home </span>
        <span class="menu-btn"> About </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-fix {
  position: relative;
  display: block;
  height: 50px;
}
.header-container {
  border: 1px solid #480f0f;
  box-shadow: 1px 1cqb 1pxrgb (151, 71, 71) f;
  z-index: 1;
  position: fixed;
  left: 0;
  border-radius: 0 0 10px 10px;
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  padding: 10px 0;
  background-color: color(srgb 0.44 0.14 0.14);
  margin-bottom: 25px;
  .menu-container {
    padding: 0 20px;
  }
}
.menu-btn {
  color: rgb(47, 53, 59);
  cursor: pointer;
  transition: all 0.1s linear;
  position: relative;
}
/* .menu-btn::after {
  transform: rotate(90deg);
  bottom: -10px;
  right: 50%;
  position: absolute;
  content: "⌇";
  width: 80px;
  height: 20px;
  display: block;
} */
.menu-btn.active {
  font-size: 30px;
  font-weight: 800;
}
.menu-btn:hover {
  color: rgb(213, 216, 219);
  transition: all 0.1s linear;
}
</style>
