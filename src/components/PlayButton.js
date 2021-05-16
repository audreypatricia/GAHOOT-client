import React, { Component } from "react";

class PlayButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [],
    };
    console.log(props);
  }

  _handleQuizSelection = (event) => {
    console.log(event);
    let quiz = event.target.value;
    this.setState({ selectedQuiz: quiz });
  };

  render() {
    return (
      <div>
        {/* <input
          type="button"
          className="QuizSelection"
          key={e.id}
          value={e.title}
        /> */}
      </div>
    );
  }
}
export default PlayButton;
