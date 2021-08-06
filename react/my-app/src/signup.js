import React, { Component } from "react";
import Register from "./components/signup";

export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hai",
    };
  }
  render() {
    return (
      <div>
        signup
        <Register name={this.state.name} />
      </div>
    );
  }
}
