const review = require('../models/reviewModal');

exports.uploaddress = function(req,res,next){
  const reviewPost = req.body;
  //console.log(reviewPost);
  if(!reviewPost){
    return res.status(422).send({error:'you must provide data to save'})
  }
  //if a user with email does not exit, create and save user


    const postReviewData = new review({
      userId:reviewPost.userId,
      size:reviewPost.size,
      wear:reviewPost.wear,
      name:reviewPost.name,
      rate:reviewPost.rate,
      msg:reviewPost.msg,
      img:reviewPost.img,
      email:reviewPost.email
    });

    postReviewData.save(function(err){
      if(err){ return next(err); }
    });
    //Respond to request indicating user was created
    res.json({
      code:200,
      data:'Reviews saved successfully'
    });
}
