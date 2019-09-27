import React, { Component } from 'react'
import GameInformation from './GameInformation'
import Footer from './Footer'
import Game from './Game'

class App extends Component {
  render() {
    return (
      <>
      <div className="ui container segment">
        <GameInformation /> 
        <Game />
      </div>
      <div>
        <Footer />
      </div>
      </>
    )
  }
}

export default App