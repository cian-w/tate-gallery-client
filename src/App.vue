<template>
  <div id="app">
    <nav-bar></nav-bar>
    <cart></cart>

    <router-view/>

    <tate-footer></tate-footer>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import Cart from './components/Cart.vue'
import TateFooter from './components/Footer.vue'

export default {
  name: 'app',
  components: { NavBar, Cart, TateFooter}
}

// Clear localStorage on new session as not to have messed up cart items.
localStorage.clear();

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
