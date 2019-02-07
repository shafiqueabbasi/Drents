const Authentication = require('./controllers/authentication');
const UploadDress = require('./controllers/uploadDress');
const profileUpload = require('./controllers/profile');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session:false });
const requireSignin = passport.authenticate('local', {session:false});

module.exports = function(app){
  app.get('/',requireAuth, function(req, res){
    res.send({hi:'there'});
  });
  app.post('/signin',requireSignin, Authentication.signin);
  app.post('/signup',Authentication.signup);
  app.post('/uploaddress',UploadDress.uploaddress);
  app.post('/uploadprofile',profileUpload.profileUpload);

  app.post('/comparepassword',Authentication.comparePassword);
  app.post('/changepassword',Authentication.changePassword);
}
