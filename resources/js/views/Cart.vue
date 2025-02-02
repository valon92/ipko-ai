<template>
    <div class="bg-gray-100 min-h-screen">
      <section class="bg-ipkoRed text-white py-16">
        <div class="container mx-auto px-6 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            {{ $translations[$currentLang].cart.title }}

            
          </h1>
          <p class="text-lg md:text-xl mb-6">
            {{ $translations[$currentLang].cart.subtitle }}

            

          </p>
        </div>
      </section>
  
      <!-- Cart Items -->
      <section class="py-12">

        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center text-ipkoRed mb-10">
            {{ $translations[$currentLang].cart.yourCart }}

          </h2>
          <div v-if="cart.length > 0" 
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(item, index) in cart" :key="index" 
            class="bg-white p-6 shadow-md rounded-lg text-center">
              <img :src="item.image"
            class="w-full h-48 object-cover rounded-lg mb-4" />

              <h3 class="text-xl font-bold mb-2">
                {{ getTranslation(item.title) }}
            </h3>
              <p class="text-gray-700 mb-2">
                {{ getTranslation(item.description) }}
            </p>
              <p class="text-lg font-bold text-ipkoRed mb-2">${{ item.price }}</p>
              <button @click="removeFromCart(index)" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                {{ getTranslation("cart.remove") }}
              </button>
            </div>
          </div>
          <p v-else class="text-center text-lg text-gray-600">{{ getTranslation("cart.empty") }}</p>
  
          <div v-if="cart.length > 0" class="text-center mt-6">
            <button @click="checkout" class="bg-ipkoRed text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-ipkoLight transition">
              {{ getTranslation("cart.checkout") }}
            </button>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Cart",
    data() {
      return {
        cart: JSON.parse(localStorage.getItem("cart")) || [],
      };
    },
    methods: {
      getTranslation(key) {
        return this.$translations[this.$root.$currentLang]?.[key] || key;
      },
      removeFromCart(index) {
        this.cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      },
      checkout() {
        alert(this.getTranslation("cart.checkoutMessage"));
        localStorage.removeItem("cart");
        this.cart = [];
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  