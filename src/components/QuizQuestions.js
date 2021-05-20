import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question'
import QuizDetails from './QuizDetails'
import { Link } from 'react-router-dom';

class QuizQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: {
        title: "",
        category: "",
        username: "",
        user_id: this.props.user.id,
      }, // TODO: need to get user_id from session
      questions: [
        {
          question: "",
          image: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          answer: "",
        },
        {
          question: "",
          image: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          answer: "",
        },
        {
          question: "",
          image: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          answer: "",
        },
        {
          question: "",
          image: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          answer: "",
        },
        {
          question: "",
          image: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          answer: "",
        },
        {
          question: "",
          image: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          answer: "",
        },
        {
          question: "",
          image: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          answer: "",
        },
        {
          question: "",
          image: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          answer: "",
        },
        {
          question: "",
          image: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          answer: "",
        },
        {
          question: "",
          image: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          answer: "",
        },
      ],
      user: this.props.user,
    };

    this._handleChange = this._handleChange.bind(this);
    this._onChange = this._onChange.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
    this._handleQuizChange = this._handleQuizChange.bind(this);
  }

  _handleChange(event, i) {
    // console.log(this.state.questions[i-1]);
    this.setState((prevState) => {
      let questions = this.state.questions.slice(0);
      let questionItem = Object.assign({}, questions[i - 1]);
      questionItem[event.target.name] = event.target.value;
      questions[i - 1] = questionItem;
      return { questions };
    });
  }

  _handleQuizChange(event) {
    this.setState((prevState) => {
      let quiz = Object.assign({}, this.state.quiz);
      quiz[event.target.name] = event.target.value;
      return { quiz };
    });
  }

  _onChange(event, i) {
    event.persist();
    this.setState((prevState) => {
      let questions = this.state.questions.slice(0);
      let questionItem = Object.assign({}, questions[i - 1]);
      questionItem[event.target.name] = event.target.files[0];
      questions[i - 1] = questionItem;
      return { questions };
    });
  }

  createQuestion(event) {
    event.preventDefault();

    // console.log(this.state.quiz);
    let questionsCopy = this.state.questions.slice(0);
    // console.log(questionsCopy);
    let questionData = [];

    for (let i = 0; i < questionsCopy.length; i++) {
      let answer_options = [
        questionsCopy[i].option1,
        questionsCopy[i].option2,
        questionsCopy[i].option3,
        questionsCopy[i].option4,
        questionsCopy[i].answer,
      ];

      if (questionsCopy[i].question !== "") {
        let questionObj = {
          question: questionsCopy[i].question,
          // image: questionsCopy[i].image,
          answer_options: answer_options,
        };

        questionData.push(questionObj);
      }
    }

    // console.log(questionData);

    let questionsCopy2 = this.state.questions.slice(0);

    let imageArray = [];
    for (let i = 0; i < questionsCopy2.length; i++) {
      if (questionsCopy2[i].image !== "") {
        imageArray.push(questionsCopy2[i].image);
      }
    }

    // console.log(imageArray);

    const form = new FormData();

    for (let i = 0; i < imageArray.length; i++) {
      form.append("image[]", imageArray[i]);
    }

    form.append("quiz", JSON.stringify(this.state.quiz));
    form.append("questions", JSON.stringify(questionData));

    // console.log(...form);

    fetch(`http://localhost:3001/questions.json`, {
      method: "POST",
      body: form,
      referrerPolicy: "origin-when-cross-origin",
    })
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        // console.log(error.message);
      });
  }

  render() {
    // console.log(`quiz questions User: ${this.state.user}`);
    return (
      <div className="QuizCreateContainer">
        <form className="createQuiz" onSubmit={this.createQuestion}>
          <QuizDetails
            onChange={this._handleQuizChange}
            user={this.state.user}
          />

          <Question
            onChange={this._handleChange}
            onUpload={this._onChange}
            value="1"
          />
          <Question
            onChange={this._handleChange}
            onUpload={this._onChange}
            value="2"
          />
          <Question
            onChange={this._handleChange}
            onUpload={this._onChange}
            value="3"
          />
          <Question
            onChange={this._handleChange}
            onUpload={this._onChange}
            value="4"
          />
          <Question
            onChange={this._handleChange}
            onUpload={this._onChange}
            value="5"
          />
          <Question
            onChange={this._handleChange}
            onUpload={this._onChange}
            value="6"
          />
          <Question
            onChange={this._handleChange}
            onUpload={this._onChange}
            value="7"
          />
          <Question
            onChange={this._handleChange}
            onUpload={this._onChange}
            value="8"
          />
          <Question
            onChange={this._handleChange}
            onUpload={this._onChange}
            value="9"
          />
          <Question
            onChange={this._handleChange}
            onUpload={this._onChange}
            value="10"
          />

          <input className="createNewQuiz" type="submit" value="Create!" />
        </form>
        <div className={`success-create ${this.state.created ? "": "hidden"}`} >
          <h2>Quiz Created!</h2>
          <Link className="quiz-links" to={'quiz-create'}>Create Another Quiz?</Link>
          <Link className="quiz-links" to={'quiz-index'}>Quiz Index</Link>
        </div>
      </div>
    );
  }
}

export default QuizQuestions;
