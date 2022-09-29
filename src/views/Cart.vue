<template>
  <div class="cart">
    <div class="card" v-for="product in products" :key="product.id">
      <div class="devide">
        <div class="pic">
          <div class="image">
            <img :src="product.thumbnail" height="100px" />
          </div>
        </div>
        <div class="data">
          <div class="product-info">
            <div class="product-title">
              {{ product.title }}
            </div>
            <div class="product-discription">
              {{ product.discription }}
            </div>
            <div class="product-price">${{ product.price }}.00</div>
            <div class="remove">
              <router-link to="/" @click="remove" class="rem"
                >Remove</router-link
              >
              |
              <router-link to="/" class="later">Save for Later</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="checkout">
        <button class="btn">checkout</button>
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
  methods: {
    remove() {
      this.$store.commit("removeFromCart");
    },
  },
};
</script>
<style scoped>
/* .cart { */
/* display: flex; */
/* justify-content: space-between; */
/* } */

.card {
  display: flex;
  flex-direction: row;
  padding: 20px;
  width: 100%;
  height: 100px;
  justify-content: space-between;
}

.devide {
  display: flex;
  justify-content: space-between;
}

.data {
  justify-content: space-between;
  margin-left: 30px;
  margin-top: 10px;
  font-size: 20px !important;
}

.remove {
  margin-top: 10px;
  font-size: 13px !important;
  color: black;
  text-transform: none;
  text-decoration: none;
  padding-left: 30px;
}

.checkout {
  margin-right: 70px;
  /* margin: 10px; */
  font-size: 50px;
  height: 100px;
  width: 100px;
}

.rem {
  color: red;
}

.later {
  color: green;
}

.btn {
  background-color: #f6a606;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
}
</style>
