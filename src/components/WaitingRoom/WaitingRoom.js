import React, { Component } from 'react'
import axios from 'axios'
import './WaitingRoom.style.css'

const SERVER_URL = 'https://gahoot-server.herokuapp.com/users.json';

class WaitingRoom extends Component {
  constructor(props){
    super(props);
    this.state = {
      game: this.props.game,
      host: this.props.user,
    }
  }

  componentDidMount(){
    const fetchHost = () => {
        axios.get(SERVER_URL).then((results) => {
        });
      }
      fetchHost();
      console.log('Game: ', this.state.game);
      console.log('Host: ', this.state.host);
  }


  render(){
    return(
      <div>
      <h3> Players </h3>
      <h4> Host: </h4>
      </div>
    );
  }

}
export default WaitingRoom
