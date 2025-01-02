<template>
  <section class="hero bg-ipkoRed text-white py-20 text-center">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        {{ $translations[$currentLang].home.heroTitle }}
      </h1>
      <p class="text-lg md:text-xl mb-8">
        {{ $translations[$currentLang].home.heroSubtitle }}
      </p>
      <a
        href="#"
        class="inline-block bg-white text-ipkoRed font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
      >
        {{ $translations[$currentLang].home.heroButton }}
      </a>
    </div>
  </section>
</template>
  