import React, { Component } from 'react'
import axios from 'axios'

const SERVER_URL = 'https://gahoot-server.herokuapp.com/games.json';

class PinBox extends Component {
  constructor(){
    super();
    this.state ={
      gamePin: ''
    }

  }

componentDidMount(){
  const generateGamePin = () => {
    const pin = Math.floor(100000 + Math.random() * 900000);
    console.log(pin);
    this.setState({ gamePin: pin });
  }
  const createGame = () => {
    axios.post(SERVER_URL, {  pin: this.gamePin }).then((response) => {
      console.log('Game create: ', response);
    });
  }
  generateGamePin();
  createGame();
}
  render() {
    return(
      <div className="PinBox">
      <h4> Game Pin: </h4>
      <p> { this.state.gamePin } </p>
      </div>
    );
  }
}
export default PinBox;
