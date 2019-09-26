import React from 'react'

const GameResultDisplayed = (props) => {
        return (
            <div className="gameResults">
                <div className="ui center aligned segment">
                <p>{props.whoDidWin}</p>
                </div>
                <div className="scoreBoard">
                <p>{props.playerCurrentScore}</p>
                <p>{props.opponentCurrentScore}</p>
                </div>
            </div>
        )
}

export default GameResultDisplayed