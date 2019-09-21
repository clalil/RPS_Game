import React, {Component} from 'react'
import Player from "./Player"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choices: 0
    }
    this.updateChoice = this.updateChoice.bind(this)
  }

  updateChoice = (type) => {
    let choice = this.state.choices
    if(type === 'rock') {
      choice = 1
    } 
    if(type === 'paper') {
      choice = 2
    } 
    if(type === 'scissors') {
      choice = 3
    } else {
      choice = 'No choice was made'
    }
    this.setState({choices: choice})
  }

  render() {
    return(
      <div>
        <h1>Rock, Paper, Scissors</h1>
        <Player onClick={this.updateChoice} />
      </div>
    )
  }
}

export default App;
