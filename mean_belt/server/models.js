var mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
  petname: {
      type: String,
      unique:true,
      required: true,
      minlength:[3,"PetName should have at least three characters"]
  },
  pettype:{
    type: String,
    required: true,
    minlength:[3,"Pet Type should have at least three characters"]
  },
  description:{
    type: String,
    required: true,
    minlength:[3,"Description not valid"]
  },
  skill1:{
    type: String,
  },
  skill2:{
    type: String,
  },
  skill3:{
    type: String,
  },
  votes:{
    type:Number, 
    default: 0
  }

}, {timestamps:true});



  mongoose.connect(
    'mongodb://localhost/mean_beltDB',
    errs => console.log(errs)
  );
  
  const Pets = mongoose.model('pet', PetSchema);
  PetSchema.plugin(unique,{message:"Need a unique Pet Name"})
  
  
  
  module.exports = Pets;


  