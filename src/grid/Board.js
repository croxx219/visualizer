import React, { Component } from "react";
import Square from "./Square";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardHeight: Math.floor(document.documentElement.clientHeight / 26),
      boardWidth: Math.floor(window.innerWidth / 25),
    };
  }

  renderRow = (el, i) => {
    return (
      <tr key={i}>
        {Array(this.state.boardWidth).fill(1).map(this.renderCell)}
      </tr>
    );
  };

  renderCell = (el, j) => {
    return <Square state={0} key={j} />;
  };

  render() {
    return (
      <div>
        <table className="table-board">
          <tbody>
            {Array(this.state.boardHeight).fill(1).map(this.renderRow)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
