const gameButton = document.querySelectorAll('.gameButton');

const WINNING_CONDITION = [["rock","scissors"],["scissors","paper"],["paper","rock"]]

const DRAWING_CONDITION = [["rock","rock"],["scissors","scissors"],["paper","paper"]]

const LOSING_CONDITION = [["rock","paper"],["paper","scissors"],["scissors","rock"]]

const winningMessageElement = document.getElementById('winningMessage')

const winningMessageText = document.querySelector('[data-winning-message-text]')

const restartButton = document.getElementById('restartButton')

const resetButton = document.getElementById('resetButton')

const image = document.getElementById('tofuman')

const counter = document.getElementById('scoreCounter')

const currentScore = document.getElementById('currentScore')

var score = 0;

gameButton.forEach(buttons => {
  buttons.addEventListener('click', handleClick)
})

restartButton.addEventListener('click', restartGame)

resetButton.addEventListener('click',resetScore)

image.addEventListener('mouseover',hoverImage)

image.addEventListener('mouseout',awayImage)

function handleClick(e) {
    var value = e.target.value
    var choice = compChoice()
    var results = compileResult(value,choice)
    if (checkWin(results,WINNING_CONDITION)) {
      var dif = 'win'
      endGame('win')
    } else if (isDraw(results,DRAWING_CONDITION)) {
      var dif = 'draw'
      endGame('draw')
    } else {
      var dif = 'lose'
      endGame('lose')
    }
    score = updateScore(dif,score);
    currentScore.innerText = `Current Score: ${score}`
    }

function restartGame() {
  winningMessageElement.classList.remove('show')
}

function hoverImage() {
  happycharacter.classList.add('show')
}

function awayImage() {
  happycharacter.classList.remove('show')
}

function endGame(draw) {
  if (draw.localeCompare('win') == 0) {
    winningMessageText.innerText = 'You Win :)'
  } else if (draw.localeCompare('draw') == 0) {
    winningMessageText.innerText = 'Its a Draw :/'
  } else {
    winningMessageText.innerText = 'You Lose :('
  }
  winningMessageElement.classList.add('show')
}

function resetScore() {
  winningMessageElement.classList.remove('show')
  score = 0;
  currentScore.innerText = `Current Score: ${score}`
}

function updateScore(dif,score) {
  if (dif.localeCompare('win') == 0) {
    score++
    counter.innerText = `Your Score: ${score}`
  } else if (dif.localeCompare('draw') == 0) {
    score
    counter.innerText = `Your Score: ${score}`
  } else {
    score--
    counter.innerText = `Your Score: ${score}`
  }
  return score;
}

function compChoice() {
    var number = Math.floor(Math.random()*3)
    if (number == 1) {
      const choice = "rock"
      return choice
    } else if (number == 2) {
      const choice = "paper"
      return choice
    } else {
      const choice = "scissors"
      return choice
    }}

function compileResult(userChoice,compChoice) {
  const results = []
  results.push(userChoice)
  results.push(compChoice)
  return results
}

function checkWin(results,condition) {
    const compareResults = [];
    for (var i = 0; i <= condition.length; i++) {
      var comparison = JSON.stringify(results) == JSON.stringify(condition[i])
      compareResults.push(comparison)
    }
    if (compareResults.includes(true)) {
      return true
    } else {
      return false
    }
  }

function isDraw(results,condition) {
  const compareResults = [];
  for (var i = 0; i <= condition.length; i++) {
     var comparison = JSON.stringify(results) == JSON.stringify(condition[i])
     compareResults.push(comparison)
   }
   if (compareResults.includes(true)) {
     return true
   } else {
     return false
   }
 }
