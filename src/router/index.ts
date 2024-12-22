import { createWebHashHistory, createRouter } from "vue-router";
import EditorBlock from "@/views/editorBlock.vue";
import DataSource from "@/views/dataSource.vue";
import Others from "@/views/others.vue";

const routes = [
  {
    path: "/",
    component: EditorBlock,
    children: [],
  },
  {
    path: "/editorBlock",
    component: EditorBlock,
    children: [],
  },
  {
    path: "/dataSource",
    component: DataSource,
    children: [],
  },
  {
    path: "/others",
    component: Others,
    children: [],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
