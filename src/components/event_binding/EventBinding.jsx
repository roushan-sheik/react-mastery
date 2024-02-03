import { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  //NOTE -  Increment method
  handleClick() {
    console.log(this);
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    const { count } = this.state;
    return (
      <div className="container m-auto">
        <h1>Counter State change App</h1>
        <h2>{count}</h2>
        <button onClick={this.handleClick} className="btn  btn-primary">
          Increment
        </button>
      </div>
    );
  }
}
export default EventBinding;
