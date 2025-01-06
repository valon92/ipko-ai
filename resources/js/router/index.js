import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Faq from "@/views/Faq.vue";
import Services from "@/views/Services.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/faq", name: "Faq", component: Faq },
    { path: "/services", name: "Services", component: Services },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
