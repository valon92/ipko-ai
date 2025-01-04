<template>
  <div class="flex min-h-screen">
    <section class="py-12 text-center">
      <h1 class="text-4xl font-bold">{{ getTranslation("home.title") }}</h1>
      <p class="text-lg mt-4">{{ getTranslation("home.description") }}</p>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: { Header, Footer },
  methods: {
    getTranslation(key) {
      return this.$translations[this.$root.$currentLang]?.home[key] || key;
    },
  },
};
</script>
