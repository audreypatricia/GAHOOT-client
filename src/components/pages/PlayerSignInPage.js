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
      pins: [],
      quiz_id: '',
    };
  }

  componentDidMount() {
    axios
      .get("https://gahoot-server.herokuapp.com/games.json")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          this.setState({ pins: [...this.state.pins, response.data[i].pin]});
          console.log(this.state.pins);

        }
      });
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

    // const random_pin = "nice";

    if (this.state.pins.indexOf(this.state.pin) !== -1) {
      axios
        .post(
          "https://gahoot-server.herokuapp.com/users",
          { user },
          { withCredentials: true }

        )
        .then((response) => {
          if (response.data.status === "created") {
            this.props.handleLogin(response.data);
            console.log(response);
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
    debugger;
    this.props.history.push(`/gamestart/${this.state.quiz_id}`);
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
      <div className="PlayerSignInPage">
        <div className="containerPlayerSignInPage">
          <h1>Gahoot!</h1>
          <div className="PlayerSignInForm">
            <form onSubmit={this._handleSubmit}>
              <p>
                <input
                  placeholder="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this._handleChange}
                />
              </p>
              <p>
                <input
                  placeholder="pin"
                  type="text"
                  name="pin"
                  value={pin}
                  onChange={this._handleChange}
                />
              </p>

              <button placeholder="submit" type="submit">
                Sign In
              </button>
            </form>
          </div>
          <div>{this.state.errors ? this._handleErrors() : null}</div>
        </div>
      </div>
    );
  }
}

export default PlayerSignInPage;
