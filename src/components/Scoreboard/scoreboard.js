import React, { Component } from "react";
import axios from "axios";

// import "./scoreboard.styles.css";

// export const PlayerList = props => (
//   <div className='player-list'>
//     {props.players.map(player => (
//       <Player key ={player.id} player={player} />
//     ))}
//   </div>
// );

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
          console.log(response.data);
        });
      this.setState({ game: this.props.game });
      // fetch users again recursively
      setTimeout(fetchPlayers, 8000);
      // setInterval(this.setState({no:""}),3000)
    };
    fetchPlayers();
  }

  render() {
    //render sorted users
    // if(this.state.sortedPlayers !== []){ return }
    let a = this.state.game ? ("players", this.state.game) : 0;
    console.log(a);
    let allPlayers = [];
    if (this.state.game.players) {
      for (let i = 0; i < this.state.game.players.length; i++) {
        allPlayers.push(
          <div>
            <p>Player username:{this.state.game.players[i][2]}</p>
            <p>Player score:{this.state.game.players[i][3]}</p>
          </div>
        );
      }
    }

    return (
      <div className="scoreboard">
        <h2>Scoreboard</h2>
        {allPlayers}
        {/* {this.state.sortedPlayers.map( (p) => <div className="player-container"><h2 key={p[1]}>{p[1]} => {p[2]}</h2></div> )} */}
      </div>
    );
  }
}

export default Scoreboard;

// {this.state.sortedPlayers.map( (p) => <div className="player-container"><h2 key={p[0]}>{p[0]} => {p[1]}</h2></div> )}
