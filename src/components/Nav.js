import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="navlink">
          <Link to="/"> Home | </Link>
          <Link to="/gameplay">Game Play | </Link>
          <Link to="/gamestart">Game Start | </Link>
          <Link to="/host-sign-in">Host Sign In | </Link>
          <Link to="/host-sign-up">Host Sign Up | </Link>
          <Link to="/player-sign-in">Player Sign In | </Link>
          <Link to="/quiz-create">New Quiz | </Link>
          <Link to="/quiz-index">Quizzes | </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
