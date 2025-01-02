import { createApp } from "vue";
import App from "./components/App.vue";
import router from "./router";
import en from "./lang/en";
import sq from "./lang/sq";

const app = createApp(App);

// Mbështetje për përkthime
app.config.globalProperties.$translations = { en, sq };

// Inicializo gjuhën nga localStorage ose vendos parazgjedhjen 'en'
app.config.globalProperties.$currentLang =
    localStorage.getItem("currentLang") || "en";

// Mixin për ndërrimin e gjuhës
app.mixin({
    methods: {
        changeLanguage(lang) {
            this.$root.$currentLang = lang;
            localStorage.setItem("currentLang", lang);
        },
    },
});

app.use(router);
app.mount("#app");
