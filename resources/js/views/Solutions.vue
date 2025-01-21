<template>
  <section class="solutions bg-white py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-ipkoRed text-center mb-6">
        {{ $translations[$currentLang].solutions.title }}
      </h1>
      <p class="text-lg text-ipkoDark text-center mb-8">
        {{ $translations[$currentLang].solutions.subtitle }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="solution in solutions"
          :key="solution.id"
          class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg"
        >
          <h3 class="text-xl font-semibold text-ipkoRed mb-2">
            {{ $translations[$currentLang].solutions.title }}
          </h3>
          <p class="text-ipkoDark">
            {{ $translations[$currentLang].solutions.telecom.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "Solutions",
  data() {
    return {
      solutions: [
        {
          id: 1,
          title: this.getTranslation("solutions.telecom.title"),
          description: this.getTranslation("solutions.telecom.description"),
        },
        {
          id: 2,
          title: this.getTranslation("solutions.smallBusiness.title"),
          description: this.getTranslation(
            "solutions.smallBusiness.description"
          ),
        },
        {
          id: 3,
          title: this.getTranslation("solutions.education.title"),
          description: this.getTranslation("solutions.education.description"),
        },
      ],
    };
  },
  methods: {
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
.solutions h1 {
  font-size: 2.5rem;
}
.solutions p {
  font-size: 1rem;
}
.solutions .grid div {
  transition: transform 0.3s;
}
.solutions .grid div:hover {
  transform: translateY(-5px);
}
</style>
  