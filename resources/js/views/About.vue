<template>
  <section class="about bg-ipkoDark py-12 min-h-screen">
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
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          {{ $translations[$currentLang].about.title }}
        </h2>
        <p class="text-lg text-white mb-4">
          {{ $translations[$currentLang].about.description }}
        </p>
      </div>
    </div>
  </section>
</template>
  
  <script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "About",
  components: { Header, Footer },
};
</script>
  