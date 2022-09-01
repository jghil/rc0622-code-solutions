import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const clicked = this.state.isClicked;
    if (clicked) {
      return <button>Come again!</button>;
    } else {
      return <button onClick={this.handleClick}>Welcome!</button>;
    }
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
