/***********************************************************************
Lightbox Gallery
***********************************************************************/
//When the AJAX function is complete, this code will run


  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $leftArrow = $('<span class="leftArrow fa fa-chevron-circle-left"></span>');
  var $rightArrow = $('<span class="rightArrow fa fa-chevron-circle-right"></span>');
  var $exit = $('<span class="fa fa-times" aria-hidden="true"></span>');
  var $caption = $("<div class='caption'></div>");
  var $video = $("<iframe frameborder='0' allowfullscreen></iframe>");
  var $selectedImage;


  //Add image to overlay
  $overlay.append($image);

  //Add video to overlay
  $overlay.append($video);

  //Add exit to overlay
  $overlay.append($exit);

  //Add left arrow to overlay
  $overlay.append($leftArrow);

  //Add right arrow to overlay
  $overlay.append($rightArrow);

  //A caption to overlay
  $overlay.append($caption);

  //Add overlay.
  $("body").append($overlay);

 

  //Create function to show get information for and show image or video when traversing through images
  var showMedia = function(){
          if ($selectedImage.hasClass('photo')) {
          //Hide the video and show the image
          $video.detach();
          $overlay.prepend($image);
          var imageLocation = $selectedImage.children("img").attr("src");
          $image.attr("src", imageLocation);
      } else if ($selectedImage.hasClass('video')){
          //Hide the image and show the video
          $image.detach();
          var videoURL = $selectedImage.attr('href');
          //Give the video the player id
          $video.attr("src", videoURL);
          $overlay.prepend($video);
      }
      
      //Show the overlay.
      $overlay.show();
      //Get child's alt attribute 
      var headerText = $selectedImage.children("img").attr("alt");
      var paraText = $selectedImage.children("img").attr("title");
      $caption.html("<h2>" + headerText+ "</h2>" + "<p>" + paraText + "</p>");

      //When you click on the overlay, hide it
      $exit.click(function() {
          //Hide the overlay.
          $overlay.hide();
      });

  };

  //Capture the click event on a link to an image.
    $(".photo-thumbnails a").click(function(event) {
      event.preventDefault();
      $selectedImage = $(this);
      showMedia();
    });
     

   //Function for when right arrow is clicked
  var nextImage = function(){
      //Traverse to next image in gallery
      $selectedImage = $selectedImage.parent('li').next('li').children('a');
      $leftArrow.css("display", "inline-block");
      if ($selectedImage.hasClass('last')) {
        $rightArrow.hide();
      } else {
        $rightArrow.css("display", "inline-block");
      }
      showMedia();
  };

  //Function for when previous arrow is clicked
  var prevImage = function(){
      //Traverse to previous image in gallery
      $selectedImage = $selectedImage.parent('li').prev('li').children('a');
      $rightArrow.css("display", "inline-block");
      if ($selectedImage.hasClass('first')) {
        $leftArrow.hide();
      } else {
        $leftArrow.css("display", "inline-block");
      }
      showMedia();
  };


  //If you click the right arrow, call the next image function
  $(".rightArrow").click(function(){
    nextImage();
  });

  //If you click the left arrow, call the prev image function
  $(".leftArrow").click(function(){
    prevImage();
  });

  //Call the next or previous image function using arrow keys
  $("body").keydown(function(e) {
    if(e.which == 37) { // left     
        prevImage();
    }
    else if(e.which == 39) { // right     
        nextImage();
    }
  });


 //Function for when right arrow is clicked
var nextImage = function(){
    //Traverse to next image in gallery
    $selectedImage = $selectedImage.parent('li').next('li').children('a');
    $leftArrow.css("display", "inline-block");
    if ($selectedImage.hasClass('last')) {
      $rightArrow.hide();
    } else {
      $rightArrow.css("display", "inline-block");
    }
    showMedia();
};

//Function for when previous arrow is clicked
var prevImage = function(){
    //Traverse to previous image in gallery
    $selectedImage = $selectedImage.parent('li').prev('li').children('a');
    $rightArrow.css("display", "inline-block");
    if ($selectedImage.hasClass('first')) {
      $leftArrow.hide();
    } else {
      $leftArrow.css("display", "inline-block");
    }
    showMedia();
};





//If you click the right arrow, call the next image function
$(".rightArrow").click(function(){
  nextImage();
});

//If you click the left arrow, call the prev image function
$(".leftArrow").click(function(){
  prevImage();
});

//Call the next or previous image function using arrow keys
$("body").keydown(function(e) {
  if(e.which == 37) { // left     
      prevImage();
  }
  else if(e.which == 39) { // right     
      nextImage();
  }
});



