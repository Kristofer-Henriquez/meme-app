import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import OrganizationsNew from './OrganizationsNew';
import Card from 'react-bootstrap/Card';

class Organizations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      organizations: [],
      query: '',
    };
  }
  componentDidMount() {
    axios
      .get('/api/sessions',
        {headers: { Authorization: `Bearer ${localStorage.token}` }})
      .then((response) => {
        this.setState({
          organizations: response.data,
          loading: false,
        });
      console.log(response.data);
      })
      .catch((error) => console.log(error));
  }

  updateOrganizations = (newOrganization) => {
    const organizations = this.state.organizations;
    organizations.push(newOrganization);
    this.setState({
      organizations: organizations,
    });
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading....</h1>;
    };

    return (
      <div className="component">
        {this.state.organizations.map((organization) => {
          return (
            <Card key={organization.id}>
              <Card.Header>
                Name: 
                <Link
                    to={`/organizations/${organization.id}`}
                  >
                    {organization.name}
                  </Link>
              </Card.Header>
            </Card>
          );
        })}

        <br />
        <h3>Add An Organization</h3>
        <OrganizationsNew 
          updateOrganizations={this.updateOrganizations}
        />
      </div>
    );
  }
}

export default Organizations;