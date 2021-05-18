import React, { Component } from 'react';
import DisplayQuestion from '../DisplayQuestion';
import OptionList from '../OptionList'
import axios from 'axios';

import styled from 'styled-components';
import { render } from 'react-dom';

class GamePlayPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
        quiz_id: this.props.match.params.id,
        questions: [],

      }

    axios.get('https://gahoot-server.herokuapp.com/questions.json').then( (result) => {
      console.log(result.data);
      let data = result.data;
      let questions = [];
      console.log(this.state.quiz_id);
      for(let i = 0; i < data.length; i++) {
        if(data[i].quiz_id.toString() === this.state.quiz_id){
          questions.push(data[i]);
        }
      }

      this.setState({ 
        questions: questions,
        activeQuestion: 0,
      });
      console.log(questions);
    })


  }

  checkAnswer = (answer) => {
    
    if (answer == this.state.questions[this.state.activeQuestion].answer_options[4]) {
      console.log('You were right!');

      this.setState((prevState) => ({
        activeQuestion: prevState.activeQuestion + 1
      }));
    } else {
      console.log('WRONG');
    }
  };

  renderGame = () => {
    
    if (this.state.activeQuestion === this.state.questions.length) {
      return <h1>You win!!!</h1>;
    }
    return (
      <React.Fragment>
        <DisplayQuestion question={this.state.questions[this.state.activeQuestion].question} />
        <OptionList
          answer_options={this.state.questions[this.state.activeQuestion].answer_options}
          checkAnswer={this.checkAnswer}
        />
      </React.Fragment>
    );
  };

  render() {
    if(this.state.questions.length === 0) return <p>Loading</p>;

    return (
      <GameWrapper>{this.renderGame()}</GameWrapper>
      // <div>
      //   <h1>Gameplay</h1>
      //   <DisplayQuestion questions={this.state.questions}/>
      // </div>
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
