<template> 
  <div class=" mx-auto  bg-white px-4 py-12">
    <div class="container max-w-md mx-auto bg-white shadow-md rounded-lg px-10 py-10">
      <h1 class="text-2xl font-bold text-center text-ipkoRed mb-6">
        {{ $translations[$currentLang].registerBusiness.title }}

      </h1>

      <form @submit.prevent="submitForm">
        <!-- Business Number -->
        <div class="mb-4">
          <label
            for="businessNumber"
            class="block text-ipkoRed font-semibold mb-2"
          >
            {{ $translations[$currentLang].registerBusiness.businessNumber }}
          </label>
          <input
            v-model="form.businessNumber"
            type="text"
            id="businessNumber"
            placeholder="123456789"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label for="email" class="block text-ipkoRed font-semibold mb-2">
            {{ $translations[$currentLang].registerBusiness.email }}

          </label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            placeholder="example@business.com"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>

        <!-- Password -->
        <div class="mb-4">
          <label for="password" class="block text-ipkoRed font-semibold mb-2">
            {{ $translations[$currentLang].registerBusiness.password }}

          </label>
          <input
            v-model="form.password"
            type="password"
            id="password"
            placeholder="********"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-ipkoRed text-white py-2 px-4 rounded-lg font-semibold hover:bg-ipkoLight transition"
        >
          {{ $translations[$currentLang].registerBusiness.submit }}

        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterBusiness",
  data() {
    return {
      form: {
        businessNumber: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Form Data:", this.form);
      alert(
        `${this.form.businessNumber} registered successfully with email: ${this.form.email}`
      );
      // You can replace this with an API call for actual registration
    },
  },
};
</script>

<style scoped>
h1 {
  color: #e30613;
}
</style>
