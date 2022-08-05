<template>
  <div class="page">
    <div class="result">
      <router-link to="/">Back to Home</router-link>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="image">
          <img :src="product.images[0]" alt="Image" height="200px" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="product-info">
          <h4 class="product-title">{{ product.title }}</h4>
          <p class="product-rating">{{ product.rating }} / 5</p>
          <button class="product-price">${{ product.price }}</button>
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
}

.page {
  background: whitesmoke;
  height: 100vh;
}
</style>
