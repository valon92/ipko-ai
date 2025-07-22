  <template>
      <section class="bg-white text-black py-10">
        <div class="container mx-auto px-6 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            {{ $translations[$currentLang].businessPrograms.heroTitle }}
          </h1>
          <p class="text-lg text-black md:text-xl mb-6">
            {{ $translations[$currentLang].businessPrograms.heroSubtitle }}
          </p>
        </div>
      </section>
      <section class="py-1">
        <div class=" bg-white py-10 mx-auto px-6">
          <h2 class="text-3xl font-bold text-center text-black mb-10">
            {{ $translations[$currentLang].businessPrograms.title }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(program, index) in programs"
              :key="index"
              class="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 class="text-xl font-bold mb-4 text-ipkoRed">
                {{ program.title }}
              </h3>
              <p class="text-ipkoDark">{{ program.description }}</p>
            </div>
          </div>
        </div>


     




      </section>
  </template>
  
  <script>
  export default {
    name: "BusinessPrograms",
    data() {
      return {
        programs: [
          {
            title: "Market Management",
            description:
              "Tools for tracking inventory, managing orders, and optimizing sales.",
          },
          {
            title: "Logistics Optimization",
            description:
              "AI-powered solutions for efficient logistics and delivery management.",
          },
          {
            title: "Customized Business Solutions",
            description:
              "Personalized solutions tailored to your business needs.",
          },
        ],
      };
    },
  };
  
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  