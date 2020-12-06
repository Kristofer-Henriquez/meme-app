// import React from "react";
// import CurrentUser from './CurrentUser';

// import Login from './Components/Login';


import React, { Component } from "react";
// import { Link, withRouter } from "react-router-dom";
import axios from "axios";
// import OrganizationUser from './OrganizationUser';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";




export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user_id: "",
      // show: false,
      // user_id: '',
      // isHidden: true,
      current_user: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMinimize = this.handleMinimize.bind(this);
  }

  handleMinimize() {
    this.props.history.push("/");
  }

  componentDidMount() {
    axios
      .get("/api/users/" + localStorage.user_id, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      })
      .then((response) => {
        this.setState({
          // id: response.data.id,
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

  

  handleClick() {
    console.log("I was clicked")
  }

  doStuff(){
    this.stuff = "Bander TEST";
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    axios
      .post(
        "/api/sessions",
        {
          email: email,
          password: password,
        }
        // { withCredentials: true }
      )

      .then((response) => {
        if (response.data.jwt) {
          localStorage.setItem("token", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.props.history.push("/dashboard");
          // this.props.history.push('/meme')
        }
      })
      .catch((error) => {
        // this.setState({
        //  errorMessage: error.response.data.message,
        // });
        console.log(error.response.status);
        console.log(error.response);
      });
    event.preventDefault();
  }

  handleEdit(event) {
    const { first_name, last_name, email, username } = this.state;
    axios
      .patch(
        "/api/users/" + localStorage.user_id,
        {
          // id: id,
          username: username,

          first_name: first_name,
          last_name: last_name,
          email: email,
        },
        { headers: { Authorization: `Bearer ${localStorage.token}` } }
      )
      .then((response) => this.toggleHidden())
      .catch((error) => {
        console.log("user update error", error);
      });
    event.preventDefault();
  }

  render() {
    return (

      <div>
          
  

        <h1>{this.state.user_id}</h1>
      
        


      </div>
    );
  }
}
