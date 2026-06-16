import { createApp } from "vue";

import "./style.css";
import App from "./App.vue";

// pure-css-loader
import "pure-css-loader/dist/css-loader.css";

const app = createApp(App);
app.mount("#app");
