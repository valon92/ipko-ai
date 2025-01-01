<template>
  <div>
    <Header />
    <section class="about bg-ipkoLight py-12">
      <div
        class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <img
            src="https://via.placeholder.com/500x300"
            alt="About Us"
            class="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-ipkoRed mb-4">
            {{ $translations[$currentLang].about.title }}
          </h2>
          <p class="text-lg text-gray-700 mb-4">
            {{ $translations[$currentLang].about.description }}
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
  
  <script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "About",
  components: { Header, Footer },
};
</script>
  