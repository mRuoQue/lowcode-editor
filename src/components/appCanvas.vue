<script setup lang="ts">
import { inject } from "vue";
import { useBlockDataStore } from "@/stores/useBlockDataStore.ts";
const blockDataStore = useBlockDataStore();

const mappingConfig = inject("mappingConfig");
const renderComponents = mappingConfig.renderComponents;
</script>

<template>
  <div class="app-canvas">
    <div class="app-canvas-item" v-for="block in blockDataStore.state.blocks">
      <component :is="renderComponents[block.type]?.render(renderComponents[block.type].props)"></component>
    </div>
  </div>
</template>
<style>
.app-canvas {
  flex: 1;
  height: 100%;
  background-color: var(--color-gray-100);
}
</style>
