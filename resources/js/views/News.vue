<template>
  <section class="news bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <!-- Titulli Kryesor -->
      <h1 class="text-4xl font-bold text-ipkoRed text-center mb-6">
        {{ $translations[$currentLang].news.title }}
      </h1>
      <p class="text-lg text-gray-600 text-center mb-8">
        {{ $translations[$currentLang].news.subtitle }}
      </p>

      <!-- Artikujt e Lajmeve -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="article in articles"
          :key="article.id"
          class="p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition"
        >
          <img :src="article.image" alt="News Image" class="rounded-md mb-4" />
          <h3 class="text-xl font-semibold text-ipkoDark mb-2">
            {{ $translations[$currentLang].news.article1.title }}
          </h3>
          <p class="text-gray-600 mb-4">
            {{ $translations[$currentLang].news.article1.summary }}
          </p>
          <a
            :href="article.link"
            target="_blank"
            class="text-ipkoRed hover:underline font-semibold"
          >
            {{ $translations[$currentLang].news.readMore }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "News",
  data() {
    return {
      articles: [
        {
          id: 1,
          title: this.getTranslation("news.article1.title"),
          summary: this.getTranslation("news.article1.summary"),
          image: "https://via.placeholder.com/400x250",
          link: "https://example.com/article1",
        },
        {
          id: 2,
          title: this.getTranslation("news.article2.title"),
          summary: this.getTranslation("news.article2.summary"),
          image: "https://via.placeholder.com/400x250",
          link: "https://example.com/article2",
        },
        {
          id: 3,
          title: this.getTranslation("news.article3.title"),
          summary: this.getTranslation("news.article3.summary"),
          image: "https://via.placeholder.com/400x250",
          link: "https://example.com/article3",
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
.news h1 {
  font-size: 2.5rem;
}
.news p {
  font-size: 1rem;
}
.news .grid div {
  transition: transform 0.3s;
}
.news .grid div:hover {
  transform: translateY(-5px);
}
</style>
  