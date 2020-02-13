<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/admindashboard" class="navbar-brand">LSPU-FAA</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarSupported"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav mr-auto nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/admindashboard">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/library">Library</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/users">Faculty Members</router-link>
          </li>
        </ul>
        <div class="form-inline my2 my-lg-0">
          <button type="button" class="btn btn-dark" @click="logout">Logout</button>
        </div>
      </div>
    </nav>

    <div class="container py-3">
      <div class="card mx-auto" style="width: 20rem">
        <div class="card-header">
          <h2>Uploaded Documents Today</h2>
        </div>
        <div class="card-body">
          <h3 class="card-title">
            <strong>6</strong>
          </h3>
          <a href="#" class="btn btn-dark">Go to Library</a>
        </div>
      </div>
    </div>

    <div class="container py-3">
      <div class="card mx-auto" style="width: 20rem">
        <div class="card-header">
          <h2>Total Documents</h2>
        </div>
        <div class="card-body">
          <h3 class="card-title">
            <strong>100</strong>
          </h3>
          <a href="#" class="btn btn-dark">Go to Library</a>
        </div>
      </div>
    </div>

    <div class="container py-3">
      <div class="card mx-auto" style="width: 20rem">
        <div class="card-header">
          <h2>Total Faculty Members</h2>
        </div>
        <div class="card-body">
          <h3 class="card-title">
            <strong>87</strong>
          </h3>
          <a href="#" class="btn btn-dark">Add Faculty</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("jwt");

      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.nav a {
  font-weight: bold;
  text-decoration: none;
}
.nav a.router-link-exact-active {
  color: white;
}

.btn {
  font-weight: bold;
}

.card {
  text-align: center;
}
</style>