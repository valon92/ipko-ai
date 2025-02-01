<template>
    <div class="bg-gray-100 min-h-screen">
      <!-- Header -->
      <header class="bg-ipkoRed text-white py-4 text-center shadow-md">
        <h1 class="text-2xl font-bold">Business Dashboard</h1>
      </header>
  
      <div class="container mx-auto px-6 py-8">
        <!-- Sidebar & Main Content -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <!-- Sidebar -->
          <aside class="bg-white p-4 shadow-md rounded-md md:col-span-1">
            <h2 class="text-lg font-bold mb-4">Navigation</h2>
            <ul class="space-y-2">
              <li>
                <button @click="currentTab = 'overview'" class="w-full text-left px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                  Overview
                </button>
              </li>
              <li>
                <button @click="currentTab = 'invoices'" class="w-full text-left px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                  Invoices
                </button>
              </li>
              <li>
                <button @click="currentTab = 'reports'" class="w-full text-left px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                  Reports
                </button>
              </li>
            </ul>
          </aside>
  
          <!-- Main Content -->
          <section class="bg-white p-6 shadow-md rounded-md md:col-span-3">
            <div v-if="currentTab === 'overview'">
              <h2 class="text-xl font-bold mb-4">Business Overview</h2>
              <p>Welcome to your business dashboard. Here you can manage invoices, reports, and services.</p>
            </div>
  
            <div v-if="currentTab === 'invoices'">
              <h2 class="text-xl font-bold mb-4">Invoices</h2>
              <table class="w-full border bg-white rounded-lg shadow-md">
                <thead class="bg-ipkoRed text-white">
                  <tr>
                    <th class="px-4 py-2">#</th>
                    <th class="px-4 py-2">Invoice Date</th>
                    <th class="px-4 py-2">Amount</th>
                    <th class="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(invoice, index) in invoices" :key="index" class="border-t hover:bg-gray-100">
                    <td class="px-4 py-2">{{ index + 1 }}</td>
                    <td class="px-4 py-2">{{ invoice.date }}</td>
                    <td class="px-4 py-2">${{ invoice.amount }}</td>
                    <td class="px-4 py-2">
                      <button @click="downloadInvoice(invoice.id)" class="bg-ipkoRed text-white px-4 py-2 rounded-md hover:bg-ipkoLight transition">
                        Download
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div v-if="currentTab === 'reports'">
              <h2 class="text-xl font-bold mb-4">Business Reports</h2>
              <p>Here you can generate and view reports on business analytics.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BusinessDashboard",
    data() {
      return {
        currentTab: "overview",
        invoices: [
          { id: 1, date: "2024-01-10", amount: 500 },
          { id: 2, date: "2024-02-15", amount: 750 },
          { id: 3, date: "2024-03-20", amount: 1200 },
        ],
      };
    },
    methods: {
      downloadInvoice(id) {
        alert(`Downloading invoice ${id}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  