<template>
  <header class="bg-ipkoRed text-white shadow-md sticky top-0 z-50">
    <nav
      class="container mx-auto flex justify-between items-center px-4 py-3 md:py-4"
    >
      <div class="text-2xl font-bold">IPKO.ai</div>

      <ul class="hidden md:flex md:space-x-8">
        <li>
          <router-link to="/" class="hover:text-gray-200">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-gray-200"
            >About</router-link
          >
        </li>
        <li>
          <router-link to="/contact" class="hover:text-gray-200"
            >Contact</router-link
          >
        </li>
      </ul>

      <div class="flex space-x-2">
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
  </header>
</template>
  