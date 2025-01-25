<template>
  <div
  
   class="meta-header relative z-20 bg-white text-black text-sm py-2">
    <div class="mx-auto flex justify-between items-center px-2">
      <!-- Lidhjet Kryesore -->
      <div class="flex space-x-4 md:ml-12 items-center">
        <a
      href="https://www.ipko.com"
      target="_blank"
      rel=""
      class=
      " hover:font-bold"
      >
      {{ $translations[$currentLang].meta.RC }}
    </a>

        <a href="/startup" 
        class=
        "hover:font-bold "
        >
          {{ $translations[$currentLang].meta.startup }}
        </a>

    
  <li
  class="hidden md:block  hover:font-bold btn dropdown text-blzck dropdown-toggle" 
    type="button" data-bs-toggle="dropdown" aria-expanded="false">
   {{ $translations[$currentLang].meta.Business}}
      </li>
  <ul class="dropdown-menu absolute bg-white space-y-4 p-6 text-black">
   <li>
    <a href="/my-business" class=
        "hidden md:block     hover:font-bold "
        >
          {{ $translations[$currentLang].meta.myBusiness }}
        </a>
   </li>

    <li>
      <a href="/business-programs" class=
"hidden md:block  rounded  hover:font-bold "        >
          {{ $translations[$root.$currentLang].meta.BusinessPrograms}}
        </a>
    </li>


    <li>
      <a href="/business-platform" class=
"hidden md:block  rounded  hover:font-bold "        >
          {{ $translations[$root.$currentLang].meta.BusinessPlatform}}
        </a>   
       </li>

       <li>
        <a href="/business-integrations" class=
"hidden md:block  rounded  hover:font-bold "        >
          {{ $translations[$root.$currentLang].meta.BusinessIntegrations}}
        </a>
       </li>

  </ul>


    

        <a href="/revenue-model" 
        class=
"hidden md:block  rounded  hover:font-bold"        >
          {{ $translations[$root.$currentLang].meta.RevenueModel}}
        </a>
      
        
        <a href="/tutorials" class=
        " hover:font-bold"
        >
          {{ $translations[$currentLang].meta.tutorials }}
        </a>
      </div>

      <!-- Butonat për Autentifikim -->
      <div class="flex space-x-4">
        <a
          href="/login"
          class="px-2 py-1 border border-black  rounded-md  hover:text-lg transition"
        >
          {{ $translations[$currentLang].meta.login }}
        </a>
        <a
          href="/signup"
          class="hidden md:block px-4 py-1 text-black border border-black hover:text-lg  rounded-md transition"
        >
          {{ $translations[$currentLang].meta.signup }}
        </a>

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
  },
};
</script>
  
  <style scoped>
.meta-header {
  background-color: ipkoDark;
  font-size: 0.875rem;
}
</style>
  