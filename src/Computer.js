import React, { Component } from 'react'

class Computer extends Component {
    render() {
      return (
        <div className="runGame">
          <button id="startgame" onClick={e => this.props.onClick(["rock", "paper", "scissors"])}>
            Start Game
          </button>
        </div>
      );
    }
}

export default Computer