<template>
  <!-- MetaHeader -->
  <MetaHeader />
  

  <!-- HEADER KRYESOR: Sticky + z-10 (ose z-50, varësisht nevojës) -->
  <header
    class="bg-white sticky top-0 z-10 text-black font-bold py-2 rounded-lg shadow-md"
  >
    <div class="flex static justify-between items-center px-4">
      <!-- Logo -->
      <a href="/" class="relative inline-block w-10 h-10">
  <!-- Imazhi normal -->
  <img
    src="/public/images/ipko5.png"
    alt="ipko"
    class="absolute top-0 left-0 w-full h-full object-contain"
  />
</a>


      <!-- Desktop Navigation -->
      <nav class="hidden md:flex md:space-x-4 md:text-sm lg:text-base">
        <router-link
          to="/"
          class="hover:text-ipkoRed hover:font-bold hover:text-lg md:px-3"
        >
          {{ $translations[$root.$currentLang].header.home }}
        </router-link>

        <router-link
          to="/about"
          class="hover:text-ipkoRed hover:font-bold hover:text-lg md:px-3"
        >
          {{ $translations[$root.$currentLang].header.about }}
        </router-link>

        <router-link
          to="/shop"
          class="hover:text-ipkoRed hover:font-bold hover:text-lg md:px-3"
        >
          {{ $translations[$root.$currentLang].header.shop }}
        </router-link>

        <router-link
          to="/services"
          class="hover:text-ipkoRed hover:font-bold hover:text-lg md:px-3"
        >
          {{ $translations[$root.$currentLang].header.services }}
        </router-link>

        <router-link
          to="/contact"
          class="hover:text-ipkoRed hover:font-bold hover:text-lg md:px-3"
        >
          {{ $translations[$root.$currentLang].header.contact }}
        </router-link>
      </nav>

      <!-- SearchBar për Mobile -->
      <div class="px-3 mt-1 mb-1 w-full md:w-1/2">
        <SearchBar />
      </div>

      <!-- Language Selector (Desktop) -->
      <div class="hidden md:flex md:space-x-2 items-center">
        <button
          @click="changeLanguage('sq')"
          :class="{ 'text-ipkoRed': $root.$currentLang === 'sq' }"
          class="px-2 py-1 rounded-md"
        >
          SQ
        </button>
        <button
          @click="changeLanguage('en')"
          :class="{ 'text-ipkoRed': $root.$currentLang === 'en' }"
          class="px-2 py-1 rounded-md"
        >
          EN
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="md:hidden text-ipkoRed focus:outline-none"
      >
        <!-- Ikona e hamburgers ose “X” -->
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

    <!-- Mobile Navigation Menu (vetëm kur është hapur) -->
    <nav v-if="isMenuOpen" class="md:hidden bg-white text-black font-bold py-4">
      <ul class="flex flex-col space-y-2 text-left pl-12">
        <li>
          <router-link
            to="/"
            class="hover:text-white hover:text-lg"
          >
            {{ $translations[$root.$currentLang].header.home || "Home" }}
          </router-link>
          <router-link
            to="/about"
            class="hover:text-white hover:text-lg"
          >
            {{ $translations[$root.$currentLang].header.about || "About" }}
          </router-link>
          <router-link
            to="/shop"
            class="hover:text-white hover:text-lg"
          >
            {{ $translations[$root.$currentLang].header.shop || "Shop" }}
          </router-link>
          <router-link
            to="/services"
            class="hover:text-white hover:text-lg"
          >
            {{ $translations[$root.$currentLang].header.services || "Services" }}
          </router-link>
          <router-link
            to="/contact"
            class="hover:text-white hover:text-lg"
          >
            {{ $translations[$root.$currentLang].header.contact || "Contact" }}
          </router-link>

          <!-- Shtesa Business -->
          <router-link
            to="/my-business"
            class="hover:text-white hover:text-lg"
          >
            {{ $translations[$root.$currentLang].header.myBusiness }}
          </router-link>

          <router-link
            to="/business-support"
            class="hover:text-white hover:text-lg"
          >
            {{ $translations[$root.$currentLang].header.BusinessSupport }}
          </router-link>

          <router-link
            to="/business-programs"
            class="hover:text-white hover:text-lg"
          >
            {{ $translations[$root.$currentLang].header.BusinessPrograms }}
          </router-link>

          <router-link
            to="/business-platform"
            class="hover:text-white hover:text-lg"
          >
            {{ $translations[$root.$currentLang].header.BusinessPlatform }}
          </router-link>

          <router-link
            to="/business-integrations"
            class="hover:text-white hover:text-lg"
          >
            {{ $translations[$root.$currentLang].header.BusinessIntegrations }}
          </router-link>

          <router-link
            to="/revenue-model"
            class="hover:text-white hover:text-lg"
          >
            {{ $translations[$root.$currentLang].header.RevenueModel }}
          </router-link>
        </li>

        <hr />

        <router-link
          to="signup"
          class="py-1 pl-4 font-bold hover:text-white hover:bg-ipkoRed hover:py-2"
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
      // Opsionale: nëse nuk do refresh:
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
/* Nëse do të përdorësh Tailwind, shpesh s’ke nevojë për shume CSS këtu. */
/* Mund të ruash disa stile personalizuese. */

/* Për shembull, hiq z-index nga këtu, 
   sepse po e menaxhon Tailwind me z-10 ose z-50. */

/* Thjesht një shembull: */
nav ul li a {
  display: block;
  padding: 10px 15px;
}

nav ul li a:hover {
  background-color: #e30613; /* Ndoshta ipkoRed? */
  color: white; /* Që teksti të jetë i dukshëm */
}
</style>
