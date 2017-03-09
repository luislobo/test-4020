/**
 * Tweet.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
/*

Using:

 module.exports = {
   attributes: {
     tweet_id: 'string',
     content: 'string',
     date_published: 'datetime',
     date_replied: 'datetime',
     reply: 'array'
   }
 };

First, create a tweet model with the

 $ sails console                                                                                                                                                                                                                                                                                                                                                   ⬡ 6.10.0

 info: Starting app in interactive mode...

 info: Welcome to the Sails console.
 info: ( to exit, type <CTRL>+<C> )

 sails> Tweet.create({tweet_id:'c', date_published: new Date()}).exec(console.log)

 See with mongo client or robomongo:

{
  "_id" : ObjectId("58c18a72d364e55f356f625c"),
  "tweet_id" : "c",
  "date_published" : ISODate("2017-03-09T17:01:38.110Z"), // this IS a DATE object
  "createdAt" : ISODate("2017-03-09T17:01:38.111Z"),
  "updatedAt" : ISODate("2017-03-09T17:01:38.111Z")
}

Then, go to: http://127.0.0.1:1337/tweet/replysent?tweetID=c

Robomongo shows:

{
  "_id" : ObjectId("58c18a72d364e55f356f625c"),
  "tweet_id" : "c",
  "date_published" : ISODate("2017-03-09T17:01:38.110Z"), // this IS a DATE object
  "createdAt" : ISODate("2017-03-09T17:01:38.111Z"),
  "updatedAt" : ISODate("2017-03-09T17:02:13.776Z"),
  "reply" : [
  {
    "date_replied" : "2017-03-09T17:02:13.771Z"  // this is NOT a DATE object
  }
],
  "date_replied" : ISODate("2017-03-09T17:02:13.774Z") // this IS a DATE object
}


 */


// now, using this "empty" model

module.exports = {
  attributes: {
    tweet_id: 'string',
    content: 'string',
    date_published: 'datetime',
    date_replied: 'datetime'
  }
};



/*

 sails> Tweet.create({tweet_id:'d', date_published: new Date()}).exec(console.log)
 {
 "_id" : ObjectId("58c18b9d60e6f0213a10b2b4"),
 "tweet_id" : "d",
 "date_published" : ISODate("2017-03-09T17:06:37.825Z"),
 "createdAt" : ISODate("2017-03-09T17:06:37.831Z"),
 "updatedAt" : ISODate("2017-03-09T17:06:37.831Z")
 }

 http://127.0.0.1:1337/tweet/replysent?tweetID=d

 {
   "_id" : ObjectId("58c18b9d60e6f0213a10b2b4"),
   "tweet_id" : "d",
   "date_published" : "2017-03-09T17:06:37.825Z", // this is NOT a DATE object
   "createdAt" : ISODate("2017-03-09T17:06:37.831Z"),
   "updatedAt" : ISODate("2017-03-09T17:07:11.296Z"),
   "reply" : [
     {
     "date_replied" : "2017-03-09T17:07:11.277Z" // this is NOT a DATE object
     }
   ],
   "date_replied" : "2017-03-09T17:07:11.292Z" // this is NOT a DATE object
 }

 */
