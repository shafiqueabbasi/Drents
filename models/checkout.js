const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Define Model
const orderDetailSchema = new Schema({
  products:{type:Array},
  name:{ type:String },
  email:{ type:String },
  userId:{ type:String },
  date:{ type:String },
  amount:{ type:String },
  reviewId:{type:String}
});



//model class
const ModelDressClass = mongoose.model('checkout',orderDetailSchema);

//export model
module.exports = ModelDressClass;
