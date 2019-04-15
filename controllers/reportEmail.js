const nodemailer = require('nodemailer');

/*==========email cradential========*/
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "drens224@gmail.com",
        pass: "drent1234"
    },
    tls: {
        rejectUnauthorized: false
    }
});
/*==========email cradential end====*/

exports.sendReportEmail = function(req,res,next){
    var getDressDetail = req.body;
    if(!getDressDetail){
        return res.status(422).send({error:'some sort of data missing'});
    }
    else if(getDressDetail){
        
    }
}
