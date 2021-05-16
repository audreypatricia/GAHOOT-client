import React, { Component } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleClick = () => {
    axios
      .delete("https://gahoot-server.herokuapp.com/logout", {
        withCredentials: true,
      })
      .then((response) => {
        this.props.handleLogout();
        this.props.history.push("/");
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <h1>Welcome to homepage</h1>
        <Link to="/host-sign-in">Host Sign In</Link>
        <br />
        <Link to="/host-sign-up">Host Sign Up</Link>
        <br />
        {this.props.loggedInStatus ? (
          <Link to="/logout" onClick={this._handleClick}>
            Log Out
          </Link>
        ) : null}
      </div>
    );
  }
}

export default HomePage;
