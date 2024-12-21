<script setup lang="ts">
// import useOperate from "@/hoks/useOperate";

const operatorTabs = [
  {
    label: "属性",
    key: "attr",
  },
  {
    label: "动画",
    key: "animation",
  },
  {
    label: "事件",
    key: "event",
  },
];
</script>

<template>
  <div class="app-right">
    <el-tabs>
      <el-tab-pane label="属性"><div class="app-right-attr"></div></el-tab-pane>
      <el-tab-pane label="动画"><div>动画</div></el-tab-pane>
      <el-tab-pane label="事件"><div>事件</div></el-tab-pane>
    </el-tabs>
  </div>
</template>
<style>
.app-right {
  width: 300px;
  display: flex;
  justify-content: center;
}
</style>
