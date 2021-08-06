import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class main extends Component {
  render() {
    return (
      <div>
        <Link to="/signin">
          <button type="button">Signin</button>
        </Link>
        <Link to="/signup">
          <button type="button">Signup</button>
        </Link>
      </div>
    );
  }
}
