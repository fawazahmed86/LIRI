
var keysCall = require("./keys.js");

var fs = require("fs");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

var nodeArgs = process.argv;
 
if (process.argv[3] != undefined) {
  var userinput = "";
  for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
      userinput = "" + userinput + " " + nodeArgs[i] + "";
    } else {
      userinput += nodeArgs[i];
      // "the"
    }
  }
}

  if (process.argv[2] === "my-tweets") {
    twitter();
  }
  if (process.argv[2] === "spotify-this-song") {
    console.log("who am i  " + userinput);
    console.log(process.argv[2] + "  " + process.argv[3] + "  " + process.argv[4])
    // spotifySong();
    console.log("display me")
  }
  if ((process.argv[2] === "movie-this") && (process.argv[3])) {
    // movie();
    // extraCmd();
    imdb();
  };
  if ((process.argv[2] === "movie-this") && (process.argv[3] === undefined)) {
    userinput = "Mr. Nobody";
    imdb();
    // console.log("This text is working-1")
    // console.log(process.argv[3])
    // // nobody();
  }
  if (process.argv[2] === "do-what-it-says") {
    // text();
    fs.readFile("random.txt", "utf8", function(error, data) {
      if (error) {
        return console.log(error);
      }
      
      console.log(data);
      var dataArr = data.split(",");
      console.log(dataArr[1]);
      process.argv[2] = dataArr[0];
      process.argv[3] = dataArr[1];
      // spotifySong();

      console.log("This text is working -3")
      });
}

function twitter () {
    var params = {screen_name: 'CNN', count:5};
    var client = new Twitter(keysCall.twitterKeys)


      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          for (var i = 0; i < tweets.length; i++) {
         
          // console.log(tweets[i].text);
          console.log(tweets[i].favorite_count);
          console.log('=+=+=+=+=+=+=+=+=+=+=+=+=+');
          }
        }
      });
    }

  function spotifySong (song) {

    var spotify = new Spotify(keysCall.spotifyKeys)
      spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        } else {
          console.log(data.tracks.items[1].album.name); 
        }
      });
    } 
    

function imdb () {
  // extraCmd();
  var queryUrl = "http://www.omdbapi.com/?t=" + userinput + "&y=&plot=short&apikey=40e9cece";
  // console.log("second display" + userinput)

  console.log(queryUrl);

  request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log("Release Year: " + JSON.parse(body).Year);
    }
  });
}
