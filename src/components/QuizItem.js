import React, { Component } from 'react'
import PlayButton from './PlayButton'
import axios from 'axios'

  const SERVER_URL = 'https://gahoot-server.herokuapp.com/quizzes.json';

class QuizItem extends Component {
  constructor(){
    super();
    this.state = {
      quizzes: [],
      selectedQuiz: []
    };
    this._handleQuizSelection = this._handleQuizSelection.bind(this);
  }

  componentDidMount() {
    const fetchQuizzes = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({ quizzes: results.data });
      });
    }
  fetchQuizzes();
  }

  _handleQuizSelection(event) {
    console.log(event.target.value)
    // this.setState({ selectedQuiz: event.target.value });
  }

  render(){
    return(
      <div className='QuizCard'>
      { this.state.quizzes.map((e) => (
        <form>
        <h3> Name: { e.title } </h3>
          <PlayButton onClick={ e.id }/>
        </form>
      )) }
    </div>
  )
  }
}


export default QuizItem;
