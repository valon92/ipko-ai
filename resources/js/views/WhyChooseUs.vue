<template>
     <section class="why-choose-us py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold  mb-6">
          {{ $translations[$currentLang].home.whyChooseUsTitle }}
        </h2>
        <p class="text-lg  mb-8">
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
            <h3 class="text-xl text-ipkoRed font-semibold mb-2">
              {{ $translations[$currentLang].home.whyPoint1Title }}
            </h3>
            <p class="text-ipkoDark">
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
            <h3 class="text-xl text-ipkoRed font-semibold mb-2">
              {{ $translations[$currentLang].home.whyPoint2Title }}
            </h3>
            <p class="text-ipkoDark">
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
            <h3 class="text-xl text-ipkoRed font-semibold mb-2">
              {{ $translations[$currentLang].home.whyPoint3Title }}
            </h3>
            <p class="text-ipkoDark">
              {{ $translations[$currentLang].home.whyPoint3Description }}
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

</script>

<style >
</style>