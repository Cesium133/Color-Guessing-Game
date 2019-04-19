var colors = [];
var numSquares = 6;
var pickedColor;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay")
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message")
var h1Background = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easyBtn");
var hard = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode")

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
};


function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset(); 
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // grab color of clicked square
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            // If user guessed correct
            if (clickedColor === pickedColor) {
                // display "correct" message
                messageDisplay.textContent = "Correct!"
                // turn "New Colors" button to "Play Again?"
                resetButton.textContent = "Play Again?"
                // change all squares to correct clicked color
                changeColor(clickedColor);
                h1Background.style.backgroundColor = clickedColor;
            // if user guessed wrong
            } else {
                messageDisplay.textContent = "Try Again"
                this.style.backgroundColor = "#232323"
            }
        })
}
};

function reset() {
    colors = generateRandomColors(numSquares);
    // pick new colors from random array
    pickedColor = pickColor();
    //change colors of squares
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
    }
    h1Background.style.backgroundColor = "#232323"
}
}

// easy.addEventListener("click",function() {
//     easy.classList.add("selected");
//     hard.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i]
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// })

// hard.addEventListener("click", function() {
//     hard.classList.add("selected");
//     easy.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i]
//         squares[i].style.display = "block";
//         }
// })


resetButton.addEventListener("click", reset);



function changeColor(color) {
    // loop through all the squares
    for (var i =0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
};

function pickColor() {
    var random = Math.floor(Math.random()*colors.length)
    return colors[random]
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    // pick "red" from 0-255
    var r = Math.floor(Math.random()*256);
    // pick "green" from 0-255
    var g = Math.floor(Math.random()*256);
    // pick "blue" from 0-255
    var b = Math.floor(Math.random()*256);
    "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randomSingleColor() {
    var h_r = Math.floor(Math.random()*256); 
    var h_g = Math.floor(Math.random()*256);
    var h_b = Math.floor(Math.random()*256);
    return [h_r, h_g, h_b]
}

    // function generateRandomFiveColors() {

    // }

