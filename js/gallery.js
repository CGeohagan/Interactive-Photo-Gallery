//Problem: User when clicking on image goes to a dead end.
//Solution: Create an overlay with the large image. Lightbox.

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $leftArrow = $('<span class="leftArrow fa fa-chevron-circle-left"></span>');
var $rightArrow = $('<span class="rightArrow fa fa-chevron-circle-right"></span>');
var $caption = $("<p></p>");
var $selectedImage;
var imageLocation;
var captionText;


//Add image to overlay
$overlay.append($image);

//Add left arrow to overlay
$overlay.append($leftArrow);

//Add right arrow to overlay
$overlay.append($rightArrow);

//A caption to overlay
$overlay.append($caption);

//Add overlay.
$("body").append($overlay);




//Capture the click event on a link to an image.
  $(".photo-thumbnails a").click(function(event) {
    $selectedImage = $(this);
    event.preventDefault();
    imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation);
    //Show the overlay.
    $overlay.show();
    //Get child's alt attribute 
    captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
  });
   
  

 //Function for when right arrow is clicked
function nextImage(){
    //Traverse to next image in gallery
    $selectedImage = $selectedImage.next();
    //Update overlay with new image location
    imageLocation = $selectedImage.attr("href");
    //Update the image for the overlay
    $image.attr("src", imageLocation);      
    //Get child's alt attribute 
    captionText = $selectedImage.children("img").attr("alt");
    //Make image alt attribute the caption
    $caption.text(captionText);  
} 

//Function for when previous arrow is clicked
function prevImage(){
    //Traverse to previous image in gallery
    $selectedImage = $selectedImage.prev();
    //Update overlay with new image location
    imageLocation = $selectedImage.attr("href");
    //Update the image for the overlay
    $image.attr("src", imageLocation);      
    //Get child's alt attribute 
    captionText = $selectedImage.children("img").attr("alt");
    //Make image alt attribute the caption
    $caption.text(captionText);  
} 



$(".rightArrow").click(function(){
  nextImage();
});

$(".leftArrow").click(function(){
  prevImage();
});





