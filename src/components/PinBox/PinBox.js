import React, { Component } from 'react'
import axios from 'axios'
import './PinBox.style.css'

const SERVER_URL = 'https://gahoot-server.herokuapp.com/games.json';
const SERVER_USERS_URL = 'https://gahoot-server.herokuapp.com/users.json';

class PinBox extends Component {
  constructor(props){
    super(props);
    this.state ={
      gamePin: '',
      selectedQuiz: this.props.quiz_id,
      game: '',
      host: this.props.host
    }
    this.createGame = this.createGame.bind(this);
    this.fetchPlayers = this.fetchPlayers.bind(this);
  }

  componentDidMount(){
    const generateGamePin = () => {
      const pin = Math.floor(100000 + Math.random() * 900000).toString();
      console.log(pin);
      this.setState({ gamePin: pin });
    }
    generateGamePin();
  }

  createGame() {
    axios.post(SERVER_URL, { pin: this.state.gamePin, quiz_id: this.state.selectedQuiz }).then((response) =>{
      console.log(response);
      this.setState({ game: response.data })
    })
  }

  fetchPlayers() {
    axios.get(SERVER_USERS_URL).then((results) => {
      const checkUserForPin = results.data.users
      console.log(this.state.game["pin"]);
      console.log(checkUserForPin);
      let result = checkUserForPin.filter((user) => user.pin === this.state.game["pin"]);
      console.log(result);
    })
  };

  //
  //
  //     console.log(result);
  //     this.setState({ players: result})
  //
  //     if(this.state.players !== ''){
  //
  //      axios.put(`https://gahoot-server.herokuapp.com/games/${this.state.game["id"]}.json`, {
  //        players: JSON.stringify(result),
  //      }).then((result) => {
  //        // console.log(result);
  //      });
  //     }
  //     });
  //      console.log('Game: ', this.state.game);
  //      console.log(this.state.players);
  //    }

  render() {
    // console.log(`This game's players: `, this.state.players);

    return(
      <div className="PinBox-component">
      <div className="PinBox">
      <h4> Game Pin: </h4>
      <p> { this.state.gamePin } </p>
      <input onClick={this.createGame} type='button' value="Create Game" />
      </div>
      <div className="WaitingRoom">

        <h3> Players </h3>
        <input onClick={this.fetchPlayers} type='button' value='refresh?' />

      </div>
      </div>
    );
  }
}
export default PinBox;
