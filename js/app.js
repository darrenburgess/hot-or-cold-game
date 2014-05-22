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
});

// function: count elements 
var countElements = function(selector){
	return $(selector).length; //TEST
};

// function: evaluate guess
var evaluateGuess = function(guessNumber){
	var answerDiff = Math.abs(guessNumber - correctAnswer);
	return 	(guessNumber < 1 || guessNumber > 100) ? "Choose between 1 to 100" : 
			(answerDiff === 0) 	? "Correct!" : 
			(answerDiff <= 5) 	? "Hot" :
			(answerDiff <= 10)	? "Warm" :
			(answerDiff <= 20)	? "Tepid" :
			(answerDiff <= 30)	? "Cool" :
			"Cold";
};

// capture answer with return and display response
$('input').keyup(function(e){
	var userGuess = $(this).val().trim();
	if(e.which===13){
		var response = evaluateGuess(userGuess);
		$('#feedback').text(response);	
	}
});

// capture answer with button
$(document).on('click', '#guessButton', function(){
	console.log('test');
});

// insert feedback into div#feedback

// track count guesses in span#count

// add each guess to as <li> to ul#guessList

//end jQuery 
});

})(jQuery);