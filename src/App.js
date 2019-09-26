import React, { Component } from 'react'
import Footer from './Footer'
import Game from './Game'

class App extends Component {
  render() {
    return (
      <div>
        <Game />
        <Footer />
      </div>
    )
  }
}

export default App