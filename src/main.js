import { createApp } from "vue";
import "vue-toastification/dist/index.css";
import "./assets/style.css";
import App from "./App.vue";
import router from "./routers";

const app = createApp(App).use(router);
app.mount("#app");
// app.use(Toast);
// app.mount('#app');
