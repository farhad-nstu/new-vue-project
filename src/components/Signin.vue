<template>
  <img class="logo" alt="Restaurant logo" src="../assets/resto.png">
  <h1>Sign In</h1>
  <div class="register">
    <input type="email" v-model="email" placeholder="Enter Email">
    <input type="password" v-model="password" placeholder="Enter Password">
    <button type="submit" @click="signin()" class="btn">Sign In</button>
    <p id="success"></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: '',
    }
  }, 

  methods: {
    async signin () {
      let result = await axios.post("http://127.0.0.1:8000/api/login", {
        email: this.email,
        password: this.password,
      })

      if(parseInt(result.status) == 200) {

        localStorage.setItem("user", result.data.token);
            setTimeout(() => {
                this.$router.push({name:"Home"})    
            }, 3000);
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
