<template>
    <div class="py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-ipkoRed mb-6">
          {{ $translations[$currentLang].aiHub.title }}

        </h1>
        <p class="text-lg text-gray-700 mb-8">
          {{ $translations[$currentLang].aiHub.description }}

        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-2xl font-bold mb-4">
              {{ $translations[$currentLang].aiHub.developerSpace.title }}

            </h2>
            <p class="text-gray-700">
              {{ $translations[$currentLang].aiHub.developerSpace.description }}

            </p>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">
              {{ $translations[$currentLang].aiHub.hackathons.title }}

            </h2>
            <p class="text-gray-700">
              {{ $translations[$currentLang].aiHub.hackathons.description }}

            </p>
          </div>
        </div>
        <div class="mt-8">
          <h2 class="text-2xl font-bold mb-4">
            {{ $translations[$currentLang].aiHub.apiAccess.title }}

          </h2>
          <p class="text-gray-700">
            {{ $translations[$currentLang].aiHub.apiAccess.description }}

          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AIHub",
  };
  </script>
  