<template>
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold  mb-8">
          {{ $translations[$currentLang].blogSection.title }}
        </h2>
        <div class="relative">
          <!-- Carousel Wrapper -->
          <div
            class="flex overflow-x-scroll no-scrollbar gap-6"
            ref="carousel"
          >
            <div
              v-for="(post, index) in blogPosts"
              :key="index"
              class="bg-white shadow-md rounded-lg p-4 w-80 shrink-0"
            >
              <img
                src="/public/images/ipko-ai.png"
                :alt="post.title"
                class="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 class="text-lg font-semibold text-ipkoRed mb-2">
                {{ post.title }}

              </h3>
              <p class="text-ipkoDark text-sm mb-4">
                {{ post.description }}
              </p>
              <a
                href="#"
                class="text-white text-sm bg-ipkoRed py-2 px-2 rounded   hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
  
          <!-- Shigjeta e majtë -->
          <button
            class="absolute top-1/2 -translate-y-1/2 left-0 bg-ipkoRed text-white p-2 rounded-full hover:bg-ipkoDark"
            @click="scrollLeft"
          >
            ◀
          </button>
  
          <!-- Shigjeta e djathtë -->
          <button
            class="absolute top-1/2 -translate-y-1/2 right-0 bg-ipkoRed text-white p-2 rounded-full hover:bg-ipkoDark"
            @click="scrollRight"
          >
            ▶
          </button>
        </div>
  
        <!-- Button për më shumë -->
        <div class="mt-8">
          <router-link
            to="/blog"
            class="bg-ipkoRed text-white px-6 py-3 rounded-lg shadow-md hover:bg-ipkoDark"
          >
            See All Posts
          </router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HomeBlogSection",
    data() {
      return {
        blogPosts: [
          {
            title: "AI in Healthcare",
            description: "How AI is transforming the medical field.",
            image: "/public/images/ipko1.png",
          },
          {
            title: "Tech Trends 2025",
            description: "Discover the top technologies to watch.",
            image: "/path/to/image2.jpg",
          },
          {
            title: "Future of AI",
            description: "Exploring what's next in AI development.",
            image: "/path/to/image3.jpg",
          },
          {
            title: "Tech Trends 2025",
            description: "Discover the top technologies to watch.",
            image: "/path/to/image2.jpg",
          },
          {
            title: "Tech Trends 2025",
            description: "Discover the top technologies to watch.",
            image: "/path/to/image2.jpg",
          },
          {
            title: "Tech Trends 2025",
            description: "Discover the top technologies to watch.",
            image: "/path/to/image2.jpg",
          },
          {
            title: "Tech Trends 2025",
            description: "Discover the top technologies to watch.",
            image: "/path/to/image2.jpg",
          },
          
          // Shto deri në 10 karta...
        ],
      };
    },
    methods: {
      scrollLeft() {
        this.$refs.carousel.scrollBy({ left: -300, behavior: "smooth" });
      },
      scrollRight() {
        this.$refs.carousel.scrollBy({ left: 300, behavior: "smooth" });
      },
    },
  };
  </script>
  
  <style scoped>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  </style>
  