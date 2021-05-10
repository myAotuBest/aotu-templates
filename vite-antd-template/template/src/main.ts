import { createApp } from "vue";
import Antd from "ant-design-vue";
import store from "./store";
import App from "./App.vue";
import route from "./router";
import "ant-design-vue/dist/antd.css";

createApp(App).use(route).use(store).use(Antd).mount("#app");
