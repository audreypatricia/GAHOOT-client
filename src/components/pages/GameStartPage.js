import React, { Component } from 'react';
import PinBox from '../PinBox/PinBox'
import { Link } from 'react-router-dom';
import GamePlayPage from './GamePlayPage';

class GameStartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        host: this.props.user
      }
    }
    render() {
      console.log('GameStart host: ', this.state.host)
        return (
          <div>
          <h1>Game start</h1>
          <PinBox quiz_id={ this.props.match.params.id } host={ this.state.host }/>

          <GamePlayPage quiz_id={this.props.match.params.id}/>
          </div> );
    }
}

//if need a new page for game:
// <StartGameButton quiz_id={this.props.match.params.id}/>
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
