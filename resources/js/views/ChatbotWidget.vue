<template>
  <div>
    <!-- Chatbot Icon -->
    <div
      @click="toggleChatbot"
      class="fixed bottom-52 right-0 bg-ipkoRed text-white p-3 rounded-full shadow-lg cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 9v6h6V9H9z"
        />
      </svg>
    </div>

    <!-- Chatbot Panel -->
    <div
      v-if="isOpen"
      class="fixed bottom-16 right-4 bg-white shadow-lg rounded-lg p-4 w-80 z-50"
    >
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-lg font-semibold text-ipkoRed">IPKO.ai Chatbot</h3>
        <button
          @click="toggleChatbot"
          class="text-gray-500 hover:text-gray-700"
          aria-label="Close Chatbot"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <textarea
        v-model="query"
        placeholder="Type your question here..."
        class="w-full border rounded-lg p-2 mb-2"
      ></textarea>
      <div class="flex justify-between items-center">
        <button
          @click="sendQuery"
          class="bg-ipkoRed text-white py-2 px-4 rounded-lg"
        >
          Send
        </button>
        <button
          @click="startListening"
          class="text-ipkoRed bg-gray-100 p-2 rounded-full"
          title="Speak"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 2a4 4 0 00-4 4v6a4 4 0 004 4h0a4 4 0 004-4V6a4 4 0 00-4-4z"
            />
          </svg>
        </button>
      </div>
      <div v-if="response" class="mt-4 bg-gray-100 p-2 rounded-lg">
        <p>{{ response }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      query: "",
      response: "",
      recognition: null, // Speech recognition instance
    };
  },
  methods: {
    toggleChatbot() {
      this.isOpen = !this.isOpen;
    },
    sendQuery() {
      if (this.query.trim() === "") {
        this.response = "Please enter a question.";
        return;
      }
      this.response = "This is a simulated response. Your question was: " + this.query;
    },
    startListening() {
      if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
        alert("Your browser does not support speech recognition.");
        return;
      }

      if (!this.recognition) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.recognition.lang = "en-US"; // Change this for other languages
        this.recognition.interimResults = false;

        this.recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          this.query = transcript; // Set the recognized text as the query
        };

        this.recognition.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
        };
      }

      this.recognition.start();
    },
  },
};
</script>

<style scoped>
.fixed {
  z-index: 1000;
}
</style>
