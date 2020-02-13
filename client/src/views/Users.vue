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

    <div class="container-fluid my-5">
      <button
        class="btn btn-dark btn-lg mx-5"
        type="button"
        data-toggle="modal"
        data-target="#addUser"
      >
        <strong>ADD USERS</strong>
      </button>
    </div>

    <div
      class="modal fade"
      id="addUser"
      ref="addUser"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addUserModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Add User/Admin</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="createUser">
            <div class="modal-body">
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
              <div class="form-group">
                <label for="selectCollege">College</label>
                <select class="form-control" id="selectCollege" v-model="college">
                  <option selected>COF</option>
                  <option>CAS</option>
                  <option>CCS</option>
                  <option>CTE</option>
                  <option>CHMT</option>
                  <option>CFND</option>
                  <option>CBMA</option>
                  <option>CCJE</option>
                </select>
              </div>
              <div class="form-group">
                <label for="userType">Type</label>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="userType" v-model="isAdmin" />
                  <label class="form-check-label" for="userType">Administrator</label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-dark">Add</button>
            </div>
          </form>
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
                    <th scope="col">Name</th>
                    <th scope="col">Employee No.</th>
                    <th scope="col">Score</th>
                    <th scope="col">Rank</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Rosalina V. Bunal</th>
                    <td>20131456</td>
                    <td>96</td>
                    <td>Professor 6</td>
                    <td>
                      <button class="btn btn-dark mr-1">Edit</button>
                      <button class="btn btn-danger ml-1">Remove</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Daniel D. Bunal</th>
                    <td>20147839</td>
                    <td>96</td>
                    <td>Professor 5</td>
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
                    <th scope="col">Name</th>
                    <th scope="col">Employee No.</th>
                    <th scope="col">Score</th>
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
import $ from "jquery";
export default {
  props: ["nextUrl"],
  data() {
    return {
      name: "",
      employeeno: "",
      password: "",
      college: "",
      isAdmin: false
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("jwt");

      this.$router.push("/");
    },

    createUser() {
      let uri = "http://localhost:3000/register";
      this.$http
        .post(uri, {
          name: this.name,
          employeeID: this.employeeno,
          password: this.password,
          isAdmin: this.isAdmin,
          college: this.college
        })
        .then(response => {
          this.$toasted.show(
            "User " + response.data.user.name + " created successfully",
            {
              duration: 3000
            }
          );
        })
        .catch(() => {
          this.$toasted.show(
            "An error occured. Please refresh the page and try again"
          );
        });

      $("#addUser").modal("hide");
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
</style>