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
  /* margin-top: 10px; */
  height: calc(100vh - 88px);
}
</style>
