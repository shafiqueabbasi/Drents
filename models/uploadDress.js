const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Define Model
const uploadDressSchema = new Schema({
  productName:{ type:String },
  detailName:{ type:String },
  description:{ type:String },
  priceDay:{ type:String },
  details:{type:Array},
  sizes:{ type:Array },
  fileList:{ type:Array },
  userId:{ type:String },
  tags:{ type:Array },
  from:{ type:String },
  to:{ type:String },
  weather:{ type:String },
  background:{ type:String },
  bodyType:{ type:String }
});

//model class
const ModelDressClass = mongoose.model('uploadDress',uploadDressSchema);

//export model
module.exports = ModelDressClass;
