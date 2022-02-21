<template>
  <img class="logo" alt="Restaurant logo" src="../assets/resto.png">
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name">
    <input type="email" v-model="email" placeholder="Enter Email">
    <input type="password" v-model="password" placeholder="Enter Password">
    <input type="password" v-model="password_confirmation" placeholder="Confirm Password">
    <button type="submit" @click="signup()" class="btn">Sign Up</button>
    <p id="success"></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Signup',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      successMessage: ''
    }
  }, 

  methods: {
    async signup () {
      if(this.password != this.password_confirmation) {
        alert("Password not matched!");
      }

      let result = await axios.post("http://127.0.0.1:8000/api/register", {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      })

      if(parseInt(result.status) == 200) {
        document.getElementById("success").innerHTML = result.data.message;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    width: 120px; 
    height: 120px;
  }

  .register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
  }
  .register button {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    background-color: skyblue;
    color: #fff;
    cursor: pointer;
    border: 1px solid skyblue;
    margin-left: auto;
    margin-right: auto;
  }
</style>
