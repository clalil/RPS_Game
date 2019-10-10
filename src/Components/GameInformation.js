import React from "react";

const GameInformation = () => {
  return (
    <div className="game-header">
      <h1>Rock, Paper, Scissors</h1>
      <h3>Welcome, the rules are simple:</h3>
      <ul>
        {[["ROCK", "SCISSORS"],["PAPER", "ROCK"],["SCISSORS", "PAPER"]].map(
          arr => {
            return (
            <li>
              <span style={{ fontWeight: "700" }}>{arr[0]}</span>
              <span style={{ padding: "0.4rem" }}>beats</span>
              <span style={{ fontWeight: "700" }}>{arr[1]}</span>
            </li>
            )
          }
        )}
      </ul>
    </div>
  );
};

export default GameInformation;
