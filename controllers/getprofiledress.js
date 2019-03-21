const profile = require('../models/profile');
const review = require('../models/postreviewSchema');
const checkoutBooking = require('../models/checkout');
const UploadDress = require('../models/uploadDress');

exports.getdressProfile = function(req,res,next){
  console.log(req.body, 'req.bodyyyyyy')
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
    review.find(function(err,specificProfileReview){
      console.log(specificProfileReview)
      if(err){
        return res.status(422).send({error:'No Review Found!'})
      }
      checkoutBooking.find(function(err,specificdressbooking){
        if(err){
          return res.status(422).send({error:'No Review Found!'})
        }

      if(specificProfile && allDress && specificProfileReview && specificdressbooking){
      res.send({
        code:200,
        msg:'show profile and dress',
        profile:specificProfile,
        dress:allDress,
        review:specificProfileReview,
        orderhistory:specificdressbooking
      })
    }
    if(!allDress && specificProfile){
      //console.log(helloo)
      res.send({
        code:200,
        msg:'show profile and dress',
        profile:[],
        dress:[]
      })
    }
  });
      });
    });
  });


}
