import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   component: () => import("@/pages/HomePage.vue"), // 首页使用懒加载
  // },
  {
    path: "/",
    component: () => import("@/pages/login.vue"), // 首页使用懒加载
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
