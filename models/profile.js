const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//Define model
const profileSchema = new Schema({
  firstName:{ type:String },
  lastName:{ type:String },
  email:{ type:String, unique:true },
  height:{ type:String },
  weight:{ type:String },
  bustSize:{ type:String },
  bodyType:{ type:String },
  occassionAttendMost:{ type:String},
  typicalJean:{ type:String},
  bust:{ type:String },
  hips:{ type:String },
  torso:{ type:String },
  ribcage:{ type:String },
  heightLength:{ type:String },
});


//model class
const ModelClass = mongoose.model('profile',profileSchema);

//export model
module.exports = ModelClass;
