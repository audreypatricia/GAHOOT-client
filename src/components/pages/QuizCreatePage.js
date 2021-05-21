import React, { Component } from "react";
import QuizQuestions from "../QuizQuestions";
import axios from "axios";

class QuizCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
    };
    this.createQuiz = this.createQuiz.bind(this);
    this.createQuestions = this.createQuestions.bind(this);
  }

  createQuiz(title, category, username) {
    const data = {
      title: title,
      category: category,
      user_id: this.state.user.id,
    };

    axios
      .post("https://gahoot-server.herokuapp.com/quizzes.json", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((result) => {
        // console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  createQuestions(question, image, answer_options, quiz_id) {
    const data = {
      question: question,
      image: image,
      answer_options: answer_options,
    };

    // console.log(data);
    axios
      .post("https://gahoot-server.herokuapp.com/questions.json", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((result) => {
        // console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    // console.log(this.props);
    // console.log(this.props.user);
    return (
      <div>
        <h1 className="quizCreateHeader">Quiz create</h1>
        <QuizQuestions user={this.state.user} />
      </div>
    );
  }
}

export default QuizCreatePage;
