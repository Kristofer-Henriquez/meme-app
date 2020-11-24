import React, { Component } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefualt();
    console.log("hmmm");
  };

  render() {
    return () => {
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleOnChange}
        />

        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleOnChange}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleOnChange}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleOnChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleOnChange}
        />
        <label>Password Confirmation</label>
        <input
          type="password"
          name="passwordConfirmation"
          value={this.state.passwordConfirmation}
          onChange={this.handleOnChange}
        />
      </form>;
    };
  }
}

export default Login;
