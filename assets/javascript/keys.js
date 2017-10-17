
console.log('this is loaded');

var twitterKeys = {
  consumer_key: 'ISMRx79TCFZx6aMPkoAr6DTbk',
  consumer_secret: 'gECcd3jloYczCNVoRXanjOncLtyp8H8IyqYwCPFjJSWI1sXyOn',
  access_token_key: '919707728611704832-xZG6hLcRStFIxXcUXTOp5e92dPkJSSB',
  access_token_secret: 'Q77KOrzM60RxPC79OV8HnJdpd6N1v8xvZqNZvf9bUWt9m'
}
 
var spotifyKeys = {
  id: '7a438cda3e914abc9c0f8537e4a07185',
  secret: '53b0016d6083420caea418beba00f365'
};
  
module.exports = {
  twitterKeys: twitterKeys,
  spotifyKeys: spotifyKeys
};


// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//       }
// // });
// client.get("statuses/user_timeline", params, function(error, tweets, response){
//   if(!error) {
//     for (var i=0; i<21; i++){
//       console.log(tweets[i].text);
//       console.log(tweets[i].created_at);
//       console.log('******************************************');
//     }
//   } 
// });


// ________________________________________________________________
// var Twitter = require('twitter');
 
// var client = new Twitter({
//   consumer_key: "ISMRx79TCFZx6aMPkoAr6DTbk",
//   consumer_secret: "gECcd3jloYczCNVoRXanjOncLtyp8H8IyqYwCPFjJSWI1sXyOn",
//   access_token_key: " 919707728611704832-xZG6hLcRStFIxXcUXTOp5e92dPkJSSB",
//   access_token_secret: "Q77KOrzM60RxPC79OV8HnJdpd6N1v8xvZqNZvf9bUWt9m",
// });


// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });

// ______________________________________________________________

// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: "7a438cda3e914abc9c0f8537e4a07185",
//   secret: "53b0016d6083420caea418beba00f36"
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });