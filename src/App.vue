<template>
  <div id="app">
    <div id="nav">
      <header-vue></header-vue>
    </div>
    <router-view />
  </div>
</template>

<script>
import HeaderVue from "./components/Header.vue";

export default {
  components: {
    HeaderVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to top, #ffe5e5, rgb(237, 228, 255));
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
}
</style>
