import { ElText, ElButton, ElInput } from "element-plus";

import {
  ChartLine,
  Form,
  HamburgerButton,
  ImageFiles,
  Notes,
  Quote,
  Table,
  TitleLevel,
} from "@icon-park/vue-next";
import type { Icon } from "@icon-park/vue-next/lib/runtime";
import type { Component } from "vue";

// 物料区预览组件
const materialComponents: {
  type: any;
  label: string;
  icon: Icon;
  component: Component;
}[] = [
  {
    type: "text",
    label: "文本",
    icon: Quote,
    component: ElText,
  },
  {
    type: "button",
    label: "按钮",
    icon: Notes,
    component: ElButton,
  },
  {
    type: "heroTitle",
    label: "超级标题",
    icon: TitleLevel,
    component: ElText,
  },
  { type: "image", label: "图片", icon: ImageFiles, component: ElText },
  {
    type: "view",
    label: "视图",
    icon: Table,
    component: ElText,
  },
  {
    type: "chart",
    label: "图表",
    icon: ChartLine,
    component: ElText,
  },
  {
    type: "button",
    label: "按钮",
    icon: HamburgerButton,
    component: ElText,
  },
  {
    type: "form",
    label: "表单",
    icon: Form,
    component: ElText,
  },
];
const useComponentBlocks = () => {
  const registry = () => {};
  const componentBlocks: any[] = [ElButton, ElInput];
  return {
    componentBlocks,
    materialComponents,
  };
};

export default useComponentBlocks;
