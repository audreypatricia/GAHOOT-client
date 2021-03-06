import React, { Component } from "react";
import axios from "axios";

class HostSigUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      host: true,
      errors: "",
    };
  }

  _handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  _handleSubmit = (event) => {
    event.preventDefault();

    const { username, email, password, password_confirmation, host } =
      this.state;

    let user = {
      username: Math.random().toString(),
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      host: host,
    };

    console.log(user);

    axios
      .post(
        "https://gahoot-server.herokuapp.com/users",
        { user },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleLogin(response.data);
          this.redirect();
        } else {
          this.setState({
            errors: response.data.errors,
          });
        }
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
    const { username, email, password, password_confirmation } = this.state;

    return (
      <div className="HostSignUpPage">
        <div className="containerHostSignUpPage">
          <h1>Host Sign Up</h1>
          <div className="HostSignUpForm">
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
              <input
                placeholder="password confirmation"
                type="password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={this._handleChange}
              />

              <button placeholder="submit" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div>{this.state.errors ? this._handleErrors() : null}</div>
      </div>
    );
  }
}

export default HostSigUpPage;
