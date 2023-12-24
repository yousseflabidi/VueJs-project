import Home from "./views/home.vue";
import Wallet from "./views/wallet.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "home",
    component: Home,
    path: "/",
  },
  {
    name: "wallet",
    component: Wallet,
    path: "/wallet",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
