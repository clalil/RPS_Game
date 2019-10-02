import React from "react";

const GameResultDisplayed = props => {
  return (
  <div className="ui raised segments" id="cyDivResult">
    <div className="who-won-div">
      <p style={{ padding: "1rem" }}>{props.whoDidWin}</p>
    </div>
    <div className="score-board">
      <div className="ui label">
        <div className="ui label">
          <i className="user icon"></i>
          You
        </div>
        <span className="ui basic label">
          <p>{props.playerCurrentScore}</p>
        </span>
      </div>
      <div className="ui label">
        <div className="ui label">
          <i className="user secret icon"></i>
          Opponent
        </div>
        <span className="ui basic label">
          <p>{props.opponentCurrentScore}</p>
        </span>
      </div>
    </div>
  </div>
  );
};

export default GameResultDisplayed;
