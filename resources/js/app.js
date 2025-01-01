import "./bootstrap";
import { createApp } from "vue";
import App from "./components/App.vue";
import router from "./router";
import en from "./lang/en";
import sq from "./lang/sq";

const app = createApp(App);

app.config.globalProperties.$translations = { en, sq };
app.config.globalProperties.$currentLang = "en";

app.use(router);
app.mount("#app");
