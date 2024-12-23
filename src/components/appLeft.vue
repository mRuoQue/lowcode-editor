<script setup lang="ts">
import {inject} from "vue";
import { useDrag } from "@/hooks/useDrag.ts";
const { handleDragStart, handleDragEnd } = useDrag();

const mappingConfig = inject("mappingConfig");
</script>
<template>
  <div class="app-left">
    <el-tabs tab-position="left">
      <el-tab-pane label="组件"
        ><div class="app-left-components">
          <div
            class="app-left-item"
            v-for="component in mappingConfig.materialComponents"
            :key="component.type"
          >
            <div
              class="app-left-item-icon"
              draggable="true"
              @dragstart="($event:DragEvent) => handleDragStart($event, component)"
              @dragend="($event:DragEvent) => handleDragEnd($event, component)"
            >
              <component :is="component.icon"></component>
            </div>

            <span class="app-left-item-label">{{ component.label }}</span>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="流程"><div>流程</div></el-tab-pane>
    </el-tabs>
  </div>
</template>
<style>
.app-left {
  width: 300px;
  height: 100%;
}
.app-left .el-tabs {
  height: 100%;
}
.app-left .el-tabs__content {
  height: 100%!;
}

.app-left-components {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 0;
  margin-top: 20px;
  --grid-item-color: #1edb5b;
}
.app-left-item {
  width: calc(((100% - 10px)) / 3);
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;
  border-radius: 8px;
}
.app-left-item:hover {
  background-color: var(--color-gray-300);
}
.app-left-item-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  color: var(--color-white);
  font-size: var(--font-size-large);
  background-color: var(--grid-item-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-left-item-label {
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  margin-top: 5px;
}
</style>
