import React, { Component } from 'react';
import PinBox from '../PinBox/PinBox'
import { Link } from 'react-router-dom';
import GamePlayPage from './GamePlayPage';
import ScoreBoard from '../Scoreboard/scoreboard.js';

class GameStartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        host: this.props.user,
        startGame: false,
        game: ''
      }
      this.startGame = this.startGame.bind(this);
      this.getGame = this.getGame.bind(this);
    }

    startGame(){
      this.setState({startGame: true});
    }

    getGame(game) {
      this.setState({ game: game })
    }
    render() {

      console.log('GameStart host: ', this.state.host)
      console.log(this.state.startGame);
      console.log(this.state.host);

        return (
          <div>
          <h1>Game start</h1>

          <PinBox quiz_id={ this.props.match.params.id } passGame={this.getGame} className="PinBox"/>
          <button onClick={this.startGame}>Start the game!</button>

          <GamePlayPage quiz_id={this.props.match.params.id} startGame={this.state.startGame}/>
          <ScoreBoard game={this.state.game}/>
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
