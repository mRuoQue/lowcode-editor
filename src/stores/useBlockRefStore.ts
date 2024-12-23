import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlockRefStore = defineStore("blockRef", () => {
  const state = ref<any>(null);

  const setCavansContainerRef = (payload) => {
    state.value = payload;
  };

  return {
    state,
    setCavansContainerRef,
  };
});
