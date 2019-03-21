const UploadDress = require('../models/uploadDress');


exports.uploaddress = function(req,res,next){
  const dressupload = req.body;
  //console.log(dressupload);
  if(!dressupload){
    return res.status(422).send({error:'you must provide data to save'})
  }
  //if a user with email does not exit, create and save user
  if(dressupload._id == ''){
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
  res.send({
    code:200,
    data:'data saved successfully'
  });

}
else if(dressupload._id != ''){
  console.log(dressupload._id);
  UploadDress.find({"_id":dressupload._id},function(err,existingDress){
    console.log(existingDress);
    existingDress.productName=dressupload.productName;
    existingDress.detailName=dressupload.detailName;
    existingDress.description=dressupload.description;
    existingDress.priceDay=dressupload.priceDay;
    existingDress.details=dressupload.details;
    existingDress.fileList=dressupload.fileList;
    existingDress.sizes=dressupload.sizes;
    existingDress.tags=dressupload.tags;
    existingDress.from=dressupload.from;
    existingDress.to=dressupload.to;
    existingDress.weather=dressupload.weather;
    existingDress.background=dressupload.background;
    existingDress.bodyType=dressupload.bodyType;
    existingDress.userId=dressupload.userId;

    existingDress.save(function(err){
    if(err){
      return res.status(422).send({error:'Not updated'})
    }
    //Respond to request indicating user was created
    res.send({
      code:200,
      data:'data updated successfully'
    });
  })
  })

}
}
