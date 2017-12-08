<template>

  <!-- Set up the cart structure -->
  <div class="cart">
    <div class="cart-toggle btn-success" v-bind:class="{ hideToggle: cartHidden }" v-on:click="toggleCart">
      <img class="cart-icon" src="../../images/shopping-cart.png">
    </div>

    <div class="cart-body" v-bind:class="{ hideCart: cartHidden }">
      <br>
      <h4> Your Cart </h4>
      <ul>
      </ul>
    </div>
  </div>
</template>

<script>
import Artwork from './Artwork.vue'

export default {
  name: 'Cart',
  data () {
    return {
      cartHidden: true,
      cartItems: []
    }
  },
  props: ['cart'],
  methods: {
    // Hide and show the cart
    toggleCart() {
      if(this.cartHidden){
        this.cartHidden = false;
      } else {
        this.cartHidden = true;
      }
    }
  },
  watch: {
    // Add/Remove items in cart
    cart(){
      console.log('watching');
      this.cartItems = cart;
      console.log(this.cartItems);
      deep: true
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .cart-toggle {
    position: fixed;
    right:300px;
    top: 150px;
    height: 56px;
    width: 60px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
    -webkit-transition: all 0.5s ease-out;
    z-index: 100;
  }

  .cart-icon {
    margin: 15px;
    height: 30px;
    width: 30px;
  }

  .cart-body {
    position: fixed;
    right: 0;
    top: 100px;
    height: 500px;
    width: 300px;
    border: 2px solid green;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: white;
    -webkit-transition: all 0.5s ease-out;
    z-index: 100;
  }

  .hideToggle {
    right: 0;
    -webkit-transition: all 0.5s ease-out;

  }

  .hideCart {
    right: -300px;
    -webkit-transition: all 0.5s ease-out;

  }
</style>
