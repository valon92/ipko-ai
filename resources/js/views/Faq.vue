<template>
  <div>
    <!-- Hero Section -->
    <section class="faq-hero bg-ipkoRed text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          {{ $translations[$currentLang].faq.title }}
        </h1>
        <p class="text-lg md:text-xl mb-6">
          {{ $translations[$currentLang].faq.subtitle }}
        </p>
      </div>
    </section>

    <!-- FAQ List -->
    <section class="faq-list py-16 bg-gray-100">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2
          class="text-3xl md:text-4xl font-bold text-ipkoRed mb-8 text-center"
        >
          {{ $translations[$currentLang].faq.heading }}
        </h2>
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white rounded-lg shadow-md p-4"
          >
            <button
              @click="toggleFAQ(index)"
              class="w-full flex justify-between items-center text-left font-semibold text-lg"
            >
              {{ faq.question }}
              <span>
                <svg
                  v-if="!faq.open"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <svg
                  v-else
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />
                </svg>
              </span>
            </button>
            <div v-if="faq.open" class="mt-2 text-gray-700">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta bg-ipkoRed text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ $translations[$currentLang].faq.ctaTitle }}
        </h2>
        <p class="text-lg mb-6">
          {{ $translations[$currentLang].faq.ctaDescription }}
        </p>
        <router-link
          to="/contact"
          class="inline-block bg-white text-ipkoRed font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
        >
          {{ $translations[$currentLang].faq.ctaButton }}
        </router-link>
      </div>
    </section>
  </div>
</template>
  
  <script>
export default {
  name: "FAQ",
  data() {
    return {
      faqs: [
        {
          question: this.getTranslation("faq.q1"),
          answer: this.getTranslation("faq.a1"),
          open: false,
        },
        {
          question: this.getTranslation("faq.q2"),
          answer: this.getTranslation("faq.a2"),
          open: false,
        },
        {
          question: this.getTranslation("faq.q3"),
          answer: this.getTranslation("faq.a3"),
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleFAQ(index) {
      this.faqs[index].open = !this.faqs[index].open;
    },
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
.faq-hero {
  background: linear-gradient(to right, #e30613, #8c1a1a);
}

.faq-list .rounded-lg {
  border: 1px solid #e2e8f0;
}

.cta {
  background: linear-gradient(to right, #e30613, #a40808);
}
</style>
  