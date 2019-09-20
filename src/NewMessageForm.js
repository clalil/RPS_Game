import React, { Component } from "react"

class NewMessageForm extends Component {
    render() {
        return(
            <div>
                <input
                type="text"
                data-testid="messageText"
                />
            </div>
        )
    }
}

export default NewMessageForm