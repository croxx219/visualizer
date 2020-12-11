import "./App.css";
import { Component } from "react";
import Board from "./grid/Board";
class App extends Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default App;
