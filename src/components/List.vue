<script setup lang="ts">
import { ref } from "vue";

defineProps<{ title: string }>();

// const count = ref(0);
</script>

<template>
  <div>
    <div class="item-card">
      <div class="plan-content">
        <span> {{ title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.plan-content {
  border-radius: 10px;
  background-color: #ffff;
  display: block;
  width: 100%;
  height: 100%;
  min-height: 160px;
  margin: 0 0 15px 0;
  padding: 10px 0;
  font-size: 20px;
}
</style>
