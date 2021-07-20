import App from './App'
import Auth from './Auth'
import Toast from './Toast'

class PetAPI {
  
  async updatePet(petId, petData){
    // validate
    if(!petId || !petData) return
    
    // make fetch request to backend
    const response = await fetch(`${App.apiBase}/pet/${petId}`, {
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

  async getPet(petId){
    // validate
    if(!petId) return
    
    // fetch the json data
    const response = await fetch(`${App.apiBase}/pet/${petId}`, {
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
    
    // return data
    return data
  }
}

export default new PetAPI()