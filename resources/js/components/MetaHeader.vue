<template>
  <div class="meta-header bg-fixed bg-ipkoDark text-white text-sm py-2">
    <div class="mx-auto flex justify-between items-center px-4">
      <!-- Lidhjet Kryesore -->
      <div class="flex space-x-4">
        <a href="/startup" class="hover:text-gray-300">
          {{ $translations[$currentLang].meta.startup }}
        </a>
        <a href="/my-business" class="hover:text-gray-300">
          {{ $translations[$currentLang].meta.myBusiness }}
        </a>

        <a href="/business-support" class="hidden sm:block hover:text-gray-300">
          {{ 
    $translations[$root.$currentLang]?.header?.BusinessSupport || "Business-Support"

}}
        </a>
      
        
        <a href="/tutorials" class="hover:text-gray-300">
          {{ $translations[$currentLang].meta.tutorials }}
        </a>
      </div>

      <!-- Butonat për Autentifikim -->
      <div class="flex space-x-4">
        <a
          href="/login"
          class="px-4 py-1 border border-white rounded-md hover:bg-white hover:text-ipkoDark transition"
        >
          {{ $translations[$currentLang].meta.login }}
        </a>
        <a
          href="/signup"
          class="hidden sm:block px-4 py-1 bg-white text-ipkoDark rounded-md hover:bg-gray-200 transition"
        >
          {{ $translations[$currentLang].meta.signup }}
        </a>

        <li class="block sm:hidden">
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
  },
};
</script>
  
  <style scoped>
.meta-header {
  background-color: ipkoDark;
  font-size: 0.875rem;
}
</style>
  