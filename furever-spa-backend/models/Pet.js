const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('../utils')

// schema
const petSchema = new mongoose.Schema({
  petName: {
    type: String,
    require: true
  },
  type: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  breed: {
    type: mongoose.SchemaTypes.Email,
    required: true    
  },
  sex: {
    type: String,
    required: true
  },
  weight: {
    type: String,
  },
  colour: {
    type: String,
  },
  activities: {
    type: String,
  },
  personality: {
    type: String,
  },
  preferredFamily: {
    type: String,    
  },
  preferredLiving: {
    type: String    
  }
}, { timestamps: true })

// model
const petModel = mongoose.model('Pet', petSchema)

// export
module.exports = petModel