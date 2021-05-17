import React, { Component } from 'react';

class DisplayQuestion extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.questions.question}</h1>

        <img alt="coming soon"/>

        <div className="answer_options">
          <div className="options_left">

            <div className="option_div">
              <button value="0">answer option 1</button>
            </div>

            <div className="option_div">
              <button value="1">answer option 2</button>
            </div>

          </div>

          <div className="options_right">

            <div className="option_div">
              <button value="2">answer option 3</button>
            </div>

            <div className="option_div">
              <button value="3">answer option 4</button>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default DisplayQuestion;
