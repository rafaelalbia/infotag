const express = require('express')
const Twit = require('twit')
const app = express();
const watsonApiKey = require('./watson-nlu.json').apikey
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1')
const { IamAuthenticator } = require('ibm-watson/auth')
const passport = require('passport');
const Strategy = require('passport-twitter').Strategy;
const session = require('express-session');

//
passport.use(new Strategy({
  consumerKey: 'FUXg6C6ik0ONKmdamc2KSZvPn',
  consumerSecret: 'uRmAuqlTTqm5BTXb9Q2q99ataDRom3ZpXHuH0vu4pQJKfuKJSb',
  callbackURL: 'http://localhost:4000/panel'
}, function(token, tokenSecret, profile, callback) {
  return callback(null, profile);
}));

//
passport.serializeUser(function(user, callback) {
  callback(null, user);
})

//
passport.deserializeUser(function(obj, callback) {
  callback(url, obj);
})

//
const nlu = new NaturalLanguageUnderstandingV1({
    authenticator: new IamAuthenticator({ apikey: `${watsonApiKey}` }),
    version: '2018-04-05',
    serviceUrl: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com'
});

//
var T = new Twit({
  consumer_key: 'FUXg6C6ik0ONKmdamc2KSZvPn',
  consumer_secret: 'uRmAuqlTTqm5BTXb9Q2q99ataDRom3ZpXHuH0vu4pQJKfuKJSb',
  access_token: '1395470197310595079-2cZnZMYD9eIAp5nKOieP6mJkR9hCTM',
  access_token_secret: 'bPNiQxLBnOAOtuTNR3S2pcr8TOiqD7gD3kfNV8LuHpSQB',
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
})

// 
T.get('search/tweets', { q: '#tesla', count: 5 }, function(err, data, response) {
  const tweets = data.statuses.map(tweet => tweet.text);

  for(let eachText of tweets) {
    nlu.analyze({
      text: eachText,
      features: {
        sentiment: {}
      }
    })
    .then(response => {
      console.log(JSON.stringify(response.result, null, 2));
    })
    .catch(err => {
      console.log('error: ', err);
    });
  }
})

app.use(passport.initialize());
app.use(passport.session());

//
app.use(session(
  {secret: 'whatever',
   resave: true,
   saveUninitialized: true
}))

app.get('/', function(request, response) {
  response.render('index');
})

app.get('/login', passport.authenticate('twitter'))
app.get('/panel', passport.authenticate('twitter', {
  failureRedirect: '/'
}), function(request, response) {
  response.redirect('/')
})

app.listen(4000)