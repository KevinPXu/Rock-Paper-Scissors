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
