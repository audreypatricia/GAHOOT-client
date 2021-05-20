import React, { Component } from 'react';
import {Link} from "react-router-dom";

class CreateQuizButton extends Component {
  render() {
    return(
      <div className="CreateQuizButton">
      <Link to='/quiz-create'><button>Create Quiz</button></Link>
      </div>
    );
  }
}

export default CreateQuizButton;
