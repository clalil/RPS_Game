import React, {Component} from 'react'
import Player from "./Player"
import GameInformation from './GameInformation'
import GameResultDisplayed from './GameResultDisplayed'


const baseState = {
  gameResult: null,
  opponentScore: 0,
  playerScore: 0
}

const weaponsArray = ['rock', 'paper', 'scissors']

class Game extends Component {
    constructor(props) {
      super(props)
      this.state = baseState
    }
  
    resetGame = (ms) => {
      setTimeout( 
        () => this.setState({
          gameResult: null
        }),
        ms
      );
    }

    resetScoreBoard = () => {
      this.setState({
        opponentScore: 0,
        playerScore: 0
      })
    }

      updatePlayerChoice = (playerChoice) => {
      const randomIndex = Math.floor(Math.random() * weaponsArray.length)
      const randomComputerResult = weaponsArray[randomIndex]
      let gameFinal = this.state.gameResult
      let opponentScore = this.state.opponentScore
      let playerScore = this.state.playerScore

      if (playerChoice === randomComputerResult) {
        gameFinal = `Player chose ${playerChoice} and Computer chose ${randomComputerResult} - It's a draw!`
      } else if ((playerChoice === 'rock' && randomComputerResult === 'paper') || (playerChoice === 'paper' && randomComputerResult === 'scissors') || (playerChoice === 'scissors' && randomComputerResult === 'rock')) {
        gameFinal = `Player chose ${playerChoice} and Computer chose ${randomComputerResult} - Computer won!`
        this.setState({opponentScore: opponentScore + 1})
      } else if ((playerChoice === 'rock' && randomComputerResult === 'scissors') || (playerChoice === 'paper' && randomComputerResult === 'rock') || (playerChoice === 'scissors' && randomComputerResult === 'paper')) {
        gameFinal = `Player chose ${playerChoice} and Computer chose ${randomComputerResult} - You won!`
        this.setState({playerScore: playerScore + 1})
      }
     this.setState({gameResult: gameFinal});
     this.resetGame(5000)
     }
  
    render() {

      return(
        <div className=".container">
          <GameInformation />
          
          <Player 
          onClick={this.updatePlayerChoice}
           />

          <button onClick={this.resetScoreBoard}>Reset scoreboard</button>

          <GameResultDisplayed 
          whoDidWin={this.state.gameResult} 
          playerCurrentScore={this.state.playerScore}
          opponentCurrentScore={this.state.opponentScore}
          />
        </div>
      )
    }
  }

export default Game;