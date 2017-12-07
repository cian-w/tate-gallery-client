<template>
  <div id="art">
    <br>
    <div class="row sorting">
      <!-- Search Bar -->
      <div class="input-group col-lg-5">
       <input type="text" class="form-control" placeholder="Search artwork...">
        <span class="input-group-btn">
          <button class="btn btn-success" type="button">Go!</button>
        </span>
      </div>
      <!-- Filter By Artist -->
      <div class="dropdown">
        <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter By Artist
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"></div>
      </div>
    </div>

    <div class="row images" v-for="i in Math.ceil(artwork.length / 3)">
      <br>
      <span v-for="piece in artwork.slice((i - 1) * 3, i * 3)">
        <div id="f1_container">
          <div id="f1_card" class="shadow">
            <div class="front face">
              <img class="img" :src="piece.thumbnailUrl"/>
            </div>
            <div class="back face center">
              <br>

              <p><b>Artist: </b>{{piece.artist}}</p>
              <p><b>Title: </b>{{piece.title}}</p>
              <p>&euro;	{{piece.price}}</p>

              <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" v-on:click="addToCart(piece)">Add to Cart</button>
            </div>
          </div>
        </div>
      </span>
    </div>

    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">

          </div>
          <div class="modal-body">
            <p><b>Please Choose a Quantity</b></p>
            <input type="number" class="form-control col-lg-2 qty" value="1">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" data-dismiss="modal">Add to Order</button>
          </div>
        </div>

      </div>
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
  }

  .images {
    position: relative;
    left: 8%;
  }

  .sorting {
    position: relative;
    left: 25%;
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

  .qty {
    left: 42%;
  }

  #f1_container {
    perspective: 1000;
    margin-bottom: 30px;
    margin-left: 20px;
  }

  #f1_card {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 1.0s linear;
    -webkit-box-shadow: 0px 17px 23px -1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 17px 23px -1px rgba(0,0,0,0.75);
box-shadow: 0px 17px 23px -1px rgba(0,0,0,0.75);
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

  .dropdown {
    padding-left: 50px;
  }
</style>
