const Authentication = require('./controllers/authentication');
const UploadDress = require('./controllers/uploadDress');
const profileUpload = require('./controllers/profile');
const getDresses = require('./controllers/getDresses');
const passportService = require('./services/passport');
const passport = require('passport');
const reviewPost = require('./controllers/reviewModal');
const requireAuth = passport.authenticate('jwt', { session:false });
const requireSignin = passport.authenticate('local', {session:false});

module.exports = function(app){
  app.get('/',requireAuth, function(req, res){
    res.send({hi:'there'});
  });
  //post routes
  app.post('/signin',requireSignin, Authentication.signin);
  app.post('/signup',Authentication.signup);
  app.post('/uploaddress', requireAuth, UploadDress.uploaddress);
  app.post('/uploadprofile',requireAuth, profileUpload.profileUpload);
  app.post('/comparepassword',Authentication.comparePassword);
  app.post('/changepassword',Authentication.changePassword);
  app.post('/postreview',reviewPost.uploadReview);

  //get routes
  app.get('/getdresses',getDresses.getdress);
}
