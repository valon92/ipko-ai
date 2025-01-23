<template>
  <section class="startup bg-white py-12">
    <div class="container mx-auto px-4 bg-white text-center rounded-lg shadow-md py-10">
      <!-- Titulli Kryesor -->
      <h1 class="text-4xl font-bold text-ipkoRed mb-6">
        {{ $translations[$currentLang].startup.title }}
      </h1>
      <p class="text-lg text-ipkoDark mb-8">
        {{ $translations[$currentLang].startup.subtitle }}
      </p>

      <!-- Përfitimet për Startup-et -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div class="p-6 rounded-lg shadow-md bg-white">
          <h3 class="text-xl font-semibold text-ipkoRed mb-2">
            {{ $translations[$currentLang].startup.feature1.title }}
          </h3>
          <p class="text-ipkoDark">
            {{ $translations[$currentLang].startup.feature1.description }}
          </p>
        </div>
        <div class="p-6 rounded-lg shadow-md bg-white">
          <h3 class="text-xl font-semibold text-ipkoRed mb-2">
            {{ $translations[$currentLang].startup.feature2.title }}
          </h3>
          <p class="text-ipkoDark">
            {{ $translations[$currentLang].startup.feature2.description }}
          </p>
        </div>
        <div class="p-6 rounded-lg shadow-md bg-white">
          <h3 class="text-xl font-semibold text-ipkoRed mb-2">
            {{ $translations[$currentLang].startup.feature3.title }}
          </h3>
          <p class="text-ipkoDark">
            {{ $translations[$currentLang].startup.feature3.description }}
          </p>
        </div>
      </div>

      <!-- CTA (Call to Action) -->
      <div class="mt-12  py-10">
        <a
          href="#registerstartup"
          class="inline-block bg-ipkoRed text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-ipkoLight transition duration-300"
        >
          {{ $translations[$currentLang].startup.cta }}
        </a>
      </div>
    </div>
  </section>
  <section id="registerstartup" class="bg-white py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-ipkoRed text-center mb-6">
        {{ $translations[$currentLang].startup.registrationTitle }}
      </h1>
      <p class="text-lg text-ipkoDark text-center mb-8">
        {{ $translations[$currentLang].startup.registrationSubtitle }}
      </p>

      <!-- Form për Regjistrimin e Startup-it -->
      <form
        @submit.prevent="submitForm"
        class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <!-- Startup Name -->
        <div class="mb-4">
          <label for="name" class="block text-ipkoRed font-semibold mb-2">
            {{ $translations[$currentLang].startup.form.name }}
          </label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            placeholder="Startup Name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label for="email" class="block text-ipkoRed font-semibold mb-2">
            {{ $translations[$currentLang].startup.form.email }}
          </label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            placeholder="Email Address"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>

        <!-- Website -->
        <div class="mb-4">
          <label for="website" class="block text-ipkoRed font-semibold mb-2">
            {{ $translations[$currentLang].startup.form.website }}
          </label>
          <input
            v-model="form.website"
            type="url"
            id="website"
            placeholder="Website URL (optional)"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>

        <!-- Industry -->
        <div class="mb-4">
          <label for="industry" class="block text-ipkoRed font-semibold mb-2">
            {{ $translations[$currentLang].startup.form.industry }}
          </label>
          <select
            v-model="form.industry"
            id="industry"
            class="w-full px-4 py-2 border text-ipkoDark rounded-lg focus:outline-none"
            required
          >
            <option value="" disabled>
              {{ $translations[$currentLang].startup.form.selectIndustry }}
            </option>
            <option value="tech">Technology</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
          </select>
        </div>

        <!-- Description -->
        <div class="mb-4">
          <label
            for="description"
            class="block text-ipkoRed font-semibold mb-2"
          >
            {{ $translations[$currentLang].startup.form.description }}
          </label>
          <textarea
            v-model="form.description"
            id="description"
            rows="4"
            placeholder="Brief description of your startup"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-ipkoRed text-white font-semibold py-2 px-4 rounded-lg hover:bg-ipkoLight transition"
        >
          {{ $translations[$currentLang].startup.form.submit }}
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Startup",
  data() {
    return {
      form: {
        name: "",
        email: "",
        website: "",
        industry: "",
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
      // Logika për dërgimin e të dhënave
      console.log("Form Submitted", this.form);
      alert(this.getTranslation("startup.form.successMessage"));
    },
  },
};
</script>
  


  
  <style scoped>
.startup h1 {
  font-size: 2.5rem;
}
.startup p {
  font-size: 1rem;
}
.startup .grid div {
  transition: transform 0.3s;
}
.startup .grid div:hover {
  transform: translateY(-5px);
}
label {
  font-size: 0.875rem;
}
button {
  transition: background-color 0.3s ease;
}
</style>
  