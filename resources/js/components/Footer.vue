<template>
  <hr>
  <footer class=" text-black text-left font-bold pl-8 py-6 rounded shadow">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
        <!-- Quick Links -->
        <div>
          <ul class="text-left md:pl-10 ">
            <li>
              <router-link to="/" class="hover:underline">
                {{ $translations[$root.$currentLang]?.footer?.home || "Home" }}
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:underline">
                {{
                  $translations[$root.$currentLang]?.footer?.about || "About"
                }}
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:underline">
                {{
                  $translations[$root.$currentLang]?.footer?.contact ||
                  "Contact"
                }}
              </router-link>
            </li>
            <li>
              <router-link to="/faq" class="hover:underline">
                {{ $translations[$root.$currentLang]?.footer?.faq || "FAQ" }}
              </router-link>
            </li>
            <li>
              <router-link to="/faq" class="hover:underline">
                {{
                  $translations[$root.$currentLang]?.footer?.services ||
                  "Services"
                }}
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <ul class="md:text-left md:pl-10 ">
            <li>
              <router-link to="/startup" class="hover:underline">
                {{ $translations[$root.$currentLang]?.footer?.meta || "Startup" }}
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:underline">
                {{
                  $translations[$root.$currentLang]?.footer?.business || "My Business"
                }}
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:underline">
                {{
                  $translations[$root.$currentLang]?.footer?.tutorials ||
                  "Tutorials AI"
                }}
              </router-link>
            </li>

            <li>
              <router-link to="/faq" class="hover:underline">
                {{
                  $translations[$root.$currentLang]?.footer?.login ||
                  "LogIn"
                }}
              </router-link>
            </li>
          </ul>
        </div>

               <!-- Contact Information -->

        <div>
          <h3 class="text-lg font-bold pl-2 mb-2">
            {{
              $translations[$root.$currentLang].footer.contactUs ||
              "Contact Us"
            }}
          </h3>
          <p>
            {{ $translations[$root.$currentLang].footer.email || "Email" }}:

            <a href="mailto:support@ipko.ai" class="hover:underline">
              support@ipko.ai
            </a>
          </p>
          <p>
            {{ $translations[$root.$currentLang].footer.phone || "Phone" }}:

            <a href="tel:+38344123456" class="hover:underline">
              +383 44 123 456
            </a>
          </p>
        </div>
     


         <!-- Social Media Links -->
        <div class="grid ">
                    <!-- Language Selector -->
          <div class="pb-1 md:text-center">
            <button
              @click="changeLanguage('sq')"
              :class="{
                'bg-white text-ipkoRed': $root.$currentLang === 'sq',
              }"
              class="px-2 py-1 rounded-md"
            >
              SQ
            </button>
            <button
              @click="changeLanguage('en')"
              :class="{
                'bg-white text-ipkoRed': $root.$currentLang === 'en',
              }"
              class="px-2 py-1 rounded-md"
            >
              EN
            </button>
          </div>
          <h3 class="text-lg text-center  font-bold mb-0">
            {{
              $translations[$root.$currentLang]?.footer?.followUs ||
              "Follow Us"
            }}:
          </h3>
          <div class="flex justify-center space-x-2">
            <a href="#" class="hover:text-gray-200">Facebook</a>
            <a href="#" class="hover:text-gray-200">Twitter</a>
            <a href="#" class="hover:text-gray-200">LinkedIn</a>
          </div>
          </div>
       

      </div>
        <hr>
      <p class="text-sm mt-4 text-center">
        &copy; {{ new Date().getFullYear() }}
        {{
          $translations[$root.$currentLang]?.footer?.copyright || "copyright"
        }}
      </p>
    </div>
  </footer>
</template>
  
  <script>
export default {
  name: "Footer",
  methods: {
    getTranslation(key) {
      return this.$translations[this.$root.$currentLang]?.footer[key] || key;
    },
  },
};
</script>  
  <style scoped>
footer {
  /* background-color: #dcdcdc;  */
  /* Ngjyra kryesore e IPKO */
  /* background-color: #8C1A1A; */
  background-color: white;

}

footer a {
  transition: color 0.3s;
}

footer a:hover {
  color: #8C1A1A; /* Ngjyrë e artë për efektin hover */
}
</style>

  

