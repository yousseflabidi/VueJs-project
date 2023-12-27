<template>
  <router-view />
  <div class="container">
    <Header />
    <Balance :total="total" />
    <IncomeExpenses :income="+income" :expenses="+expenses" />
    <TransactionList
      :transactions="transactions"
      @transactionDeleted="handleTransactionDeleted"
    />
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Balance from "../components/Balance.vue";
import IncomeExpenses from "../components/IncomeExpenses.vue";
import TransactionList from "../components/TransactionList.vue";
import AddTransaction from "../components/AddTransaction.vue";

import { ref, computed, onMounted } from "vue";

import { useToast } from "vue-toastification";

const toast = useToast();

const transactions = ref([]);

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem("transactions"));

  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

// Get total
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    const amountWithPercentage =
      transaction.amount * (1 + (transaction.percentage || 0) / 100);
    return acc + amountWithPercentage;
  }, 0);
});

// Get income
const income = computed(() => {
  const totalPositivePercentage = transactions.value
    .filter((transaction) => transaction.percentage > 0)
    .reduce((acc, transaction) => acc + transaction.percentage, 0);

  // Applying toFixed(2) here to round the result to two decimal places
  return totalPositivePercentage.toFixed(2);
});

// Get expenses
const expenses = computed(() => {
  const totalNegativePercentage = transactions.value
    .filter((transaction) => transaction.percentage < 0)
    .reduce((acc, transaction) => acc + transaction.percentage, 0);
  return totalNegativePercentage.toFixed(2);
});

// Submit transaction
const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
    percentage: transactionData.percentage,
  });

  saveTransactionsToLocalStorage();

  toast.success("Transaction added.");
};

// Generate unique ID
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};

// Delete transaction
const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );

  saveTransactionsToLocalStorage();

  toast.success("Transaction deleted.");
};

// Save transactions to local storage
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};
</script>
