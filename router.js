const Authentication = require('./controllers/authentication');
const UploadDress = require('./controllers/uploadDress');
const profileUpload = require('./controllers/profile');
const getDresses = require('./controllers/getDresses');
const getReview = require('./controllers/getreview');
const checkout = require('./controllers/stripecheckout');
const orderBooking = require('./controllers/orderbooking');
//const socialAuthenticationUser = require('./controller/')
const passportService = require('./services/passport');
const passport = require('passport');
const getprofileanddress = require('./controllers/getprofiledress');
const reviewPost = require('./controllers/reviewModal');
const requireAuth = passport.authenticate('jwt', { session:false });
const requireSignin = passport.authenticate('local', {session:false});

module.exports = function(app){

  //post routes
  app.post('/signin',requireSignin, Authentication.signin);
  app.post('/signup',Authentication.signup);
  app.post('/socialauth',Authentication.socialAuthentication);
  // app.post('/uploaddress', requireAuth, UploadDress.uploaddress);
  app.post('/uploaddress', UploadDress.uploaddress);
  app.post('/uploadprofile',requireAuth, profileUpload.profileUpload);
  app.post('/comparepassword',Authentication.comparePassword);
  app.post('/changepassword',Authentication.changePassword);
  app.post('/postreview', requireAuth, reviewPost.uploadReview);
  app.post('/charge',checkout.charge);
  app.post('/getprofiledress', getprofileanddress.getdressProfile);
  app.post('/orderdetail', requireAuth, orderBooking.checkoutorder);
  app.post('/forgotpassword',Authentication.forgotPassword);
  app.post('/changePassword',Authentication.changePassword);
  //get routes
  app.get('/getdresses',getDresses.getdress);
  app.get('/getreview',getReview.getreview);
  app.get('/key',checkout.getApiKey);
  app.get('/verify',Authentication.verifyAccount);
  app.get('/reset',Authentication.reset);

  //app.get('/getprofile',requireAuth, getprofile.getProfile)
}
