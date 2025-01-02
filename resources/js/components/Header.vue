<template>
  <header class="bg-red-600 text-white py-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center px-4">
      <h1 class="text-xl font-bold">IPKO.ai</h1>
      <nav>
        <ul class="flex space-x-4">
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
          <li>
            <router-link to="/faq" class="hover:text-gray-200">FAQ</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
  