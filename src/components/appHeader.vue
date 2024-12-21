<script setup lang="ts">
import NavBar from "./navBar.vue";
import Logo from "./logo.vue";
import UserOperator from "./userOperator.vue";
const tabs = [
  {
    name: "数据源",
    route: "/dataSource",
  },
  {
    name: "画布",
    route: "/editorblock",
  },
  {
    name: "其他",
    route: "/others",
  },
];
</script>

<template>
  <div class="app-header">
    <Logo />
    <NavBar :tabs="tabs" />
    <UserOperator />
  </div>
</template>
<style>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 88px;
}
</style>
