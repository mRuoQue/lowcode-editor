<script setup lang="ts">
import { inject, ref, onMounted,watchEffect } from "vue";
import { useBlockDataStore } from "@/stores/useBlockDataStore.ts";
import { useBlockRefStore } from "@/stores/useBlockRefStore.ts";
const blockDataStore = useBlockDataStore();
const blockRefStore = useBlockRefStore();

const mappingConfig = inject("mappingConfig");
const renderComponents = mappingConfig.renderComponents;

const canvasRef = ref(null);
onMounted(() => {
  blockRefStore.setCavansContainerRef(canvasRef);
});


</script>

<template>
  <div class="app-canvas" ref="canvasRef">
    <div class="app-canvas-item" v-for="block in blockDataStore.state.blocks" :key="block.type">
      <component
        :is="
          renderComponents[block.type]?.render(
            renderComponents[block.type].props
          )
        "
      ></component>
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
@/stores/useBlockRefStore
