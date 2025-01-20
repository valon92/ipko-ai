  <template>
    <div class="bg-gray-100 min-h-screen">
      <section class="bg-ipkoRed text-white py-16">
        <div class="container mx-auto px-6 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            {{ $translations[$currentLang].businessPrograms.heroTitle }}
          </h1>
          <p class="text-lg md:text-xl mb-6">
            {{ $translations[$currentLang].businessPrograms.heroSubtitle }}
          </p>
        </div>
      </section>
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center text-ipkoRed mb-10">
            {{ $translations[$currentLang].businessPrograms.title }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(program, index) in programs"
              :key="index"
              class="bg-gray-100 p-6 rounded-lg shadow-md text-center"
            >
              <h3 class="text-xl font-bold mb-4 text-ipkoRed">
                {{ program.title }}
              </h3>
              <p class="text-gray-700">{{ program.description }}</p>
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
  