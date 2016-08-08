//Wait until page is finished loading to run
$(document).ready(function() {

/***********************************************************************
AJAX for Spotify
***********************************************************************/

 var spotifyAPI = "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb/albums";
  function displayAlbums(data) {
    var photoHTML = '<ul class="photo-thumbnails">';
    $.each(data.items,function(i,item) {
        photoHTML += '<li>';
        photoHTML += '<a href="' + item.href + '" class="photo">';
        photoHTML += '<img src="' + item.images[0].url + '" ';
        photoHTML += 'alt="' + item.name + '" ';
        photoHTML += 'title="This is an album by the band Radiohead."></a></li>';
    }); // end each
    photoHTML += '</ul>';
    $('.spotify').html(photoHTML);
  }
  $.ajax({
    url: spotifyAPI,
    success: displayAlbums
  }); 

/***********************************************************************
AJAX for Spotify
***********************************************************************/

  var harryPotter = [
    "harry potter and the sorcerer's stone",
    "harry potter and the chamber of secrets",
    "harry potter and the prisoner of azkaban",
    "harry potter and the goblet of fire",
    "harry potter and the order of the phoenix",
    "harry potter and the deathly hallows: part 1",
    "harry potter and the deathly hallows: part 2"
  ];

  var movieHTML = "";

  $.each(harryPotter, function(i,title) {

    var imdbAPI = "http://www.omdbapi.com/?t=" + title + "&plot=short&r=json";
    function displayMovies(movie) {
    //  var photoHTML = '<ul class="photo-thumbnails">';
    //  $.each(data.items,function(i,item) {
            movieHTML += '<li class="">';
            movieHTML += '<a href="' + movie.Poster + '" class="photo">';
            movieHTML += '<img src="' + movie.Poster + '" ';
            movieHTML += 'alt="' + movie.Title + '" ';
            movieHTML += 'title="' + movie.Plot + '"></a></li>';
      //  }); // end each
      //  photoHTML += '</ul>';
        
    }
    $.getJSON(imdbAPI, displayMovies); 

  });


  $( document ).ajaxComplete(function() {
    $('.imdb').html(movieHTML);
  });

}); // end ready



  
   