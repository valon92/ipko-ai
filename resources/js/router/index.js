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
import Blog from "../views/Blog.vue";
import RegisterBusiness from "../views/RegisterBusiness.vue";
import BusinessSupport from "../views/BusinessSupport.vue";
import Business from "../views/Business.vue";
import AIHub from "../views/AIHub.vue";
import UserDashboard from "../views/UserDashboard.vue";
import RevenueModel from "../views/RevenueModel.vue";
import DataAnalyticsPage from "../views/DataAnalyticsPage.vue";








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
    { path: "/blog", component: Blog },
    { path: "/register-business", component: RegisterBusiness },
    { path: "/business-support",  component: BusinessSupport },
    { path: "/business",  component: Business },
    { path: "/ai-hub",  component: AIHub },
    {path: "/user-dashboard",component: UserDashboard},
    {path: "/revenue-model",component: RevenueModel},
    { path: "/data-analytics", component: DataAnalyticsPage },






];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
