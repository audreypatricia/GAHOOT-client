import React, { Component } from "react";

class Question extends Component {
  constructor() {
    super();
    this.state = {
      questionItem: {
        question: "",
        image: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "",
      },
    };
    this._handleChange = this._handleChange.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  _handleChange(event) {
    this.props.onChange(event, this.props.value);
  }

  _onChange(event) {
    this.props.onUpload(event, this.props.value);
  }

  render() {
    return (
      <div className="question">
        <label>Question {this.props.value}:</label>
        <input
          className="insertQuestion"
          onChange={this._handleChange}
          name="question"
          placeholder="What is 1 + 1?"
          required
        />

        <br />

        <label className="imageUploadLabel">Image Upload</label>
        <div className="imageUpload">
          <input type="file" name="image" onChange={this._onChange} required/>
        </div>
        <br />

        <div className="answer_options">
          <div className="options_left">
            <div className="option_div">
              <input
                className="option opt-1"
                onChange={this._handleChange}
                name="option1"
                placeholder="answer option"
              />
              <input
                className="radio"
                type="radio"
                onChange={this._handleChange}
                value="0"
                name={`answer${this.props.value}`}
              />
            </div>

            <div className="option_div">
              <input
                className="option opt-2"
                onChange={this._handleChange}
                name="option2"
                placeholder="answer option"
              />
              <input
                className="radio"
                type="radio"
                onChange={this._handleChange}
                value="1"
                name={`answer${this.props.value}`}
              />
            </div>
          </div>

          <div className="options_right">
            <div className="option_div">
              <input
                className="option opt-3"
                onChange={this._handleChange}
                name="option3"
                placeholder="answer option"
              />
              <input
                className="radio"
                type="radio"
                onChange={this._handleChange}
                value="2"
                name={`answer${this.props.value}`}
              />
            </div>

            <div className="option_div">
              <input
                className="option opt-4"
                onChange={this._handleChange}
                name="option4"
                placeholder="answer option"
              />
              <input
                className="radio"
                type="radio"
                onChange={this._handleChange}
                value="3"
                name={`answer${this.props.value}`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
