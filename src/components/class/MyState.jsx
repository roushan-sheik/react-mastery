import { Component } from "react";
class MyState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    //NOTE -  Increment
    const handleClick = () => {
      console.log(this);
      this.setState({
        count: this.state.count + 1,
      });
    };
    //NOTE - Decrement
    const handleClickDecrement = () => {
      console.log(this);
      this.setState({
        count: this.state.count - 1,
      });
    };
    const { count } = this.state;
    return (
      <div className="container m-auto">
        <h1>Counter State change App</h1>
        <h2>{count}</h2>
        <button onClick={handleClick} className="btn  btn-primary">
          Increment
        </button>
        <button
          onClick={handleClickDecrement}
          className="btn m-2 btn-secondary"
        >
          Decrement
        </button>
      </div>
    );
  }
}
export default MyState;
