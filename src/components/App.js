import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePlayPage from "./pages/GamePlayPage";
import GameStartPage from "./pages/GameStartPage";
import HostSignInPage from "./pages/HostSignInPage";
import PlayerSignInPage from "./pages/PlayerSignInPage";
import QuizCreatePage from "./pages/QuizCreatePage";
import QuizIndexPage from "./pages/QuizIndexPage";
import QuizItem from "./QuizItem";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />;
          <Route exact path="/gameplay" component={GamePlayPage} />;
          <Route exact path="/gamestart" component={GameStartPage} />;
          <Route exact path="/host-sign-in" component={HostSignInPage} />;
          <Route exact path="/player-sign-in" component={PlayerSignInPage} />;
          <Route exact path="/quiz-create" component={QuizCreatePage} />;
          <Route exact path="/quiz-index" component={QuizIndexPage} />;
        </Switch>
        <QuizItem />
      </div>
    </Router>
  );
}

export default App;
