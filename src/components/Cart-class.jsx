import { Component } from "react";

class ClassTwo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.para}</p>
      </div>
    );
  }
}
export default ClassTwo;
