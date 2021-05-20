import React, { Component } from "react";
import CreateQuizButton from "../CreateQuizButton";
import QuizItem from "../QuizItem/QuizItem";

class QuizIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className="QuizIndexHead">Quiz index</h1>
        <CreateQuizButton />
        <QuizItem />
      </div>
    );
  }
}

export default QuizIndexPage;
