<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <div class="nav">
          <router-link to="/">Login</router-link>|
          <router-link to="/register">Register</router-link>
        </div>
      </div>
      <div class="card-body">
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="name" />
          </div>
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
</template>

<script>
export default {
  props: ["nextUrl"],
  data() {
    return {
      name: "",
      employeeno: "",
      password: "",
      isAdmin: false
    };
  },
  methods: {
    register() {
      let uri = "http://localhost:3000/register";
      this.$http
        .post(uri, {
          name: this.name,
          employeeID: this.employeeno,
          password: this.password,
          isAdmin: this.isAdmin
        })
        .then(response => {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("jwt", response.data.token);

          if (localStorage.getItem("jwt") != null) {
            this.$emit("loggedIn");
            if (this.$route.params.nextUrl != null) {
              this.$router.push(this.$route.params.nextUrl);
            } else {
              this.$router.push("/");
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
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
