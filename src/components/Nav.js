import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  _handleClick = () => {
    axios
      .delete("https://gahoot-server.herokuapp.com/logout", {
        withCredentials: true,
      })
      .then((response) => {
        this.props.handleLogout();
        this.redirect();
      })
      .catch((error) => console.log(error));
  };

  redirect = () => {
    this.props.history.push("/host-sign-in");
    console.log("hi");
  };

  render() {
    console.log(this.props.isLoggedIn);
    return (
      <nav className="nav">
        <div className="navlink">
          <Link to="/"> Home | </Link>
          {/* <Link to="/gameplay">Game Play | </Link>
          <Link to="/gamestart">Game Start | </Link> */}
          {!this.props.isLoggedIn ? (
            <Link to="/host-sign-in">Host Sign In | </Link>
          ) : null}
          {!this.props.isLoggedIn ? (
            <Link to="/host-sign-up">Host Sign Up | </Link>
          ) : null}
          {!this.props.isLoggedIn ? (
            <Link to="/player-sign-in">Player Sign In</Link>
          ) : null}
          {this.props.isLoggedIn && this.props.isHost ? (
            <Link to="/quiz-create">New Quiz | </Link>
          ) : null}
          {this.props.isLoggedIn && this.props.isHost ? (
            <Link to="/quiz-index">Quizzes | </Link>
          ) : null}
          {this.props.isLoggedIn ? (
            <Link to="/logout" onClick={this._handleClick}>
              Log Out
            </Link>
          ) : null}
        </div>
      </nav>
    );
  }
}

export default Nav;
