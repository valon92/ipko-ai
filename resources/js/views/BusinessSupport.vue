<template>
    <div class="container mx-auto px-4 py-8">
      <!-- Titulli Kryesor -->
      <h1 class="text-3xl font-bold text-ipkoRed mb-6">
        {{ $translations[$currentLang].BusinessSupport.title }}
      </h1>
  
      <!-- Seksioni i Faturave -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          {{ $translations[$currentLang].BusinessSupport.invoices }}

        </h2>
     
        <div class="overflow-x-auto">
  <table class="w-full border bg-white rounded-lg shadow-md">
    <thead class="bg-ipkoRed text-white">
      <tr>
        <th class="px-4 py-2">#</th>
        <th class="px-4 py-2">
            {{ $translations[$currentLang].BusinessSupport.invoiceDate }}


        </th>
        <th class="px-4 py-2">
            {{ $translations[$currentLang].BusinessSupport.amount}}

        </th>
        <th class="px-4 py-2">
            {{ $translations[$currentLang].BusinessSupport.action}}

        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(invoice, index) in invoices"
        :key="index"
        class="border-t hover:bg-gray-100"
      >
        <td class="px-4 py-2">{{ index + 1 }}</td>
        <td class="px-4 py-2">{{ invoice.date }}</td>
        <td class="px-4 py-2">{{ invoice.amount }}</td>
        <td class="px-4 py-2">
          <button
            @click="downloadInvoice(invoice.id)"
            class="bg-ipkoRed  text-white px-4 py-2 rounded-md hover:bg-ipkoLight transition"
          >
            {{ $translations[$currentLang].BusinessSupport.download}}

            
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>




      </section>
  
      <!-- Seksioni i Paketave -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          {{ $translations[$currentLang].BusinessSupport.packages}}

        </h2>
        <div v-for="(packageItem, index) in packages" :key="index" class="p-4 mb-4 border rounded-lg">
          <h3 class="text-xl font-bold text-ipkoRed">{{ packageItem.name }}</h3>
          <p class="text-gray-700">{{ packageItem.description }}</p>
          <button
            @click="upgradePackage(packageItem.id)"
            class="mt-2 bg-ipkoRed text-white px-4 py-2 rounded-md hover:bg-ipkoLight transition"
          >
            {{ $translations[$currentLang].BusinessSupport.upgrade}}

          </button>
        </div>
      </section>
  
      <!-- Seksioni i Kontratave -->
      <section>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          {{ $translations[$currentLang].BusinessSupport.contracts}}

        </h2>
        <div v-for="(contract, index) in contracts" :key="index" class="p-4 mb-4 border rounded-lg">
          <h3 class="text-xl font-bold text-ipkoRed">{{ contract.title }}</h3>
          <p class="text-gray-700">{{ contract.details }}</p>
          <button
            @click="viewContract(contract.id)"
            class="mt-2 bg-ipkoRed text-white px-4 py-2 rounded-md hover:bg-ipkoLight transition"
          >
            {{ $translations[$currentLang].BusinessSupport.view}}

          </button>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "BusinessSupport",
    data() {
      return {
        invoices: [
          { id: 1, date: "2025-01-01", amount: "$200" },
          { id: 2, date: "2025-02-01", amount: "$150" },
        ],
        packages: [
          { id: 1, name: "Standard Package", description: "Basic internet services." },
          { id: 2, name: "Premium Package", description: "High-speed internet and more." },
        ],
        contracts: [
          { id: 1, title: "Internet Contract", details: "Contract for internet services." },
          { id: 2, title: "Business Contract", details: "Comprehensive business services." },
        ],
      };
    },
    methods: {
      downloadInvoice(id) {
        alert(`Downloading invoice ${id}`);
      },
      upgradePackage(id) {
        alert(`Upgrading package ${id}`);
      },
      viewContract(id) {
        alert(`Viewing contract ${id}`);
      },
      getTranslation(key) {
        return (
          this.$translations?.[this.$root.$currentLang]?.[key] ||
          `Missing Translation: ${key}`
        );
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  