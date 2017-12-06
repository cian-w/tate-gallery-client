<template>
  <nav class="navbar navbar-expand ">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand" href="#">Tate Gallery</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/artwork">Artwork</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    background-color: black;
    width: 80%;
    left: 10%;
    border-radius: 5px;
  }

  a {
    color: white;
  }
</style>
