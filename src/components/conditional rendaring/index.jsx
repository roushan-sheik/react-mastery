import { Component } from "react";
import Home from "./Home";
import Login from "./Login";

class ConditionalRendaring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    const { isLoggedIn } = this.state;
    return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
  }
}
export default ConditionalRendaring;
