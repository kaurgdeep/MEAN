var mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

const QuoteSchema = new mongoose.Schema({
  quotename: {
      type: String,
      required: true,
      minlength:[3,"Quote should have at least three characters"]
  },
  votes:{
    type:Number, 
    default: 0
  }
}, {timestamps:true});


const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
        minlength:[3,"at least three characters"]
    },
    quotes:[QuoteSchema]
    // Quote:[{
    //   quotename: {
    //     type: String,
    //     required: true,
    //     minlength:[3,"Quote should have at least three characters"]
    // },
    // rating:{
    //   type:Number, 
    //   default: 0
    // }
    // }]
  }, {timestamps:true});
  
  mongoose.connect(
    'mongodb://localhost/authorsDB',
    errs => console.log(errs)
  );
  // const Quotes = mongoose.model('quote', QuoteSchema);
  const Authors = mongoose.model('author', AuthorSchema);
  AuthorSchema.plugin(unique,{message:"Need a unique value"})
  
  
  
  module.exports = Authors;
  // module.exports = Quotes;

  