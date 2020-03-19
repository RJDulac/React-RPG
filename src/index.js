import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    playerTurn: true
  };
  onHandleAttack = () => {
    this.setState({
      playerTurn: !this.state.playerTurn
    });
  };
  render() {
    if (this.state.playerTurn) {
      return (
        <div>
          <button onClick={this.onHandleAttack}>Hit</button>
          <div>Player's turn</div>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.onHandleAttack}>Continue</button>
          <div>Monster's turn</div>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
