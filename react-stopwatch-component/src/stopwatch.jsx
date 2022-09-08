import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      time: 0,
      button: faPlay
    };
    this.handleClick = this.handleClick.bind(this);
    this.timer = this.timer.bind(this);
    this.reset = this.reset.bind(this);
  }

  timer() {
    this.interval = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);
  }

  reset() {
    if (this.state.clickCount % 2 === 0) {
      this.setState({
        time: 0
      });
    }
  }

  handleClick() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
    if (this.state.clickCount % 2 === 1) {
      clearInterval(this.interval);
    } else {
      this.timer();
    }
  }

  render() {
    const clicked = this.state.clickCount;
    let button = '';
    if (clicked % 2 === 0) {
      button = faPlay;
    } else {
      button = faPause;
    }
    return (
      <div className='row'>
        <div onClick={this.reset} className="row circle pointer">{this.state.time}</div>
        <FontAwesomeIcon icon={button} className="i" onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Stopwatch;
