import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    const clicked = this.state.clickCount;
    let button = '';
    if (clicked < 3) {
      button = 'button';
    } else if (clicked < 6) {
      button = 'button purple';
    } else if (clicked < 9) {
      button = 'button light-purple';
    } else if (clicked < 12) {
      button = 'button pink';
    } else if (clicked < 15) {
      button = 'button orange';
    } else if (clicked < 18) {
      button = 'button yellow';
    } else if (clicked < 21) {
      button = 'button white';
    } else {
      button = 'button';
    }
    return <button className={button} onClick={this.handleClick}>Hot Button</button>;
  }
}

export default HotButton;
