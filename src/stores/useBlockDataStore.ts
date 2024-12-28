import { defineStore } from "pinia";
import { ref, computed, toRefs } from "vue";
import appConfig from "@/config/appConfig";

export const useBlockDataStore = defineStore("blockData", () => {
  const originBlockData = ref<any>(appConfig);
  const blockData = ref<any>(appConfig); // 全局配置数据
  const blockContainerRef = ref<any>(null); // 获取画布元素
  const blockItemRef = ref<any>(null);
  const dragComponent = ref<any>(null);
  const dragComponentStyle = ref({
    top: 0,
    left: 0,
    zIndex: 1,
  });

  const setBlockContainerRef = (payload) => {
    blockContainerRef.value = payload;
  };

  const setBlockItemRef = (payload) => {
    blockItemRef.value = payload;
  };

  const updateDragComponentStyle = (payload) => {
    dragComponentStyle.value.left = payload.left;
    dragComponentStyle.value.top = payload.top;
  };
  const generaterenderData = () => {
    // 跟新元素style

    const dragComponentStyles = { ...dragComponentStyle.value };

    const newDragComponent = originBlockData.value.blocks.find(
      (e) => e.type === dragComponent.value.type
    );

    // 当前新拖拽的组件
    const block = {
      ...newDragComponent,
      style: {
        top: dragComponentStyles.top - newDragComponent.props.height / 2 + "px",
        left:
          dragComponentStyles.left - newDragComponent.props.width / 2 + "px",
        zIndex: dragComponentStyles.zIndex,
      },
    };

    const data = {
      ...blockData.value,
      blocks: [...blockData.value.blocks, block],
    };
    // 更新渲染视图数据
    blockData.value = data;
  };

  return {
    originBlockData,
    dragComponentStyle,
    dragComponent,
    updateDragComponentStyle,
    blockData,
    blockContainerRef,
    setBlockContainerRef,
    blockItemRef,
    setBlockItemRef,
    generaterenderData,
  };
});
