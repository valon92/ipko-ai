<template>
  <div>
    <!-- Hero Section -->
    <section class="services-hero bg-ipkoRed text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          <!-- Our Services -->
          {{ $translations[$currentLang].services.title }}
        </h1>
        <p class="text-lg md:text-xl mb-6">
          <!-- Explore the innovative solutions we offer. -->
          {{ $translations[$currentLang].services.subtitle }}
        </p>
      </div>
    </section>

    <!-- Services List -->
    <section class="services-list py-16 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-ipkoRed mb-8">
          <!-- What We Offer -->
          {{ $translations[$currentLang].services.offersTitle }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="p-6 bg-white rounded-lg shadow-md text-center">
            <div class="text-ipkoRed mb-4">
              <svg
                class="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 9.75L14.25 14.25M9.75 14.25L14.25 9.75M12 2.25v19.5"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">
              <!-- AI Consulting -->
              {{ $translations[$currentLang].services.service1.title }}
            </h3>
            <p class="text-gray-700">
              <!-- Strategic AI guidance -->
              {{ $translations[$currentLang].services.service1.description }}
            </p>
          </div>
          <!-- Service 2 -->
          <div class="p-6 bg-white rounded-lg shadow-md text-center">
            <div class="text-ipkoRed mb-4">
              <svg
                class="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">
              <!-- Automation Tools -->
              {{ $translations[$currentLang].services.service2.title }}
            </h3>
            <p class="text-gray-700">
              <!-- Efficient workflows. -->
              {{ $translations[$currentLang].services.service2.description }}
            </p>
          </div>
          <!-- Service 3 -->
          <div class="p-6 bg-white rounded-lg shadow-md text-center">
            <div class="text-ipkoRed mb-4">
              <svg
                class="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4M7 16h10"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">
              <!-- Data Analytics -->
              {{ $translations[$currentLang].services.service3.title }}
            </h3>
            <p class="text-gray-700">
              <!-- Insightful analytics. -->
              {{ $translations[$currentLang].services.service3.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta bg-ipkoRed text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ $translations[$currentLang].services.ctaTitle }}
        </h2>
        <p class="text-lg mb-6">
          {{ $translations[$currentLang].services.ctaDescription }}
        </p>
        <router-link
          to="/contact"
          class="inline-block bg-white text-ipkoRed font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
        >
          {{ $translations[$currentLang].services.ctaButton }}
        </router-link>
      </div>
    </section>
  </div>
</template>
  
  <script>
export default {
  name: "Services",
  methods: {
    getTranslation(key) {
      return (
        this.$translations[this.$root.$currentLang]?.[key] ||
        `Missing Translation: ${key}`
      );
    },
  },
};
</script>
  
  <style scoped>
.services-hero {
  background: linear-gradient(to right, #e30613, #8c1a1a);
}

.services-list .rounded-lg {
  border: 1px solid #e2e8f0;
}

.cta {
  background: linear-gradient(to right, #e30613, #a40808);
}
</style>
  