<template>
  <div class="page">
    <div class="result">
      <router-link to="/">Back to Home</router-link>
    </div>
    <!-- <div class="row">
      <div class="col-md-6">
        <div class="image">
          <img :src="product.image" alt="Image" height="200px" />
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
    </div> -->
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      //   product: [],
      id: "",
    };
  },
};
</script> -->

<style scoped>
.result {
  text-align: left;
}

.page {
  background: whitesmoke;
  height: 100vh;
}
</style>
