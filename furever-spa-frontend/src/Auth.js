import App from './App'
import Router, { gotoRoute } from './Router'
import splash from './views/partials/splash'
import {html, render } from 'lit-html'
import Toast from './Toast'

class Auth {

  constructor(){
    this.currentUser = {}
  }
  async addPet (petData, fail = false) {  
    const response = await fetch(`${App.apiBase}/pet`, {
      method: 'POST',      
      body: petData
    })

    // if response not ok
    if(!response.ok){      
      // console log error
      const err = await response.json()
      if(err) console.log(err)
      // show error      
      Toast.show(`Problem getting pet: ${response.status}`)   
      // run fail() functon if set
      if(typeof fail == 'function') fail()
    }
    /// pet add success - show toast and redirect to sign in page
    Toast.show('Pet added')        
    // redirect to add
    gotoRoute('/add')
  }
  
  async signUp(userData, fail = false) {  
    const response = await fetch(`${App.apiBase}/user`, {
      method: 'POST',      
      body: userData
    })

    // if response not ok
    if(!response.ok){      
      // console log error
      const err = await response.json()
      if(err) console.log(err)
      // show error      
      Toast.show(`Problem getting user: ${response.status}`)   
      // run fail() functon if set
      if(typeof fail == 'function') fail()
    }
    /// sign up success - show toast and redirect to sign in page
    Toast.show('Account created, please sign in')        
    // redirect to signin
    gotoRoute('/login')
  }


  async signIn(userData, fail = false){
    const response = await fetch(`${App.apiBase}/auth/login`, {
      method: 'POST',      
      body: userData
    })

    // if response not ok
    if(!response.ok){
      // console log error
      const err = await response.json()
      if(err) console.log(err)
      // show error      
      Toast.show(`Problem signing in: ${err.message}`, 'error')   
      // run fail() functon if set
      if(typeof fail == 'function') fail()
    }

    // sign in success
    const data = await response.json()
    Toast.show(`Welcome  ${data.user.firstName}`)
    console.log(data)
    // save access token (jwt) to local storage
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('user', JSON.stringify(data.user))
    // set current user
    this.currentUser = data.user      
    console.log(this.currentUser)           
    // redirect to home
    window.location.href = '/';
  }


  async check(success){
    console.log(localStorage.getItem('user'))
    // check local token is there
    if(null === localStorage.getItem('accessToken')){
      // no local token!
      Toast.show("Please sign in")


      // User is not logged in, but they are trying to visit
      // the sign in or sign up page, let them through
      switch (window.location.pathname) {
        case '/login':
        case '/signup':
          success();
          return;
      }

      // Otherwise, redirect to sign in page
      gotoRoute('/login')
      return
    }
    
    // token must exist - validate token via the backend
    const response = await fetch(`${App.apiBase}/auth/validate`, {
      method: 'GET',
      headers: {        
        "Authorization": `Bearer ${localStorage.accessToken}`
      }
    })
    
    // if response not ok
    if(!response.ok){             
      // console log error
      const err = await response.json()
      if(err) console.log(err)
      // delete local token
      localStorage.removeItem('accessToken')
      Toast.show("session expired, please sign in")
      // redirect to sign in      
      gotoRoute('/login')
      return
    }
    
    // token is valid!
    const data = await response.json()
    // console.log(data)
    // set currentUser obj
    this.currentUser = data.user
    // run success
    success()
  }

  signOut(){
    Toast.show("You are signed out")
    // delete local token
    localStorage.removeItem('accessToken')       
    localStorage.removeItem('user')      
    // redirect to sign in    
    gotoRoute('/login')
    // unset currentUser
    this.currentUser = null
  }
}

export default new Auth()