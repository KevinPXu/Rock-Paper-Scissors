var userInput = prompt("Choose R, P or S");

while (
  userInput !== "R" &&
  userInput !== "P" &&
  userInput !== "S" &&
  userInput !== "r" &&
  userInput !== "p" &&
  userInput !== "s"
) {
  userInput = prompt("That is not a valid entry, please try again");
}
console.log(userInput);

var choices = ["R", "P","S"];
var arrNum = Math.floor(Math.random() * choices.length);
var compInput = choices[arrNum];

alert("The computer chose " + compInput);

function gameMech(){
  var gameOutcome = 0;
  if (userInput == compInput){
    gameOutcome = 0;
    return gameOutcome;
  }
  if (userInput == "R" && compInput == "P"){
    gameOutcome = -1;
    return gameOutcome;
  }
  else if (userInput == "P" && compInput == "R"){
    gameOutcome = 1;
    return gameOutcome;
  }
  else if (userInput == "P" && compInput == "S"){
    gameOutcome = -1;
    return gameOutcome;
  }
  else if (userInput == "S" && compInput == "P"){
    gameOutcome = 1;
    return gameOutcome;
  } else if (userInput == "R" && compInput == "S"){
    gameOutcome = 1;
    return gameOutcome;
  }
  else {
    gameOutcome = -1;
    return gameOutcome;
  }
}