import { Component, Fragment } from "react";
import "./box.css";

class Box extends Component {
  constructor() {
    super();

    this.state = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    };
  }

  randomColor = () => {
    this.setState({
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    });
  };

  render() {
    return (
      <Fragment>
        <div
          className="box"
          style={{
            background: `rgb(${this.state.r},${this.state.g},${this.state.b})`,
          }}
          onClick={this.randomColor}
        ></div>
      </Fragment>
    );
  }
}

export default Box;
