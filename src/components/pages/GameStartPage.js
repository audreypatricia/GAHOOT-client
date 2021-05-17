import React, { Component } from 'react';
import PinBox from '../PinBox/PinBox'

class GameStartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
          <div>
          <h1>Game start</h1>
          <PinBox />
          </div> );
    }
}

export default GameStartPage;
