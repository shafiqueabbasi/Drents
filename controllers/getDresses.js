const UploadDress = require('../models/uploadDress');


//get dreses for user with all
exports.getdress = function(req,res,next){
UploadDress.find(function(err,allDress){
  if(err){
    return res.status(422).send({error:'No dress data to show'})
  }
  if(allDress){
    res.json(allDress);
  }
})
}
