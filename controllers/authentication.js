const jwt  = require('jwt-simple');
const User = require('../models/user')
const config = require('../config');

//creting token for user or through user.id
function tokenForUser(user){
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}
exports.signin = function(req, res, next){
  //user has already had their email and password auth'd
  //we just need to give them a token
  res.send({token: tokenForUser(req.user) });
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
