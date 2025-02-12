<template>
    <div class="bg-gray-100 min-h-screen py-10">
      <div class="container mx-auto px-6">
        <h1 class="text-3xl font-bold text-ipkoRed mb-6">{{ getTranslation("checkout.title") }}</h1>
  
        <div v-if="cart.length === 0" class="text-center text-gray-600">
          <p>{{ getTranslation("checkout.empty") }}</p>
          <router-link to="/shop" class="text-ipkoRed font-semibold">{{ getTranslation("checkout.shopNow") }}</router-link>
        </div>
  
        <div v-else>
          <form @submit.prevent="submitOrder" class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">{{ getTranslation("checkout.billingDetails") }}</h2>
            <div class="mb-4">
              <label class="block font-semibold">{{ getTranslation("checkout.name") }}</label>
              <input v-model="customer.name" type="text" class="w-full p-2 border rounded-lg" required>
            </div>
            <div class="mb-4">
              <label class="block font-semibold">{{ getTranslation("checkout.email") }}</label>
              <input v-model="customer.email" type="email" class="w-full p-2 border rounded-lg" required>
            </div>
            <div class="mb-4">
              <label class="block font-semibold">{{ getTranslation("checkout.address") }}</label>
              <input v-model="customer.address" type="text" class="w-full p-2 border rounded-lg" required>
            </div>
  
            <h2 class="text-2xl font-semibold mt-6 mb-4">{{ getTranslation("checkout.payment") }}</h2>
            <select v-model="paymentMethod" class="w-full p-2 border rounded-lg">
              <option value="card">{{ getTranslation("checkout.creditCard") }}</option>
              <option value="invoice">{{ getTranslation("checkout.invoice") }}</option>
            </select>
  
            <div v-if="paymentMethod === 'card'" class="mb-4">
              <label class="block font-semibold">{{ getTranslation("checkout.cardDetails") }}</label>
              <div id="card-element" class="w-full p-2 border rounded-lg"></div>
              <p v-if="cardError" class="text-red-500">{{ cardError }}</p>
            </div>
  
            <button type="submit" class="bg-ipkoRed text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-ipkoLight transition mt-6 w-full">
              {{ getTranslation("checkout.placeOrder") }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { loadStripe } from "@stripe/stripe-js";
  
  export default {
    name: "Checkout",
    data() {
      return {
        cart: [],
        customer: {
          name: "",
          email: "",
          address: "",
        },
        paymentMethod: "card",
        stripe: null,
        cardElement: null,
        cardError: "",
      };
    },
    methods: {
      getTranslation(key) {
        return this.$translations[this.$root.$currentLang]?.[key] || key;
      },
      async submitOrder() {
        if (this.paymentMethod === "card") {
          const { token, error } = await this.stripe.createToken(this.cardElement);
          if (error) {
            this.cardError = error.message;
            return;
          }
          this.processPayment(token.id);
        } else {
          alert(this.getTranslation("checkout.invoiceSelected"));
        }
      },
      async processPayment(token) {
        try {
          const response = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount: this.cart.reduce((acc, item) => acc + item.price, 0),
              token,
            }),
          });
  
          const data = await response.json();
          if (data.error) {
            this.cardError = data.error;
          } else {
            alert(this.getTranslation("checkout.orderPlaced"));
            localStorage.removeItem("cart");
            this.$router.push("/shop");
          }
        } catch (error) {
          this.cardError = "Payment failed!";
        }
      },
      async loadStripeElements() {
        this.stripe = await loadStripe("your-stripe-public-key");
        const elements = this.stripe.elements();
        this.cardElement = elements.create("card");
        this.cardElement.mount("#card-element");
      },
    },
    mounted() {
      this.cart = JSON.parse(localStorage.getItem("cart")) || [];
      this.loadStripeElements();
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  </style>
  