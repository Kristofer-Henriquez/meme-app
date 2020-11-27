import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
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
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <li className="active">
                <Link to="/memes">Memes</Link>
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
      </nav>
    );
  }
}

export default withRouter(Navigation);
