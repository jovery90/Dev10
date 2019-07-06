var dieTotal = 0;
var rollCount = 0;
var startingBet = 0;
var currentMoney = 0;
var highestMoney = 0;
var highestMoneyRoll = 0;
var dieOne = 0;
var dieTwo = 0;

function rollDice(){
  dieTotal = 0;
  dieOne = 0;
  dieTwo = 0;
  dieOne = Math.floor(Math.random() * 6) +1;
  dieTwo = Math.floor(Math.random() * 6) +1;
  dieTotal = dieOne + dieTwo;
}

function revealStats(){
  document.getElementById("statsTable").style.display = "block";
}



function playGame() {
  startingBet = 0;
  currentMoney = 0;
  highestMoney = 0;
  highestMoneyRoll = 0;

  startingBet = document.getElementById("inputBet").value;

  if (startingBet <= 0){
    alert("The starting bid must be greater than 0.");
  }

  currentMoney = startingBet;
  highestMoney = currentMoney;
  rollCount = 0;
  highestMoneyRoll = rollCount;

  while (currentMoney > 0) {
    rollDice();
    rollCount += 1;

    if (dieTotal == 7) {
      currentMoney += 4;
      if (currentMoney > highestMoney) {
        highestMoney = currentMoney;
        highestMoneyRoll = rollCount;
      }
    }
    else {
      currentMoney -= 1;
    }
    if (currentMoney <= 0){
      document.getElementById("printStartingBet").innerText = startingBet;
      document.getElementById("printRollCount").innerText = rollCount;
      document.getElementById("printHighestMoney").innerText = highestMoney;
      document.getElementById("printHighestMoneyRoll").innerText = highestMoneyRoll;
      document.getElementById("replayButton").innerText = "Play Again?";
    }
  }

}
