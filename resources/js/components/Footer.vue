<template>
  <footer class="bg-ipkoRed text-white text-center py-6">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-2">
            {{
              $translations[$root.$currentLang]?.footer?.quickLinks ||
              "Quick Links"
            }}
          </h3>
          <ul>
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

        <!-- Contact Information -->
        <div>
          <h3 class="text-lg font-bold mb-2">
            {{
              $translations[$root.$currentLang]?.footer?.contactUs ||
              "Contact Us"
            }}
          </h3>
          <p>
            {{ $translations[$root.$currentLang]?.footer?.email || "Email" }}:

            <a href="mailto:support@ipko.ai" class="hover:underline">
              support@ipko.ai
            </a>
          </p>
          <p>
            {{ $translations[$root.$currentLang]?.footer?.phone || "Phone" }}:

            <a href="tel:+38344123456" class="hover:underline">
              +383 44 123 456
            </a>
          </p>
        </div>

        <!-- Social Media Links -->
        <div>
          <h3 class="text-lg font-bold mb-2">
            {{
              $translations[$root.$currentLang]?.footer?.followUs ||
              "Follow Us"
            }}:
          </h3>
          <div class="flex justify-center space-x-4">
            <a href="#" class="hover:text-gray-200">Facebook</a>
            <a href="#" class="hover:text-gray-200">Twitter</a>
            <a href="#" class="hover:text-gray-200">LinkedIn</a>
          </div>
        </div>
      </div>
      <p class="text-sm mt-4">
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
  background-color: #e30613; /* Ngjyra kryesore e IPKO */
}

footer a {
  transition: color 0.3s;
}

footer a:hover {
  color: #ffd700; /* Ngjyrë e artë për efektin hover */
}
</style>
  

