import React, { Component } from 'react';
import CreateQuizButton from '../CreateQuizButton'

class QuizIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
      return (
        <div>
          <h1>Quiz index</h1>
          <CreateQuizButton />

        </div>
      );
    }
}

export default QuizIndexPage;
