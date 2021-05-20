import React, { Component } from "react";
import axios from "axios";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      sortedPlayers: [],
      game: this.props.game,
    };
  }
  componentDidMount() {
    const fetchPlayers = () => {
      // fetch users
      axios
        .get(`https://gahoot-server.herokuapp.com/users.json`)
        .then((response) => {
          // console.log(response.data);
        });
      this.setState({ game: this.props.game });
      // fetch users again recursively
      setTimeout(fetchPlayers, 8000);
      // setInterval(this.setState({no:""}),3000)
    };
    fetchPlayers();
  }

  render() {
    let allPlayers = [];
    if (this.state.game.players) {
      for (let i = 0; i < this.state.game.players.length; i++) {
        allPlayers.push(
          <div className="scoreboarddiv">
            <span className="scoreboardspan">username: {this.state.game.players[i][2]} | </span>
            <span className="scoreboardspan">score:{this.state.game.players[i][3]}</span>
          </div>
        );
      }
    }

    return (
      <div className="scoreboard">
        <h2>Scoreboard</h2>
        {allPlayers}
      </div>
    );
  }
}

export default Scoreboard;
