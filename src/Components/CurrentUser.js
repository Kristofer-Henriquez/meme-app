<<<<<<< HEAD
import React, { Component } from "react";
import axios from "axios";
import OrganizationUser from "./OrganizationUser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
=======
import React, { Component } from 'react';
import axios from 'axios';
// import OrganizationUser from './OrganizationUser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

>>>>>>> cf3e9da512f807a461b5ee8c891a4857ee6999e5

class CurrentUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      first_name: "",
      last_name: "",
      email: "",
      isHidden: true,
      organization_users: [],
=======
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      // user_id: '',
      // isHidden: true,
      current_user: {}
  
>>>>>>> cf3e9da512f807a461b5ee8c891a4857ee6999e5
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
<<<<<<< HEAD
      .get("/api/sessions" + localStorage.user_id, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      })
=======
      .get('/api/users/1' + localStorage.user_id, 
        {headers: { Authorization: `Bearer ${localStorage.token}` }})
>>>>>>> cf3e9da512f807a461b5ee8c891a4857ee6999e5
      .then((response) => {
        this.setState({
          id: response.data.id,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          username: response.data.username,
          current_user: response.data.current_user
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

<<<<<<< HEAD
  updateOrganizationUsers = (newOrganizationUser) => {
    const organization_users = this.state.organization_users;
    organization_users.push(newOrganizationUser);
    this.setState({
      organization_users: organization_users,
    });
  };
=======
  // updateOrganizationUsers = (newOrganizationUser) => {
	// 	const organization_users = this.state.organization_users;
	// 	organization_users.push(newOrganizationUser);
	// 	this.setState({
	// 		organization_users: organization_users
	// 	});
	// };
>>>>>>> cf3e9da512f807a461b5ee8c891a4857ee6999e5

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
    const { first_name, last_name, email, username, id } = this.state;
    axios
      .patch(
<<<<<<< HEAD
        "/api/users/" + localStorage.user_id,
=======
        '/api/users/1' + localStorage.user_id,
>>>>>>> cf3e9da512f807a461b5ee8c891a4857ee6999e5
        {
          id: id,
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
        <h1>Name: {this.state.first_name} {this.state.last_name}</h1>
        <h1>Username: {this.state.username}</h1>
        <h1>Email: {this.state.email}</h1>
        <h1>User ID:{this.state.id}</h1>
        
        <div>
<<<<<<< HEAD
          <h2>Here are your current Memes: </h2>
          {this.state.organization_users.map((organization_user) => {
            return (
              <div key={organization_user.organization_id}>
                <h4>{organization_user.organization_name}</h4>
              </div>
            );
          })}
        </div>
        <div>
          {this.state.isHidden ? (
            <Button onClick={this.toggleHidden.bind(this)}>
              Update Account Info
            </Button>
          ) : (
            <Button onClick={this.toggleHidden.bind(this)}>Close</Button>
          )}
=======
          {this.state.isHidden ? (
            <Button onClick={this.toggleHidden.bind(this)}>
              Close
            </Button> :
            <Button
              onClick={this.toggleHidden.bind(this)}
            >
              Edit Account Info
            </Button>
          }
          
>>>>>>> cf3e9da512f807a461b5ee8c891a4857ee6999e5
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
<<<<<<< HEAD
          ) : null}
        </div>
=======
            
          )
          : null}
        </div>

        <br />
        {/* <h3>Add Your Organizations</h3>
        <OrganizationUser 
          updateOrganizationUsers={this.updateOrganizationUsers} 
        /> */}
>>>>>>> cf3e9da512f807a461b5ee8c891a4857ee6999e5
      </div>
    );
  }
}

export default CurrentUser;
