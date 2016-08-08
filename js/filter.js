/***********************************************************************
Search Filter
***********************************************************************/

//When the AJAX function is complete, this code will run
$( document ).ajaxComplete(function() {

	//Make the search box at the top of the page filter based on captions
	//Select the input for the search bar
	var $searchInput = $('input');                             

	//When typing into the search form
	$searchInput.keyup(function(){
		//Make the input all uppercase
		var filter = $(this).val().toUpperCase();
		//For each thumbnail image
		$(".photo-thumbnails img").each(function(){
			//Get the caption text and make uppercase
			var listCaption = $(this).attr('alt').toUpperCase();
			//If the caption matches the filter (i.e., not = -1)
			if (listCaption.search(filter) > -1) {
				//Show the list element containing the image
				$(this).parent().parent().fadeIn();
			} else {
				//Hide the list element containing the image
				$(this).parent().parent().fadeOut();
			}
		});
	});

}); //Ajax Complete




