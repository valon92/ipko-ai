<template>
  <!-- MetaHeader -->
  <MetaHeader />

  <header class="bg-white text-ipkoDark font-bold py-2 shadow-md sticky top-0 z-50">
    <div class="flex  justify-between items-center px-2">
      <!-- Logo -->
      <a href="/">
        <img src="/public/images/logo.png" alt=""
        class="flex lg:h-20 w-20"
        >
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex md:space-x-4 md:text-sm lg:text-base  ">
        <router-link to="/" class="hover:text-ipkoRed  md:px-3">
          {{ $translations[$root.$currentLang]?.header?.home || "Home" }}
        </router-link>
        <router-link to="/about" class="hover:text-ipkoRed" >
          {{ $translations[$root.$currentLang]?.header?.about || "About" }}
        </router-link>
        <router-link to="/contact" class="hover:text-ipkoRed">
          {{ $translations[$root.$currentLang]?.header?.contact || "Contact" }}
        </router-link>
        <router-link to="/faq" class="hover:text-ipkoRed">
          {{ $translations[$root.$currentLang]?.header?.faq || "FAQ" }}
        </router-link>
        <router-link to="/services" class="hover:text-ipkoRed">
          {{
            $translations[$root.$currentLang]?.header?.services || "Services"
          }}
        </router-link>
      </nav>

      <!-- Search Component -->

      <!-- SearchBar për Mobile -->
      <div class="px-3 mt-1 mb-1 w-full md:w-1/2">
        <SearchBar />
      </div>

      <!-- Language Selector -->
      <div class="hidden md:flex md:space-x-0">
        <button
          @click="changeLanguage('sq')"
          :class="{ 'bg-white text-ipkoRed': $root.$currentLang === 'sq' }"
          class="px-1 py-1 rounded-md"
        >
          SQ
        </button>
        <button
          @click="changeLanguage('en')"
          :class="{ 'bg-white text-ipkoRed': $root.$currentLang === 'en' }"
          class="px-1 py-0 rounded-md"
        >
          EN
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="md:hidden text-ipkoRed focus:outline-none"
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
    <nav v-if="isMenuOpen" class="md:hidden bg-white text-ipkoDark font-bold py-4">
      <ul class="flex flex-col space-y-2 text-center">
        <li>
          <router-link to="/" class="hover:text-gray-200">
            {{ $translations[$root.$currentLang]?.header?.home || "Home" }}
          </router-link>
          <router-link to="/about" class="hover:text-gray-200">
            {{ $translations[$root.$currentLang]?.header?.about || "About" }}
          </router-link>
          <router-link to="/contact" class="hover:text-gray-200">
            {{
              $translations[$root.$currentLang]?.header?.contact || "Contact"
            }}
          </router-link>
          <router-link to="/faq" class="hover:text-gray-200">
            {{ $translations[$root.$currentLang]?.header?.faq || "FAQ" }}
          </router-link>
          <router-link to="/services" class="hover:text-gray-200">
            {{
              $translations[$root.$currentLang]?.header?.services || "Services"
            }}
          </router-link>
          <router-link to="/business-support" class="hover:text-gray-200">
  {{ 
    $translations[$root.$currentLang]?.header?.BusinessSupport || "Business-Support"

}}
</router-link>

<router-link to="/revenue-model" class="hover:text-gray-200">
  {{ 
    $translations[$root.$currentLang]?.header?.RevenueModel || "Revenue-Model"

}}
</router-link>

        </li>
        <hr />
        <router-link
          to="signup"
          class=" py-1 text-ipkoDark font-bold   hover:bg-gray-200 hover:text-ipkoRed"
        >
          {{ $translations[$currentLang].meta.signup }}
        </router-link>
      </ul>
    </nav>
  </header>
</template>
  
  <script>
import MetaHeader from "./MetaHeader.vue";
import SearchBar from "./SearchBar.vue";

export default {
  name: "Header",
  components: { SearchBar, MetaHeader },
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
  