<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero text-white py-20">
      <div
        class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8"
      >
        <!-- Text Content -->
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            {{ $translations[$currentLang].home.heroTitle }}
          </h1>
          <p class="text-lg md:text-xl mb-6">
            {{ $translations[$currentLang].home.heroSubtitle }}
          </p>
          <router-link
            to="/contact"
            class="inline-block bg-white text-ipkoRed font-semibold md:mx-24 py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            {{ $translations[$currentLang].home.getStarted }}
          </router-link>
        </div>

        <!-- Image Content -->
        <div class="flex justify-center">
          <img
            src="/public/images/ipko.png"
            alt="Hero Image"
            class="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <Blog />

    <!-- Idea Section -->
    <section class="idea-section bg-gray-100 py-12">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-ipkoRed mb-6">
          {{ $translations[$currentLang].home.ideaTitle }}
        </h2>
        <p class="text-lg text-gray-700 mb-8">
          {{ $translations[$currentLang].home.ideaDescription }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Column 1 -->

          <a
            href="/innovative-solutions"
            class="bg-white p-6 rounded-lg shadow-md text-center py-3 px-6 rou nded-lg shadow-md hover:bg-ipkoLight transition duration-300"
          >
            <h3 class="text-xl font-semibold mb-2">
              {{ $translations[$currentLang].home.ideaPoint1Title }}
            </h3>
            <p class="text-gray-700">
              {{ $translations[$currentLang].home.ideaPoint1Description }}
            </p>
          </a>
        

          <!-- Column 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 class="text-xl font-semibold mb-2">
              {{ $translations[$currentLang].home.ideaPoint2Title }}
            </h3>
            <p class="text-gray-700">
              {{ $translations[$currentLang].home.ideaPoint2Description }}
            </p>
          </div>
          <!-- Column 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 class="text-xl font-semibold mb-2">
              {{ $translations[$currentLang].home.ideaPoint3Title }}
            </h3>
            <p class="text-gray-700">
              <!-- {{ getTranslation("home.ideaPoint3Description") }} -->
              {{ $translations[$currentLang].home.ideaPoint3Description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->

    <section class="why-choose-us py-16 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-ipkoRed mb-6">
          {{ $translations[$currentLang].home.whyChooseUsTitle }}
        </h2>
        <p class="text-lg text-gray-700 mb-8">
          {{ $translations[$currentLang].home.whyChooseUsDescription }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Column 1 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="text-ipkoRed mb-4">
              <svg
                class="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ $translations[$currentLang].home.whyPoint1Title }}
            </h3>
            <p class="text-gray-600">
              {{ $translations[$currentLang].home.whyPoint1Description }}
            </p>
          </div>
          <!-- Column 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="text-ipkoRed mb-4">
              <svg
                class="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4M7 16h10"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ $translations[$currentLang].home.whyPoint2Title }}
            </h3>
            <p class="text-gray-600">
              {{ $translations[$currentLang].home.whyPoint2Description }}
            </p>
          </div>
          <!-- Column 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="text-ipkoRed mb-4">
              <svg
                class="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 9.75L14.25 14.25M9.75 14.25L14.25 9.75M12 2.25v19.5"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ $translations[$currentLang].home.whyPoint3Title }}
            </h3>
            <p class="text-gray-600">
              {{ $translations[$currentLang].home.whyPoint3Description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Partners Section -->
    <section class="partners py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-ipkoRed mb-6">
          {{ $translations[$currentLang].home.partnersTitle }}
        </h2>
        <p class="text-lg text-gray-700 mb-8">
          {{ $translations[$currentLang].home.partnersDescription }}
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <div>
            <img
              src="https://via.placeholder.com/150x50"
              alt="Partner 1"
              class="mx-auto"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/150x50"
              alt="Partner 2"
              class="mx-auto"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/150x50"
              alt="Partner 3"
              class="mx-auto"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/150x50"
              alt="Partner 4"
              class="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>


    <DataAnalytics />


    <AutomationSection />


    <!-- Features Section -->
    <section class="features py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-ipkoRed mb-6">
          {{ $translations[$currentLang].home.featuresTitle }}
                </h2>
        <p class="text-lg text-gray-700 mb-8">
          {{ $translations[$currentLang].home.featuresDescription }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="p-6 rounded-lg shadow-md bg-gray-50 text-center">
            <svg
              class="w-12 h-12 mx-auto mb-4 text-ipkoRed"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
              />
            </svg>
            <h3 class="font-bold text-xl mb-2">
              {{ $translations[$currentLang].home.feature1Title }}
            </h3>
            <p class="text-gray-600">
              {{ $translations[$currentLang].home.feature1Description }}
            </p>
          </div>
          <!-- Feature 2 -->
          <div class="p-6 rounded-lg shadow-md bg-gray-50 text-center">
            <svg
              class="w-12 h-12 mx-auto mb-4 text-ipkoRed"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 9.75L14.25 14.25M9.75 14.25L14.25 9.75M12 2.25v19.5"
              />
            </svg>
            <h3 class="font-bold text-xl mb-2">
              {{ $translations[$currentLang].home.feature2Title }}
            </h3>
            <p class="text-gray-600">
              {{ $translations[$currentLang].home.feature2Description }}
            </p>
          </div>
          <!-- Feature 3 -->
          <div class="p-6 rounded-lg shadow-md bg-gray-50 text-center">
            <svg
              class="w-12 h-12 mx-auto mb-4 text-ipkoRed"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4M7 16h10"
              />
            </svg>
            <h3 class="font-bold text-xl mb-2">
              {{ $translations[$currentLang].home.feature3Title }}
            </h3>
            <p class="text-gray-600">
              {{ $translations[$currentLang].home.feature3Description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section  -->
    <Solutions />
  </div>
</template>
<script>
import Solutions from "./Solutions.vue";
import Blog from "./Blog.vue";
import DataAnalytics from "./DataAnalytics.vue"
import AutomationSection from "../components/AutomationSection.vue";



export default {
  name: "Home",
  components: {
    Solutions,
    Blog,
    DataAnalytics,
    AutomationSection,
  
  },
};
</script>



<style scoped>
.hero {
  background: linear-gradient(to right, #e30613, #8c1a1a);
}

.hero h1 {
  font-size: 2.5rem;
}

.hero p {
  font-size: 1.25rem;
}
.idea-section {
  background: #f8fafc;
}

.idea-section h2 {
  font-size: 2rem;
  color: #e30613;
}

.idea-section p {
  font-size: 1rem;
}
.about h2 {
  font-size: 2rem;
}

.about p {
  font-size: 1rem;
}
.partners h2 {
  font-size: 2rem;
}

.partners p {
  font-size: 1rem;
}

.partners img {
  max-width: 150px;
  height: auto;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;
}

.partners img:hover {
  filter: grayscale(0%);
}
</style>
