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
    priceDay:dressupload.priceDay,
    details:dressupload.details,
    fileList:dressupload.fileList,
    sizes:dressupload.sizes,
    tags:dressupload.tags,
    from:dressupload.from,
    to:dressupload.to,
    weather:dressupload.weather,
    background:dressupload.background,
    bodyType:dressupload.bodyType,
    userId:dressupload.userId
  });

  postDressData.save(function(err){
    if(err){ return next(err); }
  });
  //Respond to request indicating user was created
  res.json({
    code:200,
    data:'data saved successfully'
  });
}
