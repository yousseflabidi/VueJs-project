import Home from "./views/home.vue";
import Wallet from "./views/wallet.vue";
import Crypto from "./views/Crypto.vue";
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
  {
    name: "crypto",
    component: Crypto,
    path: "/crypto",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
