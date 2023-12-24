<template>
  <div class="login-page">
    <div class="login-container">
      <h1 class="page-title">My App</h1>
      <form class="login-form" @submit.prevent="login">
        <label for="username" class="form-label">Username</label>
        <input v-model="username" type="text" id="username" class="form-input" />
        <label for="password" class="form-label">Password</label>
        <input v-model="password" type="password" id="password" class="form-input" />
        <button class="login-btn" type="submit">Login</button>
      </form>
      <p class="forgot-password"><a href="#" class="forgot-link">Forgot your password?</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username === "admin" && this.password === "123") {
        this.$router.push("/wallet");
      } else {
        alert("Invalid credentials. Access denied.");
      }
    },
  },
};
</script>

<style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
  }

  .login-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .page-title {
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
  }

  .login-form {
    display: flex;
    flex-direction: column;
  }

  .form-label {
    font-size: 1em;
    margin-bottom: 8px;
    color: #555;
    text-align: left; /* Align the label text to the left */
  }

  .form-input {
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
  }

  .login-btn {
    background-color: green;
    color: #fff;
    padding: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2em;
    transition: background-color 0.3s ease;
  }


  .forgot-password {
    font-size: 0.9em;
    color: #7f8c8d;
  }

  .forgot-link {
    color: #3498db;
    text-decoration: none;
  }

  .forgot-link:hover {
    text-decoration: underline;
  }
</style>
