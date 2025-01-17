<template>
  <div>
    <!-- Hero Section -->
    <section class="abou-hero bg-ipkoRed text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          {{ $translations[$currentLang].about.title }}
        </h1>
        <p class="text-lg md:text-xl mb-6">
          {{ $translations[$currentLang].about.subtitle }}
        </p>
      </div>
    </section>

    <!-- Mission $ Vision Section -->
    <section class="mission-vision py-16 bg-gray-100">
      <div
        class="container mx-auto px-4 grid grid-col-1 md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h2 class="text-3xl font-bold text-ipkoRed mb-4">
            {{ $translations[$currentLang].about.missionTitle }}
          </h2>
          <p class="text-lg text-gray-700 mb-4">
            {{ $translations[$currentLang].about.missionDescription }}
          </p>
        </div>

        <!-- Image -->
        <div class="mission">
          <img
            src="/public/images/logo.png"
            alt="Mission"
            class="flex size-24 items-center"
          />
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team py-16 bg-white">
      <div class="container mx-auto px-4 font-bold text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-ipkoRed mb-6">
          {{ $translations[$currentLang].about.teamTitle }}
        </h2>
        <p class="text-lg text-gray-700 mb-8">
          {{ $translations[$currentLang].about.teamDescription }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Team Members 1 -->
          <div>
            <img
            src="/public/images/logo.png"
            alt="Team Member"
              class="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 class="font-bold text-xl">Emri Mbiemri</h3>
            <p class="text-gray-500">Profesioni</p>
          </div>
          <div>
            <img
              src="/public/images/logo.png"
              alt="Team Member 2"
              class="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 class="font-bold text-xl">Emri Mbiemri</h3>
            <p class="text-gray-500">Profesioni</p>
          </div>
          <div>
            <img
            src="/public/images/logo.png"
            alt="Team Member 3"
              class="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 class="font-bold text-xl">Emri Mbiemri</h3>
            <p class="text-gray-500">Profesioni</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta bg-ipkoRed text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ $translations[$currentLang].about.ctaTitle }}
        </h2>
        <p class="text-lg mb-4">
          {{ $translations[$currentLang].about.ctaDescription }}
        </p>
        <router-link
          to="/contact"
          class="inline-block bg-white text-ipkoRed font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
        >
          {{ $translations[$currentLang].about.ctaButton }}
        </router-link>
      </div>
    </section>
  </div>
</template>
<script>
</script>

<style scoped>
.about-hero {
  background: linear-gradient(to right, #e30623, #8c1a1a);
}
.mission img {
  border: ;
}
.team img {
  border: 3px solid #e30613;
}
</style>