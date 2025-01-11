<template>
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-ipkoRed text-center mb-6">
        {{ $translations[$currentLang].registerBusiness.title }}
      </h1>
      <p class="text-lg text-gray-600 text-center mb-8">
        {{ $translations[$currentLang].registerBusiness.subtitle }}
      </p>

      <!-- Form për Regjistrimin e Biznesit -->
      <form
        @submit.prevent="submitForm"
        class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <!-- Business Name -->
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-semibold mb-2">
            {{ $translations[$currentLang].registerBusiness.form.name }}
          </label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            placeholder="Business Name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>

        <!-- Contact Email -->
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold mb-2">
            {{ $translations[$currentLang].registerBusiness.form.email }}
          </label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            placeholder="Contact Email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>

        <!-- Description -->
        <div class="mb-4">
          <label
            for="description"
            class="block text-gray-700 font-semibold mb-2"
          >
            {{ $translations[$currentLang].registerBusiness.form.description }}
          </label>
          <textarea
            v-model="form.description"
            id="description"
            rows="4"
            placeholder="Business Description"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-ipkoRed text-white font-semibold py-2 px-4 rounded-lg hover:bg-ipkoLight transition"
        >
          {{ $translations[$currentLang].registerBusiness.form.submit }}
        </button>
      </form>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "RegisterBusiness",
  data() {
    return {
      form: {
        name: "",
        email: "",
        description: "",
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
      console.log("Business Registered", this.form);
      alert(this.getTranslation("registerBusiness.form.successMessage"));
    },
  },
};
</script>
  
  <style scoped>
section {
  background-color: #f9f9f9;
}
</style>
  