<template>
    <div class="chatbot-container">
      <!-- Shigjeta për Hapje dhe Mbyllje -->
      <div
        @click="toggleChatbot"
        class="chatbot-toggle bg-ipkoRed text-white fixed top-1/2 right-0 transform -translate-y-1/2 rounded-l-full shadow-lg cursor-pointer z-50 w-12 h-12 flex items-center justify-center"
      >
        <!-- Shigjeta për Hapje -->
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <!-- Shigjeta për Mbyllje -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
  
      <!-- Paneli i Chatbot-it -->
      <div
        :class="['chatbot-panel', isOpen ? 'translate-x-0' : 'translate-x-full']"
        class="fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 z-40"
      >
        <div class="p-4">
          <h2 class="text-xl font-bold text-ipkoRed mb-4">
            {{ $translations[$currentLang].chatbot.title }}
          </h2>
          <p class="text-gray-700 mb-6">
            {{ $translations[$currentLang].chatbot.description }}

          </p>
          <form @submit.prevent="submitChat" class="space-y-4">
            <div>
              <label class="block text-gray-600 mb-1">
                {{ $translations[$currentLang].chatbot.name }}

              </label>
              <input
                v-model="chatForm.name"
                type="text"
                placeholder="Your Name"
                class="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label class="block text-gray-600 mb-1">
                {{ $translations[$currentLang].chatbot.message }}

                
              </label>
              <textarea
                v-model="chatForm.message"
                placeholder="Your Message"
                class="w-full px-4 py-2 border rounded-lg"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-ipkoRed text-white font-semibold py-2 px-4 rounded-lg w-full hover:bg-ipkoLight transition"
            >
              {{ $translations[$currentLang].chatbot.send }}

            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Chatbot",
    data() {
      return {
        isOpen: false,
        chatForm: {
          name: "",
          message: "",
        },
      };
    },
    methods: {
      toggleChatbot() {
        this.isOpen = !this.isOpen; // Ndërron gjendjen e hapjes/mbylljes
      },
      submitChat() {
        alert(this.getTranslation("chatbot.success"));
        this.chatForm.name = "";
        this.chatForm.message = "";
        this.toggleChatbot();
      },
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
  .chatbot-container {
    z-index: 1000;
  }
  
  .chatbot-toggle {
    z-index: 1001;
  }
  
  .chatbot-panel {
    z-index: 1000;
  }
  </style>
  