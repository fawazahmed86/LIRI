
var keysCall = require("./keys.js");

var fs = require("fs");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

var inputs = process.argv;
 
  if (process.argv[3] != undefined) {
    var userinput = "";
    for (var i = 3; i < inputs.length; i++) {
      if (i > 3 && i < inputs.length) {
        userinput = "" + userinput + " " + inputs[i] + "";
      } else {
        userinput += inputs[i];
      }
    }
  }
  if (process.argv[2] === "my-tweets") {
    twitter();
  }
  if ((process.argv[2] === "spotify-this-song") && (process.argv[3] === undefined)) {
    console.log("input song name");
  }
  if ((process.argv[2] === "spotify-this-song") && (process.argv[3])) {
    spotifySong();
  }
  if ((process.argv[2] === "movie-this") && (process.argv[3])) {
    imdb();
  };
  if ((process.argv[2] === "movie-this") && (process.argv[3] === undefined)) {
    userinput = "Mr. Nobody";
    imdb();
  }
  if (process.argv[2] === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(error, data) {
      if (error) {
        return console.log(error);
      }
      var dataArr = data.split(",");
      userinput = dataArr[1];
      spotifySong();
      });
  }

  function twitter () {
    var params = {screen_name: 'CNN', count:20 };
    var client = new Twitter(keysCall.twitterKeys)


      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          for (var i = 0; i < tweets.length; i++) {
          // console.log('=+=+=+=+=+=+=+=+=+=+=+=+=+');
          tweetsDisplay = tweets[i].text.split(" https");
          console.log("\n" + tweetsDisplay[0]);
          console.log("\n" +tweets[i].created_at);
          console.log('=+=+=+=+=+=+=+=+=+=+=+=+=+');
          }
        }
      });
    }

  function spotifySong () {

    var spotify = new Spotify(keysCall.spotifyKeys)
      spotify.search({ type: 'track', query: userinput }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        } else {

          console.log("Artist: " + (data.tracks.items[0]).artists[0].name); 
          console.log("Track: " + data.tracks.items[0].name);
          console.log("Preview url: " + data.tracks.items[0].preview_url);  
          console.log("Album name: " + data.tracks.items[0].album.name); 
        }
      });
    } 
    
  function imdb () {
    var queryUrl = "http://www.omdbapi.com/?t=" + userinput + "&y=&plot=short&apikey=40e9cece";

    console.log(queryUrl);

    request(queryUrl, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        if (JSON.parse(body).Ratings) {
          for (var i = 0; i < JSON.parse(body).Ratings.length; i++) {
            if ((JSON.parse(body).Ratings[i].Source === "Rotten Tomatoes")) {
              // (JSON.parse(body).Ratings[i]) && 
              console.log("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).Ratings[i].Value);
            }
          }
        }
        console.log("Production Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);

      }
    });
  }
