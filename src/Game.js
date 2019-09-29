import React, {Component} from 'react'
import Player from "./Player"
import GameResultDisplayed from './GameResultDisplayed'

const weaponsArray = ['rock', 'paper', 'scissors']

class Game extends Component {
    constructor(props) {
      super(props)
      this.state = {
        gameResult: null,
        opponentScore: 0,
        playerScore: 0
      }
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
        gameFinal = `You chose ${playerChoice} and Computer chose ${randomComputerResult} - It's a draw!`
      } else if (
        (playerChoice === weaponsArray[0] && randomComputerResult === weaponsArray[1])
         || (playerChoice === weaponsArray[1] && randomComputerResult === weaponsArray[2]) 
         || (playerChoice === weaponsArray[2] && randomComputerResult === weaponsArray[0])) {
        gameFinal = `You chose ${playerChoice} and Computer chose ${randomComputerResult} - Computer won!`
        this.setState({opponentScore: opponentScore + 1})
      } else {
        gameFinal = `You chose ${playerChoice} and Computer chose ${randomComputerResult} - You won!`
        this.setState({playerScore: playerScore + 1})
      }
     this.setState({gameResult: gameFinal});
     this.resetGame(4000)
     }
  
    render() {

      return(
        <div>
          <Player 
          onClick={this.updatePlayerChoice}
          />
          <button className="ui inverted black button" id="resetBtn"
            onClick={this.resetScoreBoard}>
            Reset scoreboard
          </button>
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