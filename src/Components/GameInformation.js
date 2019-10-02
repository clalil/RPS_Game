import React from "react";

const GameInformation = () => {
  return (
  <div className="game-header">
    <h1>Rock, Paper, Scissors</h1>
    <h3>Welcome, the rules are simple:</h3>
    <ul>
      <li>
        <span style={{ fontWeight: "700" }}>ROCK</span>
        <span style={{ padding: "0.4rem" }}>beats</span>
        <span style={{ fontWeight: "700" }}>SCISSORS</span>
      </li>
      <li>
        <span style={{ fontWeight: "700" }}>PAPER</span>
        <span style={{ padding: "0.4rem" }}>beats</span>
        <span style={{ fontWeight: "700" }}>ROCK</span>
      </li>
      <li>
        <span style={{ fontWeight: "700" }}>SCISSORS</span>
        <span style={{ padding: "0.4rem" }}>beats</span>
        <span style={{ fontWeight: "700" }}>PAPER</span>
      </li>
    </ul>
  </div>
  );
};

export default GameInformation;
