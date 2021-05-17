import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Welcome to homepage</h1>
        <Link to="/host-sign-in">Host Sign In</Link>
        <br />
        <Link to="/host-sign-up">Host Sign Up</Link>
        <br />
      </div>
    );
  }
}

export default HomePage;
