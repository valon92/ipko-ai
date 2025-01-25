<template>
  <section class="signup bg-white py-12">
   


    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-0">  
      <div class="flex justify-center">

        <div class="container">

      <h1 class="text-3xl font-bold text-center text-ipkoRed mb-6">
        {{ $translations[$currentLang].signup.title }}
      </h1>

      <p class="text-center text-ipkoDark mb-6">
        {{ $translations[$currentLang].signup.subtitle }}
      </p>

      <form
        @submit.prevent="handleSignUp"
        class="bg-white p-6 py-10 rounded-lg shadow-md"
      >
        <!-- Emri i Plotë -->
        <div class="mb-4">
          <label class="block text-ipkoRed mb-2">{{
            $translations[$currentLang].signup.fullName
          }}</label>
          <input
            v-model="form.fullName"
            type="text"
            placeholder="John Doe"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-ipkoRed"
          />
        </div>
        <!-- Email -->
        <div class="mb-4">
          <label class="block text-ipkoRed mb-2">{{
            $translations[$currentLang].signup.email
          }}</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="example@example.com"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-ipkoRed"
          />
        </div>
        <!-- Fjalëkalimi -->
        <div class="mb-4">
          <label class="block text-ipkoRed mb-2">{{
            $translations[$currentLang].signup.password
          }}</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="********"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-ipkoRed"
          />
        </div>
        <!-- Konfirmo Fjalëkalimin -->
        <div class="mb-6">
          <label class="block text-ipko mb-2">{{
            $translations[$currentLang].signup.confirmPassword
          }}</label>
          <input
            v-model="form.confirmPassword"
            type="password"
            placeholder="********"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-ipkoRed"
          />
        </div>

        <!-- Butoni Regjistrohu -->
        <button
          type="submit"
          class="w-full bg-ipkoRed text-white font-semibold py-2 px-4 rounded-md hover:bg-ipkoLight transition"
        >
          {{ $translations[$currentLang].signup.button }}
        </button>
      </form>

      <p class="text-center mt-4">
        {{ $translations[$currentLang].signup.haveAccount }}
        <router-link to="/login" class="text-ipkoRed hover:underline">{{
          $translations[$currentLang].signup.login
        }}</router-link>
      </p>
    </div>
    </div>

      <div class="flex justify-center">

        <img src="/public/images/ipko5.png" alt=""
        class="hidden md:block md:w-96"
        >
      </div>
    </div>

    
  </section>
</template>
  
  <script>
export default {
  name: "SignUp",
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    handleSignUp() {
      if (this.form.password !== this.form.confirmPassword) {
        alert(this.getTranslation("signup.passwordMismatch"));
        return;
      }
      // Lidhja me Backend për regjistrim
      console.log("Signing Up:", this.form);
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
.signup input {
  transition: border-color 0.3s;
}
.signup input:focus {
  border-color: #e30613;
}
</style>
  