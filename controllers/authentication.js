const jwt  = require('jwt-simple');
const User = require('../models/user')
const config = require('../config/config');
const bcrypt = require('bcrypt-nodejs');

//creting token for user or through user.id
function tokenForUser(user){
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}
exports.signin = function(req, res, next){
  //user has already had their email and password auth'd
  //we just need to give them a token
  res.send({
    token: tokenForUser(req.user),
    _id:req.user.id,
    email:req.user.email,
    firstName:req.user.firstname,
    lastName:req.user.lastname
  });
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
      const user = new User({
        email:email,
        password:password,
        firstname:firstname,
        lastname:lastname,
      });

      user.save(function(err){
        if(err){ return next(err); }
      });
      //Respond to request indicating user was created
      res.json({
        token:tokenForUser(user),
        username:user.firstname+''+user.lastname,
        userId:user._id
      });
    });
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

 // User.findOne({email:email},function(err,user){
 //   if(user){
 //     console.log(user);
 //     bcrypt.compare(password, user.password, function(err, isMatch){
 //       if(err){ return callback(err); }
 //       //callback(null, isMatch);
 //       if(isMatch){
 //         user.password = newPassword;
 //         user.save(function(err,doc){
 //           if(err){}
 //           res.send('password change');
 //         })
 //       }
 //       else{
 //         res.send({
 //           code:404,
 //           msg:'Current Password not match'
 //         })
 //       }
 //       console.log(isMatch);
 //     })
 //   }
 // })


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
