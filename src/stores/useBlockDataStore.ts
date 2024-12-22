import { defineStore } from "pinia";
import { ref } from "vue";
import appConfig from "@/config/appConfig";

export const useBlockDataStore = defineStore("blockData", () => {
  const state = ref<any>(appConfig);

  const getBlockData = () => {
    return state.value;
  };
  const updateBlockData = (data: any) => {
    state.value = data;
  };

  return {
    state,
    updateBlockData,
  };
});
