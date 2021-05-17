import React, { Component } from 'react'


class PinBox extends Component {
  constructor(){
    super();
    this.state ={
      gamePin: ''
    }
  }

  componentDidMount(){
    const generateGamePin = () => {
        const pin = Math.floor(100000 + Math.random() * 900000);
        console.log(pin);
        this.setState({ gamePin: pin });
      }
      generateGamePin();
  }

  render() {
    return(

      <div className="PinBox">
      <h4> Game Pin: </h4>
      <p> { this.gamePin } </p>
      </div>
    );
  }
}
export default PinBox;
