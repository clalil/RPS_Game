import React, { Component } from 'react'

class Computer extends Component {
    constructor(props) {
        super(props)
        this.myArray = ["rock", "paper", "scissors"]
        this.state = {
            computerChoice: null
        }
    } 
    render() {
        return (
            <div className="runGame">
            <button id="startGame">
                onClick={() => this.setState({computerChoice: 
                    this.myArray[Math.floor(Math.random()*3)]
                })}
                {this.state.computerChoice}
                Start Game
            </button>
            </div>
        )
    }
}

export default Computer