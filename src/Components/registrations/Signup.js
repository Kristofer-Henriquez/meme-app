import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
  handleSubmit = (event) => {
    event.preventDefault()
    const {first_name, last_name, username, email, password, password_confirmation} = this.state
    let user = {
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
  axios.post('http://localhost:3000/api/signup', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
  redirect = () => {
    this.props.history.push('/')
  }
  handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}</ul> 
      </div>
    )
  }
  render() {
    const {first_name, last_name, username, email, password, password_confirmation} = this.state
  return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
        <input
            placeholder="First Name"
            type="text"
            name="first_name"
            value={first_name}
            onChange={this.handleChange}
          />          
          <input
            placeholder="Last Name"
            type="text"
            name="last_name"
            value={last_name}
            onChange={this.handleChange}
          />
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
        
          <button placeholder="submit" type="submit">
            Sign Up
          </button>

          <div>
            Or <Link to='/login'>log in</Link>
          </div>
      
        </form>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}
export default Signup;




// import React from "react";


// function Signup() {
//   return (
//     <div>
//       <h3>Signup Section:</h3>
//       <p>Username: ____________</p>
//       <p>Password: ____________</p>
//     </div>
//   )
// }


// export default Signup;
