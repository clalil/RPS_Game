import React, { Component } from "react";

class Player extends Component {
  render() {
    return (
      <div className="user_choice">
        <button id="rock" onClick={e => this.props.onClick("rock")}>
        <i className="icon hand rock"></i>
          Rock
        </button>
        <button id="paper" onClick={e => this.props.onClick("paper")}>
        <i className="icon hand paper"></i>
          Paper
        </button>
        <button id="scissors" onClick={e => this.props.onClick("scissors")}>
        <i className="icon hand scissors"></i>
          Scissors
        </button>
      </div>
    );
  }
}

export default Player;
