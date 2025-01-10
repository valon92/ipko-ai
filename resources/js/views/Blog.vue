<template>
  <section class="blog bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <!-- Titulli Kryesor -->
      <h1 class="text-4xl font-bold text-ipkoRed text-center mb-6">
        {{ $translations[$currentLang].blog.title }}
      </h1>
      <p class="text-lg text-gray-600 text-center mb-8">
        {{ $translations[$currentLang].blog.subtitle }}
      </p>

      <!-- Artikujt e Blogut -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="post in posts"
          :key="post.id"
          class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
        >
          <img
            :src="post.image"
            alt="Blog Image"
            class="rounded-md mb-4 w-full h-48 object-cover"
          />
          <h3 class="text-xl font-semibold text-ipkoDark mb-2">
            {{ $translations[$currentLang].blog.post1.title }}
          </h3>
          <p class="text-gray-600 mb-4">
            {{ $translations[$currentLang].blog.post1.summary }}
          </p>

          <router-link
            :to="'/blog/' + post.id"
            class="text-ipkoRed px-8 hover:underline font-semibold"
          >
            {{ $translations[$currentLang].blog.readMore }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "Blog",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: this.getTranslation("blog.post1.title"),
          summary: this.getTranslation("blog.post1.summary"),
          image: "https://via.placeholder.com/400x250",
        },
        {
          id: 2,
          title: this.getTranslation("blog.post2.title"),
          summary: this.getTranslation("blog.post2.summary"),
          image: "https://via.placeholder.com/400x250",
        },
        {
          id: 3,
          title: this.getTranslation("blog.post3.title"),
          summary: this.getTranslation("blog.post3.summary"),
          image: "https://via.placeholder.com/400x250",
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
.blog h1 {
  font-size: 2.5rem;
}
.blog p {
  font-size: 1rem;
}
.blog .grid div {
  transition: transform 0.3s;
}
.blog .grid div:hover {
  transform: translateY(-5px);
}
</style>
  