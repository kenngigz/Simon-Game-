var colors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPlay = [];

var level = 0;

const gameInfo = document.querySelector(".gameInfo");
const gameLevel = document.querySelector(".gameLevel");

document.querySelector(".startgame").addEventListener("click", gameStart);

function gameStart() {
  document.querySelector(".startgame").textContent = "Game Ongoing";
  gameInfo.textContent = "Game Started";
  level= 0;
  gamePattern = [];
  userPlay = [];

  if (gamePattern.length === 0) {
    gameLevel.textContent = level;
  }
  autoPattern();
}

function autoPattern() {
  userPlay = [];
  level++;
  gameLevel.textContent = level;
  var randomNumber = Math.floor(Math.random() * colors.length);
  var chosenColor = colors[randomNumber];
  gamePattern.push(chosenColor);
  $("#" + chosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(chosenColor);
  // userPlayedColor();
}

$(".btn").click(function() {
  var userChoice = ($(this).attr("id"));
  userPlay.push(userChoice);
  $("#" + userChoice).fadeIn(100).fadeOut(100).fadeIn(100);
   checkAnswer(userPlay.length-1);
  // compareResults();
});
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userPlay[currentLevel]) {
      if (userPlay.length === gamePattern.length){
        setTimeout(function () {
          autoPattern();
        }, 1000);
      }
    } else {
      gameInfo.textContent = "Wrong";
      document.querySelector(".startgame").textContent = "oops! Start New Game";
      playSound("wrong");
      startOver();
    }
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
