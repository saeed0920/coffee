import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import { router } from "./route/index";
import App from "./App.vue";

const vueApp = createApp(App);

vueApp.use(createPinia());
vueApp.use(router);
vueApp.mount("#app");
