
import { useBlockDataStore } from "@/stores/useBlockDataStore";
import { useBlockRefStore } from "@/stores/useBlockRefStore";
export const useDrag = () => {

  const blockRefStore = useBlockRefStore();
  const blockDataStore = useBlockDataStore();

  let blockData = blockDataStore.state;
  let dragCompoent = null;  // 当前拖拽的元素
  // 拿到物料区的映射的component，退拽结束后添加到画布区
  const dragStart = (e: DragEvent, component) => {
    dragCompoent = component;
    const canvasRef = blockRefStore.state;

    // 拖动画布区事件
    canvasRef.value.addEventListener("dragenter", dragenter);
    canvasRef.value.addEventListener("dragover", dragover);
    canvasRef.value.addEventListener("dragleave", dragleave);
    canvasRef.value.addEventListener("drop", generaterenderData);
  };

  const dragEnd = (e: DragEvent) => {
    const canvasRef = blockRefStore.state;
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

  const generaterenderData = (e) => {
    // 当前新拖拽的组件
    const block = {
      type: dragCompoent.type,
      // 定义属性
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
