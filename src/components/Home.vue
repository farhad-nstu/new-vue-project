<template>
  <img class="logo" alt="Restaurant logo" src="../assets/resto.png">
  <h1>Home Page</h1>
  <div class="register">
    <input type="text" v-model="weight" placeholder="Enter Your Parcel Weight">
    <select v-model="route">
      <option value="1">Inside Dhaka</option>
      <option value="2">Outside Dhaka</option>
    </select>
    <select v-model="delivery_type">
      <option value="1">Regular Service</option>
      <option value="2">Express Service</option>
    </select>
    <button type="submit" @click="fetch_shipping()" class="btn">Submit</button>
    <p id="shipping"></p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Home',
  data () {
    return {
      weight: '',
      route: '',
      delivery_type: '',
    }
  }, 

  methods: {
    async fetch_shipping () {

      let result = await axios.post("http://127.0.0.1:8000/api/get-shipping-cost", {
        weight: this.weight,
        route: this.route,
        delivery_type: this.delivery_type,
        token: localStorage.getItem("user")
      })
console.log(result)
      if(parseInt(result.status) == 200) {
        document.getElementById("shipping").innerHTML = "Your total shipping cost is "+result.data.cost;
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

  .register input, select {
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
