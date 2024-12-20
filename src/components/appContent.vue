<script setup lang="ts">
import AppLeft from "./appLeft.vue";
import AppRight from "./appRight.vue";
import AppCanvas from "./appCanvas.vue";
</script>

<template>
  <div class="app-content">
    <AppLeft />
    <AppCanvas />
    <AppRight />
  </div>
</template>
<style>
.app-content {
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 88px);
  margin-top:15px;
  border-top: 1px solid #e6e6e6;
  background-color: #fff;
}
</style>
