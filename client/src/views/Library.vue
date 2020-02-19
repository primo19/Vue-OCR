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

    <div class="container">
      <div class="card mx-auto mt-3" style="width: 50rem;">
        <div class="card-header">
          <h4>
            <strong>Search ISBN</strong>
          </h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="getISBN">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="isbn"
              required
            />
            <button class="btn btn-outline-success mt-3" type="submit">Search</button>
          </form>

          <div class="my-3 row" v-show="displayAttr">
            <span class="col-12">Title: {{book.title}}</span>
            <span class="col-12">ISBN: {{book.isbn}}</span>
            <span
              class="col-12"
              v-for="(author, index) in book.authors"
              :key="index"
            >Author: {{author}}</span>
          </div>
        </div>
      </div>
    </div>

    <div id="accordion" style="padding-bottom: 2rem">
      <div class="container-fluid my-5">
        <!-- College of Fisheries Table -->
        <div class="card mx-5 mb-5">
          <div class="card-header">
            <div class="row">
              <div class="col-md-11">
                <h3>
                  <strong>College of Fisheries</strong>
                </h3>
              </div>
              <div class="col-md-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="collapse"
                  data-target="#colOfFish"
                  aria-expanded="true"
                  aria-controls="colOfFish"
                >Expand</button>
              </div>
            </div>
          </div>
          <div
            class="collapse"
            id="colOfFish"
            aria-labelledby="collegeOfFisheries"
            data-parent="#accordion"
          >
            <div class="card-body">
              <table class="table table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Date Uploaded</th>
                    <th scope="col">Document</th>
                    <th scope="col">Uploader</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">05-20-2019</th>
                    <td>Masteral Diploma</td>
                    <td>Flora H. Salandanan</td>
                    <td>
                      <button class="btn btn-success mr-1">Accept</button>
                      <button class="btn btn-danger ml-1">Remove</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">05-25-2019</th>
                    <td>Certificate of Recognition</td>
                    <td>Ronald A. Olan</td>
                    <td>
                      <button class="btn btn-success mr-1">Accept</button>
                      <button class="btn btn-danger ml-1">Remove</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- College of Arts and Sciences -->
        <div class="card mx-5 mb-5">
          <div class="card-header">
            <div class="row">
              <div class="col-md-11">
                <h3>
                  <strong>College of Arts and Sciences</strong>
                </h3>
              </div>
              <div class="col-md-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="collapse"
                  data-target="#colOfAS"
                  aria-expanded="false"
                  aria-controls="colOfAS"
                >Expand</button>
              </div>
            </div>
          </div>
          <div
            class="collapse"
            id="colOfAS"
            aria-labelledby="collegeOfArtsSciences"
            data-parent="#accordion"
          >
            <div class="card-body">
              <table class="table table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Employee No.</th>
                    <th scope="col">Score</th>
                    <th scope="col">Rank</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Myrna O.Medrano</th>
                    <td>20163248</td>
                    <td>94</td>
                    <td>Associate Prof. 6</td>
                    <td>
                      <button class="btn btn-dark mr-1">Edit</button>
                      <button class="btn btn-danger ml-1">Remove</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Jaime A. Mulimbayan</th>
                    <td>20151272</td>
                    <td>86</td>
                    <td>Assitant Prof. 2</td>
                    <td>
                      <button class="btn btn-dark mr-1">Edit</button>
                      <button class="btn btn-danger ml-1">Remove</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- College of Computer Studies -->
        <div class="card mx-5 mb-5">
          <div class="card-header">
            <div class="row">
              <div class="col-md-11">
                <h3>
                  <strong>College of Computer Studies</strong>
                </h3>
              </div>
              <div class="col-md-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="collapse"
                  data-target="#colOfComputer"
                  aria-expanded="false"
                  aria-controls="colOfComputer"
                >Expand</button>
              </div>
            </div>
          </div>
          <div
            class="collapse"
            id="colOfComputer"
            aria-labelledby="collegeOfComputerStudies"
            data-parent="#accordion"
          >
            <div class="card-body">
              <table class="table table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Employee No.</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>

        <!-- College of Teacher Education -->
        <div class="card mx-5 mb-5">
          <div class="card-header">
            <div class="row">
              <div class="col-md-11">
                <h3>
                  <strong>College of Teacher Education</strong>
                </h3>
              </div>
              <div class="col-md-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="collapse"
                  data-target="#colOfTeacher"
                  aria-expanded="false"
                  aria-controls="colOfTeacher"
                >Expand</button>
              </div>
            </div>
          </div>
          <div
            class="collapse"
            id="colOfTeacher"
            aria-labelledby="collegeOfTeacherEducation"
            data-parent="#accordion"
          >
            <div class="card-body">
              <table class="table table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Document</th>
                    <th scope="col">Uploader</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>

        <!-- College of Hospitality Management and Tourism -->
        <div class="card mx-5 mb-5">
          <div class="card-header">
            <div class="row">
              <div class="col-md-11">
                <h3>
                  <strong>College of Hospitality Management and Tourism</strong>
                </h3>
              </div>
              <div class="col-md-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="collapse"
                  data-target="#colOfTourism"
                  aria-expanded="false"
                  aria-controls="colOfTourism"
                >Expand</button>
              </div>
            </div>
          </div>
          <div
            class="collapse"
            id="colOfTeacher"
            aria-labelledby="collegeOfHMandTourism"
            data-parent="#accordion"
          >
            <div class="card-body">
              <table class="table table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Employee No.</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>

        <!-- College of Food Nutrition and Food Diatetics -->
        <div class="card mx-5 mb-5">
          <div class="card-header">
            <div class="row">
              <div class="col-md-11">
                <h3>
                  <strong>College of Food Nutrition and Dietetics</strong>
                </h3>
              </div>
              <div class="col-md-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="collapse"
                  data-target="#colOfFD"
                  aria-expanded="false"
                  aria-controls="colOfFD"
                >Expand</button>
              </div>
            </div>
          </div>
          <div
            class="collapse"
            id="colOfFD"
            aria-labelledby="collegeOfFNAndDietetics"
            data-parent="#accordion"
          >
            <div class="card-body">
              <table class="table table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Employee No.</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>

        <!-- College of Business Management and Accountancy -->
        <div class="card mx-5 mb-5">
          <div class="card-header">
            <div class="row">
              <div class="col-md-11">
                <h3>
                  <strong>College of Business Management and Accountancy</strong>
                </h3>
              </div>
              <div class="col-md-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="collapse"
                  data-target="#colOfBusiness"
                  aria-expanded="false"
                  aria-controls="colOfBusiness"
                >Expand</button>
              </div>
            </div>
          </div>
          <div
            class="collapse"
            id="colOfBusiness"
            aria-labelledby="collegeOfBMAndAccountancy"
            data-parent="#accordion"
          >
            <div class="card-body">
              <table class="table table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Employee No.</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>

        <!-- College of Criminal Justice Education -->
        <div class="card mx-5">
          <div class="card-header">
            <div class="row">
              <div class="col-md-11">
                <h3>
                  <strong>College of Criminal Justice Education</strong>
                </h3>
              </div>
              <div class="col-md-1">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-toggle="collapse"
                  data-target="#colOfCriminal"
                  aria-expanded="false"
                  aria-controls="colOfCriminal"
                >Expand</button>
              </div>
            </div>
          </div>
          <div
            class="collapse"
            id="colOfCriminal"
            aria-labelledby="collegeOfCJEducation"
            data-parent="#accordion"
          >
            <div class="card-body">
              <table class="table table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Employee No.</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isbn: "",
      book: {
        title: "",
        authors: []
      },
      displayAttr: false
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("jwt");

      this.$router.push("/");
    },

    getISBN() {
      this.$http
        .get("https://api.altmetric.com/v1/isbn/" + this.isbn)
        .then(response => {
          (this.book.title = response.data.title),
            (this.book.isbn = response.data.isbn),
            (this.book.authors = response.data.authors_or_editors);
          this.displayAttr = true;
        })
        .then(function(json) {
          console.log(json);
        })
        .catch(function(error) {
          console.error("Error:", error);
        });
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

.card-body {
  text-align: center;
}
</style>