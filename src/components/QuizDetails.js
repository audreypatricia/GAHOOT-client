import React, { Component } from "react";

class QuizDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      username: "",
      user: this.props.user,
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.props.onChange(event);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.state.title,
      this.state.category,
      this.state.username
    );
    this.setState({ title: "", category: "", username: "" });
  }

  render() {
    // console.log(this.state.user);
    return (
      <form className="question" onSubmit={this._handleSubmit}>
        <div className="quizTitle">
          <label> Quiz Title: </label>
          <input
            className="quizDetailInput"
            onChange={this._handleChange}
            name="title"
            placeholder="Animal Trivia"
          />
        </div>

        <div className="category">
          <label> Category: </label>
          <select
            className="quizDetailInput"
            value={this.state.category}
            onChange={this._handleChange}
            name="category"
          >
            <option value="">--- please select one ---</option>
            <option value="general knowledge">General knowledge</option>
            <option value="education">Education</option>
            <option value="trivia">Trivia</option>
          </select>
        </div>

        <div className="hidden">Creator:{this.state.user.id}</div>
      </form>
    );
  }
}

export default QuizDetails;
