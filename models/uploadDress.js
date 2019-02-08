const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Define Model
const uploadDressSchema = new Schema({
  productName:{ type:String },
  detailName:{ type:String },
  description:{ type:String },
  price:{ type:String },
  details:{type:Array},
  sizes:{ type:Array },
  imgArray:{ type:Array },
  userId:{ type:String },
});

//model class
const ModelDressClass = mongoose.model('uploadDress',uploadDressSchema);

//export model
module.exports = ModelDressClass;
