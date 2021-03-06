import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class HostSigInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: "",
    };
  }

  componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null;
  }

  _handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  _handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;

    let user = {
      username: username,
      email: email,
      password: password,
    };

    axios
      .post(
        "https://gahoot-server.herokuapp.com/login",
        { user },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          this.props.handleLogin(response.data);
          this.redirect();
        } else {
          this.setState({
            errors: response.data.errors,
          });
        }
        // console.log(response);
      })
      .catch((error) => console.log("api errors:", error));
  };

  redirect = () => {
    this.props.history.push("/quiz-index");
  };

  _handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <div className="HostSignInPage">
        <div className="containerHostSignInPage">
          <h1>Host Sign In</h1>
          <div className="HostSignInForm">
            <form onSubmit={this._handleSubmit}>
              <input
                placeholder="email"
                type="text"
                name="email"
                value={email}
                onChange={this._handleChange}
              />
              <input
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={this._handleChange}
              />

              <button placeholder="submit" type="submit">
                Sign In
              </button>

              <div>
                or <Link to="/host-sign-up">sign up</Link>
              </div>
            </form>
          </div>
          <div>{this.state.errors ? this._handleErrors() : null}</div>
        </div>
      </div>
    );
  }
}

export default HostSigInPage;
