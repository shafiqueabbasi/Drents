const profile = require('../models/profile');


//get dreses for user with all
exports.getProfile = function(req,res,next){
profile.find({"userId":req.body.userId},function(err,specificProfile){
  if(err){
    return res.status(422).send({error:'No Profile Found!'})
  }
  if(specificProfile){
    res.send({
	    code:200,
	    specificProfile
    });
  }
  else{
    code:400,
    msg:'profile not found'
  }
})
}
