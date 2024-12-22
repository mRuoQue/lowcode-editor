// 物料区组件 => 画布区组件映射关系

import {
  ElText,
  ElButton,
  ElInput,
  ElCollapse ,
  ElRate,
  ElSlider,
  ElSwitch,
} from "element-plus";

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

interface BasicProps {
  text: string;
  type: any;
  [key: string]: any;
}
interface ComponentItem {
  type: string;
  label: string;
  icon: Icon;
  render: (props: BasicProps) => Component;
  event: () => void;
  props: BasicProps;
}
const createMapping = () => {
  const materialComponents: any[] = []; // 物料区组件
  const renderComponents: Record<string, ComponentItem> = {}; // 画布区组件

  const registry = (component: ComponentItem) => {
    materialComponents.push(component);
    renderComponents[component.type] = component;
  };
  return {
    registry,
    materialComponents,
    renderComponents,
  };
};

// 注册组件，激活映射关系

export const mappingConfig = createMapping();
const registry = mappingConfig.registry;

registry({
  type: "button",
  label: "按钮",
  icon: Notes,
  render: (props) => (
    <ElButton size={props.size} type={props.type}>
      {props.text}
    </ElButton>
  ),

  event: () => {},
  props: {
    type: "success",
    text: "按钮",
    size: "small",
  },
});

registry({
  type: "text",
  label: "文本",
  icon: ChartLine,
  render: (props) => <ElText>{props.text}</ElText>,
  event: () => {},
  props: {
    text: "这是一段文本",
    type: "primary",
    size: "small",
  },
});
registry({
  type: "input",
  label: "输入框",
  icon: Form,
  render: (props) => <ElInput placeholder={props.text}></ElInput>,
  event: () => {},
  props: {
    text: "输入框",
    type: "input",
    size: "small",
  },
});
registry({
  type: "collapse",
  label: "拾色器",
  icon: HamburgerButton,
  render: () => <ElCollapse></ElCollapse>,
  event: () => {},
  props: {},
});
registry({
  type: "rate",
  label: "评分",
  icon: TitleLevel,
  render: () => <ElRate></ElRate>,
  event: () => {},
  props: {},
});
registry({
  type: "slider",
  label: "滑块",
  icon: ImageFiles,
  render: () => <ElSlider></ElSlider>,
  event: () => {},
  props: {},
});
registry({
  type: "switch",
  label: "开关",
  icon: Table,
  render: () => <ElSwitch></ElSwitch>,
  event: () => {},
  props: {},
});
