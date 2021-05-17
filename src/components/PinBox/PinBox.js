import React, { Component } from 'react'
import axios from 'axios'

// const SERVER_URL = 'https://gahoot-server.herokuapp.com/games.json';
const SERVER_URL = "http://localhost:3001/games.json"

class PinBox extends Component {
  constructor(props){
    super(props);
    this.state ={
      gamePin: '',
      selectedQuiz: this.props.quiz_id,
      game: {}
    }
    this.createGame = this.createGame.bind(this);
    console.log(this.state.selectedQuiz );
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
  axios.post(SERVER_URL, { pin: this.state.gamePin, quiz_id: this.state.selectedQuiz }).then((response) => { this.setState({ game: response.data })
})

}

  render() {
    console.log(this.state.game);
    return(
      <div className="PinBox">
      <h4> Game Pin: </h4>
      <p> { this.state.gamePin } </p>
      <input onClick={this.createGame} type='button' value="Enter Game" />
      </div>
    );
  }
}
export default PinBox;
