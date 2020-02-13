<template>
  <div>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <div class="nav">
            <router-link to="/">Login</router-link>
          </div>
        </div>
        <div class="card-body">
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="employeeno">Employee No.</label>
              <input type="text" class="form-control" id="employeeno" v-model="employeeno" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" v-model="password" />
            </div>
            <button type="submit" class="btn btn-color">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      employeeno: "",
      password: ""
    };
  },
  methods: {
    login() {
      let uri = "http://localhost:3000/login";
      if (this.password.length > 0) {
        this.$http
          .post(uri, {
            employeeID: this.employeeno,
            password: this.password
          })
          .then(response => {
            let isAdmin = response.data.user.isAdmin;
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("jwt", response.data.token);

            if (localStorage.getItem("jwt") != null) {
              this.$emit("loggedIn");
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                if (isAdmin == true) {
                  this.$router.push("AdminDashboard");
                } else {
                  this.$router.push("Dashboard");
                }
              }
            }
          })
          .catch(function(error) {
            console.log(error.response);
          });
      }
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 10rem;
}
.card {
  width: 30rem;
  margin: 0 auto;
  float: none;
}

.nav a {
  font-weight: bold;
  color: red;
  text-decoration: none;
}

.nav a.router-link-exact-active {
  color: black;
}

.btn-color {
  background-color: #b31217;
  color: white;
}
</style>
