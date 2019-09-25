import React, { Component } from "react";

const Player = (props) => {
    return (
      <div className="user_choice">
        <button id="rock" onClick={e => props.onClick("rock")}>
        <i className="icon hand rock"></i>
          Rock
        </button>
        <button id="paper" onClick={e => props.onClick("paper")}>
        <i className="icon hand paper"></i>
          Paper
        </button>
        <button id="scissors" onClick={e => props.onClick("scissors")}>
        <i className="icon hand scissors"></i>
          Scissors
        </button>
      </div>
    );
}

export default Player;
