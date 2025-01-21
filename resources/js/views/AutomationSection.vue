<template>
    <section class="bg-white py-12">
      <div class="container mx-auto px-4  md:px-16">
        <!-- Titulli -->
        <h2 class="text-3xl font-bold text-ipkoRed mb-6">
          {{ $translations[$currentLang].automation.title }}
        </h2>
  
        <!-- Përshkrimi -->
        <p class="text-lg text-gray-700 mb-8">
          {{ $translations[$currentLang].automation.description }}

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
            {{ $translations[$currentLang].automation.point1 }}

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
            {{ $translations[$currentLang].automation.point2 }}

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
            {{ $translations[$currentLang].automation.point3 }}

          </li>
        </ul>
  
        <!-- Shembulli i Përdorimit -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold text-ipkoRed mb-4">
            {{ $translations[$currentLang].automation.exampleTitle }}

          </h3>
          <p class="text-gray-700">
            {{ $translations[$currentLang].automation.exampleDescription }}

          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AutomationSection",
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
  </style>
  