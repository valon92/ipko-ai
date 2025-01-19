<template>
    <div class="bg-gray-100 min-h-screen">
      <header class="bg-white text-ipkoRed py-32 shadow-md">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold">
            {{ $translations[$currentLang].businessPrograms.title }}
          </h1>
          <p class="mt-2 text-lg">
            {{ $translations[$currentLang].businessPrograms.subtitle }}
          </p>
        </div>
      </header>
  
      <section class="container mx-auto px-6 py-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="program in programs"
            :key="program.id"
            class="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img :src="program.image" alt="Program Image" class="w-full h-40 object-cover" />
            <div class="p-6">
              <h2 class="text-xl font-bold text-ipkoRed mb-2">
                {{ program.name }}
              </h2>
              <p class="text-gray-700 mb-4">
                {{ program.description }}
              </p>
              <router-link
                :to="'/programs/' + program.id"
                class="text-white bg-ipkoRed px-4 py-2 rounded-md hover:bg-ipkoLight transition"
              >
                {{ $translations[$currentLang].businessPrograms.learnMore }}
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "BusinessPrograms",
    data() {
      return {
        programs: [
          {
            id: 1,
            name: "Market Management",
            description: "Tools for optimizing inventory and sales.",
            image: "https://via.placeholder.com/400x200",
          },
          {
            id: 2,
            name: "Restaurant Tools",
            description: "Streamlined operations for hospitality businesses.",
            image: "https://via.placeholder.com/400x200",
          },
          {
            id: 3,
            name: "Logistics Optimization",
            description: "Efficient management of supply chains.",
            image: "https://via.placeholder.com/400x200",
          },
        ],
      };
    },
  };
  </script>
  