<template>
  <footer class="bg-ipkoRed text-white text-center py-6">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-2">Quick Links</h3>
          <ul>
            <li>
              <router-link to="/" class="hover:underline">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:underline"
                >About</router-link
              >
            </li>
            <li>
              <router-link to="/contact" class="hover:underline"
                >Contact</router-link
              >
            </li>
            <li>
              <router-link to="/faq" class="hover:underline">FAQ</router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Information -->
        <div>
          <h3 class="text-lg font-bold mb-2">Contact Us</h3>
          <p>
            Email:
            <a href="mailto:support@ipko.ai" class="hover:underline"
              >support@ipko.ai</a
            >
          </p>
          <p>
            Phone:
            <a href="tel:+38344123456" class="hover:underline"
              >+383 44 123 456</a
            >
          </p>
        </div>

        <!-- Social Media Links -->
        <div>
          <h3 class="text-lg font-bold mb-2">Follow Us</h3>
          <div class="flex justify-center space-x-4">
            <a href="#" class="hover:text-gray-200">Facebook</a>
            <a href="#" class="hover:text-gray-200">Twitter</a>
            <a href="#" class="hover:text-gray-200">LinkedIn</a>
          </div>
        </div>
      </div>
      <p class="text-sm mt-4">
        &copy; {{ new Date().getFullYear() }} IPKO.ai. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>
  
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
  