import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Faq from "@/views/Faq.vue";
import Services from "@/views/Services.vue";
import InnovativeSolutions from "../views/InnovativeSolutions.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import Startup from "../views/Startup.vue";
import MyBusiness from "../views/MyBusiness.vue";
import Tutorials from "../views/Tutorials.vue";
import News from "../views/News.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/faq", name: "Faq", component: Faq },
    { path: "/services", name: "Services", component: Services },
    { path: "/innovative-solutions", component: InnovativeSolutions },
    { path: "/signup", component: SignUp },
    { path: "/login", component: Login },
    { path: "/startup", component: Startup },
    { path: "/my-business", component: MyBusiness },
    { path: "/tutorials", component: Tutorials },
    { path: "/news", component: News },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
