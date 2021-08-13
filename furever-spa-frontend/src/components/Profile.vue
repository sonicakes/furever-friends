<template>
  <div>
    <navbar />
    <div class="page-content calign" style="background-color: #d9cdbf">
      <div class="container emp-profile" style="position: relative;">
          <div class="row">
            <div class="button_cont" align="center"><a class="example_b" href="/edit">Edit Profile</a></div>
            <div class="col-md-4">
              <div class="profile-img">
                <img src="../assets/user.png" alt="" />
                <div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              
              <div class="profile-head">
                <h5>
                  {{ currentUser }}
                </h5>
                <h6></h6>
                <div>

                    <div>
                        <b-tabs content-class="mt-3">
                            <b-tab title="About" active>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Name</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <p>{{ currentUser }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label>Email</label>
                                    </div>
                                    <div class="col-8" style="margin-bottom: 5px;">
                                        <p>{{ user.email }}</p>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-4" style="margin-bottom: 5px;">
                                        <label>Children</label>
                                    </div>
                                    <div class="col-8">
                                      <p>{{ questions.hasChildren }}</p>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-4" style="margin-bottom: 5px;">
                                        <label>Youngest Child's Age</label>
                                    </div>
                                    <div class="col-8">
                                        <p>{{ questions.youngestChild }}</p>
                                    </div>
                                </div>

                                 <div class="row">
                                    <div class="col-4" style="margin-bottom: 5px;">
                                        <label>Home Type</label>
                                    </div>
                                    <div class="col-8">
                                        <p>{{ questions.buildingType }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Yard Space</label>
                                    </div>
                                    <div class="col-8">
                                        <p>{{ questions.yardSize }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Other Animals</label>
                                    </div>
                                    <div class="col-8">
                                        <p>{{ questions.hasOtherPets }}</p>
                                    </div>
                                </div>

                                <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Existing Pet Temperament</label>
                                    </div>
                                    <div class="col-8">
                                        <p>{{ questions.otherPetTemperament }}</p>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="Ideal Pet">
                                <div class="row">
                                    <div class="col-4" style="margin-bottom: 5px;">
                                        <label>Species</label>
                                    </div>
                                    <div class="col-8">
                                        <p>{{ questions.filterAnimal }}</p>
                                    </div>
                                </div>

                                 <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Animal Gender</label>
                                    </div>
                                    <div class="col-8">
                                      <p>{{ questions.filterSex }}</p>
                                    </div>
                                </div>
                                <div class="row" style="margin-bottom: 5px;">
                                    <div class="col-4">
                                        <label>Animal Age</label>
                                    </div>
                                    <div class="col-8">
                                      <p>{{ questions.filterAge }}</p>
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div>
    <blueFooter />
  </div>
</template>

<script>
import App from '../App'
import Auth from '../Auth'
import { BootstrapVue } from 'bootstrap-vue'
import navbar from './Navbar.vue'
import blueFooter from './Footer.vue'
export default {
    data() {
    return {
      currentUser: JSON.parse(localStorage.user).firstName +  " " + JSON.parse(localStorage.user).lastName,
      user: JSON.parse(localStorage.user),
      loaded: false,
      questions: {
        buildingType: 'suburban-home',
        yardSize: 'non-existent',
        hasOtherPets: 'no',
        otherPetTemperament: 'na',
        hasChildren: 'no',
        youngestChild: 'na',
        filterAnimal: 'any',
        filterSex: 'any',
        filterFamily: 'any',
        filterAge: 'any',
      }
    }
  }, 
  mounted() {
    const url = App.apiBase + '/user/' + Auth.currentUser._id;

    fetch(url, {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      },
    }).then(r => r.json()).then(j => {
      for (const question in this.questions) {
        const key = 'question' + question.charAt(0).toUpperCase() + question.slice(1);
        if (j.hasOwnProperty(key)) {
          this.questions[question] = j[key];
        }
      }
      this.loaded = true;
    })
  },
    components: {
        navbar,
        blueFooter
    }
}
</script>

<style scoped>
.example_b {
  position: absolute;
  top: 10px;
  right: 10px;
	color: #fff !important;
	text-transform: uppercase;
	text-decoration: none;
	background: #60a3bc;
	padding: 10px;
	border-radius: 50px;
	display: inline-block;
	border: none;
	transition: all 0.4s ease 0s;
}

.example_b:hover {
	-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	transition: all 0.4s ease 0s;
}

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
