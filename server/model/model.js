const mongoose = require('mongoose')
var schema = new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true, unique:true},
  age:{type:String, required:true, trim:true},
  gender:String,
  status:String
});

module.exports = mongoose.model('usercrud', schema);