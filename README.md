# LIRI-Bot

Link to a video tutorial: https://drive.google.com/file/d/1wkIQLri2AO2Ut9iNKswbr1M0E2vFWfOI/view

##About:

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

##Technologies used:

* node
* javascript
* dotenv
* axios
* OMDb API
* node-spotify-API
* Bands In Town API

##Overview:


#Movies:

This will show the following information about a movie by typing: 
node liri.js movie-this NAME OF MUSIC in your terminal/bash window

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'The Room.'

##Concert:

This will show the following information about concerts for a given band by typing: 
node liri.js concert-this NAME OF ARTIST in your terminal/bash window.

* Name of the venue
* City and country for a given concert
* the date of the concert in MM/DD/YYYY format

* There is no limit to the number of concerts, so searching an artist will print as many concerts as the API has information for.

##Spotify:

This will show the following information about a song by typing: 
node liri.js spotify-this NAME OF SONG in your terminal/bash window

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
* If no song is provided then your program will default to "Never Gonna Give You Up" by Rick Astly

##Random:

by typing node liri.js do-what-it-says into the terminal/bash window, you will print results for one of the following three searches in their respective formats

* concert-this "The Wiggles"
* movie-this "Pink Flamingos"
* spotify-this "I Want it That Way"

