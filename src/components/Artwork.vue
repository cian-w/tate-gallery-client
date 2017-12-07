<template>
  <ul id="example-1">
    <li v-for="art in artwork">
      <div id="f1_container">
        <div id="f1_card" class="shadow">
          <div class="front face">
            <img class="img" :src="art.thumbnailUrl"/>
          </div>
          <div class="back face center">
            <p>{{art.artist}}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'Artwork',

  data () {
    return {
      artwork: []
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
    }
  },

  // When page first loads get some images to show.
  mounted () {
    this.getInitialImages();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
    color: white;
    text-align: center;
    background-color: #aaa;
  }

  button hover {
    cursor: pointer;
  }
</style>
