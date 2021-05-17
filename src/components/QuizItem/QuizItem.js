import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
      <div className='QuizItems'>
      { this.state.quizzes.map((e) => (
        <div className="Quiz" key={e.id}>
        <form>
        <h3> Quiz: { e.title } </h3>
          <PlayButton id={ e.id }/>
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
      selectedQuizId: this.props.id
    }
  }

  render(){
    return (
      <div className="button">
    <Link to={"gamestart/" + this.props.id }>Play</Link>
    </div>
      )
   }
  }
export default QuizItem;
