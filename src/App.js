import React, {Component} from 'react'
import Player from "./Player"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerChoice: null
    }
    this.updateChoice = this.updateChoice.bind(this)
  }

  updateChoice = (type) => {
    let choice = this.state.playerChoice
    if(type === 'rock') {
      choice = 1
    } 
    else if(type === 'paper') {
      choice = 2
    } 
    else if(type === 'scissors') {
      choice = 3
    } else {
      choice = 'No choice was made'
    }
    
    this.setState({playerChoice: choice})
  }

  render() {

    let playerChoiceDisplay
    if(this.state.playerChoice == 1) {
      playerChoiceDisplay = 'You chose "Rock"'
    } else if(this.state.playerChoice == 2) {
      playerChoiceDisplay = 'You chose Paper'
    } else if(this.state.playerChoice == 3){
      playerChoiceDisplay = ' You chose Scissors'
    }

    return(
      <div>
        <h1>Rock, Paper, Scissors</h1>
        <Player onClick={this.updateChoice} />
        {playerChoiceDisplay}
      </div>
    )
  }
}

export default App;
