<template>
  <div id="app">
    <nav-bar></nav-bar>
    <cart class="cart-component"></cart>

    <router-view/>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'app',
  components: { NavBar, Cart}
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
