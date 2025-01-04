<template>
  <section class="py-12 bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl font-bold mb-6">
        {{ $translations[$currentLang].services.title }}
      </h1>
      <p class="text-lg text-gray-700 mb-8">
        {{ $translations[$currentLang].services.subtitle }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Service 1 -->
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 class="text-xl font-semibold mb-2">
            {{ $translations[$currentLang].services.service1.title }}
          </h3>
          <p class="text-gray-600">
            {{ $translations[$currentLang].services.service1.description }}
          </p>
        </div>
        <!-- Service 2 -->
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 class="text-xl font-semibold mb-2">
            {{ $translations[$currentLang].services.service2.title }}
          </h3>
          <p class="text-gray-600">
            {{ $translations[$currentLang].services.service2.description }}
          </p>
        </div>
        <!-- Service 3 -->
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 class="text-xl font-semibold mb-2">
            {{ $translations[$currentLang].services.service3.title }}
          </h3>
          <p class="text-gray-600">
            {{ $translations[$currentLang].services.service3.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Services",
  components: { Header, Footer },
  methods: {
    getTranslation(key) {
      return this.$translations[this.$root.$currentLang]?.services[key] || key;
    },
  },
};
</script>
  
  <style scoped>
section {
  background-color: #f9fafb;
}
</style>
  