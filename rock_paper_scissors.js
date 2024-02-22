var userRounds;
var crrRound;

var choiceArr = ["Rock", "Paper", "Scissors"];
var userChoice;
var compChoice;

var roundWinner;
var userWins = 0;
var compWins = 0;

playGame();

// starts and maintains the game
function playGame() {
  roundInputAndCheck();
  for (var i = 1; i <= userRounds; i++) {
    crrRound = i;
    userInput();
    computer();
    whoWon();

    console.log(`Current Round: ${crrRound}
    User chose: ${userChoice}
    Comp. chose: ${compChoice}
    Who won: ${roundWinner}`);
  }
  console.log(userWins);
  console.log(compWins);
  result();
}

// round input
function roundInputAndCheck() {
  var userChose = prompt("Please enter a number:");
  if (userChose.trim() !== "" && !isNaN(userChose) && userChose > 0) {
    return userRounds = userChose;
  }

  else {
    alert("That's not a number! Please try again.");
    roundInputAndCheck();
  }
}

// user input taken
function userInput() {
  var input = prompt("what will you choose ");
  input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  if (choiceArr.includes(input)) {
    return userChoice = input;
  }
  else {
    alert("Please choose anyone from \"Rock\" \"Paper\" \"Scissors\"");
    userInput();
  }
}

// computer choice generated
// randomNumber() is a helper function
function randomNumber() { return Math.floor(Math.random() * choiceArr.length) }

function computer() {
  return compChoice = choiceArr.at(randomNumber());
}

// comparing results
function whoWon() {
  if (userChoice == compChoice) {
    return roundWinner = "It's a tie, try again"
  }

  else if (userChoice == "Rock") {
    if (compChoice == "Paper") {
      compWins = compWins + 1;
      return roundWinner = "Computer Wins";
    }
    else if (compChoice == "Scissors") {
      userWins = userWins + 1;
      return roundWinner = "User Wins";
    }
  }

  else if (userChoice == "Paper") {
    if (compChoice == "Scissors") {
      compWins = compWins + 1;
      return roundWinner = "Computer Wins";
    }
    else if (compChoice == "Rock") {
      userWins = userWins + 1;
      return roundWinner = "User Wins";
    }
  }

  else if (userChoice == "Scissors") {
    if (compChoice == "Rock") {
      compWins = compWins + 1;
      return roundWinner = "Computer Wins";
    }
    else if (compChoice == "Paper") {
      userWins = userWins + 1;
      return roundWinner = "User Wins";
    }
  }
}

// result of the game
function result() {
  if (userWins > compWins) {
    console.log(`Total rounds in this game: ${userRounds}
    User won: ${userWins}
    Comp won: ${compWins}
    User Wins!`)
  }
  else if (userWins < compWins) {
    console.log(`Total rounds in this game: ${userRounds}
    User won: ${userWins}
    Comp won: ${compWins}
    Computer Wins`)
  }
  else {
    console.log(`Total rounds in this game: ${userRounds}
    User won: ${userWins}
    Comp won: ${compWins}
    It's a tie, try again`)
  }
}