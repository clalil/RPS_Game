import React, { Component } from "react";
import golem from './img/golem-head.png'
import scroll from './img/scroll.png'
import scissors from './img/scissors.png'

const Player = (props) => {
    return (
      <div className="user_choice">
        <img id="rock" className="golem-head" onClick={e => props.onClick("rock")} src={golem} alt="Rock"/>
        <img id="paper" className="scroll" onClick={e => props.onClick("paper")} src={scroll} alt="Paper"/>
        <img id="scissors" className="scissors" onClick={e => props.onClick("scissors")} src={scissors} alt="Scissors"/>
      </div>
    );
}
export default Player;
