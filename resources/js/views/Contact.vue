<template>
  <div>
    <section class="contact bg-ipkoDark text-white py-12">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          {{ $translations[$currentLang].contact.title }}
        </h2>
        <p class="text-lg mb-8">
          {{ $translations[$currentLang].contact.description }}
        </p>
        <form
          @submit.prevent="submitForm"
          class="max-w-lg mx-auto bg-white text-black p-6 rounded-lg shadow-md"
        >
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">
              {{ $translations[$currentLang].contact.name }}
            </label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your Name"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">
              {{ $translations[$currentLang].contact.email }}
            </label>
            <input
              v-model="form.email"
              type="email"
              placeholder="Your Email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">
              {{ $translations[$currentLang].contact.message }}
            </label>
            <textarea
              v-model="form.message"
              placeholder="Your Message"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-ipkoRed text-white font-semibold py-2 px-4 rounded-lg hover:bg-ipkoLight transition"
          >
            {{ $translations[$currentLang].contact.button }}
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
  
  <script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Contact",
  components: { Header, Footer },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert("Form submitted!");
    },
  },
};
</script>
  