<template>
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <!-- Button për Regjistrimin e Biznesit -->
      <div class="text-center">
        <router-link
          to="/register-business"
          class="inline-block bg-ipkoRed text-white font-semibold py-3 px-6 mx-2  rounded-lg shadow-md hover:bg-ipkoLight transition duration-300"
        >
          <!-- {{ $translations[$currentLang].myBusiness.registerButton }} -->
                 <h1>Log In Your Business</h1>
        </router-link>

        <router-link
          to="/register-business"
          class="inline-block bg-ipkoRed text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-ipkoLight transition duration-300"
        >
          {{ $translations[$currentLang].myBusiness.registerButton }}
        </router-link>
      </div>
    </div>
  </section>
  <section class="my-business bg-white py-12">
    <div class="container mx-auto px-4 text-center">
      <!-- Titulli Kryesor -->
      <h1 class="text-4xl font-bold text-ipkoRed mb-6">
        {{ $translations[$currentLang].myBusiness.title }}
      </h1>
      <p class="text-lg text-gray-600 mb-8">
        {{ $translations[$currentLang].myBusiness.subtitle }}
      </p>

      <!-- Shërbimet për Biznes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div class="p-6 rounded-lg shadow-md bg-gray-100">
          <h3 class="text-xl font-semibold text-ipkoDark mb-2">
            {{ $translations[$currentLang].myBusiness.feature1.title }}
          </h3>
          <p class="text-gray-600">
            {{ $translations[$currentLang].myBusiness.feature1.description }}
          </p>
        </div>
        <div class="p-6 rounded-lg shadow-md bg-gray-100">
          <h3 class="text-xl font-semibold text-ipkoDark mb-2">
            {{ $translations[$currentLang].myBusiness.feature2.title }}
          </h3>
          <p class="text-gray-600">
            {{ $translations[$currentLang].myBusiness.feature2.description }}
          </p>
        </div>
        <div class="p-6 rounded-lg shadow-md bg-gray-100">
          <h3 class="text-xl font-semibold text-ipkoDark mb-2">
            {{ $translations[$currentLang].myBusiness.feature3.title }}
          </h3>
          <p class="text-gray-600">
            {{ $translations[$currentLang].myBusiness.feature3.description }}
          </p>
        </div>
      </div>

      <!-- CTA (Call to Action) -->
      <div class="mt-12">
        <a
          href="/contact"
          class="inline-block bg-ipkoRed text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-ipkoLight transition duration-300"
        >
          {{ $translations[$currentLang].myBusiness.cta }}
        </a>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "MyBusiness",
  methods: {
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
.my-business h1 {
  font-size: 2.5rem;
}
.my-business p {
  font-size: 1rem;
}
.my-business .grid div {
  transition: transform 0.3s;
}
.my-business .grid div:hover {
  transform: translateY(-5px);
}
</style>
  