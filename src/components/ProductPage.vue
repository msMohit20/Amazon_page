<template>
  <div class="page">
    <div class="result">
      <router-link to="/"> Back to Home</router-link>
    </div>
    <div class="row">
      <div class="Image1">
        <div class="image">
          <img :src="product.images[0]" alt="Image" height="300px" />
        </div>
      </div>
      <div class="data">
        <div class="product-info">
          <h4 class="product-title">{{ product.title }}</h4>
          <p class="product-rating">Rating : {{ product.rating }} / 5</p>
          <button class="product-price">Price :${{ product.price }}</button>
          <div class="product-description">
            {{ product.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      product: {},
    };
  },
  created() {
    console.log(this.id);
    axios
      .get("https://dummyjson.com/products/" + this.id)
      .then((response) => {
        console.log(response);
        this.product = response.data;
        console.log(this.product);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.result {
  text-align: left;
  background: whitesmoke;
}

.page {
  height: 100vh;
}
.row {
  margin-top: 15px;
  padding: 50px;
  display: flex;
  justify-content: space-evenly;
}

.data {
  width: 60%;
  align-content: left;
  text-align: left;
}

.product-title {
  font-size: 20px;
  font-weight: bold;
  margin-left: 5px;
}

.product-rating,
.product-price,
.product-description {
  margin-bottom: 10px;
  /* padding-left: 10px; */
  margin-left: 5px;
}
</style>
