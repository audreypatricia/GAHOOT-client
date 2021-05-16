import React, { Component } from 'react';

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
    }
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event){
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value});
  }

  render() {
    return(
      <div>
        <form>

          <label>
            Question:
            <input onChange={this._handleChange} name="question" placeholder="What is 1 + 1?" />
          </label>

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
        </form>
      </div>
    );
  }
}

export default QuizQuestion;
