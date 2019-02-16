const profile = require('../models/profile');
const UploadDress = require('../models/uploadDress');

exports.getdressProfile = function(req,res,next){
  var userId = req.body.userId;
  UploadDress.find({"userId":userId},function(err,allDress){
    var allDress = allDress;
    if(err){
      return res.status(422).send({error:'No dress data to show'})
    }
    profile.find({"userId":userId},function(err,specificProfile){
      if(err){
        return res.status(422).send({error:'No Profile Found!'})
      }
      res.send({
        code:200,
        msg:'show profile and dress',
        profile:specificProfile,
        dress:allDress
      })
    });
  });


}
