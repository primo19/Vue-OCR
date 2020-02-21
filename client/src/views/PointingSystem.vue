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
          <li class="nav-item">
            <router-link class="nav-link" to="/pointingsystem">Scoring Criteria</router-link>
          </li>
        </ul>
        <div class="form-inline my2 my-lg-0">
          <button type="button" class="btn btn-dark" @click="logout">Logout</button>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="card mx-auto mt-3">
        <div class="card-header">
          <h4>
            <strong>Scoring Per Category</strong>
          </h4>
        </div>
        <div class="card-body">
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Score</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(score, index) in scores" :key="score._id">
                <th scope="row">{{score.category}}</th>
                <td>{{score.score}}</td>
                <td>
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#editCategoryModal"
                    class="btn btn-info mr-1"
                    @click="editCategory(index, score._id)"
                  >Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="editCategoryModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editCategoryModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editCategoryModalTitle">Edit Score of {{singleCat.category}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="updateCategory">
            <div class="modal-body">
              <div class="form-group">
                <label for="score">Score:</label>
                <input type="text" class="form-control" id="score" name="score" v-model="score" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- <form @submit.prevent="addCategory">
      <label for="category">Category</label>
      <input type="text" id="category" v-model="category" />
      <label for="score">Score</label>
      <input type="number" id="score" v-model="score" />
      <button type="submit">Submit</button>
    </form>-->
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      category: "",
      score: "",
      scores: [],
      singleCat: {
        index: "",
        id: "",
        category: "",
        score: ""
      }
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("jwt");

      this.$router.push("/");
    },
    addCategory() {
      let uri = "http://localhost:3000/score/add";

      this.$http.post(uri, {
        category: this.category,
        score: this.score
      });
    },

    editCategory(index, catID) {
      let uri = "http://localhost:3000/score";

      this.$http
        .post(uri, { _id: catID })
        .then(res => {
          (this.singleCat.index = index),
            (this.singleCat.id = res.data.score._id),
            (this.singleCat.category = res.data.score.category),
            (this.singleCat.score = res.data.score.score);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateCategory() {
      let uri = "http://localhost:3000/score/update/" + this.singleCat.id;

      this.$http
        .put(uri, {
          score: this.score
        })
        .then(() => {
          this.getScores();
          this.$toasted.show("Score Updated Successfully!", {
            action: {
              text: "close",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
            type: "success"
          });
        })
        .catch(e => {
          console.log(e);
        })
        .finally(() => {
          $("#editCategoryModal").modal("hide");
        });
    },

    getScores() {
      let uri = "http://localhost:3000/scores";

      this.$http
        .get(uri)
        .then(res => {
          this.scores = res.data.scores;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.getScores();
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