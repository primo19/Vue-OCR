<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/dashboard" class="navbar-brand">LSPU-FAA</router-link>
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
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
        </ul>
        <div class="form-inline my2 my-lg-0">
          <button type="button" class="btn btn-dark" @click="logout">Logout</button>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="card" style="width: 20rem;">
        <div class="card-header">
          <h3>
            <strong>My Rank</strong>
          </h3>
        </div>
        <div class="card-body">
          <h5>
            <strong>INSTRUCTOR</strong>
          </h5>
          <button
            type="button"
            class="btn btn-dark mt-3"
            data-toggle="modal"
            data-target="#addDocumentModal"
          >Upload Document</button>
        </div>
      </div>
    </div>

    <!-- Add Document Modal -->
    <div
      class="modal fade"
      id="addDocumentModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addDocumentModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="addDocumentModalTitle">Upload Document</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="classifyFile" enctype="multipart/form-data">
            <div class="modal-body">
              <div class="form-group">
                <label for="exampleFormControlFile1">Upload File to Classify</label>
                <input
                  type="file"
                  class="form-control-file"
                  id="fileToClassify"
                  ref="fileToClassify"
                  @change="selectFile"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-dark">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="card mx-5">
        <div class="card-header">
          <h3>
            <strong>My Documents</strong>
          </h3>
        </div>
        <div class="card-body">
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Document</th>
                <th scope="col">Status</th>
                <th scope="col">Score</th>
                <th scope="col">Date Uploaded</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Masteral Diploma</td>
                <td>Pending</td>
                <td>0</td>
                <td>08-25-2019</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Professor of the Year Certificate</td>
                <td>Approved</td>
                <td>1</td>
                <td>03-30-2017</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bachelor Diploma</td>
                <td>Approved</td>
                <td>45</td>
                <td>05-28-2015</td>
              </tr>
            </tbody>
          </table>
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
.container {
  padding-top: 5rem;
  padding-bottom: 2rem;
}
.card {
  margin: 0 auto;
  float: none;
}
.card-body {
  text-align: center;
}
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
</style>