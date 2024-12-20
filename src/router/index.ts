import { createMemoryHistory, createRouter } from "vue-router";
// import navBar from "@/components/navbar.vue";
// import AppContent from "@/components/appContent.vue";
// import AppLeft from "@/components/appLeft.vue";
// import AppRight from "@/components/appRight.vue";
import layout from "@/views/layout.vue";

const routes = [
  {
    path: "/",
    name: "layout",
    component: layout,
    children: [],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
