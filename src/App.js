// import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import ReactDOM from "react-dom";
// import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
// import Home from "./Home";

import Signup from './Components/Signup';
import Login from './Components/Login';

import Dashboard from './Components/Dashboard';

import Navigation from './Components/Navigation';

import Header from "./Components/Header";
import MemeGenerator from "./Components/MemeGenerator";
import Footer from "./Components/Footer";

// import Organizations from './Components/Organizations';
// import OrganizationsShow from './Components/OrganizationsShow';
// import OrganizationsNew from './Components/OrganizationsNew';

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

  componentDidMount() {
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
            {/* <Route exact path={'/grants'} component={Grants} /> */}
            {/* <Route path={'/grants/:id'} component={GrantsShow} /> */}
            {/* <Route path={'/grants-finalize/:id'} component={GrantsFinalizeShow} /> */}
            {/* <Route path={'/grants-new'} component={GrantsNew} /> */}
            {/* <Route path={'/sections-new'} component={SectionsNew} /> */}
            
            {/* <Route path={'/reports/:id'} component={ReportsShow}/> */}
            {/* <Route path={'/reports-finalize/:id'} component={ReportsFinalizeShow}/> */}
              
            {/* <Route path={'/reports-new'} component={ReportsNew} /> */}
            {/* <Route exact path={'/categories'} component={Categories} /> */}
            {/* <Route exact path={'/organizations'} component={Organizations} /> */}
            {/* <Route exact path={'/funding_orgs'} component={FundingOrgs} /> */}
            {/* <Route exact path={'/bios'} component={Bios} /> */}
            {/* <Route path={'/bios/:id'} component={BiosShow} /> */}
            {/* <Route exact path={'/boilerplates'} component={Boilerplates} /> */}
            {/* <Route path={'/boilerplates/:id'} component={BoilerplatesShow} /> */}
            {/* <Route path={'/categories/:id'} component={CategoriesShow} /> */}
            {/* <Route path={'/funding_orgs/:id'} component={FundingOrgsShow} /> */}
            {/* <Route path={'/organizations/:id'} component={OrganizationsShow} /> */}

            {/* <Route path={'/bios-new'} component={BiosNew} />
            <Route path={'/boilerplates-new'} component={BoilerplatesNew} />
            <Route path={'/categories-new'} component={CategoriesNew} />
            <Route path={'/funding_orgs-new'} component={FundingOrgsNew} /> */}
            {/* <Route path={'/organizations-new'} component={OrganizationsNew} /> */}
            {/* <Route
              exact path={"/logout"} component={Logout}
            /> */}
          </Switch>
        </BrowserRouter>
        <Header />
        <MemeGenerator />
        <Footer />
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