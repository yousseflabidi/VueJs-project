<template>
  <div class="content">
    <div class="header">
      <h1 class="crypto-heading">Crypto List</h1>
      <router-link to="/wallet">
        <button class="btn-wallet">Go to my wallet</button>
      </router-link>
    </div>
    <table class="crypto-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Change (24hr)</th>
          <th>24h Volume</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="crypto in cryptos" :key="crypto.id">
          <tr>
            <td>
              <span class="crypto_symbol">{{ crypto.symbol }}</span>
              <span class="crypto_name">{{ crypto.name }}</span>
            </td>

            <td>{{ parseFloat(crypto.priceUsd).toFixed(2) }}</td>
            <td
              :class="{
                'negative-change': crypto.changePercent24Hr < 0,
                'positive-change': crypto.changePercent24Hr >= 0,
              }"
            >
              {{ parseFloat(crypto.changePercent24Hr).toFixed(2) }}%
            </td>
            <td>{{ parseFloat(crypto.volumeUsd24Hr).toFixed(2) }}</td>
            <td>{{ parseFloat(crypto.marketCapUsd).toFixed(2) }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cryptos: [],
      loading: true,
    };
  },
  async created() {
    await this.getCloudflareData();
  },
  methods: {
    async getCloudflareData() {
      try {
        const response = await axios.get(
          "https://worker-morning-night-c720.laabidiyoussef9.workers.dev/"
        );
        this.cryptos = response.data.data; // Assuming the data structure is similar to the CoinCap API
        this.loading = false;
        console.log(this.cryptos);
      } catch (error) {
        console.error("Error fetching data from Cloudflare Worker:", error);
        console.log("Response:", error.response); // Log the response for more details
      }
    },
  },
};
</script>

<style>
.crypto-table {
  width: 80%;
  border-collapse: collapse;
  margin-top: 50px;
}

th,
td {
  color: white;
  padding: 8px;
  text-align: left;
}

th {
  font-size: 12px;
  color: #848e9c;
}

.negative-change {
  color: #e9455d;
}

.positive-change {
  color: #17be7c;
}
.crypto-heading {
  color: white;
  font-size: 30px;
  margin-top: 40px;
  margin-bottom: 20px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.btn-wallet {
  cursor: pointer;
  height: 40px;
  background-color: #fcd535;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
}
.crypto_symbol {
  margin-right: 10px;
  font-weight: bold;
}
.crypto_name {
  margin-right: 200px;
  font-size: 15px;
  color: #5f7e93;
  font-weight: lighter;
}
</style>
