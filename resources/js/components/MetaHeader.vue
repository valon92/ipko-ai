<template>
  <div class="meta-header bg-white text-black text-sm py-2 z-50 h-12">
    <div class="mx-auto flex justify-between items-center px-2">
      <!-- Lidhjet Kryesore -->
      <div class="flex space-x-4 md:ml-6 items-center">
        <a
          href="https://www.ipko.com"
          target="_blank"
          rel=""
          class="hover:font-bold"
        >
          {{ $translations[$currentLang].meta.RC }}
        </a>

        <a
          href="/startup"
          class="hover:font-bold"
        >
          {{ $translations[$currentLang].meta.startup }}
        </a>

        <!-- Dropdown Butoni (li) -->
        <li
          class="hidden md:block hover:font-bold btn dropdown text-black dropdown-toggle z-[99]"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ $translations[$currentLang].meta.Business }}
        </li>
        <!-- Dropdown Menu -->
        <ul class="dropdown-menu bg-white space-y-4 p-6 text-black">
          <li>
            <a
              href="/my-business"
              class="hidden md:block hover:font-bold"
            >
              {{ $translations[$currentLang].meta.myBusiness }}
            </a>
          </li>
          <li>
            <a
              href="/business-programs"
              class="hidden md:block rounded hover:font-bold"
            >
              {{ $translations[$root.$currentLang].meta.BusinessPrograms }}
            </a>
          </li>
          <li>
            <a
              href="/business-platform"
              class="hidden md:block rounded hover:font-bold"
            >
              {{ $translations[$root.$currentLang].meta.BusinessPlatform }}
            </a>
          </li>
          <li>
            <a
              href="/business-integrations"
              class="hidden md:block rounded hover:font-bold"
            >
              {{ $translations[$root.$currentLang].meta.BusinessIntegrations }}
            </a>
          </li>
        </ul>

        <a
          href="/revenue-model"
          class="hidden md:block rounded hover:font-bold"
        >
          {{ $translations[$root.$currentLang].meta.RevenueModel }}
        </a>

        <a
          href="/tutorials"
          class="hover:font-bold"
        >
          {{ $translations[$currentLang].meta.tutorials }}
        </a>
      </div>

      <!-- Butonat për Autentifikim -->
      <div class="flex space-x-4">
        <a
          href="/login"
          class="px-2 py-1 border border-black hover:font-bold rounded-md  transition"
        >
          {{ $translations[$currentLang].meta.login }}
        </a>
        <a
          href="/signup"
          class="hidden md:block px-4 py-1 text-black border border-black hover:font-bold  rounded-md transition"
        >
          {{ $translations[$currentLang].meta.signup }}
        </a>

        <!-- Butonat për ndryshimin e gjuhës (mobile) -->
        <li class="block md:hidden">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetaHeader",
  
  data() {
    return {
      isAuthMenuOpen: false,
    };
  },
  methods: {
    toggleAuthMenu() {
      this.isAuthMenuOpen = !this.isAuthMenuOpen;
    },
    getTranslation(key) {
      return (
        this.$translations[this.$root.$currentLang]?.[key] ||
        `Missing Translation: ${key}`
      );
    },
    // Shto edhe funksionin e ndryshimit të gjuhës nëse nuk e ke diku tjetër:
    changeLanguage(lang) {
      this.$root.$currentLang = lang;
    },
  },
};
</script>

<style scoped>
.meta-header {
  /* Nëse dëshiron të përdorësh një ngjyrë tjetër në vend të 'bg-white' të Tailwind,
     zëvendëso këtu. Përndryshe, mund ta heqësh fare background-color në CSS. */
  /* background-color: ipkoDark; */

  font-size: 0.875rem; /* ~14px */
}
</style>
