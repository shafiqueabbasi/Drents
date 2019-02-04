const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Define Model
const uploadDressSchema = new Schema({
  productName:{ type:String },
  detailName:{ type:String },
  Description:{ type:String },
  Price:{ type:String },
  Details:{type:Array},
  Sizes:{ type:Array },
  imgArray:{ type:String },
  userId:{ type:String },
});

//model class
const ModelDressClass = mongoose.model('uploadDress',uploadDressSchema);

//export model
module.exports = ModelDressClass;
