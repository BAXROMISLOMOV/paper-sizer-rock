let choices = { 1: null, 2: null };
let a=Math.random()*10;
let b=Math.random()*10;
console.log(a,b);

function playGame(choice, player) {
  choices[player] = choice;
  document.getElementById(`player${player}-choice`).innerText = `Choice: ${choice}`;

  if (choices[1] && choices[2]) {
    determineWinner();
    choices = { 1: null, 2: null };
  }
}

function determineWinner() {
  const player1Choice = choices[1];
  const player2Choice = choices[2];

  if (player1Choice === player2Choice) {
    document.getElementById("result-text").innerText = "It's a tie!";
  } else if (
    (player1Choice === "rock" && player2Choice === "scissors") ||
    (player1Choice === "scissors" && player2Choice === "paper") ||
    (player1Choice === "paper" && player2Choice === "rock")
  ) {
    document.getElementById("result-text").innerText = "Player 1 wins!";
  } else {
    document.getElementById("result-text").innerText = "Player 2 wins!";
  }

  document.getElementById("player1-choice").innerText = "Choice: None";
  document.getElementById("player2-choice").innerText = "Choice: None";
}
