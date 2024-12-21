<script setup lang="ts">
import AppLeft from "@/components/appLeft.vue";
import AppRight from "@/components/appRight.vue";
import AppCanvas from "@/components/appCanvas.vue";
</script>

<template>
  <div class="editor-block">
    <AppLeft />
    <AppCanvas />
    <AppRight />
  </div>
</template>
<style>
.editor-block {
  display: flex;
  justify-content: space-between;
  height: 100%;
  border-top: 1px solid #e6e6e6;
  box-sizing: border-box;
  background-color: #fff;
}
</style>
