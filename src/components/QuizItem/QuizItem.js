import React, { Component } from 'react'
import './QuizItem.style.css'
import axios from 'axios'

const SERVER_URL = 'https://gahoot-server.herokuapp.com/quizzes.json';

class QuizItem extends Component {
  constructor(){
    super();
    this.state = {
      quizzes: []
    };
  }

  componentDidMount() {
    const fetchQuizzes = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({ quizzes: results.data });
      });
    }
  fetchQuizzes();
  }

  render(){
    return(
      <div className='QuizItem'>
      { this.state.quizzes.map((e) => (
        <div key={e.id}>
        <form>
        <h3> Quiz: { e.title } </h3>
          <PlayButton onClick={ e.id }/>
        </form>
        </div>
      )) }
    </div>
  )
  }
}

class PlayButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedQuizId: this.props.onClick
    }
  }

  componentDidMount() {
    const fetchQuizzes = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({ quizzes: results.data });
      });
    }
  fetchQuizzes();
  }

  render(){
    return (
      <div className="button">
    <input type="button" value="Play"/>
    </div>
      )
   }
  }
export default QuizItem;
