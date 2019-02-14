const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//Define model
const reviewSchema = new Schema({
  userId:{ type:String },
  size:{ type:String },
  wear:{ type:String, unique:true },
  name:{ type:String },
  rate:{ type:String },
  msg:{ type:String },
  img:{ type:Array },
  email:{ type:String},
  date:{ type:String }
});


//model class
const ModelClass = mongoose.model('review',reviewSchema);

//export model
module.exports = ModelClass;
