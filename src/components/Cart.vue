<template>
  <div class="cart">
    <div class="cart-toggle btn-success">
      <img class="cart-icon" src="../../images/shopping-cart.png">
    </div>

    <div class="cart-body">
      <br>
      <h4> Your Cart </h4>
      <ul>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Cart',
  data: {
    return () {
      cartItems: []
    }
  },
  props: ['cart'],
  methods: {

  },
  watch: {
    cart(){
      this.cartItems = cart;
      console.log(this.cartItems);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cart {
    z-index: 100;
  }

  .cart-toggle {
    position: fixed;
    right:300px;
    top: 150px;
    height: 56px;
    width: 60px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
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
  }
</style>
