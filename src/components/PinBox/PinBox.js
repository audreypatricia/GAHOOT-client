import React, { Component } from 'react'
import axios from 'axios'
import WaitingRoom from '../WaitingRoom/WaitingRoom'
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



  const fetchPlayers = () => {
    // console.log("running fetchplayer");
      axios.get(SERVER_USERS_URL).then((results) => {
        const checkUserForPin = results.data.users
        console.log(this.state.game["pin"]);
        console.log(checkUserForPin.pin);

        let result = checkUserForPin.filter((user) => user.pin === this.state.game["pin"]);

        console.log(result);
        this.setState({ players: result})
        setTimeout(fetchPlayers, 2000);
      });
    }
    fetchPlayers();
    console.log('Game: ', this.state.game);
    console.log(this.state.players);
  }

  render() {
      // console.log(this.state.game === '');
      // if(this.state.game === ''){return};
      console.log(this.state.game);
    return(
      <div className="PinBox-component">
      <div className="PinBox">
      <h4> Game Pin: </h4>
      <p> { this.state.gamePin } </p>
      <input onClick={this.createGame} type='button' value="Create Game" />
      </div>
      <div className="WaitingRoom">

        <h3> Players </h3>
      

      </div>
      </div>
    );
  }
}
export default PinBox;
  // <WaitingRoom game={this.state.game} />
