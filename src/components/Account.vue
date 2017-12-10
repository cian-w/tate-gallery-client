<template>
  <div class="account">
    <div class="account-msg">
      Welcome to your Tate account,
    </div>
    <center>
      <div class="upload" v-if="isAdmin">
        <p class="username">Admin</p>
        <br><br>
        <div>
          <div class="form-group">
            <label for="exampleInputEmail1"><b>Artwork Title</b></label>
            <input type="text" class="form-control"  aria-describedby="emailHelp" v-model="title" placeholder="The Punisher">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1"><b>Artist Name</b></label>
            <input type="text" class="form-control" v-model="artistName" placeholder="e.g. Frank Castle">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1"><b>Image FileName</b></label>
            <input type="text" class="form-control" v-model="url" placeholder="pic.png">
          </div>
          <button v-on:click="upload" class="btn btn-success">Upload</button>
        </div>
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
            <tr v-for="order in orders">
              <td>{{ order.date }}</td>
              <td>&euro;{{ order.price }}</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  name: 'Account',
  data(){
    return {
      isAdmin: false,
      orders: [],
      title: '',
      artistName: '',
      url: '',
      artwork: {}
    }
  },
  methods: {
    // Check if user is customer or admin
    checkUserType() {
      if(JSON.parse(localStorage.getItem("session")) == 'admin'){
        this.isAdmin = true;
      } else {
        this.getOrderHistory();
      }
    },

    // Get order history
    getOrderHistory() {
      fetch(`http://localhost:8081/orders`,{
        method: 'GET'
      }).then((response) => {
        return response.json();
      }).then((data) => {
        this.orders = data;
      });
    },

    // Upload new artwork
    upload() {
      var artwork = {
        title: this.title,
        artist: this.artistName,
        url: '../images/' + this.url
      }

      fetch(`http://localhost:8081/upload`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(artwork)

      });
    }
  },

  // Call user type on load.
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
