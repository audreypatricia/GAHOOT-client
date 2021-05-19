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
          <div className="HostPageForm">
            <Link to="/host-sign-in">Host Sign In</Link>
          </div>

          <div className="HostPageForm">
            <Link to="/host-sign-up">Host Sign Up</Link>
          </div>

          <div className="HostPageForm">
            <Link to="/player-sign-in">Player Sign In</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
