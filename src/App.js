// import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import ReactDOM from "react-dom";
// import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
// import Home from "./Home";
import Header from "./Components/Header";
import Login from "./Components/Login";

// class App extends Component {
//    render() {
function App() {
  return (
    <div>
      <Header />
      <Login />
    </div>
  )
}
export default App;

// function App() {
//   return <p>Hii</p>;
// }
// export default App