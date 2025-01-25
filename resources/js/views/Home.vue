<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero bg-white text-ipkoRed py-20">
      <div
        class="grid grid-cols-1 md:grid-cols-2 items-center gap-0"
      >
        <!-- Text Content -->
        <div class="container md:pl-12 text-center ">
          <h1 class="text-4xl md:text-6xl md:ml-4  font-bold mb-4">
            {{ $translations[$currentLang].home.heroTitle }}
          </h1>
          <p class="text-lg text-ipkoDark md:text-sm mb-4">
            {{ $translations[$currentLang].home.heroSubtitle }}
          </p>
          <router-link
            to="/contact"
            class="inline-block bg-ipkoRed text-white font-semibold md:mx-24 py-3 px-6 rounded-lg shadow-md hover:bg-ipkoDark transition duration-300"
          >
            {{ $translations[$currentLang].home.getStarted }}
          </router-link>
        </div>

        <!-- Image Content -->
        <div class="flex justify-center">
          <img
            src="/public/images/ipko3.png"
            alt="Hero Image"
            class="md:w-auto md:h-64 w-full h-full"
          />
        </div>
      </div>
    </section>
    


    <!-- Blog Section -->
    <!-- <Blog /> -->
     <HomeBlogSection />

    <!-- Idea Section -->
    <section class="idea-section bg-white py-12">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold  mb-6">
          {{ $translations[$currentLang].home.ideaTitle }}
        </h2>
        <p class="text-lg  mb-8">
          {{ $translations[$currentLang].home.ideaDescription }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Column 1 -->

          <a
            href="/innovative-solutions"
            class=" p-6 rounded-lg shadow-md text-center py-3 px-6 rou nded-lg hover:bg-ipkoLight transition duration-300"
          >
            <h3 class="text-xl text-ipkoRed font-semibold mb-2">
              {{ $translations[$currentLang].home.ideaPoint1Title }}
            </h3>
            <p class="text-ipkoDark">
              {{ $translations[$currentLang].home.ideaPoint1Description }}
            </p>
          </a>
        

          <!-- Column 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 class="text-xl text-ipkoRed font-semibold mb-2">
              {{ $translations[$currentLang].home.ideaPoint2Title }}
            </h3>
            <p class="text-ipkoDark">
              {{ $translations[$currentLang].home.ideaPoint2Description }}
            </p>
          </div>
          <!-- Column 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 class="text-xl text-ipkoRed font-semibold mb-2">
              {{ $translations[$currentLang].home.ideaPoint3Title }}
            </h3>
            <p class="text-ipkoDark">
              {{ $translations[$currentLang].home.ideaPoint3Description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Why choose Us -->
   <WhyChooseUs />


    <DataAnalytics />


    <AutomationSection />



    <!-- Business Programs -->
    <!-- Programe për Biznes -->
         <BusinessPrograms />


         <!-- Platform for Businesses -->
         <!-- Platformë për Biznese -->
             <BusinessPlatform />

    


  <section class="py-12 bg-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-ipkoRed mb-6">
        {{ $translations[$currentLang].aiHub.title }}

        
      </h2>
      <p class="text-lg text-ipkoDark mb-8">
        {{ $translations[$currentLang].aiHub.description }}

      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Hapësirë për zhvillues -->
        <div class="bg-white p-6 text-ipkoRed shadow-md rounded-lg">
          <h3 class="text-xl font-bold mb-2">
            {{ $translations[$currentLang].aiHub.developerSpace.title }}

          </h3>
          <p class="text-ipkoDark">
            {{ $translations[$currentLang].aiHub.developerSpace.description }}

          </p>
        </div>
        <!-- Garat dhe Hackathon-et -->
        <div class="bg-white p-6 shadow-md rounded-lg">
          <h3 class="text-xl text-ipkoRed font-bold mb-2">
            {{ $translations[$currentLang].aiHub.hackathons.title }}

          </h3>
          <p class="text-ipkoDark">
            {{ $translations[$currentLang].aiHub.hackathons.description }}

          </p>
        </div>
        <!-- API-të e AI -->
        <div class="bg-white p-6 shadow-md rounded-lg">
          <h3 class="text-xl text-ipkoRed font-bold mb-2">
            {{ $translations[$currentLang].aiHub.apiAccess.title }}

          </h3>
          <p class="text-ipkoDark">
            {{ $translations[$currentLang].aiHub.apiAccess.description }}

          </p>
        </div>
      </div>
      <a
        href="/ai-hub"
        class="mt-6 inline-block bg-ipkoRed text-white px-6 py-3 rounded-lg shadow hover:bg-ipkoLight transition"
      >
        {{ $translations[$currentLang].aiHub.learnMore }}

      </a>
    </div>
  </section>

  

  <!-- UserDashboard -->
  <section class=" py-12 bg-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-ipkoRed mb-6">
        {{ $translations[$currentLang].userDashboard.title }}

      </h2>
      <p class="text-lg text-ipkoDark mb-8">
      {{ $translations[$currentLang].userDashboard.description }}

      </p>
      <a
        href="/user-dashboard"
        class="inline-block bg-ipkoRed text-white px-6 py-3 rounded-lg shadow hover:bg-ipkoLight transition"
      >
         {{ $translations[$currentLang].userDashboard.learnMore }}

      </a>
    </div>
  </section>


    <!-- Features Section -->
    <section class="features py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-ipkoRed mb-6">
          {{ $translations[$currentLang].home.featuresTitle }}
                </h2>
        <p class="text-lg text-ipkoDark mb-8">
          {{ $translations[$currentLang].home.featuresDescription }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="p-6 rounded-lg shadow-md bg-white text-center">
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
            <h3 class="font-bold text-ipkoRed text-xl mb-2">
              {{ $translations[$currentLang].home.feature1Title }}
            </h3>
            <p class="text-ipkoDark">
              {{ $translations[$currentLang].home.feature1Description }}
            </p>
          </div>
          <!-- Feature 2 -->
          <div class="p-6 rounded-lg shadow-md bg-white text-center">
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
            <h3 class="font-bold text-ipkoRed text-xl mb-2">
              {{ $translations[$currentLang].home.feature2Title }}
            </h3>
            <p class="text-ipkoDark">
              {{ $translations[$currentLang].home.feature2Description }}
            </p>
          </div>
          <!-- Feature 3 -->
          <div class="p-6 rounded-lg shadow-md bg-white text-center">
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
            <h3 class="font-bold text-ipkoRed text-xl mb-2">
              {{ $translations[$currentLang].home.feature3Title }}
            </h3>
            <p class="text-ipkoDark">
              {{ $translations[$currentLang].home.feature3Description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section  -->
    <Solutions />

     <!-- Our Partners Section -->
     <section class="partners py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-ipkoRed mb-6">
          {{ $translations[$currentLang].home.partnersTitle }}
        </h2>
        <p class="text-lg text-ipkoDark mb-8">
          {{ $translations[$currentLang].home.partnersDescription }}
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <div>
            <img
            src="/public/images/ipko1.png"
            alt="Partner 1"
              class="mx-auto h-18 w-36"
            />
          </div>
          <div>
            <img
              src="/public/images/ipko2.png"
              alt="Partner 2"
              class="mx-auto h-18 w-36"
            />
          </div>
          <div>
            <img
            src="/public/images/ipko3.png"
            alt="Partner 3"
              class="mx-auto h-18 w-36"
            />
          </div>
          <div>
            <img
            src="/public/images/ipko5.png"
            alt="Partner 4"
              class="mx-auto h-18 w-36"
            />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import Solutions from "./Solutions.vue";
import HomeBlogSection from "./HomeBlogSection.vue";
import DataAnalytics from "./DataAnalytics.vue"
import AutomationSection from "./AutomationSection.vue";
import WhyChooseUs from "./WhyChooseUs.vue";
import BusinessPrograms from "./BusinessPrograms.vue";
import BusinessPlatform from "./BusinessPlatform.vue";








export default {
  name: "Home",
  components: {
    Solutions,
    HomeBlogSection,
    DataAnalytics,
    AutomationSection,
    WhyChooseUs,
    BusinessPrograms,
    BusinessPlatform,
  
  },
};
</script>



<style scoped>
</style>
