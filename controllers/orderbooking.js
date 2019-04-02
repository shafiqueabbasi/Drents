const checkoutBooking = require('../models/checkout');


exports.checkoutorder = function(req,res,next){
    const orderDetails = req.body;

    if(!orderDetails){
      return res.status(422).send({error:'you must provide data to save'})
    }
    //if a user with email does not exit, create and save user


      const postorderdetail = new checkoutBooking({
        userId:orderDetails.userId,
        products:orderDetails.products,
        email:orderDetails.email,
        name:orderDetails.name,
        date:orderDetails.date,
        amount:orderDetails.amount,
        reviewId:orderDetails.reviewId
      });

      postorderdetail.save(function(err){
        if(err){ return next(err); }
      });
      //Respond to request indicating user was created
      res.json({
        code:200,
        data:'order detail saved successfully'
      });

}
