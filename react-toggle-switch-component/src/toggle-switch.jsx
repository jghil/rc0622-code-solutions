import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  render() {
    const clicked = this.state.clickCount;
    let button = '';
    let container = '';
    let text = '';
    let position = '';
    if (clicked % 2 === 1) {
      button = 'on-switch';
      container = 'on-container';
      text = 'ON';
      position = 'right';
    } else if (clicked % 2 === 0) {
      button = 'off-switch';
      container = 'off-container';
      text = 'OFF';
      position = 'left';
    }
    return (
    <div className={container} onClick={this.handleClick}>
      <div className={button}></div>
        <div className={position}>{text}</div>
    </div>
    );
  }
}

export default ToggleSwitch;
