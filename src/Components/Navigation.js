import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleMinimize = this.handleMinimize.bind(this);
  }

  handleMinimize() {
    this.props.history.push("/");
  }

  handleLogoutClick() {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    this.props.history.push("/login");
  }




  render() {
    return (
      <nav>
        <ul>
          {localStorage.token && localStorage.user_id ? (
            <div>
              <li className="active">
                <Link to="/dashboard">My Account</Link>
              </li>
              <li className="active">
                <Link to="/completed">Recent Completed Meme</Link>
              </li>
              <li>
                <Link onClick={this.handleLogoutClick} to="/logout">
                  Logout
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li className="active">
                <Link to="/login">Login</Link>
              </li>
              <li className="active">
                <Link to="/signup">Sign Up</Link>
              </li>
            </div>
          )}
          
        </ul>
        <button onClick={this.handleMinimize}>Minimize Dashboard</button>
        <hr></hr>
      </nav>
    );
  }
}


export default withRouter(Navigation);
