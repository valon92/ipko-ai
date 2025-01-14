<template>
    <div class="py-12  min-h-screen" >
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-ipkoRed mb-6">
          {{ $translations[$currentLang].userDashboard.title }}

        </h1>
        <p class="text-lg text-gray-700 mb-8">
          {{ $translations[$currentLang].userDashboard.description }}

        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Seksioni i Rporteve -->
          <div>
            <h2 class="text-2xl font-bold mb-4">
              {{ $translations[$currentLang].userDashboard.reports.title }}

            </h2>
            <p class="text-gray-700">
              {{ $translations[$currentLang].userDashboard.reports.description }}

            </p>
          </div>
          <!-- Seksioni i Konfigurimeve -->
          <div>
            <h2 class="text-2xl font-bold mb-4">
              {{ $translations[$currentLang].userDashboard.settings.title }}

            </h2>
            <p class="text-gray-700">
              {{ $translations[$currentLang].userDashboard.settings.description }}

            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "UserDashboard",
  };
  </script>
  
  <style scoped>
  h1 {
    color: #e30613;
  }
  </style>
  