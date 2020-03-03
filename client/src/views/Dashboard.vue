<template>
  <!-- <div> -->
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
  </div>-->

  <!-- Add Document Modal -->
  <!-- <div
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
  <div class="modal-body">-->
  <!-- <input type="file" ref="file" name="file" @change="selectFile($event)" /> -->
  <!-- <file-pond
                name="file"
                ref="pond"
                class-name="my-pond"
                label-idle="Drop files here..."
                accepted-file-types="image/jpeg, image/png, image/jpg"
                checkValidity="true"
                v-on:addfile="selectFile"
                aria-required="true"
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-dark">Upload & Classify</button>
            </div>
          </form>
        </div>
      </div>
  </div>-->

  <!-- Add TOR Modal -->
  <!-- <div
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
              <file-pond
                name="fileTOR"
                ref="pondTOR"
                class-name="my-pond"
                label-idle="Drop files here..."
                v-on:addfile="selectTor"
                aria-required="true"
  />-->
  <!-- <input type="file" ref="file" name="file" @change="selectTor($event)" /> -->
  <!-- </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-dark">Upload</button>
            </div>
          </form>
        </div>
      </div>
  </div>-->

  <!-- Add ISBN Modal -->
  <!-- <div
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
                <th scope="col">Image</th>
                <th scope="col">Status</th>
                <th scope="col">Score</th>
                <th scope="col">Date Uploaded</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="doc in documents" :key="doc._id">
                <th scope="row">{{doc.mainImageName || doc.bookIsbn}}</th>
                <td>
                  <img :src="doc.mainImage" alt width="150" height="150" />
                </td>
                <td v-if="doc.status == false">Pending</td>
                <td v-else>Approved</td>
                <td>{{doc.score}}</td>
                <td>08-25-2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>-->
  <!-- </div> -->
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
            data-toggle="modal"
            data-target="#profilePicModal"
            v-if="currentUser.profilePic == null"
          />
          <img
            v-else
            :src="currentUser.profilePic"
            alt="Profile Picture"
            class="rounded-circle"
            height="120"
            width="120"
            data-toggle="modal"
            data-target="#profilePicModal"
          />
          <p class="compress-header">{{currentUser.name}}</p>
          <p class="compress-header">{{currentUser.acadRank}}</p>
          <p class="compress-header">{{currentUser.college}}</p>
          <p class="compress-header">{{currentUser.position}}</p>
          <button
            type="button"
            class="btn btn-success text-dark font-weight-bold"
            data-toggle="modal"
            data-target="#addPDSModal"
          >Personal Data Sheet</button>
        </div>

        <li class="font-medium">
          <router-link to="/dashboard">Home</router-link>
        </li>

        <li>
          <a
            href="#submitSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle font-medium"
          >Submit Document</a>
          <ul class="collapse list-unstyled font-medium" id="submitSubmenu">
            <li>
              <a href data-toggle="modal" data-target="#eqModal">Educational Qualifications</a>
            </li>
            <li>
              <a href data-toggle="modal" data-target="#elsModal">Experience & Length of Service</a>
            </li>
            <li>
              <a
                href
                data-toggle="modal"
                data-target="#PDAHModal"
              >Professional Development, Achievement & Honors</a>
            </li>
          </ul>
        </li>

        <li class="font-medium">
          <a href data-toggle="modal" data-target="#accSetModal">Account Settings</a>
        </li>
      </ul>

      <ul class="list-unstyled CTAs font-medium">
        <li>
          <a href data-toggle="modal" data-target="#logoutModal">Logout</a>
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

      <div class="row align-items-center justify-content-center pt-3">
        <div class="card mx-3" style="width: 10rem">
          <div class="card-header text-center">Current Points</div>
          <div class="card-body text-center">{{currentUser.totalScore}}</div>
        </div>

        <button
          type="button"
          class="btn btn-lg btn-info mx-3 text-dark"
          data-toggle="modal"
          data-target="#pbModal"
        >View Points Bracket</button>

        <button
          type="button"
          class="btn btn-lg btn-info mx-3 text-dark"
          data-toggle="modal"
          data-target="#summaryModal"
        >Summary Report</button>

        <table class="table table-striped my-3 mx-3 text-center">
          <thead>
            <tr>
              <th scope="col" class="large-col">Achievements</th>
              <th scope="col" class="small-col">Initial Points</th>
              <th scope="col" class="medium-col">Date Submitted</th>
              <th scope="col" class="medium-col">Status</th>
              <th scope="col" class="large-col">Note</th>
              <th scope="col" class="small-col">Final Points</th>
              <th scope="col" class="small-col">View Document</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(docu, index) in documents"
              :key="docu._id"
              v-show="docu.uploader._id == currentUser._id"
            >
              <td>{{docu.mainDocName}}</td>
              <td>{{getScore(docu.initialScore)}}</td>
              <td>{{docu.createdAt | moment("LL")}}</td>
              <td>{{docu.status}}</td>
              <td>{{docu.note}}</td>
              <td>{{getScore(docu.finalScore)}}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-info text-dark"
                  data-toggle="modal"
                  data-target="#docuModal"
                  @click="viewDocument(index, docu._id)"
                >View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- View Document Modal -->
      <div
        class="modal fade"
        id="docuModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="docuModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="docuModalTitle">View Document</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div class="modal-body text-center">
                <img :src="document.docImage" alt="Document Image" height="520" width="760" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button
                  type="button"
                  class="btn btn-info"
                  v-show="document.status == 'Rejected'"
                  data-toggle="modal"
                  data-target="#reuploadModal"
                >Re-Upload</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End View Document Modal -->

      <!-- Static Points Bracket Modal -->
      <div
        class="modal fade"
        id="pbModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="pbModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="pbModalTitle">Points Bracket</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img src="@/assets/points.png" alt="Scoring Criteria" width="765px" height="900px" />
            </div>
          </div>
        </div>
      </div>
      <!-- End PB Modal -->

      <!-- Summary Report Modal -->
      <div
        class="modal fade"
        id="summaryModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="summaryModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="summaryModalModalTitle">Summary Report</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-6">
                  <div class="col">
                    <h4>{{currentUser.name}}</h4>
                  </div>
                  <div class="col my-3">
                    <h4>{{currentUser.acadRank}}</h4>
                  </div>
                  <div class="col my-3">
                    <h4>{{currentUser.college}}</h4>
                  </div>
                  <div class="col my-3">
                    <h4>{{currentUser.position}}</h4>
                  </div>
                </div>

                <div class="col-6">
                  <div class="col text-center">
                    <h4>Current Points</h4>
                  </div>
                  <div class="col text-center">
                    <h4>{{currentUser.totalScore}}</h4>
                  </div>
                </div>
              </div>

              <table class="table table-striped text-center">
                <thead>
                  <tr>
                    <th scope="col" class="large-col">Achievements</th>
                    <th scope="col" class="small-col">Initial Points</th>
                    <th scope="col" class="medium-col">Date Submitted</th>
                    <th scope="col" class="medium-col">Status</th>
                    <th scope="col" class="large-col">Note</th>
                    <th scope="col" class="small-col">Final Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="docu in documents"
                    :key="docu._id"
                    v-show="docu.uploader._id == currentUser._id"
                  >
                    <td>{{docu.mainDocName}}</td>
                    <td>{{getScore(docu.initialScore)}}</td>
                    <td>{{docu.createdAt | moment("LL")}}</td>
                    <td>{{docu.status}}</td>
                    <td>{{docu.note}}</td>
                    <td>{{getScore(docu.finalScore)}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- End Summary Report Modal -->

      <!-- Educational Qualification Modal -->
      <div
        class="modal fade"
        id="eqModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="eqModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="eqModalTitle">Educational Qualification</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="uploadEQ">
              <div class="modal-body">
                <file-pond
                  name="file"
                  ref="pondAD"
                  class-name="my-pond"
                  label-idle="Drop Image File Here..."
                  checkValidity="true"
                  v-on:addfile="selectADFile"
                  :files="adFileClear"
                  aria-required="true"
                />

                <div class="eqForm p-4">
                  <div
                    class="row align-items-center justify-content-center p-1"
                    style="border-bottom: 1px solid black;"
                  >
                    <div class="form-check mx-5">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="adRadios"
                        id="adRadio1"
                        value="TOR"
                        v-model="eqFormType"
                        checked
                      />
                      <label class="form-check-label" for="adRadio1">
                        <h4>Transcript of Records</h4>
                      </label>
                    </div>

                    <div class="form-check mx-5">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="adRadios"
                        id="adRadio2"
                        value="ACE"
                        v-model="eqFormType"
                      />
                      <label class="form-check-label" for="adRadio2">
                        <h4>Additional Credits Earned</h4>
                      </label>
                    </div>
                  </div>

                  <!-- Start TOR Form -->
                  <div
                    class="row align-items-center justify-content-center p-2"
                    v-show="eqFormType == 'TOR'"
                  >
                    <div class="col-6">
                      <h3 class="text-center">Academic Degree</h3>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="graduateCheck"
                          v-model="TOR.gradCheck"
                        />
                        <label class="form-check-label" for="graduateCheck">Graduate</label>
                      </div>
                      <div class="form-group mt-3">
                        <select id="inputDegree" class="form-control" v-model="TOR.degree">
                          <option selected value="bachelor">Bachelor's Degree</option>
                          <option value="master">Master's Degree</option>
                          <option value="doctor">Doctoral Degree</option>
                          <option value="llbormd">LLB or MD</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-6" v-show="TOR.gradCheck == false">
                      <h3 class="text-center">Enter Units Earned</h3>
                      <div class="form-group mt-3">
                        <input
                          type="number"
                          class="form-control"
                          id="unitsEarned"
                          v-model="TOR.units"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- End TOR Form -->

                  <!-- Start ACE Form -->
                  <div
                    class="align-items-center justify-content-center p-2"
                    v-show="eqFormType == 'ACE'"
                  >
                    <h3 class="text-center">Academic Degree</h3>
                    <div class="form-group mt-3">
                      <select id="inputDegree" class="form-control" v-model="ACE.degree">
                        <option selected value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                      </select>
                    </div>
                  </div>
                  <!-- End ACE Form -->
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-info">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End EQ Modal -->

      <!-- Experience & Length of Service Modal -->
      <div
        class="modal fade"
        id="elsModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="elsModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="elsModalTitle">Service Record</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="uploadELS">
              <div class="modal-body">
                <file-pond
                  name="file"
                  ref="pondSR"
                  class-name="my-pond"
                  label-idle="Drop Image File Here..."
                  accepted-file-types="image/jpeg, image/png, image/jpg"
                  checkValidity="true"
                  v-on:addfile="selectSRFile"
                  :files="srFileClear"
                  aria-required="true"
                />

                <div class="elsForm p-4">
                  <div
                    class="align-items-center justify-content-center p-1"
                    style="border-bottom: 1px solid black;"
                  >
                    <h3>
                      <strong>Choose Service Category</strong>
                    </h3>
                    <div class="form-group">
                      <select id="inputServiceCat" class="form-control" v-model="serviceCat">
                        <option selected value="FTAS">Full-Time Academic Service</option>
                        <option value="MOD">Memorandum of Designation</option>
                        <option value="FPTE">Full-time Professional & Technical Experience</option>
                        <option value="EPPI">Experience in the Public & Private Institution</option>
                      </select>
                    </div>
                  </div>

                  <!-- Start FTAS Form -->
                  <div
                    class="row align-items-center justify-content-center"
                    v-show="serviceCat == 'FTAS'"
                  >
                    <div class="col-8">
                      <div class="form-group mt-3">
                        <h5>
                          <strong>Choose Service Type</strong>
                        </h5>
                        <select
                          id="inputServiceType"
                          class="form-control"
                          v-model="FTAS.serviceType"
                        >
                          <option
                            selected
                            value="state"
                          >Academic Service in a State Institution of Higher Learning</option>
                          <option
                            value="non-state"
                          >Academic Service in an Institution of Higher Learning</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-4">
                      <div class="form-group mt-3">
                        <h5>
                          <strong>Number of Years</strong>
                        </h5>
                        <input type="number" id="yrs" class="form-control" v-model="FTAS.years" />
                      </div>
                    </div>
                  </div>
                  <!-- End FTAS Form -->

                  <!-- Start MOD Form -->
                  <div
                    class="row align-items-center justify-content-center"
                    v-show="serviceCat == 'MOD'"
                  >
                    <div class="col-8">
                      <div class="form-group mt-3">
                        <h5>
                          <strong>Choose Service Type</strong>
                        </h5>
                        <select id="inputServiceType" class="form-control" v-model="MOD.position">
                          <option selected value="pres">President</option>
                          <option value="vicepres">Vice-President</option>
                          <option value="dean">Dean/Director/School Superintendent</option>
                          <option
                            value="head"
                          >Principal/Supervisor/Head of Unit or Department Chairman</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-4">
                      <div class="form-group mt-3">
                        <h5>
                          <strong>Number of Years</strong>
                        </h5>
                        <input type="number" id="yrs" class="form-control" v-model="MOD.years" />
                      </div>
                    </div>
                  </div>
                  <!-- End MOD Form -->

                  <!-- Start FPTE Form -->
                  <div
                    class="row align-items-center justify-content-center"
                    v-show="serviceCat == 'FPTE'"
                  >
                    <div class="col-8">
                      <div class="form-group mt-3">
                        <h5>
                          <strong>Choose Service Type</strong>
                        </h5>
                        <select id="inputServiceType" class="form-control" v-model="FPTE.position">
                          <option
                            selected
                            value="manager"
                          >Manager/Entrepreneur/Consultant Vice-President</option>
                          <option value="supervisor">Supervisor/Head of Unit</option>
                          <option value="ranknfile">Rank and File</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-4">
                      <div class="form-group mt-3">
                        <h5>
                          <strong>Number of Years</strong>
                        </h5>
                        <input type="number" id="yrs" class="form-control" v-model="FPTE.years" />
                      </div>
                    </div>
                  </div>
                  <!-- End FPTE Form -->

                  <!-- Start EPPI Form -->
                  <div
                    class="row align-items-center justify-content-center"
                    v-show="serviceCat == 'EPPI'"
                  >
                    <div class="col-8">
                      <div class="form-group mt-3">
                        <h5>
                          <strong>Choose Service Type</strong>
                        </h5>
                        <select id="inputServiceType" class="form-control" v-model="EPPI.position">
                          <option selected value="coop">Cooperating Teacher</option>
                          <option value="basic">Basic Education Teacher</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-4">
                      <div class="form-group mt-3">
                        <h5>
                          <strong>Number of Years</strong>
                        </h5>
                        <input type="number" id="yrs" class="form-control" v-model="EPPI.years" />
                      </div>
                    </div>
                  </div>
                  <!-- End EPPI Form -->
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-info">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End ELS Modal -->

      <!-- Professional Development, Achievement and Honors -->
      <div
        class="modal fade"
        id="PDAHModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="PDAHModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                id="PDAHModalTitle"
              >Professional Develoment, Achievement and Honors</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="uploadPDAH">
              <div class="modal-body">
                <file-pond
                  name="file"
                  ref="pondPDAH"
                  class-name="my-pond"
                  label-idle="Drop Image File Here..."
                  accepted-file-types="image/jpeg, image/png, image/jpg"
                  checkValidity="true"
                  v-on:addfile="selectPDAHFile"
                  :files="pdahFileClear"
                  aria-required="true"
                />

                <div class="elsForm px-4 py-2">
                  <div class="align-items-center justify-content-center p-1">
                    <h3>
                      <strong>Choose Service Field</strong>
                    </h3>
                    <div class="form-group">
                      <select id="inputServiceField" class="form-control" v-model="serviceFld">
                        <option
                          selected
                          value="innov"
                        >Innovations, Patented Inventions, Publications and other Creative Works</option>
                        <option
                          value="expert"
                        >Expert Services, Training and Active Participation in Professional/Technical Activities</option>
                        <option value="expRender">Expert Service Rendered</option>
                        <option
                          value="membership"
                        >Membership in professional organizations/ honor societies and honors received</option>
                        <option value="scholarship">Scholarship/ Fellowship</option>
                        <option
                          value="awards"
                        >Awards of distinction received in recognition of achievement in relevant areas of specialization/profession and/or assignment of faculty concerned</option>
                        <option value="outreach">Community Outreach</option>
                        <option value="exams">Professional Examinations</option>
                      </select>
                    </div>
                  </div>

                  <!-- Start IPPC Form -->
                  <div
                    class="row align-items-center justify-content-center"
                    style="border: 1px solid black"
                    v-show="serviceFld == 'innov'"
                  >
                    <div class="col-4" v-show="IPPC.checkISBN == false">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="ippcRadio"
                          id="inventRadio"
                          value="invention"
                          v-model="IPPC.srvType"
                          checked
                        />
                        <label class="form-check-label" for="inventRadio">
                          Innovation, Patented Invention of Inventors and
                          Creative Work as Well as Discovery of an Educational,
                          Technical, Scientific and/or Cultural Value
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="ippcRadio"
                          id="monoRadio"
                          value="monograph"
                          v-model="IPPC.srvType"
                        />
                        <label class="form-check-label" for="monoRadio">
                          Monograph, Educational, and/or
                          Technical Article Published in a
                          Technical/ Scientific/Professional Journal
                        </label>
                      </div>
                      <img :src="pdahImage" alt id="pdahImage" style="display: none" />
                    </div>

                    <div class="col-4 text-center" v-show="IPPC.checkISBN == false">
                      <div
                        class="form-group"
                        v-show="IPPC.checkISBN == false && IPPC.srvType == 'invention'"
                      >
                        <label for="invAuthors">No. of Authors</label>
                        <input
                          type="text"
                          class="form-control"
                          id="invAuthors"
                          v-model="IPPC.invAuthors"
                        />
                      </div>
                      <div
                        class="row"
                        v-show="IPPC.checkISBN == false && IPPC.srvType == 'monograph'"
                      >
                        <div class="form-group col-6">
                          <label for="monoAuthors">No. of Authors</label>
                          <input
                            type="text"
                            class="form-control"
                            id="monoAuthors"
                            v-model="IPPC.monoAuthors"
                          />
                        </div>

                        <div class="form-group col-6">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="monoIntRadio"
                              value="monoInt"
                              v-model="IPPC.monoType"
                              checked
                            />
                            <label class="form-check-label" for="monoIntRadio">International</label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="monoNatRadio"
                              value="monoNat"
                              v-model="IPPC.monoType"
                            />
                            <label class="form-check-label" for="monoNatRadio">National</label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="monoLocRadio"
                              value="monoLoc"
                              v-model="IPPC.monoType"
                            />
                            <label class="form-check-label" for="monoLocRadio">Local</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-4 text-center">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value
                          id="checkISBN"
                          v-model="IPPC.checkISBN"
                        />
                        <label class="form-check-label" for="checkISBN">Check ISBN/ISSN</label>
                      </div>
                      <div v-show="IPPC.checkISBN == true">
                        <button
                          type="button"
                          class="btn btn-info mx-2 mt-2 col-12"
                          data-toggle="modal"
                          data-target="#isbnModal"
                          @click="recognizeISBN"
                        >ISBN</button>
                        <button
                          type="button"
                          class="btn btn-info mx-2 my-2 col-12"
                          data-toggle="modal"
                          data-target="#issnModal"
                          @click="recognizeISSN"
                        >ISSN</button>
                      </div>
                    </div>
                  </div>
                  <!-- End IPPC Form -->

                  <!-- Start Expert Services Form -->
                  <div
                    class="row align-items-center justify-content-center"
                    style="border: 1px solid black"
                    v-show="serviceFld == 'expert'"
                  >
                    <div class="col-6">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="expertRadios"
                          id="cotRadio"
                          value="cot"
                          checked
                          v-model="ESTP.expt"
                        />
                        <label class="form-check-label" for="cotRadio">Certificate of Training</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="expertRadios"
                          id="semRadio"
                          value="sem"
                          v-model="ESTP.expt"
                        />
                        <label
                          class="form-check-label"
                          for="semRadio"
                        >Participation in Conferences, Seminars, Workshops</label>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="locRadios"
                          id="intRadio"
                          value="int"
                          checked
                          v-model="ESTP.exptType"
                        />
                        <label class="form-check-label" for="intRadio">International</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="locRadios"
                          id="natRadio"
                          value="nat"
                          v-model="ESTP.exptType"
                        />
                        <label class="form-check-label" for="natRadio">National</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="locRadios"
                          id="localRadio"
                          value="local"
                          v-model="ESTP.exptType"
                        />
                        <label class="form-check-label" for="localRadio">Local</label>
                      </div>
                    </div>
                  </div>
                  <!-- End Expert Services Form -->

                  <!-- Start ESR Form -->
                  <div
                    class="row align-items-center justify-content-center"
                    style="border: 1px solid black"
                    v-show="serviceFld == 'expRender'"
                  >
                    <div class="col-12">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="expRenderRadios"
                          id="consRadio"
                          value="consultant"
                          v-model="ESR.esrType"
                          checked
                        />
                        <label class="form-check-label" for="consultantRadio">
                          Short-term consultant / expert in an activity of an educational, technological,
                          professional / scientific or cultural nature
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="expRenderRadios"
                          id="trainorRadio"
                          value="trainor"
                          v-model="ESR.esrType"
                        />
                        <label class="form-check-label" for="trainorRadio">
                          Trainor, coordinator, lecturer, resource person or guest speaker in
                          conferences, workshops, and / or training courses for professionals
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="expRenderRadios"
                          id="adviserRadio"
                          value="adviser"
                          v-model="ESR.esrType"
                        />
                        <label
                          class="form-check-label"
                          for="adviserRadio"
                        >Adviser in doctoral dissertation, masteral thesis and undergraduate thesis</label>
                      </div>
                    </div>
                  </div>
                  <!-- End ESR Form -->

                  <!-- Start Membership Form -->
                  <div
                    class="row align-items-center justify-content-center"
                    style="border: 1px solid black"
                    v-show="serviceFld == 'membership'"
                  >
                    <div class="col-12">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="membershipRadios"
                          id="currentRadio"
                          value="current"
                          checked
                          v-model="MPH.mphType"
                        />
                        <label
                          class="form-check-label"
                          for="currentRadio"
                        >For current membership in relevant professional organization</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="membershipRadios"
                          id="honorRadio"
                          value="honor"
                          v-model="MPH.mphType"
                        />
                        <label
                          class="form-check-label"
                          for="honorRadio"
                        >Academic Honors Earned for undergraduate academic honors earned</label>
                      </div>
                    </div>
                  </div>
                  <!-- End Membership Form -->

                  <!-- Start Scholarship Form -->
                  <div
                    class="row align-items-center justify-content-center"
                    style="border: 1px solid black"
                    v-show="serviceFld == 'scholarship'"
                  >
                    <div class="col-12 text-center">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="scholarshipRadios"
                          id="intCompe"
                          value="intCompe"
                          v-model="SCF.scfType"
                          checked
                        />
                        <label class="form-check-label" for="intCompe">International Competitive</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="scholarshipRadios"
                          id="intNonCompe"
                          value="intNonCompe"
                          v-model="SCF.scfType"
                        />
                        <label
                          class="form-check-label"
                          for="intNonCompe"
                        >International Non-Competitive</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="scholarshipRadios"
                          id="natCompe"
                          value="natCompe"
                          v-model="SCF.scfType"
                        />
                        <label
                          class="form-check-label"
                          for="natCompe"
                        >National / Regional Competitive</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="scholarshipRadios"
                          id="natNonCompe"
                          value="natNonCompe"
                          v-model="SCF.scfType"
                        />
                        <label
                          class="form-check-label"
                          for="natNonCompe"
                        >National / Regional Non-Competitive</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="scholarshipRadios"
                          id="locBoth"
                          value="locBoth"
                          v-model="SCF.scfType"
                        />
                        <label
                          class="form-check-label"
                          for="locBoth"
                        >Local, competitive or non-competitive</label>
                      </div>
                    </div>
                  </div>
                  <!-- End Scholarship Form -->

                  <!-- Start Awards Form -->
                  <div
                    class="row align-items-center justify-content-center"
                    style="border: 1px solid black"
                    v-show="serviceFld == 'awards'"
                  >
                    <div class="col-12 text-center">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="awardRadios"
                          id="intAwardRadio"
                          value="intAward"
                          v-model="AWRD.awrdType"
                          checked
                        />
                        <label class="form-check-label" for="intAwardRadio">International</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="awardRadios"
                          id="natAwardRadio"
                          value="natAward"
                          v-model="AWRD.awrdType"
                        />
                        <label class="form-check-label" for="natAwardRadio">National / Regional</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="awardRadios"
                          id="locAwardRadio"
                          value="locAward"
                          v-model="AWRD.awrdType"
                        />
                        <label class="form-check-label" for="locAwardRadio">Local</label>
                      </div>
                    </div>
                  </div>
                  <!-- End Awards Form -->

                  <!-- Start Community Outreach -->
                  <div
                    class="row align-items-center justify-content-center"
                    style="border: 1px solid black"
                    v-show="serviceFld == 'outreach'"
                  >
                    <div class="text-center">
                      <div class="form-group">
                        <label for="outreachYrs">Number of Years:</label>
                        <input
                          type="text"
                          class="form-control"
                          id="outreachYrs"
                          v-model="OTRCH.otrchYrs"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- End Community Outreach -->

                  <!-- Start Professional Examinations -->
                  <div
                    class="row align-items-center justify-content-center"
                    style="border: 1px solid black"
                    v-show="serviceFld == 'exams'"
                  >
                    <div class="col-8">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="examRadios"
                          id="exam1"
                          value="exam1"
                          v-model="EXMS.exmType"
                          checked
                        />
                        <label
                          class="form-check-label"
                          for="execRadio"
                        >Engineering, Accounting, Medicine, Law, Teacher’s Board, etc.</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="examRadios"
                          id="exam2"
                          value="exam2"
                          v-model="EXMS.exmType"
                        />
                        <label
                          class="form-check-label"
                          for="exam2"
                        >Career Executive Service Officer’s Examination/Career Service Executive Examination</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="examRadios"
                          id="exam3"
                          value="exam3"
                          v-model="EXMS.exmType"
                        />
                        <label
                          class="form-check-label"
                          for="exam3"
                        >Marine Board/ Seaman Certificate, Master Electrician/Master Plumber Certificate, etc. Plant Mechanic Certificate, Professional Radio Operator Certificate including IT certification / Eligibility</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="examRadios"
                          id="exam4"
                          value="exam4"
                          v-model="EXMS.exmType"
                        />
                        <label class="form-check-label" for="exam4">Other trade skill certifications</label>
                      </div>
                    </div>
                  </div>
                  <!-- End Professional Examinations -->
                </div>

                <!-- ISBN Modal -->
                <div
                  class="modal fade"
                  id="isbnModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="isbnModalTitle"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5
                          class="modal-title"
                          id="isbnModalTitle"
                        >International Standard Book Number</h5>
                      </div>
                      <form @submit.prevent="uploadISBN">
                        <div class="modal-body text-center">
                          <h4>Title: {{isbn.title}}</h4>
                          <h4>ISBN: {{isbn.bookNumber}}</h4>
                          <h4>
                            Author/s:
                            <li
                              v-for="(authorName, index) in isbn.authorNames"
                              :key="index"
                            >{{authorName}}</li>
                          </h4>
                          <div class="form-group">
                            <label for="authors" class="mt-3">No. of Authors</label>
                            <input
                              type="number"
                              class="form-control text-center"
                              id="authors"
                              v-model="isbn.authorsNumber"
                            />
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="submit" class="btn btn-info" v-show="isbn.title != null">submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- End ISBN Modal -->

                <!-- ISSN Modal -->
                <div
                  class="modal fade"
                  id="issnModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="issnModalTitle"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5
                          class="modal-title"
                          id="isbnModalTitle"
                        >International Standard Serial Number</h5>
                      </div>
                      <form @submit.prevent="uploadISSN">
                        <div class="modal-body text-center">
                          <h4>Title: {{issn.title}}</h4>
                          <h4>ISSN: {{issn.ISSN[0]}}</h4>
                          <h4>Publisher: {{issn.publisher}}</h4>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="issnTypeRadios"
                              id="intIssn"
                              value="intIssn"
                              v-model="ISSN"
                              checked
                            />
                            <label class="form-check-label" for="intIssn">International</label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="issnTypeRadios"
                              id="natIssn"
                              value="natIssn"
                              v-model="ISSN"
                            />
                            <label class="form-check-label" for="natIssn">National</label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="issnTypeRadios"
                              id="locIssn"
                              value="locIssn"
                              v-model="ISSN"
                            />
                            <label class="form-check-label" for="locIssn">Local</label>
                          </div>
                          <!-- <div class="form-group">
                          <label for="authors">No. of Authors</label>
                          <input
                            type="text"
                            class="form-control"
                            id="authors"
                            v-model="ISBN.authors"
                          />
                          </div>-->
                        </div>
                        <div class="modal-footer">
                          <button type="submit" class="btn btn-info">submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- End ISBN Modal -->
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button
                  type="submit"
                  class="btn btn-info"
                  v-show="IPPC.checkISBN == false || serviceFld != 'innov'"
                >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End PDAH Modal -->

      <!-- Start PDS Modal -->
      <div
        class="modal fade"
        id="addPDSModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addPDSModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addPDSModalTitle">Upload PDS</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="uploadPDS">
              <div class="modal-body">
                <file-pond
                  name="file"
                  ref="pondPDS"
                  class-name="my-pond"
                  label-idle="Drop PDS File Here..."
                  v-on:addfile="selectPDS"
                  :files="pdsFileClear"
                  aria-required="true"
                />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-info">Upload</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End PDS Modal -->

      <!-- Start Reuploading Document Modal -->
      <div
        class="modal fade"
        id="reuploadModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="reuploadModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="reuploadModalTitle">Re-Upload Image Document</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="updateDocument">
              <div class="modal-body">
                <file-pond
                  name="file"
                  ref="pondRE"
                  class-name="my-pond"
                  label-idle="Drop Image File Here..."
                  v-on:addfile="selectRE"
                  aria-required="true"
                />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-info">Re-Upload</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End Reuploading Document Modal -->

      <!-- Start Account Settings Modal -->
      <div
        class="modal fade"
        id="accSetModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="accSetModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="accSetModalTitle">Account Settings</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="updateAccount">
              <div class="modal-body">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="empNo">Employee Number</label>
                      <input
                        type="text"
                        id="empNo"
                        class="form-control"
                        v-model="currentUser.name"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="accName">Full Name</label>
                      <input
                        type="text"
                        id="accName"
                        class="form-control"
                        v-model="currentUser.empNo"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-info">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End Account Settings Modal -->

      <!-- Start Profile Pic Upload Modal -->
      <div
        class="modal fade"
        id="profilePicModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="profilePicModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="profilePicModalTitle">Upload Profile Picture</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="uploadProfilePic">
              <div class="modal-body">
                <file-pond
                  name="file"
                  ref="pondDP"
                  class-name="my-pond"
                  label-idle="Drop Image File Here..."
                  v-on:addfile="selectDP"
                  :files="dpFileClear"
                  aria-required="true"
                />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-info">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- End Profile Pic Upload Modal -->

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
// Filepond Instance
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
const FilePond = vueFilePond(FilePondPluginFileEncode);

//Tesseract Instance
import { createWorker } from "tesseract.js";
const worker = createWorker({
  logger: m => console.log(m)
});
export default {
  components: {
    // FilePond
  },
  data() {
    return {
      uploaderName: "",
      docType: "",
      score: 0,
      isbnScore: 5,
      userData: {},

      currentUser: {
        name: "",
        empNo: ""
      },
      userPosition: "",
      college: "",
      note: "",

      documents: [],
      document: {
        index: "",
        id: "",
        docImage: "",
        status: ""
      },

      // Scoring Criteria
      scores: [],
      scoring: {},
      elsScore: 0,
      pdahScore: 0,

      // Educational Qualifications Data
      eqFormType: "TOR",
      TOR: {
        gradCheck: false,
        degree: "bachelor",
        units: ""
      },
      ACE: {
        degree: "bachelor"
      },

      // Exprience & Length of Service Data
      serviceCat: "FTAS",
      FTAS: {
        serviceType: "state",
        years: ""
      },
      MOD: {
        position: "pres",
        years: ""
      },
      FPTE: {
        position: "manager",
        years: ""
      },
      EPPI: {
        position: "coop",
        years: ""
      },

      // Professional Development
      serviceFld: "innov",
      IPPC: {
        checkISBN: false,
        srvType: "invention",
        invAuthors: "",
        monoAuthors: "",
        monoType: "monoInt",
        bookT: ""
      },
      ISBN: {
        authors: ""
      },
      ISSN: "intIssn",
      ESTP: {
        expt: "cot",
        exptType: "int"
      },
      ESR: {
        esrType: "consultant"
      },
      MPH: {
        mphType: "current"
      },
      SCF: {
        scfType: "intCompe"
      },
      AWRD: {
        awrdType: "intAward"
      },
      OTRCH: {
        otrchYrs: ""
      },
      EXMS: {
        exmType: "exam1"
      },

      // For Uploading Files
      pdsFile: "",
      dpFile: "",
      acadDegreeFile: "",
      servRecFile: "",
      pdahFile: "",
      pdahImage: "",

      // For Reuploading Files
      reDocFile: "",

      // For Clearing Files
      adFileClear: "",
      srFileClear: "",
      pdahFileClear: "",
      pdsFileClear: "",
      dpFileClear: "",

      // ISSN
      issn: {
        ISSN: []
      },
      // ISBN
      isbn: {
        authorNames: [],
        authorsNumber: "",
        bookNumber: ""
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

    selectADFile() {
      this.acadDegreeFile = this.$refs.pondAD.getFile();
      console.log(this.acadDegreeFile);
    },

    selectSRFile() {
      this.servRecFile = this.$refs.pondSR.getFile();
      console.log(this.servRecFile);
    },

    selectPDAHFile() {
      this.pdahFile = this.$refs.pondPDAH.getFile();
      this.pdahImage = this.pdahFile.getFileEncodeDataURL();
      console.log(this.pdahFile);
    },

    selectPDS() {
      this.pdsFile = this.$refs.pondPDS.getFile();
      console.log(this.pdsFile);
    },

    selectDP() {
      this.dpFile = this.$refs.pondDP.getFile();
      console.log(this.dpFile);
    },

    // Re-Uploading
    selectRE() {
      this.reDocFile = this.$refs.pondRE.getFile();
      console.log(this.reDocFile);
    },

    recognizeISSN: async function() {
      const img = document.getElementById("pdahImage");
      await worker.load();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const {
        data: { text }
      } = await worker.recognize(img);
      this.IPPC.bookT = text;
      console.log(text);

      const str = text;
      const rgx = /\d\d\d\d-\d\d\d\w/gim;
      const match = rgx.exec(str);
      console.log(match[0]);

      // var config = {
      //   headers: { "Access-Control-Allow-Origin": "*" }
      // };

      this.$http
        .get("http://api.crossref.org/journals/" + match[0])
        .then(res => {
          this.issn = res.data.message;
          this.issn.ISSN = res.data.message.ISSN;
          console.log(this.issn);
        });
      // await worker.terminate();
    },

    recognizeISBN: async function() {
      const img = document.getElementById("pdahImage");
      await worker.load();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const {
        data: { text }
      } = await worker.recognize(img);
      this.IPPC.bookT = text;
      console.log(text);

      const str = text;
      const rgx = /\d\d\d-\d-\d\d\d\d\d\d-\d\d-\d/gim;
      const match = rgx.exec(str);
      console.log(match[0]);

      if (match == null) {
        this.$toasted.show(
          "Cannot detect ISBN in the image. Please make sure you have the right format(123-X-XXXXXX-XX-X) and try again. ",
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
      }

      this.$http
        .get("https://www.googleapis.com/books/v1/volumes?q=" + match[0])
        .then(res => {
          this.isbn = res.data.items[0].volumeInfo;
          this.isbn.authorsNumber = res.data.items[0].volumeInfo.authors.length;
          this.isbn.authorNames = res.data.items[0].volumeInfo.authors;
          this.isbn.bookNumber =
            res.data.items[0].volumeInfo.industryIdentifiers[1].identifier;
          console.log(this.isbn);
        })
        .catch(function(error) {
          console.error("Error:", error);
        });

      worker.terminate();
    },

    uploadADFile() {
      const uri = "http://localhost:3000/upload/ad";

      this.$http.post(uri, {
        uploaderName: this.userData.name,
        typeOfDoc: this.eqFormType,
        score: this.score,
        status: this.status
      });
    },

    async classifyFile() {
      const uri = "http://localhost:3000/classify";

      const formData = new FormData();
      formData.append("file", this.imageFile.file);

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
                college: this.userData.college,
                mainImageName: response.data.docFilename,
                mainImage: this.imageFile.getFileEncodeDataURL(),
                mainImageType: this.imageFile.fileType
              })
              .then(() => {
                this.getDocuments();
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
          .catch(() => {
            this.$toasted.show("Please choose a file to upload and classify", {
              action: {
                text: "close",
                onClick: (e, toastObject) => {
                  toastObject.goAway(0);
                }
              },
              type: "error"
            });
          })
          .finally(() => {
            $("#addDocumentModal").modal("hide");
            FilePond.destroy(this.imageFile);
          });
      } catch (e) {
        console.log(e);
      }
    },

    uploadEQ() {
      const uri = "http://localhost:3000/upload/eq";

      if (this.TOR.gradCheck == false && this.eqFormType == "TOR") {
        if (
          this.TOR.degree == "bachelor" ||
          this.TOR.degree == "master" ||
          this.TOR.degree == "doctor" ||
          this.TOR.degree == "llbormd"
        ) {
          this.score =
            (parseInt(this.TOR.units) / 3) * this.scores[2].tor.score;
          this.eqFormType = "TOR";
        }
      }

      if (this.TOR.gradCheck == true) {
        if (this.TOR.degree == "bachelor") {
          this.score = this.scores[0].diploma[0].score;
        } else if (this.TOR.degree == "master") {
          this.score = this.scores[0].diploma[1].score;
        } else if (this.TOR.degree == "doctor") {
          this.score = this.scores[0].diploma[2].score;
        } else if (this.TOR.degree == "llbormd") {
          this.score = this.scores[0].diploma[3].score;
        }
        this.eqFormType = "Diploma";
      }

      if (this.eqFormType == "ACE") {
        if (this.ACE.degree == "bachelor") {
          this.score = this.scores[1].diplPresent[0].score;
        } else if (this.ACE.degree == "master") {
          this.score = this.scores[1].diplPresent[1].score;
        }
        this.eqFormType = "TOR";
      }

      this.$http
        .post(uri, {
          uploader: this.currentUser._id,
          typeOfDoc: this.eqFormType,
          initialScore: this.score,
          note: this.note,
          mainDocName: this.acadDegreeFile.filenameWithoutExtension,
          mainDoc: this.acadDegreeFile.getFileEncodeDataURL(),
          mainDocType: this.acadDegreeFile.fileType
        })
        .then(() => {
          // this.documents.push(response.data.doc);
          this.getDocuments();
          this.$toasted.show("Document Uploaded Successfully", {
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
        })
        .finally(() => {
          $("#eqModal").modal("hide");
          this.acadDegreeFile = "";
        });
    },

    uploadELS() {
      const uri = "http://localhost:3000/upload/els";

      if (this.serviceCat == "FTAS") {
        if (this.FTAS.serviceType == "state") {
          this.elsScore =
            parseInt(this.FTAS.years) * this.scores[3].sr[0].score;
        } else if (this.FTAS.serviceType == "non-state") {
          this.elsScore =
            parseInt(this.FTAS.years) * this.scores[3].sr[1].score;
        }
        this.serviceCat = "Service Record";
      } else if (this.serviceCat == "MOD") {
        if (this.MOD.position == "pres") {
          this.elsScore =
            parseInt(this.MOD.years) * this.scores[18].mod[0].score;
        } else if (this.MOD.position == "vicepres") {
          this.elsScore =
            parseInt(this.MOD.years) * this.scores[18].mod[1].score;
        } else if (this.MOD.position == "dean") {
          this.elsScore =
            parseInt(this.MOD.years) * this.scores[18].mod[2].score;
        } else if (this.MOD.position == "head") {
          this.elsScore =
            parseInt(this.MOD.years) * this.scores[18].mod[3].score;
        }
        this.serviceCat = "Memorandum of Designation";
      } else if (this.serviceCat == "FPTE") {
        if (this.FPTE.position == "manager") {
          this.elsScore =
            parseInt(this.FPTE.years) * this.scores[4].fpte[0].score;
        } else if (this.FPTE.position == "supervisor") {
          this.elsScore =
            parseInt(this.FPTE.years) * this.scores[4].fpte[1].score;
        } else if (this.FPTE.position == "ranknfile") {
          this.elsScore =
            parseInt(this.FPTE.years) * this.scores[4].fpte[2].score;
        }
        this.serviceCat = "Full-time Professional & Technical Experience";
      } else if (this.serviceCat == "EPPI") {
        if (this.EPPI.position == "coop") {
          this.elsScore =
            parseInt(this.EPPI.years) * this.scores[5].eppi[0].score;
        } else if (this.EPPI.position == "basic") {
          this.elsScore =
            parseInt(this.EPPI.years) * this.scores[5].eppi[1].score;
        }
        this.serviceCat = "Experience in the Public & Private Institution";
      }

      if (this.servRecFile == "") {
        this.$toasted.show("Please Select an Image", {
          action: {
            text: "close",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          },
          type: "error"
        });
        this.serviceCat = "FTAS";
      }

      if (
        this.FTAS.years != "" ||
        this.MOD.years != "" ||
        this.FPTE.years != "" ||
        this.EPPI.years != ""
      ) {
        this.$http
          .post(uri, {
            uploader: this.currentUser._id,
            typeOfDoc: this.serviceCat,
            initialScore: this.elsScore,
            note: this.note,
            mainDocName: this.servRecFile.filenameWithoutExtension,
            mainDoc: this.servRecFile.getFileEncodeDataURL(),
            mainDocType: this.servRecFile.fileType
          })
          .then(() => {
            // this.documents.push(res.data.doc);
            this.getDocuments();
            this.$toasted.show("Document Uploaded Successfully", {
              action: {
                text: "close",
                onClick: (e, toastObject) => {
                  toastObject.goAway(0);
                }
              },
              type: "success"
            });

            $("#elsModal").modal("hide");
            this.serviceCat = "FTAS";
            this.servRecFile = "";
            this.srFileClear = "";
          })
          .catch(() => {
            if (this.servRecFile == "") {
              this.$toasted.show("Please Select an Image", {
                action: {
                  text: "close",
                  onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                  }
                },
                type: "error"
              });
            } else {
              this.$toasted.show("An error occured. Please refresh the page", {
                action: {
                  text: "close",
                  onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                  }
                },
                type: "error"
              });
            }
          });
      } else {
        this.$toasted.show("Please Insert No. of Years", {
          action: {
            text: "close",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          },
          type: "error"
        });
        this.serviceCat = "FTAS";
      }
    },

    uploadPDAH() {
      const uri = "http://localhost:3000/upload/pdah";

      if (this.serviceFld == "innov") {
        if (this.IPPC.srvType == "invention") {
          this.pdahScore = this.scores[6].cop.score / this.IPPC.invAuthors;
          this.serviceFld = "Patent";
        } else if (this.IPPC.srvType == "monograph") {
          if (this.IPPC.monoType == "monoInt") {
            this.pdahScore =
              this.scores[7].mono[0].score / this.IPPC.monoAuthors;
            this.serviceFld = "Journal (International)";
          } else if (this.IPPC.monoType == "monoNat") {
            this.pdahScore =
              this.scores[7].mono[1].score / this.IPPC.monoAuthors;
            this.serviceFld = "Journal (National)";
          } else if (this.IPPC.monoType == "monoLoc") {
            this.pdahScore =
              this.scores[7].mono[2].score / this.IPPC.monoAuthors;
            this.serviceFld = "Journal (Local)";
          }
        }
      } else if (this.serviceFld == "expert") {
        if (this.ESTP.expt == "cot") {
          if (this.ESTP.exptType == "int") {
            this.pdahScore = this.scores[10].cot[0].score;
            this.serviceFld = "Certificate of Training (International)";
          } else if (this.ESTP.exptType == "nat") {
            this.pdahScore = this.scores[10].cot[1].score;
            this.serviceFld = "Certificate of Training (National)";
          } else if (this.ESTP.exptType == "local") {
            this.pdahScore = this.scores[10].cot[2].score;
            this.serviceFld = "Certificate of Training (Local)";
          }
        } else if (this.ESTP.expt == "sem") {
          if (this.ESTP.exptType == "int") {
            this.pdahScore = this.scores[11].cap[0].score;
            this.serviceFld = "Certificate of Participation (International)";
          } else if (this.ESTP.exptType == "nat") {
            this.pdahScore = this.scores[11].cap[1].score;
            this.serviceFld = "Certificate of Participation (National)";
          } else if (this.ESTP.exptType == "local") {
            this.pdahScore = this.scores[11].cap[2].score;
            this.serviceFld = "Certificate of Participation (Local)";
          }
        }
      } else if (this.serviceFld == "expRender") {
        if (this.ESR.esrType == "consultant") {
          this.pdahScore = this.scores[12].expServ[0].score;
          this.serviceFld = "Expert Service Rendered (Consultant)";
        } else if (this.ESR.esrType == "trainor") {
          this.pdahScore = this.scores[12].expServ[1].score;
          this.serviceFld = "Expert Service Rendered (Trainor)";
        } else if (this.ESR.esrType == "adviser") {
          this.pdahScore = this.scores[12].expServ[2].score;
          this.serviceFld = "Expert Service Rendered (Adviser)";
        }
      } else if (this.serviceFld == "membership") {
        if (this.MPH.mphType == "current") {
          this.pdahScore = this.scores[13].membership[0].score;
          this.serviceFld = "Membership Certificate";
        } else if (this.MPH.mphType == "honor") {
          this.pdahScore = this.scores[13].membership[1].score;
          this.serviceFld = "Academic Honor Certificate";
        }
      } else if (this.serviceFld == "scholarship") {
        if (this.SCF.scfType == "intCompe") {
          this.pdahScore = this.scores[14].scholarship[0].score;
          this.serviceFld = "Scholarship (International Competitive)";
        } else if (this.SCF.scfType == "intNonCompe") {
          this.pdahScore = this.scores[14].scholarship[1].score;
          this.serviceFld = "Scholarship (International Non-Competitive)";
        } else if (this.SCF.scfType == "natCompe") {
          this.pdahScore = this.scores[14].scholarship[2].score;
          this.serviceFld = "Scholarship (National/Regional Competitive)";
        } else if (this.SCF.scfType == "natNonCompe") {
          this.pdahScore = this.scores[14].scholarship[3].score;
          this.serviceFld = "Scholarship (National/Regional Non-Competitive)";
        } else if (this.SCF.scfType == "locBoth") {
          this.pdahScore = this.scores[14].scholarship[4].score;
          this.serviceFld = "Scholarship (Local)";
        }
      } else if (this.serviceFld == "awards") {
        if (this.AWRD.awrdType == "intAward") {
          this.pdahScore = this.scores[15].awards[0].score;
          this.serviceFld = "Award (International)";
        } else if (this.AWRD.awrdType == "natAward") {
          this.pdahScore = this.scores[15].awards[1].score;
          this.serviceFld = "Award (National/Regional)";
        } else if (this.AWRD.awrdType == "locAward") {
          this.pdahScore = this.scores[15].awards[2].score;
          this.serviceFld = "Award (Local)";
        }
      } else if (this.serviceFld == "outreach") {
        this.pdahScore = this.scores[16].outreach.score * this.OTRCH.otrchYrs;
        this.serviceFld = "Outreach";
      } else if (this.serviceFld == "exams") {
        if (this.EXMS.exmType == "exam1") {
          this.pdahScore = this.scores[17].exams[0].score;
          this.serviceFld = "Licensure Exam";
        } else if (this.EXMS.exmType == "exam2") {
          this.pdahScore = this.scores[17].exams[1].score;
          this.serviceFld = "CSC Exam";
        } else if (this.EXMS.exmType == "exam3") {
          this.pdahScore = this.scores[17].exams[2].score;
          this.serviceFld = "Certification Exam";
        }
      }

      if (this.pdahFile == "") {
        this.$toasted.show("Please Select an Image", {
          action: {
            text: "close",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          },
          type: "error"
        });
        this.serviceFld = "innov";
      } else if (this.serviceFld == "outreach") {
        if (this.OTRCH.otrchYrs == "") {
          this.$toasted.show("Please Input Number of Years", {
            action: {
              text: "close",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
            type: "error"
          });
        }
      }

      if (this.serviceFld == "innov") {
        if (this.IPPC.srvType == "invention") {
          if (this.IPPC.invAuthors == "") {
            this.$toasted.show(
              "Please Input Number of Authors for Innovation...",
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
          }
        } else if (this.IPPC.srvType == "monograph") {
          if (this.IPPC.monoAuthors == "") {
            this.$toasted.show(
              "Please Input Number of Authors for Monograph...",
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
          }
        }
      } else {
        this.$http
          .post(uri, {
            uploader: this.currentUser._id,
            typeOfDoc: this.serviceFld,
            initialScore: this.pdahScore,
            note: this.note,
            mainDocName: this.pdahFile.filenameWithoutExtension,
            mainDoc: this.pdahFile.getFileEncodeDataURL(),
            mainDocType: this.pdahFile.fileType
          })
          .then(() => {
            // this.documents.push(res.data.doc);
            this.getDocuments();
            this.$toasted.show("Document Uploaded Successfully", {
              action: {
                text: "close",
                onClick: (e, toastObject) => {
                  toastObject.goAway(0);
                }
              },
              type: "success"
            });

            $("#PDAHModal").modal("hide");
            this.serviceCat = "innov";
            this.pdahFile = "";
            this.pdahFileClear = "";
          })
          .catch(e => {
            console.log(e);
          });
      }
    },

    uploadISSN() {
      const uri = "http://localhost:3000/upload/pdah";

      if (this.pdahFile != "") {
        if (this.serviceFld == "innov" && this.IPPC.checkISBN == true) {
          if (this.ISSN == "intIssn") {
            this.pdahScore = this.scores[9].issn[0].score;
          } else if (this.ISSN == "natIssn") {
            this.pdahScore = this.scores[9].issn[1].score;
          } else if (this.ISSN == "locIssn") {
            this.pdahScore = this.scores[9].issn[2].score;
          }

          this.serviceFld = "Journal (ISSN)";

          this.$http
            .post(uri, {
              uploader: this.currentUser._id,
              typeOfDoc: this.serviceFld,
              initialScore: this.pdahScore,
              note: this.note,
              mainDocName: this.pdahFile.filenameWithoutExtension,
              mainDoc: this.pdahFile.getFileEncodeDataURL(),
              mainDocType: this.pdahFile.fileType
            })
            .then(() => {
              // this.documents.push(res.data.doc);
              this.getDocuments();
              this.$toasted.show("Document Uploaded Successfully", {
                action: {
                  text: "close",
                  onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                  }
                },
                type: "success"
              });

              $("#PDAHModal").modal("hide");
              $("#issnModal").modal("hide");
              this.serviceCat = "innov";
              this.pdahFile = "";
              this.pdahFileClear = "";
            })
            .catch(e => {
              console.log(e);
            });
        }
      } else {
        this.$toasted.show("Please select an file to upload", {
          action: {
            text: "close",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          },
          type: "error"
        });
      }
    },

    uploadISBN() {
      const uri = "http://localhost:3000/upload/pdah";

      if (this.pdahFile != "") {
        if (this.serviceFld == "innov" && this.IPPC.checkISBN == true) {
          this.pdahScore = this.scores[8].isbn.score / this.isbn.authorsNumber;

          this.serviceFld = "Published Book (ISBN)";

          this.$http
            .post(uri, {
              uploader: this.currentUser._id,
              typeOfDoc: this.serviceFld,
              initialScore: this.pdahScore,
              note: this.note,
              mainDocName: this.pdahFile.filenameWithoutExtension,
              mainDoc: this.pdahFile.getFileEncodeDataURL(),
              mainDocType: this.pdahFile.fileType
            })
            .then(() => {
              // this.documents.push(res.data.doc);
              this.getDocuments();
              this.$toasted.show("Document Uploaded Successfully", {
                action: {
                  text: "close",
                  onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                  }
                },
                type: "success"
              });

              $("#PDAHModal").modal("hide");
              $("#isbnModal").modal("hide");
              this.serviceCat = "innov";
              this.pdahFile = "";
              this.pdahFileClear = "";
            })
            .catch(e => {
              console.log(e);
            });
        }
      } else {
        this.$toasted.show("Please select an file to upload", {
          action: {
            text: "close",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          },
          type: "error"
        });
      }
    },

    updateAccount() {
      const uri = "http://localhost:3000/user/update/" + this.userData._id;
      this.$http
        .put(uri, {
          name: this.currentUser.name,
          employeeID: this.currentUser.empNo
        })
        .then(() => {
          this.getUser();
          this.$toasted.show("Profile Updated Successfully!", {
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
          this.$toasted.show("An error occured while updating Profile", {
            action: {
              text: "close",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
            type: "error"
          });
        })
        .finally(() => {
          $("#accSetModal").modal("hide");
        });
    },

    uploadProfilePic() {
      const uri = "http://localhost:3000/user/update/" + this.userData._id;
      this.$http
        .put(uri, {
          profilePic: this.dpFile.getFileEncodeDataURL()
        })
        .then(() => {
          this.getUser();
          this.$toasted.show("Profile Picture Uploaded Successfully!", {
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
            "An error occured while uploading Profile Picture",
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
        })
        .finally(() => {
          $("#profilePicModal").modal("hide");
        });
    },

    addISBN() {
      const uri = "http://localhost:3000/add/isbn";

      this.$http
        .post(uri, {
          uploaderName: this.userData.name,
          bookIsbn: this.ISBN,
          score: this.isbnScore,
          college: this.userData.college
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

    uploadPDS() {
      let uri = "http://localhost:3000/user/pds/" + this.userData._id;

      this.$http
        .put(uri, {
          pds: this.pdsFile.getFileEncodeDataURL()
        })
        .then(() => {
          this.getUserData();
          this.$toasted.show("PDS Uploaded Successfully!", {
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
          this.$toasted.show("An error occured while uploading PDS", {
            action: {
              text: "close",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
            type: "error"
          });

          console.log(e);
        })
        .finally(() => {
          $("#addPDSModal").modal("hide");
          this.pdsFile = "";
          //FilePond.destroy(this.pdsFile);
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

    viewDocument(index, userID) {
      const uri = "http://localhost:3000/document";

      this.$http
        .post(uri, { _id: userID })
        .then(res => {
          this.document.index = index;
          this.document.id = res.data.doc._id;
          this.document.docImage = res.data.doc.mainDoc;
          this.document.status = res.data.doc.status;
          console.log(this.document);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateDocument() {
      const uri = "http://localhost:3000/update/document/" + this.document.id;

      this.$http
        .put(uri, {
          mainDoc: this.reDocFile.getFileEncodeDataURL()
        })
        .then(() => {
          this.getDocuments();
          this.$toasted.show("Document Re-Uploaded Successfully!", {
            action: {
              text: "close",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
            type: "success"
          });

          $("#reuploadModal").modal("hide");
          $("#docuModal").modal("hide");
        })
        .catch(e => {
          console.log(e);
        });
    },

    getUserData() {
      this.userData = JSON.parse(localStorage.getItem("user"));
      console.log(this.userData._id);
    },

    getUser() {
      const uri = "http://localhost:3000/user";

      this.$http
        .post(uri, {
          _id: this.userData._id
        })
        .then(res => {
          this.currentUser = res.data.user;
          this.currentUser.name = res.data.user.name;
          this.currentUser.empNo = res.data.user.employeeID;
          console.log(this.currentUser);
        })
        .catch(e => {
          console.log(e);
        });
    },

    getScoresData() {
      const uri = "http://localhost:3000/scores";

      this.$http
        .get(uri)
        .then(res => {
          this.scores = res.data.scores;
          console.log(this.scores);
        })
        .catch(e => {
          console.log(e);
        });
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
    },

    getScore(val) {
      return val.toFixed(2);
    }
  },

  mounted() {
    this.getDocuments();
    this.getUserData();
    this.getUser();
    this.getUserPosition();
    this.getScoresData();
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