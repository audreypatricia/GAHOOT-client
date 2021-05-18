// import React, { Component } from 'react';

// export default class DisplayQuestion extends Component {
//   render() {
//     console.log(this.props.questions)
//     return(
//       <div>
      
//         { this.props.questions.map( (question, index) =>
//         <div className="question" key={index}>
//           <h1>{question.question}</h1>
//           <button value="0">{question.answer_options[0]}</button>
//           <button value="1">{question.answer_options[1]}</button>
//           <button value="2">{question.answer_options[2]}</button>
//           <button value="3">{question.answer_options[3]}</button>
//         </div>)}

//       </div>
//     );
//   }
// }
import React from "react";

const DisplayQuestion = ({ question, checkAnswer }) => <h1>{question}</h1>;

export default DisplayQuestion;
