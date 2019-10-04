import React, { Component } from "react";
import GameInformation from "./Components/GameInformation";
import Footer from "./Components/Footer";
import Game from "./Components/Game";

class App extends Component {
  render() {
    return (
      <>
        <div className="ui container segment">
          <GameInformation />
          <Game />
        </div>
          <Footer />
      </>
    );
  }
}

export default App;
