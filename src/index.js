import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';


axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
 ? "http://localhost:3000" : "/";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();