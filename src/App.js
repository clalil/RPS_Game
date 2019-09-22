import React, {Component} from 'react'
import Player from "./Player"
import Computer from "./Computer"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerChoice: null,
      computerChoice: null,
      gameResult: null
    }
    this.updatePlayerChoice = this.updatePlayerChoice.bind(this)
    this.updateComputerChoice = this.updateComputerChoice.bind(this)
  }

  resetGame = () => {
    this.setState({playerChoice: null})
    this.setState({computerChoice: null})
    this.setState({gameResult: null})
  }

  updatePlayerChoice = (type) => {
    let playchoice = this.state.playerChoice
    if(type === 'rock') {
      playchoice = 1
    } 
    else if(type === 'paper') {
      playchoice = 2
    } 
    else if(type === 'scissors') {
      playchoice = 3
    } else {
      playchoice = 'No choice was made'
    }
    this.setState({playerChoice: playchoice})
  }

  updateComputerChoice = (type) => {
    let compChoice = this.state.computerChoice
    compChoice = Math.floor(Math.random() * type.length + 1);
    this.setState({computerChoice: compChoice})
    this.gameEndResult()
  }

  gameEndResult = () => {
    let playerSelection = this.state.playerChoice
    let compSelection = this.state.computerChoice
    let gameFinal = this.state.gameResult

    if(playerSelection === null) {
      gameFinal = 'You need to choose a weapon'
    } else if(playerSelection === compSelection) {
      gameFinal = 'It\'s a draw!'
    } else if((playerSelection === 1 && compSelection === 2) || (playerSelection === 2 && compSelection === 3) || (playerSelection === 3 && compSelection === 1)) {
      gameFinal = 'You won!'
    } else {
      gameFinal = 'Computer won!'
    }
   this.setState({gameResult: gameFinal})
  }

  render() {

    let playerChoiceDisplay
    if(this.state.playerChoice === 1) {
      playerChoiceDisplay = 'You chose Rock'
    } else if(this.state.playerChoice === 2) {
      playerChoiceDisplay = 'You chose Paper'
    } else if(this.state.playerChoice === 3){
      playerChoiceDisplay = 'You chose Scissors'
    }

    let computerChoiceDisplay
    if(this.state.computerChoice === 1) {
      computerChoiceDisplay = 'Computer chose Rock'
    } else if(this.state.computerChoice === 2) {
      computerChoiceDisplay = 'Computer chose Paper'
    } else if(this.state.computerChoice === 3){
      computerChoiceDisplay = 'Computer chose Scissors'
    }

    let whoWon = this.state.gameResult

    return(
      <div>
        <h1>Rock, Paper, Scissors</h1>
        <Player onClick={this.updatePlayerChoice} />
        {playerChoiceDisplay}
        <Computer 
        onClick={this.updateComputerChoice} />
        {computerChoiceDisplay}
        <button onClick={this.resetGame}>Reset Game</button>
        <div>
        {whoWon}
        </div>
      </div>
    )
  }
}

export default App;
