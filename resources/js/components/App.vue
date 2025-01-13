<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <router-view />

    <div>
    <!-- Përmbajtja Kryesore -->

    <!-- Chatbot -->
    <Chatbot />
  </div>

    <!-- Footer -->
    <Footer />

    <!-- Scroll to Top Button -->
    <button
      v-show="showScrollButton"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 bg-ipkoRed text-white p-3 rounded-full shadow-lg hover:bg-ipkoDark transition duration-300"
    >
      ↑
    </button>
  </div>
</template>
  <script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Chatbot from "../components/Chatbot.vue";


export default {
  name: "App",
  components: {
    Header,
    Footer,
    Chatbot,
  },
  data() {
    return {
      showScrollButton: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      this.showScrollButton = window.scrollY > 300;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
  
  <style scoped>
button.fixed {
  z-index: 1000;
  font-size: 1.5rem;
}
</style>
  