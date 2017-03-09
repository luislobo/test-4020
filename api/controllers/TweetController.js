/**
 * TweetController
 *
 * @description :: Server-side logic for managing Tweets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var _ = require('lodash');

module.exports = {
  replySent: function (req, res) {

    function update(tweet) {
      if (_.isEmpty(tweet.reply)) {
        tweet.reply = [replyBlock];
      } else {
        tweet.reply.push(replyBlock);
      }
      tweet.date_replied = new Date();
      console.log('before saving');
      tweet.save(function (err) {
        if (err) return res.serverError(err);
        return res.ok('Success!');
      });
    }

    var params = req.params.all();
    var tweetID = params.tweetID;
    var reply = params.reply;

    var replyBlock = {
      date_replied: new Date(),
      content: reply
    };

    Tweet.findOne({'tweet_id': 'c'})
      .exec(function (err, tweet) {
        if (err) {
          return res.serverError(err);
        } else {
          if(!tweet) {
            Tweet.create({tweet_id:'c', date_published: new Date()}).exec(function(err,tweet){
              update(tweet)
            })
          } else {
            update(tweet)
          }

        }
      });
  }
};

