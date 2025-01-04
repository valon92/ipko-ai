<template>
  <div class="flex min-h-screen">
    <section class="py-12 text-center">
      <h1 class="text-4xl font-bold">{{ getTranslation("faq.title") }}</h1>
      <p class="text-lg mt-4">{{ getTranslation("faq.description") }}</p>
    </section>
  </div>
</template>
  
  <script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "FAQ",
  components: { Header, Footer },
  methods: {
    getTranslation(key) {
      return this.$translations[this.$root.$currentLang]?.faq[key] || key;
    },
  },
};
</script>
  