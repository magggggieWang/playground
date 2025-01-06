import { createApp } from "vue";
import "./style.css";
import "./assets/font.scss";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";
const app = createApp(App);
app.use(MotionPlugin);
app.mount("#app");
