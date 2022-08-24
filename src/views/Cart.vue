<template>
  <div class="cart">
    <div class="card" v-for="product in products" :key="product.id">
      <div class="image">
        <img :src="product.thumbnail" height="100px" />
      </div>
      <div class="product-info">
        <div class="product-title">
          {{ product.title }}
        </div>
        <div class="product-discription">
          {{ product.discription }}
        </div>
        <div class="product-price">${{ product.price }}.00</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    products() {
      console.log(this.$store.getters.cartpage);
      return this.$store.getters.cartpage;
    },
  },
};
</script>
