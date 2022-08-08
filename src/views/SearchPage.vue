<template>
  <div class="searchresult">
    <!-- <p>
      <span class="fa fa-angle-left"> {{ result }} </span>
    </p> -->
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
    products() {
      return this.$store.getters["products"];
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
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.column {
  float: left;
  width: 100%;
  padding: 10px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: left;
  background-color: #f1f1f1;
  display: flex;
}

.image {
  margin-top: 10px;
  margin-bottom: 10px;
  height: 200px;
}
</style>
