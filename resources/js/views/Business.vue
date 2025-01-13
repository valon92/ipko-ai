<template>
    <div class="py-12 min-h-screen">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-ipkoRed mb-6">
          {{ $translations[$currentLang].business.title }}
        </h1>
        <p class="text-lg text-gray-700 mb-6">
          {{ $translations[$currentLang].business.description }}

        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-2xl font-bold mb-4">
              {{ $translations[$currentLang].business.packages.title }}

            </h2>
            <p class="text-gray-700">
              {{ $translations[$currentLang].business.packages.description }}

            </p>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">
              {{ $translations[$currentLang].business.training.title }}

            </h2>
            <p class="text-gray-700">
              {{ $translations[$currentLang].business.training.description }}

            </p>
          </div>
        </div>
        <div class="mt-8">
          <h2 class="text-2xl font-bold mb-4">
            {{ $translations[$currentLang].business.partnership.title }}

          </h2>
          <p class="text-gray-700">
            {{ $translations[$currentLang].business.partnership.description }}

          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Business",
  };
  </script>
  