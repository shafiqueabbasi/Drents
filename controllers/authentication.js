const jwt  = require('jwt-simple');
const User = require('../models/user');
const moment = require('moment');
const crypto = require('crypto');
const socialAuthentication = require('../models/socialauthentication');
const config = require('../config/config');
const bcrypt = require('bcrypt-nodejs');
const nodemailer = require('nodemailer');

//creting token for user or through user.id
function tokenForUser(user){
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

function tokenForSocialUser(usersocial){
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: usersocial.userId, iat: timestamp }, config.secret);
}

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
var rand,mailOptions,host,link;

exports.socialAuthentication = function(req,res,next){
  //var socialObject = req.body;
  var userauthsocial = req.body;
  const email = req.body.email;
  const name = req.body.name;
  const userId = req.body.userId;

  if(!email || !userId){
    return res.status(422).send({error:'you must provide email and userId'})
  }

  //see if a user given email exist show error
    socialAuthentication.findOne({userId:userId},function(err,existingUser){
      if(err){ return next(err); }
      //if a user with email does exit, return a error
      if(existingUser){
      return res.status(200).send({
          token: tokenForSocialUser(req.body),
          _id:req.body.userId,
          email:req.body.email,
          name:req.body.name
        });
      }
      //if a user with email does not exit, create and save user
      const usersocialauth = new socialAuthentication({
        email:email,
        name:name,
        userId:userId
      });

      usersocialauth.save(function(err){
        if(err){ return next(err); }
      });
      //Respond to request indicating user was created
      res.json({
        token:tokenForSocialUser(userauthsocial),
        username:userauthsocial.name,
        _id:userauthsocial.userId
      });
    });


}


exports.signin = function(req, res, next){
  //user has already had their email and password auth'd
  //we just need to give them a token
  var user = req.body.email;
  User.findOne({email:user},function(err,user){
    console.log(user);
    if(user){
      //var username = user.firstname +''+ user.lastname;
      res.send({
        token: tokenForUser(req.user),
        _id:req.user.id,
        email:req.user.email,
        username:user.firstname +''+ user.lastname
      });
    }
  })

}


exports.signup = function(req, res, next){
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;

  if(!email || !password){
    return res.status(422).send({error:'you must provide email and password'})
  }

  //see if a user given email exist show error
    User.findOne({email:email},function(err,existingUser){
      if(err){ return next(err); }
      //if a user with email does exit, return a error
      if(existingUser){
        return res.status(422).send({error:'Email in use'});
      }
      //if a user with email does not exit, create and save user
        rand=Math.floor((Math.random() * 100) + 54);
      const user = new User({
        email:email,
        password:password,
        firstname:firstname,
        lastname:lastname,
        randomno:rand
      });

      user.save(function(err){
        if(err){ return next(err); }
      });
      //=========user email send to perticular client start=============//

  host=req.get('host');
  link=req.protocol+"://"+req.get('host')+"/verify?email="+email+"&&id="+rand;
  mailOptions={
    to : email,
    subject : "Please confirm your Email account",
    html : `<html style="opacity: 1;font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;box-sizing: border-box;border: solid;"><head><title>Verify your Email Address</title></head><body style="width: 100% !important;height: 100%;margin: 0;line-height: 1.4;background-color: #F5F7F9;color: #555555;"><div class="email-di" style=" width:480px;margin:0 auto;padding:30px;"><table class="email" width="100%" cellpadding="0" cellspacing="0" style="width: 100%;margin: 0;padding: 0;background-color: #FFFFFF;"><tr><td align="center" style="border: 1px groove;color: grey"><table class="email-content" width="100%" cellpadding="0" cellspacing="0" style="width: 100%;margin: 0;padding: 0;"><tr><td><img src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1552902878/Drent-logo-white_hmbw7i.png" style="display: block;margin-left: auto;margin-right: auto;width:30%;height:30%"></td> </tr> <tr><td class="email-body" width="100%" style="width: 100%;margin: 0;padding: 0;border-top: 1px solid #FFFFFF;border-bottom: 1px solid #E7EAEC;background-color: #FFFFFF;"><table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" style="width: 570px;margin: 0 auto;padding: 0;"><tr><td class="content" style="padding: 35px;"><h1 style="margin-top: 0;color:#292E31;font-size: 19px;font-weight: bold;text-align: left;">Verify your email address</h1><p style="margin-top: 0;color: #555555;font-size: 16px;line-height: 1.5em;text-align: left;">Welcome to Drent! Please confirm your email account by clicking the button below</p><table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" style=" width: 100%;margin: 30px auto;padding: 0;text-align: center;"><tr><td align="center"><div> <a href="${link}" class="button button--blue" style="background-color: #8cbc40; display: inline-block;width: 200px;border-radius: 3px;color: #ffffff;font-size: 15px;line-height: 45px;text-align: center;text-decoration: underline;cursor:pointer;">Verify Email</a></div></td> </tr><p style="margin-top: 0;color: #555555;font-size: 16px;line-height: 1.5em;text-align: left;">Team Drent<br></p><tr><td>
                        <ul style="list-style-type: none;text-align: center;">
                            <li style="float: left;"><a href="#"><p style="align-content: left"><img class="social-icon" src="http://i.imgur.com/oyXO6zq.png" width="30" height="30"></p></a></li>
                            <li style="float: left;"><a href="#"><p class="text-center"><img class="social-icon" src="http://i.imgur.com/AJNmSZs.png" width="30" height="30"></p></a><li>
                            <li style="float: left;"><a href="#"><p class="text-center"><img class="social-icon" src="http://i.imgur.com/GLEVM7N.png" width="30" height="30"></p></a><li>
                      </ul>
                        </td>
                        </tr>
                        </table>
                     <table class="body-sub" style="margin-top: 25px;padding-top: 25px;border-top: 1px solid #E7EAEC;">
                      <tr>
                        <td>
                          <p class="sub" style="font-size: 12px;">Something not working? Please write to us at support@drent.com.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" style="width: 570px;margin: 0 auto;padding: 0;text-align: center;">
                <tr>
                  <td class="content-cell">
                    <p class="sub center" style="text-align:center;">
                     <img src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1552902878/Drent-logo-white_hmbw7i.png" style="display: block;margin-left: auto;margin-right: auto;width:30%;height:30%" />
                      <br>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</div>
</body>
</html>`

  }
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
          console.log(error);
    res.end("error");
   }else{
          console.log("Message sent: " + response.message);
          console.log("Message sent: " + response.message);
          res.end("sent");
       }
});


      //========user email send to perticular client end===============//

      //Respond to request indicating user was created
      res.json({
        token:tokenForUser(user),
        username:user.firstname+''+user.lastname,
        _id:user._id
      });
    });
}

exports.verifyAccount = async (req, res, next) => {
  let response = await User.findOne({email: req.query.email});
    console.log(req.protocol+":/"+req.get('host'));
    if((req.protocol+"://"+req.get('host'))==("http://"+host))
    {

        console.log("Domain is matched. Information is from Authentic email");
        if(req.query.id==response.randomno)
        {
            console.log(response.randomno +'randdddddddddddddd');
            console.log("email is verified");
            res.end(`<div style="margin:-8px">
            			<div  style="background-color:#c2073f;text-align:center">
            				<img src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1552902878/Drent-logo-white_hmbw7i.png" style="height:120px" />
            			</div>
            			<div style="text-align:center;background-image:url('../images/swrils.png')">
            				<h3 style="color:#c2073f">Thank You ${req.query.email} For Sign Up In Drents</h3>
            				<h4>Email is Verified</h4>
            				<img src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1552907380/email-conf-icons-smal_pe5m8b.png" style="height:420px;margin-top:-3%"/>
            			</div>
            		</div>`);
        }
        else
        {
            console.log("email is not verified");
            res.end("<h1>Bad Request</h1>");
        }
    }
    else
    {
        res.end("<h1>Request is from unknown source");
    }
}




exports.comparePassword = function(req, res, next){
  currentpassword = req.body.password;
  email = req.body.email;
  User.findOne({email:email},function(err,user){
    if(user){
      console.log(user);
      //const user = this;
      bcrypt.compare(currentpassword, user.password, function(err, isMatch){
        if(err){ return callback(err); }
        //callback(null, isMatch);
        if(isMatch){
          res.send({
            msg:'password Match',
            Match:isMatch
          })
        }
        else if(!isMatch){
          res.send({
            msg:'Not Match',
            Match:isMatch
          })
        }
        //console.log(isMatch);
      })
    }
  })
}

exports.changePassword = function(req, res, next){
    let email = req.body.email,
    password = req.body.currentPassword,
    newPassword = req.body.newPassword;
  let email = req.body.email;
  let password = req.body.currentPassword;
  let newPassword = req.body.newPassword;

    User.findOne({email:email},function(err,user){
        if(user){
            console.log(user);
            bcrypt.compare(password, user.password, function(err, isMatch){
                if(err){ return callback(err); }
                //callback(null, isMatch);
                if(isMatch){
                    user.password = newPassword;
                    user.save(function(err,doc){
                        if(err){}
                        res.send({
                            code:200,
                            msg:'Password Changed'
                        })
                    })
                }
                else{
                    res.send({
                        code:404,
                        msg:'Current Password not match'
                    })
                }
                console.log(isMatch);
            })
        }
    })
}

exports.forgotPassword = function(req, res, next){
  if (req.body.email === '') {
        res.status(400).send('email required');
    }
    var host = req.host,
    protocol = req.protocol;
    User.findOne({
        email: req.body.email,
    }).then((user) => {
        if (user === null) {
            res.send({
                code: 403,
                message: 'email not in db'
            })
        } else {
            const token = crypto.randomBytes(20).toString('hex');
            console.log(user)
            User.updateMany(
               {"_id": user._id},
               {$set: {'resetPasswordToken': token,'resetPasswordExpires':moment().format()}},{multi:true}).then(function(response){
                 console.log(response);
               })
                    const mailOptions = {
                        from: 'drens224@gmail.com',
                        to: req.body.email,
                        subject: 'Link To Reset Password',
                        text:
                          'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
                          + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
                          + `http://localhost:3000/reset/${token}\n\n`
                          + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',
                    };

                    smtpTransport.sendMail(mailOptions, (err, response) => {
                      if (err) {
                        res.send({
                            code: 404,
                            message: 'error'
                        })
                      } else {
                        res.send({
                            code: 200,
                            message: 'recovery email sent'
                        })
                      }
                    });
        }
    });
}

exports.reset = function(req, res, next){
  User.findOne({
      resetPasswordToken: req.query.resetPasswordToken
  }).then((user) => {
      if(user == null){
          res.send({
              code: 403,
              message: 'password reset link is invalid or has expired'
          });
      }
      var time = moment(user.resetPasswordExpires).fromNow();
      if (time == 'an hour ago' || time == "a few seconds ago" || (time.slice(time.indexOf(" ")+1, time.length)) == "minutes ago") {
          res.send({
              code: 200,
              email: user.email,
              message: 'password reset link a-ok',
          });
      } else {
          res.send({
              code: 403,
              message: 'password reset link is invalid or has expired'
          });
      }
  }).catch((err) => {
      res.send({
          code: 404,
          message: 'password reset link is invalid or has expired'
      })
    })

}
