<template>
  <div class="relative">
    <input
      v-model="query"
      @input="performSearch"
      type="text"
      placeholder="Search..."
      class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
    />
    <ul
      v-if="results.length"
      class="absolute bg-white border border-gray-200 mt-1 w-full max-h-48 overflow-y-auto shadow-lg"
    >
      <li
        v-for="(result, index) in results"
        :key="index"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        @click="navigateTo(result.url)"
      >
        {{ result.title }}
      </li>
    </ul>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
      results: [],
    };
  },
  methods: {
    async performSearch() {
      if (this.query.trim() === "") {
        this.results = [];
        return;
      }

      try {
        const response = await axios.get(`/api/search?query=${this.query}`);
        this.results = response.data.pages || [];
      } catch (error) {
        console.error("Search error:", error);
      }
    },
    navigateTo(url) {
      this.$router.push(url);
      this.results = [];
    },
  },
};
</script>
  
  <style scoped>
input {
  transition: border-color 0.3s;
}
input:focus {
  border-color: #e30613;
}
</style>
  