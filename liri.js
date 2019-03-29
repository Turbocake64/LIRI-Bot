// allows access to .env file where API keys are held
require("dotenv").config();

// a variable declared 
var keys = require("./keys.js");

// 
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var fs = require("fs");

// setting process.argv to a more human-friendly name
const userInput = process.argv;

// enacting a constructor that lives in the node-spotify-api apparently 
var Spotify = new Spotify({
  id: keys.spotify.id, 
  secret: keys.spotify.secret
});

// setting process.argv[2] to the human-friendly "search" name
var search = process.argv[2];

// talking everything after the 3rd index of userInput and turning it into a string with spaces in between.
// Additionally, this is setting that 4th index to the human-friendly "term" name 
var term = userInput.slice(3).join(' ')

// a bunch of if-else statements to capture process.argv[2] and begin the appropriate search.
// each calls on a function/API call to be defined below.

// for OMDb
if (search === "movie-this") {
  movieSearch(term);

// for the concert API
} else if (search === "concert-this") {
  concertSearch(term);

// for spotify
} else if (search === "spotify-this") {
  songSearch(term);

// for the fs call to randonly choose one of the three above with a set search
} else if (search === "do-what-it-says") {
  doWhatItSays();
}

// the movie search function
function movieSearch(term) {
  // forces a search for "The Room" in case the user does not input anything to search
  if (term.length === 0) {
    term = "The Room"
  }
  //axios call to OMDb API
  axios.get("http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy").then(
  function(response) {

    // declaring response data equal to the human-friendly movieData
    movieData = response.data
    // a forinloop to grab the Rotten Tomatoes rating from the object
    //  in the array in the object that is the API call for a given movie
    for (i in movieData.Ratings){
      if(movieData.Ratings[i].Source === 'Rotten Tomatoes'){
        // setting the Rotten Tomatoes rating to a variable so it can be called i the array below
        var tomatoes = movieData.Ratings[i].Value;
    }
  };
    // declaring a variable equal to an array of movie properties
    var showMovieData = [

      "\n",
      "\n" + "Title: " + movieData.Title,
      "Year: " + movieData.Year,
      "IMDB Rating: " + movieData.imdbRating,
      "Rotten Tomatoes: " + tomatoes,
      "Country: " + movieData.Country,
      "Language: " + movieData.Language,
      "Plot: " + movieData.Plot,
      "Actors: " + movieData.Actors + "\n", 
    ].join("\n");
    //.join() makes this array a string separated by line breaks; it looks nicer

    // prints the array to the console
    console.log(showMovieData);

    // appends the info as text to log.txt file; will create log.txt if it doesn't already exist
    fs.appendFile("log.txt", showMovieData, function(err){
      if(err) throw err;
      console.log("Saved to log.txt")
    })

  });
}

// the concert search function
function concertSearch(term) {
  //axios call to Bands in Town API (GOT THE REGEX TO GET DOWHATITSAYS() TO WORK!)
  axios.get("https://rest.bandsintown.com/artists/" + term.replace(/^"(.*)"$/, '$1') + "/events?app_id=codingbootcamp").then(
    function(response) {

      // declaring response data equal to the human-friendly concertData
      concertData = response.data
      // creating an empty array to push each of the concerts per band
      concertList = [];
      //a forloop to 
      for (let i = 0; i < concertData.length; i++) {
        // 1) reformat the date for each concert
        let showDate = (moment(concertData[i].datetime, "YYYY-MM-DD")).format("MM/DD/YYYY")
        // 2) declare an array of properties for every concert per band
        var showConcertData = [
        "\n\nUpcoming " + term + " Concert:",
         "Venue: " + concertData[i].venue.name,
        "Location: " + concertData[i].venue.city + ", " + concertData[i].venue.country,
        "Date: " + showDate, 
      ].join("\n");

      // pushing each joined array into the concertList array above
      concertList.push(showConcertData);
    }

      // printing the full array to the console as strings for formatting purposes 
      console.log(concertList.join());

      // appends the info as text to log.txt file; will create log.txt if it doesn't already exist
      fs.appendFile("log.txt", concertList.join(), function(err){
        if(err) throw err;
        console.log("Saved to log.txt")
    })
  });
}

// the song search function
function songSearch(term){
  // if statement forcing a seach to Rick Roll you if you don't have a song with your "spotify-this" search
  if (term.length === 0) {
    term = "Never Gonna Give You Up"
  }

  //instead of an axios call, we have to use a unique search with Spotify
  Spotify.search({ type: 'track', query: term, limit: 5 }, function(err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
      return
    };

    // declaring data.tracks.items equal to the human-friendly songData
    var songData = data.tracks.items;
    //an array of song properties
    var showSongData = [
      "\n",
    "\nSong Name: " + songData[0].name,
    "Artist(s): " + songData[0].artists[0].name,
    "Album: " + songData[0].album.name,
    "Preview Link: " + songData[0].preview_url + "\n"
    ].join("\n");

  // printing the stringified array to the console
  console.log(showSongData); 

  // appends the info as text to log.txt file; will create log.txt if it doesn't already exist
  fs.appendFile("log.txt", showSongData, function(err){
    if(err) throw err;
    console.log("Saved to log.txt")
    })
  });
}

// a function to give a "random search" chosen from pre-detarmined searches for each of 3 APIs
function doWhatItSays() {
  // reads a string from the random.txt file
  fs.readFile('random.txt', "utf8", function(error, data){

  if (error) {
      console.log(error);
      return;
    }

  // split it by commas (to make it separate the command from the term
  var randomizer = data.split(",");

  // if else statement chain to differentiate search by process.argv[2]

    // for OMDb
  // if (randomizer[0] === "movie-this") {
  //   var term = randomizer[1];
  //   movieSearch(term);
  // }

    // for Bands in Town
  // } else 
  if (randomizer[0] === "concert-this") {
    var term = randomizer[1];
    concertSearch(term);
  };

  //   // for spotify
  // } else if(randomizer[0] === "spotify-this") {
  //   var term = randomizer[1];
  //   songSearch(term);
  // } 
  }
)}


