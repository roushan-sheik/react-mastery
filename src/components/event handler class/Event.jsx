import { Component } from "react";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setValue: "",
    };
  }
  render ()
  {
    
    return (
      <div>
        <h1>Event Handling</h1>
        <input type="text" name="text" id="" oneChange={this.handleChange} />
      </div>
    );
  }
}
