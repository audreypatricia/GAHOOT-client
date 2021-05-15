import React, { Component } from 'react'

class PlayButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      quiz: []
    }
    console.log(props)
  }

  const _handleQuizSelection = (event) => {
    console.log(event);
    let quiz = event.target.value
    this.setState({selectedQuiz: quiz });
  }

  render(){
    return(
    <input type="button" className='QuizSelection' key={ e.id }  value={e.title} />
    )
  }
}
export default PlayButton
