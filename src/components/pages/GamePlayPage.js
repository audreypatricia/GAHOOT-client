import React, { Component } from 'react';
import DisplayQuestion from '../DisplayQuestion';
import OptionList from '../OptionList';
import TimeCircle from '../TimeCircle';
<<<<<<< HEAD
import ScoreBoard from '../Scoreboard/Scoreboard';
=======
import ScoreBoard from '../Scoreboard/scoreboard.js';
>>>>>>> 10b470cbbd4baf174c437c25c9d4fd2f663ac1ff
import axios from 'axios';

import styled from 'styled-components';
import { render } from 'react-dom';


class GamePlayPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
        // quiz_id: this.props.match.params.id,
        quiz_id: this.props.quiz_id,
        questions: [],
        roundOver: false,


      }


    axios.get('https://gahoot-server.herokuapp.com/questions.json').then( (result) => {
      // console.log(result.data);
      let data = result.data;
      let questions = [];
      // console.log(this.state.quiz_id);
      for(let i = 0; i < data.length; i++) {
        if(data[i].quiz_id.toString() === this.state.quiz_id){
          questions.push(data[i]);
        }
      }

      this.setState({
        questions: questions,
        activeQuestion: 0,

      });
      // console.log(questions);
    })

  }



  updateQuestion = () => {
    this.setState({roundOver: false});
    this.setState((prevState) => ({
      activeQuestion: prevState.activeQuestion + 1
    }));
    // this.setState((prevState) => ({
    //   seconds: prevState.seconds = 0
    // }));
  }

  checkAnswer = (answer) => {

    // console.log(this.props.timeLeft)
    this.setState({roundOver: true});
    if (answer == this.state.questions[this.state.activeQuestion].answer_options[4]) {
      console.log('You were right!');
      // this.props.quiz_id

    } else {
      console.log('WRONG');
    }

  };

  renderGame = () => {
    // console.log(this.props.startGame);
    if(this.props.startGame === false){
      return <div></div>
    }

    if (this.state.activeQuestion === this.state.questions.length) {
      return (<ScoreBoard/>)
    }

    // console.log(this.state.roundOver); //true
    return (
      <React.Fragment>
        <DisplayQuestion question={this.state.questions[this.state.activeQuestion].question} />
        <TimeCircle
        duration={10}
        timeoutFn={this.updateQuestion}/>
        <OptionList
          answer_options={this.state.questions[this.state.activeQuestion].answer_options}
          checkAnswer={this.checkAnswer}
          roundOver={this.state.roundOver}
        />
      </React.Fragment>
    );
  };

  render() {
    if(this.state.questions.length === 0) return <p>...</p>;

    return (
      <GameWrapper>{this.renderGame()}</GameWrapper>
    );
  }
}


const GameWrapper = styled.div`
  display: grid;
  grid-gap: 1.2rem;
  padding: 2rem;
`;

// render(<Kahoot />, document.getElementById('root'));

export default GamePlayPage;
