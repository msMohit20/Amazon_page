<template>
  <div class="header">
    <div class="logo_div">
      <router-link to="/" class="title"
        ><img src="../assets/Amazonlogo.png" alt="Amazon" class="logo"
      /></router-link>
    </div>
    <div class="search_field">
      <input
        type="text"
        v-model="input"
        placeholder="Search Products Here..."
        class="search"
      />
      <button class="btn" @click="searchQuery">
        <i class="material-icons"> search</i>
      </button>
    </div>
    <router-link to="/cart" class="cart">
      <button><i class="material-icons"> shop</i></button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    searchQuery() {
      axios
        .get("https://dummyjson.com/products/search?q=" + this.input)
        .then((response) => {
          console.log(response.data.products);
          console.log(this.input);
          this.$store.commit("setInput", this.input);
          this.$store.commit("setProducts", response.data.products);
          this.$router.push("/searchresults");
        })

        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.header {
  text-decoration: none;
  background: #333;
  display: flex;
  justify-content: space-between;
}

.logo {
  margin: 5px;
  height: 50px;
  width: 80px;
  margin-left: 50px;
  background: #fff;
}

.search {
  max-width: 600px;
  width: 600px;
  min-width: 100px;
  height: 30px;
  /* margin-left: 200px; */
  margin-top: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding-left: 10px;
  font-size: 20px;
  color: #333;
}

.btn {
  background: orange;
  padding-bottom: 15px;
  border: none;
  /* size: 20px; */
  border-radius: 5px;
  height: 35px;
}

.cart {
  margin-top: 15px;
  margin-right: 15px;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  height: 35px;
}
</style>
