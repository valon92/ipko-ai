<template>
  <section class="w-full bg-white py-2 gap-1 ">
   <nav id="navbar-example2" class="navbar bg-body-white px-3 mb-3">
  <a class="navbar-brand" href="#">My Business</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link text-black" href="/register-business">LogIn</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/register-business">SigUp</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Menu</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="/business-services">Business Services</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Log Out</a></li>
      </ul>
    </li>
  </ul>
</nav>
  </section>
  <div class="my-business bg-white  py-10 ">
    <div class="container mx-auto px-4 text-center">
      <!-- Titulli Kryesor -->
      <h1 class="text-4xl font-bold  mb-4">
        {{ $translations[$currentLang].myBusiness.title }}
      </h1>
      <p class="text-lg text-ipkoDark mb-8">
        {{ $translations[$currentLang].myBusiness.subtitle }}
      </p>

      <!-- Shërbimet për Biznes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div class="p-6 rounded-lg shadow-md bg-white">

          <h3 class="text-xl font-semibold text-ipkoRed mb-2">
            {{ $translations[$currentLang].myBusiness.feature1.title }}
          </h3>
          <p class="text-ipkoDark">
            {{ $translations[$currentLang].myBusiness.feature1.description }}
          </p>

        </div>
        <div class="p-6 rounded-lg shadow-md bg-white">
          <h3 class="text-xl font-semibold text-ipkoRed mb-2">
            {{ $translations[$currentLang].myBusiness.feature2.title }}
          </h3>
          <p class="text-ipkoDark">
            {{ $translations[$currentLang].myBusiness.feature2.description }}
          </p>
        </div>
        <div class="p-6 rounded-lg shadow-md bg-white">
          <h3 class="text-xl font-semibold text-ipkoRed mb-2">
            {{ $translations[$currentLang].myBusiness.feature3.title }}
          </h3>
          <p class="text-ipkoDark">
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
  </div>
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
  