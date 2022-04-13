<template>
  <div id="app">
    <headNav></headNav>
    <router-view></router-view>
    <footTit></footTit>
  </div>
</template>
<script>
import headNav from "./components/headNav.vue";
import footTit from "./components/footTit.vue";
export default {
  data() {
    return {};
  },
  components: { headNav, footTit },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
