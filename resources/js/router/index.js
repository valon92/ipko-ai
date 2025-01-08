import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Faq from "@/views/Faq.vue";
import Services from "@/views/Services.vue";
import InnovativeSolutions from "../views/InnovativeSolutions.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/faq", name: "Faq", component: Faq },
    { path: "/services", name: "Services", component: Services },
    { path: "/innovative-solutions", component: InnovativeSolutions },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
