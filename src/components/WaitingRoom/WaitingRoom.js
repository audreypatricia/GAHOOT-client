import React, { Component } from 'react'
import axios from 'axios'
import './WaitingRoom.style.css'

const SERVER_URL = 'https://gahoot-server.herokuapp.com/users.json';

class WaitingRoom extends Component {
  constructor(props){
    super(props);
    this.state = {
      game: this.props.game,
      players: []
    }
  }

  componentDidMount(){

    const fetchPlayers = () => {
      // console.log("running fetchplayer");
        axios.get(SERVER_URL).then((results) => {
          const checkUserForPin = results.data
          console.log(this.state.game.pin)
          console.log(checkUserForPin);
          // let result = checkUserForPin.filter((user) => user.pin === this.state.game.pin);

          // console.log(result);
          // this.setState({ players: result})
          // setTimeout(fetchPlayers, 2000);
        });
      }
      fetchPlayers();
      console.log('Game: ', this.state.game);
      console.log(this.state.players);
  }


  render(){
    if(this.state.game === null ){ return; }

    return(
      <div>
      <h3> Players </h3>
      { this.state.players.map((p) => {
        <li key={p[0]}>{p}</li>
      })}
      </div>
    );
  }

}
export default WaitingRoom
