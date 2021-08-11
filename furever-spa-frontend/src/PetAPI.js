import App from './App'
import Auth from './Auth'
import Toast from './Toast'

class PetAPI {
  
  async updatePet(petName, petData){
    // validate
    if(!petName || !petData) return
    
    // make fetch request to backend
    const response = await fetch(`${App.apiBase}/pet/${petName}`, {
      method: "PUT",
        headers: { "Authorization": `Bearer ${localStorage.accessToken}`},
        body: petData
    })

    // if response not ok
    if(!response.ok){
      // console log error
      const err = await response.json()
      if(err) console.log(err)
      // throw error (exit this function)      
      throw new Error('Problem updating pet')
    }

    // convert response payload into json - store as data
    const data = await response.json()
    
    // return data
    return data
  }

  async getPet(petName){
    // validate
    if(!petName) return
    
    // fetch the json data
    const response = await fetch(`${App.apiBase}/pet/${petName}`, {
      headers: { "Authorization": `Bearer ${localStorage.accessToken}`}
    })

    // if response not ok
    if(!response.ok){ 
      // console log error
      const err = await response.json()
      if(err) console.log(err)
      // throw error (exit this function)      
      throw new Error('Problem getting pet')
    }
    // convert response payload into json - store as data
    const data = await response.json()
    // console.log(data) 
    // return data
    return data
  }

  async getPets() {
    const response = await fetch(`${App.apiBase}/pet`, {
      headers: { "Authorization": `Bearer ${localStorage.accessToken}`}
    })

    // if response not ok
    if(!response.ok){ 
      // console log error
      const err = await response.json()
      if(err) console.log(err)
      // throw error (exit this function)      
      throw new Error('Problem getting pets')
    }
    
    // convert response payload into json - store as data
    const data = await response.json()
    
    // return data
    return data
  }
}

export default new PetAPI()