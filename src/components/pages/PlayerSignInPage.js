import React, { Component } from "react";
import axios from "axios";

class PlayerSignInPage extends Component {
  constructor(props) {
    super(props);
    let ran = Math.random();
    this.state = {
      username: "",
      email: `${ran}@ga.com`,
      password: `${ran}`,
      password_confirmation: `${ran}`,
      host: false,
      pin: "",
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

    const { username, email, password, password_confirmation, host, pin } =
      this.state;

    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      host: host,
      pin: pin,
    };

    console.log(user);

    const random_pin = "nice";

    if (this.state.pin === random_pin) {
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
    } else {
        alert("pin not valid");
    }
  };

  redirect = () => {
    this.props.history.push("/gamestart");
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
    const { username, pin } = this.state;

    return (
      <div>
        <h1>Player Sign In</h1>
        <form onSubmit={this._handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this._handleChange}
          />
          <input
            placeholder="pin"
            type="text"
            name="pin"
            value={pin}
            onChange={this._handleChange}
          />

          <button placeholder="submit" type="submit">
            Sign In
          </button>
        </form>
        <div>{this.state.errors ? this._handleErrors() : null}</div>
      </div>
    );
  }
}

export default PlayerSignInPage;
