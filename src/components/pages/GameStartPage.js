import React, { Component } from 'react';
import PinBox from '../PinBox/PinBox'
import { Link } from 'react-router-dom';
import GamePlayPage from './GamePlayPage';
import ScoreBoard from '../Scoreboard/scoreboard.js';

class GameStartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        host: '',
        startGame: false,
        game: ''
      }
      this.startGame = this.startGame.bind(this);
      this.getGame = this.getGame.bind(this);
    }

    startGame(){
      this.setState({startGame: true,
      host: this.props.user});
    }

    getGame(game) {
      this.setState({ game: game })
    }
    render() {

      console.log('GameStart host: ', this.state.host)
      console.log(this.state.startGame);

        return (
          <div>
          <h1>Game start</h1>
          <PinBox quiz_id={ this.props.match.params.id } passGame={this.getGame}/>
          <button onClick={this.startGame}>Start the game!</button>

          <GamePlayPage quiz_id={this.props.match.params.id} startGame={this.state.startGame} user={this.state.host}/>
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
