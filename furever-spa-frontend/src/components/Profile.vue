<template>
  <div>
    <navbar />
    <div class="page-content calign" style="background-color: #d9cdbf">
      <div class="container emp-profile">

        <form method="post">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img :src="image" alt="" />
                <div class="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="profile-head">
                <h5>
                  {{ currentUser }}
                </h5>
                <h6></h6>
                <p class="proile-rating"></p>
                <div>

                    <div>
                        <b-tabs content-class="mt-3">
                            <b-tab title="About" active>
                                <div class="row">
                                    <div class="col-3">
                                        <label>Name</label>
                                    </div>
                                    <div class="col-9">
                                        <p>{{ currentUser }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <label>Email</label>
                                    </div>
                                    <div class="col-9">
                                        <p>{{ user.email }}</p>
                                    </div>
                                </div>
                            
                                <div class="row">
                                    <div class="col-3">
                                        <label>Phone</label>
                                    </div>
                                    <div class="col-9">
                                        <p>040000000</p>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-3">
                                        <label>Children</label>
                                    </div>
                                    <div class="col-9">
                                        <p>3</p>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-3">
                                        <label>Youngest Child's Age</label>
                                    </div>
                                    <div class="col-9">
                                        <p>1</p>
                                    </div>
                                </div>

                                 <div class="row">
                                    <div class="col-3">
                                        <label>Home Type</label>
                                    </div>
                                    <div class="col-9">
                                        <p>Suburban</p>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="Ideal Pet">
                                <div class="row">
                                    <div class="col-3">
                                        <label>Species</label>
                                    </div>
                                    <div class="col-9">
                                        <p>Cat</p>
                                    </div>
                                </div>

                                 <div class="row">
                                    <div class="col-3">
                                        <label>Color</label>
                                    </div>
                                    <div class="col-9">
                                        <p></p>
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
              </div>
              
            <!-- <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div> -->
          </div>
        </form>
      </div>
    </div>
    <blueFooter />
  </div>
</template>

<script>
import { BootstrapVue } from 'bootstrap-vue'
import navbar from './Navbar.vue'
import blueFooter from './Footer.vue'
export default {
    data: function() {
        return {
            // userImage: JSON.parse(localStorage.user).
            currentUser: JSON.parse(localStorage.user).firstName +  " " + JSON.parse(localStorage.user).lastName,
            user: JSON.parse(localStorage.user),
            image: require('../assets/cat-4.jpg'),
        }
    },
    components: {
        navbar,
        blueFooter
    }
}
</script>

<style>
label{
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    text-align: left;
    display: block;
}

p {
    font-family: 'Montserrat', sans-serif;
    color: #0062cc;
    text-align: left;
    font-size: 1rem;
}
.profile-head .nav-tabs .nav-link.active {
  border: none;
  border-bottom: 2px solid #0062cc;
}
.profile-head .nav-tabs {
  margin-bottom: 5%;
}
.profile-head .nav-tabs .nav-link {
  border: none;
}

.emp-profile {
  padding: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 0.5rem;
  background: #fff;
}
.profile-img {
  text-align: center;
}
.profile-img img {
  width: 70%;
  height: 100%;
}
.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -20%;
  width: 70%;
  border: none;
  border-radius: 0;
  font-size: 15px;
  background: #212529b8;
}
.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}
.profile-head h5 {
  color: #333;
}
.profile-head h6 {
  color: #0062cc;
}
.profile-edit-btn {
  border: none;
  border-radius: 1.5rem;
  width: 70%;
  padding: 2%;
  font-weight: 600;
  color: #6c757d;
  cursor: pointer;
}
.proile-rating {
  font-size: 12px;
  color: #818182;
  margin-top: 5%;
}
.proile-rating span {
  color: #495057;
  font-size: 15px;
  font-weight: 600;
}

</style>
