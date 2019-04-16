const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//Define model
const profileSchema = new Schema({
  firstName:{ type:String },
  lastName:{ type:String },
  bio:{ type:String },
  email:{ type:String, unique:true },
  inputHeight:{ type:String },
  weight:{ type:String },
  bustSize:{ type:String },
  bodyType:{ type:String },
  occassionAttendMost:{ type:String},
  typicalJeanSize:{ type:String},
  bust:{ type:String },
  hips:{ type:String },
  torso:{ type:String },
  updatedImage:{ type:String},
  ribcage:{ type:String },
  height:{ type:String },
  userId:{ type:String },
  profileId:{ type:String },
  createdAt:{ type:String },
});


//model class
const ModelClass = mongoose.model('profile',profileSchema);

//export model
module.exports = ModelClass;
