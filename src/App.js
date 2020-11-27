// import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
import React, { Component } from 'react';
// import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import ReactDOM from "react-dom";
// import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
// import Home from "./Home";

import Signup from './Components/Signup';
import Login from './Components/Login';

import Dashboard from './Components/Dashboard';

import Navigation from './Components/Navigation';

import Header from "./Components/Header";
// import MemeGenerator from "./Components/MemeGenerator";
import MemeCreate from "./Components/MemeCreate";
import Footer from "./Components/Footer";

// import Organizations from './Components/Organizations';
// import OrganizationsShow from './Components/OrganizationsShow';
// import OrganizationsNew from './Components/OrganizationsNew';

// class App extends Component {
//    render() {



// Roughcut V2v
export default class App extends Component {
  constructor( props ) {
  //   console.log(ReportsShow);
    super( props );

    this.state = {show : false};
    this.showHide = this.showHide.bind(this)
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
            <Route path={'/signup'} component={Signup} />
            <Route path={'/login'} component={Login} />
            <Route path={'/dashboard'} component={Dashboard}/>
          </Switch>
        </BrowserRouter>
        <Header />
        <button style={{color: 'black', backgroundColor: 'lightgrey', marginTop: 10, padding: 10, borderColor: 'black'}} onClick={this.showHide}
        className="button-primary btn"
        >{this.changeName()}
        </button>
        { this.state.show && 
          <div>
            <MemeCreate /> 
          </div>
        }
         
        <Footer />
      </div>
    );
  }
  changeName(){
    let text = "Pick a template "
    text += this.state.show === true ? "hide" : "show";
    return text;
}
  showHide(){
    const { show } = this.state;
    this.setState( { show : !show})
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