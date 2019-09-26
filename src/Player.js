import React from "react";
import golem from './img/golem-head.png'
import scroll from './img/scroll.png'
import scissors from './img/scissors.png'

const Player = (props) => {
  const playerWeaponsArray = ["rock", "paper", "scissors"]

    return (
      <div className="user_choice">
        <img id="rock" className="golem-head" onClick={e => props.onClick(playerWeaponsArray[0])} src={golem} alt="Rock"/>
        <img id="paper" className="scroll" onClick={e => props.onClick(playerWeaponsArray[1])} src={scroll} alt="Paper"/>
        <img id="scissors" className="scissors" onClick={e => props.onClick(playerWeaponsArray[2])} src={scissors} alt="Scissors"/>
      </div>
    );
}
export default Player;
