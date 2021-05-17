import React, { Component } from 'react';
import PinBox from '../PinBox/PinBox'
import { Link, Route } from 'react-router-dom';

class GameStartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
          <div>
          <h1>Game start</h1>
          <PinBox />
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
