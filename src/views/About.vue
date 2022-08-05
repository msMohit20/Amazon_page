<template>
  <div class="about">
    <!-- <productpage :id="id"></productpage> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import productpage from "../components/ProductPage.vue";
export default {
  // components: {
  //   productpage,
  // },
  data() {
    return {
      // products: [],
      id: "",
    };
  },

  // created() {
  //   this.id = this.$route.params.id;
  //   console.log(this.id);
  // },
};
</script>
