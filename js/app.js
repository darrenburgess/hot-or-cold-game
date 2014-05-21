(function($){
$(document).ready(function() {

var escapeKey = 27;	
	
// Display information modal box
$(".what").click(function(){
	$(".overlay").fadeIn(1000);
});

// Hide information modal box - button or escape key
$("a.close").click(function(){
	$(".overlay").fadeOut(1000);
});

$(document).keyup(function(e){
	if(e.which === escapeKey){
		$(".overlay").fadeOut(1000);
	}
});

// function: generate random number
var randomNumber = function(){
	return Math.floor((Math.random() * 100) + 1);
};

var correctAnswer = Math.floor((Math.random() * 100) + 1);

// start new game on button click.  set feed back to 'make your guess'
$('.new').on('click', function (){
	$('form').trigger("reset");
	$('#feedback').text('Make your Guess!');
	$('#count').text(countElements('#guestList > li')); //TEST
	correctAnswer = randomNumber();
	// console.log(correctAnswer);
	// console.log (evaluateGuess(50));
});

// function: count elements 
var countElements = function(selector){
	return $(selector).length; //TEST
};

// function: evaluate guess
var evaluateGuess = function(guessNumber){
	var answerDiff = Math.abs(guessNumber - correctAnswer);
	console.log(answerDiff);
	return 	(answerDiff === 0) 	? "Correct!" : 
			(answerDiff <= 5) 	? "Hot" :
			(answerDiff <= 10)	? "Warm" :
			(answerDiff <= 20)	? "Tepid" :
			(answerDiff <= 30)	? "Cool" :
			"Cold";						
};

// capture answer with return

// validate input between 1 and 100

// capture answer with button

// insert feedback into div#feedback

// track count guesses in span#count

// add each guess to as <li> to ul#guessList



//end jQuery 
});

})(jQuery);