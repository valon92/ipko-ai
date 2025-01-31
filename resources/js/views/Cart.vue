<template>
    <div class="cart-page">
      <header class="bg-ipkoRed text-white py-6">
        <div class="container mx-auto px-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold">Your Cart</h1>
          <router-link to="/shop" class="bg-white text-ipkoRed px-4 py-2 rounded-md shadow-md">
            Back to Shop
          </router-link>
        </div>
      </header>
  
      <main class="container mx-auto px-4 py-6">
        <h2 class="text-3xl font-bold mb-4">Cart Items</h2>
        <div v-if="cart.length" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(item, index) in cart"
            :key="index"
            class="bg-white shadow-md rounded-lg p-4"
          >
            <img :src="item.image" :alt="item.name" class="mb-4 rounded-lg w-full h-48 object-cover" />
            <h3 class="text-lg font-semibold">{{ item.name }}</h3>
            <p class="text-gray-600 mb-4">${{ item.price }}</p>
            <button
              @click="removeFromCart(index)"
              class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition"
            >
              Remove
            </button>
          </div>
        </div>
        <div v-else class="text-center">
          <p class="text-gray-600">Your cart is empty!</p>
          <router-link to="/shop" class="text-ipkoRed font-semibold hover:underline">
            Go back to Shop
          </router-link>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: "Cart",
    computed: {
      cart() {
        return this.$store.state.cart;
      },
    },
    methods: {
      removeFromCart(index) {
        this.$store.commit("removeFromCart", index);
      },
    },
  };
  </script>
  
  <style scoped>
  .cart-page {
    font-family: Arial, sans-serif;
  }
  </style>
  