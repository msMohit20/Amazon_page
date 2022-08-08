<template>
  <div class="productitem">
    <div class="row">
      <div class="Image1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          alt=""
          class="image1"
        />
      </div>
      <div class="data">
        <h3>Amazon Big Day Sale</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          exercitationem aperiam natus blanditiis!
        </p>
        <button @click="gotohome()" class="salebutton">Go Sale</button>
      </div>
    </div>
    <div class="product">
      <div
        class="card"
        @click="gotoproductpage(product.id)"
        v-for="product in products"
        :key="product.id"
      >
        <img :src="product.images[0]" class="image" height="50px" />
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
</template>

<script>
import axios from "axios";
export default {
  props: ["id", "title", "price", "image"],
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        this.products = response.data.products;
        console.log(this.products);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    check_stock() {
      if (this.products.stock > 0) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    gotohome() {
      this.$router.push({
        name: "home",
      });
    },

    gotoproductpage(id) {
      // console.log(id);
      this.$router.push("/about/" + id);
    },
  },
};
</script>

<style scoped>
.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
}

.stock {
  color: #00a65a;
  font-size: 10px;
}

.checked {
  color: orange;
}

@keyframes color {
  0% {
    background: #ffffff;
  }
  20% {
    background: #33cc36;
  }
  40% {
    background: #b8cc33;
  }
  60% {
    background: #fcca00;
  }
  80% {
    background: #33cc36;
  }
  100% {
    background: #fff;
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #fff;
  animation: color 9s infinite linear;
  padding-bottom: 15px;
}

.data {
  padding-left: 10px;
  /* padding-top: 150px; */
}

.salebutton {
  background: #ffc107;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 270px;
  margin: 10px;
  background: rgb(255, 255, 255);
  height: 350px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.image {
  margin-top: 10px;
  margin-bottom: 10px;
  height: 100px;
}

.image1,
.image2 {
  margin-left: 10px;
  margin-top: 20px;
}

.product-rating {
  margin: 0px;
  padding: 0px;
}

.product-info {
  flex-direction: column;
  font-size: 20px;
}

.product-price {
  font-size: 20px;
  font-weight: bold;
  color: #b12704;
  /* background: #ffff00; */
  width: 100px;
}
</style>
