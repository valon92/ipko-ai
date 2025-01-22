<template>
  <section class="login bg-white py-12 min-h-screen">
    <div class="container mx-auto px-4 md:w-1/2 lg:w-1/3">
      <h1 class="text-3xl font-bold text-center text-ipkoRed mb-6">
        {{ $translations[$currentLang].login.title }}
      </h1>
      <p class="text-center text-ipkoDark mb-6">
        {{ $translations[$currentLang].login.subtitle }}
      </p>
      <form
        @submit.prevent="handleLogin"
        class="bg-white p-10 py-10 rounded-lg shadow-md"
      >
        <!-- Email -->
        <div class="mb-4">
          <label class="block text-ipkoRed mb-2">{{
            $translations[$currentLang].login.email
          }}</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="example@example.com"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-ipkoRed"
          />
        </div>
        <!-- Fjalëkalimi -->
        <div class="mb-6">
          <label class="block text-ipkoRed mb-2">{{
            $translations[$currentLang].login.password
          }}</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="********"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-ipkoRed"
          />
        </div>
        <!-- Butoni Hyrje -->
        <button
          type="submit"
          class="w-full bg-ipkoRed text-white font-semibold py-2 px-4 rounded-md hover:bg-ipkoLight transition"
        >
          {{ $translations[$currentLang].login.button }}
        </button>
      </form>
      <p class="text-center mt-4">
        {{ $translations[$currentLang].login.noAccount }}

        <router-link to="/signup" class="text-ipkoRed hover:underline">{{
          $translations[$currentLang].login.signup
        }}</router-link>
      </p>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      if (!this.form.email || !this.form.password) {
        alert(this.getTranslation("login.missingFields"));
        return;
      }
      // Lidhja me Backend për hyrje
      console.log("Logging in:", this.form);
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
.login input {
  transition: border-color 0.3s;
}
.login input:focus {
  border-color: #e30613;
}
</style>
  