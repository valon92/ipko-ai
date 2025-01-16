<template>
    <section class="bg-gray-50 py-12">
      <div class="container mx-auto px-4">
        <!-- Titulli -->
        <h2 class="text-3xl font-bold text-ipkoRed mb-6">

<a href="/data-analytics">
  {{ $translations[$currentLang].dataAnalytics.title }}

</a>        </h2>
  
        <!-- Përshkrimi -->
        <p class="text-lg text-gray-700 mb-8">
          {{ $translations[$currentLang].dataAnalytics.description }}

        </p>

        
  
        <!-- Lista e Përfitimeve -->
        <ul class="space-y-4 mb-8">
          <li class="flex items-start">
            <svg
              class="w-6 h-6 text-ipkoRed flex-shrink-0 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
<a href="/">
  {{ $translations[$currentLang].dataAnalytics.point1 }}

</a>
          </li>
          <li class="flex items-start">
            <svg
              class="w-6 h-6 text-ipkoRed flex-shrink-0 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
<a href="/">
  {{ $translations[$currentLang].dataAnalytics.point2 }}

</a>
          </li>
          <li class="flex items-start">
            <svg
              class="w-6 h-6 text-ipkoRed flex-shrink-0 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {{ $translations[$currentLang].dataAnalytics.point3 }}

          </li>
        </ul>
  
        <!-- Shembulli i Përdorimit -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold text-ipkoRed mb-4">
            {{ $translations[$currentLang].dataAnalytics.exampleTitle }}

          </h3>
          <p class="text-gray-700">
            {{ $translations[$currentLang].dataAnalytics.exampleDescription }}

          </p>
        </div>
      </div>


    </section>
  </template>
  
  <script>
  
  export default {

    name: "DataAnalytics",
    methods: {
      getTranslation(key) {
        return (
          this.$translations?.[this.$root.$currentLang]?.[key] ||
          `Missing Translation: ${key}`
        );
      },
    },
  };
  </script>
  
  <style scoped>
  section {
    background: linear-gradient(to bottom, #f9f9f9, #ffffff);
  }
  </style>
  