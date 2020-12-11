import React, { Component } from "react";
import "./Square.css";

class Square extends Component {
  constructor(props) {
    super(props);
    const colors = ["#fbf7f0", "#f8d49d", "#8db596", "#709fb0"];
    // maps to state 0 - 3
    this.state = {
      visited: this.props.state,
      colors: colors,
    };
  }

  changeColor = (color) => {
    this.setState((st) => ({
      visited: (st.visited + 1) % 4,
      colors: st.colors,
    }));
  };

  render() {
    return (
      <td
        onClick={this.changeColor}
        style={{ backgroundColor: this.state.colors[this.state.visited] }}
        className="square"
      ></td>
    );
  }
}

export default Square;
