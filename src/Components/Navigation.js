import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };

    this.showHide = this.showHide.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleMinimize = this.handleMinimize.bind(this);
  }

  handleMinimize() {
    this.props.history.push("/");
  }

  handleLogoutClick() {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    this.props.history.push("/login");
  }

  render() {
    return (
      // <Navbar bg="light" variant="light">
      //   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      //   <Nav className="mr-auto">
      //     <Nav.Link href="#home">Home</Nav.Link>
      //     <Nav.Link href="#features">Features</Nav.Link>
      //     <Nav.Link href="#pricing">Pricing</Nav.Link>
      //   </Nav>
      //   <Form inline>
      //     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      //     <Button variant="outline-primary">Search</Button>
      //   </Form>
      // </Navbar>
      <nav>
        <ul>
          {localStorage.token && localStorage.user_id ? (
            <div>
              <li className="active">
                <Link to="/dashboard">My Account</Link>
              </li>
              <li className="active">
                <Link to="/completed">Recent Completed Meme</Link>
              </li>
              <li>
                <Link onClick={this.handleLogoutClick} to="/logout">
                  Logout
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li className="active">
                <Link to="/login">Login</Link>
              </li>
              <li className="active">
                <Link to="/signup">Sign Up</Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    );
  }

  showHide() {
    const { show } = this.state;
    this.setState({ show: !show });
  }
}

export default withRouter(Navigation);
