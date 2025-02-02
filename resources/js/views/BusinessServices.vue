<template>
    <div class="bg-gray-100 min-h-screen">
      <!-- Hero Section -->
      <section class="bg-ipkoRed text-white py-16">
        <div class="container mx-auto px-6 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            {{ $translations[$currentLang].businessServices.heroTitle }}
          </h1>
          <p class="text-lg md:text-xl mb-6">
            {{ $translations[$currentLang].businessServices.heroSubtitle }}

          </p>
        </div>
      </section>
  
      <!-- Business Services List -->
      <section class="py-12">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center text-ipkoRed mb-10">
            {{ $translations[$currentLang].businessServices.servicesTitle }}

          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="service in services" :key="service.id" class="bg-white p-6 shadow-md rounded-lg text-center">
              <svg class="w-12 h-12 mx-auto text-ipkoRed mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path :d="service.iconPath" />
              </svg>
              <h3 class="text-xl font-bold mb-2">
                {{ $translations[$currentLang].businessServices.automation }}


            </h3>
              <p class="text-gray-700 mb-4">
                {{ $translations[$currentLang].businessServices.description }}

                
            </p>
              <button @click="subscribe(service.id)" class="bg-ipkoRed text-white px-4 py-2 rounded-md hover:bg-ipkoLight transition">
                {{ $translations[$currentLang].businessServices.subscribe }}

              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "BusinessServices",
    data() {
      return {
        services: [
          { id: 1, title: "businessServices.automation", description: "businessServices.automationDesc", iconPath: "M3 10h11M9 21H3m6 0V7H3m12 14h6m-6-7h6M9 3h6M9 7h6M3 3h6m6 0h6" },
          { id: 2, title: "businessServices.dataAnalytics", description: "businessServices.dataAnalyticsDesc", iconPath: "M3 10h11M9 21H3m6 0V7H3m12 14h6m-6-7h6M9 3h6M9 7h6M3 3h6m6 0h6" },
          { id: 3, title: "businessServices.financialSupport", description: "businessServices.financialSupportDesc", iconPath: "M3 10h11M9 21H3m6 0V7H3m12 14h6m-6-7h6M9 3h6M9 7h6M3 3h6m6 0h6" },
        ],
      };
    },
    methods: {
      getTranslation(key) {
        return this.$translations[this.$root.$currentLang]?.[key] || key;
      },
      subscribe(serviceId) {
        alert(`You have subscribed to service ID: ${serviceId}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  