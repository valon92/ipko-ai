<template>
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-ipkoRed text-center mb-6">
        {{ $translations[$currentLang].tutorials.title }}
      </h1>
      <p class="text-lg text-gray-600 text-center mb-8">
        {{ $translations[$currentLang].tutorials.subtitle }}
      </p>

      <!-- Grid i Kartave -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="tutorial in tutorials"
          :key="tutorial.id"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4"
        >
          <video
            :src="tutorial.videoUrl"
            controls
            class="w-full rounded-md mb-4"
          ></video>
          <h3 class="text-xl font-semibold text-ipkoDark mb-2">
            {{ $translations[$currentLang].tutorials.tutorial1.title }}
          </h3>
          <p class="text-gray-600">
            {{ $translations[$currentLang].tutorials.tutorial1.description }}
          </p>
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
      tutorials: [
        {
          id: 1,
          title: this.getTranslation("tutorials.tutorial1.title"),
          description: this.getTranslation("tutorials.tutorial1.description"),
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 2,
          title: this.getTranslation("tutorials.tutorial2.title"),
          description: this.getTranslation("tutorials.tutorial2.description"),
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        // Shto edhe 10 karta të tjera
        {
          id: 3,
          title: this.getTranslation("tutorials.tutorial3.title"),
          description: this.getTranslation("tutorials.tutorial3.description"),
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 4,
          title: this.getTranslation("tutorials.tutorial4.title"),
          description: this.getTranslation("tutorials.tutorial4.description"),
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 5,
          title: this.getTranslation("tutorials.tutorial5.title"),
          description: this.getTranslation("tutorials.tutorial5.description"),
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 6,
          title: this.getTranslation("tutorials.tutorial6.title"),
          description: this.getTranslation("tutorials.tutorial6.description"),
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 7,
          title: this.getTranslation("tutorials.tutorial7.title"),
          description: this.getTranslation("tutorials.tutorial7.description"),
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 8,
          title: this.getTranslation("tutorials.tutorial8.title"),
          description: this.getTranslation("tutorials.tutorial8.description"),
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 9,
          title: this.getTranslation("tutorials.tutorial9.title"),
          description: this.getTranslation("tutorials.tutorial9.description"),
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 10,
          title: this.getTranslation("tutorials.tutorial10.title"),
          description: this.getTranslation("tutorials.tutorial10.description"),
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 11,
          title: this.getTranslation("tutorials.tutorial11.title"),
          description: this.getTranslation("tutorials.tutorial11.description"),
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          id: 12,
          title: this.getTranslation("tutorials.tutorial12.title"),
          description: this.getTranslation("tutorials.tutorial12.description"),
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
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
section {
  background-color: #f9f9f9;
}
</style>
  