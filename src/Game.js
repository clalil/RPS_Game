import React, {Component} from 'react'
import Player from "./Player"

const baseState = {
  gameResult: null
}

class Game extends Component {
    constructor(props) {
      super(props)
      this.state = baseState
    }
  
    resetGame = () => {
      this.setState({gameResult: null})
    }
  
    updatePlayerChoice = (choice) => {
      let playerChoice = choice
      const weaponsArray = ['rock', 'paper', 'scissors']
      const randomIndex = Math.floor(Math.random() * weaponsArray.length)
      const randomComputerResult = weaponsArray[randomIndex]
      let gameFinal = this.state.gameResult

      if (playerChoice === randomComputerResult) {
        gameFinal = `Player chose ${playerChoice} and Computer chose ${randomComputerResult} - It's a draw!`
      } else if ((playerChoice === 'rock' && randomComputerResult === 'paper') || (playerChoice === 'paper' && randomComputerResult === 'scissors') || (playerChoice === 'scissors' && randomComputerResult === 'rock')) {
        gameFinal = `Player chose ${playerChoice} and Computer chose ${randomComputerResult} - Computer won!`
      } else if ((playerChoice === 'rock' && randomComputerResult === 'scissors') || (playerChoice === 'paper' && randomComputerResult === 'rock') || (playerChoice === 'scissors' && randomComputerResult === 'paper')) {
        gameFinal = `Player chose ${playerChoice} and Computer chose ${randomComputerResult} - You won!`
      }
     this.setState({gameResult: gameFinal});
    }
  
    render() {
  
      let whoWon = this.state.gameResult
  
      return(
        <div className=".container">
          <h1>Rock, Paper, Scissors</h1>
          <Player 
          onClick={this.updatePlayerChoice}
           />
          <button onClick={this.resetGame}>Try again</button>
          <div>
          {whoWon}
          </div>
        </div>
      )
    }
  }

export default Game;