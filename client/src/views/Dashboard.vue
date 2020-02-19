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
    <div class="container row col-12">
      <div class="card" style="width: 20rem;">
        <div class="card-header">
          <h4>
            <strong>My Rank</strong>
          </h4>
        </div>
        <div class="card-body">
          <h5>
            <strong>{{userPosition}}</strong>
          </h5>
          <button
            type="button"
            class="btn btn-dark mt-3"
            data-toggle="modal"
            data-target="#addDocumentModal"
          >Upload Document</button>
        </div>
      </div>

      <div class="card" style="width: 20rem;">
        <div class="card-header">
          <h4>
            <strong>TOR</strong>
          </h4>
        </div>
        <div class="card-body">
          <button
            type="button"
            class="btn btn-dark mt-3"
            data-toggle="modal"
            data-target="#addTORModal"
          >Upload TOR</button>
        </div>
      </div>

      <div class="card" style="width: 20rem;">
        <div class="card-header">
          <h4>
            <strong>Published Book</strong>
          </h4>
        </div>
        <div class="card-body">
          <button
            type="button"
            class="btn btn-dark mt-3"
            data-toggle="modal"
            data-target="#addISBNModal"
          >Add ISBN</button>
        </div>
      </div>

      <div class="card" style="width: 20rem">
        <div class="card-header">
          <h4>
            <strong>Needed Pts to Rank Up</strong>
          </h4>
        </div>
        <div class="card-body">
          <h2>
            <strong>54</strong>
          </h2>
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
              <input type="file" ref="file" name="file" @change="selectFile($event)" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-dark">Upload & Classify</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Add TOR Modal -->
    <div
      class="modal fade"
      id="addTORModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addTORModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="addTORModalTitle">Upload Document</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="uploadTOR" enctype="multipart/form-data">
            <div class="modal-body">
              <input type="file" ref="file" name="file" @change="selectFile($event)" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-dark">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Add ISBN Modal -->
    <div
      class="modal fade"
      id="addISBNModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addISBNModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="addISBNModalTitle">Upload Document</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="addISBN">
            <div class="modal-body">
              <div class="form-group">
                <label for="isbnInput">ISBN</label>
                <input type="text" class="form-control" id="isbnInput" v-model="ISBN" required />
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
                <th scope="col">Document</th>
                <th scope="col">Status</th>
                <th scope="col">Score</th>
                <th scope="col">Date Uploaded</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="doc in documents" :key="doc._id">
                <th scope="row">{{doc.mainImageName || doc.bookIsbn}}</th>
                <td v-if="doc.status == false">Pending</td>
                <td v-else>Approved</td>
                <td>{{doc.score}}</td>
                <td>08-25-2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      imageFile: "",
      uploaderName: "",
      docType: "",
      score: 0,
      status: false,
      userData: {},
      documents: [],
      userPosition: "",
      ISBN: ""
    };
  },

  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("jwt");

      this.$router.push("/");
    },

    selectFile(event) {
      this.imageFile = event.target.files[0];
    },

    uploadFile() {
      const uri = "http://localhost:3000/upload";

      this.$http.post(uri, {
        uploaderName: this.userData.name,
        typeOfDoc: this.docType,
        score: this.score,
        status: this.status
      });
    },

    async classifyFile() {
      const uri = "http://localhost:3000/classify";

      const formData = new FormData();
      formData.append("file", this.imageFile);

      try {
        await this.$http
          .post(uri, formData)
          .then(response => {
            this.docType = response.data.documentType;
            this.userData = JSON.parse(localStorage.getItem("user"));
            this.$http
              .post("http://localhost:3000/upload", {
                uploaderName: this.userData.name,
                typeOfDoc: this.docType,
                score: this.score,
                status: this.status,
                mainImageName: response.data.docFilename
              })
              .then(response => {
                this.documents.push(response.data.doc);

                this.$toasted.show("Document Uploaded Successfully!", {
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
              });

            this.$toasted.show(
              "The Document File Type is " + response.data.documentType,
              {
                action: {
                  text: "close",
                  onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                  }
                },
                type: "success"
              }
            );
          })
          .catch(e => {
            console.log(e);
          })
          .finally(() => {
            $("#addDocumentModal").modal("hide");
          });
      } catch (e) {
        console.log(e);
      }
    },

    uploadTOR() {
      const uri = "http://localhost:3000/upload/tor";

      const formData = new FormData();
      formData.append("file", this.imageFile);

      this.$http
        .post(uri, formData, {
          uploaderName: this.userData.name,
          score: this.score,
          status: this.status
        })
        .then(() => {
          this.getDocuments();
          this.$toasted.show("TOR Uploaded Successfully", {
            action: {
              text: "close",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
            type: "success"
          });
          $("#addTORModal").modal("hide");
        })
        .catch(e => {
          console.log(e);
        });
    },

    addISBN() {
      const uri = "http://localhost:3000/add/isbn";

      this.$http
        .post(uri, {
          uploaderName: this.userData.name,
          bookIsbn: this.ISBN,
          score: this.score
        })
        .then(() => {
          this.getDocuments();
          this.$toasted.show("Book ISBN added successfully", {
            duration: 3000,
            type: "success"
          });
          $("#addISBNModal").modal("hide");
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

    getUserData() {
      this.userData = JSON.parse(localStorage.getItem("user"));
    },

    getUserPosition() {
      if (this.userData.totalScore <= 80) {
        this.userPosition = "Instructor II";
      } else if (
        this.userData.totalScore >= 80 &&
        this.userData.totalScore <= 82
      ) {
        this.userPosition = "Instructor III";
      } else if (
        this.userData.totalScore >= 82 &&
        this.userData.totalScore <= 84
      ) {
        this.userPosition = "Assistant Professor I";
      }
    }
  },

  mounted() {
    this.getDocuments();
    this.getUserData();
    this.getUserPosition();
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