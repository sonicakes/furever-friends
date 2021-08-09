const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('../utils')

// schema
const petSchema = new mongoose.Schema({
  petName: {
    type: String,
    require: true
  },
  petType: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  breed: {
    type: String,
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
    type: Array,
  },
  personality: {
    type: Array,
  },
  preferredFamily: {
    type: String,    
  },
  preferredLiving: {
    type: Array,    
  },
  thingsToAvoid: {
    type: Array,    
  },
  bio: {
    type: String,
    require: true   
  },
  imageFilename: {
    type: String,
  }
}, { timestamps: true })

// model
const petModel = mongoose.model('Pet', petSchema)

// export
module.exports = petModel