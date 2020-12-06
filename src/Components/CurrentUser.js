import React, { Component } from "react";
import axios from "axios";
// import OrganizationUser from './OrganizationUser';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class CurrentUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      user_id: "",
      // user_id: '',
      // isHidden: true,
      current_user: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <h1>Welcome to your Dashboard, {this.state.first_name}!</h1>
        <h1>Account Info:</h1>
        <br />
        <h1>User ID: {this.state.user_id}</h1>
        <h1>
          Name: {this.state.first_name} {this.state.last_name}
        </h1>
        <h1>Username: {this.state.username}</h1>
        <h1>Email: {this.state.email}</h1>
        

        <div>
          {this.state.isHidden ? (
            <Button onClick={this.toggleHidden.bind(this)}>
              Close
            </Button>
          ) : (
            <Button onClick={this.toggleHidden.bind(this)}>
              Update Account
            </Button>
          )}
          
          <br />
          <br />
          {this.state.isHidden ? (
            <div>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.first_name}
                    name="first_name"
                    placeholder={this.state.first_name}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.last_name}
                    name="last_name"
                    placeholder={this.state.last_name}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.email}
                    name="email"
                    placeholder={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.username}
                    name="username"
                    placeholder={this.state.username}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <div className="text-center">
                  <Button type="submit">Submit</Button>
                </div>
              </Form>
              <br />
              {/* <button
                onClick={() => this.handleUserDelete()}
                className="btn btn-danger">
                Delete Account
              </button> */}
            </div>
          ) : null}
        </div>

        <br />
      </div>
    );
  }
}

export default CurrentUser;
