!function(t){t(document).ready(function(){var e=27,n=13;t(".what").click(function(){t(".overlay").fadeIn(1e3)}),t("a.close").click(function(){t(".overlay").fadeOut(1e3)}),t(document).keyup(function(n){n.which===e&&t(".overlay").fadeOut(1e3)}),t("form").submit(function(t){t.preventDefault()});var o=function(){return Math.floor(100*Math.random()+1)},u=Math.floor(100*Math.random()+1);t(".new").on("click",function(){t("form").trigger("reset"),t("#feedback").text("Make your Guess!"),t("#count").text(r("#guestList > li")),u=o(),t("#guessList li").remove()});var r=function(e){return t(e).length},i=function(t){var e=Math.abs(t-u);return 1>t||t>100?"Choose between 1 to 100":0===e?"Correct!":5>=e?"Hot":10>=e?"Warm":20>=e?"Tepid":30>=e?"Cool":"Cold"};t.fn.captureAnswer=function(e){var n=t(e).val().trim(),o=i(n);t("#feedback").text(o),t("#guessList").append(t("<li>"+n+"</li>")),t(this).val(""),t("#count").text(r("#guessList li"))},t("input").keyup(function(e){e.which===n&&t(this).captureAnswer(this)}),t(document).on("click","#guessButton",function(){t("input").captureAnswer()})})}(jQuery);