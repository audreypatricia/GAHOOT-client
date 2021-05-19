import React, { Component } from 'react'
import axios from 'axios'
import './PinBox.style.css'

const SERVER_URL = 'https://gahoot-server.herokuapp.com/games.json';

class PinBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      gamePin: '',
      selectedQuiz: this.props.quiz_id,
      game: '',
      host: this.props.host,
      players: [],
    };
    this.createGame = this.createGame.bind(this);
    this.callGame = this.callGame.bind(this);
  }

  componentDidMount(){
    const generateGamePin = () => {
      const pin = Math.floor(100000 + Math.random() * 900000).toString();
      // console.log(pin);
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

  callGame() {
    axios.get('https://gahoot-server.herokuapp.com/users/check').then((result) => {
      console.log("success");
    }).catch((error) => console.log("api errors:", error));
    const showPlayers = () => {
      axios.get(SERVER_URL).then((results) => {
        // this.setState({ });
        console.log(results);
      });
    }
  }

  render() {

    return(
      <div className="PinBox-component">
      <div className="PinBox">
      <h4> Game Pin: </h4>
      <p> { this.state.gamePin } </p>
      <input onClick={this.createGame} type='button' value="Create Game" />
      </div>
      <div className="WaitingRoom">

        <h3> Players </h3>
        <input onClick={this.callGame} type='button' value='refresh?' />

      </div>
      </div>
    );
  }
}
export default PinBox;
