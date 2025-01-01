<template>
  <div>
    <Header />
    <section class="hero bg-ipkoRed text-white py-20 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        {{ $translations[$currentLang].home.heroTitle }}
      </h1>
      <p class="text-lg md:text-xl mb-8">
        {{ $translations[$currentLang].home.heroSubtitle }}
      </p>
      <a
        href="#"
        class="inline-block bg-white text-ipkoRed font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
      >
        {{ $translations[$currentLang].home.heroButton }}
      </a>
    </section>
    <Footer />
  </div>
</template>
  
  <script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "Home",
  components: { Header, Footer },
};
</script>
  