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
      button = 'purple';
    } else if (clicked < 6) {
      button = 'light-purple';
    } else {
      button = 'button';
    }
    return <button className={button} onClick={this.handleClick}>Hot Button</button>;
  }
}

export default HotButton;
