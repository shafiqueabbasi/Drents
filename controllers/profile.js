const profile = require('../models/profile');


exports.profileUpload = function(req, res, next){
    const profileData = req.body;

    if(!profileData){
      return res.status(422).send({error:'you must provide data to save'})
    }

    const postProfileData = new profile({
      firstName:profileData.firstName,
      lastName:profileData.lastName,
      email:profileData.email,
      inputHeight:profileData.inputHeight,
      weight:profileData.weight,
      bustSize:profileData.bustSize,
      bodyType:profileData.bodyType,
      occassionAttendMost:profileData.occassionAttendMost,
      typicalJeanSize:profileData.typicalJeanSize,
      bust:profileData.bust,
      hips:profileData.hips,
      torso:profileData.torso,
      ribcage:profileData.ribcage,
      height:profileData.height,
      userId:profileData.userId
    });

    //save profile data save
    postProfileData.save(function(err, doc){
      if(err){ return next(err); }
    });

    //Respond to request indicating user was created
    res.json({
      code: 200,
      data:'Profile saved successfully'
    });
}
