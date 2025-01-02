<template>
  <header class="bg-ipkoRed text-white py-4 shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center px-4">
      <!-- Logo -->
      <h1 class="text-2xl font-bold">Ipko.ai</h1>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex md:space-x-6">
        <router-link to="/" class="hover:text-gray-200">Home</router-link>
        <router-link to="/about" class="hover:text-gray-200">About</router-link>
        <router-link to="/contact" class="hover:text-gray-200"
          >Contact</router-link
        >
        <router-link to="/faq" class="hover:text-gray-200">FAQ</router-link>
      </nav>

      <!-- Language Selector -->
      <div class="hidden md:flex space-x-2">
        <button
          @click="$root.$currentLang = 'sq'"
          class="bg-white text-ipkoRed px-2 py-1 rounded-md"
        >
          SQ
        </button>
        <button
          @click="$root.$currentLang = 'en'"
          class="bg-white text-ipkoRed px-2 py-1 rounded-md"
        >
          EN
        </button>
      </div>

      <!-- Mobile Menu Button (Hamburger) -->
      <button
        @click="toggleMenu"
        class="md:hidden text-white focus:outline-none"
      >
        <svg
          v-if="!isMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen" class="md:hidden bg-ipkoRed text-white py-4">
      <nav class="flex flex-col space-y-2 text-center">
        <router-link
          @click="toggleMenu"
          to="/"
          class="block hover:bg-ipkoRed py-2"
          >Home</router-link
        >
        <router-link
          @click="toggleMenu"
          to="/about"
          class="block hover:bg-ipkoLight py-2"
          >About</router-link
        >
        <router-link
          @click="toggleMenu"
          to="/contact"
          class="block hover:bg-ipkoLight py-2"
          >Contact</router-link
        >
        <router-link
          @click="toggleMenu"
          to="/faq"
          class="block hover:bg-ipkoLight py-2"
          >FAQ</router-link
        >
        <div class="flex justify-center space-x-4 mt-4">
          <button
            @click="$root.$currentLang = 'sq'"
            class="bg-white text-ipkoRed px-2 py-1 rounded-md"
          >
            SQ
          </button>
          <button
            @click="$root.$currentLang = 'en'"
            class="bg-white text-ipkoRed px-2 py-1 rounded-md"
          >
            EN
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
  
  <script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
  
  <style scoped>
header {
  z-index: 1000;
}
</style>
  