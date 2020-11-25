// import logo from "./logo.svg";
import "./App.css";
// import Axios from "axios";
// import Header from "./Header";
// import Login from "./Login";
import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class Main extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
export default Main;


class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home...</h1>
      </div>
    )
  }
}
export default Home;

class About extends React.Component {
  render() {
     return (
        <div>
           <h1>About...</h1>
        </div>
     )
  }
}
export default About;

class Contact extends React.Component {
  render() {
     return (
        <div>
           <h1>Contact...</h1>
        </div>
     )
  }
}
export default Contact;

ReactDOM.render((
  <Router history = {browserHistory}>
     <Route path = "/" component = {App}>
        <IndexRoute component = {Home} />
        <Route path = "home" component = {Home} />
        <Route path = "about" component = {About} />
        <Route path = "contact" component = {Contact} />
     </Route>
  </Router>
), document.getElementById('app'))