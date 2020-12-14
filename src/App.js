// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Navigation from "./Components/Navigation";
import FullStack from "./Components/FullStack";
import MemeData from "./Components/MemeData";

export default class App extends Component {
  constructor(props) {
    //   console.log(ReportsShow);
    super(props);

    this.state = {
      show: false,
      show2: false,
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      user_id: "",

      current_user: {},
    };

    this.showHide = this.showHide.bind(this);
    this.showHide2 = this.showHide2.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/users/" + localStorage.user_id, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      })
      .then((response) => {
        this.setState({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          username: response.data.username,
          user_id: response.data.id,
          current_user: response.data.current_user,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Redirect to="/" />
            </Route>
            <Route path={"/signup"} component={Signup} />
            <Route path={"/login"} component={Login} />
            <Route path={"/dashboard"} component={Dashboard} />
          </Switch>
        </BrowserRouter>
        <Header />
        <hr></hr>
        <h1>Here is your workspace {this.state.first_name}: </h1>
        <hr></hr>
        <button
          style={{
            color: "black",
            backgroundColor: "lightgrey",
            marginTop: 10,
            padding: 10,
            borderColor: "black",
          }}
          onClick={this.showHide}
          className="button-primary btn"
        >
          {this.changeName()}
        </button>
        {this.state.show && (
          <div>
            <FullStack />
          </div>
        )}

        <hr></hr>

        <button
          style={{
            color: "black",
            backgroundColor: "lightgrey",
            marginTop: 10,
            padding: 10,
            borderColor: "black",
          }}
          onClick={this.showHide2}
          className="button-primary btn"
        >
          {this.changeName2()}
        </button>
        {this.state.show2 && (
          <div>
            <MemeData />
          </div>
        )}
      </div>
    );
  }
  changeName() {
    let text = "Start an empty template ";
    text += this.state.show === true ? "hide" : "show";
    return text;
  }
  changeName2() {
    let text = "User Created Memes ";
    text += this.state.show2 === true ? "hide" : "show";
    return text;
  }
  showHide() {
    const { show } = this.state;
    this.setState({ show: !show });
  }
  showHide2() {
    const { show2 } = this.state;
    this.setState({ show2: !show2 });
  }
}
