const express = require('express')
const router = express.Router()
const Utils = require('./../utils')
const Pet = require('./../models/User')
const path = require('path')

// GET - get single pet -------------------------------------------------------
router.get('/:id', (req, res) => {
  if(req.pet._id != req.params.id){
    return res.status(401).json({
      message: "Not authorised"
    })
  }

  Pet.findById(req.params.id)
    .then(pet => {
      res.json(pet)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Couldn't get pet",
        error: err
      })
    })
})


// PUT - update pet ---------------------------------------------
router.put('/:id', (req, res) => {
  // validate request
  if(!req.body) return res.status(400).send("Task content can't be empty")
  
  let imageFilename = null

  // if avatar image exists, upload!
  if(req.files && req.files.image){
    // upload avater image then update pet
    let uploadPath = path.join(__dirname, '..', 'public', 'images')
    Utils.uploadFile(req.files.image, uploadPath, (uniqueFilename) => {
      imageFilename = uniqueFilename
      // update pet with all fields including avatar
      updatePet({
        petName: req.body.petName,
        type: req.body.type,
        age: req.body.age,
        breed: req.body.breed,
        sex: req.body.sex,
        weight: req.body.weight,
        colour: req.body.colour,
        activities: req.body.activities,
        personality: req.body.personality,
        preferredFamily: req.body.preferredFamily,
        preferredLiving: req.body.preferredLiving,
        image: imageFilename        
      })
    })
  }else{
    // update pet without image
    updatePet({
        petName: req.body.petName,
        type: req.body.type,
        age: req.body.age,
        breed: req.body.breed,
        sex: req.body.sex,
        weight: req.body.weight,
        colour: req.body.colour,
        activities: req.body.activities,
        personality: req.body.personality,
        preferredFamily: req.body.preferredFamily,
        preferredLiving: req.body.preferredLiving    
    })
  }
  
  // update Pet
  function updatePet(update){    
    Pet.findByIdAndUpdate(req.params.id, update, {new: true})
    .then(pet => res.json(pet))
    .catch(err => {
      res.status(500).json({
        message: 'Problem updating pet',
        error: err
      })
    }) 
  }
})

// POST - create new pet --------------------------------------
router.post('/', (req, res) => {
  // validate request
  if(Object.keys(req.body).length === 0){   
    return res.status(400).send({message: "Pet content can not be empty"})
  }

  // check account with email doen't already exist
  Pet.findOne({name: req.body.name})
  .then(pet => {
    if( pet != null ){
      return res.status(400).json({
        message: "name already in use, please create a unique pet name such as Roxie_2019"
      })
    }
  // create new pet       
  let newPet = new Pet(req.body)
  newPet.save()
    .then(pet => {        
      // success!  
      // return 201 status with pet object
      return res.status(201).json(pet)
    })
    .catch(err => {
      console.log(err)
      return res.status(500).send({
        message: "Problem creating profile",
        error: err
      })
    })
  })
})

module.exports = router