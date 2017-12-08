<template>
  <div id="art">
    <br>
    <div class="row sorting">
      <!-- Search Bar -->
      <div class="input-group col-lg-5">
       <input type="text" class="form-control" placeholder="Search artwork..." v-model="searchTerm" @keyup="searchArtwork">
        <span class="input-group-btn">
          <button class="btn btn-success" type="button">Go!</button>
        </span>
      </div>
      <!-- Filter By Artist -->
      <div class="dropdown">
        <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter By Artist
        </button>
        <div class="dropdown-menu names" aria-labelledby="dropdownMenuButton">
          <ul id="example-1">
            <li v-for="artist in artists" @click="filterByArtist(artist.id)">
              {{ artist.name }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Filter By Price -->
      <div class="dropdown">
        <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter By Price
        </button>
        <div class="dropdown-menu price" aria-labelledby="dropdownMenuButton">
          <ul id="example-1">
            <li @click="filterByPrice(low)">Low - High</li>
            <li @click="filterByPrice(high)">High - Low</li>
          </ul>
        </div>
      </div>
    </div>

    <br>

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

              <button type="button" class="btn btn-info btn-lg" v-on:click="addToCart(piece)">Add to Cart</button>
            </div>
          </div>
        </div>
      </span>
    </div>


  </div>
</template>

<script>
import Cart from './Cart.vue'

export default {
  name: 'Artwork',

  data () {
    return {
      artwork: [],
      cart: [],
      artists: [],
      searchTerm: '',
      artistId: 0,
      low: 'low',
      high: 'high',
      quantity: 1
    }
  },

  methods: {
    getInitialImages() {
      fetch(`http://localhost:8081/`,{
        method: 'GET'
      }).then((response) => {
        return response.json();
      }).then((data) => {
        this.artwork = data;
      });
    },

    getArtistsNames() {
      fetch(`http://localhost:8081/artists`,{
        method: 'GET'
      }).then((response) => {
        return response.json();
      }).then((data) => {
        this.artists = data;
      });
    },

    searchArtwork() {
      if(this.searchTerm != '') {
        fetch(`http://localhost:8081/search/${this.searchTerm}`,{
          method: 'GET'
        }).then((response) => {
          return response.json();
        }).then((data) => {
          this.artwork = data;
        });
      }
    },

    filterByArtist(artistId) {
      fetch(`http://localhost:8081/filterArtist/${artistId}`,{
        method: 'GET'
      }).then((response) => {
        return response.json();
      }).then((data) => {
        this.artwork = data;
      });
    },

    filterByPrice(order) {
      fetch(`http://localhost:8081/filterPrice/${order}`,{
        method: 'GET'
      }).then((response) => {
        return response.json();
      }).then((data) => {
        this.artwork = data;
      });
    },

    addToCart(piece){
      this.cart.push(piece);
    },
  },

  // When page first loads get some images to show.
  mounted () {
    this.getInitialImages();
    this.getArtistsNames();
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
    left: 18%;
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

  .names {
    height: 300px;
    cursor: pointer;
    overflow-y: scroll;
  }

  .price {
    cursor: pointer;
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
