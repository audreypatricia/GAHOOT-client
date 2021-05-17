import React, { Component } from 'react';
import DisplayQuestion from '../DisplayQuestion';
import axios from 'axios';

class GamePlayPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          quiz_id: 19,
          questions: [],
        }

    axios.get('https://gahoot-server.herokuapp.com/questions.json').then( (result) => {
      console.log(result.data);
      let data = result.data;
      let questions = [];
      for(let i = 0; i < data.length; i++) {
        if(data[i].quiz_id === this.state.quiz_id){
          questions.push(data[i]);
        }
      }
      console.log(questions);
    })


    }


    render() {
      return (
        <div>
          <h1>Gameplay</h1>
          <DisplayQuestion questions={this.state.questions} />
        </div>
      );
    }
}

export default GamePlayPage;
