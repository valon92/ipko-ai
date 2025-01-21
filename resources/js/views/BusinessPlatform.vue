<template>
    <!-- "AI for Business" -->
    <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-ipkoRed mb-6">
        {{ $translations[$currentLang].businessPlatform.title }}

      </h2>
      <p class="text-lg text-gray-700 mb-8">
        {{ $translations[$currentLang].businessPlatform.description }}

      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Paketat -->
        <div class="bg-white p-6 shadow-md rounded-lg">
          <h3 class="text-xl font-bold mb-2">
            {{ $translations[$currentLang].businessPlatform.packages.title }}

          </h3>
          <p class="text-gray-700">
            {{ $translations[$currentLang].businessPlatform.packages.description }}

          </p>
        </div>
        <!-- Trajnimet -->
        <div class="bg-white p-6 shadow-md rounded-lg">
          <h3 class="text-xl font-bold mb-2">
            {{ $translations[$currentLang].businessPlatform.training.title }}

          </h3>
          <p class="text-gray-700">
            {{ $translations[$currentLang].businessPlatform.training.description }}

          </p>
        </div>
        <!-- Partneritetet -->
        <div class="bg-white p-6 shadow-md rounded-lg">
          <h3 class="text-xl font-bold mb-2">
            {{ $translations[$currentLang].businessPlatform.partnership.title }}

          </h3>
          <p class="text-gray-700">
            {{ $translations[$currentLang].businessPlatform.partnership.description }}

          </p>
        </div>
      </div>
      <a
        href="/business"
        class="mt-6 inline-block bg-ipkoRed text-white px-6 py-3 rounded-lg shadow hover:bg-ipkoLight transition"
      >
        {{ $translations[$currentLang].businessPlatform.learnMore }}

      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "BusinessPlatform",
  data() {
    return {
    
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>