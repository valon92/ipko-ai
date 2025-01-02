import { createApp } from "vue";
import App from "./components/App.vue";
import router from "./router";
import en from "./lang/en";
import sq from "./lang/sq";

const app = createApp(App);

// Përkthime Globale
app.config.globalProperties.$translations = { en, sq };

// Gjuha e Parazgjedhur
app.config.globalProperties.$currentLang =
    localStorage.getItem("currentLang") || "en";

// Mixin për përkthime dhe ndërrim gjuhe
app.mixin({
    methods: {
        changeLanguage(lang) {
            this.$root.$currentLang = lang;
            localStorage.setItem("currentLang", lang);
            window.location.reload();
        },
        getTranslation(key) {
            const lang = this.$root?.$currentLang || "en";
            return this.$translations[lang]?.[key] || key;
        },
    },
});

// Përdorimi i Router
app.use(router);
app.mount("#app");
