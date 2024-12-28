import { useBlockDataStore } from "@/stores/useBlockDataStore";
export const useDrag = () => {
  const blockDataStore = useBlockDataStore();

  let dragComponent: any = null; // 当前拖拽的元素
  // 拿到物料区的映射的component，退拽结束后添加到画布区
  const dragStart = (e: DragEvent, component) => {
    dragComponent = component;
    blockDataStore.dragComponent = component;
    const canvasRef = blockDataStore.blockContainerRef;

    // 拖动画布区事件
    canvasRef.value.addEventListener("dragenter", dragenter);
    canvasRef.value.addEventListener("dragover", dragover);
    canvasRef.value.addEventListener("dragleave", dragleave);
    canvasRef.value.addEventListener("drop", drop);
  };

  const dragEnd = (e: DragEvent) => {
    const canvasRef = blockDataStore.blockContainerRef;
    canvasRef.value.removeEventListener("dragenter", dragenter);
    canvasRef.value.removeEventListener("dragover", dragover);
    canvasRef.value.removeEventListener("dragleave", dragleave);
    canvasRef.value.removeEventListener("drop", drop);
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

  const drop = (e) => {
    const dragCompoentStyle = {
      left: e.offsetX,
      top: e.offsetY, // 松手时基于画布的坐标
      zIndex: 1,
    };
    blockDataStore.updateDragComponentStyle(dragCompoentStyle);
    blockDataStore.generaterenderData();
  };

  return {
    handleDragStart: dragStart,
    handleDragEnd: dragEnd,
  };
};
