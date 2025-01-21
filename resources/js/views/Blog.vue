<template>
  <div class="bg-gray-100 min-h-screen">
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl font-bold text-center text-ipkoRed mb-8">
          Blog & News
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(post, index) in blogPosts"
            :key="index"
            class="bg-white rounded-lg shadow-md p-4"
          >
            <img
src="/public/images/ipko-ai.png"              :alt="post.title"
              class="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 class="text-lg font-semibold text-gray-800 mb-2">
              {{ post.title }}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              {{ post.description }}
            </p>
            <a
              href="#"
              class="text-ipkoRed font-semibold hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Blog",
  components: { Header, Footer },
  data() {
    return {
      blogPosts: [
        {
          title: "AI in Education",
          description: "How AI is reshaping learning experiences.",
          image: "/path/to/image1.jpg",
        },
        {
          title: "5G and AI",
          description: "What does 5G mean for AI technologies?",
          image: "/path/to/image2.jpg",
        },
        {
          title: "Green AI",
          description: "Making AI sustainable and environmentally friendly.",
          image: "/path/to/image3.jpg",
        },
        {
          title: "AI in Education",
          description: "How AI is reshaping learning experiences.",
          image: "/path/to/image1.jpg",
        },
        {
          title: "5G and AI",
          description: "What does 5G mean for AI technologies?",
          image: "/path/to/image2.jpg",
        },
        {
          title: "Green AI",
          description: "Making AI sustainable and environmentally friendly.",
          image: "/path/to/image3.jpg",
        },
        {
          title: "AI in Education",
          description: "How AI is reshaping learning experiences.",
          image: "/path/to/image1.jpg",
        },
        {
          title: "5G and AI",
          description: "What does 5G mean for AI technologies?",
          image: "/path/to/image2.jpg",
        },
        {
          title: "Green AI",
          description: "Making AI sustainable and environmentally friendly.",
          image: "/path/to/image3.jpg",
        },
        {
          title: "AI in Education",
          description: "How AI is reshaping learning experiences.",
          image: "/path/to/image1.jpg",
        },
        {
          title: "5G and AI",
          description: "What does 5G mean for AI technologies?",
          image: "/path/to/image2.jpg",
        },
        {
          title: "Green AI",
          description: "Making AI sustainable and environmentally friendly.",
          image: "/path/to/image3.jpg",
        },
        {
          title: "AI in Education",
          description: "How AI is reshaping learning experiences.",
          image: "/path/to/image1.jpg",
        },
        {
          title: "5G and AI",
          description: "What does 5G mean for AI technologies?",
          image: "/path/to/image2.jpg",
        },
        {
          title: "Green AI",
          description: "Making AI sustainable and environmentally friendly.",
          image: "/path/to/image3.jpg",
        },
        // Shto më shumë lajme...
      ],
    };
  },
};
</script>
