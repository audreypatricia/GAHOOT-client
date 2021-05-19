import React, { Component } from 'react';
import QuizQuestions from '../QuizQuestions';
import QuizDetails from '../QuizDetails';
import axios from 'axios';

class QuizCreatePage extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user:this.props.user,
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
      console.log(this.props);
      console.log(this.props.user);
      return (
        <div>
          <h1>Quiz create</h1>

          <QuizQuestions user={this.state.user}/>
        </div>
      );
    }
}

export default QuizCreatePage;
// <QuizDetails onSubmit={this.createQuiz}/>
