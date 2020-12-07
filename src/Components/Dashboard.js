import React, { Component } from "react";
import { CurrentUser } from "./CurrentUser";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      user_id: "",
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
