const review = require('../models/postreviewSchema');
const _ = require("underscore");

exports.uploadReview = function(req,res,next){
  console.log(req.body)
  const reviewPost = req.body;
  //console.log(reviewPost);
  if(!reviewPost){
    return res.status(422).send({error:'you must provide data to save'})
  }
  //if a user with email does not exit, create and save user
    if(reviewPost._id == ''){
      console.log('if not idddddd')
        const postReviewData = new review({
            rentedEmail: reviewPost.rentedEmail,
            rentedSize: reviewPost.rentedSize,
            rentedWear: reviewPost.rentedWear,
            rentedMsg: reviewPost.rentedMsg,
            rentedRate: reviewPost.rentedRate,
            rentedImg: reviewPost.rentedImg,
            rentedId: reviewPost.rentedId,
            rentedName: reviewPost.rentedName,
            rentedDate: reviewPost.rentedDate,
            productId: reviewPost.productId
        });

        postReviewData.save(function(err, doc){
            if(err){ return next(err); }
        
            //Respond to request indicating user was created
            res.json({
                code:200,
                data: doc._id,
                msg:'Review saved successfully'
            });
        });
    }else if(reviewPost._id != ''){
        console.log(reviewPost, 'if id exists')
        review.updateMany(
            {"_id":reviewPost._id},
            {$set: _.omit(reviewPost, '_id')},
            {multi:true}
        ).then((doc) => {
            console.log(doc, 'docccccccccccccccccccccccccccccc')
            res.send({
                code:200,
                data: reviewPost._id,
                msg:'Review updated successfully'
            });
        }).catch(() => res.status(422).send({msg:'okay'}));
    }    
}
