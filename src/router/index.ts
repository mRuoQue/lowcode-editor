import {
  createWebHashHistory,
  createMemoryHistory,
  createRouter,
} from "vue-router";
import Editorblock from "@/views/editorBlock.vue";
import layout from "@/views/layout.vue";
import DataSource from "@/views/dataSource.vue";
import Others from "@/views/others.vue";

const routes = [
  {
    path: "/",
    component: layout,
    children: [],
  },
  {
    path: "/editorblock",
    component: Editorblock,
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
