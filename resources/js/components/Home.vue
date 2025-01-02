<template>
  <section class="hero bg-ipkoRed text-white py-20 text-center">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        {{ $translations[$root.$currentLang].home.heroTitle }}
      </h1>
      <p class="text-lg md:text-xl mb-8">
        {{ $translations[$root.$currentLang].home.heroSubtitle }}
      </p>
      <a
        href="#"
        class="inline-block bg-white text-ipkoRed font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
      >
        {{ $translations[$currentLang].home.heroButton }}
      </a>
    </div>
  </section>

  <section class="features bg-gray-100 py-12">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-ipkoRed mb-6">
        {{ $translations[$currentLang].home.featuresTitle }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2">
            {{ $translations[$currentLang].home.feature1 }}
          </h3>
          <p>{{ $translations[$currentLang].home.feature1Description }}</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2">
            {{ $translations[$currentLang].home.feature2 }}
          </h3>
          <p>{{ $translations[$currentLang].home.feature2Description }}</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2">
            {{ $translations[$currentLang].home.feature3 }}
          </h3>
          <p>{{ $translations[$currentLang].home.feature3Description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
  