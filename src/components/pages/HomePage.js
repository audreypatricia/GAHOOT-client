import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Scoreboard from '../Scoreboard/Scoreboard';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="HomePage">
        <div className="containerHostSignUpPage">
          <h1>Welcome to Gahoot!</h1>
          <Link to="/host-sign-in">Host Sign In</Link>
          <br />
          <Link to="/host-sign-up">Host Sign Up</Link>
          <br />
          <Link to="/host-sign-in">Host Sign In</Link>
          <br />
          <Link to="/host-sign-up">Host Sign Up</Link>
          <br />
        </div>
      </div>
    );
  }
}

export default HomePage;
