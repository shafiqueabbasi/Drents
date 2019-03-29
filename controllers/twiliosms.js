const twilio = require('twilio');
const checkoutBooking = require('../models/checkout');


exports.twilioSms = function(req, res, next){
  var accountSid = 'ACc61df5933ded243c57059f573b13fa4b'; // Your Account SID from www.twilio.com/console
var authToken = '8c134331cf082a979fb05cdd842db101';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
var data = req.body;
console.log(data, 'dataaaaaaaaa')


checkoutBooking.findOne({
   "_id": data.dataId
}).then((response) => {
    console.log(response, 'responseeee')
    response.products = response.products.map((elem) => {
        if(elem._id == data.productId){
            let obj = {
                rentalStage: data.rentalStage,
                rentedStage: data.rentedStage
            }
            return {...elem, ...{rentalStage: data.rentalStage}}
        }
        return elem
    })
    response.save((err, resp) => {
        console.log(response, 'kia aay bhaiiiiii')
        res.send({
            code:200,
            data:'data updated successfully'
        });
    })
}).catch((err) => {
    console.log(err, 'errrrrrrrr')
})




// client.messages.create({
//     body: 'Hello from Drent testing message',
//     to: '+923412346257',  // Text this number
//     from: '+12028314091' // From a valid Twilio number
// })
// .then((message) =>{
//   res.send({
//     code:200,
//     MsgId:message.sid,
//     message:message
//   })
//   console.log(message.sid)

// });

}





// checkoutBooking.updateMany(
//     { "_id": data.dataId },
//     { $set: { "products.$[product].rentalStage" : data.rentalStage }},
//     { arrayFilters : [{"product._id" : { $eq: data.productId }}],
//      multi: true }
// ).then((response) => {
  // console.log(response, 'responseeee')
  //   res.send({
  //       code:200,
  //       data:'data updated successfully'
  //   });
// }).catch((err) => {
//   console.log(err, 'err')
//   res.status(422).send({msg:'okay'})
// });
