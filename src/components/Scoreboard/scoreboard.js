import React, { Component } from "react";
import axios from "axios";

import "./scoreboard.styles.css";

// export const PlayerList = props => (
//   <div className='player-list'>
//     {props.players.map(player => (
//       <Player key ={player.id} player={player} />
//     ))}
//   </div>
// );

class Scoreboard extends Component {
  constructor() {
    super();
    this.state = {
      game_id: 18,
      players: [],
      sortedPlayers: [],
    };
  }
  componentDidMount() {
    const fetchPlayers = () => {
      // fetch users
      axios
        .get(`https://gahoot-server.herokuapp.com/users.json`)
        .then((response) => {
          let players = response.data.players;
          this.setState({ players: players });
          console.log(players);

          let sortedArray = this.state.players.sort(function (a, b) {
            return b[2] - a[2];
          });
          console.log(sortedArray);
          this.setState({ sortedPlayers: sortedArray });
        });

      // if(this.state.players.length > 0){
      //   // sort based on scores
      //   console.log("here");
      //   let sortedArray = this.state.players.sort(function(a, b) {
      //     return b[2] - a[2];
      //   });
      //   console.log(sortedArray)
      //   this.setState({ sortedPlayers: sortedArray });
      //
      // }

      // fetch users again recursively
      setTimeout(fetchPlayers, 8000);
    };
    fetchPlayers();
  }

  render() {
    //render sorted users
    // if(this.state.sortedPlayers !== []){ return }

    return (
      <div className="player-list">
        {/* {this.state.sortedPlayers.map( (p) => <div className="player-container"><h2 key={p[1]}>{p[1]} => {p[2]}</h2></div> )} */}
      </div>
    );
  }
}

export default Scoreboard;

// {this.state.sortedPlayers.map( (p) => <div className="player-container"><h2 key={p[0]}>{p[0]} => {p[1]}</h2></div> )}
