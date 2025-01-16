<template>
    <div class="bg-gray-100 min-h-screen">
      <!-- Hero Section -->
      <section class="bg-ipkoRed text-white py-16">
        <div class="container mx-auto px-6 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            {{ $translations[$currentLang].dataAnalyticsPage.heroTitle }}
          </h1>
          <p class="text-lg md:text-xl mb-6">
            {{ $translations[$currentLang].dataAnalyticsPage.heroSubtitle }}

          </p>
          <button
            @click="scrollToFeatures"
            class="bg-white text-ipkoRed px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100"
          >
            {{ $translations[$currentLang].dataAnalyticsPage.getStarted }}

          </button>
        </div>
      </section>
  
      <!-- Key Features -->
      <section id="features" class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center text-ipkoRed mb-10">
            {{ $translations[$currentLang].dataAnalyticsPage.featuresTitle }}

          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <svg class="w-12 h-12 mx-auto text-ipkoRed mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h11M9 21H3m6 0V7H3m12 14h6m-6-7h6M9 3h6M9 7h6M3 3h6m6 0h6" />
              </svg>
              <h3 class="text-xl font-bold">
                {{ $translations[$currentLang].dataAnalyticsPage.featuresPoint1 }}

            </h3>
              <p class="text-gray-700">
                {{ $translations[$currentLang].dataAnalyticsPage.featuresDesc1 }}

            </p>
            </div>
            <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <svg class="w-12 h-12 mx-auto text-ipkoRed mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h11M9 21H3m6 0V7H3m12 14h6m-6-7h6M9 3h6M9 7h6M3 3h6m6 0h6" />
              </svg>
              <h3 class="text-xl font-bold">
                {{ $translations[$currentLang].dataAnalyticsPage.featuresPoint2 }}

            </h3>
              <p class="text-gray-700">
                {{ $translations[$currentLang].dataAnalyticsPage.featuresDesc2 }}

            </p>
            </div>
            <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <svg class="w-12 h-12 mx-auto text-ipkoRed mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h11M9 21H3m6 0V7H3m12 14h6m-6-7h6M9 3h6M9 7h6M3 3h6m6 0h6" />
              </svg>
              <h3 class="text-xl font-bold">
                {{ $translations[$currentLang].dataAnalyticsPage.featuresPoint3 }}

            </h3>
              <p class="text-gray-700">
                {{ $translations[$currentLang].dataAnalyticsPage.featuresDesc3 }}

            </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Use Case Example -->
      <section class="py-16 bg-gray-100">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold text-ipkoRed mb-6">
            {{ $translations[$currentLang].dataAnalyticsPage.useCaseTitle }}

          </h2>
          <p class="text-gray-700">
            {{ $translations[$currentLang].dataAnalyticsPage.useCaseDesc }}

          </p>
        </div>
      </section>
  
      <!-- Graphical Representation -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-ipkoRed text-center mb-6">
            {{ $translations[$currentLang].dataAnalyticsPage.useCaseDesc }}

          </h2>
          <canvas id="analyticsChart"></canvas>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { Chart } from "chart.js";
  
  export default {
    name: "DataAnalyticsPage",
    data() {
      return {
        chartInstance: null,
      };
    },
    methods: {
      scrollToFeatures() {
        document.getElementById("features").scrollIntoView({ behavior: "smooth" });
      },
      initChart() {
        const ctx = document.getElementById("analyticsChart").getContext("2d");
        this.chartInstance = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "User Behavior",
                data: [10, 20, 15, 25, 30, 20],
                borderColor: "#e30613",
                backgroundColor: "rgba(227, 6, 19, 0.2)",
                borderWidth: 2,
              },
            ],
          },
        });
      },
    },
    mounted() {
      this.initChart();
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1000px;
  }
  </style>
  