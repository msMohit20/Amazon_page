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
      <button class="btn">
        <i class="material-icons"> search</i>
      </button>
    </div>
    <div class="cart">
      <i class="material-icons"> shop</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  // methods: {
  //     search() {
  //     this.$router.push({
  //         name: "search",
  //         params: {
  //         query: this.input,
  //         },
  //     });
  //     },
  // },
  // mounted() {
  //     this.$nextTick(() => {
  //     this.$refs.search.focus();
  //     });
  // },
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
  size: 20px;
  border-radius: 5px;
  height: 35px;
}

.cart {
  margin-top: 20px;
  margin-right: 15px;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  height: 35px;
}
</style>
