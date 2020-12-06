// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import React from 'react';
import React, { Component } from "react";
// import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import ReactDOM from "react-dom";
// import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
// import Home from "./Home";
import axios from "axios";

import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Dashboard from "./Components/Dashboard";

import Navigation from "./Components/Navigation";

// import MemeGenerator from "./Components/MemeGenerator";
import MemeCreate from "./Components/MemeCreate";
import MemeData from "./Components/MemeData";

// import MemesShow from "./Components/MemesShow";
// import MemesNew from "./Components/MemesNew";

// class App extends Component {
//    render() {

// Roughcut V2v
export default class App extends Component {
  constructor(props) {
    //   console.log(ReportsShow);
    super(props);

    this.state = {
      show: false,
      show2: false,
    };

    this.showHide = this.showHide.bind(this);
    this.showHide2 = this.showHide2.bind(this);
    //     user: {},
    //   };

    // }
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
            <MemeCreate />
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
        <Footer />
      </div>
    );
  }
  changeName() {
    let text = "Pick a template ";
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
// Roughcut V2^

// function App() {
//   return (
//     <div>
//       <Header />
//       <Login />
//     </div>
//   )
// }
// export default App;

// function App() {
//   return <p>Hii</p>;
// }
// export default App
