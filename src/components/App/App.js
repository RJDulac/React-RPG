import React, { Component } from "react";

import HealthBar from "../HealthBar/HealthBar";
import Attack from "../Attack/Attack";

class App extends Component {
  state = {
    playerTurn: true,
    playerHealth: 49,
    monsterHealth: 100,
    time: new Date().toLocaleTimeString()
  };
  //just a test -remove later
  componentDidMount() {
    //use setInterval for damage over time - if not turn based
    setInterval(() => {
      this.setState({ monsterHealth: this.state.monsterHealth - 20 });
    }, 1000);
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }
  render() {
    const turn = this.state.playerTurn ? "player turn" : "monster turn";

    return (
      <div>
        <span>{this.state.time}</span>
        <HealthBar name="Player" health={this.state.playerHealth} />
        <HealthBar name="Monster" health={this.state.monsterHealth} />
        <Attack turn={this.state} />
        <p>{turn}</p>
      </div>
    );

    //zombie code -- remove later
    // if (this.state.playerTurn) {
    //   return (
    //     <div>
    //       <HealthBar health={this.state.playerHealth} />
    //       <button onClick={this.onHandleAttack}>Hit</button>
    //       <div>Player's turn</div>
    //       <footer>
    //         Copyright &copy; {new Date().getFullYear()}, Ryan Dulac
    //       </footer>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <button onClick={this.onHandleAttack}>Continue</button>
    //       <div>Monster's turn</div>
    //     </div>
    //   );
    // }
  }
}

export default App;
