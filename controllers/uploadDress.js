const UploadDress = require('../models/uploadDress');


exports.uploaddress = function(req,res,next){
  const dressupload = req.body;
  //console.log(dressupload);
  if(!dressupload){
    return res.status(422).send({error:'you must provide data to save'})
  }
  //if a user with email does not exit, create and save user
  if(dressupload.id == ''){
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
else if(dressupload != ''){
  dressupload.find({"_id":dressupload.id},function(err,data){
    data.productName=dressupload.productName,
    data.detailName=dressupload.detailName,
    data.description=dressupload.description,
    data.priceDay=dressupload.priceDay,
    data.details=dressupload.details,
    data.fileList=dressupload.fileList,
    data.sizes=dressupload.sizes,
    data.tags=ressupload.tags,
    data.from=dressupload.from,
    data.to=dressupload.to,
    data.weather=dressupload.weather,
    data.background=dressupload.background,
    data.bodyType=dressupload.bodyType,
    data.userId=dressupload.userId
  })
  dressupload.save(function(err,savingdata){
    if(err){
      return res.status(422).send({error:'Not updated'})
    }
    //Respond to request indicating user was created
    res.send({
      code:200,
      data:'data updated successfully'
    });
  })
}
}
