const review = require('../models/reviewModal');


//get dreses for user with all
exports.getreview = function(req,res,next){
review.find(function(err,allreview){
  if(err){
    return res.status(422).send({error:'No dress data to show'})
  }
  if(allreview){
    res.send({
	    code:200,
	    allreview
    });
  }
})
}
