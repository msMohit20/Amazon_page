import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      //   console.log(products);
      state.products = products;
      //   console.log(state.products);
    },
  },
  actions: {},
  getters: {
    products(state) {
      return state.products;
    },
  },
});
