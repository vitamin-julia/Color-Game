// alert("connected...");

var numSquares = 6;

// var colors = [
// 	"rgb(255, 0, 0)", 
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]
// var colors = generateRandomColors(numSquares);
var colors = [];


// var pickedColor = colors[3];
// var pickedColor = pickColor();
var pickedColor;
var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
	// mode buttons event listeners
	setupModeButtons();
	
	setupSquares();

	reset();
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			// if(this.textContent === "Easy") {
			// 	numSquares = 3;
			// } else {
			// 	numSquares = 6;
			// }
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

			reset();
			// figure out how many squares to show
			// pick new colors
			// pick a new pickedColor
			// update page to reflect changes
		});
	}
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener("click", function() {
			// grab color of clicked square
			var clickedColor = this.style.background;

			// compare color to pickedColor
			console.log(clickedColor, pickedColor); 	// to check difference between the two
			if(clickedColor === pickedColor) {

				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "Play Again?";

			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";

	messageDisplay.textContent = "";

	// change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function() {
// 	// alert("Easy button cliked!");
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 		if(colors[i]) { 		// if there is a color, bacause colors only has 3
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none"; 		// not show
// 			// squares[i].style.display = "block"; 	// show
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function() {
// 	// alert("Hard button cliked!");
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });


// colorDisplay.textContent = pickedColor; 		// now do this in the init()


// resetButton.addEventListener("click", function() {
// 	// alert("reset");

// 	// generate all new colors
// 	colors = generateRandomColors(numSquares);
// 	// pick a new random color from array
// 	pickedColor = pickColor();
// 	// change colorDisplay to match picked color
// 	colorDisplay.textContent = pickedColor;
// 	this.textContent = "New Colors";

// 	messageDisplay.textContent = "";

// 	// change colors of squares
// 	for(var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = colors[i];
// 	}
// 	h1.style.background = "steelblue";
// });

resetButton.addEventListener("click", function() {
	reset();
});


// for(var i = 0; i < squares.length; i++) {
// 	// add initial colors to squares
// 	squares[i].style.background = colors[i];

// 	// add click listeners to squares
// 	squares[i].addEventListener("click", function() {
// 		// alert("clicked a square");


// 		// grab color of clicked square
// 		// alert(this.style.background);
// 		var clickedColor = this.style.background;

// 		// compare color to pickedColor
// 		console.log(clickedColor, pickedColor); 	// to check difference between the two
// 		if(clickedColor === pickedColor) {
// 			// alert("Correct!");

// 			messageDisplay.textContent = "Correct!";
// 			changeColors(clickedColor);
// 			h1.style.background = clickedColor;
// 			resetButton.textContent = "Play Again?";

// 		} else {
// 			// alert("Wrong!");

// 			this.style.background = "#232323";
// 			messageDisplay.textContent = "Try Again";

// 		}
// 	})
// }

function changeColors(color) {
	// loop through all squares 
	for(var i = 0; i < colors.length; i++) {
		// change each color to match given color
		squares[i].style.background = color; 		// not colors[i]
	}
}

function pickColor() {
	// pick a random number
	// Math.floor(Math.random() * 6 + 1) 		// 1 ~ 6
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];

	// add num random colors to array
	for(var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor());
	}

	// return that array
	return arr;
}

function randomColor() {
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	// return "rgb(" + r + "," + g + "," + b + ")"; 	// bug, must have space
	return "rgb(" + r + ", " + g + ", " + b + ")";
}





