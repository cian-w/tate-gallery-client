<template>
  <!-- Navigation Bar structure -->
  <nav class="navbar navbar-expand ">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <router-link class="navbar-brand" to="/">Tate Gallery</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/artwork">Artwork</router-link>
        </li>
        <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="/account">Account</router-link>
        </li>
        <li class="nav-item" v-else>
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
      loggedIn: false
    }
  },

  methods: {
    checkLoggedIn() {
      this.loggedIn = true;
    }
  },

  created () {
    this.$bus.$on('logged', () => {
      this.checkLoggedIn();
    })
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
