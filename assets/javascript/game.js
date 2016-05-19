//Variables
//================================================================
//Counter for number of guesses
var guessCounter = 0;
//Object containing available answers
var words = ["mercury", "venus", "earth", "mars"]



//FUNCTIONS
//================================================================
//Code to capture user guess
document.onkeyup = function(event){

	//Determine which letter was chosen and make it lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	//Code to generate random word
	var computerGuess = words[Math.floor(Math.random()*words.length)];
	console.log(computerGuess);

	//Update Guess Counter
	guessCounter = guessCounter++;
	console.log(guessCounter);


	//Display the number of letters in the chosen word

	if (computerGuess == "mercury"){
		var targetDiv = document.getElementById("currentWord");
	targetDiv.innerHTML = "_ _ _ _ _ _ _"; 
	}

	else if (computerGuess == "venus"){
			var targetDiv = document.getElementById("currentWord");
		targetDiv.innerHTML = "_ _ _ _ _"; 
		}

		else if (computerGuess == "earth"){
			var targetDiv = document.getElementById("currentWord");
		targetDiv.innerHTML = "_ _ _ _ _"; 
		}
		else if (computerGuess == "mars"){
			var targetDiv = document.getElementById("currentWord");
		targetDiv.innerHTML = "_ _ _ _"; 
		}
		else if (computerGuess == "jupiter"){
			var targetDiv = document.getElementById("currentWord");
		targetDiv.innerHTML = "_ _ _ _ _ _ _"; 
		}
		else if (computerGuess == "saturn"){
			var targetDiv = document.getElementById("currentWord");
		targetDiv.innerHTML = "_ _ _ _ _ _"; 
		}
		else if (computerGuess == "mercury"){
			var targetDiv = document.getElementById("currentWord");
		targetDiv.innerHTML = "_ _ _ _ _ _ _"; 
		}




};






