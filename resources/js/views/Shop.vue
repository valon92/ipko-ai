<template>
    
     
 
    <router-link to="/cart" 
           class="bg-ipkoRed float-right text-white px-6 py-3 mt-2 mr-2 rounded-lg font-semibold shadow-md 
           hover:bg-ipkoLight transition">

             {{ $translations[$currentLang].shop.viewCart }}

           </router-link>
 
  <div class="bg-white min-h-screen">
    <!-- Hero Section -->
    <section class="bg-white text-black py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          {{ $translations[$currentLang].shop.heroTitle }}
        </h1>
        <p class="text-lg md:text-xl mb-6">
          {{ $translations[$currentLang].shop.heroSubtitle }}

        </p>
      </div>
    </section>


       <!-- Filter Section -->
       <section class="py-8 bg-white">
      <div class=" mx-auto px-6">
        <div 
        class="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <label 
            class="block text-lg font-semibold">
            {{ $translations[$currentLang].shop.category }}

        </label>
            <select v-model="selectedCategory" 
            class="w-full md:w-64 p-2 border rounded-lg">
              <option value="all">
                {{ $translations[$currentLang].shop.allCategories }}

            </option>
              <option v-for="category in categories" :key="category" :value="category">{{ getTranslation(category) }}</option>
            </select>
          </div>
          <div>
           
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-12">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-black mb-10">
          {{ $translations[$currentLang].shop.productsTitle }}

        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="product in products" :key="product.id" 
            class="bg-white p-6 shadow-md rounded-lg text-center">
            <img :src="product.image" 
            class="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 class="text-xl font-bold mb-2">

                {{ $translations[$currentLang].shop.productsTitle }}

            </h3>
            <p class="text-gray-700 mb-4">
                {{ getTranslation(product.description) }}
                {{ $translations[$currentLang].shop.description }}

            </p>
            <p class="text-lg font-bold text-ipkoRed mb-4">
                ${{ product.price }}
            </p>
            <button @click="addToCart(product)" class="bg-ipkoRed text-white px-4 py-2 rounded-md hover:bg-ipkoLight transition">
              {{ $translations[$currentLang].shop.addToCart }}

            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Shop",
  data() {
    return {
      selectedCategory: "all",
      searchQuery: "",
      categories: ["electronics", "business-tools", "software", "accessories"],
      products: [
        { id: 1, title: "shop.laptop", description: "shop.laptopDesc", price: 1200, category: "electronics", image: "/images/laptop.png" },
        { id: 2, title: "shop.posSystem", description: "shop.posSystemDesc", price: 800, category: "business-tools", image: "/images/pos.png" },
        { id: 3, title: "shop.crmSoftware", description: "shop.crmSoftwareDesc", price: 300, category: "software", image: "/images/crm.png" },
        { id: 4, title: "shop.mouse", description: "shop.mouseDesc", price: 25, category: "accessories", image: "/images/mouse.png" },
      ],
    };
  },
  methods: {
    methods: {
    getTranslation(key) {
      return this.$translations[this.$root.$currentLang]?.[key] || key;
    },
    addToCart(product) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${this.getTranslation("shop.addedToCart")}: ${this.getTranslation(product.title)}`);
    }
  }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        const matchesCategory = this.selectedCategory === "all" || product.category === this.selectedCategory;
        const matchesSearch = product.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

 
  
 