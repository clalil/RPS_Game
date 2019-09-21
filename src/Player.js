import React, { Component } from "react"

class Player extends Component {
    render() {
        return (
            <div className="user_choice">
                <button id="rock">Rock</button>
                <button id="paper">Paper</button>
                <button id="scissors">Scissors</button>
            </div>
        )
    }
}

export default Player