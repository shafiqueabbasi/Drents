const keys = require('../config/keys');
const stripe = require("stripe")(keys.stripeSecretKey);


exports.charge = async function(req,res,next){
  let data = req.body.body;
    console.log(data.name, data.email, data.amount, 'sab k sab')
    try {
      let {status} = await stripe.charges.create({
        amount: Math.round(data.amount*139),
        currency: "usd",
        //description: "An example charge",
        source: data.token
      });
      res.json({status});
    } catch (err) {
      console.log(err,'eeeeerrrrrrrr')
      res.status(500).end();
    }
  };



exports.getApiKey = function(req,res,next){
  var publicKey = String(keys.stripePulishableKey)
  console.log(publicKey,'with string')
  console.log(keys.stripePulishableKey,'without string')
  
res.send({
  keys:publicKey
})
}
