import React, { Component } from "react";
import PinBox from "../PinBox/PinBox";
import { Link } from "react-router-dom";
import GamePlayPage from "./GamePlayPage";
import ScoreBoard from "../Scoreboard/scoreboard.js";
import axios from "axios";

class GameStartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: this.props.user,
      startGame: false,
      game: "",
    };
    this.startGame = this.startGame.bind(this);
    this.getGame = this.getGame.bind(this);
  }

  componentDidMount() {
    const showGameState = () => {
      console.log("showGameState");
      if (this.state.startGame === false) {
        console.log("startGame = false ");

        axios
          .get(
            `https://gahoot-server.herokuapp.com/games/${this.props.match.params.game_id}.json`
          )
          .then((results) => {
            this.setState({ startGame: results.data.gameStart });
            console.log("this is the results: ", results);
            console.log(this.state.startGame);
            // setTimeout(showGameState, 1000);
          });
      }
    };
    showGameState();
    setInterval(showGameState, 1000);
  }

  startGame() {
    this.setState({ startGame: true });
    // THIS NEEDS TO POST TO DATABASE UNDER A NEW COLUMN (STARTGAME) TO TRUE
    axios
      .put(
        `https://gahoot-server.herokuapp.com/games/${this.state.game.id}.json`,
        { gameStart: true }
      )
      .then((response) => {
        console.log(response);
      });
    // PLAYER ALSO NEEDS TO CONTINUOUSLY EVERY INTERVAL CHECK CHANGES TO THIS COLUMN
  }

  getGame(game) {
    this.setState({ game: game });
  }
  render() {
    console.log("GameStart host: ", this.state.host);
    console.log(this.state.startGame);
    console.log(this.state.host);

    return (
      <div className="GameStartPage">
        <div class="GameStartMenu">
          <h1>Game start</h1>
          <PinBox
            quiz_id={this.props.match.params.id}
            passGame={this.getGame}
          />
          <button onClick={this.startGame}>Start the game!</button>
        </div>

        <GamePlayPage
          quiz_id={this.props.match.params.id}
          startGame={this.state.startGame}
          user={this.props.user}
          game={this.state.game}
        />
        <ScoreBoard game={this.state.game} />
      </div>
    );
  }
}

export default GameStartPage;
