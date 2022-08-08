import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    input: "",
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      //   console.log(products);
      state.products = products;
      //   console.log(state.products);
    },
    setInput(state, input) {
      state.input = input;
    },
  },
  actions: {},
  getters: {
    products(state) {
      return state.products;
    },
    input(state) {
      return state.input;
    },
  },
});
