const twilio = require('twilio');



exports.twilioSms = function(req, res, next){
  var accountSid = 'ACc61df5933ded243c57059f573b13fa4b'; // Your Account SID from www.twilio.com/console
var authToken = '8c134331cf082a979fb05cdd842db101';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Drent testing message',
    to: '+923412346257',  // Text this number
    from: '+12028314091' // From a valid Twilio number
})
.then((message) =>{
  res.send({
    code:200,
    MsgId:message.sid,
    message:message
  })
  console.log(message.sid)

});
}
