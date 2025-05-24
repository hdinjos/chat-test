import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/index.vue";
import Chat from "../pages/chat/index.vue";
import DetailChat from "../pages/chat/detail/index.vue";

const routes = [
  { path: "/", name: "home", component: Home, redirect: "chat" },
  {
    path: "/chat",
    name: "chat",
    component: Chat,
    children: [
      { path: ":room_id", name: "detail-chat", component: DetailChat },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
