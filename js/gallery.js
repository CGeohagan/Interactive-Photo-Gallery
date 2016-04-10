//Problem: User when clicking on image goes to a dead end.
//Solution: Create an overlay with the large image. Lightbox.

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $leftArrow = $('<button type="button" class="fa fa-chevron-circle-left"></button>');
var $rightArrow = $('<button type="button" class="fa fa-chevron-circle-right"></button>');
var $caption = $("<p></p>");

//Add left arrow to overlay
$overlay.append($leftArrow);

//Add right arrow to overlay
$overlay.append($rightArrow);

//Add image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add overlay.
$("body").append($overlay);

//Create function for adding the image to the overlay
var overlayImage = function(imageLocation, captionText) {
  //Update the image for the overlay
  $image.attr("src", imageLocation);
  //Make image alt attribute the caption
  $caption.text(captionText);
};

//Capture the click event on a link to an image.

  $(".photo-thumbnails a").click(function(event){
    event.preventDefault();

    $(this).addClass("selected");
  
    var imageLocation = $(this).attr("href");
    
    //Get child's alt attribute 
    var captionText = $(this).children("img").attr("alt");
   
    //Call image overlay function
    overlayImage(imageLocation, captionText);
    
    //Show the overlay.
    $overlay.show();
  });
   
  

      //When right arrow is clicked
     $rightArrow.click(function(){
        //Traverse to next image in gallery
       var $imageLink = $(".selected").next();
        //Remove selected class from current picture and add to new picture
        $(".selected").removeClass("selected");
        $imageLink.addClass("selected");
        //Update overlay with new image location
        imageLocation = $imageLink.attr("href");
        
          
        //Get child's alt attribute 
       captionText = $imageLink.children("img").attr("alt");
      
        //Call image overlay function
       overlayImage(imageLocation, captionText);
        
      //Show the overlay.
      $overlay.show();
  
});  







//When left arrow is clicked

  //Traverse to previous image in gallery


//When overlay is clicked