const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Define Model
const uploadDressSchema = new Schema({
  products:{type:Array},
  name:{ type:Stirng },
  email:{ type:Stirng },
  userId:{ type:Stirng },
  date:{ type:Stirng },
  amount:{ type:Stirng },
});



//model class
const ModelDressClass = mongoose.model('checkout',check);

//export model
module.exports = ModelDressClass;
