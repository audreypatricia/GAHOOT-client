import React, { Component } from 'react';

class QuizDetails extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      category: '',
      username: ''
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event){
    // this.setState({[event.target.name]: event.target.value })
    this.props.onChange(event);
  }

  _handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.title, this.state.category, this.state.username);
    this.setState({ title: '', category: '', username: ''});
  }

  render() {
    return(
      <form onSubmit={this._handleSubmit}>
        <label>
        Quiz Title:
          <input onChange={this._handleChange} name="title" placeholder="Animal Trivia" />
        </label>
        <label>
        Category:
          <select value={this.state.category} onChange={this._handleChange} name="category">
            <option value="" >--- please select one ---</option>
            <option value="general knowledge">General knowledge</option>
            <option value="education">Education</option>
            <option value="trivia">Trivia</option>
          </select>
        Creator:
          <input onChange={this._handleChange} name="username" placeholder="your username" />

        </label>

      </form>
    );
  }
}
  // <input type="submit"/>

export default QuizDetails;
