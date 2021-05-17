import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePlayPage from "./pages/GamePlayPage";
import GameStartPage from "./pages/GameStartPage";
import HostSignInPage from "./pages/HostSignInPage";
import HostSignUpPage from "./pages/HostSignUpPage";
import PlayerSignInPage from "./pages/PlayerSignInPage";
import QuizCreatePage from "./pages/QuizCreatePage";
import QuizIndexPage from "./pages/QuizIndexPage";
// import QuizItem from "./QuizItem";
// import TimeCircle from "./TimeCircle"
import Nav from "./Nav";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {},
    };
    this._handleLogin = this._handleLogin.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
  }

  componentDidMount() {
    this.loginStatus();
  }

  loginStatus = () => {
    axios
      .get("https://gahoot-server.herokuapp.com/logged_in", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.logged_in) {
          this._handleLogin(response);
        } else {
          this._handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  _handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    });
    console.log(this.state.user)
  };

  _handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <HomePage
                  {...props}
                  handleLogout={this._handleLogout}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              exact
              path="/host-sign-in"
              render={(props) => (
                <HostSignInPage
                  {...props}
                  handleLogin={this._handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              exact
              path="/host-sign-up"
              render={(props) => (
                <HostSignUpPage
                  {...props}
                  handleLogin={this._handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route exact path="/gameplay" component={GamePlayPage} />;
            <Route exact path="/gamestart" component={GameStartPage} />;
            <Route exact path="/player-sign-in" component={PlayerSignInPage} />;
            <Route exact path="/quiz-create" component={QuizCreatePage} />;
            <Route exact path="/quiz-index" component={QuizIndexPage} />;
          </Switch>
          {/* <QuizItem /> */}
        </div>
      </Router>
    );
  }
}

export default App;