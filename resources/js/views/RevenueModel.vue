<template>
    <div class="py-12 bg-gray-100 min-h-screen ">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-ipkoRed mb-8">
          {{ $translations[$currentLang].revenueModel.title }}

        </h1>
        <p class="text-lg text-gray-700 mb-12">
          {{ $translations[$currentLang].revenueModel.description }}

        </p>
  
        <!-- Seksionet -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Shërbime me Pagesë -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-ipkoDark mb-4">
              {{ $translations[$currentLang].revenueModel.paidServices.title }}

            </h2>
            <p class="text-gray-600">
              {{ $translations[$currentLang].revenueModel.paidServices.description }}

            </p>
          </div>
  
          <!-- Abonime -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-ipkoDark mb-4">
              {{ $translations[$currentLang].revenueModel.subscriptions.title }}

            </h2>
            <p class="text-gray-600">
              {{ $translations[$currentLang].revenueModel.subscriptions.description }}

            </p>
          </div>
  
          <!-- Platforma për Partnerë -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-ipkoDark mb-4">
              {{ $translations[$currentLang].revenueModel.partnerPlatform.title }}

            </h2>
            <p class="text-gray-600">
              {{ $translations[$currentLang].revenueModel.partnerPlatform.description }}

            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RevenueModel",
  };
  </script>
  
  <style scoped>
  h1 {
    color: #e30613;
  }
  </style>
  