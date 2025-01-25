<template>
 
  
      <!-- Shop Page Content -->
      <section class="shop-page bg-white min-h-screen">
        <div class="container mx-auto px-6 py-16">
          <!-- Shop Title -->
          <h1 class="text-4xl font-bold text-center text-ipkoRed mb-8">
            Shop - Teknologjia për Biznese
          </h1>
  
          <!-- Shop Description -->
          <p class="text-center text-lg text-gray-700 mb-8">
            Zbuloni pajisje dhe zgjidhje teknologjike të avancuara për biznesin tuaj.
          </p>
  
          <!-- Product Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              v-for="(product, index) in products"
              :key="index"
              class="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <img 
                :src="product.image"
                :alt="product.name"
                class="mx-auto mb-4 h-48"
              />
              <h3 class="text-lg font-bold mb-2">{{ product.name }}</h3>
              <p class="text-gray-700 mb-4">{{ product.description }}</p>
              <p class="text-gray-900 font-bold mb-4">{{ product.price }} €</p>
              <button
                @click="addToCart(product)"
                class="bg-ipkoRed text-white px-4 py-2 rounded-md hover:bg-ipkoLight transition"
              >
                Shto në Shportë
              </button>
            </div>
          </div>
  
          <!-- Cart Section -->
          <div class="mt-16 bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-ipkoRed mb-4">Shporta</h2>
            <p v-if="cart.length === 0" class="text-gray-700">Shporta është bosh.</p>
            <div v-else>
              <ul>
                <li
                  v-for="(item, index) in cart"
                  :key="index"
                  class="flex justify-between items-center border-b py-2"
                >
                  <span>{{ item.name }} - {{ item.price }} €</span>
                  <button
                    @click="removeFromCart(index)"
                    class="text-red-500 hover:underline"
                  >
                    Largo
                  </button>
                </li>
              </ul>
              <div class="mt-4 text-right">
                <p class="font-bold">Totali: {{ cartTotal }} €</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
    
  </template>
  
  <script>
  
  export default {
    name: "Shop",
    components: {
   
    },
    data() {
      return {
        products: [
          {
            name: "PC për Biznes",
            description: "Zgjidhje ideale për nevojat e biznesit tuaj.",
            price: 500,
            image: "images/PC1.png",
          },
          {
            name: "Arkë Fiskale",
            description: "Pajisje e domosdoshme për bizneset e shitjeve.",
            price: 300,
            image: "images/fiscal.png",
          },
          {
            name: "Touchscreen për Market",
            description: "Pajisje inovative për marketet moderne.",
            price: 400,
            image: "images/touchscreen.png",
          },
        ],
        cart: [],
      };
    },
    computed: {
      cartTotal() {
        return this.cart.reduce((total, item) => total + item.price, 0);
      },
    },
    methods: {
      addToCart(product) {
        this.cart.push(product);
      },
      removeFromCart(index) {
        this.cart.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .shop-page {
    background-color: #f9f9f9;
  }
  
  h1 {
    color: #e30613; /* Ngjyra kryesore e IPKO */
  }
  
  button {
    transition: background-color 0.3s ease-in-out;
  }
  </style>
  