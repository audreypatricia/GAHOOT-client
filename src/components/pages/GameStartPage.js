import React, { Component } from 'react';
import PinBox from '../PinBox/PinBox'
import { Link } from 'react-router-dom';

class GameStartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        host: this.props.user
      }
    }
    render() {
      console.log("Props are: ", this.props.user);
        return (
          <div>
          <h1>Game start</h1>
          <PinBox quiz_id={this.props.match.params.id}/>
          <StartGameButton quiz_id={this.props.match.params.id}/>
          </div> );
    }
}

class StartGameButton extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div className="button">
    <Link to={"/gameplay/" + this.props.quiz_id }>Start Game</Link>
    </div>
      )
   }
  }

export default GameStartPage;
