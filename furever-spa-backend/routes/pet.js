const express = require('express')
const router = express.Router()
const Utils = require('./../utils')
const Pet = require('./../models/Pet')
const path = require('path')
const fs = require('fs');

// DELETE
// router.delete('/:petName', (req, res) => {
//     Pet.findOneAndDelete({petName: req.params.petName})
//         .then(() => res.status(204).json(null))
//         .catch(err => res.status(500).json(null));
// });

// GET - collection
router.get('/', (req, res) => {
    Pet.find()
        .then(data => {
            console.log(data)
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({
                message: "Could not fetch a list of pets",
                error: err
            })
        });
});

// GET - get single pet -------------------------------------------------------
router.get('/', (req, res) => {
  // validate request
  console.log(req.body)
  if(Object.keys(req.body).length === 0) {   
    return Pet.find()
      .then(pets => {
            if(pets == null) {
            return res.status(404).json({
              message: "No pets found"
            })
          }
          res.json(pets)
        })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: "Problem getting pets"
        })
      })
    }

    Pet.findOne({petName: req.body.petName})
    .then(pet => {
        res.json(pet)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: "Could not find pet",
          error: err
        })
      })
  })

  // GET - get single pet -------------------------------------------------------
  router.get('/:petName', (req, res) => {
  // validate request
  console.log(req.params.petName)
    Pet.findOne({petName: req.params.petName})
    .then(pet => {
        res.json(pet)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: "Could not find pet",
          error: err
        })
      })
  })


// PUT - update pet ---------------------------------------------
// router.put('/:petName', (req, res) => {
//     // validate request
//     if (!req.body) return res.status(400).send("Task content can't be empty")
//
//     let imageFilename = null
//
//     // if avatar image exists, upload!
//     if (req.files && req.files.image) {
//         // upload avater image then update pet
//         let uploadPath = path.join(__dirname, '..', 'public', 'images')
//         Utils.uploadFile(req.files.image, uploadPath, (uniqueFilename) => {
//             imageFilename = uniqueFilename
//             // update pet with all fields including avatar
//             updatePet({
//                 petName: req.body.petName,
//                 petType: req.body.petType,
//                 age: req.body.age,
//                 breed: req.body.breed,
//                 sex: req.body.sex,
//                 weight: req.body.weight,
//                 colour: req.body.colour,
//                 activities: req.body.activities,
//                 personality: req.body.personality,
//                 preferredFamily: req.body.preferredFamily,
//                 preferredLiving: req.body.preferredLiving,
//                 thingsToAvoid: req.body.thingsToAvoid,
//                 bio: req.body.bio,
//                 image: imageFilename
//             })
//         })
//     } else {
//         // update pet without image
//         updatePet({
//             petName: req.body.petName,
//             type: req.body.type,
//             age: req.body.age,
//             breed: req.body.breed,
//             sex: req.body.sex,
//             weight: req.body.weight,
//             colour: req.body.colour,
//             activities: req.body.activities,
//             personality: req.body.personality,
//             preferredFamily: req.body.preferredFamily,
//             preferredLiving: req.body.preferredLiving,
//             thingsToAvoid: req.body.thingsToAvoid,
//             bio: req.body.bio
//         })
//     }
//
//     // update Pet
//     function updatePet(update) {
//         Pet.findByIdAndUpdate(req.params.id, update, {new: true})
//             .then(pet => res.json(pet))
//             .catch(err => {
//                 res.status(500).json({
//                     message: 'Problem updating pet',
//                     error: err
//                 })
//             })
//     }
// })

// POST - create new pet --------------------------------------
router.post('/', (req, res) => {

    // validate request
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({message: "Pet content can not be empty"})
    }

    // check account with name doen't already exist
    Pet.findOne({petName: req.body.petName})
        .then(async pet => {
            if (pet != null) {
                return res.status(400).json({
                    message: "Pet name already in use, please create a unique name such as Roxie_2019"
                })
            }

            let newPet = new Pet(req.body)

            if (req.files && req.files.image) {
                newPet.photoData = req.files.image.data;
                newPet.photoContentType = req.files.image.mimetype;
            } else {
                newPet.photoData = null;
                newPet.photoContentType = null;
            }

            newPet.save()
                .then(pet => {
                    return res.status(201).json(pet)
                })
                .catch(err => {
                    return res.status(500).send({
                        message: "Problem creating pet profile",
                        error: err
                    })
                })
        })
})

module.exports = router