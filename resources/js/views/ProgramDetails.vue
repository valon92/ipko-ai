<template>
    <div class="bg-gray-100 min-h-screen">
      <header class="bg-ipkoRed text-white py-6 shadow-md">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold">
            {{ $translations[$currentLang].ProgramDetails.features }}
    
          </h1>
        </div>
      </header>
  
      <section class="container mx-auto px-6 py-10">
        <h2 class="text-3xl font-bold text-ipkoRed mb-4">
          {{ $translations[$currentLang].programDetails.features }}
        </h2>
        <ul class="list-disc pl-6 text-gray-700">
          <li v-for="feature in program.features" :key="feature">
            {{ feature }}
          </li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProgramDetails",
    data() {
      return {
        program: {
          name: "Market Management",
          features: [
            "Track inventory levels in real-time.",
            "Predict sales trends with AI.",
            "Generate detailed reports for suppliers.",
          ],
        },
      };
    },
  };
  </script>
  