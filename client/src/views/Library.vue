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
        <!-- Table Of Documents -->
        <div class="card mx-5 mb-5">
          <div class="card-header">
            <div class="row">
              <div class="col-md-11">
                <h3>
                  <strong>Documents</strong>
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
              <div class="col-md-2">
                <select
                  class="custom-select my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                  v-model="collegeSelect"
                >
                  <option selected value="COF">COF</option>
                  <option value="CAS">CAS</option>
                  <option value="CCS">CCS</option>
                  <option value="CTE">CTE</option>
                  <option value="CHMT">CHMT</option>
                  <option value="CFND">CFND</option>
                  <option value="CBMA">CBMA</option>
                  <option value="CCJE">CCJE</option>
                </select>
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
                  <tr
                    v-for="(doc, index) in documents"
                    v-show="doc.college == collegeSelect"
                    :key="doc._id"
                  >
                    <th scope="row">{{doc.createdAt}}</th>
                    <td>{{doc.mainImageName}}</td>
                    <td>{{doc.uploaderName}}</td>
                    <td>
                      <button
                        class="btn btn-dark mr-1"
                        data-toggle="modal"
                        data-target="#showDocumentModal"
                        @click="getDocument(index, doc._id)"
                      >Show</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="showDocumentModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="showDocumentModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="showDocumentModalTitle"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form action>
            <div class="modal-body">
              <img src="../assets/logo.png" alt height="400" width="400" />
              <div class="form-group">
                <label for="score">Score</label>
                <input type="number" class="form-control" id="score" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Reject</button>
              <button type="submit" class="btn btn-primary">Accept</button>
            </div>
          </form>
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
      displayAttr: false,
      collegeSelect: "COF",
      documents: [],
      document: {
        index: "",
        id: "",
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
    },

    getDocuments() {
      const uri = "http://localhost:3000/documents";

      this.$http
        .get(uri)
        .then(response => {
          this.documents = response.data.docs;
          console.log(this.documents);
        })
        .catch(e => {
          console.log(e);
        });
    },

    getDocument(index, docID) {
      const uri = "http://localhost:3000/document";

      this.$http
        .post(uri, {
          _id: docID
        })
        .then(res => {
          (this.document.index = index),
            (this.document.id = res.data.doc._id),
            (this.document.score = res.data.doc.score);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },

  mounted() {
    this.getDocuments();
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