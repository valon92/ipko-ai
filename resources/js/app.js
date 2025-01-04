import { createApp } from "vue";
import App from "./components/App.vue";
import router from "./router";
import en from "./lang/en";
import sq from "./lang/sq";

const app = createApp(App);

// Përkthime Globale
app.config.globalProperties.$translations = { en, sq };

// Gjuha e parazgjedhur nga LocalStorage ose 'en'
app.config.globalProperties.$currentLang =
    localStorage.getItem("currentLang") || "en";

// Mixin për përkthime dhe ndërrimin e gjuhës
app.mixin({
    methods: {
        changeLanguage(lang) {
            this.$root.$currentLang = lang;
            localStorage.setItem("currentLang", lang);
            window.location.reload(); // Rifresko për përditësim
        },
        getTranslation(key) {
            return this.$translations[this.$root.$currentLang]?.[key] || key;
        },
    },
});

// Përdorimi i Router
app.use(router);
app.mount("#app");
