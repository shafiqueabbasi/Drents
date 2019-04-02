const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//Define model
const reviewSchema = new Schema({
  rentalId:{ type:String }, 
  rentedId:{ type:String }, 
  rentedName:{ type:String }, 
  rentalName:{ type:String },
  size:{ type:String },
  wear:{ type:String},
  name:{ type:String },
  rate:{ type:String },
  msg:{ type:String },
  img:{ type:Array },
  email:{ type:String},
  date:{ type:String },
  productId:{ type:String }
});


//model class
const ModelClass = mongoose.model('review',reviewSchema);

//export model
module.exports = ModelClass;


// userId:{ type:String },
//   size:{ type:String },
//   wear:{ type:String},
//   name:{ type:String },
//   rate:{ type:String },
//   msg:{ type:String },
//   img:{ type:Array },
//   email:{ type:String},
//   date:{ type:String },
//   productId:{ type:String }