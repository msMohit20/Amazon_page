<template>
  <div class="searchresult">
    <p class="search_result">
      1 of {{ products.length }} found for {{ input }}
    </p>
    <div class="row">
      <div class="column">
        <div
          class="card"
          @click="gotoproductpage(product.id)"
          v-for="product in products"
          :key="product.id"
        >
          <div class="Image">
            <img :src="product.images[0]" class="image" height="50px" />
          </div>
          <div class="product-info">
            <h4 class="product-title">{{ product.title }}</h4>
            <p class="product-rating">
              {{ product.rating }}
              <span class="fa fa-star checked"></span>/ 5
            </p>
            <h5 class="product-price">
              ${{ product.price }}
              <p v-if="!check_stock" class="stock">
                In stock - {{ product.stock }}
              </p>
            </h5>
          </div>
        </div>
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
    input() {
      return this.$store.state.input;
    },
    products() {
      return this.$store.getters["products"];
    },
    check_stock() {
      if (this.products.stock > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    gotoproductpage(id) {
      this.$router.push("/about/" + id);
    },
  },
};
</script>

<style scoped>
.search_result {
  font-size: 15px;
  color: #000;
  margin: 0px;
  text-align: left;
  padding-left: 10px;
  background: whitesmoke;
}
.checked {
  color: orange;
}

.card {
  display: flex;
  margin: 10px;
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #ccc;
  transition: all 0.2s ease-in-out;
}

.image {
  height: 150px;
  width: 200px;
}

.product-info {
  text-align: left;
  margin-left: 10px;
}

.product-rating {
  margin: 0px;
  padding-top: 10px;
}

.product-title {
  font-size: 20px;
  text-transform: capitalize;
  margin: 0;
}

.product-price {
  font-weight: bold;
  color: #b12704;
  /* background: #ffff00; */
  width: 100px;
  font-size: 20px;
  margin: 0;
  padding-top: 10px;
}

.stock {
  color: #00a65a;
  font-size: 10px;
}
</style>
