<script setup lang="ts">
import AppHeader from "@/components/appHeader.vue";
import AppContent from "@/components/appContent.vue";
import { mappingConfig } from "@/config/componentMapping.tsx";
import { provide } from "vue";

console.log('mappingConfig',mappingConfig)
provide("mappingConfig", mappingConfig);
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <AppContent />
  </div>
</template>
<style>
.app-layout {
  width: 100%;
  height: 100%;
}
</style>
