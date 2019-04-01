const profile = require('../models/profile');
const UploadDress = require('../models/uploadDress');

exports.profileUpload = function(req, res, next){
    const profileData = req.body;

    if(!profileData){
      return res.status(422).send({error:'you must provide data to save'})
    }

    if(req.body.profileId == ''){
    const postProfileData = new profile({
      firstName:profileData.firstName,
      lastName:profileData.lastName,
      email:profileData.email,
      inputHeight:profileData.inputHeight,
      updatedImage:profileData.updatedImage,
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
      msg:'Profile saved successfully'
    });

  }//end if condition
  else if(req.body.profileId != ''){
    profile.findOne({"_id":req.body.profileId},function(err,existingProfile){
      if(err){
      return res.status(400).json({"Unexpected Error:: ": err});
    }//end err
      existingProfile.firstName = profileData.firstName;
      existingProfile.lastName = profileData.lastName;
      existingProfile.email =  profileData.email;
      existingProfile.inputHeight =profileData.inputHeight;
      existingProfile.weight =profileData.weight;
      existingProfile.bustSize = profileData.bustSize;
      existingProfile.bodyType = profileData.bodyType;
      existingProfile.updatedImage = profileData.updatedImage;
      existingProfile.occassionAttendMost = profileData.occassionAttendMost;
      existingProfile.typicalJeanSize = profileData.typicalJeanSize;
      existingProfile.bust = profileData.bust;
      existingProfile.hips = profileData.hips;
      existingProfile.torso = profileData.torso;
      existingProfile.ribcage = profileData.ribcage;
      existingProfile.height = profileData.height;
      existingProfile.userId = profileData.userId;


      existingProfile.save(function(err,doc){
     if(err){
       //console.log("profile update error::" :err);
       return res.status(400).json({"Unexpected Error::" :err});
     }
     console.log('Profile data has been updated');
     return res.send({
         code:200,
         msg:'Profile data updated successfully'
       });
   });

    })

  }
}
