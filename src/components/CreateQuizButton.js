import React, { Component } from 'react';
import {Link} from "react-router-dom";

class CreateQuizButton extends Component {
  render() {
    return(
      <Link to='/quiz-create'>Click Me</Link>
    );
  }
}

export default CreateQuizButton;
