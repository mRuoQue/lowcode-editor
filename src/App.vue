<script setup lang="ts">
import Layout from "@/views/layout.vue";
import { provide } from "vue";
import { mappingConfig } from "@/config/componentMapping.tsx";


provide("mappingConfig", mappingConfig);
</script>

<template>
  <Layout />
</template>

<style scoped></style>
