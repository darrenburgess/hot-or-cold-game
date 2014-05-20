(function($){
$(document).ready(function(){

var escapeKey = 27;	
	
// Display information modal box
$(".what").click(function(){
	$(".overlay").fadeIn(1000);
});

// Hide information modal box
$("a.close").click(function(){
	$(".overlay").fadeOut(1000);
});

$(document).keyup(function(e){
	if(e.which === escapeKey){
		$(".overlay").fadeOut(1000);
	}
});

// start new game on page load.  set feed back to 'make your guess'

// start new game on new game button click

// function: generate random number

// function: evaluate answer

// capture answer with return

// validate input between 1 and 100

// capture answer with button

// insert feedback into div#feedback

// track count guesses in span#count

// add each guess to as <li> to ul#guessList



//end jQuery 
});

})(jQuery);
