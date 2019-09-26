import React, { Component } from 'react'

export default class GameResultDisplayed extends Component {
    render() {
        return (
            <div>
                <p>{this.props.whoDidWin}</p>
                <p>{this.props.playerCurrentScore}</p>
                <p>{this.props.opponentCurrentScore}</p>
            </div>
        )
    }
}