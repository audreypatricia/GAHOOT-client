import React, { Component } from "react";
import axios from "axios";

class PinBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamePin: "",
      selectedQuiz: this.props.quiz_id,
      game: "",
      numberOfPlayers: 0,
    };
    this.createGame = this.createGame.bind(this);
  }

  componentDidMount() {
    const generateGamePin = () => {
      const pin = Math.floor(100000 + Math.random() * 900000).toString();
      // console.log(pin);
      this.setState({ gamePin: pin });
    };
    generateGamePin();
    console.log(this.state.host);
  }

  createGame() {
    axios
      .post("https://gahoot-server.herokuapp.com/games.json", {
        pin: this.state.gamePin,
        quiz_id: this.state.selectedQuiz,
      })
      .then((response) => {
        // console.log(response);
        this.setState({ game: response.data });
      });
    const callGame = () => {
      axios
        .get("https://gahoot-server.herokuapp.com/users/check")
        .then((result) => {
          // console.log("success - running callGame");
          setTimeout(callGame, 2000);
        })
        .catch((error) => console.log("api errors:", error));

      const showPlayers = () => {
        axios
          .get(
            `https://gahoot-server.herokuapp.com/games/${this.state.game.id}.json`
          )
          .then((results) => {
            this.setState({
              game: results.data,
              numberOfPlayers: results.data.players.length,
            });
            this.props.passGame(this.state.game);
            // console.log('running showPlayer')
            setTimeout(showPlayers, 4000);
          });
      };
      showPlayers();
    };
    callGame();
  }

  render() {
    return (
      <div className="PinBox-component">
        <div className="PinBox">
          <h4> Game Pin: </h4>
          <p> {this.state.gamePin} </p>
          <input onClick={this.createGame} type="button" value="Create Game" />
        </div>
        <div className="WaitingRoom">
          <h3> {this.state.numberOfPlayers} Players have entered the game </h3>
        </div>
      </div>
    );
  }
}
export default PinBox;
