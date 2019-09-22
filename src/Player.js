import React, { Component } from "react";

class Player extends Component {
  render() {
    return (
      <div className="user_choice">
        <button id="rock" onClick={e => this.props.onClick("rock")}>
          Rock
        </button>
        <button id="paper" onClick={e => this.props.onClick("paper")}>
          Paper
        </button>
        <button id="scissors" onClick={e => this.props.onClick("scissors")}>
          Scissors
        </button>
      </div>
    );
  }
}

export default Player;
