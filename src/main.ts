import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import "./style.css";
import App from "./App.vue";

// pure-css-loader
import "pure-css-loader/dist/css-loader.css";

const app = createApp(App);
app.use(VueAxios, axios);
app.mount("#app");
