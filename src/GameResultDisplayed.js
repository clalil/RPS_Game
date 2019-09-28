import React from 'react'

const GameResultDisplayed = (props) => {
        return (
                <div className="ui raised segments">
                    <div className="whoWonDiv">
                        <p style={{padding: "1rem"}}>{props.whoDidWin}</p>
                    </div>

                    <div className="scoreBoard">
                            <div className="ui label" tabindex="0">
                            <div className="ui label">
                                <i className="user icon"></i> 
                                You
                            </div>
                                <a className="ui basic label">
                                    <p>{props.playerCurrentScore}</p>
                                </a>
                            </div>
                    <div className="ui label" tabindex="0">
                        <div className="ui label">
                            <i className="user secret icon"></i> 
                            Opponent
                        </div>
                            <a className="ui basic label">
                                <p>{props.opponentCurrentScore}</p>
                            </a>
                        </div>
                    </div>
            </div>
        )
}

export default GameResultDisplayed