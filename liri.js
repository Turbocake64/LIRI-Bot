require("dotenv").config();
var keys = require("./keys.js");

var axios = require("axios");
var dotenv = require("dotenv");
var moment = require("moment");
var spotify = require("node-spotify-api");
var fs = require("fs");

var spotify = new spotify(keys.spotify);

command = process.argv[2];
// this may need to be slice(3)
userInput = arr.slice(2).join(' ')

if (command === "movie-this") {
  // hit OMDb
} else if (command === "concert-this") {
  // hit bands in town API
} else if (command === "spotify-this") {
  // hit spotify
} else if (command === "do-what-it-says") {
  // hit fs ...?
}

// Pseudo Code

// TODO: make it so liri.js can take in one of the following commands:
    
    // TODO: 'concert-this'(4 points)

        // 'node liri.js concert-this <artist/band name here>
          // This will search the Bands in Town Artist Events API 
          // (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) 
          // for an artist and render the following information about each event to the terminal:

        // Name of the venue
   
        // Venue location
   
        // Date of the Event (use moment to format this as "MM/DD/YYYY")
   

    // TODO: 'spotify-this' (9 points)

        // `node liri.js spotify-this-song '<song name here>'`

        // This will show the following information about the song in your terminal/bash window
 
        // Artist(s)
 
        // The song's name
 
        // A preview link of the song from Spotify
 
        // The album that the song is from
 
        //  If no song is provided then your program will default to "The Sign" by Ace of Base.
 
        // You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) 
          //package in order to retrieve song information from the Spotify API.
 
        // The Spotify API requires you sign up as a developer to generate the necessary credentials. 
          //You can follow these steps in order to generate a **client id** and **client secret**:

    // 'movie-this' (10 points)

        // TODO: This will output the following information to your terminal/bash window:

        // Title of the movie.
        // Year the movie came out.
        // IMDB Rating of the movie.
        // Rotten Tomatoes Rating of the movie.
        // Country where the movie was produced.
        // Language of the movie.
        // Plot of the movie.
        // Actors in the movie.

        //  If the user doesn't type a movie in, 
        //  the program will output data for the movie 'Mr. Nobody.'

    // 'do-what-it-says' (3 points)

        //Using the `fs` Node package, LIRI will take the text inside of random.txt 
          // and then use it to call one of LIRI's commands.
        // It should run `spotify-this-song` for "I Want it That Way," 
          //as follows the text in `random.txt`.
        // Edit the text in random.txt to test out the feature for movie-this and concert-this.





// Spotify call

