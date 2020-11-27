// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import React from 'react';
<<<<<<< HEAD
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
=======
import React, { Component } from 'react';
// import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
>>>>>>> cf3e9da512f807a461b5ee8c891a4857ee6999e5
// import ReactDOM from "react-dom";
// import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
// import Home from "./Home";

import Signup from "./Components/Signup";
import Login from "./Components/Login";

import Dashboard from "./Components/Dashboard";

import Navigation from "./Components/Navigation";

import Header from "./Components/Header";
<<<<<<< HEAD
// import Footer from "./Components/Footer";
=======
// import MemeGenerator from "./Components/MemeGenerator";
import MemeCreate from "./Components/MemeCreate";
import Footer from "./Components/Footer";
>>>>>>> cf3e9da512f807a461b5ee8c891a4857ee6999e5

// import Organizations from './Components/Organizations';
import MemesShow from "./Components/MemesShow";
import MemesNew from "./Components/MemesNew";

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
<<<<<<< HEAD
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
=======
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
>>>>>>> cf3e9da512f807a461b5ee8c891a4857ee6999e5
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
<<<<<<< HEAD
=======
// Roughcut V2^
  

>>>>>>> cf3e9da512f807a461b5ee8c891a4857ee6999e5

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
