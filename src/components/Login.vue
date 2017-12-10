<template>
  <div class="wrapper">
  <!-- Login Structure -->
  <div class="form-signin" v-bind:class="{ hideLogin: hideLogin }"><br>
    <h2 class="form-signin-heading">Tate Gallery Login</h2><br><br>
    <input type="text" class="form-control" name="username" placeholder="Email Address" v-model="username" required="" autofocus="" /><br>
    <input type="password" class="form-control" name="password" placeholder="Password" v-model="password" required=""/>
    <label class="checkbox">
      <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
    </label>
    <button class="btn btn-lg btn-success btn-block"  v-on:click="login">Login</button>
  </div>
  <div class="view-account" v-bind:class="{ showMessage: hideLogin }">
    Successfully logged in. <span><router-link to="/account">View Account</router-link></span>
  </div>
</div>
</template>

<script>

export default {
  name: 'Login',
  data(){
    return {
      hideLogin: false,
      username: '',
      password: '',
      userInfo: ['admin', 'user', 'pass']
    }
  },
  methods: {
    // Log user in
    login(){
      if(this.userInfo.includes(this.username) && this.userInfo.includes(this.password)){
        localStorage.setItem("session", JSON.stringify(this.username));
        this.$bus.$emit('logged', 'User logged');
        this.hideLogin = true;
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hideLogin {
    display: none;
  }

  .view-account {
    position: relative;
    top: 100px;
    display: none;
    max-width: 380px;
    padding: 15px 35px 45px;
    margin: 0 auto;
    height: 100px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,0.1);
    -webkit-box-shadow: 0px 17px 23px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 17px 23px -1px rgba(0,0,0,0.75);
    box-shadow: 0px 17px 23px -1px rgba(0,0,0,0.75);
    font-size: 25px;
  }

  .showMessage {
    display: block;
  }

  .btn {
    cursor: pointer;
  }

  .wrapper {
  	margin-top: 80px;
    margin-bottom: 80px;
  }

  .form-signin {
    max-width: 380px;
    padding: 15px 35px 45px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,0.1);
    -webkit-box-shadow: 0px 17px 23px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 17px 23px -1px rgba(0,0,0,0.75);
    box-shadow: 0px 17px 23px -1px rgba(0,0,0,0.75);

    .form-signin-heading,
  	.checkbox {
  	  margin-bottom: 30px;
  	}

  	.checkbox {
  	  font-weight: normal;
  	}

  	.form-control {
  	  position: relative;
  	  font-size: 16px;
  	  height: auto;
  	  padding: 10px;
  		@include box-sizing(border-box);

  		&:focus {
  		  z-index: 2;
  		}
  	}

  	input[type="text"] {
  	  margin-bottom: -1px;
  	  border-bottom-left-radius: 0;
  	  border-bottom-right-radius: 0;
  	}

  	input[type="password"] {
  	  margin-bottom: 20px;
  	  border-top-left-radius: 0;
  	  border-top-right-radius: 0;
  	}
  }

</style>
