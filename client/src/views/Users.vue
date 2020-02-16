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

    <div
      class="modal fade"
      id="updateUser"
      ref="updateUser"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addUserModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="updateModalLongTitle">Update User/Admin</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form>
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
                <label for="score">Total Score</label>
                <input type="text" class="form-control" id="score" v-model="totalScore" />
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
              <button type="button" class="btn btn-dark" @click="updateUser">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- TABLES -->
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
                  <tr v-for="(cofs, index) in usersCof" :key="cofs._id">
                    <th scope="row">{{cofs.name}}</th>
                    <td>{{cofs.employeeID}}</td>
                    <td>{{cofs.totalScore}}</td>
                    <td>{{cofs.position}}</td>
                    <td>
                      <button
                        class="btn btn-dark mr-1"
                        data-toggle="modal"
                        data-target="#updateUser"
                      >Edit</button>
                      <button
                        class="btn btn-danger ml-1"
                        @click="removeUser(index, cofs.college)"
                      >Remove</button>
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
                  <tr v-for="(cass, index) in usersCas" :key="cass._id">
                    <th scope="row">{{cass.name}}</th>
                    <td>{{cass.employeeID}}</td>
                    <td>{{cass.totalScore}}</td>
                    <td>{{cass.position}}</td>
                    <td>
                      <button class="btn btn-dark mr-1">Edit</button>
                      <button
                        class="btn btn-danger ml-1"
                        @click="removeUser(index, cass.college)"
                      >Remove</button>
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
                    <th scope="col">Rank</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="csss in usersCcs" :key="csss.id">
                    <th scope="row">{{csss.name}}</th>
                    <td>{{csss.employeeID}}</td>
                    <td>{{csss.totalScore}}</td>
                    <td>{{csss.position}}</td>
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
                    <th scope="col">Rank</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="ctes in usersCte" :key="ctes.id">
                    <th scope="row">{{ctes.name}}</th>
                    <td>{{ctes.employeeID}}</td>
                    <td>{{ctes.totalScore}}</td>
                    <td>{{ctes.position}}</td>
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
            id="colOfTourism"
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
                    <th scope="col">Rank</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="chmts in usersChmt" :key="chmts.id">
                    <th scope="row">{{chmts.name}}</th>
                    <td>{{chmts.employeeID}}</td>
                    <td>{{chmts.totalScore}}</td>
                    <td>{{chmts.position}}</td>
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
                    <th scope="col">Rank</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cfnds in usersCfnd" :key="cfnds.id">
                    <th scope="row">{{cfnds.name}}</th>
                    <td>{{cfnds.employeeID}}</td>
                    <td>{{cfnds.totalScore}}</td>
                    <td>{{cfnds.position}}</td>
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
                    <th scope="col">Rank</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cbmas in usersCbma" :key="cbmas.id">
                    <th scope="row">{{cbmas.name}}</th>
                    <td>{{cbmas.employeeID}}</td>
                    <td>{{cbmas.totalScore}}</td>
                    <td>{{cbmas.position}}</td>
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
                    <th scope="col">Rank</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="ccjes in usersCcje" :key="ccjes.id">
                    <th scope="row">{{ccjes.name}}</th>
                    <td>{{ccjes.employeeID}}</td>
                    <td>{{ccjes.totalScore}}</td>
                    <td>{{ccjes.position}}</td>
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
      isAdmin: false,
      totalScore: 0,
      usersCof: [],
      usersCas: [],
      usersCcs: [],
      usersCte: [],
      usersChmt: [],
      usersCfnd: [],
      usersCbma: [],
      usersCcje: []
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
          if (this.college == "COF") {
            this.usersCof.push(response.data.user);
          } else if (this.college == "CAS") {
            this.usersCas.push(response.data.user);
          } else if (this.college == "CCS") {
            this.usersCcs.push(response.data.user);
          } else if (this.college == "CTE") {
            this.usersCte.push(response.data.user);
          } else if (this.college == "CHMT") {
            this.usersChmt.push(response.data.user);
          } else if (this.college == "CFND") {
            this.usersCfnd.push(response.data.user);
          } else if (this.college == "CBMA") {
            this.usersCbma.push(response.data.user);
          } else {
            this.usersCcje.push(response.data.user);
          }
        })
        .catch(() => {
          this.$toasted.show(
            "An error occured. Please refresh the page and try again"
          );
        });

      $("#addUser").modal("hide");
    },

    getUsersCof() {
      let uri = "http://localhost:3000/users/cof";
      this.$http.get(uri).then(response => {
        this.usersCof = response.data.users;
      });
    },

    getUsersCas() {
      let uri = "http://localhost:3000/users/cas";
      this.$http.get(uri).then(response => {
        this.usersCas = response.data.users;
      });
    },

    getUsersCcs() {
      let uri = "http://localhost:3000/users/ccs";
      this.$http.get(uri).then(response => {
        this.usersCcs = response.data.users;
      });
    },

    getUsersCte() {
      let uri = "http://localhost:3000/users/cte";
      this.$http.get(uri).then(response => {
        this.usersCte = response.data.users;
      });
    },

    getUsersChmt() {
      let uri = "http://localhost:3000/users/chmt";
      this.$http.get(uri).then(response => {
        this.usersChmt = response.data.users;
      });
    },

    getUsersCfnd() {
      let uri = "http://localhost:3000/users/cfnd";
      this.$http.get(uri).then(response => {
        this.usersCfnd = response.data.users;
      });
    },

    getUsersCbma() {
      let uri = "http://localhost:3000/users/cbma";
      this.$http.get(uri).then(response => {
        this.usersCbma = response.data.users;
      });
    },

    getUsersCcje() {
      let uri = "http://localhost:3000/users/ccje";
      this.$http.get(uri).then(response => {
        this.usersCcje = response.data.users;
      });
    },

    removeUser(index, col) {
      let uri = "http://localhost:3000/user/remove";
      this.$http
        .post(uri)
        .then(() => {
          if (col == "COF") {
            this.usersCof.splice(index, 1);
          } else if (col == "CAS") {
            this.usersCas.splice(index, 1);
          } else if (col == "CCS") {
            this.usersCcs.splice(index, 1);
          } else if (col == "CTE") {
            this.usersCte.splice(index, 1);
          } else if (col == "CHMT") {
            this.usersChmt.splice(index, 1);
          } else if (col == "CFND") {
            this.usersCfnd.splice(index, 1);
          } else if (col == "CBMA") {
            this.usersCbma.splice(index, 1);
          } else {
            this.usersCcje.splice(index, 1);
          }
          this.$toasted.show("User has been deleted!", {
            duration: 3000
          });
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateUser() {
      let uri = "http://localhost:3000/user/:id";
      this.$http
        .post(uri, {
          name: this.name,
          employeeID: this.employeeno,
          password: this.password,
          totalScore: this.totalScore,
          isAdmin: this.isAdmin
        })
        .then(() => {
          this.$toasted.show("User");
        })
        .catch(e => {
          console.log(e);
        });
    }
  },

  mounted() {
    this.getUsersCof();
    this.getUsersCas();
    this.getUsersCcs();
    this.getUsersCte();
    this.getUsersChmt();
    this.getUsersCfnd();
    this.getUsersCbma();
    this.getUsersCcje();
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