const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//Define model
const reviewSchema = new Schema({
  rentedEmail:{ type:String },
  rentedSize:{ type:String },
  rentedWear:{ type:String },
  rentedMsg:{ type:String },
  rentedRate:{ type:String },
  rentedImg:{ type:String },
  rentedId:{ type:String },
  rentedName:{ type:String },
  rentedDate:{ type:String },
  rentalEmail:{ type:String },
  rentalSize:{ type:String },
  rentalWear:{ type:String },
  rentalMsg:{ type:String },
  rentalRate:{ type:String },
  rentalImg:{ type:String },
  rentalId:{ type:String },
  rentalName:{ type:String },
  rentalDate:{ type:String },
  productId:{ type:String }
});


//model class
const ModelClass = mongoose.model('reviewdata',reviewSchema);

//export model
module.exports = ModelClass;
