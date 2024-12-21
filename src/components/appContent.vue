<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app-content">
    <RouterView />
  </div>
</template>
<style>
.app-content{
  height: calc(100vh - 128px);
  margin: 20px;
  padding: 15px;
  box-sizing: border-box;
  background-color: var(--color-lightBlue-100);
  border-radius: var(--border-radius-middle);
}
</style>
