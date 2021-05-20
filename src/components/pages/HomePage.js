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
          <div className="HomePageMain">
            <div className="HomePageForm1">
              <Link to="/host-sign-in">
                <div className="HomePageDiv">Host Sign In</div>
              </Link>
            </div>

            <div className="HomePageForm2">
              <Link to="/host-sign-up">
                <div className="HomePageDiv">Host Sign Up</div>
              </Link>
            </div>

            <div className="HomePageForm3">
              <Link to="/player-sign-in">
                <div className="HomePageDiv">Player Sign In</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
