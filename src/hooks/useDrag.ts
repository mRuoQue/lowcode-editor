import { useBlockDataStore } from "@/stores/useBlockDataStore";
export const useDrag = () => {
  const blockDataStore = useBlockDataStore();

  let blockData = blockDataStore.blockData;
  let dragCompoent = null; // 当前拖拽的元素
  // 拿到物料区的映射的component，退拽结束后添加到画布区
  const dragStart = (e: DragEvent, component) => {
    dragCompoent = component;
    const canvasRef = blockDataStore.blockContainerRef;

    // 拖动画布区事件
    canvasRef.value.addEventListener("dragenter", dragenter);
    canvasRef.value.addEventListener("dragover", dragover);
    canvasRef.value.addEventListener("dragleave", dragleave);
    canvasRef.value.addEventListener("drop", generaterenderData);
  };

  const dragEnd = (e: DragEvent) => {
    const canvasRef = blockDataStore.blockContainerRef;
    canvasRef.value.removeEventListener("dragenter", dragenter);
    canvasRef.value.removeEventListener("dragover", dragover);
    canvasRef.value.removeEventListener("dragleave", dragleave);
    canvasRef.value.removeEventListener("drop", generaterenderData);
  };

  const dragenter = (e) => {
    e.dataTransfer.dropEffect = "move";
  };
  const dragover = (e) => {
    e.preventDefault();
  };
  const dragleave = (e) => {
    e.dataTransfer.dropEffect = "none";
  };

  // 拖拽结束
  const generaterenderData = (e) => {
    const dragCompoentStyle = {
      left: e.offsetX,
      top: e.offsetY, // 松手时基于画布的坐标
      zIndex: 1,
    };
    // 跟新元素style
    blockDataStore.updateDragComponentStyle(dragCompoentStyle);
    // 当前新拖拽的组件
    const block = {
      type: dragCompoent.type,
      style:blockDataStore.blockStyle
    };

    blockData = { ...blockData, blocks: [...blockData.blocks, block] };
    // 更新渲染视图数据
    blockDataStore.updateBlockData(blockData);
  };

  return {
    handleDragStart: dragStart,
    handleDragEnd: dragEnd,
  };
};
