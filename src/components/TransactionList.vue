<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="parseFloat(transaction.percentage) < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }} <span>${{ transaction.amount }}</span>
      <span>{{
        transaction.percentage !== null ? transaction.percentage + "%" : ""
      }}</span>
      <button
        class="delete-btn"
        @click="deleteTransaction(transaction.id)"
      ></button>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["transactionDeleted"]);

const deleteTransaction = (id) => {
  emit("transactionDeleted", id);
};
</script>
