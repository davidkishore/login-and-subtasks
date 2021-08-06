import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import main from "./main";
import signin from "./signin";
import signup from "./signup";
import Sample from "./sample";
import Userinfo from "./userinfo";
import Sample1 from "./sample1";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={main} />
        <Route path="/signin" component={signin} />
        <Route path="/signup" component={signup} />
        <Route path="/sample" component={Sample} />
        <Route path="/userinfo" component={Userinfo} />
        <Route path="/sample1" component={Sample1} />
      </Router>
    );
  }
}
