import React, {Component} from 'react'
import Player from "./Player"

class App extends Component {
  render() {
    return(
      <div>
        <h1>Rock, Paper, Scissors</h1>
        <Player />
      </div>
    )
  }
}

export default App;
