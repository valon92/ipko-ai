<template>
    <!-- Hero Section -->
    <section class="contact-hero bg-white py-20">
      <div class="container rounded-lg shadow-md mx-auto px-4 py-10 text-center">
        <h1 class="text-4xl text-ipkoRed  md:text-6xl font-bold mb-4">
          {{ $translations[$currentLang].contact.title }}
        </h1>
        <p class="text-lg text-ipkoDark  md:text-xl mb-6">
          {{ $translations[$currentLang].contact.subtitle }}
        </p>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="contact-info py-16 bg-white">
      <div
        class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        <!-- Email -->
        <div class="p-6 bg-white text-ipkoRed rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-2">
            {{ $translations[$currentLang].contact.email }}
          </h3>
          <p class="text-gray-700">
            <a
              href="mailto:support@ipko.ai"
              class="text-ipkoDark hover:underline"
            >
              support@ipko.ai
            </a>
          </p>
        </div>
        <!-- Phone -->
        <div class="p-6 bg-white rounded-lg shadow-md">
          <h3 class="text-xl text-ipkoRed font-bold mb-2">
            {{ $translations[$currentLang].contact.phone }}
          </h3>
          <p class="text-gray-700">
            <a href="tel:+38344123456" class="text-ipkoDark hover:underline">
              +383 44 123 456
            </a>
          </p>
        </div>
        <!-- Address -->
        <div class="p-6 bg-white rounded-lg shadow-md">
          <h3 class="text-xl text-ipkoRed font-bold mb-2">
            {{ $translations[$currentLang].contact.address }}
          </h3>
          <p class="text-ipkoDark">Prishtinë, Kosovë</p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-form py-16 bg-white">
     
  


    <div class="container text-center">
  <div class="grid grid-cols-1 md:grid-cols-2 items-center ">
    <div class="col">
      <div class=" rounded-lg shadow-md bg-white mx-auto px-20  py-20 max-w-lg">
        <h2 class="text-3xl font-bold text-ipkoRed text-center mb-6">
          {{ $translations[$currentLang].contact.formTitle }}
        </h2>
        <form
          @submit.prevent="submitForm"
          class="bg-white p-6 rounded-lg shadow-md"
        >
          <div class="mb-4">
            <label class="block text-ipkoRed mb-2">
              {{ $translations[$currentLang].contact.name }}
            </label>
            <input
              v-model="form.name"
              type="text"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
          <div class="mb-4">
            <label class="block text-ipkoRed mb-2">
              {{ $translations[$currentLang].contact.email }}
            </label>
            <input
              v-model="form.email"
              type="email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
          <div class="mb-4">
            <label class="block text-ipkoRed mb-2">
              {{ $translations[$currentLang].contact.message }}
            </label>
            <textarea
              v-model="form.message"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-ipkoRed text-white font-semibold py-2 px-4 rounded-lg hover:bg-ipkoLight transition"
          >
            {{ $translations[$currentLang].contact.send }}
          </button>
        </form>
      </div>
    </div>
    <div class="col hidden md:block">
     <img src="/public/images/ipko10.png" alt="">
    </div>
  </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Contact",
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
    getTranslation(key) {
      return (
        this.$translations[this.$root.$currentLang]?.[key] ||
        `Missing Translation: ${key}`
      );
    },
    submitForm() {
      console.log("Form submitted:", this.form);
      alert(this.getTranslation("contact.successMessage"));
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>

.contact-info .rounded-lg {
  border: 1px solid #e2e8f0;
}
</style>
