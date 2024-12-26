import { defineStore } from "pinia";
import { ref, computed } from "vue";
import appConfig from "@/config/appConfig";

export const useBlockDataStore = defineStore("blockData", () => {
  const blockData = ref<any>(appConfig); // 全局配置数据
  const blockContainerRef = ref<any>(null); // 获取画布元素

  const style = ref({
    top: 0,
    left: 0,
    zIndex: 1,
  });
  const blockStyle = computed(() => ({
    top: style.value.top + "px",
    left: style.value.left + "px",
    zIndex: style.value.zIndex,
  }));

  const setBlockContainerRef = (payload) => {
    blockContainerRef.value = payload;
  };

  const updateDragComponentStyle = (payload) => {
    style.value = payload;
  };

  const updateBlockData = (data: any) => {
    blockData.value = data;
  };

  return {
    blockData,
    updateBlockData,
    blockStyle,
    updateDragComponentStyle,
    blockContainerRef,
    setBlockContainerRef,
  };
});
