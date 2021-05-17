import React, { Component } from 'react';
// import axios from 'axios';

class QuizQuestion extends Component {
  constructor() {
    super();
    this.state = {
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: '',
      image: {},
      quiz_id: 12,
    }
    this._handleChange = this._handleChange.bind(this);
    this._onChange = this._onChange.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
  }

  _handleChange(event){
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value});
  }

  _onChange(event){
    event.persist();
    this.setState(() => {
      return {
        [event.target.name]: event.target.files[0]
      }
    })
    console.log(event.target.files)
  }

  createQuestion(event){
    event.preventDefault();

    const answer_options = [this.state.option1, this.state.option2, this.state.option3, this.state.option4, this.state.answer]

    const form = new FormData()
    form.append("image", this.state.image);
    form.append("question", this.state.question);
    form.append("answer_options", answer_options)


    console.log(form);

    fetch(`https://gahoot-server.herokuapp.com/questions.json`, {
            method: "POST",
            body: form
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

          <label>
            Question:
            <input onChange={this._handleChange} name="question" placeholder="What is 1 + 1?" />
          </label>

          <br/>

          <label>Image Upload</label>
          <input type="file" name="image" onChange={this._onChange}/>
          <br/>

          <div className="answer_options">
            <div className="options_left">

              <div className="option_div">
                <input onChange={this._handleChange} name="option1" placeholder="answer option" />
                <input type="radio" onChange={this._handleChange} value="0"  name="answer"/>
              </div>

              <div className="option_div">
                <input onChange={this._handleChange} name="option2" placeholder="answer option" />
                <input type="radio" onChange={this._handleChange} value="1"  name="answer"/>
              </div>

            </div>

            <div className="options_right">

              <div className="option_div">
                <input onChange={this._handleChange} name="option3" placeholder="answer option" />
                <input type="radio" onChange={this._handleChange} value="2" name="answer"/>
              </div>

              <div className="option_div">
                <input onChange={this._handleChange} name="option4" placeholder="answer option" />
                <input type="radio" onChange={this._handleChange} value="3"  name="answer"/>
              </div>

            </div>
          </div>

         <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default QuizQuestion;
