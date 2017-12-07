<template>
  <div class="wrapper">
  <form class="form-signin"><br>
    <h2 class="form-signin-heading">Tate Gallery Login</h2><br><br>
    <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" /><br>
    <input type="password" class="form-control" name="password" placeholder="Password" required=""/>
    <label class="checkbox">
      <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
    </label>
    <button class="btn btn-lg btn-success btn-block" type="submit">Login</button>
  </form>
</div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
