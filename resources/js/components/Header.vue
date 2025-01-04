<template>
  <header class="bg-ipkoRed text-white py-4 shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center px-4">
      <!-- Logo -->
      <h1 class="text-2xl font-bold">Ipko.ai</h1>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex md:space-x-6">
        <router-link to="/" class="hover:text-gray-200">
          {{ $translations[$root.$currentLang]?.footer?.home || "Home" }}
        </router-link>
        <router-link to="/about" class="hover:text-gray-200">
          {{ $translations[$root.$currentLang]?.footer?.about || "About" }}
        </router-link>
        <router-link to="/contact" class="hover:text-gray-200">
          {{ $translations[$root.$currentLang]?.footer?.contact || "Contact" }}
        </router-link>
        <router-link to="/services" class="hover:text-gray-200">
          {{
            $translations[$root.$currentLang]?.footer?.services || "Services"
          }}
        </router-link>
      </nav>

      <!-- Language Selector -->
      <div class="hidden md:flex space-x-2">
        <button
          @click="changeLanguage('sq')"
          :class="{ 'bg-white text-ipkoRed': $root.$currentLang === 'sq' }"
          class="px-2 py-1 rounded-md"
        >
          SQ
        </button>
        <button
          @click="changeLanguage('en')"
          :class="{ 'bg-white text-ipkoRed': $root.$currentLang === 'en' }"
          class="px-2 py-1 rounded-md"
        >
          EN
        </button>
      </div>

      <!-- Mobile Menu Button -->
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

    <!-- Mobile Navigation Menu -->
    <nav v-if="isMenuOpen" class="md:hidden bg-ipkoDark text-white py-4">
      <ul class="flex flex-col space-y-2 text-center">
        <li>
          <router-link to="/" class="hover:text-gray-200">
            {{ $translations[$root.$currentLang]?.footer?.home || "Home" }}
          </router-link>
          <router-link to="/about" class="hover:text-gray-200">
            {{ $translations[$root.$currentLang]?.footer?.about || "About" }}
          </router-link>
          <router-link to="/contact" class="hover:text-gray-200">
            {{
              $translations[$root.$currentLang]?.footer?.contact || "Contact"
            }}
          </router-link>
          <router-link to="/services" class="hover:text-gray-200">
            {{
              $translations[$root.$currentLang]?.footer?.services || "Services"
            }}
          </router-link>
        </li>
        <li class="flex justify-center space-x-4 mt-4">
          <button
            @click="changeLanguage('sq')"
            :class="{ 'bg-white text-ipkoRed': $root.$currentLang === 'sq' }"
            class="px-2 py-1 rounded-md"
          >
            SQ
          </button>
          <button
            @click="changeLanguage('en')"
            :class="{ 'bg-white text-ipkoRed': $root.$currentLang === 'en' }"
            class="px-2 py-1 rounded-md"
          >
            EN
          </button>
        </li>
      </ul>
    </nav>
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
    changeLanguage(lang) {
      this.$root.$currentLang = lang;
      localStorage.setItem("currentLang", lang);
      window.location.reload();
    },
    getTranslation(key) {
      return this.$translations[this.$root.$currentLang]?.[key] || key;
    },
  },
  mounted() {
    const savedLang = localStorage.getItem("currentLang");
    if (savedLang) {
      this.$root.$currentLang = savedLang;
    }
  },
};
</script>
  
  <style scoped>
header {
  z-index: 1000;
}

nav ul li a {
  display: block;
  padding: 10px 15px;
}

nav ul li a:hover {
  background-color: #e30613;
}
</style>
  