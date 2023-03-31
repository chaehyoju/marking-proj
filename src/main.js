import { createApp, provide } from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import "./style.css";

const app = createApp(App);
app.use(router);
app.provide("store", store);
app.mount("#app");
