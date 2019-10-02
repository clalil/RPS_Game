import React from "react";
import rock from "../img/rock.png";
import paper from "../img/paper.png";
import scissors from "../img/scissors.png";

const Player = props => {
  const playerWeaponsArray = ["rock", "paper", "scissors"];

  return (
    <div className="userChoice">
      <img
        id="rock-btn"
        className="rock"
        onClick={e => props.onClick(playerWeaponsArray[0])}
        src={rock}
        alt="Rock"
      />
      <img
        id="paper-btn"
        className="paper"
        onClick={e => props.onClick(playerWeaponsArray[1])}
        src={paper}
        alt="Paper"
      />
      <img
        id="scissors-btn"
        className="scissors"
        onClick={e => props.onClick(playerWeaponsArray[2])}
        src={scissors}
        alt="Scissors"
      />
    </div>
  );
};
export default Player;
