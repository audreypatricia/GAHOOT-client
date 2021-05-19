import React, { Component } from 'react';

export default class TimeCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  tick() {
    const { duration, timeoutFn } = this.props;
    if (this.state.seconds === duration) {
      timeoutFn();
      this.setState((prevState) => ({
        seconds: prevState.seconds = 0
      }));
    } else {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { duration } = this.props;
    let timeLeft = duration - this.state.seconds;
    return <span>Time Left: {timeLeft}</span>;
  }
}