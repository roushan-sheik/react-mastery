import { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    //NOTE -  Increment
    function handleClick() {
      console.log(this);
      this.setState({
        count: this.state.count + 1,
      });
    }

    const { count } = this.state;
    return (
      <div className="container m-auto">
        <h1>Counter State change App</h1>
        <h2>{count}</h2>
        <button onClick={handleClick.bind(this)} className="btn  btn-primary">
          Increment
        </button>
      </div>
    );
  }
}
export default EventBinding;
