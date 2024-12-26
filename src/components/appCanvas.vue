<script setup lang="ts">
import { inject, ref, onMounted, watchEffect, computed } from "vue";
import { useBlockDataStore } from "@/stores/useBlockDataStore.ts";
const blockDataStore = useBlockDataStore();

const mappingConfig = inject("mappingConfig");
const renderComponents = mappingConfig.renderComponents;

const canvasRef = ref(null);

watchEffect(() => {
  console.log(blockDataStore.blockStyle)
});
onMounted(() => {
  blockDataStore.setBlockContainerRef(canvasRef);
});
</script>

<template>
  <div class="app-canvas" ref="canvasRef">
    <div
      class="app-canvas-item"
      v-for="block in blockDataStore.blockData.blocks"
      :style="block.style"
      :key="block.type"
    >
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
  position: relative;
  flex: 1;
  height: 100%;
  background-color: var(--color-gray-100);
}

.app-canvas-item {
  position: absolute;
}
</style>
