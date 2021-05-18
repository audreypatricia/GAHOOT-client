import React, { Component } from "react";
import styled from "styled-components";

const OptionsListWrapper = styled.div`
  display: grid;
  grid-gap: 1.2rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
`;

const OptionsButton = styled.button`
  align-items: center;
  border: 3px solid black;
  background: blue;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 2.2rem;
  font-weight: bold;
  min-height: 10rem;
  width: 100%;
`;

// const OptionList = ({ answer_options, checkAnswer }) => (
//   <OptionsListWrapper>
//     {answer_options.slice(0,-1).map((option,index) => (
//       <OptionsButton onClick={() => checkAnswer(index)} {}>{option}</OptionsButton>
//     ))}
//   </OptionsListWrapper>
// );

class OptionList extends Component {
  constructor(props){
    super(props);
    this.state = {
  
    }
  }
  render(){
    console.log(this.state.roundOver);
    return(
      <OptionsListWrapper>
        {this.props.answer_options.slice(0,-1).map((option,index) => (
          <OptionsButton
            onClick={() => this.props.checkAnswer(index)}>
            {option}
          </OptionsButton>
        ))}
      </OptionsListWrapper>
    );
  }
}

export default OptionList;
