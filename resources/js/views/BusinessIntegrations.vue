<template>
    <div class="bg-gray-50 min-h-screen py-12">
      <section class="container mx-auto px-6">
        <h1 class="text-4xl font-bold text-center text-ipkoRed mb-8">
          {{ $translations[$currentLang].businessIntegrations.title }}
        </h1>
        <p class="text-lg text-center text-gray-700 mb-12">
          {{ $translations[$currentLang].businessIntegrations.description }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold text-ipkoRed mb-4">
              {{ $translations[$currentLang].businessIntegrations.apiTitle1 }}
            </h3>
            <p class="text-gray-700">
              {{ $translations[$currentLang].businessIntegrations.apiDesc1 }}
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold text-ipkoRed mb-4">
              {{ $translations[$currentLang].businessIntegrations.apiTitle2 }}
            </h3>
            <p class="text-gray-700">
              {{ $translations[$currentLang].businessIntegrations.apiDesc2 }}
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold text-ipkoRed mb-4">
              {{ $translations[$currentLang].businessIntegrations.apiTitle3 }}
            </h3>
            <p class="text-gray-700">
              {{ $translations[$currentLang].businessIntegrations.apiDesc3 }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "BusinessIntegrations",
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1000px;
  }
  </style>
  