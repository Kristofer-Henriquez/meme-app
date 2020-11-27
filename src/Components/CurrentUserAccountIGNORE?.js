const { default: CurrentUser } = require("./CurrentUser")

// Extended CurrentUser.js return H1


<div>
          {this.state.isHidden ? 
            <Button onClick={this.toggleHidden.bind(this)}>
              Update Account Info
            </Button> :
            <Button
              onClick={this.toggleHidden.bind(this)}
            >
              Close
            </Button>
          }
          
          <br />
          <br />
          {!this.state.isHidden ? (
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
                <div className="text-center">
                  <Button type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
              <br />
              {/* <button
                onClick={() => this.handleUserDelete()}
                className="btn btn-danger">
                Delete Account
              </button> */}
            </div>
            
          )
          : null}
        </div>