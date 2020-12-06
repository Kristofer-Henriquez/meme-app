import React, { Component } from 'react';
import {CurrentUser} from './CurrentUser';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      user_id: "",
      // user_id: '',
      // isHidden: true,
      current_user: {},
    };
    this.handleMinimize = this.handleMinimize.bind(this);
  }

  handleMinimize() {
    this.props.history.push("/");
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (

      
      
      <div className="component">
        <button onClick={this.handleMinimize}>Minimize Dashboard</button>

        <CurrentUser />
      </div>
    );
  }
}

export default Dashboard;
