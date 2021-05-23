import express from '/express';
const app = express(), port = 3080;
import Twit from '/twit';
import NaturalLanguageUnderstanding from '/ibm-watson/natural-language-understanding/v1';
import { IamAuthenticator } from '/ibm-watson/auth';


/*
 IBM Watson API, Natural Language Understanding configuration
*/
const nlu = new NaturalLanguageUnderstanding({
  authenticator: new IamAuthenticator({ apikey: 'CW-B_O2VgWybE2QMJOnsf8kPYFTH5OIQ8YLWNU-TijJD' }),
  version: '2018-04-05',
  serviceUrl: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com'
});

/*
 Twiter API, Twit configuration
*/
var T = new Twit({
  consumer_key: '9biplgXRTucIdAzTB2zLOJcAF',
  consumer_secret: 'a6HYlPcDgWHFOXCIGiZsXRZieCriqHq5E4tBn7wkdHTLBrNcWO',
  access_token: '1395470197310595079-3Llo9Dalpd7rcUGFkqGUtc1NZK40H2',
  access_token_secret: '4OL9viqF6PSSLtBzP5027s38exJniXh8OTDVzkDr6wbMY',
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
})

/*
  Will search for a hashtag and get X tweets (related to it).
  A variable with the texts of the tweets will be created.
  After that a loop of repetition will allow IBM Watson (Natural Language Understanding),
  to analyze the feelings of the texts.
*/
T.get('search/tweets', { q: '#tesla', count: 5 }, function(err, data, response) {
  const tweetsText = data.statuses.map(tweet => tweet.text);

  for(let eachText of tweetsText) {
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

app.listen(port);

