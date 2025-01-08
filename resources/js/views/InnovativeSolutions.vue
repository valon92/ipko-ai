<template>
  <section class="innovative bg-white py-12">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl font-bold text-ipkoRed mb-6">
        {{ $translations[$currentLang].innovative.title }}
      </h1>
      <p class="text-lg text-gray-700 mb-6">
        {{ $translations[$currentLang].innovative.subtitle }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
        <!-- Imazhi -->
        <div class="flex justify-center">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Innovative Solutions"
            class="rounded-lg shadow-md"
          />
        </div>
        <!-- Përmbajtja -->
        <div>
          <h2 class="text-2xl font-bold mb-4">
            {{ $translations[$currentLang].innovative.heading }}
          </h2>
          <p class="text-lg text-gray-700 mb-4">
            {{ $translations[$currentLang].innovative.description }}
          </p>
          <a
            href="/contact"
            class="inline-block bg-ipkoRed text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-ipkoLight transition duration-300"
          >
            {{ $translations[$currentLang].innovative.cta }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "InnovativeSolutions",
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
.innovative img {
  max-width: 100%;
  height: auto;
}
</style>
  