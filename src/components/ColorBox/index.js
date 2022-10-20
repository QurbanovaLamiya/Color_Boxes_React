import { Component, Fragment } from "react";
import Box from "../Box";
import "./colorBox.css";

class ColorBox extends Component {
  constructor() {
    super();

    this.state = {
      arr: Array.from({ length: 16 }),
    };
  }

  render() {
    return (
      <Fragment>
        <h1>Color App</h1>
        <div className="container">
          {this.state.arr.map((item, index) => (
            <Box key={`color-index-${index}`} item={item} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default ColorBox;
