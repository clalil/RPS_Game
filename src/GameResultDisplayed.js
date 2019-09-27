import React from 'react'

const GameResultDisplayed = (props) => {
        return (
            <div className="gameResults">
                <div className="whoWonDiv">
                <p style={{backgroundColor: "rgba(0, 0, 0, 0.1)"}}>{props.whoDidWin}</p>
                </div>
                <div className="scoreBoard">
                <p>{props.playerCurrentScore}</p>
                <p>{props.opponentCurrentScore}</p>
                </div>
            </div>
        )
}

export default GameResultDisplayed