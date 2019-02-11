const UploadDress = require('../models/uploadDress');


exports.uploaddress = function(req,res,next){
  const dressupload = req.body;
  //console.log(dressupload);
  if(!dressupload){
    return res.status(422).send({error:'you must provide data to save'})
  }
  //if a user with email does not exit, create and save user
  
  const postDressData = new UploadDress({
    productName:dressupload.productName,
    detailName:dressupload.detailName,
    description:dressupload.description,
    price:dressupload.price,
    details:dressupload.details,
    imgArray:dressupload.img,
    sizes:dressupload.sizes
  });

  postDressData.save(function(err){
    if(err){ return next(err); }
  });
  //Respond to request indicating user was created
  res.json({
    data:'data saved successfully'
  });
}
