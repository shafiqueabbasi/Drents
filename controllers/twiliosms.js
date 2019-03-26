const twilio = require('twilio');



exports.twilioSms = function(req, res, next){
  var accountSid = 'AC2d7daf51473bbeb1adb316e08dcb6074'; // Your Account SID from www.twilio.com/console
var authToken = 'e24ea9d0bf757e890decce1224cce314';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Drent testing message',
    to: '+923412346257',  // Text this number
    from: '+12016361763' // From a valid Twilio number
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
