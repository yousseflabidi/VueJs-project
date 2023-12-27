<template>
  <h2>My Wallet</h2>
  <div class="btn-market-container">
    <router-link to="/crypto">
      <button class="btn-market">Market List</button>
    </router-link>
  </div>
</template>

<style>
.btn-market-container {
  display: flex;
  justify-content: flex-end;
}

.btn-market {
  background-color: yellow;
  border: 1px solid #000;
  border-radius: 8px;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
</style>
