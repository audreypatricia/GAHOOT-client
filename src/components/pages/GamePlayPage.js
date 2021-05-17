import React, { Component } from 'react';
import DisplayQuestion from '../DisplayQuestion';
import axios from 'axios';

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

      this.setState({ questions: questions});
      console.log(questions);
    })


    }


    render() {
      if(this.state.questions.length === 0) return <p>Loading</p>;

      return (

        <div>
          <h1>Gameplay</h1>
          <DisplayQuestion questions={this.state.questions}/>
        </div>
      );
    }
}

export default GamePlayPage;
