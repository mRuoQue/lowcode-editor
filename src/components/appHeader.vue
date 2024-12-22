<script setup lang="ts">
import NavBar from "./navBar.vue";
import Logo from "./logo.vue";
import UserOperator from "./userOperator.vue";
import { layoutTabs} from "@/config/constant.ts"
</script>

<template>
  <div class="app-header">
    <Logo />
    <NavBar :tabs="layoutTabs" />
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
