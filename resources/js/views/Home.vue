<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero text-white py-20">
      <div
        class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8"
      >
        <!-- Text Content -->
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            {{ $translations[$currentLang].home.heroTitle }}
          </h1>
          <p class="text-lg md:text-xl mb-6">
            {{ $translations[$currentLang].home.heroSubtitle }}
          </p>
          <router-link
            to="/contact"
            class="inline-block bg-white text-ipkoRed font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            {{ $translations[$currentLang].home.getStarted }}
          </router-link>
        </div>

        <!-- Image Content -->
        <div class="flex justify-center">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Hero Image"
            class="rounded-lg shadow-md"
          />
        </div>
      </div>
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

<style scoped>
.hero {
  background: linear-gradient(to right, #e30613, #8c1a1a);
}

.hero h1 {
  font-size: 2.5rem;
}

.hero p {
  font-size: 1.25rem;
}
</style>
