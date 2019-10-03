import React, { Component } from "react";
import Player from "./Player";
import ResetBtn from "./ResetBtn";
import GameResultDisplayed from "./GameResultDisplayed";

class Game extends Component {

  state = {
    gameResult: null,
    opponentScore: 0,
    playerScore: 0
  };

  playTheGame = playerChoice => {
    const weaponsArray = ["rock", "paper", "scissors"];
    const randomComputerChoice = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];

    let gameFinal = this.state.gameResult;
    let opponentScore = this.state.opponentScore;
    let playerScore = this.state.playerScore;

    if (playerChoice === randomComputerChoice) {
      gameFinal = `You chose ${playerChoice} and Computer chose ${randomComputerChoice} - It's a tie!`;
    } else if (
      (playerChoice === weaponsArray[0] &&
        randomComputerChoice === weaponsArray[1]) ||
      (playerChoice === weaponsArray[1] &&
        randomComputerChoice === weaponsArray[2]) ||
      (playerChoice === weaponsArray[2] &&
        randomComputerChoice === weaponsArray[0])
    ) {
      gameFinal = `You chose ${playerChoice} and Computer chose ${randomComputerChoice} - Computer wins!`;
      this.setState(prevState => ({ opponentScore: prevState.opponentScore + 1 }));
    } else {
      gameFinal = `You chose ${playerChoice} and Computer chose ${randomComputerChoice} - You win!`;
      this.setState(prevState => ({ playerScore: prevState.playerScore + 1 }));
    }
    this.setState({ gameResult: gameFinal });
    this.resetGame(4000);
  };

  resetGame = ms => {
    setTimeout(
      () =>
        this.setState({
          gameResult: null
        }),
      ms
    );
  };

  resetScoreBoard = () => {
    this.setState({
      opponentScore: 0,
      playerScore: 0
    });
  };

  render() {
    return (
      <div>
        <Player onClick={this.playTheGame} />
        <ResetBtn onClick={() => this.resetScoreBoard} />
        <GameResultDisplayed
          whoDidWin={this.state.gameResult}
          playerCurrentScore={this.state.playerScore}
          opponentCurrentScore={this.state.opponentScore}
        />
      </div>
    );
  }
}

export default Game;
