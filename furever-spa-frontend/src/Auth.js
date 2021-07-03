import App from './App'
import Router, { gotoRoute } from './Router'
import splash from './views/partials/splash'
import {html, render } from 'lit-html'
import Toast from './Toast'

class Auth {

  constructor(){
    this.currentUser = {}
  }
  
  async signUp(userData, fail = false){  
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
    gotoRoute('/signin')
  }


  async signIn(userData, fail = false){
    const response = await fetch(`${App.apiBase}/auth/signin`, {
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
    // save access token (jwt) to local storage
    localStorage.setItem('accessToken', data.accessToken)
    // set current user
    this.currentUser = data.user      
    // console.log(this.currentUser)           
    // redirect to home
    Router.init()
    gotoRoute('/')
  }


  async check(success){
    // show splash screen while loading ...   
    render(splash, App.rootEl)
    
    // check local token is there
    if(!localStorage.accessToken){
      // no local token!
      Toast.show("Please sign in")    
      // redirect to sign in page      
      gotoRoute('/signin')
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
      gotoRoute('/signin')
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
    // redirect to sign in    
    gotoRoute('/signin')
    // unset currentUser
    this.currentUser = null
  }
}

export default new Auth()