const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');



//Define model
const userSocialSchema = new Schema({
  email:{type:String, unique:true, lowercase:true},
  //password:{type:String},
  name:{type:String}
});



//model class
const ModelClass = mongoose.model('usersocialauthentication',userSocialSchema);

//export model
module.exports = ModelClass;
