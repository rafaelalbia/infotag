const express = require('express');
const app = express();
const Twit = require('twit');
const NaturalLanguageUnderstanding = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

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
  consumer_key: '8w23YM4JRsWWd8Jp7vFoo9mSv',
  consumer_secret: 'll7l49FHT6bqWEZPgq7lISoLcWXWx3lV17Uha1rRWsRsCCfpFR',
  access_token: '1395470197310595079-f0H7eAfPaVdaY1hOOzoqywmFBnYGPc',
  access_token_secret: 'G103eIyQajJzfxITo8qIh9SGVBYEPnnrru4NGrjKbLAQq',
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
})

/*
  Will search for a hashtag and get 5 tweets (related to it).
*/
function searchForHashtags(hashtag) {
  T.get('search/tweets', { q: `#${hashtag}`, count: 5 }, function(err, data, response) {
    const tweets = data;
      return tweets;
  });
}

/*
  A variable with the texts of the tweets will be created.
  After that a loop of repetition will allow IBM Watson (Natural Language Understanding),
  to analyze the feelings of the texts.
*/
async function fetchWatsonAndReturnKeywords(hashtag) {
  return new Promise((resolve, reject) => {
    const tweetsText = searchForHashtags(hashtag).statuses.map(tweet => tweet.text);
  
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
      
      const sentiments = response.sentiment.map((sentiment) => {
        return sentiment.text
      })

      resolve(sentiments);
    };
  });
};

module.export = searchForHashtags,fetchWatsonAndReturnKeywords;