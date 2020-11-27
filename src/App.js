// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import React from 'react';
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import ReactDOM from "react-dom";
// import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
// import Home from "./Home";

import Signup from "./Components/Signup";
import Login from "./Components/Login";

import Dashboard from "./Components/Dashboard";

import Navigation from "./Components/Navigation";

import Header from "./Components/Header";
// import Footer from "./Components/Footer";

// import Organizations from './Components/Organizations';
import MemesShow from "./Components/MemesShow";
import MemesNew from "./Components/MemesNew";

// class App extends Component {
//    render() {

export default class App extends Component {
  // constructor() {
  // console.log(ReportsShow);
  // super();

  // this.state = {
  //   user: {},
  // };

  // }

  componentDidMount() {}

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navigation />
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/" />
            </Route>
            <Route path={"/signup"} component={Signup} />
            <Route path={"/login"} component={Login} />
            <Route path={"/dashboard"} component={Dashboard} />
            {/* <Route exact path={'/organizations'} component={Organizations} /> */}

            <Route path={"/memes/:id"} component={MemesShow} />

            {/* <Route path={'/bios-new'} component={BiosNew} />
            <Route path={'/boilerplates-new'} component={BoilerplatesNew} />
            <Route path={'/categories-new'} component={CategoriesNew} />
            <Route path={'/funding_orgs-new'} component={FundingOrgsNew} /> */}
            <Route path={"/memes-new"} component={MemesNew} />
            {/* <Route exact path={"/logout"} component={Logout} /> */}
          </Switch>
        </BrowserRouter>
        {/* <Footer /> */}
      </div>
    );
  }
}

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
