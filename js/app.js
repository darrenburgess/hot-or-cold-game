(function($){
$(document).ready(function() {

var escapeKey = 27;
var returnKey = 13;	
	
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

// prevent default of submit
$('form').submit(function(e){ e.preventDefault(); });

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
	$('#guessList li').remove();
});

// function: count elements 
var countElements = function(selector){
	return $(selector).length; //TEST
};

// function: evaluate guess
var evaluateGuess = function(guessNumber){
	var answerDiff = Math.abs(guessNumber - correctAnswer);
	console.log('answerDiff=' + answerDiff);
	return 	(guessNumber < 1 || guessNumber > 100) ? "Choose between 1 to 100" : 
			(answerDiff === 0) 	? "Correct!" : 
			(answerDiff <= 5) 	? "Hot" :
			(answerDiff <= 10)	? "Warm" :
			(answerDiff <= 20)	? "Tepid" :
			(answerDiff <= 30)	? "Cool" :
			"Cold";
};

// NEXT: get this plugin working
// capture answer with return and display response
$.fn.captureAnswer = function(userInput){
	var userGuess = $(userInput).val().trim();
	var response = evaluateGuess(userGuess);
	$('#feedback').text(response);
	$('#guessList').append($('<li>' + userGuess + '</li>'));
	$(this).val('');
	$('#count').text(countElements('#guessList li'));
};

$('input').keyup(function(e){
		$(this).captureAnswer(this);
	}
});	

// capture answer with button
$(document).on('click', '#guessButton', function(){
	$('input').captureAnswer();
});

//end jQuery 
});

})(jQuery);