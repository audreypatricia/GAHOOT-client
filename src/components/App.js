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
import QuizItem from "./QuizItem";
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
          this.handleLogin(response);
        } else {
          this.handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
  _handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    });
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
            <Route exact path="/" component={HomePage} />;
            <Route exact path="/gameplay" component={GamePlayPage} />;
            <Route exact path="/gamestart" component={GameStartPage} />;
            <Route exact path="/host-sign-in" component={HostSignInPage} />;
            <Route exact path="/host-sign-up" component={HostSignUpPage} />;
            <Route exact path="/player-sign-in" component={PlayerSignInPage} />;
            <Route exact path="/quiz-create" component={QuizCreatePage} />;
            <Route exact path="/quiz-index" component={QuizIndexPage} />;
          </Switch>
          <QuizItem />
        </div>
      </Router>
    );
  }
}

export default App;
