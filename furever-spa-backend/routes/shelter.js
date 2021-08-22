const express = require('express')
const router = express.Router()
const Utils = require('./../utils')
const Pet = require('./../models/Pet')
const User = require('../models/User')
const path = require('path')


// GET- get all pets ---------------------------
router.get('/', Utils.authenticateToken, (req, res) => {

  User.findById(req.user._id)
    .then(user => {
      Pet.find({user: user._id}).lean()
        .then(pets => {
            if(pets == null){
            return res.status(404).json({
              message: "No pet found"
            })
          }
          res.json(pets)
        })
        .catch(err => {
          console.log(err)
          res.status(500).json({
            message: "Problem getting pet"
          })
        })
    .catch(err => {
      console.log(err)
      res.status(500).json({ 
        message: "Couldn't get user",
        error: err
      })
    })  
  })
})

// export
module.exports = router