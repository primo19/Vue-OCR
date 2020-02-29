<template>
  <div class="wrapper">
    <!-- Sidebar  -->
    <nav id="sidebar" class="text-centered">
      <ul class="list-unstyled components">
        <div class="text-centered col font-large pb-2" style="border-bottom: 1px solid #47748b;">
          <img
            src="@/assets/lspu_logo.png"
            alt="Profile Picture"
            class="rounded-circle"
            height="120"
            width="120"
          />
          <p class="compress-header">Laguna State Polytechnic University</p>
          <p class="admin-subheader font-medium" style="padding-top: 0 !important">
            <strong>Los Baños Campus</strong>
          </p>
          <p class="admin-subheader font-medium">
            <strong>Administrator</strong>
          </p>
        </div>

        <li class="font-medium">
          <router-link to="/admindashboard">Home</router-link>
        </li>

        <li class="font-medium">
          <router-link to="/documentmanagement">Document Management</router-link>
        </li>

        <li class="font-medium">
          <a href="#">Statistics</a>
        </li>
      </ul>

      <ul class="list-unstyled CTAs font-medium">
        <li>
          <a href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
        </li>
      </ul>
    </nav>

    <!-- Page Content  -->
    <div id="content" class="py-5 container-fluid">
      <div class="row align-items-center justify-content-center pb-3">
        <img src="@/assets/lspu_logo.png" alt="LSPU LOGO" height="150" width="150" />
        <div class="text-centered">
          <h1>Laguna State Polytechnic University</h1>
          <h2 class>
            <strong>Los Baños Campus</strong>
          </h2>
        </div>
      </div>

      <div class="mx-2 col-3">
        <button
          type="button"
          class="btn btn-info btn-lg text-dark"
          data-toggle="modal"
          data-target="#addUserModal"
        >
          <strong>Add User</strong>
        </button>
        <div class="form-group my-3">
          <label for="inputDepartment">
            <h4>Department</h4>
          </label>
          <select id="inputDeparment" class="form-control" v-model="deptSelect">
            <option selected value="CCS">College of Computer Studies</option>
            <option value="COF">College of Fisheries</option>
            <option value="CAS">College of Arts and Sciences</option>
            <option value="CTE">College of Teacher Education</option>
            <option value="CHMT">College of Hospitality Management and Tourism</option>
            <option value="CFND">College of Food Nutrition and Dietetics</option>
            <option value="CBMA">College of Business Management and Accountancy</option>
            <option value="CCJE">College of Criminal Justice Education</option>
          </select>
        </div>
      </div>

      <div class="mx-2 col-12 text-center">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="large-col">Faculty Member</th>
              <th scope="col" class="medium-col">Employee Number</th>
              <th scope="col" class="medium-col">Position</th>
              <th scope="col" class="medium-col">Academic Rank</th>
              <th scope="col" class="small-col">Current Points</th>
              <th scope="col" class="medium-col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(prof, index) in users" :key="prof._id" v-show="prof.college == deptSelect">
              <td>{{prof.name}}</td>
              <td>{{prof.employeeID}}</td>
              <td>{{prof.position}}</td>
              <td>{{prof.acadRank}}</td>
              <td>{{prof.totalScore}}</td>
              <td>
                <button type="button" class="btn btn-info mx-2">View PDS</button>
                <button
                  type="button"
                  class="btn btn-success mx-2"
                  data-toggle="modal"
                  data-target="#editUserModal"
                  @click="editUser(index, prof._id)"
                >Edit</button>
                <button
                  type="button"
                  class="btn btn-danger mx-2"
                  @click="removeUser(index, prof._id)"
                >Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Add User Modal -->
      <div
        class="modal fade"
        id="addUserModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addUserModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addUserModalTitle">Add User/Admin</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="createUser">
              <div class="modal-body">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" class="form-control" id="name" v-model="name" required />
                </div>
                <div class="form-group">
                  <label for="employeeno">Employee No.</label>
                  <input
                    type="text"
                    class="form-control"
                    id="employeeno"
                    v-model="employeeno"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="acadRank">Academic Rank</label>
                  <input type="text" class="form-control" id="acadRank" v-model="acadRank" required />
                </div>
                <div class="form-group">
                  <label for="selectCollege">Department</label>
                  <select class="form-control" id="selectCollege" v-model="college" required>
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
                  <label for="position">Position</label>
                  <input type="text" class="form-control" id="position" v-model="position" required />
                </div>
                <div class="form-group">
                  <label for="totalPoints">Current Points</label>
                  <input type="text" class="form-control" id="totalPoints" v-model="totalPoints" />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="password"
                    required
                  />
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
                <button type="submit" class="btn btn-success">Add User/Admin</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End Add User Modal -->

      <!-- Edit User Modal -->
      <div
        class="modal fade"
        id="editUserModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="editUserModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editUserModalTitle">Edit User/Admin</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="updateUser">
              <div class="modal-body">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" class="form-control" id="name" v-model="user.name" required />
                </div>
                <div class="form-group">
                  <label for="employeeno">Employee No.</label>
                  <input
                    type="text"
                    class="form-control"
                    id="employeeno"
                    v-model="user.employeeno"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="acadRank">Academic Rank</label>
                  <input
                    type="text"
                    class="form-control"
                    id="acadRank"
                    v-model="user.acadRank"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="selectCollege">Department</label>
                  <select class="form-control" id="selectCollege" v-model="user.college" required>
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
                  <label for="position">Position</label>
                  <input
                    type="text"
                    class="form-control"
                    id="position"
                    v-model="user.position"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="totalPoints">Current Points</label>
                  <input
                    type="text"
                    class="form-control"
                    id="totalPoints"
                    v-model="user.totalPoints"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="user.password"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="userType">Type</label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="userType"
                      v-model="user.isAdmin"
                    />
                    <label class="form-check-label" for="userType">Administrator</label>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-success">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End Edit User Modal -->

      <!-- Logout Modal -->
      <div
        class="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="logoutModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="logoutModalTitle">Upload Profile Picture</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="uploadProfilePic">
              <div class="modal-body text-center">
                <h3>Are you sure you want to logout?</h3>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-danger" @click="logout">Logout</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End Logout Modal -->
    </div>
  </div>
</template>

<script>
import $ from "jquery";
// import Download from "downloadjs";
export default {
  data() {
    return {
      name: "",
      employeeno: "",
      acadRank: "",
      college: "",
      position: "",
      password: "",
      totalPoints: "",
      isAdmin: false,
      deptSelect: "CCS",
      users: [],
      user: {
        index: "",
        id: "",
        name: "",
        employeeno: "",
        password: "",
        college: "",
        isAdmin: "",
        totalPoints: "",
        acadRank: "",
        position: ""
      }
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("jwt");

      this.$router.push("/");
      $("#logoutModal").modal("hide");
    },
    createUser() {
      let uri = "http://localhost:3000/register";
      this.$http
        .post(uri, {
          name: this.name,
          employeeID: this.employeeno,
          password: this.password,
          isAdmin: this.isAdmin,
          college: this.college,
          acadRank: this.acadRank,
          position: this.position,
          totalScore: this.totalPoints
        })
        .then(response => {
          this.users.push(response.data.user);

          this.$toasted.show("User created successfully", {
            action: {
              text: "close",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
            type: "success"
          });
        })
        .catch(() => {
          this.$toasted.show(
            "An error occured. Please refresh the page and try again",
            {
              action: {
                text: "close",
                onClick: (e, toastObject) => {
                  toastObject.goAway(0);
                }
              },
              type: "error"
            }
          );
        });

      $("#addUser").modal("hide");
    },

    getAllUsers() {
      let uri = "http://localhost:3000/users";
      this.$http.get(uri).then(response => {
        this.users = response.data.users;
      });
    },

    removeUser(index, userID) {
      let uri = "http://localhost:3000/user/remove";
      this.$http
        .post(uri, { _id: userID })
        .then(() => {
          this.users.splice(index, 1);

          this.$toasted.show("User has been deleted!", {
            action: {
              text: "close",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
            type: "success"
          });
        })
        .catch(() => {
          this.$toasted.show("An error occured while deleting the user", {
            action: {
              text: "close",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
            type: "error"
          });
        });
    },

    updateUser() {
      let uri = "http://localhost:3000/user/update/" + this.user.id;
      //const userID = this.user.id;
      this.$http
        .put(uri, {
          name: this.user.name,
          employeeID: this.user.employeeno,
          password: this.user.password,
          isAdmin: this.user.isAdmin,
          college: this.user.college,
          acadRank: this.user.acadRank,
          position: this.user.position,
          totalScore: this.user.totalPoints
        })
        .then(() => {
          this.getAllUsers();

          this.$toasted.show("User has been Updated!", {
            action: {
              text: "close",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
            type: "success"
          });
        })
        .catch(() => {
          this.$toasted.show("Error updating user", {
            action: {
              text: "close",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
            type: "error"
          });
        });

      $("#editUserModal").modal("hide");
    },

    editUser(index, userID) {
      let uri = "http://localhost:3000/user";
      this.$http
        .post(uri, { _id: userID })
        .then(response => {
          this.user.index = index;
          this.user.id = response.data.user._id;
          this.user.name = response.data.user.name;
          this.user.employeeno = response.data.user.employeeID;
          this.user.password = response.data.user.password;
          this.user.college = response.data.user.college;
          this.user.isAdmin = response.data.user.isAdmin;
          this.user.totalPoints = response.data.user.totalScore;
          this.user.acadRank = response.data.user.acadRank;
          this.user.position = response.data.user.position;
          // console.log(this.user);
        })
        .catch(() => {
          this.$toasted.show("An error occured getting the user", {
            duration: 3000,
            type: "error"
          });
        });
      // alert(userID);
    }
  },

  mounted() {
    this.getAllUsers();
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}

#sidebar {
  min-width: 400px;
  max-width: 800px;
  min-height: 100vh;
  padding: 50px 0;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.text-centered {
  text-align: center;
}

.font-large {
  font-size: 24px;
}

.font-medium {
  font-size: 20px !important;
}

.font-small {
  font-size: 16px !important;
}

.admin-subheader {
  padding: 10px 5px 10px 5px;
  color: black !important;
}

th {
  border: 1px solid black !important;
  background-color: #7386d5;
}

td {
  border: 1px solid black !important;
  background-color: white;
}

.small-col {
  width: 3rem !important;
}

.medium-col {
  width: 5rem;
}

.large-col {
  width: 8rem;
}

.eqForm {
  border: 1px solid black;
}

.elsForm {
  border: 1px solid black;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

#sidebar {
  /* don't forget to add all the previously mentioned styles here too */
  background: #7386d5;
  color: #fff;
  transition: all 0.3s;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

li {
  color: black !important;
}

.compress-header {
  padding: 5px !important;
  margin-bottom: 2px !important;
  color: black !important;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}
#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}
ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}
</style>