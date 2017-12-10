<template>
  <div class="account">
    <div class="account-msg">
      Welcome to your Tate account,
    </div>
    <center>
      <div class="upload" v-if="isAdmin">
        <p class="username">Admin</p>
        <br><br>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1"><b>Artwork Title</b></label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="The Punisher">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1"><b>Artist Name</b></label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="e.g. Frank Castle">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1"><b>Image FileName</b></label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="pic.png">
          </div>
          <button type="submit" class="btn btn-success">Upload</button>
        </form>
      </div>
      <div class="upload" v-else>
        <p class="username">User</p>
        <br>
        Here's your order history.
        <br><br>
        <table class="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Price</th>
              <th>Shipped</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>

          </tbody>
        </table>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data(){
    return {
      isAdmin: false
    }
  },
  methods: {
    checkUserType() {
      if(JSON.parse(localStorage.getItem("session")) == 'admin'){
        this.isAdmin = true;
      }
    }
  },
  mounted(){
    this.checkUserType();
  }
}
</script>

<style>
  .account-msg{
    position: relative;
    top: 100px;
    font-size: 24px;
  }

  .username {
    font-size: 24px;
  }

  .upload {
    position: relative;
    top: 120px;
    width: 300px;
  }
</style>
