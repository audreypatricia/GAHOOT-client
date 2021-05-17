import React, { Component } from 'react';
import QuizQuestion from '../QuizQuestion';
import QuizDetails from '../QuizDetails';
import axios from 'axios';

class QuizCreatePage extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user_id: 1,
      }

      this.createQuiz = this.createQuiz.bind(this);
      this.createQuestions = this.createQuestions.bind(this);
    }

    createQuiz(title, category, username){
        // get user_id of the person creating the quiz
        // to be changed to heroku link: https://gahoot-server.herokuapp.com/users.json
      axios.get('https://gahoot-server.herokuapp.com/users.json').then((response) => {
        console.log(response.data);
        let users = response.data;

        for(let i = 0; i < users.length; i++) {
          if(users[i].username === username){
            this.setState({ user_id: users[i].id});
            console.log(this.state.user_id);
            break;
          }
        }

        const data = {
          title: title,
          category: category,
          user_id: this.state.user_id
        };

        axios.post('https://gahoot-server.herokuapp.com/quizzes.json', data, {headers:{"Content-Type" : "application/json"}}).then((result) => { console.log(result)})
        .catch(error => {
          console.log(error.message);
        })


      });

    }

    createQuestions(question, image, answer_options, quiz_id){

      const data = {
        question: question,
        image: image,
        answer_options: answer_options,

      }

      console.log(data);
      axios.post('https://gahoot-server.herokuapp.com/questions.json', data, {headers:{"Content-Type" : "application/json"}}).then((result) => { console.log(result)})
      .catch(error => {
        console.log(error.message);
      })
    }

    render() {
      return (
        <div>
          <h1>Quiz create</h1>
          <QuizDetails onSubmit={this.createQuiz}/>
          <QuizQuestion />
        </div>
      );
    }
}

export default QuizCreatePage;
