import React, { Component } from 'react';
import QuizItem from './QuizItem/QuizItem'

class QuizIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
          <div>
          <QuizItem />
          </div>
        );
    }
}

export default QuizIndexPage;
