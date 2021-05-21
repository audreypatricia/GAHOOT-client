import React, { Component } from "react";
import DisplayQuestion from "../DisplayQuestion";
import OptionList from "../OptionList";
import TimeCircle from "../TimeCircle";
import ScoreBoard from "../Scoreboard/scoreboard.js";
import axios from "axios";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

import styled from "styled-components";
import { render } from "react-dom";

class GamePlayPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_id: this.props.quiz_id,
      questions: [],
      roundOver: false,
      player: this.props.user,
      score: 0,
    };

    axios
      .get("https://gahoot-server.herokuapp.com/questions.json")
      .then((result) => {
        console.log(result.data);  let data = result.data;
        let questions = [];
        // console.log(this.state.quiz_id);
        for (let i = 0; i < data.length; i++) {

          if (data[i].quiz_id.toString() === this.state.quiz_id) {
            questions.push(data[i]);
          }
        }

        this.setState({
          questions: questions,
          activeQuestion: 0,
        });
        // console.log(questions);
      });
  }

  updateQuestion = () => {
    this.setState({ roundOver: false });
    this.setState((prevState) => ({
      activeQuestion: prevState.activeQuestion + 1,
    }));
  };

  checkAnswer = (answer) => {
    // console.log(this.props.timeLeft)
    this.setState({ roundOver: true });
    if (
      answer ==
      this.state.questions[this.state.activeQuestion].answer_options[4]
    ) {
      console.log("You were right!");
      axios
        .get(
          `https://gahoot-server.herokuapp.com/users/${this.state.player.id}.json`
        )
        .then((response) => {
          this.setState({ score: response.data.user.score });

          axios.put(
            `https://gahoot-server.herokuapp.com/users/${this.state.player.id}.json`,
            { score: this.state.score + 73 }
          );
        });
    } else {
      console.log("WRONG");
    }
  };

  renderGame = () => {
    // console.log(this.props.startGame);
    if(this.props.startGame === false){
      return <div class="display">"Waiting on "</div>
    }

    if (this.state.activeQuestion === this.state.questions.length) {
      return <div class="display"> <h1>"AND THE WINNER IS..."</h1></div>
    }

    // console.log(this.state.roundOver); //true
    return (
      <React.Fragment>
        <DisplayQuestion
          question={this.state.questions[this.state.activeQuestion].question}
        />
        <TimeCircle duration={10} timeoutFn={this.updateQuestion} />
        <CloudinaryContext cloudName="paulyc">
        <Image className="questionImage" publicId={this.state.questions[this.state.activeQuestion].image}>
          <Transformation
            crop="scale"
            width="300"
            height="100"
            dpr="auto"
            responsive_placeholder="blank"
          />
        </Image>
        </CloudinaryContext>
        <OptionList
          answer_options={
            this.state.questions[this.state.activeQuestion].answer_options
          }
          checkAnswer={this.checkAnswer}
          roundOver={this.state.roundOver}
        />
      </React.Fragment>
    );
  };

  render() {
    if (this.state.questions.length === 0) return <p>...</p>;

    return (
      <div className="gameplay">
        <GameWrapper>{this.renderGame()}</GameWrapper>
      </div>
    );
  }
}

const GameWrapper = styled.div`
  display: grid;
  grid-gap: 1.2rem;
  padding: 2rem;
`;

export default GamePlayPage;
