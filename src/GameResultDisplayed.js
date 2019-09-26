import React from 'react'

const GameResultDisplayed = (props) => {
        return (
            <div>
                <p>{props.whoDidWin}</p>
                <p>{props.playerCurrentScore}</p>
                <p>{props.opponentCurrentScore}</p>
            </div>
        )
}

export default GameResultDisplayed