<template>
  <section class="startup bg-white py-12">
    <div class="container mx-auto px-4 text-center">
      <!-- Titulli Kryesor -->
      <h1 class="text-4xl font-bold text-ipkoRed mb-6">
        {{ $translations[$currentLang].startup.title }}
      </h1>
      <p class="text-lg text-gray-600 mb-8">
        {{ $translations[$currentLang].startup.subtitle }}
      </p>

      <!-- Përfitimet për Startup-et -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div class="p-6 rounded-lg shadow-md bg-gray-100">
          <h3 class="text-xl font-semibold text-ipkoDark mb-2">
            {{ $translations[$currentLang].startup.feature1.title }}
          </h3>
          <p class="text-gray-600">
            {{ $translations[$currentLang].startup.feature1.description }}
          </p>
        </div>
        <div class="p-6 rounded-lg shadow-md bg-gray-100">
          <h3 class="text-xl font-semibold text-ipkoDark mb-2">
            {{ $translations[$currentLang].startup.feature2.title }}
          </h3>
          <p class="text-gray-600">
            {{ $translations[$currentLang].startup.feature2.description }}
          </p>
        </div>
        <div class="p-6 rounded-lg shadow-md bg-gray-100">
          <h3 class="text-xl font-semibold text-ipkoDark mb-2">
            {{ $translations[$currentLang].startup.feature3.title }}
          </h3>
          <p class="text-gray-600">
            {{ $translations[$currentLang].startup.feature3.description }}
          </p>
        </div>
      </div>

      <!-- CTA (Call to Action) -->
      <div class="mt-12">
        <a
          href="/contact"
          class="inline-block bg-ipkoRed text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-ipkoLight transition duration-300"
        >
          {{ $translations[$currentLang].startup.cta }}
        </a>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "Startup",
  methods: {
    getTranslation(key) {
      return (
        this.$translations[this.$root.$currentLang]?.[key] ||
        `Missing Translation: ${key}`
      );
    },
  },
};
</script>
  
  <style scoped>
.startup h1 {
  font-size: 2.5rem;
}
.startup p {
  font-size: 1rem;
}
.startup .grid div {
  transition: transform 0.3s;
}
.startup .grid div:hover {
  transform: translateY(-5px);
}
</style>
  