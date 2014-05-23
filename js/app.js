(function($){
$(document).ready(function() {
	
// Display information modal box
$(".what").click(function(){
	$(".overlay").fadeIn(1000);
});

// Hide information modal box - button or escape key
$("a.close").click(function(){
	$(".overlay").fadeOut(1000);
});

$(document).keyup(function(e){
	if(e.which === 27){  		//escape key
		$(".overlay").fadeOut(1000);
	}
});

// function: generate random number
var randomNumber = function(){
	return Math.floor((Math.random() * 100) + 1);
};

var correctAnswer = randomNumber();

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
	return 	(guessNumber < 1 || guessNumber > 100) ? "Choose between 1 to 100" : 
			(answerDiff === 0) 	? "Correct!" :
			(answerDiff <= 5) 	? "Hot" :
			(answerDiff <= 10)	? "Warm" :
			(answerDiff <= 20)	? "Tepid" :
			(answerDiff <= 30)	? "Cool" :
			"Cold";
};


// prevent default of submit
$('form').submit(function(e){ e.preventDefault(); });

// capture answer with button
$('#guessButton').click(function(){
		var userGuess = $('#userGuess').val().trim();
		var response = evaluateGuess(userGuess);
		$('#feedback').text(response);
		$('#guessList').append($('<li>' + userGuess + '</li>'));
		$('#count').text(countElements('#guessList li'));
		$('#userGuess').val('');
		$('#userGuess').focus();
		console.log("test");
});

//end jQuery 
});

})(jQuery);