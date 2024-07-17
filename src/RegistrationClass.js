import React, { Component } from 'react';

class RegistrationClass extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="registration-form">
        <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationClass;
