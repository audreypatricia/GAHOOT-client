import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question'
import QuizDetails from './QuizDetails'

class QuizQuestions extends Component {
  constructor() {
    super();
    this.state = {
      // question: '',
      // option1: '',
      // option2: '',
      // option3: '',
      // option4: '',
      // answer: '',
      // image: {},
      // quiz_id: 12,
      quiz: { title: '1', category: 'education', username: 'Audrey', user_id: 41 }, // TODO: need to get user_id from session
      questions: [
        {question: '1', image: '', option1: '1', option2: '2', option3:'3', option4:'4', answer:'0'},
        {question: '', image: '', option1: '', option2: '', option3:'', option4:'', answer:''},
        {question: '', image: '', option1: '', option2: '', option3:'', option4:'', answer:''},
        {question: '', image: '', option1: '', option2: '', option3:'', option4:'', answer:''},
        {question: '', image: '', option1: '', option2: '', option3:'', option4:'', answer:''},
        {question: '', image: '', option1: '', option2: '', option3:'', option4:'', answer:''},
        {question: '', image: '', option1: '', option2: '', option3:'', option4:'', answer:''},
        {question: '', image: '', option1: '', option2: '', option3:'', option4:'', answer:''},
        {question: '', image: '', option1: '', option2: '', option3:'', option4:'', answer:''},
        {question: '', image: '', option1: '', option2: '', option3:'', option4:'', answer:''},
      ]
    }

    this._handleChange = this._handleChange.bind(this);
    this._onChange = this._onChange.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
    this._handleQuizChange = this._handleQuizChange.bind(this);
  }

  _handleChange(event, i){
    // event.preventDefault();
    // this.setState({ [event.target.name]: event.target.value});
    // console.log(this.state.questions[i-1]);
    this.setState(prevState => {
      let questions = this.state.questions.slice(0);
      let questionItem = Object.assign({}, questions[i-1]);
      questionItem[event.target.name] = event.target.value;
      questions[i-1] = questionItem;
      return { questions };
    })

  }

  _handleQuizChange(event){
    this.setState(prevState => {
      let quiz = Object.assign({}, this.state.quiz);
      quiz.[event.target.name] = event.target.value;
      return { quiz };
    })

  }

  _onChange(event, i){
    // event.persist();
    // this.setState(() => {
    //   return {
    //     [event.target.name]: event.target.files[0]
    //   }
    // })

    event.persist();
    this.setState((prevState) => {
      let questions = this.state.questions.slice(0);
      let questionItem = Object.assign({}, questions[i-1]);
      questionItem.[event.target.name] = event.target.files[0];
      questions[i-1] = questionItem;
      return { questions };
    })


  }

  createQuestion(event){
    event.preventDefault();

    // const answer_options = [this.state.option1, this.state.option2, this.state.option3, this.state.option4, this.state.answer]
    console.log(this.state.quiz);
    // const form = new FormData()
    // form.append("image", this.state.image);
    // form.append("question", this.state.question);
    // form.append("answer_options", this.state.answer_options);
    let questionsCopy = this.state.questions.slice(0);
    let questionData = [];

    for(let i = 0; i < questionsCopy.length; i++){
      let answer_options = [ questionsCopy[i].option1, questionsCopy[i].option2, questionsCopy[i].option3, questionsCopy[i].option4, questionsCopy[i].answer];

      if(questionsCopy[i].question !== ''){
        let questionObj = {
          question: questionsCopy[i].question,
          // image: questionsCopy[i].image,
          answer_options: answer_options
        }

        questionData.push(questionObj);
      }
    }

    console.log(questionData);

    const form = new FormData();
    form.append("quiz", JSON.stringify(this.state.quiz));
    form.append("questions", JSON.stringify(questionData));



    console.log(...form);

    fetch(`http://localhost:3001/questions.json`, {
            method: "POST",
            body: form,
            referrerPolicy: 'origin-when-cross-origin',
        }).then( (response) => {
          console.log(response);
        }).catch(error => {
          console.log(error.message);
        })

    // axios.post('https://gahoot-server.herokuapp.com/questions.json', data, {headers:{"Content-Type" : "application/json"}}).then((result) => { console.log(result)})
    // .catch(error => {
    //   console.log(error.message);
    // })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.createQuestion}>

          <QuizDetails onChange={this._handleQuizChange}/>

          <Question onChange={this._handleChange} onUpload={this._onChange} value="1"/>
          <Question onChange={this._handleChange} onUpload={this._onChange} value="2"/>
          <Question onChange={this._handleChange} onUpload={this._onChange} value="3"/>
          <Question onChange={this._handleChange} onUpload={this._onChange} value="4"/>
          <Question onChange={this._handleChange} onUpload={this._onChange} value="5"/>
          <Question onChange={this._handleChange} onUpload={this._onChange} value="6"/>
          <Question onChange={this._handleChange} onUpload={this._onChange} value="7"/>
          <Question onChange={this._handleChange} onUpload={this._onChange} value="8"/>
          <Question onChange={this._handleChange} onUpload={this._onChange} value="9"/>
          <Question onChange={this._handleChange} onUpload={this._onChange} value="10"/>

          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default QuizQuestions;
