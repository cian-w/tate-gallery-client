<template>

  <!-- Set up the cart structure -->
  <div class="cart">
    <div class="cart-toggle btn-success" v-bind:class="{ hideToggle: cartHidden }" v-on:click="toggleCart">
      <img class="cart-icon" src="../../images/shopping-cart.png">
    </div>

    <div class="cart-body" v-bind:class="{ hideCart: cartHidden }">
      <br>
      <h4> Your Cart </h4>
      <br><br>
      <ul>
        <li class="cart-item" v-for="item in cartItems">
          <span class="item-thumbnail"><img :src="item.thumbnailUrl"/></span>
          <span class="item-title">{{ item.title }}</span>
          <span class="item-price"> &euro;{{ item.price }}</span>
          <span class="remove" v-on:click="removeQty(item)">-</span>
          <span class="qty">{{ item.qty }}</span>
          <span class="add" v-on:click="addQty(item)">+</span>
        </li>
      </ul>
      <span class="total-price">Total &euro;{{total}}</span>
      <button class="btn btn-success">Checkout</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Cart',
  data () {
    return {
      cartHidden: true,
      cartItems: [],
      total: 0
    }
  },
  methods: {
    // Hide and show the cart
    toggleCart() {
      if(this.cartHidden){
        this.cartHidden = false;
        this.cartItems = JSON.parse(localStorage.getItem("cart"));
        this.cartItems.shift();
        this.calculateTotal();
      } else {
        this.cartHidden = true;
      }
    },

    // Increase item quantity
    addQty(itemToAdd){
      for (var item of this.cartItems) {
        if(item.id = itemToAdd.id){
          item.qty = item.qty + 1;
          this.calculateTotal();
        }
      }
    },

    // Decrease item quantity
    removeQty(itemToRemove){
      for (var item of this.cartItems) {
        if(item.id = itemToRemove.id){
          if(item.qty != 0){
            item.qty = item.qty - 1;
            this.calculateTotal();
          }
        }
      }
    },

    // Calculate total
    calculateTotal(){
      this.total = 0;
      for (var item of this.cartItems) {
        this.total = this.total + (parseInt(item.price) * item.qty);
      }
    },

    // Store order in DB
    checkout(){
      localStorage.clear();
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .total-price {
    position: absolute;
    top: 380px;
    left: 150px;
    font-size: 23px;
  }

  .btn {
    position: absolute;
    top: 430px;
    left: 155px;
  }

  .add, .remove {
    color: green;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
    position: relative;
    top: -8px;
    left: 110px;
  }

  .qty {
    position: relative;
    top: -8px;
    left: 110px;
    font-weight: bold;
  }
  .item-price {
    position: relative;
    left: 60px;
    top: -8px;
  }

  .item-title {
    position: absolute;
    left: 60px;
  }
  .cart-item {
    margin: 25px;
  }

  .item-thumbnail {
    position: absolute;
    left: 20px;
  }
  ul {
    list-style-type: none;
  }

  img {
    height: 30px;
    width: 30px;
  }

  .cart-toggle {
    position: fixed;
    right:400px;
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
    width: 400px;
    border: 2px solid green;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: white;
    -webkit-transition: all 0.5s ease-out;
    z-index: 100;
    font-weight: bold;
  }

  .hideToggle {
    right: 0;
    -webkit-transition: all 0.5s ease-out;

  }

  .hideCart {
    right: -400px;
    -webkit-transition: all 0.5s ease-out;

  }
</style>
