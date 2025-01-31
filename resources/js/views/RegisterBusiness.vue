<template>
  <div class="min-h-screen py-10 flex items-center justify-center bg-white">
    <div class="bg-white p-8 lg:rounded-lg lg:shadow-lg w-full max-w-lg">
      <h2 class="text-2xl font-bold text-ipkoRed text-center mb-6">
        {{ $translations[$currentLang].registerBusiness.registerTitle }}

      </h2>

      <form @submit.prevent="registerBusiness">
        <!-- Emri i biznesit -->
        <div class="mb-4">
          <label class="block text-gray-700">
            {{ $translations[$currentLang].registerBusiness.businessName }}

          </label>
          <input v-model="form.business_name" type="text" required
                 class="w-full px-4 py-2 border rounded-lg focus:outline-none">
        </div>

        <!-- Numri i biznesit -->
        <div class="mb-4">
          <label class="block text-gray-700">
            {{ $translations[$currentLang].registerBusiness.businessNumber }}

          </label>
          <input v-model="form.business_number" type="text" required
                 class="w-full px-4 py-2 border rounded-lg focus:outline-none">
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label class="block text-gray-700">
            {{ $translations[$currentLang].registerBusiness.email }}

            
          </label>
          <input v-model="form.email" type="email" required
                 class="w-full px-4 py-2 border rounded-lg focus:outline-none">
        </div>

        <!-- Fjalëkalimi -->
        <div class="mb-4">
          <label class="block text-gray-700">
            {{ $translations[$currentLang].registerBusiness.password }}

          </label>
          <input v-model="form.password" type="password" required
                 class="w-full px-4 py-2 border rounded-lg focus:outline-none">
        </div>

        <!-- Lloji i biznesit -->
        <div class="mb-4">
          <label class="block text-gray-700">
            {{ $translations[$currentLang].registerBusiness.businessType }}

          </label>
          <select v-model="form.business_type"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none">
            <option value="Small">
              {{ $translations[$currentLang].registerBusiness.typeSmall }}

            </option>
            <option value="Medium">
              {{ $translations[$currentLang].registerBusiness.typeMedium }}

            </option>
            <option value="Enterprise">
              {{ $translations[$currentLang].registerBusiness.typeEnterprise }}

            </option>
          </select>
        </div>

        <!-- Vendndodhja -->
        <div class="mb-4">
          <label class="block text-gray-700">
            {{ $translations[$currentLang].registerBusiness.location }}
          </label>
          <input v-model="form.location" type="text" required
                 class="w-full px-4 py-2 border rounded-lg focus:outline-none">
        </div>

        <!-- Sektori i industrisë -->
        <div class="mb-4">
          <label class="block text-gray-700">
            {{ $translations[$currentLang].registerBusiness.industry }}

          </label>
          <input v-model="form.industry" type="text" required
                 class="w-full px-4 py-2 border rounded-lg focus:outline-none">
        </div>

        <!-- Butoni Regjistrohu -->
        <button type="submit"
                class="w-full bg-ipkoRed text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition">
          {{ $translations[$currentLang].registerBusiness.registerButton }}

        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessRegister",
  data() {
    return {
      form: {
        business_name: "",
        business_number: "",
        email: "",
        password: "",
        business_type: "Small",
        location: "",
        industry: "",
      },
    };
  },
  methods: {
    registerBusiness() {
      console.log("Business Registered:", this.form);
      // Këtu do të shtojmë thirrjen API për të regjistruar biznesin në Laravel
    },
    getTranslation(key) {
      return this.$translations[this.$root.$currentLang]?.[key] || key;
    },
  },
};
</script>


