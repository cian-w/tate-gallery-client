<template>
  <div id="art">
    <div class="row" v-for="i in Math.ceil(artwork.length / 3)">
      <br>
      <span v-for="piece in artwork.slice((i - 1) * 3, i * 3)">
        <div id="f1_container">
          <div id="f1_card" class="shadow">
            <div class="front face">
              <img class="img" :src="piece.thumbnailUrl"/>
            </div>
            <div class="back face center">
              <p><b>Artist: </b>{{piece.artist}}</p>
              <p><b>Title: </b>{{piece.title}}</p>
              <p>&euro;	{{piece.price}}</p>

              <button type="button" class="btn btn-success" v-on:click="addToCart(piece)">Add to Cart</button>
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Artwork',

  data () {
    return {
      artwork: [],
      cart: []
    }
  },

  methods: {
    getInitialImages() {
      fetch(`http://localhost:3000/`,{
        method: 'GET'
      }).then((response) => {
        return response.json();
      }).then((data) => {
        this.artwork = data;
      });
    },

    addToCart(piece){
      var cartItem = {
        id: piece.id,
        title: piece.title,
        price: piece.price
      }
      this.cart.push(cartItem);
    },
  },

  // When page first loads get some images to show.
  mounted () {
    this.getInitialImages();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #art {
    position: relative;
    left: 10.7%;
  }
  ul {
    list-style-type: none;
  }

  .img {
    width: 450px;
    height: 281px;
  }

  #f1_container {
    position: relative;
    margin: 10px auto;
    width: 450px;
    height: 281px;
    z-index: 1;
  }

  #f1_container {
    perspective: 1000;
  }

  #f1_card {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 1.0s linear;
  }

  #f1_container:hover #f1_card {
    transform: rotateY(180deg);
    box-shadow: -5px 5px 5px #aaa;
  }

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .face.back {
    display: block;
    transform: rotateY(180deg);
    box-sizing: border-box;
    padding: 10px;
    color: black;
    text-align: center;
    background-color: #dadee5;
    font-size: 20px;
  }

  .btn {
    cursor: pointer;
  }
</style>
