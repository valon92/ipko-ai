<template>
  <section class="tutorials bg-white py-12">
    <div class="container mx-auto px-4">
      <!-- Titulli Kryesor -->
      <h1 class="text-4xl font-bold text-ipkoRed text-center mb-6">
        {{ $translations[$currentLang].tutorials.title }}
      </h1>
      <p class="text-lg text-gray-600 text-center mb-8">
        {{ $translations[$currentLang].tutorials.subtitle }}
      </p>

      <!-- Lista e Kurseve -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="course in courses"
          :key="course.id"
          class="p-6 rounded-lg shadow-md bg-gray-100 hover:shadow-lg transition"
        >
          <h3 class="text-xl font-semibold text-ipkoDark mb-2">
            {{ $translations[$currentLang].tutorials.course1.title }}
          </h3>
          <p class="text-gray-600 mb-4">
            {{ $translations[$currentLang].tutorials.course1.description }}
          </p>
          <a
            :href="course.link"
            target="_blank"
            class="text-ipkoRed hover:underline font-semibold"
          >
            {{ $translations[$currentLang].tutorials.learnMore }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "Tutorials",
  data() {
    return {
      courses: [
        {
          id: 1,
          title: this.getTranslation("tutorials.course1.title"),
          description: this.getTranslation("tutorials.course1.description"),
          link: "https://example.com/course1",
        },
        {
          id: 2,
          title: this.getTranslation("tutorials.course2.title"),
          description: this.getTranslation("tutorials.course2.description"),
          link: "https://example.com/course2",
        },
        {
          id: 3,
          title: this.getTranslation("tutorials.course3.title"),
          description: this.getTranslation("tutorials.course3.description"),
          link: "https://example.com/course3",
        },
      ],
    };
  },
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
.tutorials h1 {
  font-size: 2.5rem;
}
.tutorials p {
  font-size: 1rem;
}
.tutorials .grid div {
  transition: transform 0.3s;
}
.tutorials .grid div:hover {
  transform: translateY(-5px);
}
</style>
  