import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      text: 'A password is required',
      button: faXmark,
      color: 'red'
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
    event.preventDefault();
    if (event.target.value.length === 0) {
      this.setState({
        text: 'A password is required',
        button: faXmark,
        color: 'red'
      });
    } else if (event.target.value.length <= 4) {
      this.setState({
        text: 'Your password is too short',
        button: faXmark,
        color: 'red'
      });
    } else {
      this.setState({
        text: '',
        button: faCheck,
        color: 'green'
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handlePasswordChange}>
        <div>
          <label>Password</label>
        </div>
        <input
          type="password"
          name="username"
          value={this.state.password}
          onChange={this.handlePasswordChange} />
        <FontAwesomeIcon icon={this.state.button} className= {`i ${this.state.color}`} />
        <div className={`${this.state.color}`}>{this.state.text}</div>
      </form>
    );
  }
}

export default ValidatedInput;
